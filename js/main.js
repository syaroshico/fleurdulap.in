function isIE() {
  var ua = window.navigator.userAgent.toLowerCase();

  if (ua.indexOf('msie') != -1) {
    return true;
  }else if (ua.indexOf('trident') != -1) {
    return true;
  }else {
    return false;
  }
}

function articleSw(num) {
  var showArticle = articleEle.item(num);
  showArticle.classList.remove('fadeOut', 'article--hide');
  showArticle.classList.add('fadeIn');
  navLinkEle.item(num).classList.add('nav__link--active');

  for (var k = 0; k < articleEle.length; k++) {
    if (! articleEle.item(k).isEqualNode(showArticle)) {
      articleEle.item(k).classList.remove('fadeIn');
      articleEle.item(k).classList.add('fadeOut', 'article--hide');
      navLinkEle.item(k).classList.remove('nav__link--active');
    }
  }
}

function setArticleSw() {
  
  for (var i = 0; i < articleEle.length; i++) {
    articleEle.item(i).classList.add('article--hide', 'animated');  
    navLinkEle.item(i).addEventListener('click', (function(j) {
      return function() {
        articleSw(j);
      }
    })(i) , false);
  }
  /*Show First Article*/
  articleEle.item(0).classList.remove('article--hide', 'fadeOut');
  navLinkEle.item(0).classList.add('nav__link--active');
}

function fixedHeaderNav() {
  var headerH = headerEle.offsetHeight;
  var navH = navEle.offsetHeight;
  var scrollVal = document.documentElement.scrollTop || document.body.scrollTop;
  var i = headerH - navH;

  if (scrollVal > i) {
    navEle.classList.add('nav--fixed');
    headerEle.style.paddingBottom = navH + 'px';
   } else {
    navEle.classList.remove('nav--fixed');
    headerEle.style.paddingBottom = '';
   }
 }

function stickyFooter() {
  var headerH = headerEle.offsetHeight;
  var footerH = footerEle.offsetHeight;
  var i = headerH + footerH;
  mainEle.style.minHeight = 'calc(100vh - ' + i + 'px)';
}

window.addEventListener('DOMContentLoaded', function() {
  articleEle = document.getElementsByClassName('article');
  navLinkEle = document.getElementsByClassName('nav__link');

  headerEle = document.getElementById('header');
  footerEle = document.getElementById('footer');
  mainEle = document.getElementById('main');

  navEle = document.getElementById('nav');

  setArticleSw();
  stickyFooter();
  window.addEventListener('scroll', fixedHeaderNav, false);
  window.addEventListener('resize', stickyFooter, false);

  if ( isIE() ) {
    var linkCss = document.createElement('link');
    linkCss.setAttribute('rel', 'stylesheet');
    linkCss.setAttribute('href', 'css/ie.css');
    var script = document.createElement('script');
    script.setAttribute('src', 'js/ie.js');
    document.getElementsByTagName('head').item(0).appendChild(linkCss);
    document.getElementsByTagName('body').item(0).appendChild(script);
  }
}, false);