function getBrowser() {
  var ua = window.navigator.userAgent.toLowerCase();
  var ver = window.navigator.appVersion.toLowerCase();
  var name = 'unknown';
  if (ua.indexOf('msie') != -1) {
    if (ver.indexOf('msie 6.') != -1) {
      name = 'ie6';
    }else if (ver.indexOf('msie 7.') != -1) {
      name = 'ie7';
    }else if (ver.indexOf('msie 8.') != -1) {
      name = 'ie8';
    }else if (ver.indexOf('msie 9.') != -1) {
      name = 'ie9';
    }else if (ver.indexOf('msie 10.' != -1)) {
      name = 'ie10';
    }else {
      name = 'ie';
    }
  }
  return name;
}
window.addEventListener('DOMContentLoaded', function() {
  var articleEle = document.getElementsByClassName('article');
  var navLinkEle = document.getElementsByClassName('nav__link');


  for (var i = 0; i < articleEle.length; i++) {
    articleEle.item(i).classList.add('article--hide');
    navLinkEle.item(i).addEventListener('click', (function (j) {
      return function () {

        var showArticle = articleEle.item(j);
        showArticle.classList.add('article--show');
        showArticle.classList.remove('article--hide');
        navLinkEle.item(j).classList.add('nav__link--active');

        for (var k = 0; k < articleEle.length; k++) {
          if (! articleEle.item(k).isEqualNode(showArticle)) {
            articleEle.item(k).classList.remove('article--show');
            navLinkEle.item(k).classList.remove('nav__link--active');
            articleEle.item(k).classList.add('article--hide');
          }
        }

      }
    })(i), false);

  }
  articleEle.item(0).classList.remove('article--hide');

  var navEle = document.getElementById('nav');
  var headerEle = document.getElementById('header');
  var spacerEle = document.createElement('div');
  headerEle.appendChild(spacerEle);
  spacerEle.id = 'spacer';
  spacerEle.display = 'none';

  window.addEventListener('scroll', function () {
    var headerH = headerEle.offsetHeight;
    var navH = navEle.offsetHeight;
    var scrollValue = document.documentElement.scrollTop || document.body.scrollTop;
    var i = headerH - navH;

    if ( scrollValue > i ) {
      navEle.classList.add('nav--fixed');
      spacerEle.style.display = 'block';
      spacerEle.style.height = navH + 'px';
    } else if ( scrollValue < i ) {
      navEle.classList.remove('nav--fixed');
      spacerEle.style.display = 'none';
    }
  }, false);

  var footerEle = document.getElementById('footer');
  var mainEle = document.getElementById('main');
  function stickyFooter() {
    var headerH = headerEle.offsetHeight;
    var footerH = footerEle.offsetHeight;
    var i = headerH + footerH;
    mainEle.style.minHeight = 'calc(100vh - ' + i + 'px)';
  }
  stickyFooter();
  window.addEventListener('resize', stickyFooter, false);

  if (getBrowser() != 'unknown') {
    var ele = document.createElement('link');
    document.getElementsByTagName('head').item(0).appendChild(ele);
    ele.setAttribute('rel', 'stylesheet');
    ele.setAttribute('href','css/ie.css');
    var ele = document.createElement('script');
    document.getElementsByTagName('body').item(0).appendChild(ele);
    ele.setAttribute('src', 'js/ie.js');
  }
});
