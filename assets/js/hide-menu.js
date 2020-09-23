var mobile = $('.is-mobile'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		mobile.addClass('out');
	} else {
		mobile.removeClass('out');
	}
	scrollPrev = scrolled;
});
