$(document).ready(function () {
    "use strict";
    var wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,
            live: false,       // default
        }
    )
    wow.init();

    //aos

    // AOS.init({
    //     startEvent: 'DOMContentLoaded',
    //     offset: 0,
    //     duration: 800,
    //     delay: '200',
    //     easing: 'ease-in-sine',
    //     once: true,
    //     mirror: true,
    //     disable: function () {
    //         return $(window).width() <= 768;
    //     },
    // });
});

$(window).bind('load', function () {
    "use strict";
    // SLIDER
    // if( $('#visual').length > 0 ) {
    //     $('#visual').slick({
    //         dots: false,
    //         infinite: true,
    //         speed: 1000,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         arrows: false,
    //         centerMode: false,
    //         centerPadding: 0,
    //         pauseOnHover: false,
    //         fade: false,
    //         variableWidth: false,
    //     });
    // }
    /*============== END - SLIDER ================*/


    /*============== END - CONTENT LOAD ANIMATION ================*/

    if ($('.asd').length) {
        $.ajax({
            url: 'blog/_custom/?limit=2',
            dataType: 'jsonp',
            success: function (json) {
                $.each(json.data, function (i, val) {
                    var dateFormatted = val.date.replace('/', '.').replace('/', '.');
                    var items =
                        '<li>' +
                        '<a href="./blog/' + val.url + '" class="blogs-item">' +
                        '<span class="blogs-time">' + dateFormatted + '</span>' +
                        '<span class="blogs-tt">' + val.title + '</span>' +
                        '</a>' +
                        '</li>'
                    $('#blog-list').append(items);
                });
            }
        });
    }
});