$(document).ready(function() {
	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
	// Use jQuery.waypoint to trigger on scroll
	// Email @ on enter
	$('#email-animate').css('opacity', 0);
	$('#email-animate').waypoint(function(){
		$('#email-animate').addClass('rotateIn');
	}, {offset: '100%'});
	// spb mobile on enter
	// etc...
	// $('#marketing-animate').css('opacity', 0);
	// $('#marketing-animate').waypoint(function(){
	// 	$('#marketing-animate').addClass('bounceInUp');
	// }, {offset: '100%'});
	// jQuery ajax POST for contact form submission
	$('#contact-form').on('submit', function(e) {
	  e.preventDefault();
		$.ajax({
			url: 'https://formspree.io/enquiries@huntandmilesdigital.co.uk',
			method: 'POST',
			data: $('#contact-form').serialize(),
			dataType: 'json',
			beforeSend: function() { /* sending message... */ },
			success: function(data) {
				location.reload();
			},
			error: function(err) { /* error message... */ }
		});
	});
});
