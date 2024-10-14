(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        3536: function(e, s, i) {
            Promise.resolve().then(i.bind(i, 5518)), Promise.resolve().then(i.t.bind(i, 6685, 23)), Promise.resolve().then(i.bind(i, 102)), Promise.resolve().then(i.bind(i, 5681)), Promise.resolve().then(i.bind(i, 68)), Promise.resolve().then(i.bind(i, 9109)), Promise.resolve().then(i.bind(i, 356)), Promise.resolve().then(i.bind(i, 6395)), Promise.resolve().then(i.bind(i, 2389)), Promise.resolve().then(i.bind(i, 3383)), Promise.resolve().then(i.bind(i, 3762))
        },
        68: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return t
                }
            });
            var a = i(7437),
                n = i(2265);

            function l(e) {
                let {
                    end: s,
                    duration: i
                } = e, [l, t] = (0, n.useState)(0), c = (0, n.useRef)(null), r = s / i;
                (0, n.useEffect)(() => {
                    let e = new IntersectionObserver(s => {
                        let [i] = s;
                        i.isIntersecting && (d(), e.disconnect())
                    }, {
                        threshold: 0
                    });
                    return c.current && e.observe(c.current), () => {
                        e.disconnect()
                    }
                }, []), (0, n.useEffect)(() => {
                    let e = setInterval(() => {
                        t(i => {
                            let a = i + r;
                            return a >= s ? (clearInterval(e), s) : a
                        })
                    }, 1e3 / i);
                    return () => {
                        clearInterval(e)
                    }
                }, [s, r]);
                let d = () => {
                    t(0)
                };
                return (0, a.jsx)("span", {
                    ref: c,
                    children: (0, a.jsx)("span", {
                        children: Math.round(l)
                    })
                })
            }

            function t(e) {
                let {
                    end: s
                } = e, [i, t] = (0, n.useState)(!1), c = () => {
                    let e = document.getElementsByClassName("count-text");
                    if (e.length > 0) {
                        let s = e[0],
                            a = s.getBoundingClientRect(),
                            n = a.top >= 0 && a.bottom <= window.innerHeight;
                        n && !i && t(!0)
                    }
                };
                return (0, n.useEffect)(() => (window.addEventListener("scroll", c), () => {
                    window.removeEventListener("scroll", c)
                }), []), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("span", {
                        className: "count-text",
                        children: i && (0, a.jsx)(l, {
                            end: s,
                            duration: 20
                        })
                    })
                })
            }
        },
        3762: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return n
                }
            });
            var a = i(7437);

            function n() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("section", {
                        className: "appointment-one",
                        children: (0, a.jsx)("div", {
                            className: "appointment-one__inner",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xl-4 col-lg-5",
                                        children: (0, a.jsxs)("div", {
                                            className: "appointment-one__left",
                                            children: [(0, a.jsx)("h3", {
                                                className: "appointment-one__title",
                                                children: "Book a Appointment"
                                            }), (0, a.jsx)("p", {
                                                className: "appointment-one__text",
                                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-8 col-lg-7",
                                        children: (0, a.jsx)("div", {
                                            className: "appointment-one__right",
                                            children: (0, a.jsxs)("div", {
                                                className: "appointment-one__form-box",
                                                children: [(0, a.jsx)("form", {
                                                    action: "assets/inc/sendemail.php",
                                                    className: "appointment-one__form contact-form-validated",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "row",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "col-xl-6",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "appointment-one__input-box",
                                                                children: [(0, a.jsx)("h3", {
                                                                    className: "appointment-one__input-title",
                                                                    children: "Name *"
                                                                }), (0, a.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "John Smith",
                                                                    name: "name"
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("div", {
                                                            className: "col-xl-6",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "appointment-one__input-box",
                                                                children: [(0, a.jsx)("h3", {
                                                                    className: "appointment-one__input-title",
                                                                    children: "Service Type"
                                                                }), (0, a.jsx)("div", {
                                                                    className: "appointment-one__showing-sort",
                                                                    children: (0, a.jsxs)("select", {
                                                                        className: "selectpicker",
                                                                        "aria-label": "Default select example",
                                                                        children: [(0, a.jsx)("option", {
                                                                            children: "Select ..."
                                                                        }), (0, a.jsx)("option", {
                                                                            value: "1",
                                                                            children: "Sort by popular-01"
                                                                        }), (0, a.jsx)("option", {
                                                                            value: "2",
                                                                            children: "Sort by popular-02"
                                                                        }), (0, a.jsx)("option", {
                                                                            value: "3",
                                                                            children: "Sort by popular-03"
                                                                        })]
                                                                    })
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("div", {
                                                            className: "col-xl-6",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "appointment-one__input-box",
                                                                children: [(0, a.jsx)("h3", {
                                                                    className: "appointment-one__input-title",
                                                                    children: "Email *"
                                                                }), (0, a.jsx)("input", {
                                                                    type: "email",
                                                                    placeholder: "e.g:",
                                                                    name: "email"
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("div", {
                                                            className: "col-xl-6",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "appointment-one__input-box text-message-box",
                                                                children: [(0, a.jsxs)("h3", {
                                                                    className: "appointment-one__input-title",
                                                                    children: ["Message", (0, a.jsx)("span", {
                                                                        children: "(Oprional)"
                                                                    })]
                                                                }), (0, a.jsx)("textarea", {
                                                                    name: "message",
                                                                    placeholder: "Type here..."
                                                                })]
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "col-xl-6",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "appointment-one__input-box appointment-one__input-box-2",
                                                                children: [(0, a.jsx)("h3", {
                                                                    className: "appointment-one__input-title",
                                                                    children: "Phone Number *"
                                                                }), (0, a.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "+1 (00)",
                                                                    name: "email"
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "appointment-one__btn-box",
                                                                children: (0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn appointment-one__btn",
                                                                    children: "Submit"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "result"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
            i(1396)
        },
        102: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return m
                }
            });
            var a = i(7437),
                n = i(1396),
                l = i.n(n),
                t = i(7062),
                c = i(8278),
                r = i(5896),
                d = i(2265);
            let o = {
                modules: [t.pt, t.tl, t.W_],
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

            function m() {
                let [e, s] = (0, d.useState)(!1);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: "main-slider",
                        children: [(0, a.jsxs)(c.tq, { ...o,
                            className: "main-slider__carousel",
                            children: [(0, a.jsx)(c.o5, {
                                children: (0, a.jsxs)("div", {
                                    className: "item main-slider__slide-1",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-slider__bg",
                                        style: {
                                            backgroundImage: "url(assets/images/backgrounds/slider-1-1.jpg)"
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "main-slider__shape-1 rotate-me",
                                        children: (0, a.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "main-slider__shape-2 float-bob-x",
                                        children: (0, a.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "container",
                                        children: (0, a.jsxs)("div", {
                                            className: "main-slider__content",
                                            children: [(0, a.jsx)("p", {
                                                className: "main-slider__sub-title",
                                                children: "WE CREAT DIGITAL PRODUCT"
                                            }), (0, a.jsxs)("h2", {
                                                className: "main-slider__title",
                                                children: ["Get more of what ", (0, a.jsx)("br", {}), " you want from your ", (0, a.jsx)("br", {}), " business"]
                                            }), (0, a.jsxs)("p", {
                                                className: "main-slider__text",
                                                children: ["Lorem Ipsum is simply dummy text of the printing and ", (0, a.jsx)("br", {}), "typesetting industry. Lorem Ipsum has been."]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-slider__btn-and-video-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-slider__btn-box",
                                                    children: (0, a.jsx)(l(), {
                                                        href: "contact",
                                                        className: "thm-btn main-slider__btn",
                                                        children: "Get Consulting"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-slider__video-link",
                                                    children: [(0, a.jsx)("a", {
                                                        onClick: () => s(!0),
                                                        className: "video-popup",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "main-slider__video-icon",
                                                            children: [(0, a.jsx)("span", {
                                                                className: "fa fa-play"
                                                            }), (0, a.jsx)("i", {
                                                                className: "ripple"
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("h4", {
                                                        className: "main-slider__video-text",
                                                        children: "Watch Video"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(c.o5, {
                                children: (0, a.jsxs)("div", {
                                    className: "item main-slider__slide-2",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-slider__bg",
                                        style: {
                                            backgroundImage: "url(assets/images/backgrounds/slider-1-2.jpg)"
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "main-slider__shape-1 rotate-me",
                                        children: (0, a.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "main-slider__shape-2 float-bob-x",
                                        children: (0, a.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "container",
                                        children: (0, a.jsxs)("div", {
                                            className: "main-slider__content",
                                            children: [(0, a.jsx)("p", {
                                                className: "main-slider__sub-title",
                                                children: "WE CREAT DIGITAL PRODUCT"
                                            }), (0, a.jsxs)("h2", {
                                                className: "main-slider__title",
                                                children: ["Get more of what ", (0, a.jsx)("br", {}), " you want from your ", (0, a.jsx)("br", {}), " business"]
                                            }), (0, a.jsxs)("p", {
                                                className: "main-slider__text",
                                                children: ["Lorem Ipsum is simply dummy text of the printing and ", (0, a.jsx)("br", {}), "typesetting industry. Lorem Ipsum has been."]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-slider__btn-and-video-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-slider__btn-box",
                                                    children: (0, a.jsx)(l(), {
                                                        href: "contact",
                                                        className: "thm-btn main-slider__btn",
                                                        children: "Get Consulting"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-slider__video-link",
                                                    children: [(0, a.jsx)("a", {
                                                        onClick: () => s(!0),
                                                        className: "video-popup",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "main-slider__video-icon",
                                                            children: [(0, a.jsx)("span", {
                                                                className: "fa fa-play"
                                                            }), (0, a.jsx)("i", {
                                                                className: "ripple"
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("h4", {
                                                        className: "main-slider__video-text",
                                                        children: "Watch Video"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(c.o5, {
                                children: (0, a.jsxs)("div", {
                                    className: "item main-slider__slide-3",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-slider__bg",
                                        style: {
                                            backgroundImage: "url(assets/images/backgrounds/slider-1-3.jpg)"
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "main-slider__shape-1 rotate-me",
                                        children: (0, a.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-shape-1.png",
                                            alt: ""
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "main-slider__shape-2 float-bob-x",
                                        children: (0, a.jsx)("img", {
                                            src: "assets/images/shapes/main-slider-shape-2.png",
                                            alt: ""
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "container",
                                        children: (0, a.jsxs)("div", {
                                            className: "main-slider__content",
                                            children: [(0, a.jsx)("p", {
                                                className: "main-slider__sub-title",
                                                children: "WE CREAT DIGITAL PRODUCT"
                                            }), (0, a.jsxs)("h2", {
                                                className: "main-slider__title",
                                                children: ["Get more of what ", (0, a.jsx)("br", {}), " you want from your ", (0, a.jsx)("br", {}), " business"]
                                            }), (0, a.jsxs)("p", {
                                                className: "main-slider__text",
                                                children: ["Lorem Ipsum is simply dummy text of the printing and ", (0, a.jsx)("br", {}), "typesetting industry. Lorem Ipsum has been."]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-slider__btn-and-video-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-slider__btn-box",
                                                    children: (0, a.jsx)(l(), {
                                                        href: "contact",
                                                        className: "thm-btn main-slider__btn",
                                                        children: "Get Consulting"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-slider__video-link",
                                                    children: [(0, a.jsx)("a", {
                                                        onClick: () => s(!0),
                                                        className: "video-popup",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "main-slider__video-icon",
                                                            children: [(0, a.jsx)("span", {
                                                                className: "fa fa-play"
                                                            }), (0, a.jsx)("i", {
                                                                className: "ripple"
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("h4", {
                                                        className: "main-slider__video-text",
                                                        children: "Watch Video"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), (0, a.jsx)(r.Z, {
                            channel: "youtube",
                            autoplay: !0,
                            isOpen: e,
                            videoId: "vfhzo499OeA",
                            onClose: () => s(!1)
                        })]
                    })
                })
            }
        },
        2389: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return c
                }
            });
            var a = i(7437);
            i(1396);
            var n = i(7062),
                l = i(8278);
            let t = {
                modules: [n.pt, n.tl, n.W_],
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
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("section", {
                        className: "brand-one",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "brand-one__inner",
                                children: (0, a.jsxs)(l.tq, { ...t,
                                    className: "brand-one__carousel owl-carousel",
                                    children: [(0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-2.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-3.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-5.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-4.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)(l.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "brand-one__single",
                                            children: (0, a.jsx)("div", {
                                                className: "brand-one__img",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/brand/brand-1-5.png",
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
        356: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return l
                }
            });
            var a = i(7437),
                n = i(2265);

            function l() {
                let [e, s] = (0, n.useState)({
                    status: !1,
                    key: 1
                }), i = i => {
                    e.key === i ? s({
                        status: !1
                    }) : s({
                        status: !0,
                        key: i
                    })
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("section", {
                        className: "faq-one",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "row",
                                children: [(0, a.jsx)("div", {
                                    className: "col-xl-5 col-lg-5",
                                    children: (0, a.jsxs)("div", {
                                        className: "faq-one__left",
                                        children: [(0, a.jsxs)("div", {
                                            className: "section-title text-left",
                                            children: [(0, a.jsx)("div", {
                                                className: "section-title__tagline-box",
                                                children: (0, a.jsx)("p", {
                                                    className: "section-title__tagline",
                                                    children: "FAQs"
                                                })
                                            }), (0, a.jsx)("h2", {
                                                className: "section-title__title",
                                                children: "Frequently asked questions"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "faq-one__img",
                                            children: [(0, a.jsx)("img", {
                                                src: "assets/images/resources/faq-one-img-1.jpg",
                                                alt: ""
                                            }), (0, a.jsx)("div", {
                                                className: "faq-one__shape-1 float-bob-y",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/shapes/faq-one-shape-1.png",
                                                    alt: ""
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-xl-7 col-lg-7",
                                    children: (0, a.jsx)("div", {
                                        className: "faq-one__right",
                                        children: (0, a.jsxs)("div", {
                                            className: "accrodion-grp faq-one-accrodion",
                                            "data-grp-name": "faq-one-accrodion",
                                            children: [(0, a.jsxs)("div", {
                                                className: 1 == e.key ? "accrodion active" : "accrodion",
                                                onClick: () => i(1),
                                                children: [(0, a.jsx)("div", {
                                                    className: "accrodion-title",
                                                    children: (0, a.jsxs)("h4", {
                                                        children: [(0, a.jsx)("span", {
                                                            children: "Q1."
                                                        }), "What activities are done in the development?"]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "accrodion-content",
                                                    children: (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsx)("p", {
                                                            children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: 2 == e.key ? "accrodion active" : "accrodion",
                                                onClick: () => i(2),
                                                children: [(0, a.jsx)("div", {
                                                    className: "accrodion-title",
                                                    children: (0, a.jsxs)("h4", {
                                                        children: [(0, a.jsx)("span", {
                                                            children: "Q2."
                                                        }), "How can i use landbook When should I use a Tag?"]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "accrodion-content",
                                                    onClick: () => i(2),
                                                    children: (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsx)("p", {
                                                            children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: 3 == e.key ? "accrodion active" : "accrodion",
                                                onClick: () => i(3),
                                                children: [(0, a.jsx)("div", {
                                                    className: "accrodion-title",
                                                    children: (0, a.jsxs)("h4", {
                                                        children: [(0, a.jsx)("span", {
                                                            children: "Q3."
                                                        }), "Are social media good for the business growth?"]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "accrodion-content",
                                                    children: (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsx)("p", {
                                                            children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: 4 == e.key ? "accrodion active" : "accrodion",
                                                onClick: () => i(4),
                                                children: [(0, a.jsx)("div", {
                                                    className: "accrodion-title",
                                                    children: (0, a.jsxs)("h4", {
                                                        children: [(0, a.jsx)("span", {
                                                            children: "Q4."
                                                        }), "How often should i work on the digital marketing?"]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "accrodion-content",
                                                    children: (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsx)("p", {
                                                            children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: 5 == e.key ? "accrodion active" : "accrodion",
                                                onClick: () => i(5),
                                                children: [(0, a.jsx)("div", {
                                                    className: "accrodion-title",
                                                    children: (0, a.jsxs)("h4", {
                                                        children: [(0, a.jsx)("span", {
                                                            children: "Q5."
                                                        }), "What are the different types of marketing solutions?"]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "accrodion-content",
                                                    children: (0, a.jsx)("div", {
                                                        className: "inner",
                                                        children: (0, a.jsx)("p", {
                                                            children: "Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour."
                                                        })
                                                    })
                                                })]
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
        3383: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return c
                }
            });
            var a = i(7437),
                n = i(1396),
                l = i.n(n),
                t = i(2265);

            function c() {
                let [e, s] = (0, t.useState)(1), i = e => {
                    s(e)
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: "pricing-one",
                        children: [(0, a.jsx)("div", {
                            className: "pricing-one__shape-1 zoominout",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/pricing-one-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "pricing-one__shape-2 img-bounce",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/pricing-one-shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsxs)("div", {
                                className: "section-title text-center",
                                children: [(0, a.jsx)("div", {
                                    className: "section-title__tagline-box",
                                    children: (0, a.jsx)("p", {
                                        className: "section-title__tagline",
                                        children: "pricing plans"
                                    })
                                }), (0, a.jsxs)("h2", {
                                    className: "section-title__title",
                                    children: ["Offering Our Best Plan For Your", (0, a.jsx)("br", {}), " Business Purpose"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "pricing-one__main-tab-box tabs-box",
                                children: [(0, a.jsxs)("ul", {
                                    className: "tab-buttons list-unstyled",
                                    children: [(0, a.jsx)("li", {
                                        className: 1 == e ? "tab-btn active-btn tab-btn-one" : "tab-btn",
                                        onClick: () => i(1),
                                        children: (0, a.jsx)("span", {
                                            children: "Monthly"
                                        })
                                    }), (0, a.jsx)("li", {
                                        onClick: () => i(2),
                                        className: 2 == e ? "tab-btn active-btn tab-btn-two" : "tab-btn",
                                        children: (0, a.jsx)("span", {
                                            children: "Yearly"
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "tabs-content",
                                    children: [(0, a.jsx)("div", {
                                        className: 1 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                        children: (0, a.jsx)("div", {
                                            className: "pricing-one__inner",
                                            children: (0, a.jsxs)("div", {
                                                className: "row",
                                                children: [(0, a.jsx)("div", {
                                                    className: "col-xl-4 col-lg-4",
                                                    children: (0, a.jsx)("div", {
                                                        className: "pricing-one__single",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "pricing-one__single-inner",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "pricing-one__most-popular",
                                                                children: (0, a.jsx)("p", {
                                                                    children: "Most Popular"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "pricing-one__price-box",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "pricing-one__price-title",
                                                                    children: "Basic Plan"
                                                                }), (0, a.jsxs)("h3", {
                                                                    className: "pricing-one__price",
                                                                    children: ["$15", (0, a.jsx)("span", {
                                                                        children: "/montly"
                                                                    })]
                                                                }), (0, a.jsx)("p", {
                                                                    className: "pricing-one__text",
                                                                    children: "Popularised in the follower with the etraset sheets containing."
                                                                })]
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "list-unstyled pricing-one__points-list",
                                                                children: [(0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Powerful Admin Panel"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "3 Native Android App"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Multi-Language Support"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Support via E-mail and Phone"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__btn-box",
                                                                children: (0, a.jsx)(l(), {
                                                                    href: "price",
                                                                    className: "thm-btn pricing-one__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-xl-4 col-lg-4",
                                                    children: (0, a.jsx)("div", {
                                                        className: "pricing-one__single pricing-one__single-2",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "pricing-one__single-inner",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "pricing-one__most-popular",
                                                                children: (0, a.jsx)("p", {
                                                                    children: "Most Popular"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "pricing-one__price-box",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "pricing-one__price-title",
                                                                    children: "Standard Plan"
                                                                }), (0, a.jsxs)("h3", {
                                                                    className: "pricing-one__price",
                                                                    children: ["$39", (0, a.jsx)("span", {
                                                                        children: "/montly"
                                                                    })]
                                                                }), (0, a.jsx)("p", {
                                                                    className: "pricing-one__text",
                                                                    children: "Popularised in the follower with the etraset sheets containing."
                                                                })]
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "list-unstyled pricing-one__points-list",
                                                                children: [(0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Powerful Admin Panel"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "3 Native Android App"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Multi-Language Support"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Support via E-mail and Phone"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__btn-box",
                                                                children: (0, a.jsx)(l(), {
                                                                    href: "price",
                                                                    className: "thm-btn pricing-one__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-xl-4 col-lg-4",
                                                    children: (0, a.jsx)("div", {
                                                        className: "pricing-one__single pricing-one__single-3",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "pricing-one__single-inner",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "pricing-one__most-popular",
                                                                children: (0, a.jsx)("p", {
                                                                    children: "Most Popular"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "pricing-one__price-box",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "pricing-one__price-title",
                                                                    children: "Premium Plan"
                                                                }), (0, a.jsxs)("h3", {
                                                                    className: "pricing-one__price",
                                                                    children: ["$59", (0, a.jsx)("span", {
                                                                        children: "/montly"
                                                                    })]
                                                                }), (0, a.jsx)("p", {
                                                                    className: "pricing-one__text",
                                                                    children: "Popularised in the follower with the etraset sheets containing."
                                                                })]
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "list-unstyled pricing-one__points-list",
                                                                children: [(0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Powerful Admin Panel"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "3 Native Android App"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Multi-Language Support"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Support via E-mail and Phone"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__btn-box",
                                                                children: (0, a.jsx)(l(), {
                                                                    href: "price",
                                                                    className: "thm-btn pricing-one__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: 2 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                        children: (0, a.jsx)("div", {
                                            className: "pricing-one__inner",
                                            children: (0, a.jsxs)("div", {
                                                className: "row",
                                                children: [(0, a.jsx)("div", {
                                                    className: "col-xl-4 col-lg-4",
                                                    children: (0, a.jsx)("div", {
                                                        className: "pricing-one__single",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "pricing-one__single-inner",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "pricing-one__most-popular",
                                                                children: (0, a.jsx)("p", {
                                                                    children: "Most Popular"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "pricing-one__price-box",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "pricing-one__price-title",
                                                                    children: "Basic Plan"
                                                                }), (0, a.jsxs)("h3", {
                                                                    className: "pricing-one__price",
                                                                    children: ["$15", (0, a.jsx)("span", {
                                                                        children: "/montly"
                                                                    })]
                                                                }), (0, a.jsx)("p", {
                                                                    className: "pricing-one__text",
                                                                    children: "Popularised in the follower with the etraset sheets containing."
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__points-box",
                                                                children: (0, a.jsxs)("ul", {
                                                                    className: "list-unstyled pricing-one__points-list",
                                                                    children: [(0, a.jsxs)("li", {
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "icon",
                                                                            children: (0, a.jsx)("i", {
                                                                                className: "icon-check"
                                                                            })
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "text",
                                                                            children: (0, a.jsx)("p", {
                                                                                children: "Powerful Admin Panel"
                                                                            })
                                                                        })]
                                                                    }), (0, a.jsxs)("li", {
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "icon",
                                                                            children: (0, a.jsx)("i", {
                                                                                className: "icon-check"
                                                                            })
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "text",
                                                                            children: (0, a.jsx)("p", {
                                                                                children: "3 Native Android App"
                                                                            })
                                                                        })]
                                                                    }), (0, a.jsxs)("li", {
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "icon",
                                                                            children: (0, a.jsx)("i", {
                                                                                className: "icon-check"
                                                                            })
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "text",
                                                                            children: (0, a.jsx)("p", {
                                                                                children: "Multi-Language Support"
                                                                            })
                                                                        })]
                                                                    }), (0, a.jsxs)("li", {
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "icon",
                                                                            children: (0, a.jsx)("i", {
                                                                                className: "icon-check"
                                                                            })
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "text",
                                                                            children: (0, a.jsx)("p", {
                                                                                children: "Support via E-mail and Phone"
                                                                            })
                                                                        })]
                                                                    })]
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__btn-box",
                                                                children: (0, a.jsx)(l(), {
                                                                    href: "price",
                                                                    className: "thm-btn pricing-one__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-xl-4 col-lg-4",
                                                    children: (0, a.jsx)("div", {
                                                        className: "pricing-one__single pricing-one__single-2",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "pricing-one__single-inner",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "pricing-one__most-popular",
                                                                children: (0, a.jsx)("p", {
                                                                    children: "Most Popular"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "pricing-one__price-box",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "pricing-one__price-title",
                                                                    children: "Standard Plan"
                                                                }), (0, a.jsxs)("h3", {
                                                                    className: "pricing-one__price",
                                                                    children: ["$39", (0, a.jsx)("span", {
                                                                        children: "/montly"
                                                                    })]
                                                                }), (0, a.jsx)("p", {
                                                                    className: "pricing-one__text",
                                                                    children: "Popularised in the follower with the etraset sheets containing."
                                                                })]
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "list-unstyled pricing-one__points-list",
                                                                children: [(0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Powerful Admin Panel"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "3 Native Android App"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Multi-Language Support"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Support via E-mail and Phone"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__btn-box",
                                                                children: (0, a.jsx)(l(), {
                                                                    href: "price",
                                                                    className: "thm-btn pricing-one__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-xl-4 col-lg-4",
                                                    children: (0, a.jsx)("div", {
                                                        className: "pricing-one__single pricing-one__single-3",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "pricing-one__single-inner",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "pricing-one__most-popular",
                                                                children: (0, a.jsx)("p", {
                                                                    children: "Most Popular"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "pricing-one__price-box",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "pricing-one__price-title",
                                                                    children: "Premium Plan"
                                                                }), (0, a.jsxs)("h3", {
                                                                    className: "pricing-one__price",
                                                                    children: ["$59", (0, a.jsx)("span", {
                                                                        children: "/montly"
                                                                    })]
                                                                }), (0, a.jsx)("p", {
                                                                    className: "pricing-one__text",
                                                                    children: "Popularised in the follower with the etraset sheets containing."
                                                                })]
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "list-unstyled pricing-one__points-list",
                                                                children: [(0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Powerful Admin Panel"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "3 Native Android App"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Multi-Language Support"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("li", {
                                                                    children: [(0, a.jsx)("div", {
                                                                        className: "icon",
                                                                        children: (0, a.jsx)("i", {
                                                                            className: "icon-check"
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "text",
                                                                        children: (0, a.jsx)("p", {
                                                                            children: "Support via E-mail and Phone"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "pricing-one__btn-box",
                                                                children: (0, a.jsx)(l(), {
                                                                    href: "price",
                                                                    className: "thm-btn pricing-one__btn",
                                                                    children: "Buy Now"
                                                                })
                                                            })]
                                                        })
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
        9109: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return l
                }
            });
            var a = i(7437);
            i(1396);
            var n = i(2265);

            function l() {
                let [e, s] = (0, n.useState)(1), i = e => {
                    s(e)
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: "get-quote",
                        children: [(0, a.jsx)("div", {
                            className: "get-quote__shape-4 float-bob-x",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-4.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__shape-5 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-5.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__shape-7 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-7.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__shape-8 float-bob-x",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-8.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__shape-9 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-9.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__shape-10 float-bob-x",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-10.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__shape-11 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/get-quote-shape-11.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__img-1",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/resources/get-quote-img-1.jpg",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "get-quote__img-2",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/resources/get-quote-img-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "get-quote__inner",
                                children: (0, a.jsxs)("div", {
                                    className: "row tabs-box",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6",
                                        children: (0, a.jsxs)("div", {
                                            className: "get-quote__left clearfix",
                                            children: [(0, a.jsx)("div", {
                                                className: "get-quote__shape-6 float-bob-y",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-6.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "get-quote__tab-box clearfix",
                                                children: (0, a.jsxs)("ul", {
                                                    className: "tab-buttons clearfix list-unstyled",
                                                    children: [(0, a.jsx)("li", {
                                                        className: 1 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => i(1),
                                                        children: (0, a.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "icon-life-insurance-1"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, a.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Life"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: 2 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => i(2),
                                                        children: (0, a.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "icon-insurance-1"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, a.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Veichle"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: 3 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => i(3),
                                                        children: (0, a.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "icon-home-insurance"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, a.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Home"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: 4 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => i(4),
                                                        children: (0, a.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "icon-briefcase"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, a.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Business"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        className: 5 == e ? "tab-btn active-btn" : "tab-btn",
                                                        onClick: () => i(5),
                                                        children: (0, a.jsxs)("div", {
                                                            className: "get-quote__tab-btn-content",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "get-quote__tab-icon",
                                                                children: (0, a.jsx)("span", {
                                                                    className: "icon-health-insurance"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__tab-text-box",
                                                                children: (0, a.jsx)("p", {
                                                                    className: "get-quote__tab-text",
                                                                    children: "Health"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6",
                                        children: (0, a.jsxs)("div", {
                                            className: "get-quote__right",
                                            children: [(0, a.jsx)("div", {
                                                className: "get-quote__shape-1",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-1.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "get-quote__shape-2",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-2.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "get-quote__shape-3",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/shapes/get-quote-shape-3.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "tabs-content",
                                                children: [(0, a.jsx)("div", {
                                                    className: 1 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, a.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Life Insurance"
                                                        }), (0, a.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, a.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, a.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            style: {
                                                                                width: "70%"
                                                                            },
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, a.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, a.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, a.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "212"
                                                                            }), (0, a.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, a.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, a.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: 2 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, a.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Veichle Insurance"
                                                        }), (0, a.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, a.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, a.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, a.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, a.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, a.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, a.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, a.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, a.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: 3 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, a.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Home Insurance"
                                                        }), (0, a.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, a.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, a.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, a.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, a.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, a.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, a.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, a.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, a.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: 4 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, a.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Business Insurance"
                                                        }), (0, a.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, a.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, a.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, a.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, a.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, a.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, a.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, a.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, a.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: 5 == e ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "get-quote__content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "get-quote__tagline",
                                                            children: "GET FREE QUOTE"
                                                        }), (0, a.jsx)("h2", {
                                                            className: "get-quote__title",
                                                            children: "Health Insurance"
                                                        }), (0, a.jsxs)("form", {
                                                            className: "get-quote__form",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "get-quote__content-box",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Your Name",
                                                                        name: "name"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Email Address",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Phone Number",
                                                                        name: "email"
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "get-quote__input-box",
                                                                    children: (0, a.jsx)("input", {
                                                                        type: "email",
                                                                        placeholder: "Property Types",
                                                                        name: "email"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "get-quote__progress",
                                                                children: (0, a.jsxs)("div", {
                                                                    className: "get-quote__progress-single",
                                                                    children: [(0, a.jsx)("h4", {
                                                                        className: "get-quote__progress-title",
                                                                        children: "Limits of Blance"
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "bar",
                                                                        children: (0, a.jsx)("div", {
                                                                            className: "bar-inner count-bar",
                                                                            "data-percent": "70%",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "count-text"
                                                                            })
                                                                        })
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "get-quote__balance-box",
                                                                        children: (0, a.jsx)("p", {
                                                                            className: "get-quote__balance",
                                                                            children: "$65254"
                                                                        })
                                                                    })]
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "get-quote__content-bottom",
                                                                children: [(0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    className: "thm-btn get-quote__btn",
                                                                    children: "GET YOUR QUOTE"
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "get-quote__content-bottom-text-box",
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "get-quote__count-box",
                                                                        children: [(0, a.jsxs)("div", {
                                                                            className: "get-quote__count count-box",
                                                                            children: [(0, a.jsx)("h3", {
                                                                                className: "count-text",
                                                                                "data-stop": "212",
                                                                                "data-speed": "1500",
                                                                                children: "00"
                                                                            }), (0, a.jsx)("span", {
                                                                                children: "+"
                                                                            })]
                                                                        }), (0, a.jsx)("p", {
                                                                            children: "Reviews"
                                                                        })]
                                                                    }), (0, a.jsxs)("div", {
                                                                        className: "get-quote__ratting",
                                                                        children: [(0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
                                                                            className: "icon-star-1"
                                                                        }), (0, a.jsx)("span", {
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
        6395: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return c
                }
            });
            var a = i(7437),
                n = i(7062),
                l = i(8278);
            let t = {
                modules: [n.pt, n.tl, n.W_],
                slidesPerView: 2,
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
                        slidesPerView: 1
                    },
                    991: {
                        slidesPerView: 2
                    },
                    1199: {
                        slidesPerView: 2
                    },
                    1350: {
                        slidesPerView: 2
                    }
                }
            };

            function c() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: "testimonial-one",
                        children: [(0, a.jsx)("div", {
                            className: "testimonial-one__bg float-bob-x",
                            style: {
                                backgroundImage: "url(assets/images/backgrounds/testimonial-one-bg.png)"
                            }
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "row",
                                children: [(0, a.jsx)("div", {
                                    className: "col-xl-5",
                                    children: (0, a.jsx)("div", {
                                        className: "testimonial-one__left",
                                        children: (0, a.jsxs)("div", {
                                            className: "section-title text-left",
                                            children: [(0, a.jsx)("div", {
                                                className: "section-title__tagline-box",
                                                children: (0, a.jsx)("p", {
                                                    className: "section-title__tagline",
                                                    children: "Testimonials"
                                                })
                                            }), (0, a.jsxs)("h2", {
                                                className: "section-title__title",
                                                children: ["What our client's ", (0, a.jsx)("br", {}), " says about our", (0, a.jsx)("br", {}), " best work."]
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-xl-7",
                                    children: (0, a.jsx)("div", {
                                        className: "testimonial-one__right",
                                        children: (0, a.jsxs)(l.tq, { ...t,
                                            className: "testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel",
                                            children: [(0, a.jsx)(l.o5, {
                                                children: (0, a.jsxs)("div", {
                                                    className: "testimonial-one__single",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "testimonial-one__text",
                                                        children: "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It's is exactly what our business has been lacking. \""
                                                    }), (0, a.jsxs)("div", {
                                                        className: "testimonial-one__client-info-and-img",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "testimonial-one__client-img",
                                                            children: (0, a.jsx)("img", {
                                                                src: "assets/images/testimonial/testimonial-1-1.jpg",
                                                                alt: ""
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "testimonial-one__client-info",
                                                            children: [(0, a.jsx)("h3", {
                                                                children: "Jacob Jones"
                                                            }), (0, a.jsx)("p", {
                                                                children: "President of Sales"
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)(l.o5, {
                                                children: (0, a.jsxs)("div", {
                                                    className: "testimonial-one__single",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "testimonial-one__text",
                                                        children: "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It's is exactly what our business has been lacking. \""
                                                    }), (0, a.jsxs)("div", {
                                                        className: "testimonial-one__client-info-and-img",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "testimonial-one__client-img",
                                                            children: (0, a.jsx)("img", {
                                                                src: "assets/images/testimonial/testimonial-1-2.jpg",
                                                                alt: ""
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "testimonial-one__client-info",
                                                            children: [(0, a.jsx)("h3", {
                                                                children: "Micle Deno"
                                                            }), (0, a.jsx)("p", {
                                                                children: "President of Sales"
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)(l.o5, {
                                                children: (0, a.jsxs)("div", {
                                                    className: "testimonial-one__single",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "testimonial-one__text",
                                                        children: "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It's is exactly what our business has been lacking. \""
                                                    }), (0, a.jsxs)("div", {
                                                        className: "testimonial-one__client-info-and-img",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "testimonial-one__client-img",
                                                            children: (0, a.jsx)("img", {
                                                                src: "assets/images/testimonial/testimonial-1-1.jpg",
                                                                alt: ""
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "testimonial-one__client-info",
                                                            children: [(0, a.jsx)("h3", {
                                                                children: "Jacob Jones"
                                                            }), (0, a.jsx)("p", {
                                                                children: "President of Sales"
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)(l.o5, {
                                                children: (0, a.jsxs)("div", {
                                                    className: "testimonial-one__single",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "testimonial-one__text",
                                                        children: "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It's is exactly what our business has been lacking. \""
                                                    }), (0, a.jsxs)("div", {
                                                        className: "testimonial-one__client-info-and-img",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "testimonial-one__client-img",
                                                            children: (0, a.jsx)("img", {
                                                                src: "assets/images/testimonial/testimonial-1-2.jpg",
                                                                alt: ""
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "testimonial-one__client-info",
                                                            children: [(0, a.jsx)("h3", {
                                                                children: "Micle Deno"
                                                            }), (0, a.jsx)("p", {
                                                                children: "President of Sales"
                                                            })]
                                                        })]
                                                    })]
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
        5681: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return d
                }
            });
            var a = i(7437),
                n = i(1396),
                l = i.n(n),
                t = i(2265),
                c = i(323),
                r = i(5896);

            function d() {
                let [e, s] = (0, t.useState)(!1);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("section", {
                        className: "video-one",
                        children: [(0, a.jsx)("div", {
                            className: "video-one__bg",
                            style: {
                                backgroundImage: "url(assets/images/backgrounds/video-one__bg.jpg)"
                            }
                        }), (0, a.jsx)("div", {
                            className: "video-one__shape-1",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "video-one__shape-2",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "video-one__shape-3",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-3.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "video-one__shape-4",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-4.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "video-one__shape-5",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/video-one__shape-5.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "video-one__inner",
                                children: (0, a.jsxs)("div", {
                                    className: "video-one__icon-box",
                                    children: [(0, a.jsx)("a", {
                                        onClick: () => s(!0),
                                        className: "video-one__icon video-popup",
                                        children: (0, a.jsx)("span", {
                                            className: "icon-play-2"
                                        })
                                    }), (0, a.jsx)(l(), {
                                        href: "#",
                                        className: "video-one__curved-circle-box",
                                        children: (0, a.jsx)("div", {
                                            className: "curved-circle",
                                            children: (0, a.jsx)("span", {
                                                className: "curved-circle--item",
                                                children: (0, a.jsx)(c.Z, {
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
                    }), (0, a.jsx)(r.Z, {
                        channel: "youtube",
                        autoplay: !0,
                        isOpen: e,
                        videoId: "Get7rqXYrbQ",
                        onClose: () => s(!1)
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [5285, 6582, 5896, 323, 5518, 2971, 596, 1744], function() {
            return e(e.s = 3536)
        }), _N_E = e.O()
    }
]);