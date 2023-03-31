$(window).bind('load', function () {
    "use strict";
    // ANCHOR LINK
    function anchorLink(el) {
        var p = $(el).offset();
        var offset_PC = 0;
        var offset_SP = 0;
        if ($(window).width() > 750) {
            $('html,body').animate({ scrollTop: p.top - offset_PC }, 400);
        } else {
            $('html,body').animate({ scrollTop: p.top - offset_SP }, 400);
        }
    }

    // ANCHOR FROM OTHER PAGE
    var hash = location.hash;
    if (hash && $(hash).length > 0) {
        anchorLink(hash);
    }

    // ANCHOR IN PAGE
    $('a[href^="#"]').click(function () {
        var get_ID = $(this).attr('href');
        if ($(get_ID).length) {
            anchorLink(get_ID);
            // CLOSE SP NAV
            if ($('body').hasClass('open-nav')) {
                $('#menu-toggle').trigger('click');
            }
            return false;
        }
    });
    // =========== END - ANCHOR LINK ============

    // TO-TOP && BtnFix
    $(window).scroll(function () {
        var st = $('html,body').scrollTop();
        var getHeightMnv = $('#mainvisual').innerHeight();
        if (st >= getHeightMnv) {
            $('.to-top').addClass('show');
            $('.btns-fix').addClass('show');
        } else {
            $('.to-top').removeClass('show');
            $('.btns-fix').removeClass('show');
        }
    });
    // =========== END - TO-TOP && BtnFix ============


    // SCROLL TO MAIL FORM
    if ($('#fmail-section').length) {
        var params = location.search;
        if (params.search('mode') >= 0) {
            var form_position = $('#fmail-section').offset().top;
            form_position = parseInt(form_position);
            if ($(window).width() > 750) {
                $('html,body').animate({ scrollTop: form_position - 0 }, 400);
            } else {
                $('html,body').animate({ scrollTop: form_position - 0 }, 400);
            }
        }
    }
    // =========== END - SCROLL TO MAIL FORM ============



});

$(document).ready(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');


    // MENU TOGGLE SP
    // $('#menu-toggle').click(function () {
    //     $(this).toggleClass('open');
    //     $('body').toggleClass('open-nav');
    // });
    // $(document).on('mousedown touchstart', function (e) {
    //     if ($(e.target).closest("#gnavi, #menu-toggle").length === 0) {
    //         if ($('body').hasClass('open-nav')) {
    //             $('#menu-toggle').trigger('click');
    //         }
    //     }
    // });
    // // =========== END - MENU TOGGLE SP ============

    // // SUB NAV SP SLIDE TOGGLE
    // $('#gnavi .list-nav span.nav-link').click(function () {
    //     var screenWidth = $(window).width();
    //     if (screenWidth <= 750) {
    //         $(this).toggleClass('open');
    //         $(this).next().stop().slideToggle(200);
    //     }
    // });

    $('.hamburger-btn').click(function () {
        $(this).toggleClass('--active');
        $('body').toggleClass('open-nav no-scroll');
    });

    $('.overplay').click(function () {
        $('.hamburger-btn').trigger('click');
    });

    if ($('.header-menu').length) {
        $('.dropdown > span').click(function () {
            $(this).toggleClass('open');
            $(this).next('.sub-menu').stop().slideToggle();
            // $(this).closest('.dropdown').siblings().find('.sub-menu').stop().slideUp();
            // $(this).closest('.dropdown').siblings().find('span').removeClass('open');
        });

        // $('.menu-list a').on('click', function () {
        //     $('.hamburger-btn').trigger('click');
        // });

        $(window).on('resize load', function () {
            var _w = $(window).width();
            if (_w > 750) {
                $('.dropdown > span').removeClass('open');
                $('.sub-menu').removeAttr('style');
            }
        });
    }
    // =========== END - SUB NAV SP SLIDE TOGGLE ============



    // CHANGE TAB
    $('[data-tab]').click(function () {
        var group = $(this).data('tab-group');
        var index = $(this).data('tab');
        $('[data-tab][data-tab-group="' + group + '"].active').removeClass('active');
        $(this).addClass('active');

        $('[data-tab-content][data-tab-group="' + group + '"].active').removeClass('active');
        $('[data-tab-content="' + index + '"][data-tab-group="' + group + '"]').addClass('active');
    });
    // =========== END - CHANGE TAB ============



    // ACCORDION
    // $(".accordion-button").click(function (e) {
    //     e.preventDefault();
    //     $(this).toggleClass("open");
    //     var accordion_ID = $(this).attr('id');
    //     var accordion_content = $('[data-accordion-for="' + accordion_ID + '"]');
    //     accordion_content.stop().slideToggle(200);
    // });
    // =========== END - ACCORDION ============

    // matchHeight
    if ($('.asddd').length > 0) {
        $('.asddd').matchHeight();
    }
    // =========== END - matchHeight ============

});