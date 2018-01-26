
$(window).load(function(){
  //==============___Page Loader___================
  setTimeout(function(){
    $('#page-loader').delay(300).fadeOut(500, function(){});

    $('#loader-name').addClass('loader-left');
    $('#loader-job').addClass('loader-right');
    $('#loader-animation-id').addClass('loader-hide');
  }, 2500);
});

//Begin - Document Ready
$(document).ready(function(){

//==============___Page Loader___================
  $('#loading-wraper').fadeIn(300);
  
  //setting container width and height
  $(".jumbotronMy").height($(window).height());
});


//navbar active color
$(".sidebar-nav a").on("click", function(){
   $(".sidebar-nav").find(".nav-active").removeClass("nav-active");
   $(this).parent().addClass("nav-active");
});

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

AOS.init(
  {
  	duration: 400,
  	easing: 'ease-out',
  	delay: 100,
		disable: 'mobile'
	}
);


$(".jumbotronMy").mouseover(function(){
  $(".sidebar-nav").find(".nav-active").removeClass("nav-active");
  var divId = "#nav-"+$(this).attr("id");
  $(divId).parent().addClass("nav-active");
});

$(".jumbotronMy").mouseenter(function(){
  $(".sidebar-nav").find(".nav-active").removeClass("nav-active");
  var divId = "#nav-"+$(this).attr("id");
  $(divId).parent().addClass("nav-active");
});

$(".jumbotronMy").scroll(function(){
  $(".sidebar-nav").find(".nav-active").removeClass("nav-active");
  var divId = "#nav-"+$(this).attr("id");
  $(divId).parent().addClass("nav-active");
});


//timeline
$(".timeline-wrapper .timeline-content-item > span").on("mouseenter mouseleave", function(e){
  $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
  $(this).parent().addClass("active");
});

$(".timeline-content-item").on("mouseleave", function(e){
  $(this).removeClass("active");
});