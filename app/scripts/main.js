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
$(window).scroll(function() {
if($('.card1').hasClass('in-view')){
  $('.card1').addClass('cardfill');
// }if $(".card2").hasClass("in-view"){
//   $(".card2").addClass("cardfill");
// }if $(".card3").hasClass("in-view"){
//   $(".card3").addClass("cardfill");
// }if $(".card4").hasClass("in-view"){
//   $(".card4").addClass("cardfill");
// }if $(".card5").hasClass("in-view"){
//   $(".card5").addClass("cardfill");
// }if $(".card6").hasClass("in-view"){
//   $(".card6").addClass("cardfill");
// }if $(".card7").hasClass("in-view"){
//   $(".card7").addClass("cardfill");
}else{
  $('.card1').removeClass('cardfill');
}
});
$(window).scroll(function() {
  if($('.card2').hasClass('in-view')){
    $('.card2').addClass('cardfill');
  }else{
    $('.card2').removeClass('cardfill');
  }
});
$(window).scroll(function() {
  if($('.card3').hasClass('in-view')){
    $('.card3').addClass('cardfill');
  }else{
    $('.card3').removeClass('cardfill');
  }
});
$(window).scroll(function() {
  if($('.card4').hasClass('in-view')){
    $('.card4').addClass('cardfill');
  }else{
    $('.card4').removeClass('cardfill');
  }
});
$(window).scroll(function() {
  if($('.card5').hasClass('in-view')){
    $('.card5').addClass('cardfill');
  }else{
    $('.card5').removeClass('cardfill');
  }
});
$(window).scroll(function() {
  if($('.card6').hasClass('in-view')){
    $('.card6').addClass('cardfill');
  }else{
    $('.card6').removeClass('cardfill');
  }
});
$(window).scroll(function() {
  if($('.card7').hasClass('in-view')){
    $('.card7').addClass('cardfill');
  }else{
    $('.card7').removeClass('cardfill');
  }
});

var bottom = $('.card1').position().top + $('.card1').outerHeight(true);
var topbar = $('#bar').position().top;
var snapTo = bottom - topbar;
// console.log(snapTo);


// setInterval(function(){
  $(window).on('scrollstop',function(){
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
      //  }else {//idk if this helps need something to control how often the variables get updated
      //        setTimeout(check, 5000); // check again in 5 second
      }
  }
});
// }, 2000);
