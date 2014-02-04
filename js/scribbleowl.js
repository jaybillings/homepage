(function(window, document, $, undefined) {
	$(function() {
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
		
		/* Colorbox */
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
	});
})(window, document, jQuery);