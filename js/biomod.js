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
    $("#video-btn").click(function (){
        if($('#background')[0].paused){
          $('#background')[0].play();
          $(this).addClass('current');
        }else{
          $('#background')[0].pause();
          $(this).removeClass('current');
        }
    });
});

// BGBの動き遅くする奴
var videoElem = document.getElementById('lipo');
videoElem.playbackRate = 0.6;
videoElem.play(); // 必要に応じて再生を開始

// オープニングアニメーション
// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}

$(document).ready(function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


var arr = []
//初期値の設定
function TypingInit() {
	$('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});
}
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	TypingInit(); //初期設定
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述