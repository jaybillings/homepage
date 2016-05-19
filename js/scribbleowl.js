(function(window, document, $, undefined) {
	$(function() {
        var $nav = $('#navigation'),
            $masthead = $('#masthead'),
            slider;

		/* Subsection navigation */
		$nav.find('a').click(function() {
            var $thePage = $('html, body'),
                section = $(this).attr('href'),
                $section = $(section),
                position;

            // Cancel any ongoing animation
            $thePage.stop();

            position = $section.offset().top - $nav.height() + 1;

            $thePage.animate({
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
        slider = $('.carousel').unslider({
            autoplay: false,
            arrows: false,
            animateHeight: true
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

        /* Navigation effects */
        $(window).on("scroll", function (e) {
            var $welcome = $('#welcome'),
                windowTop = $(window).scrollTop(),
                currentSection;

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
            currentSection = findCurrentSection();
            showCurrentSection(currentSection);
        });
	});


    /* Utility functions */

    /*
     * Name: findCurrentSection
     * Input: None
     * Output: section id - string
     * Side Effects: none
     */
    var findCurrentSection = function() {
        var sections = $('section'),
            visibleTop = $(window).scrollTop() + $('#navigation').height(),
            i,
            $section,
            sectionTop;

        for (i = 0; i < sections.length; i++) {
            $section = $(sections[i]);
            sectionTop = $section.offset().top;

            if ((visibleTop >= sectionTop)
                && (visibleTop < (sectionTop + $section.height()))) {
                return $section.attr('id')
            } else if (visibleTop < $('#welcome').offset().top) {
                return 'masthead'
            }
        }

        return ''
    };

    /*
     * Name: showCurrentSection
     * Input: section id - string
     * Output: None
     * Side Effects: Adds 'current' class to nav tab & removes from others
     */
    var showCurrentSection = function(id) {
        $('nav a').removeClass('current');

        if (id) {
            $('nav a[href=#' + id + ']').addClass('current');
        }
    };
})(window, document, jQuery);