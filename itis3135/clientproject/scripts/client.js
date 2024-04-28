$(document).ready(function(){
    $('.carousel-slide').slick({
      slidesToShow: 3, // Number of slides shown at once
      slidesToScroll: 1, // Number of slides scrolled at a time
      autoplay: true,
      autoplaySpeed: 3000, // Interval time between slides (in milliseconds)
      prevArrow: '.carousel-prev',
      nextArrow: '.carousel-next',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  