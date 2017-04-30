//jQuery for page scrolling feature
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
/*$(document).ready(function() {
	var s = $('.card1');
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= 600) {
			$("#bar-fill").addClass('bar-fill-1');
     if (windowpos < 600){
        s.removeClass('bar-fill-1');
        s.addClass('bar-fill-remove');
      }
		}
	});
});*/
// var card = $('.card1');
// var pos2 = card.position();
// console.log(pos2);
// var windowpos = $(window).scrollTop();
// console.log(windowpos);
/*$(document).ready(function() {
	var s = $('.card1');
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=500) {
			$("#bar-fill").addClass('bar-fill-1');
        if (windowpos >= pos.top & windowpos <=500){
        s.removeClass('bar-fill-1');
        s.addClass('bar-fill-1-remove');
      }
		}
	});
});*/
// var fill = $("#bar-fill").position();
// var fillscroll = fill.top();
var bottom = $('.card1').position().top + $('.card1').outerHeight(true);
var topbar = $('#bar').position().top;
var snapTo = bottom - topbar;
// console.log(snapTo);


$(window).scroll(function(){
   var newpos = $(document).scrollTop();
  //  console.log(newpos);
  var currentfill = $('#bar-fill').position().top + $('#bar-fill').outerHeight(true);
    console.log(currentfill);
  var previousSnap = currentfill - topbar;
  // console.log(previousSnap);
  var outerHeight = $(window).outerHeight(true);
  // // console.log(outerHeight);
  var center = outerHeight/2;
  // // console.log(center);
  var windowpos = $(window).scrollTop();
  var windowcenter = windowpos + center;
    // console.log(windowpos);
    console.log(windowcenter);
if(windowcenter > currentfill){
  $('#bar-fill').animate({
    height: snapTo
  },900)
}else{
      // var currentfill = $('#bar-fill').position().top + $('#bar-fill').outerHeight(true);
      // //  console.log(currentfill);
      // var previousSnap = currentfill - topbar;
      // // console.log(previousSnap);
      // var outerHeight = $(window).outerHeight(true);
      // // // console.log(outerHeight);
      // var center = outerHeight/2;
      // // // console.log(center);
      // var windowpos = $(window).scrollTop();
      // var windowcenter = windowpos + center;
      //   console.log(windowpos);
      //   console.log(windowcenter);
      if (windowcenter < currentfill){
           $('#bar-fill').animate({
              height: - previousSnap
           },900)
       }
  }
});
