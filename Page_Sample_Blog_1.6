// ==UserScript==
// @name        Page Sample Blog 🔵
// @namespace        http://tampermonkey.net/
// @version        1.6
// @description        ブログページサンプルのプレゼンテーション「Ctrl+F2」
// @author        Ameba Blog User
// @match        https://ameblo.jp/*
// @match        https://www.ameba.jp/home
// @match        https://blog.ameba.jp/*
// @match        https://comment.ameba.jp/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/Protecters/raw/main/Page_Sample_Blog.user.js
// @downloadURL        https://github.com/personwritep/Protecters/raw/main/Page_Sample_Blog.user.js
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
    alert("💢 Page Sample Blog が処理を実行します");

    // 管理画面のアメブロヘッダー ver.0.6 で追加
    let globalH_amebaId=document.querySelector('#gHeaderRight .amebaId');
    if(globalH_amebaId){
        globalH_amebaId.textContent='Ameblo User'; }

    // アバターのURLを設定
    let Avatar=
        'https://stat.profile.ameba.jp/profile_images/'+
        '20200605/08/63/tB/p/o03000300p_1591312706303_fbxee.png?cat=120';

    // ブラウザ タブタイトル
    if(!location.pathname.includes('/form')){ // コメントダイアログの場合は除外
        document.title='Ameba Blog Page'; }

    // ブラウザURL窓 URL表示
    if(location.pathname.includes('/image')){ // 画像リストページ
        history.replaceState('','','/ameblo.user/imagelist.html'); }
    else if(location.pathname.includes('/home')){ ; } // HOMEページ
    //    else{
    //        history.replaceState('','','/ameblo.user'); } // ブログページ
    else if(location.pathname.includes('/amemberentry')){ // アメンバー記事
        try{
            history.replaceState('','','https://ameblo.jp/ambuser/amemberentry-12345678901.html'); } // 代替ページ
        catch{ ; }}
    else if(location.pathname.includes('/form')){ // コメントダイアログ
        alert("💢 コメントダイアログのアレンジ処理を実行");
        try{
            history.replaceState('','','https://comment.ameba.jp/form?eid=12345678901&bnm=ameblo.user'); } // 代替ページ
        catch{ ; }}
    else{
        alert("💢 Page Sample が処理を実行します");
        try{
            history.replaceState('','','https://ameblo.jp/ambuser/entry-12345678901.html'); } // 代替ページ
        catch{ ; }}


    // アメブロヘッダー ログインユーザー表示
    let login_Avatar=document.querySelector('._1ADjOjLk >img');
    if(login_Avatar){
        login_Avatar.setAttribute('srcset', Avatar); } // ログインユーザー アイコン

    let login_name=document.querySelector('._5eamczd_');
    if(login_name){
        login_name.textContent='Login User'; } // ログインユーザー名

    // ブログヘッダー ブログタイトル名　新タイプスキン
    let blogMainTitle=document.querySelector('.skin-blogMainTitle');
    if(blogMainTitle){
        blogMainTitle.textContent='Ameba Blog Sample'; }

    // ブログヘッダー ブログタイトル名　旧タイプスキン
    let skinTitle=document.querySelector('.skinTitleArea .skinTitle');
    if(skinTitle){
        skinTitle.textContent='Ameba Blog Sample'; }

    // ブログヘッダー サブタイトル　新タイプスキン
    let blogSubTitle=document.querySelector('.skin-blogSubTitle');
    if(blogSubTitle){
        blogSubTitle.textContent='Ameba Blog Sample by Ameblo User'; }

    // ブログヘッダー サブタイトル　旧タイプスキン
    let skinDescription=document.querySelector('.skinDescription');
    if(skinDescription){
        skinDescription.textContent='Ameba Blog Sample by Ameblo User'; }


    // サイドバー ブログユーザープロフィール表示　新タイプスキン
    let profileAvatar=document.querySelector('.skin-profileAvatar img');
    if(profileAvatar){
        profileAvatar.setAttribute('srcset', Avatar); } // ブログユーザー アイコン

    let profileName=document.querySelector('.skin-profileName a');
    if(profileName){
        profileName.textContent='Ameblo User'; } // ブログユーザー名

    let profileStatus=document.querySelector('.skin-profileStatus');
    if(profileStatus){
        profileStatus.style.opacity='0'; } // ブログユーザー 性別 その他の情報

    // サイドバー ブログユーザープロフィール表示　旧タイプスキン
    let userProfileImage=document.querySelector('.userProfileImage img');
    if(userProfileImage){
        userProfileImage.setAttribute('srcset', Avatar); } // ブログユーザー アイコン

    let profileUserNickname=document.querySelector('.profileUserNickname a');
    if(profileUserNickname){
        profileUserNickname.textContent='Ameblo User'; } // ブログユーザー名

    let profileDetailArea=document.querySelector('.profileDetailArea');
    if(profileDetailArea){
        profileDetailArea.style.opacity='0'; } // ブログユーザー 性別 その他の情報


    // サイドバー ランキング表示
    let profileGenre=document.querySelectorAll('[data-uranus-component="profileGenre"] dt');
    if(profileGenre[1]){
        profileGenre[1].textContent='******ジャンル'; }
    let rankingResult=document.querySelectorAll('.skin-rankingResult');
    if(rankingResult[0]){
        rankingResult[0].textContent='*****'; }
    if(rankingResult[1]){
        rankingResult[1].textContent='***'; }


    // サイドバー よく使う公式ハッシュタグ表示
    let hashtag_module=
        document.querySelectorAll('.hashtag-profile .hashtag-module__item__text');
    if(hashtag_module[0]){
        hashtag_module[0].textContent='****'; }
    if(hashtag_module[1]){
        hashtag_module[1].textContent='****'; }


    // ～さんをフォロー
    let snsReader=document.querySelector('.snsReaderModuleBlogNickname');
    if(snsReader){
        snsReader.textContent='Ameblo Userさんをフォロー'; }


    // アメンバーページの説明文
    let amemberWidget=document.querySelector('p[data-uranus-component="amemberWidget"]');
    if(amemberWidget){
        amemberWidget.textContent=
            "この記事はAmeblo Userさんのアメンバーに参加している方のみご覧いただけます。"; }




    // 以下は個人的な特別な設定 🟢
    let Avatar_base=document.querySelector('.skin-profileAvatar');
    if(Avatar_base){
        Avatar_base.style.background='none'; }
    if(profileAvatar){
        profileAvatar.style.opacity='1'; } // ブログユーザー アイコン

    let bar_icon=document.querySelectorAll('.bar_icon'); // バー追加 機能アイコン
    for(let k=0; k<bar_icon.length; k++){
        bar_icon[k].style.display='none'; }


    // トップページへのマーク 🟢
    let pagetop=document.querySelector('#pageup');
    if(pagetop){
        pagetop.style.zIndex='2000'; }



    // HOMEページでのプロテクト
    if(location.pathname.includes('/home')){

        // ユーザープロフィール
        let PcProfile_Image=document.querySelector('.PcProfile_Image img');
        if(PcProfile_Image){
            PcProfile_Image.setAttribute('src', Avatar);
            PcProfile_Image.style.filter='hue-rotate(90deg) saturate(4)'; }

        let PcProfile_Name=document.querySelector('.PcProfile_Name');
        if(PcProfile_Name){
            PcProfile_Name.textContent='Ameblo User'; }

        // ブログのタイトル
        let BlogTitle_Link=document.querySelector('.HomeBlogModule_BlogTitle_Link');
        if(BlogTitle_Link){
            BlogTitle_Link.textContent='Ameba Blog Sample'; }}


    // コメント欄
    let commentAuthor=document.querySelectorAll('[data-uranus-component="commentAuthor"] a');
    for(let k=0; k<commentAuthor.length; k++){
        let author=commentAuthor[k].textContent;
        if(author=='personwritep'){ // 個人的な設定 🟢
            commentAuthor[k].textContent='PersonWritep'; } // 個人的な設定 🟢
        if(author=='Amb User'){ // プライベート設定 🟠
            commentAuthor[k].textContent='Ameblo User'; }} // プライベート設定 🟠

    let commentText=document.querySelectorAll('[data-uranus-component="commentText"]');
    for(let k=0; k<commentText.length; k++){
        commentText[k].innerHTML=
            commentText[k].innerHTML.replace('personwritep', 'PersonWritep'); // 個人的な設定 🟢
        commentText[k].innerHTML=
            commentText[k].innerHTML.replace('Amb User', 'Aemblo User'); } // プライベート設定 🟠


    // コメントダイアログ  ：コメント対象の記事
    let CommentWebEntry_blog_title=document.querySelector('.CommentWebEntry_blog-title__j7Xgd');
    if(CommentWebEntry_blog_title){
        CommentWebEntry_blog_title.textContent='Ameblo User'; }

    let comment_user_icon=document.querySelector('.CommentWebForm_image__m65qw img');
    if(comment_user_icon){
        comment_user_icon.src='https://stat.profile.ameba.jp/profile_images/20200525/18/d6/PJ/p/'+
            'o03000300p_1590399247329_rw286.png'; }


} // main()
