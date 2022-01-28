(function(){
	
	'use strict'
	var question = $('dt');
	var kurzy = $('.kurzy');
	var subMenu = $('.submenu');
	var menuBars = $('.menu-bars');
	var BEST = $('animate-heading');
	var win = $(window);
	$('dd').hide();
	subMenu.hide();
	var BESTHeight = BEST.height();

	$('.c-icons').on({
		mouseenter: function(){
			$(this).addClass('contactLinksColor');
		},

		mouseleave: function(){
			$(this).removeClass('contactLinksColor');
		}
	})

	question.click(function(){
		$(this).next().slideToggle()
				.siblings('dd').slideUp();		 
	});


	kurzy.click(function(event){
		event.preventDefault();
		subMenu.slideToggle();
	});

	menuBars.click(function(event){
		event.preventDefault();
		$(this).next().toggleClass('showMenu');
						
	});

	//
	//back to top
	//

	var backToTop = $('<a>',{
						href: '#',
						class: 'back-to-top',
						html: '<i class="fas fa-chevron-up fa-3x"></i>'
					});
	backToTop.hide();
	$(function(){
		win.scroll(function(){
			if( win.scrollTop() > 400 ){
				backToTop.show(300);
			}
			else backToTop.hide(300);
		});
	});

	backToTop.appendTo('body')
			.on('click', function(){
				$('body, html').animate({ scrollTop: 0 }, 500);
			});

	//logo scroll

	$('.logo-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					autoplay: true,
					autoplaySpeed: 4000,
					infinite: true
				}
			},

			{
				breakpoint: 766,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: true,
					autoplaySpeed: 3000,
					infinite: true
				}
			},

			{
				breakpoint: 430,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					infinite: true
				}
			}
			
		]
	});



})(jQuery);

	











