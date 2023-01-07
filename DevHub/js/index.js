$(document).ready(function(){
    $('.main-content-wrapper').load('home.html');
})

/**
 * Following methods resolve navbar active link issue
 */
$(document).on('click', '.navbar-nav .nav-link', function(){
    $('.navbar-nav').find('.active').removeClass('active');
    $(this).addClass('active');
});

/**
 * Following function will toggle dark/light mode
 */
$(document).on('change', '#checkbox', function(){
    var lightTheme = 'light-theme';
    var darkTheme = 'dark-theme';
    var themeIcon = $('.theme-icon');
    var sunIcon = 'fa-sun-o';
    var moonIcon = 'fa-moon-o';
    var label = $('.label');
    if (label.hasClass(lightTheme)) {
        label.removeClass(lightTheme).addClass(darkTheme);
        themeIcon.removeClass(sunIcon).addClass(moonIcon);
        // $('.main-heading').addClass('main-heading-dark');
        // $('.main-content-wrapper').addClass('main-content-wrapper-dark bg-dark');
        // $('.navbar').removeClass('navbar-light').addClass('navbar-dark bg-dark');
        // $('.dev-hub-logo').not(".dev-logo").addClass('dev-hub-logo-dark');
        // $('.devhub-purpose-container').addClass('bg-dark devhub-purpose-container-dark');
        // $('.devhub-purpose').addClass('devhub-purpose-dark');
        // $('.community-sponsor-container').addClass('community-sponsor-container-dark');
        // $('.devhub-feature').addClass('bg-dark');
        // $('.devhub-feature-container').addClass('text-light');
    } else {
        label.removeClass(darkTheme).addClass(lightTheme);
        themeIcon.removeClass(moonIcon).addClass(sunIcon);
        // $('.main-heading').removeClass('main-heading-dark');
        // $('.main-content-wrapper').removeClass('main-content-wrapper-dark bg-dark');
        // $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light');
        // $('.dev-hub-logo').not(".dev-logo").removeClass('dev-hub-logo-dark');
        // $('.devhub-purpose-container').removeClass('bg-dark devhub-purpose-container-dark');
        // $('.devhub-purpose').removeClass('devhub-purpose-dark');
        // $('.community-sponsor-container').removeClass('community-sponsor-container-dark');
        // $('.devhub-feature').removeClass('bg-dark text-light');
        // $('.devhub-feature-container').removeClass('text-light');
    }
    toggleTheme();
});

function toggleTheme() {
    var darkTheme = 'dark-theme';
    if ($('.label').hasClass(darkTheme)) {
        $('.main-heading').addClass('main-heading-dark');
        $('.main-content-wrapper').addClass('main-content-wrapper-dark bg-dark');
        $('.navbar').removeClass('navbar-light').addClass('navbar-dark bg-dark');
        $('.dev-hub-logo').not(".dev-logo").addClass('dev-hub-logo-dark');
        $('.devhub-purpose-container').addClass('bg-dark devhub-purpose-container-dark');
        $('.devhub-purpose').addClass('devhub-purpose-dark');
        $('.community-sponsor-container').addClass('community-sponsor-container-dark');
        $('.devhub-feature').addClass('bg-dark');
        $('.devhub-feature-container').addClass('text-light');
    } else {
        $('.main-heading').removeClass('main-heading-dark');
        $('.main-content-wrapper').removeClass('main-content-wrapper-dark bg-dark');
        $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light');
        $('.dev-hub-logo').not(".dev-logo").removeClass('dev-hub-logo-dark');
        $('.devhub-purpose-container').removeClass('bg-dark devhub-purpose-container-dark');
        $('.devhub-purpose').removeClass('devhub-purpose-dark');
        $('.community-sponsor-container').removeClass('community-sponsor-container-dark');
        $('.devhub-feature').removeClass('bg-dark text-light');
        $('.devhub-feature-container').removeClass('text-light');
    }
}
/**
 * Navbar Links Functionalities
 */
$(document).on('click', '.home-page-link', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('home.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.career-mentorship-link', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('career-mentorship.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.roadmap-link', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('roadmap.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.no-code-portfolio-link', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('no-code-portfolio.html', function(){
        toggleTheme();
    });
})

$(document).on('click', '.internship-link', function(e) {
    e.preventDefault();
    $('.main-content-wrapper').load('internship.html', function(){
        toggleTheme();
    });
})