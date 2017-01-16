$(document).ready(function() {
	// $('#arrowBounceIn').addClass('bounceInUp').delay(3000);
	$('#arrowBounceIn').delay(1000).queue(function(){
		$(this).removeClass('hiddenSpan');
		$(this).addClass('bounceInDown');
	});
	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
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
