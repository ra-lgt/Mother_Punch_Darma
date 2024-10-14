(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4186], {
        9556: function(e, s, a) {
            Promise.resolve().then(a.bind(a, 5518)), Promise.resolve().then(a.t.bind(a, 6685, 23)), Promise.resolve().then(a.bind(a, 68)), Promise.resolve().then(a.bind(a, 7499)), Promise.resolve().then(a.bind(a, 7774)), Promise.resolve().then(a.t.bind(a, 3699, 23)), Promise.resolve().then(a.bind(a, 3605)), Promise.resolve().then(a.bind(a, 7473)), Promise.resolve().then(a.bind(a, 8642)), Promise.resolve().then(a.bind(a, 7003)), Promise.resolve().then(a.bind(a, 7574))
        },
        68: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return l
                }
            });
            var t = a(7437),
                i = a(2265);

            function n(e) {
                let {
                    end: s,
                    duration: a
                } = e, [n, l] = (0, i.useState)(0), c = (0, i.useRef)(null), r = s / a;
                (0, i.useEffect)(() => {
                    let e = new IntersectionObserver(s => {
                        let [a] = s;
                        a.isIntersecting && (o(), e.disconnect())
                    }, {
                        threshold: 0
                    });
                    return c.current && e.observe(c.current), () => {
                        e.disconnect()
                    }
                }, []), (0, i.useEffect)(() => {
                    let e = setInterval(() => {
                        l(a => {
                            let t = a + r;
                            return t >= s ? (clearInterval(e), s) : t
                        })
                    }, 1e3 / a);
                    return () => {
                        clearInterval(e)
                    }
                }, [s, r]);
                let o = () => {
                    l(0)
                };
                return (0, t.jsx)("span", {
                    ref: c,
                    children: (0, t.jsx)("span", {
                        children: Math.round(n)
                    })
                })
            }

            function l(e) {
                let {
                    end: s
                } = e, [a, l] = (0, i.useState)(!1), c = () => {
                    let e = document.getElementsByClassName("count-text");
                    if (e.length > 0) {
                        let s = e[0],
                            t = s.getBoundingClientRect(),
                            i = t.top >= 0 && t.bottom <= window.innerHeight;
                        i && !a && l(!0)
                    }
                };
                return (0, i.useEffect)(() => (window.addEventListener("scroll", c), () => {
                    window.removeEventListener("scroll", c)
                }), []), (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("span", {
                        className: "count-text",
                        children: a && (0, t.jsx)(n, {
                            end: s,
                            duration: 20
                        })
                    })
                })
            }
        },
        3605: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return o
                }
            });
            var t = a(7437),
                i = a(5747),
                n = a.n(i),
                l = a(1396),
                c = a.n(l),
                r = a(2265);

            function o() {
                let e = (0, r.useRef)(),
                    [s, a] = (0, r.useState)("*");
                (0, r.useEffect)(() => {
                    setTimeout(() => {
                        e.current = new(n())(".items-container", {
                            itemSelector: ".masonry-item",
                            percentPosition: !0,
                            masonry: {
                                columnWidth: ".masonry-item"
                            },
                            animationOptions: {
                                duration: 750,
                                easing: "linear",
                                queue: !1
                            }
                        })
                    }, 1e3)
                }, []), (0, r.useEffect)(() => {
                    e.current && ("*" === s ? e.current.arrange({
                        filter: "*"
                    }) : e.current.arrange({
                        filter: ".".concat(s)
                    }))
                }, [s]);
                let i = (0, r.useCallback)(e => () => {
                        a(e)
                    }, []),
                    l = e => e === s ? "filter active" : "filter";
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("div", {
                        className: "portfolio-three__filter-box",
                        children: (0, t.jsxs)("ul", {
                            className: "portfolio-three__filter style1 post-filter list-unstyled clearfix",
                            children: [(0, t.jsx)("li", {
                                className: l("*"),
                                onClick: i("*"),
                                children: (0, t.jsx)("span", {
                                    className: "filter-text",
                                    children: "All"
                                })
                            }), (0, t.jsx)("li", {
                                className: l("cat-1"),
                                onClick: i("cat-1"),
                                children: (0, t.jsx)("span", {
                                    className: "filter-text",
                                    children: "Business Strategy"
                                })
                            }), (0, t.jsx)("li", {
                                className: l("cat-2"),
                                onClick: i("cat-2"),
                                children: (0, t.jsx)("span", {
                                    className: "filter-text",
                                    children: "Financial"
                                })
                            }), (0, t.jsx)("li", {
                                className: l("cat-3"),
                                onClick: i("cat-3"),
                                children: (0, t.jsx)("span", {
                                    className: "filter-text",
                                    children: "Planning"
                                })
                            }), (0, t.jsx)("li", {
                                className: l("cat-4"),
                                onClick: i("cat-4"),
                                children: (0, t.jsx)("span", {
                                    className: "filter-text",
                                    children: "Tax Strategy"
                                })
                            }), (0, t.jsx)("li", {
                                className: l("cat-5"),
                                onClick: i("cat-5"),
                                children: (0, t.jsx)("span", {
                                    className: "filter-text",
                                    children: "Investment"
                                })
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "items-container row clearfix",
                        children: [(0, t.jsx)("div", {
                            className: "case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12",
                            children: (0, t.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, t.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, t.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-1.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, t.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, t.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, t.jsx)(c(), {
                                            href: "portfolio-details",
                                            children: "Our Business Growth"
                                        })
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12",
                            children: (0, t.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, t.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, t.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-3.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, t.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, t.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, t.jsx)(c(), {
                                            href: "portfolio-details",
                                            children: "Our Business Audit"
                                        })
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12",
                            children: (0, t.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, t.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, t.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-5.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, t.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, t.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, t.jsx)(c(), {
                                            href: "portfolio-details",
                                            children: "Our Financial Advices"
                                        })
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "case-block-one masonry-item all cat-5 cat-2 col-lg-4 col-md-6 col-sm-12",
                            children: (0, t.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, t.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, t.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-6.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, t.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, t.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, t.jsx)(c(), {
                                            href: "portfolio-details",
                                            children: "Our Tax Strategy"
                                        })
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "case-block-one masonry-item all cat-3 cat-5 col-lg-4 col-md-6 col-sm-12",
                            children: (0, t.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, t.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, t.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-6.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, t.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, t.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, t.jsx)(c(), {
                                            href: "portfolio-details",
                                            children: "Our Tax Strategy"
                                        })
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "case-block-one masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12",
                            children: (0, t.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, t.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, t.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-3.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, t.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, t.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, t.jsx)(c(), {
                                            href: "portfolio-details",
                                            children: "Our Business Audit"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        7499: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return l
                }
            });
            var t = a(7437),
                i = a(2265),
                n = a(5896);

            function l(e) {
                let {
                    style: s,
                    text: a
                } = e, [l, c] = (0, i.useState)(!1);
                return (0, t.jsxs)(t.Fragment, {
                    children: [!s && (0, t.jsx)("a", {
                        onClick: () => c(!0),
                        className: "overlay-link lightbox-image video-fancybox ripple",
                        children: (0, t.jsx)("span", {
                            className: "play-icon flaticon-play"
                        })
                    }), 1 === s && (0, t.jsx)("div", {
                        className: "video-btn",
                        children: (0, t.jsxs)("a", {
                            onClick: () => c(!0),
                            className: "overlay-link lightbox-image video-fancybox ripple",
                            children: [(0, t.jsx)("span", {
                                className: "play-icon flaticon-play"
                            }), " "]
                        })
                    }), 2 === s && (0, t.jsxs)("div", {
                        className: "video-btn",
                        children: [(0, t.jsx)("a", {
                            onClick: () => c(!0),
                            className: "overlay-link lightbox-image video-fancybox ripple",
                            children: (0, t.jsx)("span", {
                                className: "play-icon flaticon-play"
                            })
                        }), (0, t.jsx)("h6", {
                            children: a || "Latest Program Video"
                        })]
                    }), 3 === s && (0, t.jsx)("div", {
                        className: "video-btn",
                        children: (0, t.jsxs)("a", {
                            onClick: () => c(!0),
                            className: "lightbox-image",
                            children: [(0, t.jsx)("i", {
                                className: "customicon-play-button"
                            }), (0, t.jsx)("span", {
                                className: "border-animation border-1"
                            }), (0, t.jsx)("span", {
                                className: "border-animation border-2"
                            }), (0, t.jsx)("span", {
                                className: "border-animation border-3"
                            })]
                        })
                    }), 4 === s && (0, t.jsx)("div", {
                        className: "video-btn",
                        children: (0, t.jsx)("a", {
                            onClick: () => c(!0),
                            className: "lightbox-image",
                            children: (0, t.jsx)("img", {
                                src: "/assets/images-4/icons/video-btn-1.png",
                                alt: ""
                            })
                        })
                    }), 5 === s && (0, t.jsx)("a", {
                        onClick: () => c(!0),
                        className: "video-btn overlay-link lightbox-image video-fancybox ripple",
                        children: (0, t.jsx)("span", {
                            className: "fas fa-play"
                        })
                    }), (0, t.jsx)(n.Z, {
                        channel: "youtube",
                        autoplay: !0,
                        isOpen: l,
                        videoId: "vfhzo499OeA",
                        onClose: () => c(!1)
                    })]
                })
            }
        },
        7774: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return o
                }
            });
            var t = a(7437),
                i = a(1396),
                n = a.n(i),
                l = a(7062),
                c = a(8278);
            let r = {
                modules: [l.pt, l.tl, l.W_],
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: !1
                },
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
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        className: "main-slider-three",
                        children: (0, t.jsxs)(c.tq, { ...r,
                            className: "main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel",
                            "data-owl-options": '{"loop": true, "items": 1, "navText": ["<span className=\\"icon-left-arrow\\"></span>","<span className=\\"icon-right-arrow\\"></span>"], "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}',
                            children: [(0, t.jsx)(c.o5, {
                                children: (0, t.jsxs)("div", {
                                    className: "item main-slider-three__slide-1",
                                    children: [(0, t.jsx)("div", {
                                        className: "main-slider-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/resources/main-slider-three-img-1.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-1 rotate-me",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-2 img-bounce",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-3 shape-mover",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-3.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "container",
                                        children: (0, t.jsxs)("div", {
                                            className: "main-slider-three__content",
                                            children: [(0, t.jsxs)("h2", {
                                                className: "main-slider-three__title",
                                                children: ["Get more of what ", (0, t.jsx)("br", {}), " you want from your ", (0, t.jsx)("br", {}), " business"]
                                            }), (0, t.jsx)("p", {
                                                className: "main-slider-three__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing"
                                            }), (0, t.jsxs)("div", {
                                                className: "main-slider-three__btn-box",
                                                children: [(0, t.jsx)(n(), {
                                                    href: "contact",
                                                    className: "thm-btn main-slider__btn-1",
                                                    children: "Get Consulting"
                                                }), (0, t.jsx)(n(), {
                                                    href: "about",
                                                    className: "thm-btn main-slider__btn-2",
                                                    children: "Learn More"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, t.jsx)(c.o5, {
                                children: (0, t.jsxs)("div", {
                                    className: "item main-slider-three__slide-2",
                                    children: [(0, t.jsx)("div", {
                                        className: "main-slider-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/resources/main-slider-three-img-1.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-1 rotate-me",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-2 img-bounce",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-3 shape-mover",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-3.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "container",
                                        children: (0, t.jsxs)("div", {
                                            className: "main-slider-three__content",
                                            children: [(0, t.jsxs)("h2", {
                                                className: "main-slider-three__title",
                                                children: ["Get more of what ", (0, t.jsx)("br", {}), " you want from your ", (0, t.jsx)("br", {}), " business"]
                                            }), (0, t.jsx)("p", {
                                                className: "main-slider-three__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing"
                                            }), (0, t.jsxs)("div", {
                                                className: "main-slider-three__btn-box",
                                                children: [(0, t.jsx)(n(), {
                                                    href: "contact",
                                                    className: "thm-btn main-slider__btn-1",
                                                    children: "Get Consulting"
                                                }), (0, t.jsx)(n(), {
                                                    href: "about",
                                                    className: "thm-btn main-slider__btn-2",
                                                    children: "Learn More"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, t.jsx)(c.o5, {
                                children: (0, t.jsxs)("div", {
                                    className: "item main-slider-three__slide-3",
                                    children: [(0, t.jsx)("div", {
                                        className: "main-slider-three__img",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/resources/main-slider-three-img-1.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-1 rotate-me",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-2 img-bounce",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "main-slider-three__shape-3 shape-mover",
                                        children: (0, t.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-three-shape-3.png",
                                            alt: ""
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "container",
                                        children: (0, t.jsxs)("div", {
                                            className: "main-slider-three__content",
                                            children: [(0, t.jsxs)("h2", {
                                                className: "main-slider-three__title",
                                                children: ["Get more of what ", (0, t.jsx)("br", {}), " you want from your ", (0, t.jsx)("br", {}), " business"]
                                            }), (0, t.jsx)("p", {
                                                className: "main-slider-three__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing"
                                            }), (0, t.jsxs)("div", {
                                                className: "main-slider-three__btn-box",
                                                children: [(0, t.jsx)(n(), {
                                                    href: "contact",
                                                    className: "thm-btn main-slider__btn-1",
                                                    children: "Get Consulting"
                                                }), (0, t.jsx)(n(), {
                                                    href: "about",
                                                    className: "thm-btn main-slider__btn-2",
                                                    children: "Learn More"
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
        },
        7574: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return c
                }
            });
            var t = a(7437);
            a(1396);
            var i = a(7062),
                n = a(8278);
            let l = {
                modules: [i.pt, i.tl, i.W_],
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
                }
            };

            function c() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        className: "brand-one brand-three",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsx)("div", {
                                className: "brand-one__inner",
                                children: (0, t.jsxs)(n.tq, { ...l,
                                    className: "brand-one__carousel thm-owl__carousel owl-theme owl-carousel",
                                    children: [(0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-2.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-3.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, t.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/brand/brand-3-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        7003: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return n
                }
            });
            var t = a(7437);
            a(1396);
            var i = a(2265);

            function n() {
                let [e, s] = (0, i.useState)(1), a = e => {
                    s(e)
                };
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("section", {
                        className: "get-quote get-quote-three",
                        children: [(0, t.jsx)("div", {
                            className: "get-quote-three__shape-1",
                            style: {
                                backgroundImage: "url(assets/images/shapes/get-quote-three-shape-1.png)"
                            }
                        }), (0, t.jsx)("div", {
                            className: "get-quote-three__shape-2",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/get-quote-three-shape-2.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsx)("div", {
                                className: "get-quote__inner",
                                children: (0, t.jsxs)("div", {
                                    className: "row tabs-box",
                                    children: [(0, t.jsx)("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6",
                                        children: (0, t.jsxs)("div", {
                                            className: "get-quote__left clearfix",
                                            children: [(0, t.jsx)("div", {
                                                className: "get-quote-three__img-1",
                                                children: (0, t.jsx)("img", {
                                                    src: "assets/images/resources/get-quote-three-img-1.png",
                                                    alt: ""
                                                })
                                            }), (0, t.jsxs)("h3", {
                                                className: "get-quote-three__title",
                                                children: ["Get an Insurance", (0, t.jsx)("br", {}), " Quote to Get Started"]
                                            }), (0, t.jsx)("div", {
                                                className: "get-quote__tab-box clearfix",
                                                children: (0, t.jsxs)("ul", {
                                                    className: "tab-buttons clearfix list-unstyled",
                                                    children: [(0, t.jsx)("li", {
                                                        className: 1 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(1),
                                                        children: (0, t.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, t.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, t.jsx)("span", {
                                                                    className: "icon-life-insurance-1"
                                                                })
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, t.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Life"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: 2 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(2),
                                                        children: (0, t.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, t.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, t.jsx)("span", {
                                                                    className: "icon-insurance-1"
                                                                })
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, t.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Veichle"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: 3 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(3),
                                                        children: (0, t.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, t.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, t.jsx)("span", {
                                                                    className: "icon-home-insurance"
                                                                })
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, t.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Home"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: 4 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(4),
                                                        children: (0, t.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, t.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, t.jsx)("span", {
                                                                    className: "icon-briefcase"
                                                                })
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, t.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Business"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: 5 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => a(5),
                                                        children: (0, t.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, t.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, t.jsx)("span", {
                                                                    className: "icon-health-insurance"
                                                                })
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, t.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Health"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6",
                                        children: (0, t.jsx)("div", {
                                            className: "get-quote__right",
                                            children: (0, t.jsxs)("div", {
                                                className: "tabs-content",
                                                children: [(0, t.jsx)("div", {
                                                    className: 1 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, t.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, t.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Life Insurance"
                                                        }), (0, t.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, t.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, t.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, t.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, t.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            style: {
                                                                                width: "70%"
                                                                            },
                                                                            children: (0, t.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, t.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, t.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, t.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, t.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, t.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, t.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, t.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "212"
                                                                            }), (0, t.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, t.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: 2 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, t.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, t.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Veichle Insurance"
                                                        }), (0, t.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, t.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, t.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, t.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, t.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, t.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, t.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, t.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, t.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, t.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, t.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, t.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, t.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, t.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, t.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: 3 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, t.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, t.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Home Insurance"
                                                        }), (0, t.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, t.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, t.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, t.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, t.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, t.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, t.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, t.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, t.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, t.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, t.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, t.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, t.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, t.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, t.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: 4 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, t.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, t.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Business Insurance"
                                                        }), (0, t.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, t.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, t.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, t.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, t.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, t.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, t.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, t.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, t.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, t.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, t.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, t.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, t.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, t.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, t.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: 5 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, t.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, t.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Health Insurance"
                                                        }), (0, t.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, t.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, t.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, t.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, t.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, t.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, t.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, t.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, t.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, t.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, t.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, t.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, t.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, t.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, t.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, t.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, t.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, t.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        8642: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return c
                }
            });
            var t = a(7437);
            a(1396);
            var i = a(7062),
                n = a(8278);
            let l = {
                modules: [i.pt, i.tl, i.W_],
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
                }
            };

            function c() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("section", {
                        className: "testimonial-three",
                        children: [(0, t.jsx)("div", {
                            className: "testimonial-three__shape-1 float-bob-x",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/testimonial-three-shape-1.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "testimonial-three__shape-2 float-bob-x",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/testimonial-three-shape-2.png",
                                alt: ""
                            })
                        }), (0, t.jsxs)("div", {
                            className: "container",
                            children: [(0, t.jsxs)("div", {
                                className: "section-title-three text-center",
                                children: [(0, t.jsx)("div", {
                                    className: "section-title-three__tagline-box",
                                    children: (0, t.jsx)("p", {
                                        className: "section-title-three__tagline",
                                        children: "Testimonials"
                                    })
                                }), (0, t.jsxs)("h2", {
                                    className: "section-title-three__title",
                                    children: ["What our client's says ", (0, t.jsx)("br", {}), " about our work."]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "testimonial-three__bottom",
                                children: (0, t.jsxs)(n.tq, { ...l,
                                    className: "testimonial-three__carousel owl-carousel owl-theme thm-owl__carousel",
                                    "data-owl-options": '{ "loop": true, "autoplay": true, "margin": 70, "nav": false, "dots": true, "smartSpeed": 500, "autoplayTimeout": 10000, "navText": ["<span className=\\"icon-right-arrow\\"></span>","<span className=\\"icon-right-arrow1\\"></span>"], "responsive": { "0": { "items": 1 }, "768": { "items": 2 }, "992": { "items": 2 }, "1200": { "items": 3 } } }',
                                    children: [(0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Micle Deno"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Jerome Bell"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Kristin Watson"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Nikolo Vali"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Harbert Spen"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "David Kapor"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Alisha Martin"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Harbi Shaien"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    }), (0, t.jsx)(n.o5, {
                                        children: (0, t.jsxs)("div", {
                                            className: "testimonial-three__single",
                                            children: [(0, t.jsx)("div", {
                                                className: "testimonial-three__quote",
                                                children: (0, t.jsx)("span", {
                                                    className: "icon-quote11"
                                                })
                                            }), (0, t.jsx)("p", {
                                                className: "testimonial-three__text",
                                                children: "Divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any momentMagazine and housed in a nice, gilded frame."
                                            }), (0, t.jsxs)("div", {
                                                className: "testimonial-three__client-info",
                                                children: [(0, t.jsx)("h3", {
                                                    children: "Jena Armi"
                                                }), (0, t.jsx)("p", {
                                                    children: "Co-Founder"
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        7473: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return r
                }
            });
            var t = a(7437),
                i = a(1396),
                n = a.n(i),
                l = a(2265),
                c = a(323);

            function r() {
                let [e, s] = (0, l.useState)(!1);
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("section", {
                        className: "video-one video-two",
                        children: [(0, t.jsx)("div", {
                            className: "video-one__bg jarallax",
                            "data-jarallax": !0,
                            "data-speed": "0.2",
                            "data-imgPosition": "50% 0%",
                            style: {
                                backgroundImage: "url(assets/images/backgrounds/video-one__bg.jpg)"
                            }
                        }), (0, t.jsx)("div", {
                            className: "video-one__shape-1",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/video-two-shape-1.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "video-one__shape-2",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/video-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "video-one__shape-3",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-3.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "video-one__shape-4",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-4.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "video-one__shape-5",
                            children: (0, t.jsx)("img", {
                                src: "assets/images/shapes/video-two-shape-5.png",
                                alt: ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsx)("div", {
                                className: "video-one__inner",
                                children: (0, t.jsxs)("div", {
                                    className: "video-one__icon-box",
                                    children: [(0, t.jsx)("a", {
                                        onClick: () => s(!0),
                                        className: "video-one__icon video-popup",
                                        children: (0, t.jsx)("span", {
                                            className: "icon-play-2"
                                        })
                                    }), (0, t.jsx)(n(), {
                                        href: "#",
                                        className: "video-one__curved-circle-box",
                                        children: (0, t.jsx)("div", {
                                            className: "curved-circle",
                                            children: (0, t.jsx)("span", {
                                                className: "curved-circle--item",
                                                children: (0, t.jsx)(c.Z, {
                                                    width: "240",
                                                    height: "240",
                                                    cx: "120",
                                                    cy: "120",
                                                    rx: "90",
                                                    ry: "90",
                                                    startOffset: "0",
                                                    reversed: !0,
                                                    text: "QUALITY INSURACE SERVICE COMAPY FOR YOUR FUTURE",
                                                    textProps: {
                                                        style: {
                                                            fontSize: "20"
                                                        }
                                                    },
                                                    textPathProps: {
                                                        fill: "#ffffff"
                                                    },
                                                    tspanProps: null,
                                                    ellipseProps: null,
                                                    svgProps: null
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
            a(5896)
        }
    },
    function(e) {
        e.O(0, [5285, 6582, 5896, 6246, 323, 5518, 2971, 596, 1744], function() {
            return e(e.s = 9556)
        }), _N_E = e.O()
    }
]);