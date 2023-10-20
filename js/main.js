(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


$(document).ready(function () {
    $('#mail-spinner').hide();
    $("form#contact-form").submit(function (event) {

      $('#mail-spinner').show();
      $('#mail-button').hide();
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        mobile: $("#mobile").val(),
        message: $("#message").val(),
        constent: $("#constent").val(),
      };
  
      $.ajax({
        url: "https://formsubmit.co/ajax/info@fema-solar.net",
        method: "POST",
        data: formData,
        dataType: "json",
        success: (data) => console.log(data),
        error: (err) => console.log(err)
      }).done(function (data) {
        console.log(data);
        $('#mail-spinner').hide();
        $('#mail-button').show();
  
        if (!data.success) {
          if (data.errors.name) {
            $("#name-group").addClass("has-error");
            $("#name-group").append(
              '<div class="help-block">' + data.errors.name + "</div>"
            );
          }
  
          if (data.errors.email) {
            $("#email-group").addClass("has-error");
            $("#email-group").append(
              '<div class="help-block">' + data.errors.email + "</div>"
            );
          }
  
          if (data.errors.superheroAlias) {
            $("#superhero-group").addClass("has-error");
            $("#superhero-group").append(
              '<div class="help-block">' + data.errors.superheroAlias + "</div>"
            );
          }
        } else {
          $("form").html(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
        }
  
      });
  
      event.preventDefault();
    });
  });

