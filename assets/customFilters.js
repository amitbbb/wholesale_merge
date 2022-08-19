//Please add ajaxinate.js above this code
$(function(){
const cssClasses = {
    collectionSidebar: '.collection-sidebar',
    accordionHeading: '.accordion-heading',
    accordionContent: '.accordion-content',
    filterItem: '.collection-sidebar__filter-item',
    filter: '.collection-sidebar__filter-items',
};

// Accordion
const accordionHeading = $(cssClasses.accordionHeading);

accordionHeading.on('click', function () {
    const parentItem = $(this).parent();
    const content = parentItem.find(cssClasses.accordionContent).first();

    $(this).toggleClass('open');
    //content.slideToggle();
  if($(window).width() < 769) {
  	$(this).nextAll("div").stop().slideToggle();
  }
});

// Tag filter
const url = window.location.origin + window.location.pathname;
const filterItem = $(cssClasses.filterItem);
let collectionUrl = $(cssClasses.collectionSidebar).data('collection-url');

var productsContainer = $('#product-grid');

filterItem.each(function () {
    const tag = $(this).data('tag');

    if (url.indexOf(tag) !== -1) {
        $(this).addClass('active');

        console.log($(this), 'add class active');

        const accordionHeading = $(this).parent().parent().find(cssClasses.accordionHeading);

        if (accordionHeading.length !== 0) {
            //accordionHeading.trigger('click');
        }
    }
});

filterItem.on('click', function () {
  console.log("clicked");
    let search = window.location.search;

    if (search.indexOf('page') !== -1) {
        const pageParam = search.split("&")[0];
        search = search.replace(pageParam, '').replace('&', '?');
    }

    const filter = $(this).parents('[data-filter]');
    const filterItems = filter.find(cssClasses.filterItem);


    $(this).toggleClass('active');

    var activeItems = $('.collection-sidebar').find(cssClasses.filterItem + '.active');
    var activeTags = [];

    activeItems.each(function (index, el) {
        var tag = $(el).attr('data-tag');

        if (tag) {
            activeTags.push(tag);
        }
    });

    var tagsUrl = activeTags.join('+');

    var newUrl = collectionUrl;

    if (tagsUrl) {
        newUrl += '/' + tagsUrl;
    }

    newUrl += search;

    $('.collection__main').addClass('ajax-loading');

    //console.log(newUrl);

    $.get({
        url: newUrl,
        success: function (data) {
            var newProductsWrapper = $(data).find("#product-grid");
            var newProductsHtml = newProductsWrapper.html();
            productsContainer.html(newProductsHtml);

            var newItemCount = newProductsWrapper.attr('data-products-count');
            $('.js-product-grid__count').text(newItemCount);

            

            history.pushState({
                page: newUrl
            }, null, newUrl);

            $('#product-grid').removeClass('ajax-loading');
        }
    });
});
  
  $("body").on("click", ".filter-head i", function(){
    var col_url = $(".filter-wrapper").attr("data-collection-url");
        $.get({
        url: col_url,
        success: function (data) {
            var newProductsWrapper = $(data).find("#product-grid");
            var newProductsHtml = newProductsWrapper.html();
            productsContainer.html(newProductsHtml);

            var newItemCount = newProductsWrapper.attr('data-products-count');
            $('.js-product-grid__count').text(newItemCount);
		
			$(".collection-sidebar__filter-item").removeClass("active");        
          
            history.pushState({
                page: col_url
            }, null, col_url);

            $('#product-grid').removeClass('ajax-loading');
        }
    });
  });
  
});


