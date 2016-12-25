
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


var navAra = document.getElementsByClassName("jumbotronMy");
for(var i=0;i<navAra.length;i++)
{
	navAra[i].addEventListener("mouseenter", function(){
		$(".sidebar-nav").find(".nav-active").removeClass("nav-active");
		var divId = "#nav-"+this.id;
		//console.log("Got id "+ divId);
		//document.getElementById(divId).parent.className = "page-scroll nav-active";
		$(divId).parent().addClass("nav-active");
	});
}