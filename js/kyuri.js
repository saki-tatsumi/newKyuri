
//ハンバーガーメニュー//

(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);





//ナビゲーションボタン//
  jQuery(window).on('scroll', function () {
    if (600 < jQuery(this).scrollTop()) {
        jQuery('.toggle_btn').addClass('change-color');
    } else {
        jQuery('.toggle_btn').removeClass('change-color');
    }
});



//ハンバーガーメニュー・ページ内リンクをクリックで閉じる//
$('#navArea a[href]').on('click', function(event) {
  $('.toggle_btn').trigger('click');
});



//animation//
const targetElement = document.querySelectorAll('.animationTarget') ;
document.addEventListener('scroll',function(){              //スクロールするたびにfor文が走るようにするにはこう書く

for (let i = 0; i < targetElement.length; i++) {
    const targetElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight*0.3              //targetElementDistanceの高さを取得して、その何％くらいまでがみえた時にアニメーションを設定する、というふうにする
    console.log(targetElementDistance);                                     
    if(window.innerHeight>targetElementDistance) {                          //targetElementDistanceよりも画面の高さが高い時
        targetElement[i].classList.add('show');             //targetElement[i]番目に対してクラスを追加する
    }                 
}
})




// スライダー

$('.slider').slick({
  dots: false,
  infinite: true,
  autoplay: true, // 自動再生を設定
  autoplaySpeed: 3000, // スライド切り替えの時間を設定
  fade: true,
  cssEase: 'linear',
  pauseOnHover: false
});