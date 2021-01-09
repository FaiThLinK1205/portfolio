"use strict";

$(() => {

  
  
  $(function () {
    $('#nav-toggle').on('click', function () {
      $('body').toggleClass('open');
    });
  });
  

  
  
  // ボタン操作
  let btn = $(".btn");
  btn.hover(() => {
    btn.addClass('active');
  }, function(){
    btn.removeClass('active');
  });


});