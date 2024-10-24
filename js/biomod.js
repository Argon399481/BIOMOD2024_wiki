//横尾　下から出てくるボタン
jQuery(function() {
  var appear = false;
  var pagetop = $('#scrollToTopBtn');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {  //300pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '0px' //下から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-100px' //下から-100pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 100); //0.1秒かけてトップへ戻る
    return false;
  });
});

// jQueryによるナビゲーションパネルの制御
$(function() {
    $(".menu li").hover(
      function() {
        //クラス名「open」を付与する
        $(this).children(".menuSub").addClass("open");
        //hoverが外れた場合
       }, function() {
        //クラス名「open」を取り除く
        $(this).children(".menuSub").removeClass("open");
      }
    );
  });
  
// ページ遷移の位置調整
$(function () {
    var headerHight = 70; //ヘッダーの高さ
    $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({
    scrollTop: position
    }, 500, "swing");
    return false;
    });
});

// video止めたり流したりする奴
$(function(){
  $('.movie-button-pause').show();
  $('.movie-button-play').hide();
  $("#movie-button").click(function (){
    $('.movie-button').toggleClass('show');
    if($('video')[0].paused){
      $('video')[0].play();
      $(this).addClass('current');
    }else{
      $('video')[0].pause();
      $(this).removeClass('current');
    }
    if($('.movie-button').hasClass('show')){
      $('.movie-button-pause').hide();
      $('.movie-button-play').show();
    }else{
      $('.movie-button-pause').show();
      $('.movie-button-play').hide();
    }
  });
});



//Team Photoのところの設定
// $(document).ready(function(){
//   $('.slider').slick({
//     slidesToShow: 1,  // 1枚ずつ表示
//     slidesToScroll: 1,  // 1枚ずつスクロール
//     infinite: true,  // 無限ループ
//     arrows: true,  // ナビゲーション矢印を有効
//     prevArrow: '.slick-prev',  // 前の矢印
//     nextArrow: '.slick-next'   // 次の矢印
//   });
// });


$(document).on('ready', function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 400,
    dots: true,
    infinite: true,  // 無限ループ
  });
});