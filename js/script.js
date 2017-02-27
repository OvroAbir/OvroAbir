
$(window).load(function(){
  //==============___Page Loader___================

  $('#page-loader').delay(300).fadeOut(400, function(){});

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation-id').addClass('loader-hide');
});

//Begin - Document Ready
$(document).ready(function(){

//==============___Page Loader___================
  $('#loading-wraper').fadeIn(300);
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
      	duration: 600,
      	easing: 'ease-out',
      	delay: 100,
		disable: 'mobile'
	}
);


$(".jumbotronMy").mouseenter(function(){
	$(".sidebar-nav").find(".nav-active").removeClass("nav-active");
	var divId = "#nav-"+$(this).attr("id");
	$(divId).parent().addClass("nav-active");
});

