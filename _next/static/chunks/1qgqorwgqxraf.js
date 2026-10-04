(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 32781, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("loader-circle", [["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]]);
    e.s(["Loader2", 0, t], 32781)
}
, 68877, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("arrow-right", [["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }], ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]]);
    e.s(["ArrowRight", 0, t], 68877)
}
, 15288, e => {
    "use strict";
    var t = e.i(43476)
      , s = e.i(75157);
    e.s(["Card", 0, function({className: e, interactive: a=!1, ...l}) {
        return (0,
        t.jsx)("div", {
            className: (0,
            s.cn)("rounded-2xl border border-border bg-surface p-5 shadow-soft", a && "transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-elevated", e),
            ...l
        })
    }
    ])
}
, 7219, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("trending-up", [["path", {
        d: "M16 7h6v6",
        key: "box55l"
    }], ["path", {
        d: "m22 7-8.5 8.5-5-5L2 17",
        key: "1t1m79"
    }]]);
    e.s(["TrendingUp", 0, t], 7219)
}
, 79758, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("trending-down", [["path", {
        d: "M16 17h6v-6",
        key: "t6n2it"
    }], ["path", {
        d: "m22 17-8.5-8.5-5 5L2 7",
        key: "x473p"
    }]]);
    e.s(["TrendingDown", 0, t], 79758)
}
, 15281, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("pencil", [["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }], ["path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    }]]);
    e.s(["Pencil", 0, t], 15281)
}
, 76170, e => {
    "use strict";
    var t = e.i(43476)
      , s = e.i(71645)
      , a = e.i(7219)
      , l = e.i(79758);
    let r = (0,
    e.i(56420).default)("minus", [["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }]]);
    var n = e.i(15288);
    let i = {
        reading: {
            label: "Reading",
            color: "var(--primary)"
        },
        listening: {
            label: "Listening",
            color: "var(--accent)"
        },
        speaking: {
            label: "Speaking",
            color: "var(--danger)"
        },
        writing: {
            label: "Writing",
            color: "var(--warning)"
        }
    }
      , d = ["reading", "listening", "speaking", "writing"];
    function c(e) {
        return new Date(e).toLocaleDateString(void 0, {
            month: "short",
            day: "numeric"
        })
    }
    e.s(["ProgressTrends", 0, function({series: e}) {
        let o = d.filter(t => (e[t]?.length ?? 0) >= 1)
          , x = o.find(t => (e[t]?.length ?? 0) >= 2)
          , [m,u] = (0,
        s.useState)(x ?? o[0] ?? "reading")
          , h = (0,
        s.useMemo)( () => e[m] ?? [], [e, m])
          , p = i[m] ?? i.reading
          , g = (0,
        s.useMemo)( () => (function(e) {
            if (e.length < 2)
                return null;
            let t = e.map(e => e.band)
              , s = Math.max(0, Math.floor(Math.min(...t) - .5))
              , a = Math.min(9, Math.ceil(Math.max(...t) + .5));
            a - s < 2 && (s = Math.max(0, (a = Math.min(9, s + 2)) - 2));
            let l = t => 30 + t / (e.length - 1) * 516
              , r = e => 174 - (e - s) / (a - s) * 158
              , n = e.map( (e, t) => `${0 === t ? "M" : "L"}${l(t).toFixed(1)} ${r(e.band).toFixed(1)}`).join(" ")
              , i = `${n} L ${l(e.length - 1).toFixed(1)} 174.0 L ${l(0).toFixed(1)} 174.0 Z`
              , d = [];
            for (let e = s; e <= a; e++)
                d.push(e);
            let c = e[e.length - 1].band
              , o = +(c - e[e.length - 2].band).toFixed(1);
            return {
                W: 560,
                H: 200,
                padL: 30,
                padR: 14,
                x: l,
                y: r,
                line: n,
                area: i,
                gridBands: d,
                latest: c,
                delta: o
            }
        }
        )(h), [h]);
        return 0 === o.length ? (0,
        t.jsxs)(n.Card, {
            children: [(0,
            t.jsx)("h3", {
                className: "text-sm font-medium text-muted",
                children: "Band trend"
            }), (0,
            t.jsx)("p", {
                className: "mt-6 mb-4 text-center text-sm text-muted",
                children: "Complete tests to see your band progress over time."
            })]
        }) : (0,
        t.jsxs)(n.Card, {
            children: [(0,
            t.jsxs)("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [(0,
                t.jsx)("h3", {
                    className: "text-sm font-medium text-muted",
                    children: "Band trend"
                }), (0,
                t.jsx)("div", {
                    className: "flex flex-wrap gap-1",
                    children: o.map(e => {
                        let s = e === m;
                        return (0,
                        t.jsx)("button", {
                            onClick: () => u(e),
                            className: `rounded-full px-3 py-1 text-xs font-medium transition-colors ${s ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted hover:text-foreground"}`,
                            children: i[e].label
                        }, e)
                    }
                    )
                })]
            }), g ? (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: "mt-1 flex items-center justify-between",
                    children: [(0,
                    t.jsxs)("span", {
                        className: "text-xs text-muted",
                        children: ["Latest ", (0,
                        t.jsxs)("strong", {
                            className: "text-foreground tabular-nums",
                            children: ["Band ", g.latest]
                        })]
                    }), (0,
                    t.jsxs)("span", {
                        className: `inline-flex items-center gap-1 text-sm font-semibold tabular-nums ${g.delta > 0 ? "text-success" : g.delta < 0 ? "text-danger" : "text-muted"}`,
                        children: [g.delta > 0 ? (0,
                        t.jsx)(a.TrendingUp, {
                            className: "h-4 w-4"
                        }) : g.delta < 0 ? (0,
                        t.jsx)(l.TrendingDown, {
                            className: "h-4 w-4"
                        }) : (0,
                        t.jsx)(r, {
                            className: "h-4 w-4"
                        }), g.delta > 0 ? `+${g.delta}` : g.delta, " band"]
                    })]
                }), (0,
                t.jsxs)("svg", {
                    viewBox: `0 0 ${g.W} ${g.H}`,
                    className: "mt-3 h-auto w-full",
                    preserveAspectRatio: "none",
                    role: "img",
                    "aria-label": `${p.label} band trend, latest ${g.latest}`,
                    children: [(0,
                    t.jsx)("defs", {
                        children: (0,
                        t.jsxs)("linearGradient", {
                            id: `fill-${m}`,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [(0,
                            t.jsx)("stop", {
                                offset: "0%",
                                style: {
                                    stopColor: p.color,
                                    stopOpacity: .18
                                }
                            }), (0,
                            t.jsx)("stop", {
                                offset: "100%",
                                style: {
                                    stopColor: p.color,
                                    stopOpacity: 0
                                }
                            })]
                        })
                    }), g.gridBands.map(e => (0,
                    t.jsxs)("g", {
                        className: "text-border",
                        children: [(0,
                        t.jsx)("line", {
                            x1: g.padL,
                            x2: g.W - g.padR,
                            y1: g.y(e),
                            y2: g.y(e),
                            stroke: "currentColor",
                            strokeWidth: 1,
                            strokeDasharray: "3 4"
                        }), (0,
                        t.jsx)("text", {
                            x: g.padL - 8,
                            y: g.y(e) + 3,
                            textAnchor: "end",
                            className: "fill-muted text-[10px]",
                            children: e
                        })]
                    }, e)), (0,
                    t.jsx)("path", {
                        d: g.area,
                        fill: `url(#fill-${m})`
                    }), (0,
                    t.jsx)("path", {
                        d: g.line,
                        fill: "none",
                        stroke: p.color,
                        strokeWidth: 2.5,
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }), h.map( (e, s) => {
                        let a = s === h.length - 1;
                        return (0,
                        t.jsx)("circle", {
                            cx: g.x(s),
                            cy: g.y(e.band),
                            r: a ? 5 : 3.5,
                            fill: p.color,
                            strokeWidth: 2,
                            className: "stroke-surface",
                            children: (0,
                            t.jsxs)("title", {
                                children: ["Band ", e.band, " · ", c(e.at)]
                            })
                        }, s)
                    }
                    ), (0,
                    t.jsx)("text", {
                        x: g.padL,
                        y: g.H - 6,
                        textAnchor: "start",
                        className: "fill-muted text-[10px]",
                        children: c(h[0].at)
                    }), (0,
                    t.jsx)("text", {
                        x: g.W - g.padR,
                        y: g.H - 6,
                        textAnchor: "end",
                        className: "fill-muted text-[10px]",
                        children: c(h[h.length - 1].at)
                    })]
                })]
            }) : (0,
            t.jsxs)("p", {
                className: "mt-6 mb-4 text-center text-sm text-muted",
                children: ["Take at least two ", p.label.toLowerCase(), " tests to see a line graph."]
            })]
        })
    }
    ], 76170)
}
, 73137, e => {
    "use strict";
    var t = e.i(43476)
      , s = e.i(71645)
      , a = e.i(18566)
      , l = e.i(22016);
    let r = (0,
    e.i(56420).default)("target", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]]);
    var n = e.i(15281)
      , i = e.i(89664)
      , d = e.i(68877)
      , c = e.i(74816)
      , o = e.i(32781)
      , x = e.i(63676)
      , m = e.i(15288)
      , u = e.i(95187);
    let h = (0,
    u.createServerReference)("408ced21aaa867936e16bea6a421f2b4d0055ced8c", u.callServer, void 0, u.findSourceMapURL, "setTargetBand")
      , p = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
      , g = e => Math.max(0, Math.min(100, (e - 4) / 5 * 100));
    e.s(["GoalTracker", 0, function({target: e, overall: u, skills: f}) {
        let j = (0,
        a.useRouter)()
          , [b,y] = (0,
        s.useState)(null == e)
          , [N,v] = (0,
        s.useTransition)()
          , [w,k] = (0,
        s.useState)(null);
        function $(e) {
            k(null),
            v(async () => {
                let t = await h(e);
                t.ok ? (y(!1),
                j.refresh()) : k(t.error)
            }
            )
        }
        if (b)
            return (0,
            t.jsxs)(m.Card, {
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    t.jsxs)("h3", {
                        className: "flex items-center gap-2 text-sm font-medium text-muted",
                        children: [(0,
                        t.jsx)(r, {
                            className: "h-4 w-4"
                        }), " ", null == e ? "Set your target band" : "Change target"]
                    }), null != e && (0,
                    t.jsx)("button", {
                        onClick: () => y(!1),
                        className: "text-muted hover:text-foreground",
                        "aria-label": "Cancel",
                        children: (0,
                        t.jsx)(x.X, {
                            className: "h-4 w-4"
                        })
                    })]
                }), (0,
                t.jsx)("p", {
                    className: "mt-1 text-sm text-muted",
                    children: "Pick the band you're aiming for — we'll track your progress and tell you what to focus on."
                }), (0,
                t.jsx)("div", {
                    className: "mt-4 flex flex-wrap gap-2",
                    children: p.map(s => {
                        let a = e === s;
                        return (0,
                        t.jsx)("button", {
                            disabled: N,
                            onClick: () => $(s),
                            className: `rounded-full px-3.5 py-1.5 text-sm font-semibold tabular-nums transition-colors disabled:opacity-50 ${a ? "bg-primary text-primary-foreground" : "bg-surface-2 text-foreground hover:bg-primary/10 hover:text-primary"}`,
                            children: s.toFixed(1)
                        }, s)
                    }
                    )
                }), N && (0,
                t.jsxs)("p", {
                    className: "mt-3 inline-flex items-center gap-2 text-sm text-muted",
                    children: [(0,
                    t.jsx)(o.Loader2, {
                        className: "h-4 w-4 animate-spin"
                    }), " Saving…"]
                }), w && (0,
                t.jsx)("p", {
                    className: "mt-3 text-sm text-danger",
                    children: w
                }), null != e && (0,
                t.jsx)("button", {
                    onClick: () => $(null),
                    disabled: N,
                    className: "mt-4 text-xs font-medium text-muted underline hover:text-danger disabled:opacity-50",
                    children: "Remove goal"
                })]
            });
        let C = null != u && null != e ? +(e - u).toFixed(1) : null
          , M = null != C && C <= 0
          , L = [...f].sort( (e, t) => (e.avg ?? -1) - (t.avg ?? -1))
          , T = null != e ? L.find(t => (t.avg ?? -1) < e) : void 0;
        return (0,
        t.jsxs)(m.Card, {
            children: [(0,
            t.jsxs)("div", {
                className: "flex items-start justify-between gap-4",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsxs)("h3", {
                        className: "flex items-center gap-2 text-sm font-medium text-muted",
                        children: [(0,
                        t.jsx)(r, {
                            className: "h-4 w-4"
                        }), " Target band"]
                    }), (0,
                    t.jsxs)("p", {
                        className: "mt-1 flex items-end gap-2",
                        children: [(0,
                        t.jsx)("span", {
                            className: "text-4xl font-extrabold tabular-nums text-primary",
                            children: e?.toFixed(1)
                        }), null != u && (0,
                        t.jsxs)("span", {
                            className: "mb-1 text-sm text-muted",
                            children: ["now ", (0,
                            t.jsx)("strong", {
                                className: "text-foreground tabular-nums",
                                children: u.toFixed(1)
                            })]
                        })]
                    })]
                }), (0,
                t.jsxs)("button", {
                    onClick: () => y(!0),
                    className: "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-muted hover:bg-surface-2 hover:text-foreground",
                    children: [(0,
                    t.jsx)(n.Pencil, {
                        className: "h-3.5 w-3.5"
                    }), " Edit"]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "relative mt-4 h-2.5 rounded-full bg-surface-2",
                children: [null != u && (0,
                t.jsx)("div", {
                    className: "absolute inset-y-0 left-0 rounded-full bg-brand-gradient",
                    style: {
                        width: `${g(u)}%`
                    }
                }), null != e && (0,
                t.jsx)("div", {
                    className: "absolute -top-1 h-4.5 w-0.5 -translate-x-1/2 bg-foreground",
                    style: {
                        left: `${g(e)}%`,
                        height: "1.1rem",
                        marginTop: "-0.3rem"
                    },
                    title: `Target ${e.toFixed(1)}`
                })]
            }), (0,
            t.jsxs)("div", {
                className: "mt-1.5 flex justify-between text-[10px] text-muted",
                children: [(0,
                t.jsx)("span", {
                    children: "4.0"
                }), (0,
                t.jsx)("span", {
                    children: "9.0"
                })]
            }), null == u ? (0,
            t.jsx)("p", {
                className: "mt-2 text-sm text-muted",
                children: "Take a test to start tracking progress toward your goal."
            }) : M ? (0,
            t.jsxs)("p", {
                className: "mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-success",
                children: [(0,
                t.jsx)(c.Trophy, {
                    className: "h-4 w-4"
                }), " Goal reached — aim higher? 🎉"]
            }) : (0,
            t.jsxs)("p", {
                className: "mt-2 text-sm",
                children: [(0,
                t.jsx)("strong", {
                    className: "tabular-nums",
                    children: C
                }), " band to go.", T && (0,
                t.jsxs)(t.Fragment, {
                    children: [" ", "Focus on", " ", (0,
                    t.jsx)(l.default, {
                        href: T.href,
                        className: "font-medium text-primary hover:underline",
                        children: T.title
                    }), " ", "next."]
                })]
            }), null != e && (0,
            t.jsxs)("div", {
                className: "mt-4 space-y-2 border-t border-border pt-4",
                children: [(0,
                t.jsx)("p", {
                    className: "text-xs font-semibold uppercase tracking-wide text-muted",
                    children: "Study plan"
                }), L.map(s => {
                    let a = null != s.avg && s.avg >= e
                      , r = null != s.avg;
                    return (0,
                    t.jsxs)(l.default, {
                        href: s.href,
                        className: "flex items-center gap-3 rounded-lg px-1 py-1 text-sm hover:bg-surface-2/60",
                        children: [(0,
                        t.jsx)("span", {
                            className: "w-20 shrink-0 font-medium",
                            children: s.title
                        }), (0,
                        t.jsxs)("span", {
                            className: "relative h-1.5 flex-1 rounded-full bg-surface-2",
                            children: [r && (0,
                            t.jsx)("span", {
                                className: `absolute inset-y-0 left-0 rounded-full ${a ? "bg-success" : "bg-primary/60"}`,
                                style: {
                                    width: `${g(s.avg)}%`
                                }
                            }), (0,
                            t.jsx)("span", {
                                className: "absolute -top-0.5 h-2.5 w-px -translate-x-1/2 bg-foreground/50",
                                style: {
                                    left: `${g(e)}%`
                                }
                            })]
                        }), (0,
                        t.jsx)("span", {
                            className: `w-24 shrink-0 text-right text-xs font-medium ${a ? "text-success" : r ? "text-warning" : "text-muted"}`,
                            children: r ? a ? (0,
                            t.jsxs)("span", {
                                className: "inline-flex items-center justify-end gap-1",
                                children: [(0,
                                t.jsx)(i.Check, {
                                    className: "h-3.5 w-3.5"
                                }), " ", s.avg.toFixed(1)]
                            }) : `${(e - s.avg).toFixed(1)} to go` : "Not started"
                        }), (0,
                        t.jsx)(d.ArrowRight, {
                            className: "h-3.5 w-3.5 shrink-0 text-muted"
                        })]
                    }, s.key)
                }
                )]
            })]
        })
    }
    ], 73137)
}
]);