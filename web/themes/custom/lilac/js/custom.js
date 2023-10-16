(function ($, Drupal, once) {
  Drupal.behaviors.customslider = {
    attach: function (context, settings) {
      var slider = $('.main-slider', context);
      $(once('show-slider', slider, context)).each(function() {
        const slides = document.querySelectorAll('.slide'); 
        var counter = 0; 
        slides.forEach(
          (slide,index) => {
            slide.style.left = `${index * 100}%`
          }
        )


        const goPrev = () => {
          counter--;
          slideImage();
          console.log("prev");
        }

        const goNext = () => {
          counter++;
          slideImage();
          console.log("next");

        }

        const slideImage = () => {
          slides.forEach(
            (slide) => {
              slide.style.transform = `translateX(-${counter * 100}%)`
            }
          )
        }
      });
    }
  };
})(jQuery, Drupal, once);
