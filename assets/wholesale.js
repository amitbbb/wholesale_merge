$( document ).ready(function() {
  if($('.popular-cards-slider').length > 0) {
    $('.popular-cards-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  }
  if($('.landing-products-slider').length > 0) {
    $('.landing-products-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  }
});


$( document ).ready(function() {
  if ($(window).width() <= 768  && (!$(body).hasClass("index"))) {
    $(".four-products-image > .main-text-block").prependTo(".left-side-main-container > .left-side-container");
    if($('.left-side-main-container .right-side-container').length > 0) {
        $('.left-side-main-container .right-side-container').slick({
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          responsive: [
                      {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          ]
      });
    }
    
  }
});

  $("body").on("click", ".infoTitle", function(){
    $(this).next(".infoText").stop().slideToggle();
    $(this).toggleClass('active');
  }); 
