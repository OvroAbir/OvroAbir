var companies = 
[
    {
        name : "Kona Software Lab Limited, Bangladesh",
        short_name : "KONA SL",
        url : "https://www.konai.com",
        logo : "img/kona-logo.png",
        position : "Junior Software Engineer",
        from : new Date("2018-02-01"),
        to : new Date("2019-05-23"),
        text : 
        "<ul class=\"list-unstyled\">" +
            "<li>" +
                "Worked on a project that can update an existing Operating System in IOT devices." +
                "<ul>" +
                    "<li> Worked with C, u-boot, wandboard quad.</li>" +
                "</ul>" +
            "</li>" +
            "<li>" +
                "Worked on a project to reduce read-write time, 4G authentication time in USIM." +
                "<ul>" +
                    "<li> Worked with Java, USIM card.</li>" +
                "</ul>" +
            "</li>" +
        "</ul>",
        tools : []
    },
    {
        name : "CTrends Software & Services Ltd.",
        short_name : "CTrends",
        url : "http://www.ctrends-software.com",
        logo : "http://www.ctrends-software.com/resources/images/logo-top.png",
        position : "Junior Programmer",
        from : new Date("2017-10-15"),
        to : new Date("2018-01-15"),
        text : "Worked on automating business processes in Enterprise Business Solution Software.",
        tools : ["Spring MVC", "Hibernate", "HTML5", "CSS3", "Bootstrap", "jQuery", "PostgreSQL"]
    }
];

var numOfBlocks = companies.length;
var widthOfActiveBlock = 95 / numOfBlocks + 5;
var widthOfBlock = 95 / numOfBlocks;

addCompanies();

function addCompanies()
{
    var htm = '';
    for(var i=0;i<companies.length;i++)
    {
        var s = '<div id="exp-company-' + i +'" class="timeline-content-item" data-company-index="' + i + '">' +
                    '<span>' + companies[i].short_name + '</span>' +
                    '<div class="timeline-content-item-reveal">' +
                        '<a href="' + companies[i].url +'" target="_blank">' +
                            '<img src="' + companies[i].logo +'">' +
                            //'<span>' + companies[i].short_name + '</span>' +
                        '</a>' +
                    '</div>' +
                '</div>';
        htm = htm + s;
    }
    $("#timeline-years").append(htm);
}

function changeCompanyBlockText(companyIndex)
{
    if(companyIndex == undefined)
    {
        console.log("undefined company index");
        return;
    }
    if(companyIndex < 0)
        return;
    var c = companies[companyIndex];
    $("#exp-comp-logo").attr("src", c.logo);
    $("#exp-company-name").html(c.name);
    $("#exp-company-name").attr("href", c.url);
    $("#exp-position").html(c.position);

    var formatter = Intl.DateTimeFormat("en-us", {year:"numeric", month:"short"});
    var txt = "";
    var wtxt = "";
    var curDate = new Date();
    if(curDate.getFullYear() == c.to.getFullYear() && curDate.getMonth() == c.to.getMonth())
    {
        txt = formatter.format(c.from) + " - " + "Current";
        wtxt = "Working with "
    }
    else
    {
        txt = formatter.format(c.from) + " - " + formatter.format(c.to);
        wtxt = "Worked with ";
    }
    $("#exp-time").html(txt);
    $("#exp-resp").html(c.text);

    for(var i=0;i<c.tools.length-1;i++)
        wtxt = wtxt + c.tools[i] + ", "
    wtxt = wtxt + c.tools[c.tools.length-1] + ".";
    
    if(c.tools.length != 0)
        $("#exp-tool").html(wtxt);
    else
        $("#exp-tool").html("");
}


$(".timeline-wrapper .timeline-content-item").each(function () {
    $(this).width(widthOfBlock + "%");
});

$(".timeline-wrapper .timeline-content-item > span").on("mouseenter mouseleave", function (e) {
    $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
    $(this).parent().addClass("active");
    $(this).parent().width(widthOfActiveBlock + "%");
    changeCompanyBlockText($(this).parent().data("company-index"));
    $("#experience-text").show(60);
});

$(".timeline-content-item").on("mouseleave", function (e) {
    $(this).removeClass("active");
    $(this).width(widthOfBlock + "%");
    $("#experience-text").hide();
});

$(".timeline-content-item").on("click", function(){
    var idx = $(this).data("company-index");
    if(idx < 0)
        return;
    window.open(companies[idx].url);
});
