var numOfYears = 4;
var widthOfActiveBlock = 95 / numOfYears + 5;
var widthOfBlock = 95 / numOfYears;

$(document).ready(function () {
    $(".timeline-wrapper .timeline-content-item").each(function () {
        $(this).width(widthOfBlock + "%");
    });
});


$(".timeline-wrapper .timeline-content-item > span").on("mouseenter mouseleave", function (e) {
    $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
    $(this).parent().addClass("active");
    $(this).parent().width(widthOfActiveBlock + "%");
});

$(".timeline-content-item").on("mouseleave", function (e) {
    $(this).removeClass("active");
    $(this).width(widthOfBlock + "%");
});



