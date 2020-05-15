(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#menuModal').modal('hide');
  });

  $('#menuModal').on('hidden.bs.modal', function (e) {
      $('body').removeClass('js-no-scroll')
  });
  $('#menuModal').on('shown.bs.modal', function (e) {
      $('body').addClass('js-no-scroll')
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  $('#testimonials-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    dots: true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:true,
    navText: [
      "<i class=\"fas fa-chevron-left\"></i>",
      "<i class=\"fas fa-chevron-right\"></i>"
    ],
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });

  $('#cert-carousel').owlCarousel({
    items: 5,
    loop:true,
    margin:1,
    dots: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:false,
    responsive:{
      0:{
        items:2
      },
      768:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });



})(jQuery); // End of use strict
