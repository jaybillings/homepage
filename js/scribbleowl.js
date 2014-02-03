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
	});
})(window, document, jQuery);