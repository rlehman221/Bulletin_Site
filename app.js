var main = function(){
    $("nav").find("a").click(function(event) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
}

$(document).ready(main);