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