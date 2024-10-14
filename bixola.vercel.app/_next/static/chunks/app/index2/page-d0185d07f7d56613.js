(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [395], {
        2280: function(s, e, a) {
            Promise.resolve().then(a.bind(a, 5518)), Promise.resolve().then(a.bind(a, 5146)), Promise.resolve().then(a.bind(a, 4035)), Promise.resolve().then(a.t.bind(a, 6685, 23)), Promise.resolve().then(a.bind(a, 7189)), Promise.resolve().then(a.bind(a, 2413)), Promise.resolve().then(a.bind(a, 6975)), Promise.resolve().then(a.bind(a, 68)), Promise.resolve().then(a.bind(a, 9667)), Promise.resolve().then(a.bind(a, 7582)), Promise.resolve().then(a.bind(a, 5510)), Promise.resolve().then(a.bind(a, 4140)), Promise.resolve().then(a.bind(a, 3733)), Promise.resolve().then(a.bind(a, 4577))
        },
        68: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return l
                }
            });
            var i = a(7437),
                t = a(2265);

            function n(s) {
                let {
                    end: e,
                    duration: a
                } = s, [n, l] = (0, t.useState)(0), c = (0, t.useRef)(null), r = e / a;
                (0, t.useEffect)(() => {
                    let s = new IntersectionObserver(e => {
                        let [a] = e;
                        a.isIntersecting && (o(), s.disconnect())
                    }, {
                        threshold: 0
                    });
                    return c.current && s.observe(c.current), () => {
                        s.disconnect()
                    }
                }, []), (0, t.useEffect)(() => {
                    let s = setInterval(() => {
                        l(a => {
                            let i = a + r;
                            return i >= e ? (clearInterval(s), e) : i
                        })
                    }, 1e3 / a);
                    return () => {
                        clearInterval(s)
                    }
                }, [e, r]);
                let o = () => {
                    l(0)
                };
                return (0, i.jsx)("span", {
                    ref: c,
                    children: (0, i.jsx)("span", {
                        children: Math.round(n)
                    })
                })
            }

            function l(s) {
                let {
                    end: e
                } = s, [a, l] = (0, t.useState)(!1), c = () => {
                    let s = document.getElementsByClassName("count-text");
                    if (s.length > 0) {
                        let e = s[0],
                            i = e.getBoundingClientRect(),
                            t = i.top >= 0 && i.bottom <= window.innerHeight;
                        t && !a && l(!0)
                    }
                };
                return (0, t.useEffect)(() => (window.addEventListener("scroll", c), () => {
                    window.removeEventListener("scroll", c)
                }), []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("span", {
                        className: "count-text",
                        children: a && (0, i.jsx)(n, {
                            end: e,
                            duration: 20
                        })
                    })
                })
            }
        },
        5146: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return c
                }
            });
            var i = a(7437),
                t = a(1396),
                n = a.n(t),
                l = a(2265);

            function c() {
                let [s, e] = (0, l.useState)(!1);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("section", {
                        className: "about-two",
                        children: [(0, i.jsx)("div", {
                            className: "about-two__shape-2 zoominout",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/about-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "about-two__shape-3 float-bob-y",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/about-two-shape-3.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-xl-6 col-lg-6",
                                    children: (0, i.jsxs)("div", {
                                        className: "about-two__left",
                                        children: [(0, i.jsx)("h3", {
                                            className: "about-two__title",
                                            children: "We help to get Solutions!"
                                        }), (0, i.jsx)("p", {
                                            className: "about-two__text",
                                            children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
                                        }), (0, i.jsx)("p", {
                                            className: "about-two__text-2",
                                            children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                                        }), (0, i.jsxs)("ul", {
                                            className: "about-two__points list-unstyled",
                                            children: [(0, i.jsxs)("li", {
                                                children: [(0, i.jsx)("div", {
                                                    className: "about-two__count count-box",
                                                    children: (0, i.jsx)("h3", {
                                                        children: " 10 "
                                                    })
                                                }), (0, i.jsxs)("p", {
                                                    children: ["Years Of ", (0, i.jsx)("br", {}), " Experience"]
                                                })]
                                            }), (0, i.jsxs)("li", {
                                                children: [(0, i.jsxs)("div", {
                                                    className: "about-two__count count-box",
                                                    children: [(0, i.jsx)("h3", {
                                                        children: " 8 "
                                                    }), (0, i.jsx)("span", {
                                                        children: "k"
                                                    })]
                                                }), (0, i.jsxs)("p", {
                                                    children: ["Completed ", (0, i.jsx)("br", {}), " project"]
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "about-two__btn-box",
                                            children: (0, i.jsx)(n(), {
                                                href: "about",
                                                className: "about-two__btn thm-btn-two",
                                                children: "Learn About Us"
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-xl-6 col-lg-6",
                                    children: (0, i.jsx)("div", {
                                        className: "about-two__right",
                                        children: (0, i.jsxs)("div", {
                                            className: "about-two__img wow slideInRight",
                                            "data-wow-delay": "100ms",
                                            "data-wow-duration": "2500ms",
                                            children: [(0, i.jsx)("div", {
                                                className: "about-two__shape-1 img-bounce",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/shapes/about-two-shape-1.png",
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("img", {
                                                src: "assets/images/resources/about-two-img-1.jpg",
                                                alt: ""
                                            }), (0, i.jsx)("div", {
                                                className: "about-two__video-link",
                                                children: (0, i.jsx)("a", {
                                                    onClick: () => e(!0),
                                                    className: "video-popup",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "about-two__video-icon",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "fa fa-play"
                                                        }), (0, i.jsx)("i", {
                                                            className: "ripple"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        2413: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return t
                }
            });
            var i = a(7437);

            function t() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("section", {
                        className: "appointment-two",
                        children: [(0, i.jsx)("div", {
                            className: "appointment-two__shape-2 float-bob-x",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/appointment-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-xl-5 col-lg-5",
                                    children: (0, i.jsx)("div", {
                                        className: "appointment-two__left",
                                        children: (0, i.jsxs)("div", {
                                            className: "appointment-two__img wow slideInLeft",
                                            "data-wow-delay": "100ms",
                                            "data-wow-duration": "2500ms",
                                            children: [(0, i.jsx)("img", {
                                                src: "assets/images/resources/appointment-two-img-1.jpg",
                                                alt: ""
                                            }), (0, i.jsx)("div", {
                                                className: "appointment-two__shape-1 float-bob-y",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/shapes/appointment-two-shape-1.png",
                                                    alt: ""
                                                })
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-xl-7 col-lg-7",
                                    children: (0, i.jsxs)("div", {
                                        className: "appointment-two__right",
                                        children: [(0, i.jsx)("h3", {
                                            className: "appointment-two__section-title",
                                            children: "Book a Appointment"
                                        }), (0, i.jsx)("p", {
                                            className: "appointment-two__text",
                                            children: "Perfect Solution for your company"
                                        }), (0, i.jsxs)("div", {
                                            className: "appointment-two__form-box",
                                            children: [(0, i.jsx)("form", {
                                                action: "assets/inc/sendemail.php",
                                                className: "appointment-two__form contact-form-validated",
                                                children: (0, i.jsxs)("div", {
                                                    className: "row",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "col-xl-6",
                                                        children: (0, i.jsxs)("div", {
                                                            className: "appointment-two__input-box",
                                                            children: [(0, i.jsx)("h3", {
                                                                className: "appointment-two__input-title",
                                                                children: "Name *"
                                                            }), (0, i.jsx)("input", {
                                                                type: "text",
                                                                placeholder: "John Smith",
                                                                name: "name"
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "col-xl-6",
                                                        children: (0, i.jsxs)("div", {
                                                            className: "appointment-two__input-box",
                                                            children: [(0, i.jsx)("h3", {
                                                                className: "appointment-two__input-title",
                                                                children: "Email *"
                                                            }), (0, i.jsx)("input", {
                                                                type: "email",
                                                                placeholder: "Email Address",
                                                                name: "email"
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "col-xl-12",
                                                        children: (0, i.jsxs)("div", {
                                                            className: "appointment-two__input-box text-message-box",
                                                            children: [(0, i.jsxs)("h3", {
                                                                className: "appointment-two__input-title",
                                                                children: ["Message", (0, i.jsx)("span", {
                                                                    children: "(Oprional)"
                                                                })]
                                                            }), (0, i.jsx)("textarea", {
                                                                name: "message",
                                                                placeholder: "Type here..."
                                                            }), (0, i.jsx)("div", {
                                                                className: "appointment-two__btn-box",
                                                                children: (0, i.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn-two appointment-two__btn",
                                                                    children: "Let's Quote"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "result"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
            a(1396)
        },
        4035: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return o
                }
            });
            var i = a(7437),
                t = a(1396),
                n = a.n(t),
                l = a(7062),
                c = a(8278);
            let r = {
                modules: [l.pt, l.tl, l.W_],
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                navigation: {
                    nextEl: ".h1n",
                    prevEl: ".h1p"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            };

            function o() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: "main-slider-two",
                        children: (0, i.jsxs)(c.tq, { ...r,
                            className: "main-slider-two__carousel owl-carousel owl-theme thm-owl__carousel",
                            children: [(0, i.jsx)(c.o5, {
                                children: (0, i.jsxs)("div", {
                                    className: "item main-slider-two__slide-1",
                                    children: [(0, i.jsx)("div", {
                                        className: "main-slider-two__bg",
                                        style: {
                                            backgroundImage: "url(assets/images/backgrounds/slider-2-1.jpg)"
                                        }
                                    }), (0, i.jsx)("div", {
                                        className: "main-slider-two__shape-1 float-bob-y",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-two-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "main-slider-two__shape-2 img-bounce",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-two-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "container",
                                        children: (0, i.jsxs)("div", {
                                            className: "main-slider-two__content",
                                            children: [(0, i.jsxs)("h2", {
                                                className: "main-slider-two__title",
                                                children: ["We grow & manage ", (0, i.jsx)("br", {}), " your business"]
                                            }), (0, i.jsx)("p", {
                                                className: "main-slider-two__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting."
                                            }), (0, i.jsx)("div", {
                                                className: "main-slider-two__btn-box",
                                                children: (0, i.jsx)(n(), {
                                                    href: "contact",
                                                    className: "thm-btn main-slider-two__btn",
                                                    children: "Find Consultant"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(c.o5, {
                                children: (0, i.jsxs)("div", {
                                    className: "item main-slider-two__slide-2",
                                    children: [(0, i.jsx)("div", {
                                        className: "main-slider-two__bg",
                                        style: {
                                            backgroundImage: "url(assets/images/backgrounds/slider-2-2.jpg)"
                                        }
                                    }), (0, i.jsx)("div", {
                                        className: "main-slider-two__shape-1 float-bob-y",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-two-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "main-slider-two__shape-2 img-bounce",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-two-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "container",
                                        children: (0, i.jsxs)("div", {
                                            className: "main-slider-two__content",
                                            children: [(0, i.jsxs)("h2", {
                                                className: "main-slider-two__title",
                                                children: ["We grow & manage ", (0, i.jsx)("br", {}), " your business"]
                                            }), (0, i.jsx)("p", {
                                                className: "main-slider-two__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting."
                                            }), (0, i.jsx)("div", {
                                                className: "main-slider-two__btn-box",
                                                children: (0, i.jsx)(n(), {
                                                    href: "contact",
                                                    className: "thm-btn main-slider-two__btn",
                                                    children: "Find Consultant"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), (0, i.jsx)(c.o5, {
                                children: (0, i.jsxs)("div", {
                                    className: "item main-slider-two__slide-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "main-slider-two__bg",
                                        style: {
                                            backgroundImage: "url(assets/images/backgrounds/slider-2-3.jpg)"
                                        }
                                    }), (0, i.jsx)("div", {
                                        className: "main-slider-two__shape-1 float-bob-y",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-two-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "main-slider-two__shape-2 img-bounce",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-two-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "container",
                                        children: (0, i.jsxs)("div", {
                                            className: "main-slider-two__content",
                                            children: [(0, i.jsxs)("h2", {
                                                className: "main-slider-two__title",
                                                children: ["We grow & manage ", (0, i.jsx)("br", {}), " your business"]
                                            }), (0, i.jsx)("p", {
                                                className: "main-slider-two__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting."
                                            }), (0, i.jsx)("div", {
                                                className: "main-slider-two__btn-box",
                                                children: (0, i.jsx)(n(), {
                                                    href: "contact",
                                                    className: "thm-btn main-slider-two__btn",
                                                    children: "Find Consultant"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        7189: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return c
                }
            });
            var i = a(7437);
            a(1396);
            var t = a(7062),
                n = a(8278);
            let l = {
                modules: [t.pt, t.tl, t.W_],
                slidesPerView: 5,
                spaceBetween: 30,
                loop: !0,
                navigation: {
                    nextEl: ".srn",
                    prevEl: ".srp"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    575: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 3
                    },
                    991: {
                        slidesPerView: 3
                    },
                    1199: {
                        slidesPerView: 5
                    },
                    1350: {
                        slidesPerView: 5
                    }
                }
            };

            function c() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: "brand-two",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "brand-two__inner",
                                children: [(0, i.jsx)("h3", {
                                    className: "section__title-two",
                                    children: "Our Cliens"
                                }), (0, i.jsxs)(n.tq, { ...l,
                                    className: "brand-two__carousel thm-owl__carousel owl-theme owl-carousel",
                                    children: [(0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-2.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-3.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-3.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "brand-two__single",
                                            children: (0, i.jsx)("div", {
                                                className: "brand-two__img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        6975: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return n
                }
            });
            var i = a(7437),
                t = a(2265);

            function n() {
                let [s, e] = (0, t.useState)({
                    status: !1,
                    key: 1
                }), a = a => {
                    s.key === a ? e({
                        status: !1
                    }) : e({
                        status: !0,
                        key: a
                    })
                };
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("section", {
                        className: "faq-two",
                        children: [(0, i.jsx)("div", {
                            className: "faq-two__shape-1 float-bob-y",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/faq-two-shape-1.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "faq-two__shape-2 img-bounce",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/faq-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "faq-two__inner",
                                children: [(0, i.jsx)("h3", {
                                    className: "section__title-two",
                                    children: "Frequently asked questions"
                                }), (0, i.jsxs)("div", {
                                    className: "accrodion-grp faq-two-accrodion",
                                    "data-grp-name": "faq-two-accrodion",
                                    children: [(0, i.jsxs)("div", {
                                        className: 1 == s.key ? "accrodion active" : "accrodion",
                                        onClick: () => a(1),
                                        children: [(0, i.jsx)("div", {
                                            className: "accrodion-title",
                                            children: (0, i.jsx)("h4", {
                                                children: "What activities are done in the development?"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "accrodion-content",
                                            children: [(0, i.jsx)("div", {
                                                className: "inner",
                                                children: (0, i.jsx)("p", {
                                                    children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour. "
                                                })
                                            }), " "]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: 2 == s.key ? "accrodion active" : "accrodion",
                                        onClick: () => a(2),
                                        children: [(0, i.jsx)("div", {
                                            className: "accrodion-title",
                                            children: (0, i.jsx)("h4", {
                                                children: "How can i use landbook When should I use a Tag?"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "accrodion-content",
                                            onClick: () => a(2),
                                            children: [(0, i.jsx)("div", {
                                                className: "inner",
                                                children: (0, i.jsx)("p", {
                                                    children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                })
                                            }), " "]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: 3 == s.key ? "accrodion active" : "accrodion",
                                        onClick: () => a(3),
                                        children: [(0, i.jsx)("div", {
                                            className: "accrodion-title",
                                            children: (0, i.jsx)("h4", {
                                                children: "Are social media good for the business growth?"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "accrodion-content",
                                            children: [(0, i.jsx)("div", {
                                                className: "inner",
                                                children: (0, i.jsx)("p", {
                                                    children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                })
                                            }), " "]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: 4 == s.key ? "accrodion active" : "accrodion",
                                        onClick: () => a(4),
                                        children: [(0, i.jsx)("div", {
                                            className: "accrodion-title",
                                            children: (0, i.jsx)("h4", {
                                                children: "How often should i work on the digital marketing?"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "accrodion-content",
                                            children: [(0, i.jsx)("div", {
                                                className: "inner",
                                                children: (0, i.jsx)("p", {
                                                    children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                })
                                            }), " "]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: 5 == s.key ? "accrodion active" : "accrodion",
                                        onClick: () => a(5),
                                        children: [(0, i.jsx)("div", {
                                            className: "accrodion-title",
                                            children: (0, i.jsx)("h4", {
                                                children: "What are the different types of marketing solutions?"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "accrodion-content",
                                            children: [(0, i.jsx)("div", {
                                                className: "inner",
                                                children: (0, i.jsx)("p", {
                                                    children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                })
                                            }), " "]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        9667: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return c
                }
            });
            var i = a(7437),
                t = a(1396),
                n = a.n(t),
                l = a(2265);

            function c() {
                let [s, e] = (0, l.useState)(1), a = s => {
                    e(s)
                };
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("section", {
                        className: "pricing-two",
                        children: [(0, i.jsx)("div", {
                            className: "pricing-two__shape-2 zoominout",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/pricing-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "pricing-two__shape-3 rotate-me",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/pricing-two-shape-3.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "pricing-two__shape-4 rotate-me",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/pricing-two-shape-4.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "pricing-two__shape-5 img-bounce",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/pricing-two-shape-5.png",
                                alt: ""
                            })
                        }), (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("h3", {
                                className: "section__title-two",
                                children: "Our Best Plan For Your Business "
                            }), (0, i.jsx)("div", {
                                className: "pricing-two__save-box",
                                children: (0, i.jsxs)("div", {
                                    className: "pricing-two__save",
                                    children: [(0, i.jsx)("div", {
                                        className: "pricing-two__shape-1",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/shapes/pricing-two-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, i.jsx)("p", {
                                        children: "Save 20%"
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: "pricing-two__main-tab-box tabs-box",
                                children: [(0, i.jsxs)("ul", {
                                    className: "tab-buttons list-unstyled",
                                    children: [(0, i.jsx)("li", {
                                        onClick: () => a(1),
                                        className: 1 == s ? "tab-btn active-btn tab-btn-one" : "tab-btn",
                                        children: (0, i.jsx)("span", {
                                            children: "Yearly"
                                        })
                                    }), (0, i.jsx)("li", {
                                        onClick: () => a(2),
                                        className: 2 == s ? "tab-btn active-btn tab-btn-two" : "tab-btn",
                                        children: (0, i.jsx)("span", {
                                            children: "Monthly"
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "tabs-content",
                                    children: [(0, i.jsx)("div", {
                                        className: 1 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                        children: (0, i.jsx)("div", {
                                            className: "pricing-two__inner",
                                            children: (0, i.jsxs)("div", {
                                                className: "row",
                                                children: [(0, i.jsx)("div", {
                                                    className: "col-xl-6 col-lg-6",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "pricing-two__single",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "pricing-two__single-left",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "pricing-two__price-box",
                                                                children: [(0, i.jsx)("p", {
                                                                    className: "pricing-two__price-title",
                                                                    children: "Free"
                                                                }), (0, i.jsx)("h3", {
                                                                    className: "pricing-two__price",
                                                                    children: "$0"
                                                                }), (0, i.jsx)("p", {
                                                                    className: "pricing-two__text",
                                                                    children: "Per Member , per yearly"
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "pricing-two__btn-box",
                                                                children: (0, i.jsx)(n(), {
                                                                    href: "price",
                                                                    className: "thm-btn-two pricing-two__btn",
                                                                    children: "Start For Free"
                                                                })
                                                            })]
                                                        }), (0, i.jsxs)("ul", {
                                                            className: "list-unstyled pricing-two__points-list",
                                                            children: [(0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Powerful Admin Panel"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "3 Native Android App"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Multi-Language Support"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "col-xl-6 col-lg-6",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "pricing-two__single pricing-two__single-2",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "pricing-two__single-left",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "pricing-two__price-box",
                                                                children: [(0, i.jsx)("p", {
                                                                    className: "pricing-two__price-title",
                                                                    children: "Premium"
                                                                }), (0, i.jsx)("h3", {
                                                                    className: "pricing-two__price",
                                                                    children: "$39"
                                                                }), (0, i.jsx)("p", {
                                                                    className: "pricing-two__text",
                                                                    children: "Per Member , per yearly"
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "pricing-two__btn-box",
                                                                children: (0, i.jsx)(n(), {
                                                                    href: "price",
                                                                    className: "thm-btn-two pricing-two__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        }), (0, i.jsxs)("ul", {
                                                            className: "list-unstyled pricing-two__points-list",
                                                            children: [(0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Powerful Admin Panel"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "3 Native Android App"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Multi-Language Support"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: 2 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                        children: (0, i.jsx)("div", {
                                            className: "pricing-two__inner",
                                            children: (0, i.jsxs)("div", {
                                                className: "row",
                                                children: [(0, i.jsx)("div", {
                                                    className: "col-xl-6 col-lg-6",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "pricing-two__single pricing-two__single-1",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "pricing-two__single-left",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "pricing-two__price-box",
                                                                children: [(0, i.jsx)("p", {
                                                                    className: "pricing-two__price-title",
                                                                    children: "Free"
                                                                }), (0, i.jsx)("h3", {
                                                                    className: "pricing-two__price",
                                                                    children: "$0"
                                                                }), (0, i.jsx)("p", {
                                                                    className: "pricing-two__text",
                                                                    children: "Per Member , per yearly"
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "pricing-two__btn-box",
                                                                children: (0, i.jsx)(n(), {
                                                                    href: "price",
                                                                    className: "thm-btn-two pricing-two__btn",
                                                                    children: "Start For Free"
                                                                })
                                                            })]
                                                        }), (0, i.jsxs)("ul", {
                                                            className: "list-unstyled pricing-two__points-list",
                                                            children: [(0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Powerful Admin Panel"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "3 Native Android App"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Multi-Language Support"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "col-xl-6 col-lg-6",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "pricing-two__single pricing-two__single-2",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "pricing-two__single-left",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "pricing-two__price-box",
                                                                children: [(0, i.jsx)("p", {
                                                                    className: "pricing-two__price-title",
                                                                    children: "Premium"
                                                                }), (0, i.jsx)("h3", {
                                                                    className: "pricing-two__price",
                                                                    children: "$39"
                                                                }), (0, i.jsx)("p", {
                                                                    className: "pricing-two__text",
                                                                    children: "Per Member , per yearly"
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "pricing-two__btn-box",
                                                                children: (0, i.jsx)(n(), {
                                                                    href: "price",
                                                                    className: "thm-btn-two pricing-two__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        }), (0, i.jsxs)("ul", {
                                                            className: "list-unstyled pricing-two__points-list",
                                                            children: [(0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Powerful Admin Panel"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "3 Native Android App"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Multi-Language Support"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            }), (0, i.jsxs)("li", {
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "icon",
                                                                    children: (0, i.jsx)("i", {
                                                                        className: "icon-check"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "text",
                                                                    children: (0, i.jsx)("p", {
                                                                        children: "Support via E-mail and Phone"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        7582: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return t
                }
            });
            var i = a(7437);

            function t() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: "process-one",
                        children: (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("h3", {
                                className: "section__title-two",
                                children: "Our Work process"
                            }), (0, i.jsxs)("div", {
                                className: "process-one__inner",
                                children: [(0, i.jsx)("div", {
                                    className: "process-one__shape-1",
                                    children: (0, i.jsx)("img", {
                                        src: "assets/images/shapes/process-one-shape-1.png",
                                        alt: ""
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "row",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6",
                                        children: (0, i.jsxs)("div", {
                                            className: "process-one__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "process-one__count"
                                            }), (0, i.jsx)("h3", {
                                                className: "process-one__title",
                                                children: "Identifying Problems"
                                            }), (0, i.jsxs)("p", {
                                                className: "process-one__text",
                                                children: ["Lorem ipsum dolor sit amet,", (0, i.jsx)("br", {}), " adipiscing elit, sed do eiusmod ut", (0, i.jsx)("br", {}), "dolore magna aliqua."]
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6",
                                        children: (0, i.jsxs)("div", {
                                            className: "process-one__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "process-one__count"
                                            }), (0, i.jsx)("h3", {
                                                className: "process-one__title",
                                                children: "Research Your Problem"
                                            }), (0, i.jsxs)("p", {
                                                className: "process-one__text",
                                                children: ["Lorem ipsum dolor sit amet,", (0, i.jsx)("br", {}), " adipiscing elit, sed do eiusmod ut", (0, i.jsx)("br", {}), "dolore magna aliqua."]
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6",
                                        children: (0, i.jsxs)("div", {
                                            className: "process-one__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "process-one__count"
                                            }), (0, i.jsx)("h3", {
                                                className: "process-one__title",
                                                children: "Solutions Your Problem"
                                            }), (0, i.jsxs)("p", {
                                                className: "process-one__text",
                                                children: ["Lorem ipsum dolor sit amet,", (0, i.jsx)("br", {}), " adipiscing elit, sed do eiusmod ut", (0, i.jsx)("br", {}), "dolore magna aliqua."]
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6",
                                        children: (0, i.jsxs)("div", {
                                            className: "process-one__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "process-one__count"
                                            }), (0, i.jsx)("h3", {
                                                className: "process-one__title",
                                                children: "Consultation With Experts"
                                            }), (0, i.jsxs)("p", {
                                                className: "process-one__text",
                                                children: ["Lorem ipsum dolor sit amet,", (0, i.jsx)("br", {}), " adipiscing elit, sed do eiusmod ut", (0, i.jsx)("br", {}), "dolore magna aliqua."]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            a(1396)
        },
        5510: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return n
                }
            });
            var i = a(7437);
            a(1396);
            var t = a(2265);

            function n() {
                let [s, e] = (0, t.useState)(1), a = s => {
                    e(s)
                };
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("section", {
                        className: "get-quote get-quote-two",
                        children: [(0, i.jsx)("div", {
                            className: "get-quote__shape-4 float-bob-x",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-4.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__shape-5 float-bob-y",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-5.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__shape-7 float-bob-y",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-7.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__shape-8 float-bob-x",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-8.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__shape-9 float-bob-y",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-9.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__shape-10 float-bob-x",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-10.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__shape-11 float-bob-y",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-11.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__img-1",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/resources/get-quote-img-1.jpg",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "get-quote__img-2",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/resources/get-quote-img-2.png",
                                alt: ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsx)("div", {
                                className: "get-quote__inner",
                                children: (0, i.jsxs)("div", {
                                    className: "row tabs-box",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6",
                                        children: (0, i.jsxs)("div", {
                                            className: "get-quote__left clearfix",
                                            children: [(0, i.jsx)("div", {
                                                className: "get-quote__shape-6 float-bob-y",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-6.png",
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "get-quote__tab-box clearfix",
                                                children: (0, i.jsxs)("ul", {
                                                    className: "tab-buttons clearfix list-unstyled",
                                                    children: [(0, i.jsx)("li", {
                                                        className: 1 == s ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(1),
                                                        children: (0, i.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, i.jsx)("span", {
                                                                    className: "icon-life-insurance-1"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, i.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Life"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("li", {
                                                        className: 2 == s ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(2),
                                                        children: (0, i.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, i.jsx)("span", {
                                                                    className: "icon-insurance-1"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, i.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Veichle"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("li", {
                                                        className: 3 == s ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(3),
                                                        children: (0, i.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, i.jsx)("span", {
                                                                    className: "icon-home-insurance"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, i.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Home"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("li", {
                                                        className: 4 == s ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(4),
                                                        children: (0, i.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, i.jsx)("span", {
                                                                    className: "icon-briefcase"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, i.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Business"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("li", {
                                                        className: 5 == s ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(5),
                                                        children: (0, i.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, i.jsx)("span", {
                                                                    className: "icon-health-insurance"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, i.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Health"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6",
                                        children: (0, i.jsxs)("div", {
                                            className: "get-quote__right",
                                            children: [(0, i.jsx)("div", {
                                                className: "get-quote__shape-1",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-1.png",
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "get-quote__shape-2",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-2.png",
                                                    alt: ""
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "get-quote__shape-3",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-3.png",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "tabs-content",
                                                children: [(0, i.jsx)("div", {
                                                    className: 1 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, i.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Life Insurance"
                                                        }), (0, i.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, i.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, i.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, i.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            style: {
                                                                                width: "70%"
                                                                            },
                                                                            children: (0, i.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, i.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, i.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, i.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, i.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, i.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, i.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "212"
                                                                            }), (0, i.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, i.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, i.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: 2 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, i.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Veichle Insurance"
                                                        }), (0, i.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, i.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, i.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, i.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, i.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, i.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, i.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, i.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, i.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, i.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, i.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, i.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, i.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, i.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: 3 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, i.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Home Insurance"
                                                        }), (0, i.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, i.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, i.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, i.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, i.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, i.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, i.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, i.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, i.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, i.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, i.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, i.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, i.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, i.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: 4 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, i.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Business Insurance"
                                                        }), (0, i.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, i.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, i.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, i.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, i.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, i.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, i.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, i.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, i.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, i.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, i.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, i.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, i.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, i.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: 5 == s ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, i.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, i.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Health Insurance"
                                                        }), (0, i.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, i.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, i.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, i.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, i.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, i.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, i.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, i.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, i.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, i.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, i.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, i.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, i.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, i.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, i.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, i.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, i.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, i.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, i.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        3733: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return o
                }
            });
            var i = a(7437),
                t = a(1396),
                n = a.n(t),
                l = a(7062),
                c = a(8278);
            let r = {
                modules: [l.pt, l.tl, l.W_],
                slidesPerView: 3,
                spaceBetween: 30,
                loop: !0,
                navigation: {
                    nextEl: ".h1n",
                    prevEl: ".h1p"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    575: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 2
                    },
                    991: {
                        slidesPerView: 2
                    },
                    1199: {
                        slidesPerView: 3
                    },
                    1350: {
                        slidesPerView: 3
                    }
                }
            };

            function o() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("section", {
                        className: "services-two",
                        children: [(0, i.jsx)("div", {
                            className: "services-two__shape-1 zoominout",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/shapes/services-two-shape-1.png",
                                alt: ""
                            })
                        }), (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsxs)("h3", {
                                className: "section__title-two",
                                children: ["Our Business & Financial Consulting ", (0, i.jsx)("br", {}), " Services"]
                            }), (0, i.jsx)("div", {
                                className: "services-two__bottom",
                                children: (0, i.jsxs)(c.tq, { ...r,
                                    className: "services-two__carousel owl-carousel owl-theme thm-owl__carousel",
                                    children: [(0, i.jsx)(c.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "item",
                                            children: (0, i.jsxs)("div", {
                                                className: "services-two__single",
                                                children: [(0, i.jsx)("div", {
                                                    className: "services-two__img-box",
                                                    children: (0, i.jsx)("div", {
                                                        className: "services-two__img",
                                                        children: (0, i.jsx)("img", {
                                                            src: "assets/images/services/services-2-1.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "services-two__content",
                                                    children: [(0, i.jsx)("h3", {
                                                        className: "services-two__title",
                                                        children: (0, i.jsx)(n(), {
                                                            href: "business-audit",
                                                            children: "Business Audit"
                                                        })
                                                    }), (0, i.jsx)("p", {
                                                        className: "services-two__text",
                                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                                                    }), (0, i.jsx)("div", {
                                                        className: "services-two__btn",
                                                        children: (0, i.jsxs)(n(), {
                                                            href: "business-audit",
                                                            children: ["Learn More", (0, i.jsx)("span", {
                                                                className: "icon-right-arrow1"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    }), (0, i.jsx)(c.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "item",
                                            children: (0, i.jsxs)("div", {
                                                className: "services-two__single",
                                                children: [(0, i.jsx)("div", {
                                                    className: "services-two__img-box",
                                                    children: (0, i.jsx)("div", {
                                                        className: "services-two__img",
                                                        children: (0, i.jsx)("img", {
                                                            src: "assets/images/services/services-2-2.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "services-two__content",
                                                    children: [(0, i.jsx)("h3", {
                                                        className: "services-two__title",
                                                        children: (0, i.jsx)(n(), {
                                                            href: "tax-strategy",
                                                            children: "Tax Strategy"
                                                        })
                                                    }), (0, i.jsx)("p", {
                                                        className: "services-two__text",
                                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                                                    }), (0, i.jsx)("div", {
                                                        className: "services-two__btn",
                                                        children: (0, i.jsxs)(n(), {
                                                            href: "tax-strategy",
                                                            children: ["Learn More", (0, i.jsx)("span", {
                                                                className: "icon-right-arrow1"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    }), (0, i.jsx)(c.o5, {
                                        children: (0, i.jsx)("div", {
                                            className: "item",
                                            children: (0, i.jsxs)("div", {
                                                className: "services-two__single",
                                                children: [(0, i.jsx)("div", {
                                                    className: "services-two__img-box",
                                                    children: (0, i.jsx)("div", {
                                                        className: "services-two__img",
                                                        children: (0, i.jsx)("img", {
                                                            src: "assets/images/services/services-2-3.jpg",
                                                            alt: ""
                                                        })
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "services-two__content",
                                                    children: [(0, i.jsx)("h3", {
                                                        className: "services-two__title",
                                                        children: (0, i.jsx)(n(), {
                                                            href: "financial-advices",
                                                            children: "Financial Advices"
                                                        })
                                                    }), (0, i.jsx)("p", {
                                                        className: "services-two__text",
                                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                                                    }), (0, i.jsx)("div", {
                                                        className: "services-two__btn",
                                                        children: (0, i.jsxs)(n(), {
                                                            href: "financial-advices",
                                                            children: ["Learn More", (0, i.jsx)("span", {
                                                                className: "icon-right-arrow1"
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        4577: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return o
                }
            });
            var i = a(7437),
                t = a(1396),
                n = a.n(t),
                l = a(7062),
                c = a(8278);
            let r = {
                modules: [l.pt, l.tl, l.W_],
                slidesPerView: 3,
                spaceBetween: 30,
                loop: !0,
                navigation: {
                    nextEl: ".srn",
                    prevEl: ".srp"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    575: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 2
                    },
                    991: {
                        slidesPerView: 2
                    },
                    1199: {
                        slidesPerView: 3
                    },
                    1350: {
                        slidesPerView: 3
                    }
                }
            };

            function o() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: "team-two",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-xl-4",
                                    children: (0, i.jsxs)("div", {
                                        className: "team-two__left",
                                        children: [(0, i.jsx)("h3", {
                                            className: "section__title-two",
                                            children: "Meet our team of creative experts"
                                        }), (0, i.jsx)("p", {
                                            className: "team-two__text",
                                            children: "Lorem ipsum dolor sit amet labore et consectetuer adipiscing elit sed do eiusmod tempor incididunt."
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-xl-8",
                                    children: (0, i.jsx)("div", {
                                        className: "team-two__right",
                                        children: (0, i.jsxs)(c.tq, { ...r,
                                            className: "team-two__carousel owl-carousel owl-theme thm-owl__carousel",
                                            children: [(0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "team-two__single",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "team-two__img-box",
                                                            children: (0, i.jsx)("div", {
                                                                className: "team-two__img",
                                                                children: (0, i.jsx)("img", {
                                                                    src: "assets/images/team/team-2-1.jpg",
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "team-two__content",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "team-two__name-box",
                                                                children: [(0, i.jsx)("h3", {
                                                                    className: "team-two__name",
                                                                    children: (0, i.jsx)(n(), {
                                                                        href: "team-details",
                                                                        children: "Choi Ming Suk"
                                                                    })
                                                                }), (0, i.jsx)("p", {
                                                                    className: "team-two__sub-title",
                                                                    children: "Co-Founder"
                                                                })]
                                                            }), (0, i.jsxs)("div", {
                                                                className: "team-two__social",
                                                                children: [(0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-facebook"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "team-two__single",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "team-two__img-box",
                                                            children: (0, i.jsx)("div", {
                                                                className: "team-two__img",
                                                                children: (0, i.jsx)("img", {
                                                                    src: "assets/images/team/team-2-2.jpg",
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "team-two__content",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "team-two__name-box",
                                                                children: [(0, i.jsx)("h3", {
                                                                    className: "team-two__name",
                                                                    children: (0, i.jsx)(n(), {
                                                                        href: "team-details",
                                                                        children: "Abral Asha"
                                                                    })
                                                                }), (0, i.jsx)("p", {
                                                                    className: "team-two__sub-title",
                                                                    children: "Co-Founder"
                                                                })]
                                                            }), (0, i.jsxs)("div", {
                                                                className: "team-two__social",
                                                                children: [(0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-facebook"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "team-two__single",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "team-two__img-box",
                                                            children: (0, i.jsx)("div", {
                                                                className: "team-two__img",
                                                                children: (0, i.jsx)("img", {
                                                                    src: "assets/images/team/team-2-3.jpg",
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "team-two__content",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "team-two__name-box",
                                                                children: [(0, i.jsx)("h3", {
                                                                    className: "team-two__name",
                                                                    children: (0, i.jsx)(n(), {
                                                                        href: "team-details",
                                                                        children: "Alisha Martin"
                                                                    })
                                                                }), (0, i.jsx)("p", {
                                                                    className: "team-two__sub-title",
                                                                    children: "Co-Founder"
                                                                })]
                                                            }), (0, i.jsxs)("div", {
                                                                className: "team-two__social",
                                                                children: [(0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-facebook"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "team-two__single",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "team-two__img-box",
                                                            children: (0, i.jsx)("div", {
                                                                className: "team-two__img",
                                                                children: (0, i.jsx)("img", {
                                                                    src: "assets/images/team/team-2-1.jpg",
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "team-two__content",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "team-two__name-box",
                                                                children: [(0, i.jsx)("h3", {
                                                                    className: "team-two__name",
                                                                    children: (0, i.jsx)(n(), {
                                                                        href: "team-details",
                                                                        children: "Choi Ming Suk"
                                                                    })
                                                                }), (0, i.jsx)("p", {
                                                                    className: "team-two__sub-title",
                                                                    children: "Co-Founder"
                                                                })]
                                                            }), (0, i.jsxs)("div", {
                                                                className: "team-two__social",
                                                                children: [(0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-facebook"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "team-two__single",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "team-two__img-box",
                                                            children: (0, i.jsx)("div", {
                                                                className: "team-two__img",
                                                                children: (0, i.jsx)("img", {
                                                                    src: "assets/images/team/team-2-2.jpg",
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "team-two__content",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "team-two__name-box",
                                                                children: [(0, i.jsx)("h3", {
                                                                    className: "team-two__name",
                                                                    children: (0, i.jsx)(n(), {
                                                                        href: "team-details",
                                                                        children: "Abral Asha"
                                                                    })
                                                                }), (0, i.jsx)("p", {
                                                                    className: "team-two__sub-title",
                                                                    children: "Co-Founder"
                                                                })]
                                                            }), (0, i.jsxs)("div", {
                                                                className: "team-two__social",
                                                                children: [(0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-facebook"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)("div", {
                                                    className: "item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "team-two__single",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "team-two__img-box",
                                                            children: (0, i.jsx)("div", {
                                                                className: "team-two__img",
                                                                children: (0, i.jsx)("img", {
                                                                    src: "assets/images/team/team-2-3.jpg",
                                                                    alt: ""
                                                                })
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "team-two__content",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "team-two__name-box",
                                                                children: [(0, i.jsx)("h3", {
                                                                    className: "team-two__name",
                                                                    children: (0, i.jsx)(n(), {
                                                                        href: "team-details",
                                                                        children: "Alisha Martin"
                                                                    })
                                                                }), (0, i.jsx)("p", {
                                                                    className: "team-two__sub-title",
                                                                    children: "Co-Founder"
                                                                })]
                                                            }), (0, i.jsxs)("div", {
                                                                className: "team-two__social",
                                                                children: [(0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-facebook"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-instagram"
                                                                    })
                                                                }), (0, i.jsx)(n(), {
                                                                    href: "team-details",
                                                                    children: (0, i.jsx)("span", {
                                                                        className: "fab fa-linkedin"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        4140: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return c
                }
            });
            var i = a(7437),
                t = a(7062),
                n = a(8278);
            let l = {
                modules: [t.pt, t.tl, t.W_],
                slidesPerView: 3,
                spaceBetween: 30,
                loop: !0,
                navigation: {
                    nextEl: ".srn",
                    prevEl: ".srp"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    575: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 2
                    },
                    991: {
                        slidesPerView: 2
                    },
                    1199: {
                        slidesPerView: 3
                    },
                    1350: {
                        slidesPerView: 3
                    }
                }
            };

            function c() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: "testimonial-two",
                        children: (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("h3", {
                                className: "section__title-two",
                                children: "People talking about us"
                            }), (0, i.jsx)("div", {
                                className: "testimonial-two__bottom",
                                children: (0, i.jsxs)(n.tq, { ...l,
                                    className: "testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel",
                                    children: [(0, i.jsx)(n.o5, {
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonial-two__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "testimonial-two__client-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/testimonial/testimonial-2-1.jpg",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__client-info",
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Jacob Jones"
                                                }), (0, i.jsx)("p", {
                                                    children: "CEO & Co-Founder"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "testimonial-two__text",
                                                children: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."'
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__ratting",
                                                children: [(0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonial-two__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "testimonial-two__client-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/testimonial/testimonial-2-2.jpg",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__client-info",
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Devon Lane"
                                                }), (0, i.jsx)("p", {
                                                    children: "CEO & Co-Founder"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "testimonial-two__text",
                                                children: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."'
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__ratting",
                                                children: [(0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonial-two__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "testimonial-two__client-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/testimonial/testimonial-2-3.jpg",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__client-info",
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Chieko Chute"
                                                }), (0, i.jsx)("p", {
                                                    children: "CEO & Co-Founder"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "testimonial-two__text",
                                                children: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."'
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__ratting",
                                                children: [(0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonial-two__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "testimonial-two__client-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/testimonial/testimonial-2-1.jpg",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__client-info",
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Jacob Jones"
                                                }), (0, i.jsx)("p", {
                                                    children: "CEO & Co-Founder"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "testimonial-two__text",
                                                children: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."'
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__ratting",
                                                children: [(0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonial-two__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "testimonial-two__client-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/testimonial/testimonial-2-2.jpg",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__client-info",
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Devon Lane"
                                                }), (0, i.jsx)("p", {
                                                    children: "CEO & Co-Founder"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "testimonial-two__text",
                                                children: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."'
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__ratting",
                                                children: [(0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsx)(n.o5, {
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonial-two__single",
                                            children: [(0, i.jsx)("div", {
                                                className: "testimonial-two__client-img",
                                                children: (0, i.jsx)("img", {
                                                    src: "assets/images/testimonial/testimonial-2-3.jpg",
                                                    alt: ""
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__client-info",
                                                children: [(0, i.jsx)("h3", {
                                                    children: "Chieko Chute"
                                                }), (0, i.jsx)("p", {
                                                    children: "CEO & Co-Founder"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "testimonial-two__text",
                                                children: '"I am really satisfied with it. I\'m good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry."'
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonial-two__ratting",
                                                children: [(0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                }), (0, i.jsx)("span", {
                                                    className: "icon-star-1"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        }
    },
    function(s) {
        s.O(0, [5285, 6582, 5518, 2971, 596, 1744], function() {
            return s(s.s = 2280)
        }), _N_E = s.O()
    }
]);