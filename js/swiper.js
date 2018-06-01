		//  轮播图	
		console.log(Swiper)
		  var mySwiper = new Swiper ('.swiper-container', {
		    // Optional parameters
		    //direction: 'vertical',
		    loop: true,
		    touchMoveStopPropagation : false,
		      autoplayDisableOnInteraction : false, 
		
		    // If we need pagination
		    pagination: {
		      el: '.swiper-pagination',
		    },
		
		    // Navigation arrows
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		
		    // And if we need scrollbar
		    scrollbar: {
		     // el: '.swiper-scrollbar',
		    },
		      autoplay: {
    				delay: 3000,
    				
 			 },
		  })