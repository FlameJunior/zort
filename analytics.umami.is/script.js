! function() {
    "use strict";
    (t => {
        const {
            screen: {
                width: e,
                height: a
            },
            navigator: {
                language: r
            },
            location: n,
            document: i,
            history: c
        } = t, {
            hostname: s,
            href: o,
            origin: u
        } = n, {
            currentScript: l,
            referrer: d
        } = i, h = o.startsWith("data:") ? void 0 : t.localStorage;
        if (!l) return;
        const m = "data-",
            f = l.getAttribute.bind(l),
            p = f(m + "website-id"),
            g = f(m + "host-url"),
            y = f(m + "tag"),
            b = "false" !== f(m + "auto-track"),
            v = "true" === f(m + "exclude-search"),
            w = f(m + "domains") || "",
            S = w.split(",").map((t => t.trim())),
            N = `${(g||"https://api-gateway.umami.dev"||l.src.split("/").slice(0,-1).join("/")).replace(/\/$/,"")}/api/send`,
            T = `${e}x${a}`,
            A = /data-umami-event-([\w-_]+)/,
            x = m + "umami-event",
            O = 300,
            U = t => {
                if (t) {
                    try {
                        const e = decodeURI(t);
                        if (e !== t) return e
                    } catch (e) {
                        return t
                    }
                    return encodeURI(t)
                }
            },
            j = t => {
                try {
                    const {
                        pathname: e,
                        search: a,
                        hash: r
                    } = new URL(t, n.href);
                    t = e + a + r
                } catch (t) {}
                return v ? t.split("?")[0] : t
            },
            k = () => ({
                website: p,
                hostname: s,
                screen: T,
                language: r,
                title: U(q),
                url: U(W),
                referrer: U(_),
                tag: y || void 0
            }),
            E = (t, e, a) => {
                a && (_ = W, W = j(a.toString()), W !== _ && setTimeout(K, O))
            },
            L = () => !p || h && h.getItem("umami.disabled") || w && !S.includes(s),
            $ = async (t, e = "event") => {
                if (L()) return;
                const a = {
                    "Content-Type": "application/json"
                };
                void 0 !== B && (a["x-umami-cache"] = B);
                try {
                    const r = await fetch(N, {
                            method: "POST",
                            body: JSON.stringify({
                                type: e,
                                payload: t
                            }),
                            headers: a
                        }),
                        n = await r.text();
                    return B = n
                } catch (t) {}
            },
            I = () => {
                D || (K(), (() => {
                    const t = (t, e, a) => {
                        const r = t[e];
                        return (...e) => (a.apply(null, e), r.apply(t, e))
                    };
                    c.pushState = t(c, "pushState", E), c.replaceState = t(c, "replaceState", E)
                })(), (() => {
                    const t = new MutationObserver((([t]) => {
                            q = t && t.target ? t.target.text : void 0
                        })),
                        e = i.querySelector("head > title");
                    e && t.observe(e, {
                        subtree: !0,
                        characterData: !0,
                        childList: !0
                    })
                })(), i.addEventListener("click", (async t => {
                    const e = t => ["BUTTON", "A"].includes(t),
                        a = async t => {
                            const e = t.getAttribute.bind(t),
                                a = e(x);
                            if (a) {
                                const r = {};
                                return t.getAttributeNames().forEach((t => {
                                    const a = t.match(A);
                                    a && (r[a[1]] = e(t))
                                })), K(a, r)
                            }
                        },
                        r = t.target,
                        i = e(r.tagName) ? r : ((t, a) => {
                            let r = t;
                            for (let t = 0; t < a; t++) {
                                if (e(r.tagName)) return r;
                                if (r = r.parentElement, !r) return null
                            }
                        })(r, 10);
                    if (!i) return a(r); {
                        const {
                            href: e,
                            target: r
                        } = i, c = i.getAttribute(x);
                        if (c)
                            if ("A" === i.tagName) {
                                const s = "_blank" === r || t.ctrlKey || t.shiftKey || t.metaKey || t.button && 1 === t.button;
                                if (c && e) return s || t.preventDefault(), a(i).then((() => {
                                    s || (n.href = e)
                                }))
                            } else if ("BUTTON" === i.tagName) return a(i)
                    }
                }), !0), D = !0)
            },
            K = (t, e) => $("string" == typeof t ? { ...k(),
                name: t,
                data: "object" == typeof e ? e : void 0
            } : "object" == typeof t ? t : "function" == typeof t ? t(k()) : k()),
            R = t => $({ ...k(),
                data: t
            }, "identify");
        t.umami || (t.umami = {
            track: K,
            identify: R
        });
        let B, D, W = j(o),
            _ = d.startsWith(u) ? "" : d,
            q = i.title;
        b && !L() && ("complete" === i.readyState ? I() : i.addEventListener("readystatechange", I, !0))
    })(window)
}();