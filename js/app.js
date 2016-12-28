$(document).ready(function() {
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
