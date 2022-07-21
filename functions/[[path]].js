var lC = Object.create;
var E3 = Object.defineProperty,
  sC = Object.defineProperties,
  uC = Object.getOwnPropertyDescriptor,
  hC = Object.getOwnPropertyDescriptors,
  mC = Object.getOwnPropertyNames,
  L4 = Object.getOwnPropertySymbols,
  vC = Object.getPrototypeOf,
  C5 = Object.prototype.hasOwnProperty,
  j0 = Object.prototype.propertyIsEnumerable;
var U0 = (e, a, r) =>
    a in e
      ? E3(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[a] = r),
  L1 = (e, a) => {
    for (var r in a || (a = {})) C5.call(a, r) && U0(e, r, a[r]);
    if (L4) for (var r of L4(a)) j0.call(a, r) && U0(e, r, a[r]);
    return e;
  },
  w1 = (e, a) => sC(e, hC(a)),
  zC = (e) => E3(e, '__esModule', { value: !0 });
var W0 = ((e) =>
  typeof require != 'undefined'
    ? require
    : typeof Proxy != 'undefined'
    ? new Proxy(e, {
        get: (a, r) => (typeof require != 'undefined' ? require : a)[r],
      })
    : e)(function (e) {
  if (typeof require != 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var I2 = (e, a) => {
  var r = {};
  for (var c in e) C5.call(e, c) && a.indexOf(c) < 0 && (r[c] = e[c]);
  if (e != null && L4)
    for (var c of L4(e)) a.indexOf(c) < 0 && j0.call(e, c) && (r[c] = e[c]);
  return r;
};
var pC = (e, a) => () => (e && (a = e((e = 0))), a);
var K = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports),
  H4 = (e, a) => {
    for (var r in a) E3(e, r, { get: a[r], enumerable: !0 });
  },
  MC = (e, a, r, c) => {
    if ((a && typeof a == 'object') || typeof a == 'function')
      for (let C of mC(a))
        !C5.call(e, C) &&
          (r || C !== 'default') &&
          E3(e, C, {
            get: () => a[C],
            enumerable: !(c = uC(a, C)) || c.enumerable,
          });
    return e;
  },
  e2 = (e, a) =>
    MC(
      zC(
        E3(
          e != null ? lC(vC(e)) : {},
          'default',
          !a && e && e.__esModule
            ? { get: () => e.default, enumerable: !0 }
            : { value: e, enumerable: !0 }
        )
      ),
      e
    );
var r7 = K((p1) => {
  'use strict';
  w();
  var B3 = Symbol.for('react.element'),
    dC = Symbol.for('react.portal'),
    LC = Symbol.for('react.fragment'),
    HC = Symbol.for('react.strict_mode'),
    VC = Symbol.for('react.profiler'),
    gC = Symbol.for('react.provider'),
    xC = Symbol.for('react.context'),
    SC = Symbol.for('react.forward_ref'),
    bC = Symbol.for('react.suspense'),
    yC = Symbol.for('react.memo'),
    wC = Symbol.for('react.lazy'),
    G0 = Symbol.iterator;
  function NC(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (G0 && e[G0]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var X0 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    K0 = Object.assign,
    J0 = {};
  function p3(e, a, r) {
    (this.props = e),
      (this.context = a),
      (this.refs = J0),
      (this.updater = r || X0);
  }
  p3.prototype.isReactComponent = {};
  p3.prototype.setState = function (e, a) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      );
    this.updater.enqueueSetState(this, e, a, 'setState');
  };
  p3.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  };
  function Q0() {}
  Q0.prototype = p3.prototype;
  function t5(e, a, r) {
    (this.props = e),
      (this.context = a),
      (this.refs = J0),
      (this.updater = r || X0);
  }
  var i5 = (t5.prototype = new Q0());
  i5.constructor = t5;
  K0(i5, p3.prototype);
  i5.isPureReactComponent = !0;
  var $0 = Array.isArray,
    Z0 = Object.prototype.hasOwnProperty,
    o5 = { current: null },
    e7 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a7(e, a, r) {
    var c,
      C = {},
      n = null,
      t = null;
    if (a != null)
      for (c in (a.ref !== void 0 && (t = a.ref),
      a.key !== void 0 && (n = '' + a.key),
      a))
        Z0.call(a, c) && !e7.hasOwnProperty(c) && (C[c] = a[c]);
    var o = arguments.length - 2;
    if (o === 1) C.children = r;
    else if (1 < o) {
      for (var m = Array(o), u = 0; u < o; u++) m[u] = arguments[u + 2];
      C.children = m;
    }
    if (e && e.defaultProps)
      for (c in ((o = e.defaultProps), o)) C[c] === void 0 && (C[c] = o[c]);
    return {
      $$typeof: B3,
      type: e,
      key: n,
      ref: t,
      props: C,
      _owner: o5.current,
    };
  }
  function kC(e, a) {
    return {
      $$typeof: B3,
      type: e.type,
      key: a,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function f5(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === B3;
  }
  function AC(e) {
    var a = { '=': '=0', ':': '=2' };
    return (
      '$' +
      e.replace(/[=:]/g, function (r) {
        return a[r];
      })
    );
  }
  var Y0 = /\/+/g;
  function n5(e, a) {
    return typeof e == 'object' && e !== null && e.key != null
      ? AC('' + e.key)
      : a.toString(36);
  }
  function g4(e, a, r, c, C) {
    var n = typeof e;
    (n === 'undefined' || n === 'boolean') && (e = null);
    var t = !1;
    if (e === null) t = !0;
    else
      switch (n) {
        case 'string':
        case 'number':
          t = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case B3:
            case dC:
              t = !0;
          }
      }
    if (t)
      return (
        (t = e),
        (C = C(t)),
        (e = c === '' ? '.' + n5(t, 0) : c),
        $0(C)
          ? ((r = ''),
            e != null && (r = e.replace(Y0, '$&/') + '/'),
            g4(C, a, r, '', function (u) {
              return u;
            }))
          : C != null &&
            (f5(C) &&
              (C = kC(
                C,
                r +
                  (!C.key || (t && t.key === C.key)
                    ? ''
                    : ('' + C.key).replace(Y0, '$&/') + '/') +
                  e
              )),
            a.push(C)),
        1
      );
    if (((t = 0), (c = c === '' ? '.' : c + ':'), $0(e)))
      for (var o = 0; o < e.length; o++) {
        n = e[o];
        var m = c + n5(n, o);
        t += g4(n, a, r, m, C);
      }
    else if (((m = NC(e)), typeof m == 'function'))
      for (e = m.call(e), o = 0; !(n = e.next()).done; )
        (n = n.value), (m = c + n5(n, o++)), (t += g4(n, a, r, m, C));
    else if (n === 'object')
      throw (
        ((a = String(e)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (a === '[object Object]'
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : a) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return t;
  }
  function V4(e, a, r) {
    if (e == null) return e;
    var c = [],
      C = 0;
    return (
      g4(e, c, '', '', function (n) {
        return a.call(r, n, C++);
      }),
      c
    );
  }
  function PC(e) {
    if (e._status === -1) {
      var a = e._result;
      (a = a()),
        a.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = a));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var j1 = { current: null },
    x4 = { transition: null },
    RC = {
      ReactCurrentDispatcher: j1,
      ReactCurrentBatchConfig: x4,
      ReactCurrentOwner: o5,
    };
  p1.Children = {
    map: V4,
    forEach: function (e, a, r) {
      V4(
        e,
        function () {
          a.apply(this, arguments);
        },
        r
      );
    },
    count: function (e) {
      var a = 0;
      return (
        V4(e, function () {
          a++;
        }),
        a
      );
    },
    toArray: function (e) {
      return (
        V4(e, function (a) {
          return a;
        }) || []
      );
    },
    only: function (e) {
      if (!f5(e))
        throw Error(
          'React.Children.only expected to receive a single React element child.'
        );
      return e;
    },
  };
  p1.Component = p3;
  p1.Fragment = LC;
  p1.Profiler = VC;
  p1.PureComponent = t5;
  p1.StrictMode = HC;
  p1.Suspense = bC;
  p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = RC;
  p1.cloneElement = function (e, a, r) {
    if (e == null)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' +
          e +
          '.'
      );
    var c = K0({}, e.props),
      C = e.key,
      n = e.ref,
      t = e._owner;
    if (a != null) {
      if (
        (a.ref !== void 0 && ((n = a.ref), (t = o5.current)),
        a.key !== void 0 && (C = '' + a.key),
        e.type && e.type.defaultProps)
      )
        var o = e.type.defaultProps;
      for (m in a)
        Z0.call(a, m) &&
          !e7.hasOwnProperty(m) &&
          (c[m] = a[m] === void 0 && o !== void 0 ? o[m] : a[m]);
    }
    var m = arguments.length - 2;
    if (m === 1) c.children = r;
    else if (1 < m) {
      o = Array(m);
      for (var u = 0; u < m; u++) o[u] = arguments[u + 2];
      c.children = o;
    }
    return { $$typeof: B3, type: e.type, key: C, ref: n, props: c, _owner: t };
  };
  p1.createContext = function (e) {
    return (
      (e = {
        $$typeof: xC,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: gC, _context: e }),
      (e.Consumer = e)
    );
  };
  p1.createElement = a7;
  p1.createFactory = function (e) {
    var a = a7.bind(null, e);
    return (a.type = e), a;
  };
  p1.createRef = function () {
    return { current: null };
  };
  p1.forwardRef = function (e) {
    return { $$typeof: SC, render: e };
  };
  p1.isValidElement = f5;
  p1.lazy = function (e) {
    return { $$typeof: wC, _payload: { _status: -1, _result: e }, _init: PC };
  };
  p1.memo = function (e, a) {
    return { $$typeof: yC, type: e, compare: a === void 0 ? null : a };
  };
  p1.startTransition = function (e) {
    var a = x4.transition;
    x4.transition = {};
    try {
      e();
    } finally {
      x4.transition = a;
    }
  };
  p1.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
  };
  p1.useCallback = function (e, a) {
    return j1.current.useCallback(e, a);
  };
  p1.useContext = function (e) {
    return j1.current.useContext(e);
  };
  p1.useDebugValue = function () {};
  p1.useDeferredValue = function (e) {
    return j1.current.useDeferredValue(e);
  };
  p1.useEffect = function (e, a) {
    return j1.current.useEffect(e, a);
  };
  p1.useId = function () {
    return j1.current.useId();
  };
  p1.useImperativeHandle = function (e, a, r) {
    return j1.current.useImperativeHandle(e, a, r);
  };
  p1.useInsertionEffect = function (e, a) {
    return j1.current.useInsertionEffect(e, a);
  };
  p1.useLayoutEffect = function (e, a) {
    return j1.current.useLayoutEffect(e, a);
  };
  p1.useMemo = function (e, a) {
    return j1.current.useMemo(e, a);
  };
  p1.useReducer = function (e, a, r) {
    return j1.current.useReducer(e, a, r);
  };
  p1.useRef = function (e) {
    return j1.current.useRef(e);
  };
  p1.useState = function (e) {
    return j1.current.useState(e);
  };
  p1.useSyncExternalStore = function (e, a, r) {
    return j1.current.useSyncExternalStore(e, a, r);
  };
  p1.useTransition = function () {
    return j1.current.useTransition();
  };
  p1.version = '18.2.0';
});
var A1 = K((_l, c7) => {
  'use strict';
  w();
  c7.exports = r7();
});
var B,
  w = pC(() => {
    B = e2(A1());
  });
var C7 = K((l5) => {
  'use strict';
  w();
  l5.parse = EC;
  l5.serialize = BC;
  var TC = decodeURIComponent,
    FC = encodeURIComponent,
    S4 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function EC(e, a) {
    if (typeof e != 'string')
      throw new TypeError('argument str must be a string');
    for (
      var r = {}, c = a || {}, C = e.split(';'), n = c.decode || TC, t = 0;
      t < C.length;
      t++
    ) {
      var o = C[t],
        m = o.indexOf('=');
      if (!(m < 0)) {
        var u = o.substring(0, m).trim();
        if (r[u] == null) {
          var p = o.substring(m + 1, o.length).trim();
          p[0] === '"' && (p = p.slice(1, -1)), (r[u] = DC(p, n));
        }
      }
    }
    return r;
  }
  function BC(e, a, r) {
    var c = r || {},
      C = c.encode || FC;
    if (typeof C != 'function') throw new TypeError('option encode is invalid');
    if (!S4.test(e)) throw new TypeError('argument name is invalid');
    var n = C(a);
    if (n && !S4.test(n)) throw new TypeError('argument val is invalid');
    var t = e + '=' + n;
    if (c.maxAge != null) {
      var o = c.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError('option maxAge is invalid');
      t += '; Max-Age=' + Math.floor(o);
    }
    if (c.domain) {
      if (!S4.test(c.domain)) throw new TypeError('option domain is invalid');
      t += '; Domain=' + c.domain;
    }
    if (c.path) {
      if (!S4.test(c.path)) throw new TypeError('option path is invalid');
      t += '; Path=' + c.path;
    }
    if (c.expires) {
      if (typeof c.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      t += '; Expires=' + c.expires.toUTCString();
    }
    if (
      (c.httpOnly && (t += '; HttpOnly'),
      c.secure && (t += '; Secure'),
      c.sameSite)
    ) {
      var m =
        typeof c.sameSite == 'string' ? c.sameSite.toLowerCase() : c.sameSite;
      switch (m) {
        case !0:
          t += '; SameSite=Strict';
          break;
        case 'lax':
          t += '; SameSite=Lax';
          break;
        case 'strict':
          t += '; SameSite=Strict';
          break;
        case 'none':
          t += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return t;
  }
  function DC(e, a) {
    try {
      return a(e);
    } catch {
      return e;
    }
  }
});
var u5 = K((s5) => {
  'use strict';
  w();
  Object.defineProperty(s5, '__esModule', { value: !0 });
  var n7 = {};
  function OC(e, a) {
    !e && !n7[a] && ((n7[a] = !0), console.warn(a));
  }
  s5.warnOnce = OC;
});
var y4 = K((b4) => {
  'use strict';
  w();
  Object.defineProperty(b4, '__esModule', { value: !0 });
  var t7 = C7(),
    _C = u5(),
    qC =
      ({ sign: e, unsign: a }) =>
      (r, c = {}) => {
        let t = L1({ secrets: [], path: '/', sameSite: 'lax' }, c),
          { secrets: C } = t,
          n = I2(t, ['secrets']);
        return (
          YC(r, n.expires),
          {
            get name() {
              return r;
            },
            get isSigned() {
              return C.length > 0;
            },
            get expires() {
              return typeof n.maxAge < 'u'
                ? new Date(Date.now() + n.maxAge * 1e3)
                : n.expires;
            },
            async parse(o, m) {
              if (!o) return null;
              let u = t7.parse(o, L1(L1({}, n), m));
              return r in u ? (u[r] === '' ? '' : await jC(a, u[r], C)) : null;
            },
            async serialize(o, m) {
              return t7.serialize(
                r,
                o === '' ? '' : await UC(e, o, C),
                L1(L1({}, n), m)
              );
            },
          }
        );
      },
    IC = (e) =>
      e != null &&
      typeof e.name == 'string' &&
      typeof e.isSigned == 'boolean' &&
      typeof e.parse == 'function' &&
      typeof e.serialize == 'function';
  async function UC(e, a, r) {
    let c = WC(a);
    return r.length > 0 && (c = await e(c, r[0])), c;
  }
  async function jC(e, a, r) {
    if (r.length > 0) {
      for (let c of r) {
        let C = await e(a, c);
        if (C !== !1) return i7(C);
      }
      return null;
    }
    return i7(a);
  }
  function WC(e) {
    return btoa($C(encodeURIComponent(JSON.stringify(e))));
  }
  function i7(e) {
    try {
      return JSON.parse(decodeURIComponent(GC(atob(e))));
    } catch {
      return {};
    }
  }
  function GC(e) {
    let a = e.toString(),
      r = '',
      c = 0,
      C,
      n;
    for (; c < a.length; )
      (C = a.charAt(c++)),
        /[\w*+\-./@]/.exec(C)
          ? (r += C)
          : ((n = C.charCodeAt(0)),
            n < 256
              ? (r += '%' + o7(n, 2))
              : (r += '%u' + o7(n, 4).toUpperCase()));
    return r;
  }
  function o7(e, a) {
    let r = e.toString(16);
    for (; r.length < a; ) r = '0' + r;
    return r;
  }
  function $C(e) {
    let a = e.toString(),
      r = '',
      c = 0,
      C,
      n;
    for (; c < a.length; ) {
      if (((C = a.charAt(c++)), C === '%')) {
        if (a.charAt(c) === 'u') {
          if (((n = a.slice(c + 1, c + 5)), /^[\da-f]{4}$/i.exec(n))) {
            (r += String.fromCharCode(parseInt(n, 16))), (c += 5);
            continue;
          }
        } else if (((n = a.slice(c, c + 2)), /^[\da-f]{2}$/i.exec(n))) {
          (r += String.fromCharCode(parseInt(n, 16))), (c += 2);
          continue;
        }
      }
      r += C;
    }
    return r;
  }
  function YC(e, a) {
    _C.warnOnce(
      !a,
      `The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`
    );
  }
  b4.createCookieFactory = qC;
  b4.isCookie = IC;
});
var h5 = K((M3) => {
  'use strict';
  w();
  Object.defineProperty(M3, '__esModule', { value: !0 });
  function XC(e) {
    let a = unescape(encodeURIComponent(e));
    return Uint8Array.from(a, (r, c) => a.charCodeAt(c));
  }
  function KC(e) {
    let a = String.fromCharCode.apply(null, e);
    return decodeURIComponent(escape(a));
  }
  function JC(...e) {
    let a = new Uint8Array(e.reduce((c, C) => c + C.length, 0)),
      r = 0;
    for (let c of e) a.set(c, r), (r += c.length);
    return a;
  }
  function QC(e, a) {
    if (e.length !== a.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r] !== a[r]) return !1;
    return !0;
  }
  M3.arrayToString = KC;
  M3.arraysEqual = QC;
  M3.mergeArrays = JC;
  M3.stringToArray = XC;
});
var v7 = K((i2) => {
  'use strict';
  w();
  Object.defineProperty(i2, '__esModule', { value: !0 });
  var w4 = h5();
  function f7(e) {
    return e instanceof Uint8Array ? (a) => e[a] : e;
  }
  function m5(e, a, r, c, C) {
    let n = f7(e),
      t = f7(r);
    for (let o = 0; o < C; ++o) if (n(a + o) !== t(c + o)) return !1;
    return !0;
  }
  function ZC(e) {
    let a = new Array(256).fill(e.length);
    if (e.length > 1)
      for (let r = 0; r < e.length - 1; r++) a[e[r]] = e.length - 1 - r;
    return a;
  }
  var D3 = Symbol('Match'),
    O3 = class {
      constructor(a) {
        (this._lookbehind = new Uint8Array()),
          typeof a == 'string'
            ? (this._needle = a = w4.stringToArray(a))
            : (this._needle = a),
          (this._lastChar = a[a.length - 1]),
          (this._occ = ZC(a));
      }
      feed(a) {
        let r = 0,
          c,
          C = [];
        for (; r !== a.length; ) ([r, ...c] = this._feed(a, r)), C.push(...c);
        return C;
      }
      end() {
        let a = this._lookbehind;
        return (this._lookbehind = new Uint8Array()), a;
      }
      _feed(a, r) {
        let c = [],
          C = -this._lookbehind.length;
        if (C < 0) {
          for (; C < 0 && C <= a.length - this._needle.length; ) {
            let n = this._charAt(a, C + this._needle.length - 1);
            if (
              n === this._lastChar &&
              this._memcmp(a, C, this._needle.length - 1)
            )
              return (
                C > -this._lookbehind.length &&
                  c.push(
                    this._lookbehind.slice(0, this._lookbehind.length + C)
                  ),
                c.push(D3),
                (this._lookbehind = new Uint8Array()),
                [C + this._needle.length, ...c]
              );
            C += this._occ[n];
          }
          if (C < 0) for (; C < 0 && !this._memcmp(a, C, a.length - C); ) C++;
          if (C >= 0)
            c.push(this._lookbehind), (this._lookbehind = new Uint8Array());
          else {
            let n = this._lookbehind.length + C;
            return (
              n > 0 &&
                (c.push(this._lookbehind.slice(0, n)),
                (this._lookbehind = this._lookbehind.slice(n))),
              (this._lookbehind = Uint8Array.from(
                new Array(this._lookbehind.length + a.length),
                (t, o) => this._charAt(a, o - this._lookbehind.length)
              )),
              [a.length, ...c]
            );
          }
        }
        for (C += r; C <= a.length - this._needle.length; ) {
          let n = a[C + this._needle.length - 1];
          if (
            n === this._lastChar &&
            a[C] === this._needle[0] &&
            m5(this._needle, 0, a, C, this._needle.length - 1)
          )
            return (
              C > r && c.push(a.slice(r, C)),
              c.push(D3),
              [C + this._needle.length, ...c]
            );
          C += this._occ[n];
        }
        if (C < a.length) {
          for (
            ;
            C < a.length &&
            (a[C] !== this._needle[0] ||
              !m5(a, C, this._needle, 0, a.length - C));

          )
            ++C;
          C < a.length && (this._lookbehind = a.slice(C));
        }
        return (
          C > 0 && c.push(a.slice(r, C < a.length ? C : a.length)),
          [a.length, ...c]
        );
      }
      _charAt(a, r) {
        return r < 0 ? this._lookbehind[this._lookbehind.length + r] : a[r];
      }
      _memcmp(a, r, c) {
        return m5(this._charAt.bind(this, a), r, this._needle, 0, c);
      }
    },
    s7 = class {
      constructor(a, r) {
        (this._readableStream = r), (this._search = new O3(a));
      }
      async *[Symbol.asyncIterator]() {
        let a = this._readableStream.getReader();
        try {
          for (;;) {
            let c = await a.read();
            if (c.done) break;
            yield* this._search.feed(c.value);
          }
          let r = this._search.end();
          r.length && (yield r);
        } finally {
          a.releaseLock();
        }
      }
    },
    l7 = Symbol('End of Queue'),
    u7 = class {
      constructor(a) {
        (this._chunksQueue = []),
          (this._closed = !1),
          (this._search = new O3(a));
      }
      push(...a) {
        if (this._closed) throw new Error('cannot call push after close');
        this._chunksQueue.push(...a), this._notify && this._notify();
      }
      close() {
        if (this._closed) throw new Error('close was already called');
        (this._closed = !0),
          this._chunksQueue.push(l7),
          this._notify && this._notify();
      }
      async *[Symbol.asyncIterator]() {
        for (;;) {
          let r;
          for (; !(r = this._chunksQueue.shift()); )
            await new Promise((c) => (this._notify = c)),
              (this._notify = void 0);
          if (r === l7) break;
          yield* this._search.feed(r);
        }
        let a = this._search.end();
        a.length && (yield a);
      }
    };
  function h7(e, a) {
    let r = new O3(a),
      c = [[]];
    for (let n of e)
      for (let t of r.feed(n)) t === D3 ? c.push([]) : c[c.length - 1].push(t);
    let C = r.end();
    return c[c.length - 1].push(C), c.map((n) => w4.mergeArrays(...n));
  }
  function en(e, a) {
    return h7([e], a);
  }
  async function* v5(e) {
    let a = [];
    for await (let r of e) r === D3 ? (yield a, (a = [])) : a.push(r);
    yield a;
  }
  async function* m7(e) {
    for await (let a of v5(e)) yield a.map(w4.arrayToString).join('');
  }
  async function an(e) {
    let a = [];
    for await (let r of m7(e)) a.push(r);
    return a;
  }
  async function* rn(e) {
    for await (let a of v5(e)) yield w4.mergeArrays(...a);
  }
  i2.MATCH = D3;
  i2.QueueableStreamSearch = u7;
  i2.ReadableStreamSearch = s7;
  i2.StreamSearch = O3;
  i2.allStrings = an;
  i2.arrayIterator = rn;
  i2.chunksIterator = v5;
  i2.split = en;
  i2.splitChunks = h7;
  i2.stringIterator = m7;
});
var M7 = K((N4) => {
  'use strict';
  w();
  Object.defineProperty(N4, '__esModule', { value: !0 });
  var p2 = v7(),
    M2 = h5(),
    cn = Function.prototype.apply.bind(M2.mergeArrays, void 0),
    z7 = M2.stringToArray('--'),
    _3 = M2.stringToArray(`\r
`);
  function Cn(e) {
    let a = e.split(';').map((c) => c.trim());
    if (a.shift() !== 'form-data')
      throw new Error(
        'malformed content-disposition header: missing "form-data" in `' +
          JSON.stringify(a) +
          '`'
      );
    let r = {};
    for (let c of a) {
      let C = c.split('=', 2);
      if (C.length !== 2)
        throw new Error(
          'malformed content-disposition header: key-value pair not found - ' +
            c +
            ' in `' +
            e +
            '`'
        );
      let [n, t] = C;
      if (t[0] === '"' && t[t.length - 1] === '"')
        r[n] = t.slice(1, -1).replace(/\\"/g, '"');
      else if (t[0] !== '"' && t[t.length - 1] !== '"') r[n] = t;
      else if (
        (t[0] === '"' && t[t.length - 1] !== '"') ||
        (t[0] !== '"' && t[t.length - 1] === '"')
      )
        throw new Error(
          'malformed content-disposition header: mismatched quotations in `' +
            e +
            '`'
        );
    }
    if (!r.name)
      throw new Error(
        'malformed content-disposition header: missing field name in `' +
          e +
          '`'
      );
    return r;
  }
  function nn(e) {
    let a = [],
      r = !1,
      c;
    for (; typeof (c = e.shift()) < 'u'; ) {
      let C = c.indexOf(':');
      if (C === -1)
        throw new Error('malformed multipart-form header: missing colon');
      let n = c.slice(0, C).trim().toLowerCase(),
        t = c.slice(C + 1).trim();
      switch (n) {
        case 'content-disposition':
          (r = !0), a.push(...Object.entries(Cn(t)));
          break;
        case 'content-type':
          a.push(['contentType', t]);
      }
    }
    if (!r)
      throw new Error(
        'malformed multipart-form header: missing content-disposition'
      );
    return Object.fromEntries(a);
  }
  async function tn(e, a) {
    let r = !0,
      c = !1,
      C = [[]],
      n = new p2.StreamSearch(_3);
    for (;;) {
      let t = await e.next();
      if (t.done)
        throw new Error(
          'malformed multipart-form data: unexpected end of stream'
        );
      if (r && t.value !== p2.MATCH && M2.arraysEqual(t.value.slice(0, 2), z7))
        return [void 0, new Uint8Array()];
      let o;
      if (t.value !== p2.MATCH) o = t.value;
      else if (!c) o = a;
      else
        throw new Error('malformed multipart-form data: unexpected boundary');
      if (!o.length) continue;
      r && (r = !1);
      let m = n.feed(o);
      for (let [u, p] of m.entries()) {
        let x = p === p2.MATCH;
        if (!(!x && !p.length)) {
          if (c && x)
            return (
              m.push(n.end()),
              [
                C.filter((L) => L.length)
                  .map(cn)
                  .map(M2.arrayToString),
                M2.mergeArrays(
                  ...m.slice(u + 1).map((L) => (L === p2.MATCH ? _3 : L))
                ),
              ]
            );
          (c = x) ? C.push([]) : C[C.length - 1].push(p);
        }
      }
    }
  }
  async function* p7(e, a) {
    let r = M2.mergeArrays(z7, M2.stringToArray(a)),
      c = new p2.ReadableStreamSearch(r, e)[Symbol.asyncIterator]();
    for (;;) {
      let n = await c.next();
      if (n.done) return;
      if (n.value === p2.MATCH) break;
    }
    let C = new p2.StreamSearch(_3);
    for (;;) {
      let u = function (d) {
          let S = [];
          for (let k of C.feed(d))
            m && S.push(_3), (m = k === p2.MATCH) || S.push(k);
          return M2.mergeArrays(...S);
        },
        [n, t] = await tn(c, r);
      if (!n) return;
      async function o() {
        let d = await c.next();
        if (d.done)
          throw new Error(
            'malformed multipart-form data: unexpected end of stream'
          );
        return d;
      }
      let m = !1,
        p = !1;
      async function x() {
        let d = await o(),
          S;
        if (d.value !== p2.MATCH) S = d.value;
        else if (!m) S = _3;
        else return (p = !0), { value: C.end() };
        return { value: u(S) };
      }
      let L = [{ value: u(t) }];
      for (
        yield w1(L1({}, nn(n)), {
          data: {
            [Symbol.asyncIterator]() {
              return this;
            },
            async next() {
              for (;;) {
                let d = L.shift();
                if (!d) break;
                if (d.value.length > 0) return d;
              }
              for (;;) {
                if (p) return { done: p, value: void 0 };
                let d = await x();
                if (d.value.length > 0) return d;
              }
            },
          },
        });
        !p;

      )
        L.push(await x());
    }
  }
  async function* on(e, a) {
    for await (let r of p7(e, a)) {
      let c = [];
      for await (let C of r.data) c.push(C);
      yield w1(L1({}, r), { data: M2.mergeArrays(...c) });
    }
  }
  N4.iterateMultipart = on;
  N4.streamMultipart = p7;
});
var d7 = K((k4) => {
  'use strict';
  w();
  Object.defineProperty(k4, '__esModule', { value: !0 });
  var fn = M7();
  function ln(...e) {
    return async (a) => {
      for (let r of e) {
        let c = await r(a);
        if (typeof c < 'u' && c !== null) return c;
      }
    };
  }
  async function sn(e, a) {
    let r = e.headers.get('Content-Type') || '',
      [c, C] = r.split(/\s*;\s*boundary=/);
    if (!e.body || !C || c !== 'multipart/form-data')
      throw new TypeError('Could not parse content as FormData.');
    let n = new FormData(),
      t = fn.streamMultipart(e.body, C);
    for await (let o of t) {
      if (o.done) break;
      typeof o.filename == 'string' &&
        (o.filename = o.filename.split(/[/\\]/).pop());
      let m = await a(o);
      typeof m < 'u' && m !== null && n.append(o.name, m);
    }
    return n;
  }
  k4.composeUploadHandlers = ln;
  k4.parseMultipartFormData = sn;
});
var A4 = K((Q2) => {
  'use strict';
  w();
  Object.defineProperty(Q2, '__esModule', { value: !0 });
  var un = (e, a = {}) => {
      let r = typeof a == 'number' ? { status: a } : a,
        c = new Headers(r.headers);
      return (
        c.has('Content-Type') ||
          c.set('Content-Type', 'application/json; charset=utf-8'),
        new Response(JSON.stringify(e), w1(L1({}, r), { headers: c }))
      );
    },
    hn = (e, a = 302) => {
      let r = a;
      typeof r == 'number'
        ? (r = { status: r })
        : typeof r.status > 'u' && (r.status = 302);
      let c = new Headers(r.headers);
      return (
        c.set('Location', e), new Response(null, w1(L1({}, r), { headers: c }))
      );
    };
  function mn(e) {
    return (
      e != null &&
      typeof e.status == 'number' &&
      typeof e.statusText == 'string' &&
      typeof e.headers == 'object' &&
      typeof e.body < 'u'
    );
  }
  var vn = new Set([301, 302, 303, 307, 308]);
  function zn(e) {
    return vn.has(e.status);
  }
  function pn(e) {
    return e.headers.get('X-Remix-Catch') != null;
  }
  Q2.isCatchResponse = pn;
  Q2.isRedirectResponse = zn;
  Q2.isResponse = mn;
  Q2.json = un;
  Q2.redirect = hn;
});
var V7 = K((q3) => {
  'use strict';
  w();
  Object.defineProperty(q3, '__esModule', { value: !0 });
  var U2 = A4();
  async function Mn({ loadContext: e, match: a, request: r }) {
    let c = a.route.module.action;
    if (!c) {
      let n = new Response(null, { status: 405 });
      return n.headers.set('X-Remix-Catch', 'yes'), n;
    }
    let C;
    try {
      C = await c({ request: H7(L7(r)), context: e, params: a.params });
    } catch (n) {
      if (!U2.isResponse(n)) throw n;
      U2.isRedirectResponse(n) || n.headers.set('X-Remix-Catch', 'yes'),
        (C = n);
    }
    if (C === void 0)
      throw new Error(
        `You defined an action for route "${a.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`
      );
    return U2.isResponse(C) ? C : U2.json(C);
  }
  async function dn({ loadContext: e, match: a, request: r }) {
    let c = a.route.module.loader;
    if (!c)
      throw new Error(
        `You made a ${r.method} request to ${r.url} but did not provide a default component or \`loader\` for route "${a.route.id}", so there is no way to handle the request.`
      );
    let C;
    try {
      C = await c({ request: H7(L7(r)), context: e, params: a.params });
    } catch (n) {
      if (!U2.isResponse(n)) throw n;
      U2.isRedirectResponse(n) || n.headers.set('X-Remix-Catch', 'yes'),
        (C = n);
    }
    if (C === void 0)
      throw new Error(
        `You defined a loader for route "${a.route.id}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`
      );
    return U2.isResponse(C) ? C : U2.json(C);
  }
  function L7(e) {
    let a = new URL(e.url),
      r = a.searchParams.getAll('index');
    a.searchParams.delete('index');
    let c = [];
    for (let C of r) C && c.push(C);
    for (let C of c) a.searchParams.append('index', C);
    return new Request(a.href, e);
  }
  function H7(e) {
    let a = new URL(e.url);
    return a.searchParams.delete('_data'), new Request(a.href, e);
  }
  function Ln(e) {
    let a = e.headers.get('Content-Type');
    return a && /\bapplication\/json\b/.test(a) ? e.json() : e.text();
  }
  q3.callRouteAction = Mn;
  q3.callRouteLoader = dn;
  q3.extractData = Ln;
});
var g7 = K((P4) => {
  'use strict';
  w();
  Object.defineProperty(P4, '__esModule', { value: !0 });
  function Hn(e, a) {
    return e.map((r) => ({
      params: r.params,
      pathname: r.pathname,
      route: a[r.route.id],
    }));
  }
  function Vn(e) {
    return Object.keys(e).reduce((a, r) => ((a[r] = e[r].module), a), {});
  }
  P4.createEntryMatches = Hn;
  P4.createEntryRouteModules = Vn;
});
var x7 = K((z5) => {
  'use strict';
  w();
  Object.defineProperty(z5, '__esModule', { value: !0 });
  async function gn(e) {
    return { message: e.message, stack: e.stack };
  }
  z5.serializeError = gn;
});
var b7 = K((Zl, I3) => {
  'use strict';
  w();
  var d3 = { decodeValues: !0, map: !1, silent: !1 };
  function p5(e) {
    return typeof e == 'string' && !!e.trim();
  }
  function M5(e, a) {
    var r = e.split(';').filter(p5),
      c = r.shift().split('='),
      C = c.shift(),
      n = c.join('=');
    a = a ? Object.assign({}, d3, a) : d3;
    try {
      n = a.decodeValues ? decodeURIComponent(n) : n;
    } catch (o) {
      console.error(
        "set-cookie-parser encountered an error while decoding a cookie with value '" +
          n +
          "'. Set options.decodeValues to false to disable this feature.",
        o
      );
    }
    var t = { name: C, value: n };
    return (
      r.forEach(function (o) {
        var m = o.split('='),
          u = m.shift().trimLeft().toLowerCase(),
          p = m.join('=');
        u === 'expires'
          ? (t.expires = new Date(p))
          : u === 'max-age'
          ? (t.maxAge = parseInt(p, 10))
          : u === 'secure'
          ? (t.secure = !0)
          : u === 'httponly'
          ? (t.httpOnly = !0)
          : u === 'samesite'
          ? (t.sameSite = p)
          : (t[u] = p);
      }),
      t
    );
  }
  function S7(e, a) {
    if (((a = a ? Object.assign({}, d3, a) : d3), !e)) return a.map ? {} : [];
    if (e.headers && e.headers['set-cookie']) e = e.headers['set-cookie'];
    else if (e.headers) {
      var r =
        e.headers[
          Object.keys(e.headers).find(function (C) {
            return C.toLowerCase() === 'set-cookie';
          })
        ];
      !r &&
        e.headers.cookie &&
        !a.silent &&
        console.warn(
          'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.'
        ),
        (e = r);
    }
    if (
      (Array.isArray(e) || (e = [e]),
      (a = a ? Object.assign({}, d3, a) : d3),
      a.map)
    ) {
      var c = {};
      return e.filter(p5).reduce(function (C, n) {
        var t = M5(n, a);
        return (C[t.name] = t), C;
      }, c);
    } else
      return e.filter(p5).map(function (C) {
        return M5(C, a);
      });
  }
  function xn(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != 'string') return [];
    var a = [],
      r = 0,
      c,
      C,
      n,
      t,
      o;
    function m() {
      for (; r < e.length && /\s/.test(e.charAt(r)); ) r += 1;
      return r < e.length;
    }
    function u() {
      return (C = e.charAt(r)), C !== '=' && C !== ';' && C !== ',';
    }
    for (; r < e.length; ) {
      for (c = r, o = !1; m(); )
        if (((C = e.charAt(r)), C === ',')) {
          for (n = r, r += 1, m(), t = r; r < e.length && u(); ) r += 1;
          r < e.length && e.charAt(r) === '='
            ? ((o = !0), (r = t), a.push(e.substring(c, n)), (c = r))
            : (r = n + 1);
        } else r += 1;
      (!o || r >= e.length) && a.push(e.substring(c, e.length));
    }
    return a;
  }
  I3.exports = S7;
  I3.exports.parse = S7;
  I3.exports.parseString = M5;
  I3.exports.splitCookiesString = xn;
});
var y7 = K((L5) => {
  'use strict';
  w();
  Object.defineProperty(L5, '__esModule', { value: !0 });
  var Sn = b7();
  function bn(e, a, r, c) {
    return a.reduce((C, n, t) => {
      let o = e.routes[n.route.id].module,
        m = r[n.route.id],
        u = m ? m.headers : new Headers(),
        p = c ? c.headers : new Headers(),
        x = new Headers(
          o.headers
            ? typeof o.headers == 'function'
              ? o.headers({
                  loaderHeaders: u,
                  parentHeaders: C,
                  actionHeaders: p,
                })
              : o.headers
            : void 0
        );
      return d5(p, x), d5(u, x), d5(C, x), x;
    }, new Headers());
  }
  function d5(e, a) {
    let r = e.get('Set-Cookie');
    r &&
      Sn.splitCookiesString(r).forEach((C) => {
        a.append('Set-Cookie', C);
      });
  }
  L5.getDocumentHeaders = bn;
});
var w7 = K((N2) => {
  'use strict';
  w();
  Object.defineProperty(N2, '__esModule', { value: !0 });
  N2.ServerMode = void 0;
  (function (e) {
    (e.Development = 'development'),
      (e.Production = 'production'),
      (e.Test = 'test');
  })(N2.ServerMode || (N2.ServerMode = {}));
  function yn(e) {
    return (
      e === N2.ServerMode.Development ||
      e === N2.ServerMode.Production ||
      e === N2.ServerMode.Test
    );
  }
  N2.isServerMode = yn;
});
var k7 = K((R4, N7) => {
  w();
  (function (e, a) {
    typeof R4 == 'object' && typeof N7 < 'u'
      ? a(R4)
      : typeof define == 'function' && define.amd
      ? define(['exports'], a)
      : a(
          ((e =
            typeof globalThis < 'u' ? globalThis : e || self).HistoryLibrary =
            {})
        );
  })(R4, function (e) {
    'use strict';
    function a() {
      return (a =
        Object.assign ||
        function (x) {
          for (var L = 1; L < arguments.length; L++) {
            var d = arguments[L];
            for (var S in d)
              Object.prototype.hasOwnProperty.call(d, S) && (x[S] = d[S]);
          }
          return x;
        }).apply(this, arguments);
    }
    var r;
    (e.Action = void 0),
      ((r = e.Action || (e.Action = {})).Pop = 'POP'),
      (r.Push = 'PUSH'),
      (r.Replace = 'REPLACE');
    var c = 'beforeunload',
      C = 'popstate';
    function n(x, L, d) {
      return Math.min(Math.max(x, L), d);
    }
    function t(x) {
      x.preventDefault(), (x.returnValue = '');
    }
    function o() {
      var x = [];
      return {
        get length() {
          return x.length;
        },
        push: function (L) {
          return (
            x.push(L),
            function () {
              x = x.filter(function (d) {
                return d !== L;
              });
            }
          );
        },
        call: function (L) {
          x.forEach(function (d) {
            return d && d(L);
          });
        },
      };
    }
    function m() {
      return Math.random().toString(36).substr(2, 8);
    }
    function u(x) {
      var L = x.pathname,
        d = L === void 0 ? '/' : L,
        S = x.search,
        k = S === void 0 ? '' : S,
        F = x.hash,
        R = F === void 0 ? '' : F;
      return (
        k && k !== '?' && (d += k.charAt(0) === '?' ? k : '?' + k),
        R && R !== '#' && (d += R.charAt(0) === '#' ? R : '#' + R),
        d
      );
    }
    function p(x) {
      var L = {};
      if (x) {
        var d = x.indexOf('#');
        d >= 0 && ((L.hash = x.substr(d)), (x = x.substr(0, d)));
        var S = x.indexOf('?');
        S >= 0 && ((L.search = x.substr(S)), (x = x.substr(0, S))),
          x && (L.pathname = x);
      }
      return L;
    }
    (e.createBrowserHistory = function (x) {
      x === void 0 && (x = {});
      var L = x.window,
        d = L === void 0 ? document.defaultView : L,
        S = d.history;
      function k() {
        var j = d.location,
          D = j.pathname,
          W = j.search,
          f = j.hash,
          h = S.state || {};
        return [
          h.idx,
          {
            pathname: D,
            search: W,
            hash: f,
            state: h.usr || null,
            key: h.key || 'default',
          },
        ];
      }
      var F = null;
      d.addEventListener(C, function () {
        if (F) e1.call(F), (F = null);
        else {
          var j = e.Action.Pop,
            D = k(),
            W = D[0],
            f = D[1];
          if (e1.length) {
            if (W != null) {
              var h = J - W;
              h &&
                ((F = {
                  action: j,
                  location: f,
                  retry: function () {
                    o1(-1 * h);
                  },
                }),
                o1(h));
            }
          } else n1(j);
        }
      });
      var R = e.Action.Pop,
        U = k(),
        J = U[0],
        Y = U[1],
        G = o(),
        e1 = o();
      function C1(j) {
        return typeof j == 'string' ? j : u(j);
      }
      function s1(j, D) {
        return (
          D === void 0 && (D = null),
          a(
            { pathname: Y.pathname, hash: '', search: '' },
            typeof j == 'string' ? p(j) : j,
            { state: D, key: m() }
          )
        );
      }
      function f1(j, D) {
        return [{ usr: j.state, key: j.key, idx: D }, C1(j)];
      }
      function Q(j, D, W) {
        return (
          !e1.length || (e1.call({ action: j, location: D, retry: W }), !1)
        );
      }
      function n1(j) {
        R = j;
        var D = k();
        (J = D[0]), (Y = D[1]), G.call({ action: R, location: Y });
      }
      function o1(j) {
        S.go(j);
      }
      return (
        J == null && ((J = 0), S.replaceState(a({}, S.state, { idx: J }), '')),
        {
          get action() {
            return R;
          },
          get location() {
            return Y;
          },
          createHref: C1,
          push: function j(D, W) {
            var f = e.Action.Push,
              h = s1(D, W);
            if (
              Q(f, h, function () {
                j(D, W);
              })
            ) {
              var M = f1(h, J + 1),
                b = M[0],
                V = M[1];
              try {
                S.pushState(b, '', V);
              } catch {
                d.location.assign(V);
              }
              n1(f);
            }
          },
          replace: function j(D, W) {
            var f = e.Action.Replace,
              h = s1(D, W);
            if (
              Q(f, h, function () {
                j(D, W);
              })
            ) {
              var M = f1(h, J),
                b = M[0],
                V = M[1];
              S.replaceState(b, '', V), n1(f);
            }
          },
          go: o1,
          back: function () {
            o1(-1);
          },
          forward: function () {
            o1(1);
          },
          listen: function (j) {
            return G.push(j);
          },
          block: function (j) {
            var D = e1.push(j);
            return (
              e1.length === 1 && d.addEventListener(c, t),
              function () {
                D(), e1.length || d.removeEventListener(c, t);
              }
            );
          },
        }
      );
    }),
      (e.createHashHistory = function (x) {
        x === void 0 && (x = {});
        var L = x.window,
          d = L === void 0 ? document.defaultView : L,
          S = d.history;
        function k() {
          var D = p(d.location.hash.substr(1)),
            W = D.pathname,
            f = W === void 0 ? '/' : W,
            h = D.search,
            M = h === void 0 ? '' : h,
            b = D.hash,
            V = b === void 0 ? '' : b,
            E = S.state || {};
          return [
            E.idx,
            {
              pathname: f,
              search: M,
              hash: V,
              state: E.usr || null,
              key: E.key || 'default',
            },
          ];
        }
        var F = null;
        function R() {
          if (F) C1.call(F), (F = null);
          else {
            var D = e.Action.Pop,
              W = k(),
              f = W[0],
              h = W[1];
            if (C1.length) {
              if (f != null) {
                var M = Y - f;
                M &&
                  ((F = {
                    action: D,
                    location: h,
                    retry: function () {
                      j(-1 * M);
                    },
                  }),
                  j(M));
              }
            } else o1(D);
          }
        }
        d.addEventListener(C, R),
          d.addEventListener('hashchange', function () {
            u(k()[1]) !== u(G) && R();
          });
        var U = e.Action.Pop,
          J = k(),
          Y = J[0],
          G = J[1],
          e1 = o(),
          C1 = o();
        function s1(D) {
          return (
            (function () {
              var W = document.querySelector('base'),
                f = '';
              if (W && W.getAttribute('href')) {
                var h = d.location.href,
                  M = h.indexOf('#');
                f = M === -1 ? h : h.slice(0, M);
              }
              return f;
            })() +
            '#' +
            (typeof D == 'string' ? D : u(D))
          );
        }
        function f1(D, W) {
          return (
            W === void 0 && (W = null),
            a(
              { pathname: G.pathname, hash: '', search: '' },
              typeof D == 'string' ? p(D) : D,
              { state: W, key: m() }
            )
          );
        }
        function Q(D, W) {
          return [{ usr: D.state, key: D.key, idx: W }, s1(D)];
        }
        function n1(D, W, f) {
          return (
            !C1.length || (C1.call({ action: D, location: W, retry: f }), !1)
          );
        }
        function o1(D) {
          U = D;
          var W = k();
          (Y = W[0]), (G = W[1]), e1.call({ action: U, location: G });
        }
        function j(D) {
          S.go(D);
        }
        return (
          Y == null &&
            ((Y = 0), S.replaceState(a({}, S.state, { idx: Y }), '')),
          {
            get action() {
              return U;
            },
            get location() {
              return G;
            },
            createHref: s1,
            push: function D(W, f) {
              var h = e.Action.Push,
                M = f1(W, f);
              if (
                n1(h, M, function () {
                  D(W, f);
                })
              ) {
                var b = Q(M, Y + 1),
                  V = b[0],
                  E = b[1];
                try {
                  S.pushState(V, '', E);
                } catch {
                  d.location.assign(E);
                }
                o1(h);
              }
            },
            replace: function D(W, f) {
              var h = e.Action.Replace,
                M = f1(W, f);
              if (
                n1(h, M, function () {
                  D(W, f);
                })
              ) {
                var b = Q(M, Y),
                  V = b[0],
                  E = b[1];
                S.replaceState(V, '', E), o1(h);
              }
            },
            go: j,
            back: function () {
              j(-1);
            },
            forward: function () {
              j(1);
            },
            listen: function (D) {
              return e1.push(D);
            },
            block: function (D) {
              var W = C1.push(D);
              return (
                C1.length === 1 && d.addEventListener(c, t),
                function () {
                  W(), C1.length || d.removeEventListener(c, t);
                }
              );
            },
          }
        );
      }),
      (e.createMemoryHistory = function (x) {
        x === void 0 && (x = {});
        var L = x,
          d = L.initialEntries,
          S = d === void 0 ? ['/'] : d,
          k = L.initialIndex,
          F = S.map(function (Q) {
            return a(
              { pathname: '/', search: '', hash: '', state: null, key: m() },
              typeof Q == 'string' ? p(Q) : Q
            );
          }),
          R = n(k ?? F.length - 1, 0, F.length - 1),
          U = e.Action.Pop,
          J = F[R],
          Y = o(),
          G = o();
        function e1(Q, n1) {
          return (
            n1 === void 0 && (n1 = null),
            a(
              { pathname: J.pathname, search: '', hash: '' },
              typeof Q == 'string' ? p(Q) : Q,
              { state: n1, key: m() }
            )
          );
        }
        function C1(Q, n1, o1) {
          return (
            !G.length || (G.call({ action: Q, location: n1, retry: o1 }), !1)
          );
        }
        function s1(Q, n1) {
          (U = Q), (J = n1), Y.call({ action: U, location: J });
        }
        function f1(Q) {
          var n1 = n(R + Q, 0, F.length - 1),
            o1 = e.Action.Pop,
            j = F[n1];
          C1(o1, j, function () {
            f1(Q);
          }) && ((R = n1), s1(o1, j));
        }
        return {
          get index() {
            return R;
          },
          get action() {
            return U;
          },
          get location() {
            return J;
          },
          createHref: function (Q) {
            return typeof Q == 'string' ? Q : u(Q);
          },
          push: function Q(n1, o1) {
            var j = e.Action.Push,
              D = e1(n1, o1);
            C1(j, D, function () {
              Q(n1, o1);
            }) && ((R += 1), F.splice(R, F.length, D), s1(j, D));
          },
          replace: function Q(n1, o1) {
            var j = e.Action.Replace,
              D = e1(n1, o1);
            C1(j, D, function () {
              Q(n1, o1);
            }) && ((F[R] = D), s1(j, D));
          },
          go: f1,
          back: function () {
            f1(-1);
          },
          forward: function () {
            f1(1);
          },
          listen: function (Q) {
            return Y.push(Q);
          },
          block: function (Q) {
            return G.push(Q);
          },
        };
      }),
      (e.createPath = u),
      (e.parsePath = p),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
var k2 = K((rs, A7) => {
  'use strict';
  w();
  A7.exports = k7();
});
var R7 = K((T4, P7) => {
  w();
  (function (e, a) {
    typeof T4 == 'object' && typeof P7 < 'u'
      ? a(T4, k2(), A1())
      : typeof define == 'function' && define.amd
      ? define(['exports', 'history', 'react'], a)
      : a(((e = e || self).ReactRouter = {}), e.HistoryLibrary, e.React);
  })(T4, function (e, a, r) {
    'use strict';
    let c = r.createContext(null),
      C = r.createContext(null),
      n = r.createContext({ outlet: null, matches: [] });
    function t(f, h) {
      if (!f) throw new Error(h);
    }
    function o(f, h, M) {
      M === void 0 && (M = '/');
      let b = F((typeof h == 'string' ? a.parsePath(h) : h).pathname || '/', M);
      if (b == null) return null;
      let V = m(f);
      (function (T) {
        T.sort((q, O) =>
          q.score !== O.score
            ? O.score - q.score
            : (function (H, N) {
                return H.length === N.length &&
                  H.slice(0, -1).every((A, X) => A === N[X])
                  ? H[H.length - 1] - N[N.length - 1]
                  : 0;
              })(
                q.routesMeta.map((H) => H.childrenIndex),
                O.routesMeta.map((H) => H.childrenIndex)
              )
        );
      })(V);
      let E = null;
      for (let T = 0; E == null && T < V.length; ++T) E = L(V[T], b);
      return E;
    }
    function m(f, h, M, b) {
      return (
        h === void 0 && (h = []),
        M === void 0 && (M = []),
        b === void 0 && (b = ''),
        f.forEach((V, E) => {
          let T = {
            relativePath: V.path || '',
            caseSensitive: V.caseSensitive === !0,
            childrenIndex: E,
            route: V,
          };
          T.relativePath.startsWith('/') &&
            (T.relativePath.startsWith(b) || t(!1),
            (T.relativePath = T.relativePath.slice(b.length)));
          let q = R([b, T.relativePath]),
            O = M.concat(T);
          V.children &&
            V.children.length > 0 &&
            (V.index === !0 && t(!1), m(V.children, h, O, q)),
            (V.path != null || V.index) &&
              h.push({ path: q, score: x(q, V.index), routesMeta: O });
        }),
        h
      );
    }
    let u = /^:\w+$/,
      p = (f) => f === '*';
    function x(f, h) {
      let M = f.split('/'),
        b = M.length;
      return (
        M.some(p) && (b += -2),
        h && (b += 2),
        M.filter((V) => !p(V)).reduce(
          (V, E) => V + (u.test(E) ? 3 : E === '' ? 1 : 10),
          b
        )
      );
    }
    function L(f, h) {
      let { routesMeta: M } = f,
        b = {},
        V = '/',
        E = [];
      for (let T = 0; T < M.length; ++T) {
        let q = M[T],
          O = T === M.length - 1,
          H = V === '/' ? h : h.slice(V.length) || '/',
          N = d(
            { path: q.relativePath, caseSensitive: q.caseSensitive, end: O },
            H
          );
        if (!N) return null;
        Object.assign(b, N.params);
        let A = q.route;
        E.push({
          params: b,
          pathname: R([V, N.pathname]),
          pathnameBase: U(R([V, N.pathnameBase])),
          route: A,
        }),
          N.pathnameBase !== '/' && (V = R([V, N.pathnameBase]));
      }
      return E;
    }
    function d(f, h) {
      typeof f == 'string' && (f = { path: f, caseSensitive: !1, end: !0 });
      let [M, b] = (function (O, H, N) {
          H === void 0 && (H = !1), N === void 0 && (N = !0);
          let A = [],
            X =
              '^' +
              O.replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                .replace(/:(\w+)/g, (a1, h1) => (A.push(h1), '([^\\/]+)'));
          return (
            O.endsWith('*')
              ? (A.push('*'),
                (X += O === '*' || O === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : (X += N ? '\\/*$' : '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
            [new RegExp(X, H ? void 0 : 'i'), A]
          );
        })(f.path, f.caseSensitive, f.end),
        V = h.match(M);
      if (!V) return null;
      let E = V[0],
        T = E.replace(/(.)\/+$/, '$1'),
        q = V.slice(1);
      return {
        params: b.reduce((O, H, N) => {
          if (H === '*') {
            let A = q[N] || '';
            T = E.slice(0, E.length - A.length).replace(/(.)\/+$/, '$1');
          }
          return (
            (O[H] = (function (A, X) {
              try {
                return decodeURIComponent(A);
              } catch {
                return A;
              }
            })(q[N] || '')),
            O
          );
        }, {}),
        pathname: E,
        pathnameBase: T,
        pattern: f,
      };
    }
    function S(f, h) {
      h === void 0 && (h = '/');
      let {
        pathname: M,
        search: b = '',
        hash: V = '',
      } = typeof f == 'string' ? a.parsePath(f) : f;
      return {
        pathname: M
          ? M.startsWith('/')
            ? M
            : (function (T, q) {
                let O = q.replace(/\/+$/, '').split('/');
                return (
                  T.split('/').forEach((H) => {
                    H === '..'
                      ? O.length > 1 && O.pop()
                      : H !== '.' && O.push(H);
                  }),
                  O.length > 1 ? O.join('/') : '/'
                );
              })(M, h)
          : h,
        search: J(b),
        hash: Y(V),
      };
    }
    function k(f, h, M) {
      let b,
        V = typeof f == 'string' ? a.parsePath(f) : f,
        E = f === '' || V.pathname === '' ? '/' : V.pathname;
      if (E == null) b = M;
      else {
        let q = h.length - 1;
        if (E.startsWith('..')) {
          let O = E.split('/');
          for (; O[0] === '..'; ) O.shift(), (q -= 1);
          V.pathname = O.join('/');
        }
        b = q >= 0 ? h[q] : '/';
      }
      let T = S(V, b);
      return (
        E &&
          E !== '/' &&
          E.endsWith('/') &&
          !T.pathname.endsWith('/') &&
          (T.pathname += '/'),
        T
      );
    }
    function F(f, h) {
      if (h === '/') return f;
      if (!f.toLowerCase().startsWith(h.toLowerCase())) return null;
      let M = f.charAt(h.length);
      return M && M !== '/' ? null : f.slice(h.length) || '/';
    }
    let R = (f) => f.join('/').replace(/\/\/+/g, '/'),
      U = (f) => f.replace(/\/+$/, '').replace(/^\/*/, '/'),
      J = (f) => (f && f !== '?' ? (f.startsWith('?') ? f : '?' + f) : ''),
      Y = (f) => (f && f !== '#' ? (f.startsWith('#') ? f : '#' + f) : '');
    function G() {
      return r.useContext(C) != null;
    }
    function e1() {
      return G() || t(!1), r.useContext(C).location;
    }
    function C1() {
      G() || t(!1);
      let { basename: f, navigator: h } = r.useContext(c),
        { matches: M } = r.useContext(n),
        { pathname: b } = e1(),
        V = JSON.stringify(M.map((T) => T.pathnameBase)),
        E = r.useRef(!1);
      return (
        r.useEffect(() => {
          E.current = !0;
        }),
        r.useCallback(
          function (T, q) {
            if ((q === void 0 && (q = {}), !E.current)) return;
            if (typeof T == 'number') return void h.go(T);
            let O = k(T, JSON.parse(V), b);
            f !== '/' && (O.pathname = R([f, O.pathname])),
              (q.replace ? h.replace : h.push)(O, q.state);
          },
          [f, h, V, b]
        )
      );
    }
    let s1 = r.createContext(null);
    function f1(f) {
      let h = r.useContext(n).outlet;
      return h && r.createElement(s1.Provider, { value: f }, h);
    }
    function Q(f) {
      let { matches: h } = r.useContext(n),
        { pathname: M } = e1(),
        b = JSON.stringify(h.map((V) => V.pathnameBase));
      return r.useMemo(() => k(f, JSON.parse(b), M), [f, b, M]);
    }
    function n1(f, h) {
      G() || t(!1);
      let M,
        { matches: b } = r.useContext(n),
        V = b[b.length - 1],
        E = V ? V.params : {},
        T = (V && V.pathname, V ? V.pathnameBase : '/'),
        q = (V && V.route, e1());
      if (h) {
        var O;
        let A = typeof h == 'string' ? a.parsePath(h) : h;
        T === '/' ||
          ((O = A.pathname) == null ? void 0 : O.startsWith(T)) ||
          t(!1),
          (M = A);
      } else M = q;
      let H = M.pathname || '/',
        N = o(f, { pathname: T === '/' ? H : H.slice(T.length) || '/' });
      return o1(
        N &&
          N.map((A) =>
            Object.assign({}, A, {
              params: Object.assign({}, E, A.params),
              pathname: R([T, A.pathname]),
              pathnameBase: A.pathnameBase === '/' ? T : R([T, A.pathnameBase]),
            })
          ),
        b
      );
    }
    function o1(f, h) {
      return (
        h === void 0 && (h = []),
        f == null
          ? null
          : f.reduceRight(
              (M, b, V) =>
                r.createElement(n.Provider, {
                  children: b.route.element !== void 0 ? b.route.element : M,
                  value: { outlet: M, matches: h.concat(f.slice(0, V + 1)) },
                }),
              null
            )
      );
    }
    function j(f) {
      t(!1);
    }
    function D(f) {
      let {
        basename: h = '/',
        children: M = null,
        location: b,
        navigationType: V = a.Action.Pop,
        navigator: E,
        static: T = !1,
      } = f;
      G() && t(!1);
      let q = U(h),
        O = r.useMemo(
          () => ({ basename: q, navigator: E, static: T }),
          [q, E, T]
        );
      typeof b == 'string' && (b = a.parsePath(b));
      let {
          pathname: H = '/',
          search: N = '',
          hash: A = '',
          state: X = null,
          key: a1 = 'default',
        } = b,
        h1 = r.useMemo(() => {
          let l1 = F(H, q);
          return l1 == null
            ? null
            : { pathname: l1, search: N, hash: A, state: X, key: a1 };
        }, [q, H, N, A, X, a1]);
      return h1 == null
        ? null
        : r.createElement(
            c.Provider,
            { value: O },
            r.createElement(C.Provider, {
              children: M,
              value: { location: h1, navigationType: V },
            })
          );
    }
    function W(f) {
      let h = [];
      return (
        r.Children.forEach(f, (M) => {
          if (!r.isValidElement(M)) return;
          if (M.type === r.Fragment)
            return void h.push.apply(h, W(M.props.children));
          M.type !== j && t(!1);
          let b = {
            caseSensitive: M.props.caseSensitive,
            element: M.props.element,
            index: M.props.index,
            path: M.props.path,
          };
          M.props.children && (b.children = W(M.props.children)), h.push(b);
        }),
        h
      );
    }
    Object.defineProperty(e, 'NavigationType', {
      enumerable: !0,
      get: function () {
        return a.Action;
      },
    }),
      Object.defineProperty(e, 'createPath', {
        enumerable: !0,
        get: function () {
          return a.createPath;
        },
      }),
      Object.defineProperty(e, 'parsePath', {
        enumerable: !0,
        get: function () {
          return a.parsePath;
        },
      }),
      (e.MemoryRouter = function (f) {
        let {
            basename: h,
            children: M,
            initialEntries: b,
            initialIndex: V,
          } = f,
          E = r.useRef();
        E.current == null &&
          (E.current = a.createMemoryHistory({
            initialEntries: b,
            initialIndex: V,
          }));
        let T = E.current,
          [q, O] = r.useState({ action: T.action, location: T.location });
        return (
          r.useLayoutEffect(() => T.listen(O), [T]),
          r.createElement(D, {
            basename: h,
            children: M,
            location: q.location,
            navigationType: q.action,
            navigator: T,
          })
        );
      }),
      (e.Navigate = function (f) {
        let { to: h, replace: M, state: b } = f;
        G() || t(!1);
        let V = C1();
        return (
          r.useEffect(() => {
            V(h, { replace: M, state: b });
          }),
          null
        );
      }),
      (e.Outlet = function (f) {
        return f1(f.context);
      }),
      (e.Route = j),
      (e.Router = D),
      (e.Routes = function (f) {
        let { children: h, location: M } = f;
        return n1(W(h), M);
      }),
      (e.UNSAFE_LocationContext = C),
      (e.UNSAFE_NavigationContext = c),
      (e.UNSAFE_RouteContext = n),
      (e.createRoutesFromChildren = W),
      (e.generatePath = function (f, h) {
        return (
          h === void 0 && (h = {}),
          f
            .replace(/:(\w+)/g, (M, b) => (h[b] == null && t(!1), h[b]))
            .replace(/\/*\*$/, (M) =>
              h['*'] == null ? '' : h['*'].replace(/^\/*/, '/')
            )
        );
      }),
      (e.matchPath = d),
      (e.matchRoutes = o),
      (e.renderMatches = function (f) {
        return o1(f);
      }),
      (e.resolvePath = S),
      (e.useHref = function (f) {
        G() || t(!1);
        let { basename: h, navigator: M } = r.useContext(c),
          { hash: b, pathname: V, search: E } = Q(f),
          T = V;
        if (h !== '/') {
          let q = (function (H) {
              return H === '' || H.pathname === ''
                ? '/'
                : typeof H == 'string'
                ? a.parsePath(H).pathname
                : H.pathname;
            })(f),
            O = q != null && q.endsWith('/');
          T = V === '/' ? h + (O ? '/' : '') : R([h, V]);
        }
        return M.createHref({ pathname: T, search: E, hash: b });
      }),
      (e.useInRouterContext = G),
      (e.useLocation = e1),
      (e.useMatch = function (f) {
        G() || t(!1);
        let { pathname: h } = e1();
        return r.useMemo(() => d(f, h), [h, f]);
      }),
      (e.useNavigate = C1),
      (e.useNavigationType = function () {
        return r.useContext(C).navigationType;
      }),
      (e.useOutlet = f1),
      (e.useOutletContext = function () {
        return r.useContext(s1);
      }),
      (e.useParams = function () {
        let { matches: f } = r.useContext(n),
          h = f[f.length - 1];
        return h ? h.params : {};
      }),
      (e.useResolvedPath = Q),
      (e.useRoutes = n1),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
var F7 = K((cs, T7) => {
  'use strict';
  w();
  T7.exports = R7();
});
var B7 = K((F4, E7) => {
  w();
  (function (e, a) {
    typeof F4 == 'object' && typeof E7 < 'u'
      ? a(F4, A1(), k2(), F7())
      : typeof define == 'function' && define.amd
      ? define(['exports', 'react', 'history', 'react-router'], a)
      : a(
          ((e = e || self).ReactRouterDOM = {}),
          e.React,
          e.HistoryLibrary,
          e.ReactRouter
        );
  })(F4, function (e, a, r, c) {
    'use strict';
    function C() {
      return (
        (C =
          Object.assign ||
          function (L) {
            for (var d = 1; d < arguments.length; d++) {
              var S = arguments[d];
              for (var k in S)
                Object.prototype.hasOwnProperty.call(S, k) && (L[k] = S[k]);
            }
            return L;
          }),
        C.apply(this, arguments)
      );
    }
    function n(L, d) {
      if (L == null) return {};
      var S,
        k,
        F = {},
        R = Object.keys(L);
      for (k = 0; k < R.length; k++)
        (S = R[k]), d.indexOf(S) >= 0 || (F[S] = L[S]);
      return F;
    }
    let t = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to'],
      o = [
        'aria-current',
        'caseSensitive',
        'className',
        'end',
        'style',
        'to',
        'children',
      ],
      m = a.forwardRef(function (L, d) {
        let {
            onClick: S,
            reloadDocument: k,
            replace: F = !1,
            state: R,
            target: U,
            to: J,
          } = L,
          Y = n(L, t),
          G = c.useHref(J),
          e1 = p(J, { replace: F, state: R, target: U });
        return a.createElement(
          'a',
          C({}, Y, {
            href: G,
            onClick: function (C1) {
              S && S(C1), C1.defaultPrevented || k || e1(C1);
            },
            ref: d,
            target: U,
          })
        );
      }),
      u = a.forwardRef(function (L, d) {
        let {
            'aria-current': S = 'page',
            caseSensitive: k = !1,
            className: F = '',
            end: R = !1,
            style: U,
            to: J,
            children: Y,
          } = L,
          G = n(L, o),
          e1 = c.useLocation(),
          C1 = c.useResolvedPath(J),
          s1 = e1.pathname,
          f1 = C1.pathname;
        k || ((s1 = s1.toLowerCase()), (f1 = f1.toLowerCase()));
        let Q,
          n1 =
            s1 === f1 ||
            (!R && s1.startsWith(f1) && s1.charAt(f1.length) === '/'),
          o1 = n1 ? S : void 0;
        Q =
          typeof F == 'function'
            ? F({ isActive: n1 })
            : [F, n1 ? 'active' : null].filter(Boolean).join(' ');
        let j = typeof U == 'function' ? U({ isActive: n1 }) : U;
        return a.createElement(
          m,
          C({}, G, {
            'aria-current': o1,
            className: Q,
            ref: d,
            style: j,
            to: J,
          }),
          typeof Y == 'function' ? Y({ isActive: n1 }) : Y
        );
      });
    function p(L, d) {
      let { target: S, replace: k, state: F } = d === void 0 ? {} : d,
        R = c.useNavigate(),
        U = c.useLocation(),
        J = c.useResolvedPath(L);
      return a.useCallback(
        (Y) => {
          if (
            !(
              Y.button !== 0 ||
              (S && S !== '_self') ||
              (function (G) {
                return !!(G.metaKey || G.altKey || G.ctrlKey || G.shiftKey);
              })(Y)
            )
          ) {
            Y.preventDefault();
            let G = !!k || c.createPath(U) === c.createPath(J);
            R(L, { replace: G, state: F });
          }
        },
        [U, R, J, k, F, S, L]
      );
    }
    function x(L) {
      return (
        L === void 0 && (L = ''),
        new URLSearchParams(
          typeof L == 'string' ||
          Array.isArray(L) ||
          L instanceof URLSearchParams
            ? L
            : Object.keys(L).reduce((d, S) => {
                let k = L[S];
                return d.concat(
                  Array.isArray(k) ? k.map((F) => [S, F]) : [[S, k]]
                );
              }, [])
        )
      );
    }
    Object.defineProperty(e, 'MemoryRouter', {
      enumerable: !0,
      get: function () {
        return c.MemoryRouter;
      },
    }),
      Object.defineProperty(e, 'Navigate', {
        enumerable: !0,
        get: function () {
          return c.Navigate;
        },
      }),
      Object.defineProperty(e, 'NavigationType', {
        enumerable: !0,
        get: function () {
          return c.NavigationType;
        },
      }),
      Object.defineProperty(e, 'Outlet', {
        enumerable: !0,
        get: function () {
          return c.Outlet;
        },
      }),
      Object.defineProperty(e, 'Route', {
        enumerable: !0,
        get: function () {
          return c.Route;
        },
      }),
      Object.defineProperty(e, 'Router', {
        enumerable: !0,
        get: function () {
          return c.Router;
        },
      }),
      Object.defineProperty(e, 'Routes', {
        enumerable: !0,
        get: function () {
          return c.Routes;
        },
      }),
      Object.defineProperty(e, 'UNSAFE_LocationContext', {
        enumerable: !0,
        get: function () {
          return c.UNSAFE_LocationContext;
        },
      }),
      Object.defineProperty(e, 'UNSAFE_NavigationContext', {
        enumerable: !0,
        get: function () {
          return c.UNSAFE_NavigationContext;
        },
      }),
      Object.defineProperty(e, 'UNSAFE_RouteContext', {
        enumerable: !0,
        get: function () {
          return c.UNSAFE_RouteContext;
        },
      }),
      Object.defineProperty(e, 'createPath', {
        enumerable: !0,
        get: function () {
          return c.createPath;
        },
      }),
      Object.defineProperty(e, 'createRoutesFromChildren', {
        enumerable: !0,
        get: function () {
          return c.createRoutesFromChildren;
        },
      }),
      Object.defineProperty(e, 'generatePath', {
        enumerable: !0,
        get: function () {
          return c.generatePath;
        },
      }),
      Object.defineProperty(e, 'matchPath', {
        enumerable: !0,
        get: function () {
          return c.matchPath;
        },
      }),
      Object.defineProperty(e, 'matchRoutes', {
        enumerable: !0,
        get: function () {
          return c.matchRoutes;
        },
      }),
      Object.defineProperty(e, 'parsePath', {
        enumerable: !0,
        get: function () {
          return c.parsePath;
        },
      }),
      Object.defineProperty(e, 'renderMatches', {
        enumerable: !0,
        get: function () {
          return c.renderMatches;
        },
      }),
      Object.defineProperty(e, 'resolvePath', {
        enumerable: !0,
        get: function () {
          return c.resolvePath;
        },
      }),
      Object.defineProperty(e, 'useHref', {
        enumerable: !0,
        get: function () {
          return c.useHref;
        },
      }),
      Object.defineProperty(e, 'useInRouterContext', {
        enumerable: !0,
        get: function () {
          return c.useInRouterContext;
        },
      }),
      Object.defineProperty(e, 'useLocation', {
        enumerable: !0,
        get: function () {
          return c.useLocation;
        },
      }),
      Object.defineProperty(e, 'useMatch', {
        enumerable: !0,
        get: function () {
          return c.useMatch;
        },
      }),
      Object.defineProperty(e, 'useNavigate', {
        enumerable: !0,
        get: function () {
          return c.useNavigate;
        },
      }),
      Object.defineProperty(e, 'useNavigationType', {
        enumerable: !0,
        get: function () {
          return c.useNavigationType;
        },
      }),
      Object.defineProperty(e, 'useOutlet', {
        enumerable: !0,
        get: function () {
          return c.useOutlet;
        },
      }),
      Object.defineProperty(e, 'useOutletContext', {
        enumerable: !0,
        get: function () {
          return c.useOutletContext;
        },
      }),
      Object.defineProperty(e, 'useParams', {
        enumerable: !0,
        get: function () {
          return c.useParams;
        },
      }),
      Object.defineProperty(e, 'useResolvedPath', {
        enumerable: !0,
        get: function () {
          return c.useResolvedPath;
        },
      }),
      Object.defineProperty(e, 'useRoutes', {
        enumerable: !0,
        get: function () {
          return c.useRoutes;
        },
      }),
      (e.BrowserRouter = function (L) {
        let { basename: d, children: S, window: k } = L,
          F = a.useRef();
        F.current == null &&
          (F.current = r.createBrowserHistory({ window: k }));
        let R = F.current,
          [U, J] = a.useState({ action: R.action, location: R.location });
        return (
          a.useLayoutEffect(() => R.listen(J), [R]),
          a.createElement(c.Router, {
            basename: d,
            children: S,
            location: U.location,
            navigationType: U.action,
            navigator: R,
          })
        );
      }),
      (e.HashRouter = function (L) {
        let { basename: d, children: S, window: k } = L,
          F = a.useRef();
        F.current == null && (F.current = r.createHashHistory({ window: k }));
        let R = F.current,
          [U, J] = a.useState({ action: R.action, location: R.location });
        return (
          a.useLayoutEffect(() => R.listen(J), [R]),
          a.createElement(c.Router, {
            basename: d,
            children: S,
            location: U.location,
            navigationType: U.action,
            navigator: R,
          })
        );
      }),
      (e.Link = m),
      (e.NavLink = u),
      (e.createSearchParams = x),
      (e.unstable_HistoryRouter = function (L) {
        let { basename: d, children: S, history: k } = L,
          [F, R] = a.useState({ action: k.action, location: k.location });
        return (
          a.useLayoutEffect(() => k.listen(R), [k]),
          a.createElement(c.Router, {
            basename: d,
            children: S,
            location: F.location,
            navigationType: F.action,
            navigator: k,
          })
        );
      }),
      (e.useLinkClickHandler = p),
      (e.useSearchParams = function (L) {
        let d = a.useRef(x(L)),
          S = c.useLocation(),
          k = a.useMemo(() => {
            let R = x(S.search);
            for (let U of d.current.keys())
              R.has(U) ||
                d.current.getAll(U).forEach((J) => {
                  R.append(U, J);
                });
            return R;
          }, [S.search]),
          F = c.useNavigate();
        return [
          k,
          a.useCallback(
            (R, U) => {
              F('?' + x(R), U);
            },
            [F]
          ),
        ];
      }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
var O7 = K((Cs, D7) => {
  'use strict';
  w();
  D7.exports = B7();
});
var _7 = K((H5) => {
  'use strict';
  w();
  Object.defineProperty(H5, '__esModule', { value: !0 });
  var wn = O7();
  function Nn(e, a) {
    let r = wn.matchRoutes(e, a);
    return r
      ? r.map((c) => ({
          params: c.params,
          pathname: c.pathname,
          route: c.route,
        }))
      : null;
  }
  H5.matchServerRoutes = Nn;
});
var I7 = K((V5) => {
  'use strict';
  w();
  Object.defineProperty(V5, '__esModule', { value: !0 });
  function q7(e, a) {
    return Object.entries(e)
      .filter(([, r]) => r.parentId === a)
      .map(([r, c]) => w1(L1({}, c), { children: q7(e, r) }));
  }
  V5.createRoutes = q7;
});
var G7 = K((is, W7) => {
  'use strict';
  w();
  var U7 = {},
    kn = U7.hasOwnProperty,
    j7 = (e, a) => {
      for (let r in e) kn.call(e, r) && a(r, e[r]);
    },
    An = (e, a) => (
      a &&
        j7(a, (r, c) => {
          e[r] = c;
        }),
      e
    ),
    Pn = (e, a) => {
      let r = e.length,
        c = -1;
      for (; ++c < r; ) a(e[c]);
    },
    E4 = (e) => '\\u' + ('0000' + e).slice(-4),
    U3 = (e, a) => {
      let r = e.toString(16);
      return a ? r : r.toUpperCase();
    },
    j3 = U7.toString,
    Rn = Array.isArray,
    Tn = (e) => typeof Buffer == 'function' && Buffer.isBuffer(e),
    Fn = (e) => j3.call(e) == '[object Object]',
    En = (e) => typeof e == 'string' || j3.call(e) == '[object String]',
    Bn = (e) => typeof e == 'number' || j3.call(e) == '[object Number]',
    Dn = (e) => typeof e == 'function',
    On = (e) => j3.call(e) == '[object Map]',
    _n = (e) => j3.call(e) == '[object Set]',
    qn = {
      '\\': '\\\\',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '	': '\\t',
    },
    In = /[\\\b\f\n\r\t]/,
    Un = /[0-9]/,
    jn = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    Wn = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
    Gn =
      /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
    j2 = (e, a) => {
      let r = () => {
          (u = m), ++a.indentLevel, (m = a.indent.repeat(a.indentLevel));
        },
        c = {
          escapeEverything: !1,
          minimal: !1,
          isScriptContext: !1,
          quotes: 'single',
          wrap: !1,
          es6: !1,
          json: !1,
          compact: !0,
          lowercaseHex: !1,
          numbers: 'decimal',
          indent: '	',
          indentLevel: 0,
          __inline1__: !1,
          __inline2__: !1,
        },
        C = a && a.json;
      C && ((c.quotes = 'double'), (c.wrap = !0)),
        (a = An(c, a)),
        a.quotes != 'single' &&
          a.quotes != 'double' &&
          a.quotes != 'backtick' &&
          (a.quotes = 'single');
      let n = a.quotes == 'double' ? '"' : a.quotes == 'backtick' ? '`' : "'",
        t = a.compact,
        o = a.lowercaseHex,
        m = a.indent.repeat(a.indentLevel),
        u = '',
        p = a.__inline1__,
        x = a.__inline2__,
        L = t
          ? ''
          : `
`,
        d,
        S = !0,
        k = a.numbers == 'binary',
        F = a.numbers == 'octal',
        R = a.numbers == 'decimal',
        U = a.numbers == 'hexadecimal';
      if ((C && e && Dn(e.toJSON) && (e = e.toJSON()), !En(e))) {
        if (On(e))
          return e.size == 0
            ? 'new Map()'
            : (t || ((a.__inline1__ = !0), (a.__inline2__ = !1)),
              'new Map(' + j2(Array.from(e), a) + ')');
        if (_n(e))
          return e.size == 0
            ? 'new Set()'
            : 'new Set(' + j2(Array.from(e), a) + ')';
        if (Tn(e))
          return e.length == 0
            ? 'Buffer.from([])'
            : 'Buffer.from(' + j2(Array.from(e), a) + ')';
        if (Rn(e))
          return (
            (d = []),
            (a.wrap = !0),
            p && ((a.__inline1__ = !1), (a.__inline2__ = !0)),
            x || r(),
            Pn(e, (Y) => {
              (S = !1),
                x && (a.__inline2__ = !1),
                d.push((t || x ? '' : m) + j2(Y, a));
            }),
            S
              ? '[]'
              : x
              ? '[' + d.join(', ') + ']'
              : '[' + L + d.join(',' + L) + L + (t ? '' : u) + ']'
          );
        if (Bn(e)) {
          if (C) return JSON.stringify(e);
          if (R) return String(e);
          if (U) {
            let Y = e.toString(16);
            return o || (Y = Y.toUpperCase()), '0x' + Y;
          }
          if (k) return '0b' + e.toString(2);
          if (F) return '0o' + e.toString(8);
        } else
          return Fn(e)
            ? ((d = []),
              (a.wrap = !0),
              r(),
              j7(e, (Y, G) => {
                (S = !1),
                  d.push(
                    (t ? '' : m) + j2(Y, a) + ':' + (t ? '' : ' ') + j2(G, a)
                  );
              }),
              S ? '{}' : '{' + L + d.join(',' + L) + L + (t ? '' : u) + '}')
            : C
            ? JSON.stringify(e) || 'null'
            : String(e);
      }
      let J = a.escapeEverything ? Wn : Gn;
      return (
        (d = e.replace(J, (Y, G, e1, C1, s1, f1) => {
          if (G) {
            if (a.minimal) return G;
            let n1 = G.charCodeAt(0),
              o1 = G.charCodeAt(1);
            if (a.es6) {
              let j = (n1 - 55296) * 1024 + o1 - 56320 + 65536,
                D = U3(j, o);
              return '\\u{' + D + '}';
            }
            return E4(U3(n1, o)) + E4(U3(o1, o));
          }
          if (e1) return E4(U3(e1.charCodeAt(0), o));
          if (Y == '\0' && !C && !Un.test(f1.charAt(s1 + 1))) return '\\0';
          if (C1) return C1 == n || a.escapeEverything ? '\\' + C1 : C1;
          if (In.test(Y)) return qn[Y];
          if (a.minimal && !jn.test(Y)) return Y;
          let Q = U3(Y.charCodeAt(0), o);
          return C || Q.length > 2 ? E4(Q) : '\\x' + ('00' + Q).slice(-2);
        })),
        n == '`' && (d = d.replace(/\$\{/g, '\\${')),
        a.isScriptContext &&
          (d = d
            .replace(/<\/(script|style)/gi, '<\\/$1')
            .replace(/<!--/g, C ? '\\u003C!--' : '\\x3C!--')),
        a.wrap && (d = n + d + n),
        d
      );
    };
  j2.version = '3.0.2';
  W7.exports = j2;
});
var $7 = K((g5) => {
  'use strict';
  w();
  Object.defineProperty(g5, '__esModule', { value: !0 });
  var $n = G7();
  function Yn(e) {
    return e && typeof e == 'object' && 'default' in e ? e : { default: e };
  }
  var Xn = Yn($n);
  function Kn(e) {
    return Xn.default(e, { isScriptContext: !0 });
  }
  g5.createServerHandoffString = Kn;
});
var e9 = K((b5) => {
  'use strict';
  w();
  Object.defineProperty(b5, '__esModule', { value: !0 });
  var d2 = V7(),
    Y7 = g7(),
    B4 = x7(),
    Jn = y7(),
    L2 = w7(),
    Qn = _7(),
    Zn = I7(),
    H3 = A4(),
    X7 = $7(),
    et = (e, a) => {
      let r = Zn.createRoutes(e.routes),
        c = L2.isServerMode(a) ? a : L2.ServerMode.Production;
      return async function (n, t) {
        let o = new URL(n.url),
          m = Qn.matchServerRoutes(r, o.pathname),
          u;
        return (
          o.searchParams.has('_data')
            ? (u = await at({
                request: n,
                loadContext: t,
                matches: m,
                handleDataRequest: e.entry.module.handleDataRequest,
                serverMode: c,
              }))
            : m && !m[m.length - 1].route.module.default
            ? (u = await ct({
                request: n,
                loadContext: t,
                matches: m,
                serverMode: c,
              }))
            : (u = await rt({
                build: e,
                loadContext: t,
                matches: m,
                request: n,
                routes: r,
                serverMode: c,
              })),
          n.method === 'HEAD'
            ? new Response(null, {
                headers: u.headers,
                status: u.status,
                statusText: u.statusText,
              })
            : u
        );
      };
    };
  async function at({
    handleDataRequest: e,
    loadContext: a,
    matches: r,
    request: c,
    serverMode: C,
  }) {
    if (!Q7(c))
      return L3(new Error(`Invalid request method "${c.method}"`), 405);
    let n = new URL(c.url);
    if (!r) return L3(new Error(`No route matches URL "${n.pathname}"`), 404);
    let t, o;
    try {
      if (S5(c))
        (o = Z7(n, r)),
          (t = await d2.callRouteAction({
            loadContext: a,
            match: o,
            request: c,
          }));
      else {
        let m = n.searchParams.get('_data');
        if (!m) return L3(new Error('Missing route id in ?_data'), 403);
        let u = r.find((p) => p.route.id === m);
        if (!u)
          return L3(
            new Error(`Route "${m}" does not match URL "${n.pathname}"`),
            403
          );
        (o = u),
          (t = await d2.callRouteLoader({
            loadContext: a,
            match: o,
            request: c,
          }));
      }
      if (H3.isRedirectResponse(t)) {
        let m = new Headers(t.headers);
        return (
          m.set('X-Remix-Redirect', m.get('Location')),
          m.delete('Location'),
          t.headers.get('Set-Cookie') !== null &&
            m.set('X-Remix-Revalidate', 'yes'),
          new Response(null, { status: 204, headers: m })
        );
      }
      return (
        e && (t = await e(t, { context: a, params: o.params, request: c })), t
      );
    } catch (m) {
      return (
        C !== L2.ServerMode.Test && console.error(m),
        C === L2.ServerMode.Development
          ? L3(m, 500)
          : L3(new Error('Unexpected Server Error'), 500)
      );
    }
  }
  async function rt({
    build: e,
    loadContext: a,
    matches: r,
    request: c,
    routes: C,
    serverMode: n,
  }) {
    let t = new URL(c.url),
      o = {
        trackBoundaries: !0,
        trackCatchBoundaries: !0,
        catchBoundaryRouteId: null,
        renderBoundaryRouteId: null,
        loaderBoundaryRouteId: null,
        error: void 0,
        catch: void 0,
      };
    Q7(c)
      ? r ||
        ((o.trackCatchBoundaries = !1),
        (o.catch = { data: null, status: 404, statusText: 'Not Found' }))
      : ((r = null),
        (o.trackCatchBoundaries = !1),
        (o.catch = {
          data: null,
          status: 405,
          statusText: 'Method Not Allowed',
        }));
    let m, u, p, x;
    if (r && S5(c)) {
      p = Z7(t, r);
      try {
        if (
          ((x = await d2.callRouteAction({
            loadContext: a,
            match: p,
            request: c,
          })),
          H3.isRedirectResponse(x))
        )
          return x;
        (m = { status: x.status, statusText: x.statusText }),
          H3.isCatchResponse(x)
            ? ((o.catchBoundaryRouteId = K7(r, 'CatchBoundary')),
              (o.trackCatchBoundaries = !1),
              (o.catch = w1(L1({}, m), { data: await d2.extractData(x) })))
            : (u = { [p.route.id]: await d2.extractData(x) });
      } catch (W) {
        (o.loaderBoundaryRouteId = K7(r, 'ErrorBoundary')),
          (o.trackBoundaries = !1),
          (o.error = await B4.serializeError(W)),
          n !== L2.ServerMode.Test &&
            console.error(
              `There was an error running the action for route ${p.route.id}`
            );
      }
    }
    let L = Y7.createEntryRouteModules(e.routes),
      d = r || [];
    o.catch
      ? (d = x5(d, 'CatchBoundary').slice(0, -1))
      : o.error && (d = x5(d, 'ErrorBoundary').slice(0, -1));
    let S = new Request(c.url, {
        body: null,
        headers: c.headers,
        method: c.method,
        redirect: c.redirect,
        signal: c.signal,
      }),
      k = await Promise.allSettled(
        d.map((W) =>
          W.route.module.loader
            ? d2.callRouteLoader({ loadContext: a, match: W, request: S })
            : Promise.resolve(void 0)
        )
      ),
      F = o.catch,
      R = o.error,
      U = o.catchBoundaryRouteId,
      J = o.loaderBoundaryRouteId;
    (o.catch = void 0), (o.error = void 0);
    let Y = {},
      G = [],
      e1 = {};
    for (let W = 0; W < d.length; W++) {
      let f = d[W],
        h = k[W],
        M = h.status === 'rejected' ? h.reason : void 0,
        b = h.status === 'fulfilled' ? h.value : void 0,
        V = b ? H3.isRedirectResponse(b) : !1,
        E = b ? H3.isCatchResponse(b) : !1;
      if (o.catch || o.error) break;
      if (!F && !R && b && V) return b;
      if (
        (f.route.module.CatchBoundary && (o.catchBoundaryRouteId = f.route.id),
        f.route.module.ErrorBoundary && (o.loaderBoundaryRouteId = f.route.id),
        M)
      ) {
        G.push(500),
          (o.trackBoundaries = !1),
          (o.error = await B4.serializeError(M)),
          n !== L2.ServerMode.Test &&
            console.error(
              `There was an error running the data loader for route ${f.route.id}`
            );
        break;
      } else if (b)
        if (((Y[f.route.id] = b), G.push(b.status), E)) {
          (o.trackCatchBoundaries = !1),
            (o.catch = {
              data: await d2.extractData(b),
              status: b.status,
              statusText: b.statusText,
            });
          break;
        } else e1[f.route.id] = await d2.extractData(b);
    }
    o.catch || (o.catchBoundaryRouteId = U),
      o.error || (o.loaderBoundaryRouteId = J),
      (o.catch = F || o.catch),
      (o.error = R || o.error);
    let C1 = tt(r, o);
    if (!C1) {
      C1 = [];
      let W = C[0];
      W != null &&
        W.module.CatchBoundary &&
        ((o.catchBoundaryRouteId = 'root'),
        C1.push({ params: {}, pathname: '', route: C[0] }));
    }
    let s1 = m && m.status !== 200 ? m.status : G.find((W) => W !== 200),
      f1 = o.error
        ? 500
        : typeof s1 == 'number'
        ? s1
        : o.catch
        ? o.catch.status
        : 200,
      Q = Jn.getDocumentHeaders(e, C1, Y, x),
      n1 = Y7.createEntryMatches(C1, e.assets.routes),
      o1 = { actionData: u, appState: o, matches: n1, routeData: e1 },
      j = w1(L1({}, o1), {
        manifest: e.assets,
        routeModules: L,
        serverHandoffString: X7.createServerHandoffString(o1),
      }),
      D = e.entry.module.default;
    try {
      return await D(c, f1, Q, j);
    } catch (W) {
      (f1 = 500),
        (o.trackBoundaries = !1),
        (o.error = await B4.serializeError(W)),
        (j.serverHandoffString = X7.createServerHandoffString(o1));
      try {
        return await D(c, f1, Q, j);
      } catch (f) {
        n !== L2.ServerMode.Test && console.error(f);
        let h = 'Unexpected Server Error';
        return (
          n === L2.ServerMode.Development &&
            (h += `

${String(f)}`),
          new Response(h, {
            status: 500,
            headers: { 'Content-Type': 'text/plain' },
          })
        );
      }
    }
  }
  async function ct({ loadContext: e, matches: a, request: r, serverMode: c }) {
    let C = a.slice(-1)[0];
    try {
      return S5(r)
        ? await d2.callRouteAction({ match: C, loadContext: e, request: r })
        : await d2.callRouteLoader({ match: C, loadContext: e, request: r });
    } catch (n) {
      c !== L2.ServerMode.Test && console.error(n);
      let t = 'Unexpected Server Error';
      return (
        c === L2.ServerMode.Development &&
          (t += `

${String(n)}`),
        new Response(t, {
          status: 500,
          headers: { 'Content-Type': 'text/plain' },
        })
      );
    }
  }
  var J7 = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
  function S5({ method: e }) {
    return J7.has(e.toUpperCase());
  }
  var Ct = new Set(['GET', 'HEAD', ...J7]);
  function Q7({ method: e }) {
    return Ct.has(e.toUpperCase());
  }
  async function L3(e, a) {
    return H3.json(await B4.serializeError(e), {
      status: a,
      headers: { 'X-Remix-Error': 'yes' },
    });
  }
  function nt(e) {
    for (let a of e.searchParams.getAll('index')) if (a === '') return !0;
    return !1;
  }
  function Z7(e, a) {
    let r = a.slice(-1)[0];
    return !nt(e) && r.route.id.endsWith('/index') ? a.slice(-2)[0] : r;
  }
  function K7(e, a) {
    let r = x5(e, a).slice(-1)[0];
    return r ? r.route.id : null;
  }
  function x5(e, a) {
    let r = -1;
    return (
      e.forEach((c, C) => {
        c.route.module[a] && (r = C);
      }),
      r === -1 ? [] : e.slice(0, r + 1)
    );
  }
  function tt(e, a) {
    if (!e) return null;
    if (!a.catch && !a.error) return e;
    let r = -1;
    return (
      e.forEach((c, C) => {
        let n = c.route.id;
        (a.renderBoundaryRouteId === n ||
          a.loaderBoundaryRouteId === n ||
          a.catchBoundaryRouteId === n) &&
          (r = C);
      }),
      e.slice(0, r + 1)
    );
  }
  b5.createRequestHandler = et;
});
var w5 = K((V3) => {
  'use strict';
  w();
  Object.defineProperty(V3, '__esModule', { value: !0 });
  var it = y4(),
    ot = u5();
  function y5(e) {
    return `__flash_${e}__`;
  }
  var a9 = (e = {}, a = '') => {
      let r = new Map(Object.entries(e));
      return {
        get id() {
          return a;
        },
        get data() {
          return Object.fromEntries(r);
        },
        has(c) {
          return r.has(c) || r.has(y5(c));
        },
        get(c) {
          if (r.has(c)) return r.get(c);
          let C = y5(c);
          if (r.has(C)) {
            let n = r.get(C);
            return r.delete(C), n;
          }
        },
        set(c, C) {
          r.set(c, C);
        },
        flash(c, C) {
          r.set(y5(c), C);
        },
        unset(c) {
          r.delete(c);
        },
      };
    },
    ft = (e) =>
      e != null &&
      typeof e.id == 'string' &&
      typeof e.data < 'u' &&
      typeof e.has == 'function' &&
      typeof e.get == 'function' &&
      typeof e.set == 'function' &&
      typeof e.flash == 'function' &&
      typeof e.unset == 'function',
    lt =
      (e) =>
      ({
        cookie: a,
        createData: r,
        readData: c,
        updateData: C,
        deleteData: n,
      }) => {
        let t = it.isCookie(a)
          ? a
          : e((a == null ? void 0 : a.name) || '__session', a);
        return (
          r9(t),
          {
            async getSession(o, m) {
              let u = o && (await t.parse(o, m)),
                p = u && (await c(u));
              return a9(p || {}, u || '');
            },
            async commitSession(o, m) {
              let { id: u, data: p } = o;
              return (
                u ? await C(u, p, t.expires) : (u = await r(p, t.expires)),
                t.serialize(u, m)
              );
            },
            async destroySession(o, m) {
              return (
                await n(o.id),
                t.serialize('', w1(L1({}, m), { expires: new Date(0) }))
              );
            },
          }
        );
      };
  function r9(e) {
    ot.warnOnce(
      e.isSigned,
      `The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/api/remix#signing-cookies for more information.`
    );
  }
  V3.createSession = a9;
  V3.createSessionStorageFactory = lt;
  V3.isSession = ft;
  V3.warnOnceAboutSigningSessionCookie = r9;
});
var C9 = K((N5) => {
  'use strict';
  w();
  Object.defineProperty(N5, '__esModule', { value: !0 });
  var st = y4(),
    c9 = w5(),
    ut =
      (e) =>
      ({ cookie: a } = {}) => {
        let r = st.isCookie(a)
          ? a
          : e((a == null ? void 0 : a.name) || '__session', a);
        return (
          c9.warnOnceAboutSigningSessionCookie(r),
          {
            async getSession(c, C) {
              return c9.createSession((c && (await r.parse(c, C))) || {});
            },
            async commitSession(c, C) {
              let n = await r.serialize(c.data, C);
              if (n.length > 4096)
                throw new Error(
                  'Cookie length will exceed browser maximum. Length: ' +
                    n.length
                );
              return n;
            },
            async destroySession(c, C) {
              return r.serialize('', w1(L1({}, C), { expires: new Date(0) }));
            },
          }
        );
      };
  N5.createCookieSessionStorageFactory = ut;
});
var n9 = K((k5) => {
  'use strict';
  w();
  Object.defineProperty(k5, '__esModule', { value: !0 });
  var ht =
    (e) =>
    ({ cookie: a } = {}) => {
      let r = 0,
        c = new Map();
      return e({
        cookie: a,
        async createData(C, n) {
          let t = (++r).toString();
          return c.set(t, { data: C, expires: n }), t;
        },
        async readData(C) {
          if (c.has(C)) {
            let { data: n, expires: t } = c.get(C);
            if (!t || t > new Date()) return n;
            t && c.delete(C);
          }
          return null;
        },
        async updateData(C, n, t) {
          c.set(C, { data: n, expires: t });
        },
        async deleteData(C) {
          c.delete(C);
        },
      });
    };
  k5.createMemorySessionStorageFactory = ht;
});
var P5 = K((A5) => {
  'use strict';
  w();
  Object.defineProperty(A5, '__esModule', { value: !0 });
  var t9 = class extends Error {
    constructor(a, r) {
      super(`Field "${a}" exceeded upload size of ${r} bytes.`);
      (this.field = a), (this.maxBytes = r);
    }
  };
  A5.MaxPartSizeExceededError = t9;
});
var i9 = K((R5) => {
  'use strict';
  w();
  Object.defineProperty(R5, '__esModule', { value: !0 });
  var mt = P5();
  function vt({ filter: e, maxPartSize: a = 3e6 } = {}) {
    return async ({ filename: r, contentType: c, name: C, data: n }) => {
      if (e && !(await e({ filename: r, contentType: c, name: C }))) return;
      let t = 0,
        o = [];
      for await (let m of n) {
        if (((t += m.byteLength), t > a))
          throw new mt.MaxPartSizeExceededError(C, a);
        o.push(m);
      }
      return typeof r == 'string'
        ? new File(o, r, { type: c })
        : await new Blob(o, { type: c }).text();
    };
  }
  R5.createMemoryUploadHandler = vt;
});
var F5 = K((_1) => {
  'use strict';
  w();
  Object.defineProperty(_1, '__esModule', { value: !0 });
  var o9 = y4(),
    f9 = d7(),
    l9 = A4(),
    zt = e9(),
    T5 = w5(),
    pt = C9(),
    Mt = n9(),
    dt = i9(),
    Lt = P5();
  _1.createCookieFactory = o9.createCookieFactory;
  _1.isCookie = o9.isCookie;
  _1.unstable_composeUploadHandlers = f9.composeUploadHandlers;
  _1.unstable_parseMultipartFormData = f9.parseMultipartFormData;
  _1.json = l9.json;
  _1.redirect = l9.redirect;
  _1.createRequestHandler = zt.createRequestHandler;
  _1.createSession = T5.createSession;
  _1.createSessionStorageFactory = T5.createSessionStorageFactory;
  _1.isSession = T5.isSession;
  _1.createCookieSessionStorageFactory = pt.createCookieSessionStorageFactory;
  _1.createMemorySessionStorageFactory = Mt.createMemorySessionStorageFactory;
  _1.unstable_createMemoryUploadHandler = dt.createMemoryUploadHandler;
  _1.MaxPartSizeExceededError = Lt.MaxPartSizeExceededError;
});
var u9 = K((D4) => {
  'use strict';
  w();
  Object.defineProperty(D4, '__esModule', { value: !0 });
  var E5 = new TextEncoder(),
    Ht = async (e, a) => {
      let r = await s9(a, ['sign']),
        c = E5.encode(e),
        C = await crypto.subtle.sign('HMAC', r, c),
        n = btoa(String.fromCharCode(...new Uint8Array(C))).replace(/=+$/, '');
      return e + '.' + n;
    },
    Vt = async (e, a) => {
      let r = e.lastIndexOf('.'),
        c = e.slice(0, r),
        C = e.slice(r + 1),
        n = await s9(a, ['verify']),
        t = E5.encode(c),
        o = gt(atob(C));
      return (await crypto.subtle.verify('HMAC', n, o, t)) ? c : !1;
    };
  async function s9(e, a) {
    return await crypto.subtle.importKey(
      'raw',
      E5.encode(e),
      { name: 'HMAC', hash: 'SHA-256' },
      !1,
      a
    );
  }
  function gt(e) {
    let a = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++) a[r] = e.charCodeAt(r);
    return a;
  }
  D4.sign = Ht;
  D4.unsign = Vt;
});
var D5 = K((g3) => {
  'use strict';
  w();
  Object.defineProperty(g3, '__esModule', { value: !0 });
  var O4 = F5(),
    h9 = u9(),
    B5 = O4.createCookieFactory({ sign: h9.sign, unsign: h9.unsign }),
    xt = O4.createCookieSessionStorageFactory(B5),
    m9 = O4.createSessionStorageFactory(B5),
    St = O4.createMemorySessionStorageFactory(m9);
  g3.createCookie = B5;
  g3.createCookieSessionStorage = xt;
  g3.createMemorySessionStorage = St;
  g3.createSessionStorage = m9;
});
var v9 = K((O5) => {
  'use strict';
  w();
  Object.defineProperty(O5, '__esModule', { value: !0 });
  var bt = D5();
  function yt({ cookie: e, kv: a }) {
    return bt.createSessionStorage({
      cookie: e,
      async createData(r, c) {
        for (;;) {
          let C = new Uint8Array(8);
          crypto.getRandomValues(C);
          let n = [...C].map((t) => t.toString(16).padStart(2, '0')).join('');
          if (!(await a.get(n, 'json')))
            return (
              await a.put(n, JSON.stringify(r), {
                expiration: c ? Math.round(c.getTime() / 1e3) : void 0,
              }),
              n
            );
        }
      },
      async readData(r) {
        let c = await a.get(r);
        return c ? JSON.parse(c) : null;
      },
      async updateData(r, c, C) {
        await a.put(r, JSON.stringify(c), {
          expiration: C ? Math.round(C.getTime() / 1e3) : void 0,
        });
      },
      async deleteData(r) {
        await a.delete(r);
      },
    });
  }
  O5.createCloudflareKVSessionStorage = yt;
});
var z9 = K((P1) => {
  'use strict';
  w();
  Object.defineProperty(P1, '__esModule', { value: !0 });
  var wt = v9(),
    _4 = D5(),
    H2 = F5();
  P1.createCloudflareKVSessionStorage = wt.createCloudflareKVSessionStorage;
  P1.createCookie = _4.createCookie;
  P1.createCookieSessionStorage = _4.createCookieSessionStorage;
  P1.createMemorySessionStorage = _4.createMemorySessionStorage;
  P1.createSessionStorage = _4.createSessionStorage;
  Object.defineProperty(P1, 'MaxPartSizeExceededError', {
    enumerable: !0,
    get: function () {
      return H2.MaxPartSizeExceededError;
    },
  });
  Object.defineProperty(P1, 'createRequestHandler', {
    enumerable: !0,
    get: function () {
      return H2.createRequestHandler;
    },
  });
  Object.defineProperty(P1, 'createSession', {
    enumerable: !0,
    get: function () {
      return H2.createSession;
    },
  });
  Object.defineProperty(P1, 'isCookie', {
    enumerable: !0,
    get: function () {
      return H2.isCookie;
    },
  });
  Object.defineProperty(P1, 'isSession', {
    enumerable: !0,
    get: function () {
      return H2.isSession;
    },
  });
  Object.defineProperty(P1, 'json', {
    enumerable: !0,
    get: function () {
      return H2.json;
    },
  });
  Object.defineProperty(P1, 'redirect', {
    enumerable: !0,
    get: function () {
      return H2.redirect;
    },
  });
  Object.defineProperty(P1, 'unstable_composeUploadHandlers', {
    enumerable: !0,
    get: function () {
      return H2.unstable_composeUploadHandlers;
    },
  });
  Object.defineProperty(P1, 'unstable_createMemoryUploadHandler', {
    enumerable: !0,
    get: function () {
      return H2.unstable_createMemoryUploadHandler;
    },
  });
  Object.defineProperty(P1, 'unstable_parseMultipartFormData', {
    enumerable: !0,
    get: function () {
      return H2.unstable_parseMultipartFormData;
    },
  });
});
var M9 = K((q4) => {
  'use strict';
  w();
  Object.defineProperty(q4, '__esModule', { value: !0 });
  var Nt = z9();
  function p9({ build: e, getLoadContext: a, mode: r }) {
    let c = Nt.createRequestHandler(e, r);
    return (C) => {
      let n = a == null ? void 0 : a(C);
      return c(C.request, n);
    };
  }
  function kt({ build: e, getLoadContext: a, mode: r }) {
    let c = p9({ build: e, getLoadContext: a, mode: r }),
      C = async (n) => {
        let t;
        n.request.headers.delete('if-none-match');
        try {
          (t = await n.env.ASSETS.fetch(n.request.url, n.request.clone())),
            (t =
              t && t.status >= 200 && t.status < 400
                ? new Response(t.body, t)
                : void 0);
        } catch {}
        return t || (t = await c(n)), t;
      };
    return async (n) => {
      try {
        return await C(n);
      } catch {
        return new Response('Internal Error', { status: 500 });
      }
    };
  }
  q4.createPagesFunctionHandler = kt;
  q4.createRequestHandler = p9;
});
var L9 = K((I4) => {
  'use strict';
  w();
  Object.defineProperty(I4, '__esModule', { value: !0 });
  var d9 = M9();
  I4.createPagesFunctionHandler = d9.createPagesFunctionHandler;
  I4.createRequestHandler = d9.createRequestHandler;
});
var H9 = K((q5) => {
  'use strict';
  w();
  Object.defineProperty(q5, '__esModule', { value: !0 });
  function _5() {
    return (
      (_5 = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var r = arguments[a];
              for (var c in r)
                Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
            }
            return e;
          }),
      _5.apply(this, arguments)
    );
  }
  q5.extends = _5;
});
var g9 = K((U4, V9) => {
  w();
  (function (e, a) {
    typeof U4 == 'object' && typeof V9 < 'u'
      ? a(U4, k2(), A1())
      : typeof define == 'function' && define.amd
      ? define(['exports', 'history', 'react'], a)
      : a(((e = e || self).ReactRouter = {}), e.HistoryLibrary, e.React);
  })(U4, function (e, a, r) {
    'use strict';
    let c = r.createContext(null),
      C = r.createContext(null),
      n = r.createContext({ outlet: null, matches: [] });
    function t(f, h) {
      if (!f) throw new Error(h);
    }
    function o(f, h, M) {
      M === void 0 && (M = '/');
      let b = F((typeof h == 'string' ? a.parsePath(h) : h).pathname || '/', M);
      if (b == null) return null;
      let V = m(f);
      (function (T) {
        T.sort((q, O) =>
          q.score !== O.score
            ? O.score - q.score
            : (function (H, N) {
                return H.length === N.length &&
                  H.slice(0, -1).every((A, X) => A === N[X])
                  ? H[H.length - 1] - N[N.length - 1]
                  : 0;
              })(
                q.routesMeta.map((H) => H.childrenIndex),
                O.routesMeta.map((H) => H.childrenIndex)
              )
        );
      })(V);
      let E = null;
      for (let T = 0; E == null && T < V.length; ++T) E = L(V[T], b);
      return E;
    }
    function m(f, h, M, b) {
      return (
        h === void 0 && (h = []),
        M === void 0 && (M = []),
        b === void 0 && (b = ''),
        f.forEach((V, E) => {
          let T = {
            relativePath: V.path || '',
            caseSensitive: V.caseSensitive === !0,
            childrenIndex: E,
            route: V,
          };
          T.relativePath.startsWith('/') &&
            (T.relativePath.startsWith(b) || t(!1),
            (T.relativePath = T.relativePath.slice(b.length)));
          let q = R([b, T.relativePath]),
            O = M.concat(T);
          V.children &&
            V.children.length > 0 &&
            (V.index === !0 && t(!1), m(V.children, h, O, q)),
            (V.path != null || V.index) &&
              h.push({ path: q, score: x(q, V.index), routesMeta: O });
        }),
        h
      );
    }
    let u = /^:\w+$/,
      p = (f) => f === '*';
    function x(f, h) {
      let M = f.split('/'),
        b = M.length;
      return (
        M.some(p) && (b += -2),
        h && (b += 2),
        M.filter((V) => !p(V)).reduce(
          (V, E) => V + (u.test(E) ? 3 : E === '' ? 1 : 10),
          b
        )
      );
    }
    function L(f, h) {
      let { routesMeta: M } = f,
        b = {},
        V = '/',
        E = [];
      for (let T = 0; T < M.length; ++T) {
        let q = M[T],
          O = T === M.length - 1,
          H = V === '/' ? h : h.slice(V.length) || '/',
          N = d(
            { path: q.relativePath, caseSensitive: q.caseSensitive, end: O },
            H
          );
        if (!N) return null;
        Object.assign(b, N.params);
        let A = q.route;
        E.push({
          params: b,
          pathname: R([V, N.pathname]),
          pathnameBase: U(R([V, N.pathnameBase])),
          route: A,
        }),
          N.pathnameBase !== '/' && (V = R([V, N.pathnameBase]));
      }
      return E;
    }
    function d(f, h) {
      typeof f == 'string' && (f = { path: f, caseSensitive: !1, end: !0 });
      let [M, b] = (function (O, H, N) {
          H === void 0 && (H = !1), N === void 0 && (N = !0);
          let A = [],
            X =
              '^' +
              O.replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                .replace(/:(\w+)/g, (a1, h1) => (A.push(h1), '([^\\/]+)'));
          return (
            O.endsWith('*')
              ? (A.push('*'),
                (X += O === '*' || O === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : (X += N ? '\\/*$' : '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
            [new RegExp(X, H ? void 0 : 'i'), A]
          );
        })(f.path, f.caseSensitive, f.end),
        V = h.match(M);
      if (!V) return null;
      let E = V[0],
        T = E.replace(/(.)\/+$/, '$1'),
        q = V.slice(1);
      return {
        params: b.reduce((O, H, N) => {
          if (H === '*') {
            let A = q[N] || '';
            T = E.slice(0, E.length - A.length).replace(/(.)\/+$/, '$1');
          }
          return (
            (O[H] = (function (A, X) {
              try {
                return decodeURIComponent(A);
              } catch {
                return A;
              }
            })(q[N] || '')),
            O
          );
        }, {}),
        pathname: E,
        pathnameBase: T,
        pattern: f,
      };
    }
    function S(f, h) {
      h === void 0 && (h = '/');
      let {
        pathname: M,
        search: b = '',
        hash: V = '',
      } = typeof f == 'string' ? a.parsePath(f) : f;
      return {
        pathname: M
          ? M.startsWith('/')
            ? M
            : (function (T, q) {
                let O = q.replace(/\/+$/, '').split('/');
                return (
                  T.split('/').forEach((H) => {
                    H === '..'
                      ? O.length > 1 && O.pop()
                      : H !== '.' && O.push(H);
                  }),
                  O.length > 1 ? O.join('/') : '/'
                );
              })(M, h)
          : h,
        search: J(b),
        hash: Y(V),
      };
    }
    function k(f, h, M) {
      let b,
        V = typeof f == 'string' ? a.parsePath(f) : f,
        E = f === '' || V.pathname === '' ? '/' : V.pathname;
      if (E == null) b = M;
      else {
        let q = h.length - 1;
        if (E.startsWith('..')) {
          let O = E.split('/');
          for (; O[0] === '..'; ) O.shift(), (q -= 1);
          V.pathname = O.join('/');
        }
        b = q >= 0 ? h[q] : '/';
      }
      let T = S(V, b);
      return (
        E &&
          E !== '/' &&
          E.endsWith('/') &&
          !T.pathname.endsWith('/') &&
          (T.pathname += '/'),
        T
      );
    }
    function F(f, h) {
      if (h === '/') return f;
      if (!f.toLowerCase().startsWith(h.toLowerCase())) return null;
      let M = f.charAt(h.length);
      return M && M !== '/' ? null : f.slice(h.length) || '/';
    }
    let R = (f) => f.join('/').replace(/\/\/+/g, '/'),
      U = (f) => f.replace(/\/+$/, '').replace(/^\/*/, '/'),
      J = (f) => (f && f !== '?' ? (f.startsWith('?') ? f : '?' + f) : ''),
      Y = (f) => (f && f !== '#' ? (f.startsWith('#') ? f : '#' + f) : '');
    function G() {
      return r.useContext(C) != null;
    }
    function e1() {
      return G() || t(!1), r.useContext(C).location;
    }
    function C1() {
      G() || t(!1);
      let { basename: f, navigator: h } = r.useContext(c),
        { matches: M } = r.useContext(n),
        { pathname: b } = e1(),
        V = JSON.stringify(M.map((T) => T.pathnameBase)),
        E = r.useRef(!1);
      return (
        r.useEffect(() => {
          E.current = !0;
        }),
        r.useCallback(
          function (T, q) {
            if ((q === void 0 && (q = {}), !E.current)) return;
            if (typeof T == 'number') return void h.go(T);
            let O = k(T, JSON.parse(V), b);
            f !== '/' && (O.pathname = R([f, O.pathname])),
              (q.replace ? h.replace : h.push)(O, q.state);
          },
          [f, h, V, b]
        )
      );
    }
    let s1 = r.createContext(null);
    function f1(f) {
      let h = r.useContext(n).outlet;
      return h && r.createElement(s1.Provider, { value: f }, h);
    }
    function Q(f) {
      let { matches: h } = r.useContext(n),
        { pathname: M } = e1(),
        b = JSON.stringify(h.map((V) => V.pathnameBase));
      return r.useMemo(() => k(f, JSON.parse(b), M), [f, b, M]);
    }
    function n1(f, h) {
      G() || t(!1);
      let M,
        { matches: b } = r.useContext(n),
        V = b[b.length - 1],
        E = V ? V.params : {},
        T = (V && V.pathname, V ? V.pathnameBase : '/'),
        q = (V && V.route, e1());
      if (h) {
        var O;
        let A = typeof h == 'string' ? a.parsePath(h) : h;
        T === '/' ||
          ((O = A.pathname) == null ? void 0 : O.startsWith(T)) ||
          t(!1),
          (M = A);
      } else M = q;
      let H = M.pathname || '/',
        N = o(f, { pathname: T === '/' ? H : H.slice(T.length) || '/' });
      return o1(
        N &&
          N.map((A) =>
            Object.assign({}, A, {
              params: Object.assign({}, E, A.params),
              pathname: R([T, A.pathname]),
              pathnameBase: A.pathnameBase === '/' ? T : R([T, A.pathnameBase]),
            })
          ),
        b
      );
    }
    function o1(f, h) {
      return (
        h === void 0 && (h = []),
        f == null
          ? null
          : f.reduceRight(
              (M, b, V) =>
                r.createElement(n.Provider, {
                  children: b.route.element !== void 0 ? b.route.element : M,
                  value: { outlet: M, matches: h.concat(f.slice(0, V + 1)) },
                }),
              null
            )
      );
    }
    function j(f) {
      t(!1);
    }
    function D(f) {
      let {
        basename: h = '/',
        children: M = null,
        location: b,
        navigationType: V = a.Action.Pop,
        navigator: E,
        static: T = !1,
      } = f;
      G() && t(!1);
      let q = U(h),
        O = r.useMemo(
          () => ({ basename: q, navigator: E, static: T }),
          [q, E, T]
        );
      typeof b == 'string' && (b = a.parsePath(b));
      let {
          pathname: H = '/',
          search: N = '',
          hash: A = '',
          state: X = null,
          key: a1 = 'default',
        } = b,
        h1 = r.useMemo(() => {
          let l1 = F(H, q);
          return l1 == null
            ? null
            : { pathname: l1, search: N, hash: A, state: X, key: a1 };
        }, [q, H, N, A, X, a1]);
      return h1 == null
        ? null
        : r.createElement(
            c.Provider,
            { value: O },
            r.createElement(C.Provider, {
              children: M,
              value: { location: h1, navigationType: V },
            })
          );
    }
    function W(f) {
      let h = [];
      return (
        r.Children.forEach(f, (M) => {
          if (!r.isValidElement(M)) return;
          if (M.type === r.Fragment)
            return void h.push.apply(h, W(M.props.children));
          M.type !== j && t(!1);
          let b = {
            caseSensitive: M.props.caseSensitive,
            element: M.props.element,
            index: M.props.index,
            path: M.props.path,
          };
          M.props.children && (b.children = W(M.props.children)), h.push(b);
        }),
        h
      );
    }
    Object.defineProperty(e, 'NavigationType', {
      enumerable: !0,
      get: function () {
        return a.Action;
      },
    }),
      Object.defineProperty(e, 'createPath', {
        enumerable: !0,
        get: function () {
          return a.createPath;
        },
      }),
      Object.defineProperty(e, 'parsePath', {
        enumerable: !0,
        get: function () {
          return a.parsePath;
        },
      }),
      (e.MemoryRouter = function (f) {
        let {
            basename: h,
            children: M,
            initialEntries: b,
            initialIndex: V,
          } = f,
          E = r.useRef();
        E.current == null &&
          (E.current = a.createMemoryHistory({
            initialEntries: b,
            initialIndex: V,
          }));
        let T = E.current,
          [q, O] = r.useState({ action: T.action, location: T.location });
        return (
          r.useLayoutEffect(() => T.listen(O), [T]),
          r.createElement(D, {
            basename: h,
            children: M,
            location: q.location,
            navigationType: q.action,
            navigator: T,
          })
        );
      }),
      (e.Navigate = function (f) {
        let { to: h, replace: M, state: b } = f;
        G() || t(!1);
        let V = C1();
        return (
          r.useEffect(() => {
            V(h, { replace: M, state: b });
          }),
          null
        );
      }),
      (e.Outlet = function (f) {
        return f1(f.context);
      }),
      (e.Route = j),
      (e.Router = D),
      (e.Routes = function (f) {
        let { children: h, location: M } = f;
        return n1(W(h), M);
      }),
      (e.UNSAFE_LocationContext = C),
      (e.UNSAFE_NavigationContext = c),
      (e.UNSAFE_RouteContext = n),
      (e.createRoutesFromChildren = W),
      (e.generatePath = function (f, h) {
        return (
          h === void 0 && (h = {}),
          f
            .replace(/:(\w+)/g, (M, b) => (h[b] == null && t(!1), h[b]))
            .replace(/\/*\*$/, (M) =>
              h['*'] == null ? '' : h['*'].replace(/^\/*/, '/')
            )
        );
      }),
      (e.matchPath = d),
      (e.matchRoutes = o),
      (e.renderMatches = function (f) {
        return o1(f);
      }),
      (e.resolvePath = S),
      (e.useHref = function (f) {
        G() || t(!1);
        let { basename: h, navigator: M } = r.useContext(c),
          { hash: b, pathname: V, search: E } = Q(f),
          T = V;
        if (h !== '/') {
          let q = (function (H) {
              return H === '' || H.pathname === ''
                ? '/'
                : typeof H == 'string'
                ? a.parsePath(H).pathname
                : H.pathname;
            })(f),
            O = q != null && q.endsWith('/');
          T = V === '/' ? h + (O ? '/' : '') : R([h, V]);
        }
        return M.createHref({ pathname: T, search: E, hash: b });
      }),
      (e.useInRouterContext = G),
      (e.useLocation = e1),
      (e.useMatch = function (f) {
        G() || t(!1);
        let { pathname: h } = e1();
        return r.useMemo(() => d(f, h), [h, f]);
      }),
      (e.useNavigate = C1),
      (e.useNavigationType = function () {
        return r.useContext(C).navigationType;
      }),
      (e.useOutlet = f1),
      (e.useOutletContext = function () {
        return r.useContext(s1);
      }),
      (e.useParams = function () {
        let { matches: f } = r.useContext(n),
          h = f[f.length - 1];
        return h ? h.params : {};
      }),
      (e.useResolvedPath = Q),
      (e.useRoutes = n1),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
var S9 = K((gs, x9) => {
  'use strict';
  w();
  x9.exports = g9();
});
var y9 = K((j4, b9) => {
  w();
  (function (e, a) {
    typeof j4 == 'object' && typeof b9 < 'u'
      ? a(j4, A1(), k2(), S9())
      : typeof define == 'function' && define.amd
      ? define(['exports', 'react', 'history', 'react-router'], a)
      : a(
          ((e = e || self).ReactRouterDOM = {}),
          e.React,
          e.HistoryLibrary,
          e.ReactRouter
        );
  })(j4, function (e, a, r, c) {
    'use strict';
    function C() {
      return (
        (C =
          Object.assign ||
          function (L) {
            for (var d = 1; d < arguments.length; d++) {
              var S = arguments[d];
              for (var k in S)
                Object.prototype.hasOwnProperty.call(S, k) && (L[k] = S[k]);
            }
            return L;
          }),
        C.apply(this, arguments)
      );
    }
    function n(L, d) {
      if (L == null) return {};
      var S,
        k,
        F = {},
        R = Object.keys(L);
      for (k = 0; k < R.length; k++)
        (S = R[k]), d.indexOf(S) >= 0 || (F[S] = L[S]);
      return F;
    }
    let t = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to'],
      o = [
        'aria-current',
        'caseSensitive',
        'className',
        'end',
        'style',
        'to',
        'children',
      ],
      m = a.forwardRef(function (L, d) {
        let {
            onClick: S,
            reloadDocument: k,
            replace: F = !1,
            state: R,
            target: U,
            to: J,
          } = L,
          Y = n(L, t),
          G = c.useHref(J),
          e1 = p(J, { replace: F, state: R, target: U });
        return a.createElement(
          'a',
          C({}, Y, {
            href: G,
            onClick: function (C1) {
              S && S(C1), C1.defaultPrevented || k || e1(C1);
            },
            ref: d,
            target: U,
          })
        );
      }),
      u = a.forwardRef(function (L, d) {
        let {
            'aria-current': S = 'page',
            caseSensitive: k = !1,
            className: F = '',
            end: R = !1,
            style: U,
            to: J,
            children: Y,
          } = L,
          G = n(L, o),
          e1 = c.useLocation(),
          C1 = c.useResolvedPath(J),
          s1 = e1.pathname,
          f1 = C1.pathname;
        k || ((s1 = s1.toLowerCase()), (f1 = f1.toLowerCase()));
        let Q,
          n1 =
            s1 === f1 ||
            (!R && s1.startsWith(f1) && s1.charAt(f1.length) === '/'),
          o1 = n1 ? S : void 0;
        Q =
          typeof F == 'function'
            ? F({ isActive: n1 })
            : [F, n1 ? 'active' : null].filter(Boolean).join(' ');
        let j = typeof U == 'function' ? U({ isActive: n1 }) : U;
        return a.createElement(
          m,
          C({}, G, {
            'aria-current': o1,
            className: Q,
            ref: d,
            style: j,
            to: J,
          }),
          typeof Y == 'function' ? Y({ isActive: n1 }) : Y
        );
      });
    function p(L, d) {
      let { target: S, replace: k, state: F } = d === void 0 ? {} : d,
        R = c.useNavigate(),
        U = c.useLocation(),
        J = c.useResolvedPath(L);
      return a.useCallback(
        (Y) => {
          if (
            !(
              Y.button !== 0 ||
              (S && S !== '_self') ||
              (function (G) {
                return !!(G.metaKey || G.altKey || G.ctrlKey || G.shiftKey);
              })(Y)
            )
          ) {
            Y.preventDefault();
            let G = !!k || c.createPath(U) === c.createPath(J);
            R(L, { replace: G, state: F });
          }
        },
        [U, R, J, k, F, S, L]
      );
    }
    function x(L) {
      return (
        L === void 0 && (L = ''),
        new URLSearchParams(
          typeof L == 'string' ||
          Array.isArray(L) ||
          L instanceof URLSearchParams
            ? L
            : Object.keys(L).reduce((d, S) => {
                let k = L[S];
                return d.concat(
                  Array.isArray(k) ? k.map((F) => [S, F]) : [[S, k]]
                );
              }, [])
        )
      );
    }
    Object.defineProperty(e, 'MemoryRouter', {
      enumerable: !0,
      get: function () {
        return c.MemoryRouter;
      },
    }),
      Object.defineProperty(e, 'Navigate', {
        enumerable: !0,
        get: function () {
          return c.Navigate;
        },
      }),
      Object.defineProperty(e, 'NavigationType', {
        enumerable: !0,
        get: function () {
          return c.NavigationType;
        },
      }),
      Object.defineProperty(e, 'Outlet', {
        enumerable: !0,
        get: function () {
          return c.Outlet;
        },
      }),
      Object.defineProperty(e, 'Route', {
        enumerable: !0,
        get: function () {
          return c.Route;
        },
      }),
      Object.defineProperty(e, 'Router', {
        enumerable: !0,
        get: function () {
          return c.Router;
        },
      }),
      Object.defineProperty(e, 'Routes', {
        enumerable: !0,
        get: function () {
          return c.Routes;
        },
      }),
      Object.defineProperty(e, 'UNSAFE_LocationContext', {
        enumerable: !0,
        get: function () {
          return c.UNSAFE_LocationContext;
        },
      }),
      Object.defineProperty(e, 'UNSAFE_NavigationContext', {
        enumerable: !0,
        get: function () {
          return c.UNSAFE_NavigationContext;
        },
      }),
      Object.defineProperty(e, 'UNSAFE_RouteContext', {
        enumerable: !0,
        get: function () {
          return c.UNSAFE_RouteContext;
        },
      }),
      Object.defineProperty(e, 'createPath', {
        enumerable: !0,
        get: function () {
          return c.createPath;
        },
      }),
      Object.defineProperty(e, 'createRoutesFromChildren', {
        enumerable: !0,
        get: function () {
          return c.createRoutesFromChildren;
        },
      }),
      Object.defineProperty(e, 'generatePath', {
        enumerable: !0,
        get: function () {
          return c.generatePath;
        },
      }),
      Object.defineProperty(e, 'matchPath', {
        enumerable: !0,
        get: function () {
          return c.matchPath;
        },
      }),
      Object.defineProperty(e, 'matchRoutes', {
        enumerable: !0,
        get: function () {
          return c.matchRoutes;
        },
      }),
      Object.defineProperty(e, 'parsePath', {
        enumerable: !0,
        get: function () {
          return c.parsePath;
        },
      }),
      Object.defineProperty(e, 'renderMatches', {
        enumerable: !0,
        get: function () {
          return c.renderMatches;
        },
      }),
      Object.defineProperty(e, 'resolvePath', {
        enumerable: !0,
        get: function () {
          return c.resolvePath;
        },
      }),
      Object.defineProperty(e, 'useHref', {
        enumerable: !0,
        get: function () {
          return c.useHref;
        },
      }),
      Object.defineProperty(e, 'useInRouterContext', {
        enumerable: !0,
        get: function () {
          return c.useInRouterContext;
        },
      }),
      Object.defineProperty(e, 'useLocation', {
        enumerable: !0,
        get: function () {
          return c.useLocation;
        },
      }),
      Object.defineProperty(e, 'useMatch', {
        enumerable: !0,
        get: function () {
          return c.useMatch;
        },
      }),
      Object.defineProperty(e, 'useNavigate', {
        enumerable: !0,
        get: function () {
          return c.useNavigate;
        },
      }),
      Object.defineProperty(e, 'useNavigationType', {
        enumerable: !0,
        get: function () {
          return c.useNavigationType;
        },
      }),
      Object.defineProperty(e, 'useOutlet', {
        enumerable: !0,
        get: function () {
          return c.useOutlet;
        },
      }),
      Object.defineProperty(e, 'useOutletContext', {
        enumerable: !0,
        get: function () {
          return c.useOutletContext;
        },
      }),
      Object.defineProperty(e, 'useParams', {
        enumerable: !0,
        get: function () {
          return c.useParams;
        },
      }),
      Object.defineProperty(e, 'useResolvedPath', {
        enumerable: !0,
        get: function () {
          return c.useResolvedPath;
        },
      }),
      Object.defineProperty(e, 'useRoutes', {
        enumerable: !0,
        get: function () {
          return c.useRoutes;
        },
      }),
      (e.BrowserRouter = function (L) {
        let { basename: d, children: S, window: k } = L,
          F = a.useRef();
        F.current == null &&
          (F.current = r.createBrowserHistory({ window: k }));
        let R = F.current,
          [U, J] = a.useState({ action: R.action, location: R.location });
        return (
          a.useLayoutEffect(() => R.listen(J), [R]),
          a.createElement(c.Router, {
            basename: d,
            children: S,
            location: U.location,
            navigationType: U.action,
            navigator: R,
          })
        );
      }),
      (e.HashRouter = function (L) {
        let { basename: d, children: S, window: k } = L,
          F = a.useRef();
        F.current == null && (F.current = r.createHashHistory({ window: k }));
        let R = F.current,
          [U, J] = a.useState({ action: R.action, location: R.location });
        return (
          a.useLayoutEffect(() => R.listen(J), [R]),
          a.createElement(c.Router, {
            basename: d,
            children: S,
            location: U.location,
            navigationType: U.action,
            navigator: R,
          })
        );
      }),
      (e.Link = m),
      (e.NavLink = u),
      (e.createSearchParams = x),
      (e.unstable_HistoryRouter = function (L) {
        let { basename: d, children: S, history: k } = L,
          [F, R] = a.useState({ action: k.action, location: k.location });
        return (
          a.useLayoutEffect(() => k.listen(R), [k]),
          a.createElement(c.Router, {
            basename: d,
            children: S,
            location: F.location,
            navigationType: F.action,
            navigator: k,
          })
        );
      }),
      (e.useLinkClickHandler = p),
      (e.useSearchParams = function (L) {
        let d = a.useRef(x(L)),
          S = c.useLocation(),
          k = a.useMemo(() => {
            let R = x(S.search);
            for (let U of d.current.keys())
              R.has(U) ||
                d.current.getAll(U).forEach((J) => {
                  R.append(U, J);
                });
            return R;
          }, [S.search]),
          F = c.useNavigate();
        return [
          k,
          a.useCallback(
            (R, U) => {
              F('?' + x(R), U);
            },
            [F]
          ),
        ];
      }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
var W3 = K((xs, w9) => {
  'use strict';
  w();
  w9.exports = y9();
});
var I5 = K((Z2) => {
  'use strict';
  w();
  Object.defineProperty(Z2, '__esModule', { value: !0 });
  var N9 = A1();
  function At(e) {
    return e && typeof e == 'object' && 'default' in e ? e : { default: e };
  }
  var g1 = At(N9),
    k9 = class extends g1.default.Component {
      constructor(a) {
        super(a);
        this.state = { error: a.error || null, location: a.location };
      }
      static getDerivedStateFromError(a) {
        return { error: a };
      }
      static getDerivedStateFromProps(a, r) {
        return r.location !== a.location
          ? { error: a.error || null, location: a.location }
          : { error: a.error || r.error, location: r.location };
      }
      render() {
        return this.state.error
          ? g1.default.createElement(this.props.component, {
              error: this.state.error,
            })
          : this.props.children;
      }
    };
  function Pt({ error: e }) {
    return (
      console.error(e),
      g1.default.createElement(
        'html',
        { lang: 'en' },
        g1.default.createElement(
          'head',
          null,
          g1.default.createElement('meta', { charSet: 'utf-8' }),
          g1.default.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          g1.default.createElement('title', null, 'Application Error!')
        ),
        g1.default.createElement(
          'body',
          null,
          g1.default.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            g1.default.createElement(
              'h1',
              { style: { fontSize: '24px' } },
              'Application Error'
            ),
            g1.default.createElement(
              'pre',
              {
                style: {
                  padding: '2rem',
                  background: 'hsla(10, 50%, 50%, 0.1)',
                  color: 'red',
                  overflow: 'auto',
                },
              },
              e.stack
            )
          ),
          g1.default.createElement('script', {
            dangerouslySetInnerHTML: {
              __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `,
            },
          })
        )
      )
    );
  }
  var A9 = g1.default.createContext(void 0);
  function P9() {
    return N9.useContext(A9);
  }
  function Rt({ catch: e, component: a, children: r }) {
    return e
      ? g1.default.createElement(
          A9.Provider,
          { value: e },
          g1.default.createElement(a, null)
        )
      : g1.default.createElement(g1.default.Fragment, null, r);
  }
  function Tt() {
    let e = P9();
    return g1.default.createElement(
      'html',
      { lang: 'en' },
      g1.default.createElement(
        'head',
        null,
        g1.default.createElement('meta', { charSet: 'utf-8' }),
        g1.default.createElement('meta', {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,viewport-fit=cover',
        }),
        g1.default.createElement('title', null, 'Unhandled Thrown Response!')
      ),
      g1.default.createElement(
        'body',
        null,
        g1.default.createElement(
          'h1',
          { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
          e.status,
          ' ',
          e.statusText
        ),
        g1.default.createElement('script', {
          dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `,
          },
        })
      )
    );
  }
  Z2.RemixCatchBoundary = Rt;
  Z2.RemixErrorBoundary = k9;
  Z2.RemixRootDefaultCatchBoundary = Tt;
  Z2.RemixRootDefaultErrorBoundary = Pt;
  Z2.useCatch = P9;
});
var G3 = K((bs, R9) => {
  'use strict';
  w();
  function Ft(e, a) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(a);
  }
  R9.exports = Ft;
});
var j5 = K((U5) => {
  'use strict';
  w();
  Object.defineProperty(U5, '__esModule', { value: !0 });
  function Et(e) {
    if (e && e.__esModule) return e;
    var a = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          if (r !== 'default') {
            var c = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              a,
              r,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }
            );
          }
        }),
      (a.default = e),
      Object.freeze(a)
    );
  }
  async function Bt(e, a) {
    if (e.id in a) return a[e.id];
    try {
      let r = await (function (c) {
        return Promise.resolve().then(function () {
          return Et(W0(c));
        });
      })(e.module);
      return (a[e.id] = r), r;
    } catch {
      return window.location.reload(), new Promise(() => {});
    }
  }
  U5.loadRouteModule = Bt;
});
var $5 = K((s2) => {
  'use strict';
  w();
  Object.defineProperty(s2, '__esModule', { value: !0 });
  var Dt = k2(),
    Ot = j5();
  function _t(e, a, r) {
    let c = e
        .map((n) => {
          var t;
          let o = a[n.route.id];
          return (
            ((t = o.links) === null || t === void 0 ? void 0 : t.call(o)) || []
          );
        })
        .flat(1),
      C = $t(e, r);
    return F9(c, C);
  }
  async function qt(e) {
    if (!e.links) return;
    let a = e.links();
    if (!a) return;
    let r = [];
    for (let C of a)
      !W5(C) &&
        C.rel === 'stylesheet' &&
        r.push(w1(L1({}, C), { rel: 'preload', as: 'style' }));
    let c = r.filter((C) => !C.media || window.matchMedia(C.media).matches);
    await Promise.all(c.map(It));
  }
  async function It(e) {
    return new Promise((a) => {
      let r = document.createElement('link');
      Object.assign(r, e);
      function c() {
        document.head.contains(r) && document.head.removeChild(r);
      }
      (r.onload = () => {
        c(), a();
      }),
        (r.onerror = () => {
          c(), a();
        }),
        document.head.appendChild(r);
    });
  }
  function W5(e) {
    return e != null && typeof e.page == 'string';
  }
  function T9(e) {
    return e == null
      ? !1
      : e.href == null
      ? e.rel === 'preload' &&
        (typeof e.imageSrcSet == 'string' ||
          typeof e.imagesrcset == 'string') &&
        (typeof e.imageSizes == 'string' || typeof e.imagesizes == 'string')
      : typeof e.rel == 'string' && typeof e.href == 'string';
  }
  async function Ut(e, a) {
    return (
      await Promise.all(
        e.map(async (c) => {
          let C = await Ot.loadRouteModule(c.route, a);
          return C.links ? C.links() : [];
        })
      )
    )
      .flat(1)
      .filter(T9)
      .filter((c) => c.rel === 'stylesheet' || c.rel === 'preload')
      .map((c) =>
        c.rel === 'preload'
          ? w1(L1({}, c), { rel: 'prefetch' })
          : w1(L1({}, c), { rel: 'prefetch', as: 'style' })
      );
  }
  function jt(e, a, r, c, C) {
    let n = E9(e),
      t = (u, p) => (r[p] ? u.route.id !== r[p].route.id : !0),
      o = (u, p) => {
        var x;
        return (
          r[p].pathname !== u.pathname ||
          (((x = r[p].route.path) === null || x === void 0
            ? void 0
            : x.endsWith('*')) &&
            r[p].params['*'] !== u.params['*'])
        );
      };
    return C === 'data' && c.search !== n.search
      ? a.filter((u, p) =>
          u.route.hasLoader
            ? t(u, p) || o(u, p)
              ? !0
              : u.route.shouldReload
              ? u.route.shouldReload({
                  params: u.params,
                  prevUrl: new URL(
                    c.pathname + c.search + c.hash,
                    window.origin
                  ),
                  url: new URL(e, window.origin),
                })
              : !0
            : !1
        )
      : a.filter(
          (u, p) =>
            (C === 'assets' || u.route.hasLoader) && (t(u, p) || o(u, p))
        );
  }
  function Wt(e, a, r) {
    let c = E9(e);
    return G5(
      a
        .filter((C) => r.routes[C.route.id].hasLoader)
        .map((C) => {
          let { pathname: n, search: t } = c,
            o = new URLSearchParams(t);
          return o.set('_data', C.route.id), `${n}?${o}`;
        })
    );
  }
  function Gt(e, a) {
    return G5(
      e
        .map((r) => {
          let c = a.routes[r.route.id],
            C = [c.module];
          return c.imports && (C = C.concat(c.imports)), C;
        })
        .flat(1)
    );
  }
  function $t(e, a) {
    return G5(
      e
        .map((r) => {
          let c = a.routes[r.route.id],
            C = [c.module];
          return c.imports && (C = C.concat(c.imports)), C;
        })
        .flat(1)
    );
  }
  function G5(e) {
    return [...new Set(e)];
  }
  function F9(e, a) {
    let r = new Set(),
      c = new Set(a);
    return e.reduce((C, n) => {
      if (!W5(n) && n.as === 'script' && n.href && c.has(n.href)) return C;
      let o = JSON.stringify(n);
      return r.has(o) || (r.add(o), C.push(n)), C;
    }, []);
  }
  function E9(e) {
    let a = Dt.parsePath(e);
    return a.search === void 0 && (a.search = ''), a;
  }
  s2.dedupe = F9;
  s2.getDataLinkHrefs = Wt;
  s2.getLinksForMatches = _t;
  s2.getModuleLinkHrefs = Gt;
  s2.getNewMatchesForLinks = jt;
  s2.getStylesheetPrefetchLinks = Ut;
  s2.isHtmlLinkDescriptor = T9;
  s2.isPageLinkDescriptor = W5;
  s2.prefetchStyleLinks = qt;
});
var B9 = K((Y5) => {
  'use strict';
  w();
  Object.defineProperty(Y5, '__esModule', { value: !0 });
  function Yt(e) {
    return { __html: e };
  }
  Y5.createHtml = Yt;
});
var O9 = K((e3) => {
  'use strict';
  w();
  Object.defineProperty(e3, '__esModule', { value: !0 });
  var Xt = G3();
  function Kt(e) {
    return e instanceof Response && e.headers.get('X-Remix-Catch') != null;
  }
  function D9(e) {
    return e instanceof Response && e.headers.get('X-Remix-Error') != null;
  }
  function Jt(e) {
    return e instanceof Response && e.headers.get('X-Remix-Redirect') != null;
  }
  async function Qt(e, a, r, c) {
    e.searchParams.set('_data', a);
    let C = c ? ei(c, r) : { credentials: 'same-origin', signal: r },
      n = await fetch(e.href, C);
    if (D9(n)) {
      let t = await n.json(),
        o = new Error(t.message);
      return (o.stack = t.stack), o;
    }
    return n;
  }
  async function Zt(e) {
    let a = e.headers.get('Content-Type');
    return a && /\bapplication\/json\b/.test(a) ? e.json() : e.text();
  }
  function ei(e, a) {
    let { encType: r, method: c, formData: C } = e,
      n,
      t = C;
    if (r === 'application/x-www-form-urlencoded') {
      t = new URLSearchParams();
      for (let [o, m] of C)
        Xt(
          typeof m == 'string',
          'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
        ),
          t.append(o, m);
      n = { 'Content-Type': r };
    }
    return {
      method: c,
      body: t,
      signal: a,
      credentials: 'same-origin',
      headers: n,
    };
  }
  e3.extractData = Zt;
  e3.fetchData = Qt;
  e3.isCatchResponse = Kt;
  e3.isErrorResponse = D9;
  e3.isRedirectResponse = Jt;
});
var K5 = K((X5) => {
  'use strict';
  w();
  Object.defineProperty(X5, '__esModule', { value: !0 });
  var ai = W3();
  function ri(e, a) {
    let r = ai.matchRoutes(e, a);
    return r
      ? r.map((c) => ({
          params: c.params,
          pathname: c.pathname,
          route: c.route,
        }))
      : null;
  }
  X5.matchClientRoutes = ri;
});
var c8 = K((c3) => {
  'use strict';
  w();
  Object.defineProperty(c3, '__esModule', { value: !0 });
  var ci = k2(),
    J5 = K5(),
    W2 = G3(),
    a8 = class {
      constructor(a, r, c) {
        (this.status = a), (this.statusText = r), (this.data = c);
      }
    };
  function _9(e) {
    return ['POST', 'PUT', 'PATCH', 'DELETE'].includes(e.method);
  }
  function q9(e) {
    return e.method === 'GET';
  }
  function Y4(e) {
    return Boolean(e.state) && e.state.isRedirect;
  }
  function Ci(e) {
    return Y4(e) && e.state.type === 'loader';
  }
  function I9(e) {
    return Y4(e) && e.state.type === 'action';
  }
  function ni(e) {
    return Y4(e) && e.state.type === 'fetchAction';
  }
  function ti(e) {
    return Y4(e) && e.state.type === 'loaderSubmission';
  }
  var r8 = class {
      constructor(a, r) {
        (this.setCookie = r),
          (this.location = typeof a == 'string' ? a : a.pathname + a.search);
      }
    },
    G2 = { state: 'idle', submission: void 0, location: void 0, type: 'idle' },
    $9 = { state: 'idle', type: 'init', data: void 0, submission: void 0 };
  function ii(e) {
    let { routes: a } = e,
      r,
      c = new Map(),
      C = 0,
      n = -1,
      t = new Map(),
      o = new Set(),
      m = J5.matchClientRoutes(a, e.location);
    m || (m = [{ params: {}, pathname: '', route: a[0] }]);
    let u = {
      location: e.location,
      loaderData: e.loaderData || {},
      actionData: e.actionData,
      catch: e.catch,
      error: e.error,
      catchBoundaryId: e.catchBoundaryId || null,
      errorBoundaryId: e.errorBoundaryId || null,
      matches: m,
      nextMatches: void 0,
      transition: G2,
      fetchers: new Map(),
    };
    function p(H) {
      H.transition && H.transition === G2 && (r = void 0),
        (u = Object.assign({}, u, H)),
        e.onChange(u);
    }
    function x() {
      return u;
    }
    function L(H) {
      return u.fetchers.get(H) || $9;
    }
    function d(H, N) {
      u.fetchers.set(H, N);
    }
    function S(H) {
      c.has(H) && q(H), t.delete(H), o.delete(H), u.fetchers.delete(H);
    }
    async function k(H) {
      switch (H.type) {
        case 'navigation': {
          let { action: N, location: A, submission: X } = H,
            a1 = J5.matchClientRoutes(a, A);
          a1
            ? !X && V(A)
              ? await D(A, a1)
              : N === ci.Action.Pop
              ? await W(A, a1)
              : X && _9(X)
              ? await o1(A, X, a1)
              : X && q9(X)
              ? await j(A, X, a1)
              : I9(A)
              ? await b(A, a1)
              : ti(A)
              ? await h(A, a1)
              : Ci(A)
              ? await f(A, a1)
              : ni(A)
              ? await M(A, a1)
              : await W(A, a1)
            : ((a1 = [{ params: {}, pathname: '', route: a[0] }]),
              await n1(A, a1)),
            (n = -1);
          break;
        }
        case 'fetcher': {
          let { key: N, submission: A, href: X } = H,
            a1 = J5.matchClientRoutes(a, X);
          W2(a1, 'No matches found'), c.has(N) && q(N);
          let h1 = U(new URL(X, window.location.href), a1);
          A && _9(A)
            ? await J(N, A, h1)
            : A && q9(A)
            ? await C1(X, N, A, h1)
            : await s1(X, N, h1);
          break;
        }
        default:
          throw new Error(`Unknown data event type: ${H.type}`);
      }
    }
    function F() {
      T();
      for (let [, H] of c) H.abort();
    }
    function R(H) {
      for (let N of H.searchParams.getAll('index')) if (N === '') return !0;
      return !1;
    }
    function U(H, N) {
      let A = N.slice(-1)[0];
      return !R(H) && A.route.index ? N.slice(-2)[0] : A;
    }
    async function J(H, N, A) {
      let X = u.fetchers.get(H),
        a1 = {
          state: 'submitting',
          type: 'actionSubmission',
          submission: N,
          data: (X == null ? void 0 : X.data) || void 0,
        };
      d(H, a1), p({ fetchers: new Map(u.fetchers) });
      let h1 = new AbortController();
      c.set(H, h1);
      let l1 = await j9(N, A, h1.signal);
      if (h1.signal.aborted) return;
      if ($3(l1)) {
        let v2 = {
          isRedirect: !0,
          type: 'fetchAction',
          setCookie: l1.value.setCookie,
        };
        o.add(H),
          e.onRedirect(l1.value.location, v2),
          d(H, {
            state: 'loading',
            type: 'actionRedirect',
            submission: N,
            data: void 0,
          }),
          p({ fetchers: new Map(u.fetchers) });
        return;
      }
      if (Q(A, H, l1) || (await f1(A, H, l1))) return;
      let z1 = {
        state: 'loading',
        type: 'actionReload',
        data: l1.value,
        submission: N,
      };
      d(H, z1), p({ fetchers: new Map(u.fetchers) });
      let N1 = G4(l1) ? l1 : void 0,
        y1 = Y3(l1) ? l1 : void 0,
        B1 = ++C;
      t.set(H, B1);
      let k1 = u.nextMatches || u.matches,
        D1 = await U9(
          u,
          u.transition.location || u.location,
          k1,
          h1.signal,
          N1,
          y1,
          N,
          A.route.id,
          z1
        );
      if (h1.signal.aborted) return;
      t.delete(H), c.delete(H);
      let E2 = W9(D1);
      if (E2) {
        let v2 = { isRedirect: !0, type: 'loader', setCookie: E2.setCookie };
        e.onRedirect(E2.location, v2);
        return;
      }
      let [s3, B2] = G9(D1, u.matches, N1),
        [h2, E6] = (await Q5(D1, u.matches, y1)) || [],
        B6 = {
          state: 'idle',
          type: 'done',
          data: l1.value,
          submission: void 0,
        };
      d(H, B6);
      let m2 = e1(B1);
      if ((m2 && G(m2), Y(B1))) {
        let { transition: v2 } = u;
        W2(v2.state === 'loading', 'Expected loading transition'),
          p({
            location: v2.location,
            matches: u.nextMatches,
            error: s3,
            errorBoundaryId: B2,
            catch: h2,
            catchBoundaryId: E6,
            loaderData: Z5(u, D1, k1),
            actionData: v2.type === 'actionReload' ? u.actionData : void 0,
            transition: G2,
            fetchers: new Map(u.fetchers),
          });
      } else
        p({
          fetchers: new Map(u.fetchers),
          error: s3,
          errorBoundaryId: B2,
          loaderData: Z5(u, D1, k1),
        });
    }
    function Y(H) {
      return u.transition.state === 'loading' && n < H ? (T(), !0) : !1;
    }
    function G(H) {
      for (let N of H) {
        let A = L(N),
          X = { state: 'idle', type: 'done', data: A.data, submission: void 0 };
        d(N, X);
      }
    }
    function e1(H) {
      let N = [];
      for (let [A, X] of t)
        if (X < H) {
          let a1 = u.fetchers.get(A);
          W2(a1, `Expected fetcher: ${A}`),
            a1.state === 'loading' && (q(A), t.delete(A), N.push(A));
        }
      return N.length ? N : !1;
    }
    async function C1(H, N, A, X) {
      let a1 = u.fetchers.get(N),
        h1 = {
          state: 'submitting',
          type: 'loaderSubmission',
          submission: A,
          data: (a1 == null ? void 0 : a1.data) || void 0,
        };
      d(N, h1), p({ fetchers: new Map(u.fetchers) });
      let l1 = new AbortController();
      c.set(N, l1);
      let z1 = await e8(X, r3(H), l1.signal);
      if ((c.delete(N), l1.signal.aborted)) return;
      if ($3(z1)) {
        let y1 = {
          isRedirect: !0,
          type: 'loader',
          setCookie: z1.value.setCookie,
        };
        e.onRedirect(z1.value.location, y1);
        return;
      }
      if (Q(X, N, z1) || (await f1(X, N, z1))) return;
      let N1 = {
        state: 'idle',
        type: 'done',
        data: z1.value,
        submission: void 0,
      };
      d(N, N1), p({ fetchers: new Map(u.fetchers) });
    }
    async function s1(H, N, A) {
      if (typeof AbortController > 'u')
        throw new Error(
          "handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback."
        );
      let X = u.fetchers.get(N),
        a1 = {
          state: 'loading',
          type: 'normalLoad',
          submission: void 0,
          data: (X == null ? void 0 : X.data) || void 0,
        };
      d(N, a1), p({ fetchers: new Map(u.fetchers) });
      let h1 = new AbortController();
      c.set(N, h1);
      let l1 = await e8(A, r3(H), h1.signal);
      if (h1.signal.aborted) return;
      if ((c.delete(N), $3(l1))) {
        let N1 = {
          isRedirect: !0,
          type: 'loader',
          setCookie: l1.value.setCookie,
        };
        e.onRedirect(l1.value.location, N1);
        return;
      }
      if (Q(A, N, l1) || (await f1(A, N, l1))) return;
      let z1 = {
        state: 'idle',
        type: 'done',
        data: l1.value,
        submission: void 0,
      };
      d(N, z1), p({ fetchers: new Map(u.fetchers) });
    }
    async function f1(H, N, A) {
      if (Y3(A)) {
        let X = $4(H, u.matches);
        return (
          u.fetchers.delete(N),
          p({
            transition: G2,
            fetchers: new Map(u.fetchers),
            catch: {
              data: A.value.data,
              status: A.value.status,
              statusText: A.value.statusText,
            },
            catchBoundaryId: X,
          }),
          !0
        );
      }
      return !1;
    }
    function Q(H, N, A) {
      if (G4(A)) {
        let X = W4(H, u.matches);
        return (
          u.fetchers.delete(N),
          p({
            fetchers: new Map(u.fetchers),
            error: A.value,
            errorBoundaryId: X,
          }),
          !0
        );
      }
      return !1;
    }
    async function n1(H, N) {
      T(),
        p({
          transition: {
            state: 'loading',
            type: 'normalLoad',
            submission: void 0,
            location: H,
          },
          nextMatches: N,
        }),
        await Promise.resolve();
      let X = $4(N[0], N);
      p({
        location: H,
        matches: N,
        catch: { data: null, status: 404, statusText: 'Not Found' },
        catchBoundaryId: X,
        transition: G2,
      });
    }
    async function o1(H, N, A) {
      T(),
        p({
          transition: {
            state: 'submitting',
            type: 'actionSubmission',
            submission: N,
            location: H,
          },
          nextMatches: A,
        });
      let a1 = new AbortController();
      r = a1;
      let h1 = A;
      !R(r3(N.action)) &&
        h1[A.length - 1].route.index &&
        (h1 = h1.slice(0, -1));
      let l1 = h1.slice(-1)[0],
        z1 = await j9(N, l1, a1.signal);
      if (a1.signal.aborted) return;
      if ($3(z1)) {
        let k1 = {
          isRedirect: !0,
          type: 'action',
          setCookie: z1.value.setCookie,
        };
        e.onRedirect(z1.value.location, k1);
        return;
      }
      let N1, y1;
      Y3(z1) && ([N1, y1] = (await Q5([z1], h1, z1)) || []),
        p({
          transition: {
            state: 'loading',
            type: 'actionReload',
            submission: N,
            location: H,
          },
          actionData: { [l1.route.id]: z1.value },
        }),
        await E(H, A, N, l1.route.id, z1, N1, y1);
    }
    async function j(H, N, A) {
      T(),
        p({
          transition: {
            state: 'submitting',
            type: 'loaderSubmission',
            submission: N,
            location: H,
          },
          nextMatches: A,
        }),
        await E(H, A, N);
    }
    async function D(H, N) {
      T(),
        p({
          transition: {
            state: 'loading',
            type: 'normalLoad',
            submission: void 0,
            location: H,
          },
          nextMatches: N,
        }),
        await Promise.resolve(),
        p({ location: H, matches: N, transition: G2 });
    }
    async function W(H, N) {
      T(),
        p({
          transition: {
            state: 'loading',
            type: 'normalLoad',
            submission: void 0,
            location: H,
          },
          nextMatches: N,
        }),
        await E(H, N);
    }
    async function f(H, N) {
      T(),
        p({
          transition: {
            state: 'loading',
            type: 'normalRedirect',
            submission: void 0,
            location: H,
          },
          nextMatches: N,
        }),
        await E(H, N);
    }
    async function h(H, N) {
      T(),
        W2(
          u.transition.type === 'loaderSubmission',
          `Unexpected transition: ${JSON.stringify(u.transition)}`
        );
      let { submission: A } = u.transition;
      p({
        transition: {
          state: 'loading',
          type: 'loaderSubmissionRedirect',
          submission: A,
          location: H,
        },
        nextMatches: N,
      }),
        await E(H, N, A);
    }
    async function M(H, N) {
      T(),
        p({
          transition: {
            state: 'loading',
            type: 'fetchActionRedirect',
            submission: void 0,
            location: H,
          },
          nextMatches: N,
        }),
        await E(H, N);
    }
    async function b(H, N) {
      T(),
        W2(
          u.transition.type === 'actionSubmission' ||
            u.transition.type === 'actionReload' ||
            u.transition.type === 'actionRedirect',
          `Unexpected transition: ${JSON.stringify(u.transition)}`
        );
      let { submission: A } = u.transition;
      p({
        transition: {
          state: 'loading',
          type: 'actionRedirect',
          submission: A,
          location: H,
        },
        nextMatches: N,
      }),
        await E(H, N, A);
    }
    function V(H) {
      return a3(u.location) === a3(H) && u.location.hash !== H.hash;
    }
    async function E(H, N, A, X, a1, h1, l1) {
      let z1 = a1 && G4(a1) ? a1 : void 0,
        N1 = a1 && Y3(a1) ? a1 : void 0,
        y1 = new AbortController();
      (r = y1), (n = ++C);
      let B1 = await U9(u, H, N, y1.signal, z1, N1, A, X, void 0, l1);
      if (y1.signal.aborted) return;
      let k1 = W9(B1);
      if (k1) {
        if (u.transition.type === 'actionReload' || I9(H)) {
          let h2 = { isRedirect: !0, type: 'action', setCookie: k1.setCookie };
          e.onRedirect(k1.location, h2);
        } else if (u.transition.type === 'loaderSubmission') {
          let h2 = {
            isRedirect: !0,
            type: 'loaderSubmission',
            setCookie: k1.setCookie,
          };
          e.onRedirect(k1.location, h2);
        } else {
          var D1;
          let h2 = {
            isRedirect: !0,
            type: 'loader',
            setCookie:
              k1.setCookie ||
              ((D1 = H.state) === null || D1 === void 0
                ? void 0
                : D1.setCookie) === !0,
          };
          e.onRedirect(k1.location, h2);
        }
        return;
      }
      let [E2, s3] = G9(B1, N, z1);
      ([h1, l1] = (await Q5(B1, N, z1)) || [h1, l1]), O();
      let B2 = e1(n);
      B2 && G(B2),
        p({
          location: H,
          matches: N,
          error: E2,
          errorBoundaryId: s3,
          catch: h1,
          catchBoundaryId: l1,
          loaderData: Z5(u, B1, N),
          actionData:
            u.transition.type === 'actionReload' ? u.actionData : void 0,
          transition: G2,
          fetchers: B2 ? new Map(u.fetchers) : u.fetchers,
        });
    }
    function T() {
      r && r.abort();
    }
    function q(H) {
      let N = c.get(H);
      W2(N, `Expected fetch controller: ${H}`), N.abort(), c.delete(H);
    }
    function O() {
      let H = [];
      for (let N of o) {
        let A = u.fetchers.get(N);
        W2(A, `Expected fetcher: ${N}`),
          A.type === 'actionRedirect' && (o.delete(N), H.push(N));
      }
      G(H);
    }
    return {
      send: k,
      getState: x,
      getFetcher: L,
      deleteFetcher: S,
      dispose: F,
      get _internalFetchControllers() {
        return c;
      },
    };
  }
  async function U9(e, a, r, c, C, n, t, o, m, u) {
    let p = r3(a3(a)),
      x = oi(e, a, r, C, n, t, o, m, u);
    return Promise.all(x.map((L) => e8(L, p, c)));
  }
  async function e8(e, a, r) {
    W2(e.route.loader, `Expected loader for ${e.route.id}`);
    try {
      let { params: c } = e,
        C = await e.route.loader({ params: c, url: a, signal: r });
      return { match: e, value: C };
    } catch (c) {
      return { match: e, value: c };
    }
  }
  async function j9(e, a, r) {
    try {
      let c = await a.route.action({
        url: r3(e.action),
        params: a.params,
        submission: e,
        signal: r,
      });
      return { match: a, value: c };
    } catch (c) {
      return { match: a, value: c };
    }
  }
  function oi(e, a, r, c, C, n, t, o, m) {
    var u;
    if (m || (t && (C || c))) {
      let k = !1;
      r = r.filter((F) =>
        k ? !1 : F.route.id === t || F.route.id === m ? ((k = !0), !1) : !0
      );
    }
    let p = (k, F) =>
        e.matches[F] ? k.route.id !== e.matches[F].route.id : !0,
      x = (k, F) => {
        var R;
        return (
          e.matches[F].pathname !== k.pathname ||
          (((R = e.matches[F].route.path) === null || R === void 0
            ? void 0
            : R.endsWith('*')) &&
            e.matches[F].params['*'] !== k.params['*'])
        );
      },
      L = r3(a3(a)),
      d = (k, F) => {
        if (!k.route.loader) return !1;
        if (p(k, F) || x(k, F)) return !0;
        if (k.route.shouldReload) {
          let R = r3(a3(e.location));
          return k.route.shouldReload({
            prevUrl: R,
            url: L,
            submission: n,
            params: k.params,
          });
        }
        return !0;
      };
    return e.matches.length === 1
      ? r.filter((k) => !!k.route.loader)
      : (o == null ? void 0 : o.type) === 'actionReload' ||
        e.transition.type === 'actionReload' ||
        e.transition.type === 'actionRedirect' ||
        e.transition.type === 'fetchActionRedirect' ||
        a3(L) === a3(e.location) ||
        L.searchParams.toString() !== e.location.search.substring(1) ||
        ((u = a.state) !== null && u !== void 0 && u.setCookie)
      ? r.filter(d)
      : r.filter((k, F, R) => {
          var U;
          return (c || C) && R.length - 1 === F
            ? !1
            : k.route.loader &&
                (p(k, F) ||
                  x(k, F) ||
                  ((U = a.state) === null || U === void 0
                    ? void 0
                    : U.setCookie));
        });
  }
  function $3(e) {
    return e.value instanceof r8;
  }
  function a3(e) {
    return e.pathname + e.search;
  }
  function W9(e) {
    for (let a of e) if ($3(a)) return a.value;
    return null;
  }
  async function Q5(e, a, r) {
    let c;
    for (let n of e)
      if (Y3(n)) {
        c = n;
        break;
      }
    let C = async (n) => ({
      status: n.status,
      statusText: n.statusText,
      data: n.data,
    });
    if (r && c) {
      let n = $4(c.match, a);
      return [await C(r.value), n];
    }
    if (c) {
      let n = $4(c.match, a);
      return [await C(c.value), n];
    }
    return null;
  }
  function G9(e, a, r) {
    let c;
    for (let C of e)
      if (G4(C)) {
        c = C;
        break;
      }
    if (r && c) {
      let C = W4(c.match, a);
      return [r.value, C];
    }
    if (r) {
      let C = W4(r.match, a);
      return [r.value, C];
    }
    if (c) {
      let C = W4(c.match, a);
      return [c.value, C];
    }
    return [void 0, void 0];
  }
  function $4(e, a) {
    let r = null;
    for (let c of a)
      if ((c.route.CatchBoundary && (r = c.route.id), c === e)) break;
    return r;
  }
  function W4(e, a) {
    let r = null;
    for (let c of a)
      if ((c.route.ErrorBoundary && (r = c.route.id), c === e)) break;
    return r;
  }
  function Z5(e, a, r) {
    let c = {};
    for (let { match: n, value: t } of a) c[n.route.id] = t;
    let C = {};
    for (let { route: n } of r) {
      let t = c[n.id] !== void 0 ? c[n.id] : e.loaderData[n.id];
      t !== void 0 && (C[n.id] = t);
    }
    return C;
  }
  function Y3(e) {
    return e.value instanceof a8;
  }
  function G4(e) {
    return e.value instanceof Error;
  }
  function r3(e) {
    return new URL(e, window.location.origin);
  }
  c3.CatchValue = a8;
  c3.IDLE_FETCHER = $9;
  c3.IDLE_TRANSITION = G2;
  c3.TransitionRedirect = r8;
  c3.createTransitionManager = ii;
});
var J9 = K((X4) => {
  'use strict';
  w();
  Object.defineProperty(X4, '__esModule', { value: !0 });
  var fi = A1(),
    li = j5(),
    A2 = O9(),
    n8 = c8(),
    si = $5(),
    ui = G3();
  function hi(e) {
    if (e && e.__esModule) return e;
    var a = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          if (r !== 'default') {
            var c = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              a,
              r,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }
            );
          }
        }),
      (a.default = e),
      Object.freeze(a)
    );
  }
  var mi = hi(fi);
  function Y9(e, a, r) {
    return {
      caseSensitive: !!e.caseSensitive,
      element: mi.createElement(r, { id: e.id }),
      id: e.id,
      path: e.path,
      index: e.index,
      module: e.module,
      loader: zi(e, a),
      action: pi(e, a),
      shouldReload: vi(e, a),
      ErrorBoundary: e.hasErrorBoundary,
      CatchBoundary: e.hasCatchBoundary,
      hasLoader: e.hasLoader,
    };
  }
  function X9(e, a, r, c) {
    return Object.keys(e)
      .filter((C) => e[C].parentId === c)
      .map((C) => {
        let n = Y9(e[C], a, r),
          t = X9(e, a, r, n.id);
        return t.length > 0 && (n.children = t), n;
      });
  }
  function vi(e, a) {
    return (c) => {
      let C = a[e.id];
      return (
        ui(C, `Expected route module to be loaded for ${e.id}`),
        C.unstable_shouldReload ? C.unstable_shouldReload(c) : !0
      );
    };
  }
  async function C8(e, a) {
    let r = await li.loadRouteModule(e, a);
    return await si.prefetchStyleLinks(r), r;
  }
  function zi(e, a) {
    return async ({ url: c, signal: C, submission: n }) => {
      if (e.hasLoader) {
        let [t] = await Promise.all([A2.fetchData(c, e.id, C, n), C8(e, a)]);
        if (t instanceof Error) throw t;
        let o = await K9(t);
        if (o) return o;
        if (A2.isCatchResponse(t))
          throw new n8.CatchValue(
            t.status,
            t.statusText,
            await A2.extractData(t)
          );
        return A2.extractData(t);
      } else await C8(e, a);
    };
  }
  function pi(e, a) {
    return async ({ url: c, signal: C, submission: n }) => {
      e.hasAction ||
        console.error(
          `Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`
        );
      let t = await A2.fetchData(c, e.id, C, n);
      if (t instanceof Error) throw t;
      let o = await K9(t);
      if (o) return o;
      if ((await C8(e, a), A2.isCatchResponse(t)))
        throw new n8.CatchValue(
          t.status,
          t.statusText,
          await A2.extractData(t)
        );
      return A2.extractData(t);
    };
  }
  async function K9(e) {
    if (A2.isRedirectResponse(e)) {
      let a = new URL(
        e.headers.get('X-Remix-Redirect'),
        window.location.origin
      );
      if (a.origin !== window.location.origin)
        await new Promise(() => {
          window.location.replace(a.href);
        });
      else
        return new n8.TransitionRedirect(
          a.pathname + a.search + a.hash,
          e.headers.get('X-Remix-Revalidate') !== null
        );
    }
    return null;
  }
  X4.createClientRoute = Y9;
  X4.createClientRoutes = X9;
});
var K3 = K((x1) => {
  'use strict';
  w();
  Object.defineProperty(x1, '__esModule', { value: !0 });
  var q1 = H9(),
    Mi = A1(),
    u2 = W3(),
    S3 = I5(),
    X3 = G3(),
    C3 = $5(),
    Q9 = B9(),
    di = J9(),
    re = K5(),
    Li = c8();
  function Hi(e) {
    if (e && e.__esModule) return e;
    var a = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          if (r !== 'default') {
            var c = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              a,
              r,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }
            );
          }
        }),
      (a.default = e),
      Object.freeze(a)
    );
  }
  var I = Hi(Mi),
    i8 = I.createContext(void 0);
  function X1() {
    let e = I.useContext(i8);
    return X3(e, 'You must render this element inside a <Remix> element'), e;
  }
  function Vi({
    context: e,
    action: a,
    location: r,
    navigator: c,
    static: C = !1,
  }) {
    let {
        manifest: n,
        routeData: t,
        actionData: o,
        routeModules: m,
        serverHandoffString: u,
        appState: p,
      } = e,
      x = I.useMemo(() => di.createClientRoutes(n.routes, m, ne), [n, m]),
      [L, d] = I.useState(p),
      [S] = I.useState(() =>
        Li.createTransitionManager({
          routes: x,
          actionData: o,
          loaderData: t,
          location: r,
          catch: p.catch,
          catchBoundaryId: p.catchBoundaryRouteId,
          onRedirect: c.replace,
          onChange: (e1) => {
            d({
              catch: e1.catch,
              error: e1.error,
              catchBoundaryRouteId: e1.catchBoundaryId,
              loaderBoundaryRouteId: e1.errorBoundaryId,
              renderBoundaryRouteId: null,
              trackBoundaries: !1,
              trackCatchBoundaries: !1,
            });
          },
        })
      ),
      k = I.useMemo(() => {
        let e1 = (C1, s1) =>
          S.getState().transition.state !== 'idle'
            ? c.replace(C1, s1)
            : c.push(C1, s1);
        return w1(L1({}, c), { push: e1 });
      }, [c, S]),
      { location: F, matches: R, loaderData: U, actionData: J } = S.getState();
    I.useEffect(() => {
      let { location: e1 } = S.getState();
      r !== e1 &&
        S.send({
          type: 'navigation',
          location: r,
          submission: Ri(),
          action: a,
        });
    }, [S, r, a]);
    let Y =
        L.error &&
        L.renderBoundaryRouteId === null &&
        L.loaderBoundaryRouteId === null
          ? ce(L.error)
          : void 0,
      G = L.catch && L.catchBoundaryRouteId === null ? L.catch : void 0;
    return I.createElement(
      i8.Provider,
      {
        value: {
          matches: R,
          manifest: n,
          appState: L,
          routeModules: m,
          serverHandoffString: u,
          clientRoutes: x,
          routeData: U,
          actionData: J,
          transitionManager: S,
        },
      },
      I.createElement(
        S3.RemixErrorBoundary,
        { location: F, component: S3.RemixRootDefaultErrorBoundary, error: Y },
        I.createElement(
          S3.RemixCatchBoundary,
          {
            location: F,
            component: S3.RemixRootDefaultCatchBoundary,
            catch: G,
          },
          I.createElement(
            u2.Router,
            { navigationType: a, location: F, navigator: k, static: C },
            I.createElement(gi, null)
          )
        )
      )
    );
  }
  function ce(e) {
    let a = new Error(e.message);
    return (a.stack = e.stack), a;
  }
  function gi() {
    let { clientRoutes: e } = X1();
    return u2.useRoutes(e) || e[0].element;
  }
  var Ce = I.createContext(void 0);
  function o8() {
    let e = I.useContext(Ce);
    return X3(e, 'You must render this element in a remix route element'), e;
  }
  function xi({ id: e }) {
    throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
  }
  function ne({ id: e }) {
    let a = u2.useLocation(),
      { routeData: r, routeModules: c, appState: C } = X1();
    X3(
      r,
      `Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`
    ),
      X3(
        c,
        `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`
      );
    let n = r[e],
      { default: t, CatchBoundary: o, ErrorBoundary: m } = c[e],
      u = t ? I.createElement(t, null) : I.createElement(xi, { id: e }),
      p = { data: n, id: e };
    if (o) {
      let x = C.catch && C.catchBoundaryRouteId === e ? C.catch : void 0;
      C.trackCatchBoundaries && (C.catchBoundaryRouteId = e),
        (p = x
          ? {
              id: e,
              get data() {
                console.error(
                  'You cannot `useLoaderData` in a catch boundary.'
                );
              },
            }
          : { id: e, data: n }),
        (u = I.createElement(
          S3.RemixCatchBoundary,
          { location: a, component: o, catch: x },
          u
        ));
    }
    if (m) {
      let x =
        C.error &&
        (C.renderBoundaryRouteId === e || C.loaderBoundaryRouteId === e)
          ? ce(C.error)
          : void 0;
      C.trackBoundaries && (C.renderBoundaryRouteId = e),
        (p = x
          ? {
              id: e,
              get data() {
                console.error(
                  'You cannot `useLoaderData` in an error boundary.'
                );
              },
            }
          : { id: e, data: n }),
        (u = I.createElement(
          S3.RemixErrorBoundary,
          { location: a, component: m, error: x },
          u
        ));
    }
    return I.createElement(Ce.Provider, { value: p }, u);
  }
  function te(e, a) {
    let [r, c] = I.useState(!1),
      [C, n] = I.useState(!1),
      {
        onFocus: t,
        onBlur: o,
        onMouseEnter: m,
        onMouseLeave: u,
        onTouchStart: p,
      } = a;
    I.useEffect(() => {
      e === 'render' && n(!0);
    }, [e]);
    let x = () => {
        e === 'intent' && c(!0);
      },
      L = () => {
        e === 'intent' && (c(!1), n(!1));
      };
    return (
      I.useEffect(() => {
        if (r) {
          let d = setTimeout(() => {
            n(!0);
          }, 100);
          return () => {
            clearTimeout(d);
          };
        }
      }, [r]),
      [
        C,
        {
          onFocus: x3(t, x),
          onBlur: x3(o, L),
          onMouseEnter: x3(m, x),
          onMouseLeave: x3(u, L),
          onTouchStart: x3(p, x),
        },
      ]
    );
  }
  var ie = I.forwardRef((C, c) => {
    var n = C,
      { to: e, prefetch: a = 'none' } = n,
      r = I2(n, ['to', 'prefetch']);
    let t = u2.useHref(e),
      [o, m] = te(a, r);
    return I.createElement(
      I.Fragment,
      null,
      I.createElement(u2.NavLink, q1.extends({ ref: c, to: e }, r, m)),
      o ? I.createElement(K4, { page: t }) : null
    );
  });
  ie.displayName = 'NavLink';
  var oe = I.forwardRef((C, c) => {
    var n = C,
      { to: e, prefetch: a = 'none' } = n,
      r = I2(n, ['to', 'prefetch']);
    let t = u2.useHref(e),
      [o, m] = te(a, r);
    return I.createElement(
      I.Fragment,
      null,
      I.createElement(u2.Link, q1.extends({ ref: c, to: e }, r, m)),
      o ? I.createElement(K4, { page: t }) : null
    );
  });
  oe.displayName = 'Link';
  function x3(e, a) {
    return (r) => {
      e && e(r), r.defaultPrevented || a(r);
    };
  }
  function Si() {
    let { matches: e, routeModules: a, manifest: r } = X1(),
      c = I.useMemo(() => C3.getLinksForMatches(e, a, r), [e, a, r]);
    return I.createElement(
      I.Fragment,
      null,
      c.map((C) => {
        if (C3.isPageLinkDescriptor(C))
          return I.createElement(K4, q1.extends({ key: C.page }, C));
        let n = null;
        return (
          'useId' in I
            ? (C.imagesrcset &&
                ((C.imageSrcSet = n = C.imagesrcset), delete C.imagesrcset),
              C.imagesizes &&
                ((C.imageSizes = C.imagesizes), delete C.imagesizes))
            : (C.imageSrcSet &&
                ((C.imagesrcset = n = C.imageSrcSet), delete C.imageSrcSet),
              C.imageSizes &&
                ((C.imagesizes = C.imageSizes), delete C.imageSizes)),
          I.createElement(
            'link',
            q1.extends({ key: C.rel + (C.href || '') + (n || '') }, C)
          )
        );
      })
    );
  }
  function K4(r) {
    var c = r,
      { page: e } = c,
      a = I2(c, ['page']);
    let { clientRoutes: C } = X1(),
      n = I.useMemo(() => re.matchClientRoutes(C, e), [C, e]);
    return n
      ? I.createElement(yi, q1.extends({ page: e, matches: n }, a))
      : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
  }
  function bi(e) {
    let { routeModules: a } = X1(),
      [r, c] = I.useState([]);
    return (
      I.useEffect(() => {
        let C = !1;
        return (
          C3.getStylesheetPrefetchLinks(e, a).then((n) => {
            C || c(n);
          }),
          () => {
            C = !0;
          }
        );
      }, [e, a]),
      r
    );
  }
  function yi(c) {
    var C = c,
      { page: e, matches: a } = C,
      r = I2(C, ['page', 'matches']);
    let n = u2.useLocation(),
      { matches: t, manifest: o } = X1(),
      m = I.useMemo(
        () => C3.getNewMatchesForLinks(e, a, t, n, 'data'),
        [e, a, t, n]
      ),
      u = I.useMemo(
        () => C3.getNewMatchesForLinks(e, a, t, n, 'assets'),
        [e, a, t, n]
      ),
      p = I.useMemo(() => C3.getDataLinkHrefs(e, m, o), [m, e, o]),
      x = I.useMemo(() => C3.getModuleLinkHrefs(u, o), [u, o]),
      L = bi(u);
    return I.createElement(
      I.Fragment,
      null,
      p.map((d) =>
        I.createElement(
          'link',
          q1.extends({ key: d, rel: 'prefetch', as: 'fetch', href: d }, r)
        )
      ),
      x.map((d) =>
        I.createElement(
          'link',
          q1.extends({ key: d, rel: 'modulepreload', href: d }, r)
        )
      ),
      L.map((d) => I.createElement('link', q1.extends({ key: d.href }, d)))
    );
  }
  function wi() {
    let { matches: e, routeData: a, routeModules: r } = X1(),
      c = u2.useLocation(),
      C = {},
      n = {};
    for (let t of e) {
      let o = t.route.id,
        m = a[o],
        u = t.params,
        p = r[o];
      if (p.meta) {
        let x =
          typeof p.meta == 'function'
            ? p.meta({ data: m, parentsData: n, params: u, location: c })
            : p.meta;
        Object.assign(C, x);
      }
      n[o] = m;
    }
    return I.createElement(
      I.Fragment,
      null,
      Object.entries(C).map(([t, o]) => {
        if (!o) return null;
        if (['charset', 'charSet'].includes(t))
          return I.createElement('meta', { key: 'charset', charSet: o });
        if (t === 'title') return I.createElement('title', { key: 'title' }, o);
        let m = t.startsWith('og:');
        return [o]
          .flat()
          .map((u) =>
            m
              ? I.createElement('meta', { content: u, key: t + u, property: t })
              : typeof u == 'string'
              ? I.createElement('meta', { content: u, name: t, key: t + u })
              : I.createElement(
                  'meta',
                  q1.extends({ key: t + JSON.stringify(u) }, u)
                )
          );
      })
    );
  }
  var Z9 = !1;
  function Ni(e) {
    let {
      manifest: a,
      matches: r,
      pendingLocation: c,
      clientRoutes: C,
      serverHandoffString: n,
    } = X1();
    I.useEffect(() => {
      Z9 = !0;
    }, []);
    let t = I.useMemo(() => {
        let p = n ? `window.__remixContext = ${n};` : '',
          x = `${r.map(
            (L, d) =>
              `import * as route${d} from ${JSON.stringify(
                a.routes[L.route.id].module
              )};`
          ).join(`
`)}
window.__remixRouteModules = {${r
            .map((L, d) => `${JSON.stringify(L.route.id)}:route${d}`)
            .join(',')}};`;
        return I.createElement(
          I.Fragment,
          null,
          I.createElement(
            'script',
            q1.extends({}, e, {
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: Q9.createHtml(p),
            })
          ),
          I.createElement('script', q1.extends({}, e, { src: a.url })),
          I.createElement(
            'script',
            q1.extends({}, e, {
              dangerouslySetInnerHTML: Q9.createHtml(x),
              type: 'module',
            })
          ),
          I.createElement(
            'script',
            q1.extends({}, e, { src: a.entry.module, type: 'module' })
          )
        );
      }, []),
      o = I.useMemo(() => {
        if (c) {
          let p = re.matchClientRoutes(C, c);
          return X3(p, `No routes match path "${c.pathname}"`), p;
        }
        return [];
      }, [c, C]),
      m = r
        .concat(o)
        .map((p) => {
          let x = a.routes[p.route.id];
          return (x.imports || []).concat([x.module]);
        })
        .flat(1),
      u = a.entry.imports.concat(m);
    return I.createElement(
      I.Fragment,
      null,
      ki(u).map((p) =>
        I.createElement('link', {
          key: p,
          rel: 'modulepreload',
          href: p,
          crossOrigin: e.crossOrigin,
        })
      ),
      Z9 ? null : t
    );
  }
  function ki(e) {
    return [...new Set(e)];
  }
  var fe = I.forwardRef((e, a) =>
    I.createElement(J4, q1.extends({}, e, { ref: a }))
  );
  fe.displayName = 'Form';
  var J4 = I.forwardRef((u, m) => {
    var p = u,
      {
        reloadDocument: e = !1,
        replace: a = !1,
        method: r = 'get',
        action: c = '.',
        encType: C = 'application/x-www-form-urlencoded',
        fetchKey: n,
        onSubmit: t,
      } = p,
      o = I2(p, [
        'reloadDocument',
        'replace',
        'method',
        'action',
        'encType',
        'fetchKey',
        'onSubmit',
      ]);
    let x = Q4(n),
      L = r.toLowerCase() === 'get' ? 'get' : 'post',
      d = f8(c);
    return I.createElement(
      'form',
      q1.extends(
        {
          ref: m,
          method: L,
          action: d,
          encType: C,
          onSubmit: e
            ? void 0
            : (S) => {
                if ((t && t(S), S.defaultPrevented)) return;
                S.preventDefault();
                let k = S.nativeEvent.submitter;
                x(k || S.currentTarget, { method: r, replace: a });
              },
        },
        o
      )
    );
  });
  J4.displayName = 'FormImpl';
  function f8(e = '.', a = 'get') {
    let { id: r } = o8(),
      c = u2.useResolvedPath(e),
      C = c.search,
      n = r.endsWith('/index');
    return (
      e === '.' && n && (C = C ? C.replace(/^\?/, '?index&') : '?index'),
      c.pathname + C
    );
  }
  function Ai() {
    return Q4();
  }
  var ee = 'get',
    ae = 'application/x-www-form-urlencoded';
  function Q4(e) {
    let a = u2.useNavigate(),
      r = f8(),
      { transitionManager: c } = X1();
    return I.useCallback(
      (C, n = {}) => {
        let t, o, m, u;
        if (Fi(C)) {
          let S = n.submissionTrigger;
          (t = n.method || C.getAttribute('method') || ee),
            (o = n.action || C.getAttribute('action') || r),
            (m = n.encType || C.getAttribute('enctype') || ae),
            (u = new FormData(C)),
            S && S.name && u.append(S.name, S.value);
        } else if (
          Ti(C) ||
          (Ei(C) && (C.type === 'submit' || C.type === 'image'))
        ) {
          let S = C.form;
          if (S == null)
            throw new Error('Cannot submit a <button> without a <form>');
          (t =
            n.method ||
            C.getAttribute('formmethod') ||
            S.getAttribute('method') ||
            ee),
            (o =
              n.action ||
              C.getAttribute('formaction') ||
              S.getAttribute('action') ||
              r),
            (m =
              n.encType ||
              C.getAttribute('formenctype') ||
              S.getAttribute('enctype') ||
              ae),
            (u = new FormData(S)),
            C.name && u.set(C.name, C.value);
        } else {
          if (Z4(C))
            throw new Error(
              'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
            );
          if (
            ((t = n.method || 'get'),
            (o = n.action || r),
            (m = n.encType || 'application/x-www-form-urlencoded'),
            C instanceof FormData)
          )
            u = C;
          else if (((u = new FormData()), C instanceof URLSearchParams))
            for (let [S, k] of C) u.append(S, k);
          else if (C != null) for (let S of Object.keys(C)) u.append(S, C[S]);
        }
        if (typeof document > 'u')
          throw new Error(
            'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
          );
        let { protocol: p, host: x } = window.location,
          L = new URL(o, `${p}//${x}`);
        if (t.toLowerCase() === 'get')
          for (let [S, k] of u)
            if (typeof k == 'string') L.searchParams.append(S, k);
            else throw new Error('Cannot submit binary form data using GET');
        let d = {
          formData: u,
          action: L.pathname + L.search,
          method: t.toUpperCase(),
          encType: m,
          key: Math.random().toString(36).substr(2, 8),
        };
        e
          ? c.send({ type: 'fetcher', href: d.action, submission: d, key: e })
          : (Pi(d), a(L.pathname + L.search, { replace: n.replace }));
      },
      [r, e, a, c]
    );
  }
  var t8;
  function Pi(e) {
    t8 = e;
  }
  function Ri() {
    let e = t8;
    return (t8 = void 0), e;
  }
  function Z4(e) {
    return e != null && typeof e.tagName == 'string';
  }
  function Ti(e) {
    return Z4(e) && e.tagName.toLowerCase() === 'button';
  }
  function Fi(e) {
    return Z4(e) && e.tagName.toLowerCase() === 'form';
  }
  function Ei(e) {
    return Z4(e) && e.tagName.toLowerCase() === 'input';
  }
  function Bi(e) {
    I.useEffect(
      () => (
        window.addEventListener('beforeunload', e),
        () => {
          window.removeEventListener('beforeunload', e);
        }
      ),
      [e]
    );
  }
  function Di() {
    let { matches: e, routeData: a, routeModules: r } = X1();
    return I.useMemo(
      () =>
        e.map((c) => {
          var C;
          let { pathname: n, params: t } = c;
          return {
            id: c.route.id,
            pathname: n,
            params: t,
            data: a[c.route.id],
            handle:
              (C = r[c.route.id]) === null || C === void 0 ? void 0 : C.handle,
          };
        }),
      [e, a, r]
    );
  }
  function Oi() {
    return o8().data;
  }
  function _i() {
    let { id: e } = o8(),
      { transitionManager: a } = X1(),
      { actionData: r } = a.getState();
    return r ? r[e] : void 0;
  }
  function qi() {
    let { transitionManager: e } = X1();
    return e.getState().transition;
  }
  function Ii(e) {
    let a = I.forwardRef((r, c) =>
      I.createElement(J4, q1.extends({}, r, { ref: c, fetchKey: e }))
    );
    return (a.displayName = 'fetcher.Form'), a;
  }
  var Ui = 0;
  function ji() {
    let { transitionManager: e } = X1(),
      [a] = I.useState(() => String(++Ui)),
      [r] = I.useState(() => Ii(a)),
      [c] = I.useState(() => (o) => {
        e.send({ type: 'fetcher', href: o, key: a });
      }),
      C = Q4(a),
      n = e.getFetcher(a),
      t = I.useMemo(() => L1({ Form: r, submit: C, load: c }, n), [n, r, C, c]);
    return I.useEffect(() => () => e.deleteFetcher(a), [e, a]), t;
  }
  function Wi() {
    let { transitionManager: e } = X1(),
      { fetchers: a } = e.getState();
    return [...a.values()];
  }
  var Gi = () => null;
  x1.Form = fe;
  x1.FormImpl = J4;
  x1.Link = oe;
  x1.Links = Si;
  x1.LiveReload = Gi;
  x1.Meta = wi;
  x1.NavLink = ie;
  x1.PrefetchPageLinks = K4;
  x1.RemixEntry = Vi;
  x1.RemixEntryContext = i8;
  x1.RemixRoute = ne;
  x1.Scripts = Ni;
  x1.composeEventHandlers = x3;
  x1.useActionData = _i;
  x1.useBeforeUnload = Bi;
  x1.useFetcher = ji;
  x1.useFetchers = Wi;
  x1.useFormAction = f8;
  x1.useLoaderData = Oi;
  x1.useMatches = Di;
  x1.useSubmit = Ai;
  x1.useSubmitImpl = Q4;
  x1.useTransition = qi;
});
var le = K((l8) => {
  'use strict';
  w();
  Object.defineProperty(l8, '__esModule', { value: !0 });
  var $i = k2(),
    Yi = A1(),
    Xi = K3();
  function Ki(e) {
    if (e && e.__esModule) return e;
    var a = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          if (r !== 'default') {
            var c = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              a,
              r,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }
            );
          }
        }),
      (a.default = e),
      Object.freeze(a)
    );
  }
  var e6 = Ki(Yi);
  function Ji(e) {
    let a = e6.useRef();
    a.current == null && (a.current = $i.createBrowserHistory({ window }));
    let r = a.current,
      [c, C] = e6.useReducer((t, o) => o, {
        action: r.action,
        location: r.location,
      });
    e6.useLayoutEffect(() => r.listen(C), [r]);
    let n = window.__remixContext;
    return (
      (n.manifest = window.__remixManifest),
      (n.routeModules = window.__remixRouteModules),
      (n.appState.trackBoundaries = !1),
      (n.appState.trackCatchBoundaries = !1),
      e6.createElement(Xi.RemixEntry, {
        context: n,
        action: c.action,
        location: c.location,
        navigator: r,
      })
    );
  }
  l8.RemixBrowser = Ji;
});
var ue = K((h8) => {
  'use strict';
  w();
  Object.defineProperty(h8, '__esModule', { value: !0 });
  var Qi = A1(),
    Zi = W3(),
    s8 = K3();
  function eo(e) {
    if (e && e.__esModule) return e;
    var a = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          if (r !== 'default') {
            var c = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              a,
              r,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }
            );
          }
        }),
      (a.default = e),
      Object.freeze(a)
    );
  }
  var P2 = eo(Qi),
    u8 = 'positions',
    a6 = {};
  if (typeof document < 'u') {
    let e = sessionStorage.getItem(u8);
    e && (a6 = JSON.parse(e));
  }
  function ao({ nonce: e = void 0 }) {
    ro(),
      P2.useEffect(() => {
        window.history.scrollRestoration = 'manual';
      }, []),
      s8.useBeforeUnload(
        P2.useCallback(() => {
          window.history.scrollRestoration = 'auto';
        }, [])
      );
    let a = ((r) => {
      if (!window.history.state || !window.history.state.key) {
        let c = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: c }, '');
      }
      try {
        let C = JSON.parse(sessionStorage.getItem(r) || '{}')[
          window.history.state.key
        ];
        typeof C == 'number' && window.scrollTo(0, C);
      } catch (c) {
        console.error(c), sessionStorage.removeItem(r);
      }
    }).toString();
    return P2.createElement('script', {
      nonce: e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: `(${a})(${JSON.stringify(u8)})` },
    });
  }
  var se = !1;
  function ro() {
    let e = Zi.useLocation(),
      a = s8.useTransition(),
      r = P2.useRef(!1);
    P2.useEffect(() => {
      a.submission && (r.current = !0);
    }, [a]),
      P2.useEffect(() => {
        a.location && (a6[e.key] = window.scrollY);
      }, [a, e]),
      s8.useBeforeUnload(
        P2.useCallback(() => {
          sessionStorage.setItem(u8, JSON.stringify(a6));
        }, [])
      ),
      typeof document < 'u' &&
        P2.useLayoutEffect(() => {
          if (!se) {
            se = !0;
            return;
          }
          let c = a6[e.key];
          if (c != null) {
            window.scrollTo(0, c);
            return;
          }
          if (e.hash) {
            let C = document.getElementById(e.hash.slice(1));
            if (C) {
              C.scrollIntoView();
              return;
            }
          }
          if (r.current === !0) {
            r.current = !1;
            return;
          }
          window.scrollTo(0, 0);
        }, [e]),
      P2.useEffect(() => {
        a.submission && (r.current = !0);
      }, [a]);
  }
  h8.ScrollRestoration = ao;
});
var me = K((m8) => {
  'use strict';
  w();
  Object.defineProperty(m8, '__esModule', { value: !0 });
  var he = k2(),
    co = A1(),
    Co = K3();
  function no(e) {
    if (e && e.__esModule) return e;
    var a = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (r) {
          if (r !== 'default') {
            var c = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(
              a,
              r,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }
            );
          }
        }),
      (a.default = e),
      Object.freeze(a)
    );
  }
  var to = no(co);
  function io({ context: e, url: a }) {
    typeof a == 'string' && (a = new URL(a));
    let r = {
        pathname: a.pathname,
        search: a.search,
        hash: '',
        state: null,
        key: 'default',
      },
      c = {
        createHref(C) {
          return typeof C == 'string' ? C : he.createPath(C);
        },
        push(C) {
          throw new Error(
            `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(
              C
            )})\` somewhere in your app.`
          );
        },
        replace(C) {
          throw new Error(
            `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(
              C
            )}, { replace: true })\` somewhere in your app.`
          );
        },
        go(C) {
          throw new Error(
            `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${C})\` somewhere in your app.`
          );
        },
        back() {
          throw new Error(
            'You cannot use navigator.back() on the server because it is a stateless environment.'
          );
        },
        forward() {
          throw new Error(
            'You cannot use navigator.forward() on the server because it is a stateless environment.'
          );
        },
        block() {
          throw new Error(
            'You cannot use navigator.block() on the server because it is a stateless environment.'
          );
        },
      };
    return to.createElement(Co.RemixEntry, {
      context: e,
      action: he.Action.Pop,
      location: r,
      navigator: c,
      static: !0,
    });
  }
  m8.RemixServer = io;
});
var ve = K((d1) => {
  'use strict';
  w();
  Object.defineProperty(d1, '__esModule', { value: !0 });
  var oo = le(),
    V2 = W3(),
    R1 = K3(),
    fo = I5(),
    lo = ue(),
    so = me();
  d1.RemixBrowser = oo.RemixBrowser;
  Object.defineProperty(d1, 'Outlet', {
    enumerable: !0,
    get: function () {
      return V2.Outlet;
    },
  });
  Object.defineProperty(d1, 'useHref', {
    enumerable: !0,
    get: function () {
      return V2.useHref;
    },
  });
  Object.defineProperty(d1, 'useLocation', {
    enumerable: !0,
    get: function () {
      return V2.useLocation;
    },
  });
  Object.defineProperty(d1, 'useNavigate', {
    enumerable: !0,
    get: function () {
      return V2.useNavigate;
    },
  });
  Object.defineProperty(d1, 'useNavigationType', {
    enumerable: !0,
    get: function () {
      return V2.useNavigationType;
    },
  });
  Object.defineProperty(d1, 'useOutlet', {
    enumerable: !0,
    get: function () {
      return V2.useOutlet;
    },
  });
  Object.defineProperty(d1, 'useOutletContext', {
    enumerable: !0,
    get: function () {
      return V2.useOutletContext;
    },
  });
  Object.defineProperty(d1, 'useParams', {
    enumerable: !0,
    get: function () {
      return V2.useParams;
    },
  });
  Object.defineProperty(d1, 'useResolvedPath', {
    enumerable: !0,
    get: function () {
      return V2.useResolvedPath;
    },
  });
  Object.defineProperty(d1, 'useSearchParams', {
    enumerable: !0,
    get: function () {
      return V2.useSearchParams;
    },
  });
  d1.Form = R1.Form;
  d1.Link = R1.Link;
  d1.Links = R1.Links;
  d1.LiveReload = R1.LiveReload;
  d1.Meta = R1.Meta;
  d1.NavLink = R1.NavLink;
  d1.PrefetchPageLinks = R1.PrefetchPageLinks;
  d1.Scripts = R1.Scripts;
  d1.useActionData = R1.useActionData;
  d1.useBeforeUnload = R1.useBeforeUnload;
  d1.useFetcher = R1.useFetcher;
  d1.useFetchers = R1.useFetchers;
  d1.useFormAction = R1.useFormAction;
  d1.useLoaderData = R1.useLoaderData;
  d1.useMatches = R1.useMatches;
  d1.useSubmit = R1.useSubmit;
  d1.useTransition = R1.useTransition;
  d1.useCatch = fo.useCatch;
  d1.ScrollRestoration = lo.ScrollRestoration;
  d1.RemixServer = so.RemixServer;
});
var ta = K((b3) => {
  'use strict';
  w();
  var Ee = A1();
  function u1(e) {
    for (
      var a = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      a += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      a +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var K1 = Object.prototype.hasOwnProperty,
    uo =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ze = {},
    pe = {};
  function Be(e) {
    return K1.call(pe, e)
      ? !0
      : K1.call(ze, e)
      ? !1
      : uo.test(e)
      ? (pe[e] = !0)
      : ((ze[e] = !0), !1);
  }
  function G1(e, a, r, c, C, n, t) {
    (this.acceptsBooleans = a === 2 || a === 3 || a === 4),
      (this.attributeName = c),
      (this.attributeNamespace = C),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = a),
      (this.sanitizeURL = n),
      (this.removeEmptyString = t);
  }
  var T1 = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      T1[e] = new G1(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var a = e[0];
    T1[a] = new G1(a, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    T1[e] = new G1(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    T1[e] = new G1(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      T1[e] = new G1(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    T1[e] = new G1(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    T1[e] = new G1(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    T1[e] = new G1(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    T1[e] = new G1(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var g8 = /[\-:]([a-z])/g;
  function x8(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var a = e.replace(g8, x8);
      T1[a] = new G1(a, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var a = e.replace(g8, x8);
      T1[a] = new G1(a, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var a = e.replace(g8, x8);
    T1[a] = new G1(a, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    T1[e] = new G1(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  T1.xlinkHref = new G1(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    T1[e] = new G1(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var C6 = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ho = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(C6).forEach(function (e) {
    ho.forEach(function (a) {
      (a = a + e.charAt(0).toUpperCase() + e.substring(1)), (C6[a] = C6[e]);
    });
  });
  var mo = /["'&<>]/;
  function W1(e) {
    if (typeof e == 'boolean' || typeof e == 'number') return '' + e;
    e = '' + e;
    var a = mo.exec(e);
    if (a) {
      var r = '',
        c,
        C = 0;
      for (c = a.index; c < e.length; c++) {
        switch (e.charCodeAt(c)) {
          case 34:
            a = '&quot;';
            break;
          case 38:
            a = '&amp;';
            break;
          case 39:
            a = '&#x27;';
            break;
          case 60:
            a = '&lt;';
            break;
          case 62:
            a = '&gt;';
            break;
          default:
            continue;
        }
        C !== c && (r += e.substring(C, c)), (C = c + 1), (r += a);
      }
      e = C !== c ? r + e.substring(C, c) : r;
    }
    return e;
  }
  var vo = /([A-Z])/g,
    zo = /^ms-/,
    M8 = Array.isArray;
  function R2(e, a) {
    return { insertionMode: e, selectedValue: a };
  }
  function po(e, a, r) {
    switch (a) {
      case 'select':
        return R2(1, r.value != null ? r.value : r.defaultValue);
      case 'svg':
        return R2(2, null);
      case 'math':
        return R2(3, null);
      case 'foreignObject':
        return R2(1, null);
      case 'table':
        return R2(4, null);
      case 'thead':
      case 'tbody':
      case 'tfoot':
        return R2(5, null);
      case 'colgroup':
        return R2(7, null);
      case 'tr':
        return R2(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? R2(1, null) : e;
  }
  var Me = new Map();
  function De(e, a, r) {
    if (typeof r != 'object') throw Error(u1(62));
    a = !0;
    for (var c in r)
      if (K1.call(r, c)) {
        var C = r[c];
        if (C != null && typeof C != 'boolean' && C !== '') {
          if (c.indexOf('--') === 0) {
            var n = W1(c);
            C = W1(('' + C).trim());
          } else {
            n = c;
            var t = Me.get(n);
            t !== void 0 ||
              ((t = W1(n.replace(vo, '-$1').toLowerCase().replace(zo, '-ms-'))),
              Me.set(n, t)),
              (n = t),
              (C =
                typeof C == 'number'
                  ? C === 0 || K1.call(C6, c)
                    ? '' + C
                    : C + 'px'
                  : W1(('' + C).trim()));
          }
          a
            ? ((a = !1), e.push(' style="', n, ':', C))
            : e.push(';', n, ':', C);
        }
      }
    a || e.push('"');
  }
  function a2(e, a, r, c) {
    switch (r) {
      case 'style':
        De(e, a, c);
        return;
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
        return;
    }
    if (
      !(2 < r.length) ||
      (r[0] !== 'o' && r[0] !== 'O') ||
      (r[1] !== 'n' && r[1] !== 'N')
    ) {
      if (((a = T1.hasOwnProperty(r) ? T1[r] : null), a !== null)) {
        switch (typeof c) {
          case 'function':
          case 'symbol':
            return;
          case 'boolean':
            if (!a.acceptsBooleans) return;
        }
        switch (((r = a.attributeName), a.type)) {
          case 3:
            c && e.push(' ', r, '=""');
            break;
          case 4:
            c === !0
              ? e.push(' ', r, '=""')
              : c !== !1 && e.push(' ', r, '="', W1(c), '"');
            break;
          case 5:
            isNaN(c) || e.push(' ', r, '="', W1(c), '"');
            break;
          case 6:
            !isNaN(c) && 1 <= c && e.push(' ', r, '="', W1(c), '"');
            break;
          default:
            a.sanitizeURL && (c = '' + c), e.push(' ', r, '="', W1(c), '"');
        }
      } else if (Be(r)) {
        switch (typeof c) {
          case 'function':
          case 'symbol':
            return;
          case 'boolean':
            if (
              ((a = r.toLowerCase().slice(0, 5)),
              a !== 'data-' && a !== 'aria-')
            )
              return;
        }
        e.push(' ', r, '="', W1(c), '"');
      }
    }
  }
  function n6(e, a, r) {
    if (a != null) {
      if (r != null) throw Error(u1(60));
      if (typeof a != 'object' || !('__html' in a)) throw Error(u1(61));
      (a = a.__html), a != null && e.push('' + a);
    }
  }
  function Mo(e) {
    var a = '';
    return (
      Ee.Children.forEach(e, function (r) {
        r != null && (a += r);
      }),
      a
    );
  }
  function v8(e, a, r, c) {
    e.push(g2(r));
    var C = (r = null),
      n;
    for (n in a)
      if (K1.call(a, n)) {
        var t = a[n];
        if (t != null)
          switch (n) {
            case 'children':
              r = t;
              break;
            case 'dangerouslySetInnerHTML':
              C = t;
              break;
            default:
              a2(e, c, n, t);
          }
      }
    return (
      e.push('>'), n6(e, C, r), typeof r == 'string' ? (e.push(W1(r)), null) : r
    );
  }
  var Lo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    de = new Map();
  function g2(e) {
    var a = de.get(e);
    if (a === void 0) {
      if (!Lo.test(e)) throw Error(u1(65, e));
      (a = '<' + e), de.set(e, a);
    }
    return a;
  }
  function Ho(e, a, r, c, C) {
    switch (a) {
      case 'select':
        e.push(g2('select'));
        var n = null,
          t = null;
        for (p in r)
          if (K1.call(r, p)) {
            var o = r[p];
            if (o != null)
              switch (p) {
                case 'children':
                  n = o;
                  break;
                case 'dangerouslySetInnerHTML':
                  t = o;
                  break;
                case 'defaultValue':
                case 'value':
                  break;
                default:
                  a2(e, c, p, o);
              }
          }
        return e.push('>'), n6(e, t, n), n;
      case 'option':
        (t = C.selectedValue), e.push(g2('option'));
        var m = (o = null),
          u = null,
          p = null;
        for (n in r)
          if (K1.call(r, n)) {
            var x = r[n];
            if (x != null)
              switch (n) {
                case 'children':
                  o = x;
                  break;
                case 'selected':
                  u = x;
                  break;
                case 'dangerouslySetInnerHTML':
                  p = x;
                  break;
                case 'value':
                  m = x;
                default:
                  a2(e, c, n, x);
              }
          }
        if (t != null)
          if (((r = m !== null ? '' + m : Mo(o)), M8(t))) {
            for (c = 0; c < t.length; c++)
              if ('' + t[c] === r) {
                e.push(' selected=""');
                break;
              }
          } else '' + t === r && e.push(' selected=""');
        else u && e.push(' selected=""');
        return e.push('>'), n6(e, p, o), o;
      case 'textarea':
        e.push(g2('textarea')), (p = t = n = null);
        for (o in r)
          if (K1.call(r, o) && ((m = r[o]), m != null))
            switch (o) {
              case 'children':
                p = m;
                break;
              case 'value':
                n = m;
                break;
              case 'defaultValue':
                t = m;
                break;
              case 'dangerouslySetInnerHTML':
                throw Error(u1(91));
              default:
                a2(e, c, o, m);
            }
        if ((n === null && t !== null && (n = t), e.push('>'), p != null)) {
          if (n != null) throw Error(u1(92));
          if (M8(p) && 1 < p.length) throw Error(u1(93));
          n = '' + p;
        }
        return (
          typeof n == 'string' &&
            n[0] ===
              `
` &&
            e.push(`
`),
          n !== null && e.push(W1('' + n)),
          null
        );
      case 'input':
        e.push(g2('input')), (m = p = o = n = null);
        for (t in r)
          if (K1.call(r, t) && ((u = r[t]), u != null))
            switch (t) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u1(399, 'input'));
              case 'defaultChecked':
                m = u;
                break;
              case 'defaultValue':
                o = u;
                break;
              case 'checked':
                p = u;
                break;
              case 'value':
                n = u;
                break;
              default:
                a2(e, c, t, u);
            }
        return (
          p !== null
            ? a2(e, c, 'checked', p)
            : m !== null && a2(e, c, 'checked', m),
          n !== null
            ? a2(e, c, 'value', n)
            : o !== null && a2(e, c, 'value', o),
          e.push('/>'),
          null
        );
      case 'menuitem':
        e.push(g2('menuitem'));
        for (var L in r)
          if (K1.call(r, L) && ((n = r[L]), n != null))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u1(400));
              default:
                a2(e, c, L, n);
            }
        return e.push('>'), null;
      case 'title':
        e.push(g2('title')), (n = null);
        for (x in r)
          if (K1.call(r, x) && ((t = r[x]), t != null))
            switch (x) {
              case 'children':
                n = t;
                break;
              case 'dangerouslySetInnerHTML':
                throw Error(u1(434));
              default:
                a2(e, c, x, t);
            }
        return e.push('>'), n;
      case 'listing':
      case 'pre':
        e.push(g2(a)), (t = n = null);
        for (m in r)
          if (K1.call(r, m) && ((o = r[m]), o != null))
            switch (m) {
              case 'children':
                n = o;
                break;
              case 'dangerouslySetInnerHTML':
                t = o;
                break;
              default:
                a2(e, c, m, o);
            }
        if ((e.push('>'), t != null)) {
          if (n != null) throw Error(u1(60));
          if (typeof t != 'object' || !('__html' in t)) throw Error(u1(61));
          (r = t.__html),
            r != null &&
              (typeof r == 'string' &&
              0 < r.length &&
              r[0] ===
                `
`
                ? e.push(
                    `
`,
                    r
                  )
                : e.push('' + r));
        }
        return (
          typeof n == 'string' &&
            n[0] ===
              `
` &&
            e.push(`
`),
          n
        );
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'img':
      case 'keygen':
      case 'link':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
        e.push(g2(a));
        for (var d in r)
          if (K1.call(r, d) && ((n = r[d]), n != null))
            switch (d) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u1(399, a));
              default:
                a2(e, c, d, n);
            }
        return e.push('/>'), null;
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return v8(e, r, a, c);
      case 'html':
        return (
          C.insertionMode === 0 && e.push('<!DOCTYPE html>'), v8(e, r, a, c)
        );
      default:
        if (a.indexOf('-') === -1 && typeof r.is != 'string')
          return v8(e, r, a, c);
        e.push(g2(a)), (t = n = null);
        for (u in r)
          if (K1.call(r, u) && ((o = r[u]), o != null))
            switch (u) {
              case 'children':
                n = o;
                break;
              case 'dangerouslySetInnerHTML':
                t = o;
                break;
              case 'style':
                De(e, c, o);
                break;
              case 'suppressContentEditableWarning':
              case 'suppressHydrationWarning':
                break;
              default:
                Be(u) &&
                  typeof o != 'function' &&
                  typeof o != 'symbol' &&
                  e.push(' ', u, '="', W1(o), '"');
            }
        return e.push('>'), n6(e, t, n), n;
    }
  }
  function Le(e, a, r) {
    if ((e.push('<!--$?--><template id="'), r === null)) throw Error(u1(395));
    return e.push(r), e.push('"></template>');
  }
  function Vo(e, a, r, c) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return (
          e.push('<div hidden id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      case 2:
        return (
          e.push('<svg aria-hidden="true" style="display:none" id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      case 3:
        return (
          e.push('<math aria-hidden="true" style="display:none" id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      case 4:
        return (
          e.push('<table hidden id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      case 5:
        return (
          e.push('<table hidden><tbody id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      case 6:
        return (
          e.push('<table hidden><tr id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      case 7:
        return (
          e.push('<table hidden><colgroup id="'),
          e.push(a.segmentPrefix),
          (a = c.toString(16)),
          e.push(a),
          e.push('">')
        );
      default:
        throw Error(u1(397));
    }
  }
  function go(e, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
        return e.push('</div>');
      case 2:
        return e.push('</svg>');
      case 3:
        return e.push('</math>');
      case 4:
        return e.push('</table>');
      case 5:
        return e.push('</tbody></table>');
      case 6:
        return e.push('</tr></table>');
      case 7:
        return e.push('</colgroup></table>');
      default:
        throw Error(u1(397));
    }
  }
  var xo = /[<\u2028\u2029]/g;
  function z8(e) {
    return JSON.stringify(e).replace(xo, function (a) {
      switch (a) {
        case '<':
          return '\\u003c';
        case '\u2028':
          return '\\u2028';
        case '\u2029':
          return '\\u2029';
        default:
          throw Error(
            'escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React'
          );
      }
    });
  }
  function So(e, a) {
    return (
      (a = a === void 0 ? '' : a),
      {
        bootstrapChunks: [],
        startInlineScript: '<script>',
        placeholderPrefix: a + 'P:',
        segmentPrefix: a + 'S:',
        boundaryPrefix: a + 'B:',
        idPrefix: a,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
        generateStaticMarkup: e,
      }
    );
  }
  function He(e, a, r, c) {
    return r.generateStaticMarkup
      ? (e.push(W1(a)), !1)
      : (a === ''
          ? (e = c)
          : (c && e.push('<!-- -->'), e.push(W1(a)), (e = !0)),
        e);
  }
  var Z3 = Object.assign,
    bo = Symbol.for('react.element'),
    Oe = Symbol.for('react.portal'),
    _e = Symbol.for('react.fragment'),
    qe = Symbol.for('react.strict_mode'),
    Ie = Symbol.for('react.profiler'),
    Ue = Symbol.for('react.provider'),
    je = Symbol.for('react.context'),
    We = Symbol.for('react.forward_ref'),
    Ge = Symbol.for('react.suspense'),
    $e = Symbol.for('react.suspense_list'),
    Ye = Symbol.for('react.memo'),
    S8 = Symbol.for('react.lazy'),
    yo = Symbol.for('react.scope'),
    wo = Symbol.for('react.debug_trace_mode'),
    No = Symbol.for('react.legacy_hidden'),
    ko = Symbol.for('react.default_value'),
    Ve = Symbol.iterator;
  function d8(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case _e:
        return 'Fragment';
      case Oe:
        return 'Portal';
      case Ie:
        return 'Profiler';
      case qe:
        return 'StrictMode';
      case Ge:
        return 'Suspense';
      case $e:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case je:
          return (e.displayName || 'Context') + '.Consumer';
        case Ue:
          return (e._context.displayName || 'Context') + '.Provider';
        case We:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Ye:
          return (
            (a = e.displayName || null), a !== null ? a : d8(e.type) || 'Memo'
          );
        case S8:
          (a = e._payload), (e = e._init);
          try {
            return d8(e(a));
          } catch {}
      }
    return null;
  }
  var Xe = {};
  function ge(e, a) {
    if (((e = e.contextTypes), !e)) return Xe;
    var r = {},
      c;
    for (c in e) r[c] = a[c];
    return r;
  }
  var t3 = null;
  function m6(e, a) {
    if (e !== a) {
      (e.context._currentValue2 = e.parentValue), (e = e.parent);
      var r = a.parent;
      if (e === null) {
        if (r !== null) throw Error(u1(401));
      } else {
        if (r === null) throw Error(u1(401));
        m6(e, r);
      }
      a.context._currentValue2 = a.value;
    }
  }
  function Ke(e) {
    (e.context._currentValue2 = e.parentValue),
      (e = e.parent),
      e !== null && Ke(e);
  }
  function Je(e) {
    var a = e.parent;
    a !== null && Je(a), (e.context._currentValue2 = e.value);
  }
  function Qe(e, a) {
    if (
      ((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)
    )
      throw Error(u1(402));
    e.depth === a.depth ? m6(e, a) : Qe(e, a);
  }
  function Ze(e, a) {
    var r = a.parent;
    if (r === null) throw Error(u1(402));
    e.depth === r.depth ? m6(e, r) : Ze(e, r),
      (a.context._currentValue2 = a.value);
  }
  function f6(e) {
    var a = t3;
    a !== e &&
      (a === null
        ? Je(e)
        : e === null
        ? Ke(a)
        : a.depth === e.depth
        ? m6(a, e)
        : a.depth > e.depth
        ? Qe(a, e)
        : Ze(a, e),
      (t3 = e));
  }
  var xe = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, a) {
      (e = e._reactInternals), e.queue !== null && e.queue.push(a);
    },
    enqueueReplaceState: function (e, a) {
      (e = e._reactInternals), (e.replace = !0), (e.queue = [a]);
    },
    enqueueForceUpdate: function () {},
  };
  function Se(e, a, r, c) {
    var C = e.state !== void 0 ? e.state : null;
    (e.updater = xe), (e.props = r), (e.state = C);
    var n = { queue: [], replace: !1 };
    e._reactInternals = n;
    var t = a.contextType;
    if (
      ((e.context = typeof t == 'object' && t !== null ? t._currentValue2 : c),
      (t = a.getDerivedStateFromProps),
      typeof t == 'function' &&
        ((t = t(r, C)), (C = t == null ? C : Z3({}, C, t)), (e.state = C)),
      typeof a.getDerivedStateFromProps != 'function' &&
        typeof e.getSnapshotBeforeUpdate != 'function' &&
        (typeof e.UNSAFE_componentWillMount == 'function' ||
          typeof e.componentWillMount == 'function'))
    )
      if (
        ((a = e.state),
        typeof e.componentWillMount == 'function' && e.componentWillMount(),
        typeof e.UNSAFE_componentWillMount == 'function' &&
          e.UNSAFE_componentWillMount(),
        a !== e.state && xe.enqueueReplaceState(e, e.state, null),
        n.queue !== null && 0 < n.queue.length)
      )
        if (
          ((a = n.queue),
          (t = n.replace),
          (n.queue = null),
          (n.replace = !1),
          t && a.length === 1)
        )
          e.state = a[0];
        else {
          for (
            n = t ? a[0] : e.state, C = !0, t = t ? 1 : 0;
            t < a.length;
            t++
          ) {
            var o = a[t];
            (o = typeof o == 'function' ? o.call(e, n, r, c) : o),
              o != null && (C ? ((C = !1), (n = Z3({}, n, o))) : Z3(n, o));
          }
          e.state = n;
        }
      else n.queue = null;
  }
  var Ao = { id: 1, overflow: '' };
  function L8(e, a, r) {
    var c = e.id;
    e = e.overflow;
    var C = 32 - t6(c) - 1;
    (c &= ~(1 << C)), (r += 1);
    var n = 32 - t6(a) + C;
    if (30 < n) {
      var t = C - (C % 5);
      return (
        (n = (c & ((1 << t) - 1)).toString(32)),
        (c >>= t),
        (C -= t),
        { id: (1 << (32 - t6(a) + C)) | (r << C) | c, overflow: n + e }
      );
    }
    return { id: (1 << n) | (r << C) | c, overflow: e };
  }
  var t6 = Math.clz32 ? Math.clz32 : To,
    Po = Math.log,
    Ro = Math.LN2;
  function To(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Po(e) / Ro) | 0)) | 0;
  }
  function Fo(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var Eo = typeof Object.is == 'function' ? Object.is : Fo,
    T2 = null,
    b8 = null,
    i6 = null,
    H1 = null,
    J3 = !1,
    l6 = !1,
    e4 = 0,
    $2 = null,
    v6 = 0;
  function n3() {
    if (T2 === null) throw Error(u1(321));
    return T2;
  }
  function be() {
    if (0 < v6) throw Error(u1(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function y8() {
    return (
      H1 === null
        ? i6 === null
          ? ((J3 = !1), (i6 = H1 = be()))
          : ((J3 = !0), (H1 = i6))
        : H1.next === null
        ? ((J3 = !1), (H1 = H1.next = be()))
        : ((J3 = !0), (H1 = H1.next)),
      H1
    );
  }
  function w8() {
    (b8 = T2 = null), (l6 = !1), (i6 = null), (v6 = 0), (H1 = $2 = null);
  }
  function ea(e, a) {
    return typeof a == 'function' ? a(e) : a;
  }
  function ye(e, a, r) {
    if (((T2 = n3()), (H1 = y8()), J3)) {
      var c = H1.queue;
      if (((a = c.dispatch), $2 !== null && ((r = $2.get(c)), r !== void 0))) {
        $2.delete(c), (c = H1.memoizedState);
        do (c = e(c, r.action)), (r = r.next);
        while (r !== null);
        return (H1.memoizedState = c), [c, a];
      }
      return [H1.memoizedState, a];
    }
    return (
      (e =
        e === ea
          ? typeof a == 'function'
            ? a()
            : a
          : r !== void 0
          ? r(a)
          : a),
      (H1.memoizedState = e),
      (e = H1.queue = { last: null, dispatch: null }),
      (e = e.dispatch = Bo.bind(null, T2, e)),
      [H1.memoizedState, e]
    );
  }
  function we(e, a) {
    if (
      ((T2 = n3()), (H1 = y8()), (a = a === void 0 ? null : a), H1 !== null)
    ) {
      var r = H1.memoizedState;
      if (r !== null && a !== null) {
        var c = r[1];
        e: if (c === null) c = !1;
        else {
          for (var C = 0; C < c.length && C < a.length; C++)
            if (!Eo(a[C], c[C])) {
              c = !1;
              break e;
            }
          c = !0;
        }
        if (c) return r[0];
      }
    }
    return (e = e()), (H1.memoizedState = [e, a]), e;
  }
  function Bo(e, a, r) {
    if (25 <= v6) throw Error(u1(301));
    if (e === T2)
      if (
        ((l6 = !0),
        (e = { action: r, next: null }),
        $2 === null && ($2 = new Map()),
        (r = $2.get(a)),
        r === void 0)
      )
        $2.set(a, e);
      else {
        for (a = r; a.next !== null; ) a = a.next;
        a.next = e;
      }
  }
  function Do() {
    throw Error(u1(394));
  }
  function r6() {}
  var Ne = {
      readContext: function (e) {
        return e._currentValue2;
      },
      useContext: function (e) {
        return n3(), e._currentValue2;
      },
      useMemo: we,
      useReducer: ye,
      useRef: function (e) {
        (T2 = n3()), (H1 = y8());
        var a = H1.memoizedState;
        return a === null ? ((e = { current: e }), (H1.memoizedState = e)) : a;
      },
      useState: function (e) {
        return ye(ea, e);
      },
      useInsertionEffect: r6,
      useLayoutEffect: function () {},
      useCallback: function (e, a) {
        return we(function () {
          return e;
        }, a);
      },
      useImperativeHandle: r6,
      useEffect: r6,
      useDebugValue: r6,
      useDeferredValue: function (e) {
        return n3(), e;
      },
      useTransition: function () {
        return n3(), [!1, Do];
      },
      useId: function () {
        var e = b8.treeContext,
          a = e.overflow;
        (e = e.id), (e = (e & ~(1 << (32 - t6(e) - 1))).toString(32) + a);
        var r = o6;
        if (r === null) throw Error(u1(404));
        return (
          (a = e4++),
          (e = ':' + r.idPrefix + 'R' + e),
          0 < a && (e += 'H' + a.toString(32)),
          e + ':'
        );
      },
      useMutableSource: function (e, a) {
        return n3(), a(e._source);
      },
      useSyncExternalStore: function (e, a, r) {
        if (r === void 0) throw Error(u1(407));
        return r();
      },
    },
    o6 = null,
    p8 =
      Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher;
  function Oo(e) {
    return console.error(e), null;
  }
  function Q3() {}
  function _o(e, a, r, c, C, n, t, o, m) {
    var u = [],
      p = new Set();
    return (
      (a = {
        destination: null,
        responseState: a,
        progressiveChunkSize: c === void 0 ? 12800 : c,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: p,
        pingedTasks: u,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: C === void 0 ? Oo : C,
        onAllReady: n === void 0 ? Q3 : n,
        onShellReady: t === void 0 ? Q3 : t,
        onShellError: o === void 0 ? Q3 : o,
        onFatalError: m === void 0 ? Q3 : m,
      }),
      (r = s6(a, 0, null, r, !1, !1)),
      (r.parentFlushed = !0),
      (e = N8(a, e, null, r, p, Xe, null, Ao)),
      u.push(e),
      a
    );
  }
  function N8(e, a, r, c, C, n, t, o) {
    e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
    var m = {
      node: a,
      ping: function () {
        var u = e.pingedTasks;
        u.push(m), u.length === 1 && ca(e);
      },
      blockedBoundary: r,
      blockedSegment: c,
      abortSet: C,
      legacyContext: n,
      context: t,
      treeContext: o,
    };
    return C.add(m), m;
  }
  function s6(e, a, r, c, C, n) {
    return {
      status: 0,
      id: -1,
      index: a,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: c,
      boundary: r,
      lastPushedText: C,
      textEmbedded: n,
    };
  }
  function a4(e, a) {
    if (((e = e.onError(a)), e != null && typeof e != 'string'))
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof e +
          '" instead'
      );
    return e;
  }
  function u6(e, a) {
    var r = e.onShellError;
    r(a),
      (r = e.onFatalError),
      r(a),
      e.destination !== null
        ? ((e.status = 2), e.destination.destroy(a))
        : ((e.status = 1), (e.fatalError = a));
  }
  function ke(e, a, r, c, C) {
    for (T2 = {}, b8 = a, e4 = 0, e = r(c, C); l6; )
      (l6 = !1), (e4 = 0), (v6 += 1), (H1 = null), (e = r(c, C));
    return w8(), e;
  }
  function Ae(e, a, r, c) {
    var C = r.render(),
      n = c.childContextTypes;
    if (n != null) {
      var t = a.legacyContext;
      if (typeof r.getChildContext != 'function') c = t;
      else {
        r = r.getChildContext();
        for (var o in r)
          if (!(o in n)) throw Error(u1(108, d8(c) || 'Unknown', o));
        c = Z3({}, t, r);
      }
      (a.legacyContext = c), r2(e, a, C), (a.legacyContext = t);
    } else r2(e, a, C);
  }
  function Pe(e, a) {
    if (e && e.defaultProps) {
      (a = Z3({}, a)), (e = e.defaultProps);
      for (var r in e) a[r] === void 0 && (a[r] = e[r]);
      return a;
    }
    return a;
  }
  function H8(e, a, r, c, C) {
    if (typeof r == 'function')
      if (r.prototype && r.prototype.isReactComponent) {
        C = ge(r, a.legacyContext);
        var n = r.contextType;
        (n = new r(
          c,
          typeof n == 'object' && n !== null ? n._currentValue2 : C
        )),
          Se(n, r, c, C),
          Ae(e, a, n, r);
      } else {
        (n = ge(r, a.legacyContext)), (C = ke(e, a, r, c, n));
        var t = e4 !== 0;
        if (
          typeof C == 'object' &&
          C !== null &&
          typeof C.render == 'function' &&
          C.$$typeof === void 0
        )
          Se(C, r, c, n), Ae(e, a, C, r);
        else if (t) {
          (c = a.treeContext), (a.treeContext = L8(c, 1, 0));
          try {
            r2(e, a, C);
          } finally {
            a.treeContext = c;
          }
        } else r2(e, a, C);
      }
    else if (typeof r == 'string') {
      switch (
        ((C = a.blockedSegment),
        (n = Ho(C.chunks, r, c, e.responseState, C.formatContext)),
        (C.lastPushedText = !1),
        (t = C.formatContext),
        (C.formatContext = po(t, r, c)),
        V8(e, a, n),
        (C.formatContext = t),
        r)
      ) {
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'embed':
        case 'hr':
        case 'img':
        case 'input':
        case 'keygen':
        case 'link':
        case 'meta':
        case 'param':
        case 'source':
        case 'track':
        case 'wbr':
          break;
        default:
          C.chunks.push('</', r, '>');
      }
      C.lastPushedText = !1;
    } else {
      switch (r) {
        case No:
        case wo:
        case qe:
        case Ie:
        case _e:
          r2(e, a, c.children);
          return;
        case $e:
          r2(e, a, c.children);
          return;
        case yo:
          throw Error(u1(343));
        case Ge:
          e: {
            (r = a.blockedBoundary),
              (C = a.blockedSegment),
              (n = c.fallback),
              (c = c.children),
              (t = new Set());
            var o = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: t,
                errorDigest: null,
              },
              m = s6(e, C.chunks.length, o, C.formatContext, !1, !1);
            C.children.push(m), (C.lastPushedText = !1);
            var u = s6(e, 0, null, C.formatContext, !1, !1);
            (u.parentFlushed = !0),
              (a.blockedBoundary = o),
              (a.blockedSegment = u);
            try {
              if (
                (V8(e, a, c),
                e.responseState.generateStaticMarkup ||
                  (u.lastPushedText &&
                    u.textEmbedded &&
                    u.chunks.push('<!-- -->')),
                (u.status = 1),
                h6(o, u),
                o.pendingTasks === 0)
              )
                break e;
            } catch (p) {
              (u.status = 4),
                (o.forceClientRender = !0),
                (o.errorDigest = a4(e, p));
            } finally {
              (a.blockedBoundary = r), (a.blockedSegment = C);
            }
            (a = N8(e, n, r, m, t, a.legacyContext, a.context, a.treeContext)),
              e.pingedTasks.push(a);
          }
          return;
      }
      if (typeof r == 'object' && r !== null)
        switch (r.$$typeof) {
          case We:
            if (((c = ke(e, a, r.render, c, C)), e4 !== 0)) {
              (r = a.treeContext), (a.treeContext = L8(r, 1, 0));
              try {
                r2(e, a, c);
              } finally {
                a.treeContext = r;
              }
            } else r2(e, a, c);
            return;
          case Ye:
            (r = r.type), (c = Pe(r, c)), H8(e, a, r, c, C);
            return;
          case Ue:
            if (
              ((C = c.children),
              (r = r._context),
              (c = c.value),
              (n = r._currentValue2),
              (r._currentValue2 = c),
              (t = t3),
              (t3 = c =
                {
                  parent: t,
                  depth: t === null ? 0 : t.depth + 1,
                  context: r,
                  parentValue: n,
                  value: c,
                }),
              (a.context = c),
              r2(e, a, C),
              (e = t3),
              e === null)
            )
              throw Error(u1(403));
            (c = e.parentValue),
              (e.context._currentValue2 =
                c === ko ? e.context._defaultValue : c),
              (e = t3 = e.parent),
              (a.context = e);
            return;
          case je:
            (c = c.children), (c = c(r._currentValue2)), r2(e, a, c);
            return;
          case S8:
            (C = r._init),
              (r = C(r._payload)),
              (c = Pe(r, c)),
              H8(e, a, r, c, void 0);
            return;
        }
      throw Error(u1(130, r == null ? r : typeof r, ''));
    }
  }
  function r2(e, a, r) {
    if (((a.node = r), typeof r == 'object' && r !== null)) {
      switch (r.$$typeof) {
        case bo:
          H8(e, a, r.type, r.props, r.ref);
          return;
        case Oe:
          throw Error(u1(257));
        case S8:
          var c = r._init;
          (r = c(r._payload)), r2(e, a, r);
          return;
      }
      if (M8(r)) {
        Re(e, a, r);
        return;
      }
      if (
        (r === null || typeof r != 'object'
          ? (c = null)
          : ((c = (Ve && r[Ve]) || r['@@iterator']),
            (c = typeof c == 'function' ? c : null)),
        c && (c = c.call(r)))
      ) {
        if (((r = c.next()), !r.done)) {
          var C = [];
          do C.push(r.value), (r = c.next());
          while (!r.done);
          Re(e, a, C);
        }
        return;
      }
      throw (
        ((e = Object.prototype.toString.call(r)),
        Error(
          u1(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(r).join(', ') + '}'
              : e
          )
        ))
      );
    }
    typeof r == 'string'
      ? ((c = a.blockedSegment),
        (c.lastPushedText = He(
          a.blockedSegment.chunks,
          r,
          e.responseState,
          c.lastPushedText
        )))
      : typeof r == 'number' &&
        ((c = a.blockedSegment),
        (c.lastPushedText = He(
          a.blockedSegment.chunks,
          '' + r,
          e.responseState,
          c.lastPushedText
        )));
  }
  function Re(e, a, r) {
    for (var c = r.length, C = 0; C < c; C++) {
      var n = a.treeContext;
      a.treeContext = L8(n, c, C);
      try {
        V8(e, a, r[C]);
      } finally {
        a.treeContext = n;
      }
    }
  }
  function V8(e, a, r) {
    var c = a.blockedSegment.formatContext,
      C = a.legacyContext,
      n = a.context;
    try {
      return r2(e, a, r);
    } catch (m) {
      if (
        (w8(),
        typeof m == 'object' && m !== null && typeof m.then == 'function')
      ) {
        r = m;
        var t = a.blockedSegment,
          o = s6(
            e,
            t.chunks.length,
            null,
            t.formatContext,
            t.lastPushedText,
            !0
          );
        t.children.push(o),
          (t.lastPushedText = !1),
          (e = N8(
            e,
            a.node,
            a.blockedBoundary,
            o,
            a.abortSet,
            a.legacyContext,
            a.context,
            a.treeContext
          ).ping),
          r.then(e, e),
          (a.blockedSegment.formatContext = c),
          (a.legacyContext = C),
          (a.context = n),
          f6(n);
      } else
        throw (
          ((a.blockedSegment.formatContext = c),
          (a.legacyContext = C),
          (a.context = n),
          f6(n),
          m)
        );
    }
  }
  function qo(e) {
    var a = e.blockedBoundary;
    (e = e.blockedSegment), (e.status = 3), ra(this, a, e);
  }
  function aa(e, a, r) {
    var c = e.blockedBoundary;
    (e.blockedSegment.status = 3),
      c === null
        ? (a.allPendingTasks--,
          a.status !== 2 &&
            ((a.status = 2),
            a.destination !== null && a.destination.push(null)))
        : (c.pendingTasks--,
          c.forceClientRender ||
            ((c.forceClientRender = !0),
            (e = r === void 0 ? Error(u1(432)) : r),
            (c.errorDigest = a.onError(e)),
            c.parentFlushed && a.clientRenderedBoundaries.push(c)),
          c.fallbackAbortableTasks.forEach(function (C) {
            return aa(C, a, r);
          }),
          c.fallbackAbortableTasks.clear(),
          a.allPendingTasks--,
          a.allPendingTasks === 0 && ((c = a.onAllReady), c()));
  }
  function h6(e, a) {
    if (
      a.chunks.length === 0 &&
      a.children.length === 1 &&
      a.children[0].boundary === null
    ) {
      var r = a.children[0];
      (r.id = a.id), (r.parentFlushed = !0), r.status === 1 && h6(e, r);
    } else e.completedSegments.push(a);
  }
  function ra(e, a, r) {
    if (a === null) {
      if (r.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u1(389));
        e.completedRootSegment = r;
      }
      e.pendingRootTasks--,
        e.pendingRootTasks === 0 &&
          ((e.onShellError = Q3), (a = e.onShellReady), a());
    } else
      a.pendingTasks--,
        a.forceClientRender ||
          (a.pendingTasks === 0
            ? (r.parentFlushed && r.status === 1 && h6(a, r),
              a.parentFlushed && e.completedBoundaries.push(a),
              a.fallbackAbortableTasks.forEach(qo, e),
              a.fallbackAbortableTasks.clear())
            : r.parentFlushed &&
              r.status === 1 &&
              (h6(a, r),
              a.completedSegments.length === 1 &&
                a.parentFlushed &&
                e.partialBoundaries.push(a)));
    e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
  }
  function ca(e) {
    if (e.status !== 2) {
      var a = t3,
        r = p8.current;
      p8.current = Ne;
      var c = o6;
      o6 = e.responseState;
      try {
        var C = e.pingedTasks,
          n;
        for (n = 0; n < C.length; n++) {
          var t = C[n],
            o = e,
            m = t.blockedSegment;
          if (m.status === 0) {
            f6(t.context);
            try {
              r2(o, t, t.node),
                o.responseState.generateStaticMarkup ||
                  (m.lastPushedText &&
                    m.textEmbedded &&
                    m.chunks.push('<!-- -->')),
                t.abortSet.delete(t),
                (m.status = 1),
                ra(o, t.blockedBoundary, m);
            } catch (S) {
              if (
                (w8(),
                typeof S == 'object' &&
                  S !== null &&
                  typeof S.then == 'function')
              ) {
                var u = t.ping;
                S.then(u, u);
              } else {
                t.abortSet.delete(t), (m.status = 4);
                var p = t.blockedBoundary,
                  x = S,
                  L = a4(o, x);
                if (
                  (p === null
                    ? u6(o, x)
                    : (p.pendingTasks--,
                      p.forceClientRender ||
                        ((p.forceClientRender = !0),
                        (p.errorDigest = L),
                        p.parentFlushed && o.clientRenderedBoundaries.push(p))),
                  o.allPendingTasks--,
                  o.allPendingTasks === 0)
                ) {
                  var d = o.onAllReady;
                  d();
                }
              }
            } finally {
            }
          }
        }
        C.splice(0, n), e.destination !== null && k8(e, e.destination);
      } catch (S) {
        a4(e, S), u6(e, S);
      } finally {
        (o6 = c), (p8.current = r), r === Ne && f6(a);
      }
    }
  }
  function c6(e, a, r) {
    switch (((r.parentFlushed = !0), r.status)) {
      case 0:
        var c = (r.id = e.nextSegmentId++);
        return (
          (r.lastPushedText = !1),
          (r.textEmbedded = !1),
          (e = e.responseState),
          a.push('<template id="'),
          a.push(e.placeholderPrefix),
          (e = c.toString(16)),
          a.push(e),
          a.push('"></template>')
        );
      case 1:
        r.status = 2;
        var C = !0;
        c = r.chunks;
        var n = 0;
        r = r.children;
        for (var t = 0; t < r.length; t++) {
          for (C = r[t]; n < C.index; n++) a.push(c[n]);
          C = z6(e, a, C);
        }
        for (; n < c.length - 1; n++) a.push(c[n]);
        return n < c.length && (C = a.push(c[n])), C;
      default:
        throw Error(u1(390));
    }
  }
  function z6(e, a, r) {
    var c = r.boundary;
    if (c === null) return c6(e, a, r);
    if (((c.parentFlushed = !0), c.forceClientRender))
      return (
        e.responseState.generateStaticMarkup ||
          ((c = c.errorDigest),
          a.push('<!--$!-->'),
          a.push('<template'),
          c && (a.push(' data-dgst="'), (c = W1(c)), a.push(c), a.push('"')),
          a.push('></template>')),
        c6(e, a, r),
        (e = e.responseState.generateStaticMarkup ? !0 : a.push('<!--/$-->')),
        e
      );
    if (0 < c.pendingTasks) {
      (c.rootSegmentID = e.nextSegmentId++),
        0 < c.completedSegments.length && e.partialBoundaries.push(c);
      var C = e.responseState,
        n = C.nextSuspenseID++;
      return (
        (C = C.boundaryPrefix + n.toString(16)),
        (c = c.id = C),
        Le(a, e.responseState, c),
        c6(e, a, r),
        a.push('<!--/$-->')
      );
    }
    if (c.byteSize > e.progressiveChunkSize)
      return (
        (c.rootSegmentID = e.nextSegmentId++),
        e.completedBoundaries.push(c),
        Le(a, e.responseState, c.id),
        c6(e, a, r),
        a.push('<!--/$-->')
      );
    if (
      (e.responseState.generateStaticMarkup || a.push('<!--$-->'),
      (r = c.completedSegments),
      r.length !== 1)
    )
      throw Error(u1(391));
    return (
      z6(e, a, r[0]),
      (e = e.responseState.generateStaticMarkup ? !0 : a.push('<!--/$-->')),
      e
    );
  }
  function Te(e, a, r) {
    return (
      Vo(a, e.responseState, r.formatContext, r.id),
      z6(e, a, r),
      go(a, r.formatContext)
    );
  }
  function Fe(e, a, r) {
    for (var c = r.completedSegments, C = 0; C < c.length; C++)
      Ca(e, a, r, c[C]);
    if (
      ((c.length = 0),
      (e = e.responseState),
      (c = r.id),
      (r = r.rootSegmentID),
      a.push(e.startInlineScript),
      e.sentCompleteBoundaryFunction
        ? a.push('$RC("')
        : ((e.sentCompleteBoundaryFunction = !0),
          a.push(
            'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
          )),
      c === null)
    )
      throw Error(u1(395));
    return (
      (r = r.toString(16)),
      a.push(c),
      a.push('","'),
      a.push(e.segmentPrefix),
      a.push(r),
      a.push('")</script>')
    );
  }
  function Ca(e, a, r, c) {
    if (c.status === 2) return !0;
    var C = c.id;
    if (C === -1) {
      if ((c.id = r.rootSegmentID) === -1) throw Error(u1(392));
      return Te(e, a, c);
    }
    return (
      Te(e, a, c),
      (e = e.responseState),
      a.push(e.startInlineScript),
      e.sentCompleteSegmentFunction
        ? a.push('$RS("')
        : ((e.sentCompleteSegmentFunction = !0),
          a.push(
            'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
          )),
      a.push(e.segmentPrefix),
      (C = C.toString(16)),
      a.push(C),
      a.push('","'),
      a.push(e.placeholderPrefix),
      a.push(C),
      a.push('")</script>')
    );
  }
  function k8(e, a) {
    try {
      var r = e.completedRootSegment;
      if (r !== null && e.pendingRootTasks === 0) {
        z6(e, a, r), (e.completedRootSegment = null);
        var c = e.responseState.bootstrapChunks;
        for (r = 0; r < c.length - 1; r++) a.push(c[r]);
        r < c.length && a.push(c[r]);
      }
      var C = e.clientRenderedBoundaries,
        n;
      for (n = 0; n < C.length; n++) {
        var t = C[n];
        c = a;
        var o = e.responseState,
          m = t.id,
          u = t.errorDigest,
          p = t.errorMessage,
          x = t.errorComponentStack;
        if (
          (c.push(o.startInlineScript),
          o.sentClientRenderFunction
            ? c.push('$RX("')
            : ((o.sentClientRenderFunction = !0),
              c.push(
                'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
              )),
          m === null)
        )
          throw Error(u1(395));
        if ((c.push(m), c.push('"'), u || p || x)) {
          c.push(',');
          var L = z8(u || '');
          c.push(L);
        }
        if (p || x) {
          c.push(',');
          var d = z8(p || '');
          c.push(d);
        }
        if (x) {
          c.push(',');
          var S = z8(x);
          c.push(S);
        }
        if (!c.push(')</script>')) {
          (e.destination = null), n++, C.splice(0, n);
          return;
        }
      }
      C.splice(0, n);
      var k = e.completedBoundaries;
      for (n = 0; n < k.length; n++)
        if (!Fe(e, a, k[n])) {
          (e.destination = null), n++, k.splice(0, n);
          return;
        }
      k.splice(0, n);
      var F = e.partialBoundaries;
      for (n = 0; n < F.length; n++) {
        var R = F[n];
        e: {
          (C = e), (t = a);
          var U = R.completedSegments;
          for (o = 0; o < U.length; o++)
            if (!Ca(C, t, R, U[o])) {
              o++, U.splice(0, o);
              var J = !1;
              break e;
            }
          U.splice(0, o), (J = !0);
        }
        if (!J) {
          (e.destination = null), n++, F.splice(0, n);
          return;
        }
      }
      F.splice(0, n);
      var Y = e.completedBoundaries;
      for (n = 0; n < Y.length; n++)
        if (!Fe(e, a, Y[n])) {
          (e.destination = null), n++, Y.splice(0, n);
          return;
        }
      Y.splice(0, n);
    } finally {
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        a.push(null);
    }
  }
  function Io(e, a) {
    try {
      var r = e.abortableTasks;
      r.forEach(function (c) {
        return aa(c, e, a);
      }),
        r.clear(),
        e.destination !== null && k8(e, e.destination);
    } catch (c) {
      a4(e, c), u6(e, c);
    }
  }
  function Uo() {}
  function na(e, a, r, c) {
    var C = !1,
      n = null,
      t = '',
      o = {
        push: function (u) {
          return u !== null && (t += u), !0;
        },
        destroy: function (u) {
          (C = !0), (n = u);
        },
      },
      m = !1;
    if (
      ((e = _o(
        e,
        So(r, a ? a.identifierPrefix : void 0),
        { insertionMode: 1, selectedValue: null },
        1 / 0,
        Uo,
        void 0,
        function () {
          m = !0;
        },
        void 0,
        void 0
      )),
      ca(e),
      Io(e, c),
      e.status === 1)
    )
      (e.status = 2), o.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = o;
      try {
        k8(e, o);
      } catch (u) {
        a4(e, u), u6(e, u);
      }
    }
    if (C) throw n;
    if (!m) throw Error(u1(426));
    return t;
  }
  b3.renderToNodeStream = function () {
    throw Error(u1(207));
  };
  b3.renderToStaticMarkup = function (e, a) {
    return na(
      e,
      a,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  };
  b3.renderToStaticNodeStream = function () {
    throw Error(u1(208));
  };
  b3.renderToString = function (e, a) {
    return na(
      e,
      a,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  };
  b3.version = '18.2.0';
});
var Cr = K((J8) => {
  'use strict';
  w();
  var Ra = A1();
  function m1(e) {
    for (
      var a = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      a += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      a +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var C2 = null,
    n2 = 0;
  function Z(e, a) {
    if (a.length !== 0)
      if (512 < a.length)
        0 < n2 &&
          (e.enqueue(new Uint8Array(C2.buffer, 0, n2)),
          (C2 = new Uint8Array(512)),
          (n2 = 0)),
          e.enqueue(a);
      else {
        var r = C2.length - n2;
        r < a.length &&
          (r === 0
            ? e.enqueue(C2)
            : (C2.set(a.subarray(0, r), n2),
              e.enqueue(C2),
              (a = a.subarray(r))),
          (C2 = new Uint8Array(512)),
          (n2 = 0)),
          C2.set(a, n2),
          (n2 += a.length);
      }
  }
  function S1(e, a) {
    return Z(e, a), !0;
  }
  function ia(e) {
    C2 &&
      0 < n2 &&
      (e.enqueue(new Uint8Array(C2.buffer, 0, n2)), (C2 = null), (n2 = 0));
  }
  var Ta = new TextEncoder();
  function v1(e) {
    return Ta.encode(e);
  }
  function $(e) {
    return Ta.encode(e);
  }
  function Fa(e, a) {
    typeof e.error == 'function' ? e.error(a) : e.close();
  }
  var J1 = Object.prototype.hasOwnProperty,
    jo =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    oa = {},
    fa = {};
  function Ea(e) {
    return J1.call(fa, e)
      ? !0
      : J1.call(oa, e)
      ? !1
      : jo.test(e)
      ? (fa[e] = !0)
      : ((oa[e] = !0), !1);
  }
  function $1(e, a, r, c, C, n, t) {
    (this.acceptsBooleans = a === 2 || a === 3 || a === 4),
      (this.attributeName = c),
      (this.attributeNamespace = C),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = a),
      (this.sanitizeURL = n),
      (this.removeEmptyString = t);
  }
  var E1 = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      E1[e] = new $1(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var a = e[0];
    E1[a] = new $1(a, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    E1[e] = new $1(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    E1[e] = new $1(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      E1[e] = new $1(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    E1[e] = new $1(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    E1[e] = new $1(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    E1[e] = new $1(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    E1[e] = new $1(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var I8 = /[\-:]([a-z])/g;
  function U8(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var a = e.replace(I8, U8);
      E1[a] = new $1(a, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var a = e.replace(I8, U8);
      E1[a] = new $1(a, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var a = e.replace(I8, U8);
    E1[a] = new $1(a, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    E1[e] = new $1(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  E1.xlinkHref = new $1(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    E1[e] = new $1(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var d6 = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Wo = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(d6).forEach(function (e) {
    Wo.forEach(function (a) {
      (a = a + e.charAt(0).toUpperCase() + e.substring(1)), (d6[a] = d6[e]);
    });
  });
  var Go = /["'&<>]/;
  function F1(e) {
    if (typeof e == 'boolean' || typeof e == 'number') return '' + e;
    e = '' + e;
    var a = Go.exec(e);
    if (a) {
      var r = '',
        c,
        C = 0;
      for (c = a.index; c < e.length; c++) {
        switch (e.charCodeAt(c)) {
          case 34:
            a = '&quot;';
            break;
          case 38:
            a = '&amp;';
            break;
          case 39:
            a = '&#x27;';
            break;
          case 60:
            a = '&lt;';
            break;
          case 62:
            a = '&gt;';
            break;
          default:
            continue;
        }
        C !== c && (r += e.substring(C, c)), (C = c + 1), (r += a);
      }
      e = C !== c ? r + e.substring(C, c) : r;
    }
    return e;
  }
  var $o = /([A-Z])/g,
    Yo = /^ms-/,
    B8 = Array.isArray,
    Xo = $('<script>'),
    Ko = $('</script>'),
    Jo = $('<script src="'),
    Qo = $('<script type="module" src="'),
    la = $('" async=""></script>'),
    Zo = /(<\/|<)(s)(cript)/gi;
  function ef(e, a, r, c) {
    return '' + a + (r === 's' ? '\\u0073' : '\\u0053') + c;
  }
  function af(e, a, r, c, C) {
    (e = e === void 0 ? '' : e),
      (a = a === void 0 ? Xo : $('<script nonce="' + F1(a) + '">'));
    var n = [];
    if (
      (r !== void 0 && n.push(a, v1(('' + r).replace(Zo, ef)), Ko),
      c !== void 0)
    )
      for (r = 0; r < c.length; r++) n.push(Jo, v1(F1(c[r])), la);
    if (C !== void 0)
      for (c = 0; c < C.length; c++) n.push(Qo, v1(F1(C[c])), la);
    return {
      bootstrapChunks: n,
      startInlineScript: a,
      placeholderPrefix: $(e + 'P:'),
      segmentPrefix: $(e + 'S:'),
      boundaryPrefix: e + 'B:',
      idPrefix: e,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
    };
  }
  function x2(e, a) {
    return { insertionMode: e, selectedValue: a };
  }
  function rf(e) {
    return x2(
      e === 'http://www.w3.org/2000/svg'
        ? 2
        : e === 'http://www.w3.org/1998/Math/MathML'
        ? 3
        : 0,
      null
    );
  }
  function cf(e, a, r) {
    switch (a) {
      case 'select':
        return x2(1, r.value != null ? r.value : r.defaultValue);
      case 'svg':
        return x2(2, null);
      case 'math':
        return x2(3, null);
      case 'foreignObject':
        return x2(1, null);
      case 'table':
        return x2(4, null);
      case 'thead':
      case 'tbody':
      case 'tfoot':
        return x2(5, null);
      case 'colgroup':
        return x2(7, null);
      case 'tr':
        return x2(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? x2(1, null) : e;
  }
  var j8 = $('<!-- -->');
  function sa(e, a, r, c) {
    return a === '' ? c : (c && e.push(j8), e.push(v1(F1(a))), !0);
  }
  var ua = new Map(),
    Cf = $(' style="'),
    ha = $(':'),
    nf = $(';');
  function Ba(e, a, r) {
    if (typeof r != 'object') throw Error(m1(62));
    a = !0;
    for (var c in r)
      if (J1.call(r, c)) {
        var C = r[c];
        if (C != null && typeof C != 'boolean' && C !== '') {
          if (c.indexOf('--') === 0) {
            var n = v1(F1(c));
            C = v1(F1(('' + C).trim()));
          } else {
            n = c;
            var t = ua.get(n);
            t !== void 0 ||
              ((t = $(
                F1(n.replace($o, '-$1').toLowerCase().replace(Yo, '-ms-'))
              )),
              ua.set(n, t)),
              (n = t),
              (C =
                typeof C == 'number'
                  ? C === 0 || J1.call(d6, c)
                    ? v1('' + C)
                    : v1(C + 'px')
                  : v1(F1(('' + C).trim())));
          }
          a ? ((a = !1), e.push(Cf, n, ha, C)) : e.push(nf, n, ha, C);
        }
      }
    a || e.push(i3);
  }
  var Y2 = $(' '),
    y3 = $('="'),
    i3 = $('"'),
    ma = $('=""');
  function c2(e, a, r, c) {
    switch (r) {
      case 'style':
        Ba(e, a, c);
        return;
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
        return;
    }
    if (
      !(2 < r.length) ||
      (r[0] !== 'o' && r[0] !== 'O') ||
      (r[1] !== 'n' && r[1] !== 'N')
    ) {
      if (((a = E1.hasOwnProperty(r) ? E1[r] : null), a !== null)) {
        switch (typeof c) {
          case 'function':
          case 'symbol':
            return;
          case 'boolean':
            if (!a.acceptsBooleans) return;
        }
        switch (((r = v1(a.attributeName)), a.type)) {
          case 3:
            c && e.push(Y2, r, ma);
            break;
          case 4:
            c === !0
              ? e.push(Y2, r, ma)
              : c !== !1 && e.push(Y2, r, y3, v1(F1(c)), i3);
            break;
          case 5:
            isNaN(c) || e.push(Y2, r, y3, v1(F1(c)), i3);
            break;
          case 6:
            !isNaN(c) && 1 <= c && e.push(Y2, r, y3, v1(F1(c)), i3);
            break;
          default:
            a.sanitizeURL && (c = '' + c), e.push(Y2, r, y3, v1(F1(c)), i3);
        }
      } else if (Ea(r)) {
        switch (typeof c) {
          case 'function':
          case 'symbol':
            return;
          case 'boolean':
            if (
              ((a = r.toLowerCase().slice(0, 5)),
              a !== 'data-' && a !== 'aria-')
            )
              return;
        }
        e.push(Y2, v1(r), y3, v1(F1(c)), i3);
      }
    }
  }
  var X2 = $('>'),
    va = $('/>');
  function L6(e, a, r) {
    if (a != null) {
      if (r != null) throw Error(m1(60));
      if (typeof a != 'object' || !('__html' in a)) throw Error(m1(61));
      (a = a.__html), a != null && e.push(v1('' + a));
    }
  }
  function tf(e) {
    var a = '';
    return (
      Ra.Children.forEach(e, function (r) {
        r != null && (a += r);
      }),
      a
    );
  }
  var A8 = $(' selected=""');
  function P8(e, a, r, c) {
    e.push(S2(r));
    var C = (r = null),
      n;
    for (n in a)
      if (J1.call(a, n)) {
        var t = a[n];
        if (t != null)
          switch (n) {
            case 'children':
              r = t;
              break;
            case 'dangerouslySetInnerHTML':
              C = t;
              break;
            default:
              c2(e, c, n, t);
          }
      }
    return (
      e.push(X2),
      L6(e, C, r),
      typeof r == 'string' ? (e.push(v1(F1(r))), null) : r
    );
  }
  var R8 = $(`
`),
    of = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    za = new Map();
  function S2(e) {
    var a = za.get(e);
    if (a === void 0) {
      if (!of.test(e)) throw Error(m1(65, e));
      (a = $('<' + e)), za.set(e, a);
    }
    return a;
  }
  var ff = $('<!DOCTYPE html>');
  function lf(e, a, r, c, C) {
    switch (a) {
      case 'select':
        e.push(S2('select'));
        var n = null,
          t = null;
        for (p in r)
          if (J1.call(r, p)) {
            var o = r[p];
            if (o != null)
              switch (p) {
                case 'children':
                  n = o;
                  break;
                case 'dangerouslySetInnerHTML':
                  t = o;
                  break;
                case 'defaultValue':
                case 'value':
                  break;
                default:
                  c2(e, c, p, o);
              }
          }
        return e.push(X2), L6(e, t, n), n;
      case 'option':
        (t = C.selectedValue), e.push(S2('option'));
        var m = (o = null),
          u = null,
          p = null;
        for (n in r)
          if (J1.call(r, n)) {
            var x = r[n];
            if (x != null)
              switch (n) {
                case 'children':
                  o = x;
                  break;
                case 'selected':
                  u = x;
                  break;
                case 'dangerouslySetInnerHTML':
                  p = x;
                  break;
                case 'value':
                  m = x;
                default:
                  c2(e, c, n, x);
              }
          }
        if (t != null)
          if (((r = m !== null ? '' + m : tf(o)), B8(t))) {
            for (c = 0; c < t.length; c++)
              if ('' + t[c] === r) {
                e.push(A8);
                break;
              }
          } else '' + t === r && e.push(A8);
        else u && e.push(A8);
        return e.push(X2), L6(e, p, o), o;
      case 'textarea':
        e.push(S2('textarea')), (p = t = n = null);
        for (o in r)
          if (J1.call(r, o) && ((m = r[o]), m != null))
            switch (o) {
              case 'children':
                p = m;
                break;
              case 'value':
                n = m;
                break;
              case 'defaultValue':
                t = m;
                break;
              case 'dangerouslySetInnerHTML':
                throw Error(m1(91));
              default:
                c2(e, c, o, m);
            }
        if ((n === null && t !== null && (n = t), e.push(X2), p != null)) {
          if (n != null) throw Error(m1(92));
          if (B8(p) && 1 < p.length) throw Error(m1(93));
          n = '' + p;
        }
        return (
          typeof n == 'string' &&
            n[0] ===
              `
` &&
            e.push(R8),
          n !== null && e.push(v1(F1('' + n))),
          null
        );
      case 'input':
        e.push(S2('input')), (m = p = o = n = null);
        for (t in r)
          if (J1.call(r, t) && ((u = r[t]), u != null))
            switch (t) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(m1(399, 'input'));
              case 'defaultChecked':
                m = u;
                break;
              case 'defaultValue':
                o = u;
                break;
              case 'checked':
                p = u;
                break;
              case 'value':
                n = u;
                break;
              default:
                c2(e, c, t, u);
            }
        return (
          p !== null
            ? c2(e, c, 'checked', p)
            : m !== null && c2(e, c, 'checked', m),
          n !== null
            ? c2(e, c, 'value', n)
            : o !== null && c2(e, c, 'value', o),
          e.push(va),
          null
        );
      case 'menuitem':
        e.push(S2('menuitem'));
        for (var L in r)
          if (J1.call(r, L) && ((n = r[L]), n != null))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(m1(400));
              default:
                c2(e, c, L, n);
            }
        return e.push(X2), null;
      case 'title':
        e.push(S2('title')), (n = null);
        for (x in r)
          if (J1.call(r, x) && ((t = r[x]), t != null))
            switch (x) {
              case 'children':
                n = t;
                break;
              case 'dangerouslySetInnerHTML':
                throw Error(m1(434));
              default:
                c2(e, c, x, t);
            }
        return e.push(X2), n;
      case 'listing':
      case 'pre':
        e.push(S2(a)), (t = n = null);
        for (m in r)
          if (J1.call(r, m) && ((o = r[m]), o != null))
            switch (m) {
              case 'children':
                n = o;
                break;
              case 'dangerouslySetInnerHTML':
                t = o;
                break;
              default:
                c2(e, c, m, o);
            }
        if ((e.push(X2), t != null)) {
          if (n != null) throw Error(m1(60));
          if (typeof t != 'object' || !('__html' in t)) throw Error(m1(61));
          (r = t.__html),
            r != null &&
              (typeof r == 'string' &&
              0 < r.length &&
              r[0] ===
                `
`
                ? e.push(R8, v1(r))
                : e.push(v1('' + r)));
        }
        return (
          typeof n == 'string' &&
            n[0] ===
              `
` &&
            e.push(R8),
          n
        );
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'img':
      case 'keygen':
      case 'link':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
        e.push(S2(a));
        for (var d in r)
          if (J1.call(r, d) && ((n = r[d]), n != null))
            switch (d) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(m1(399, a));
              default:
                c2(e, c, d, n);
            }
        return e.push(va), null;
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return P8(e, r, a, c);
      case 'html':
        return C.insertionMode === 0 && e.push(ff), P8(e, r, a, c);
      default:
        if (a.indexOf('-') === -1 && typeof r.is != 'string')
          return P8(e, r, a, c);
        e.push(S2(a)), (t = n = null);
        for (u in r)
          if (J1.call(r, u) && ((o = r[u]), o != null))
            switch (u) {
              case 'children':
                n = o;
                break;
              case 'dangerouslySetInnerHTML':
                t = o;
                break;
              case 'style':
                Ba(e, c, o);
                break;
              case 'suppressContentEditableWarning':
              case 'suppressHydrationWarning':
                break;
              default:
                Ea(u) &&
                  typeof o != 'function' &&
                  typeof o != 'symbol' &&
                  e.push(Y2, v1(u), y3, v1(F1(o)), i3);
            }
        return e.push(X2), L6(e, t, n), n;
    }
  }
  var sf = $('</'),
    uf = $('>'),
    hf = $('<template id="'),
    mf = $('"></template>'),
    vf = $('<!--$-->'),
    zf = $('<!--$?--><template id="'),
    pf = $('"></template>'),
    Mf = $('<!--$!-->'),
    df = $('<!--/$-->'),
    Lf = $('<template'),
    Hf = $('"'),
    Vf = $(' data-dgst="');
  $(' data-msg="');
  $(' data-stck="');
  var gf = $('></template>');
  function pa(e, a, r) {
    if ((Z(e, zf), r === null)) throw Error(m1(395));
    return Z(e, r), S1(e, pf);
  }
  var xf = $('<div hidden id="'),
    Sf = $('">'),
    bf = $('</div>'),
    yf = $('<svg aria-hidden="true" style="display:none" id="'),
    wf = $('">'),
    Nf = $('</svg>'),
    kf = $('<math aria-hidden="true" style="display:none" id="'),
    Af = $('">'),
    Pf = $('</math>'),
    Rf = $('<table hidden id="'),
    Tf = $('">'),
    Ff = $('</table>'),
    Ef = $('<table hidden><tbody id="'),
    Bf = $('">'),
    Df = $('</tbody></table>'),
    Of = $('<table hidden><tr id="'),
    _f = $('">'),
    qf = $('</tr></table>'),
    If = $('<table hidden><colgroup id="'),
    Uf = $('">'),
    jf = $('</colgroup></table>');
  function Wf(e, a, r, c) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return (
          Z(e, xf), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, Sf)
        );
      case 2:
        return (
          Z(e, yf), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, wf)
        );
      case 3:
        return (
          Z(e, kf), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, Af)
        );
      case 4:
        return (
          Z(e, Rf), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, Tf)
        );
      case 5:
        return (
          Z(e, Ef), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, Bf)
        );
      case 6:
        return (
          Z(e, Of), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, _f)
        );
      case 7:
        return (
          Z(e, If), Z(e, a.segmentPrefix), Z(e, v1(c.toString(16))), S1(e, Uf)
        );
      default:
        throw Error(m1(397));
    }
  }
  function Gf(e, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
        return S1(e, bf);
      case 2:
        return S1(e, Nf);
      case 3:
        return S1(e, Pf);
      case 4:
        return S1(e, Ff);
      case 5:
        return S1(e, Df);
      case 6:
        return S1(e, qf);
      case 7:
        return S1(e, jf);
      default:
        throw Error(m1(397));
    }
  }
  var $f = $(
      'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ),
    Yf = $('$RS("'),
    Xf = $('","'),
    Kf = $('")</script>'),
    Jf = $(
      'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
    ),
    Qf = $('$RC("'),
    Zf = $('","'),
    el = $('")</script>'),
    al = $(
      'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
    ),
    rl = $('$RX("'),
    cl = $('"'),
    Cl = $(')</script>'),
    T8 = $(','),
    nl = /[<\u2028\u2029]/g;
  function F8(e) {
    return JSON.stringify(e).replace(nl, function (a) {
      switch (a) {
        case '<':
          return '\\u003c';
        case '\u2028':
          return '\\u2028';
        case '\u2029':
          return '\\u2029';
        default:
          throw Error(
            'escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React'
          );
      }
    });
  }
  var C4 = Object.assign,
    tl = Symbol.for('react.element'),
    Da = Symbol.for('react.portal'),
    Oa = Symbol.for('react.fragment'),
    _a = Symbol.for('react.strict_mode'),
    qa = Symbol.for('react.profiler'),
    Ia = Symbol.for('react.provider'),
    Ua = Symbol.for('react.context'),
    ja = Symbol.for('react.forward_ref'),
    Wa = Symbol.for('react.suspense'),
    Ga = Symbol.for('react.suspense_list'),
    $a = Symbol.for('react.memo'),
    W8 = Symbol.for('react.lazy'),
    il = Symbol.for('react.scope'),
    ol = Symbol.for('react.debug_trace_mode'),
    fl = Symbol.for('react.legacy_hidden'),
    ll = Symbol.for('react.default_value'),
    Ma = Symbol.iterator;
  function D8(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Oa:
        return 'Fragment';
      case Da:
        return 'Portal';
      case qa:
        return 'Profiler';
      case _a:
        return 'StrictMode';
      case Wa:
        return 'Suspense';
      case Ga:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ua:
          return (e.displayName || 'Context') + '.Consumer';
        case Ia:
          return (e._context.displayName || 'Context') + '.Provider';
        case ja:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case $a:
          return (
            (a = e.displayName || null), a !== null ? a : D8(e.type) || 'Memo'
          );
        case W8:
          (a = e._payload), (e = e._init);
          try {
            return D8(e(a));
          } catch {}
      }
    return null;
  }
  var Ya = {};
  function da(e, a) {
    if (((e = e.contextTypes), !e)) return Ya;
    var r = {},
      c;
    for (c in e) r[c] = a[c];
    return r;
  }
  var f3 = null;
  function N6(e, a) {
    if (e !== a) {
      (e.context._currentValue = e.parentValue), (e = e.parent);
      var r = a.parent;
      if (e === null) {
        if (r !== null) throw Error(m1(401));
      } else {
        if (r === null) throw Error(m1(401));
        N6(e, r);
      }
      a.context._currentValue = a.value;
    }
  }
  function Xa(e) {
    (e.context._currentValue = e.parentValue),
      (e = e.parent),
      e !== null && Xa(e);
  }
  function Ka(e) {
    var a = e.parent;
    a !== null && Ka(a), (e.context._currentValue = e.value);
  }
  function Ja(e, a) {
    if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null))
      throw Error(m1(402));
    e.depth === a.depth ? N6(e, a) : Ja(e, a);
  }
  function Qa(e, a) {
    var r = a.parent;
    if (r === null) throw Error(m1(402));
    e.depth === r.depth ? N6(e, r) : Qa(e, r),
      (a.context._currentValue = a.value);
  }
  function x6(e) {
    var a = f3;
    a !== e &&
      (a === null
        ? Ka(e)
        : e === null
        ? Xa(a)
        : a.depth === e.depth
        ? N6(a, e)
        : a.depth > e.depth
        ? Ja(a, e)
        : Qa(a, e),
      (f3 = e));
  }
  var La = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, a) {
      (e = e._reactInternals), e.queue !== null && e.queue.push(a);
    },
    enqueueReplaceState: function (e, a) {
      (e = e._reactInternals), (e.replace = !0), (e.queue = [a]);
    },
    enqueueForceUpdate: function () {},
  };
  function Ha(e, a, r, c) {
    var C = e.state !== void 0 ? e.state : null;
    (e.updater = La), (e.props = r), (e.state = C);
    var n = { queue: [], replace: !1 };
    e._reactInternals = n;
    var t = a.contextType;
    if (
      ((e.context = typeof t == 'object' && t !== null ? t._currentValue : c),
      (t = a.getDerivedStateFromProps),
      typeof t == 'function' &&
        ((t = t(r, C)), (C = t == null ? C : C4({}, C, t)), (e.state = C)),
      typeof a.getDerivedStateFromProps != 'function' &&
        typeof e.getSnapshotBeforeUpdate != 'function' &&
        (typeof e.UNSAFE_componentWillMount == 'function' ||
          typeof e.componentWillMount == 'function'))
    )
      if (
        ((a = e.state),
        typeof e.componentWillMount == 'function' && e.componentWillMount(),
        typeof e.UNSAFE_componentWillMount == 'function' &&
          e.UNSAFE_componentWillMount(),
        a !== e.state && La.enqueueReplaceState(e, e.state, null),
        n.queue !== null && 0 < n.queue.length)
      )
        if (
          ((a = n.queue),
          (t = n.replace),
          (n.queue = null),
          (n.replace = !1),
          t && a.length === 1)
        )
          e.state = a[0];
        else {
          for (
            n = t ? a[0] : e.state, C = !0, t = t ? 1 : 0;
            t < a.length;
            t++
          ) {
            var o = a[t];
            (o = typeof o == 'function' ? o.call(e, n, r, c) : o),
              o != null && (C ? ((C = !1), (n = C4({}, n, o))) : C4(n, o));
          }
          e.state = n;
        }
      else n.queue = null;
  }
  var sl = { id: 1, overflow: '' };
  function O8(e, a, r) {
    var c = e.id;
    e = e.overflow;
    var C = 32 - H6(c) - 1;
    (c &= ~(1 << C)), (r += 1);
    var n = 32 - H6(a) + C;
    if (30 < n) {
      var t = C - (C % 5);
      return (
        (n = (c & ((1 << t) - 1)).toString(32)),
        (c >>= t),
        (C -= t),
        { id: (1 << (32 - H6(a) + C)) | (r << C) | c, overflow: n + e }
      );
    }
    return { id: (1 << n) | (r << C) | c, overflow: e };
  }
  var H6 = Math.clz32 ? Math.clz32 : ml,
    ul = Math.log,
    hl = Math.LN2;
  function ml(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ul(e) / hl) | 0)) | 0;
  }
  function vl(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var zl = typeof Object.is == 'function' ? Object.is : vl,
    F2 = null,
    G8 = null,
    V6 = null,
    V1 = null,
    r4 = !1,
    S6 = !1,
    n4 = 0,
    K2 = null,
    k6 = 0;
  function o3() {
    if (F2 === null) throw Error(m1(321));
    return F2;
  }
  function Va() {
    if (0 < k6) throw Error(m1(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $8() {
    return (
      V1 === null
        ? V6 === null
          ? ((r4 = !1), (V6 = V1 = Va()))
          : ((r4 = !0), (V1 = V6))
        : V1.next === null
        ? ((r4 = !1), (V1 = V1.next = Va()))
        : ((r4 = !0), (V1 = V1.next)),
      V1
    );
  }
  function Y8() {
    (G8 = F2 = null), (S6 = !1), (V6 = null), (k6 = 0), (V1 = K2 = null);
  }
  function Za(e, a) {
    return typeof a == 'function' ? a(e) : a;
  }
  function ga(e, a, r) {
    if (((F2 = o3()), (V1 = $8()), r4)) {
      var c = V1.queue;
      if (((a = c.dispatch), K2 !== null && ((r = K2.get(c)), r !== void 0))) {
        K2.delete(c), (c = V1.memoizedState);
        do (c = e(c, r.action)), (r = r.next);
        while (r !== null);
        return (V1.memoizedState = c), [c, a];
      }
      return [V1.memoizedState, a];
    }
    return (
      (e =
        e === Za
          ? typeof a == 'function'
            ? a()
            : a
          : r !== void 0
          ? r(a)
          : a),
      (V1.memoizedState = e),
      (e = V1.queue = { last: null, dispatch: null }),
      (e = e.dispatch = pl.bind(null, F2, e)),
      [V1.memoizedState, e]
    );
  }
  function xa(e, a) {
    if (
      ((F2 = o3()), (V1 = $8()), (a = a === void 0 ? null : a), V1 !== null)
    ) {
      var r = V1.memoizedState;
      if (r !== null && a !== null) {
        var c = r[1];
        e: if (c === null) c = !1;
        else {
          for (var C = 0; C < c.length && C < a.length; C++)
            if (!zl(a[C], c[C])) {
              c = !1;
              break e;
            }
          c = !0;
        }
        if (c) return r[0];
      }
    }
    return (e = e()), (V1.memoizedState = [e, a]), e;
  }
  function pl(e, a, r) {
    if (25 <= k6) throw Error(m1(301));
    if (e === F2)
      if (
        ((S6 = !0),
        (e = { action: r, next: null }),
        K2 === null && (K2 = new Map()),
        (r = K2.get(a)),
        r === void 0)
      )
        K2.set(a, e);
      else {
        for (a = r; a.next !== null; ) a = a.next;
        a.next = e;
      }
  }
  function Ml() {
    throw Error(m1(394));
  }
  function p6() {}
  var Sa = {
      readContext: function (e) {
        return e._currentValue;
      },
      useContext: function (e) {
        return o3(), e._currentValue;
      },
      useMemo: xa,
      useReducer: ga,
      useRef: function (e) {
        (F2 = o3()), (V1 = $8());
        var a = V1.memoizedState;
        return a === null ? ((e = { current: e }), (V1.memoizedState = e)) : a;
      },
      useState: function (e) {
        return ga(Za, e);
      },
      useInsertionEffect: p6,
      useLayoutEffect: function () {},
      useCallback: function (e, a) {
        return xa(function () {
          return e;
        }, a);
      },
      useImperativeHandle: p6,
      useEffect: p6,
      useDebugValue: p6,
      useDeferredValue: function (e) {
        return o3(), e;
      },
      useTransition: function () {
        return o3(), [!1, Ml];
      },
      useId: function () {
        var e = G8.treeContext,
          a = e.overflow;
        (e = e.id), (e = (e & ~(1 << (32 - H6(e) - 1))).toString(32) + a);
        var r = g6;
        if (r === null) throw Error(m1(404));
        return (
          (a = n4++),
          (e = ':' + r.idPrefix + 'R' + e),
          0 < a && (e += 'H' + a.toString(32)),
          e + ':'
        );
      },
      useMutableSource: function (e, a) {
        return o3(), a(e._source);
      },
      useSyncExternalStore: function (e, a, r) {
        if (r === void 0) throw Error(m1(407));
        return r();
      },
    },
    g6 = null,
    E8 =
      Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher;
  function dl(e) {
    return console.error(e), null;
  }
  function c4() {}
  function Ll(e, a, r, c, C, n, t, o, m) {
    var u = [],
      p = new Set();
    return (
      (a = {
        destination: null,
        responseState: a,
        progressiveChunkSize: c === void 0 ? 12800 : c,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: p,
        pingedTasks: u,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: C === void 0 ? dl : C,
        onAllReady: n === void 0 ? c4 : n,
        onShellReady: t === void 0 ? c4 : t,
        onShellError: o === void 0 ? c4 : o,
        onFatalError: m === void 0 ? c4 : m,
      }),
      (r = b6(a, 0, null, r, !1, !1)),
      (r.parentFlushed = !0),
      (e = X8(a, e, null, r, p, Ya, null, sl)),
      u.push(e),
      a
    );
  }
  function X8(e, a, r, c, C, n, t, o) {
    e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
    var m = {
      node: a,
      ping: function () {
        var u = e.pingedTasks;
        u.push(m), u.length === 1 && rr(e);
      },
      blockedBoundary: r,
      blockedSegment: c,
      abortSet: C,
      legacyContext: n,
      context: t,
      treeContext: o,
    };
    return C.add(m), m;
  }
  function b6(e, a, r, c, C, n) {
    return {
      status: 0,
      id: -1,
      index: a,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: c,
      boundary: r,
      lastPushedText: C,
      textEmbedded: n,
    };
  }
  function t4(e, a) {
    if (((e = e.onError(a)), e != null && typeof e != 'string'))
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof e +
          '" instead'
      );
    return e;
  }
  function y6(e, a) {
    var r = e.onShellError;
    r(a),
      (r = e.onFatalError),
      r(a),
      e.destination !== null
        ? ((e.status = 2), Fa(e.destination, a))
        : ((e.status = 1), (e.fatalError = a));
  }
  function ba(e, a, r, c, C) {
    for (F2 = {}, G8 = a, n4 = 0, e = r(c, C); S6; )
      (S6 = !1), (n4 = 0), (k6 += 1), (V1 = null), (e = r(c, C));
    return Y8(), e;
  }
  function ya(e, a, r, c) {
    var C = r.render(),
      n = c.childContextTypes;
    if (n != null) {
      var t = a.legacyContext;
      if (typeof r.getChildContext != 'function') c = t;
      else {
        r = r.getChildContext();
        for (var o in r)
          if (!(o in n)) throw Error(m1(108, D8(c) || 'Unknown', o));
        c = C4({}, t, r);
      }
      (a.legacyContext = c), t2(e, a, C), (a.legacyContext = t);
    } else t2(e, a, C);
  }
  function wa(e, a) {
    if (e && e.defaultProps) {
      (a = C4({}, a)), (e = e.defaultProps);
      for (var r in e) a[r] === void 0 && (a[r] = e[r]);
      return a;
    }
    return a;
  }
  function _8(e, a, r, c, C) {
    if (typeof r == 'function')
      if (r.prototype && r.prototype.isReactComponent) {
        C = da(r, a.legacyContext);
        var n = r.contextType;
        (n = new r(
          c,
          typeof n == 'object' && n !== null ? n._currentValue : C
        )),
          Ha(n, r, c, C),
          ya(e, a, n, r);
      } else {
        (n = da(r, a.legacyContext)), (C = ba(e, a, r, c, n));
        var t = n4 !== 0;
        if (
          typeof C == 'object' &&
          C !== null &&
          typeof C.render == 'function' &&
          C.$$typeof === void 0
        )
          Ha(C, r, c, n), ya(e, a, C, r);
        else if (t) {
          (c = a.treeContext), (a.treeContext = O8(c, 1, 0));
          try {
            t2(e, a, C);
          } finally {
            a.treeContext = c;
          }
        } else t2(e, a, C);
      }
    else if (typeof r == 'string') {
      switch (
        ((C = a.blockedSegment),
        (n = lf(C.chunks, r, c, e.responseState, C.formatContext)),
        (C.lastPushedText = !1),
        (t = C.formatContext),
        (C.formatContext = cf(t, r, c)),
        q8(e, a, n),
        (C.formatContext = t),
        r)
      ) {
        case 'area':
        case 'base':
        case 'br':
        case 'col':
        case 'embed':
        case 'hr':
        case 'img':
        case 'input':
        case 'keygen':
        case 'link':
        case 'meta':
        case 'param':
        case 'source':
        case 'track':
        case 'wbr':
          break;
        default:
          C.chunks.push(sf, v1(r), uf);
      }
      C.lastPushedText = !1;
    } else {
      switch (r) {
        case fl:
        case ol:
        case _a:
        case qa:
        case Oa:
          t2(e, a, c.children);
          return;
        case Ga:
          t2(e, a, c.children);
          return;
        case il:
          throw Error(m1(343));
        case Wa:
          e: {
            (r = a.blockedBoundary),
              (C = a.blockedSegment),
              (n = c.fallback),
              (c = c.children),
              (t = new Set());
            var o = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: t,
                errorDigest: null,
              },
              m = b6(e, C.chunks.length, o, C.formatContext, !1, !1);
            C.children.push(m), (C.lastPushedText = !1);
            var u = b6(e, 0, null, C.formatContext, !1, !1);
            (u.parentFlushed = !0),
              (a.blockedBoundary = o),
              (a.blockedSegment = u);
            try {
              if (
                (q8(e, a, c),
                u.lastPushedText && u.textEmbedded && u.chunks.push(j8),
                (u.status = 1),
                w6(o, u),
                o.pendingTasks === 0)
              )
                break e;
            } catch (p) {
              (u.status = 4),
                (o.forceClientRender = !0),
                (o.errorDigest = t4(e, p));
            } finally {
              (a.blockedBoundary = r), (a.blockedSegment = C);
            }
            (a = X8(e, n, r, m, t, a.legacyContext, a.context, a.treeContext)),
              e.pingedTasks.push(a);
          }
          return;
      }
      if (typeof r == 'object' && r !== null)
        switch (r.$$typeof) {
          case ja:
            if (((c = ba(e, a, r.render, c, C)), n4 !== 0)) {
              (r = a.treeContext), (a.treeContext = O8(r, 1, 0));
              try {
                t2(e, a, c);
              } finally {
                a.treeContext = r;
              }
            } else t2(e, a, c);
            return;
          case $a:
            (r = r.type), (c = wa(r, c)), _8(e, a, r, c, C);
            return;
          case Ia:
            if (
              ((C = c.children),
              (r = r._context),
              (c = c.value),
              (n = r._currentValue),
              (r._currentValue = c),
              (t = f3),
              (f3 = c =
                {
                  parent: t,
                  depth: t === null ? 0 : t.depth + 1,
                  context: r,
                  parentValue: n,
                  value: c,
                }),
              (a.context = c),
              t2(e, a, C),
              (e = f3),
              e === null)
            )
              throw Error(m1(403));
            (c = e.parentValue),
              (e.context._currentValue =
                c === ll ? e.context._defaultValue : c),
              (e = f3 = e.parent),
              (a.context = e);
            return;
          case Ua:
            (c = c.children), (c = c(r._currentValue)), t2(e, a, c);
            return;
          case W8:
            (C = r._init),
              (r = C(r._payload)),
              (c = wa(r, c)),
              _8(e, a, r, c, void 0);
            return;
        }
      throw Error(m1(130, r == null ? r : typeof r, ''));
    }
  }
  function t2(e, a, r) {
    if (((a.node = r), typeof r == 'object' && r !== null)) {
      switch (r.$$typeof) {
        case tl:
          _8(e, a, r.type, r.props, r.ref);
          return;
        case Da:
          throw Error(m1(257));
        case W8:
          var c = r._init;
          (r = c(r._payload)), t2(e, a, r);
          return;
      }
      if (B8(r)) {
        Na(e, a, r);
        return;
      }
      if (
        (r === null || typeof r != 'object'
          ? (c = null)
          : ((c = (Ma && r[Ma]) || r['@@iterator']),
            (c = typeof c == 'function' ? c : null)),
        c && (c = c.call(r)))
      ) {
        if (((r = c.next()), !r.done)) {
          var C = [];
          do C.push(r.value), (r = c.next());
          while (!r.done);
          Na(e, a, C);
        }
        return;
      }
      throw (
        ((e = Object.prototype.toString.call(r)),
        Error(
          m1(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(r).join(', ') + '}'
              : e
          )
        ))
      );
    }
    typeof r == 'string'
      ? ((c = a.blockedSegment),
        (c.lastPushedText = sa(
          a.blockedSegment.chunks,
          r,
          e.responseState,
          c.lastPushedText
        )))
      : typeof r == 'number' &&
        ((c = a.blockedSegment),
        (c.lastPushedText = sa(
          a.blockedSegment.chunks,
          '' + r,
          e.responseState,
          c.lastPushedText
        )));
  }
  function Na(e, a, r) {
    for (var c = r.length, C = 0; C < c; C++) {
      var n = a.treeContext;
      a.treeContext = O8(n, c, C);
      try {
        q8(e, a, r[C]);
      } finally {
        a.treeContext = n;
      }
    }
  }
  function q8(e, a, r) {
    var c = a.blockedSegment.formatContext,
      C = a.legacyContext,
      n = a.context;
    try {
      return t2(e, a, r);
    } catch (m) {
      if (
        (Y8(),
        typeof m == 'object' && m !== null && typeof m.then == 'function')
      ) {
        r = m;
        var t = a.blockedSegment,
          o = b6(
            e,
            t.chunks.length,
            null,
            t.formatContext,
            t.lastPushedText,
            !0
          );
        t.children.push(o),
          (t.lastPushedText = !1),
          (e = X8(
            e,
            a.node,
            a.blockedBoundary,
            o,
            a.abortSet,
            a.legacyContext,
            a.context,
            a.treeContext
          ).ping),
          r.then(e, e),
          (a.blockedSegment.formatContext = c),
          (a.legacyContext = C),
          (a.context = n),
          x6(n);
      } else
        throw (
          ((a.blockedSegment.formatContext = c),
          (a.legacyContext = C),
          (a.context = n),
          x6(n),
          m)
        );
    }
  }
  function Hl(e) {
    var a = e.blockedBoundary;
    (e = e.blockedSegment), (e.status = 3), ar(this, a, e);
  }
  function er(e, a, r) {
    var c = e.blockedBoundary;
    (e.blockedSegment.status = 3),
      c === null
        ? (a.allPendingTasks--,
          a.status !== 2 &&
            ((a.status = 2), a.destination !== null && a.destination.close()))
        : (c.pendingTasks--,
          c.forceClientRender ||
            ((c.forceClientRender = !0),
            (e = r === void 0 ? Error(m1(432)) : r),
            (c.errorDigest = a.onError(e)),
            c.parentFlushed && a.clientRenderedBoundaries.push(c)),
          c.fallbackAbortableTasks.forEach(function (C) {
            return er(C, a, r);
          }),
          c.fallbackAbortableTasks.clear(),
          a.allPendingTasks--,
          a.allPendingTasks === 0 && ((c = a.onAllReady), c()));
  }
  function w6(e, a) {
    if (
      a.chunks.length === 0 &&
      a.children.length === 1 &&
      a.children[0].boundary === null
    ) {
      var r = a.children[0];
      (r.id = a.id), (r.parentFlushed = !0), r.status === 1 && w6(e, r);
    } else e.completedSegments.push(a);
  }
  function ar(e, a, r) {
    if (a === null) {
      if (r.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(m1(389));
        e.completedRootSegment = r;
      }
      e.pendingRootTasks--,
        e.pendingRootTasks === 0 &&
          ((e.onShellError = c4), (a = e.onShellReady), a());
    } else
      a.pendingTasks--,
        a.forceClientRender ||
          (a.pendingTasks === 0
            ? (r.parentFlushed && r.status === 1 && w6(a, r),
              a.parentFlushed && e.completedBoundaries.push(a),
              a.fallbackAbortableTasks.forEach(Hl, e),
              a.fallbackAbortableTasks.clear())
            : r.parentFlushed &&
              r.status === 1 &&
              (w6(a, r),
              a.completedSegments.length === 1 &&
                a.parentFlushed &&
                e.partialBoundaries.push(a)));
    e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
  }
  function rr(e) {
    if (e.status !== 2) {
      var a = f3,
        r = E8.current;
      E8.current = Sa;
      var c = g6;
      g6 = e.responseState;
      try {
        var C = e.pingedTasks,
          n;
        for (n = 0; n < C.length; n++) {
          var t = C[n],
            o = e,
            m = t.blockedSegment;
          if (m.status === 0) {
            x6(t.context);
            try {
              t2(o, t, t.node),
                m.lastPushedText && m.textEmbedded && m.chunks.push(j8),
                t.abortSet.delete(t),
                (m.status = 1),
                ar(o, t.blockedBoundary, m);
            } catch (S) {
              if (
                (Y8(),
                typeof S == 'object' &&
                  S !== null &&
                  typeof S.then == 'function')
              ) {
                var u = t.ping;
                S.then(u, u);
              } else {
                t.abortSet.delete(t), (m.status = 4);
                var p = t.blockedBoundary,
                  x = S,
                  L = t4(o, x);
                if (
                  (p === null
                    ? y6(o, x)
                    : (p.pendingTasks--,
                      p.forceClientRender ||
                        ((p.forceClientRender = !0),
                        (p.errorDigest = L),
                        p.parentFlushed && o.clientRenderedBoundaries.push(p))),
                  o.allPendingTasks--,
                  o.allPendingTasks === 0)
                ) {
                  var d = o.onAllReady;
                  d();
                }
              }
            } finally {
            }
          }
        }
        C.splice(0, n), e.destination !== null && K8(e, e.destination);
      } catch (S) {
        t4(e, S), y6(e, S);
      } finally {
        (g6 = c), (E8.current = r), r === Sa && x6(a);
      }
    }
  }
  function M6(e, a, r) {
    switch (((r.parentFlushed = !0), r.status)) {
      case 0:
        var c = (r.id = e.nextSegmentId++);
        return (
          (r.lastPushedText = !1),
          (r.textEmbedded = !1),
          (e = e.responseState),
          Z(a, hf),
          Z(a, e.placeholderPrefix),
          (e = v1(c.toString(16))),
          Z(a, e),
          S1(a, mf)
        );
      case 1:
        r.status = 2;
        var C = !0;
        c = r.chunks;
        var n = 0;
        r = r.children;
        for (var t = 0; t < r.length; t++) {
          for (C = r[t]; n < C.index; n++) Z(a, c[n]);
          C = A6(e, a, C);
        }
        for (; n < c.length - 1; n++) Z(a, c[n]);
        return n < c.length && (C = S1(a, c[n])), C;
      default:
        throw Error(m1(390));
    }
  }
  function A6(e, a, r) {
    var c = r.boundary;
    if (c === null) return M6(e, a, r);
    if (((c.parentFlushed = !0), c.forceClientRender))
      (c = c.errorDigest),
        S1(a, Mf),
        Z(a, Lf),
        c && (Z(a, Vf), Z(a, v1(F1(c))), Z(a, Hf)),
        S1(a, gf),
        M6(e, a, r);
    else if (0 < c.pendingTasks) {
      (c.rootSegmentID = e.nextSegmentId++),
        0 < c.completedSegments.length && e.partialBoundaries.push(c);
      var C = e.responseState,
        n = C.nextSuspenseID++;
      (C = $(C.boundaryPrefix + n.toString(16))),
        (c = c.id = C),
        pa(a, e.responseState, c),
        M6(e, a, r);
    } else if (c.byteSize > e.progressiveChunkSize)
      (c.rootSegmentID = e.nextSegmentId++),
        e.completedBoundaries.push(c),
        pa(a, e.responseState, c.id),
        M6(e, a, r);
    else {
      if ((S1(a, vf), (r = c.completedSegments), r.length !== 1))
        throw Error(m1(391));
      A6(e, a, r[0]);
    }
    return S1(a, df);
  }
  function ka(e, a, r) {
    return (
      Wf(a, e.responseState, r.formatContext, r.id),
      A6(e, a, r),
      Gf(a, r.formatContext)
    );
  }
  function Aa(e, a, r) {
    for (var c = r.completedSegments, C = 0; C < c.length; C++)
      cr(e, a, r, c[C]);
    if (
      ((c.length = 0),
      (e = e.responseState),
      (c = r.id),
      (r = r.rootSegmentID),
      Z(a, e.startInlineScript),
      e.sentCompleteBoundaryFunction
        ? Z(a, Qf)
        : ((e.sentCompleteBoundaryFunction = !0), Z(a, Jf)),
      c === null)
    )
      throw Error(m1(395));
    return (
      (r = v1(r.toString(16))),
      Z(a, c),
      Z(a, Zf),
      Z(a, e.segmentPrefix),
      Z(a, r),
      S1(a, el)
    );
  }
  function cr(e, a, r, c) {
    if (c.status === 2) return !0;
    var C = c.id;
    if (C === -1) {
      if ((c.id = r.rootSegmentID) === -1) throw Error(m1(392));
      return ka(e, a, c);
    }
    return (
      ka(e, a, c),
      (e = e.responseState),
      Z(a, e.startInlineScript),
      e.sentCompleteSegmentFunction
        ? Z(a, Yf)
        : ((e.sentCompleteSegmentFunction = !0), Z(a, $f)),
      Z(a, e.segmentPrefix),
      (C = v1(C.toString(16))),
      Z(a, C),
      Z(a, Xf),
      Z(a, e.placeholderPrefix),
      Z(a, C),
      S1(a, Kf)
    );
  }
  function K8(e, a) {
    (C2 = new Uint8Array(512)), (n2 = 0);
    try {
      var r = e.completedRootSegment;
      if (r !== null && e.pendingRootTasks === 0) {
        A6(e, a, r), (e.completedRootSegment = null);
        var c = e.responseState.bootstrapChunks;
        for (r = 0; r < c.length - 1; r++) Z(a, c[r]);
        r < c.length && S1(a, c[r]);
      }
      var C = e.clientRenderedBoundaries,
        n;
      for (n = 0; n < C.length; n++) {
        var t = C[n];
        c = a;
        var o = e.responseState,
          m = t.id,
          u = t.errorDigest,
          p = t.errorMessage,
          x = t.errorComponentStack;
        if (
          (Z(c, o.startInlineScript),
          o.sentClientRenderFunction
            ? Z(c, rl)
            : ((o.sentClientRenderFunction = !0), Z(c, al)),
          m === null)
        )
          throw Error(m1(395));
        if (
          (Z(c, m),
          Z(c, cl),
          (u || p || x) && (Z(c, T8), Z(c, v1(F8(u || '')))),
          (p || x) && (Z(c, T8), Z(c, v1(F8(p || '')))),
          x && (Z(c, T8), Z(c, v1(F8(x)))),
          !S1(c, Cl))
        ) {
          (e.destination = null), n++, C.splice(0, n);
          return;
        }
      }
      C.splice(0, n);
      var L = e.completedBoundaries;
      for (n = 0; n < L.length; n++)
        if (!Aa(e, a, L[n])) {
          (e.destination = null), n++, L.splice(0, n);
          return;
        }
      L.splice(0, n), ia(a), (C2 = new Uint8Array(512)), (n2 = 0);
      var d = e.partialBoundaries;
      for (n = 0; n < d.length; n++) {
        var S = d[n];
        e: {
          (C = e), (t = a);
          var k = S.completedSegments;
          for (o = 0; o < k.length; o++)
            if (!cr(C, t, S, k[o])) {
              o++, k.splice(0, o);
              var F = !1;
              break e;
            }
          k.splice(0, o), (F = !0);
        }
        if (!F) {
          (e.destination = null), n++, d.splice(0, n);
          return;
        }
      }
      d.splice(0, n);
      var R = e.completedBoundaries;
      for (n = 0; n < R.length; n++)
        if (!Aa(e, a, R[n])) {
          (e.destination = null), n++, R.splice(0, n);
          return;
        }
      R.splice(0, n);
    } finally {
      ia(a),
        e.allPendingTasks === 0 &&
          e.pingedTasks.length === 0 &&
          e.clientRenderedBoundaries.length === 0 &&
          e.completedBoundaries.length === 0 &&
          a.close();
    }
  }
  function Pa(e, a) {
    try {
      var r = e.abortableTasks;
      r.forEach(function (c) {
        return er(c, e, a);
      }),
        r.clear(),
        e.destination !== null && K8(e, e.destination);
    } catch (c) {
      t4(e, c), y6(e, c);
    }
  }
  J8.renderToReadableStream = function (e, a) {
    return new Promise(function (r, c) {
      var C,
        n,
        t = new Promise(function (p, x) {
          (n = p), (C = x);
        }),
        o = Ll(
          e,
          af(
            a ? a.identifierPrefix : void 0,
            a ? a.nonce : void 0,
            a ? a.bootstrapScriptContent : void 0,
            a ? a.bootstrapScripts : void 0,
            a ? a.bootstrapModules : void 0
          ),
          rf(a ? a.namespaceURI : void 0),
          a ? a.progressiveChunkSize : void 0,
          a ? a.onError : void 0,
          n,
          function () {
            var p = new ReadableStream(
              {
                type: 'bytes',
                pull: function (x) {
                  if (o.status === 1) (o.status = 2), Fa(x, o.fatalError);
                  else if (o.status !== 2 && o.destination === null) {
                    o.destination = x;
                    try {
                      K8(o, x);
                    } catch (L) {
                      t4(o, L), y6(o, L);
                    }
                  }
                },
                cancel: function () {
                  Pa(o);
                },
              },
              { highWaterMark: 0 }
            );
            (p.allReady = t), r(p);
          },
          function (p) {
            t.catch(function () {}), c(p);
          },
          C
        );
      if (a && a.signal) {
        var m = a.signal,
          u = function () {
            Pa(o, m.reason), m.removeEventListener('abort', u);
          };
        m.addEventListener('abort', u);
      }
      rr(o);
    });
  };
  J8.version = '18.2.0';
});
var tr = K((l3) => {
  'use strict';
  w();
  var w3, nr;
  (w3 = ta()), (nr = Cr());
  l3.version = w3.version;
  l3.renderToString = w3.renderToString;
  l3.renderToStaticMarkup = w3.renderToStaticMarkup;
  l3.renderToNodeStream = w3.renderToNodeStream;
  l3.renderToStaticNodeStream = w3.renderToStaticNodeStream;
  l3.renderToReadableStream = nr.renderToReadableStream;
});
var lr = K((e0) => {
  'use strict';
  w();
  Object.defineProperty(e0, '__esModule', { value: !0 });
  var Z8 = class extends Error {
    constructor() {
      super('Did you forget to run `remix setup` for your platform?');
    }
  };
  throw new Z8();
  e0.RemixNotSetupError = Z8;
});
var R6 = K((Gs, a0) => {
  w();
  function mr(e) {
    var a,
      r,
      c = '';
    if (typeof e == 'string' || typeof e == 'number') c += e;
    else if (typeof e == 'object')
      if (Array.isArray(e))
        for (a = 0; a < e.length; a++)
          e[a] && (r = mr(e[a])) && (c && (c += ' '), (c += r));
      else for (a in e) e[a] && (c && (c += ' '), (c += a));
    return c;
  }
  function hr() {
    for (var e, a, r = 0, c = ''; r < arguments.length; )
      (e = arguments[r++]) && (a = mr(e)) && (c && (c += ' '), (c += a));
    return c;
  }
  (a0.exports = hr), (a0.exports.clsx = hr);
});
var Lr = K((T6, dr) => {
  w();
  (function (e, a) {
    typeof T6 == 'object' && typeof dr < 'u'
      ? a(T6)
      : typeof define == 'function' && define.amd
      ? define(['exports'], a)
      : a((e['fontawesome-svg-core'] = {}));
  })(T6, function (e) {
    'use strict';
    function a(i, l) {
      var s = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(i);
        l &&
          (v = v.filter(function (z) {
            return Object.getOwnPropertyDescriptor(i, z).enumerable;
          })),
          s.push.apply(s, v);
      }
      return s;
    }
    function r(i) {
      for (var l = 1; l < arguments.length; l++) {
        var s = arguments[l] != null ? arguments[l] : {};
        l % 2
          ? a(Object(s), !0).forEach(function (v) {
              m(i, v, s[v]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
          : a(Object(s)).forEach(function (v) {
              Object.defineProperty(
                i,
                v,
                Object.getOwnPropertyDescriptor(s, v)
              );
            });
      }
      return i;
    }
    function c(i) {
      return (
        (c =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (l) {
                return typeof l;
              }
            : function (l) {
                return l &&
                  typeof Symbol == 'function' &&
                  l.constructor === Symbol &&
                  l !== Symbol.prototype
                  ? 'symbol'
                  : typeof l;
              }),
        c(i)
      );
    }
    function C() {
      C = function (z, y) {
        return new s(z, void 0, y);
      };
      var i = RegExp.prototype,
        l = new WeakMap();
      function s(z, y, g) {
        var P = new RegExp(z, y);
        return l.set(P, g || l.get(z)), p(P, s.prototype);
      }
      function v(z, y) {
        var g = l.get(y);
        return Object.keys(g).reduce(function (P, _) {
          return (P[_] = z[g[_]]), P;
        }, Object.create(null));
      }
      return (
        u(s, RegExp),
        (s.prototype.exec = function (z) {
          var y = i.exec.call(this, z);
          return y && (y.groups = v(y, this)), y;
        }),
        (s.prototype[Symbol.replace] = function (z, y) {
          if (typeof y == 'string') {
            var g = l.get(this);
            return i[Symbol.replace].call(
              this,
              z,
              y.replace(/\$<([^>]+)>/g, function (_, i1) {
                return '$' + g[i1];
              })
            );
          }
          if (typeof y == 'function') {
            var P = this;
            return i[Symbol.replace].call(this, z, function () {
              var _ = arguments;
              return (
                typeof _[_.length - 1] != 'object' &&
                  (_ = [].slice.call(_)).push(v(_, P)),
                y.apply(this, _)
              );
            });
          }
          return i[Symbol.replace].call(this, z, y);
        }),
        C.apply(this, arguments)
      );
    }
    function n(i, l) {
      if (!(i instanceof l))
        throw new TypeError('Cannot call a class as a function');
    }
    function t(i, l) {
      for (var s = 0; s < l.length; s++) {
        var v = l[s];
        (v.enumerable = v.enumerable || !1),
          (v.configurable = !0),
          'value' in v && (v.writable = !0),
          Object.defineProperty(i, v.key, v);
      }
    }
    function o(i, l, s) {
      return (
        l && t(i.prototype, l),
        s && t(i, s),
        Object.defineProperty(i, 'prototype', { writable: !1 }),
        i
      );
    }
    function m(i, l, s) {
      return (
        l in i
          ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = s),
        i
      );
    }
    function u(i, l) {
      if (typeof l != 'function' && l !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (i.prototype = Object.create(l && l.prototype, {
        constructor: { value: i, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(i, 'prototype', { writable: !1 }),
        l && p(i, l);
    }
    function p(i, l) {
      return (
        (p =
          Object.setPrototypeOf ||
          function (v, z) {
            return (v.__proto__ = z), v;
          }),
        p(i, l)
      );
    }
    function x(i, l) {
      return S(i) || F(i, l) || R(i, l) || Y();
    }
    function L(i) {
      return d(i) || k(i) || R(i) || J();
    }
    function d(i) {
      if (Array.isArray(i)) return U(i);
    }
    function S(i) {
      if (Array.isArray(i)) return i;
    }
    function k(i) {
      if (
        (typeof Symbol < 'u' && i[Symbol.iterator] != null) ||
        i['@@iterator'] != null
      )
        return Array.from(i);
    }
    function F(i, l) {
      var s =
        i == null
          ? null
          : (typeof Symbol < 'u' && i[Symbol.iterator]) || i['@@iterator'];
      if (s != null) {
        var v = [],
          z = !0,
          y = !1,
          g,
          P;
        try {
          for (
            s = s.call(i);
            !(z = (g = s.next()).done) &&
            (v.push(g.value), !(l && v.length === l));
            z = !0
          );
        } catch (_) {
          (y = !0), (P = _);
        } finally {
          try {
            !z && s.return != null && s.return();
          } finally {
            if (y) throw P;
          }
        }
        return v;
      }
    }
    function R(i, l) {
      if (!!i) {
        if (typeof i == 'string') return U(i, l);
        var s = Object.prototype.toString.call(i).slice(8, -1);
        if (
          (s === 'Object' && i.constructor && (s = i.constructor.name),
          s === 'Map' || s === 'Set')
        )
          return Array.from(i);
        if (
          s === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
        )
          return U(i, l);
      }
    }
    function U(i, l) {
      (l == null || l > i.length) && (l = i.length);
      for (var s = 0, v = new Array(l); s < l; s++) v[s] = i[s];
      return v;
    }
    function J() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Y() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var G = function () {},
      e1 = {},
      C1 = {},
      s1 = null,
      f1 = { mark: G, measure: G };
    try {
      typeof window < 'u' && (e1 = window),
        typeof document < 'u' && (C1 = document),
        typeof MutationObserver < 'u' && (s1 = MutationObserver),
        typeof performance < 'u' && (f1 = performance);
    } catch {}
    var Q = e1.navigator || {},
      n1 = Q.userAgent,
      o1 = n1 === void 0 ? '' : n1,
      j = e1,
      D = C1,
      W = s1,
      f = f1,
      h = !!j.document,
      M =
        !!D.documentElement &&
        !!D.head &&
        typeof D.addEventListener == 'function' &&
        typeof D.createElement == 'function',
      b = ~o1.indexOf('MSIE') || ~o1.indexOf('Trident/'),
      V = '___FONT_AWESOME___',
      E = 16,
      T = 'fa',
      q = 'svg-inline--fa',
      O = 'data-fa-i2svg',
      H = 'data-fa-pseudo-element',
      N = 'data-fa-pseudo-element-pending',
      A = 'data-prefix',
      X = 'data-icon',
      a1 = 'fontawesome-i2svg',
      h1 = 'async',
      l1 = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
      z1 = (function () {
        try {
          return !0;
        } catch {
          return !1;
        }
      })(),
      N1 = {
        fas: 'solid',
        'fa-solid': 'solid',
        far: 'regular',
        'fa-regular': 'regular',
        fal: 'light',
        'fa-light': 'light',
        fat: 'thin',
        'fa-thin': 'thin',
        fad: 'duotone',
        'fa-duotone': 'duotone',
        fab: 'brands',
        'fa-brands': 'brands',
        fak: 'kit',
        'fa-kit': 'kit',
        fa: 'solid',
      },
      y1 = {
        solid: 'fas',
        regular: 'far',
        light: 'fal',
        thin: 'fat',
        duotone: 'fad',
        brands: 'fab',
        kit: 'fak',
      },
      B1 = {
        fab: 'fa-brands',
        fad: 'fa-duotone',
        fak: 'fa-kit',
        fal: 'fa-light',
        far: 'fa-regular',
        fas: 'fa-solid',
        fat: 'fa-thin',
      },
      k1 = {
        'fa-brands': 'fab',
        'fa-duotone': 'fad',
        'fa-kit': 'fak',
        'fa-light': 'fal',
        'fa-regular': 'far',
        'fa-solid': 'fas',
        'fa-thin': 'fat',
      },
      D1 = /fa[srltdbk\-\ ]/,
      E2 = 'fa-layers-text',
      s3 =
        /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
      B2 = { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
      h2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      E6 = h2.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      B6 = [
        'class',
        'data-prefix',
        'data-icon',
        'data-fa-transform',
        'data-fa-mask',
      ],
      m2 = {
        GROUP: 'duotone-group',
        SWAP_OPACITY: 'swap-opacity',
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
      },
      o0 = []
        .concat(L(Object.keys(y1)), [
          '2xs',
          'xs',
          'sm',
          'lg',
          'xl',
          '2xl',
          'beat',
          'border',
          'fade',
          'beat-fade',
          'bounce',
          'flip-both',
          'flip-horizontal',
          'flip-vertical',
          'flip',
          'fw',
          'inverse',
          'layers-counter',
          'layers-text',
          'layers',
          'li',
          'pull-left',
          'pull-right',
          'pulse',
          'rotate-180',
          'rotate-270',
          'rotate-90',
          'rotate-by',
          'shake',
          'spin-pulse',
          'spin-reverse',
          'spin',
          'stack-1x',
          'stack-2x',
          'stack',
          'ul',
          m2.GROUP,
          m2.SWAP_OPACITY,
          m2.PRIMARY,
          m2.SECONDARY,
        ])
        .concat(
          h2.map(function (i) {
            return ''.concat(i, 'x');
          })
        )
        .concat(
          E6.map(function (i) {
            return 'w-'.concat(i);
          })
        ),
      v2 = j.FontAwesomeConfig || {};
    function f0(i) {
      var l = D.querySelector('script[' + i + ']');
      if (l) return l.getAttribute(i);
    }
    function _r(i) {
      return i === '' ? !0 : i === 'false' ? !1 : i === 'true' ? !0 : i;
    }
    if (D && typeof D.querySelector == 'function') {
      var qr = [
        ['data-family-prefix', 'familyPrefix'],
        ['data-style-default', 'styleDefault'],
        ['data-replacement-class', 'replacementClass'],
        ['data-auto-replace-svg', 'autoReplaceSvg'],
        ['data-auto-add-css', 'autoAddCss'],
        ['data-auto-a11y', 'autoA11y'],
        ['data-search-pseudo-elements', 'searchPseudoElements'],
        ['data-observe-mutations', 'observeMutations'],
        ['data-mutate-approach', 'mutateApproach'],
        ['data-keep-original-source', 'keepOriginalSource'],
        ['data-measure-performance', 'measurePerformance'],
        ['data-show-missing-icons', 'showMissingIcons'],
      ];
      qr.forEach(function (i) {
        var l = x(i, 2),
          s = l[0],
          v = l[1],
          z = _r(f0(s));
        z != null && (v2[v] = z);
      });
    }
    var Ir = {
        familyPrefix: T,
        styleDefault: 'solid',
        replacementClass: q,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: 'async',
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      },
      N3 = r(r({}, Ir), v2);
    N3.autoReplaceSvg || (N3.observeMutations = !1);
    var t1 = {};
    Object.keys(N3).forEach(function (i) {
      Object.defineProperty(t1, i, {
        enumerable: !0,
        set: function (s) {
          (N3[i] = s),
            s4.forEach(function (v) {
              return v(t1);
            });
        },
        get: function () {
          return N3[i];
        },
      });
    }),
      (j.FontAwesomeConfig = t1);
    var s4 = [];
    function Ur(i) {
      return (
        s4.push(i),
        function () {
          s4.splice(s4.indexOf(i), 1);
        }
      );
    }
    var D2 = E,
      z2 = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
    function jr(i) {
      if (!(!i || !M)) {
        var l = D.createElement('style');
        l.setAttribute('type', 'text/css'), (l.innerHTML = i);
        for (
          var s = D.head.childNodes, v = null, z = s.length - 1;
          z > -1;
          z--
        ) {
          var y = s[z],
            g = (y.tagName || '').toUpperCase();
          ['STYLE', 'LINK'].indexOf(g) > -1 && (v = y);
        }
        return D.head.insertBefore(l, v), i;
      }
    }
    var Wr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function k3() {
      for (var i = 12, l = ''; i-- > 0; ) l += Wr[(Math.random() * 62) | 0];
      return l;
    }
    function u3(i) {
      for (var l = [], s = (i || []).length >>> 0; s--; ) l[s] = i[s];
      return l;
    }
    function D6(i) {
      return i.classList
        ? u3(i.classList)
        : (i.getAttribute('class') || '').split(' ').filter(function (l) {
            return l;
          });
    }
    function l0(i) {
      return ''
        .concat(i)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
    function Gr(i) {
      return Object.keys(i || {})
        .reduce(function (l, s) {
          return l + ''.concat(s, '="').concat(l0(i[s]), '" ');
        }, '')
        .trim();
    }
    function u4(i) {
      return Object.keys(i || {}).reduce(function (l, s) {
        return l + ''.concat(s, ': ').concat(i[s].trim(), ';');
      }, '');
    }
    function O6(i) {
      return (
        i.size !== z2.size ||
        i.x !== z2.x ||
        i.y !== z2.y ||
        i.rotate !== z2.rotate ||
        i.flipX ||
        i.flipY
      );
    }
    function $r(i) {
      var l = i.transform,
        s = i.containerWidth,
        v = i.iconWidth,
        z = { transform: 'translate('.concat(s / 2, ' 256)') },
        y = 'translate('.concat(l.x * 32, ', ').concat(l.y * 32, ') '),
        g = 'scale('
          .concat((l.size / 16) * (l.flipX ? -1 : 1), ', ')
          .concat((l.size / 16) * (l.flipY ? -1 : 1), ') '),
        P = 'rotate('.concat(l.rotate, ' 0 0)'),
        _ = { transform: ''.concat(y, ' ').concat(g, ' ').concat(P) },
        i1 = { transform: 'translate('.concat((v / 2) * -1, ' -256)') };
      return { outer: z, inner: _, path: i1 };
    }
    function Yr(i) {
      var l = i.transform,
        s = i.width,
        v = s === void 0 ? E : s,
        z = i.height,
        y = z === void 0 ? E : z,
        g = i.startCentered,
        P = g === void 0 ? !1 : g,
        _ = '';
      return (
        P && b
          ? (_ += 'translate('
              .concat(l.x / D2 - v / 2, 'em, ')
              .concat(l.y / D2 - y / 2, 'em) '))
          : P
          ? (_ += 'translate(calc(-50% + '
              .concat(l.x / D2, 'em), calc(-50% + ')
              .concat(l.y / D2, 'em)) '))
          : (_ += 'translate('
              .concat(l.x / D2, 'em, ')
              .concat(l.y / D2, 'em) ')),
        (_ += 'scale('
          .concat((l.size / D2) * (l.flipX ? -1 : 1), ', ')
          .concat((l.size / D2) * (l.flipY ? -1 : 1), ') ')),
        (_ += 'rotate('.concat(l.rotate, 'deg) ')),
        _
      );
    }
    var Xr = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
    function s0() {
      var i = T,
        l = q,
        s = t1.familyPrefix,
        v = t1.replacementClass,
        z = Xr;
      if (s !== i || v !== l) {
        var y = new RegExp('\\.'.concat(i, '\\-'), 'g'),
          g = new RegExp('\\--'.concat(i, '\\-'), 'g'),
          P = new RegExp('\\.'.concat(l), 'g');
        z = z
          .replace(y, '.'.concat(s, '-'))
          .replace(g, '--'.concat(s, '-'))
          .replace(P, '.'.concat(v));
      }
      return z;
    }
    var u0 = !1;
    function _6() {
      t1.autoAddCss && !u0 && (jr(s0()), (u0 = !0));
    }
    var Kr = {
        mixout: function () {
          return { dom: { css: s0, insertCss: _6 } };
        },
        hooks: function () {
          return {
            beforeDOMElementCreation: function () {
              _6();
            },
            beforeI2svg: function () {
              _6();
            },
          };
        },
      },
      y2 = j || {};
    y2[V] || (y2[V] = {}),
      y2[V].styles || (y2[V].styles = {}),
      y2[V].hooks || (y2[V].hooks = {}),
      y2[V].shims || (y2[V].shims = []);
    var o2 = y2[V],
      h0 = [],
      Jr = function i() {
        D.removeEventListener('DOMContentLoaded', i),
          (h4 = 1),
          h0.map(function (l) {
            return l();
          });
      },
      h4 = !1;
    M &&
      ((h4 = (D.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
        D.readyState
      )),
      h4 || D.addEventListener('DOMContentLoaded', Jr));
    function Qr(i) {
      !M || (h4 ? setTimeout(i, 0) : h0.push(i));
    }
    function A3(i) {
      var l = i.tag,
        s = i.attributes,
        v = s === void 0 ? {} : s,
        z = i.children,
        y = z === void 0 ? [] : z;
      return typeof i == 'string'
        ? l0(i)
        : '<'
            .concat(l, ' ')
            .concat(Gr(v), '>')
            .concat(y.map(A3).join(''), '</')
            .concat(l, '>');
    }
    function m0(i, l, s) {
      if (i && i[l] && i[l][s])
        return { prefix: l, iconName: s, icon: i[l][s] };
    }
    var Zr = function (l, s) {
        return function (v, z, y, g) {
          return l.call(s, v, z, y, g);
        };
      },
      q6 = function (l, s, v, z) {
        var y = Object.keys(l),
          g = y.length,
          P = z !== void 0 ? Zr(s, z) : s,
          _,
          i1,
          r1;
        for (
          v === void 0 ? ((_ = 1), (r1 = l[y[0]])) : ((_ = 0), (r1 = v));
          _ < g;
          _++
        )
          (i1 = y[_]), (r1 = P(r1, l[i1], i1, l));
        return r1;
      };
    function ec(i) {
      for (var l = [], s = 0, v = i.length; s < v; ) {
        var z = i.charCodeAt(s++);
        if (z >= 55296 && z <= 56319 && s < v) {
          var y = i.charCodeAt(s++);
          (y & 64512) == 56320
            ? l.push(((z & 1023) << 10) + (y & 1023) + 65536)
            : (l.push(z), s--);
        } else l.push(z);
      }
      return l;
    }
    function I6(i) {
      var l = ec(i);
      return l.length === 1 ? l[0].toString(16) : null;
    }
    function ac(i, l) {
      var s = i.length,
        v = i.charCodeAt(l),
        z;
      return v >= 55296 &&
        v <= 56319 &&
        s > l + 1 &&
        ((z = i.charCodeAt(l + 1)), z >= 56320 && z <= 57343)
        ? (v - 55296) * 1024 + z - 56320 + 65536
        : v;
    }
    function v0(i) {
      return Object.keys(i).reduce(function (l, s) {
        var v = i[s],
          z = !!v.icon;
        return z ? (l[v.iconName] = v.icon) : (l[s] = v), l;
      }, {});
    }
    function U6(i, l) {
      var s =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        v = s.skipHooks,
        z = v === void 0 ? !1 : v,
        y = v0(l);
      typeof o2.hooks.addPack == 'function' && !z
        ? o2.hooks.addPack(i, v0(l))
        : (o2.styles[i] = r(r({}, o2.styles[i] || {}), y)),
        i === 'fas' && U6('fa', l);
    }
    var Bl = [
        C(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
          d1: 1,
          d2: 2,
        }),
        C(
          /path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,
          { cls1: 1, d1: 2, cls2: 3, d2: 4 }
        ),
        C(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
          cls1: 1,
          d1: 2,
        }),
      ],
      P3 = o2.styles,
      rc = o2.shims,
      cc = Object.values(B1),
      j6 = null,
      z0 = {},
      p0 = {},
      M0 = {},
      d0 = {},
      L0 = {},
      Cc = Object.keys(N1);
    function nc(i) {
      return ~o0.indexOf(i);
    }
    function tc(i, l) {
      var s = l.split('-'),
        v = s[0],
        z = s.slice(1).join('-');
      return v === i && z !== '' && !nc(z) ? z : null;
    }
    var H0 = function () {
      var l = function (y) {
        return q6(
          P3,
          function (g, P, _) {
            return (g[_] = q6(P, y, {})), g;
          },
          {}
        );
      };
      (z0 = l(function (z, y, g) {
        if ((y[3] && (z[y[3]] = g), y[2])) {
          var P = y[2].filter(function (_) {
            return typeof _ == 'number';
          });
          P.forEach(function (_) {
            z[_.toString(16)] = g;
          });
        }
        return z;
      })),
        (p0 = l(function (z, y, g) {
          if (((z[g] = g), y[2])) {
            var P = y[2].filter(function (_) {
              return typeof _ == 'string';
            });
            P.forEach(function (_) {
              z[_] = g;
            });
          }
          return z;
        })),
        (L0 = l(function (z, y, g) {
          var P = y[2];
          return (
            (z[g] = g),
            P.forEach(function (_) {
              z[_] = g;
            }),
            z
          );
        }));
      var s = 'far' in P3 || t1.autoFetchSvg,
        v = q6(
          rc,
          function (z, y) {
            var g = y[0],
              P = y[1],
              _ = y[2];
            return (
              P === 'far' && !s && (P = 'fas'),
              typeof g == 'string' && (z.names[g] = { prefix: P, iconName: _ }),
              typeof g == 'number' &&
                (z.unicodes[g.toString(16)] = { prefix: P, iconName: _ }),
              z
            );
          },
          { names: {}, unicodes: {} }
        );
      (M0 = v.names), (d0 = v.unicodes), (j6 = m4(t1.styleDefault));
    };
    Ur(function (i) {
      j6 = m4(i.styleDefault);
    }),
      H0();
    function W6(i, l) {
      return (z0[i] || {})[l];
    }
    function ic(i, l) {
      return (p0[i] || {})[l];
    }
    function h3(i, l) {
      return (L0[i] || {})[l];
    }
    function V0(i) {
      return M0[i] || { prefix: null, iconName: null };
    }
    function oc(i) {
      var l = d0[i],
        s = W6('fas', i);
      return (
        l ||
        (s ? { prefix: 'fas', iconName: s } : null) || {
          prefix: null,
          iconName: null,
        }
      );
    }
    function O2() {
      return j6;
    }
    var G6 = function () {
      return { prefix: null, iconName: null, rest: [] };
    };
    function m4(i) {
      var l = N1[i],
        s = y1[i] || y1[l],
        v = i in o2.styles ? i : null;
      return s || v || null;
    }
    function v4(i) {
      var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        s = l.skipLookups,
        v = s === void 0 ? !1 : s,
        z = null,
        y = i.reduce(function (g, P) {
          var _ = tc(t1.familyPrefix, P);
          if (
            (P3[P]
              ? ((P = cc.includes(P) ? k1[P] : P), (z = P), (g.prefix = P))
              : Cc.indexOf(P) > -1
              ? ((z = P), (g.prefix = m4(P)))
              : _
              ? (g.iconName = _)
              : P !== t1.replacementClass && g.rest.push(P),
            !v && g.prefix && g.iconName)
          ) {
            var i1 = z === 'fa' ? V0(g.iconName) : {},
              r1 = h3(g.prefix, g.iconName);
            i1.prefix && (z = null),
              (g.iconName = i1.iconName || r1 || g.iconName),
              (g.prefix = i1.prefix || g.prefix),
              g.prefix === 'far' &&
                !P3.far &&
                P3.fas &&
                !t1.autoFetchSvg &&
                (g.prefix = 'fas');
          }
          return g;
        }, G6());
      return (y.prefix === 'fa' || z === 'fa') && (y.prefix = O2() || 'fas'), y;
    }
    var fc = (function () {
        function i() {
          n(this, i), (this.definitions = {});
        }
        return (
          o(i, [
            {
              key: 'add',
              value: function () {
                for (
                  var s = this, v = arguments.length, z = new Array(v), y = 0;
                  y < v;
                  y++
                )
                  z[y] = arguments[y];
                var g = z.reduce(this._pullDefinitions, {});
                Object.keys(g).forEach(function (P) {
                  (s.definitions[P] = r(r({}, s.definitions[P] || {}), g[P])),
                    U6(P, g[P]);
                  var _ = B1[P];
                  _ && U6(_, g[P]), H0();
                });
              },
            },
            {
              key: 'reset',
              value: function () {
                this.definitions = {};
              },
            },
            {
              key: '_pullDefinitions',
              value: function (s, v) {
                var z = v.prefix && v.iconName && v.icon ? { 0: v } : v;
                return (
                  Object.keys(z).map(function (y) {
                    var g = z[y],
                      P = g.prefix,
                      _ = g.iconName,
                      i1 = g.icon,
                      r1 = i1[2];
                    s[P] || (s[P] = {}),
                      r1.length > 0 &&
                        r1.forEach(function (c1) {
                          typeof c1 == 'string' && (s[P][c1] = i1);
                        }),
                      (s[P][_] = i1);
                  }),
                  s
                );
              },
            },
          ]),
          i
        );
      })(),
      g0 = [],
      m3 = {},
      v3 = {},
      lc = Object.keys(v3);
    function sc(i, l) {
      var s = l.mixoutsTo;
      return (
        (g0 = i),
        (m3 = {}),
        Object.keys(v3).forEach(function (v) {
          lc.indexOf(v) === -1 && delete v3[v];
        }),
        g0.forEach(function (v) {
          var z = v.mixout ? v.mixout() : {};
          if (
            (Object.keys(z).forEach(function (g) {
              typeof z[g] == 'function' && (s[g] = z[g]),
                c(z[g]) === 'object' &&
                  Object.keys(z[g]).forEach(function (P) {
                    s[g] || (s[g] = {}), (s[g][P] = z[g][P]);
                  });
            }),
            v.hooks)
          ) {
            var y = v.hooks();
            Object.keys(y).forEach(function (g) {
              m3[g] || (m3[g] = []), m3[g].push(y[g]);
            });
          }
          v.provides && v.provides(v3);
        }),
        s
      );
    }
    function $6(i, l) {
      for (
        var s = arguments.length, v = new Array(s > 2 ? s - 2 : 0), z = 2;
        z < s;
        z++
      )
        v[z - 2] = arguments[z];
      var y = m3[i] || [];
      return (
        y.forEach(function (g) {
          l = g.apply(null, [l].concat(v));
        }),
        l
      );
    }
    function J2(i) {
      for (
        var l = arguments.length, s = new Array(l > 1 ? l - 1 : 0), v = 1;
        v < l;
        v++
      )
        s[v - 1] = arguments[v];
      var z = m3[i] || [];
      z.forEach(function (y) {
        y.apply(null, s);
      });
    }
    function w2() {
      var i = arguments[0],
        l = Array.prototype.slice.call(arguments, 1);
      return v3[i] ? v3[i].apply(null, l) : void 0;
    }
    function Y6(i) {
      i.prefix === 'fa' && (i.prefix = 'fas');
      var l = i.iconName,
        s = i.prefix || O2();
      if (!!l)
        return (
          (l = h3(s, l) || l), m0(x0.definitions, s, l) || m0(o2.styles, s, l)
        );
    }
    var x0 = new fc(),
      uc = function () {
        (t1.autoReplaceSvg = !1), (t1.observeMutations = !1), J2('noAuto');
      },
      hc = {
        i2svg: function () {
          var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return M
            ? (J2('beforeI2svg', l),
              w2('pseudoElements2svg', l),
              w2('i2svg', l))
            : Promise.reject('Operation requires a DOM of some kind.');
        },
        watch: function () {
          var l =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            s = l.autoReplaceSvgRoot;
          t1.autoReplaceSvg === !1 && (t1.autoReplaceSvg = !0),
            (t1.observeMutations = !0),
            Qr(function () {
              vc({ autoReplaceSvgRoot: s }), J2('watch', l);
            });
        },
      },
      mc = {
        icon: function (l) {
          if (l === null) return null;
          if (c(l) === 'object' && l.prefix && l.iconName)
            return {
              prefix: l.prefix,
              iconName: h3(l.prefix, l.iconName) || l.iconName,
            };
          if (Array.isArray(l) && l.length === 2) {
            var s = l[1].indexOf('fa-') === 0 ? l[1].slice(3) : l[1],
              v = m4(l[0]);
            return { prefix: v, iconName: h3(v, s) || s };
          }
          if (
            typeof l == 'string' &&
            (l.indexOf(''.concat(t1.familyPrefix, '-')) > -1 || l.match(D1))
          ) {
            var z = v4(l.split(' '), { skipLookups: !0 });
            return {
              prefix: z.prefix || O2(),
              iconName: h3(z.prefix, z.iconName) || z.iconName,
            };
          }
          if (typeof l == 'string') {
            var y = O2();
            return { prefix: y, iconName: h3(y, l) || l };
          }
        },
      },
      Y1 = {
        noAuto: uc,
        config: t1,
        dom: hc,
        parse: mc,
        library: x0,
        findIconDefinition: Y6,
        toHtml: A3,
      },
      vc = function () {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          s = l.autoReplaceSvgRoot,
          v = s === void 0 ? D : s;
        (Object.keys(o2.styles).length > 0 || t1.autoFetchSvg) &&
          M &&
          t1.autoReplaceSvg &&
          Y1.dom.i2svg({ node: v });
      };
    function z4(i, l) {
      return (
        Object.defineProperty(i, 'abstract', { get: l }),
        Object.defineProperty(i, 'html', {
          get: function () {
            return i.abstract.map(function (v) {
              return A3(v);
            });
          },
        }),
        Object.defineProperty(i, 'node', {
          get: function () {
            if (!!M) {
              var v = D.createElement('div');
              return (v.innerHTML = i.html), v.children;
            }
          },
        }),
        i
      );
    }
    function zc(i) {
      var l = i.children,
        s = i.main,
        v = i.mask,
        z = i.attributes,
        y = i.styles,
        g = i.transform;
      if (O6(g) && s.found && !v.found) {
        var P = s.width,
          _ = s.height,
          i1 = { x: P / _ / 2, y: 0.5 };
        z.style = u4(
          r(
            r({}, y),
            {},
            {
              'transform-origin': ''
                .concat(i1.x + g.x / 16, 'em ')
                .concat(i1.y + g.y / 16, 'em'),
            }
          )
        );
      }
      return [{ tag: 'svg', attributes: z, children: l }];
    }
    function pc(i) {
      var l = i.prefix,
        s = i.iconName,
        v = i.children,
        z = i.attributes,
        y = i.symbol,
        g =
          y === !0
            ? ''.concat(l, '-').concat(t1.familyPrefix, '-').concat(s)
            : y;
      return [
        {
          tag: 'svg',
          attributes: { style: 'display: none;' },
          children: [
            {
              tag: 'symbol',
              attributes: r(r({}, z), {}, { id: g }),
              children: v,
            },
          ],
        },
      ];
    }
    function X6(i) {
      var l = i.icons,
        s = l.main,
        v = l.mask,
        z = i.prefix,
        y = i.iconName,
        g = i.transform,
        P = i.symbol,
        _ = i.title,
        i1 = i.maskId,
        r1 = i.titleId,
        c1 = i.extra,
        M1 = i.watchable,
        b1 = M1 === void 0 ? !1 : M1,
        I1 = v.found ? v : s,
        f2 = I1.width,
        l2 = I1.height,
        Q1 = z === 'fak',
        U1 = [
          t1.replacementClass,
          y ? ''.concat(t1.familyPrefix, '-').concat(y) : '',
        ]
          .filter(function (z3) {
            return c1.classes.indexOf(z3) === -1;
          })
          .filter(function (z3) {
            return z3 !== '' || !!z3;
          })
          .concat(c1.classes)
          .join(' '),
        O1 = {
          children: [],
          attributes: r(
            r({}, c1.attributes),
            {},
            {
              'data-prefix': z,
              'data-icon': y,
              class: U1,
              role: c1.attributes.role || 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 '.concat(f2, ' ').concat(l2),
            }
          ),
        },
        _2 =
          Q1 && !~c1.classes.indexOf('fa-fw')
            ? { width: ''.concat((f2 / l2) * 16 * 0.0625, 'em') }
            : {};
      b1 && (O1.attributes[O] = ''),
        _ &&
          (O1.children.push({
            tag: 'title',
            attributes: {
              id:
                O1.attributes['aria-labelledby'] || 'title-'.concat(r1 || k3()),
            },
            children: [_],
          }),
          delete O1.attributes.title);
      var Z1 = r(
          r({}, O1),
          {},
          {
            prefix: z,
            iconName: y,
            main: s,
            mask: v,
            maskId: i1,
            transform: g,
            symbol: P,
            styles: r(r({}, _2), c1.styles),
          }
        ),
        q2 =
          v.found && s.found
            ? w2('generateAbstractMask', Z1) || { children: [], attributes: {} }
            : w2('generateAbstractIcon', Z1) || {
                children: [],
                attributes: {},
              },
        T3 = q2.children,
        F3 = q2.attributes;
      return (Z1.children = T3), (Z1.attributes = F3), P ? pc(Z1) : zc(Z1);
    }
    function S0(i) {
      var l = i.content,
        s = i.width,
        v = i.height,
        z = i.transform,
        y = i.title,
        g = i.extra,
        P = i.watchable,
        _ = P === void 0 ? !1 : P,
        i1 = r(
          r(r({}, g.attributes), y ? { title: y } : {}),
          {},
          { class: g.classes.join(' ') }
        );
      _ && (i1[O] = '');
      var r1 = r({}, g.styles);
      O6(z) &&
        ((r1.transform = Yr({
          transform: z,
          startCentered: !0,
          width: s,
          height: v,
        })),
        (r1['-webkit-transform'] = r1.transform));
      var c1 = u4(r1);
      c1.length > 0 && (i1.style = c1);
      var M1 = [];
      return (
        M1.push({ tag: 'span', attributes: i1, children: [l] }),
        y &&
          M1.push({
            tag: 'span',
            attributes: { class: 'sr-only' },
            children: [y],
          }),
        M1
      );
    }
    function Mc(i) {
      var l = i.content,
        s = i.title,
        v = i.extra,
        z = r(
          r(r({}, v.attributes), s ? { title: s } : {}),
          {},
          { class: v.classes.join(' ') }
        ),
        y = u4(v.styles);
      y.length > 0 && (z.style = y);
      var g = [];
      return (
        g.push({ tag: 'span', attributes: z, children: [l] }),
        s &&
          g.push({
            tag: 'span',
            attributes: { class: 'sr-only' },
            children: [s],
          }),
        g
      );
    }
    var K6 = o2.styles;
    function J6(i) {
      var l = i[0],
        s = i[1],
        v = i.slice(4),
        z = x(v, 1),
        y = z[0],
        g = null;
      return (
        Array.isArray(y)
          ? (g = {
              tag: 'g',
              attributes: {
                class: ''.concat(t1.familyPrefix, '-').concat(m2.GROUP),
              },
              children: [
                {
                  tag: 'path',
                  attributes: {
                    class: ''.concat(t1.familyPrefix, '-').concat(m2.SECONDARY),
                    fill: 'currentColor',
                    d: y[0],
                  },
                },
                {
                  tag: 'path',
                  attributes: {
                    class: ''.concat(t1.familyPrefix, '-').concat(m2.PRIMARY),
                    fill: 'currentColor',
                    d: y[1],
                  },
                },
              ],
            })
          : (g = { tag: 'path', attributes: { fill: 'currentColor', d: y } }),
        { found: !0, width: l, height: s, icon: g }
      );
    }
    var dc = { found: !1, width: 512, height: 512 };
    function Lc(i, l) {
      !z1 &&
        !t1.showMissingIcons &&
        i &&
        console.error(
          'Icon with name "'
            .concat(i, '" and prefix "')
            .concat(l, '" is missing.')
        );
    }
    function Q6(i, l) {
      var s = l;
      return (
        l === 'fa' && t1.styleDefault !== null && (l = O2()),
        new Promise(function (v, z) {
          var y = {
            found: !1,
            width: 512,
            height: 512,
            icon: w2('missingIconAbstract') || {},
          };
          if (s === 'fa') {
            var g = V0(i) || {};
            (i = g.iconName || i), (l = g.prefix || l);
          }
          if (i && l && K6[l] && K6[l][i]) {
            var P = K6[l][i];
            return v(J6(P));
          }
          Lc(i, l),
            v(
              r(
                r({}, dc),
                {},
                {
                  icon:
                    t1.showMissingIcons && i
                      ? w2('missingIconAbstract') || {}
                      : {},
                }
              )
            );
        })
      );
    }
    var b0 = function () {},
      Z6 =
        t1.measurePerformance && f && f.mark && f.measure
          ? f
          : { mark: b0, measure: b0 },
      R3 = 'FA "6.1.1"',
      Hc = function (l) {
        return (
          Z6.mark(''.concat(R3, ' ').concat(l, ' begins')),
          function () {
            return y0(l);
          }
        );
      },
      y0 = function (l) {
        Z6.mark(''.concat(R3, ' ').concat(l, ' ends')),
          Z6.measure(
            ''.concat(R3, ' ').concat(l),
            ''.concat(R3, ' ').concat(l, ' begins'),
            ''.concat(R3, ' ').concat(l, ' ends')
          );
      },
      e5 = { begin: Hc, end: y0 },
      p4 = function () {};
    function w0(i) {
      var l = i.getAttribute ? i.getAttribute(O) : null;
      return typeof l == 'string';
    }
    function Vc(i) {
      var l = i.getAttribute ? i.getAttribute(A) : null,
        s = i.getAttribute ? i.getAttribute(X) : null;
      return l && s;
    }
    function gc(i) {
      return (
        i &&
        i.classList &&
        i.classList.contains &&
        i.classList.contains(t1.replacementClass)
      );
    }
    function xc() {
      if (t1.autoReplaceSvg === !0) return M4.replace;
      var i = M4[t1.autoReplaceSvg];
      return i || M4.replace;
    }
    function Sc(i) {
      return D.createElementNS('http://www.w3.org/2000/svg', i);
    }
    function bc(i) {
      return D.createElement(i);
    }
    function N0(i) {
      var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        s = l.ceFn,
        v = s === void 0 ? (i.tag === 'svg' ? Sc : bc) : s;
      if (typeof i == 'string') return D.createTextNode(i);
      var z = v(i.tag);
      Object.keys(i.attributes || []).forEach(function (g) {
        z.setAttribute(g, i.attributes[g]);
      });
      var y = i.children || [];
      return (
        y.forEach(function (g) {
          z.appendChild(N0(g, { ceFn: v }));
        }),
        z
      );
    }
    function yc(i) {
      var l = ' '.concat(i.outerHTML, ' ');
      return (l = ''.concat(l, 'Font Awesome fontawesome.com ')), l;
    }
    var M4 = {
      replace: function (l) {
        var s = l[0];
        if (s.parentNode)
          if (
            (l[1].forEach(function (z) {
              s.parentNode.insertBefore(N0(z), s);
            }),
            s.getAttribute(O) === null && t1.keepOriginalSource)
          ) {
            var v = D.createComment(yc(s));
            s.parentNode.replaceChild(v, s);
          } else s.remove();
      },
      nest: function (l) {
        var s = l[0],
          v = l[1];
        if (~D6(s).indexOf(t1.replacementClass)) return M4.replace(l);
        var z = new RegExp(''.concat(t1.familyPrefix, '-.*'));
        if ((delete v[0].attributes.id, v[0].attributes.class)) {
          var y = v[0].attributes.class.split(' ').reduce(
            function (P, _) {
              return (
                _ === t1.replacementClass || _.match(z)
                  ? P.toSvg.push(_)
                  : P.toNode.push(_),
                P
              );
            },
            { toNode: [], toSvg: [] }
          );
          (v[0].attributes.class = y.toSvg.join(' ')),
            y.toNode.length === 0
              ? s.removeAttribute('class')
              : s.setAttribute('class', y.toNode.join(' '));
        }
        var g = v.map(function (P) {
          return A3(P);
        }).join(`
`);
        s.setAttribute(O, ''), (s.innerHTML = g);
      },
    };
    function k0(i) {
      i();
    }
    function A0(i, l) {
      var s = typeof l == 'function' ? l : p4;
      if (i.length === 0) s();
      else {
        var v = k0;
        t1.mutateApproach === h1 && (v = j.requestAnimationFrame || k0),
          v(function () {
            var z = xc(),
              y = e5.begin('mutate');
            i.map(z), y(), s();
          });
      }
    }
    var a5 = !1;
    function P0() {
      a5 = !0;
    }
    function r5() {
      a5 = !1;
    }
    var d4 = null;
    function R0(i) {
      if (!!W && !!t1.observeMutations) {
        var l = i.treeCallback,
          s = l === void 0 ? p4 : l,
          v = i.nodeCallback,
          z = v === void 0 ? p4 : v,
          y = i.pseudoElementsCallback,
          g = y === void 0 ? p4 : y,
          P = i.observeMutationsRoot,
          _ = P === void 0 ? D : P;
        (d4 = new W(function (i1) {
          if (!a5) {
            var r1 = O2();
            u3(i1).forEach(function (c1) {
              if (
                (c1.type === 'childList' &&
                  c1.addedNodes.length > 0 &&
                  !w0(c1.addedNodes[0]) &&
                  (t1.searchPseudoElements && g(c1.target), s(c1.target)),
                c1.type === 'attributes' &&
                  c1.target.parentNode &&
                  t1.searchPseudoElements &&
                  g(c1.target.parentNode),
                c1.type === 'attributes' &&
                  w0(c1.target) &&
                  ~B6.indexOf(c1.attributeName))
              )
                if (c1.attributeName === 'class' && Vc(c1.target)) {
                  var M1 = v4(D6(c1.target)),
                    b1 = M1.prefix,
                    I1 = M1.iconName;
                  c1.target.setAttribute(A, b1 || r1),
                    I1 && c1.target.setAttribute(X, I1);
                } else gc(c1.target) && z(c1.target);
            });
          }
        })),
          !!M &&
            d4.observe(_, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
    }
    function wc() {
      !d4 || d4.disconnect();
    }
    function Nc(i) {
      var l = i.getAttribute('style'),
        s = [];
      return (
        l &&
          (s = l.split(';').reduce(function (v, z) {
            var y = z.split(':'),
              g = y[0],
              P = y.slice(1);
            return g && P.length > 0 && (v[g] = P.join(':').trim()), v;
          }, {})),
        s
      );
    }
    function kc(i) {
      var l = i.getAttribute('data-prefix'),
        s = i.getAttribute('data-icon'),
        v = i.innerText !== void 0 ? i.innerText.trim() : '',
        z = v4(D6(i));
      return (
        z.prefix || (z.prefix = O2()),
        l && s && ((z.prefix = l), (z.iconName = s)),
        (z.iconName && z.prefix) ||
          (z.prefix &&
            v.length > 0 &&
            (z.iconName =
              ic(z.prefix, i.innerText) || W6(z.prefix, I6(i.innerText)))),
        z
      );
    }
    function Ac(i) {
      var l = u3(i.attributes).reduce(function (z, y) {
          return (
            z.name !== 'class' && z.name !== 'style' && (z[y.name] = y.value), z
          );
        }, {}),
        s = i.getAttribute('title'),
        v = i.getAttribute('data-fa-title-id');
      return (
        t1.autoA11y &&
          (s
            ? (l['aria-labelledby'] = ''
                .concat(t1.replacementClass, '-title-')
                .concat(v || k3()))
            : ((l['aria-hidden'] = 'true'), (l.focusable = 'false'))),
        l
      );
    }
    function Pc() {
      return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: z2,
        symbol: !1,
        mask: { iconName: null, prefix: null, rest: [] },
        maskId: null,
        extra: { classes: [], styles: {}, attributes: {} },
      };
    }
    function T0(i) {
      var l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { styleParser: !0 },
        s = kc(i),
        v = s.iconName,
        z = s.prefix,
        y = s.rest,
        g = Ac(i),
        P = $6('parseNodeAttributes', {}, i),
        _ = l.styleParser ? Nc(i) : [];
      return r(
        {
          iconName: v,
          title: i.getAttribute('title'),
          titleId: i.getAttribute('data-fa-title-id'),
          prefix: z,
          transform: z2,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: y, styles: _, attributes: g },
        },
        P
      );
    }
    var Rc = o2.styles;
    function F0(i) {
      var l = t1.autoReplaceSvg === 'nest' ? T0(i, { styleParser: !1 }) : T0(i);
      return ~l.extra.classes.indexOf(E2)
        ? w2('generateLayersText', i, l)
        : w2('generateSvgReplacementMutation', i, l);
    }
    function E0(i) {
      var l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      if (!M) return Promise.resolve();
      var s = D.documentElement.classList,
        v = function (c1) {
          return s.add(''.concat(a1, '-').concat(c1));
        },
        z = function (c1) {
          return s.remove(''.concat(a1, '-').concat(c1));
        },
        y = t1.autoFetchSvg ? Object.keys(N1) : Object.keys(Rc),
        g = ['.'.concat(E2, ':not([').concat(O, '])')]
          .concat(
            y.map(function (r1) {
              return '.'.concat(r1, ':not([').concat(O, '])');
            })
          )
          .join(', ');
      if (g.length === 0) return Promise.resolve();
      var P = [];
      try {
        P = u3(i.querySelectorAll(g));
      } catch {}
      if (P.length > 0) v('pending'), z('complete');
      else return Promise.resolve();
      var _ = e5.begin('onTree'),
        i1 = P.reduce(function (r1, c1) {
          try {
            var M1 = F0(c1);
            M1 && r1.push(M1);
          } catch (b1) {
            z1 || (b1.name === 'MissingIcon' && console.error(b1));
          }
          return r1;
        }, []);
      return new Promise(function (r1, c1) {
        Promise.all(i1)
          .then(function (M1) {
            A0(M1, function () {
              v('active'),
                v('complete'),
                z('pending'),
                typeof l == 'function' && l(),
                _(),
                r1();
            });
          })
          .catch(function (M1) {
            _(), c1(M1);
          });
      });
    }
    function Tc(i) {
      var l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      F0(i).then(function (s) {
        s && A0([s], l);
      });
    }
    function Fc(i) {
      return function (l) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          v = (l || {}).icon ? l : Y6(l || {}),
          z = s.mask;
        return (
          z && (z = (z || {}).icon ? z : Y6(z || {})),
          i(v, r(r({}, s), {}, { mask: z }))
        );
      };
    }
    var Ec = function (l) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          v = s.transform,
          z = v === void 0 ? z2 : v,
          y = s.symbol,
          g = y === void 0 ? !1 : y,
          P = s.mask,
          _ = P === void 0 ? null : P,
          i1 = s.maskId,
          r1 = i1 === void 0 ? null : i1,
          c1 = s.title,
          M1 = c1 === void 0 ? null : c1,
          b1 = s.titleId,
          I1 = b1 === void 0 ? null : b1,
          f2 = s.classes,
          l2 = f2 === void 0 ? [] : f2,
          Q1 = s.attributes,
          U1 = Q1 === void 0 ? {} : Q1,
          O1 = s.styles,
          _2 = O1 === void 0 ? {} : O1;
        if (!!l) {
          var Z1 = l.prefix,
            q2 = l.iconName,
            T3 = l.icon;
          return z4(r({ type: 'icon' }, l), function () {
            return (
              J2('beforeDOMElementCreation', { iconDefinition: l, params: s }),
              t1.autoA11y &&
                (M1
                  ? (U1['aria-labelledby'] = ''
                      .concat(t1.replacementClass, '-title-')
                      .concat(I1 || k3()))
                  : ((U1['aria-hidden'] = 'true'), (U1.focusable = 'false'))),
              X6({
                icons: {
                  main: J6(T3),
                  mask: _
                    ? J6(_.icon)
                    : { found: !1, width: null, height: null, icon: {} },
                },
                prefix: Z1,
                iconName: q2,
                transform: r(r({}, z2), z),
                symbol: g,
                title: M1,
                maskId: r1,
                titleId: I1,
                extra: { attributes: U1, styles: _2, classes: l2 },
              })
            );
          });
        }
      },
      Bc = {
        mixout: function () {
          return { icon: Fc(Ec) };
        },
        hooks: function () {
          return {
            mutationObserverCallbacks: function (s) {
              return (s.treeCallback = E0), (s.nodeCallback = Tc), s;
            },
          };
        },
        provides: function (l) {
          (l.i2svg = function (s) {
            var v = s.node,
              z = v === void 0 ? D : v,
              y = s.callback,
              g = y === void 0 ? function () {} : y;
            return E0(z, g);
          }),
            (l.generateSvgReplacementMutation = function (s, v) {
              var z = v.iconName,
                y = v.title,
                g = v.titleId,
                P = v.prefix,
                _ = v.transform,
                i1 = v.symbol,
                r1 = v.mask,
                c1 = v.maskId,
                M1 = v.extra;
              return new Promise(function (b1, I1) {
                Promise.all([
                  Q6(z, P),
                  r1.iconName
                    ? Q6(r1.iconName, r1.prefix)
                    : Promise.resolve({
                        found: !1,
                        width: 512,
                        height: 512,
                        icon: {},
                      }),
                ])
                  .then(function (f2) {
                    var l2 = x(f2, 2),
                      Q1 = l2[0],
                      U1 = l2[1];
                    b1([
                      s,
                      X6({
                        icons: { main: Q1, mask: U1 },
                        prefix: P,
                        iconName: z,
                        transform: _,
                        symbol: i1,
                        maskId: c1,
                        title: y,
                        titleId: g,
                        extra: M1,
                        watchable: !0,
                      }),
                    ]);
                  })
                  .catch(I1);
              });
            }),
            (l.generateAbstractIcon = function (s) {
              var v = s.children,
                z = s.attributes,
                y = s.main,
                g = s.transform,
                P = s.styles,
                _ = u4(P);
              _.length > 0 && (z.style = _);
              var i1;
              return (
                O6(g) &&
                  (i1 = w2('generateAbstractTransformGrouping', {
                    main: y,
                    transform: g,
                    containerWidth: y.width,
                    iconWidth: y.width,
                  })),
                v.push(i1 || y.icon),
                { children: v, attributes: z }
              );
            });
        },
      },
      Dc = {
        mixout: function () {
          return {
            layer: function (s) {
              var v =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                z = v.classes,
                y = z === void 0 ? [] : z;
              return z4({ type: 'layer' }, function () {
                J2('beforeDOMElementCreation', { assembler: s, params: v });
                var g = [];
                return (
                  s(function (P) {
                    Array.isArray(P)
                      ? P.map(function (_) {
                          g = g.concat(_.abstract);
                        })
                      : (g = g.concat(P.abstract));
                  }),
                  [
                    {
                      tag: 'span',
                      attributes: {
                        class: [''.concat(t1.familyPrefix, '-layers')]
                          .concat(L(y))
                          .join(' '),
                      },
                      children: g,
                    },
                  ]
                );
              });
            },
          };
        },
      },
      Oc = {
        mixout: function () {
          return {
            counter: function (s) {
              var v =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                z = v.title,
                y = z === void 0 ? null : z,
                g = v.classes,
                P = g === void 0 ? [] : g,
                _ = v.attributes,
                i1 = _ === void 0 ? {} : _,
                r1 = v.styles,
                c1 = r1 === void 0 ? {} : r1;
              return z4({ type: 'counter', content: s }, function () {
                return (
                  J2('beforeDOMElementCreation', { content: s, params: v }),
                  Mc({
                    content: s.toString(),
                    title: y,
                    extra: {
                      attributes: i1,
                      styles: c1,
                      classes: [
                        ''.concat(t1.familyPrefix, '-layers-counter'),
                      ].concat(L(P)),
                    },
                  })
                );
              });
            },
          };
        },
      },
      _c = {
        mixout: function () {
          return {
            text: function (s) {
              var v =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                z = v.transform,
                y = z === void 0 ? z2 : z,
                g = v.title,
                P = g === void 0 ? null : g,
                _ = v.classes,
                i1 = _ === void 0 ? [] : _,
                r1 = v.attributes,
                c1 = r1 === void 0 ? {} : r1,
                M1 = v.styles,
                b1 = M1 === void 0 ? {} : M1;
              return z4({ type: 'text', content: s }, function () {
                return (
                  J2('beforeDOMElementCreation', { content: s, params: v }),
                  S0({
                    content: s,
                    transform: r(r({}, z2), y),
                    title: P,
                    extra: {
                      attributes: c1,
                      styles: b1,
                      classes: [
                        ''.concat(t1.familyPrefix, '-layers-text'),
                      ].concat(L(i1)),
                    },
                  })
                );
              });
            },
          };
        },
        provides: function (l) {
          l.generateLayersText = function (s, v) {
            var z = v.title,
              y = v.transform,
              g = v.extra,
              P = null,
              _ = null;
            if (b) {
              var i1 = parseInt(getComputedStyle(s).fontSize, 10),
                r1 = s.getBoundingClientRect();
              (P = r1.width / i1), (_ = r1.height / i1);
            }
            return (
              t1.autoA11y && !z && (g.attributes['aria-hidden'] = 'true'),
              Promise.resolve([
                s,
                S0({
                  content: s.innerHTML,
                  width: P,
                  height: _,
                  transform: y,
                  title: z,
                  extra: g,
                  watchable: !0,
                }),
              ])
            );
          };
        },
      },
      qc = new RegExp('"', 'ug'),
      B0 = [1105920, 1112319];
    function Ic(i) {
      var l = i.replace(qc, ''),
        s = ac(l, 0),
        v = s >= B0[0] && s <= B0[1],
        z = l.length === 2 ? l[0] === l[1] : !1;
      return { value: I6(z ? l[0] : l), isSecondary: v || z };
    }
    function D0(i, l) {
      var s = ''.concat(N).concat(l.replace(':', '-'));
      return new Promise(function (v, z) {
        if (i.getAttribute(s) !== null) return v();
        var y = u3(i.children),
          g = y.filter(function (q2) {
            return q2.getAttribute(H) === l;
          })[0],
          P = j.getComputedStyle(i, l),
          _ = P.getPropertyValue('font-family').match(s3),
          i1 = P.getPropertyValue('font-weight'),
          r1 = P.getPropertyValue('content');
        if (g && !_) return i.removeChild(g), v();
        if (_ && r1 !== 'none' && r1 !== '') {
          var c1 = P.getPropertyValue('content'),
            M1 = ~[
              'Solid',
              'Regular',
              'Light',
              'Thin',
              'Duotone',
              'Brands',
              'Kit',
            ].indexOf(_[2])
              ? y1[_[2].toLowerCase()]
              : B2[i1],
            b1 = Ic(c1),
            I1 = b1.value,
            f2 = b1.isSecondary,
            l2 = _[0].startsWith('FontAwesome'),
            Q1 = W6(M1, I1),
            U1 = Q1;
          if (l2) {
            var O1 = oc(I1);
            O1.iconName && O1.prefix && ((Q1 = O1.iconName), (M1 = O1.prefix));
          }
          if (
            Q1 &&
            !f2 &&
            (!g || g.getAttribute(A) !== M1 || g.getAttribute(X) !== U1)
          ) {
            i.setAttribute(s, U1), g && i.removeChild(g);
            var _2 = Pc(),
              Z1 = _2.extra;
            (Z1.attributes[H] = l),
              Q6(Q1, M1)
                .then(function (q2) {
                  var T3 = X6(
                      r(
                        r({}, _2),
                        {},
                        {
                          icons: { main: q2, mask: G6() },
                          prefix: M1,
                          iconName: U1,
                          extra: Z1,
                          watchable: !0,
                        }
                      )
                    ),
                    F3 = D.createElement('svg');
                  l === '::before'
                    ? i.insertBefore(F3, i.firstChild)
                    : i.appendChild(F3),
                    (F3.outerHTML = T3.map(function (z3) {
                      return A3(z3);
                    }).join(`
`)),
                    i.removeAttribute(s),
                    v();
                })
                .catch(z);
          } else v();
        } else v();
      });
    }
    function Uc(i) {
      return Promise.all([D0(i, '::before'), D0(i, '::after')]);
    }
    function jc(i) {
      return (
        i.parentNode !== document.head &&
        !~l1.indexOf(i.tagName.toUpperCase()) &&
        !i.getAttribute(H) &&
        (!i.parentNode || i.parentNode.tagName !== 'svg')
      );
    }
    function O0(i) {
      if (!!M)
        return new Promise(function (l, s) {
          var v = u3(i.querySelectorAll('*')).filter(jc).map(Uc),
            z = e5.begin('searchPseudoElements');
          P0(),
            Promise.all(v)
              .then(function () {
                z(), r5(), l();
              })
              .catch(function () {
                z(), r5(), s();
              });
        });
    }
    var Wc = {
        hooks: function () {
          return {
            mutationObserverCallbacks: function (s) {
              return (s.pseudoElementsCallback = O0), s;
            },
          };
        },
        provides: function (l) {
          l.pseudoElements2svg = function (s) {
            var v = s.node,
              z = v === void 0 ? D : v;
            t1.searchPseudoElements && O0(z);
          };
        },
      },
      _0 = !1,
      Gc = {
        mixout: function () {
          return {
            dom: {
              unwatch: function () {
                P0(), (_0 = !0);
              },
            },
          };
        },
        hooks: function () {
          return {
            bootstrap: function () {
              R0($6('mutationObserverCallbacks', {}));
            },
            noAuto: function () {
              wc();
            },
            watch: function (s) {
              var v = s.observeMutationsRoot;
              _0
                ? r5()
                : R0(
                    $6('mutationObserverCallbacks', { observeMutationsRoot: v })
                  );
            },
          };
        },
      },
      q0 = function (l) {
        var s = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
        return l
          .toLowerCase()
          .split(' ')
          .reduce(function (v, z) {
            var y = z.toLowerCase().split('-'),
              g = y[0],
              P = y.slice(1).join('-');
            if (g && P === 'h') return (v.flipX = !0), v;
            if (g && P === 'v') return (v.flipY = !0), v;
            if (((P = parseFloat(P)), isNaN(P))) return v;
            switch (g) {
              case 'grow':
                v.size = v.size + P;
                break;
              case 'shrink':
                v.size = v.size - P;
                break;
              case 'left':
                v.x = v.x - P;
                break;
              case 'right':
                v.x = v.x + P;
                break;
              case 'up':
                v.y = v.y - P;
                break;
              case 'down':
                v.y = v.y + P;
                break;
              case 'rotate':
                v.rotate = v.rotate + P;
                break;
            }
            return v;
          }, s);
      },
      $c = {
        mixout: function () {
          return {
            parse: {
              transform: function (s) {
                return q0(s);
              },
            },
          };
        },
        hooks: function () {
          return {
            parseNodeAttributes: function (s, v) {
              var z = v.getAttribute('data-fa-transform');
              return z && (s.transform = q0(z)), s;
            },
          };
        },
        provides: function (l) {
          l.generateAbstractTransformGrouping = function (s) {
            var v = s.main,
              z = s.transform,
              y = s.containerWidth,
              g = s.iconWidth,
              P = { transform: 'translate('.concat(y / 2, ' 256)') },
              _ = 'translate('.concat(z.x * 32, ', ').concat(z.y * 32, ') '),
              i1 = 'scale('
                .concat((z.size / 16) * (z.flipX ? -1 : 1), ', ')
                .concat((z.size / 16) * (z.flipY ? -1 : 1), ') '),
              r1 = 'rotate('.concat(z.rotate, ' 0 0)'),
              c1 = { transform: ''.concat(_, ' ').concat(i1, ' ').concat(r1) },
              M1 = { transform: 'translate('.concat((g / 2) * -1, ' -256)') },
              b1 = { outer: P, inner: c1, path: M1 };
            return {
              tag: 'g',
              attributes: r({}, b1.outer),
              children: [
                {
                  tag: 'g',
                  attributes: r({}, b1.inner),
                  children: [
                    {
                      tag: v.icon.tag,
                      children: v.icon.children,
                      attributes: r(r({}, v.icon.attributes), b1.path),
                    },
                  ],
                },
              ],
            };
          };
        },
      },
      c5 = { x: 0, y: 0, width: '100%', height: '100%' };
    function I0(i) {
      var l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (
        i.attributes &&
          (i.attributes.fill || l) &&
          (i.attributes.fill = 'black'),
        i
      );
    }
    function Yc(i) {
      return i.tag === 'g' ? i.children : [i];
    }
    var Xc = {
        hooks: function () {
          return {
            parseNodeAttributes: function (s, v) {
              var z = v.getAttribute('data-fa-mask'),
                y = z
                  ? v4(
                      z.split(' ').map(function (g) {
                        return g.trim();
                      })
                    )
                  : G6();
              return (
                y.prefix || (y.prefix = O2()),
                (s.mask = y),
                (s.maskId = v.getAttribute('data-fa-mask-id')),
                s
              );
            },
          };
        },
        provides: function (l) {
          l.generateAbstractMask = function (s) {
            var v = s.children,
              z = s.attributes,
              y = s.main,
              g = s.mask,
              P = s.maskId,
              _ = s.transform,
              i1 = y.width,
              r1 = y.icon,
              c1 = g.width,
              M1 = g.icon,
              b1 = $r({ transform: _, containerWidth: c1, iconWidth: i1 }),
              I1 = {
                tag: 'rect',
                attributes: r(r({}, c5), {}, { fill: 'white' }),
              },
              f2 = r1.children ? { children: r1.children.map(I0) } : {},
              l2 = {
                tag: 'g',
                attributes: r({}, b1.inner),
                children: [
                  I0(
                    r(
                      {
                        tag: r1.tag,
                        attributes: r(r({}, r1.attributes), b1.path),
                      },
                      f2
                    )
                  ),
                ],
              },
              Q1 = { tag: 'g', attributes: r({}, b1.outer), children: [l2] },
              U1 = 'mask-'.concat(P || k3()),
              O1 = 'clip-'.concat(P || k3()),
              _2 = {
                tag: 'mask',
                attributes: r(
                  r({}, c5),
                  {},
                  {
                    id: U1,
                    maskUnits: 'userSpaceOnUse',
                    maskContentUnits: 'userSpaceOnUse',
                  }
                ),
                children: [I1, Q1],
              },
              Z1 = {
                tag: 'defs',
                children: [
                  { tag: 'clipPath', attributes: { id: O1 }, children: Yc(M1) },
                  _2,
                ],
              };
            return (
              v.push(Z1, {
                tag: 'rect',
                attributes: r(
                  {
                    fill: 'currentColor',
                    'clip-path': 'url(#'.concat(O1, ')'),
                    mask: 'url(#'.concat(U1, ')'),
                  },
                  c5
                ),
              }),
              { children: v, attributes: z }
            );
          };
        },
      },
      Kc = {
        provides: function (l) {
          var s = !1;
          j.matchMedia &&
            (s = j.matchMedia('(prefers-reduced-motion: reduce)').matches),
            (l.missingIconAbstract = function () {
              var v = [],
                z = { fill: 'currentColor' },
                y = {
                  attributeType: 'XML',
                  repeatCount: 'indefinite',
                  dur: '2s',
                };
              v.push({
                tag: 'path',
                attributes: r(
                  r({}, z),
                  {},
                  {
                    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                  }
                ),
              });
              var g = r(r({}, y), {}, { attributeName: 'opacity' }),
                P = {
                  tag: 'circle',
                  attributes: r(
                    r({}, z),
                    {},
                    { cx: '256', cy: '364', r: '28' }
                  ),
                  children: [],
                };
              return (
                s ||
                  P.children.push(
                    {
                      tag: 'animate',
                      attributes: r(
                        r({}, y),
                        {},
                        { attributeName: 'r', values: '28;14;28;28;14;28;' }
                      ),
                    },
                    {
                      tag: 'animate',
                      attributes: r(r({}, g), {}, { values: '1;0;1;1;0;1;' }),
                    }
                  ),
                v.push(P),
                v.push({
                  tag: 'path',
                  attributes: r(
                    r({}, z),
                    {},
                    {
                      opacity: '1',
                      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                    }
                  ),
                  children: s
                    ? []
                    : [
                        {
                          tag: 'animate',
                          attributes: r(
                            r({}, g),
                            {},
                            { values: '1;0;0;0;0;1;' }
                          ),
                        },
                      ],
                }),
                s ||
                  v.push({
                    tag: 'path',
                    attributes: r(
                      r({}, z),
                      {},
                      {
                        opacity: '0',
                        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                      }
                    ),
                    children: [
                      {
                        tag: 'animate',
                        attributes: r(r({}, g), {}, { values: '0;0;1;1;0;0;' }),
                      },
                    ],
                  }),
                { tag: 'g', attributes: { class: 'missing' }, children: v }
              );
            });
        },
      },
      Jc = {
        hooks: function () {
          return {
            parseNodeAttributes: function (s, v) {
              var z = v.getAttribute('data-fa-symbol'),
                y = z === null ? !1 : z === '' ? !0 : z;
              return (s.symbol = y), s;
            },
          };
        },
      },
      Qc = [Kr, Bc, Dc, Oc, _c, Wc, Gc, $c, Xc, Kc, Jc];
    sc(Qc, { mixoutsTo: Y1 });
    var Zc = Y1.noAuto,
      eC = Y1.config,
      aC = Y1.library,
      rC = Y1.dom,
      cC = Y1.parse,
      CC = Y1.findIconDefinition,
      nC = Y1.toHtml,
      tC = Y1.icon,
      iC = Y1.layer,
      oC = Y1.text,
      fC = Y1.counter;
    (e.noAuto = Zc),
      (e.config = eC),
      (e.library = aC),
      (e.dom = rC),
      (e.parse = cC),
      (e.findIconDefinition = CC),
      (e.toHtml = nC),
      (e.icon = tC),
      (e.layer = iC),
      (e.text = oC),
      (e.counter = fC),
      (e.api = Y1),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
var Vr = K((au, Hr) => {
  'use strict';
  w();
  var wl = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  Hr.exports = wl;
});
var br = K((ru, Sr) => {
  'use strict';
  w();
  var Nl = Vr();
  function gr() {}
  function xr() {}
  xr.resetWarningCache = gr;
  Sr.exports = function () {
    function e(c, C, n, t, o, m) {
      if (m !== Nl) {
        var u = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
        );
        throw ((u.name = 'Invariant Violation'), u);
      }
    }
    e.isRequired = e;
    function a() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: a,
      element: e,
      elementType: e,
      instanceOf: a,
      node: e,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: xr,
      resetWarningCache: gr,
    };
    return (r.PropTypes = r), r;
  };
});
var wr = K((nu, yr) => {
  w();
  yr.exports = br()();
  var cu, Cu;
});
var C0 = K((F6, Nr) => {
  w();
  (function (e, a) {
    typeof F6 == 'object' && typeof Nr < 'u'
      ? a(F6, Lr(), wr(), A1())
      : typeof define == 'function' && define.amd
      ? define(
          [
            'exports',
            '@fortawesome/fontawesome-svg-core',
            'prop-types',
            'react',
          ],
          a
        )
      : ((e = typeof globalThis < 'u' ? globalThis : e || self),
        a((e['react-fontawesome'] = {}), e.FontAwesome, e.PropTypes, e.React));
  })(F6, function (e, a, r, c) {
    'use strict';
    function C(f) {
      return f && typeof f == 'object' && 'default' in f ? f : { default: f };
    }
    var n = C(r),
      t = C(c);
    function o(f, h) {
      var M = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(f);
        h &&
          (b = b.filter(function (V) {
            return Object.getOwnPropertyDescriptor(f, V).enumerable;
          })),
          M.push.apply(M, b);
      }
      return M;
    }
    function m(f) {
      for (var h = 1; h < arguments.length; h++) {
        var M = arguments[h] != null ? arguments[h] : {};
        h % 2
          ? o(Object(M), !0).forEach(function (b) {
              p(f, b, M[b]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(M))
          : o(Object(M)).forEach(function (b) {
              Object.defineProperty(
                f,
                b,
                Object.getOwnPropertyDescriptor(M, b)
              );
            });
      }
      return f;
    }
    function u(f) {
      return (
        (u =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (h) {
                return typeof h;
              }
            : function (h) {
                return h &&
                  typeof Symbol == 'function' &&
                  h.constructor === Symbol &&
                  h !== Symbol.prototype
                  ? 'symbol'
                  : typeof h;
              }),
        u(f)
      );
    }
    function p(f, h, M) {
      return (
        h in f
          ? Object.defineProperty(f, h, {
              value: M,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (f[h] = M),
        f
      );
    }
    function x(f, h) {
      if (f == null) return {};
      var M = {},
        b = Object.keys(f),
        V,
        E;
      for (E = 0; E < b.length; E++)
        (V = b[E]), !(h.indexOf(V) >= 0) && (M[V] = f[V]);
      return M;
    }
    function L(f, h) {
      if (f == null) return {};
      var M = x(f, h),
        b,
        V;
      if (Object.getOwnPropertySymbols) {
        var E = Object.getOwnPropertySymbols(f);
        for (V = 0; V < E.length; V++)
          (b = E[V]),
            !(h.indexOf(b) >= 0) &&
              (!Object.prototype.propertyIsEnumerable.call(f, b) ||
                (M[b] = f[b]));
      }
      return M;
    }
    function d(f) {
      return S(f) || k(f) || F(f) || U();
    }
    function S(f) {
      if (Array.isArray(f)) return R(f);
    }
    function k(f) {
      if (
        (typeof Symbol < 'u' && f[Symbol.iterator] != null) ||
        f['@@iterator'] != null
      )
        return Array.from(f);
    }
    function F(f, h) {
      if (!!f) {
        if (typeof f == 'string') return R(f, h);
        var M = Object.prototype.toString.call(f).slice(8, -1);
        if (
          (M === 'Object' && f.constructor && (M = f.constructor.name),
          M === 'Map' || M === 'Set')
        )
          return Array.from(f);
        if (
          M === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
        )
          return R(f, h);
      }
    }
    function R(f, h) {
      (h == null || h > f.length) && (h = f.length);
      for (var M = 0, b = new Array(h); M < h; M++) b[M] = f[M];
      return b;
    }
    function U() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function J(f) {
      var h,
        M = f.beat,
        b = f.fade,
        V = f.beatFade,
        E = f.bounce,
        T = f.shake,
        q = f.flash,
        O = f.spin,
        H = f.spinPulse,
        N = f.spinReverse,
        A = f.pulse,
        X = f.fixedWidth,
        a1 = f.inverse,
        h1 = f.border,
        l1 = f.listItem,
        z1 = f.flip,
        N1 = f.size,
        y1 = f.rotation,
        B1 = f.pull,
        k1 =
          ((h = {
            'fa-beat': M,
            'fa-fade': b,
            'fa-beat-fade': V,
            'fa-bounce': E,
            'fa-shake': T,
            'fa-flash': q,
            'fa-spin': O,
            'fa-spin-reverse': N,
            'fa-spin-pulse': H,
            'fa-pulse': A,
            'fa-fw': X,
            'fa-inverse': a1,
            'fa-border': h1,
            'fa-li': l1,
            'fa-flip': z1 === !0,
            'fa-flip-horizontal': z1 === 'horizontal' || z1 === 'both',
            'fa-flip-vertical': z1 === 'vertical' || z1 === 'both',
          }),
          p(h, 'fa-'.concat(N1), typeof N1 < 'u' && N1 !== null),
          p(
            h,
            'fa-rotate-'.concat(y1),
            typeof y1 < 'u' && y1 !== null && y1 !== 0
          ),
          p(h, 'fa-pull-'.concat(B1), typeof B1 < 'u' && B1 !== null),
          p(h, 'fa-swap-opacity', f.swapOpacity),
          h);
      return Object.keys(k1)
        .map(function (D1) {
          return k1[D1] ? D1 : null;
        })
        .filter(function (D1) {
          return D1;
        });
    }
    function Y(f) {
      return (f = f - 0), f === f;
    }
    function G(f) {
      return Y(f)
        ? f
        : ((f = f.replace(/[\-_\s]+(.)?/g, function (h, M) {
            return M ? M.toUpperCase() : '';
          })),
          f.substr(0, 1).toLowerCase() + f.substr(1));
    }
    var e1 = ['style'];
    function C1(f) {
      return f.charAt(0).toUpperCase() + f.slice(1);
    }
    function s1(f) {
      return f
        .split(';')
        .map(function (h) {
          return h.trim();
        })
        .filter(function (h) {
          return h;
        })
        .reduce(function (h, M) {
          var b = M.indexOf(':'),
            V = G(M.slice(0, b)),
            E = M.slice(b + 1).trim();
          return V.startsWith('webkit') ? (h[C1(V)] = E) : (h[V] = E), h;
        }, {});
    }
    function f1(f, h) {
      var M =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof h == 'string') return h;
      var b = (h.children || []).map(function (O) {
          return f1(f, O);
        }),
        V = Object.keys(h.attributes || {}).reduce(
          function (O, H) {
            var N = h.attributes[H];
            switch (H) {
              case 'class':
                (O.attrs.className = N), delete h.attributes.class;
                break;
              case 'style':
                O.attrs.style = s1(N);
                break;
              default:
                H.indexOf('aria-') === 0 || H.indexOf('data-') === 0
                  ? (O.attrs[H.toLowerCase()] = N)
                  : (O.attrs[G(H)] = N);
            }
            return O;
          },
          { attrs: {} }
        ),
        E = M.style,
        T = E === void 0 ? {} : E,
        q = L(M, e1);
      return (
        (V.attrs.style = m(m({}, V.attrs.style), T)),
        f.apply(void 0, [h.tag, m(m({}, V.attrs), q)].concat(d(b)))
      );
    }
    var Q = !1;
    try {
      Q = !0;
    } catch {}
    function n1() {
      if (!Q && console && typeof console.error == 'function') {
        var f;
        (f = console).error.apply(f, arguments);
      }
    }
    function o1(f) {
      if (f && u(f) === 'object' && f.prefix && f.iconName && f.icon) return f;
      if (a.parse.icon) return a.parse.icon(f);
      if (f === null) return null;
      if (f && u(f) === 'object' && f.prefix && f.iconName) return f;
      if (Array.isArray(f) && f.length === 2)
        return { prefix: f[0], iconName: f[1] };
      if (typeof f == 'string') return { prefix: 'fas', iconName: f };
    }
    function j(f, h) {
      return (Array.isArray(h) && h.length > 0) || (!Array.isArray(h) && h)
        ? p({}, f, h)
        : {};
    }
    var D = t.default.forwardRef(function (f, h) {
      var M = f.icon,
        b = f.mask,
        V = f.symbol,
        E = f.className,
        T = f.title,
        q = f.titleId,
        O = f.maskId,
        H = o1(M),
        N = j('classes', [].concat(d(J(f)), d(E.split(' ')))),
        A = j(
          'transform',
          typeof f.transform == 'string'
            ? a.parse.transform(f.transform)
            : f.transform
        ),
        X = j('mask', o1(b)),
        a1 = a.icon(
          H,
          m(
            m(m(m({}, N), A), X),
            {},
            { symbol: V, title: T, titleId: q, maskId: O }
          )
        );
      if (!a1) return n1('Could not find icon', H), null;
      var h1 = a1.abstract,
        l1 = { ref: h };
      return (
        Object.keys(f).forEach(function (z1) {
          D.defaultProps.hasOwnProperty(z1) || (l1[z1] = f[z1]);
        }),
        W(h1[0], l1)
      );
    });
    (D.displayName = 'FontAwesomeIcon'),
      (D.propTypes = {
        beat: n.default.bool,
        border: n.default.bool,
        beatFade: n.default.bool,
        bounce: n.default.bool,
        className: n.default.string,
        fade: n.default.bool,
        flash: n.default.bool,
        mask: n.default.oneOfType([
          n.default.object,
          n.default.array,
          n.default.string,
        ]),
        maskId: n.default.string,
        fixedWidth: n.default.bool,
        inverse: n.default.bool,
        flip: n.default.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
        icon: n.default.oneOfType([
          n.default.object,
          n.default.array,
          n.default.string,
        ]),
        listItem: n.default.bool,
        pull: n.default.oneOf(['right', 'left']),
        pulse: n.default.bool,
        rotation: n.default.oneOf([0, 90, 180, 270]),
        shake: n.default.bool,
        size: n.default.oneOf([
          '2xs',
          'xs',
          'sm',
          'lg',
          'xl',
          '2xl',
          '1x',
          '2x',
          '3x',
          '4x',
          '5x',
          '6x',
          '7x',
          '8x',
          '9x',
          '10x',
        ]),
        spin: n.default.bool,
        spinPulse: n.default.bool,
        spinReverse: n.default.bool,
        symbol: n.default.oneOfType([n.default.bool, n.default.string]),
        title: n.default.string,
        titleId: n.default.string,
        transform: n.default.oneOfType([n.default.string, n.default.object]),
        swapOpacity: n.default.bool,
      }),
      (D.defaultProps = {
        border: !1,
        className: '',
        mask: null,
        maskId: null,
        fixedWidth: !1,
        inverse: !1,
        flip: !1,
        icon: null,
        listItem: !1,
        pull: null,
        pulse: !1,
        rotation: null,
        size: null,
        spin: !1,
        spinPulse: !1,
        spinReverse: !1,
        beat: !1,
        fade: !1,
        beatFade: !1,
        bounce: !1,
        shake: !1,
        symbol: !1,
        title: '',
        titleId: null,
        transform: null,
        swapOpacity: !1,
      });
    var W = f1.bind(null, t.default.createElement);
    (e.FontAwesomeIcon = D),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
});
w();
var Or = e2(L9());
var i0 = {};
H4(i0, { assets: () => Dr, entry: () => Tl, routes: () => Fl });
w();
var Q8 = {};
H4(Q8, { default: () => fr });
w();
var ir = e2(ve()),
  or = e2(tr());
function fr(e, a, r, c) {
  let C = (0, or.renderToString)(
    B.createElement(ir.RemixServer, { context: c, url: e.url })
  );
  return (
    r.set('Content-Type', 'text/html'),
    new Response('<!DOCTYPE html>' + C, { status: a, headers: r })
  );
}
var c0 = {};
H4(c0, { default: () => pr, links: () => bl });
w();
var b2 = e2(lr());
var sr = '/build/_assets/tailwind-HLCV5AFA.css';
w();
var P6 = e2(A1()),
  i4 = (0, P6.createContext)({ theme: 'light', toggleTheme: () => {} }),
  { Provider: gl } = i4,
  xl = ({ children: e }) => {
    let [a, r] = (0, P6.useState)('light');
    return B.createElement(
      gl,
      {
        value: {
          theme: a,
          toggleTheme: () => r(a === 'light' ? 'dark' : 'light'),
        },
      },
      e
    );
  },
  ur = xl;
w();
var vr = e2(A1()),
  r0 = e2(R6());
var Sl = ({ children: e }) => {
    let { theme: a } = (0, vr.useContext)(i4);
    return B.createElement(
      'div',
      {
        className: (0, r0.default)(
          'flex h-screen transition-colors ease-in-out duration-1000',
          a === 'light'
            ? 'bg-gradient-to-r from-cyan-100 to-blue-100'
            : 'bg-gradient-to-r from-cyan-900 to-blue-900'
        ),
      },
      B.createElement(
        'div',
        {
          className: (0, r0.default)(
            'p-4 mx-auto my-auto max-w-2xl rounded-xl transition-colors ease-in-out duration-1000 bg-opacity-20',
            a === 'light' ? 'text-gray-800 bg-white' : 'text-gray-100 bg-black'
          ),
        },
        e
      )
    );
  },
  zr = Sl;
var bl = () => [{ rel: 'stylesheet', href: sr }];
function pr() {
  return B.createElement(
    'html',
    { lang: 'en' },
    B.createElement(
      'head',
      null,
      B.createElement('meta', { charSet: 'utf-8' }),
      B.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      }),
      B.createElement(b2.Meta, null),
      B.createElement(b2.Links, null)
    ),
    B.createElement(
      'body',
      null,
      B.createElement(
        ur,
        null,
        B.createElement(zr, null, B.createElement(b2.Outlet, null))
      ),
      B.createElement(b2.ScrollRestoration, null),
      B.createElement(b2.Scripts, null),
      !1
    )
  );
}
var t0 = {};
H4(t0, { default: () => Rl, meta: () => Al });
w();
w();
var Mr = e2(R6()),
  yl = ({ children: e, title: a, href: r, first: c = !1 }) =>
    B.createElement(
      'a',
      {
        href: r,
        className: (0, Mr.default)('py-2 pr-2 mr-2', !c && 'pl-2'),
        title: a,
      },
      e,
      B.createElement('span', { className: 'sr-only' }, a)
    ),
  o4 = yl;
var l4 = e2(C0());
w();
var kr = {
  prefix: 'fab',
  iconName: 'github',
  icon: [
    496,
    512,
    [],
    'f09b',
    'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
  ],
};
var Ar = {
  prefix: 'fab',
  iconName: 'linkedin',
  icon: [
    448,
    512,
    [],
    'f08c',
    'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
  ],
};
var Pr = {
  prefix: 'fab',
  iconName: 'twitter',
  icon: [
    512,
    512,
    [],
    'f099',
    'M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z',
  ],
};
w();
var Rr = {
  prefix: 'far',
  iconName: 'envelope',
  icon: [
    512,
    512,
    [128386, 61443, 9993],
    'f0e0',
    'M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z',
  ],
};
w();
var Er = e2(A1()),
  f4 = e2(R6()),
  n0 = e2(C0());
w();
var Tr = {
  prefix: 'fas',
  iconName: 'moon',
  icon: [
    512,
    512,
    [127769, 9214],
    'f186',
    'M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z',
  ],
};
var Fr = {
  prefix: 'fas',
  iconName: 'sun',
  icon: [
    512,
    512,
    [9728],
    'f185',
    'M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z',
  ],
};
var kl = () => {
    let { theme: e, toggleTheme: a } = (0, Er.useContext)(i4);
    return B.createElement(
      'span',
      {
        role: 'checkbox',
        tabIndex: 0,
        'aria-checked': 'false',
        'aria-label': 'Theme Toggle',
        className: (0, f4.default)(
          e === 'light' ? 'bg-gray-200' : 'bg-indigo-600',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline float-right'
        ),
        onClick: a,
      },
      B.createElement(
        'span',
        {
          'aria-hidden': 'true',
          className: (0, f4.default)(
            e === 'light' ? 'translate-x-0' : 'translate-x-5',
            'relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200'
          ),
        },
        B.createElement(
          'span',
          {
            className: (0, f4.default)(
              e === 'light'
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            ),
          },
          B.createElement(n0.FontAwesomeIcon, {
            icon: Fr,
            className: 'h-3 w-3 text-gray-400',
          })
        ),
        B.createElement(
          'span',
          {
            className: (0, f4.default)(
              e === 'light'
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            ),
          },
          B.createElement(n0.FontAwesomeIcon, {
            icon: Tr,
            className: 'h-3 w-3 text-indigo-600',
          })
        )
      )
    );
  },
  Br = kl;
var Al = () => ({
    title: 'Mike Cousins',
    description: 'The personal site of Mike Cousins',
  }),
  Pl = () =>
    B.createElement(
      B.Fragment,
      null,
      B.createElement(
        'h1',
        { className: 'text-6xl font-serif leading-none mb-2' },
        'Mike Cousins'
      ),
      B.createElement(
        'p',
        { className: 'font-mono' },
        'Software professional specializing in front end development, UX and team leadership. React/Typescript, Swift, Kotlin. Crafting modern, simple, user-focused software.'
      ),
      B.createElement(
        'div',
        { className: 'text-xl mt-4 flex' },
        B.createElement(
          o4,
          {
            href: 'https://github.com/mikecousins',
            title: 'Github',
            first: !0,
          },
          B.createElement(l4.FontAwesomeIcon, { icon: kr })
        ),
        B.createElement(
          o4,
          { href: 'https://twitter.com/mikecousins', title: 'Twitter' },
          B.createElement(l4.FontAwesomeIcon, { icon: Pr })
        ),
        B.createElement(
          o4,
          {
            href: 'https://www.linkedin.com/in/mikecousins/',
            title: 'LinkedIn',
          },
          B.createElement(l4.FontAwesomeIcon, { icon: Ar })
        ),
        B.createElement(
          o4,
          { href: 'mailto:mike@mikecousins.com', title: 'Email' },
          B.createElement(l4.FontAwesomeIcon, { icon: Rr })
        ),
        B.createElement('div', { className: 'flex-1' }),
        B.createElement(Br, null)
      )
    ),
  Rl = Pl;
w();
var Dr = {
  version: '1f9a6a4d',
  entry: {
    module: '/build/entry.client-NXYTTDU5.js',
    imports: ['/build/_shared/chunk-3VQN5RAX.js'],
  },
  routes: {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      module: '/build/root-G4MDKFC7.js',
      imports: ['/build/_shared/chunk-JXO6JC5A.js'],
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    'routes/index': {
      id: 'routes/index',
      parentId: 'root',
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: '/build/routes/index-PI2PO6EO.js',
      imports: void 0,
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
  },
  url: '/build/manifest-1F9A6A4D.js',
};
var Tl = { module: Q8 },
  Fl = {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      module: c0,
    },
    'routes/index': {
      id: 'routes/index',
      parentId: 'root',
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: t0,
    },
  };
var El = (0, Or.createPagesFunctionHandler)({
  build: i0,
  mode: 'production',
  getLoadContext: (e) => e.env,
});
function Mu(e) {
  return El(e);
}
export { Mu as onRequest };
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @remix-run/cloudflare v1.6.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/cloudflare-pages v1.6.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.6.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.6.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.6.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
