var currentYear = new Date().getFullYear();
var startYear = 2015;
var numOfYears = currentYear - startYear + 2;
var widthOfActiveBlock = 95 / numOfYears + 5;
var widthOfBlock = 95 / numOfYears;


for(var year=startYear;year <= currentYear;year++)
{
    addYearBlock(year);
}

$(".timeline-wrapper .timeline-content-item").each(function () {
    $(this).width(widthOfBlock + "%");
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


function addYearBlock(year)
{
    var htm = '<div class="timeline-content-item" data-timeline="hour-8">' +
                    '<span>' + year + '</span>' +
                    '<div class="timeline-content-item-reveal">' +
                        '<a href="#">' +
                            '<img src="img/hire-me.png">' +
                            '<span>Lorem Ipsum</span>'+
                        '</a>' +
                    '</div>' +
                '</div>';

    //var htm = '<div class="timeline-content-item" data-timeline="hour-9"><span>9 AM</span><div class="timeline-content-item-reveal"><a href="#"><img src="img/hire-me.png"><span>Lorem Ipsum</span></a></div></div>';

    $("#timeline-years").append(htm);
}

