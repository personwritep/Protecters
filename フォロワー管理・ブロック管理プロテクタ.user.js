// ==UserScript==
// @name        フォロワー管理・ブロック管理 プロテクタ 🔵
// @namespace        http://tampermonkey.net/
// @version        0.4
// @description        フォロワー管理・ブロック管理でユーザーID・ブログ名をプロテクトする 「Ctrl+F1」
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/reader/readerlist.do
// @match        https://blog.ameba.jp/block
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameba.jp
// @grant        none
// @updateURL        https://github.com/personwritep/Protecters/raw/main/フォロワー管理・ブロック管理プロテクタ.user.js
// @downloadURL        https://github.com/personwritep/Protecters/raw/main/フォロワー管理・ブロック管理プロテクタ.user.js
// ==/UserScript==


let date=new Date();
let shift1=date.getHours()+1; // 1～24のランダム値
let shift2=shift1%9 +1; // 1～9のランダム値


let target=document.querySelector('head');
let monitor=new MutationObserver( catch_key );
monitor.observe(target, {childList: true}); // ショートカット待受け開始

catch_key();

function catch_key(){
    document.addEventListener('keydown', (event)=>{
        if(event.ctrlKey && event.keyCode==112){ // ショートカット「Ctrl+F1」
            event.stopImmediatePropagation();
            event.preventDefault();
            main(); }}, false);
} // catch_key()



let n=1; // ショートカット毎に更新する値


function main(){
    alert("💢 ユーザーIDプロテクタ が処理を実行します");
    change_id_shift(n);
    change_block_id_shift(n)
    change_block_name();


    function change_id_shift(x){
        let name=document.querySelectorAll('.name');
        for(let k=0; k<name.length; k++){
            let name_link=name[k].querySelector('a');
            name_link.textContent=disguise(name_link.textContent, x); }}



    function change_block_id_shift(x){
        let block_id=document.querySelectorAll('.BlogWebBlock-module__6DSusa__status > span:last-child');
        for(let k=0; k<block_id.length; k++){
            block_id[k].textContent=disguise(block_id[k].textContent, x); }}


    function change_block_name(){
        let block_name=document.querySelectorAll('.BlogWebBlock-module__6DSusa__blog-title');
        for(let k=0; k<block_name.length; k++){
            block_name[k].textContent=stir(block_name[k].textContent, shift1, shift2); }}



    function disguise(str, xx){
        let str_=str.split('');
        for(let k=0; k<str_.length; k++){
            let ASCII=str_[k].charCodeAt();
            if(ASCII==45){ //「-」の場合
                ASCII=101; } //「e」に変換
            else if(ASCII>47 && ASCII<58){ //「0～9」の場合 48～57
                ASCII=(ASCII + xx -48)%10 +48; } // 半角数字をxxシフト
            else{ //「a-z」の場合 97～122
                ASCII=(ASCII + xx -97)%26 + 97; } // 半角英小文字をxxシフト
            str_[k]=String.fromCharCode(ASCII); }

        return str_.join(''); }



    function stir(str, shift1, shift2){
        let ch=str.split('');
        for(let i=0; i<ch.length; i++){
            let alph=/[a-z]/;
            let alph_=/[A-Z]/;
            let num=/[0-9]/;
            let zen=/^[\p{scx=Hiragana}\p{scx=Katakana}\p{scx=Han}]+$/u;

            let ch_code;
            let n_ch_code;

            if(alph.test(ch[i])){
                ch_code=ch[i].charCodeAt(0); // 97～122
                if(ch_code+shift1>122){
                    n_ch_code=ch_code+shift1-26; }
                else{
                    n_ch_code=ch_code+shift1; }
                ch[i]=String.fromCharCode(n_ch_code); }

            if(alph_.test(ch[i])){
                ch_code=ch[i].charCodeAt(0); // 65～90
                if(ch_code+shift1>90){
                    n_ch_code=ch_code+shift1-26; }
                else{
                    n_ch_code=ch_code+shift1; }
                ch[i]=String.fromCharCode(n_ch_code); }

            if(num.test(ch[i])){
                ch_code=ch[i].charCodeAt(0); // 48～57
                if(ch_code+shift2>57){
                    n_ch_code=ch_code+shift2-10; }
                else{
                    n_ch_code=ch_code+shift2; }
                ch[i]=String.fromCharCode(n_ch_code); }

            if(zen.test(ch[i])){
                ch_code=ch[i].codePointAt(0); // unicode
                n_ch_code=ch_code+shift2;
                ch[i]=String.fromCodePoint(n_ch_code); }}

        return ch.join('');

    } //stir();
} // main()
