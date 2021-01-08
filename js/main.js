"use strict";

$(() => {

  let btn = $(".btn");
  let btnGradPer = 100;
  let gradTime = 8;

  // btn.hover( () => {
  //   function gradMinusFunc(){
  //     let gradMinus = setInterval(() => {
  //       if(btnGradPer <= 1){
  //         if(typeof gradPlus == Number){
  //           clearInterval(gradPlus);
  //         }
  //         clearInterval(gradMinus);
  //       }
  //       else if(btnGradPer >= 1 && btnGradPer <= 100){
  //         if(typeof gradPlus == Number){
  //           clearInterval(gradPlus);
  //         }
  //         btnGradPer -= 2;
  //         btn.stop(false, false).css({
  //           "background": "linear-gradient(135deg, #00a0e9 " + btnGradPer + "%, #00f0f9)",
  //         });
  //       }
  //       console.log(btnGradPer);
  //     }, gradTime);
  //   }
  //   gradMinusFunc();

  // }, function gradPlusFunc() {
  //   let gradPlus = setInterval(() => {
  //     if(btnGradPer >= 100){
  //       if(typeof gradMinus == Number){
  //         clearInterval(gradMinus);
  //       }
  //       clearInterval(gradPlus);
  //     }
  //     else{
  //       console.log(typeof gradMinus);
  //       if(typeof gradMinus == Number){
  //         clearInterval(gradMinus);
  //       }
  //       btnGradPer += 2;
  //       btn.stop(false, false).css({
  //         "background": "linear-gradient(135deg, #00a0e9 " + btnGradPer + "%, #00f0f9)",
  //       });
  //     }
  //     console.log(btnGradPer);
  //   }, gradTime);
  // });


  $(function () {
    $('#nav-toggle').on('click', function () {
      $('body').toggleClass('open');
    });
  });

  let gradMinus = function() {
    if(btnGradPer <= -5){
      clearTimeout(gradPlus);
    }
    else if(btnGradPer >= -5 && btnGradPer <= 102){
      clearTimeout(gradPlus);
      btnGradPer -= 2;
      btn.stop(false, false).css({
        "background": "linear-gradient(135deg, #00a0e9 " + btnGradPer + "%, #00f0f9)",
      });
      setTimeout(gradMinus, gradTime);
    }
    // console.log(btnGradPer);
  }

  let gradPlus = function() {
    clearTimeout(gradMinus);
    if(btnGradPer >= 100){
      clearTimeout(gradMinus);
    }
    else{
      clearTimeout(gradPlus);
      btnGradPer += 2;
      btn.stop(false, false).css({
        "background": "linear-gradient(135deg, #00a0e9 " + btnGradPer + "%, #00f0f9)",
      });
      setTimeout(gradPlus, gradTime);
    }
    // console.log(btnGradPer);
  }

  btn.hover( () => {
    clearTimeout(gradPlus);
    setTimeout(gradMinus, gradTime);

  }, function(){
    clearTimeout(gradMinus);
    btn.mouseout(function(){
      setTimeout(gradPlus, gradTime);
    });
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