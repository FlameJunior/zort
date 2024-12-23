"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [332], {
        3145: function(t, e, i) {
            i.d(e, {
                default: function() {
                    return r.a
                }
            });
            var n = i(8461),
                r = i.n(n)
        },
        7648: function(t, e, i) {
            i.d(e, {
                default: function() {
                    return r.a
                }
            });
            var n = i(2972),
                r = i.n(n)
        },
        5449: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "addLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i(8521);
            let n = function(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                return t
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6958: function(t, e, i) {
            function n(t, e, i, n) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i(8521), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5878: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let n = i(7043),
                r = i(3099),
                s = i(7437),
                o = r._(i(2265)),
                a = n._(i(4887)),
                l = n._(i(8293)),
                u = i(5346),
                h = i(128),
                d = i(2589);
            i(1765);
            let c = i(5523),
                p = n._(i(5084)),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(t, e, i, n, r, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && r(!0), null == i ? void 0 : i.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                r = !1;
                            i.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => r,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    r = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function g(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let v = (0, o.forwardRef)((t, e) => {
                let {
                    src: i,
                    srcSet: n,
                    sizes: r,
                    height: a,
                    width: l,
                    decoding: u,
                    className: h,
                    style: d,
                    fetchPriority: c,
                    placeholder: p,
                    loading: f,
                    unoptimized: v,
                    fill: y,
                    onLoadRef: x,
                    onLoadingCompleteRef: b,
                    setBlurComplete: P,
                    setShowAltText: w,
                    sizesInput: S,
                    onLoad: T,
                    onError: A,
                    ...E
                } = t;
                return (0, s.jsx)("img", { ...E,
                    ...g(c),
                    loading: f,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": y ? "fill" : "1",
                    className: h,
                    style: d,
                    sizes: r,
                    srcSet: n,
                    src: i,
                    ref: (0, o.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && m(t, p, x, b, P, v, S))
                    }, [i, p, x, b, P, A, v, S, e]),
                    onLoad: t => {
                        m(t.currentTarget, p, x, b, P, v, S)
                    },
                    onError: t => {
                        w(!0), "empty" !== p && P(!0), A && A(t)
                    }
                })
            });

            function y(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: i
                } = t, n = {
                    as: "image",
                    imageSrcSet: i.srcSet,
                    imageSizes: i.sizes,
                    crossOrigin: i.crossOrigin,
                    referrerPolicy: i.referrerPolicy,
                    ...g(i.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(i.src, n), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: i.srcSet ? void 0 : i.src,
                        ...n
                    }, "__nimg-" + i.src + i.srcSet + i.sizes)
                })
            }
            let x = (0, o.forwardRef)((t, e) => {
                let i = (0, o.useContext)(c.RouterContext),
                    n = (0, o.useContext)(d.ImageConfigContext),
                    r = (0, o.useMemo)(() => {
                        let t = f || n || h.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            i = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: i
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    m = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    m.current = a
                }, [a]);
                let g = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [x, b] = (0, o.useState)(!1), [P, w] = (0, o.useState)(!1), {
                    props: S,
                    meta: T
                } = (0, u.getImgProps)(t, {
                    defaultLoader: p.default,
                    imgConf: r,
                    blurComplete: x,
                    showAltText: P
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(v, { ...S,
                        unoptimized: T.unoptimized,
                        placeholder: T.placeholder,
                        fill: T.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: g,
                        setBlurComplete: b,
                        setShowAltText: w,
                        sizesInput: t.sizes,
                        ref: e
                    }), T.priority ? (0, s.jsx)(y, {
                        isAppRouter: !i,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        2972: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let n = i(7043),
                r = i(7437),
                s = n._(i(2265)),
                o = i(5246),
                a = i(3552),
                l = i(7497),
                u = i(3987),
                h = i(5449),
                d = i(5523),
                c = i(1956),
                p = i(6081),
                f = i(6958),
                m = i(1634),
                g = i(4673),
                v = new Set;

            function y(t, e, i, n, r, s) {
                if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
                    if (!n.bypassPrefetchedCheck) {
                        let r = e + "%" + i + "%" + (void 0 !== n.locale ? n.locale : "locale" in t ? t.locale : void 0);
                        if (v.has(r)) return;
                        v.add(r)
                    }(async () => s ? t.prefetch(e, r) : t.prefetch(e, i, n))().catch(t => {})
                }
            }

            function x(t) {
                return "string" == typeof t ? t : (0, l.formatUrl)(t)
            }
            let b = s.default.forwardRef(function(t, e) {
                let i, n;
                let {
                    href: l,
                    as: v,
                    children: b,
                    prefetch: P = null,
                    passHref: w,
                    replace: S,
                    shallow: T,
                    scroll: A,
                    locale: E,
                    onClick: M,
                    onMouseEnter: C,
                    onTouchStart: R,
                    legacyBehavior: j = !1,
                    ...k
                } = t;
                i = b, j && ("string" == typeof i || "number" == typeof i) && (i = (0, r.jsx)("a", {
                    children: i
                }));
                let D = s.default.useContext(d.RouterContext),
                    V = s.default.useContext(c.AppRouterContext),
                    O = null != D ? D : V,
                    L = !D,
                    _ = !1 !== P,
                    F = null === P ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
                    {
                        href: I,
                        as: B
                    } = s.default.useMemo(() => {
                        if (!D) {
                            let t = x(l);
                            return {
                                href: t,
                                as: v ? x(v) : t
                            }
                        }
                        let [t, e] = (0, o.resolveHref)(D, l, !0);
                        return {
                            href: t,
                            as: v ? (0, o.resolveHref)(D, v) : e || t
                        }
                    }, [D, l, v]),
                    U = s.default.useRef(I),
                    N = s.default.useRef(B);
                j && (n = s.default.Children.only(i));
                let z = j ? n && "object" == typeof n && n.ref : e,
                    [W, $, K] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    Y = s.default.useCallback(t => {
                        (N.current !== B || U.current !== I) && (K(), N.current = B, U.current = I), W(t), z && ("function" == typeof z ? z(t) : "object" == typeof z && (z.current = t))
                    }, [B, z, I, K, W]);
                s.default.useEffect(() => {
                    O && $ && _ && y(O, I, B, {
                        locale: E
                    }, {
                        kind: F
                    }, L)
                }, [B, I, $, E, _, null == D ? void 0 : D.locale, O, L, F]);
                let H = {
                    ref: Y,
                    onClick(t) {
                        j || "function" != typeof M || M(t), j && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), O && !t.defaultPrevented && function(t, e, i, n, r, o, l, u, h) {
                            let {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && (function(t) {
                                    let e = t.currentTarget.getAttribute("target");
                                    return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                }(t) || !h && !(0, a.isLocalURL)(i))) return;
                            t.preventDefault();
                            let c = () => {
                                let t = null == l || l;
                                "beforePopState" in e ? e[r ? "replace" : "push"](i, n, {
                                    shallow: o,
                                    locale: u,
                                    scroll: t
                                }) : e[r ? "replace" : "push"](n || i, {
                                    scroll: t
                                })
                            };
                            h ? s.default.startTransition(c) : c()
                        }(t, O, I, B, S, T, A, E, L)
                    },
                    onMouseEnter(t) {
                        j || "function" != typeof C || C(t), j && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), O && (_ || !L) && y(O, I, B, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: F
                        }, L)
                    },
                    onTouchStart: function(t) {
                        j || "function" != typeof R || R(t), j && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), O && (_ || !L) && y(O, I, B, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: F
                        }, L)
                    }
                };
                if ((0, u.isAbsoluteUrl)(B)) H.href = B;
                else if (!j || w || "a" === n.type && !("href" in n.props)) {
                    let t = void 0 !== E ? E : null == D ? void 0 : D.locale,
                        e = (null == D ? void 0 : D.isLocaleDomain) && (0, f.getDomainLocale)(B, t, null == D ? void 0 : D.locales, null == D ? void 0 : D.domainLocales);
                    H.href = e || (0, m.addBasePath)((0, h.addLocale)(B, t, null == D ? void 0 : D.defaultLocale))
                }
                return j ? s.default.cloneElement(n, H) : (0, r.jsx)("a", { ...k,
                    ...H,
                    children: i
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3515: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    cancelIdleCallback: function() {
                        return n
                    },
                    requestIdleCallback: function() {
                        return i
                    }
                });
            let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    let e = Date.now();
                    return self.setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5246: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let n = i(8637),
                r = i(7497),
                s = i(7053),
                o = i(3987),
                a = i(8521),
                l = i(3552),
                u = i(6279),
                h = i(7205);

            function d(t, e, i) {
                let d;
                let c = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
                    p = c.match(/^[a-zA-Z]{1,}:\/\//),
                    f = p ? c.slice(p[0].length) : c;
                if ((f.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + c + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let e = (0, o.normalizeRepeatedSlashes)(f);
                    c = (p ? p[0] : "") + e
                }
                if (!(0, l.isLocalURL)(c)) return i ? [c] : c;
                try {
                    d = new URL(c.startsWith("#") ? t.asPath : t.pathname, "http://n")
                } catch (t) {
                    d = new URL("/", "http://n")
                }
                try {
                    let t = new URL(c, d);
                    t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
                    let e = "";
                    if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
                        let i = (0, n.searchParamsToUrlQuery)(t.searchParams),
                            {
                                result: o,
                                params: a
                            } = (0, h.interpolateAs)(t.pathname, t.pathname, i);
                        o && (e = (0, r.formatWithValidation)({
                            pathname: o,
                            hash: t.hash,
                            query: (0, s.omit)(i, a)
                        }))
                    }
                    let o = t.origin === d.origin ? t.href.slice(t.origin.length) : t.href;
                    return i ? [o, e || o] : o
                } catch (t) {
                    return i ? [c] : c
                }
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6081: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let n = i(2265),
                r = i(3515),
                s = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function l(t) {
                let {
                    rootRef: e,
                    rootMargin: i,
                    disabled: l
                } = t, u = l || !s, [h, d] = (0, n.useState)(!1), c = (0, n.useRef)(null), p = (0, n.useCallback)(t => {
                    c.current = t
                }, []);
                return (0, n.useEffect)(() => {
                    if (s) {
                        if (u || h) return;
                        let t = c.current;
                        if (t && t.tagName) return function(t, e, i) {
                            let {
                                id: n,
                                observer: r,
                                elements: s
                            } = function(t) {
                                let e;
                                let i = {
                                        root: t.root || null,
                                        margin: t.rootMargin || ""
                                    },
                                    n = a.find(t => t.root === i.root && t.margin === i.margin);
                                if (n && (e = o.get(n))) return e;
                                let r = new Map;
                                return e = {
                                    id: i,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = r.get(t.target),
                                                i = t.isIntersecting || t.intersectionRatio > 0;
                                            e && i && e(i)
                                        })
                                    }, t),
                                    elements: r
                                }, a.push(i), o.set(i, e), e
                            }(i);
                            return s.set(t, e), r.observe(t),
                                function() {
                                    if (s.delete(t), r.unobserve(t), 0 === s.size) {
                                        r.disconnect(), o.delete(n);
                                        let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                        t > -1 && a.splice(t, 1)
                                    }
                                }
                        }(t, t => t && d(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: i
                        })
                    } else if (!h) {
                        let t = (0, r.requestIdleCallback)(() => d(!0));
                        return () => (0, r.cancelIdleCallback)(t)
                    }
                }, [u, i, e, h, c.current]), [p, h, (0, n.useCallback)(() => {
                    d(!1)
                }, [])]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1436: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(7043)._(i(2265)).default.createContext({})
        },
        3964: function(t, e) {
            function i(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: i = !1,
                    hasQuery: n = !1
                } = void 0 === t ? {} : t;
                return e || i && n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        42: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let i = /[|\\{}()[\]^$+*?.-]/,
                n = /[|\\{}()[\]^$+*?.-]/g;

            function r(t) {
                return i.test(t) ? t.replace(n, "\\$&") : t
            }
        },
        5346: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), i(1765);
            let n = i(6496),
                r = i(128);

            function s(t) {
                return void 0 !== t.default
            }

            function o(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var i;
                let a, l, u, {
                        src: h,
                        sizes: d,
                        unoptimized: c = !1,
                        priority: p = !1,
                        loading: f,
                        className: m,
                        quality: g,
                        width: v,
                        height: y,
                        fill: x = !1,
                        style: b,
                        overrideSrc: P,
                        onLoad: w,
                        onLoadingComplete: S,
                        placeholder: T = "empty",
                        blurDataURL: A,
                        fetchPriority: E,
                        decoding: M = "async",
                        layout: C,
                        objectFit: R,
                        objectPosition: j,
                        lazyBoundary: k,
                        lazyRoot: D,
                        ...V
                    } = t,
                    {
                        imgConf: O,
                        showAltText: L,
                        blurComplete: _,
                        defaultLoader: F
                    } = e,
                    I = O || r.imageConfigDefault;
                if ("allSizes" in I) a = I;
                else {
                    let t = [...I.deviceSizes, ...I.imageSizes].sort((t, e) => t - e),
                        e = I.deviceSizes.sort((t, e) => t - e);
                    a = { ...I,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === F) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let B = V.loader || F;
                delete V.loader, delete V.srcSet;
                let U = "__next_img_default" in B;
                if (U) {
                    if ("custom" === a.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = B;
                    B = e => {
                        let {
                            config: i,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (C) {
                    "fill" === C && (x = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[C];
                    t && (b = { ...b,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[C];
                    e && !d && (d = e)
                }
                let N = "",
                    z = o(v),
                    W = o(y);
                if ("object" == typeof(i = h) && (s(i) || void 0 !== i.src)) {
                    let t = s(h) ? h.default : h;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (l = t.blurWidth, u = t.blurHeight, A = A || t.blurDataURL, N = t.src, !x) {
                        if (z || W) {
                            if (z && !W) {
                                let e = z / t.width;
                                W = Math.round(t.height * e)
                            } else if (!z && W) {
                                let e = W / t.height;
                                z = Math.round(t.width * e)
                            }
                        } else z = t.width, W = t.height
                    }
                }
                let $ = !p && ("lazy" === f || void 0 === f);
                (!(h = "string" == typeof h ? h : N) || h.startsWith("data:") || h.startsWith("blob:")) && (c = !0, $ = !1), a.unoptimized && (c = !0), U && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0), p && (E = "high");
                let K = o(g),
                    Y = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: R,
                        objectPosition: j
                    } : {}, L ? {} : {
                        color: "transparent"
                    }, b),
                    H = _ || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: z,
                        heightInt: W,
                        blurWidth: l,
                        blurHeight: u,
                        blurDataURL: A || "",
                        objectFit: Y.objectFit
                    }) + '")' : 'url("' + T + '")',
                    q = H ? {
                        backgroundSize: Y.objectFit || "cover",
                        backgroundPosition: Y.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: H
                    } : {},
                    X = function(t) {
                        let {
                            config: e,
                            src: i,
                            unoptimized: n,
                            width: r,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (n) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function(t, e, i) {
                            let {
                                deviceSizes: n,
                                allSizes: r
                            } = t;
                            if (i) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: r.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))],
                                kind: "x"
                            }
                        }(e, r, o), h = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, n) => a({
                                config: e,
                                src: i,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: i,
                                quality: s,
                                width: l[h]
                            })
                        }
                    }({
                        config: a,
                        src: h,
                        unoptimized: c,
                        width: z,
                        quality: K,
                        sizes: d,
                        loader: B
                    });
                return {
                    props: { ...V,
                        loading: $ ? "lazy" : f,
                        fetchPriority: E,
                        width: z,
                        height: W,
                        decoding: M,
                        className: m,
                        style: { ...Y,
                            ...q
                        },
                        sizes: X.sizes,
                        srcSet: X.srcSet,
                        src: P || X.src
                    },
                    meta: {
                        unoptimized: c,
                        priority: p,
                        placeholder: T,
                        fill: x
                    }
                }
            }
        },
        8293: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return m
                    },
                    defaultHead: function() {
                        return d
                    }
                });
            let n = i(7043),
                r = i(3099),
                s = i(7437),
                o = r._(i(2265)),
                a = n._(i(7421)),
                l = i(1436),
                u = i(8701),
                h = i(3964);

            function d(t) {
                void 0 === t && (t = !1);
                let e = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function c(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            i(1765);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function f(t, e) {
                let {
                    inAmpMode: i
                } = e;
                return t.reduce(c, []).reverse().concat(d(i).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        i = new Set,
                        n = {};
                    return r => {
                        let s = !0,
                            o = !1;
                        if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
                            o = !0;
                            let e = r.key.slice(r.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (r.type) {
                            case "title":
                            case "base":
                                e.has(r.type) ? s = !1 : e.add(r.type);
                                break;
                            case "meta":
                                for (let t = 0, e = p.length; t < e; t++) {
                                    let e = p[t];
                                    if (r.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) i.has(e) ? s = !1 : i.add(e);
                                        else {
                                            let t = r.props[e],
                                                i = n[e] || new Set;
                                            ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), n[e] = i)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = { ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
                    }
                    return o.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let m = function(t) {
                let {
                    children: e
                } = t, i = (0, o.useContext)(l.AmpStateContext), n = (0, o.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(a.default, {
                    reduceComponentsToState: f,
                    headManager: n,
                    inAmpMode: (0, h.isInAmpMode)(i),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6496: function(t, e) {
            function i(t) {
                let {
                    widthInt: e,
                    heightInt: i,
                    blurWidth: n,
                    blurHeight: r,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = n ? 40 * n : e, l = r ? 40 * r : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        2589: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(7043)._(i(2265)),
                r = i(128),
                s = n.default.createContext(r.imageConfigDefault)
        },
        128: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return i
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    localPatterns: void 0,
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        8461: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = i(7043),
                r = i(5346),
                s = i(5878),
                o = n._(i(5084));

            function a(t) {
                let {
                    props: e
                } = (0, r.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        5084: function(t, e) {
            function i(t) {
                let {
                    config: e,
                    src: i,
                    width: n,
                    quality: r
                } = t;
                return e.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (r || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), i.__next_img_default = !0;
            let n = i
        },
        5523: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = i(7043)._(i(2265)).default.createContext(null)
        },
        7497: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    formatUrl: function() {
                        return s
                    },
                    formatWithValidation: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return o
                    }
                });
            let n = i(3099)._(i(8637)),
                r = /https?|ftp|gopher|file/;

            function s(t) {
                let {
                    auth: e,
                    hostname: i
                } = t, s = t.protocol || "", o = t.pathname || "", a = t.hash || "", l = t.query || "", u = !1;
                e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i), t.port && (u += ":" + t.port)), l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
                let h = t.search || l && "?" + l || "";
                return s && !s.endsWith(":") && (s += ":"), t.slashes || (!s || r.test(s)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), h && "?" !== h[0] && (h = "?" + h), "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
            }
            let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(t) {
                return s(t)
            }
        },
        6279: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    getSortedRoutes: function() {
                        return n.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return r.isDynamicRoute
                    }
                });
            let n = i(4777),
                r = i(8104)
        },
        7205: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(4199),
                r = i(9964);

            function s(t, e, i) {
                let s = "",
                    o = (0, r.getRouteRegex)(t),
                    a = o.groups,
                    l = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || i;
                s = t;
                let u = Object.keys(a);
                return u.every(t => {
                    let e = l[t] || "",
                        {
                            repeat: i,
                            optional: n
                        } = a[t],
                        r = "[" + (i ? "..." : "") + t + "]";
                    return n && (r = (e ? "" : "/") + "[" + r + "]"), i && !Array.isArray(e) && (e = [e]), (n || t in l) && (s = s.replace(r, i ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
                }) || (s = ""), {
                    params: u,
                    result: s
                }
            }
        },
        8104: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(1182),
                r = /\/\[[^/]+?\](?=\/|$)/;

            function s(t) {
                return (0, n.isInterceptionRouteAppPath)(t) && (t = (0, n.extractInterceptionRouteInformation)(t).interceptedRoute), r.test(t)
            }
        },
        3552: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = i(3987),
                r = i(1283);

            function s(t) {
                if (!(0, n.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, n.getLocationOrigin)(),
                        i = new URL(t, e);
                    return i.origin === e && (0, r.hasBasePath)(i.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        7053: function(t, e) {
            function i(t, e) {
                let i = {};
                return Object.keys(t).forEach(n => {
                    e.includes(n) || (i[n] = t[n])
                }), i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "omit", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        8637: function(t, e) {
            function i(t) {
                let e = {};
                return t.forEach((t, i) => {
                    void 0 === e[i] ? e[i] = t : Array.isArray(e[i]) ? e[i].push(t) : e[i] = [e[i], t]
                }), e
            }

            function n(t) {
                return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
            }

            function r(t) {
                let e = new URLSearchParams;
                return Object.entries(t).forEach(t => {
                    let [i, r] = t;
                    Array.isArray(r) ? r.forEach(t => e.append(i, n(t))) : e.set(i, n(r))
                }), e
            }

            function s(t) {
                for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                return i.forEach(e => {
                    Array.from(e.keys()).forEach(e => t.delete(e)), e.forEach((e, i) => t.append(i, e))
                }), t
            }
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    assign: function() {
                        return s
                    },
                    searchParamsToUrlQuery: function() {
                        return i
                    },
                    urlQueryToSearchParams: function() {
                        return r
                    }
                })
        },
        4199: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = i(3987);

            function r(t) {
                let {
                    re: e,
                    groups: i
                } = t;
                return t => {
                    let r = e.exec(t);
                    if (!r) return !1;
                    let s = t => {
                            try {
                                return decodeURIComponent(t)
                            } catch (t) {
                                throw new n.DecodeError("failed to decode param")
                            }
                        },
                        o = {};
                    return Object.keys(i).forEach(t => {
                        let e = i[t],
                            n = r[e.pos];
                        void 0 !== n && (o[t] = ~n.indexOf("/") ? n.split("/").map(t => s(t)) : e.repeat ? [s(n)] : s(n))
                    }), o
                }
            }
        },
        9964: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    getNamedMiddlewareRegex: function() {
                        return c
                    },
                    getNamedRouteRegex: function() {
                        return d
                    },
                    getRouteRegex: function() {
                        return l
                    },
                    parseParameter: function() {
                        return o
                    }
                });
            let n = i(1182),
                r = i(42),
                s = i(6674);

            function o(t) {
                let e = t.startsWith("[") && t.endsWith("]");
                e && (t = t.slice(1, -1));
                let i = t.startsWith("...");
                return i && (t = t.slice(3)), {
                    key: t,
                    repeat: i,
                    optional: e
                }
            }

            function a(t) {
                let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    i = {},
                    a = 1;
                return {
                    parameterizedRoute: e.map(t => {
                        let e = n.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (e && s) {
                            let {
                                key: t,
                                optional: n,
                                repeat: l
                            } = o(s[1]);
                            return i[t] = {
                                pos: a++,
                                repeat: l,
                                optional: n
                            }, "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                        }
                        if (!s) return "/" + (0, r.escapeStringRegexp)(t); {
                            let {
                                key: t,
                                repeat: e,
                                optional: n
                            } = o(s[1]);
                            return i[t] = {
                                pos: a++,
                                repeat: e,
                                optional: n
                            }, e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: i
                }
            }

            function l(t) {
                let {
                    parameterizedRoute: e,
                    groups: i
                } = a(t);
                return {
                    re: RegExp("^" + e + "(?:/)?$"),
                    groups: i
                }
            }

            function u(t) {
                let {
                    interceptionMarker: e,
                    getSafeRouteKey: i,
                    segment: n,
                    routeKeys: s,
                    keyPrefix: a
                } = t, {
                    key: l,
                    optional: u,
                    repeat: h
                } = o(n), d = l.replace(/\W/g, "");
                a && (d = "" + a + d);
                let c = !1;
                (0 === d.length || d.length > 30) && (c = !0), isNaN(parseInt(d.slice(0, 1))) || (c = !0), c && (d = i()), a ? s[d] = "" + a + l : s[d] = l;
                let p = e ? (0, r.escapeStringRegexp)(e) : "";
                return h ? u ? "(?:/" + p + "(?<" + d + ">.+?))?" : "/" + p + "(?<" + d + ">.+?)" : "/" + p + "(?<" + d + ">[^/]+?)"
            }

            function h(t, e) {
                let i;
                let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    a = (i = 0, () => {
                        let t = "",
                            e = ++i;
                        for (; e > 0;) t += String.fromCharCode(97 + (e - 1) % 26), e = Math.floor((e - 1) / 26);
                        return t
                    }),
                    l = {};
                return {
                    namedParameterizedRoute: o.map(t => {
                        let i = n.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (i && s) {
                            let [i] = t.split(s[0]);
                            return u({
                                getSafeRouteKey: a,
                                interceptionMarker: i,
                                segment: s[1],
                                routeKeys: l,
                                keyPrefix: e ? "nxtI" : void 0
                            })
                        }
                        return s ? u({
                            getSafeRouteKey: a,
                            segment: s[1],
                            routeKeys: l,
                            keyPrefix: e ? "nxtP" : void 0
                        }) : "/" + (0, r.escapeStringRegexp)(t)
                    }).join(""),
                    routeKeys: l
                }
            }

            function d(t, e) {
                let i = h(t, e);
                return { ...l(t),
                    namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: i.routeKeys
                }
            }

            function c(t, e) {
                let {
                    parameterizedRoute: i
                } = a(t), {
                    catchAll: n = !0
                } = e;
                if ("/" === i) return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: r
                } = h(t, !1);
                return {
                    namedRegex: "^" + r + (n ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        4777: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class i {
                insert(t) {
                    this._insert(t.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(t) {
                    void 0 === t && (t = "/");
                    let e = [...this.children.keys()].sort();
                    null !== this.slugName && e.splice(e.indexOf("[]"), 1), null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1), null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                    let i = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce((t, e) => [...t, ...e], []);
                    if (null !== this.slugName && i.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")), !this.placeholder) {
                        let e = "/" === t ? "/" : t.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                        i.unshift(e)
                    }
                    return null !== this.restSlugName && i.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && i.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")), i
                }
                _insert(t, e, n) {
                    if (0 === t.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (n) throw Error("Catch-all must be the last part of the URL.");
                    let r = t[0];
                    if (r.startsWith("[") && r.endsWith("]")) {
                        let i = r.slice(1, -1),
                            o = !1;
                        if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), o = !0), i.startsWith("...") && (i = i.substring(3), n = !0), i.startsWith("[") || i.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + i + "').");
                        if (i.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + i + "').");

                        function s(t, i) {
                            if (null !== t && t !== i) throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + i + "').");
                            e.forEach(t => {
                                if (t === i) throw Error('You cannot have the same slug name "' + i + '" repeat within a single dynamic path');
                                if (t.replace(/\W/g, "") === r.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + t + '" and "' + i + '" differ only by non-word symbols within a single dynamic path')
                            }), e.push(i)
                        }
                        if (n) {
                            if (o) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                                s(this.optionalRestSlugName, i), this.optionalRestSlugName = i, r = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                                s(this.restSlugName, i), this.restSlugName = i, r = "[...]"
                            }
                        } else {
                            if (o) throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                            s(this.slugName, i), this.slugName = i, r = "[]"
                        }
                    }
                    this.children.has(r) || this.children.set(r, new i), this.children.get(r)._insert(t.slice(1), e, n)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function n(t) {
                let e = new i;
                return t.forEach(t => e.insert(t)), e.smoosh()
            }
        },
        7421: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = i(2265),
                r = "undefined" == typeof window,
                s = r ? () => {} : n.useLayoutEffect,
                o = r ? () => {} : n.useEffect;

            function a(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: i
                } = t;

                function a() {
                    if (e && e.mountedInstances) {
                        let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(i(r, t))
                    }
                }
                if (r) {
                    var l;
                    null == e || null == (l = e.mountedInstances) || l.add(t.children), a()
                }
                return s(() => {
                    var i;
                    return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
                        var i;
                        null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                    }
                }), s(() => (e && (e._pendingUpdate = a), () => {
                    e && (e._pendingUpdate = a)
                })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        3987: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var i in e) Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                }(e, {
                    DecodeError: function() {
                        return f
                    },
                    MiddlewareNotFoundError: function() {
                        return y
                    },
                    MissingStaticPage: function() {
                        return v
                    },
                    NormalizeError: function() {
                        return m
                    },
                    PageNotFoundError: function() {
                        return g
                    },
                    SP: function() {
                        return c
                    },
                    ST: function() {
                        return p
                    },
                    WEB_VITALS: function() {
                        return i
                    },
                    execOnce: function() {
                        return n
                    },
                    getDisplayName: function() {
                        return l
                    },
                    getLocationOrigin: function() {
                        return o
                    },
                    getURL: function() {
                        return a
                    },
                    isAbsoluteUrl: function() {
                        return s
                    },
                    isResSent: function() {
                        return u
                    },
                    loadGetInitialProps: function() {
                        return d
                    },
                    normalizeRepeatedSlashes: function() {
                        return h
                    },
                    stringifyError: function() {
                        return x
                    }
                });
            let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(t) {
                let e, i = !1;
                return function() {
                    for (var n = arguments.length, r = Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                    return i || (i = !0, e = t(...r)), e
                }
            }
            let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                s = t => r.test(t);

            function o() {
                let {
                    protocol: t,
                    hostname: e,
                    port: i
                } = window.location;
                return t + "//" + e + (i ? ":" + i : "")
            }

            function a() {
                let {
                    href: t
                } = window.location, e = o();
                return t.substring(e.length)
            }

            function l(t) {
                return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
            }

            function u(t) {
                return t.finished || t.headersSent
            }

            function h(t) {
                let e = t.split("?");
                return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
            }
            async function d(t, e) {
                let i = e.res || e.ctx && e.ctx.res;
                if (!t.getInitialProps) return e.ctx && e.Component ? {
                    pageProps: await d(e.Component, e.ctx)
                } : {};
                let n = await t.getInitialProps(e);
                if (i && u(i)) return n;
                if (!n) throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
                return n
            }
            let c = "undefined" != typeof performance,
                p = c && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
            class f extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(t) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
                }
            }
            class v extends Error {
                constructor(t, e) {
                    super(), this.message = "Failed to load static file for page: " + t + " " + e
                }
            }
            class y extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function x(t) {
                return JSON.stringify({
                    message: t.message,
                    stack: t.stack
                })
            }
        },
        8881: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)({})
        },
        5750: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        4252: function(t, e, i) {
            i.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, i(2265).createContext)(null)
        },
        4936: function(t, e, i) {
            let n;

            function r(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            i.d(e, {
                E: function() {
                    return sr
                }
            });
            let s = t => Array.isArray(t);

            function o(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function a(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function l(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function u(t, e, i, n) {
                if ("function" == typeof e) {
                    let [r, s] = l(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [r, s] = l(n);
                    e = e(void 0 !== i ? i : t.custom, r, s)
                }
                return e
            }

            function h(t, e, i) {
                let n = t.getProps();
                return u(n, e, void 0 !== i ? i : n.custom, t)
            }
            let d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                c = ["initial", ...d],
                p = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                f = new Set(p),
                m = t => 1e3 * t,
                g = t => t / 1e3,
                v = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                y = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                x = {
                    type: "keyframes",
                    duration: .8
                },
                b = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                P = (t, {
                    keyframes: e
                }) => e.length > 2 ? x : f.has(t) ? t.startsWith("scale") ? y(e[1]) : v : b;

            function w(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
            let S = {
                    skipAnimations: !1,
                    useManualTiming: !1
                },
                T = {
                    current: !1
                },
                A = t => null !== t;

            function E(t, {
                repeat: e,
                repeatType: i = "loop"
            }, n) {
                let r = t.filter(A),
                    s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return s && void 0 !== n ? n : r[s]
            }
            var M, C, R, j = i(6277);
            let k = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function D(t, e) {
                let i = !1,
                    n = !0,
                    r = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    s = () => i = !0,
                    o = k.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            i = new Set,
                            n = !1,
                            r = !1,
                            s = new WeakSet,
                            o = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            s.has(e) && (l.schedule(e), t()), e(o)
                        }
                        let l = {
                            schedule: (t, r = !1, o = !1) => {
                                let a = o && n ? e : i;
                                return r && s.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), s.delete(t)
                            },
                            process: t => {
                                if (o = t, n) {
                                    r = !0;
                                    return
                                }
                                n = !0, [e, i] = [i, e], i.clear(), e.forEach(a), n = !1, r && (r = !1, l.process(t))
                            }
                        };
                        return l
                    }(s), t), {}),
                    {
                        read: a,
                        resolveKeyframes: l,
                        update: u,
                        preRender: h,
                        render: d,
                        postRender: c
                    } = o,
                    p = () => {
                        let s = S.useManualTiming ? r.timestamp : performance.now();
                        i = !1, r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1), r.timestamp = s, r.isProcessing = !0, a.process(r), l.process(r), u.process(r), h.process(r), d.process(r), c.process(r), r.isProcessing = !1, i && e && (n = !1, t(p))
                    },
                    f = () => {
                        i = !0, n = !0, r.isProcessing || t(p)
                    };
                return {
                    schedule: k.reduce((t, e) => {
                        let n = o[e];
                        return t[e] = (t, e = !1, r = !1) => (i || f(), n.schedule(t, e, r)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < k.length; e++) o[k[e]].cancel(t)
                    },
                    state: r,
                    steps: o
                }
            }
            let {
                schedule: V,
                cancel: O,
                state: L,
                steps: _
            } = D("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : j.Z, !0), F = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function I(t, e, i, n) {
                if (t === e && i === n) return j.Z;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = F(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : F(r(t), e, n)
            }
            let B = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                U = t => e => 1 - t(1 - e),
                N = I(.33, 1.53, .69, .99),
                z = U(N),
                W = B(z),
                $ = t => (t *= 2) < 1 ? .5 * z(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                K = t => 1 - Math.sin(Math.acos(t)),
                Y = U(K),
                H = B(K),
                q = t => /^0[^.\s]+$/u.test(t);
            var X = i(2035);
            let Z = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                G = t => e => "string" == typeof e && e.startsWith(t),
                J = G("--"),
                Q = G("var(--"),
                tt = t => !!Q(t) && te.test(t.split("/*")[0].trim()),
                te = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                ti = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                tn = (t, e, i) => i > e ? e : i < t ? t : i,
                tr = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                ts = { ...tr,
                    transform: t => tn(0, 1, t)
                },
                to = { ...tr,
                    default: 1
                },
                ta = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tl = ta("deg"),
                tu = ta("%"),
                th = ta("px"),
                td = ta("vh"),
                tc = ta("vw"),
                tp = { ...tu,
                    parse: t => tu.parse(t) / 100,
                    transform: t => tu.transform(100 * t)
                },
                tf = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                tm = t => t === tr || t === th,
                tg = (t, e) => parseFloat(t.split(", ")[e]),
                tv = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/u);
                    if (r) return tg(r[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? tg(e[1], t) : 0
                    }
                },
                ty = new Set(["x", "y", "z"]),
                tx = p.filter(t => !ty.has(t)),
                tb = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: tv(4, 13),
                    y: tv(5, 14)
                };
            tb.translateX = tb.x, tb.translateY = tb.y;
            let tP = t => e => e.test(t),
                tw = [tr, th, tu, tl, tc, td, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                tS = t => tw.find(tP(t)),
                tT = new Set,
                tA = !1,
                tE = !1;

            function tM() {
                if (tE) {
                    let t = Array.from(tT).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return tx.forEach(i => {
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                tE = !1, tA = !1, tT.forEach(t => t.complete()), tT.clear()
            }

            function tC() {
                tT.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (tE = !0)
                })
            }
            class tR {
                constructor(t, e, i, n, r, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (tT.add(this), tA || (tA = !0, V.read(tC), V.resolveKeyframes(tM))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    for (let r = 0; r < t.length; r++)
                        if (null === t[r]) {
                            if (0 === r) {
                                let r = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== r) t[0] = r;
                                else if (i && e) {
                                    let n = i.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
                            } else t[r] = t[r - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tT.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, tT.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let tj = t => Math.round(1e5 * t) / 1e5,
                tk = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                tD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                tV = (t, e) => i => !!("string" == typeof i && tD.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                tO = (t, e, i) => n => {
                    if ("string" != typeof n) return n;
                    let [r, s, o, a] = n.match(tk);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                tL = t => tn(0, 255, t),
                t_ = { ...tr,
                    transform: t => Math.round(tL(t))
                },
                tF = {
                    test: tV("rgb", "red"),
                    parse: tO("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + t_.transform(t) + ", " + t_.transform(e) + ", " + t_.transform(i) + ", " + tj(ts.transform(n)) + ")"
                },
                tI = {
                    test: tV("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            n = "",
                            r = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(n, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: tF.transform
                },
                tB = {
                    test: tV("hsl", "hue"),
                    parse: tO("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + tu.transform(tj(e)) + ", " + tu.transform(tj(i)) + ", " + tj(ts.transform(n)) + ")"
                },
                tU = {
                    test: t => tF.test(t) || tI.test(t) || tB.test(t),
                    parse: t => tF.test(t) ? tF.parse(t) : tB.test(t) ? tB.parse(t) : tI.parse(t),
                    transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tF.transform(t) : tB.transform(t)
                },
                tN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tz = "number",
                tW = "color",
                t$ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function tK(t) {
                let e = t.toString(),
                    i = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    r = [],
                    s = 0,
                    o = e.replace(t$, t => (tU.test(t) ? (n.color.push(s), r.push(tW), i.push(tU.parse(t))) : t.startsWith("var(") ? (n.var.push(s), r.push("var"), i.push(t)) : (n.number.push(s), r.push(tz), i.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: i,
                    split: o,
                    indexes: n,
                    types: r
                }
            }

            function tY(t) {
                return tK(t).values
            }

            function tH(t) {
                let {
                    split: e,
                    types: i
                } = tK(t), n = e.length;
                return t => {
                    let r = "";
                    for (let s = 0; s < n; s++)
                        if (r += e[s], void 0 !== t[s]) {
                            let e = i[s];
                            e === tz ? r += tj(t[s]) : e === tW ? r += tU.transform(t[s]) : r += t[s]
                        }
                    return r
                }
            }
            let tq = t => "number" == typeof t ? 0 : t,
                tX = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tk)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tN)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: tY,
                    createTransformer: tH,
                    getAnimatableNone: function(t) {
                        let e = tY(t);
                        return tH(t)(e.map(tq))
                    }
                },
                tZ = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function tG(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(tk) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = tZ.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let tJ = /\b([a-z-]*)\(.*?\)/gu,
                tQ = { ...tX,
                    getAnimatableNone: t => {
                        let e = t.match(tJ);
                        return e ? e.map(tG).join(" ") : t
                    }
                },
                t0 = { ...tr,
                    transform: Math.round
                },
                t1 = {
                    borderWidth: th,
                    borderTopWidth: th,
                    borderRightWidth: th,
                    borderBottomWidth: th,
                    borderLeftWidth: th,
                    borderRadius: th,
                    radius: th,
                    borderTopLeftRadius: th,
                    borderTopRightRadius: th,
                    borderBottomRightRadius: th,
                    borderBottomLeftRadius: th,
                    width: th,
                    maxWidth: th,
                    height: th,
                    maxHeight: th,
                    top: th,
                    right: th,
                    bottom: th,
                    left: th,
                    padding: th,
                    paddingTop: th,
                    paddingRight: th,
                    paddingBottom: th,
                    paddingLeft: th,
                    margin: th,
                    marginTop: th,
                    marginRight: th,
                    marginBottom: th,
                    marginLeft: th,
                    backgroundPositionX: th,
                    backgroundPositionY: th,
                    rotate: tl,
                    rotateX: tl,
                    rotateY: tl,
                    rotateZ: tl,
                    scale: to,
                    scaleX: to,
                    scaleY: to,
                    scaleZ: to,
                    skew: tl,
                    skewX: tl,
                    skewY: tl,
                    distance: th,
                    translateX: th,
                    translateY: th,
                    translateZ: th,
                    x: th,
                    y: th,
                    z: th,
                    perspective: th,
                    transformPerspective: th,
                    opacity: ts,
                    originX: tp,
                    originY: tp,
                    originZ: th,
                    zIndex: t0,
                    size: th,
                    fillOpacity: ts,
                    strokeOpacity: ts,
                    numOctaves: t0
                },
                t2 = { ...t1,
                    color: tU,
                    backgroundColor: tU,
                    outlineColor: tU,
                    fill: tU,
                    stroke: tU,
                    borderColor: tU,
                    borderTopColor: tU,
                    borderRightColor: tU,
                    borderBottomColor: tU,
                    borderLeftColor: tU,
                    filter: tQ,
                    WebkitFilter: tQ
                },
                t5 = t => t2[t];

            function t3(t, e) {
                let i = t5(t);
                return i !== tQ && (i = tX), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let t4 = new Set(["auto", "none", "0"]);
            class t6 extends tR {
                constructor(t, e, i, n, r) {
                    super(t, e, i, n, r, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && tt(n = n.trim())) {
                            let r = function t(e, i, n = 1) {
                                (0, X.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [r, s] = function(t) {
                                    let e = ti.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, r] = e;
                                    return [`--${null!=i?i:n}`, r]
                                }(e);
                                if (!r) return;
                                let o = window.getComputedStyle(i).getPropertyValue(r);
                                if (o) {
                                    let t = o.trim();
                                    return Z(t) ? parseFloat(t) : t
                                }
                                return tt(s) ? t(s, i, n + 1) : s
                            }(n, e.current);
                            void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !tf.has(i) || 2 !== t.length) return;
                    let [n, r] = t, s = tS(n), o = tS(r);
                    if (s !== o) {
                        if (tm(s) && tm(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || q(n)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, r = 0;
                        for (; r < t.length && !n;) {
                            let e = t[r];
                            "string" == typeof e && !t4.has(e) && tK(e).values.length && (n = t[r]), r++
                        }
                        if (n && i)
                            for (let r of e) t[r] = t3(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tb[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let r = e.getValue(i);
                    r && r.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        o = n[s];
                    n[s] = tb[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }

            function t9(t) {
                return "function" == typeof t
            }

            function t8() {
                n = void 0
            }
            let t7 = {
                    now: () => (void 0 === n && t7.set(L.isProcessing || S.useManualTiming ? L.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(t8)
                    }
                },
                et = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tX.test(t) || "0" === t) && !t.startsWith("url("));
            class ee {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = t7.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: r,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (tC(), tM()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = t7.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: n,
                        velocity: r,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, n) {
                            let r = t[0];
                            if (null === r) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                o = et(r, e),
                                a = et(s, e);
                            return (0, X.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || ("spring" === i || t9(i)) && n)
                        }(t, i, n, r)) {
                        if (T.current || !s) {
                            null == a || a(E(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let u = this.initPlayback(t, e);
                    !1 !== u && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...u
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }
            let ei = (t, e, i) => {
                    let n = e - t;
                    return 0 === n ? 1 : (i - t) / n
                },
                en = (t, e, i = 10) => {
                    let n = "",
                        r = Math.max(Math.round(e / i), 2);
                    for (let e = 0; e < r; e++) n += t(ei(0, r - 1, e)) + ", ";
                    return `linear(${n.substring(0,n.length-2)})`
                };

            function er(t, e, i) {
                var n, r;
                let s = Math.max(e - 5, 0);
                return n = i - t(s), (r = e - s) ? 1e3 / r * n : 0
            }
            let es = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function eo(t, e) {
                return t * Math.sqrt(1 - e * e)
            }

            function ea(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let el = ["duration", "bounce"],
                eu = ["stiffness", "damping", "mass"];

            function eh(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function ed(t = es.visualDuration, e = es.bounce) {
                let i;
                let n = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: r,
                        restDelta: s
                    } = n,
                    o = n.keyframes[0],
                    a = n.keyframes[n.keyframes.length - 1],
                    l = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: u,
                        damping: h,
                        mass: d,
                        duration: c,
                        velocity: p,
                        isResolvedFromDuration: f
                    } = function(t) {
                        let e = {
                            velocity: es.velocity,
                            stiffness: es.stiffness,
                            damping: es.damping,
                            mass: es.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!eh(t, eu) && eh(t, el)) {
                            if (t.visualDuration) {
                                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                                    n = i * i,
                                    r = 2 * tn(.05, 1, 1 - t.bounce) * Math.sqrt(n);
                                e = { ...e,
                                    mass: es.mass,
                                    stiffness: n,
                                    damping: r
                                }
                            } else {
                                let i = function({
                                    duration: t = es.duration,
                                    bounce: e = es.bounce,
                                    velocity: i = es.velocity,
                                    mass: n = es.mass
                                }) {
                                    let r, s;
                                    (0, X.K)(t <= m(es.maxDuration), "Spring duration must be 10 seconds or less");
                                    let o = 1 - e;
                                    o = tn(es.minDamping, es.maxDamping, o), t = tn(es.minDuration, es.maxDuration, g(t)), o < 1 ? (r = e => {
                                        let n = e * o,
                                            r = n * t;
                                        return .001 - (n - i) / eo(e, o) * Math.exp(-r)
                                    }, s = e => {
                                        let n = e * o * t,
                                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                            a = eo(Math.pow(e, 2), o);
                                        return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                                    }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                                    let a = function(t, e, i) {
                                        let n = i;
                                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                        return n
                                    }(r, s, 5 / t);
                                    if (t = m(t), isNaN(a)) return {
                                        stiffness: es.stiffness,
                                        damping: es.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(a, 2) * n;
                                        return {
                                            stiffness: e,
                                            damping: 2 * o * Math.sqrt(n * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...i,
                                    mass: es.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return e
                    }({ ...n,
                        velocity: -g(n.velocity || 0)
                    }),
                    v = p || 0,
                    y = h / (2 * Math.sqrt(u * d)),
                    x = a - o,
                    b = g(Math.sqrt(u / d)),
                    P = 5 > Math.abs(x);
                if (r || (r = P ? es.restSpeed.granular : es.restSpeed.default), s || (s = P ? es.restDelta.granular : es.restDelta.default), y < 1) {
                    let t = eo(b, y);
                    i = e => a - Math.exp(-y * b * e) * ((v + y * b * x) / t * Math.sin(t * e) + x * Math.cos(t * e))
                } else if (1 === y) i = t => a - Math.exp(-b * t) * (x + (v + b * x) * t);
                else {
                    let t = b * Math.sqrt(y * y - 1);
                    i = e => {
                        let i = Math.exp(-y * b * e),
                            n = Math.min(t * e, 300);
                        return a - i * ((v + y * b * x) * Math.sinh(n) + t * x * Math.cosh(n)) / t
                    }
                }
                let w = {
                    calculatedDuration: f && c || null,
                    next: t => {
                        let e = i(t);
                        if (f) l.done = t >= c;
                        else {
                            let n = 0;
                            y < 1 && (n = 0 === t ? m(v) : er(i, t, e));
                            let o = Math.abs(n) <= r,
                                u = Math.abs(a - e) <= s;
                            l.done = o && u
                        }
                        return l.value = l.done ? a : e, l
                    },
                    toString: () => {
                        let t = Math.min(ea(w), 2e4),
                            e = en(e => w.next(t * e).value, t, 30);
                        return t + "ms " + e
                    }
                };
                return w
            }

            function ec({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let d, c;
                let p = t[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = p + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - p);
                let b = t => -v * Math.exp(-t / n),
                    P = t => x + b(t),
                    w = t => {
                        let e = b(t),
                            i = P(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? x : i
                    },
                    S = t => {
                        m(f.value) && (d = t, c = ed({
                            keyframes: [f.value, g(f.value)],
                            velocity: er(P, t, f.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (c || void 0 !== d || (e = !0, w(t), S(t)), void 0 !== d && t >= d) ? c.next(t - d) : (e || w(t), f)
                    }
                }
            }
            let ep = I(.42, 0, 1, 1),
                ef = I(0, 0, .58, 1),
                em = I(.42, 0, .58, 1),
                eg = t => Array.isArray(t) && "number" != typeof t[0],
                ev = t => Array.isArray(t) && "number" == typeof t[0],
                ey = {
                    linear: j.Z,
                    easeIn: ep,
                    easeInOut: em,
                    easeOut: ef,
                    circIn: K,
                    circInOut: H,
                    circOut: Y,
                    backIn: z,
                    backInOut: W,
                    backOut: N,
                    anticipate: $
                },
                ex = t => {
                    if (ev(t)) {
                        (0, X.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return I(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, X.k)(void 0 !== ey[t], `Invalid easing type '${t}'`), ey[t]) : t
                },
                eb = (t, e) => i => e(t(i)),
                eP = (...t) => t.reduce(eb),
                ew = (t, e, i) => t + (e - t) * i;

            function eS(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function eT(t, e) {
                return i => i > 0 ? e : t
            }
            let eA = (t, e, i) => {
                    let n = t * t,
                        r = i * (e * e - n) + n;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                eE = [tI, tF, tB],
                eM = t => eE.find(e => e.test(t));

            function eC(t) {
                let e = eM(t);
                if ((0, X.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === tB && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - n;
                        r = eS(a, n, t + 1 / 3), s = eS(a, n, t), o = eS(a, n, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let eR = (t, e) => {
                    let i = eC(t),
                        n = eC(e);
                    if (!i || !n) return eT(t, e);
                    let r = { ...i
                    };
                    return t => (r.red = eA(i.red, n.red, t), r.green = eA(i.green, n.green, t), r.blue = eA(i.blue, n.blue, t), r.alpha = ew(i.alpha, n.alpha, t), tF.transform(r))
                },
                ej = new Set(["none", "hidden"]);

            function ek(t, e) {
                return i => ew(t, e, i)
            }

            function eD(t) {
                return "number" == typeof t ? ek : "string" == typeof t ? tt(t) ? eT : tU.test(t) ? eR : eL : Array.isArray(t) ? eV : "object" == typeof t ? tU.test(t) ? eR : eO : eT
            }

            function eV(t, e) {
                let i = [...t],
                    n = i.length,
                    r = t.map((t, i) => eD(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < n; e++) i[e] = r[e](t);
                    return i
                }
            }

            function eO(t, e) {
                let i = { ...t,
                        ...e
                    },
                    n = {};
                for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = eD(t[r])(t[r], e[r]));
                return t => {
                    for (let e in n) i[e] = n[e](t);
                    return i
                }
            }
            let eL = (t, e) => {
                let i = tX.createTransformer(e),
                    n = tK(t),
                    r = tK(e);
                return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? ej.has(t) && !r.values.length || ej.has(e) && !n.values.length ? ej.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : eP(eV(function(t, e) {
                    var i;
                    let n = [],
                        r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][r[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l, r[o]++
                    }
                    return n
                }(n, r), r.values), i) : ((0, X.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eT(t, e))
            };

            function e_(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ew(t, e, i) : eD(t)(t, e)
            }

            function eF({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = eg(n) ? n.map(ex) : ex(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: n,
                        mixer: r
                    } = {}) {
                        let s = t.length;
                        if ((0, X.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && t[0] === t[1]) return () => e[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, i) {
                                let n = [],
                                    r = i || e_,
                                    s = t.length - 1;
                                for (let i = 0; i < s; i++) {
                                    let s = r(t[i], t[i + 1]);
                                    e && (s = eP(Array.isArray(e) ? e[i] || j.Z : e, s)), n.push(s)
                                }
                                return n
                            }(e, n, r),
                            a = o.length,
                            l = e => {
                                let i = 0;
                                if (a > 1)
                                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                                let n = ei(t[i], t[i + 1], e);
                                return o[i](n)
                            };
                        return i ? e => l(tn(t[0], t[s - 1], e)) : l
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let r = ei(0, e, n);
                                t.push(ew(i, 1, r))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || em).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }
            let eI = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => V.update(e, !0),
                        stop: () => O(e),
                        now: () => L.isProcessing ? L.timestamp : t7.now()
                    }
                },
                eB = {
                    decay: ec,
                    inertia: ec,
                    tween: eF,
                    keyframes: eF,
                    spring: ed
                },
                eU = t => t / 100;
            class eN extends ee {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options, s = (null == n ? void 0 : n.KeyframeResolver) || tR;
                    this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: n = "keyframes",
                        repeat: r = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = t9(n) ? n : eB[n] || eF;
                    l !== eF && "number" != typeof t[0] && (e = eP(eU, e_(t[0], t[1])), t = [0, 100]);
                    let u = l({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === u.calculatedDuration && (u.calculatedDuration = ea(u));
                    let {
                        calculatedDuration: h
                    } = u, d = h + s;
                    return {
                        generator: u,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: d,
                        totalDuration: d * (r + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: r,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: h
                    } = i;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: d,
                        repeat: c,
                        repeatType: p,
                        repeatDelay: f,
                        onUpdate: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                        v = this.speed >= 0 ? g < 0 : g > u;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let y = this.currentTime,
                        x = r;
                    if (c) {
                        let t = Math.min(this.currentTime, u) / h,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i, f && (i -= f / h)) : "mirror" === p && (x = s)), y = tn(0, 1, i) * h
                    }
                    let b = v ? {
                        done: !1,
                        value: a[0]
                    } : x.next(y);
                    o && (b.value = o(b.value));
                    let {
                        done: P
                    } = b;
                    v || null === l || (P = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
                    return w && void 0 !== n && (b.value = E(a, this.options, n)), m && m(b.value), w && this.finish(), b
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? g(t.calculatedDuration) : 0
                }
                get time() {
                    return g(this.currentTime)
                }
                set time(t) {
                    t = m(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = g(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = eI,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let ez = new Set(["opacity", "clipPath", "filter", "transform"]);

            function eW(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let e$ = {
                    linearEasing: void 0
                },
                eK = function(t, e) {
                    let i = eW(t);
                    return () => {
                        var t;
                        return null !== (t = e$[e]) && void 0 !== t ? t : i()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                eY = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                eH = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: eY([0, .65, .55, 1]),
                    circOut: eY([.55, 0, 1, .45]),
                    backIn: eY([.31, .01, .66, -.59]),
                    backOut: eY([.33, 1.53, .69, .99])
                };

            function eq(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let eX = eW(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                eZ = {
                    anticipate: $,
                    backInOut: W,
                    circInOut: H
                };
            class eG extends ee {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: n,
                        keyframes: r
                    } = this.options;
                    this.resolver = new t6(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i, n;
                    let {
                        duration: r = 300,
                        times: s,
                        ease: o,
                        type: a,
                        motionValue: l,
                        name: u,
                        startTime: h
                    } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if ("string" == typeof o && eK() && o in eZ && (o = eZ[o]), t9((n = this.options).type) || "spring" === n.type || ! function t(e) {
                            return !!("function" == typeof e && eK() || !e || "string" == typeof e && (e in eH || eK()) || ev(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: n,
                            element: l,
                            ...u
                        } = this.options, h = function(t, e) {
                            let i = new eN({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                r = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) r.push((n = i.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: r,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), r = h.duration, s = h.times, o = h.ease, a = "keyframes"
                    }
                    let d = function(t, e, i, {
                        delay: n = 0,
                        duration: r = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a = "easeInOut",
                        times: l
                    } = {}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let h = function t(e, i) {
                            if (e) return "function" == typeof e && eK() ? en(e, i) : ev(e) ? eY(e) : Array.isArray(e) ? e.map(e => t(e, i) || eH.easeOut) : eH[e]
                        }(a, r);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(l.owner.current, u, t, { ...this.options,
                        duration: r,
                        times: s,
                        ease: o
                    });
                    return d.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? (eq(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        l.set(E(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: d,
                        duration: r,
                        times: s,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return g(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return g(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = m(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return j.Z;
                        let {
                            animation: i
                        } = e;
                        eq(i, t)
                    } else this.pendingTimeline = t;
                    return j.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: a,
                            element: l,
                            ...u
                        } = this.options, h = new eN({ ...u,
                            keyframes: i,
                            duration: n,
                            type: r,
                            ease: s,
                            times: o,
                            isGenerator: !0
                        }), d = m(this.time);
                        t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: n,
                        repeatType: r,
                        damping: s,
                        type: o
                    } = t;
                    return eX() && i && ez.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
                }
            }
            let eJ = eW(() => void 0 !== window.ScrollTimeline);
            class eQ {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t, e) {
                    let i = this.animations.map(i => eJ() && i.attachTimeline ? i.attachTimeline(t) : e(i));
                    return () => {
                        i.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let e0 = (t, e, i, n = {}, r, s) => o => {
                    let a = w(n, t) || {},
                        l = a.delay || n.delay || 0,
                        {
                            elapsed: u = 0
                        } = n;
                    u -= m(l);
                    let h = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...a,
                        delay: -u,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: s ? void 0 : r
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: r,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(a) && (h = { ...h,
                        ...P(t, h)
                    }), h.duration && (h.duration = m(h.duration)), h.repeatDelay && (h.repeatDelay = m(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
                    let d = !1;
                    if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0, 0 !== h.delay || (d = !0)), (T.current || S.skipAnimations) && (d = !0, h.duration = 0, h.delay = 0), d && !s && void 0 !== e.get()) {
                        let t = E(h.keyframes, a);
                        if (void 0 !== t) return V.update(() => {
                            h.onUpdate(t), h.onComplete()
                        }), new eQ([])
                    }
                    return !s && eG.supports(h) ? new eG(h) : new eN(h)
                },
                e1 = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                e2 = t => s(t) ? t[t.length - 1] || 0 : t;

            function e5(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function e3(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class e4 {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return e5(this.subscriptions, t), () => e3(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let n = this.subscriptions[r];
                                n && n(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let e6 = t => !isNaN(parseFloat(t)),
                e9 = {
                    current: void 0
                };
            class e8 {
                constructor(t, e = {}) {
                    this.version = "11.14.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = t7.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = t7.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = e6(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new e4);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), V.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return e9.current && e9.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = t7.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function e7(t, e) {
                return new e8(t, e)
            }
            let it = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                ie = "data-" + it("framerAppearId"),
                ii = t => !!(t && t.getVelocity);

            function ir(t, e) {
                let i = t.getValue("willChange");
                if (ii(i) && i.add) return i.add(e)
            }

            function is(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: r
            } = {}) {
                var s;
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e;
                n && (o = n);
                let u = [],
                    d = r && t.animationState && t.animationState.getState()[r];
                for (let e in l) {
                    let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null),
                        r = l[e];
                    if (void 0 === r || d && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(d, e)) continue;
                    let a = {
                            delay: i,
                            ...w(o || {}, e)
                        },
                        h = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = t.props[ie];
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, V);
                            null !== t && (a.startTime = t, h = !0)
                        }
                    }
                    ir(t, e), n.start(e0(e, n, r, t.shouldReduceMotion && f.has(e) ? {
                        type: !1
                    } : a, t, h));
                    let c = n.animation;
                    c && u.push(c)
                }
                return a && Promise.all(u).then(() => {
                    V.update(() => {
                        a && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: n = {},
                                ...r
                            } = h(t, e) || {};
                            for (let e in r = { ...r,
                                    ...i
                                }) {
                                let i = e2(r[e]);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, e7(i))
                            }
                        }(t, a)
                    })
                }), u
            }

            function io(t, e, i = {}) {
                var n;
                let r = h(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = r ? () => Promise.all(is(t, r, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(ia).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(io(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function ia(t, e) {
                return t.sortNodePosition(e)
            }
            let il = c.length,
                iu = [...d].reverse(),
                ih = d.length;

            function id(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function ic() {
                return {
                    animate: id(!0),
                    whileInView: id(),
                    whileHover: id(),
                    whileTap: id(),
                    whileDrag: id(),
                    whileFocus: id(),
                    exit: id()
                }
            }
            class ip {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class im extends ip {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => io(t, e, i)));
                                else if ("string" == typeof e) n = io(t, e, i);
                                else {
                                    let r = "function" == typeof e ? h(t, e, i.custom) : e;
                                    n = Promise.all(is(t, r, i))
                                }
                                return n.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = ic(),
                            n = !0,
                            l = e => (i, n) => {
                                var r;
                                let s = h(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    i = { ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function u(u) {
                            let {
                                props: h
                            } = t, d = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < il; t++) {
                                    let n = c[t],
                                        r = e.props[n];
                                    (a(r) || !1 === r) && (i[n] = r)
                                }
                                return i
                            }(t.parent) || {}, p = [], f = new Set, m = {}, g = 1 / 0;
                            for (let e = 0; e < ih; e++) {
                                var v;
                                let c = iu[e],
                                    y = i[c],
                                    x = void 0 !== h[c] ? h[c] : d[c],
                                    b = a(x),
                                    P = c === u ? y.isActive : null;
                                !1 === P && (g = e);
                                let w = x === d[c] && x !== h[c] && b;
                                if (w && n && t.manuallyAnimateOnMount && (w = !1), y.protectedKeys = { ...m
                                    }, !y.isActive && null === P || !x && !y.prevProp || r(x) || "boolean" == typeof x) continue;
                                let S = (v = y.prevProp, "string" == typeof x ? x !== v : !!Array.isArray(x) && !o(x, v)),
                                    T = S || c === u && y.isActive && !w && b || e > g && b,
                                    A = !1,
                                    E = Array.isArray(x) ? x : [x],
                                    M = E.reduce(l(c), {});
                                !1 === P && (M = {});
                                let {
                                    prevResolvedValues: C = {}
                                } = y, R = { ...C,
                                    ...M
                                }, j = e => {
                                    T = !0, f.has(e) && (A = !0, f.delete(e)), y.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in R) {
                                    let e = M[t],
                                        i = C[t];
                                    if (!m.hasOwnProperty(t))(s(e) && s(i) ? o(e, i) : e === i) ? void 0 !== e && f.has(t) ? j(t) : y.protectedKeys[t] = !0 : null != e ? j(t) : f.add(t)
                                }
                                y.prevProp = x, y.prevResolvedValues = M, y.isActive && (m = { ...m,
                                    ...M
                                }), n && t.blockInitialAnimation && (T = !1);
                                let k = !(w && S) || A;
                                T && k && p.push(...E.map(t => ({
                                    animation: t,
                                    options: {
                                        type: c
                                    }
                                })))
                            }
                            if (f.size) {
                                let e = {};
                                f.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        r = t.getValue(i);
                                    r && (r.liveStyle = !0), e[i] = null != n ? n : null
                                }), p.push({
                                    animation: e
                                })
                            }
                            let y = !!p.length;
                            return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1), n = !1, y ? e(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: u,
                            setActive: function(e, n) {
                                var r;
                                if (i[e].isActive === n) return Promise.resolve();
                                null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                }), i[e].isActive = n;
                                let s = u(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = ic(), n = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    r(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let ig = 0;
            class iv extends ip {
                constructor() {
                    super(...arguments), this.id = ig++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var iy = i(1904);

            function ix(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let ib = t => e => (0, iy.DJ)(e) && t(e, ix(e));

            function iP(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }

            function iw(t, e, i, n) {
                return iP(t, e, ib(i), n)
            }
            let iS = (t, e) => Math.abs(t - e);
            class iT {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: n,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = iM(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                r = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(iS(t.x, e.x) ** 2 + iS(t.y, e.y) ** 2) >= 3);
                            if (!n && !r) return;
                            let {
                                point: s
                            } = i, {
                                timestamp: o
                            } = L;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = iA(e, this.transformPagePoint), V.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: n,
                                resumeAnimation: r
                            } = this.handlers;
                            if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = iM("pointercancel" === t.type ? this.lastMoveEventInfo : iA(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, s), n && n(t, s)
                        }, !(0, iy.DJ)(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.contextWindow = n || window;
                    let s = iA(ix(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = L;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, iM(s, this.history)), this.removeListeners = eP(iw(this.contextWindow, "pointermove", this.handlePointerMove), iw(this.contextWindow, "pointerup", this.handlePointerUp), iw(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), O(this.updatePoint)
                }
            }

            function iA(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function iE(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iM({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: iE(t, iC(e)),
                    offset: iE(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = iC(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > m(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = g(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function iC(t) {
                return t[t.length - 1]
            }

            function iR(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function ij(t) {
                return t.max - t.min
            }

            function ik(t, e, i, n = .5) {
                t.origin = n, t.originPoint = ew(e.min, e.max, t.origin), t.scale = ij(i) / ij(e), t.translate = ew(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function iD(t, e, i, n) {
                ik(t.x, e.x, i.x, n ? n.originX : void 0), ik(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function iV(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + ij(e)
            }

            function iO(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + ij(e)
            }

            function iL(t, e, i) {
                iO(t.x, e.x, i.x), iO(t.y, e.y, i.y)
            }

            function i_(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function iF(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function iI(t, e, i) {
                return {
                    min: iB(t, e),
                    max: iB(t, i)
                }
            }

            function iB(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let iU = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                iN = () => ({
                    x: iU(),
                    y: iU()
                }),
                iz = () => ({
                    min: 0,
                    max: 0
                }),
                iW = () => ({
                    x: iz(),
                    y: iz()
                });

            function i$(t) {
                return [t("x"), t("y")]
            }

            function iK({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function iY(t) {
                return void 0 === t || 1 === t
            }

            function iH({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !iY(t) || !iY(e) || !iY(i)
            }

            function iq(t) {
                return iH(t) || iX(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function iX(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function iZ(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function iG(t, e = 0, i = 1, n, r) {
                t.min = iZ(t.min, e, i, n, r), t.max = iZ(t.max, e, i, n, r)
            }

            function iJ(t, {
                x: e,
                y: i
            }) {
                iG(t.x, e.translate, e.scale, e.originPoint), iG(t.y, i.translate, i.scale, i.originPoint)
            }

            function iQ(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function i0(t, e, i, n, r = .5) {
                let s = ew(t.min, t.max, r);
                iG(t, e, i, s, n)
            }

            function i1(t, e) {
                i0(t.x, e.x, e.scaleX, e.scale, e.originX), i0(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function i2(t, e) {
                return iK(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let i5 = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                i3 = new WeakMap;
            class i4 {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iW(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new iT(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(ix(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, iy.KV)(i), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), i$(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tu.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = ij(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && V.postRender(() => r(t, e)), ir(this.visualElement, "transform");
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => i$(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: i5(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && V.postRender(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !i6(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? ew(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? ew(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, r = this.constraints;
                    e && iR(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: i_(t.x, i, r),
                            y: i_(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: iI(t, "left", "right"),
                            y: iI(t, "top", "bottom")
                        }
                    }(i), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && i$(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !iR(e)) return !1;
                    let n = e.current;
                    (0, X.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = i2(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (iQ(n.x, r.offset.x), iQ(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: iF((t = r.layout.layoutBox).x, s.x),
                            y: iF(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = iK(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(i$(o => {
                        if (!i6(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return ir(this.visualElement, t), i.start(e0(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    i$(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    i$(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    i$(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!i6(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - ew(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!iR(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    i$(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = ij(t),
                                    r = ij(e);
                                return r > n ? i = ei(e.min, e.max - n, t.min) : n > r && (i = ei(t.min, t.max - r, e.min)), tn(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), i$(e => {
                        if (!i6(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set(ew(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    i3.set(this.visualElement, this);
                    let t = iw(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            iR(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        n = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), V.read(e);
                    let r = iP(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (i$(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function i6(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class i9 extends ip {
                constructor(t) {
                    super(t), this.removeGroupControls = j.Z, this.removeListeners = j.Z, this.controls = new i4(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || j.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let i8 = t => (e, i) => {
                t && V.postRender(() => t(e, i))
            };
            class i7 extends ip {
                constructor() {
                    super(...arguments), this.removePointerDownListener = j.Z
                }
                onPointerDown(t) {
                    this.session = new iT(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: i5(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: i8(t),
                        onStart: i8(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, n && V.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = iw(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var nt = i(7437),
                ne = i(2265),
                ni = i(4252),
                nn = i(8881);
            let nr = (0, ne.createContext)({}),
                ns = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function no(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let na = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!th.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let i = no(t, e.target.x),
                            n = no(t, e.target.y);
                        return `${i}% ${n}%`
                    }
                },
                nl = {},
                {
                    schedule: nu,
                    cancel: nh
                } = D(queueMicrotask, !1);
            class nd extends ne.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(nl, np), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), ns.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || V.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), nu.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nc(t) {
                let [e, i] = function() {
                    let t = (0, ne.useContext)(ni.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, r = (0, ne.useId)();
                    (0, ne.useEffect)(() => n(r), []);
                    let s = (0, ne.useCallback)(() => i && i(r), [r, i]);
                    return !e && i ? [!1, s] : [!0]
                }(), n = (0, ne.useContext)(nn.p);
                return (0, nt.jsx)(nd, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, ne.useContext)(nr),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let np = {
                    borderRadius: { ...na,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: na,
                    borderTopRightRadius: na,
                    borderBottomLeftRadius: na,
                    borderBottomRightRadius: na,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let n = tX.parse(t);
                            if (n.length > 5) return t;
                            let r = tX.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            n[0 + s] /= o, n[1 + s] /= a;
                            let l = ew(o, a, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                        }
                    }
                },
                nf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nm = nf.length,
                ng = t => "string" == typeof t ? parseFloat(t) : t,
                nv = t => "number" == typeof t || th.test(t);

            function ny(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let nx = nP(0, .5, Y),
                nb = nP(.5, .95, j.Z);

            function nP(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i(ei(t, e, n))
            }

            function nw(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nS(t, e) {
                nw(t.x, e.x), nw(t.y, e.y)
            }

            function nT(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function nA(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function nE(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (tu.test(e) && (e = parseFloat(e), e = ew(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = ew(s.min, s.max, n);
                    t === s && (a -= e), t.min = nA(t.min, e, i, a, r), t.max = nA(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let nM = ["x", "scaleX", "originX"],
                nC = ["y", "scaleY", "originY"];

            function nR(t, e, i, n) {
                nE(t.x, e, nM, i ? i.x : void 0, n ? n.x : void 0), nE(t.y, e, nC, i ? i.y : void 0, n ? n.y : void 0)
            }

            function nj(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function nk(t) {
                return nj(t.x) && nj(t.y)
            }

            function nD(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function nV(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function nO(t, e) {
                return nV(t.x, e.x) && nV(t.y, e.y)
            }

            function nL(t) {
                return ij(t.x) / ij(t.y)
            }

            function n_(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class nF {
                constructor() {
                    this.members = []
                }
                add(t) {
                    e5(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (e3(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let nI = (t, e) => t.depth - e.depth;
            class nB {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    e5(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    e3(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(nI), this.isDirty = !1, this.children.forEach(t)
                }
            }

            function nU(t) {
                let e = ii(t) ? t.get() : t;
                return e1(e) ? e.toValue() : e
            }
            let nN = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                nz = "undefined" != typeof window && void 0 !== window.MotionDebug,
                nW = ["", "X", "Y", "Z"],
                n$ = {
                    visibility: "hidden"
                },
                nK = 0;

            function nY(t, e, i, n) {
                let {
                    latestValues: r
                } = e;
                r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function nH({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = nK++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, nz && (nN.totalNodes = nN.resolvedTargetDeltas = nN.recalculatedProjection = 0), this.nodes.forEach(nZ), this.nodes.forEach(n5), this.nodes.forEach(n3), this.nodes.forEach(nG), nz && window.MotionDebug.record(nN)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nB)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new e4), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = t7.now(),
                                        n = ({
                                            timestamp: e
                                        }) => {
                                            let r = e - i;
                                            r >= 250 && (O(n), t(r - 250))
                                        };
                                    return V.read(n, !0), () => O(n)
                                }(n, 0), ns.hasAnimatedSinceResize && (ns.hasAnimatedSinceResize = !1, this.nodes.forEach(n2))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || rt,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !nO(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...w(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || n2(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, O(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(n4), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let n = i.props[ie];
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", V, !(t || i))
                                }
                                let {
                                    parent: r
                                } = e;
                                r && !r.hasCheckedOptimisedAppear && t(r)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nQ);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(n0), this.isUpdating = !1, this.nodes.forEach(n1), this.nodes.forEach(nq), this.nodes.forEach(nX), this.clearAllSnapshots();
                        let t = t7.now();
                        L.delta = tn(0, 1e3 / 60, t - L.timestamp), L.timestamp = t, L.isProcessing = !0, _.update.process(L), _.preRender.process(L), _.render.process(L), L.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, nu.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(nJ), this.sharedNodes.forEach(n6)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        V.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = iW(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !nk(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || iq(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), rn((e = n).x), rn(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return iW();
                        let i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rs))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (iQ(i.x, t.offset.x), iQ(i.y, t.offset.y))
                        }
                        return i
                    }
                    removeElementScroll(t) {
                        var e;
                        let i = iW();
                        if (nS(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            n !== this.root && r && s.layoutScroll && (r.wasRoot && nS(i, t), iQ(i.x, r.offset.x), iQ(i.y, r.offset.y))
                        }
                        return i
                    }
                    applyTransform(t, e = !1) {
                        let i = iW();
                        nS(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && i1(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), iq(n.latestValues) && i1(i, n.latestValues)
                        }
                        return iq(this.latestValues) && i1(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = iW();
                        nS(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !iq(i.latestValues)) continue;
                            iH(i.latestValues) && i.updateSnapshot();
                            let n = iW();
                            nS(n, i.measurePageBox()), nR(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return iq(this.latestValues) && nR(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = L.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iW(), this.relativeTargetOrigin = iW(), iL(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nS(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = iW(), this.targetWithTransforms = iW()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, iV(i.x, n.x, r.x), iV(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nS(this.target, this.layout.layoutBox), iJ(this.target, this.targetDelta)) : nS(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iW(), this.relativeTargetOrigin = iW(), iL(this.relativeTargetOrigin, this.target, t.target), nS(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                nz && nN.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || iH(this.parent.latestValues) || iX(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === L.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        nS(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = r.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && i1(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, iJ(t, s)), n && iq(r.latestValues) && i1(t, r.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = iW());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (nT(this.prevProjectionDelta.x, this.projectionDelta.x), nT(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), iD(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === o && this.treeScale.y === a && n_(this.projectionDelta.x, this.prevProjectionDelta.x) && n_(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), nz && nN.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = iN(), this.projectionDelta = iN(), this.projectionDeltaWithTransform = iN()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = iN();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = iW(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            h = !u || u.members.length <= 1,
                            d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(n7));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (n9(o.x, t.x, n), n9(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, c, p, f;
                                iL(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, n8(p.x, f.x, a.x, n), n8(p.y, f.y, a.y, n), i && (u = this.relativeTarget, c = i, nD(u.x, c.x) && nD(u.y, c.y)) && (this.isProjectionDirty = !1), i || (i = iW()), nS(i, this.relativeTarget)
                            }
                            l && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = ew(0, void 0 !== i.opacity ? i.opacity : 1, nx(n)), t.opacityExit = ew(void 0 !== e.opacity ? e.opacity : 1, 0, nb(n))) : s && (t.opacity = ew(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < nm; r++) {
                                    let s = `border${nf[r]}Radius`,
                                        o = ny(e, s),
                                        a = ny(i, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || nv(o) === nv(a) ? (t[s] = Math.max(ew(ng(o), ng(a), n), 0), (tu.test(a) || tu.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || i.rotate) && (t.rotate = ew(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (O(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
                            ns.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = ii(0) ? 0 : e7(0);
                                return n.start(e0("", n, 1e3, i)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && rr(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || iW();
                                let e = ij(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = ij(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            nS(e, i), i1(e, r), iD(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nF), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let n = {};
                        i.z && nY("z", t, n, this.animationValues);
                        for (let e = 0; e < nW.length; e++) nY(`rotate${nW[e]}`, t, n, this.animationValues), nY(`skew${nW[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return n$;
                        let n = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = nU(null == t ? void 0 : t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = nU(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !iq(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, i) {
                            let n = "",
                                r = t.x.translate / e.x,
                                s = t.y.translate / e.y,
                                o = (null == i ? void 0 : i.z) || 0;
                            if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: r,
                                    rotateY: s,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, nl) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = nl[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? nU(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(nQ), this.root.sharedNodes.clear()
                    }
                }
            }

            function nq(t) {
                t.updateLayout()
            }

            function nX(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? i$(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = ij(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : rr(r, i.layoutBox, e) && i$(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = ij(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = iN();
                    iD(o, e, i.layoutBox);
                    let a = iN();
                    s ? iD(a, t.applyTransform(n, !0), i.measuredBox) : iD(a, e, i.layoutBox);
                    let l = !nk(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = iW();
                                iL(o, i.layoutBox, r.layoutBox);
                                let a = iW();
                                iL(a, e, s.layoutBox), nO(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function nZ(t) {
                nz && nN.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function nG(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function nJ(t) {
                t.clearSnapshot()
            }

            function nQ(t) {
                t.clearMeasurements()
            }

            function n0(t) {
                t.isLayoutDirty = !1
            }

            function n1(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function n2(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function n5(t) {
                t.resolveTargetDelta()
            }

            function n3(t) {
                t.calcProjection()
            }

            function n4(t) {
                t.resetSkewAndRotation()
            }

            function n6(t) {
                t.removeLeadSnapshot()
            }

            function n9(t, e, i) {
                t.translate = ew(e.translate, 0, i), t.scale = ew(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function n8(t, e, i, n) {
                t.min = ew(e.min, i.min, n), t.max = ew(e.max, i.max, n)
            }

            function n7(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let rt = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                re = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                ri = re("applewebkit/") && !re("chrome/") ? Math.round : j.Z;

            function rn(t) {
                t.min = ri(t.min), t.max = ri(t.max)
            }

            function rr(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nL(e) - nL(i)))
            }

            function rs(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let ro = nH({
                    attachResizeListener: (t, e) => iP(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ra = {
                    current: void 0
                },
                rl = nH({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ra.current) {
                            let t = new ro({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ra.current = t
                        }
                        return ra.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function ru(t, e, i) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let r = n["onHover" + i];
                r && V.postRender(() => r(e, ix(e)))
            }
            class rh extends ip {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = (0, iy.Mr)(t, t => (ru(this.node, t, "Start"), t => ru(this.node, t, "End"))))
                }
                unmount() {}
            }
            class rd extends ip {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = eP(iP(this.node.current, "focus", () => this.onFocus()), iP(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function rc(t, e, i) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let r = n["onTap" + ("End" === i ? "" : i)];
                r && V.postRender(() => r(e, ix(e)))
            }
            class rp extends ip {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = (0, iy.OD)(t, t => (rc(this.node, t, "Start"), (t, {
                        success: e
                    }) => rc(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let rf = new WeakMap,
                rm = new WeakMap,
                rg = t => {
                    let e = rf.get(t.target);
                    e && e(t)
                },
                rv = t => {
                    t.forEach(rg)
                },
                ry = {
                    some: 0,
                    all: 1
                };
            class rx extends ip {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: r
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : ry[n]
                    };
                    return function(t, e, i) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            rm.has(i) || rm.set(i, {});
                            let n = rm.get(i),
                                r = JSON.stringify(e);
                            return n[r] || (n[r] = new IntersectionObserver(rv, {
                                root: t,
                                ...e
                            })), n[r]
                        }(e);
                        return rf.set(t, i), n.observe(t), () => {
                            rf.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? i : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            var rb = i(5750);
            let rP = (0, ne.createContext)({});
            var rw = i(1534);
            let rS = (0, ne.createContext)({
                strict: !1
            });

            function rT(t) {
                return r(t.animate) || c.some(e => a(t[e]))
            }

            function rA(t) {
                return !!(rT(t) || t.variants)
            }

            function rE(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let rM = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                rC = {};
            for (let t in rM) rC[t] = {
                isEnabled: e => rM[t].some(t => !!e[t])
            };
            var rR = i(4563);
            let rj = Symbol.for("motionComponentSymbol"),
                rk = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function rD(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (rk.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }

            function rV(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let rO = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function rL(t, e, i, n) {
                for (let i in rV(t, e, void 0, n), e.attrs) t.setAttribute(rO.has(i) ? i : it(i), e.attrs[i])
            }

            function r_(t, {
                layout: e,
                layoutId: i
            }) {
                return f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!nl[t] || "opacity" === t)
            }

            function rF(t, e, i) {
                var n;
                let {
                    style: r
                } = t, s = {};
                for (let o in r)(ii(r[o]) || e.style && ii(e.style[o]) || r_(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
                return s
            }

            function rI(t, e, i) {
                let n = rF(t, e, i);
                for (let i in t)(ii(t[i]) || ii(e[i])) && (n[-1 !== p.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return n
            }
            var rB = i(3576);
            let rU = t => (e, i) => {
                    let n = (0, ne.useContext)(rP),
                        s = (0, ne.useContext)(ni.O),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, n, s, o) {
                            let a = {
                                latestValues: function(t, e, i, n) {
                                    let s = {},
                                        o = n(t, {});
                                    for (let t in o) s[t] = nU(o[t]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = t, h = rT(t), d = rA(t);
                                    e && d && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
                                    let c = !!i && !1 === i.initial,
                                        p = (c = c || !1 === a) ? l : a;
                                    if (p && "boolean" != typeof p && !r(p)) {
                                        let e = Array.isArray(p) ? p : [p];
                                        for (let i = 0; i < e.length; i++) {
                                            let n = u(t, e[i]);
                                            if (n) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...i
                                                } = n;
                                                for (let t in i) {
                                                    let e = i[t];
                                                    if (Array.isArray(e)) {
                                                        let t = c ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (s[t] = e)
                                                }
                                                for (let e in t) s[e] = t[e]
                                            }
                                        }
                                    }
                                    return s
                                }(n, s, o, t),
                                renderState: e()
                            };
                            return i && (a.mount = t => i(n, t, a)), a
                        })(t, e, n, s);
                    return i ? o() : (0, rB.h)(o)
                },
                rN = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                rz = () => ({ ...rN(),
                    attrs: {}
                }),
                rW = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                r$ = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                rK = p.length;

            function rY(t, e, i) {
                let {
                    style: n,
                    vars: r,
                    transformOrigin: s
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (f.has(t)) {
                        o = !0;
                        continue
                    }
                    if (J(t)) {
                        r[t] = i;
                        continue
                    } {
                        let e = rW(i, t1[t]);
                        t.startsWith("origin") ? (a = !0, s[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                        let n = "",
                            r = !0;
                        for (let s = 0; s < rK; s++) {
                            let o = p[s],
                                a = t[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                                let t = rW(a, t1[o]);
                                if (!l) {
                                    r = !1;
                                    let e = r$[o] || o;
                                    n += `${e}(${t}) `
                                }
                                i && (e[o] = t)
                            }
                        }
                        return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
                    }(e, t.transform, i) : n.transform && (n.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = s;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }

            function rH(t, e, i) {
                return "string" == typeof t ? t : th.transform(e + i * t)
            }
            let rq = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                rX = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function rZ(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, d) {
                if (rY(t, u, d), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: c,
                    style: p,
                    dimensions: f
                } = t;
                c.transform && (f && (p.transform = c.transform), delete c.transform), f && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                    let n = rH(e, t.x, t.width),
                        r = rH(i, t.y, t.height);
                    return `${n} ${r}`
                }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (c.x = e), void 0 !== i && (c.y = i), void 0 !== n && (c.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? rq : rX;
                    t[s.offset] = th.transform(-n);
                    let o = th.transform(e),
                        a = th.transform(i);
                    t[s.array] = `${o} ${a}`
                }(c, o, a, l, !1)
            }
            let rG = t => "string" == typeof t && "svg" === t.toLowerCase(),
                rJ = {
                    useVisualState: rU({
                        scrapeMotionValuesFromProps: rI,
                        createRenderState: rz,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            V.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), V.render(() => {
                                rZ(i, n, rG(e.tagName), t.transformTemplate), rL(e, i)
                            })
                        }
                    })
                },
                rQ = {
                    useVisualState: rU({
                        scrapeMotionValuesFromProps: rF,
                        createRenderState: rN
                    })
                };

            function r0(t, e, i) {
                for (let n in e) ii(e[n]) || r_(n, i) || (t[n] = e[n])
            }
            let r1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function r2(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || r1.has(t)
            }
            let r5 = t => !r2(t);
            try {
                (M = require("@emotion/is-prop-valid").default) && (r5 = t => t.startsWith("on") ? !r2(t) : M(t))
            } catch (t) {}
            let r3 = {
                    current: null
                },
                r4 = {
                    current: !1
                },
                r6 = new WeakMap,
                r9 = [...tw, tU, tX],
                r8 = t => r9.find(tP(t)),
                r7 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class st {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    blockInitialAnimation: r,
                    visualState: s
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tR, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = t7.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, V.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = rT(e), this.isVariantNode = rA(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && ii(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, r6.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), r4.current || function() {
                        if (r4.current = !0, rR.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => r3.current = t.matches;
                                t.addListener(e), e()
                            } else r3.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r3.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in r6.delete(this.current), this.projection && this.projection.unmount(), O(this.notifyUpdate), O(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = f.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && V.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        r(), s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in rC) {
                        let e = rC[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iW()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < r7.length; e++) {
                        let i = r7[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let r = e[n],
                                s = i[n];
                            if (ii(r)) t.addValue(n, r);
                            else if (ii(s)) t.addValue(n, e7(r, {
                                owner: t
                            }));
                            else if (s !== r) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, e7(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = e7(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && (Z(n) || q(n)) ? n = parseFloat(n) : !r8(n) && tX.test(e) && (n = t3(t, e)), this.setBaseTarget(t, ii(n) ? n.get() : n)), ii(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let r = u(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        r && (i = r[t])
                    }
                    if (n && void 0 !== i) return i;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || ii(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new e4), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class se extends st {
                constructor() {
                    super(...arguments), this.KeyframeResolver = t6
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    ii(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class si extends se {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = rV
                }
                readValueFromInstance(t, e) {
                    if (f.has(e)) {
                        let t = t5(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = (J(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return i2(t, e)
                }
                build(t, e, i) {
                    rY(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rF(t, e, i)
                }
            }
            class sn extends se {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = iW
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (f.has(e)) {
                        let t = t5(e);
                        return t && t.default || 0
                    }
                    return e = rO.has(e) ? e : it(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rI(t, e, i)
                }
                build(t, e, i) {
                    rZ(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    rL(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = rG(t.tagName), super.mount(t)
                }
            }
            let sr = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((C = {
                animation: {
                    Feature: im
                },
                exit: {
                    Feature: iv
                },
                inView: {
                    Feature: rx
                },
                tap: {
                    Feature: rp
                },
                focus: {
                    Feature: rd
                },
                hover: {
                    Feature: rh
                },
                pan: {
                    Feature: i7
                },
                drag: {
                    Feature: i9,
                    ProjectionNode: rl,
                    MeasureLayout: nc
                },
                layout: {
                    ProjectionNode: rl,
                    MeasureLayout: nc
                }
            }, R = (t, e) => rD(t) ? new sn(e) : new si(e, {
                allowProjection: t !== ne.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    let {
                        preloadedFeatures: e,
                        createVisualElement: i,
                        useRender: n,
                        useVisualState: r,
                        Component: s
                    } = t;
                    e && function(t) {
                        for (let e in t) rC[e] = { ...rC[e],
                            ...t[e]
                        }
                    }(e);
                    let o = (0, ne.forwardRef)(function(t, e) {
                        var o;
                        let l;
                        let u = { ...(0, ne.useContext)(rb._),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, ne.useContext)(nn.p).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: h
                            } = u,
                            d = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if (rT(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || a(e) ? e : void 0,
                                            animate: a(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, ne.useContext)(rP));
                                return (0, ne.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [rE(e), rE(i)])
                            }(t),
                            c = r(t, h);
                        if (!h && rR.j) {
                            (0, ne.useContext)(rS).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = rC;
                                if (!e && !i) return {};
                                let n = { ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(u);
                            l = t.MeasureLayout, d.visualElement = function(t, e, i, n, r) {
                                var s, o;
                                let {
                                    visualElement: a
                                } = (0, ne.useContext)(rP), l = (0, ne.useContext)(rS), u = (0, ne.useContext)(ni.O), h = (0, ne.useContext)(rb._).reducedMotion, d = (0, ne.useRef)(null);
                                n = n || l.renderer, !d.current && n && (d.current = n(t, {
                                    visualState: e,
                                    parent: a,
                                    props: i,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: h
                                }));
                                let c = d.current,
                                    p = (0, ne.useContext)(nr);
                                c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                                    let {
                                        layoutId: r,
                                        layout: s,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: r,
                                        layout: s,
                                        alwaysMeasureLayout: !!o || a && iR(a),
                                        visualElement: t,
                                        animationType: "string" == typeof s ? s : "both",
                                        initialPromotionConfig: n,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(d.current, i, r, p);
                                let f = (0, ne.useRef)(!1);
                                (0, ne.useInsertionEffect)(() => {
                                    c && f.current && c.update(i, u)
                                });
                                let m = i[ie],
                                    g = (0, ne.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                                return (0, rw.L)(() => {
                                    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), nu.render(c.render), g.current && c.animationState && c.animationState.animateChanges())
                                }), (0, ne.useEffect)(() => {
                                    c && (!g.current && c.animationState && c.animationState.animateChanges(), g.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                    }), g.current = !1))
                                }), c
                            }(s, c, u, i, t.ProjectionNode)
                        }
                        return (0, nt.jsxs)(rP.Provider, {
                            value: d,
                            children: [l && d.visualElement ? (0, nt.jsx)(l, {
                                visualElement: d.visualElement,
                                ...u
                            }) : null, n(s, t, (o = d.visualElement, (0, ne.useCallback)(t => {
                                t && c.mount && c.mount(t), o && (t ? o.mount(t) : o.unmount()), e && ("function" == typeof e ? e(t) : iR(e) && (e.current = t))
                            }, [o])), c, h, d.visualElement)]
                        })
                    });
                    return o[rj] = s, o
                }({ ...rD(t) ? rJ : rQ,
                    preloadedFeatures: C,
                    useRender: function(t = !1) {
                        return (e, i, n, {
                            latestValues: r
                        }, s) => {
                            let o = (rD(e) ? function(t, e, i, n) {
                                    let r = (0, ne.useMemo)(() => {
                                        let i = rz();
                                        return rZ(i, e, rG(n), t.transformTemplate), { ...i.attrs,
                                            style: { ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        r0(e, t.style, t), r.style = { ...e,
                                            ...r.style
                                        }
                                    }
                                    return r
                                } : function(t, e) {
                                    let i = {},
                                        n = function(t, e) {
                                            let i = t.style || {},
                                                n = {};
                                            return r0(n, i, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, ne.useMemo)(() => {
                                                    let i = rN();
                                                    return rY(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
                                })(i, r, s, e),
                                a = function(t, e, i) {
                                    let n = {};
                                    for (let r in t)("values" !== r || "object" != typeof t.values) && (r5(r) || !0 === i && r2(r) || !e && !r2(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                    return n
                                }(i, "string" == typeof e, t),
                                l = e !== ne.Fragment ? { ...a,
                                    ...o,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = i,
                                h = (0, ne.useMemo)(() => ii(u) ? u.get() : u, [u]);
                            return (0, ne.createElement)(e, { ...l,
                                children: h
                            })
                        }
                    }(e),
                    createVisualElement: R,
                    Component: t
                })
            }))
        },
        4563: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof window
        },
        3576: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return r
                }
            });
            var n = i(2265);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        1534: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(2265);
            let r = i(4563).j ? n.useLayoutEffect : n.useEffect
        },
        1904: function(t, e, i) {
            i.d(e, {
                Mr: function() {
                    return a
                },
                DJ: function() {
                    return l
                },
                OD: function() {
                    return g
                },
                IG: function() {
                    return r
                },
                KV: function() {
                    return v
                }
            });
            let n = {
                x: !1,
                y: !1
            };

            function r(t, e, i) {
                var n;
                if (t instanceof Element) return [t];
                if ("string" == typeof t) {
                    let r = document;
                    e && (r = e.current);
                    let s = null !== (n = null == i ? void 0 : i[t]) && void 0 !== n ? n : r.querySelectorAll(t);
                    return s ? Array.from(s) : []
                }
                return Array.from(t)
            }

            function s(t, e) {
                let i = r(t),
                    n = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: n.signal
                }, () => n.abort()]
            }

            function o(t) {
                return e => {
                    "touch" === e.pointerType || n.x || n.y || t(e)
                }
            }

            function a(t, e, i = {}) {
                let [n, r, a] = s(t, i), l = o(t => {
                    let {
                        target: i
                    } = t, n = e(t);
                    if (!n || !i) return;
                    let s = o(t => {
                        n(t), i.removeEventListener("pointerleave", s)
                    });
                    i.addEventListener("pointerleave", s, r)
                });
                return n.forEach(t => {
                    t.addEventListener("pointerenter", l, r)
                }), a
            }
            let l = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
                u = new WeakSet;

            function h(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function d(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let c = (t, e) => {
                    let i = t.currentTarget;
                    if (!i) return;
                    let n = h(() => {
                        if (u.has(i)) return;
                        d(i, "down");
                        let t = h(() => {
                            d(i, "up")
                        });
                        i.addEventListener("keyup", t, e), i.addEventListener("blur", () => d(i, "cancel"), e)
                    });
                    i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
                },
                p = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                f = (t, e) => !!e && (t === e || f(t, e.parentElement));

            function m(t) {
                return l(t) && !(n.x || n.y)
            }

            function g(t, e, i = {}) {
                let [n, r, o] = s(t, i), a = t => {
                    let n = t.currentTarget;
                    if (!m(t) || u.has(n)) return;
                    u.add(n);
                    let s = e(t),
                        o = (t, e) => {
                            window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), m(t) && u.has(n) && (u.delete(n), s && s(t, {
                                success: e
                            }))
                        },
                        a = t => {
                            o(t, i.useGlobalTarget || f(n, t.target))
                        },
                        l = t => {
                            o(t, !1)
                        };
                    window.addEventListener("pointerup", a, r), window.addEventListener("pointercancel", l, r)
                };
                return n.forEach(t => {
                    p.has(t.tagName) || -1 !== t.tabIndex || (t.tabIndex = 0), (i.useGlobalTarget ? window : t).addEventListener("pointerdown", a, r), t.addEventListener("focus", t => c(t, r), r)
                }), o
            }

            function v(t) {
                return "x" === t || "y" === t ? n[t] ? null : (n[t] = !0, () => {
                    n[t] = !1
                }) : n.x || n.y ? null : (n.x = n.y = !0, () => {
                    n.x = n.y = !1
                })
            }
        },
        2035: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(6277);
            let r = n.Z,
                s = n.Z
        },
        6277: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        }
    }
]);