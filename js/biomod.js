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