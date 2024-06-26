// ページの読み込みが完了した時に実行される初期化コード
window.addEventListener('DOMContentLoaded', function() {
    // ボタン要素を取得
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // 要素が存在するか確認
    if (scrollToTopBtn) {
        // ボタンをクリックした時のスクロール機能を追加
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // スムーズスクロール
            });
        });

        // スクロール位置が一定以上になるとボタンを表示する
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // 300pxよりスクロールされたら表示
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    } else {
        console.log('scrollToTopBtnが見つかりませんでした。');
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('.reference a').forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       console.log('リンクがクリックされました');
//       // 既存のハイライトを削除
//       var highlighted = document.querySelector('.highlight');
//       if (highlighted) {
//         console.log('既存のハイライトを削除');
//         highlighted.classList.remove('highlight');
//       }
//       // 対象のliにハイライトを追加
//       var target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         console.log('ハイライトを追加');
//         target.classList.add('highlight');
//       } else {
//         console.log('ターゲットが見つかりません');
//       }
//     });
//   });
// });

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
  
// JS
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