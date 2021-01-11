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






// ふわふわ
let fuwa = $('.about_bg_bo');
let fuwaMax = 57;
let fuwaMin = 30;
let fuwaTime = 20;
// t→top、b→bottom、L→left、R→right
// 1は一つ目の値、2は二つ目(スラッシュ後)の値
let tL1 = 30;
let tL2 = 40;
let tR1 = 30;
let tR2 = 30;
let bR1 = 40;
let bR2 = 40;
let bL1 = 30;
let bL2 = 40;

function fuwaUp(val1, val2, count1, count2, part){
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
        fuwa.css({
          'border-top-left-radius' : val1 + '% ' + val2 + '%'
        });
        break;
      case 'TR':
        fuwa.css({
          'border-top-right-radius' : val1 + '% ' + val2 + '%'
        });
        break;
      case 'BR':
        fuwa.css({
          'border-bottom-right-radius' : val1 + '% ' + val2 + '%'
        });
        break;
      case 'BL':
        fuwa.css({
          'border-bottom-left-radius' : val1 + '% ' + val2 + '%'
        });
        break;
    }
  }, fuwaTime);
}
fuwaUp(tL1, tL2, .2, .1, 'TL');
fuwaUp(tR1, tR2, .2, .1, 'TR');
fuwaUp(bR1, bR2, .1, .2, 'BR');
fuwaUp(bL1, bL2, .2, .1, 'BL');


function fuwaUptL(){
  let x = tL1;
  let y;
  let z = tL2;
  let w;
  setInterval(function(){
    y = x;
    x = tL1;
    if(tL1 >= fuwaMin && tL1 <= fuwaMax){
      if(y > tL1){
        tL1 -= .3;
      }
      else if(y <= tL1){
        tL1 += .3;
      }
    }
    else{
      if(y > tL1){
        tL1 += .3;
      }
      else if(y <= tL1){
        tL1 -= .3;
      }
    }

    w = z;
    z = tL2;
    if(tL2 >= fuwaMin && tL2 <= fuwaMax){
      if(w > tL2){
        tL2 -= .4;
      }
      else if(w <= tL2){
        tL2 += .4;
      }
    }
    else{
      if(w > tL2){
        tL2 += .4;
      }
      else if(w <= tL2){
        tL2 -= .4;
      }
    }
    fuwa.css({
      "border-top-left-radius": tL1 + "% " + tL2 + "%"
    });
  }, fuwaTime);
}
// fuwaUptL();


function fuwaUptR(){
  let x = tR1;
  let y;
  let z = tR2;
  let w;
  setInterval(function(){
    y = x;
    x = tR1;
    if(tR1 >= fuwaMin && tR1 <= fuwaMax){
      if(y > tR1){
        tR1 -= .4;
      }
      else if(y <= tR1){
        tR1 += .4;
      }
    }
    else{
      if(y > tR1){
        tR1 += .4;
      }
      else if(y <= tR1){
        tR1 -= .4;
      }
    }

    w = z;
    z = tR2;
    if(tR2 >= fuwaMin && tR2 <= fuwaMax){
      if(w > tR2){
        tR2 -= .3;
      }
      else if(w <= tR2){
        tR2 += .3;
      }
    }
    else{
      if(w > tR2){
        tR2 += .3;
      }
      else if(w <= tR2){
        tR2 -= .3;
      }
    }
    fuwa.css({
      "border-top-right-radius": tR1 + "% " + tR2 + "%"
    });
  }, fuwaTime);
}
// fuwaUptR();


function fuwaUpbR(){
  let x = bR1;
  let y;
  let z = bR2;
  let w;
  setInterval(function(){
    y = x;
    x = bR1;
    if(bR1 >= fuwaMin && bR1 <= fuwaMax){
      if(y > bR1){
        bR1 -= .3;
      }
      else if(y <= bR1){
        bR1 += .3;
      }
    }
    else{
      if(y > bR1){
        bR1 += .3;
      }
      else if(y <= bR1){
        bR1 -= .3;
      }
    }

    w = z;
    z = bR2;
    if(bR2 >= fuwaMin && bR2 <= fuwaMax){
      if(w > bR2){
        bR2 -= .4;
      }
      else if(w <= bR2){
        bR2 += .4;
      }
    }
    else{
      if(w > bR2){
        bR2 += .4;
      }
      else if(w <= bR2){
        bR2 -= .4;
      }
    }
    fuwa.css({
      "border-bottom-right-radius": bR1 + "% " + bR2 + "%"
    });
  }, fuwaTime);
}
// fuwaUpbR();


function fuwaUpbL(){
  let x = bL1;
  let y;
  let z = bL2;
  let w;
  setInterval(function(){
    y = x;
    x = bL1;
    if(bL1 >= fuwaMin && bL1 <= fuwaMax){
      if(y > bL1){
        bL1 -= .3;
      }
      else if(y <= bL1){
        bL1 += .3;
      }
    }
    else{
      if(y > bL1){
        bL1 += .3;
      }
      else if(y <= bL1){
        bL1 -= .3;
      }
    }

    w = z;
    z = bL2;
    if(bL2 >= fuwaMin && bL2 <= fuwaMax){
      if(w > bL2){
        bL2 -= .2;
      }
      else if(w <= bL2){
        bL2 += .2;
      }
    }
    else{
      if(w > bL2){
        bL2 += .2;
      }
      else if(w <= bL2){
        bL2 -= .2;
      }
    }
    fuwa.css({
      "border-bottom-left-radius": bL1 + "% " + bL2 + "%"
    });
  }, fuwaTime);
}
// fuwaUpbL();




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
