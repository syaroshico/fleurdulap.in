$(function() {
  var mainContent = $('.mainContent');
  var navMenuBtn = $('h2.menu');
  var menu = $('.slideMenu');
  var slideMenuBtn = $('.slideMenuBtn');
  var body = $('body,.box,.box3');

  mainContent.first().fadeIn();
  navMenuBtn.first().addClass('active');

  navMenuBtn.click(function() {
    var menuNum = navMenuBtn.index(this);
    mainContent.not(this).css({
      'position' : 'absolute',
      'display' : 'none'
    });
    navMenuBtn.removeClass('active');

    mainContent.eq(menuNum).css({
      'position' : 'static',
      'display' : 'block'
    });

    $(this).addClass('active');

    if ( menu.hasClass('menu-open') ) {
      var menuWidth = menu.outerWidth();
      menu.animate({ 'left' : -menuWidth }, 300).toggleClass('menu-open');
      slideMenuBtn.animate({ 'left' : 0 }, 300);
      $('.slideMenuLayer').hide();
      var headerHeight = $('header').outerHeight();
      $('body').animate({ scrollTop: headerHeight }, 300);
    };
  });

  slideMenuBtn.on('click', function(){
    menu.toggleClass('menu-open');

    var menuWidth = menu.outerWidth();

    if ( menu.hasClass('menu-open') ){
      menu.animate({ 'left' : 0 }, 300);
      slideMenuBtn.animate({ 'left' : menuWidth }, 300);
      $('.slideMenuLayer').show();
    } else {
      menu.animate({ 'left' : -menuWidth }, 300);
      slideMenuBtn.animate({ 'left' : 0 }, 300);
      $('.slideMenuLayer').hide();
    };
  });

  $('.slideMenuLayer').on('click', function(){
    var menuWidth = menu.outerWidth();
    menu.animate({ 'left' : -menuWidth }, 300).toggleClass('menu-open');
    slideMenuBtn.animate({ 'left' : 0 }, 300);
    $('slideMenuLayer').hide();
  });


  $(window).resize(function () {
    var menuWidth = menu.outerWidth();
    if ( $(window).outerWidth() >= 768 ) {
      menu.css({ 'left' : 'auto' });
    } else if ( menu.hasClass('menu-open') && $(window).outerWidth() < 768 ) {
      menu.css({ 'left' : 0 });
      slideMenuBtn.css({ 'left' : menuWidth });
    } else if ( !(menu.hasClass('menu-open')) && $(window).outerWidth() < 768 ) {
      menu.css({ 'left' : -menuWidth });
      slideMenuBtn.css({ 'left' : 0 });
    };
  });

});
