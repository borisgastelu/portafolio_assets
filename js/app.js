$(function() {
    $(window).on('load resize', function() {
        $('.fill-screen').css('height', window.innerHeight);
    });

    $("#home").wallpaper({
        source: {
            poster: 'images/laptop.jpg',
            mp4: 'videos/presentation.mp4'
        }
    });

    // Add Boostrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // Smooth scrolling
    $('nav a, .down-button a, footer a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 115
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });

    // Parallax scrolling with stellar.js
    $(window).stellar();

    // Animating DOM elements - (Animate.css & Waypoints.js)
    // hide our element on page load
    $('.profile-logo, [class^="s-item-"]').css('opacity', 0);

    $('.profile-logo').waypoint(function() {
        $('.profile-logo').addClass('fadeInUp');
    }, { offset: '70%' });

    $('[class^="s-item-"]').waypoint(function() {
        $('[class^="s-item-"]').addClass('fadeInUp');
    }, { offset: '70%' });

    $('.activity-element').waypoint(function() {
        $('.activity-element').addClass('fadeInUp');
    }, { offset: '80%' });
});
