/*$('.page').click(function(){
    var getElement = $(this).attr('href');
    if($(getElement).length){
        var getOffset=$(getElement).offset().top;
        var targetDistance = 50;
        $('html,body').animate({
            scrollTop: getOffset-targetDistance
        },500);
    }
    return fals;
});*/


/*** popup img ***/
/*$('.popup').click(function(){
   var getElement = $(this).attr('src');
});*/




/*** hide and show navbar ***/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-400px";
  }
  prevScrollpos = currentScrollPos;
}


