(function(window, document, $, undefined) {
	$(function() {
		/* Expertise dial */
		var dialParams = {
			'min': 0,
			'max': 100,
			'readOnly': 'true',
			'fgColor': '#F14B51',
			'displayInput': false
		};
		$(".dial").each(function (i) {
			$(this).knob(dialParams);
		});

        /* Testimonials carousel */
        $('.carousel').unslider({
            fluid: false,
            dots: true,
            speed: 500
        });

		/* Portfolio colorbox */
		$(".admindash").colorbox({rel: "admindash", scalePhotos: 'true', maxWidth: '80%'});
		$(".xbox").colorbox({rel: "xbox", scalePhotos: 'true', maxWidth: '80%'});
		$(".dash").colorbox({rel: "dash", scalePhotos: 'true', maxWidth: '80%'});
		$(".liketool").colorbox({rel: "liketool", scalePhotos: 'true', maxWidth: '80%'});

		$("#xbox-link").click(function() {
			$("#xboxfirst").click();
		});
		$("#admin-link").click(function() {
			$("#adminfirst").click();
		});
		$("#dash-link").click(function() {
			$("#dashfirst").click();
		});
		$("#liketool-link").click(function() {
			$("#likefirst").click();
		});
		
		/* Contact form */
		$("#contactForm").submit(function() {
			$("#resultMessage").empty();
			var data = $(this).serialize();
			console.log('data: ' + data)
			$.post("contact_form.php", data, function(result) {
				$("#resultMessage").html(result);
				console.log('DONE');
			});
		});
	});
})(window, document, jQuery);