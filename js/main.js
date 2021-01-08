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