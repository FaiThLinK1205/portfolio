"use strict";

$(() => {

  //ページ内リンクスムーススクロール
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, 550, "swing");
    return false;
  });

  // ローディング
  let div = $('div');
  let body = $('body');
  let loadBgc = $('.load_bgc');
  let circle = $('.circle');
  $(function () {
    if (div.hasClass('load_bgc')) {
      body.addClass('hidden');
      setTimeout(function () {
        loadBgc.addClass('fadeOut');
        circle.addClass('fadeOut');
      }, 4000);
      setTimeout(function () {
        loadBgc.addClass('vanish');
        circle.addClass('vanish');
        body.removeClass('hidden');
      }, 5000);
    }
  });


  // ハンバーガーメニュー
  $('#nav-toggle').on('click', function () {
    body.toggleClass('open');
  });

  $('#gloval-nav a').click(function () {
    body.removeClass('open');
  });



  // ボタン操作
  let btn = $(".btn");
  btn.hover(() => {
    btn.addClass('active');
  }, function () {
    btn.removeClass('active');
  });


  //文字を一文字ずつ囲う処理（タグは入っていない前提です）
  let text = $('.fv_txt').text().replace(/[\s\n　]/g, '');
  let html = '';
  $.each(text.split(''), function (key, value) {
    if (value) {
      html += '<span>' + value + '</span>';
    }
  });
  $('.fv_txt').html(html);

  //アニメーション実行
  anime({
    targets: '.fv_txt > span',
    translateY: [-1500,-1500,25,25,25,25, 0],
    rotate:[0,0,0,0,0,1080],
    scale: [0,1],
    duration: 6000,
    easing: 'easeInOutExpo',
    // easing: 'easeInElastic(3,1)',
    delay: anime.stagger(200, {
      start: 4500
    })
  });
});






// ふわふわ
let fuwaBO = $('.about_bg_bo');
let fuwaSO = $('.about_bg_so');
let fuwaBE = $('.about_bg_be');
let fuwaSE = $('.about_bg_se');
let fuwaMax = 60;
let fuwaMin = 40;
let fuwaTime = 15;
// t→top、b→bottom、L→left、R→right
// 1は一つ目の値、2は二つ目(スラッシュ後)の値
let tL1 = 45;
let tL2 = 50;
let tR1 = 45;
let tR2 = 50;
let bR1 = 45;
let bR2 = 50;
let bL1 = 45;
let bL2 = 50;

function fuwaUp(val1, val2, count1, count2, part, fuwaPart){
  let x = val1;
  let y;
  let z = val2;
  let w;
  setInterval(function(){
    // 値を次の処理まで格納しておく場所確保
    y = x;
    x = val1;

    // 値の増減（fuwaMin <= val1 <=fuwaMax)
    if(val1 >= fuwaMin && val1 <= fuwaMax){
      // 前の処理がマイナスだったら
      if(y > val1){
        val1 -= count1;
      }
      // 前の処理がプラスだったら
      else if(y <= val1){
        val1 += count1;
      }
    }

    // 値の増減（上限下限以外のとき）
    else{
      // 前の処理がマイナスだったら
      if(y > val1){
        val1 += count1;
      }
      // 前の処理がプラスだったら
      else if(y <= val1){
        val1 -= count1;
      }
    }


    // 値を次の処理まで格納しておく場所確保
    w = z;
    z = val2;

    // 値の増減（fuwaMin <= val1 <=fuwaMax)
    if(val2 >= fuwaMin && val2 <= fuwaMax){
      // 前の処理がマイナスだったら
      if(w > val2){
        val2 -= count2;
      }
      // 前の処理がプラスだったら
      else if(w <= val2){
        val2 += count2;
      }
    }

      // 値の増減（上限下限以外のとき）
    else{
      // 前の処理がマイナスだったら
      if(w > val2){
        val2 += count2;
      }
      // 前の処理がプラスだったら
      else if(w <= val2){
        val2 -= count2;
      }
    }

    // top or bottom・left or rightでswitch
    switch (part){
      case 'TL':
        fuwaPart.css({
          'border-top-left-radius' : val1 + '% ' + val2 + '%'
        });
        break;
      case 'TR':
        fuwaPart.css({
          'border-top-right-radius' : val1 + '% ' + val2 + '%'
        });
        break;
      case 'BR':
        fuwaPart.css({
          'border-bottom-right-radius' : val1 + '% ' + val2 + '%'
        });
        break;
      case 'BL':
        fuwaPart.css({
          'border-bottom-left-radius' : val1 + '% ' + val2 + '%'
        });
        break;
    }
  }, fuwaTime);
}
fuwaUp(tL1, tL2, .15, .0, 'TL', fuwaBO);
fuwaUp(tR1, tR2, .1, .0, 'TR', fuwaBO);
fuwaUp(bR1, bR2, .15, .0, 'BR', fuwaBO);
fuwaUp(bL1, bL2, .1, .0, 'BL', fuwaBO);

fuwaUp(tL1, tL2, .4, .0, 'TL', fuwaSO);
fuwaUp(tR1, tR2, .3, .0, 'TR', fuwaSO);
fuwaUp(bR1, bR2, .4, .0, 'BR', fuwaSO);
fuwaUp(bL1, bL2, .3, .0, 'BL', fuwaSO);

fuwaUp(tL1, tL2, .15, .0, 'TL', fuwaBE);
fuwaUp(tR1, tR2, .1, .0, 'TR', fuwaBE);
fuwaUp(bR1, bR2, .15, .0, 'BR', fuwaBE);
fuwaUp(bL1, bL2, .1, .0, 'BL', fuwaBE);

fuwaUp(tL1, tL2, .4, .0, 'TL', fuwaSE);
fuwaUp(tR1, tR2, .3, .0, 'TR', fuwaSE);
fuwaUp(bR1, bR2, .4, .0, 'BR', fuwaSE);
fuwaUp(bL1, bL2, .3, .0, 'BL', fuwaSE);






// ======= contact ======= //
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfsH5qvk0Oe66DNVX_W9asTbwvkPT2govlRaAyXm-3T4dyXjg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});
// AOSアニメーション
AOS.init({
  offset: 200,
  delay: 100,
  duration: 1500,
  easing: 'liner',
  once: true,

});