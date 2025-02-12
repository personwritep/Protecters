// ==UserScript==
// @name        アイコン画像 プロテクタ 🔵
// @namespace        ameblo.jp
// @version        0.7
// @description        アイコン画像のプロテクタ　「Ctrl+F3」
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/*
// @exclude        https://blog.ameba.jp/ucs/entry/srventry*
// @match        https://ameblo.jp/*
// @match        https://www.ameba.jp/home
// @match        https://www.ameba.jp/notifications
// @match        https://blogger.ameba.jp/*
// @match        https://comment.ameba.jp/public/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @grant        none
// @updateURL        https://github.com/personwritep/Protecters/raw/main/アイコン画像プロテクタ.user.js
// @downloadURL        https://github.com/personwritep/Protecters/raw/main/アイコン画像プロテクタ.user.js
// ==/UserScript==


// STAFF  ICON
// https://stat100.ameba.jp/blog/img/ameba/officialblog/face/staff_120.jpg
// https://stat.profile.ameba.jp/profile_images/20200525/18/d6/PJ/p/o03000300p_1590399247329_rw286.png
// NO IMAGE
// https://stat.profile.ameba.jp/profile_images/common/noimage_m.gif

let img_arr=[
    "https://stat.profile.ameba.jp/profile_images/20141128/23/9b/5O/j/o020002001417184943424.jpg",
    "https://stat.profile.ameba.jp/profile_images/20161005/17/fb/MS/j/o020002001475657023460.jpg",
    "https://stat.profile.ameba.jp/profile_images/20120106/20/58/70/j/o020002001325850091462.jpg",
    "https://stat.profile.ameba.jp/profile_images/20191030/00/c0/Qs/j/o02000200p_1572363756008_h290l.jpg",
    "https://stat.profile.ameba.jp/profile_images/20200308/00/c2/Qu/g/o01400140p_1583593877728_wzoo2.gif",
    "https://stat.profile.ameba.jp/profile_images/20160328/11/12/DG/g/o014001401459132382246.gif",
    "https://stat.profile.ameba.jp/profile_images/20180313/10/7e/xL/g/o01400140p_1520904665659_gnicy.gif",
    "https://stat.profile.ameba.jp/profile_images/20200830/21/07/Vl/g/o01400140p_1598790164760_j3dac.gif",
    "https://stat.profile.ameba.jp/profile_images/20161008/10/43/zA/g/o014001401475891590492.gif",
    "https://stat.profile.ameba.jp/profile_images/20191201/05/ca/OJ/j/o02000200p_1575147045162_zxvpp.jpg",
    "https://stat.profile.ameba.jp/profile_images/20160913/00/f4/P0/j/o020002001473695298938.jpg",
    "https://stat.profile.ameba.jp/profile_images/20200121/00/9a/Fa/g/o01400140p_1579534701325_3mog1.gif",
    "https://stat.profile.ameba.jp/profile_images/20160921/12/af/ft/g/o014001401474428158403.gif",
    "https://stat.profile.ameba.jp/profile_images/20210406/11/24/Qq/g/o01400140p_1617675532461_hbmhd.gif"]



let target=document.querySelector('head');
let monitor=new MutationObserver( catch_key );
monitor.observe(target, {childList: true}); // ショートカット待受け開始

catch_key();

function catch_key(){
    document.addEventListener('keydown', check_key);

    function check_key(event){
        let gate=-1;
        if(event.ctrlKey==true){
            if(event.keyCode==114){ // ショートカット「Ctrl+F3」
                event.preventDefault(); gate=1; }
            if(gate==1){
                event.stopImmediatePropagation();
                main(); }}}
} // catch_key()



let n=0;

function main(){
    alert("💢 アイコン画像プロテクタ が処理を実行します")
    change_icon_shift(n);

    function change_icon_shift(x){
        let icons=document.querySelectorAll('img');
        for(let k=0; k<icons.length; k++){
            let size=icons[k].clientWidth;
            if(size>20 && size<60){
                let src=icons[k].getAttribute('src');
                if(src.includes('stat.profile')){
                    icons[k].setAttribute('src', img_arr[(k+x) % img_arr.length]); }}}
        n=x+1; }

} // main()


/*
    function change_icon(){
        let icons=document.querySelectorAll('img');
        for(let k=0; k<icons.length; k++){
            let size=icons[k].clientWidth;
            if(size>20 && size<60){
                let src=icons[k].getAttribute('src');
                if(src){
                    icons[k].setAttribute('src', img_arr[k % img_arr.length]); }}}}
*/


