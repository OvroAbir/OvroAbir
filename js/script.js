
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
      	duration: 1000,
      	easing: 'linear',
      	delay: 100,
		disable: 'mobile'
	}
);