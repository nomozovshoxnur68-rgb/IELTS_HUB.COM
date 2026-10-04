(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18566, (e, t, r) => {
    t.exports = e.r(76562)
}
, 19455, e => {
    "use strict";
    let t, r, n;
    var i = e.i(43476)
      , s = e.i(75157)
      , o = e.i(71645);
    function u(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    var l = Symbol.for("react.lazy")
      , a = o[" use ".trim().toString()];
    function c(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof"in e && e.$$typeof === l && "_payload"in e && "object" == typeof (t = e._payload) && null !== t && "then"in t
    }
    var d = ((n = o.forwardRef( (e, t) => {
        let {children: r, ...n} = e;
        if (c(r) && "function" == typeof a && (r = a(r._payload)),
        o.isValidElement(r)) {
            var i;
            let e, s, l = (i = r,
            (s = (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? i.ref : (s = (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? i.props.ref : i.props.ref || i.ref), a = function(e, t) {
                let r = {
                    ...t
                };
                for (let n in t) {
                    let i = e[n]
                      , s = t[n];
                    /^on[A-Z]/.test(n) ? i && s ? r[n] = (...e) => {
                        let t = s(...e);
                        return i(...e),
                        t
                    }
                    : i && (r[n] = i) : "style" === n ? r[n] = {
                        ...i,
                        ...s
                    } : "className" === n && (r[n] = [i, s].filter(Boolean).join(" "))
                }
                return {
                    ...e,
                    ...r
                }
            }(n, r.props);
            return r.type !== o.Fragment && (a.ref = t ? function(...e) {
                return t => {
                    let r = !1
                      , n = e.map(e => {
                        let n = u(e, t);
                        return r || "function" != typeof n || (r = !0),
                        n
                    }
                    );
                    if (r)
                        return () => {
                            for (let t = 0; t < n.length; t++) {
                                let r = n[t];
                                "function" == typeof r ? r() : u(e[t], null)
                            }
                        }
                }
            }(t, l) : l),
            o.cloneElement(r, a)
        }
        return o.Children.count(r) > 1 ? o.Children.only(null) : null
    }
    )).displayName = "Slot.SlotClone",
    t = n,
    (r = o.forwardRef( (e, r) => {
        let {children: n, ...s} = e;
        c(n) && "function" == typeof a && (n = a(n._payload));
        let u = o.Children.toArray(n)
          , l = u.find(f);
        if (l) {
            let e = l.props.children
              , n = u.map(t => t !== l ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
            return (0,
            i.jsx)(t, {
                ...s,
                ref: r,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
            })
        }
        return (0,
        i.jsx)(t, {
            ...s,
            ref: r,
            children: n
        })
    }
    )).displayName = "Slot.Slot",
    r)
      , h = Symbol("radix.slottable");
    function f(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId"in e.type && e.type.__radixId === h
    }
    let p = {
        primary: "bg-primary text-primary-foreground shadow-[var(--shadow-primary)] hover:brightness-95 active:translate-y-px",
        outline: "border border-border bg-surface shadow-soft hover:bg-surface-2 hover:border-primary/30 text-foreground active:translate-y-px",
        ghost: "hover:bg-surface-2 text-foreground active:translate-y-px",
        danger: "bg-danger text-white shadow-soft hover:brightness-110 active:translate-y-px"
    }
      , y = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10"
    };
    e.s(["Button", 0, function({className: e, variant: t="primary", size: r="md", asChild: n=!1, ...o}) {
        return (0,
        i.jsx)(n ? d : "button", {
            className: (0,
            s.cn)("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50", p[t], y[r], e),
            ...o
        })
    }
    ], 19455)
}
, 16015, (e, t, r) => {}
, 98547, (e, t, r) => {
    var n = e.i(47167);
    e.r(16015);
    var i = e.r(71645)
      , s = i && "object" == typeof i && "default"in i ? i : {
        default: i
    }
      , o = void 0 !== n.default && n.default.env && !0
      , u = function(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
      , l = function() {
        function e(e) {
            var t = void 0 === e ? {} : e
              , r = t.name
              , n = void 0 === r ? "stylesheet" : r
              , i = t.optimizeForSpeed
              , s = void 0 === i ? o : i;
            a(u(n), "`name` must be a string"),
            this._name = n,
            this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}",
            a("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
            this._optimizeForSpeed = s,
            this._serverSheet = void 0,
            this._tags = [],
            this._injected = !1,
            this._rulesCount = 0;
            var l = "u" > typeof window && document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null
        }
        var t, r = e.prototype;
        return r.setOptimizeForSpeed = function(e) {
            a("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
            a(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"),
            this.flush(),
            this._optimizeForSpeed = e,
            this.inject()
        }
        ,
        r.isOptimizeForSpeed = function() {
            return this._optimizeForSpeed
        }
        ,
        r.inject = function() {
            var e = this;
            if (a(!this._injected, "sheet already injected"),
            this._injected = !0,
            "u" > typeof window && this._optimizeForSpeed) {
                this._tags[0] = this.makeStyleTag(this._name),
                this._optimizeForSpeed = "insertRule"in this.getSheet(),
                this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),
                this.flush(),
                this._injected = !0);
                return
            }
            this._serverSheet = {
                cssRules: [],
                insertRule: function(t, r) {
                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                        cssText: t
                    } : e._serverSheet.cssRules.push({
                        cssText: t
                    }),
                    r
                },
                deleteRule: function(t) {
                    e._serverSheet.cssRules[t] = null
                }
            }
        }
        ,
        r.getSheetForTag = function(e) {
            if (e.sheet)
                return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t]
        }
        ,
        r.getSheet = function() {
            return this.getSheetForTag(this._tags[this._tags.length - 1])
        }
        ,
        r.insertRule = function(e, t) {
            if (a(u(e), "`insertRule` accepts only strings"),
            "u" < typeof window)
                return "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++;
            if (this._optimizeForSpeed) {
                var r = this.getSheet();
                "number" != typeof t && (t = r.cssRules.length);
                try {
                    r.insertRule(e, t)
                } catch (t) {
                    return o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                    -1
                }
            } else {
                var n = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, n))
            }
            return this._rulesCount++
        }
        ,
        r.replaceRule = function(e, t) {
            if (this._optimizeForSpeed || "u" < typeof window) {
                var r = "u" > typeof window ? this.getSheet() : this._serverSheet;
                if (t.trim() || (t = this._deletedRulePlaceholder),
                !r.cssRules[e])
                    return e;
                r.deleteRule(e);
                try {
                    r.insertRule(t, e)
                } catch (n) {
                    o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                    r.insertRule(this._deletedRulePlaceholder, e)
                }
            } else {
                var n = this._tags[e];
                a(n, "old rule at index `" + e + "` not found"),
                n.textContent = t
            }
            return e
        }
        ,
        r.deleteRule = function(e) {
            if ("u" < typeof window)
                return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed)
                this.replaceRule(e, "");
            else {
                var t = this._tags[e];
                a(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                this._tags[e] = null
            }
        }
        ,
        r.flush = function() {
            this._injected = !1,
            this._rulesCount = 0,
            "u" > typeof window ? (this._tags.forEach(function(e) {
                return e && e.parentNode.removeChild(e)
            }),
            this._tags = []) : this._serverSheet.cssRules = []
        }
        ,
        r.cssRules = function() {
            var e = this;
            return "u" < typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                    return t.cssText === e._deletedRulePlaceholder ? null : t
                })) : t.push(null),
                t
            }, [])
        }
        ,
        r.makeStyleTag = function(e, t, r) {
            t && a(u(t), "makeStyleTag accepts only strings as second parameter");
            var n = document.createElement("style");
            this._nonce && n.setAttribute("nonce", this._nonce),
            n.type = "text/css",
            n.setAttribute("data-" + e, ""),
            t && n.appendChild(document.createTextNode(t));
            var i = document.head || document.getElementsByTagName("head")[0];
            return r ? i.insertBefore(n, r) : i.appendChild(n),
            n
        }
        ,
        t = [{
            key: "length",
            get: function() {
                return this._rulesCount
            }
        }],
        function(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }(e.prototype, t),
        e
    }();
    function a(e, t) {
        if (!e)
            throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
        for (var t = 5381, r = e.length; r; )
            t = 33 * t ^ e.charCodeAt(--r);
        return t >>> 0
    }
      , d = {};
    function h(e, t) {
        if (!t)
            return "jsx-" + e;
        var r = String(t)
          , n = e + r;
        return d[n] || (d[n] = "jsx-" + c(e + "-" + r)),
        d[n]
    }
    function f(e, t) {
        "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)),
        d[r]
    }
    var p = function() {
        function e(e) {
            var t = void 0 === e ? {} : e
              , r = t.styleSheet
              , n = void 0 === r ? null : r
              , i = t.optimizeForSpeed
              , s = void 0 !== i && i;
            this._sheet = n || new l({
                name: "styled-jsx",
                optimizeForSpeed: s
            }),
            this._sheet.inject(),
            n && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s),
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
            this._fromServer = void 0,
            this._indices = {},
            this._instancesCounts = {}
        }
        var t = e.prototype;
        return t.add = function(e) {
            var t = this;
            void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children),
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
            "u" > typeof window && !this._fromServer && (this._fromServer = this.selectFromServer(),
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                return e[t] = 0,
                e
            }, {}));
            var r = this.getIdAndRules(e)
              , n = r.styleId
              , i = r.rules;
            if (n in this._instancesCounts) {
                this._instancesCounts[n] += 1;
                return
            }
            var s = i.map(function(e) {
                return t._sheet.insertRule(e)
            }).filter(function(e) {
                return -1 !== e
            });
            this._indices[n] = s,
            this._instancesCounts[n] = 1
        }
        ,
        t.remove = function(e) {
            var t = this
              , r = this.getIdAndRules(e).styleId;
            if (function(e, t) {
                if (!e)
                    throw Error("StyleSheetRegistry: " + t + ".")
            }(r in this._instancesCounts, "styleId: `" + r + "` not found"),
            this._instancesCounts[r] -= 1,
            this._instancesCounts[r] < 1) {
                var n = this._fromServer && this._fromServer[r];
                n ? (n.parentNode.removeChild(n),
                delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                    return t._sheet.deleteRule(e)
                }),
                delete this._indices[r]),
                delete this._instancesCounts[r]
            }
        }
        ,
        t.update = function(e, t) {
            this.add(t),
            this.remove(e)
        }
        ,
        t.flush = function() {
            this._sheet.flush(),
            this._sheet.inject(),
            this._fromServer = void 0,
            this._indices = {},
            this._instancesCounts = {}
        }
        ,
        t.cssRules = function() {
            var e = this
              , t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                return [t, e._fromServer[t]]
            }) : []
              , r = this._sheet.cssRules();
            return t.concat(Object.keys(this._indices).map(function(t) {
                return [t, e._indices[t].map(function(e) {
                    return r[e].cssText
                }).join(e._optimizeForSpeed ? "" : "\n")]
            }).filter(function(e) {
                return !!e[1]
            }))
        }
        ,
        t.styles = function(e) {
            var t, r;
            return t = this.cssRules(),
            void 0 === (r = e) && (r = {}),
            t.map(function(e) {
                var t = e[0]
                  , n = e[1];
                return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: r.nonce ? r.nonce : void 0,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            })
        }
        ,
        t.getIdAndRules = function(e) {
            var t = e.children
              , r = e.dynamic
              , n = e.id;
            if (r) {
                var i = h(n, r);
                return {
                    styleId: i,
                    rules: Array.isArray(t) ? t.map(function(e) {
                        return f(i, e)
                    }) : [f(i, t)]
                }
            }
            return {
                styleId: h(n),
                rules: Array.isArray(t) ? t : [t]
            }
        }
        ,
        t.selectFromServer = function() {
            return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                return e[t.id.slice(2)] = t,
                e
            }, {})
        }
        ,
        e
    }()
      , y = i.createContext(null);
    function m() {
        return new p
    }
    function _() {
        return i.useContext(y)
    }
    y.displayName = "StyleSheetContext";
    var v = s.default.useInsertionEffect || s.default.useLayoutEffect
      , S = "u" > typeof window ? m() : void 0;
    function g(e) {
        var t = S || _();
        return t && ("u" < typeof window ? t.add(e) : v(function() {
            return t.add(e),
            function() {
                t.remove(e)
            }
        }, [e.id, String(e.dynamic)])),
        null
    }
    g.dynamic = function(e) {
        return e.map(function(e) {
            return h(e[0], e[1])
        }).join(" ")
    }
    ,
    r.StyleRegistry = function(e) {
        var t = e.registry
          , r = e.children
          , n = i.useContext(y)
          , o = i.useState(function() {
            return n || t || m()
        })[0];
        return s.default.createElement(y.Provider, {
            value: o
        }, r)
    }
    ,
    r.createStyleRegistry = m,
    r.style = g,
    r.useStyleRegistry = _
}
, 21373, (e, t, r) => {
    t.exports = e.r(98547).style
}
]);