$(function(){
    $('.ico_hamburger').click(function(){
        $(this).toggleClass('active');
        $('.header__toggle_menu').toggleClass('openned');
    });


    $('.playlist__gallery_item img').click(function(){
        $('audio').each(function(){
            this.pause();
        });
        var audioB=$(this).next('audio');
        $(this).toggleClass('active');
        if  ($(this).hasClass('active')) {
            audioB[0].play();
            $(this).addClass('active');
        }
        else {
            audioB[0].pause();
            $(this).removeClass('active');
        }

    });

});