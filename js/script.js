
//navbar active color
$(".sidebar-nav a").on("click", function(){
   $(".sidebar-nav").find(".nav-active").removeClass("nav-active");
   $(this).parent().addClass("nav-active");
});