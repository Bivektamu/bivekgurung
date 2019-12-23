$(document).ready(function () {

    var card = $(".navbar-brand");
        $(document).on("mousemove",function(e) {
        var xVal = e.pageX, yVal = e.pageY;

        var ax = -($(window).innerWidth()/2- xVal)/20;
        var ay = ($(window).innerHeight()/2- yVal)/10;
        if($(window).scrollTop() < 11 && $(window).innerWidth() > 990)
            card.attr("style", "transition-duration: 0;transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    });

    var sectionList = document.querySelectorAll(".site-main>section"),
    menuList = document.querySelectorAll(".navbar-nav>.nav-item");

    var wS = 0,
    secOf = 0,
    secH = 0,

    hH = $('header').innerHeight(),
    wH = $(window).height(),
    handler = hH;


    $(window).on('load', function() {
        hH = $('header').innerHeight(),
        wH = $(window).height(),
        sectionList = document.querySelectorAll(".site-main>section");
    });

    $(window).scroll(function () {
        wS = $(window).scrollTop();
        console.log(wS);

        if(wS > 10 && $(window).innerWidth() > 990) {
            $('header').addClass('fixed');
            card.attr("style", "transition-duration: 0.15s;transform: none");
        }
        else {
            $('header').removeClass('fixed');
        }

        for (var i = 0; i < sectionList.length; i++) {

            secOf = sectionList[i].offsetTop;
            secH = sectionList[i].offsetHeight;

            if ((wS > (secOf - handler)) && (wS < (secH + secOf - handler))) {

                $('section').removeClass('active');
                $(sectionList[i]).addClass('active');

                $('.navbar-nav>.nav-item').removeClass('active');
                $(menuList[i]).addClass('active');

                break;
            }
        }
    });

    $('.target').click(function(e) {
        e.preventDefault();
        console.log('asdf');

        var target = $(this).attr('href');
        var targetVal = $(target).offset().top - $('header').innerHeight();
        
        console.log($(target).offset().top);

        if($('header').hasClass('active_nav')) {
            $('header').removeClass('active_nav');
            $('#navbarNav').slideToggle();
        }
        
        $('html, body').animate({
            scrollTop: targetVal+10
        }, 1000);
    });

    $('.navbar-toggler').click(function() {
        $('header').toggleClass('active_nav');
        $('#navbarNav').slideToggle();
    });

    

});