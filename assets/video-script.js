/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $tpSlider = $('#tp-sliderMain'),
		$firstAnimatingElems = $tpSlider.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$tpSlider.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$tpSlider.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$tpSlider.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});
	

 	// For carosal Timer progress
        $(document).ready(function(){
          var percent = 0,
          interval = 7000,//it takes about 6s, interval=20 takes about 4s
          $bar = $('.tp-ProgressBar'),
          $crsl = $('#tp-sliderMain');
          $('.carousel-indicators li, .slide-control').click(function (){$bar.css({width:0+'%'});});
          /*line above just for showing when controls are clicked the bar goes to 0.5% to make more friendly, 
          if you want when clicked set bar empty, change on width:0.5 to width:0*/
          $crsl.carousel({//initialize
            interval: false,
            pause: true
          }).on('slide.bs.carousel', function (){percent = 0;});//This event fires immediately when the bootstrap slide instance method is invoked.
          function progressBarCarousel() {
            $bar.css({width:percent+'%'});
            percent = percent +0.5;
            if (percent>=100) {
              percent=0;
              $crsl.carousel('next');
            }
          }
          var barInterval = setInterval(progressBarCarousel, interval);//set interval to progressBarCarousel function
          if (!(/Mobi/.test(navigator.userAgent))) {//tests if it isn't mobile
            $crsl.hover(function(){
                  clearInterval(barInterval);
                },
                function(){
                  barInterval = setInterval(progressBarCarousel, interval);
                }
            );
          }
        });


    $('.tp-sliderSection .item').css('background', function () {
        var bg = ('url(' + $(this).data("bg-image") + ')');
        return bg;
    });
    $(".tp-sliderSection .item").css('background-size', function(){
       $(this).css('background-size',$(this).data("bg-size"));
   	});
    $(".tp-sliderSection .item").css('background-position', function(){
       $(this).css('background-position',$(this).data("bg-position"));
   	});
    $(".tp-sliderSection .item").css('background-repeat', function(){
       $(this).css('background-repeat',$(this).data("bg-repeat"));
   	});
	

    $(".tp-sliderSection .tp-caption").css('max-width', function(){
       $(this).css('max-width',$(this).data("max-width"));
    });


   	$(".tp-sliderSection .caption-item").css('text-align', function(){
       $(this).css('text-align',$(this).data("text-align"));
   	});
   	$(".tp-sliderSection .caption-item").css('padding', function(){
       $(this).css('padding',$(this).data("padding"));
    });
    $(".tp-sliderSection .caption-item").css('max-width', function(){
       $(this).css('max-width',$(this).data("max-width"));
   	});

})(jQuery);