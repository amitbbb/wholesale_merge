




$(window).on("load", function() {
   
  if($('.cell-landing-products-slider').length > 0) {
    $('.cel-landing-products-slider-main .cell-landing-products-slider ').slick({
      infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1025,
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

  
   if($('.article-with-image').length > 0) {
    $('.article-with-image .right-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  if($('.announcement-bar').length > 0) {
    $('.announcement-bar').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000
    });
  }
   
});

//Jeffs code additions
$(function() {
  var a = document.getElementById('s-07ea4b3d-47a5-4b70-ae21-b6e8f09b9d70');
  var openGorgias = function() {
    var iframe = document.getElementById('chat-button');
    var g = iframe.contentWindow.document.querySelector('#gorgias-chat-messenger-button');
    g.click();

  a.addEventListener('click', openGorgias, false);
  }
  
  if($(".review-box-slider").length > 0) {
    if($(window).width() < 768) {
      $(".review-box-slider >.shg-row").slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }
  
  if($(".cell-salt-slider2").length > 0 && $(".cell-salt-slider1").length > 0) {
    $(".cell-salt-slider1 >.shg-row").append($(".cell-salt-slider2 >.shg-row").html());
    $(".cell-salt-slider2").remove();
    $('.cell-salt-slider >.shg-row').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1025,
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
  else {
    if($('.cell-salt-slider').length > 0) {
      $('.cell-salt-slider > .shg-row').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1025,
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
  }

  
});



$(function() {
 
  
  $("body").on("click", ".inline-review-stars a.bv_main_container", function(event){
  event.preventDefault();
  var reviewId = "#"+$(".product-reviews").attr("id");
  $("body,html").animate({
    scrollTop: $(reviewId).offset().top - 50
  });
 });
  
  
  if ($(window).width() >= 768) {
  $("body").on("click", ".locator_label p a", function(event){
  event.preventDefault();
  event.stopPropagation();  
  $('html, body').animate({
        scrollTop: $("#sec-logo").offset().top - 150
    });
  return false;
}); 
  }
  else{
      $("body").on("mouseup", ".locator_label p a", function(event){
  event.preventDefault();
  event.stopPropagation();  
  $('html, body').animate({
        scrollTop: $("#sec-logo").offset().top
    });
  return false;
});
  }
  
  
  $("body").on("click", ".view-coupon", function(){
    window.open('https://cdn.shopify.com/s/files/1/1533/0491/files/coupon.pdf?v=1638450029', '_blank');
  });
  
  
  $("body").on("click", ".coupon_label p a", function(event){
    event.preventDefault();
    $('.coupon-popup').show();
    $('.coupon-popup-overlay').show();
    $("body").addClass("overflow");

  });
  $("body").on("click", ".coupon-popup-overlay", function(){
     $(".coupon-popup").hide();
     $('.coupon-popup-overlay').hide();
     $("body").removeClass("overflow");
    
  });
  $("body").on("click", ".close-pop", function(){
     $(".coupon-popup").hide();
    $('.coupon-popup-overlay').hide();
     $("body").removeClass("overflow");
    
  });
  
  
  
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(iOS) {
    
    $("body").addClass("Ios-true");
  }
  else {
    //alert("Not IOS");
  }
  
    if($("body").hasClass("index")) {
		$("body").addClass("home");
	}
	if ($('body').hasClass('home')) { 

  /*$(window).on("load", function(){
    
    setTimeout(function(){
      $(".popup-wrapper").show();
      $("body").addClass("overflow");
    }, 30000);
  });*/
  /*$("body").on("click", ".kl-private-quill-wrapper-Lkqws1 p u", function(){
     $(".popup-wrapper").hide();
     $("body").removeClass("overflow");
  });
  $("body").on("click", ".close-btn", function(){
     $(".popup-wrapper").hide();
     $("body").removeClass("overflow");
  });
  
    $("body").on("click", ".popup-overlay", function(){
     $(".popup-wrapper").hide();
     $("body").removeClass("overflow");
  });*/
  setInterval(function(){
    if($(".popup-main form").length > 0 && $(".popup-main .popup-overlay").length < 1) {
      $("<div class='popup-overlay'></div>").insertBefore(".popup-main form");
      //$('<div class="close-btn">+</div>').prependTo(".popup-main form>div:eq(1)");
      $(".popup-main .close-btn").css({"display":"block"});
    }
  }, 1000);
  setInterval(function(){
    if($(".popup-main form").length > 0 ) {
      var w = $(".popup-main form").width();
      var x = $(".popup-main form").offset().left + w;
      
      var h = $(".popup-main form").height();
      var y = $(".popup-main form").offset().top;
      
      var y1 = ($(window).height() - $(".popup-main form").height()) / 2;
      $(".popup-main .close-btn").css({"left": (x - 40)+"px", "top": (y1 + 15)+"px"});      
      if($(window).width() <= 1024) {
      	$(".popup-main .close-btn").css({"left": (x - 40)+"px", "top": (y1 - 330)+"px"}); 
      }
      if($(window).width() == 768) {
      	$(".popup-main .close-btn").css({"left": (x - 40)+"px", "top": (y1 + 10)+"px"}); 
      }
	   if($(window).width() <= 767) {
      	$(".popup-main .close-btn").css({"left": (x - 40)+"px", "top": (y1 - 5)+"px"}); 
      }
    }
  }, 1000);
}


  
  
   
  if($('.product-media-wrapper').length > 0) {
    $('.product-media-wrapper').slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  $("body").on("click", '.product-image-slider-controls span', function(){
    if($(this).hasClass("slideToPrev")) {
      //$(".product-media-wrapper").slick('slickPrev');
      if($(this).parent().prev().hasClass("product-grid")) {
        $(this).parent().prev(".product-grid").slick('slickPrev');
        //console.log("grid");
      }
      else {
      	$(this).parent().prev().slick('slickPrev');
      }
    }
    if($(this).hasClass("slideToNext")) {
      if($(this).parent().prev().hasClass("product-grid")) {
        $(this).parent().prev(".product-grid").slick('slickNext');
      }
      else {
      	$(this).parent().prev().slick('slickNext');
      }
      
    }
  });
  
  
  $("body").on("click", '.product-image-slider-controls span', function(){
    if($(this).hasClass("slideToPrev")) {
      $(".product__media-list").slick('slickPrev');
    }
    if($(this).hasClass("slideToNext")) {
      $(".product__media-list").slick('slickNext');
      
    }
  });
 
  
  $('body').on('click', '.facet-filters__label img, .hide-filter, .close-filter', function(){
    $('.main-grid-wrap').toggleClass('active');
    $('.hide-filter').toggleClass('active');
  });

  
  setProductTitle();
    if($('.product__media-list').length > 0) {
      $('.product__media-list').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    
  if($(".ingredient-wrapper").length > 0) {
    $(".ingredientsTags").each(function(){
      if($(this).find(".ingredient-list li").length > 0) {
        $(this).find(".ingredient-list li").appendTo($(".ingredient-tag .ingredient-list"));
      }
    });
  }
  var ingCount = 0;
  if($(".ingredient-wrapper").length > 0) {
    $(".ingredientsTags").each(function(){
      if($(this).find(".ingredient-list li").length < 1) {
        $(this).css({"display":"none"});
      }
      else {
        ingCount++;
      }
    });
    if(ingCount == 0) {
      $(".information-tabs").addClass("no-ingredients");
    }
  }
  
 	setProductImageHeight();
  
  if($('.logos').length > 0) {
    $('.logos').prepend('<a href="https://shop.hylands.com/" class="hylands-home" target="_blank"><figure><img src="https://cdn.shopify.com/s/files/1/1533/0491/files/Hylands-Logo-TM_1.png?v=1638919002"></figure></a>');
    
    $('.logos a').attr('target', '_blank');
    
  }
     $(".logos .hylands-home").click(function(event) {
      event.preventDefault();
      $('html,body').animate({
          scrollTop: $("#shopify-section-email-popup").offset().top },
          'slow');
      });
  
  
  
});


function setProductImageHeight(){
  $(".product__media-list li img").css({"height": "auto"});
  var imgHeight = 100;
  $(".product__media-list li").each(function(){
    var thisHeight = $(this).find("img").height();
    if(thisHeight > imgHeight) { imgHeight = thisHeight; }
  });
  $(".product__media-list li img").css({"height" : imgHeight+"px"});
}

function setProductTitle() {
  if($(window).width() < 751) {
    $(".productTitleWrap").prependTo(".product.grid");
  }
  else {
    $(".productTitleWrap").prependTo(".product__info-container");
  }
}

$(window).on('resize', function () {
  setProductTitle();
  setTimeout(function(){
  	setProductImageHeight();
  }, 300);
  
});
$(window).on('load', function () {
  if($('.kids-slider').length > 0) {
    $('.kids-slider > .shg-row').each(function(){
    $(this).slick({
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
		responsive: [
          {
          breakpoint: 770,
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
   });
  }

  
  setInterval(function(){
    if($(".slick-grid").length > 0 && !$(".slick-grid").hasClass("slick-initialized")) {
      $(".slick-grid").slick({
          infinite: true,
          arrows: false,
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
          {
          breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
          },
          {
          breakpoint: 750,
            settings: {
                slidesToShow: 1,
            }
          }
        ]
      });
    }
    
  }, 1000);
  
  
$("body").on("click", ".card-information__wrapper0", function(event){ 
  if(!$("body").hasClass("product")) {
    event.preventDefault();
  	var vID = $(this).children().children().attr('data-id');
    var vProp = $(this).children().children().attr('data-shipping-property')
  	addUpsellProduct(vID, vProp);
  }
  
});
/*$("body").on("click", ".product-recommendations .card-information__wrapper", function(event){ 
    event.preventDefault();
  	var vID = $(this).children().children().attr('data-id');
  	addUpsellProduct(vID);
});*/

  
$("body").on("click", ".select-box", function(){
	$('.select-wrapper').toggle();
});
  
  
function customSort(sortValue) {
  let collectionUrl = $(".filter-wrapper").data('collection-url')+"/?sort_by="+sortValue;
  //console.log(collectionUrl);
  
  $.get({
        url: collectionUrl,
        success: function (data) {
            var newProductsWrapper = $(data).find("#product-grid");
            var newProductsHtml = newProductsWrapper.html();
            $('#product-grid').html(newProductsHtml);

            var newItemCount = newProductsWrapper.attr('data-products-count');
            $('.js-product-grid__count').text(newItemCount);
            history.pushState({
                page: collectionUrl
            }, null, collectionUrl);

            $('#product-grid').removeClass('ajax-loading');
        }
    });
}  
  
$("body").on("click", ".custom-select li", function(){
	var selected = $(this).children().text();
  	var selected_val = $(this).data('value');

  $('.sel-text').text(selected);
   customSort(selected_val);
	//$('#SortBy').val(selected_val);
  	
	//var elem = document.getElementById('SortBy');
      //elem.dispatchEvent(new Event("change"));
});
  
    
  
$("body").on("click", ".custom-select.in-blog li", function(){
	var selected = $(this).children().text();
  	var selected_val = $(this).data('value');

  $('.sel-text').text(selected);
	$('#BlogTagFilter').val(selected_val);
  	
	var elem = document.getElementById('BlogTagFilter');
     elem.dispatchEvent(new Event("change"));
});

  
  /*I am new Badge*/  
 $(window).on("load", ".new-badge h3 a", function() {
  var href = $(this).attr('href');
   //console.log(href);

 });
  
  
  

  
$('.customfield-tabs .tab-info-wrap p a').click(function(){
  window.open('https://cdn.shopify.com/s/files/1/1533/0491/files/HKIEO---G48_Lot_21253.pdf?v=1644880366', 'name', 'width=1000,height=1000');
  return false;
});  
  
});

$(window).on("load", function(){
     $('<a href="/account">Customer Login</a>').appendTo(".header__icon .account-list li:nth-child(1)");
     $('<a href="/tools/recurring/login">Subscriptions</a>').appendTo(".header__icon .account-list li:nth-child(2)");
     $('<a href="/pages/loyalty-program">Wellness Rewards</a>').appendTo(".header__icon .account-list li:nth-child(3)");
  
 
});

$("body").on("mouseenter", ".header__icons .my-account-icon", function(){
	$(this).children(".account-list").addClass("active");
});

$("body").on("mouseleave", ".header__icons .my-account-icon", function(){
	$(this).children(".account-list").removeClass("active");
});


$("body").on("mouseenter", ".header__inline-menu>ul>li", function(){
  if(!$(this).hasClass("open")) {
  	$(this).addClass("open");
  }
});
$("body").on("mouseleave", ".header__inline-menu>ul>li", function(){
  $(this).removeClass("open");
});
$("body").on("click", ".see-all a", function(event){
  event.preventDefault();
  $(".grid__item").removeClass("grid-inactive");
  $(".see-all").css({"display": "none"});
});
var searchVal = "";
$("body").on("keyup", ".search-enabled .search-modal form", function(){
  searchVal = $(".search-enabled .search-modal .search__input.field__input").val();
  if(searchVal == "") {
  	$(".search-enabled .search-modal .field__label").text("I'm looking for.. 'pain relief'");
  }
  else {
    $(".search-enabled .search-modal .field__label").text("I'm looking for.. " + searchVal);
  }
});
$("body").on("focusin", ".search-enabled .search-modal form", function(){
   $(".search-enabled .search-modal .search__input.field__input").val(searchVal);
   if(searchVal == "") {
  	$(".search-enabled .search-modal .field__label").text("I'm looking for.. 'pain relief'");
  }
  else {
    $(".search-enabled .search-modal .field__label").text("I'm looking for.. " + searchVal);
  }
});
$("body").on("focusout", ".search-enabled .search-modal form", function(){
  $(".search-enabled .search-modal .search__input.field__input").val("");
  if(searchVal == "") {
  	$(".search-enabled .search-modal .field__label").text("I'm looking for.. 'pain relief'");
  }
  else {
    $(".search-enabled .search-modal .field__label").text("I'm looking for.. " + searchVal);
  }
});


$("body").on("keyup focus", ".header__search .search__input", function(){
  if($.trim($(this).val()) != "") {
    var searchTerm = $(this).val();
    $(".searchResultWrapper h2#predictive-search-products svg").show();
      	$(".searchResultWrapper .predictive-search__loading-state").show();
    fetch(`${routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&${encodeURIComponent('resources[type]')}=product&${encodeURIComponent('resources[limit]')}=4&section_id=predictive-search`)
      .then((response) => { 
        if (!response.ok) {
          var error = new Error(response.status);
          //this.close();
          throw error;
        }
		//console.log(response.text());
        return response.text();
      })
      .then((text) => {
      
        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
        //this.cachedResults[queryKey] = resultsMarkup;
        //this.renderSearchResults(resultsMarkup);
      	//console.log(resultsMarkup);
        $(".searchResultWrapper").html(resultsMarkup);
        $(".searchResultWrapper h2#predictive-search-products svg").hide();
      	$(".searchResultWrapper .predictive-search__loading-state").hide();
      
      })
      .catch((error) => {
        //this.close();
        throw error;
      }); 
  }
});
$("body").on("click", function(event){
  if(!$(event.target).closest(".header__search").length){
    $(".searchResultWrapper").empty();
    $(".header__search .search__input").val("");
    $(".header__search .search__input").css({"width":"18px", "opacity":"0"});
    //console.log("focusout");
  }
});
$("body").on("focusout", ".header__search .search__input", function(){
  
});
$("body").on("click", ".field__button", function(event){
  if($.trim($(".header__search .search__input").val()) == "") {
  	event.preventDefault();
    //$(".header__search .search__input").stop().toggleClass("active");
    if($(".header__search .search__input").width() > 100) {
      $(".header__search .search__input").css({"width":"18px", "opacity":"0"});
    }
    else {
    	$(".header__search .search__input").css({"width":"159px", "opacity":"1"});
      	$(".header__search .search__input").focus();
    }
  }
});





$("body").on("change", ".rc-radio-group__options input[type='radio']", function(){
  if($(this).is(":checked")) {
    //$(".rc-radio").removeClass("rc_widget__option--active rc-option--active");
    //$(this).parent(".rc-radio").addClass("rc_widget__option--active rc-option--active");
     if($(this).val() == 'subsave') {
        $(".otButton").css({"display":"none"});
        $(".addSubscription").css({"display":"block"});
  	 }
      else {
        $(".addSubscription").css({"display":"none"});
		$(".otButton").css({"display":"block"});
      }
  }
});

$("body").on("click", ".addSubscription", function(event){
  event.preventDefault();
  event.stopPropagation();
  var _this = $(this);
  var variant_id = $(".product-form form input[name='id']").val();
  var qty = $(".product-form__quantity input[name='quantity']").val();
  var unit_type = "";
  var isSubs = false;
  $(".rc_container .rc-radio-group__options label").each(function(){
    if($(this).children("input[type='radio']").is(":checked")) {
      var subs_type = $(this).children("input[type='radio']").val();
      if(subs_type != 'onetime') {
        isSubs = true;
      }
    }
  });
  if(isSubs) {
    _this.addClass("loading");
    _this.children().removeClass("hidden");
    var frequency = $(".rc_container select[name='selling_plan']").val();
    frequency = $.trim($(".rc_container select[name='selling_plan'] option[value='"+frequency+"']").attr("data-plan-option"));
    var fu = frequency.split(" ");
    //frequency = fu[0];
    //unit_type = fu[1];
    var selling_plan = $(".rc_container select[name='selling_plan']").val();
    //console.log(unit_type + " - " + frequency);
  var data = {
      "id": variant_id,
      "quantity": qty,
      "selling_plan": selling_plan,
      properties: {
        'Selling Plan' : frequency
      }
  }
  //console.log(data);
  	jQuery.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function() {
        _this.removeClass("loading");
    	_this.children(".loading-overlay__spinner").addClass("hidden");
        showMiniCart();
      }
    });
  }
});

$("body").on("click", ".otButton", function(event){
  event.preventDefault();
  var _this = $(this);
  var variant_id = $(".product-form form input[name='id']").val();
  var qty = $(".product-form__quantity input[name='quantity']").val();
    _this.addClass("loading");
    _this.children().removeClass("hidden");
  var data = {
      "id": variant_id,
      "quantity": qty,
  }
   
  	jQuery.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function() {
        _this.removeClass("loading");
    	_this.children(".loading-overlay__spinner").addClass("hidden");
        showMiniCart(data.id);
      },
      error: function(data){
        console.log(data);
        
         var element_id = data.responseJSON.description;
         var number = element_id.match(/\d+/);
        
        // add custom code
        _this.removeClass("loading");
    	_this.children(".loading-overlay__spinner").addClass("hidden");
        alert('You are trying to add more units then the available quantity ('+number+'), Please reduce the quantity and try again.');
      }
    });
});



$("body").on("click", ".locator_label p a", function(event){
  event.preventDefault();

});



$(window).on("load", function(){
  setTimeout(function(){
  	let searchParams = new URLSearchParams(window.location.search)
      if(searchParams.get('promo') == "cnc") {
        //console.log("found");
        /*$("html, body").animate({
          scrollTop: $(".logo-list").offset().top - 150
        }, 300);*/
        $('.coupon-popup').show();
        $('.coupon-popup-overlay').show();
        $("body").addClass("overflow");
      }
    }, 1000);
});

/****************************/
$(window).on("load", function(){
  
  if($('.logos').length > 0) {
      $('.logos a').attr('target', '_blank');
  }
  
  var ptext = $(".logo-list-wrapper p").text();
  
  $(".logo-list-wrapper h2 span").append(ptext);

});



if($('.yotpo-custom').length > 0) {
  $("body").addClass("yotpo-custom");
}







/*Yotpo app*/
if ($(window).width() >= 769) {
$("body").on("mousedown", "div[aria-label='FreeTextCampaign'] .yotpo-campaign-switcher-wrapper", function(){
  console.log("clicked");
  $('html, body').animate({
          scrollTop: $(".yotpo-widget-referral-widget").offset().top - 100
  }, 500);

  
});
  
}

else{
  $("body").on("mousedown", "div[aria-label='FreeTextCampaign'] .yotpo-campaign-switcher-wrapper", function(){
  console.log("clicked");
  $('html, body').animate({
          scrollTop: $(".yotpo-widget-referral-widget").offset().top + 400
  }, 500);

  
});
}




$(window).on("load", function(){
  if($('.product-section').length > 0) {
    /*if($(".locator_label").length > 0) {
  		var locator_label = $(".locator_label").html();
  		$('<div class="locator_label">' + locator_label + '</div>').appendTo(".inline-review-stars");
    }*/
    
  $(".formWrapper").next(".locator_label").css("display", "none");
  
  
  var currentPrice =  $(".rewards_points").children(".current-price").text();   
  var round_num =  (Math.round(currentPrice));

  $(".rewards_points p .num_ber").append(round_num);
  }
});





/*$("body").on("click", ".ibtn", function(){
  $(".rewards_popup").show();
});*/


$(".ibtn").click(function(e){
    e.preventDefault();
    $(".rewards_popup").fadeToggle("slow");
});


$(document).on('click', function (event) {
  if (!$(event.target).closest('.rewards_points').length) {
    $(".rewards_popup").fadeOut("slow");
  }
});





$('body').on('click', '.product-form__input > label', function() {
  var attr_value = $(this).prev().attr('value').toUpperCase();
  
  $(".product__media-list .productMdiaItemMain").each(function(){
        
    	var img_alt = $(this).find("img").attr("alt").toUpperCase();
    
        if(attr_value == img_alt){
          $(".product-single__media-group .product-single__media-wrapper").addClass("slick-current slick-active");
          $(this).removeClass("slick-current slick-active");
        }
    
  });
  
});




/*PDP new Design*/

if($('.ingredient-wrapper').length > 0) {
  
$('body').on('click', '.ingredient-wrapper .text-wrap h3', function() {
  $(this).next('.tag-text').slideToggle();
  $(this).parent('.text-wrap').toggleClass('active');
  
});
  
}

if($('.faq-accordion').length > 0) {
  
$('body').on('click', '.acc-wrapper ul li h3', function() {
  $(this).next('.faq-answer').slideToggle();
  $(this).parent().toggleClass('active');
  
});
  
}



$(function() {
  if($('.product-section').length > 0) {
    if($(".locator_label").length > 0) {
  		var locator_label = $(".locator_label").html();
  		$('<div class="locator_label">' + locator_label + '</div>').appendTo(".inline-review-stars");
    }
  }
    
  $('.swatch-main .shg-box-content .shg-c:nth-child(2) .shg-row .shg-c-lg-4').appendTo('.swatch-main .shg-box-content .shg-c:nth-child(1) .shg-row');
  $('.swatch-main .shg-box-content .shg-c:nth-child(3) .shg-row .shg-c-lg-4').appendTo('.swatch-main .shg-box-content .shg-c:nth-child(1) .shg-row');
});

/*$("body").on("mouseenter", ".swatch-main .shg-row .shg-c-lg-4", function(event){
   var hov_index = ($(this).index());
  $(".custom-slick .shg-sld-slides .shg-sld-item").removeClass("shg-sld-active");
  $(".custom-slick .shg-sld-slides .shg-sld-item:eq("+hov_index+")").addClass("shg-sld-active");
   
});*/


$(window).on("load", function(){
  
var x = setInterval(function(){
  if($("#dynamic-react-root").length > 0){
  	//$("#dynamic-react-root").next("div").wrapAll("<div class='new-popup'></div>");
    clearInterval(x);
  }
  }, 1000);
  
  var z = setInterval(function(){
    
    if($("[data-testid='klaviyo-form-WxY32S'] > div").length == 1){
      $("[data-testid='klaviyo-form-WxY32S']").addClass("success");
      clearInterval(z);
    }
  }, 1000);
});

