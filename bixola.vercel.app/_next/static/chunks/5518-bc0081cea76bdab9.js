"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5518], {
        5518: function(e, s, i) {
            i.r(s), i.d(s, {
                default: function() {
                    return y
                }
            });
            var a = i(7437),
                l = i(2265);

            function n(e) {
                let {
                    scroll: s
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: s && (0, a.jsx)("a", {
                        className: "scroll-to-top scroll-to-target d-block",
                        href: "#top",
                        children: (0, a.jsx)("i", {
                            className: "fas fa-angle-up"
                        })
                    })
                })
            }

            function r() {
                return (0, l.useEffect)(() => {
                    let e = document.querySelectorAll("[data-bg]");
                    e.forEach(e => {
                        e.style.backgroundImage = "url(".concat(e.getAttribute("data-bg"), ")")
                    })
                }, []), (0, a.jsx)(a.Fragment, {})
            }
            var c = i(1396),
                t = i.n(c);

            function o(e) {
                let {
                    breadcrumbTitle: s
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: "page-header",
                        children: [(0, a.jsx)("div", {
                            className: "page-header__bg",
                            style: {
                                backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)"
                            }
                        }), (0, a.jsx)("div", {
                            className: "page-header__shape-1 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/page-header-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "page-header__shape-2 float-bob-x",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/page-header-shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "page-header__shape-3 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/page-header-shape-3.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "page-header__shape-4 float-bob-x",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/page-header-shape-4.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "page-header__inner",
                                children: [(0, a.jsx)("h2", {
                                    children: s
                                }), (0, a.jsxs)("ul", {
                                    className: "thm-breadcrumb list-unstyled",
                                    children: [(0, a.jsx)("li", {
                                        children: (0, a.jsx)(t(), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsx)("span", {
                                            className: "icon-down-arrow"
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: s
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }

            function d(e) {
                let {
                    isPopup: s,
                    handlePopup: i
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "search-popup ".concat(s ? "active" : ""),
                        children: [(0, a.jsx)("div", {
                            className: "search-popup__overlay search-toggler",
                            onClick: i
                        }), (0, a.jsx)("div", {
                            className: "search-popup__content",
                            children: (0, a.jsxs)("form", {
                                action: "#",
                                children: [(0, a.jsx)("label", {
                                    className: "sr-only",
                                    children: "search here"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    id: "search",
                                    placeholder: "Search Here..."
                                }), (0, a.jsx)("button", {
                                    type: "submit",
                                    "aria-label": "search submit",
                                    className: "thm-btn",
                                    children: (0, a.jsx)("i", {
                                        className: "icon-magnifying-glass"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }

            function h(e) {
                let {
                    isSidebar: s,
                    handleSidebar: i
                } = e;
                return (0, a.jsx)(a.Fragment, {})
            }

            function m() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("ul", {
                        className: "main-menu__list",
                        children: [(0, a.jsxs)("li", {
                            className: "dropdown",
                            children: [(0, a.jsx)(t(), {
                                href: "/",
                                children: "Home "
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "/",
                                        children: "Home One"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "index2",
                                        children: "Home Two"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "index3",
                                        children: "Home Three"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "index4",
                                        children: "Home Four"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("li", {
                            children: (0, a.jsx)(t(), {
                                href: "about",
                                children: "About"
                            })
                        }), (0, a.jsxs)("li", {
                            className: "dropdown",
                            children: [(0, a.jsx)(t(), {
                                href: "#",
                                children: "Pages"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "team",
                                        children: "Team"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "team-carousel",
                                        children: "Team Carousel"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "team-details",
                                        children: "Team Details"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "portfolio",
                                        children: "Portfolio"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "portfolio-carousel",
                                        children: "Portfolio Carousel"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "portfolio-details",
                                        children: "Portfolio Details"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "testimonial",
                                        children: "Testimonials"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "testimonial-carousel",
                                        children: "Testimonials Carousel"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "pricing",
                                        children: "Pricing"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "pricing-carousel",
                                        children: "Pricing Carousel"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "appointment",
                                        children: "Appointment"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "/error",
                                        children: "404 Error"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("li", {
                            className: "dropdown",
                            children: [(0, a.jsx)(t(), {
                                href: "#",
                                children: "Services"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "services",
                                        children: "Services"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "services-carousel",
                                        children: "Services Carousel"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "business-audit",
                                        children: "Business Audit"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "business-planning",
                                        children: "Business Planning"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "financial-advices",
                                        children: "Financial Advices"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "tax-strategy",
                                        children: "Tax Strategy"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "insurance-strategy",
                                        children: "Insurance Strategy"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "start-ups",
                                        children: "Start Ups"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("li", {
                            className: "dropdown",
                            children: [(0, a.jsx)(t(), {
                                href: "#",
                                children: "News"
                            }), (0, a.jsxs)("ul", {
                                className: "sub-menu",
                                children: [(0, a.jsxs)("li", {
                                    className: "dropdown",
                                    children: [(0, a.jsx)(t(), {
                                        href: "#",
                                        children: "News Grid"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog",
                                                children: "No Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-left",
                                                children: "Left Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-right",
                                                children: "Right Sidebar"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("li", {
                                    className: "dropdown",
                                    children: [(0, a.jsx)(t(), {
                                        href: "#",
                                        children: "News List One"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-1",
                                                children: "No Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-one-left",
                                                children: "Left Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-one-right",
                                                children: "Right Sidebar"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("li", {
                                    className: "dropdown",
                                    children: [(0, a.jsx)(t(), {
                                        href: "#",
                                        children: "News List Two"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-2",
                                                children: "No Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-two-left",
                                                children: "Left Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-two-right",
                                                children: "Right Sidebar"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("li", {
                                    className: "dropdown",
                                    children: [(0, a.jsx)(t(), {
                                        href: "#",
                                        children: "News List Three"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-3",
                                                children: "No Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-three-left",
                                                children: "Left Sidebar"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "blog-list-three-right",
                                                children: "Right Sidebar"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "blog-carousel",
                                        children: "News Carousel"
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)(t(), {
                                        href: "blog-details",
                                        children: "News details"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("li", {
                            children: (0, a.jsx)(t(), {
                                href: "contact",
                                children: "Contact"
                            })
                        })]
                    })
                })
            }
            var x = e => {
                let {
                    isSidebar: s,
                    handleMobileMenu: i,
                    handleSidebar: n
                } = e, [r, c] = (0, l.useState)({
                    status: !1,
                    key: "",
                    subMenuKey: ""
                }), o = function(e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    r.key === e && r.subMenuKey === s ? c({
                        status: !1,
                        key: "",
                        subMenuKey: ""
                    }) : c({
                        status: !0,
                        key: e,
                        subMenuKey: s
                    })
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "mobile-nav__wrapper",
                        children: [(0, a.jsx)("div", {
                            className: "mobile-nav__overlay mobile-nav__toggler",
                            onClick: i
                        }), (0, a.jsxs)("div", {
                            className: "mobile-nav__content",
                            children: [(0, a.jsx)("span", {
                                className: "mobile-nav__close mobile-nav__toggler",
                                onClick: i,
                                children: (0, a.jsx)("i", {
                                    className: "fa fa-times"
                                })
                            }), (0, a.jsx)("div", {
                                className: "logo-box",
                                children: (0, a.jsx)(t(), {
                                    href: "/",
                                    "aria-label": "logo image",
                                    children: (0, a.jsx)("img", {
                                        src: "assets/images/resources/logo-1.png",
                                        width: "150",
                                        alt: ""
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "mobile-nav__container",
                                children: (0, a.jsx)("div", {
                                    className: "collapse navbar-collapse show clearfix",
                                    id: "navbarSupportedContent",
                                    children: (0, a.jsxs)("ul", {
                                        className: "main-menu__list",
                                        children: [(0, a.jsxs)("li", {
                                            className: 1 == r.key ? "dropdown current" : "dropdown",
                                            children: [(0, a.jsx)(t(), {
                                                href: "/",
                                                children: "Home"
                                            }), (0, a.jsxs)("ul", {
                                                style: {
                                                    display: "".concat(1 == r.key ? "block" : "none")
                                                },
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/",
                                                        children: "Home One"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "index2",
                                                        children: "Home Two"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "index3",
                                                        children: "Home Three"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "index4",
                                                        children: "Home Four"
                                                    })
                                                })]
                                            }), (0, a.jsx)("button", {
                                                className: 1 == r.key ? "expanded open" : "",
                                                onClick: () => o(1),
                                                children: (0, a.jsx)("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "/about/",
                                                children: "About"
                                            })
                                        }), (0, a.jsxs)("li", {
                                            className: 2 == r.key ? "dropdown current" : "dropdown",
                                            children: [(0, a.jsx)(t(), {
                                                href: "/#",
                                                children: "Pages"
                                            }), (0, a.jsxs)("ul", {
                                                style: {
                                                    display: "".concat(2 == r.key ? "block" : "none")
                                                },
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "team",
                                                        children: "Team"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "team-carousel",
                                                        children: "Team Carousel"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "team-details",
                                                        children: "Team Details"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "portfolio",
                                                        children: "Portfolio"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "portfolio-carousel",
                                                        children: "Portfolio Carousel"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "portfolio-details",
                                                        children: "Portfolio Details"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "testimonial",
                                                        children: "Testimonials"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "testimonial-carousel",
                                                        children: "Testimonials Carousel"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "pricing",
                                                        children: "Pricing"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "pricing-carousel",
                                                        children: "Pricing Carousel"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "appointment",
                                                        children: "Appointment"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/error",
                                                        children: "404 Error"
                                                    })
                                                })]
                                            }), (0, a.jsx)("button", {
                                                className: 2 == r.key ? "expanded open" : "",
                                                onClick: () => o(2),
                                                children: (0, a.jsx)("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: 3 == r.key ? "dropdown current" : "dropdown",
                                            children: [(0, a.jsx)(t(), {
                                                href: "/#",
                                                children: "Services"
                                            }), (0, a.jsxs)("ul", {
                                                style: {
                                                    display: "".concat(3 == r.key ? "block" : "none")
                                                },
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "services",
                                                        children: "Services"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "services-carousel",
                                                        children: "Services Carousel"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "business-audit",
                                                        children: "Business Audit"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "business-planning",
                                                        children: "Business Planning"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "financial-advices",
                                                        children: "Financial Advices"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "tax-strategy",
                                                        children: "Tax Strategy"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "insurance-strategy",
                                                        children: "Insurance Strategy"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "start-ups",
                                                        children: "Start Ups"
                                                    })
                                                })]
                                            }), (0, a.jsx)("button", {
                                                className: 3 == r.key ? "expanded open" : "",
                                                onClick: () => o(3),
                                                children: (0, a.jsx)("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: 4 == r.key ? "dropdown current" : "dropdown",
                                            children: [(0, a.jsx)(t(), {
                                                href: "/#",
                                                children: "News"
                                            }), (0, a.jsxs)("ul", {
                                                style: {
                                                    display: "".concat(4 == r.key ? "block" : "none")
                                                },
                                                children: [(0, a.jsxs)("li", {
                                                    className: 5 == r.subMenuKey ? "dropdown current" : "dropdown",
                                                    children: [(0, a.jsx)(t(), {
                                                        href: "/",
                                                        children: "News Grid"
                                                    }), (0, a.jsxs)("ul", {
                                                        style: {
                                                            display: "".concat(5 == r.subMenuKey ? "block" : "none")
                                                        },
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog",
                                                                children: "No Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-left",
                                                                children: "Left Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-right",
                                                                children: "Right Sidebar"
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("button", {
                                                        className: 5 == r.subMenuKey ? "expanded open" : "expanded",
                                                        onClick: () => o(4, 5),
                                                        children: (0, a.jsx)("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    className: 6 == r.subMenuKey ? "dropdown current" : "dropdown",
                                                    children: [(0, a.jsx)(t(), {
                                                        href: "/",
                                                        children: "News List One"
                                                    }), (0, a.jsxs)("ul", {
                                                        style: {
                                                            display: "".concat(6 == r.subMenuKey ? "block" : "none")
                                                        },
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-1",
                                                                children: "No Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-one-left",
                                                                children: "Left Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-one-right",
                                                                children: "Right Sidebar"
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("button", {
                                                        className: 6 == r.subMenuKey ? "expanded open" : "expanded",
                                                        onClick: () => o(4, 6),
                                                        children: (0, a.jsx)("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    className: 7 == r.subMenuKey ? "dropdown current" : "dropdown",
                                                    children: [(0, a.jsx)(t(), {
                                                        href: "/",
                                                        children: "News List Two"
                                                    }), (0, a.jsxs)("ul", {
                                                        style: {
                                                            display: "".concat(7 == r.subMenuKey ? "block" : "none")
                                                        },
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-2",
                                                                children: "No Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-two-left",
                                                                children: "Left Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-two-right",
                                                                children: "Right Sidebar"
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("button", {
                                                        className: 7 == r.subMenuKey ? "expanded open" : "expanded",
                                                        onClick: () => o(4, 7),
                                                        children: (0, a.jsx)("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    className: 8 == r.subMenuKey ? "dropdown current" : "dropdown",
                                                    children: [(0, a.jsx)(t(), {
                                                        href: "/",
                                                        children: "News List Three"
                                                    }), (0, a.jsxs)("ul", {
                                                        style: {
                                                            display: "".concat(8 == r.subMenuKey ? "block" : "none")
                                                        },
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-3",
                                                                children: "No Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-three-left",
                                                                children: "Left Sidebar"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "blog-list-three-right",
                                                                children: "Right Sidebar"
                                                            })
                                                        })]
                                                    }), (0, a.jsx)("button", {
                                                        className: 8 == r.subMenuKey ? "expanded open" : "expanded",
                                                        onClick: () => o(4, 8),
                                                        children: (0, a.jsx)("span", {
                                                            className: "fa fa-angle-right"
                                                        })
                                                    })]
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "blog-carousel",
                                                        children: "News Carousel"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "blog-details",
                                                        children: "News details"
                                                    })
                                                })]
                                            }), (0, a.jsx)("button", {
                                                className: 4 == r.key ? "expanded open" : "",
                                                onClick: () => o(4),
                                                children: (0, a.jsx)("span", {
                                                    className: "fa fa-angle-right"
                                                })
                                            })]
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })]
                                    })
                                })
                            }), (0, a.jsxs)("ul", {
                                className: "mobile-nav__contact list-unstyled",
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("i", {
                                        className: "fa fa-envelope"
                                    }), (0, a.jsx)(t(), {
                                        href: "mailto:needhelp@elitecons.com",
                                        children: "needhelp@elitecons.com"
                                    })]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("i", {
                                        className: "fa fa-phone-alt"
                                    }), (0, a.jsx)(t(), {
                                        href: "tel:666-888-0000",
                                        children: "666 888 0000"
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "mobile-nav__top",
                                children: (0, a.jsxs)("div", {
                                    className: "mobile-nav__social",
                                    children: [(0, a.jsx)(t(), {
                                        href: "#",
                                        className: "fab fa-twitter"
                                    }), (0, a.jsx)(t(), {
                                        href: "#",
                                        className: "fab fa-facebook-square"
                                    }), (0, a.jsx)(t(), {
                                        href: "#",
                                        className: "fab fa-pinterest-p"
                                    }), (0, a.jsx)(t(), {
                                        href: "#",
                                        className: "fab fa-instagram"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            };

            function j(e) {
                let {
                    scroll: s,
                    isMobileMenu: i,
                    handleMobileMenu: l
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("header", {
                        className: "main-header",
                        children: [(0, a.jsx)("div", {
                            className: "main-header__top",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsxs)("div", {
                                    className: "main-header__top-inner",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-header__top-left",
                                        children: (0, a.jsxs)("ul", {
                                            className: "list-unstyled main-header__contact-list",
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fas fa-clock"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "text",
                                                    children: (0, a.jsx)("p", {
                                                        children: "Mon to Fri: 9:00am to 6:00pm"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fas fa-envelope"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "text",
                                                    children: (0, a.jsx)("p", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "mailto:help@company.com",
                                                            children: "help@company.com"
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fas fa-map-marker"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "text",
                                                    children: (0, a.jsx)("p", {
                                                        children: "88 Broklyn Golden Street. New York"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "main-header__top-right",
                                        children: [(0, a.jsxs)("ul", {
                                            className: "list-unstyled main-header__top-menu",
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "about",
                                                    children: "About"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "about",
                                                    children: "Faqs"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "contact",
                                                    children: "Contact"
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-header__social",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }), (0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-facebook"
                                                })
                                            }), (0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            }), (0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, a.jsx)("nav", {
                            className: "main-menu",
                            children: (0, a.jsx)("div", {
                                className: "main-menu__wrapper",
                                children: (0, a.jsx)("div", {
                                    className: "container",
                                    children: (0, a.jsxs)("div", {
                                        className: "main-menu__wrapper-inner",
                                        children: [(0, a.jsx)("div", {
                                            className: "main-menu__logo",
                                            children: (0, a.jsx)(t(), {
                                                href: "/",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/resources/logo-1.png",
                                                    alt: ""
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu__main-menu-box",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: l,
                                                children: (0, a.jsx)("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }), (0, a.jsx)(m, {})]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu__right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "main-menu__call",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu__call-icon",
                                                    children: (0, a.jsx)("span", {
                                                        className: "icon-phone"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-menu__call-content",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "main-menu__call-sub-title",
                                                        children: "Need help?"
                                                    }), (0, a.jsx)("h5", {
                                                        className: "main-menu__call-number",
                                                        children: (0, a.jsx)(t(), {
                                                            href: "tel:1212333400",
                                                            children: "+1 212 333 400"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "main-menu__btn-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "contact",
                                                    className: "main-menu__btn thm-btn",
                                                    children: "Get Consulting"
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsx)(x, {
                        handleMobileMenu: l
                    }), (0, a.jsx)("div", {
                        className: "stricky-header stricked-menu main-menu ".concat(s ? "stricky-fixed" : ""),
                        children: (0, a.jsx)("div", {
                            className: "sticky-header__content",
                            children: (0, a.jsx)("nav", {
                                className: "main-menu",
                                children: (0, a.jsx)("div", {
                                    className: "main-menu__wrapper",
                                    children: (0, a.jsx)("div", {
                                        className: "container",
                                        children: (0, a.jsxs)("div", {
                                            className: "main-menu__wrapper-inner",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu__logo",
                                                children: (0, a.jsx)(t(), {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/logo-1.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu__main-menu-box",
                                                children: [(0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: l,
                                                    children: (0, a.jsx)("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }), (0, a.jsx)(m, {})]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu__right",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "main-menu__call-icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-phone"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "main-menu__call-content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "main-menu__call-sub-title",
                                                            children: "Need help?"
                                                        }), (0, a.jsx)("h5", {
                                                            className: "main-menu__call-number",
                                                            children: (0, a.jsx)(t(), {
                                                                href: "tel:1212333400",
                                                                children: "+1 212 333 400"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "main-menu__btn-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "contact",
                                                        className: "main-menu__btn thm-btn",
                                                        children: "Get Consulting"
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            }

            function f(e) {
                let {
                    scroll: s,
                    handlePopup: i,
                    handleMobileMenu: l
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("header", {
                        className: "main-header-two",
                        children: [(0, a.jsx)("div", {
                            className: "main-header-two__top",
                            children: (0, a.jsxs)("div", {
                                className: "main-header-two__top-inner",
                                children: [(0, a.jsx)("div", {
                                    className: "main-header-two__text",
                                    children: (0, a.jsx)("p", {
                                        children: "Monday - Friday / 8AM - 11PM"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "main-header-two__contact-and-social",
                                    children: [(0, a.jsxs)("ul", {
                                        className: "list-unstyled main-header-two__contact-list",
                                        children: [(0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "icon-envelope"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "mailto:email@example.com",
                                                        children: "email@example.com"
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "icon-location-1"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: "120 F 2th Yt, Melbone NY 1259"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "main-header-two__top-social",
                                        children: [(0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-facebook"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-pinterest-p"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("nav", {
                            className: "main-menu main-menu-two",
                            children: (0, a.jsx)("div", {
                                className: "main-menu-two__wrapper",
                                children: (0, a.jsxs)("div", {
                                    className: "main-menu-two__wrapper-inner",
                                    children: [(0, a.jsxs)("div", {
                                        className: "main-menu-two__left",
                                        children: [(0, a.jsx)("div", {
                                            className: "main-menu-two__logo",
                                            children: (0, a.jsx)(t(), {
                                                href: "/",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/resources/logo-2.png",
                                                    alt: ""
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-two__main-menu-box",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: l,
                                                children: (0, a.jsx)("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }), (0, a.jsx)(m, {})]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "main-menu-two__right",
                                        children: [(0, a.jsxs)("div", {
                                            className: "main-menu-two__search-cart-box",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-two__search-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "main-menu-two__search search-toggler icon-magnifying-glass",
                                                    onClick: i
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "main-menu-two__cart-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "cart",
                                                    className: "main-menu-two__cart icon-shopping-cart"
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-two__button-and-call-box",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-two__btn-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "contact",
                                                    className: "main-menu-two__btn",
                                                    children: "Get Solution"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-two__call",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-two__call-icon",
                                                    children: (0, a.jsx)("span", {
                                                        className: "icon-phone"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-menu-two__call-content",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "main-menu-two__call-sub-title",
                                                        children: "Need help?"
                                                    }), (0, a.jsx)("h5", {
                                                        className: "main-menu-two__call-number",
                                                        children: (0, a.jsx)(t(), {
                                                            href: "tel:1212333400",
                                                            children: "+1 212 333 400"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), (0, a.jsx)(x, {
                        handleMobileMenu: l
                    }), (0, a.jsx)("div", {
                        className: "stricky-header stricked-menu main-menu main-menu-two ".concat(s ? "stricky-fixed" : ""),
                        children: (0, a.jsx)("div", {
                            className: "sticky-header__content",
                            children: (0, a.jsx)("nav", {
                                className: "main-menu main-menu-two",
                                children: (0, a.jsx)("div", {
                                    className: "main-menu-two__wrapper",
                                    children: (0, a.jsxs)("div", {
                                        className: "main-menu-two__wrapper-inner",
                                        children: [(0, a.jsxs)("div", {
                                            className: "main-menu-two__left",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-two__logo",
                                                children: (0, a.jsx)(t(), {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/logo-2.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-two__main-menu-box",
                                                children: [(0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: l,
                                                    children: (0, a.jsx)("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }), (0, a.jsx)(m, {})]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-two__right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "main-menu-two__search-cart-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-two__search-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "main-menu-two__search search-toggler icon-magnifying-glass",
                                                        onClick: i
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "main-menu-two__cart-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "cart",
                                                        className: "main-menu-two__cart icon-shopping-cart"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-two__button-and-call-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-two__btn-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "contact",
                                                        className: "main-menu-two__btn",
                                                        children: "Get Solution"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-menu-two__call",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "main-menu-two__call-icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-phone"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "main-menu-two__call-content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "main-menu-two__call-sub-title",
                                                            children: "Need help?"
                                                        }), (0, a.jsx)("h5", {
                                                            className: "main-menu-two__call-number",
                                                            children: (0, a.jsx)(t(), {
                                                                href: "tel:1212333400",
                                                                children: "+1 212 333 400"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }

            function _(e) {
                let {
                    scroll: s,
                    handlePopup: i,
                    handleMobileMenu: l
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("header", {
                        className: "main-header-three",
                        children: [(0, a.jsx)("div", {
                            className: "main-header-three__top",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsxs)("div", {
                                    className: "main-header-three__top-inner",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-header-three__top-left",
                                        children: (0, a.jsxs)("ul", {
                                            className: "list-unstyled main-header-three__contact-list",
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "icon-phone"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "text",
                                                    children: (0, a.jsx)("p", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "tel:1232102345",
                                                            children: "+1 (232) 102 345"
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "icon-envelope"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "text",
                                                    children: (0, a.jsx)("p", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "mailto:email@example.com",
                                                            children: "email@example.com"
                                                        })
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "icon-location-1"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "text",
                                                    children: (0, a.jsx)("p", {
                                                        children: "120 F 2th Yt, Melbone NY 1259"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "main-header-three__top-text-and-social",
                                        children: [(0, a.jsx)("div", {
                                            className: "main-header-three__top-text",
                                            children: (0, a.jsxs)("p", {
                                                children: [(0, a.jsx)("span", {
                                                    className: "icon-three-o-clock-clock"
                                                }), " Monday - Friday / 8AM - 11PM"]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "main-header-three__top-social",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }), (0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-facebook"
                                                })
                                            }), (0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            }), (0, a.jsx)(t(), {
                                                href: "#",
                                                children: (0, a.jsx)("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, a.jsx)("nav", {
                            className: "main-menu main-menu-three",
                            children: (0, a.jsx)("div", {
                                className: "main-menu-three__wrapper",
                                children: (0, a.jsx)("div", {
                                    className: "container",
                                    children: (0, a.jsxs)("div", {
                                        className: "main-menu-three__wrapper-inner",
                                        children: [(0, a.jsx)("div", {
                                            className: "main-menu-three__logo",
                                            children: (0, a.jsx)(t(), {
                                                href: "/",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/resources/logo-2.png",
                                                    alt: ""
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-three__main-menu-box",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: l,
                                                children: (0, a.jsx)("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }), (0, a.jsx)(m, {})]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-three__right",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-three__search-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "main-menu-three__search search-toggler icon-magnifying-glass",
                                                    onClick: i
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "main-menu-three__btn-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "contact",
                                                    className: "thm-btn main-menu-three__btn thm-btn",
                                                    children: "Get Consulting"
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsx)(x, {
                        handleMobileMenu: l
                    }), (0, a.jsx)("div", {
                        className: "stricky-header stricked-menu main-menu main-menu-three ".concat(s ? "stricky-fixed" : ""),
                        children: (0, a.jsx)("div", {
                            className: "sticky-header__content",
                            children: (0, a.jsx)("nav", {
                                className: "main-menu main-menu-two",
                                children: (0, a.jsx)("div", {
                                    className: "main-menu-two__wrapper",
                                    children: (0, a.jsxs)("div", {
                                        className: "main-menu-two__wrapper-inner",
                                        children: [(0, a.jsxs)("div", {
                                            className: "main-menu-two__left",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-two__logo",
                                                children: (0, a.jsx)(t(), {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/logo-2.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-two__main-menu-box",
                                                children: [(0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: l,
                                                    children: (0, a.jsx)("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }), (0, a.jsx)(m, {})]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-two__right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "main-menu-two__search-cart-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-two__search-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "main-menu-two__search search-toggler icon-magnifying-glass",
                                                        onClick: i
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "main-menu-two__cart-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "cart",
                                                        className: "main-menu-two__cart icon-shopping-cart"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-two__button-and-call-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-two__btn-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "contact",
                                                        className: "main-menu-two__btn",
                                                        children: "Get Solution"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-menu-two__call",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "main-menu-two__call-icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-phone"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "main-menu-two__call-content",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "main-menu-two__call-sub-title",
                                                            children: "Need help?"
                                                        }), (0, a.jsx)("h5", {
                                                            className: "main-menu-two__call-number",
                                                            children: (0, a.jsx)(t(), {
                                                                href: "tel:1212333400",
                                                                children: "+1 212 333 400"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }

            function u(e) {
                let {
                    scroll: s,
                    handlePopup: i,
                    handleMobileMenu: l
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("header", {
                        className: "main-header-four",
                        children: [(0, a.jsx)("div", {
                            className: "main-header-four__top",
                            children: (0, a.jsxs)("div", {
                                className: "main-header-four__top-inner",
                                children: [(0, a.jsx)("div", {
                                    className: "main-header-four__top-left",
                                    children: (0, a.jsxs)("ul", {
                                        className: "list-unstyled main-header-four__contact-list",
                                        children: [(0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "fas fa-clock"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: "Mon to Fri: 9:00am to 6:00pm"
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "fas fa-envelope"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "mailto:help@company.com",
                                                        children: "help@company.com"
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "fas fa-map-marker"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: "88 Broklyn Golden Street. New York"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "main-header-four__top-right",
                                    children: [(0, a.jsxs)("ul", {
                                        className: "list-unstyled main-header-four__top-menu",
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "about",
                                                children: "About"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "about",
                                                children: "Faqs"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "contact",
                                                children: "Contact"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "main-header-four__social",
                                        children: [(0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-facebook"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-pinterest-p"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("nav", {
                            className: "main-menu main-menu-four",
                            children: (0, a.jsx)("div", {
                                className: "main-menu-four__wrapper",
                                children: (0, a.jsxs)("div", {
                                    className: "main-menu-four__wrapper-inner",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-menu-four__logo",
                                        children: (0, a.jsx)(t(), {
                                            href: "/",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/resources/logo-1.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "main-menu-four__main-menu-box",
                                        children: [(0, a.jsx)(t(), {
                                            href: "#",
                                            className: "mobile-nav__toggler",
                                            onClick: l,
                                            children: (0, a.jsx)("i", {
                                                className: "fa fa-bars"
                                            })
                                        }), (0, a.jsx)(m, {})]
                                    }), (0, a.jsxs)("div", {
                                        className: "main-menu-four__right",
                                        children: [(0, a.jsxs)("div", {
                                            className: "main-menu-four__call",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-four__call-icon",
                                                children: (0, a.jsx)("span", {
                                                    className: "icon-phone-call"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-four__call-content",
                                                children: [(0, a.jsx)("p", {
                                                    className: "main-menu-four__call-sub-title",
                                                    children: "Have Question?"
                                                }), (0, a.jsx)("h5", {
                                                    className: "main-menu-four__call-number",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "tel:9288009850",
                                                        children: "+92 (8800) - 9850"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-four__search-cart-box",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-four__search-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "main-menu-four__search search-toggler icon-magnifying-glass",
                                                    onClick: i
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "main-menu-four__cart-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "main-menu-four__cart icon-shopping-cart"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), (0, a.jsx)(x, {
                        handleMobileMenu: l
                    }), (0, a.jsx)("div", {
                        className: "stricky-header stricked-menu main-menu main-menu-four ".concat(s ? "stricky-fixed" : ""),
                        children: (0, a.jsx)("div", {
                            className: "sticky-header__content",
                            children: (0, a.jsx)("nav", {
                                className: "main-menu main-menu-four",
                                children: (0, a.jsx)("div", {
                                    className: "main-menu-four__wrapper",
                                    children: (0, a.jsxs)("div", {
                                        className: "main-menu-four__wrapper-inner",
                                        children: [(0, a.jsx)("div", {
                                            className: "main-menu-four__logo",
                                            children: (0, a.jsx)(t(), {
                                                href: "/",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/resources/logo-1.png",
                                                    alt: ""
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-four__main-menu-box",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: l,
                                                children: (0, a.jsx)("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }), (0, a.jsx)(m, {})]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-four__right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "main-menu-four__call",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-four__call-icon",
                                                    children: (0, a.jsx)("span", {
                                                        className: "icon-phone-call"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-menu-four__call-content",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "main-menu-four__call-sub-title",
                                                        children: "Have Question?"
                                                    }), (0, a.jsx)("h5", {
                                                        className: "main-menu-four__call-number",
                                                        children: (0, a.jsx)(t(), {
                                                            href: "tel:9288009850",
                                                            children: "+92 (8800) - 9850"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-four__search-cart-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-four__search-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "main-menu-four__search search-toggler icon-magnifying-glass",
                                                        onClick: i
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "main-menu-four__cart-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "main-menu-four__cart icon-shopping-cart"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }

            function N(e) {
                let {
                    scroll: s,
                    handlePopup: i,
                    handleMobileMenu: l
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("header", {
                        className: "main-header-four",
                        children: [(0, a.jsx)("div", {
                            className: "main-header-four__top",
                            children: (0, a.jsxs)("div", {
                                className: "main-header-four__top-inner",
                                children: [(0, a.jsx)("div", {
                                    className: "main-header-four__top-left",
                                    children: (0, a.jsxs)("ul", {
                                        className: "list-unstyled main-header-four__contact-list",
                                        children: [(0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "fas fa-clock"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: "Mon to Fri: 9:00am to 6:00pm"
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "fas fa-envelope"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "mailto:help@company.com",
                                                        children: "help@company.com"
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("i", {
                                                    className: "fas fa-map-marker"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "text",
                                                children: (0, a.jsx)("p", {
                                                    children: "88 Broklyn Golden Street. New York"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "main-header-four__top-right",
                                    children: [(0, a.jsxs)("ul", {
                                        className: "list-unstyled main-header-four__top-menu",
                                        children: [(0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "about",
                                                children: "About"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "about",
                                                children: "Faqs"
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "contact",
                                                children: "Contact"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "main-header-four__social",
                                        children: [(0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-facebook"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-pinterest-p"
                                            })
                                        }), (0, a.jsx)(t(), {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("nav", {
                            className: "main-menu main-menu-four",
                            children: (0, a.jsx)("div", {
                                className: "main-menu-four__wrapper",
                                children: (0, a.jsxs)("div", {
                                    className: "main-menu-four__wrapper-inner",
                                    children: [(0, a.jsx)("div", {
                                        className: "main-menu-four__logo",
                                        children: (0, a.jsx)(t(), {
                                            href: "/",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/resources/logo-1.png",
                                                alt: ""
                                            })
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "main-menu-four__main-menu-box",
                                        children: [(0, a.jsx)(t(), {
                                            href: "#",
                                            className: "mobile-nav__toggler",
                                            onClick: l,
                                            children: (0, a.jsx)("i", {
                                                className: "fa fa-bars"
                                            })
                                        }), (0, a.jsx)(m, {})]
                                    }), (0, a.jsxs)("div", {
                                        className: "main-menu-four__right",
                                        children: [(0, a.jsxs)("div", {
                                            className: "main-menu-four__call",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-four__call-icon",
                                                children: (0, a.jsx)("span", {
                                                    className: "icon-phone-call"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-four__call-content",
                                                children: [(0, a.jsx)("p", {
                                                    className: "main-menu-four__call-sub-title",
                                                    children: "Have Question?"
                                                }), (0, a.jsx)("h5", {
                                                    className: "main-menu-four__call-number",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "tel:9288009850",
                                                        children: "+92 (8800) - 9850"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-four__search-cart-box",
                                            children: [(0, a.jsx)("div", {
                                                className: "main-menu-four__search-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "main-menu-four__search search-toggler icon-magnifying-glass",
                                                    onClick: i
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "main-menu-four__cart-box",
                                                children: (0, a.jsx)(t(), {
                                                    href: "#",
                                                    className: "main-menu-four__cart icon-shopping-cart"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), (0, a.jsx)(x, {
                        handleMobileMenu: l
                    }), (0, a.jsx)("div", {
                        className: "stricky-header stricked-menu main-menu main-menu-five ".concat(s ? "stricky-fixed" : ""),
                        children: (0, a.jsx)("div", {
                            className: "sticky-header__content",
                            children: (0, a.jsx)("nav", {
                                className: "main-menu main-menu-four",
                                children: (0, a.jsx)("div", {
                                    className: "main-menu-four__wrapper",
                                    children: (0, a.jsxs)("div", {
                                        className: "main-menu-four__wrapper-inner",
                                        children: [(0, a.jsx)("div", {
                                            className: "main-menu-four__logo",
                                            children: (0, a.jsx)(t(), {
                                                href: "/",
                                                children: (0, a.jsx)("img", {
                                                    src: "assets/images/resources/logo-1.png",
                                                    alt: ""
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-four__main-menu-box",
                                            children: [(0, a.jsx)(t(), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: l,
                                                children: (0, a.jsx)("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }), (0, a.jsx)(m, {})]
                                        }), (0, a.jsxs)("div", {
                                            className: "main-menu-four__right",
                                            children: [(0, a.jsxs)("div", {
                                                className: "main-menu-four__call",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-four__call-icon",
                                                    children: (0, a.jsx)("span", {
                                                        className: "icon-phone-call"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "main-menu-four__call-content",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "main-menu-four__call-sub-title",
                                                        children: "Have Question?"
                                                    }), (0, a.jsx)("h5", {
                                                        className: "main-menu-four__call-number",
                                                        children: (0, a.jsx)(t(), {
                                                            href: "tel:9288009850",
                                                            children: "+92 (8800) - 9850"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "main-menu-four__search-cart-box",
                                                children: [(0, a.jsx)("div", {
                                                    className: "main-menu-four__search-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "main-menu-four__search search-toggler icon-magnifying-glass",
                                                        onClick: i
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "main-menu-four__cart-box",
                                                    children: (0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "main-menu-four__cart icon-shopping-cart"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }

            function g() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("footer", {
                        className: "site-footer",
                        children: [(0, a.jsx)("div", {
                            className: "site-footer__shape-1 img-bounce",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer__shape-2 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "site-footer__top",
                                children: (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__about",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget__logo",
                                                children: (0, a.jsx)("a", {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/footer-logo.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("p", {
                                                className: "footer-widget__about-text",
                                                children: ["Lorem Ipsum is simply dummy text of ", (0, a.jsx)("br", {}), " printing and typesetting industry."]
                                            }), (0, a.jsxs)("div", {
                                                className: "site-footer__social",
                                                children: [(0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-facebook"
                                                    })
                                                }), (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }), (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                }), (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-linkedin"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__company",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget__title",
                                                    children: "Company"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget__company-list list-unstyled",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "business-planning",
                                                        children: "Business planning"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "tax-strategy",
                                                        children: "Tax strategy"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "financial-advices",
                                                        children: "Financial advices"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "insurance-strategy",
                                                        children: "Insurance strategy"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__contact",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget__title",
                                                    children: "You’ve Questions"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget__contact-list list-unstyled",
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-location-1"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Location"
                                                        }), (0, a.jsx)("p", {
                                                            children: "915 Hill Street, USA"
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-phone"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Get a quote"
                                                        }), (0, a.jsx)("p", {
                                                            children: (0, a.jsx)("a", {
                                                                href: "tel:+13330000000",
                                                                children: "+1(333) 000-0000"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-envelope"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Send a mail"
                                                        }), (0, a.jsx)("p", {
                                                            children: (0, a.jsx)("a", {
                                                                href: "mailto:example@email.com",
                                                                children: "example@email.com"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__newsletter",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget__title",
                                                    children: "Newsletter"
                                                })
                                            }), (0, a.jsxs)("p", {
                                                className: "footer-widget__newsletter-text",
                                                children: ["Sign up for our latest news & articles. ", (0, a.jsx)("br", {}), "We won’t give you spam mails."]
                                            }), (0, a.jsx)("form", {
                                                className: "footer-widget__newsletter-form mc-form",
                                                "data-url": "MC_FORM_URL",
                                                children: (0, a.jsxs)("div", {
                                                    className: "footer-widget__newsletter-form-input-box",
                                                    children: [(0, a.jsx)("input", {
                                                        type: "email",
                                                        placeholder: "Enter email address",
                                                        name: "EMAIL"
                                                    }), (0, a.jsx)("button", {
                                                        type: "submit",
                                                        className: "footer-widget__newsletter-btn",
                                                        children: (0, a.jsx)("span", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "mc-form__response"
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer__bottom",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                    className: "site-footer__bottom-inner",
                                    children: (0, a.jsx)("p", {
                                        className: "site-footer__bottom-text",
                                        children: "\xa9 Copyright bixola 2024. All rights reserved."
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function p() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("footer", {
                        className: "site-footer-two",
                        children: [(0, a.jsx)("div", {
                            className: "site-footer-two__shape-1 img-bounce",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-two-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer-two__shape-2 zoominout",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "site-footer-two__top",
                                children: (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__about",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__logo",
                                                children: (0, a.jsx)("a", {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/footer-logo-2.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("p", {
                                                className: "footer-widget-two__about-text",
                                                children: ["We work with a passion of taking", (0, a.jsx)("br", {}), " challenges and creating new ones in", (0, a.jsx)("br", {}), " advertising sector."]
                                            }), (0, a.jsxs)("div", {
                                                className: "site-footer-two__social",
                                                children: [(0, a.jsx)(t(), {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-facebook"
                                                    })
                                                }), (0, a.jsx)(t(), {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }), (0, a.jsx)(t(), {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                }), (0, a.jsx)(t(), {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-linkedin"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__company",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-two__title",
                                                    children: "Company"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-two__company-list list-unstyled",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "business-planning",
                                                        children: "Business planning"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "tax-strategy",
                                                        children: "Tax strategy"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "financial-advices",
                                                        children: "Financial advices"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "insurance-strategy",
                                                        children: "Insurance strategy"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__contact",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-two__title",
                                                    children: "Contact info"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-two__contact-list list-unstyled",
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-location-1"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "915 Hill Street, USA"
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-phone"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "tel:13330000000",
                                                            children: "+1(333) 000-0000"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-envelope"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "mailto:example@email.com",
                                                            children: "example@email.com"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "footer-widget-two__work-time",
                                                children: [(0, a.jsx)("div", {
                                                    className: "footer-widget-two__title-box",
                                                    children: (0, a.jsx)("h3", {
                                                        className: "footer-widget-two__title",
                                                        children: "Working Time"
                                                    })
                                                }), (0, a.jsxs)("p", {
                                                    className: "footer-widget-two__work-time-text",
                                                    children: ["Mon - Sat: 9:00 AM - 5:00 PM", (0, a.jsx)("br", {}), " Sunday Close"]
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__portfolio",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-two__title",
                                                    children: "Instagram"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-two__portfolio-list list-unstyled clearfix",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-1.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)(t(), {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-2.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)(t(), {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-3.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)(t(), {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-4.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)(t(), {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-5.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)(t(), {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-6.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)(t(), {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer-two__bottom",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                    className: "site-footer-two__bottom-inner",
                                    children: (0, a.jsx)("p", {
                                        className: "site-footer__bottom-text",
                                        children: "\xa9 Copyright bixola 2024. All rights reserved."
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function w() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("footer", {
                        className: "site-footer-three",
                        children: [(0, a.jsx)("div", {
                            className: "site-footer-three__shape-1 float-bob-y",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-three-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer-three__shape-2 img-bounce",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-three-shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer-three__shape-3 zoominout",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-three-shape-3.png",
                                alt: ""
                            })
                        }), (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "site-footer-three__top",
                                children: (0, a.jsxs)("ul", {
                                    className: "site-footer-three__contact-list list-unstyled",
                                    children: [(0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: "site-footer-three__contact-list-single",
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("span", {
                                                    className: "icon-location-1"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Office Location"
                                                }), (0, a.jsxs)("p", {
                                                    children: ["91195 Brock Walks, Pittsburg,", (0, a.jsx)("br", {}), " Ohio 75843, USA"]
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: "site-footer-three__contact-list-single",
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("span", {
                                                    className: "icon-phone"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Get a quote"
                                                }), (0, a.jsx)("p", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "tel:13330000000",
                                                        children: "+1(333) 000-0000"
                                                    })
                                                }), (0, a.jsx)("p", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "tel:13330000000",
                                                        children: "+1(333) 000-0000"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("div", {
                                            className: "site-footer-three__contact-list-single",
                                            children: [(0, a.jsx)("div", {
                                                className: "icon",
                                                children: (0, a.jsx)("span", {
                                                    className: "icon-time"
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Working Time"
                                                }), (0, a.jsxs)("p", {
                                                    children: ["Mon - Sat: 9:00 AM - 5:00 PM", (0, a.jsx)("br", {}), " Sunday Close"]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "site-footer-three__middle",
                                children: (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__about",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__logo",
                                                children: (0, a.jsx)("a", {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/footer-logo-2.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("p", {
                                                className: "footer-widget-three__about-text",
                                                children: ["Lorem Ipsum is simply dummy text of", (0, a.jsx)("br", {}), "printing and typesetting industry."]
                                            }), (0, a.jsx)("div", {
                                                className: "footer-widget-three__email",
                                                children: (0, a.jsxs)("a", {
                                                    href: "mailto:info@example.com",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "icon-gmail"
                                                    }), "info@example.com"]
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__company",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-three__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-three__title",
                                                    children: "Company"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-three__company-list list-unstyled",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "about",
                                                        children: "About"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "team",
                                                        children: "Meet our team"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "portfolio",
                                                        children: "Case stories"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "news-1",
                                                        children: "Latest News"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "contact",
                                                        children: "Contact"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__post",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-three__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-three__title",
                                                    children: "Latest Post"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-three__post-list list-unstyled",
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "footer-widget-three__post-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/resources/post-img-1.jpg",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "footer-widget-three__post-content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: (0, a.jsxs)("a", {
                                                                href: "news-details",
                                                                children: ["We would love to share a ", (0, a.jsx)("br", {}), "similar experience"]
                                                            })
                                                        }), (0, a.jsxs)("p", {
                                                            children: [(0, a.jsx)("span", {
                                                                className: "icon-time"
                                                            }), "10 Oct, 2022"]
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "footer-widget-three__post-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/resources/post-img-2.jpg",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "footer-widget-three__post-content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: (0, a.jsxs)("a", {
                                                                href: "news-details",
                                                                children: ["Get the latest news, tips", (0, a.jsx)("br", {}), " and latest messages"]
                                                            })
                                                        }), (0, a.jsxs)("p", {
                                                            children: [(0, a.jsx)("span", {
                                                                className: "icon-time"
                                                            }), "10 Oct, 2022"]
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__subscribe",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-three__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-three__title",
                                                    children: "Subscribe Now"
                                                })
                                            }), (0, a.jsx)("p", {
                                                className: "footer-widget-three__subscribe-text",
                                                children: "Get the latest news, tips and latest messages, including special offers"
                                            }), (0, a.jsx)("form", {
                                                className: "footer-widget-three__subscribe-form mc-form",
                                                "data-url": "MC_FORM_URL",
                                                children: (0, a.jsxs)("div", {
                                                    className: "footer-widget-three__subscribe-form-input-box",
                                                    children: [(0, a.jsx)("input", {
                                                        type: "email",
                                                        placeholder: "Enter email address",
                                                        name: "EMAIL"
                                                    }), (0, a.jsx)("button", {
                                                        type: "submit",
                                                        className: "footer-widget-three__subscribe-btn",
                                                        children: (0, a.jsx)("span", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "mc-form__response"
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "site-footer-three__bottom",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsxs)("div", {
                                    className: "site-footer-three__bottom-inner",
                                    children: [(0, a.jsx)("p", {
                                        className: "site-footer-three__bottom-text",
                                        children: "\xa9 Copyright 2023 HR Design website. All rights reserved."
                                    }), (0, a.jsxs)("div", {
                                        className: "site-footer-three__bottom-social",
                                        children: [(0, a.jsx)("a", {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-facebook"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "#",
                                            children: (0, a.jsx)("i", {
                                                className: "fab fa-linkedin"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                })
            }

            function b() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("footer", {
                        className: "site-footer-two site-footer-four",
                        children: [(0, a.jsx)("div", {
                            className: "site-footer-two__shape-1 img-bounce",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-two-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer-two__shape-2 zoominout",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-two-shape-2.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "site-footer-two__top",
                                children: (0, a.jsxs)("div", {
                                    className: "row",
                                    children: [(0, a.jsx)("div", {
                                        className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__about",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__logo",
                                                children: (0, a.jsx)("a", {
                                                    href: "/",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/resources/footer-logo-2.png",
                                                        alt: ""
                                                    })
                                                })
                                            }), (0, a.jsxs)("p", {
                                                className: "footer-widget-two__about-text",
                                                children: ["We work with a passion of taking", (0, a.jsx)("br", {}), " challenges and creating new ones in", (0, a.jsx)("br", {}), " advertising sector."]
                                            }), (0, a.jsxs)("div", {
                                                className: "site-footer-two__social",
                                                children: [(0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-facebook"
                                                    })
                                                }), (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }), (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                }), (0, a.jsx)("a", {
                                                    href: "#",
                                                    children: (0, a.jsx)("i", {
                                                        className: "fab fa-linkedin"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__company",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-two__title",
                                                    children: "Company"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-two__company-list list-unstyled",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "business-planning",
                                                        children: "Business planning"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "tax-strategy",
                                                        children: "Tax strategy"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "financial-advices",
                                                        children: "Financial advices"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "insurance-strategy",
                                                        children: "Insurance strategy"
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__contact",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-two__title",
                                                    children: "Contact info"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-two__contact-list list-unstyled",
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-location-1"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "915 Hill Street, USA"
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-phone"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "tel:+13330000000",
                                                            children: "+1(333) 000-0000"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("div", {
                                                        className: "icon",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-envelope"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "mailto:example@email.com",
                                                            children: "example@email.com"
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "footer-widget-two__work-time",
                                                children: [(0, a.jsx)("div", {
                                                    className: "footer-widget-two__title-box",
                                                    children: (0, a.jsx)("h3", {
                                                        className: "footer-widget-two__title",
                                                        children: "Working Time"
                                                    })
                                                }), (0, a.jsxs)("p", {
                                                    className: "footer-widget-two__work-time-text",
                                                    children: ["Mon - Sat: 9:00 AM - 5:00 PM", (0, a.jsx)("br", {}), " Sunday Close"]
                                                })]
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: (0, a.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__portfolio",
                                            children: [(0, a.jsx)("div", {
                                                className: "footer-widget-two__title-box",
                                                children: (0, a.jsx)("h3", {
                                                    className: "footer-widget-two__title",
                                                    children: "Instagram"
                                                })
                                            }), (0, a.jsxs)("ul", {
                                                className: "footer-widget-two__portfolio-list list-unstyled clearfix",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-1.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-2.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-3.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-4.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-5.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget-two__portfolio-img",
                                                        children: [(0, a.jsx)("img", {
                                                            src: "assets/images/project/footer-widget-two-portfolio-img-6.jpg",
                                                            alt: ""
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: (0, a.jsx)("span", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer-two__bottom",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                    className: "site-footer-two__bottom-inner",
                                    children: (0, a.jsx)("p", {
                                        className: "site-footer__bottom-text",
                                        children: "\xa9 Copyright bixola 2024. All rights reserved."
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function v() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("footer", {
                        className: "site-footer site-footer-five",
                        children: [(0, a.jsx)("div", {
                            className: "site-footer__shape-1 float-bob-x",
                            children: (0, a.jsx)("img", {
                                src: "assets/images/shapes/site-footer-five-shape-1.png",
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer__top",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                    className: "site-footer__top-inner",
                                    children: (0, a.jsxs)("div", {
                                        className: "row",
                                        children: [(0, a.jsx)("div", {
                                            className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "100ms",
                                            children: (0, a.jsxs)("div", {
                                                className: "footer-widget__column footer-widget__about",
                                                children: [(0, a.jsx)("div", {
                                                    className: "footer-widget__logo",
                                                    children: (0, a.jsx)("a", {
                                                        href: "/",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/resources/footer-logo-5.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }), (0, a.jsx)("p", {
                                                    className: "footer-widget__about-text",
                                                    children: "Address 301 Princes Street, Ei className Mahall Damietta Egypt-104"
                                                }), (0, a.jsx)("div", {
                                                    className: "footer-widget__emergency-call",
                                                    children: (0, a.jsx)("a", {
                                                        href: "tel:+134353353545",
                                                        children: "+1 343 5335 3545"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "footer-widget__social",
                                                    children: [(0, a.jsx)("a", {
                                                        href: "#",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-facebook"
                                                        })
                                                    }), (0, a.jsx)("a", {
                                                        href: "#",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-instagram-1"
                                                        })
                                                    }), (0, a.jsx)("a", {
                                                        href: "#",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-tik-tok"
                                                        })
                                                    }), (0, a.jsx)("a", {
                                                        href: "#",
                                                        children: (0, a.jsx)("span", {
                                                            className: "icon-youtube"
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "200ms",
                                            children: (0, a.jsxs)("div", {
                                                className: "footer-widget__column footer-widget__navigation",
                                                children: [(0, a.jsx)("div", {
                                                    className: "footer-widget__title-box",
                                                    children: (0, a.jsx)("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Navigation"
                                                    })
                                                }), (0, a.jsxs)("ul", {
                                                    className: "footer-widget__navigation-list list-unstyled",
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "/",
                                                            children: "Home"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "about",
                                                            children: "About Us"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "insurance",
                                                            children: "Services"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "contact",
                                                            children: "Contact Us"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "blog",
                                                            children: "Our Blog"
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "col-xl-2 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "300ms",
                                            children: (0, a.jsxs)("div", {
                                                className: "footer-widget__column footer-widget__quick-link",
                                                children: [(0, a.jsx)("div", {
                                                    className: "footer-widget__title-box",
                                                    children: (0, a.jsx)("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Quick Link"
                                                    })
                                                }), (0, a.jsxs)("ul", {
                                                    className: "footer-widget__navigation-list list-unstyled",
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "about",
                                                            children: "Help"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "contact",
                                                            children: "Support"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "testimonial",
                                                            children: "Clients"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "products",
                                                            children: "Shop"
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "portfolio",
                                                            children: "Portfolio"
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "col-xl-4 col-lg-6 col-md-6 wow fadeInUp",
                                            "data-wow-delay": "300ms",
                                            children: (0, a.jsxs)("div", {
                                                className: "footer-widget__column footer-widget__newsletter",
                                                children: [(0, a.jsx)("div", {
                                                    className: "footer-widget__title-box",
                                                    children: (0, a.jsx)("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Newsletter"
                                                    })
                                                }), (0, a.jsxs)("p", {
                                                    className: "footer-widget__newsletter-text",
                                                    children: ["Subscribe our newsletter to get the", (0, a.jsx)("br", {}), " latest news & updates"]
                                                }), (0, a.jsx)("form", {
                                                    className: "footer-widget__newsletter-form",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "footer-widget__newsletter-input-box",
                                                        children: [(0, a.jsx)("input", {
                                                            type: "email",
                                                            placeholder: "email@example.com",
                                                            name: "email"
                                                        }), (0, a.jsx)("button", {
                                                            type: "submit",
                                                            className: "footer-widget__newsletter-btn",
                                                            children: (0, a.jsx)("i", {
                                                                className: "icon-send"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "site-footer__bottom",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                    className: "site-footer__bottom-inner",
                                    children: (0, a.jsxs)("p", {
                                        className: "site-footer__bottom-text",
                                        children: ["Copyright \xa9 2024 Sonchoy by ", (0, a.jsx)("a", {
                                            href: "#",
                                            children: "thememx."
                                        }), " All Rights Reserved"]
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function y(e) {
                let {
                    headerStyle: s,
                    footerStyle: c,
                    headTitle: t,
                    breadcrumbTitle: m,
                    children: x,
                    wrapperCls: y
                } = e, [k, S] = (0, l.useState)(0), [M, C] = (0, l.useState)(!1), F = () => {
                    C(!M), M ? document.body.classList.remove("mobile-menu-visible") : document.body.classList.add("mobile-menu-visible")
                }, [I, A] = (0, l.useState)(!1), P = () => A(!I), [U, L] = (0, l.useState)(!1), T = () => L(!U);
                return (0, l.useEffect)(() => {
                    let e = i(887);
                    window.wow = new e.WOW({
                        live: !1
                    }), window.wow.init(), document.addEventListener("scroll", () => {
                        let e = window.scrollY > 100;
                        e !== k && S(e)
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r, {}), (0, a.jsxs)("div", {
                        className: "page-wrapper ".concat(y || ""),
                        id: "#top",
                        children: [!s && (0, a.jsx)(j, {
                            scroll: k,
                            isMobileMenu: M,
                            handleMobileMenu: F,
                            handlePopup: P,
                            isSidebar: U,
                            handleSidebar: T
                        }), 1 == s ? (0, a.jsx)(j, {
                            scroll: k,
                            isMobileMenu: M,
                            handleMobileMenu: F,
                            handlePopup: P,
                            isSidebar: U,
                            handleSidebar: T
                        }) : null, 2 == s ? (0, a.jsx)(f, {
                            scroll: k,
                            isMobileMenu: M,
                            handleMobileMenu: F,
                            handlePopup: P,
                            isSidebar: U,
                            handleSidebar: T
                        }) : null, 3 == s ? (0, a.jsx)(_, {
                            scroll: k,
                            isMobileMenu: M,
                            handleMobileMenu: F,
                            handlePopup: P,
                            isSidebar: U,
                            handleSidebar: T
                        }) : null, 4 == s ? (0, a.jsx)(u, {
                            scroll: k,
                            isMobileMenu: M,
                            handleMobileMenu: F,
                            handlePopup: P,
                            isSidebar: U,
                            handleSidebar: T
                        }) : null, 5 == s ? (0, a.jsx)(N, {
                            scroll: k,
                            isMobileMenu: M,
                            handleMobileMenu: F,
                            handlePopup: P,
                            isSidebar: U,
                            handleSidebar: T
                        }) : null, (0, a.jsx)(h, {
                            isSidebar: U,
                            handleSidebar: T
                        }), (0, a.jsx)(d, {
                            isPopup: I,
                            handlePopup: P
                        }), m && (0, a.jsx)(o, {
                            breadcrumbTitle: m
                        }), x, !c && (0, a.jsx)(g, {}), 1 == c ? (0, a.jsx)(g, {}) : null, 2 == c ? (0, a.jsx)(p, {}) : null, 3 == c ? (0, a.jsx)(w, {}) : null, 4 == c ? (0, a.jsx)(b, {}) : null, 5 == c ? (0, a.jsx)(v, {}) : null]
                    }), (0, a.jsx)(n, {
                        scroll: k
                    })]
                })
            }
        }
    }
]);