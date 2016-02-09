$(document).ready(function () {
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function () {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul").removeClass("expanded").slideUp(200);
        } else if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul").removeClass("expanded").slideUp(200);
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(200);
            $("nav#nav-mobile a").click(function () {
                $("#nav-mobile ul").hide();
            });
        }
    });
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
                '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top + 1
                }, 350);
                return false;
            }
        }
    });
	$("#modal").fancybox({ type: 'iframe', maxWidth: 900, maxHeight: 500, fitToView: true, autoSize: true, closeClick: false, openEffect: 'none', closeEffect: 'none', helpers: { media: true }, youtube: { autoplay: 1, hd: 1, vq: 'hd720p' } });
    $(".tutorial").fancybox({ maxWidth: 900, maxHeight: 500, fitToView: true, width: '70%', height: '70%', autoSize: false, closeClick: false, openEffect: 'none', closeEffect: 'none' });
});
