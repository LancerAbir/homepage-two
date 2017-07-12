(function($){
    'use strict';


      jQuery(document).ready(function($){
          
          $(".case-studies-carousel").owlCarousel({
              items: 3,
              margin: 35,
              loop: true,
              autoplay: false,
              nav: false,
              dots: true,
          })
         
          $(".testimonial-studies-carousel").owlCarousel({
              items: 1,
              loop: true,
              autoplay: false,
              nav: false,
              dots: true,
          })
          
          $(".sponsors-logo").owlCarousel({
              items: 6,
              margin: 30,
              loop: true,
              autoplay: false,
              nav: false,
              dots: false,
          })
         
      });



      jQuery(window).load(function(){
          
      });




    
})(jQuery);