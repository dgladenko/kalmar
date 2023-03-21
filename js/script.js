/*---------------------------- start Hamburger_menu_mobile ------------------------*/

$(".header__langtop").click(function() {
    $(this).toggleClass('active');
    $(".header__langbottom").slideToggle(500);
});

/*---------------------------- start Slick_slider ------------------------*/

$('.ready__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    prevArrow: $('.ready__navigleft'),
    nextArrow: $('.ready__navigright'),
    autoplaySpeed: 30000,
    arrows: true,
    fade: true,

});
/*---------------------------- start modals work!!! ------------------------*/

$(document).mouseup(function(e) {
    var container = $(".header__lang");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.header__langtop').removeClass('active');
        $(".header__langbottom").slideUp(500);
    }
});


/*---------------------------- start Scroll_To ------------------------*/

$("#pol").click(function() {
    $('html, body').animate({
        scrollTop: $("#polblock").offset().top
    }, 1000);
});

/*---------------------------- start Animate WOW ------------------------*/



/*---------------------------- finish Animate WOW ------------------------*/

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
        $('.fixed_header').fadeIn();
    } else {
        $('.fixed_header').fadeOut();
    }
});


/*---------------------------- finish Scroll_To ------------------------*/
// Add smooth scrolling to all links
$(".header__menu a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1200, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});





$(document).ready(function() {
    $('.preloader').fadeOut(500);
    new WOW().init();
    $('.greenscreen__value span').each(function() {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 10000,
            easing: 'swing',
            step: function() {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
});


// var $paragraph = $(".greenscreen__value");

// $(window).scroll(function() {
//     $paragraph.each(function() {
//         var paragraphMiddle = $(this).offset().top + (0.5 * $(this).height());
//         var windowBottom = $(window).scrollTop() + $(window).height();

//         if (paragraphMiddle < windowBottom) {
//             $(this).addClass("active");
//         }
//     });
// });


$(".liclass1").click(function() {
    $('.liclass').removeClass('active');
    $(this).addClass('active');
    $('.telclass').hide();
    $(".telclass1").show();
});
$(".liclass2").click(function() {
    $('.liclass').removeClass('active');
    $(this).addClass('active');
    $('.telclass').hide();
    $(".telclass2").show();
});
$(".liclass3").click(function() {
    $('.liclass').removeClass('active');
    $(this).addClass('active');
    $('.telclass').hide();
    $(".telclass3").show();
});
$(".liclass4").click(function() {
    $('.liclass').removeClass('active');
    $(this).addClass('active');
    $('.telclass').hide();
    $(".telclass4").show();
});