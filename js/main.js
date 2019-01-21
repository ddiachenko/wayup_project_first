// анимация при scroll
$(function () {
    $(window).scroll(function() {
        $('#main .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("bounceInDown");
            }
        });
    });

    $(window).scroll(function() {
        $('.advantage').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("flipInX");
            }
        });
    });

    $(window).scroll(function() {
        $('.input-name').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-phone').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-email').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.input-place').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInRight");
            }
        });
    });
    $(window).scroll(function() {
        $('.title-form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("jackInTheBox");
            }
        });
    });
    $(window).scroll(function() {
        $('.btn-form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInUp");
            }
        });
    });

})

// Плавный переход по кнопке
$(document).ready(function(){

    $("#offer").on("click","a", function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

});


