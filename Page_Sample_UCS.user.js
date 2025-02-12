// ==UserScript==
// @name        Page Sample UCS 🔵
// @namespace        http://tampermonkey.net/
// @version        0.8
// @description        「ブログ管理画面」のプレゼンテーション「Ctrl+F2」
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/Protecters/raw/main/Page_Sample_UCS.user.js
// @downloadURL        https://github.com/personwritep/Protecters/raw/main/Page_Sample_UCS.user.js
// ==/UserScript==


let target=document.querySelector('head');
let monitor=new MutationObserver( catch_key );
monitor.observe(target, {childList: true}); // ショートカット待受け開始

catch_key();


function catch_key(){
    document.addEventListener('keydown', check_key);

    function check_key(event){
        let gate=-1;
        if(event.ctrlKey==true){
            if(event.keyCode==113){ // ショートカット「Ctrl+F2」
                event.preventDefault(); gate=1; }
            if(gate==1){
                event.stopImmediatePropagation();
                main(); }}}

} // catch_key()



function main(){
    alert("💢 Page Sample UCS が処理を実行します");

    // アバターのURLを設定
    let Avatar=
        'https://stat.profile.ameba.jp/profile_images/'+
        '20200605/08/63/tB/p/o03000300p_1591312706303_fbxee.png?cat=120';

    // 管理ヘッダー ユーザー名表示
    let header_amebaId=document.querySelector('#gHeaderRight .amebaId');
    if(header_amebaId){
        header_amebaId.textContent='Ameblo User'; }

    // 管理トップ　ユーザーアイコン
    let user_profileImage=document.querySelector('.user__profileImage');
    if(user_profileImage){
        user_profileImage.setAttribute('src', Avatar); }

    // 管理トップ　ブログタイトル名
    let user_blogTitle=document.querySelector('.user__blogTitle');
    if(user_blogTitle){
        user_blogTitle.textContent='Ameba Blog Sample'; }

    // コメント管理　コメントユーザー名の書換
    let path_name=location.pathname;
    if(path_name.includes('comment/commentlist')){ //「コメント管理」画面
        nickname_set(); }

} // main()



function nickname_set(){
    alert("🔴 ブログ主のコメントの1個をクリックしてください\n"+
          "　　コメントユーザー名を「Ameblo User」に変更します");

    let userL_i=document.querySelectorAll('.userList__item');
    for(let k=0; k<userL_i.length; k++){
        userL_i[k].onclick=()=>{
            let nameLink=userL_i[k].querySelector('.userList__nameLink');
            let user_img=userL_i[k].querySelector('.userList__thumbnail');
            if(nameLink && user_img){
                let user_name=nameLink.textContent;
                let user_img_src=user_img.getAttribute('src');
                if(user_name && user_img_src){
                    rewite_comm_user(user_name, user_img_src); }}}}

    function rewite_comm_user(name, img_src){
        let userL_i=document.querySelectorAll('.userList__item');
        for(let k=0; k<userL_i.length; k++){
            let userL_name=userL_i[k].querySelector('.userList__nameLink');
            let user_img=userL_i[k].querySelector('.userList__thumbnail');
            if(userL_name.textContent==name){
                userL_name.textContent='Ameblo User';
                user_img.setAttribute('src', img_src); }
            else{
                userL_name.textContent='Comment User '+k; }}}

} // nickname_set()







