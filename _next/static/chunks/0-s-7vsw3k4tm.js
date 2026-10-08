(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 19455, e => {
    "use strict";
    let t, r, a;
    var n = e.i(43476)
      , i = e.i(75157)
      , l = e.i(71645);
    function s(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    var o = Symbol.for("react.lazy")
      , c = l[" use ".trim().toString()];
    function d(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof"in e && e.$$typeof === o && "_payload"in e && "object" == typeof (t = e._payload) && null !== t && "then"in t
    }
    var u = ((a = l.forwardRef( (e, t) => {
        let {children: r, ...a} = e;
        if (d(r) && "function" == typeof c && (r = c(r._payload)),
        l.isValidElement(r)) {
            var n;
            let e, i, o = (n = r,
            (i = (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? n.ref : (i = (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? n.props.ref : n.props.ref || n.ref), c = function(e, t) {
                let r = {
                    ...t
                };
                for (let a in t) {
                    let n = e[a]
                      , i = t[a];
                    /^on[A-Z]/.test(a) ? n && i ? r[a] = (...e) => {
                        let t = i(...e);
                        return n(...e),
                        t
                    }
                    : n && (r[a] = n) : "style" === a ? r[a] = {
                        ...n,
                        ...i
                    } : "className" === a && (r[a] = [n, i].filter(Boolean).join(" "))
                }
                return {
                    ...e,
                    ...r
                }
            }(a, r.props);
            return r.type !== l.Fragment && (c.ref = t ? function(...e) {
                return t => {
                    let r = !1
                      , a = e.map(e => {
                        let a = s(e, t);
                        return r || "function" != typeof a || (r = !0),
                        a
                    }
                    );
                    if (r)
                        return () => {
                            for (let t = 0; t < a.length; t++) {
                                let r = a[t];
                                "function" == typeof r ? r() : s(e[t], null)
                            }
                        }
                }
            }(t, o) : o),
            l.cloneElement(r, c)
        }
        return l.Children.count(r) > 1 ? l.Children.only(null) : null
    }
    )).displayName = "Slot.SlotClone",
    t = a,
    (r = l.forwardRef( (e, r) => {
        let {children: a, ...i} = e;
        d(a) && "function" == typeof c && (a = c(a._payload));
        let s = l.Children.toArray(a)
          , o = s.find(m);
        if (o) {
            let e = o.props.children
              , a = s.map(t => t !== o ? t : l.Children.count(e) > 1 ? l.Children.only(null) : l.isValidElement(e) ? e.props.children : null);
            return (0,
            n.jsx)(t, {
                ...i,
                ref: r,
                children: l.isValidElement(e) ? l.cloneElement(e, void 0, a) : null
            })
        }
        return (0,
        n.jsx)(t, {
            ...i,
            ref: r,
            children: a
        })
    }
    )).displayName = "Slot.Slot",
    r)
      , f = Symbol("radix.slottable");
    function m(e) {
        return l.isValidElement(e) && "function" == typeof e.type && "__radixId"in e.type && e.type.__radixId === f
    }
    let p = {
        primary: "bg-primary text-primary-foreground shadow-[var(--shadow-primary)] hover:brightness-95 active:translate-y-px",
        outline: "border border-border bg-surface shadow-soft hover:bg-surface-2 hover:border-primary/30 text-foreground active:translate-y-px",
        ghost: "hover:bg-surface-2 text-foreground active:translate-y-px",
        danger: "bg-danger text-white shadow-soft hover:brightness-110 active:translate-y-px"
    }
      , h = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10"
    };
    e.s(["Button", 0, function({className: e, variant: t="primary", size: r="md", asChild: a=!1, ...l}) {
        return (0,
        n.jsx)(a ? u : "button", {
            className: (0,
            i.cn)("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50", p[t], h[r], e),
            ...l
        })
    }
    ], 19455)
}
, 43011, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("crown", [["path", {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57"
    }], ["path", {
        d: "M5 21h14",
        key: "11awu3"
    }]]);
    e.s(["Crown", 0, t], 43011)
}
, 68590, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("message-square", [["path", {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p"
    }]]);
    e.s(["MessageSquare", 0, t], 68590)
}
, 38292, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("mic", [["path", {
        d: "M12 19v3",
        key: "npa21l"
    }], ["path", {
        d: "M19 10v2a7 7 0 0 1-14 0v-2",
        key: "1vc78b"
    }], ["rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "13",
        rx: "3",
        key: "s6n7sd"
    }]]);
    e.s(["Mic", 0, t], 38292)
}
, 56423, 81548, 25597, e => {
    "use strict";
    var t = e.i(56420);
    let r = (0,
    t.default)("book-open", [["path", {
        d: "M12 7v14",
        key: "1akyts"
    }], ["path", {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y"
    }]]);
    e.s(["BookOpen", 0, r], 56423);
    let a = (0,
    t.default)("headphones", [["path", {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi"
    }]]);
    e.s(["Headphones", 0, a], 81548);
    let n = (0,
    t.default)("pen-line", [["path", {
        d: "M13 21h8",
        key: "1jsn5i"
    }], ["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }]]);
    e.s(["PenLine", 0, n], 25597)
}
, 55677, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("clipboard-list", [["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }], ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
    }], ["path", {
        d: "M12 11h4",
        key: "1jrz19"
    }], ["path", {
        d: "M12 16h4",
        key: "n85exb"
    }], ["path", {
        d: "M8 11h.01",
        key: "1dfujw"
    }], ["path", {
        d: "M8 16h.01",
        key: "18s6g9"
    }]]);
    e.s(["ClipboardList", 0, t], 55677)
}
, 59502, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("flame", [["path", {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih"
    }]]);
    e.s(["Flame", 0, t], 59502)
}
, 96661, e => {
    "use strict";
    e.s(["mergeClasses", 0, (...e) => e.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()])
}
, 71987, 88973, e => {
    "use strict";
    e.s(["default", 0, {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }], 71987),
    e.s(["hasA11yProp", 0, e => {
        for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
                return !0;
        return !1
    }
    ], 88973)
}
, 5014, e => {
    "use strict";
    var t = e.i(71645)
      , r = e.i(71987)
      , a = e.i(88973)
      , n = e.i(96661);
    let i = (0,
    t.createContext)({})
      , l = (0,
    t.forwardRef)( ({color: e, size: l, strokeWidth: s, absoluteStrokeWidth: o, className: c="", children: d, iconNode: u, ...f}, m) => {
        let {size: p=24, strokeWidth: h=2, absoluteStrokeWidth: g=!1, color: x="currentColor", className: b=""} = (0,
        t.useContext)(i) ?? {}
          , y = o ?? g ? 24 * Number(s ?? h) / Number(l ?? p) : s ?? h;
        return (0,
        t.createElement)("svg", {
            ref: m,
            ...r.default,
            width: l ?? p ?? r.default.width,
            height: l ?? p ?? r.default.height,
            stroke: e ?? x,
            strokeWidth: y,
            className: (0,
            n.mergeClasses)("lucide", b, c),
            ...!d && !(0,
            a.hasA11yProp)(f) && {
                "aria-hidden": "true"
            },
            ...f
        }, [...u.map( ([e,r]) => (0,
        t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]])
    }
    );
    e.s(["default", 0, l], 5014)
}
, 95057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        formatUrl: function() {
            return s
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return o
        }
    };
    for (var n in a)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: a[n]
        });
    let i = e.r(90809)._(e.r(98183))
      , l = /https?|ftp|gopher|file/;
    function s(e) {
        let {auth: t, hostname: r} = e
          , a = e.protocol || ""
          , n = e.pathname || ""
          , s = e.hash || ""
          , o = e.query || ""
          , c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
        e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r),
        e.port && (c += ":" + e.port)),
        o && "object" == typeof o && (o = String(i.urlQueryToSearchParams(o)));
        let d = e.search || o && `?${o}` || "";
        return a && !a.endsWith(":") && (a += ":"),
        e.slashes || (!a || l.test(a)) && !1 !== c ? (c = "//" + (c || ""),
        n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""),
        s && "#" !== s[0] && (s = "#" + s),
        d && "?" !== d[0] && (d = "?" + d),
        n = n.replace(/[?#]/g, encodeURIComponent),
        d = d.replace("#", "%23"),
        `${a}${c}${n}${d}${s}`
    }
    let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
    function c(e) {
        return s(e)
    }
}
, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let a = e.r(71645);
    function n(e, t) {
        let r = (0,
        a.useRef)(null)
          , n = (0,
        a.useRef)(null);
        return (0,
        a.useCallback)(a => {
            if (null === a) {
                let e = r.current;
                e && (r.current = null,
                e());
                let t = n.current;
                t && (n.current = null,
                t())
            } else
                e && (r.current = i(e, a)),
                t && (n.current = i(t, a))
        }
        , [e, t])
    }
    function i(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let a = e.r(18967)
      , n = e.r(52817);
    function i(e) {
        if (!(0,
        a.isAbsoluteUrl)(e))
            return !0;
        try {
            let t = (0,
            a.getLocationOrigin)()
              , r = new URL(e,t);
            return r.origin === t && (0,
            n.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}
, 84508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let a = e => {}
}
, 22016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return x
        },
        useLinkStatus: function() {
            return y
        }
    };
    for (var n in a)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: a[n]
        });
    let i = e.r(90809)
      , l = e.r(43476)
      , s = i._(e.r(71645))
      , o = e.r(95057)
      , c = e.r(8372)
      , d = e.r(18581)
      , u = e.r(18967)
      , f = e.r(5550);
    e.r(33525);
    let m = e.r(32627)
      , p = e.r(91949)
      , h = e.r(73668)
      , g = e.r(9396);
    function x(t) {
        var r, a;
        let n, i, x, [y,v] = (0,
        s.useOptimistic)(p.IDLE_LINK_STATUS), j = (0,
        s.useRef)(null), {href: w, as: k, children: _, prefetch: N=null, passHref: S, replace: C, shallow: M, scroll: P, onClick: E, onMouseEnter: R, onTouchStart: O, legacyBehavior: L=!1, onNavigate: z, transitionTypes: T, ref: A, unstable_dynamicOnHover: I, ...$} = t;
        n = _,
        L && ("string" == typeof n || "number" == typeof n) && (n = (0,
        l.jsx)("a", {
            children: n
        }));
        let D = s.default.useContext(c.AppRouterContext)
          , U = !1 !== N
          , q = !1 !== N ? null === (a = N) || "auto" === a ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR
          , B = "string" == typeof (r = k || w) ? r : (0,
        o.formatUrl)(r);
        if (L) {
            if (n?.$$typeof === Symbol.for("react.lazy"))
                throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                    value: "E863",
                    enumerable: !1,
                    configurable: !0
                });
            i = s.default.Children.only(n)
        }
        let F = L ? i && "object" == typeof i && i.ref : A
          , W = s.default.useCallback(e => (null !== D && (j.current = (0,
        p.mountLinkInstance)(e, B, D, q, U, v)),
        () => {
            j.current && ((0,
            p.unmountLinkForCurrentNavigation)(j.current),
            j.current = null),
            (0,
            p.unmountPrefetchableInstance)(e)
        }
        ), [U, B, D, q, v])
          , V = {
            ref: (0,
            d.useMergedRef)(W, F),
            onClick(t) {
                L || "function" != typeof E || E(t),
                L && i.props && "function" == typeof i.props.onClick && i.props.onClick(t),
                !D || t.defaultPrevented || function(t, r, a, n, i, l, o) {
                    if ("u" > typeof window) {
                        let c, {nodeName: d} = t.currentTarget;
                        if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                            return;
                        if (!(0,
                        h.isLocalURL)(r)) {
                            n && (t.preventDefault(),
                            location.replace(r));
                            return
                        }
                        if (t.preventDefault(),
                        l) {
                            let e = !1;
                            if (l({
                                preventDefault: () => {
                                    e = !0
                                }
                            }),
                            e)
                                return
                        }
                        let {dispatchNavigateAction: u} = e.r(99781);
                        s.default.startTransition( () => {
                            u(r, n ? "replace" : "push", !1 === i ? m.ScrollBehavior.NoScroll : m.ScrollBehavior.Default, a.current, o)
                        }
                        )
                    }
                }(t, B, j, C, P, z, T)
            },
            onMouseEnter(e) {
                L || "function" != typeof R || R(e),
                L && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e),
                D && U && (0,
                p.onNavigationIntent)(e.currentTarget, !0 === I)
            },
            onTouchStart: function(e) {
                L || "function" != typeof O || O(e),
                L && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e),
                D && U && (0,
                p.onNavigationIntent)(e.currentTarget, !0 === I)
            }
        };
        return (0,
        u.isAbsoluteUrl)(B) ? V.href = B : L && !S && ("a" !== i.type || "href"in i.props) || (V.href = (0,
        f.addBasePath)(B)),
        x = L ? s.default.cloneElement(i, V) : (0,
        l.jsx)("a", {
            ...$,
            ...V,
            children: n
        }),
        (0,
        l.jsx)(b.Provider, {
            value: y,
            children: x
        })
    }
    e.r(84508);
    let b = (0,
    s.createContext)(p.IDLE_LINK_STATUS)
      , y = () => (0,
    s.useContext)(b);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 56420, e => {
    "use strict";
    var t = e.i(71645)
      , r = e.i(96661);
    let a = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ;
    var n = e.i(5014);
    e.s(["default", 0, (e, i) => {
        let l = (0,
        t.forwardRef)( ({className: l, ...s}, o) => (0,
        t.createElement)(n.default, {
            ref: o,
            iconNode: i,
            className: (0,
            r.mergeClasses)(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, l),
            ...s
        }));
        return l.displayName = a(e),
        l
    }
    ], 56420)
}
, 63676, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("x", [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]]);
    e.s(["X", 0, t], 63676)
}
, 18566, (e, t, r) => {
    t.exports = e.r(76562)
}
, 95187, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        callServer: function() {
            return i.callServer
        },
        createServerReference: function() {
            return s.createServerReference
        },
        findSourceMapURL: function() {
            return l.findSourceMapURL
        }
    };
    for (var n in a)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: a[n]
        });
    let i = e.r(32120)
      , l = e.r(92245)
      , s = e.r(35326)
}
, 89664, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("check", [["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]]);
    e.s(["Check", 0, t], 89664)
}
, 74816, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("trophy", [["path", {
        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
        key: "1n3hpd"
    }], ["path", {
        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
        key: "rfe1zi"
    }], ["path", {
        d: "M18 9h1.5a1 1 0 0 0 0-5H18",
        key: "7xy6bh"
    }], ["path", {
        d: "M4 22h16",
        key: "57wxv0"
    }], ["path", {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq"
    }], ["path", {
        d: "M6 9H4.5a1 1 0 0 1 0-5H6",
        key: "tex48p"
    }]]);
    e.s(["Trophy", 0, t], 74816)
}
, 67423, (e, t, r) => {
    "use strict";
    function a({widthInt: e, heightInt: t, blurWidth: r, blurHeight: n, blurDataURL: i, objectFit: l}) {
        let s = r ? 40 * r : e
          , o = n ? 40 * n : t
          , c = s && o ? `viewBox='0 0 ${s} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return a
        }
    })
}
, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var n in a)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: a[n]
        });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1
    }
}
, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    }),
    e.r(33525);
    let a = e.r(43369)
      , n = e.r(67423)
      , i = e.r(87690)
      , l = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
        return void 0 !== e.default
    }
    function o(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function c({src: e, sizes: t, unoptimized: r=!1, priority: d=!1, preload: u=!1, loading: f, className: m, quality: p, width: h, height: g, fill: x=!1, style: b, overrideSrc: y, onLoad: v, onLoadingComplete: j, placeholder: w="empty", blurDataURL: k, fetchPriority: _, decoding: N="async", layout: S, objectFit: C, objectPosition: M, lazyBoundary: P, lazyRoot: E, ...R}, O) {
        var L;
        let z, T, A, {imgConf: I, showAltText: $, blurComplete: D, defaultLoader: U} = O, q = I || i.imageConfigDefault;
        if ("allSizes"in q)
            z = q;
        else {
            let e = [...q.deviceSizes, ...q.imageSizes].sort( (e, t) => e - t)
              , t = q.deviceSizes.sort( (e, t) => e - t)
              , r = q.qualities?.sort( (e, t) => e - t);
            z = {
                ...q,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === U)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let B = R.loader || U;
        delete R.loader,
        delete R.srcSet;
        let F = "__next_img_default"in B;
        if (F) {
            if ("custom" === z.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = B;
            B = t => {
                let {config: r, ...a} = t;
                return e(a)
            }
        }
        if (S) {
            "fill" === S && (x = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[S];
            e && (b = {
                ...b,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[S];
            r && !t && (t = r)
        }
        let W = ""
          , V = o(h)
          , H = o(g);
        if ((L = e) && "object" == typeof L && (s(L) || void 0 !== L.src)) {
            let t = s(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if (T = t.blurWidth,
            A = t.blurHeight,
            k = k || t.blurDataURL,
            W = t.src,
            !x)
                if (V || H) {
                    if (V && !H) {
                        let e = V / t.width;
                        H = Math.round(t.height * e)
                    } else if (!V && H) {
                        let e = H / t.height;
                        V = Math.round(t.width * e)
                    }
                } else
                    V = t.width,
                    H = t.height
        }
        let X = !d && !u && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
        X = !1),
        z.unoptimized && (r = !0),
        F && !z.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let G = o(p)
          , K = Object.assign(x ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: C,
            objectPosition: M
        } : {}, $ ? {} : {
            color: "transparent"
        }, b)
          , Z = D || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,
        n.getImageBlurSvg)({
            widthInt: V,
            heightInt: H,
            blurWidth: T,
            blurHeight: A,
            blurDataURL: k || "",
            objectFit: K.objectFit
        })}")` : `url("${w}")`
          , Y = l.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit
          , J = Z ? {
            backgroundSize: Y,
            backgroundPosition: K.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: Z
        } : {}
          , Q = function({config: e, src: t, unoptimized: r, width: n, quality: i, sizes: l, loader: s}) {
            if (r) {
                if (t.startsWith("/") && !t.startsWith("//")) {
                    let e = (0,
                    a.getDeploymentId)();
                    if (e) {
                        let r = t.indexOf("?");
                        if (-1 !== r) {
                            let a = new URLSearchParams(t.slice(r + 1));
                            a.get("dpl") || (a.append("dpl", e),
                            t = t.slice(0, r) + "?" + a.toString())
                        } else
                            t += `?dpl=${e}`
                    }
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: o, kind: c} = function({deviceSizes: e, allSizes: t}, r, a) {
                if (a) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , n = [];
                    for (let e; e = r.exec(a); )
                        n.push(parseInt(e[2]));
                    if (n.length) {
                        let r = .01 * Math.min(...n);
                        return {
                            widths: t.filter(t => t >= e[0] * r),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof r ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, n, l)
              , d = o.length - 1;
            return {
                sizes: l || "w" !== c ? l : "100vw",
                srcSet: o.map( (r, a) => `${s({
                    config: e,
                    src: t,
                    quality: i,
                    width: r
                })} ${"w" === c ? r : a + 1}${c}`).join(", "),
                src: s({
                    config: e,
                    src: t,
                    quality: i,
                    width: o[d]
                })
            }
        }({
            config: z,
            src: e,
            unoptimized: r,
            width: V,
            quality: G,
            sizes: t,
            loader: B
        })
          , ee = X ? "lazy" : f;
        return {
            props: {
                ...R,
                loading: ee,
                fetchPriority: _,
                width: V,
                height: H,
                decoding: N,
                className: m,
                style: {
                    ...K,
                    ...J
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: y || Q.src
            },
            meta: {
                unoptimized: r,
                preload: u || d,
                placeholder: w,
                fill: x
            }
        }
    }
}
, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let a = e.r(71645)
      , n = "u" < typeof window
      , i = n ? () => {}
    : a.useLayoutEffect
      , l = n ? () => {}
    : a.useEffect;
    function s(e) {
        let {headManager: t, reduceComponentsToState: r} = e;
        function s() {
            if (t && t.mountedInstances) {
                let e = a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t?.mountedInstances?.add(e.children),
        s()),
        i( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        i( () => (t && (t._pendingUpdate = s),
        () => {
            t && (t._pendingUpdate = s)
        }
        )),
        l( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in a)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: a[n]
        });
    let i = e.r(55682)
      , l = e.r(90809)
      , s = e.r(43476)
      , o = l._(e.r(71645))
      , c = i._(e.r(98879))
      , d = e.r(42732);
    function u() {
        return [(0,
        s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
        let t, r, a, n;
        return e.reduce(f, []).reverse().concat(u().reverse()).filter((t = new Set,
        r = new Set,
        a = new Set,
        n = {},
        e => {
            let i = !0
              , l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
            case "title":
            case "base":
                r.has(e.type) ? i = !1 : r.add(e.type);
                break;
            case "meta":
                for (let t = 0, r = m.length; t < r; t++) {
                    let r = m[t];
                    if (e.props.hasOwnProperty(r))
                        if ("charSet" === r)
                            a.has(r) ? i = !1 : a.add(r);
                        else {
                            let t = e.props[r]
                              , a = n[r] || new Set;
                            ("name" !== r || !l) && a.has(t) ? i = !1 : (a.add(t),
                            n[r] = a)
                        }
                }
            }
            return i
        }
        )).reverse().map( (e, t) => {
            let r = e.key || t;
            return o.default.cloneElement(e, {
                key: r
            })
        }
        )
    }
    let h = function({children: e}) {
        let t = (0,
        o.useContext)(d.HeadManagerContext);
        return (0,
        s.jsx)(c.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let a = e.r(55682)._(e.r(71645))
      , n = e.r(87690)
      , i = a.default.createContext(n.imageConfigDefault)
}
, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let a = e.r(55682)._(e.r(71645)).default.createContext(null)
}
, 70965, (e, t, r) => {
    "use strict";
    function a(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return a
        }
    })
}
, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let a = e.r(70965)
      , n = e.r(43369);
    function i({config: e, src: t, width: r, quality: l}) {
        let s = (0,
        n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1))
                  , a = r.get("dpl");
                if (a) {
                    s = a,
                    r.delete("dpl");
                    let n = r.toString();
                    t = t.slice(0, e) + (n ? "?" + n : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let o = (0,
        a.findClosestQuality)(l, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/") && s ? `&dpl=${s}` : ""}`
    }
    i.__next_img_default = !0;
    let l = i
}
, 5500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let a = e.r(55682)
      , n = e.r(90809)
      , i = e.r(43476)
      , l = n._(e.r(71645))
      , s = a._(e.r(74080))
      , o = a._(e.r(25633))
      , c = e.r(8927)
      , d = e.r(87690)
      , u = e.r(18556);
    e.r(33525);
    let f = e.r(65856)
      , m = a._(e.r(1948))
      , p = e.r(18581)
      , h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1
    };
    function g(e, t, r, a, n, i, l) {
        let s = e?.src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s,
        ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0),
                r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let a = !1
                      , n = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => a,
                        isPropagationStopped: () => n,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            a = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            n = !0,
                            t.stopPropagation()
                        }
                    })
                }
                a?.current && a.current(e)
            }
        }
        ))
    }
    function x(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0,
    l.forwardRef)( ({src: e, srcSet: t, sizes: r, height: a, width: n, decoding: s, className: o, style: c, fetchPriority: d, placeholder: u, loading: f, unoptimized: m, fill: h, onLoadRef: b, onLoadingCompleteRef: y, setBlurComplete: v, setShowAltText: j, sizesInput: w, onLoad: k, onError: _, ...N}, S) => {
        let C = (0,
        l.useCallback)(e => {
            e && (_ && (e.src = e.src),
            e.complete && g(e, u, b, y, v, m, w))
        }
        , [e, u, b, y, v, _, m, w])
          , M = (0,
        p.useMergedRef)(S, C);
        return (0,
        i.jsx)("img", {
            ...N,
            ...x(d),
            loading: f,
            width: n,
            height: a,
            decoding: s,
            "data-nimg": h ? "fill" : "1",
            className: o,
            style: c,
            sizes: r,
            srcSet: t,
            src: e,
            ref: M,
            onLoad: e => {
                g(e.currentTarget, u, b, y, v, m, w)
            }
            ,
            onError: e => {
                j(!0),
                "empty" !== u && v(!0),
                _ && _(e)
            }
        })
    }
    );
    function y({isAppRouter: e, imgAttributes: t}) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...x(t.fetchPriority)
        };
        return e && s.default.preload ? (s.default.preload(t.src, r),
        null) : (0,
        i.jsx)(o.default, {
            children: (0,
            i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0,
    l.forwardRef)( (e, t) => {
        let r = (0,
        l.useContext)(f.RouterContext)
          , a = (0,
        l.useContext)(u.ImageConfigContext)
          , n = (0,
        l.useMemo)( () => {
            let e = h || a || d.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , r = e.deviceSizes.sort( (e, t) => e - t)
              , n = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: r,
                qualities: n,
                localPatterns: "u" < typeof window ? a?.localPatterns : e.localPatterns
            }
        }
        , [a])
          , {onLoad: s, onLoadingComplete: o} = e
          , p = (0,
        l.useRef)(s);
        (0,
        l.useEffect)( () => {
            p.current = s
        }
        , [s]);
        let g = (0,
        l.useRef)(o);
        (0,
        l.useEffect)( () => {
            g.current = o
        }
        , [o]);
        let[x,v] = (0,
        l.useState)(!1)
          , [j,w] = (0,
        l.useState)(!1)
          , {props: k, meta: _} = (0,
        c.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: n,
            blurComplete: x,
            showAltText: j
        });
        return (0,
        i.jsxs)(i.Fragment, {
            children: [(0,
            i.jsx)(b, {
                ...k,
                unoptimized: _.unoptimized,
                placeholder: _.placeholder,
                fill: _.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: v,
                setShowAltText: w,
                sizesInput: e.sizes,
                ref: t
            }), _.preload ? (0,
            i.jsx)(y, {
                isAppRouter: !r,
                imgAttributes: k
            }) : null]
        })
    }
    );
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 94013, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(63178)
      , a = e.i(56420);
    let n = (0,
    a.default)("moon", [["path", {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
    }]])
      , i = (0,
    a.default)("sun", [["circle", {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
    }], ["path", {
        d: "M12 2v2",
        key: "tus03m"
    }], ["path", {
        d: "M12 20v2",
        key: "1lh1kg"
    }], ["path", {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
    }], ["path", {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
    }], ["path", {
        d: "M2 12h2",
        key: "1t8f8n"
    }], ["path", {
        d: "M20 12h2",
        key: "1q8mjw"
    }], ["path", {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
    }], ["path", {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
    }]]);
    var l = e.i(71645);
    let s = () => () => {}
    ;
    e.s(["ThemeToggle", 0, function() {
        let {resolvedTheme: e, setTheme: a} = (0,
        r.useTheme)()
          , o = (0,
        l.useSyncExternalStore)(s, () => !0, () => !1)
          , c = "dark" === e;
        return (0,
        t.jsx)("button", {
            type: "button",
            "aria-label": "Toggle theme",
            onClick: () => a(c ? "light" : "dark"),
            className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-2",
            children: o ? c ? (0,
            t.jsx)(i, {
                className: "h-4 w-4"
            }) : (0,
            t.jsx)(n, {
                className: "h-4 w-4"
            }) : (0,
            t.jsx)("span", {
                className: "h-4 w-4"
            })
        })
    }
    ], 94013)
}
, 64569, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("zap", [["path", {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
    }]]);
    e.s(["Zap", 0, t], 64569)
}
, 23482, 74870, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("graduation-cap", [["path", {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
    }], ["path", {
        d: "M22 10v6",
        key: "1lu8f3"
    }], ["path", {
        d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
        key: "1r8lef"
    }]]);
    e.s(["GraduationCap", 0, t], 23482),
    e.s(["isPremiumActive", 0, function(e) {
        return !!e.premium_until && new Date(e.premium_until).getTime() > Date.now()
    }
    ], 74870)
}
, 49803, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("chart-column", [["path", {
        d: "M3 3v16a2 2 0 0 0 2 2h16",
        key: "c24i48"
    }], ["path", {
        d: "M18 17V9",
        key: "2bz60n"
    }], ["path", {
        d: "M13 17V5",
        key: "1frdt8"
    }], ["path", {
        d: "M8 17v-3",
        key: "17ska0"
    }]]);
    e.s(["BarChart3", 0, t], 49803)
}
, 46868, e => {
    "use strict";
    let t = [{
        value: "regular",
        label: "Regular IELTS"
    }, {
        value: "pre_ielts",
        label: "Pre-IELTS"
    }, {
        value: "intro",
        label: "Introduction"
    }];
    e.s(["ALL_LEVELS", 0, t, "LEVELS", 0, {
        pre_ielts: {
            slug: "pre_ielts",
            label: "Pre-IELTS",
            blurb: "Foundation reading and listening tests to get you ready for IELTS.",
            href: "/pre-ielts"
        },
        intro: {
            slug: "intro",
            label: "Introduction",
            blurb: "Gentle introductory reading and listening tests to ease you into the IELTS format.",
            href: "/intro"
        }
    }, "levelLabel", 0, function(e) {
        return t.find(t => t.value === e)?.label ?? "Regular IELTS"
    }
    ])
}
, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return d
        },
        getImageProps: function() {
            return c
        }
    };
    for (var n in a)
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: a[n]
        });
    let i = e.r(55682)
      , l = e.r(8927)
      , s = e.r(5500)
      , o = i._(e.r(1948));
    function c(e) {
        let {props: t} = (0,
        l.getImgProps)(e, {
            defaultLoader: o.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let[e,r] of Object.entries(t))
            void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let d = s.Image
}
, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}
, 63141, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(22016)
      , a = e.i(18566)
      , n = e.i(71645)
      , i = e.i(56420);
    let l = (0,
    i.default)("layout-dashboard", [["rect", {
        width: "7",
        height: "9",
        x: "3",
        y: "3",
        rx: "1",
        key: "10lvy0"
    }], ["rect", {
        width: "7",
        height: "5",
        x: "14",
        y: "3",
        rx: "1",
        key: "16une8"
    }], ["rect", {
        width: "7",
        height: "9",
        x: "14",
        y: "12",
        rx: "1",
        key: "1hutg5"
    }], ["rect", {
        width: "7",
        height: "5",
        x: "3",
        y: "16",
        rx: "1",
        key: "ldoo1y"
    }]]);
    var s = e.i(56423)
      , o = e.i(81548)
      , c = e.i(25597)
      , d = e.i(38292);
    let u = (0,
    i.default)("shield", [["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]]);
    var f = e.i(59502);
    let m = (0,
    i.default)("menu", [["path", {
        d: "M4 5h16",
        key: "1tepv9"
    }], ["path", {
        d: "M4 12h16",
        key: "1lakjw"
    }], ["path", {
        d: "M4 19h16",
        key: "1djgab"
    }]]);
    var p = e.i(63676);
    let h = (0,
    i.default)("award", [["path", {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
    }], ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }]]);
    var g = e.i(74816)
      , x = e.i(64569);
    let b = (0,
    i.default)("gift", [["path", {
        d: "M12 7v14",
        key: "1akyts"
    }], ["path", {
        d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
        key: "1sqzm4"
    }], ["path", {
        d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",
        key: "kc0143"
    }], ["rect", {
        x: "3",
        y: "7",
        width: "18",
        height: "4",
        rx: "1",
        key: "1hberx"
    }]]);
    var y = e.i(23482);
    let v = (0,
    i.default)("compass", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["path", {
        d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
        key: "9ktpf1"
    }]]);
    var j = e.i(55677)
      , w = e.i(68590)
      , k = e.i(57688)
      , _ = e.i(75157);
    function N({size: e=36, className: r, priority: a=!1}) {
        return (0,
        t.jsx)(k.default, {
            src: "/logo.png",
            alt: "IELTS 9 logo",
            width: e,
            height: e,
            priority: a,
            className: (0,
            _.cn)("shrink-0 select-none", r)
        })
    }
    var S = e.i(94013);
    let C = (0,
    i.default)("chevron-down", [["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]])
      , M = (0,
    i.default)("log-out", [["path", {
        d: "m16 17 5-5-5-5",
        key: "1bji2h"
    }], ["path", {
        d: "M21 12H9",
        key: "dn1m92"
    }], ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }]]);
    var P = e.i(43011);
    let E = (0,
    i.default)("circle-user", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }], ["path", {
        d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
        key: "154egf"
    }]]);
    var R = e.i(74870);
    function O({profile: e}) {
        let[r,a] = (0,
        n.useState)(!1)
          , [i,s] = (0,
        n.useState)(!1)
          , o = (0,
        n.useRef)(null)
          , c = (0,
        n.useRef)(null);
        (0,
        n.useEffect)( () => {
            function e(e) {
                o.current && !o.current.contains(e.target) && a(!1)
            }
            function t(e) {
                "Escape" === e.key && a(!1)
            }
            return document.addEventListener("mousedown", e),
            document.addEventListener("keydown", t),
            () => {
                document.removeEventListener("mousedown", e),
                document.removeEventListener("keydown", t)
            }
        }
        , []);
        let d = (e.name || e.email || "U").charAt(0).toUpperCase()
          , f = (0,
        R.isPremiumActive)(e);
        return (0,
        t.jsxs)("div", {
            className: "relative",
            ref: o,
            children: [(0,
            t.jsxs)("button", {
                onClick: () => a(e => !e),
                className: "flex items-center gap-2 rounded-lg p-1 pr-2 hover:bg-surface-2",
                "aria-haspopup": "menu",
                "aria-expanded": r,
                children: [e.avatar_url ? (0,
                t.jsx)("img", {
                    src: e.avatar_url,
                    alt: "",
                    className: "h-8 w-8 rounded-full object-cover"
                }) : (0,
                t.jsx)("span", {
                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary",
                    children: d
                }), (0,
                t.jsx)("span", {
                    className: "hidden text-sm font-medium sm:block",
                    children: e.name
                }), (0,
                t.jsx)(C, {
                    className: `h-4 w-4 text-muted transition-transform ${r ? "rotate-180" : ""}`
                })]
            }), r && (0,
            t.jsxs)("div", {
                className: "absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-surface shadow-elevated",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 border-b border-border p-4",
                    children: [e.avatar_url ? (0,
                    t.jsx)("img", {
                        src: e.avatar_url,
                        alt: "",
                        className: "h-10 w-10 rounded-full object-cover"
                    }) : (0,
                    t.jsx)("span", {
                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary",
                        children: d
                    }), (0,
                    t.jsxs)("div", {
                        className: "min-w-0",
                        children: [(0,
                        t.jsx)("p", {
                            className: "truncate text-sm font-semibold",
                            children: e.name || "Student"
                        }), (0,
                        t.jsx)("p", {
                            className: "truncate text-xs text-muted",
                            children: e.email
                        })]
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "flex flex-wrap gap-1.5 px-4 pt-3",
                    children: [e.is_owner ? (0,
                    t.jsx)(L, {
                        className: "bg-accent/15 text-accent",
                        children: "Owner"
                    }) : "admin" === e.role ? (0,
                    t.jsx)(L, {
                        className: "bg-primary/10 text-primary",
                        children: "Admin"
                    }) : (0,
                    t.jsx)(L, {
                        className: "bg-surface-2 text-muted",
                        children: "Student"
                    }), f ? (0,
                    t.jsxs)(L, {
                        className: "bg-gradient-to-r from-amber-400 to-yellow-500 text-white",
                        children: [(0,
                        t.jsx)(P.Crown, {
                            className: "h-3 w-3"
                        }), " Premium"]
                    }) : (0,
                    t.jsx)(L, {
                        className: "bg-surface-2 text-muted",
                        children: "Free plan"
                    })]
                }), f && e.premium_until && (0,
                t.jsxs)("p", {
                    className: "px-4 pt-1.5 text-xs text-muted",
                    children: ["Premium until ", new Date(e.premium_until).toLocaleDateString()]
                }), (0,
                t.jsxs)("div", {
                    className: "mt-3 border-t border-border p-1.5",
                    children: [(0,
                    t.jsx)(z, {
                        href: "/dashboard",
                        icon: (0,
                        t.jsx)(l, {
                            className: "h-4 w-4"
                        }),
                        onClick: () => a(!1),
                        children: "Dashboard"
                    }), (0,
                    t.jsx)(z, {
                        href: `/u/${e.id}`,
                        icon: (0,
                        t.jsx)(E, {
                            className: "h-4 w-4"
                        }),
                        onClick: () => a(!1),
                        children: "Public profile"
                    }), (0,
                    t.jsx)(z, {
                        href: "/refer",
                        icon: (0,
                        t.jsx)(b, {
                            className: "h-4 w-4"
                        }),
                        onClick: () => a(!1),
                        children: "Invite friends"
                    }), "admin" === e.role && (0,
                    t.jsx)(z, {
                        href: "/admin",
                        icon: (0,
                        t.jsx)(u, {
                            className: "h-4 w-4"
                        }),
                        onClick: () => a(!1),
                        children: "Admin panel"
                    }), (0,
                    t.jsxs)("button", {
                        onClick: () => {
                            a(!1),
                            s(!0)
                        }
                        ,
                        className: "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-danger hover:bg-danger/10",
                        children: [(0,
                        t.jsx)(M, {
                            className: "h-4 w-4"
                        }), " Sign out"]
                    })]
                })]
            }), (0,
            t.jsx)("form", {
                ref: c,
                action: "/auth/signout",
                method: "post",
                className: "hidden"
            }), i && (0,
            t.jsx)("div", {
                className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4",
                children: (0,
                t.jsxs)("div", {
                    className: "relative w-full max-w-xs rounded-2xl border border-border bg-surface p-6 text-center shadow-elevated",
                    children: [(0,
                    t.jsx)("button", {
                        onClick: () => s(!1),
                        className: "absolute right-3 top-3 text-muted hover:text-foreground",
                        "aria-label": "Close",
                        children: (0,
                        t.jsx)(p.X, {
                            className: "h-4 w-4"
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-danger/10 text-danger",
                        children: (0,
                        t.jsx)(M, {
                            className: "h-6 w-6"
                        })
                    }), (0,
                    t.jsx)("h3", {
                        className: "mt-3 font-semibold",
                        children: "Sign out?"
                    }), (0,
                    t.jsx)("p", {
                        className: "mt-1 text-sm text-muted",
                        children: "You'll need to sign in again to continue practising."
                    }), (0,
                    t.jsxs)("div", {
                        className: "mt-5 flex gap-2",
                        children: [(0,
                        t.jsx)("button", {
                            onClick: () => s(!1),
                            className: "flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-surface-2",
                            children: "Cancel"
                        }), (0,
                        t.jsx)("button", {
                            onClick: () => c.current?.requestSubmit(),
                            className: "flex-1 rounded-lg bg-danger px-4 py-2 text-sm font-medium text-white hover:opacity-90",
                            children: "Sign out"
                        })]
                    })]
                })
            })]
        })
    }
    function L({children: e, className: r}) {
        return (0,
        t.jsx)("span", {
            className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${r}`,
            children: e
        })
    }
    function z({href: e, icon: a, children: n, onClick: i}) {
        return (0,
        t.jsxs)(r.default, {
            href: e,
            onClick: i,
            className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-surface-2",
            children: [a, n]
        })
    }
    let T = (0,
    i.default)("bell", [["path", {
        d: "M10.268 21a2 2 0 0 0 3.464 0",
        key: "vwvbt9"
    }], ["path", {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi"
    }]]);
    var A = e.i(49803)
      , I = e.i(89664)
      , $ = e.i(95187);
    let D = (0,
    $.createServerReference)("40854219708ee13c2450a755cc817d766bf3e33ffb", $.callServer, void 0, $.findSourceMapURL, "markNotificationRead")
      , U = (0,
    $.createServerReference)("00aaa761afe12d463daf9900a3cf9eafc9a91dea2d", $.callServer, void 0, $.findSourceMapURL, "markAllNotificationsRead");
    function q({notifications: e}) {
        let i = (0,
        a.useRouter)()
          , [l,s] = (0,
        n.useState)(!1)
          , [o,c] = (0,
        n.useState)(new Set)
          , [,d] = (0,
        n.useTransition)()
          , u = (0,
        n.useRef)(null)
          , f = e.map(e => e.read_at || o.has(e.id) ? {
            ...e,
            read_at: e.read_at ?? "optimistic"
        } : e);
        (0,
        n.useEffect)( () => {
            function e(e) {
                u.current && !u.current.contains(e.target) && s(!1)
            }
            function t(e) {
                "Escape" === e.key && s(!1)
            }
            return document.addEventListener("mousedown", e),
            document.addEventListener("keydown", t),
            () => {
                document.removeEventListener("mousedown", e),
                document.removeEventListener("keydown", t)
            }
        }
        , []);
        let m = f.filter(e => !e.read_at).length;
        return (0,
        t.jsxs)("div", {
            className: "relative",
            ref: u,
            children: [(0,
            t.jsxs)("button", {
                onClick: () => s(e => !e),
                className: "relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-foreground",
                "aria-label": `Notifications${m ? ` (${m} unread)` : ""}`,
                children: [(0,
                t.jsx)(T, {
                    className: "h-5 w-5"
                }), m > 0 && (0,
                t.jsx)("span", {
                    className: "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white",
                    children: m > 9 ? "9+" : m
                })]
            }), l && (0,
            t.jsxs)("div", {
                className: "absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-border bg-surface shadow-elevated",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between border-b border-border px-4 py-2.5",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm font-semibold",
                        children: "Notifications"
                    }), m > 0 && (0,
                    t.jsxs)("button", {
                        onClick: function() {
                            c(new Set(e.map(e => e.id))),
                            d( () => {
                                U()
                            }
                            )
                        },
                        className: "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline",
                        children: [(0,
                        t.jsx)(I.Check, {
                            className: "h-3.5 w-3.5"
                        }), " Mark all read"]
                    })]
                }), 0 === f.length ? (0,
                t.jsx)("p", {
                    className: "px-4 py-8 text-center text-sm text-muted",
                    children: "No notifications yet."
                }) : (0,
                t.jsx)("ul", {
                    className: "max-h-96 divide-y divide-border overflow-y-auto",
                    children: f.map(e => (0,
                    t.jsx)("li", {
                        children: (0,
                        t.jsxs)("button", {
                            onClick: () => {
                                let t;
                                return e.read_at || (c(t => new Set(t).add(e.id)),
                                d( () => {
                                    D(e.id)
                                }
                                )),
                                s(!1),
                                void ((t = "weekly_report" === e.type && e.data?.report_id ? `/reports/${e.data.report_id}` : "teacher_feedback" === e.type ? "/feedback" : null) && i.push(t))
                            }
                            ,
                            className: (0,
                            _.cn)("flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-2/60", !e.read_at && "bg-primary/5"),
                            children: [(0,
                            t.jsx)("span", {
                                className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
                                children: (0,
                                t.jsx)(A.BarChart3, {
                                    className: "h-4 w-4"
                                })
                            }), (0,
                            t.jsxs)("span", {
                                className: "min-w-0 flex-1",
                                children: [(0,
                                t.jsxs)("span", {
                                    className: "flex items-center gap-2",
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: "truncate text-sm font-medium",
                                        children: e.title
                                    }), !e.read_at && (0,
                                    t.jsx)("span", {
                                        className: "h-2 w-2 shrink-0 rounded-full bg-primary"
                                    })]
                                }), e.body && (0,
                                t.jsx)("span", {
                                    className: "mt-0.5 block text-xs text-muted",
                                    children: e.body
                                }), (0,
                                t.jsx)("span", {
                                    className: "mt-1 block text-[11px] text-muted",
                                    children: (0,
                                    _.timeAgo)(e.created_at)
                                })]
                            })]
                        })
                    }, e.id))
                }), (0,
                t.jsx)(r.default, {
                    href: "/reports",
                    onClick: () => s(!1),
                    className: "block border-t border-border px-4 py-2.5 text-center text-xs font-medium text-primary hover:bg-surface-2/60",
                    children: "View all reports"
                })]
            })]
        })
    }
    var B = e.i(46868);
    let F = [{
        label: null,
        items: [{
            href: "/dashboard",
            label: "Dashboard",
            icon: l
        }]
    }, {
        label: "Practise",
        items: [{
            href: "/reading",
            label: "Reading",
            icon: s.BookOpen
        }, {
            href: "/pessages",
            label: "pessages",
            icon: s.BookOpen
        }, {
            href: "/listening.html",
            label: "Listening",
            icon: o.Headphones
        }, {
            href: "/writing",
            label: "Writing",
            icon: c.PenLine
        }, {
            href: "/speaking",
            label: "Speaking",
            icon: d.Mic
        }]
    }, {
        label: "Compete",
        items: [{
            href: "/leaderboard",
            label: "Leaderboard",
            icon: g.Trophy
        }, {
            href: "/badges",
            label: "Badges",
            icon: h
        }, {
            href: "/refer",
            label: "Invite friends",
            icon: b
        }]
    }];
    e.s(["AppShell", 0, function({profile: e, notifications: i=[], children: l}) {
        let s = (0,
        a.usePathname)()
          , [o,c] = (0,
        n.useState)(!1)
          , d = [...F];
        if (e.is_my_student && d.splice(1, 0, {
            label: "My teacher",
            items: [{
                href: "/assignments",
                label: "Assignments",
                icon: j.ClipboardList
            }, {
                href: "/feedback",
                label: "Feedback",
                icon: w.MessageSquare
            }]
        }),
        "pre_ielts" === e.level || "intro" === e.level) {
            let t = B.LEVELS[e.level]
              , r = "pre_ielts" === e.level ? y.GraduationCap : v;
            d.splice(1, 0, {
                label: "My level",
                items: [{
                    href: t.href,
                    label: t.label,
                    icon: r
                }]
            })
        }
        return "admin" === e.role && d.push({
            label: "Manage",
            items: [{
                href: "/admin",
                label: "Admin",
                icon: u
            }]
        }),
        (0,
        t.jsxs)("div", {
            className: "min-h-screen lg:grid lg:grid-cols-[260px_1fr]",
            children: [(0,
            t.jsxs)("aside", {
                className: (0,
                _.cn)("fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-border bg-surface transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:self-start", o ? "translate-x-0" : "-translate-x-full"),
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between p-4 pb-2",
                    children: [(0,
                    t.jsxs)(r.default, {
                        href: "/dashboard",
                        className: "flex items-center gap-2.5 font-semibold",
                        children: [(0,
                        t.jsx)(N, {
                            size: 36
                        }), "IELTS"]
                    }), (0,
                    t.jsx)("button", {
                        className: "rounded-lg p-1.5 text-muted hover:bg-surface-2 hover:text-foreground lg:hidden",
                        onClick: () => c(!1),
                        "aria-label": "Close menu",
                        children: (0,
                        t.jsx)(p.X, {
                            className: "h-5 w-5"
                        })
                    })]
                }), (0,
                t.jsx)("nav", {
                    className: "flex-1 space-y-5 overflow-y-auto p-4 pt-4",
                    children: d.map( (e, a) => (0,
                    t.jsxs)("div", {
                        children: [e.label && (0,
                        t.jsx)("p", {
                            className: "mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted/70",
                            children: e.label
                        }), (0,
                        t.jsx)("div", {
                            className: "space-y-1",
                            children: e.items.map( ({href: e, label: a, icon: n}) => {
                                let i = s === e || s.startsWith(e + "/");
                                return (0,
                                t.jsxs)(r.default, {
                                    href: e,
                                    onClick: () => c(!1),
                                    className: (0,
                                    _.cn)("group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors", i ? "bg-primary/10 text-primary" : "text-muted hover:bg-surface-2 hover:text-foreground"),
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: (0,
                                        _.cn)("absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary transition-opacity", i ? "opacity-100" : "opacity-0")
                                    }), (0,
                                    t.jsx)(n, {
                                        className: (0,
                                        _.cn)("h-4 w-4 transition-transform duration-200", !i && "group-hover:scale-110")
                                    }), a]
                                }, e)
                            }
                            )
                        })]
                    }, e.label ?? a))
                }), (0,
                t.jsx)("div", {
                    className: "p-4 pt-0",
                    children: (0,
                    t.jsxs)("div", {
                        className: "relative overflow-hidden rounded-xl border border-primary/15 bg-gradient-to-br from-primary/8 via-surface-2 to-accent/8 p-3.5 shadow-soft",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [(0,
                            t.jsx)("span", {
                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-warning/15",
                                children: (0,
                                t.jsx)(f.Flame, {
                                    className: "h-4 w-4 text-warning"
                                })
                            }), (0,
                            t.jsxs)("span", {
                                className: "font-semibold tabular-nums",
                                children: [e.streak, "-day streak"]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "mt-2 flex items-center gap-3 text-xs text-muted tabular-nums",
                            children: [(0,
                            t.jsxs)("span", {
                                className: "inline-flex items-center gap-1",
                                children: [(0,
                                t.jsx)(x.Zap, {
                                    className: "h-3 w-3 text-primary"
                                }), " ", e.xp, " XP"]
                            }), (0,
                            t.jsxs)("span", {
                                className: "inline-flex items-center gap-1",
                                children: [(0,
                                t.jsx)(g.Trophy, {
                                    className: "h-3 w-3 text-warning"
                                }), " best ", e.longest_streak]
                            })]
                        })]
                    })
                })]
            }), o && (0,
            t.jsx)("div", {
                className: "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden",
                onClick: () => c(!1)
            }), (0,
            t.jsxs)("div", {
                className: "flex min-h-screen flex-col",
                children: [(0,
                t.jsxs)("header", {
                    className: "glass sticky top-0 z-20 flex items-center justify-between border-b border-border/60 px-4 py-3 lg:px-8",
                    children: [(0,
                    t.jsx)("button", {
                        className: "rounded-lg p-1.5 text-muted hover:bg-surface-2 hover:text-foreground lg:hidden",
                        onClick: () => c(!0),
                        "aria-label": "Open menu",
                        children: (0,
                        t.jsx)(m, {
                            className: "h-5 w-5"
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "hidden lg:block"
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [(0,
                        t.jsx)(q, {
                            notifications: i
                        }), (0,
                        t.jsx)(S.ThemeToggle, {}), (0,
                        t.jsx)(O, {
                            profile: e
                        })]
                    })]
                }), (0,
                t.jsx)("main", {
                    className: "flex-1 px-4 py-6 lg:px-8 lg:py-8",
                    children: l
                })]
            })]
        })
    }
    ], 63141)
}
, 54411, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(43011)
      , n = e.i(63676)
      , i = e.i(19455)
      , l = e.i(95187);
    let s = (0,
    l.createServerReference)("00b79619ca0551acc6c95a8bf2d66247e79d1ac0bc", l.callServer, void 0, l.findSourceMapURL, "dismissPremiumAnnounce");
    e.s(["PremiumWelcome", 0, function({show: e, until: l}) {
        let[o,c] = (0,
        r.useState)(e);
        if (!o)
            return null;
        function d() {
            c(!1),
            s()
        }
        return (0,
        t.jsx)("div", {
            className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4",
            children: (0,
            t.jsxs)("div", {
                className: "relative w-full max-w-sm overflow-hidden rounded-2xl border border-amber-500/30 bg-surface text-center shadow-elevated",
                children: [(0,
                t.jsxs)("div", {
                    className: "bg-gradient-to-br from-amber-400 to-yellow-500 px-6 py-8 text-white",
                    children: [(0,
                    t.jsx)("button", {
                        onClick: d,
                        className: "absolute right-3 top-3 text-white/80 hover:text-white",
                        "aria-label": "Close",
                        children: (0,
                        t.jsx)(n.X, {
                            className: "h-5 w-5"
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl",
                        children: "👑"
                    }), (0,
                    t.jsx)("h2", {
                        className: "mt-4 text-2xl font-extrabold",
                        children: "Congratulations!"
                    }), (0,
                    t.jsx)("p", {
                        className: "mt-1 text-sm text-white/90",
                        children: "You're now a Premium member"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "p-6",
                    children: [(0,
                    t.jsxs)("p", {
                        className: "text-sm text-muted",
                        children: ["You've unlocked all Premium reading & listening materials", l ? (0,
                        t.jsxs)(t.Fragment, {
                            children: [" ", "until ", (0,
                            t.jsx)("strong", {
                                className: "text-foreground",
                                children: new Date(l).toLocaleDateString()
                            })]
                        }) : null, ". Enjoy your practice! 🎉"]
                    }), (0,
                    t.jsxs)(i.Button, {
                        className: "mt-5 w-full",
                        onClick: d,
                        children: [(0,
                        t.jsx)(a.Crown, {
                            className: "h-4 w-4"
                        }), "Let's go"]
                    })]
                })]
            })
        })
    }
    ], 54411)
}
, 34430, e => {
    "use strict";
    var t = e.i(71645)
      , r = e.i(95187);
    let a = (0,
    r.createServerReference)("4004e378691b7e946f626cb6e21719baa09dbbd453", r.callServer, void 0, r.findSourceMapURL, "setTimezone");
    e.s(["TimezoneSync", 0, function({current: e}) {
        let r = (0,
        t.useRef)(!1);
        return (0,
        t.useEffect)( () => {
            let t;
            if (!r.current) {
                r.current = !0;
                try {
                    t = Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch {
                    return
                }
                t && t !== e && a(t)
            }
        }
        , [e]),
        null
    }
    ], 34430)
}
, 91171, e => {
    "use strict";
    var t = e.i(71645)
      , r = e.i(18566)
      , a = e.i(95187);
    let n = (0,
    a.createServerReference)("00f4c5b9901499ddd60f9c2bdaee7ba540100e7936", a.callServer, void 0, a.findSourceMapURL, "redeemReferralFromCookie");
    e.s(["ReferralRedeemer", 0, function() {
        let e = (0,
        r.useRouter)();
        return (0,
        t.useEffect)( () => {
            !document.cookie.includes("ielts_ref=") || sessionStorage.getItem("ielts_ref_done") || (sessionStorage.setItem("ielts_ref_done", "1"),
            n().then(t => {
                t.redeemed && e.refresh()
            }
            ))
        }
        , [e]),
        null
    }
    ], 91171)
}
]);
