(function(window, document, $, undefined) {
	$(function() {
        /* Navigation effects */
        $(window).on("scroll", function (e) {
            var nav = $('#navigation'),
                masthead = $('#masthead'),
                sections = $('section'),
                windowTop = $(window).scrollTop();

            /* Scroll-to-fixed navigation */
            if (windowTop < (masthead.position().top + masthead.height() + nav.height())) {
                nav.addClass('scroll');
                nav.removeClass('is-fixed');
            } else if (windowTop > nav.position().top) {
                nav.addClass('is-fixed');
                nav.removeClass('scroll');
            }

            /* Section highlighting */
            for (var i = 0; i < sections.length; i++) {
                if ((windowTop + nav.height()) > $(sections[i]).position().top &&
                    windowTop < ($(sections[i]).position().top + $(sections[i]).height())) {
                    console.log(sections[i].id);
                    showVisibleSection(sections[i].id);
                }
            }
        });

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

    var showVisibleSection = function(id) {
        $('nav a').removeClass('current');
        $('nav a[href=#' + id + ']').addClass('current');
    };
})(window, document, jQuery);