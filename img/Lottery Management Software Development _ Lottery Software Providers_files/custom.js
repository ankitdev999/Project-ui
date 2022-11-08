jQuery(document).ready(function(){
  //jQuery('.site_loader').fadeOut(300);
  jQuery('.firstContent').show();
  jQuery(document).on('click', '.firstTab', function(){
    hideAll();
    jQuery('.firstContent').show();
  });
  jQuery(document).on('click', '.secondTab', function(){
    hideAll();
    jQuery('.secondContent').show();
  });
  jQuery(document).on('click', '.thirdTab', function(){
    hideAll();
    jQuery('.thirdContent').show();
  });
  jQuery(document).on('click', '.fifthTab', function(){
    hideAll();
    jQuery('.fifthContent').show();
  });
  jQuery(document).on('click', '.fourthTab', function(){
    hideAll();
    jQuery('.fourthContent').show();
  });
  jQuery(document).on('click', '.sixthTab', function(){
    hideAll();
    jQuery('.sixthContent').show();
  });
  function hideAll(){
    jQuery('.gridTabSection .grid_tabs_wrapr .elementor-section').hide();
  }
});


 //seperate code by Ashsih 
 var NavBar = jQuery('.elementor-location-header');
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = NavBar.outerHeight();
    jQuery(window).scroll(function(event) {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = jQuery(this).scrollTop();
        if (st + jQuery(window).height() < jQuery(document).height()) {
            NavBar.addClass('sticky_header');
            if (st == 0) {
                NavBar.removeClass('sticky_header');
            }
        }
        lastScrollTop = st;
    }
//[data-elementor-type=wp-page]
topHeight = jQuery('.site_header_wrap').height();
jQuery('.content-area, .commonSmBanner').css({  'margin-top': topHeight});

    jQuery('.slider-for').slick({
      slidesToShow: 1,
      infinite: true,
      dots: false,
      speed: 300,
      slidesToScroll: 1,
      fade: false,
      arrows: false,
      asNavFor: '.slider-nav',
    
  });
  jQuery('.slider-nav').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    asNavFor: '.slider-for',
    arrows: true,
    nextArrow: '<span class="slider-arrow"><i class="fa fa-angle-right"></i></span>',
    prevArrow: '<span class="slider-arrow"><i class="fa fa-angle-left"></i></span>',
    focusOnSelect: true,
    
  });
  jQuery('.feature-slider').slick({
      infinite: true,
      arrows: true,
      nextArrow: '<span class="arrow-right arrow"><i class="fa fa-angle-right"></i></span>',
      prevArrow: '<span class="arrow-left arrow"><i class="fa fa-angle-left"></i></span>',
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });



// This is home slider 
// jQuery('.slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       dots: true,
//       infinite: true,
//       cssEase: 'linear'
//   });

 jQuery('.contentSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.laptopSlider, .headingSlider',
   adaptiveHeight: true
});

jQuery('.laptopSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  asNavFor: '.contentSlider, .headingSlider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

 jQuery('.headingSlider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  loop: true,
  asNavFor: '.laptopSlider, .contentSlider',
  nextArrow: '<span class="arrowNext">&#8592;</span>',
  prevArrow: '<span class="arrowPrev">&#8594;</span>'
});

	jQuery("#asale").hide(); 
  jQuery("#ontimedev").hide(); 
  jQuery("#focuson").hide(); 
  jQuery("#cussa").hide(); 
  jQuery("#qua").hide(); 
jQuery( document ).ready(function() {
 

jQuery( "#quapro" ).click(function() {
 jQuery("#qua").show();
  jQuery("#expteam").hide();
jQuery("#asale").hide();
jQuery("#ontimedev").hide();
jQuery("#focuson").hide();
jQuery("#cussa").hide();
});

jQuery( "#exp" ).click(function() {
 jQuery("#expteam ").show();
 jQuery("#qua").hide();
jQuery("#asale").hide();
jQuery("#ontimedev").hide();
jQuery("#focuson").hide();
jQuery("#cussa").hide();

});

jQuery( "#ontime" ).click(function() {
jQuery("#ontimedev").show();
 jQuery("#qua").hide();
 jQuery("#expteam ").hide();
 jQuery("#asale").hide();
 jQuery("#focuson").hide();
 jQuery("#cussa").hide();

});

jQuery( "#csa" ).click(function() {
jQuery("#cussa").show();
 jQuery("#qua").hide();
 jQuery("#expteam ").hide();
 jQuery("#ontimedev").hide();
 jQuery("#focuson").hide();
 jQuery("#asale").hide();

});

jQuery( "#focon" ).click(function() {
jQuery("#focuson").show();
 jQuery("#qua").hide();
 jQuery("#expteam ").hide();
 jQuery("#asale").hide();
 jQuery("#ontimedev").hide();
 jQuery("#cussa").hide();

});

jQuery( "#ass" ).click(function() {
jQuery("#asale").show();
 jQuery("#qua").hide();
 jQuery("#expteam ").hide();
 jQuery("#ontimedev").hide();
 jQuery("#focuson").hide();
 jQuery("#cussa").hide();

});
 
});