$( document ).ready(function($) {

	$( window ).scroll( function(){

		var $section1 = $( '.pimg1' ),
			$section2 = $( '.pimg2' ),
			$section3 = $( '.pimg3' ),
			$section4 = $( '.pimg4' ),
			$section1text = $( '.pimg1 .ptext' ),
			wScroll = $( this ).scrollTop();

		$section1.css({
			'background-position-y' : -wScroll /8,
		});

		$section1text.css({
			'transform' : 'translateY(' + wScroll /2 + 'px)',
		});

		$section2.css({
			'background-position-y' : -wScroll /12,
		});

		$section3.css({
			'background-position-y' : -wScroll /4,
		});
		console.log(wScroll);
	});

});