$(document).ready(function(){
  var time = 2;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.tp-slider-main');
  $slick.slick({
    autoplay: true,
    autoplaySpeed: 10000, //autoplaySpeed=6000 takes about 6s
    dots: true,
    infinite: true,
    // draggable: false,
    speed: 1200,
    fade: true,
    cssEase: 'linear'
  });
  
  $bar = $('.tp-slider-progressbar');
  
  $('.tp-slider-section').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 40); //interval=30 takes about 6s
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }

  // on clik slide control and slick dots to hide progress bar
  $('.slick-arrow, .slick-dots li button').click(function (){
    $bar.css({
        width:0+'%'
        });
        clearTimeout(tick); //remove
        startProgressbar(); //remove
    });

  startProgressbar();
  
});





/*
Theme Pail Slider animation
*****************************/
$('.tp-slider-main').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.tp-slide-item:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);    
});
$('.tp-slider-main').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('div.tp-slide-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);    
});

function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
            $this.removeClass($animationType);
        });
    });
}


/*
Theme Pail slider items Bg image
*********************************/
$('.tp-slide-item').css('background', function () {
    var bg = ('url(' + $(this).data("bg-image") + ')');
    return bg;
});

$(".tp-slide-item").css('tp-item-background', function(){
  // Bg size
  $(this).css({ '-webkit-background-size' : $(this).data('bg-size'),
    '-moz-background-size' : $(this).data('bg-size'), 
    '-o-background-size' : $(this).data('bg-size'),
    'background-size' : $(this).data('bg-size')  });
  // Bg position
  $(this).css('background-position',$(this).data("bg-position"));
  // bg repeat
  $(this).css('background-repeat',$(this).data("bg-repeat"));
});



/*
Theme Pail slider caption style (css3 flex)
********************************************/
$(".tp-caption").css('tp-item-caption', function(){

  // Max width
  $(this).css('max-width',$(this).data("max-width"));

  // horizontal align
  $(this).css({ '-webkit-justify-content' : $(this).data('justify-content'),
    'justify-content' : $(this).data('justify-content')  });

  // vertical align
  $(this).css({ '-webkit-align-items' : $(this).data('align-items'),
    'align-items' : $(this).data('align-items')  });

});



/*
Theme Pail slider Caption Items (css3 flex)
********************************************/
$(".caption-item").css('tp-caption-item', function(){

  // max width
  $(this).css('max-width',$(this).data("max-width"));

  // text align
  $(this).css('text-align',$(this).data("text-align"));

  // padding
  $(this).css('padding',$(this).data("padding"));

  // vertical align
  $(this).css({ '-webkit-align-self' : $(this).data('align-self'),
    'align-self' : $(this).data('align-self')  });

});
