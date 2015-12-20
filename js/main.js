$(function() {
  var mainContent = $('.mainContent');
  var navMenuBtn = $('h2.menu');
  var menu = $('.slideMenu');
  var slideMenuBtn = $('.slideMenuBtn');
  var slideMenuLayer = $('.slideMenuLayer');
  var body = $('.box,.box3');

  function moveMenu() {
    var menuWidth = menu.outerWidth();
    if (menu.hasClass('menu-open')) {
      // 閉じる
      menu.animate({
        'left': -menuWidth
      }, 300);
      slideMenuBtn.animate({
        'left': 0
      }, 300);
      // スマホタッチ有効
      slideMenuLayer.off('.noScroll');
      slideMenuLayer.hide();
      // animateを待ってからelement.styleを削除. 画面サイズ変更対策.
      setTimeout(function() {
        menu.css('left', '');
        slideMenuBtn.css('left', '');
      }, 302);
      menu.removeClass('menu-open');
      body.removeClass('menu-open');
    } else {
      // 開く
      menu.addClass('menu-open');
      body.addClass('menu-open');
      slideMenuLayer.show();
      menu.animate({
        'left': 0
      }, 300);
      slideMenuBtn.animate({
        'left': menuWidth
      }, 300);
      // スマホタッチ無効
      slideMenuLayer.on('touchmove.noScroll', function(e) {
        e.preventDefault();
      });
    };
  };

  // ページ切り替え
  mainContent.first().fadeIn();
  navMenuBtn.first().addClass('active');

  navMenuBtn.on('click', function() {
    var menuNum = navMenuBtn.index(this);
    mainContent.not(this).css({
      'position': 'absolute',
      'display': 'none'
    });
    navMenuBtn.removeClass('active');
    mainContent.eq(menuNum).css({
      'position': 'static',
      'display': 'block'
    });
    $(this).addClass('active');

    // インデックスボタンがクリックされたらメニューを閉じる
    if (menu.hasClass('menu-open')) {
      var menuWidth = menu.outerWidth();
      menu.animate({
        'left': -menuWidth
      }, 300);
      slideMenuLayer.off('.noScroll');
      slideMenuBtn.animate({
        'left': 0
      }, 300);
      slideMenuLayer.hide();
      setTimeout(function() {
        menu.css('left', '');
      }, 301);
      menu.removeClass('menu-open');
      body.removeClass('menu-open');
    };
  });

  // メニュー開閉イベント
  slideMenuBtn.on('click', function() {
    moveMenu();
  });
  slideMenuLayer.on('click', function() {
    moveMenu();
  });

});
