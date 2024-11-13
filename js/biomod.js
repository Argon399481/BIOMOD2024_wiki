const LogoVideo = document.getElementById("teamLogoVideo");
const pseudoLogo = document.getElementById("pseudo-logo");

pseudoLogo.addEventListener("mouseover", () => {
    LogoVideo.play();
});

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
    $('body, html').animate({ scrollTop: 0 }, 300); //0.3秒かけてトップへ戻る
    return false;
  });
});

jQuery(function() {
  // IntersectionObserverの設定
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      // 要素が画面内に入ったとき
      if (entry.isIntersecting) {
        $(entry.target).addClass('visible'); // visibleクラスを追加

        // 1番目の要素が動いた後、0.5秒後に1番目+2番目にvisibleを追加
        if ($(entry.target).is(':nth-child(1)')) {
          setTimeout(function() {
            $('div.section-panel:nth-child(2)').addClass('visible'); // 2番目にvisibleを追加
          }, 150);  // 1番目が動いてから0.5秒後

          setTimeout(function() {
            $('div.section-panel:nth-child(3)').addClass('visible'); // 3番目にvisibleを追加
          }, 300); // 1番目と2番目が動いた後0.5秒後に3番目を表示
        }
         else if ($(entry.target).is(':nth-child(4)')) {
          setTimeout(function() {
            $('div.section-panel:nth-child(5)').addClass('visible'); // 2番目にvisibleを追加
          }, 150);  // 1番目が動いてから0.5秒後

          setTimeout(function() {
            $('div.section-panel:nth-child(6)').addClass('visible'); // 3番目にvisibleを追加
          }, 300); // 1番目と2番目が動いた後0.5秒後に3番目を表示
        }

        // 1度だけ実行するために監視を解除
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.9 // 50%が画面内に入った時点で実行
  });

  // .section-panelの1番目を監視対象にする
  $('.observed-panel').each(function() {
    observer.observe(this); // 1番目だけを監視
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

// Teamの画像スライダー
$(document).on('ready', function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
  });
});

// Projectのページ内タブ
$(".tab_label").on("click",function(){
	var $th = $(this).index();
	$(".tab_label").removeClass("active");
	$(".tab_panel").removeClass("active");
	$(this).addClass("active");
	$(".tab_panel").eq($th).addClass("active");
});

// Intersection Observerの設定
const checkboxes = document.querySelectorAll('input[type="checkbox"] + label');

// 遅延時間（ミリ秒単位）
const delay = 300;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // もし、entry.targetが.pseudo-checkboxでない場合
    if (entry.isIntersecting && !entry.target.classList.contains('pseudo-checkbox')) {
      setTimeout(() => {
        entry.target.classList.add('in-view'); // .in-viewクラスを追加
      }, delay);

      observer.unobserve(entry.target); // 一度だけ実行するため監視を解除
    }
  });
}, { threshold: 0.1 });


// 各チェックボックスのlabel要素を監視
checkboxes.forEach(checkbox => observer.observe(checkbox));