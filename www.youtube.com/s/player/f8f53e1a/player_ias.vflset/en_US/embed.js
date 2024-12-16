(function(g) {
    var window = this;
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var cWE = function(k) {
            k.mutedAutoplay = !1;
            k.endSeconds = NaN;
            k.limitedPlaybackDurationInSeconds = NaN;
            g.NY(k)
        },
        uKe = function(k) {
            g.Zd(k);
            for (var y = 0; y < k.HO.length; y++) {
                var q = k.HO[y],
                    N = k.FR[y];
                if (N !== q.version) return !0;
                if (!g.eT(q) || q.Mz)
                    if (q.Mz || q.kS !== g.JU)(q.hQ(q) || uKe(q)) && q.fG(q), q.Mz = !1, q.kS = g.JU;
                if (N !== q.version) return !0
            }
            return !1
        },
        B7 = function(k) {
            var y = g.hU(k);
            k = {};
            return k[Symbol.dispose] = function() {
                g.hU(y)
            }, k
        },
        aj$ = function() {
            var k = Object.assign({}, g.CjN);
            Object.getOwnPropertyNames(g.CjN).forEach(function(y) {
                g.yB[y] !== void 0 && (k[y] = g.yB[y])
            });
            return k
        },
        xxE = function() {
            return {
                X: "svg",
                K: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                L: [{
                    X: "path",
                    ov: !0,
                    D: "ytp-svg-fill",
                    K: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        jSg = function() {
            return {
                X: "svg",
                K: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                L: [{
                    X: "path",
                    K: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    X: "path",
                    K: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    X: "path",
                    K: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    X: "path",
                    K: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    X: "path",
                    K: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    X: "path",
                    K: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        QK = function(k) {
            var y = U1;
            U1 = k;
            k = {};
            return k[Symbol.dispose] = function() {
                U1 = y
            }, k
        },
        X$N = function(k, y) {
            k.eA || (k.eA = []);
            k.eA.push(y)
        },
        zc$ = function(k) {
            var y = U1;
            y && !y.VM && (X$N(y, function() {
                return void $xq(k)
            }), k.parent = y)
        },
        rWw = function(k) {
            if (k.eA) {
                var y = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    var q;
                    g.tG(y, (q = p$B) == null ? void 0 : q());
                    for (var N = g.p(k.eA), D = N.next(); !D.done; D = N.next()) {
                        var n = D.value;
                        n()
                    }
                    k.eA.length = 0
                } catch (T) {
                    y.error = T, y.hasError = !0
                } finally {
                    g.kN(y)
                }
            }
        },
        $xq = function(k) {
            if (!k.VM) {
                k.VM = !0;
                var y;
                (y = k[Symbol.dispose]) == null || y.call(k);
                delete k.parent;
                rWw(k)
            }
        },
        iXw = function() {
            var k;
            var y = (k = mxE) != null ? k : mxE = g.kD(!0);
            return B7(y)
        },
        OXN = function(k) {
            fjq.add(k);
            for (var y = g.p(k), q = y.next(); !q.done; q = y.next()) {
                var N = q.value;
                for (q = [N]; N.parent !== void 0;) N = N.parent, k.has(N) && q.push(N);
                for (; q.length > 0;) {
                    N = q.pop();
                    try {
                        N.run()
                    } finally {
                        k.delete(N)
                    }
                }
            }
            fjq.delete(k)
        },
        voE = function() {
            var k;
            g.B(function(y) {
                if (y.Z == 1) return k = PiT, PiT = new Set, g.b(y, Promise.resolve(), 2);
                OXN(k);
                g.XZ(y)
            })
        },
        CiF = function() {
            return Array.from(fjq).map(function(k) {
                return Array.from(k)
            })
        },
        EoG = function(k) {
            var y = k.component;
            var q = k.debugInstance;
            k = k.a_;
            var N, D = (N = y.zA) != null ? N : y.name;
            MX.push({
                name: q ? D + " (" + q + ")" : D,
                pz: !0
            });
            y = k();
            MX.pop();
            return y
        },
        FY = function(k, y) {
            y = y === void 0 ? {} : y;
            var q = MX.length;
            y.stack && (MX = [].concat(g.m(y.stack)));
            try {
                return k()
            } catch (n) {
                k = n;
                bX1(k);
                if (k !== VgG) {
                    BNF = MX.slice();
                    y = [];
                    for (var N = U1; N;) {
                        var D = void 0;
                        y.push((D = N.zA) != null ? D : "[context]");
                        D = void 0;
                        N = (D = N.parent) != null ? D : null
                    }
                    UxE = y.reverse()
                }
                VgG = k;
                throw k;
            } finally {
                q = MX.length - q, q > 0 && MX.splice(-q)
            }
        },
        bX1 = function(k) {
            var y = MX;
            if (y.length !== 0 && !k.Jq) {
                var q = y.slice(-20).reverse().map(function(N) {
                    return N.name
                }).join(" > ");
                q = k.message + "\n\nComponent stack: " + q;
                try {
                    k.Jq = y.slice(), g.yB.xM && (k.stack && (k.stack = k.stack.replace(k.message, q)), k.message = q)
                } catch (N) {}
            }
        },
        QSO = function() {
            g.Zd(this);
            if (g.eT(this))
                for (var k = 0; k < this.HO.length; k++) g.WI(this.HO[k], this.IR[k]);
            this.HO.length = this.FR.length = this.IR.length = 0;
            this.aK && (this.aK.length = this.qG.length = 0);
            Ye.delete(this);
            PiT.delete(this);
            $xq(this)
        },
        G_ = function(k, y, q) {
            var N, D;
            var n = (D = (N = BNF) == null ? void 0 : N.slice()) != null ? D : [];
            var T, I;
            N = (I = (T = UxE) == null ? void 0 : T.slice()) != null ? I : [];
            y = {
                Jq: n,
                i6H: N,
                sU: q === void 0 ? 3 : q,
                yCH: aj$(),
                JNw: U1,
                NkS: CiF(),
                z6T: [].concat(g.m(Mg$.slice(Sy)), g.m(Mg$.slice(0, Sy))),
                tagName: y
            };
            return [k, y]
        },
        FIT = function(k) {
            p$B = iXw;
            var y = U1;
            if (y) {
                var q = MX.slice();
                X$N(y, function() {
                    return void FY(function() {
                        return void k()
                    }, {
                        stack: q
                    })
                })
            }
        },
        Yee = function(k) {
            var y = g.yB.RQ || !!U1,
                q = {};
            (y === void 0 || y) && zc$(q);
            y = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                g.tG(y, QK(q)), k(q)
            } catch (N) {
                y.error = N, y.hasError = !0
            } finally {
                g.kN(y)
            }
            return function() {
                return void $xq(q)
            }
        },
        LIL = function(k, y) {
            SeT++;
            var q = Object.create(Gl1);
            q.Jq = MX.slice();
            q.Y0 = k;
            y && (q.zA = y);
            zc$(q);
            if ((k = g.oz) && k.isAsync) {
                var N;
                (N = g.yB.handleError) == null || N.call.apply(N, [g.yB].concat(g.m(G_(Error("Sync reactions can not be called inside a reaction call.")))))
            }
            q.run()
        },
        dxG = function(k) {
            var y = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                return g.tG(y, B7(null)), k()
            } catch (q) {
                y.error = q, y.hasError = !0
            } finally {
                g.kN(y)
            }
        },
        hcF = function(k, y, q) {
            if (Object.hasOwnProperty.call(goq, k) && (k = goq[k], Object.hasOwnProperty.call(k, y) && (k = k[y], k instanceof Array))) {
                for (var N = null, D = !1, n = 0, T = k.length; n < T; ++n) {
                    var I = k[n],
                        H = I.FN;
                    if (!H) return I.Jb;
                    N === null && (N = {});
                    H = Object.hasOwnProperty.call(N, H) ? N[H] : N[H] = q(H);
                    if (H === I.W6) return I.Jb;
                    H == null && (D = !0)
                }
                if (D) return null
            }
            y = ooO[y];
            return typeof y === "number" ? y : null
        },
        ecE = function(k, y) {
            y = hcF(k.toLowerCase(), y, function() {
                var N;
                (N = g.yB.handleError) == null || N.call.apply(N, [g.yB].concat(g.m(G_(Error("Contingent attribute/property lookups are not supported."), k.toLowerCase()))))
            });
            if (y === null) return null;
            var q;
            return (q = Rce[y]) != null ? q : null
        },
        WI$ = function(k, y, q) {
            if (q === null || q === void 0) return q;
            k = ecE(k, y);
            return k === null ? q : k(y, q)
        },
        ljq = function(k) {
            function y(N, D, n) {
                g.My(N, ZXq);
                for (var T = Math.min(D.length - n, N.length), I = 0; I < T; I++)
                    if (N[I] !== ZXq(D[n + I])) return !1;
                return !0
            }
            k = String(k);
            for (var q = 0;
                (q = k.indexOf("<", q)) != -1;) {
                if (y("\x3c/script", k, q) || y("\x3c!--", k, q)) return "zSoyz";
                q += 1
            }
            return k
        },
        ZXq = function(k) {
            return "A" <= k && k <= "Z" ? k.toLowerCase() : k
        },
        sSb = function() {},
        LE = function(k, y) {
            for (; k.length > y;) k.pop()
        },
        JWG = function(k) {
            k = Array(k);
            LE(k, 0);
            return k
        },
        tgq = function(k, y, q) {
            if (q == null) k.removeAttribute(y);
            else {
                var N = y.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : y.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null;
                N ? k.setAttributeNS(N, y, q) : k.setAttribute(y, q)
            }
        },
        ybb = function(k, y, q) {
            k = k.style;
            if (typeof q === "string") k.cssText = q;
            else {
                k.cssText = "";
                for (var N in q)
                    if (kYE.call(q, N)) {
                        y = k;
                        var D = N,
                            n = q[N];
                        D.indexOf("-") >= 0 ? y.setProperty(D, n) : y[D] = n
                    }
            }
        },
        qsB = function(k, y, q) {
            var N = typeof q;
            N === "object" || N === "function" ? k[y] = q : tgq(k, y, q)
        },
        NyT = function() {
            var k = new sSb;
            k.__default = qsB;
            k.style = ybb;
            return k
        },
        DsE = function(k, y, q, N) {
            (N[y] || N.__default)(k, y, q)
        },
        n1g = function(k) {
            this.created = [];
            this.Z = [];
            this.node = k
        },
        Tyb = function(k, y) {
            this.Z = null;
            this.N = k;
            this.key = y;
            this.text = void 0
        },
        waw = function(k, y, q) {
            y = new Tyb(y, q);
            return k.__incrementalDOMData = y
        },
        dA = function(k, y) {
            if (k.__incrementalDOMData) return k.__incrementalDOMData;
            var q = k.nodeType === 1 ? k.localName : k.nodeName,
                N = k.nodeType === 1 ? k.getAttribute("key") : null;
            y = waw(k, q, k.nodeType === 1 ? N || y : null);
            if (k.nodeType === 1 && (k = k.attributes, q = k.length)) {
                N = y.Z || (y.Z = JWG(q * 2));
                for (var D = 0, n = 0; D < q; D += 1, n += 2) {
                    var T = k[D],
                        I = T.value;
                    N[n] = T.name;
                    N[n + 1] = I
                }
            }
            return y
        },
        IfB = function(k, y, q, N, D) {
            return y == q && N == D
        },
        RZ = function(k) {
            for (var y = gA, q = oZ(); q !== k;) {
                var N = q.nextSibling;
                y.removeChild(q);
                hA.Z.push(q);
                q = N
            }
        },
        oZ = function() {
            return ey ? ey.nextSibling : gA.firstChild
        },
        HCN = function(k, y) {
            ey = oZ();
            var q;
            a: {
                if (q = ey) {
                    do {
                        var N = q,
                            D = k,
                            n = y,
                            T = dA(N, n);
                        if (W7(N, D, T.N, n, T.key)) break a
                    } while (y && (q = q.nextSibling))
                }
                q = null
            }
            q || (k === "#text" ? (k = Zi.createTextNode(""), waw(k, "#text", null)) : (q = Zi, N = gA, typeof k === "function" ? q = new k : q = (N = k === "svg" ? "http://www.w3.org/2000/svg" : k === "math" ? "http://www.w3.org/1998/Math/MathML" : N == null || dA(N).N === "foreignObject" ? null : N.namespaceURI) ? q.createElementNS(N, k) : q.createElement(k), waw(q, k, y), k = q), hA.created.push(k), q = k);
            k = q;
            if (k !== ey) {
                if (lN.indexOf(k) >= 0)
                    for (y = gA, q = k.nextSibling,
                        N = ey; N !== null && N !== k;) D = N.nextSibling, y.insertBefore(N, q), N = D;
                else gA.insertBefore(k, ey);
                ey = k
            }
        },
        KB$ = function(k, y) {
            HCN(k, y);
            gA = ey;
            ey = null;
            return gA
        },
        cbg = function(k, y) {
            y = y === void 0 ? {} : y;
            var q = y.matches === void 0 ? IfB : y.matches;
            return function(N, D, n) {
                var T = hA,
                    I = Zi,
                    H = lN,
                    K = s1,
                    A = ey,
                    c = gA,
                    u = W7;
                Zi = N.ownerDocument;
                hA = new n1g(N);
                W7 = q;
                s1 = [];
                ey = null;
                var a = gA = N.parentNode,
                    x, r = Abw.call(N);
                if ((x = r.nodeType === 11 || r.nodeType === 9 ? r.activeElement : null) && N.contains(x)) {
                    for (r = []; x !== a;) r.push(x), x = x.parentNode || (a ? x.host : null);
                    a = r
                } else a = [];
                lN = a;
                try {
                    return k(N, D, n)
                } finally {
                    N = hA, JA && N.Z.length > 0 && JA(N.Z), Zi = I, hA = T, W7 = u, s1 = K, ey = A, gA = c, lN = H
                }
            }
        },
        um1 = function(k, y, q, N) {
            tA.push(DsE);
            tA.push(k);
            tA.push(y);
            tA.push(q);
            tA.push(N)
        },
        af1 = function(k) {
            HCN("#text", null);
            var y = ey;
            var q = dA(y);
            if (q.text !== k) {
                q = q.text = k;
                for (var N = 1; N < arguments.length; N += 1) q = (0, arguments[N])(q);
                y.data !== q && (y.data = q)
            }
        },
        ki = function(k, y, q) {
            if (q === !1 && xsq.has(y)) tgq(k, y, null);
            else if (y !== "idomKey" && y !== "skip" && y !== "skipchildren" && y !== "children" && y !== "el") {
                if (y.startsWith("on"))
                    if (y[2] === ":") {
                        if (q === void 0 || q === null) {
                            var N;
                            (N = g.yB.handleError) == null || N.call.apply(N, [g.yB].concat(g.m(G_(Error("The " + y + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."), k.tagName))));
                            k[y] = void 0;
                            return
                        }
                        if (typeof q !== "object" || q === null) throw Error("Expected " + y + " to be an EventHandler but its type was: " +
                            (typeof q + ". Event handlers must be created using useHandler."));
                        if (typeof q.q7 !== "function") throw Error("Expected the event handler for " + y + " to have a 'getFn' property but its keys were: " + (Object.keys(q) + ". Event handlers must be created using useHandler."));
                        var D = q.q7(0),
                            n = y.slice(3);
                        k["on" + n] === void 0 ? (k.addEventListener(n, D), FIT(function() {
                            return void k.removeEventListener(n, D)
                        })) : k["on" + n] = D
                    } else {
                        joe(k, y, q);
                        return
                    }
                else if (y.startsWith("data-") && typeof q === "string") try {
                    q = ljq(q)
                } catch (T) {
                    q = "zSoyz"
                }
                typeof q !== "function" || k._disposeEffects != null ? (g.yB.K4 && (q = WI$(k.tagName, y, q)), y === "style" ? Xaw(k, y, q) : y.startsWith("prop:") ? k[y.slice(5)] = q : joe(k, y, q)) : (k._signalProps || (k._signalProps = []), k._signalValues || (k._signalValues = []), k._signalProps.push(y))
            }
        },
        $sL = function(k, y, q) {
            q = (q === void 0 ? {} : q).pz;
            if (y == null ? 0 : y.el) {
                var N = y.el;
                if (typeof N === "function") N(k);
                else {
                    var D;
                    (D = N.h4M) == null || D.call(N, k);
                    k._disposeRef || (k._disposeRef = function() {
                        var n;
                        (n = N.bZT) == null || n.call(N);
                        delete k._disposeRef
                    }, q && FIT(function() {
                        var n;
                        return void((n = k._disposeRef) == null ? void 0 : n.call(k))
                    }))
                }
            }
        },
        yJ = function(k, y) {
            var q = g.P6.apply(2, arguments),
                N;
            y = (N = y) != null ? N : {};
            N = {};
            return N.type = k, N.props = y, N.children = q, N[zXq] = !0, N
        },
        pa$ = function(k) {
            return k.children
        },
        rbG = function() {
            var k = !1;
            qh !== Nh && (qh = Nh, k = !0);
            var y = {};
            return y[Symbol.dispose] = function() {
                k && (qh = yJ)
            }, y
        },
        msg = function() {
            var k = !1;
            qh !== yJ && (qh = yJ, k = !0);
            var y = {};
            return y[Symbol.dispose] = function() {
                k && (qh = Nh)
            }, y
        },
        iCx = function(k) {
            return "(" + typeof k + ") " + (k != null && typeof k === "object" ? k.constructor.name : typeof k) + " " + k
        },
        DQ = function() {
            return document.createTextNode("")
        },
        nb = function(k) {
            k = document.createTextNode(String(k));
            k._isSignalTextNode = !0;
            return k
        },
        T8 = function(k) {
            k = typeof k;
            return k === "string" || k === "number" || k === "boolean"
        },
        wU = function(k) {
            return k instanceof g.bC || g.Qx(k) || !1
        },
        IR = function(k, y) {
            k.parentElement && k.parentElement.replaceChild(y, k);
            return y
        },
        H_ = function(k, y) {
            var q = k[0].parentElement;
            if (q)
                if (k[0].previousSibling || k[k.length - 1].nextSibling) {
                    q.insertBefore(y, k[0]);
                    for (var N = k.length - 1; N >= 0; N--) q.removeChild(k[N])
                } else q.textContent = "", q.appendChild(y);
            return y
        },
        ffB = function(k, y) {
            if (k[0].parentElement)
                for (var q = k[0].parentElement, N = y.length, D = k.length, n = N, T = 0, I = 0, H = k[D - 1].nextSibling, K = null; T < D || I < n;)
                    if (k[T] === y[I]) T++, I++;
                    else {
                        for (; k[D - 1] === y[n - 1];) D--, n--;
                        if (D === T)
                            for (var A = n < N ? I ? y[I - 1].nextSibling : y[n - I] : H; I < n;) q.insertBefore(y[I++], A);
                        else if (n === I)
                            for (; T < D;) A = k[T], K && K.has(A) || q.removeChild(A), T++;
                        else if (k[T] === y[n - 1] && y[I] === k[D - 1]) A = k[--D].nextSibling, q.insertBefore(y[I++], k[T++].nextSibling), q.insertBefore(y[--n], A), k[D] = y[n];
                        else {
                            if (!K)
                                for (K = new Map, A = I; A < n;) K.set(y[A], A++);
                            A = K.get(k[T]);
                            if (A == null) q.removeChild(k[T]), T++;
                            else if (I < A && A < n) {
                                for (var c = T, u = 1, a = void 0; ++c < D && c < n && (a = K.get(k[c])) != null && a === A +
                                    u;) u++;
                                if (u > A - I)
                                    for (c = k[T]; I < A;) q.insertBefore(y[I++], c);
                                else q.replaceChild(y[I++], k[T++])
                            } else T++
                        }
                    }
            return y
        },
        Kb = function(k) {
            return g.gT(k) ? "nodeType" in k : !1
        },
        OC$ = function() {
            var k = AM;
            AM = !0;
            var y = {};
            return y[Symbol.dispose] = function() {
                AM = k
            }, y
        },
        E1E = function(k) {
            var y = PIL();
            LIL(function() {
                var q = y[0];
                a: {
                    var N = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        g.tG(N, rbG());
                        g.tG(N, OC$());
                        var D = k();
                        break a
                    } catch (n) {
                        N.error = n, N.hasError = !0
                    } finally {
                        g.kN(N)
                    }
                    D = void 0
                }
                q = v1w(q, D, y);
                Array.isArray(q) || (y.cG = [q]);
                y[0] = q;
                if (!AM) {
                    for (q = 0; q < CIg.length;) {
                        D = CIg[q];
                        if (!D) throw Error("Error executing syncOnInit function.");
                        try {
                            D()
                        } catch (n) {}
                        q++
                    }
                    CIg.length = 0
                }
            }, "p9csj");
            return y
        },
        v1w = function(k, y, q) {
            for (; typeof y === "function";) y = y();
            if (k == null) return y == null ? DQ() : T8(y) ? nb(y) : wU(y) ? nb(y.toString()) : Kb(y) ? y : y.length === 0 ? DQ() : bCG(y, q);
            if (Kb(k)) {
                if (y == null) return IR(k, DQ());
                if (T8(y)) return V7w(k, y);
                if (wU(y)) return V7w(k, y.toString());
                if (Kb(y)) return IR(k, y);
                if (y.length === 0) return IR(k, DQ());
                y = bCG(y, q);
                ffB([k], q.cG);
                return y
            }
            k = c_(k);
            if (y == null) return H_(k, DQ());
            if (T8(y)) return H_(k, nb(y));
            if (wU(y)) return H_(k, nb(y.toString()));
            if (Kb(y)) return ffB(k, [y])[0];
            if (y.length === 0) return H_(k, DQ());
            y = bCG(y, q);
            ffB(k, q.cG);
            return y
        },
        V7w = function(k,
            y) {
            k.nodeType === Node.TEXT_NODE ? k.textContent !== String(y) && (k.textContent = String(y)) : k = IR(k, nb(y));
            return k
        },
        c_ = function(k, y, q) {
            return Bye(k, y != null ? y : [], q === void 0 ? !1 : q)
        },
        bCG = function(k, y) {
            var q = c_(k, void 0, !0);
            if (q.length === 0) return DQ();
            y.cG = q;
            return k
        },
        Bye = function(k, y, q, N, D) {
            y = y === void 0 ? [] : y;
            q = q === void 0 ? !1 : q;
            D = D === void 0 ? -1 : D;
            if (k == null) return y;
            if (Kb(y) && y.nodeType === Node.ELEMENT_NODE && y.tagName === "SCRIPT") a: {
                q = k;
                if (Array.isArray(q)) {
                    if (q.length > 1) throw Error("Script tags can contain at most 1 child. Got " + q.length + ": [" + q.map(iCx).join(", ") + "]");
                    q = q[0]
                }
                if (q != null) {
                    if (!(q instanceof g.Zh)) {
                        var n, T;
                        if ((n = window) == null ? 0 : (T = n.trustedTypes) == null ? 0 : T.isScript(q)) throw Error("Do not use a TrustedScript instance in a script tag directly. Use a SafeScript instead.");
                        if (String(q).trim().length ===
                            0) break a;
                        throw Error("Script tags must only contain SafeScript or LegacyScript instances. Got: " + iCx(q));
                    }
                    y.textContent = g.lC(q);
                    g.sl(y)
                }
            }
            else {
                T8(k) && (k = nb(k), N && q && (N[D] = k));
                wU(k) && (k = nb(k.toString()), N && q && (N[D] = k));
                if (Kb(k)) return Usw(y, k);
                if (Array.isArray(k)) {
                    for (n = 0; n < k.length; n++) Bye(k[n], y, q, k, n);
                    return y
                }
                if (typeof k === "function") return k = E1E(k)[0], N && q && (N[D] = k), Usw(y, k);
                if (k != null && k[zXq]) {
                    a: {
                        n = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            g.tG(n, rbG());
                            var I = qh.apply(null, [k.type, k.props].concat(g.m(k.children)));
                            break a
                        } catch (K) {
                            n.error = K, n.hasError = !0
                        } finally {
                            g.kN(n)
                        }
                        I = void 0
                    }
                    return Bye(I, y, q)
                }
                var H;
                (H = g.yB.handleError) == null || H.call.apply(H, [g.yB].concat(g.m(G_(Error("Unrecognized JSXResult type in flattening.")))));
                return y
            }
        },
        PIL = function() {
            var k = [];
            k.cG = [];
            return k
        },
        Usw = function(k, y) {
            Array.isArray(k) ? k.push(y) : k.appendChild(y);
            return k
        },
        Qo$ = function(k, y) {
            a: {
                var q = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    var N, D;
                    var n = (D = (N = k.zA) != null ? N : k.name) != null ? D : "[component]";
                    g.tG(q, rbG());
                    g.tG(q, g.qg("render", n));
                    var T = k(y);
                    break a
                } catch (I) {
                    q.error = I, q.hasError = !0
                } finally {
                    g.kN(q)
                }
                T = void 0
            }
            return T
        },
        u3 = function(k) {
            this.props = k;
            this.C = !1
        },
        M71 = function() {
            throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
        },
        xi = function(k, y) {
            u3.call(this, k);
            var q = this;
            this.Z = y;
            this.q_ = [];
            this.V = 0;
            Yee(function(N) {
                q.fu = N;
                FIT(function() {
                    var D = q.el;
                    if (!q.C && D) {
                        q.C = !0;
                        try {
                            q.O_()
                        } catch (I) {
                            var n, T;
                            (T = g.yB.handleError) == null || T.call.apply(T, [g.yB].concat(g.m(G_(I, (n = q.N) == null ? void 0 : n.ZX))))
                        }
                        aR.O_(q);
                        q.el = null;
                        D.__instance && delete D.__instance
                    }
                })
            })
        },
        Ys$ = function(k, y, q) {
            k._signalProps != null && k._disposeEffects == null && (g.yB.Fw && q !== void 0 && !q ? FBB(k, y) : k._disposeEffects = Yee(function() {
                return void FBB(k, y)
            }))
        },
        FBB = function(k, y) {
            LIL(function() {
                for (var q = k._signalProps,
                        N = k._signalValues, D = 0; D < q.length; D++) {
                    var n = q[D],
                        T = y[n]();
                    N[D] !== T && (N[D] = T, ki(k, n, T))
                }
            }, "hTG0Sd")
        },
        Ssg = function(k, y) {
            k._disposeEffects = Yee(function() {
                k._isSignalTextNode = !0;
                LIL(function() {
                    var q = y();
                    q == null && (q = "");
                    var N = typeof q;
                    if (N === "object" || N === "function") throw Error("Invalid text node kind: " + N + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    k.textContent = String(q)
                }, "FpvqPc")
            })
        },
        GYT = function(k, y) {
            var q = g.P6.apply(2, arguments);
            y != null || (y = {});
            if (k === pa$) return q;
            if (typeof k === "function") return EoG({
                component: k,
                debugInstance: y.debugInstance,
                a_: function() {
                    q.length > 0 && (y.children = q.length === 1 ? q[0] : q);
                    return Qo$(k, y)
                }
            });
            var N = document.createElement(k),
                D;
            for (D in y) ki(N, D, y[D]);
            Ys$(N, y, !1);
            c_(q, N);
            $sL(N, y, {
                pz: !0
            });
            return N
        },
        dsE = function(k) {
            LBB.push(k) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var y = [].concat(g.m(LBB));
                    LBB = [];
                    y = g.p(y);
                    for (var q = y.next(); !q.done; q = y.next()) {
                        q = q.value;
                        try {
                            for (var N = 0; N < q.length; N++);
                        } catch (D) {
                            N = q = void 0, (N = (q = g.yB).handleError) == null || N.call.apply(N, [q].concat(g.m(G_(D))))
                        }
                    }
                })
            })
        },
        js = function(k, y) {
            return GYT.apply(null, [k,
                y
            ].concat(g.m(g.P6.apply(2, arguments))))
        },
        g1T = function(k) {
            var y = null,
                q;
            return {
                value: null,
                h4M: function(N) {
                    if (q && N !== q) {
                        var D;
                        (D = y) == null || D();
                        q._disposeRef = void 0
                    }
                    q = N;
                    y = k(N) || null
                },
                bZT: function() {
                    var N;
                    (N = y) == null || N()
                }
            }
        },
        o1E = function(k, y) {
            return !k || k.length !== (y == null ? void 0 : y.length) || k.some(function(q, N) {
                return q !== y[N]
            })
        },
        hXb = function(k, y) {
            var q = M71();
            if (q == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var N = q.V++;
            q.q_ || (q.q_ = []);
            var D = q.q_;
            D[N] || (D[N] = {
                key: "onChange",
                host: q
            });
            if ("onChange" !== D[N].key) {
                var n, T;
                k = ((n = q.N) == null ? void 0 : n.name) || ((T = q.Z) == null ? void 0 : T.name);
                throw Error("Hook called out of order in " + k + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            q = D[N];
            n = M71();
            o1E(q.LD, y) && (q.LD = y, q.tQ = k, n.Qs || (n.Qs = []), n.Qs.push(q))
        },
        RXx = function(k) {
            var y = g.oz;
            if (y && y.isAsync) {
                var q;
                (q = g.yB.handleError) == null || q.call.apply(q, [g.yB].concat(g.m(G_(Error("onInit cannot be called inside a reaction.")))))
            }
            var N = U1,
                D = MX.slice();
            Promise.resolve().then(function() {
                N && !N.VM && FY(function() {
                    var n = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        g.tG(n, QK(N)), k()
                    } catch (T) {
                        n.error = T, n.hasError = !0
                    } finally {
                        g.kN(n)
                    }
                }, {
                    stack: D
                })
            })
        },
        XB = function(k, y) {
            hXb(function() {
                return dxG(k)
            }, y)
        },
        eXg = function(k) {
            RXx(function() {
                dxG(k)
            })
        },
        ZCb = function(k) {
            var y = [].concat(g.m(k));
            k.length = 0;
            k = g.p(y);
            for (y = k.next(); !y.done; y = k.next()) {
                y = y.value;
                WBE(y);
                var q = y.tQ;
                y.tQ = null;
                if (q = q == null ? void 0 : q()) y.Hg = q
            }
        },
        WBE = function(k) {
            var y = k.Hg;
            k.Hg = null;
            y == null || y()
        },
        $i = function() {
            var k = g1T(function(y) {
                k.value && k.value === y || (k.PJ = k.PJ ? k.PJ + 1 : 1);
                k.value = y;
                var q = function() {
                    var N = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        g.tG(N, B7(null))
                    } catch (D) {
                        N.error = D, N.hasError = !0
                    } finally {
                        g.kN(N)
                    }
                }();
                return function() {
                    q == null || q();
                    k.value = null
                }
            });
            return k
        },
        lfN = function(k) {
            var y = U1,
                q = MX.slice();
            return {
                q7: function() {
                    return function(N) {
                        y.VM || FY(function() {
                            var D = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                return g.tG(D, B7(null)), k(N)
                            } catch (n) {
                                D.error = n, D.hasError = !0
                            } finally {
                                g.kN(D)
                            }
                        }, {
                            stack: q
                        }) !== !0 && N.stopPropagation()
                    }
                }
            }
        },
        soF = function(k) {
            if (typeof k.children === "function") return k.children(), null;
            k = g.p(k.children);
            for (var y = k.next(); !y.done; y = k.next()) y = y.value, y();
            return null
        },
        t7w = function(k, y, q) {
            q = q === void 0 ? !1 : q;
            FY(function() {
                return JbO(k, y, q)
            })
        },
        JbO = function(k, y, q) {
            q = ((q === void 0 ? 0 : q) ? kyB : yvw)(k, function() {
                z8(y)
            });
            return q === null ? k : q
        },
        z8 = function(k) {
            if (k !== void 0 && k !== null)
                if (Array.isArray(k)) {
                    var y = g.p(k);
                    for (k = y.next(); !k.done; k = y.next()) z8(k.value)
                } else if (k instanceof g.bC) af1(k.toString());
            else if (Kb(k)) {
                if (oZ() !== k) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + k.tagName);
                ey = oZ()
            } else {
                g.Qx(k) && (k = k.toString());
                var q = typeof k;
                if (q === "boolean" || q === "number" || q === "string") af1(k);
                else if (typeof k === "function") {
                    y = gA;
                    var N = oZ();
                    if (!N || !N._isSignalTextNode) {
                        var D =
                            y.insertBefore,
                            n = document.createTextNode("");
                        Ssg(n, k);
                        D.call(y, n, N)
                    }
                    ey = oZ()
                } else {
                    if (typeof k.type === "string") {
                        k.U8 || KB$(k.type, k.props.idomKey);
                        N = gA;
                        for (D in k.props) k.props[D] !== qdL && (n = k.props[D], q = s1, q.push(D), q.push(n));
                        D = g.yB.attributes;
                        D = D === void 0 ? Nt$ : D;
                        n = gA;
                        var T = dA(n);
                        q = D;
                        D = s1;
                        T = T.Z || (T.Z = JWG(D.length));
                        for (var I = !T.length || !1, H = 0; H < D.length; H += 2) {
                            var K = D[H];
                            if (I) T[H] = K;
                            else if (T[H] !== K) break;
                            var A = D[H + 1];
                            if (I || T[H + 1] !== A) T[H + 1] = A, um1(n, K, A, q)
                        }
                        if (H < D.length || H < T.length) {
                            for (H = I = H; H < T.length; H +=
                                2) pb[T[H]] = T[H + 1];
                            for (H = I; H < D.length; H += 2) I = D[H], K = D[H + 1], pb[I] !== K && um1(n, I, K, q), T[H] = I, T[H + 1] = K, delete pb[I];
                            LE(T, D.length);
                            for (y in pb) um1(n, y, void 0, q), delete pb[y]
                        }
                        y = Dye;
                        Dye = n = tA.length;
                        for (q = y; q < n; q += 5)(0, tA[q])(tA[q + 1], tA[q + 2], tA[q + 3], tA[q + 4]);
                        Dye = y;
                        LE(tA, y);
                        LE(D, 0);
                        Ys$(N, k.props);
                        (k.props.skip || k.props.skipchildren) && gA.hasChildNodes() ? ey = gA.lastChild : z8(k.children);
                        RZ(null);
                        ey = gA;
                        gA = gA.parentNode;
                        k.U8 && (k.U8 = !1);
                        $sL(N, k.props);
                        return N
                    }
                    if (k.type === pa$) z8(k.children);
                    else if (!nJe(k)) {
                        y = k;
                        try {
                            Tte(y)
                        } catch (c) {
                            k = c, (n = g.yB.handleError) == null || n.call.apply(n, [g.yB].concat(g.m(G_(k, (N = y.type) == null ? void 0 : N.ZX))))
                        }
                        y.U8 && (RZ(null), ey = gA, gA = gA.parentNode, y.U8 = !1)
                    }
                }
            }
        },
        INw = function(k, y) {
            var q;
            wPT(k) ? q = new xi(y, k) : q = new k(y);
            q.N = k;
            q.Uf = {
                MC: q.state,
                Cz: !1
            };
            return q
        },
        Tte = function(k) {
            var y = k.type,
                q = y.ZX;
            if (y === soF) k.props.children = k.children, y(k.props);
            else {
                k.children.length > 0 && (k.props.children = k.children);
                var N;
                (N = k.props).idomKey || (N.idomKey = y);
                if (q) {
                    var D = KB$(q, k.props.idomKey);
                    k.U8 = !0;
                    var n = D.__instance
                }
                n || (n = INw(y, k.props), n.props = null, D && (D.__instance = n, n.el = D));
                var T;
                q = ((T = n.Uf) != null ? T : {
                    MC: n.state,
                    Cz: !1
                }).MC;
                n.Uf = void 0;
                y.R4 && (q = y.R4(k.props, q));
                n.props = k.props;
                n.state = q;
                T = function() {
                    var I = n;
                    aR.Fx(I);
                    var H = I.us(I.props);
                    H ? (I.props.idomKey && (H.props.idomKey = I.props.idomKey), I = H) : I = void 0;
                    if (H = I)
                        if (H.U8 = k.U8, I = z8(H), k.U8 = H.U8, !y.ZX)
                            if (I) y.ZX = I.tagName.toLowerCase(), I.__instance = n, n.el = I;
                            else {
                                var K;
                                if ((K = n.q_) == null ? 0 : K.length) {
                                    var A;
                                    (A = g.yB.handleError) == null || A.call.apply(A, [g.yB].concat(g.m(G_(Error("A component used hooks, but failed to return a host element")))))
                                }
                            }
                    n.qU();
                    aR.qU(n)
                };
                (q = n.Z) ? EoG({
                    component: q,
                    debugInstance: n.props.debugInstance,
                    a_: T
                }): T()
            }
        },
        nJe = function(k) {
            var y = k.type;
            if (!wPT(y) || y === soF) return !1;
            k.props.children = k.children.length > 1 ? k.children : k.children[0];
            var q, N = (q = k.props.idomKey) != null ? q : k.type,
                D;
            if (oZ() && ((D = oZ()[H3L]) == null ? void 0 : D.key) === N) {
                y = oZ();
                q = y[H3L];
                if (!q) throw Error("Reactive data has been lost on node. Tag name: " + y.tagName);
                var n;
                (n = q.SOj) == null || n.call(q, k.props);
                Kn1(q);
                return !0
            }
            if (AvE.has(y.name)) throw Error(y.name + " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component");
            k.props.g2M = !0;
            (n = EoG({
                component: k.type,
                debugInstance: k.props.debugInstance,
                a_: function() {
                    return Qo$(k.type, k.props)
                }
            })) && cvq(n);
            return !0
        },
        uRx = function(k) {
            for (var y = 0; y < c_(k).length; y++) ey = oZ()
        },
        Kn1 = function(k) {
            var y = aNg();
            if (y) uRx(y);
            else
                for (var q = 0; q < k.RXF; q++)(y = aNg()) ? uRx(y) : ey = oZ()
        },
        aNg = function() {
            var k;
            return (k = oZ()[H3L]) == null ? void 0 : k.fIS
        },
        cvq = function(k) {
            k = k != null && k.cG ? k.cG : k;
            k = Array.isArray(k) ? k : [k];
            k = g.p(k);
            for (var y = k.next(); !y.done; y = k.next()) gA.insertBefore(y.value, oZ()), ey = oZ()
        },
        wPT = function(k) {
            var y;
            return ((y = k.prototype) == null ? void 0 : y.us) === void 0
        },
        xyL = function(k) {
            var y = M71(),
                q = typeof k === "function" ? k() : k;
            return [q, function(N) {
                var D = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    if (rU !== null) {
                        var n;
                        (n = g.yB.handleError) == null || n.call.apply(n, [g.yB].concat(g.m(G_(Error("Can't set state during rendering")))))
                    }
                    q = typeof N === "function" ? N(q) : N;
                    y.Uf = {
                        MC: y.state,
                        Cz: !0
                    };
                    g.tG(D, QK(y.fu));
                    g.tG(D, msg());
                    if (y.el) {
                        var T;
                        N = {};
                        var I = (N.props = y.props, N.type = y.N, N.children = (T = y.props.children) != null ? T : [], N[zXq] = !0, N);
                        try {
                            t7w(y.el, I, !0)
                        } catch (A) {
                            var H, K;
                            (K = g.yB.handleError) == null || K.call.apply(K, [g.yB].concat(g.m(G_(A, (H = y.N) ==
                                null ? void 0 : H.ZX))))
                        }
                    }
                } catch (A) {
                    D.error = A, D.hasError = !0
                } finally {
                    g.kN(D)
                }
            }]
        },
        zoB = function(k) {
            var y = jOe;
            XPe.push(k);
            $yw || (y(function() {
                for (var q = g.p(XPe), N = q.next(); !N.done; N = q.next()) N = N.value, N();
                XPe.length = 0;
                $yw = !1
            }), $yw = !0)
        },
        jOe = function(k) {
            Promise.resolve().then(k)
        },
        pPE = function(k) {
            k = g.p(xyL(k));
            var y = k.next().value,
                q = k.next().value,
                N = !1;
            eXg(function() {
                return function() {
                    N = !0
                }
            });
            return [y, function(D) {
                zoB(function() {
                    N && !g.M5("cow_prevent_state_setter_after_cleanup_killswitch") || q(D)
                })
            }]
        },
        rvq = function(k) {
            function y() {
                var I = k.G.qS() ? "Hide more shorts" : "Hide more videos";
                D(I)
            }
            var q = g.p(xyL("Hide more videos")),
                N = q.next().value,
                D = q.next().value;
            XB(function() {
                var I = k.G;
                I.addEventListener("videodatachange", y);
                return function() {
                    I.removeEventListener("videodatachange", y)
                }
            }, [k.G]);
            var n = (new g.Cr(g.Wo())).element,
                T = $i();
            eXg(function() {
                T.value.appendChild(n)
            });
            return js("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": N,
                "on:click": lfN(function() {
                    k.action && k.action()
                })
            }, js("div", {
                class: "ytp-collapse-icon",
                el: T,
                skip: !0
            }))
        },
        my$ = function(k) {
            function y() {
                var T = k.G.qS() ? "More shorts" : "More videos";
                D(T)
            }
            var q = g.p(pPE("More videos")),
                N = q.next().value,
                D = q.next().value,
                n = $i();
            XB(function() {
                k.K7 && (k.K7.value = n.value)
            }, [k.K7]);
            XB(function() {
                var T = k.G;
                T.addEventListener("videodatachange", y);
                return function() {
                    T.removeEventListener("videodatachange", y)
                }
            }, [k.G]);
            return js("button", {
                el: n,
                class: "ytp-button ytp-expand",
                "on:click": lfN(function() {
                    k.action && k.action()
                })
            }, N)
        },
        i3g = function(k, y) {
            var q = {
                value: null
            };
            XB(function() {
                var N = new g.Qr(k);
                N.Z = !0;
                q.value = N;
                return function() {
                    var D;
                    (D = q.value) == null || D.dispose()
                }
            }, [k,
                y
            ]);
            return q
        },
        fNN = function(k) {
            function y(r) {
                a: {
                    var f = g.p([1,
                        16, 32
                    ]);
                    for (var P = f.next(); !P.done; P = f.next())
                        if (g.e(r, P.value)) {
                            f = !0;
                            break a
                        }
                    f = !1
                }
                if (!f) {
                    var C;
                    (C = A.value) != null && C.hasSuggestions() && T(g.e(r, 4) && !g.e(r, 2) && !g.e(r, 1024))
                }
            }

            function q() {
                y(k.G.getPlayerStateObject())
            }

            function N(r) {
                y(r.state)
            }
            var D = g.p(pPE(!1)),
                n = D.next().value,
                T = D.next().value,
                I = g.p(pPE(!1));
            D = I.next().value;
            var H = I.next().value,
                K = $i(),
                A = i3g(k.G, k.Ep),
                c = $i();
            I = {
                value: null
            };
            var u = {
                value: null
            };
            XB(function() {
                var r = k.G,
                    f = r.qS() ? 157212 : 172777;
                u.value = new g.S;
                r.createClientVe(c.value, u.value, f);
                r.addEventListener("presentingplayerstatechange", N);
                r.addEventListener("videodatachange", q);
                f = r.S().controlsType === "0";
                g.fD(r.getRootNode(), "ytp-pause-overlay-controls-hidden", f);
                return function() {
                    r.removeEventListener("videodatachange",
                        q);
                    r.removeEventListener("presentingplayerstatechange", N);
                    var P;
                    (P = u.value) == null || P.dispose()
                }
            }, [k.G]);
            XB(function() {
                var r;
                (r = A.value) == null || r.FH(K.value)
            }, [A]);
            var a = k.G;
            if (n) {
                var x;
                (x = A.value) == null || x.hasSuggestions();
                g.fD(a.getRootNode(), "ytp-expand-pause-overlay", !D);
                D ? I.value.focus() : (x = A.value, g.Mp(x), x.show(), c.value.focus())
            }
            c.value && a.logVisibility(c.value, n && !D);
            return js("ytp-pause-overlay", {
                el: c,
                class: "ytp-pause-overlay",
                "aria-hidden": !n
            }, js(rvq, {
                G: k.G,
                Ep: k.Ep,
                action: function() {
                    H(!0)
                }
            }), js(my$, {
                G: k.G,
                Ep: k.Ep,
                action: function() {
                    H(!1)
                },
                K7: I
            }), js("div", {
                el: K,
                skip: !0
            }))
        },
        O3$ = function(k) {
            g.R.call(this, {
                X: "div",
                D: "ytp-related-on-error-overlay"
            });
            var y = this;
            this.api = k;
            this.j = this.N = 0;
            this.V = new g.to(this);
            this.Z = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.R({
                X: "h2",
                D: "ytp-related-title",
                oO: "{{title}}"
            });
            this.previous = new g.R({
                X: "button",
                jb: ["ytp-button", "ytp-previous"],
                K: {
                    "aria-label": "Show previous suggested videos"
                },
                L: [g.Yl()]
            });
            this.U = new g.Ur(function(n) {
                y.suggestions.element.scrollLeft = -n
            });
            this.C = this.scrollPosition = 0;
            this.B = !0;
            this.next = new g.R({
                X: "button",
                jb: ["ytp-button", "ytp-next"],
                K: {
                    "aria-label": "Show more suggested videos"
                },
                L: [g.S4()]
            });
            g.G(this, this.V);
            k = k.S();
            this.api.W("embeds_web_enable_pause_overlay_rounding") && g.pD(this.element, "ytp-error-overlay-round-corners");
            this.J = k.V;
            g.G(this, this.title);
            this.title.FH(this.element);
            this.suggestions = new g.R({
                X: "div",
                D: "ytp-suggestions"
            });
            g.G(this, this.suggestions);
            this.suggestions.FH(this.element);
            g.G(this, this.previous);
            this.previous.FH(this.element);
            this.previous.listen("click", this.TQ, this);
            g.G(this, this.U);
            for (var q = {
                    BG: 0
                }; q.BG < 16; q = {
                    BG: q.BG
                }, q.BG++) {
                var N = new g.R({
                    X: "a",
                    D: "ytp-suggestion-link",
                    K: {
                        href: "{{link}}",
                        target: k.U,
                        "aria-label": "{{aria_label}}"
                    },
                    L: [{
                        X: "div",
                        D: "ytp-suggestion-image",
                        L: [{
                            X: "div",
                            K: {
                                "data-is-live": "{{is_live}}"
                            },
                            D: "ytp-suggestion-duration",
                            oO: "{{duration}}"
                        }]
                    }, {
                        X: "div",
                        D: "ytp-suggestion-title",
                        K: {
                            title: "{{hover_title}}"
                        },
                        oO: "{{title}}"
                    }, {
                        X: "div",
                        D: "ytp-suggestion-author",
                        oO: "{{views_or_author}}"
                    }]
                });
                g.G(this, N);
                N.FH(this.suggestions.element);
                var D = N.nS("ytp-suggestion-link");
                g.fW(D, "transitionDelay", q.BG / 20 + "s");
                this.V.T(D, "click", function(n) {
                    return function(T) {
                        var I = n.BG,
                            H = y.suggestionData[I],
                            K = H.sessionData;
                        g.YM(y.api.S()) && y.api.W("web_player_log_click_before_generating_ve_conversion_params") ? (y.api.logClick(y.Z[I].element), I = H.gV(), H = {}, g.EBD(y.api, H), I = g.lG(I, H), g.HH(I, y.api, T)) : g.Ig(T, y.api, y.J, K || void 0) && y.api.C6(H.videoId, K, H.playlistId)
                    }
                }(q));
                this.Z.push(N)
            }
            g.G(this, this.next);
            this.next.FH(this.element);
            this.next.listen("click", this.rg, this);
            this.V.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.KS().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        PfN = function(k, y) {
            if (k.api.S().W("web_player_log_click_before_generating_ve_conversion_params"))
                for (var q = Math.floor(-k.scrollPosition / (k.C + k.N)), N = Math.min(q + k.columns, k.suggestionData.length) - 1; q <= N; q++) k.api.logVisibility(k.Z[q].element, y)
        },
        vJL = function(k) {
            k.next.element.style.bottom =
                k.j + "px";
            k.previous.element.style.bottom = k.j + "px";
            var y = k.scrollPosition,
                q = k.containerWidth - k.suggestionData.length * (k.C + k.N);
            g.fD(k.element, "ytp-scroll-min", y >= 0);
            g.fD(k.element, "ytp-scroll-max", y <= q)
        },
        CfT = function(k) {
            for (var y = 0; y < k.suggestionData.length; y++) {
                var q = k.suggestionData[y],
                    N = k.Z[y],
                    D = q.shortViewCount ? q.shortViewCount : q.author,
                    n = q.gV(),
                    T = k.api.S();
                if (g.YM(T) && !T.W("web_player_log_click_before_generating_ve_conversion_params")) {
                    var I = {};
                    g.yQ(k.api, "addEmbedsConversionTrackingParams", [I]);
                    n = g.lG(n, I)
                }
                N.element.style.display = "";
                I = N.nS("ytp-suggestion-title");
                g.Ev.test(q.title) ? I.dir = "rtl" : g.bAL.test(q.title) && (I.dir = "ltr");
                I = N.nS("ytp-suggestion-author");
                g.Ev.test(D) ? I.dir = "rtl" : g.bAL.test(D) && (I.dir = "ltr");
                N.update({
                    views_or_author: D,
                    duration: q.isLivePlayback ? "Live" : q.lengthSeconds ? g.g7(q.lengthSeconds) : "",
                    link: n,
                    hover_title: q.title,
                    title: q.title,
                    aria_label: q.ariaLabel || null,
                    is_live: q.isLivePlayback
                });
                D = q.eU();
                N.nS("ytp-suggestion-image").style.backgroundImage = D ? "url(" + D + ")" : "";
                T.W("web_player_log_click_before_generating_ve_conversion_params") && (k.api.createServerVe(N.element, N), (q = (q = q.sessionData) && q.itct) && k.api.setTrackingParams(N.element, q))
            }
            for (; y < k.Z.length; y++) k.Z[y].element.style.display = "none";
            vJL(k)
        },
        m9 = function(k) {
            g.Gg.call(this, k);
            var y = this;
            this.Z = null;
            var q = k.S(),
                N = {
                    target: q.U
                },
                D = ["ytp-small-redirect"];
            q.C ? D.push("no-link") : (q = g.uw(q), N.href = q, N["aria-label"] = "Visit YouTube to search for more videos");
            var n = new g.R({
                X: "a",
                jb: D,
                K: N,
                L: [{
                    X: "svg",
                    K: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    L: [{
                        X: "path",
                        K: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        X: "path",
                        K: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            n.FH(this.element);
            k.createClientVe(n.element, this, 178053);
            this.T(n.element, "click", function(T) {
                EJ$(y, T, n.element)
            });
            g.G(this, n);
            k.S().C || (this.Z = new O3$(k), this.Z.FH(this.element), g.G(this, this.Z));
            this.T(k, "videodatachange", function() {
                y.show()
            });
            this.resize(this.api.KS().getPlayerSize())
        },
        EJ$ = function(k, y, q) {
            y.preventDefault();
            k.api.logClick(q);
            y = q.getAttribute("href");
            q = {};
            g.yQ(k.api, "addEmbedsConversionTrackingParams", [q]);
            y = g.QR(q) ? y : g.lG(y, q);
            g.eq(window, y)
        },
        b3$ = function(k, y) {
            k.nS("ytp-error-content").style.paddingTop = "0px";
            var q = k.nS("ytp-error-content"),
                N = q.clientHeight;
            k.Z && k.Z.resize(y, y.height - N);
            q.style.paddingTop = (y.height - (k.Z ? k.Z.element.clientHeight : 0)) / 2 - N / 2 + "px"
        },
        UyF = function(k, y) {
            var q = k.api.S(),
                N;
            y.reason && (VOx(y.reason) ? N = g.MM(y.reason) : N = g.Li(g.QX(y.reason)), k.xl(N, "content"));
            var D;
            y.subreason && (VOx(y.subreason) ? D = g.MM(y.subreason) : D = g.Li(g.QX(y.subreason)), k.xl(D, "subreason"));
            if (y.proceedButton && y.proceedButton.buttonRenderer) {
                N = k.nS("ytp-error-content-wrap-subreason");
                y = y.proceedButton.buttonRenderer;
                var n = g.T3("A");
                if (y.text && y.text.simpleText && (D = y.text.simpleText, n.textContent = D, !BtG(N, D) && (!q.C || q.embedsErrorLinks))) {
                    var T;
                    q = (T = g.L(y == null ? void 0 : y.navigationEndpoint, g.yS)) == null ?
                        void 0 : T.url;
                    var I;
                    T = (I = g.L(y == null ? void 0 : y.navigationEndpoint, g.yS)) == null ? void 0 : I.target;
                    q && (n.setAttribute("href", q), k.api.createClientVe(n, k, 178424), k.T(n, "click", function(H) {
                        EJ$(k, H, n)
                    }));
                    T && n.setAttribute("target", T);
                    I = g.T3("DIV");
                    I.appendChild(n);
                    N.appendChild(I)
                }
            }
        },
        VOx = function(k) {
            if (k.runs)
                for (var y = 0; y < k.runs.length; y++)
                    if (k.runs[y].navigationEndpoint) return !0;
            return !1
        },
        BtG = function(k, y) {
            k = g.sf("A", k);
            for (var q = 0; q < k.length; q++)
                if (k[q].textContent === y) return !0;
            return !1
        },
        QOO = function(k, y) {
            g.R.call(this, {
                X: "a",
                jb: ["ytp-impression-link"],
                K: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                L: [{
                    X: "div",
                    D: "ytp-impression-link-content",
                    K: {
                        "aria-hidden": "true"
                    },
                    L: [{
                        X: "div",
                        D: "ytp-impression-link-text",
                        oO: "Watch on"
                    }, {
                        X: "div",
                        D: "ytp-impression-link-logo",
                        oO: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = k;
            this.Ep = y;
            this.updateValue("target", k.S().U);
            this.T(k, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.N2);
            this.T(this.api, "videoplayerreset", this.TZ);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.TZ()
        },
        MOG = function(k) {
            var y = {};
            g.yQ(k.api, "addEmbedsConversionTrackingParams", [y]);
            k = k.api.getVideoUrl();
            return k = g.lG(k, y)
        },
        i3 = function(k) {
            g.R.call(this, {
                X: "div",
                jb: ["ytp-mobile-a11y-hidden-seek-button"],
                L: [{
                    X: "button",
                    jb: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    K: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    X: "button",
                    jb: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    K: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = k;
            this.Z = this.nS("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.nS("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.Z, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.N2);
            this.T(this.Z, "click", this.N);
            this.T(this.forwardButton, "click", this.C);
            this.N2()
        },
        fb = function(k) {
            g.R.call(this, {
                X: "div",
                D: "ytp-muted-autoplay-endscreen-overlay",
                L: [{
                    X: "div",
                    D: "ytp-muted-autoplay-end-panel",
                    L: [{
                        X: "button",
                        jb: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        oO: "{{text}}"
                    }]
                }]
            });
            this.api = k;
            this.V = this.nS("ytp-muted-autoplay-end-panel");
            this.N = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(k, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        OM = function(k) {
            var y = k.S();
            g.R.call(this, {
                X: "a",
                jb: ["ytp-watermark", "yt-uix-sessionlink"],
                K: {
                    target: y.U,
                    href: "{{url}}",
                    "aria-label": g.Qo("Watch on $WEBSITE", {
                        WEBSITE: g.ku(y)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                oO: "{{logoSvg}}"
            });
            this.api = k;
            this.Z = null;
            this.N = !1;
            this.state = k.getPlayerStateObject();
            this.T(k, "videodatachange", this.onVideoDataChange);
            this.T(k, "presentingplayerstatechange", this.onStateChange);
            this.T(k, "appresize", this.SH);
            this.onVideoDataChange();
            this.T_(this.state);
            this.SH(k.KS().getPlayerSize())
        },
        Fng = function(k) {
            var y = k.api.getVideoData(),
                q = k.api.S();
            q = q.cX && !g.e(k.state, 2) && !g.W4(k.api.getVideoData(1)) && !(q.W("embeds_enable_emc3ds_woyt_counterfactual") && k.api.getPlayerStateObject().isCued());
            y.mutedAutoplay || k.xz(q);
            k.api.logVisibility(k.element, q)
        },
        Gy1 = function(k) {
            g.R.call(this, {
                X: "div",
                D: "ytp-muted-autoplay-overlay",
                L: [{
                    X: "div",
                    D: "ytp-muted-autoplay-bottom-buttons",
                    L: [{
                        X: "button",
                        jb: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        K: {
                            "aria-label": "Muted Playback Indicator"
                        },
                        L: [{
                            X: "div",
                            jb: ["ytp-muted-autoplay-equalizer-icon"],
                            L: [{
                                X: "svg",
                                K: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                L: [{
                                    X: "g",
                                    K: {
                                        fill: "#fff"
                                    },
                                    L: [{
                                            X: "rect",
                                            D: "ytp-equalizer-bar-left",
                                            K: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            X: "rect",
                                            D: "ytp-equalizer-bar-middle",
                                            K: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            X: "rect",
                                            D: "ytp-equalizer-bar-right",
                                            K: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var y = this;
            this.api = k;
            this.bottomButtons = this.nS("ytp-muted-autoplay-bottom-buttons");
            this.C = new g.c3(this.a7, 4E3, this);
            this.N = !1;
            k.createClientVe(this.element, this, 39306);
            this.T(k, "presentingplayerstatechange", this.e2);
            this.T(k, "onMutedAutoplayStarts", function() {
                Ydb(y);
                y.e2();
                Sdx(y);
                y.N = !1
            });
            this.T(k, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(k, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            k.isMutedByEmbedsMutedAutoplay() && (Ydb(this), this.e2(), Sdx(this));
            g.G(this, this.C)
        },
        Sdx = function(k) {
            k.Az && k.Z && (k.Z.show(), k.C.start())
        },
        Ydb = function(k) {
            k.watermark || (k.watermark = new OM(k.api), g.G(k, k.watermark), k.watermark.FH(k.bottomButtons, 0), g.fD(k.watermark.element, "ytp-muted-autoplay-watermark", !0), k.Z = new g.zt(k.watermark, 0, !0, 100), g.G(k,
                k.Z))
        },
        P_ = function(k) {
            g.R.call(this, {
                X: "div",
                D: "ytp-pause-overlay",
                K: {
                    tabIndex: "-1"
                }
            });
            var y = this;
            this.api = k;
            this.C = new g.to(this);
            this.V = new g.zt(this, 1E3, !1, 100, function() {
                y.Z.Z = !1
            }, function() {
                y.Z.Z = !0
            });
            this.N = !1;
            this.expandButton = new g.R({
                X: "button",
                jb: ["ytp-button", "ytp-expand"],
                oO: this.api.qS() ? "More shorts" : "More videos"
            });
            k.S().controlsType === "0" && g.pD(k.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.W("embeds_web_enable_pause_overlay_rounding") && g.pD(this.element, "ytp-pause-overlay-round-corners");
            g.G(this, this.C);
            g.G(this, this.V);
            var q = new g.R({
                X: "button",
                jb: ["ytp-button", "ytp-collapse"],
                K: {
                    "aria-label": this.api.qS() ? "Hide more shorts" : "Hide more videos"
                },
                L: [{
                    X: "div",
                    D: "ytp-collapse-icon",
                    L: [g.Wo()]
                }]
            });
            g.G(this, q);
            q.FH(this.element);
            q.listen("click", this.j, this);
            g.G(this, this.expandButton);
            this.expandButton.FH(this.element);
            this.expandButton.listen("click", this.B, this);
            this.Z = new g.Qr(k);
            g.G(this, this.Z);
            this.Z.Z = !1;
            this.Z.FH(this.element);
            this.api.qS() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.OT);
            this.C.T(this.api, "videodatachange", this.OT);
            this.hide()
        },
        v_ = function(k) {
            g.R.call(this, {
                X: "div",
                jb: ["ytp-player-content", "ytp-iv-player-content"],
                L: [{
                    X: "div",
                    D: "ytp-countdown-timer",
                    L: [{
                        X: "svg",
                        K: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        L: [{
                            X: "circle",
                            D: "ytp-svg-countdown-timer-ring",
                            K: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            X: "circle",
                            D: "ytp-svg-countdown-timer-background",
                            K: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        X: "span",
                        D: "ytp-countdown-timer-time",
                        oO: "{{duration}}"
                    }]
                }]
            });
            this.api = k;
            this.B = this.nS("ytp-svg-countdown-timer-ring");
            this.Z = null;
            this.V = this.C = 0;
            this.N = !1;
            this.j = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        dyG = function(k) {
            k.Z || (k.C = 5E3, k.V = (0, g.om)(), k.Z = new g.A9(function() {
                LnG(k)
            }, null), LnG(k))
        },
        LnG = function(k) {
            if (!k.N) {
                var y = Math.min((0, g.om)() - k.V, k.C);
                var q = k.C - y;
                y = k.C === 0 ? 0 : Math.max(q / k.C, 0);
                q = Math.round(q / 1E3);
                k.B.setAttribute("stroke-dashoffset", "" + -211 * (y + 1));
                k.updateValue("duration", q);
                y <= 0 && k.Z ? Cb(k) : k.Z && k.Z.start()
            }
        },
        Cb = function(k) {
            k.Z && (k.Z.dispose(), k.Z = null, k.N = !1)
        },
        oJB = function(k) {
            g.pi.call(this, k);
            this.G = k;
            this.Z = new g.to(this);
            this.N = null;
            this.B = !1;
            this.countdownTimer = null;
            this.U = !1;
            gJT(this);
            g.G(this, this.Z);
            this.load()
        },
        Row = function(k) {
            var y = g.dDF(k.G);
            y !== k.U && (k.U = y, k.j && (k.j.dispose(), k.j = null), k.C && (k.C.dispose(), k.C = null), k.V && (k.V.dispose(), k.V = null), k.N && (k.N.stop(), k.N.dispose(), k.N = null), y && (y = g.na(k.G), k.G.qS() && (k.V = new g.R({
                    X: "div",
                    D: "ytp-pause-overlay-backdrop",
                    K: {
                        tabIndex: "-1"
                    }
                }), g.G(k, k.V), g.pa(k.G, k.V.element, 4), k.N = new g.zt(k.V, 1E3, !1, 100), g.G(k, k.N), k.V.hide()), k.j = new g.R({
                    X: "div",
                    D: "ytp-pause-overlay-container",
                    K: {
                        tabIndex: "-1"
                    }
                }), g.G(k, k.j), k.G.W("embeds_web_enable_keto_pause_overlay") ? t7w(k.j.element, js(fNN, {
                    G: k.G,
                    Ep: y
                })) :
                (k.C = new P_(k.G, y), g.G(k, k.C), k.C.FH(k.j.element)), g.pa(k.G, k.j.element, 4), hoF(k, k.G.getPlayerStateObject())))
        },
        hoF = function(k, y) {
            k.N && (!g.e(y, 4) && !g.e(y, 2) || g.e(y, 1024) ? k.N.hide() : k.N.show())
        },
        gJT = function(k) {
            var y = k.G;
            k = !!y.qS();
            g.fD(y.getRootNode(), "ytp-shorts-mode", k);
            if (y = y.getVideoData()) y.hK = k
        },
        EM = function(k, y) {
            var q = k.G.S();
            k = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: k.G.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : k.G.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.WF7(k.G.S().loaderUrl),
                eventType: y,
                youtubeHost: g.ok(k.G.S().pS) || ""
            };
            k.embeddedPlayerMode = q.eb;
            g.OH("embedsAdEvent", k)
        },
        SeT = 0,
        eoT = 0;
    var U1 = null;
    var p$B;
    var mxE;
    var Ye = new Set,
        PiT = new Set,
        fjq = new Set;
    g.Yd0 = function() {
        var k = Ye;
        Ye = new Set;
        OXN(k);
        voE()
    };
    var Mg$ = [],
        Sy = 0;
    var Wnb = Symbol("idom");
    var MX = [],
        VgG, BNF, UxE;
    var b3 = {},
        Z3e = Object.assign({}, {
            jkH: !0
        }, g.tU, (b3.HO = void 0, b3.dM = !1, b3.Y0 = null, b3.KB = !0, b3.Kq = !1, b3[Symbol.dispose] = QSO, b3.Jq = void 0, b3.zA = "[reaction]", b3.run = function() {
            var k = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                if (this.Y0 !== null && !this.VM) {
                    if (g.Rz) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                    this.Mz = !1;
                    if (!this.dM || uKe(this)) {
                        this.dM = !0;
                        eoT++;
                        rWw(this);
                        g.tG(k, QK(this));
                        var y = g.VOT(this);
                        try {
                            var q = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                g.tG(q, g.qg("reactionRun",
                                    this.zA)), FY(this.Y0, {
                                    stack: this.Jq
                                })
                            } catch (N) {
                                q.error = N, q.hasError = !0
                            } finally {
                                g.kN(q)
                            }
                        } finally {
                            g.BtD(this, y), Mg$[Sy] = this.zA, Sy = (10 + Sy + 1) % 10
                        }
                    }
                }
            } catch (N) {
                k.error = N, k.hasError = !0
            } finally {
                g.kN(k)
            }
        }, b3));
    var Gl1 = Object.assign({}, Z3e, {
        xe: function(k) {
            k.VM || Ye.add(k)
        },
        Kq: !1
    });
    var xsq = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var ooO = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-describedby": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        goq = {
            a: {
                href: [{
                    Jb: 3
                }]
            },
            area: {
                href: [{
                    Jb: 3
                }]
            },
            audio: {
                src: [{
                    Jb: 3
                }]
            },
            button: {
                formaction: [{
                    Jb: 3
                }],
                formmethod: [{
                    Jb: 1
                }]
            },
            form: {
                action: [{
                    Jb: 3
                }],
                method: [{
                    Jb: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    Jb: 2
                }]
            },
            img: {
                src: [{
                    Jb: 3
                }],
                srcset: [{
                    Jb: 11
                }]
            },
            input: {
                accept: [{
                    Jb: 1
                }],
                formaction: [{
                    Jb: 3
                }],
                formmethod: [{
                    Jb: 1
                }],
                pattern: [{
                    Jb: 1
                }],
                readonly: [{
                    Jb: 1
                }],
                src: [{
                    Jb: 3
                }]
            },
            link: {
                href: [{
                    Jb: 3,
                    FN: "rel",
                    W6: "alternate"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "author"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "bookmark"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "canonical"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "cite"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "help"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "icon"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "license"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "next"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "prefetch"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "dns-prefetch"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "prerender"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "preconnect"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "preload"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "prev"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "search"
                }, {
                    Jb: 3,
                    FN: "rel",
                    W6: "subresource"
                }]
            },
            script: {
                defer: [{
                    Jb: 1
                }]
            },
            source: {
                src: [{
                    Jb: 3
                }],
                srcset: [{
                    Jb: 11
                }]
            },
            textarea: {
                readonly: [{
                    Jb: 1
                }]
            },
            video: {
                src: [{
                    Jb: 3
                }]
            }
        };
    var lNO = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        VJ = {},
        Rce = (VJ[1] = null, VJ[2] = function(k, y) {
            return y instanceof g.oT ? g.RT(y) : g.Sq.toString()
        }, VJ[3] = function(k, y) {
            return g.Qx(y) ? g.Ml(y) : lNO.test(String(y)) ? String(y) : g.Sq.toString()
        }, VJ[4] = function(k, y) {
            return y instanceof g.bC ? g.Bc(y) : g.Sq.toString()
        }, VJ[5] = function(k, y) {
            return String(y)
        }, VJ[7] = null, VJ[8] = null, VJ[10] = null, VJ);
    var qdL = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var kYE = Object.prototype.hasOwnProperty;
    sSb.prototype = Object.create(null);
    var Nt$ = NyT();
    var JA = null;
    var Abw = typeof Node !== "undefined" && Node.prototype.getRootNode || function() {
        for (var k = this, y = k; k;) y = k, k = k.parentNode;
        return y
    };
    var hA = null,
        ey = null,
        gA = null,
        Zi = null,
        lN = [],
        W7 = IfB,
        s1 = [],
        yvw = function(k) {
            return cbg(function(y, q, N) {
                gA = ey = y;
                ey = null;
                q(N);
                RZ(null);
                ey = gA;
                gA = gA.parentNode;
                return y
            }, k)
        }(),
        kyB = function(k) {
            return cbg(function(y, q, N) {
                var D = {
                    nextSibling: y
                };
                ey = D;
                q(N);
                gA && RZ(y.nextSibling);
                return D === ey ? null : ey
            }, k)
        }();
    var tA = [],
        Dye = 0;
    var pb = new sSb;
    var sO$ = NyT(),
        joe = sO$.__default,
        Xaw = sO$.style;
    var zXq = Symbol("IS_VNODE");
    var Nh, qh = yJ;
    var H3L = Symbol("reactiveData");
    var AM = !1;
    g.kD(!0);
    var CIg = [];
    var aR = {
        tEw: function() {},
        rNw: function() {},
        wDD: function() {},
        Fx: function() {},
        VEj: function() {},
        f4: function() {},
        qU: function() {},
        O_: function() {},
        Ba: function() {}
    };
    u3.prototype.qU = function() {};
    u3.prototype.f4 = function() {};
    u3.prototype.O_ = function() {};
    u3.prototype.Ba = function() {};
    var rU = null;
    g.z(xi, u3);
    xi.prototype.us = function(k) {
        var y = rU;
        rU = this;
        this.V = 0;
        try {
            var q = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                return g.tG(q, B7(g.vzO)), g.tG(q, QK(this.fu)), g.tG(q, g.qg("render", this.componentName)), this.Z(k)
            } catch (N) {
                q.error = N, q.hasError = !0
            } finally {
                g.kN(q)
            }
        } finally {
            rU = y
        }
    };
    g.nu.Object.defineProperties(xi.prototype, {
        componentName: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var k, y;
                return (y = (k = this.Z.zA) != null ? k : this.Z.name) != null ? y : "[component]"
            }
        }
    });
    var LBB = [];
    g.lT = function() {
        var k = g.oz === mxE ? Error("A Signal Setter was called within onCleanup, which can lead to infinite update loops. See go/cow-errors#signal-write-in-oncleanup for more information.") : g.oz === g.vzO ? Error("A Signal Setter was called during rendering, which can lead to consistency issues. See go/cow-errors#signal-write-during-rendering for more information.") : Error("A Signal Setter was called within a Reaction, which can lead to infinite update loops. See go/cow-errors#signal-write-in-a-reactive-context for more information.");
        if (g.yB.Ejl) throw k;
        var y;
        (y = g.yB.handleError) == null || y.call.apply(y, [g.yB].concat(g.m(G_(k, "", 2))))
    };
    (function() {
        var k = JA;
        JA = function(y) {
            k == null || k(y);
            dsE(y)
        }
    })();
    Nh = GYT;
    (function(k) {
        var y = {},
            q;
        for (q in k) y = {
            Or: void 0,
            p8: void 0
        }, y.Or = aR[q], y.p8 = k[q], aR[q] = function(N) {
            return function() {
                var D = g.P6.apply(0, arguments);
                N.Or.apply(null, g.m(D));
                N.p8.apply(null, g.m(D))
            }
        }(y)
    })({
        Fx: function(k) {
            var y = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                g.tG(y, QK(k.fu));
                var q;
                ((q = k.Qs) == null ? 0 : q.length) && ZCb(k.Qs)
            } catch (N) {
                y.error = N, y.hasError = !0
            } finally {
                g.kN(y)
            }
        },
        qU: function(k) {
            var y = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                g.tG(y, QK(k.fu));
                var q;
                ((q = k.Qs) == null ? 0 : q.length) && ZCb(k.Qs)
            } catch (N) {
                y.error = N, y.hasError = !0
            } finally {
                g.kN(y)
            }
        },
        O_: function(k) {
            var y;
            ((y = k.q_) == null ? 0 : y.length) && k.q_.forEach(WBE)
        }
    });
    Nh = GYT;
    var AvE = new Set(["For", "If", "Match", "Watch"]),
        Jvg = {},
        tOg = (Jvg.__default = function() {
            return ki
        }, Jvg.style = function() {
            return ki
        }, Jvg),
        B_;
    for (B_ in tOg) g.yB.attributes[B_] = tOg[B_](g.yB.attributes[B_]);
    var XPe = [],
        $yw = !1;
    rvq.componentType = Wnb;
    my$.componentType = Wnb;
    fNN.componentType = Wnb;
    g.z(O3$, g.R);
    g.w = O3$.prototype;
    g.w.hide = function() {
        this.B = !0;
        g.R.prototype.hide.call(this);
        PfN(this, !1)
    };
    g.w.show = function() {
        this.B = !1;
        g.R.prototype.show.call(this);
        PfN(this, !0)
    };
    g.w.isHidden = function() {
        return this.B
    };
    g.w.rg = function() {
        this.scrollTo(this.scrollPosition - this.containerWidth)
    };
    g.w.TQ = function() {
        this.scrollTo(this.scrollPosition + this.containerWidth)
    };
    g.w.resize = function(k, y) {
        var q = this.api.S(),
            N = 16 / 9,
            D = k.width >= 650,
            n = k.width < 480 || k.height < 290,
            T = Math.min(this.suggestionData.length, this.Z.length);
        if (Math.min(k.width, k.height) <= 150 || T === 0 || !q.MS) this.hide();
        else {
            var I;
            if (D) {
                var H = I = 28;
                this.N = 16
            } else this.N = H = I = 8;
            if (n) {
                var K = 6;
                D = 14;
                var A = 12;
                n = 24;
                q = 12
            } else K = 8, D = 18, A = 16, n = 36, q = 16;
            k = k.width - (48 + I + H);
            I = Math.ceil(k / 150);
            I = Math.min(3, I);
            H = k / I - this.N;
            var c = Math.floor(H / N);
            y && c + 100 > y && H > 50 && (c = Math.max(y, 50 / N), I = Math.ceil(k / (N * (c - 100) + this.N)), H = k / I - this.N,
                c = Math.floor(H / N));
            H < 50 || g.Xh(this.api) ? this.hide() : this.show();
            for (y = 0; y < T; y++) {
                N = this.Z[y];
                var u = N.nS("ytp-suggestion-image");
                u.style.width = H + "px";
                u.style.height = c + "px";
                N.nS("ytp-suggestion-title").style.width = H + "px";
                N.nS("ytp-suggestion-author").style.width = H + "px";
                N = N.nS("ytp-suggestion-duration");
                N.style.display = N && H < 100 ? "none" : ""
            }
            T = D + K + A + 4;
            this.j = T + q + (c - n) / 2;
            this.suggestions.element.style.height = c + T + "px";
            this.C = H;
            this.containerWidth = k;
            this.columns = I;
            this.scrollPosition = 0;
            this.suggestions.element.scrollLeft = -0;
            vJL(this)
        }
    };
    g.w.onVideoDataChange = function() {
        var k = this.api.getVideoData(),
            y = this.api.S();
        this.J = k.Up ? !1 : y.V;
        k.suggestions ? this.suggestionData = g.$C(k.suggestions, function(q) {
            return q && !q.playlistId
        }) : this.suggestionData.length = 0;
        CfT(this);
        k.Up ? this.title.update({
            title: g.Qo("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: k.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.w.scrollTo = function(k) {
        k = g.X6(k, this.containerWidth - this.suggestionData.length * (this.C + this.N), 0);
        this.U.start(this.scrollPosition, k, 1E3);
        this.scrollPosition = k;
        vJL(this);
        PfN(this, !0)
    };
    g.z(m9, g.Gg);
    m9.prototype.show = function() {
        g.Gg.prototype.show.call(this);
        b3$(this, this.api.KS().getPlayerSize())
    };
    m9.prototype.resize = function(k) {
        g.Gg.prototype.resize.call(this, k);
        this.Z && (b3$(this, k), g.fD(this.element, "related-on-error-overlay-visible", !this.Z.isHidden()))
    };
    m9.prototype.N = function(k) {
        g.Gg.prototype.N.call(this, k);
        var y = this.api.getVideoData();
        if (y.hH || y.playerErrorMessageRenderer)(k = y.hH) ? UyF(this, k) : y.playerErrorMessageRenderer && UyF(this, y.playerErrorMessageRenderer);
        else {
            var q;
            k.Ei && (y.Pr ? VOx(y.Pr) ? q = g.MM(y.Pr) : q = g.Li(g.QX(y.Pr)) : q = g.Li(k.Ei), this.xl(q, "subreason"))
        }
    };
    g.z(QOO, g.R);
    g.w = QOO.prototype;
    g.w.onVideoDataChange = function() {
        var k = this.api.getVideoData(),
            y = xxE(),
            q = 96714;
        g.Z6(k) ? (y = jSg(), q = 216165, g.pD(this.element, "ytp-music-impression-link")) : g.mW(this.element, "ytp-music-impression-link");
        this.api.S().W("embeds_enable_emc3ds_woyt_counterfactual") && g.pD(this.element, "ytp-woyt-emc3ds-cf");
        this.updateValue("logoSvg", y);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, q)
    };
    g.w.N2 = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.w.TZ = function() {
        var k = this.api.getVideoData(),
            y = this.api.S(),
            q = this.api.getVideoData().Up,
            N = y.cX && !y.W("embeds_enable_emc3ds_woyt_counterfactual"),
            D = !y.MS,
            n = this.Ep.uO() && !y.W("embeds_enable_emc3ds_woyt_counterfactual");
        y = y.C;
        N || n || q || D || y || this.api.qS() || !k.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (k = MOG(this), this.updateValue("url", k), this.show())
    };
    g.w.onClick = function(k) {
        this.api.W("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var y = MOG(this);
        g.HH(y, this.api, k);
        this.api.W("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.w.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.R.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.z(i3, g.R);
    i3.prototype.N2 = function() {
        var k = this.api.getPlayerStateObject();
        !this.api.VD() || g.e(k, 2) && g.aX(this.api) || g.e(k, 64) ? (this.api.logVisibility(this.Z, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.Z, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    i3.prototype.N = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.Z)
    };
    i3.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.z(fb, g.R);
    fb.prototype.C = function() {
        var k = this.api.getPlayerStateObject(),
            y = this.api.getVideoData();
        this.api.S().W("embeds_enable_muted_autoplay_shorts_endscreen_fix") && g.fD(this.element, "ytp-shorts-mode", this.api.qS());
        y.mutedAutoplay && (g.e(k, 2) && !this.Az ? (this.show(), this.Z || (this.Z = new g.Yk(this.api), g.G(this, this.Z), this.Z.FH(this.V, 0), this.Z.show()), k = this.api.getVideoData(), this.updateValue("text", k.Gv), g.fD(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Az),
            this.api.rf("onMutedAutoplayEnds")) : this.hide())
    };
    fb.prototype.onClick = function() {
        if (!this.N) {
            this.Z && (this.Z.gF(), this.Z = null);
            g.fD(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var k = this.api.getVideoData(),
                y = this.api.getCurrentTime();
            cWE(k);
            this.api.loadVideoById(k.videoId, y);
            this.api.pF();
            this.api.logClick(this.element);
            this.hide();
            this.N = !0
        }
    };
    fb.prototype.onMutedAutoplayStarts = function() {
        this.N = !1;
        this.Z && (this.Z.gF(), this.Z = null)
    };
    g.z(OM, g.R);
    g.w = OM.prototype;
    g.w.onStateChange = function(k) {
        this.T_(k.state)
    };
    g.w.T_ = function(k) {
        this.state !== k && (this.state = k);
        Fng(this)
    };
    g.w.onVideoDataChange = function() {
        var k = this.api.S();
        k.C && g.pD(this.element, "ytp-no-hover");
        var y = this.api.getVideoData();
        y.videoId && !k.C ? (k = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", k), this.Z || (this.Z = this.listen("click", this.onClick))) : this.Z && (this.updateValue("url", null), this.HZ(this.Z), this.Z = null);
        k = xxE();
        var q = 76758;
        g.Z6(y) && (k = jSg(), q = 216164);
        this.updateValue("logoSvg", k);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            q);
        Fng(this)
    };
    g.w.onClick = function(k) {
        this.api.W("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var y = this.api.getVideoUrl(!g.ou(k), !1, !0, !0);
        if (this.api.W("web_player_log_click_before_generating_ve_conversion_params")) {
            var q = {};
            g.yQ(this.api, "addEmbedsConversionTrackingParams", [q]);
            y = g.lG(y, q)
        }
        g.HH(y, this.api, k);
        this.api.W("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.w.SH = function(k) {
        if ((k = k.width < 480) && !this.N || !k && this.N) {
            var y = new g.R(xxE()),
                q = this.nS("ytp-watermark");
            g.fD(q, "ytp-watermark-small", k);
            g.HG(q);
            y.FH(q);
            this.N = k
        }
    };
    g.z(Gy1, g.R);
    g.w = Gy1.prototype;
    g.w.e2 = function() {
        var k = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.e(k, 2) ? this.hide() : this.Az || (g.R.prototype.show.call(this), this.api.logVisibility(this.element, this.Az))
    };
    g.w.a7 = function() {
        this.Z && this.Z.hide()
    };
    g.w.onAutoplayBlocked = function() {
        this.hide();
        cWE(this.api.getVideoData())
    };
    g.w.onClick = function() {
        if (!this.N) {
            g.fD(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var k = this.api.getVideoData(),
                y = this.api.getCurrentTime();
            cWE(k);
            this.api.loadVideoById(k.videoId, y);
            this.api.pF();
            this.api.logClick(this.element);
            this.api.rf("onMutedAutoplayEnds");
            this.N = !0
        }
    };
    g.w.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.gF(), this.watermark = null)
    };
    g.z(P_, g.R);
    P_.prototype.hide = function() {
        g.mW(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.R.prototype.hide.call(this)
    };
    P_.prototype.j = function() {
        this.N = !0;
        g.mW(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.qS() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    P_.prototype.B = function() {
        this.N = !1;
        g.pD(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.qS() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    P_.prototype.OT = function() {
        var k = this.api.getPlayerStateObject();
        g.e(k, 1) || g.e(k, 16) || g.e(k, 32) || (!g.e(k, 4) || g.e(k, 2) || g.e(k, 1024) ? (this.N || this.api.logVisibility(this.element, !1), this.V.hide()) : this.Z.hasSuggestions() && (this.N || (g.pD(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.Mp(this.Z), this.Z.show(), this.api.logVisibility(this.element, !0)), this.V.show()))
    };
    g.z(v_, g.R);
    v_.prototype.show = function() {
        g.R.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    v_.prototype.gF = function() {
        Cb(this);
        g.R.prototype.gF.call(this)
    };
    g.z(oJB, g.pi);
    g.w = oJB.prototype;
    g.w.vQ = function() {
        return !1
    };
    g.w.create = function() {
        var k = this.G.S(),
            y = g.na(this.G),
            q, N = (q = this.G.getVideoData()) == null ? void 0 : q.clientPlaybackNonce;
        N && g.al({
            clientPlaybackNonce: N
        });
        k.Dx && !k.disableOrganicUi && Row(this);
        var D;
        this.G.W("embeds_enable_emc3ds_muted_autoplay") && ((D = k.getWebPlayerContextConfig()) == null ? 0 : D.embedsEnableEmc3ds) || (this.J = new Gy1(this.G), g.G(this, this.J), g.pa(this.G, this.J.element, 4), this.ND = new fb(this.G), g.G(this, this.ND), g.pa(this.G, this.ND.element, 4));
        k.cX && (this.watermark = new OM(this.G), g.G(this, this.watermark),
            g.pa(this.G, this.watermark.element, 8));
        y && !k.disableOrganicUi && (this.Y = new QOO(this.G, y), g.G(this, this.Y), g.pa(this.G, this.Y.element, 8), this.G.isMutedByEmbedsMutedAutoplay() && (this.onMutedAutoplayStarts(), this.Y.hide()));
        k.N && !k.disableOrganicUi && (this.sT = new i3(this.G), g.G(this, this.sT), g.pa(this.G, this.sT.element, 4));
        this.Z.T(this.G, "appresize", this.SH);
        this.Z.T(this.G, "presentingplayerstatechange", this.N2);
        this.Z.T(this.G, "videodatachange", this.onVideoDataChange);
        this.Z.T(this.G, "videoplayerreset",
            this.onReset);
        this.Z.T(this.G, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.Z.T(this.G, "onAdStart", this.onAdStart);
        this.Z.T(this.G, "onAdComplete", this.onAdComplete);
        this.Z.T(this.G, "onAdSkip", this.onAdSkip);
        this.Z.T(this.G, "onAdStateChange", this.onAdStateChange);
        if (this.B = g.P2(g.eY(k))) this.countdownTimer = new v_(this.G), g.G(this, this.countdownTimer), g.pa(this.G, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.Z.T(this.G, g.ib("embeds"), this.onCueRangeEnter), this.Z.T(this.G,
            g.fh("embeds"), this.onCueRangeExit);
        this.cZ(this.G.getPlayerStateObject());
        this.player.DJ("embed");
        var n, T;
        ((n = this.G.S().getWebPlayerContextConfig()) == null ? 0 : (T = n.embedsHostFlags) == null ? 0 : T.allowOverridingVisitorDataPlayerVars) && (k = g.H1("IDENTITY_MEMENTO")) && this.G.YR("onMementoChange", k)
    };
    g.w.onCueRangeEnter = function(k) {
        k.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), dyG(this.countdownTimer))
    };
    g.w.onCueRangeExit = function(k) {
        k.getId() === "countdown timer" && this.countdownTimer && (Cb(this.countdownTimer), this.countdownTimer.hide())
    };
    g.w.SH = function() {
        var k = this.G.KS().getPlayerSize();
        this.vO && this.vO.resize(k)
    };
    g.w.onReset = function() {
        gJT(this)
    };
    g.w.N2 = function(k) {
        this.cZ(k.state)
    };
    g.w.cZ = function(k) {
        g.e(k, 128) ? (this.vO || (this.vO = new m9(this.G), g.G(this, this.vO), g.pa(this.G, this.vO.element, 4)), this.vO.N(k.xg), this.vO.show(), g.pD(this.G.getRootNode(), "ytp-embed-error")) : this.vO && (this.vO.dispose(), this.vO = null, g.mW(this.G.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.Z)
            if (g.e(k, 64)) this.countdownTimer.hide(), Cb(this.countdownTimer);
            else if (k.isPaused()) {
            var y = this.countdownTimer;
            y.N || (y.N = !0, y.j = (0, g.om)())
        } else k.isPlaying() && this.countdownTimer.N &&
            (y = this.countdownTimer, y.N && (y.V += (0, g.om)() - y.j, y.N = !1, LnG(y)));
        hoF(this, k)
    };
    g.w.onMutedAutoplayStarts = function() {
        this.G.getVideoData().mutedAutoplay && this.J && g.fD(this.G.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.w.onVideoDataChange = function(k, y) {
        var q = this.Pw !== y.videoId;
        k = !q && k === "dataloaded";
        var N = {
            isShortsModeEnabled: !!this.G.qS()
        };
        g.OH("embedsVideoDataDidChange", {
            clientPlaybackNonce: y.clientPlaybackNonce,
            isReload: k,
            runtimeEnabledFeatures: N
        });
        q && (this.Pw = y.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.B && (this.G.F7("embeds"), y.isAd() || y.limitedPlaybackDurationInSeconds < 5 || g.Xh(this.G) || (y = Math.max((y.startSeconds + y.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            y = new g.rG(y, y + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.G.ZW([y]))), this.G.S().Dx && !this.G.S().disableOrganicUi && (gJT(this), Row(this)));
        this.G.S().C && this.C && this.C.detach()
    };
    g.w.onAdStart = function() {
        EM(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.w.onAdComplete = function() {
        EM(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.w.onAdSkip = function() {
        EM(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.w.onAdStateChange = function(k) {
        k === 2 && EM(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.zg("embed", oJB);
})(_yt_player);