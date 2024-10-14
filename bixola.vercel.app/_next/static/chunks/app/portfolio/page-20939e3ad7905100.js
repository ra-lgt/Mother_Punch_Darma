(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5444], {
        2619: function(e, s, l) {
            Promise.resolve().then(l.t.bind(l, 6685, 23)), Promise.resolve().then(l.bind(l, 5518)), Promise.resolve().then(l.t.bind(l, 3699, 23)), Promise.resolve().then(l.bind(l, 8845))
        },
        8845: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return a
                }
            });
            var i = l(7437),
                t = l(5747),
                r = l.n(t);
            l(1396);
            var o = l(2265);

            function a() {
                let e = (0, o.useRef)(),
                    [s, l] = (0, o.useState)("*");
                (0, o.useEffect)(() => {
                    setTimeout(() => {
                        e.current = new(r())(".items-container", {
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
                }, []), (0, o.useEffect)(() => {
                    e.current && ("*" === s ? e.current.arrange({
                        filter: "*"
                    }) : e.current.arrange({
                        filter: ".".concat(s)
                    }))
                }, [s]);
                let t = (0, o.useCallback)(e => () => {
                        l(e)
                    }, []),
                    a = e => e === s ? "filter active" : "filter";
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "portfolio-three__filter-box",
                        children: (0, i.jsxs)("ul", {
                            className: "portfolio-three__filter style1 post-filter list-unstyled clearfix",
                            children: [(0, i.jsx)("li", {
                                className: a("*"),
                                onClick: t("*"),
                                children: (0, i.jsx)("span", {
                                    className: "filter-text",
                                    children: "All"
                                })
                            }), (0, i.jsx)("li", {
                                className: a("cat-1"),
                                onClick: t("cat-1"),
                                children: (0, i.jsx)("span", {
                                    className: "filter-text",
                                    children: "Business Strategy"
                                })
                            }), (0, i.jsx)("li", {
                                className: a("cat-2"),
                                onClick: t("cat-2"),
                                children: (0, i.jsx)("span", {
                                    className: "filter-text",
                                    children: "Financial"
                                })
                            }), (0, i.jsx)("li", {
                                className: a("cat-3"),
                                onClick: t("cat-3"),
                                children: (0, i.jsx)("span", {
                                    className: "filter-text",
                                    children: "Planning"
                                })
                            }), (0, i.jsx)("li", {
                                className: a("cat-4"),
                                onClick: t("cat-4"),
                                children: (0, i.jsx)("span", {
                                    className: "filter-text",
                                    children: "Tax Strategy"
                                })
                            }), (0, i.jsx)("li", {
                                className: a("cat-5"),
                                onClick: t("cat-5"),
                                children: (0, i.jsx)("span", {
                                    className: "filter-text",
                                    children: "Investment"
                                })
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "items-container row clearfix",
                        children: [(0, i.jsx)("div", {
                            className: "case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12",
                            children: (0, i.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, i.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, i.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-1.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, i.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, i.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, i.jsx)("a", {
                                            href: "portfolio-details",
                                            children: "Our Business Growth"
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12",
                            children: (0, i.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, i.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, i.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-3.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, i.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, i.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, i.jsx)("a", {
                                            href: "portfolio-details",
                                            children: "Our Business Audit"
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12",
                            children: (0, i.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, i.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, i.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-5.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, i.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, i.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, i.jsx)("a", {
                                            href: "portfolio-details",
                                            children: "Our Financial Advices"
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "case-block-one masonry-item all cat-5 cat-2 col-lg-4 col-md-6 col-sm-12",
                            children: (0, i.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, i.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, i.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-6.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, i.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, i.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, i.jsx)("a", {
                                            href: "portfolio-details",
                                            children: "Our Tax Strategy"
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "case-block-one masonry-item all cat-3 cat-5 col-lg-4 col-md-6 col-sm-12",
                            children: (0, i.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, i.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, i.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-6.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, i.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, i.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, i.jsx)("a", {
                                            href: "portfolio-details",
                                            children: "Our Tax Strategy"
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "case-block-one masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12",
                            children: (0, i.jsxs)("div", {
                                className: "portfolio-three__single",
                                children: [(0, i.jsx)("div", {
                                    className: "portfolio-three__img-box",
                                    children: (0, i.jsx)("div", {
                                        className: "portfolio-three__img",
                                        children: (0, i.jsx)("img", {
                                            src: "assets/images/project/portfolio-3-3.jpg",
                                            alt: ""
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "portfolio-three__content",
                                    children: [(0, i.jsx)("p", {
                                        className: "portfolio-three__sub-title",
                                        children: "Business Audit"
                                    }), (0, i.jsx)("h3", {
                                        className: "portfolio-three__title",
                                        children: (0, i.jsx)("a", {
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
        }
    },
    function(e) {
        e.O(0, [5285, 6246, 5518, 2971, 596, 1744], function() {
            return e(e.s = 2619)
        }), _N_E = e.O()
    }
]);