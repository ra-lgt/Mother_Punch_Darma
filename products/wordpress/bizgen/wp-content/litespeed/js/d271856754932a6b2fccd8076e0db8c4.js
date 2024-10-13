/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.9.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function() {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t, i) {
        e.addEventListener(t, i)
    }

    function i(e) {
        p = window.innerWidth || document.documentElement.clientWidth, d = window.innerHeight || document.documentElement.clientHeight, "object" !== ("undefined" == typeof e ? "undefined" : a(e)) || "load" !== e.type && "DOMContentLoaded" !== e.type || (f = !0)
    }

    function n() {
        if (g.length) {
            u = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var e = f || !y || y.width !== p || y.height !== d,
                t = e || !y || y.y !== u;
            f = !1, (e || t) && (g.forEach(function(i) {
                e && i.onResize(), t && i.onScroll()
            }), y = {
                width: p,
                height: d,
                y: u
            }), m(n)
        }
    }
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++)
                if (t && void 0 !== t.style[e[i]]) return e[i];
            return !1
        }(),
        l = navigator.userAgent,
        s = l.toLowerCase().indexOf("android") > -1,
        c = /iPad|iPhone|iPod/.test(l) && !window.MSStream,
        m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        },
        p = void 0,
        d = void 0,
        u = void 0,
        f = !1;
    i(), t(window, "resize", i), t(window, "orientationchange", i), t(window, "load", i), t(window, "DOMContentLoaded", i);
    var g = [],
        y = !1,
        h = 0,
        v = function() {
            function t(i, n) {
                e(this, t);
                var o = this;
                o.instanceID = h++, o.$item = i, o.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    noAndroid: !1,
                    noIos: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var r = o.$item.getAttribute("data-jarallax"),
                    l = JSON.parse(r || "{}");
                r && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var m = o.$item.dataset || {},
                    p = {};
                Object.keys(m).forEach(function(e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && "undefined" != typeof o.defaults[t] && (p[t] = m[e])
                }), o.options = o.extend({}, o.defaults, l, p, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function(e) {
                    "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
                var d = o.options.elementInViewport;
                d && "object" === ("undefined" == typeof d ? "undefined" : a(d)) && "undefined" != typeof d.length && (d = d[0]), d instanceof Element || (d = null), o.options.elementInViewport = d, o.image = {
                    src: o.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: s || c ? "absolute" : "fixed"
                }, o.initImg() && o.canInitParallax() && o.init()
            }
            return o(t, [{
                key: "css",
                value: function(e, t) {
                    return "string" == typeof t ? window.getComputedStyle(e).getPropertyValue(t) : (t.transform && r && (t[r] = t.transform), Object.keys(t).forEach(function(i) {
                        e.style[i] = t[i]
                    }), e)
                }
            }, {
                key: "extend",
                value: function(e) {
                    var t = arguments;
                    return e = e || {}, Object.keys(arguments).forEach(function(i) {
                        t[i] && Object.keys(t[i]).forEach(function(n) {
                            e[n] = t[i][n]
                        })
                    }), e
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: p,
                        height: d,
                        y: u
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return r && !(s && this.options.noAndroid) && !(c && this.options.noIos)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        i = {};
                    if (!e.options.keepImg) {
                        var n = e.$item.getAttribute("style");
                        if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) {
                            var o = e.image.$item.getAttribute("style");
                            o && e.image.$item.setAttribute("data-jarallax-original-styles", o)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? i = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                            "max-width": "none"
                        }, t, i) : (e.image.$item = document.createElement("div"), i = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": 'url("' + e.image.src + '")'
                        }, t, i)), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
                        for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
                            var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
                            l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode
                        }
                    i.position = e.image.position, e.css(e.image.$item, i), e.image.$container.appendChild(e.image.$item), e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), e.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    g.push(this), 1 === g.length && n()
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var e = this;
                    g.forEach(function(t, i) {
                        t.instanceID === e.instanceID && g.splice(i, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        var i = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    if ("fixed" === this.image.position) {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            i = t.width,
                            n = t.height;
                        if (!e.$clipStyles) {
                            e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID);
                            var o = document.head || document.getElementsByTagName("head")[0];
                            o.appendChild(e.$clipStyles)
                        }
                        var a = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + i + "px " + n + "px 0);\n           clip: rect(0, " + i + "px, " + n + "px, 0);\n        }";
                        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
                    }
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        i = t.height,
                        n = e.options.speed,
                        o = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = i,
                        l = 0;
                    return o && (a = n < 0 ? n * Math.max(i, d) : n * (i + d), n > 1 ? r = Math.abs(a - d) : n < 0 ? r = a / n + Math.abs(a) : r += Math.abs(d - i) * (1 - n), a /= 2), e.parallaxScrollDistance = a, l = o ? (d - r) / 2 : (i - r) / 2, e.css(e.image.$item, {
                        height: r + "px",
                        marginTop: l + "px",
                        left: "fixed" === e.image.position ? t.left + "px" : "0",
                        width: t.width + "px"
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t = this,
                        i = t.$item.getBoundingClientRect(),
                        n = i.top,
                        o = i.height,
                        a = {},
                        r = i;
                    if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = r.bottom >= 0 && r.right >= 0 && r.top <= d && r.left <= p, e || t.isElementInViewport) {
                        var l = Math.max(0, n),
                            s = Math.max(0, o + n),
                            c = Math.max(0, -n),
                            m = Math.max(0, n + o - d),
                            u = Math.max(0, o - (n + o - d)),
                            f = Math.max(0, -n + d - o),
                            g = 1 - 2 * (d - n) / (d + o),
                            y = 1;
                        if (o < d ? y = 1 - (c || m) / o : s <= d ? y = s / d : u <= d && (y = u / d), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = y), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                            var h = 1;
                            t.options.speed < 0 ? h -= t.options.speed * y : h += t.options.speed * (1 - y), a.transform = "scale(" + h + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                            var v = t.parallaxScrollDistance * g;
                            "absolute" === t.image.position && (v -= n), a.transform = "translate3d(0," + v + "px,0)"
                        }
                        t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
                            section: i,
                            beforeTop: l,
                            beforeTopEnd: s,
                            afterTop: c,
                            beforeBottom: m,
                            beforeBottomEnd: u,
                            afterBottom: f,
                            visiblePercent: y,
                            fromViewportCenter: g
                        })
                    }
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]), t
        }(),
        b = function(e) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : a(HTMLElement)) ? e instanceof HTMLElement : e && "object" === ("undefined" == typeof e ? "undefined" : a(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            var t = arguments[1],
                i = Array.prototype.slice.call(arguments, 2),
                n = e.length,
                o = 0,
                r = void 0;
            for (o; o < n; o++)
                if ("object" === ("undefined" == typeof t ? "undefined" : a(t)) || "undefined" == typeof t ? e[o].jarallax || (e[o].jarallax = new v(e[o], t)) : e[o].jarallax && (r = e[o].jarallax[t].apply(e[o].jarallax, i)), "undefined" != typeof r) return r;
            return e
        };
    b.constructor = v;
    var x = window.jarallax;
    if (window.jarallax = b, window.jarallax.noConflict = function() {
            return window.jarallax = x, this
        }, "undefined" != typeof jQuery) {
        var w = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = b.apply(window, e);
            return "object" !== ("undefined" == typeof t ? "undefined" : a(t)) ? t : this
        };
        w.constructor = v;
        var $ = jQuery.fn.jarallax;
        jQuery.fn.jarallax = w, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = $, this
        }
    }
    t(window, "DOMContentLoaded", function() {
        b(document.querySelectorAll("[data-jarallax]"))
    })
}();