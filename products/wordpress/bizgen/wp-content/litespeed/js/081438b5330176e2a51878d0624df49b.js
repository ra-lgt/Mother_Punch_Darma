(function($) {
    "use strict";
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $.fn.skillBars = function(options) {
        var settings = $.extend({
            from: 0,
            to: !1,
            speed: 1000,
            interval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null,
            classes: {
                skillBarBar: '.skillbar-bar',
                skillBarPercent: '.skill-bar-percent',
            }
        }, options);
        return this.each(function() {
            var obj = $(this),
                to = (settings.to != !1) ? settings.to : parseInt(obj.attr('data-percent'));
            if (to > 100) {
                to = 100
            };
            var from = settings.from,
                loops = Math.ceil(settings.speed / settings.interval),
                increment = (to - from) / loops,
                loopCount = 0,
                interval = setInterval(updateValue, settings.interval);
            obj.find(settings.classes.skillBarBar).animate({
                width: parseInt(obj.attr('data-percent')) + '%'
            }, settings.speed);

            function updateValue() {
                from += increment;
                loopCount++;
                $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(obj, from)
                }
                if (loopCount >= loops) {
                    clearInterval(interval);
                    from = to;
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(obj, from)
                    }
                }
            }
        })
    };
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
            if ($('.react-parallax-image').length) {
                gsap.to(".react-parallax-image", {
                    scrollTrigger: {
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    x: -250,
                })
            }
            if ($('.react-parallax-image2').length) {
                gsap.to(".react-parallax-image2", {
                    scrollTrigger: {
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    y: -250,
                })
            }
            if ($('.watermark').length) {
                gsap.to(".watermark", {
                    scrollTrigger: {
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    x: 250,
                })
            }
            if ($('.images-2').length) {
                gsap.to(".images-2", {
                    scrollTrigger: {
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    y: -290,
                })
            }
            if ($('.images').length) {
                gsap.to(".images", {
                    scrollTrigger: {
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                    x: -250,
                })
            }
        })
    });
    document.addEventListener("DOMContentLoaded", function() {
        if (window.innerWidth > 768) {
            $(document).ready(function() {
                $(".skew-up").each(function(index) {
                    const text = new SplitType($(this), {
                        types: "checrecter, words",
                        lineClass: "word-line"
                    });
                    let textInstance = $(this);
                    let line = textInstance.find(".word-line");
                    let word = line.find(".word");
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: textInstance,
                            start: "top 85%",
                            end: "top 85%",
                            onComplete: function() {
                                $(textInstance).removeClass("skew-up")
                            }
                        }
                    });
                    tl.set(textInstance, {
                        opacity: 1
                    }).from(word, {
                        y: "100%",
                        skewX: "-5",
                        duration: 2,
                        stagger: 0.09,
                        ease: "expo.out"
                    })
                });
                $(".split_collab").each(function(index) {
                    const textInstance = $(this);
                    const text = new SplitText(textInstance, {
                        type: "chars",
                    });
                    let letters = text.chars;
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: textInstance,
                            start: "top 85%",
                            end: "top 85%",
                            onComplete: function() {
                                textInstance.removeClass(".split_collab")
                            }
                        }
                    });
                    tl.set(textInstance, {
                        opacity: 1
                    }).from(letters, {
                        duration: .5,
                        autoAlpha: 0,
                        x: 50,
                        stagger: {
                            amount: 1
                        },
                        ease: "back.out(1)"
                    })
                })
            })
        }
    });
    $(document).ready(function() {
        $(window).on('load', function() {
            var hash = window.location.hash;
            if (hash) {
                var $target = $(hash);
                if ($target.length) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top
                    }, 1000)
                }
            }
        })
    });
    $(document).on('click', '.menu-cart-area', function() {
        $(".cart-icon-total-products").addClass("visible-cart");
        $(".body-overlay-cart").addClass("overlayshow")
    });
    $(document).on('click', '.body-overlay-cart', function() {
        $(this).removeClass("overlayshow");
        $(".cart-icon-total-products").removeClass("visible-cart")
    });
    $(document).on('click', '.close-cart', function() {
        $(".cart-icon-total-products").removeClass("visible-cart");
        $(".body-overlay-cart").removeClass("overlayshow")
    });
    document.addEventListener("DOMContentLoaded", function() {
        const circleText = document.querySelector('.circle-text');
        if (circleText) {
            const textSpans = circleText.querySelectorAll('span');
            let rotation = 0;
            const rotationStep = 360 / textSpans.length;
            textSpans.forEach((span, index) => {
                span.style.transform = `rotate(${rotation}deg) translateX(150px)`;
                rotation += rotationStep
            })
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        var rtsBtn = document.querySelector('.button-area-box-shadow .rts-btn');
        var overlaySection = document.querySelector('.overlay-bottom-section');
        var isToggled = !1;
        if (rtsBtn && overlaySection) {
            rtsBtn.addEventListener('click', function() {
                if (!isToggled) {
                    rtsBtn.style.margin = '0px auto 0 auto';
                    rtsBtn.innerHTML = 'View less feedbacks';
                    overlaySection.classList.remove('overlay-bottom-section')
                } else {
                    rtsBtn.style.margin = '';
                    rtsBtn.innerHTML = 'View all feedbacks';
                    overlaySection.classList.add('overlay-bottom-section')
                }
                isToggled = !isToggled
            })
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        let headerSwitchCheckbox = document.getElementById("headerSwitchCheckbox");
        if (headerSwitchCheckbox) {
            let htmlTag = document.documentElement;
            let themeMode = localStorage.theme;
            if (themeMode) {
                htmlTag.setAttribute("data-theme", themeMode);
                if (themeMode === "dark") {
                    localStorage.theme === "dark"
                    headerSwitchCheckbox.checked = !0
                } else {
                    localStorage.theme === "light"
                    headerSwitchCheckbox.checked = !1
                }
            }

            function toggleTheme(e) {
                if (headerSwitchCheckbox.checked) {
                    htmlTag.setAttribute("data-theme", "dark");
                    localStorage.theme = 'dark'
                } else {
                    htmlTag.setAttribute("data-theme", "light");
                    localStorage.theme = 'light'
                }
            }
            headerSwitchCheckbox.addEventListener("change", toggleTheme)
        }
    })
})(jQuery);