
//hamburger menu
$(function(){

  var imgHeight = $('.kv-wrapper').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.fv').outerHeight(); //ファーストビューの高さを取得

$('.burger-btn').on('click', function(){
  if( $(window).scrollTop() < imgHeight -50){
    //ハンバーガーボタンがfvより上にあるとき
  $('.bar').toggleClass('cross');
  $('.nav-wrapper').toggleClass('open');
  $('body').toggleClass('noscroll');
 }else{
    //ハンバーガーボタンがfvより下にあるとき
  $(this).toggleClass('black');
  $('.bar').toggleClass('cross');
  $('.nav-wrapper').toggleClass('open');
  $('body').toggleClass('noscroll');
 }
});
$('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
  $('.nav-wrapper').fadeOut(300);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
  $('.burger-btn').removeClass('cross');//.btn_triggerのcloseクラスを削除
  $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
});

//color change
$(window).on('load scroll', function(){
  if ($(window).scrollTop() < imgHeight -50) {
    //メインビジュアル内にいるので、クラスを外す。
    $('.header-title').removeClass('black');
  }else {
    //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
    $('.header-title').addClass('black');
  }
  if ($(window).scrollTop() < bgHeight -50) {
    //メインビジュアル内にいるので、クラスを外す。
    $('.burger-btn').removeClass('black');
  }else {
    //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
    $('.burger-btn').addClass('black');
  }
});

});

