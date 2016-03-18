(function () {

  var headerEle = document.getElementById('header');
  var footerEle = document.getElementById('footer');
  var mainEle = document.getElementById('main');
  var articleEle = document.getElementsByClassName('article');
  function stickyFooter() {
    var headerH = headerEle.offsetHeight;
    var footerH = footerEle.offsetHeight;
    var viewport = window.innerHeight;
    var h = viewport - headerH - footerH;
    for (var i = 0; i < articleEle.length; i++) {
      articleEle[i].style.minHeight = h + 'px';
    }
  }
  stickyFooter();
  window.addEventListener('resize', stickyFooter, false);
})();
