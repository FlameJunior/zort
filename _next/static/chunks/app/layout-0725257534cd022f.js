(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        3854: function(e, t, a) {
            Promise.resolve().then(a.t.bind(a, 7960, 23)), Promise.resolve().then(a.bind(a, 7483)), Promise.resolve().then(a.bind(a, 4888)), Promise.resolve().then(a.bind(a, 8087)), Promise.resolve().then(a.bind(a, 7239)), Promise.resolve().then(a.t.bind(a, 8003, 23)), Promise.resolve().then(a.t.bind(a, 630, 23)), Promise.resolve().then(a.t.bind(a, 6139, 23))
        },
        7483: function(e, t, a) {
            "use strict";
            var i = a(7437),
                s = a(4936),
                n = a(8614),
                l = a(3145),
                r = a(7648),
                o = a(2265),
                c = a(7985);
            t.default = () => {
                let [e, t] = (0, o.useState)(!1), [a, d] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    let e = () => {
                        window.scrollY > 50 ? t(!0) : t(!1)
                    };
                    return e(), window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []);
                let m = [{
                        name: "Chronicles",
                        href: "#chronicles"
                    }, {
                        name: "Crystal Matrix",
                        href: "#crystal-matrix"
                    }, {
                        name: "Dimensional Access",
                        href: "#dimensional-access"
                    }],
                    u = () => {
                        d(!1)
                    };
                return (0, i.jsx)(s.E.nav, {
                    initial: {
                        y: -100
                    },
                    animate: {
                        y: 0
                    },
                    className: "fixed top-0 w-full z-50 transition-all duration-300 ".concat(e ? "bg-[#030014]/80 backdrop-blur-lg border-b border-[#40E0D0]/20" : "lg:bg-transparent bg-[#030014]/60 backdrop-blur-md"),
                    children: (0, i.jsxs)("div", {
                        className: "mx-auto px-4 sm:px-6 lg:px-8",
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-center justify-between h-16 sm:h-20",
                            children: [(0, i.jsxs)(r.default, {
                                href: "/",
                                className: "flex items-center gap-2 group",
                                children: [(0, i.jsxs)("div", {
                                    className: "relative w-16 h-16 sm:w-20 sm:h-20",
                                    children: [(0, i.jsx)(l.default, {
                                        src: "/images/glowing-logo.gif",
                                        alt: "Logo",
                                        sizes: "100vw",
                                        width: 0,
                                        height: 0,
                                        className: "object-contain w-full h-full rounded-full",
                                        priority: !0,
                                        unoptimized: !0
                                    }), (0, i.jsx)(s.E.div, {
                                        className: "absolute inset-0 bg-[#38ef7d]/20 blur-xl rounded-full",
                                        animate: {
                                            scale: [1, 1.2, 1],
                                            opacity: [.5, .8, .5]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            ease: "easeInOut"
                                        }
                                    })]
                                }), (0, i.jsx)(s.E.span, {
                                    className: "font-oxanium text-3xl sm:text-4xl lg:text-4xl xl:text-4xl bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-transparent bg-clip-text",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    },
                                    children: "$ZORT"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "hidden lg:flex items-center gap-8",
                                children: [m.map(e => (0, i.jsx)(s.E.div, {
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    },
                                    children: (0, i.jsxs)(r.default, {
                                        href: e.href,
                                        className: "font-oxanium text-sm xl:text-xl uppercase tracking-wider text-[#38ef7d]/80 hover:text-[#40E0D0] transition-colors relative group",
                                        children: [e.name, (0, i.jsx)("span", {
                                            className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#40E0D0] transition-all duration-300 group-hover:w-full"
                                        })]
                                    })
                                }, e.name)), (0, i.jsx)(c.Z, {
                                    text: "Enter Portal",
                                    gradientFrom: "#11998e",
                                    gradientTo: "#38ef7d",
                                    className: "text-base xl:text-lg",
                                    onClick: () => window.open("https://pump.fun/coin/ABo183yQwikesi7AYhcgmTHtfPv6qDTtgqCmYtZGpump", "_blank")
                                })]
                            }), (0, i.jsxs)(s.E.button, {
                                className: "lg:hidden relative p-2 rounded-lg hover:bg-white/10 transition-colors",
                                whileTap: {
                                    scale: .95
                                },
                                onClick: () => d(!a),
                                children: [(0, i.jsx)(s.E.div, {
                                    className: "absolute inset-0 bg-[#38ef7d]/20 blur-md rounded-lg",
                                    animate: {
                                        scale: [1, 1.2, 1],
                                        opacity: [.3, .5, .3]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                        ease: "easeInOut"
                                    }
                                }), (0, i.jsx)("svg", {
                                    className: "w-6 h-6 text-[#38ef7d] relative z-10",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, i.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: a ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                                    })
                                })]
                            })]
                        }), (0, i.jsx)(n.M, {
                            children: a && (0, i.jsxs)(s.E.div, {
                                initial: {
                                    opacity: 0,
                                    height: 0
                                },
                                animate: {
                                    opacity: 1,
                                    height: "auto"
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0
                                },
                                transition: {
                                    duration: .3
                                },
                                className: "lg:hidden border-t border-[#40E0D0]/20 relative",
                                children: [(0, i.jsx)(s.E.div, {
                                    className: "absolute inset-0 bg-[#38ef7d]/5 backdrop-blur-lg",
                                    animate: {
                                        opacity: [.5, .8, .5]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: 1 / 0,
                                        ease: "easeInOut"
                                    }
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col space-y-6 py-6 relative z-10",
                                    children: [m.map((e, t) => (0, i.jsx)(s.E.div, {
                                        initial: {
                                            x: -20,
                                            opacity: 0
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            x: -20,
                                            opacity: 0
                                        },
                                        transition: {
                                            delay: .1 * t
                                        },
                                        children: (0, i.jsx)(r.default, {
                                            href: e.href,
                                            onClick: u,
                                            className: "block font-oxanium text-lg sm:text-xl uppercase tracking-wider text-[#38ef7d]/80 hover:text-[#40E0D0] transition-colors px-4",
                                            children: e.name
                                        })
                                    }, e.name)), (0, i.jsx)(s.E.div, {
                                        initial: {
                                            x: -20,
                                            opacity: 0
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            x: -20,
                                            opacity: 0
                                        },
                                        transition: {
                                            delay: .1 * m.length
                                        },
                                        className: "px-4",
                                        children: (0, i.jsx)(c.Z, {
                                            text: "Enter Portal",
                                            gradientFrom: "#11998e",
                                            gradientTo: "#38ef7d",
                                            className: "w-full sm:w-auto text-base sm:text-lg"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        7985: function(e, t, a) {
            "use strict";
            var i = a(7437),
                s = a(4936),
                n = a(2265);
            let l = n.forwardRef((e, t) => {
                let {
                    text: a,
                    className: l = "",
                    textColor: r = "black",
                    gradientFrom: o = "#40E0D0",
                    gradientTo: c = "#38ef7d",
                    pixelColor: d = "#40E0D0",
                    onClick: m,
                    onMouseEnter: u,
                    onMouseLeave: x,
                    onFocus: h,
                    onBlur: p,
                    disabled: f,
                    type: g = "button",
                    ...b
                } = e, v = (0, n.useMemo)(() => Array.from({
                    length: 20
                }).map(() => ({
                    left: "".concat(100 * Math.random(), "%"),
                    top: "".concat(100 * Math.random(), "%"),
                    delay: 2 * Math.random()
                })), []), y = (0, n.useMemo)(() => Array.from({
                    length: 240
                }).map(() => 1.5 * Math.random()), []);
                return (0, i.jsx)(s.E.div, {
                    whileHover: {
                        scale: f ? 1 : 1.05
                    },
                    whileTap: {
                        scale: f ? 1 : .95
                    },
                    className: "relative ".concat(l),
                    children: (0, i.jsxs)("button", {
                        ref: t,
                        type: g,
                        disabled: f,
                        onClick: m,
                        onMouseEnter: u,
                        onMouseLeave: x,
                        onFocus: h,
                        onBlur: p,
                        className: "relative w-full overflow-hidden rounded-full px-8 py-4 transition-opacity ".concat(f ? "opacity-50 cursor-not-allowed" : ""),
                        ...b,
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0",
                            style: {
                                background: "linear-gradient(to right, ".concat(o, ", ").concat(c, ")")
                            }
                        }), (0, i.jsxs)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            style: {
                                maskImage: "linear-gradient(to right, black, black)",
                                WebkitMaskImage: "linear-gradient(to right, black, black)"
                            },
                            children: [(0, i.jsx)("div", {
                                className: "w-full h-full grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(8,1fr)]",
                                children: Array.from({
                                    length: 240
                                }).map((e, t) => (0, i.jsx)(s.E.div, {
                                    className: "w-full h-full",
                                    style: {
                                        backgroundColor: d
                                    },
                                    initial: {
                                        opacity: 0,
                                        scale: 0
                                    },
                                    animate: {
                                        opacity: [0, .8, .6],
                                        scale: [0, 1.2, 1]
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: y[t],
                                        ease: "easeOut"
                                    }
                                }, t))
                            }), v.map((e, t) => (0, i.jsx)(s.E.div, {
                                className: "absolute w-0.5 h-0.5",
                                style: {
                                    backgroundColor: d,
                                    left: e.left,
                                    top: e.top
                                },
                                animate: {
                                    opacity: [0, .5, 0],
                                    scale: [1, 1.5, 1]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: 1 / 0,
                                    delay: e.delay
                                }
                            }, "noise-".concat(t)))]
                        }), (0, i.jsx)(s.E.span, {
                            className: "relative z-10 font-azonix text-xl",
                            style: {
                                color: r
                            },
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 1,
                                delay: 1.8
                            },
                            children: a
                        }), (0, i.jsx)(s.E.div, {
                            className: "absolute inset-0 -z-10 blur-2xl opacity-0",
                            animate: {
                                opacity: [.1, .2, .1]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            style: {
                                background: "linear-gradient(to right, ".concat(o, ", ").concat(c, ")")
                            }
                        })]
                    })
                })
            });
            l.displayName = "DigitalButton", t.Z = l
        },
        7960: function() {}
    },
    function(e) {
        e.O(0, [695, 332, 817, 971, 117, 744], function() {
            return e(e.s = 3854)
        }), _N_E = e.O()
    }
]);