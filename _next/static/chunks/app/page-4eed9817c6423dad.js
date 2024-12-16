(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        193: function(e, a, t) {
            Promise.resolve().then(t.bind(t, 988))
        },
        988: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return j
                }
            });
            var i = t(7437),
                n = t(2265),
                s = t(4936),
                r = t(3145);
            let l = e => {
                    let {
                        date: a,
                        title: t,
                        content: n,
                        quote: r,
                        source: l
                    } = e;
                    return (0, i.jsxs)(s.E.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "bg-[#040D1B]/80 p-6 rounded-xl border border-[#40E0D0]/20 relative overflow-hidden group",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-[#40E0D0]/0 to-[#40E0D0]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                        }), (0, i.jsx)("div", {
                            className: "absolute top-0 right-0 w-16 h-16",
                            children: (0, i.jsx)("div", {
                                className: "absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#40E0D0]/30 animate-pulse"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "relative z-10",
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [(0, i.jsx)("div", {
                                    className: "h-2 w-2 bg-[#40E0D0] rounded-full animate-pulse"
                                }), (0, i.jsxs)("p", {
                                    className: "font-mono text-sm text-[#40E0D0]/60",
                                    children: ["[ENTRY: ", a, "]"]
                                })]
                            }), (0, i.jsx)("h3", {
                                className: "text-2xl font-azonix text-emerald-400 mb-4",
                                children: t
                            }), (0, i.jsxs)("div", {
                                className: "space-y-4 text-gray-400",
                                children: [(0, i.jsx)("p", {
                                    className: "text-sm font-oxanium",
                                    children: n
                                }), r && (0, i.jsxs)(s.E.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "border-l-2 border-[#40E0D0]/30 pl-4 mt-4",
                                    children: [(0, i.jsx)("p", {
                                        className: "italic",
                                        children: '"'.concat(r, '"')
                                    }), (0, i.jsxs)("p", {
                                        className: "text-emerald-400/80 font-oxanium text-sm mt-2",
                                        children: ["- ", l]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                o = e => {
                    let {
                        imageSrc: a,
                        title: t
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: "relative h-[650px] bg-[#040D1B] rounded-2xl overflow-hidden border border-[#40E0D0]/20",
                        children: [(0, i.jsxs)("div", {
                            className: "absolute inset-0",
                            children: [(0, i.jsx)(r.default, {
                                src: a,
                                alt: t,
                                fill: !0,
                                className: "object-cover",
                                unoptimized: !0
                            }), (0, i.jsx)("div", {
                                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040D1B] via-[#040D1B]/90 to-transparent"
                            }), (0, i.jsx)(s.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: [0, .5, 0]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    repeatType: "reverse"
                                },
                                className: "absolute inset-0 bg-gradient-to-b from-[#40E0D0]/10 via-transparent to-[#40E0D0]/10"
                            }), (0, i.jsx)(s.E.div, {
                                initial: {
                                    y: -100
                                },
                                animate: {
                                    y: 700
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "absolute w-full h-px bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent"
                            }), (0, i.jsx)("div", {
                                className: "absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(64,224,208,0.1)_3px,transparent_3px)] opacity-20"
                            })]
                        }), ["top-left", "top-right", "bottom-left", "bottom-right"].map(e => (0, i.jsx)(s.E.div, {
                            className: "absolute ".concat(e.replace("-", "-0 "), " w-12 h-12 border-2 border-[#40E0D0]/60"),
                            style: {
                                borderWidth: e.includes("left") ? "2px 0 0 2px" : e.includes("right") ? "2px 2px 0 0" : "0 2px 2px 0"
                            },
                            animate: {
                                opacity: [.2, .8, .2]
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0,
                                repeatType: "reverse"
                            }
                        }, e)), (0, i.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 p-2 z-20",
                            children: (0, i.jsxs)(s.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .5
                                },
                                className: "font-mono text-sm",
                                children: [(0, i.jsx)("p", {
                                    className: "font-azonix text-[#40E0D0] text-xs tracking-wider",
                                    children: "[TEMPORAL ARCHIVE PLAYBACK]"
                                }), (0, i.jsx)("p", {
                                    className: "font-oxanium text-[#40E0D0]/90 text-xs",
                                    children: t
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 h-12 bg-[#40E0D0]/5 backdrop-blur-md z-10"
                        })]
                    }, t)
                },
                c = () => {
                    let e = [{
                            year: "1752",
                            event: "Assisted Franklin with lightning experiments"
                        }, {
                            year: "1759",
                            event: "Influenced early electrical current theories"
                        }, {
                            year: "1776",
                            event: "Present during Declaration of Independence drafting"
                        }, {
                            year: "1782",
                            event: "Guided American currency system design"
                        }, {
                            year: "1787",
                            event: "Observed Constitutional Convention proceedings"
                        }, {
                            year: "1799",
                            event: "Documented in Washington's private archives"
                        }, {
                            year: "1856",
                            event: "First contact with young Nikola Tesla"
                        }, {
                            year: "1875",
                            event: "Influenced Bell's telephone development"
                        }, {
                            year: "1886",
                            event: "Appeared at Statue of Liberty unveiling"
                        }, {
                            year: "1903",
                            event: "Present at Wright brothers' first flight"
                        }, {
                            year: "1921",
                            event: "Discussed relativity with Einstein [CLASSIFIED]"
                        }, {
                            year: "1943",
                            event: "Involved in Manhattan Project guidance"
                        }, {
                            year: "1947",
                            event: "Roswell incident investigation lead"
                        }, {
                            year: "1969",
                            event: "Guided Apollo Mission Control remotely"
                        }, {
                            year: "1986",
                            event: "Detected at Chernobyl containment zone"
                        }, {
                            year: "2001",
                            event: "Materialized at CERN particle tests"
                        }, {
                            year: "2014",
                            event: "Collaborated with quantum research teams"
                        }, {
                            year: "2023",
                            event: "Breached Area 51 security protocols"
                        }, {
                            year: "2024",
                            event: "Unleashed ZORT crystal technology"
                        }],
                        [a, t] = (0, n.useState)(!1),
                        [r, l] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        let t;
                        return a || (t = setInterval(() => {
                            l(a => (a + 1) % e.length)
                        }, 3e3)), () => clearInterval(t)
                    }, [a, e.length]), (0, i.jsxs)("div", {
                        className: "mt-6",
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [(0, i.jsx)("div", {
                                className: "h-2 w-2 bg-red-500 rounded-full animate-pulse"
                            }), (0, i.jsx)("p", {
                                className: "font-oxanium text-xs text-red-500",
                                children: "AREA 51 - FILE XZ-1947 [CLASSIFIED]"
                            })]
                        }), (0, i.jsxs)(s.E.div, {
                            className: "bg-[#040D1B]/90 rounded-full border border-[#40E0D0]/20 relative overflow-hidden cursor-pointer",
                            onMouseEnter: () => t(!0),
                            onMouseLeave: () => t(!1),
                            animate: {
                                boxShadow: ["0 0 0 0 rgba(64,224,208,0)", "0 0 10px 0 rgba(64,224,208,0.2)", "0 0 0 0 rgba(64,224,208,0)"]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "relative px-4 py-3 flex items-center gap-4",
                                children: [(0, i.jsx)(s.E.div, {
                                    className: "bg-[#040D1B] rounded-full px-3 py-1 border border-[#40E0D0]/30",
                                    animate: {
                                        boxShadow: ["0 0 5px #40E0D0", "0 0 10px #40E0D0", "0 0 5px #40E0D0"]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0
                                    },
                                    children: (0, i.jsx)(s.E.span, {
                                        initial: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -5
                                        },
                                        className: "font-azonix text-sm text-[#40E0D0] font-bold",
                                        children: e[r].year
                                    }, e[r].year)
                                }), (0, i.jsx)("div", {
                                    className: "h-6 w-px bg-[#40E0D0]/20 relative",
                                    children: !a && (0, i.jsx)(s.E.div, {
                                        className: "absolute inset-0",
                                        animate: {
                                            background: ["linear-gradient(to bottom, transparent, #40E0D0, transparent)", "linear-gradient(to top, transparent, #40E0D0, transparent)"]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: 1 / 0
                                        }
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, i.jsx)(s.E.div, {
                                        initial: {
                                            opacity: 0,
                                            x: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        className: "font-oxanium text-sm text-emerald-400/90",
                                        children: e[r].event
                                    }, r)
                                })]
                            }), !a && (0, i.jsx)(s.E.div, {
                                className: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#40E0D0]/5 to-transparent",
                                animate: {
                                    x: ["-100%", "100%"]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                }
                            })]
                        })]
                    })
                };
            var d = () => {
                    let [e, a] = (0, n.useState)(0), t = [{
                        era: "Foundation Era",
                        date: "1752-1789",
                        title: "Franklin's Secret Ally",
                        content: "During the formative years of the United States, Mr. ZORTLA became an invaluable advisor to Benjamin Franklin, introducing advanced principles of electricity and governance.",
                        quote: "His wisdom regarding matters of science, currency, and governance is unparalleled. He speaks of systems of trade that span beyond our earthly understanding...",
                        source: "Benjamin Franklin's Encrypted Journals",
                        image: "/images/frankxzort.png",
                        stats: [{
                            label: "Timeline Influence",
                            value: "37 Years"
                        }, {
                            label: "Historical Events",
                            value: "142+"
                        }, {
                            label: "Known Associates",
                            value: "13"
                        }, {
                            label: "Success Rate",
                            value: "100%"
                        }]
                    }, {
                        era: "Innovation Era",
                        date: "1856-1945",
                        title: "Shaping Human Innovation",
                        content: "From Tesla's breakthroughs to the Wright brothers' first flight, Mr. ZORTLA's influence shaped the course of human technological advancement.",
                        quote: "The crystalline advisor's insights have opened doors to realms of science we never imagined possible.",
                        source: "Tesla's Personal Journals",
                        image: "/images/teslaxzort.png",
                        stats: [{
                            label: "Timeline Influence",
                            value: "89 Years"
                        }, {
                            label: "Patents Influenced",
                            value: "847+"
                        }, {
                            label: "Tech Breakthroughs",
                            value: "235"
                        }, {
                            label: "Success Rate",
                            value: "100%"
                        }]
                    }, {
                        era: "Modern Era",
                        date: "2024-PRESENT",
                        title: "The Great Convergence",
                        content: "With the $ZORT crystal leak of 2024, Mr. ZORTLA now operates openly between dimensions, preparing humanity for its next evolutionary leap.",
                        quote: "The time has come for direct intervention. Earth's technological convergence demands nothing less.",
                        source: "Mr. ZORTLA's Public Statement",
                        image: "/images/morden-era.gif",
                        stats: [{
                            label: "Active Dimensions",
                            value: "∞"
                        }, {
                            label: "Market Influence",
                            value: "$2T+"
                        }, {
                            label: "Current Ventures",
                            value: "427"
                        }, {
                            label: "Success Rate",
                            value: "100%"
                        }]
                    }];
                    return (0, i.jsxs)("section", {
                        className: "min-h-screen relative overflow-hidden py-20 bg-[#020817]",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 opacity-10",
                            children: (0, i.jsx)("div", {
                                className: "absolute inset-0",
                                style: {
                                    backgroundImage: "\n              radial-gradient(circle at center, #40E0D0 1px, transparent 1px),\n              linear-gradient(to right, #40E0D0 1px, transparent 1px),\n              linear-gradient(to bottom, #40E0D0 1px, transparent 1px)\n            ",
                                    backgroundSize: "40px 40px, 20px 20px, 20px 20px",
                                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
                                }
                            })
                        }), (0, i.jsxs)("div", {
                            className: "relative z-10 max-w-7xl mx-auto px-4",
                            children: [(0, i.jsxs)(s.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6
                                },
                                className: "text-center mb-20",
                                children: [(0, i.jsx)("h2", {
                                    className: "text-6xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text",
                                    children: "The ZORTLA Chronicles"
                                }), (0, i.jsx)("p", {
                                    className: "text-emerald-400/80 mt-4 font-oxanium text-xl",
                                    children: "[DECLASSIFIED: INTERDIMENSIONAL ARCHIVES]"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "flex justify-center mb-12 gap-4",
                                children: t.map((t, n) => (0, i.jsx)(s.E.button, {
                                    onClick: () => a(n),
                                    className: "px-6 py-2 rounded-full font-oxanium md:text-lg text-xs transition-all duration-300 ".concat(e === n ? "bg-[#40E0D0]/20 text-[#40E0D0] border border-[#40E0D0]/50" : "text-emerald-400/60 hover:text-emerald-400"),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: t.era
                                }, n))
                            }), (0, i.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start",
                                children: [(0, i.jsxs)("div", {
                                    className: "sticky top-24",
                                    children: [" ", (0, i.jsx)(o, {
                                        imageSrc: t[e].image,
                                        title: t[e].title
                                    }, e)]
                                }), (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(l, { ...t[e]
                                    }, e), (0, i.jsx)("div", {
                                        className: "grid grid-cols-2 gap-4 mt-8",
                                        children: t[e].stats.map((a, t) => (0, i.jsxs)(s.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: .1 * t
                                            },
                                            className: "bg-[#040D1B]/80 p-4 rounded-xl border border-[#40E0D0]/20",
                                            children: [(0, i.jsx)("p", {
                                                className: "text-emerald-400 text-sm font-azonix",
                                                children: a.label
                                            }), (0, i.jsx)("p", {
                                                className: "text-2xl font-bold text-[#40E0D0] font-oxanium",
                                                children: a.value
                                            })]
                                        }, "".concat(e, "-stat-").concat(t)))
                                    }), (0, i.jsx)(c, {})]
                                })]
                            })]
                        })]
                    })
                },
                m = t(1904);
            let x = {
                some: 0,
                all: 1
            };

            function p(e, {
                root: a,
                margin: t,
                amount: i,
                once: s = !1
            } = {}) {
                let [r, l] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    if (!e.current || s && r) return;
                    let n = {
                        root: a && a.current || void 0,
                        margin: t,
                        amount: i
                    };
                    return function(e, a, {
                        root: t,
                        margin: i,
                        amount: n = "some"
                    } = {}) {
                        let s = (0, m.IG)(e),
                            r = new WeakMap,
                            l = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    let t = r.get(e.target);
                                    if (!!t !== e.isIntersecting) {
                                        if (e.isIntersecting) {
                                            let t = a(e);
                                            "function" == typeof t ? r.set(e.target, t) : l.unobserve(e.target)
                                        } else t && (t(e), r.delete(e.target))
                                    }
                                })
                            }, {
                                root: t,
                                rootMargin: i,
                                threshold: "number" == typeof n ? n : x[n]
                            });
                        return s.forEach(e => l.observe(e)), () => l.disconnect()
                    }(e.current, () => (l(!0), s ? void 0 : () => l(!1)), n)
                }, [a, e, t, s, i]), r
            }
            var u = () => {
                    let [e, a] = (0, n.useState)(!1), [t, l] = (0, n.useState)(!1), [o, c] = (0, n.useState)(""), [d, m] = (0, n.useState)({}), [x, u] = (0, n.useState)(null), [h, g] = (0, n.useState)(!1), b = (0, n.useRef)(null), f = p(b, {
                        once: !0,
                        margin: "-100px"
                    });
                    (0, n.useEffect)(() => {
                        e && b.current && b.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, [e]);
                    let v = Math.floor(12 * Math.random());
                    (0, n.useEffect)(() => {
                        m({
                            click: new Audio("/images/sounds/sci-fi-button.wav"),
                            reveal: new Audio("/images/sounds/sci-fi-button.wav"),
                            hover: new Audio("/images/sounds/sci-fi-button.wav")
                        })
                    }, []);
                    let y = (0, n.useCallback)(e => {
                            d[e] && (d[e].currentTime = 0, d[e].play().catch(e => console.log("Audio playback prevented:", e)))
                        }, [d]),
                        N = e => {
                            if (y("click"), u(e), e === v) l(!0), g(!1), y("reveal"), c("ZORT TOKEN LOCATED - INITIALIZING QUANTUM TRANSFER...");
                            else {
                                g(!0);
                                let e = ["NODE SCAN COMPLETE: NO CRYSTALLINE SIGNATURES DETECTED", "DIMENSIONAL VOID DETECTED - QUANTUM SIGNATURE ABSENT", "SCANNING... PLANET X-742 ENERGY PATTERNS NOT FOUND", "WARNING: UNSTABLE QUANTUM FIELD - TRY ANOTHER NODE", "INTERDIMENSIONAL SCAN FAILED - CHECK ADJACENT NODES", "NO CRYSTALLINE FORMATIONS DETECTED IN THIS NODE", "QUANTUM RESONANCE MISMATCH - CONTINUE SEARCH PROTOCOL"];
                                c(e[Math.floor(Math.random() * e.length)]), setTimeout(() => c(""), 3e3)
                            }
                        };
                    return (0, i.jsxs)("section", {
                        ref: b,
                        className: "min-h-screen bg-[#020817] py-24 relative overflow-hidden",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 opacity-10"
                        }), (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: Array.from({
                                length: 20
                            }).map((e, a) => (0, i.jsx)(s.E.div, {
                                className: "absolute w-px h-40 bg-gradient-to-b from-transparent via-[#40E0D0]/20 to-transparent",
                                style: {
                                    left: "".concat(100 * Math.random(), "%"),
                                    top: -160
                                },
                                animate: {
                                    y: [0, 1e3],
                                    opacity: [0, 1, 0]
                                },
                                transition: {
                                    duration: 5 + 3 * Math.random(),
                                    repeat: 1 / 0,
                                    delay: 2 * Math.random()
                                }
                            }, a))
                        }), (0, i.jsx)("div", {
                            className: "max-w-4xl mx-auto px-4",
                            children: e ? (0, i.jsx)("div", {
                                className: "relative",
                                children: t ? (0, i.jsxs)(s.E.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "relative",
                                    children: [(0, i.jsxs)("div", {
                                        className: "relative w-64 h-64 mx-auto mb-8",
                                        children: [(0, i.jsx)(s.E.div, {
                                            animate: {
                                                rotateY: 360,
                                                rotateZ: 360
                                            },
                                            transition: {
                                                duration: 20,
                                                repeat: 1 / 0,
                                                ease: "linear"
                                            },
                                            style: {
                                                transformStyle: "preserve-3d",
                                                perspective: 1e3
                                            },
                                            className: "w-full h-full",
                                            children: (0, i.jsx)(r.default, {
                                                src: "/images/glowing-logo.gif",
                                                alt: "ZORT Token",
                                                fill: !0,
                                                className: "object-contain",
                                                unoptimized: !0
                                            })
                                        }), (0, i.jsxs)(s.E.div, {
                                            className: "absolute inset-0",
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 10,
                                                repeat: 1 / 0,
                                                ease: "linear"
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "absolute inset-0 border-2 border-[#40E0D0]/20 rounded-full"
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-2 border-2 border-[#40E0D0]/15 rounded-full"
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-4 border-2 border-[#40E0D0]/10 rounded-full"
                                            })]
                                        })]
                                    }), (0, i.jsxs)(s.E.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: .5
                                        },
                                        className: "text-center",
                                        children: [(0, i.jsx)("h3", {
                                            className: "text-2xl font-oxanium text-emerald-400 mb-4",
                                            children: "QUANTUM TRANSFER SUCCESSFUL"
                                        }), (0, i.jsx)("p", {
                                            className: "text-[#40E0D0] mb-8 font-mono",
                                            children: "You have discovered a genuine ZORT crystal from Planet X-742 The quantum signature has been verified. Prepare for interdimensional prosperity!"
                                        }), (0, i.jsx)(s.E.button, {
                                            className: "px-8 py-4 bg-[#40E0D0] rounded-lg text-[#020817] font-oxanium hover:bg-[#40E0D0]/80 transition-colors",
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            onClick: () => window.open("https://pump.fun/coin/ABo183yQwikesi7AYhcgmTHtfPv6qDTtgqCmYtZGpump", "_blank"),
                                            children: "$ZORT TOKEN PURCHASE"
                                        })]
                                    })]
                                }) : (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("h3", {
                                        className: "text-5xl font-oxanium text-center text-emerald-400 mb-6",
                                        children: "Quantum Energy Matrix"
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-400 text-center mb-4 text-xl font-mono",
                                        children: "[SCAN NODES TO LOCATE ZORT TOKEN]"
                                    }), (0, i.jsx)(s.E.p, {
                                        className: "text-[#40E0D0] text-center mb-8 font-mono h-6",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: o ? 1 : 0
                                        },
                                        transition: {
                                            duration: .3
                                        },
                                        children: o
                                    }), (0, i.jsx)("div", {
                                        className: "grid grid-cols-4 gap-6 max-w-2xl mx-auto",
                                        children: Array.from({
                                            length: 12
                                        }).map((e, a) => (0, i.jsxs)(s.E.button, {
                                            className: "aspect-square rounded-lg relative overflow-hidden group ".concat(h && x === a ? "border-2 border-red-500" : ""),
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            onClick: () => N(a),
                                            children: [(0, i.jsx)("div", {
                                                className: "absolute inset-0 border-2 border-[#40E0D0]/30 rounded-lg"
                                            }), (0, i.jsx)(s.E.div, {
                                                className: "absolute inset-0 bg-[#40E0D0]/20",
                                                animate: {
                                                    opacity: [.2, .4, .2]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: 1 / 0,
                                                    delay: .1 * a
                                                }
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-0 bg-[#40E0D0]/0 group-hover:bg-[#40E0D0]/10 transition-colors duration-200"
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: (0, i.jsx)("div", {
                                                    className: "w-1 h-1 bg-[#40E0D0]/50 rounded-full"
                                                })
                                            })]
                                        }, a))
                                    })]
                                })
                            }) : (0, i.jsxs)(s.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "text-center space-y-12",
                                children: [(0, i.jsxs)(s.E.div, {
                                    initial: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    animate: f ? {
                                        opacity: 1,
                                        y: 0
                                    } : {
                                        opacity: 0,
                                        y: -20
                                    },
                                    transition: {
                                        duration: .6
                                    },
                                    className: "text-center mb-20",
                                    children: [(0, i.jsx)("h2", {
                                        className: "text-6xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text mb-4",
                                        children: "WHAT IS ZORT coin?"
                                    }), (0, i.jsx)(s.E.div, {
                                        initial: {
                                            width: 0
                                        },
                                        animate: f ? {
                                            width: "200px"
                                        } : {
                                            width: 0
                                        },
                                        className: "h-1 bg-gradient-to-r from-[#40E0D0] to-transparent mx-auto",
                                        transition: {
                                            duration: 1,
                                            delay: .5
                                        }
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "relative w-48 h-48 mx-auto mb-8",
                                    children: (0, i.jsxs)(s.E.div, {
                                        animate: {
                                            rotateY: 360,
                                            rotateZ: 360
                                        },
                                        transition: {
                                            duration: 20,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        },
                                        className: "relative w-full h-full",
                                        style: {
                                            transformStyle: "preserve-3d",
                                            perspective: 1e3
                                        },
                                        children: [(0, i.jsx)(r.default, {
                                            src: "/images/glowing-logo.gif",
                                            alt: "ZORT Token",
                                            fill: !0,
                                            className: "object-contain",
                                            unoptimized: !0
                                        }), (0, i.jsxs)(s.E.div, {
                                            className: "absolute inset-0",
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 10,
                                                repeat: 1 / 0,
                                                ease: "linear"
                                            },
                                            children: [(0, i.jsx)("div", {
                                                className: "absolute inset-0 border-2 border-[#40E0D0]/20 rounded-full"
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-2 border-2 border-[#40E0D0]/15 rounded-full"
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-4 border-2 border-[#40E0D0]/10 rounded-full"
                                            })]
                                        })]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "space-y-6 max-w-2xl mx-auto bg-[#040D1B]/80 p-8 rounded-xl border border-[#40E0D0]/20",
                                    children: [(0, i.jsx)("p", {
                                        className: "text-emerald-400 text-2xl font-oxanium ",
                                        children: "[CLASSIFIED INTERDIMENSIONAL DOCUMENT]"
                                    }), (0, i.jsxs)("div", {
                                        className: "space-y-6 text-gray-300 font-oxanium text-xl leading-relaxed",
                                        children: [(0, i.jsx)("p", {
                                            children: "ZORT is a rare and powerful crystalline currency, naturally formed in the quantum mines of Planet X-742, located 8.6 light-years from Earth."
                                        }), (0, i.jsx)("p", {
                                            children: "These unique crystals, taking a millennium to form, serve as\n                  the standard currency for interdimensional trade under mr.ZORTLA's oversight."
                                        }), (0, i.jsx)("p", {
                                            children: ' Originally restricted from Earth\'s knowledge, $ZORT was\n                  unexpectedly introduced to our world during "The Sirius\n                  Incident" of 2024, when a quantum containment breach during a\n                  classified government trade meeting led to the first public\n                  exposure of these mysterious crystals.'
                                        }), (0, i.jsx)("p", {
                                            className: "text-emerald-400",
                                            children: "A rare ZORT crystal has been detected in the local quantum field. Only those who can locate its exact dimensional coordinates can claim this powerful artifact."
                                        })]
                                    })]
                                }), (0, i.jsxs)(s.E.button, {
                                    className: "px-12 py-6 bg-[#040D1B] border-2 border-[#40E0D0]/30 rounded-xl text-2xl text-[#40E0D0] font-oxanium hover:bg-[#40E0D0]/10 transition-colors relative overflow-hidden group",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    onClick: () => a(!0),
                                    children: [(0, i.jsx)("span", {
                                        className: "relative z-10",
                                        children: "INITIALIZE QUANTUM SEARCH"
                                    }), (0, i.jsx)(s.E.div, {
                                        className: "absolute inset-0 bg-gradient-to-r from-[#40E0D0]/20 to-transparent",
                                        animate: {
                                            x: ["-100%", "100%"]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        }
                                    })]
                                })]
                            })
                        })]
                    })
                },
                h = () => {
                    let e = n.useRef(null),
                        a = p(e, {
                            once: !0,
                            margin: "-100px"
                        });
                    return (0, i.jsxs)("section", {
                        ref: e,
                        id: "intro",
                        className: "min-h-screen bg-[#020817] py-24 relative overflow-hidden",
                        children: [(0, i.jsxs)("div", {
                            className: "absolute inset-0",
                            children: [Array.from({
                                length: 15
                            }).map((e, t) => (0, i.jsx)(s.E.div, {
                                className: "absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#40E0D0] to-emerald-500",
                                style: {
                                    top: "".concat(100 * Math.random(), "%"),
                                    left: "".concat(100 * Math.random(), "%")
                                },
                                animate: a ? {
                                    y: [-20, 20, -20],
                                    x: [-20, 20, -20],
                                    scale: [1, 1.2, 1],
                                    opacity: [.3, .6, .3]
                                } : {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 4 + 2 * Math.random(),
                                    repeat: 1 / 0,
                                    delay: 2 * Math.random()
                                }
                            }, "orb-".concat(t))), Array.from({
                                length: 10
                            }).map((e, t) => (0, i.jsx)(s.E.div, {
                                className: "absolute h-px w-32 bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent",
                                style: {
                                    top: "".concat(100 * Math.random(), "%"),
                                    left: "".concat(100 * Math.random(), "%"),
                                    rotate: "".concat(360 * Math.random(), "deg")
                                },
                                animate: a ? {
                                    opacity: [0, .5, 0],
                                    scale: [1, 1.5, 1],
                                    rotate: ["".concat(360 * Math.random(), "deg"), "".concat(360 * Math.random() + 180, "deg")]
                                } : {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 3 + 2 * Math.random(),
                                    repeat: 1 / 0,
                                    delay: 2 * Math.random()
                                }
                            }, "line-".concat(t)))]
                        }), (0, i.jsxs)(s.E.div, {
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: .6
                            },
                            className: "text-center mb-20",
                            children: [(0, i.jsx)("h2", {
                                className: "text-6xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text mb-4",
                                children: "WHO IS MR. ZORTLA?"
                            }), (0, i.jsx)(s.E.div, {
                                initial: {
                                    width: 0
                                },
                                animate: a ? {
                                    width: "200px"
                                } : {
                                    width: 0
                                },
                                className: "h-1 bg-gradient-to-r from-[#40E0D0] to-transparent mx-auto",
                                transition: {
                                    duration: 1,
                                    delay: .5
                                }
                            })]
                        }), (0, i.jsx)("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: (0, i.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                                children: [(0, i.jsxs)("div", {
                                    className: "relative h-[600px] flex items-center justify-center",
                                    children: [(0, i.jsx)(s.E.div, {
                                        initial: {
                                            rotate: 0
                                        },
                                        animate: a ? {
                                            rotate: 360
                                        } : {
                                            rotate: 0
                                        },
                                        transition: {
                                            duration: 20,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        },
                                        className: "absolute w-[90%] h-[90%] rounded-full border border-[#40E0D0]/20"
                                    }), (0, i.jsx)(s.E.div, {
                                        animate: a ? {
                                            scale: [1, 1.1, 1],
                                            opacity: [.2, .4, .2]
                                        } : {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: 1 / 0,
                                            ease: "easeInOut"
                                        },
                                        className: "absolute w-[90%] h-[90%] bg-gradient-to-r from-[#40E0D0]/5 to-emerald-500/5 rounded-full blur-3xl"
                                    }), (0, i.jsx)(s.E.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: a ? {
                                            opacity: 1
                                        } : {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: .8
                                        },
                                        className: "relative w-full h-full flex items-center justify-center",
                                        children: (0, i.jsxs)("div", {
                                            className: "relative w-[90%] h-[90%]",
                                            children: [(0, i.jsx)(r.default, {
                                                src: "/images/main-intro.gif",
                                                alt: "Mr. ZORTLA",
                                                fill: !0,
                                                sizes: "100%",
                                                className: "object-contain",
                                                priority: !0,
                                                style: {
                                                    opacity: .1
                                                },
                                                unoptimized: !0
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-0 overflow-hidden",
                                                style: {
                                                    maskImage: "url(/images/main-intro.gif)",
                                                    WebkitMaskImage: "url(/images/main-intro.gif)",
                                                    maskSize: "contain",
                                                    WebkitMaskSize: "contain",
                                                    maskRepeat: "no-repeat",
                                                    WebkitMaskRepeat: "no-repeat",
                                                    maskPosition: "center",
                                                    WebkitMaskPosition: "center"
                                                },
                                                children: (0, i.jsx)("div", {
                                                    className: "w-full h-full grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(45,1fr)]",
                                                    children: Array.from({
                                                        length: 1350
                                                    }).map((e, t) => (0, i.jsx)(s.E.div, {
                                                        className: "bg-[#40E0D0]",
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0
                                                        },
                                                        animate: a ? {
                                                            opacity: [0, .8, .6],
                                                            scale: [0, 1.2, 1]
                                                        } : {
                                                            opacity: 0,
                                                            scale: 0
                                                        },
                                                        transition: {
                                                            duration: .8,
                                                            delay: a ? 1.5 * Math.random() : 0,
                                                            ease: "easeOut"
                                                        }
                                                    }, t))
                                                })
                                            }), (0, i.jsx)(s.E.div, {
                                                className: "absolute inset-0",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: a ? {
                                                    opacity: 1
                                                } : {
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 1,
                                                    delay: 1.8
                                                },
                                                children: (0, i.jsx)(r.default, {
                                                    src: "/images/main-intro.gif",
                                                    alt: "Mr.ZORTLA",
                                                    fill: !0,
                                                    sizes: "100%",
                                                    className: "object-contain",
                                                    priority: !0,
                                                    unoptimized: !0
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "absolute inset-0",
                                                style: {
                                                    maskImage: "url(/images/main-intro.gif)",
                                                    WebkitMaskImage: "url(/images/main-intro.gif)",
                                                    maskSize: "contain",
                                                    WebkitMaskSize: "contain",
                                                    maskRepeat: "no-repeat",
                                                    WebkitMaskRepeat: "no-repeat",
                                                    maskPosition: "center",
                                                    WebkitMaskPosition: "center"
                                                },
                                                children: Array.from({
                                                    length: 30
                                                }).map((e, t) => (0, i.jsx)(s.E.div, {
                                                    className: "absolute w-1 h-1 bg-[#40E0D0]",
                                                    style: {
                                                        left: "".concat(100 * Math.random(), "%"),
                                                        top: "".concat(100 * Math.random(), "%")
                                                    },
                                                    animate: a ? {
                                                        opacity: [0, .5, 0],
                                                        scale: [1, 1.5, 1]
                                                    } : {
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: 1 / 0,
                                                        delay: 2 * Math.random()
                                                    }
                                                }, "noise-".concat(t)))
                                            })]
                                        })
                                    })]
                                }), (0, i.jsxs)(s.E.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 50
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        x: 0
                                    } : {
                                        opacity: 0,
                                        x: 50
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: .2
                                    },
                                    className: "space-y-8",
                                    children: [(0, i.jsx)("div", {
                                        className: "relative",
                                        children: (0, i.jsx)(s.E.p, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: a ? {
                                                opacity: 1,
                                                y: 0
                                            } : {
                                                opacity: 0,
                                                y: 20
                                            },
                                            transition: {
                                                delay: .5
                                            },
                                            className: "md:text-2xl text-xl text-gray-300 leading-relaxed font-oxanium",
                                            children: " Known throughout multiple dimensions as the ultimate dealmaker,\n                Mr. ZORTLA has been quietly shaping interstellar commerce for\n                centuries. Originally from X-742, he emerged as a key\n                figure in interdimensional trade, bridging gaps between\n                civilizations that didn't even know the others existed."
                                        })
                                    }), (0, i.jsx)(s.E.div, {
                                        animate: a ? {
                                            opacity: [.5, 1, .5]
                                        } : {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: 1 / 0
                                        },
                                        className: "inline-block",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex items-center gap-2 text-emerald-400 font-mono",
                                            children: [(0, i.jsx)("div", {
                                                className: "w-2 h-2 bg-emerald-400 rounded-full"
                                            }), "TRANSMISSION COMPLETE"]
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                g = () => (0, i.jsx)("section", {
                    className: "relative overflow-hidden py-12 bg-[#020817]",
                    children: (0, i.jsxs)("div", {
                        className: "max-w-4xl mx-auto px-4",
                        children: [(0, i.jsxs)(s.E.div, {
                            className: "text-center mb-8",
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6
                            },
                            children: [(0, i.jsx)("h2", {
                                className: "text-6xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text mb-2",
                                children: "Dimensional Broadcast"
                            }), (0, i.jsxs)("div", {
                                className: "flex items-center justify-center gap-3 text-lg font-oxanium",
                                children: [(0, i.jsx)("span", {
                                    className: "text-emerald-400/80",
                                    children: "STATUS:"
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, i.jsx)("div", {
                                        className: "h-2 w-2 bg-[#40E0D0] rounded-full animate-pulse"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[#40E0D0]/60 font-oxanium",
                                        children: "LIVE TRANSMISSION"
                                    })]
                                })]
                            })]
                        }), (0, i.jsxs)(s.E.div, {
                            className: "relative bg-[#040D1B] rounded-2xl overflow-hidden border border-[#40E0D0]/20",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: .8
                            },
                            children: [
                                ["top-left", "top-right", "bottom-left", "bottom-right"].map(e => (0, i.jsx)(s.E.div, {
                                    className: "absolute ".concat(e.replace("-", "-0 "), " w-8 h-8 border-2 border-[#40E0D0]/60"),
                                    style: {
                                        borderWidth: e.includes("left") ? "2px 0 0 2px" : e.includes("right") ? "2px 2px 0 0" : "0 2px 2px 0"
                                    },
                                    animate: {
                                        opacity: [.2, .8, .2]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                        repeatType: "reverse"
                                    }
                                }, e)), (0, i.jsxs)("div", {
                                    className: "relative",
                                    style: {
                                        height: "500px"
                                    },
                                    children: [(0, i.jsx)("iframe", {
                                        className: "absolute inset-0 w-full h-full",
                                        src: "https://www.youtube.com/embed/q35XzELZqWU",
                                        title: "mr.ZORTLA Transmission",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: !0
                                    }), (0, i.jsx)(s.E.div, {
                                        initial: {
                                            y: -100
                                        },
                                        animate: {
                                            y: 500
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        },
                                        className: "absolute w-full h-px bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent"
                                    }), (0, i.jsx)("div", {
                                        className: "absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(64,224,208,0.1)_3px,transparent_3px)] opacity-20 pointer-events-none"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-3 z-20",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [(0, i.jsx)(s.E.div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: .5
                                            },
                                            className: "font-mono text-sm",
                                            children: (0, i.jsx)("p", {
                                                className: "font-azonix text-[#40E0D0] md:text-xs  text-[10px] tracking-wider",
                                                children: "[TRANSMISSION: X-742]"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, i.jsxs)(s.E.div, {
                                                animate: {
                                                    opacity: [.4, 1, .4]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: 1 / 0
                                                },
                                                className: "flex items-center gap-2",
                                                children: [(0, i.jsx)("div", {
                                                    className: "h-2 w-2 bg-emerald-500 rounded-full"
                                                }), (0, i.jsx)("span", {
                                                    className: "font-oxanium md:text-xs text-[10px] text-emerald-500/60",
                                                    children: "SIGNAL LOCKED"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, i.jsx)("div", {
                                                    className: "h-2 w-2 bg-[#40E0D0] rounded-full animate-pulse"
                                                }), (0, i.jsx)("span", {
                                                    className: "font-oxanium md:text-xs text-[10px] text-[#40E0D0]/60",
                                                    children: "DECODING"
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-10 bg-[#40E0D0]/5 backdrop-blur-md z-10"
                                })
                            ]
                        }), (0, i.jsx)(s.E.p, {
                            className: "text-center mt-4 font-oxanium text-sm text-emerald-400/60",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                delay: .3
                            },
                            children: "Direct feed from mr.ZORTLA's interdimensional communications network"
                        })]
                    })
                }),
                b = () => {
                    let e = [{
                        title: "Dimensional Gateway Activation",
                        status: "INITIATED",
                        items: ["Launch of $ZORT Token", "Listing on major DEXs", "Initial marketing campaign", "Community building on Telegram & Twitter", "First partnerships announcement"]
                    }, {
                        title: "Quantum Network Expansion",
                        status: "CALCULATING",
                        items: ["Additional CEX listings", "Implementation of staking mechanism", "Launch of NFT collection", "Community governance implementation", "Enhanced marketing initiatives"]
                    }, {
                        title: "Interdimensional Integration",
                        status: "PENDING",
                        items: ["Launch of ZORTLA's own DEX", "Cross-chain bridge development", "Strategic partnerships with other projects", "Enhanced utility features", "Major marketing campaigns"]
                    }, {
                        title: "Universal Dominance",
                        status: "ENCRYPTED",
                        items: ["Launch of ZORTLA ecosystem", "Multiple chain integration", "Advanced trading features", "Real-world partnerships", "Global expansion initiatives"]
                    }, {
                        title: "Cosmic Gaming Dimension",
                        status: "CLASSIFIED",
                        items: ["Launch of ZORTLA P2E Game Universe", "Cross-dimensional tournaments", "NFT character integration", "Metaverse expansion", "Gaming partnerships & collaborations"]
                    }];
                    return (0, i.jsxs)("section", {
                        className: "min-h-screen bg-[#020817] py-24 relative overflow-hidden",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 opacity-10",
                            children: (0, i.jsx)("div", {
                                className: "absolute inset-0",
                                style: {
                                    backgroundImage: "\n              radial-gradient(circle at center, #40E0D0 1px, transparent 1px),\n              linear-gradient(to right, #40E0D0 1px, transparent 1px),\n              linear-gradient(to bottom, #40E0D0 1px, transparent 1px)\n            ",
                                    backgroundSize: "40px 40px, 20px 20px, 20px 20px",
                                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
                                }
                            })
                        }), (0, i.jsxs)(s.E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6
                            },
                            className: "text-center mb-20",
                            children: [(0, i.jsx)("h2", {
                                className: "text-6xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text",
                                children: "Quantum Timeline"
                            }), (0, i.jsx)("p", {
                                className: "text-emerald-400/80 mt-4 font-oxanium text-xl",
                                children: "[INTERDIMENSIONAL EXPANSION PROTOCOL]"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: (0, i.jsx)("div", {
                                className: "space-y-12",
                                children: e.map((a, t) => (0, i.jsxs)(s.E.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: .1 * t
                                    },
                                    className: "relative",
                                    children: [(0, i.jsxs)("div", {
                                        className: "bg-[#040D1B]/80 rounded-xl border border-[#40E0D0]/20 p-8 relative overflow-hidden group",
                                        children: [(0, i.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-[#40E0D0]/0 to-[#40E0D0]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                                        }), (0, i.jsxs)("div", {
                                            className: "relative z-10",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex items-center gap-4 mb-6",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "h-2 w-2 bg-[#40E0D0] rounded-full animate-pulse"
                                                    }), (0, i.jsxs)("p", {
                                                        className: "font-mono text-sm text-[#40E0D0]/60",
                                                        children: ["[PHASE ", t + 1, ": ", a.status, "]"]
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "h-px flex-grow bg-gradient-to-r from-[#40E0D0]/50 to-transparent"
                                                })]
                                            }), (0, i.jsx)("h3", {
                                                className: "text-2xl font-oxanium text-emerald-400 mb-4",
                                                children: a.title
                                            }), (0, i.jsx)("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: a.items.map((e, a) => (0, i.jsxs)(s.E.div, {
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    whileInView: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        delay: .2 + .1 * a
                                                    },
                                                    className: "flex items-start gap-3",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "w-5 h-5 mt-1 border border-[#40E0D0]/30 rounded flex items-center justify-center",
                                                        children: (0, i.jsx)("div", {
                                                            className: "w-2 h-2 bg-[#40E0D0]/50 rounded-full"
                                                        })
                                                    }), (0, i.jsx)("p", {
                                                        className: "text-gray-400",
                                                        children: e
                                                    })]
                                                }, a))
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "absolute top-0 right-0 w-16 h-16",
                                            children: (0, i.jsx)("div", {
                                                className: "absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#40E0D0]/30 animate-pulse"
                                            })
                                        })]
                                    }), t < e.length - 1 && (0, i.jsx)("div", {
                                        className: "absolute left-1/2 bottom-0 w-px h-12 bg-gradient-to-b from-[#40E0D0]/50 to-transparent"
                                    })]
                                }, t))
                            })
                        })]
                    })
                },
                f = t(7648),
                v = () => (0, i.jsxs)("section", {
                    className: "py-20 bg-[#020817] relative overflow-hidden",
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 opacity-10",
                        children: (0, i.jsx)("div", {
                            className: "absolute inset-0",
                            style: {
                                backgroundImage: "\n              radial-gradient(circle at center, #40E0D0 1px, transparent 1px),\n              linear-gradient(to right, #40E0D0 1px, transparent 1px),\n              linear-gradient(to bottom, #40E0D0 1px, transparent 1px)\n            ",
                                backgroundSize: "40px 40px, 20px 20px, 20px 20px",
                                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
                            }
                        })
                    }), (0, i.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: [(0, i.jsxs)(s.E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6
                            },
                            className: "text-center mb-16",
                            children: [(0, i.jsx)("h2", {
                                className: "text-4xl md:text-5xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text mb-4",
                                children: "Interdimensional Networks"
                            }), (0, i.jsx)("p", {
                                className: "text-emerald-400/80 font-mono",
                                children: "[AUTHORIZED COMMUNICATION CHANNELS]"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6",
                            children: [{
                                name: "Pump.fun",
                                icon: "/images/pump.png",
                                href: "https://pump.fun/coin/ABo183yQwikesi7AYhcgmTHtfPv6qDTtgqCmYtZGpump",
                                label: "Energy Amplifier"
                            }, {
                                name: "Dexscreener",
                                icon: "/images/dexscreener.svg",
                                href: "https://dexscreener.com",
                                label: "Quantum Price Matrix"
                            }, {
                                name: "Dextools",
                                icon: "/images/dextools.svg",
                                href: "https://www.dextools.io",
                                label: "Statistical Nexus"
                            }, {
                                name: "Telegram",
                                icon: "/images/telegram.svg",
                                href: "https://t.me/+6xsGAlQXXUplMjEx",
                                label: "Direct Transmission"
                            }, {
                                name: "Twitter",
                                icon: "/images/x-black.png",
                                href: "https://x.com/mrZORTLA",
                                label: "Dimensional Broadcast"
                            }, {
                                name: "Reddit",
                                icon: "/images/reddit.png",
                                href: "https://www.reddit.com/r/ZortlaVerse",
                                label: "Dimensional Forum"
                            }, {
                                name: "YouTube",
                                icon: "/images/youtube.png",
                                href: "https://www.youtube.com/@mrZORTLA",
                                label: "Visual Portal"
                            }, {
                                name: "Instagram",
                                icon: "/images/instagram.png",
                                href: "https://www.instagram.com/mrzortla",
                                label: "Dimensional's Eye"
                            }, {
                                name: "Tiktok",
                                icon: "/images/tiktok.png",
                                href: "https://www.tiktok.com/@mrzortla",
                                label: "Dimensional Vibration"
                            }].map((e, a) => (0, i.jsx)(s.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .1 * a
                                },
                                children: (0, i.jsx)(f.default, {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block",
                                    children: (0, i.jsxs)(s.E.div, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        className: "bg-[#040D1B]/80 border border-[#40E0D0]/20 rounded-xl p-6 h-full group relative overflow-hidden",
                                        children: [(0, i.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-[#40E0D0]/0 to-[#40E0D0]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                                        }), (0, i.jsxs)("div", {
                                            className: "relative z-10 flex flex-col items-center space-y-4",
                                            children: [(0, i.jsx)("div", {
                                                className: "relative w-12 h-12 mb-2",
                                                children: (0, i.jsx)(r.default, {
                                                    src: e.icon,
                                                    alt: e.name,
                                                    fill: !0,
                                                    sizes: "100%",
                                                    className: "object-contain ".concat("Pump.fun" !== e.name ? "filter brightness-0 invert" : "")
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, i.jsx)("p", {
                                                    className: "text-emerald-400 font-mono text-sm mb-1",
                                                    children: e.label
                                                }), (0, i.jsxs)("p", {
                                                    className: "text-gray-400 text-xs font-mono",
                                                    children: ["[", e.name, "]"]
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "absolute top-0 right-0 w-8 h-8",
                                                children: (0, i.jsx)("div", {
                                                    className: "absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#40E0D0]/30 animate-pulse"
                                                })
                                            })]
                                        })]
                                    })
                                })
                            }, e.name))
                        })]
                    })]
                }),
                y = () => {
                    let e = [{
                        label: "Quantum Manifestation Limit",
                        value: "1B $ZORT",
                        description: "Total Crystalline Leakage",
                        icon: (0, i.jsx)("div", {
                            className: "w-12 h-12 rounded-full border-2 border-[#40E0D0] flex items-center justify-center",
                            children: (0, i.jsx)(s.E.div, {
                                animate: {
                                    scale: [1, 1.2, 1],
                                    opacity: [.5, 1, .5]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "w-6 h-6 rounded-full bg-[#40E0D0]/30"
                            })
                        })
                    }, {
                        label: "Dimensional Stability Pool",
                        value: "STABILIZED",
                        description: "Interdimensional liquidity matrix secured",
                        icon: (0, i.jsx)("div", {
                            className: "w-12 h-12 rounded-full border-2 border-[#40E0D0] flex items-center justify-center",
                            children: (0, i.jsx)(s.E.div, {
                                animate: {
                                    rotate: [0, 360]
                                },
                                transition: {
                                    duration: 8,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "w-8 h-8 border-t-2 border-[#40E0D0] rounded-full"
                            })
                        })
                    }, {
                        label: "Void Transmissions",
                        value: "NULL",
                        description: "No quantum energy loss during token transfers",
                        icon: (0, i.jsx)("div", {
                            className: "w-12 h-12 rounded-full border-2 border-[#40E0D0] flex items-center justify-center",
                            children: (0, i.jsx)(s.E.div, {
                                animate: {
                                    opacity: [0, 1, 0]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0
                                },
                                className: "w-6 h-px bg-[#40E0D0]"
                            })
                        })
                    }, {
                        label: "Neural Control Matrix",
                        value: "DECENTRALIZED",
                        description: "Autonomous interdimensional governance achieved",
                        icon: (0, i.jsx)("div", {
                            className: "w-12 h-12 rounded-full border-2 border-[#40E0D0] flex items-center justify-center",
                            children: (0, i.jsx)(s.E.div, {
                                animate: {
                                    scale: [1, 1.2, 1],
                                    rotateY: [0, 360]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "w-6 h-6 bg-[#40E0D0]/30 transform-gpu"
                            })
                        })
                    }];
                    return (0, i.jsxs)("section", {
                        id: "tokenomics",
                        className: "min-h-screen bg-[#020817] py-24 relative overflow-hidden",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, i.jsx)("div", {
                                className: "absolute inset-0 opacity-10",
                                style: {
                                    backgroundImage: "\n              radial-gradient(circle at center, #40E0D0 1px, transparent 1px),\n              linear-gradient(to right, #40E0D0 1px, transparent 1px),\n              linear-gradient(to bottom, #40E0D0 1px, transparent 1px)\n            ",
                                    backgroundSize: "40px 40px, 20px 20px, 20px 20px",
                                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
                                }
                            })
                        }), (0, i.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [(0, i.jsxs)(s.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .6
                                },
                                className: "text-center mb-20",
                                children: [(0, i.jsx)("h2", {
                                    className: "text-6xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text",
                                    children: "Quantum Economics"
                                }), (0, i.jsx)("p", {
                                    className: "text-emerald-400/80 mt-4 font-oxanium text-xl",
                                    children: "[CRYSTALLINE TOKEN MATRIX PARAMETERS]"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                children: e.map((e, a) => (0, i.jsxs)(s.E.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .1 * a
                                    },
                                    className: "bg-[#040D1B]/80 p-8 rounded-xl border border-[#40E0D0]/20 relative group",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-[#40E0D0]/0 to-[#40E0D0]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                                    }), (0, i.jsxs)("div", {
                                        className: "relative z-10",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-center gap-6 mb-4",
                                            children: [e.icon, (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("h3", {
                                                    className: "text-lg font-mono text-emerald-400",
                                                    children: e.label
                                                }), (0, i.jsx)("p", {
                                                    className: "text-3xl font-bold font-oxanium text-[#40E0D0] mt-1",
                                                    children: e.value
                                                })]
                                            })]
                                        }), (0, i.jsx)("p", {
                                            className: "text-gray-400 pl-[72px]",
                                            children: e.description
                                        })]
                                    })]
                                }, a))
                            })]
                        })]
                    })
                },
                N = t(7985),
                E = () => (0, i.jsx)("div", {
                    className: "relative z-10 max-w-7xl mx-auto px-4 pt-20",
                    children: (0, i.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                        children: [(0, i.jsxs)(s.E.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8
                            },
                            className: "space-y-6",
                            children: [(0, i.jsx)("h1", {
                                className: "text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-bold font-oxanium bg-gradient-to-r from-[#40E0D0] via-emerald-500 to-green-500 text-transparent bg-clip-text",
                                children: "MR.ZORTLA"
                            }), (0, i.jsx)("p", {
                                className: "text-xl md:text-5xl text-emerald-400/90 font-oxanium",
                                children: "The Crystalline Entity"
                            }), (0, i.jsx)("p", {
                                className: "text-xl md:text-3xl text-emerald-400/90 font-oxanium",
                                children: "From Planet X-742"
                            }), (0, i.jsx)(N.Z, {
                                text: "Enter Dimension",
                                className: "xl:w-8/12 lg:w-9/12",
                                onClick: () => window.open("https://pump.fun/coin/ABo183yQwikesi7AYhcgmTHtfPv6qDTtgqCmYtZGpump", "_blank")
                            })]
                        }), (0, i.jsxs)(s.E.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8
                            },
                            className: "relative h-[600px]",
                            children: [(0, i.jsx)("div", {
                                className: "relative h-full",
                                children: (0, i.jsxs)("div", {
                                    className: "relative h-full",
                                    children: [(0, i.jsx)(r.default, {
                                        src: "/images/main-zort.gif",
                                        alt: "Mr. ZORTLA",
                                        width: 0,
                                        height: 0,
                                        className: "object-contain w-full h-full",
                                        sizes: "100vw",
                                        priority: !0,
                                        unoptimized: !0,
                                        style: {
                                            opacity: .1
                                        }
                                    }), (0, i.jsx)("div", {
                                        className: "absolute inset-0 overflow-hidden",
                                        style: {
                                            maskImage: "url(/images/main-zort.gif)",
                                            WebkitMaskImage: "url(/images/main-zort.gif)",
                                            maskSize: "contain",
                                            WebkitMaskSize: "contain",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            WebkitMaskPosition: "center"
                                        },
                                        children: (0, i.jsx)("div", {
                                            className: "w-full h-full grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(45,1fr)]",
                                            children: Array.from({
                                                length: 1350
                                            }).map((e, a) => (0, i.jsx)(s.E.div, {
                                                className: "bg-[#40E0D0]",
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
                                                    delay: 1.5 * Math.random(),
                                                    ease: "easeOut"
                                                }
                                            }, a))
                                        })
                                    }), (0, i.jsx)(s.E.div, {
                                        className: "absolute inset-0",
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
                                        children: (0, i.jsx)(r.default, {
                                            src: "/images/main-zort.gif",
                                            alt: "Mr.ZORTLA",
                                            width: 0,
                                            height: 0,
                                            className: "object-contain w-full h-full",
                                            sizes: "100vw",
                                            priority: !0,
                                            unoptimized: !0
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "absolute inset-0",
                                        style: {
                                            maskImage: "url(/images/main-zort.gif)",
                                            WebkitMaskImage: "url(/images/main-zort.gif)",
                                            maskSize: "contain",
                                            WebkitMaskSize: "contain",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            WebkitMaskPosition: "center"
                                        },
                                        children: Array.from({
                                            length: 30
                                        }).map((e, a) => (0, i.jsx)(s.E.div, {
                                            className: "absolute w-1 h-1 bg-[#40E0D0]",
                                            style: {
                                                left: "".concat(100 * Math.random(), "%"),
                                                top: "".concat(100 * Math.random(), "%")
                                            },
                                            animate: {
                                                opacity: [0, .5, 0],
                                                scale: [1, 1.5, 1]
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: 1 / 0,
                                                delay: 2 * Math.random()
                                            }
                                        }, "noise-".concat(a)))
                                    })]
                                })
                            }), (0, i.jsx)(s.E.div, {
                                animate: {
                                    scale: [1, 1.1, 1],
                                    opacity: [.1, .2, .1]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: 1 / 0,
                                    ease: "easeInOut"
                                },
                                className: "absolute inset-0 bg-gradient-to-r from-[#40E0D0]/10 to-emerald-500/10 rounded-full blur-3xl -z-10"
                            })]
                        })]
                    })
                });

            function j() {
                let [e, a] = (0, n.useState)({
                    width: 0,
                    height: 0
                });
                return (0, n.useEffect)(() => {
                    a({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                    let e = () => {
                        a({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), (0, i.jsxs)(s.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "min-h-screen relative overflow-hidden pt-20 bg-[#020817]",
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 opacity-20",
                        style: {
                            backgroundImage: "\n            radial-gradient(circle at center, #40E0D0 1px, transparent 1px),\n            linear-gradient(to right, #40E0D0 1px, transparent 1px),\n            linear-gradient(to bottom, #40E0D0 1px, transparent 1px)\n          ",
                            backgroundSize: "40px 40px, 20px 20px, 20px 20px",
                            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
                        }
                    }), (0, i.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [(0, i.jsx)("div", {
                            className: "absolute top-0 -left-20 w-96 h-96 bg-[#40E0D0] mix-blend-screen opacity-20 blur-[100px] animate-blob"
                        }), (0, i.jsx)("div", {
                            className: "absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 mix-blend-screen opacity-20 blur-[100px] animate-blob animation-delay-2000"
                        }), (0, i.jsx)("div", {
                            className: "absolute bottom-40 left-20 w-96 h-96 bg-green-500 mix-blend-screen opacity-20 blur-[100px] animate-blob animation-delay-4000"
                        })]
                    }), e.width > 0 && (0, i.jsx)("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: Array.from({
                            length: 30
                        }).map((a, t) => (0, i.jsx)(s.E.div, {
                            className: "absolute w-2 h-2 bg-emerald-500/30",
                            initial: {
                                x: Math.random() * e.width,
                                y: -20
                            },
                            animate: {
                                y: e.height + 20,
                                opacity: [0, 1, 0]
                            },
                            transition: {
                                duration: 2 + 3 * Math.random(),
                                repeat: 1 / 0,
                                delay: 2 * Math.random(),
                                ease: "linear"
                            }
                        }, t))
                    }), (0, i.jsx)(E, {}), (0, i.jsx)("div", {
                        className: "mt-24",
                        id: "chronicles",
                        children: (0, i.jsx)(g, {})
                    }), (0, i.jsx)("div", {
                        className: "mt-24",
                        id: "chronicles",
                        children: (0, i.jsx)(h, {})
                    }), (0, i.jsx)("div", {
                        className: "mt-24",
                        children: (0, i.jsx)(d, {})
                    }), (0, i.jsx)("div", {
                        className: "mt-24",
                        id: "dimensional-access",
                        children: (0, i.jsx)(u, {})
                    }), (0, i.jsx)("div", {
                        className: "mt-24",
                        id: "crystal-matrix",
                        children: (0, i.jsx)(y, {})
                    }), (0, i.jsx)("div", {
                        className: "mt-24",
                        id: "dimensional-access",
                        children: (0, i.jsx)(b, {})
                    }), (0, i.jsx)("div", {
                        className: "mt-24",
                        id: "dimensional-access",
                        children: (0, i.jsx)(v, {})
                    })]
                })
            }
        },
        7985: function(e, a, t) {
            "use strict";
            var i = t(7437),
                n = t(4936),
                s = t(2265);
            let r = s.forwardRef((e, a) => {
                let {
                    text: t,
                    className: r = "",
                    textColor: l = "black",
                    gradientFrom: o = "#40E0D0",
                    gradientTo: c = "#38ef7d",
                    pixelColor: d = "#40E0D0",
                    onClick: m,
                    onMouseEnter: x,
                    onMouseLeave: p,
                    onFocus: u,
                    onBlur: h,
                    disabled: g,
                    type: b = "button",
                    ...f
                } = e, v = (0, s.useMemo)(() => Array.from({
                    length: 20
                }).map(() => ({
                    left: "".concat(100 * Math.random(), "%"),
                    top: "".concat(100 * Math.random(), "%"),
                    delay: 2 * Math.random()
                })), []), y = (0, s.useMemo)(() => Array.from({
                    length: 240
                }).map(() => 1.5 * Math.random()), []);
                return (0, i.jsx)(n.E.div, {
                    whileHover: {
                        scale: g ? 1 : 1.05
                    },
                    whileTap: {
                        scale: g ? 1 : .95
                    },
                    className: "relative ".concat(r),
                    children: (0, i.jsxs)("button", {
                        ref: a,
                        type: b,
                        disabled: g,
                        onClick: m,
                        onMouseEnter: x,
                        onMouseLeave: p,
                        onFocus: u,
                        onBlur: h,
                        className: "relative w-full overflow-hidden rounded-full px-8 py-4 transition-opacity ".concat(g ? "opacity-50 cursor-not-allowed" : ""),
                        ...f,
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
                                }).map((e, a) => (0, i.jsx)(n.E.div, {
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
                                        delay: y[a],
                                        ease: "easeOut"
                                    }
                                }, a))
                            }), v.map((e, a) => (0, i.jsx)(n.E.div, {
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
                            }, "noise-".concat(a)))]
                        }), (0, i.jsx)(n.E.span, {
                            className: "relative z-10 font-azonix text-xl",
                            style: {
                                color: l
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
                            children: t
                        }), (0, i.jsx)(n.E.div, {
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
            r.displayName = "DigitalButton", a.Z = r
        }
    },
    function(e) {
        e.O(0, [332, 971, 117, 744], function() {
            return e(e.s = 193)
        }), _N_E = e.O()
    }
]);