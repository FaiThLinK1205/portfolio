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

});


class SpanWrap {
  constructor() {
    this.settings = {
      target: ".js-span-wrap-text"
    }
    this.targets = "";
    this.targetLength = 0;
    this.nodes = [];
    this.convertContents = [];
  }

  init(options) {
    this.setup(options);
    this.getNodes();
    this.convert();
    this.set();
  }

  setup(options) {
    this.settings = Object.assign({
      target: this.settings.target
    }, options || {});
    this.targets = document.querySelectorAll(this.settings.target);
    this.targetLength = this.targets.length;
  }

  getNodes() {
    for (let target of this.targets) {
      let nodes = target.childNodes;
      this.nodes.push(nodes);
    }
  }

  convert() {
    for (let i = 0; i < this.targetLength; i++) {
      this.convertContents.push([]); //カラの配列を追加
      for (let node of this.nodes[i]) {
        if (node.nodeType == 3) { //テキストの場合
          let text = node.textContent.replace(/\s+/g, ''); //テキストから空白削除
          text.split('').forEach((v) => {
            this.convertContents[i].push("<span>" + v + "</span>");
          });

        } else { //テキスト以外
          this.convertContents[i].push(node.outerHTML);
        }
      }
    }
  }

  set() {
    for (let i = 0; i < this.targetLength; i++) {
      this.targets[i].innerHTML = this.convertContents[i].join("");
    }
  }

}

const spanWrap = new SpanWrap();
spanWrap.init({
  target: ".fv_txt"
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