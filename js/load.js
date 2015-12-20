$(function() {
  var h = $(window).height();
 
  $('.container-fluid').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('.container-fluid').css('display', 'block');
  $("#syaro_top").css("visibility","hidden");
  setTimeout('syaro()',2000);
});

function syaro(){  
$('#syaro_top').addClass("animated fadeInRight");
$("#syaro_top").css("visibility","visible");
}
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',30000);
});
 
function stopload(){
  $('.container-fluid').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
