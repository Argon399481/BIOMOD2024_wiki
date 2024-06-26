// 押したらページの一番上に移動するボタン
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