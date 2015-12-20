$(function() {
    var waitShake = false;
    $("#syaro_pyonpyon").on({
        "mouseover": function() {
            $(this).removeClass("shake")
                .addClass("animated bounce");
        },
        "click": function() {
            alert('きゃっ！触らないでください！');
            if($(this).hasClass("animated bounce")){
                waitShake = true;
            }
            else{
                $(this).addClass("animated shake");
            }
        },
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend": function() {
            $(this).removeClass("animated bounce shake");
            if(waitShake){
                waitShake = false;
                $(this).addClass("animated shake");
            }
        }
    });
  
});