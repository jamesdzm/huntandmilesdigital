$(document).ready(function() {
	// Hero buttons jQuery smooth scroll
	$("#learn-more").click(function() {
    $('html, body').animate({
        scrollTop: $("#key-points").offset().top
    }, 1500);
	});

	$("#contact-us").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 1500);
	});

	$("#inspired-contact-us").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 1500);
	});


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
