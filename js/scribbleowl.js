(function(window, document, $, undefined) {
	$(function() {
        var $nav = $('#navigation'),
            $masthead = $('#masthead');

        /* Navigation effects */
        $(window).on("scroll", function (e) {
            var $sections = $('section'),
                $welcome = $('#welcome');
                windowTop = $(window).scrollTop();

            /* Scroll-to-fixed navigation */
            if (windowTop < ($masthead.offset().top + $masthead.height())) {
                $nav.addClass('scroll');
                $nav.removeClass('is-fixed');
                $welcome.removeClass('is-fixed');
            } else {
                $nav.addClass('is-fixed');
                $welcome.addClass('is-fixed');
                $nav.removeClass('scroll');
            }

            /* Section highlighting */
            for (var i = 0; i < $sections.length; i++) {
                if ((windowTop + $nav.height()) >= $($sections[i]).offset().top) {
                    showVisibleSection($sections[i].id);
                }
            }
        });

		/* Subsection navigation */
		$nav.find('a').click(function() {
            var section = $(this).attr('href'),
                $section = $(section),
                position;

            if (section == '#welcome') {
                position = $section.offset().top - $masthead.height() + 1;
            } else {
                position = $section.offset().top - $nav.height() + 1;
            }
            $('html, body').animate({
                scrollTop: position
            }, 2000);

            return false;
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
			$.post("contact_form.php", data, function(result) {
				$("#resultMessage").html(result);
			});
		});
	});

    var showVisibleSection = function(id) {
        $('nav a').removeClass('current');
        $('nav a[href=#' + id + ']').addClass('current');
    };
})(window, document, jQuery);