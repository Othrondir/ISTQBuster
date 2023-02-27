"use strict";

var _excluded = ["completion"];
var _Gaiman;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*    ______      _
 *   / ____/___ _(_)___ ___  ____ _____
 *  / / __/ __ `/ / __ `__ \/ __ `/ __ \
 * / /_/ / /_/ / / / / / / / /_/ / / / /
 * \____/\__,_/_/_/ /_/ /_/\__,_/_/ /_/
 *
 * Code generated by Gaiman version 1.0.0-beta.3
 * https://gaiman.js.org
 */
var audio = new Audio('lofi.mp3');
function parse_cookies(cookies) {
  var result = {};
  cookies.split(/\s*;\s*/).forEach(function (pair) {
    pair = pair.split(/\s*=\s*/);
    var name = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair.splice(1).join('='));
    result[name] = value;
  });
  return result;
}
function is_function(obj) {
  return typeof obj === 'function';
}
function is_promise(obj) {
  return obj && is_function(obj.then);
}
function is_node() {
  return typeof process !== 'undefined' && process.release.name === 'node';
}

// based on https://stackoverflow.com/a/46282334/387194
function extend(object, prototype) {
  var descriptors = Object.getOwnPropertyDescriptors(object);
  for (var prop in descriptors) {
    Object.defineProperty(prototype, prop, descriptors[prop]);
  }
}
var loops = {};
var Gaiman = (_Gaiman = {
  _get_time: function _get_time() {
    return +new Date();
  },
  should_break_loop: function should_break_loop(id) {
    if (!loops[id]) {
      loops[id] = {
        start: this._get_time(),
        count: 1
      };
      return false;
    } else {
      var now = this._get_time();
      var start = loops[id].start;
      var count = ++loops[id].count;
      if (count > this._config.loop_threshold) {
        var stop = now - start > this._config.loop_timeout;
        if (stop) {
          window.parent.postMessage({
            message: 'Infinite Loop detected!',
            colno: null,
            lineno: null
          });
        }
        return stop;
      }
      return false;
    }
  },
  exit_loop: function exit_loop(id) {
    delete loops[id];
  },
  type: function type(obj) {
    if (obj === 'null') {
      return 'null';
    } else if (Number.isNaN(obj)) {
      return 'nan';
    } else if (obj instanceof Array) {
      return 'array';
    } else {
      var type = _typeof(obj);
      if (type === 'object') {
        // https://tinyurl.com/fixing-typeof
        return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }
      return type;
    }
  },
  parse: function parse(input) {
    return $.terminal.parse_arguments(input);
  },
  parse_extra: function parse_extra(input) {
    return $.terminal.split_arguments(input);
  },
  set_cookie: function set_cookie(name, value) {
    document.cookie = "".concat(name, "=").concat(value);
    cookie[name] = value;
  },
  post: function post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return $.post(url, data);
  },
  post_extra: function post_extra(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return $.post(url, data, $.noop, "text");
  },
  get: function get(url, data) {
    if (data) {
      return $.get(url, data);
    }
    return $.get(url);
  },
  get_extra: function get_extra(url, data) {
    if (data) {
      return $.get(url, data, $.noop, "text");
    }
    return $.get(url, $.noop, "text");
  },
  load: function load(url) {
    return $.getScript(url);
  }
}, _defineProperty(_Gaiman, 'async', function async(fn) {
  setTimeout(fn, 0);
}), _defineProperty(_Gaiman, "rpc", function rpc(url) {
  return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Proxy({}, {
            get: function get(target, name) {
              if (name in target) {
                return target[name];
              }
              if (name === 'then') {
                return undefined;
              }
              return function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                return $.rpc(url, name, args);
              };
            },
            set: function set() {
              throw new Error("You can't set properties on rpc object");
            }
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))();
}), _Gaiman);
function to_string(object) {
  if (object instanceof Array) {
    object = object.map(to_string);
  } else {
    var type = _typeof(object);
    if (type === 'number') {
      object = String(object);
    } else if (type !== 'string') {
      if (object) {
        object = JSON.stringify(object, null, 2);
      } else {
        object = String(object);
      }
    }
  }
  return object;
}
var WebAdapter = /*#__PURE__*/function () {
  function WebAdapter() {
    var _window$parent,
      _this = this;
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, WebAdapter);
    this._config = $.extend({
      newline: true,
      loop_threshold: 500,
      loop_timeout: 200
    }, config);
    var root = $('#term');
    var options = root.css('--options');
    if (typeof options === 'undefined') {
      options = {};
    } else {
      try {
        options = JSON.parse(options);
      } catch (e) {
        console.warn('Gaiman: Invalid --option CSS variable');
        options = {};
      }
    }
    var playground = (_window$parent = window.parent) === null || _window$parent === void 0 ? void 0 : _window$parent.__GAIMAN_PLAYGROUND__;
    if (playground) {
      options.enabled = false;
    }
    this._term = root.terminal($.noop, $.extend({
      greetings: false,
      exit: false,
      keydown: function keydown() {
        if (_this._animation) {
          return false;
        }
      },
      exceptionHandler: function exceptionHandler(e) {
        if (is_iframe) {
          window.parent.postMessage({
            message: 'Internal: ' + e.message,
            colno: null,
            lineno: null
          });
        } else {
          throw e;
        }
      }
    }, options));
  }
  _createClass(WebAdapter, [{
    key: "config",
    value: function config(name, value) {
      if (typeof name === 'string') {
        this._config[name] = value;
      } else {
        var completion = name.completion,
          rest = _objectWithoutProperties(name, _excluded);
        this._term.settings().completion = completion;
        $.extend(rest, name);
      }
    }
  }, {
    key: "store",
    value: function store(name) {
      try {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        if (args.length === 0) {
          return JSON.parse(localStorage.getItem(name));
        } else {
          var value = args[0];
          localStorage.setItem(name, JSON.stringify(value));
        }
      } catch (e) {
        // ignore errors that may happen in Incognito mode
      }
    }
  }, {
    key: "sleep",
    value: function sleep(timeout) {
      var _this2 = this;
      var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this._term.pause(visible);
      return new Promise(function (resolve) {
        setTimeout(function () {
          _this2._term.resume();
          resolve();
        }, Number(timeout));
      });
    }
  }, {
    key: "sleep_extra",
    value: function sleep_extra(timeout) {
      return this.sleep(timeout, true);
    }
  }, {
    key: "mask",
    value: function mask(char) {
      if (arguments.length === 0) {
        return this._term.cmd().mask();
      }
      this._term.set_mask(char);
    }
  }, {
    key: "error",
    value: function error(e) {
      var message;
      if (e.statusText) {
        message = "Failed to fetch: ".concat(e.url, "\n").concat(e.statusText);
      } else {
        message = e.message || e;
      }
      this._term.error(message);
    }
  }, {
    key: "echo",
    value: function echo() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (typeof arg !== 'function') {
        arg = to_string(arg);
      }
      this._term.echo(arg, {
        newline: this._config.newline
      });
    }
  }, {
    key: "echo_extra",
    value: function echo_extra(string, delay) {
      return this._term.echo(string, {
        typing: true,
        delay: delay
      });
    }
  }, {
    key: "enter",
    value: function enter(string) {
      return this._term.enter(string);
    }
  }, {
    key: "enter_extra",
    value: function enter_extra(string, delay) {
      return this._term.enter(string, {
        typing: true,
        delay: delay
      });
    }
  }, {
    key: "ask",
    value: function ask(message) {
      var _this3 = this;
      var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return true;
      };
      return new Promise(function (resolve) {
        _this3._term.push(function (result) {
          return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(typeof validator !== 'function')) {
                    _context2.next = 2;
                    break;
                  }
                  throw new Error('ask validator needs to be a function');
                case 2:
                  _context2.next = 4;
                  return validator(result);
                case 4:
                  if (!_context2.sent) {
                    _context2.next = 7;
                    break;
                  }
                  _this3._term.pop();
                  resolve(result);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })));
        }, {
          prompt: message
        });
      });
    }
  }, {
    key: "ask_extra",
    value: function ask_extra(message, delay) {
      var _this4 = this;
      var validator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return true;
      };
      return new Promise(function (resolve) {
        var prompt = _this4._term.get_prompt();
        _this4._term.push(function (result) {
          return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(typeof validator !== 'function')) {
                    _context3.next = 2;
                    break;
                  }
                  throw new Error('ask* validator needs to be a function');
                case 2:
                  _context3.next = 4;
                  return validator(result);
                case 4:
                  if (!_context3.sent) {
                    _context3.next = 9;
                    break;
                  }
                  _this4._term.pop().set_prompt(prompt);
                  resolve(result);
                  _context3.next = 10;
                  break;
                case 9:
                  _this4._term.set_prompt(message, {
                    typing: true,
                    delay: delay
                  });
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })));
        }).set_prompt(message, {
          typing: true,
          delay: delay
        });
      });
    }
  }, {
    key: "update",
    value: function update(index, string) {
      this._term.update(index, string);
    }
  }, {
    key: "prompt",
    value: function prompt(string) {
      this._term.set_prompt(string);
    }
  }, {
    key: "prompt_extra",
    value: function prompt_extra(string, delay) {
      return this._term.set_prompt(string, {
        typing: true,
        delay: delay
      });
    }
  }, {
    key: "input",
    value: function input(string) {
      return this._term.exec(string);
    }
  }, {
    key: "input_extra",
    value: function input_extra(string, delay) {
      return this._term.exec(string, {
        typing: true,
        delay: delay
      });
    }
  }, {
    key: "exec",
    value: function exec(command) {
      return this._term.exec(command);
    }
  }, {
    key: "exec_extra",
    value: function exec_extra(command, delay) {
      return this._term.exec(command, {
        typing: true,
        delay: delay
      });
    }
  }, {
    key: "animate",
    value: function () {
      var _animate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(fn) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this._animation = true;
              _context4.next = 3;
              return fn();
            case 3:
              this._animation = false;
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function animate(_x) {
        return _animate.apply(this, arguments);
      }
      return animate;
    }()
  }, {
    key: "clear",
    value: function clear() {
      this._term.clear();
    }
  }]);
  return WebAdapter;
}();
$.ajaxSetup({
  beforeSend: function beforeSend(jqXHR, settings) {
    jqXHR.url = settings.url;
  }
});
extend(Gaiman, WebAdapter.prototype);
var GaimanArray = /*#__PURE__*/function (_Array) {
  _inherits(GaimanArray, _Array);
  var _super = _createSuper(GaimanArray);
  function GaimanArray() {
    _classCallCheck(this, GaimanArray);
    return _super.apply(this, arguments);
  }
  _createClass(GaimanArray, [{
    key: "map",
    value: function map() {
      function call(arr) {
        return _construct(GaimanArray, _toConsumableArray(arr));
      }
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var arr = _get(_getPrototypeOf(GaimanArray.prototype), "map", this).apply(this, args);
      var some = _get(_getPrototypeOf(GaimanArray.prototype), "some", this);
      var has_promise = some.call(arr, is_promise);
      if (has_promise) {
        return Promise.all(arr).then(call);
      } else {
        return call(arr);
      }
    }
  }, {
    key: "forEach",
    value: function forEach() {
      return this.map.apply(this, arguments);
    }
  }, {
    key: "filter",
    value: function filter(fn, ctx) {
      var filter = _get(_getPrototypeOf(GaimanArray.prototype), "filter", this);
      function call(arr) {
        return _construct(GaimanArray, _toConsumableArray(filter.call(arr, function (x) {
          return x;
        })));
      }
      var items = this.map(fn, ctx);
      if (is_promise(items)) {
        return items.then(function (arr) {
          return call(arr);
        });
      } else {
        return call(items);
      }
    }
  }, {
    key: "reduce",
    value: function reduce(fn, init) {
      return _construct(GaimanArray, _toConsumableArray(_get(_getPrototypeOf(GaimanArray.prototype), "reduce", this).call(this, function (acc) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        if (is_promise(acc)) {
          return acc.then(function (acc) {
            return fn.apply(void 0, [acc].concat(args));
          });
        } else {
          return fn.apply(void 0, [acc].concat(args));
        }
      }, init)));
    }
  }, {
    key: "sort",
    value: function sort() {
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSortFn;
      return mergeSort(this, fn);
    }
  }, {
    key: "some",
    value: function some(fn, ctx) {
      var some = _get(_getPrototypeOf(GaimanArray.prototype), "some", this);
      return this.mapWithCallback(fn, function (arr) {
        return some.call(arr, function (x) {
          return x;
        });
      }, ctx);
    }
  }, {
    key: "every",
    value: function every(fn, ctx) {
      var every = _get(_getPrototypeOf(GaimanArray.prototype), "every", this);
      return this.mapWithCallback(fn, function (arr) {
        return every.call(arr, function (x) {
          return x;
        });
      }, ctx);
    }
  }, {
    key: "find",
    value: function find(fn, ctx) {
      var _this5 = this;
      return this.mapWithCallback(fn, function (arr) {
        var index = arr.findIndex(function (x) {
          return x;
        });
        return _this5[index];
      }, ctx);
    }
  }, {
    key: "flatMap",
    value: function flatMap(fn) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      return this.map.apply(this, args).flat();
    }
  }, {
    key: "mapWithCallback",
    value: function mapWithCallback(fn, callback, ctx) {
      var items = this.map(fn, ctx);
      if (is_promise(items)) {
        return items.then(function (arr) {
          return callback(arr);
        });
      } else {
        return callback(items);
      }
    }
  }]);
  return GaimanArray;
}( /*#__PURE__*/_wrapNativeSuper(Array));
function defaultSortFn(a, b) {
  if (typeof a !== 'string') {
    a = String(a);
  }
  if (typeof b !== 'string') {
    b = String(b);
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

// based on: https://rosettacode.org/wiki/Sorting_algorithms/Merge_sort#JavaScript
function mergeSort(_x2) {
  return _mergeSort.apply(this, arguments);
} // STD library
function _mergeSort() {
  _mergeSort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(array) {
    var fn,
      mid,
      left,
      right,
      ia,
      il,
      ir,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          fn = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : defaultSortFn;
          if (!(array.length <= 1)) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", array);
        case 3:
          mid = Math.floor(array.length / 2), left = array.slice(0, mid), right = array.slice(mid);
          _context5.next = 6;
          return mergeSort(left, fn);
        case 6:
          _context5.next = 8;
          return mergeSort(right, fn);
        case 8:
          ia = 0, il = 0, ir = 0;
        case 9:
          if (!(il < left.length && ir < right.length)) {
            _context5.next = 21;
            break;
          }
          _context5.next = 12;
          return fn(left[il], right[ir]);
        case 12:
          _context5.t0 = _context5.sent;
          if (!(_context5.t0 <= 0)) {
            _context5.next = 17;
            break;
          }
          _context5.t1 = left[il++];
          _context5.next = 18;
          break;
        case 17:
          _context5.t1 = right[ir++];
        case 18:
          array[ia++] = _context5.t1;
          _context5.next = 9;
          break;
        case 21:
          while (il < left.length) {
            array[ia++] = left[il++];
          }
          while (ir < right.length) {
            array[ia++] = right[ir++];
          }
          return _context5.abrupt("return", array);
        case 24:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _mergeSort.apply(this, arguments);
}
function $_ord(x) {
  var type = _typeof(x);
  if (type !== 'string') {
    throw new Error("ord: Invalid argument, expected string got ".concat(type));
  }
  var len = _toConsumableArray(x).length;
  if (len > 1) {
    throw new Error('ord: argument need to be string of length 1');
  }
  return x.codePointAt(0);
}
function $_chr(x) {
  var type = _typeof(x);
  if (type !== 'number') {
    throw new Error("chr: Invalid argument, expected number got ".concat(type));
  }
  return String.fromCodePoint(x);
}
function $_range(start, stop, step) {
  if (!stop) {
    stop = start;
    start = 0;
  }
  if (!step) {
    if (start > stop) {
      step = -1;
    } else {
      step = 1;
    }
  }
  if (start > stop && step > 0) {
    return new GaimanArray();
  }
  var result = new GaimanArray();
  function run() {
    result.push(start);
    start += step;
  }
  if (start > stop) {
    while (start > stop) {
      run();
    }
  } else {
    while (start < stop) {
      run();
    }
  }
  return result;
}
var $_abs = Math.abs;
var $_acos = Math.acos;
var $_acosh = Math.acosh;
var $_asin = Math.asin;
var $_asinh = Math.asinh;
var $_atan = Math.atan;
var $_atanh = Math.atanh;
var $_atan2 = Math.atan2;
var $_ceil = Math.ceil;
var $_cbrt = Math.cbrt;
var $_expm1 = Math.expm1;
var $_clz32 = Math.clz32;
var $_cos = Math.cos;
var $_cosh = Math.cosh;
var $_exp = Math.exp;
var $_floor = Math.floor;
var $_fround = Math.fround;
var $_hypot = Math.hypot;
var $_imul = Math.imul;
var $_log = Math.log;
var $_log1p = Math.log1p;
var $_log2 = Math.log2;
var $_log10 = Math.log10;
var $_max = Math.max;
var $_min = Math.min;
var $_pow = Math.pow;
var $_random = Math.random;
var $_round = Math.round;
var $_sign = Math.sign;
var $_sin = Math.sin;
var $_sinh = Math.sinh;
var $_sqrt = Math.sqrt;
var $_tan = Math.tan;
var $_tanh = Math.tanh;
var $_trunc = Math.trunc;
var $_E = Math.E;
var $_LN10 = Math.LN10;
var $_LN2 = Math.LN2;
var $_LOG10E = Math.LOG10E;
var $_LOG2E = Math.LOG2E;
var $_PI = Math.PI;
var $_SQRT1_2 = Math.SQRT1_2;
var $_SQRT2 = Math.SQRT2;
var $_to_base64 = btoa;
var $_from_base64 = atob;
var $_sprintf = sprintf;
var $_cols = function $_cols() {
  return gaiman._term.cols();
};
var $_rows = function $_rows() {
  return gaiman._term.rows();
};
var $_delay = function $_delay(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

// Fisher-Yates (aka Knuth) Shuffle
// ref: https://stackoverflow.com/a/2450976/387194
function $_shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    var _ref3 = [array[randomIndex], array[currentIndex]];
    array[currentIndex] = _ref3[0];
    array[randomIndex] = _ref3[1];
  }
  return array;
}
var cookie, argv, gaiman, $$__m;
try {
  if (is_node()) {
    argv = process.argv;
  } else {
    cookie = parse_cookies(document.cookie);
    gaiman = new WebAdapter();
  }
  main();
} catch (e) {
  window.parent.postMessage({
    message: e.message,
    colno: null,
    lineno: null
  });
  throw e;
}
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee132() {
    var $_istqbuster_a_score, $_istqbuster_a_1, _$_istqbuster_a_, $_istqbuster_a_2, _$_istqbuster_a_2, $_istqbuster_a_3, _$_istqbuster_a_3, $_istqbuster_a_4, _$_istqbuster_a_4, $_istqbuster_a_5, _$_istqbuster_a_5, $_istqbuster_a_6, _$_istqbuster_a_6, $_istqbuster_a_7, _$_istqbuster_a_7, $_istqbuster_a_8, _$_istqbuster_a_8, $_istqbuster_a_9, _$_istqbuster_a_9, $_istqbuster_a_10, _$_istqbuster_a_10, $_istqbuster_a_11, _$_istqbuster_a_11, $_istqbuster_a_12, _$_istqbuster_a_12, $_istqbuster_a_13, _$_istqbuster_a_13, $_istqbuster_a_14, _$_istqbuster_a_14, $_istqbuster_a_15, _$_istqbuster_a_15, $_istqbuster_a_16, _$_istqbuster_a_16, $_istqbuster_a_17, _$_istqbuster_a_17, $_istqbuster_a_18, _$_istqbuster_a_18, $_istqbuster_a_19, _$_istqbuster_a_19, $_istqbuster_a_20, _$_istqbuster_a_20, $_istqbuster_a_21, _$_istqbuster_a_21, $_istqbuster_a_22, _$_istqbuster_a_22, $_istqbuster_a_23, _$_istqbuster_a_23, $_istqbuster_a_24, _$_istqbuster_a_24, $_istqbuster_a_25, _$_istqbuster_a_25, $_istqbuster_a_26, _$_istqbuster_a_26, $_istqbuster_a_27, _$_istqbuster_a_27, $_istqbuster_a_28, _$_istqbuster_a_28, $_istqbuster_a_29, _$_istqbuster_a_29, $_istqbuster_a_30, _$_istqbuster_a_30, $_istqbuster_a_31, _$_istqbuster_a_31, $_istqbuster_a_32, _$_istqbuster_a_32, $_istqbuster_a_33, _$_istqbuster_a_33, $_istqbuster_a_34, _$_istqbuster_a_34, $_istqbuster_a_35, _$_istqbuster_a_35, $_istqbuster_a_36, _$_istqbuster_a_36, $_istqbuster_a_37, _$_istqbuster_a_37, $_istqbuster_a_38, _$_istqbuster_a_38, $_istqbuster_a_39, _$_istqbuster_a_39, $_istqbuster_a_40, _$_istqbuster_a_40, $_istqbuster_b_score, $_istqbuster_b_1, _$_istqbuster_b_, $_istqbuster_b_2, _$_istqbuster_b_2, $_istqbuster_b_3, _$_istqbuster_b_3, $_istqbuster_b_4, _$_istqbuster_b_4, $_istqbuster_b_5, _$_istqbuster_b_5, $_istqbuster_b_6, _$_istqbuster_b_6, $_istqbuster_b_7, _$_istqbuster_b_7, $_istqbuster_b_8, _$_istqbuster_b_8, $_istqbuster_b_9, _$_istqbuster_b_9, $_istqbuster_b_10, _$_istqbuster_b_10, $_istqbuster_b_11, _$_istqbuster_b_11, $_istqbuster_b_12, _$_istqbuster_b_12, $_istqbuster_b_13, _$_istqbuster_b_13, $_istqbuster_b_14, _$_istqbuster_b_14, $_istqbuster_b_15, _$_istqbuster_b_15, $_istqbuster_b_16, _$_istqbuster_b_16, $_istqbuster_b_17, _$_istqbuster_b_17, $_istqbuster_b_18, _$_istqbuster_b_18, $_istqbuster_b_19, _$_istqbuster_b_19, $_istqbuster_b_20, _$_istqbuster_b_20, $_istqbuster_b_21, _$_istqbuster_b_21, $_istqbuster_b_22, _$_istqbuster_b_22, $_istqbuster_b_23, _$_istqbuster_b_23, $_istqbuster_b_24, _$_istqbuster_b_24, $_istqbuster_b_25, _$_istqbuster_b_25, $_istqbuster_b_26, _$_istqbuster_b_26, $_istqbuster_b_27, _$_istqbuster_b_27, $_istqbuster_b_28, _$_istqbuster_b_28, $_istqbuster_b_29, _$_istqbuster_b_29, $_istqbuster_b_30, _$_istqbuster_b_30, $_istqbuster_b_31, _$_istqbuster_b_31, $_istqbuster_b_32, _$_istqbuster_b_32, $_istqbuster_b_33, _$_istqbuster_b_33, $_istqbuster_b_34, _$_istqbuster_b_34, $_istqbuster_b_35, _$_istqbuster_b_35, $_istqbuster_b_36, _$_istqbuster_b_36, $_istqbuster_b_37, _$_istqbuster_b_37, $_istqbuster_b_38, _$_istqbuster_b_38, $_istqbuster_b_39, _$_istqbuster_b_39, $_istqbuster_b_40, _$_istqbuster_b_40, $_istqbuster_c_score, $_istqbuster_c_1, _$_istqbuster_c_, $_istqbuster_c_2, _$_istqbuster_c_2, $_istqbuster_c_3, _$_istqbuster_c_3, $_istqbuster_c_4, _$_istqbuster_c_4, $_istqbuster_c_5, _$_istqbuster_c_5, $_istqbuster_c_6, _$_istqbuster_c_6, $_istqbuster_c_7, _$_istqbuster_c_7, $_istqbuster_c_8, _$_istqbuster_c_8, $_istqbuster_c_9, _$_istqbuster_c_9, $_istqbuster_c_10, _$_istqbuster_c_10, $_istqbuster_c_11, _$_istqbuster_c_11, $_istqbuster_c_12, _$_istqbuster_c_12, $_istqbuster_c_13, _$_istqbuster_c_13, $_istqbuster_c_14, _$_istqbuster_c_14, $_istqbuster_c_15, _$_istqbuster_c_15, $_istqbuster_c_16, _$_istqbuster_c_16, $_istqbuster_c_17, _$_istqbuster_c_17, $_istqbuster_c_18, _$_istqbuster_c_18, $_istqbuster_c_19, _$_istqbuster_c_19, $_istqbuster_c_20, _$_istqbuster_c_20, $_istqbuster_c_21, _$_istqbuster_c_21, $_istqbuster_c_22, _$_istqbuster_c_22, $_istqbuster_c_23, _$_istqbuster_c_23, $_istqbuster_c_24, _$_istqbuster_c_24, $_istqbuster_c_25, _$_istqbuster_c_25, $_istqbuster_c_26, _$_istqbuster_c_26, $_istqbuster_c_27, _$_istqbuster_c_27, $_istqbuster_c_28, _$_istqbuster_c_28, $_istqbuster_c_29, _$_istqbuster_c_29, $_istqbuster_c_30, _$_istqbuster_c_30, $_istqbuster_c_31, _$_istqbuster_c_31, $_istqbuster_c_32, _$_istqbuster_c_32, $_istqbuster_c_33, _$_istqbuster_c_33, $_istqbuster_c_34, _$_istqbuster_c_34, $_istqbuster_c_35, _$_istqbuster_c_35, $_istqbuster_c_36, _$_istqbuster_c_36, $_istqbuster_c_37, _$_istqbuster_c_37, $_istqbuster_c_38, _$_istqbuster_c_38, $_istqbuster_c_39, _$_istqbuster_c_39, $_istqbuster_c_40, _$_istqbuster_c_40, $_istqbuster_result_a, _$_istqbuster_result_a, $_istqbuster_result_b, _$_istqbuster_result_b, $_istqbuster_result_c, _$_istqbuster_result_c, $_restart, _$_restart, $_restart_music_wizard, _$_restart_music_wizard, $_start_music, _$_start_music, $_greetings, $_music, $_confirm;
    return _regeneratorRuntime().wrap(function _callee132$(_context132) {
      while (1) switch (_context132.prev = _context132.next) {
        case 0:
          _context132.prev = 0;
          _$_start_music = function _$_start_music3() {
            _$_start_music = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee131() {
              return _regeneratorRuntime().wrap(function _callee131$(_context131) {
                while (1) switch (_context131.prev = _context131.next) {
                  case 0:
                    audio.play();
                    audio.volume = 0.20; // 20%
                  case 2:
                  case "end":
                    return _context131.stop();
                }
              }, _callee131);
            }));
            return _$_start_music.apply(this, arguments);
          };
          $_start_music = function _$_start_music2() {
            return _$_start_music.apply(this, arguments);
          };
          _$_restart_music_wizard = function _$_restart_music_wiza2() {
            _$_restart_music_wizard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee130() {
              var $_music;
              return _regeneratorRuntime().wrap(function _callee130$(_context130) {
                while (1) switch (_context130.prev = _context130.next) {
                  case 0:
                    _context130.next = 2;
                    return gaiman.echo_extra("[[;#94E2D5;]Do you want to activate it?]", 30);
                  case 2:
                    _context130.next = 4;
                    return gaiman.ask("[[;#A6E3A1;]yes]/[[;#F38BA8;]no]? ");
                  case 4:
                    $_music = _context130.sent;
                    if (!($$__m = String($_music).match(/yes/i), !!$$__m)) {
                      _context130.next = 11;
                      break;
                    }
                    _context130.next = 8;
                    return $_start_music();
                  case 8:
                    gaiman.echo("");
                    _context130.next = 30;
                    break;
                  case 11:
                    if (!($$__m = String($_music).match(/y/i), !!$$__m)) {
                      _context130.next = 17;
                      break;
                    }
                    _context130.next = 14;
                    return $_start_music();
                  case 14:
                    gaiman.echo("");
                    _context130.next = 30;
                    break;
                  case 17:
                    if (!($$__m = String($_music).match(/no/i), !!$$__m)) {
                      _context130.next = 21;
                      break;
                    }
                    gaiman.echo("");
                    _context130.next = 30;
                    break;
                  case 21:
                    if (!($$__m = String($_music).match(/n/i), !!$$__m)) {
                      _context130.next = 25;
                      break;
                    }
                    gaiman.echo("");
                    _context130.next = 30;
                    break;
                  case 25:
                    gaiman.echo("");
                    _context130.next = 28;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 28:
                    _context130.next = 30;
                    return $_restart_music_wizard();
                  case 30:
                  case "end":
                    return _context130.stop();
                }
              }, _callee130);
            }));
            return _$_restart_music_wizard.apply(this, arguments);
          };
          $_restart_music_wizard = function _$_restart_music_wiza() {
            return _$_restart_music_wizard.apply(this, arguments);
          };
          _$_restart = function _$_restart3() {
            _$_restart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee129() {
              var $_confirm;
              return _regeneratorRuntime().wrap(function _callee129$(_context129) {
                while (1) switch (_context129.prev = _context129.next) {
                  case 0:
                    _context129.next = 2;
                    return gaiman.echo_extra("Let's keep practicing,type the exam letter that you want:", 35);
                  case 2:
                    _context129.next = 4;
                    return gaiman.ask("[[;#F38BA8;]A], [[;#94E2D5;]B] or [[;#89B4FA;]C] ");
                  case 4:
                    $_confirm = _context129.sent;
                    if (!($$__m = String($_confirm).match(/a/i), !!$$__m)) {
                      _context129.next = 14;
                      break;
                    }
                    gaiman.echo("");
                    _context129.next = 9;
                    return gaiman.echo_extra("[[;#F38BA8;]Starting ISTQB foundation level exam A]", 30);
                  case 9:
                    $_istqbuster_a_score = 0;
                    _context129.next = 12;
                    return $_istqbuster_a_1();
                  case 12:
                    _context129.next = 37;
                    break;
                  case 14:
                    if (!($$__m = String($_confirm).match(/b/i), !!$$__m)) {
                      _context129.next = 23;
                      break;
                    }
                    gaiman.echo("");
                    _context129.next = 18;
                    return gaiman.echo_extra("[[;#94E2D5;]Starting ISTQB foundation level exam B]", 30);
                  case 18:
                    $_istqbuster_b_score = 0;
                    _context129.next = 21;
                    return $_istqbuster_b_1();
                  case 21:
                    _context129.next = 37;
                    break;
                  case 23:
                    if (!($$__m = String($_confirm).match(/c/i), !!$$__m)) {
                      _context129.next = 32;
                      break;
                    }
                    gaiman.echo("");
                    _context129.next = 27;
                    return gaiman.echo_extra("[[;#89B4FA;]Starting ISTQB foundation level exam C]", 30);
                  case 27:
                    $_istqbuster_c_score = 0;
                    _context129.next = 30;
                    return $_istqbuster_c_1();
                  case 30:
                    _context129.next = 37;
                    break;
                  case 32:
                    gaiman.echo("");
                    _context129.next = 35;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 35:
                    _context129.next = 37;
                    return $_restart();
                  case 37:
                  case "end":
                    return _context129.stop();
                }
              }, _callee129);
            }));
            return _$_restart.apply(this, arguments);
          };
          $_restart = function _$_restart2() {
            return _$_restart.apply(this, arguments);
          };
          _$_istqbuster_result_c = function _$_istqbuster_result_6() {
            _$_istqbuster_result_c = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee128() {
              return _regeneratorRuntime().wrap(function _callee128$(_context128) {
                while (1) switch (_context128.prev = _context128.next) {
                  case 0:
                    gaiman.echo("");
                    if (!($_istqbuster_c_score >= 26)) {
                      _context128.next = 14;
                      break;
                    }
                    _context128.next = 4;
                    return gaiman.echo_extra("[[;#A6E3A1;]You win]", 35);
                  case 4:
                    _context128.next = 6;
                    return gaiman.echo_extra("[[;#F5C2E7;]result:]", 30);
                  case 6:
                    gaiman.echo($_istqbuster_c_score);
                    _context128.next = 9;
                    return gaiman.echo_extra("[[;#F38BA8;]Congratulations, you are on the right track, keep practicing!]", 30);
                  case 9:
                    gaiman.echo("");
                    _context128.next = 12;
                    return $_restart();
                  case 12:
                    _context128.next = 25;
                    break;
                  case 14:
                    gaiman.echo("");
                    _context128.next = 17;
                    return gaiman.echo_extra("[[;#F38BA8;]You loose]", 35);
                  case 17:
                    _context128.next = 19;
                    return gaiman.echo_extra("[[;#F5C2E7;]result:]", 30);
                  case 19:
                    gaiman.echo($_istqbuster_c_score);
                    _context128.next = 22;
                    return gaiman.echo_extra("[[;#F38BA8;]Keep trying, Rome wasn't built in a day!]", 30);
                  case 22:
                    gaiman.echo("");
                    _context128.next = 25;
                    return $_restart();
                  case 25:
                  case "end":
                    return _context128.stop();
                }
              }, _callee128);
            }));
            return _$_istqbuster_result_c.apply(this, arguments);
          };
          $_istqbuster_result_c = function _$_istqbuster_result_5() {
            return _$_istqbuster_result_c.apply(this, arguments);
          };
          _$_istqbuster_result_b = function _$_istqbuster_result_4() {
            _$_istqbuster_result_b = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee127() {
              return _regeneratorRuntime().wrap(function _callee127$(_context127) {
                while (1) switch (_context127.prev = _context127.next) {
                  case 0:
                    gaiman.echo("");
                    if (!($_istqbuster_b_score >= 26)) {
                      _context127.next = 14;
                      break;
                    }
                    _context127.next = 4;
                    return gaiman.echo_extra("[[;#A6E3A1;]You win]", 35);
                  case 4:
                    _context127.next = 6;
                    return gaiman.echo_extra("[[;#F5C2E7;]result:]", 30);
                  case 6:
                    gaiman.echo($_istqbuster_b_score);
                    _context127.next = 9;
                    return gaiman.echo_extra("[[;#F38BA8;]Congratulations, you are on the right track, keep practicing!]", 30);
                  case 9:
                    gaiman.echo("");
                    _context127.next = 12;
                    return $_restart();
                  case 12:
                    _context127.next = 25;
                    break;
                  case 14:
                    gaiman.echo("");
                    _context127.next = 17;
                    return gaiman.echo_extra("[[;#F38BA8;]You loose]", 35);
                  case 17:
                    _context127.next = 19;
                    return gaiman.echo_extra("[[;#F5C2E7;]result:]", 30);
                  case 19:
                    gaiman.echo($_istqbuster_b_score);
                    _context127.next = 22;
                    return gaiman.echo_extra("[[;#F38BA8;]Keep trying, Rome wasn't built in a day!]", 30);
                  case 22:
                    gaiman.echo("");
                    _context127.next = 25;
                    return $_restart();
                  case 25:
                  case "end":
                    return _context127.stop();
                }
              }, _callee127);
            }));
            return _$_istqbuster_result_b.apply(this, arguments);
          };
          $_istqbuster_result_b = function _$_istqbuster_result_3() {
            return _$_istqbuster_result_b.apply(this, arguments);
          };
          _$_istqbuster_result_a = function _$_istqbuster_result_2() {
            _$_istqbuster_result_a = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee126() {
              return _regeneratorRuntime().wrap(function _callee126$(_context126) {
                while (1) switch (_context126.prev = _context126.next) {
                  case 0:
                    gaiman.echo("");
                    if (!($_istqbuster_a_score >= 26)) {
                      _context126.next = 14;
                      break;
                    }
                    _context126.next = 4;
                    return gaiman.echo_extra("[[;#A6E3A1;]You win]", 35);
                  case 4:
                    _context126.next = 6;
                    return gaiman.echo_extra("[[;#F5C2E7;]result:]", 30);
                  case 6:
                    gaiman.echo($_istqbuster_a_score);
                    _context126.next = 9;
                    return gaiman.echo_extra("[[;#F38BA8;]Congratulations, you are on the right track, keep practicing!]", 30);
                  case 9:
                    gaiman.echo("");
                    _context126.next = 12;
                    return $_restart();
                  case 12:
                    _context126.next = 25;
                    break;
                  case 14:
                    gaiman.echo("");
                    _context126.next = 17;
                    return gaiman.echo_extra("[[;#F38BA8;]You loose]", 35);
                  case 17:
                    _context126.next = 19;
                    return gaiman.echo_extra("[[;#F5C2E7;]result:]", 30);
                  case 19:
                    gaiman.echo($_istqbuster_a_score);
                    _context126.next = 22;
                    return gaiman.echo_extra("[[;#F38BA8;]Keep trying, Rome wasn't built in a day!]", 30);
                  case 22:
                    gaiman.echo("");
                    _context126.next = 25;
                    return $_restart();
                  case 25:
                  case "end":
                    return _context126.stop();
                }
              }, _callee126);
            }));
            return _$_istqbuster_result_a.apply(this, arguments);
          };
          $_istqbuster_result_a = function _$_istqbuster_result_() {
            return _$_istqbuster_result_a.apply(this, arguments);
          };
          _$_istqbuster_c_40 = function _$_istqbuster_c_120() {
            _$_istqbuster_c_40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee125() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee125$(_context125) {
                while (1) switch (_context125.prev = _context125.next) {
                  case 0:
                    gaiman.echo("");
                    _context125.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #40]", 35);
                  case 3:
                    _context125.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following tools is most useful for reporting test metrics?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context125.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Test management tool", 35);
                  case 8:
                    _context125.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Static analysis tool", 35);
                  case 10:
                    _context125.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Coverage tool", 35);
                  case 12:
                    _context125.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Model-Based testing tools", 35);
                  case 14:
                    gaiman.echo("");
                    _context125.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context125.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context125.next = 25;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context125.next = 23;
                    return $_istqbuster_result_c();
                  case 23:
                    _context125.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context125.next = 30;
                      break;
                    }
                    _context125.next = 28;
                    return $_istqbuster_result_c();
                  case 28:
                    _context125.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context125.next = 35;
                      break;
                    }
                    _context125.next = 33;
                    return $_istqbuster_result_c();
                  case 33:
                    _context125.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context125.next = 40;
                      break;
                    }
                    _context125.next = 38;
                    return $_istqbuster_result_c();
                  case 38:
                    _context125.next = 44;
                    break;
                  case 40:
                    _context125.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context125.next = 44;
                    return $_istqbuster_c_40();
                  case 44:
                  case "end":
                    return _context125.stop();
                }
              }, _callee125);
            }));
            return _$_istqbuster_c_40.apply(this, arguments);
          };
          $_istqbuster_c_40 = function _$_istqbuster_c_119() {
            return _$_istqbuster_c_40.apply(this, arguments);
          };
          _$_istqbuster_c_39 = function _$_istqbuster_c_118() {
            _$_istqbuster_c_39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee124() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee124$(_context124) {
                while (1) switch (_context124.prev = _context124.next) {
                  case 0:
                    gaiman.echo("");
                    _context124.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #39]", 35);
                  case 3:
                    _context124.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You have just completed a pilot project for a regression testing tool. You understand the tool much better and have tailored your testing process to it. You have standardized an approach to using the tool and its associated work products. Which of the following is a typical test automation pilot project goal that remains to be carried out?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context124.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Learn more details about the tool", 35);
                  case 8:
                    _context124.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) See how the tool would fit with existing processes and practices", 35);
                  case 10:
                    _context124.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Decide on standard ways of using, managing, storing, and maintaining the tool and the test assets", 35);
                  case 12:
                    _context124.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Assess whether the benefits will be achieved at reasonable cost", 35);
                  case 14:
                    gaiman.echo("");
                    _context124.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context124.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context124.next = 24;
                      break;
                    }
                    _context124.next = 22;
                    return $_istqbuster_c_40();
                  case 22:
                    _context124.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context124.next = 29;
                      break;
                    }
                    _context124.next = 27;
                    return $_istqbuster_c_40();
                  case 27:
                    _context124.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context124.next = 34;
                      break;
                    }
                    _context124.next = 32;
                    return $_istqbuster_c_40();
                  case 32:
                    _context124.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context124.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context124.next = 38;
                    return $_istqbuster_c_40();
                  case 38:
                    _context124.next = 44;
                    break;
                  case 40:
                    _context124.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context124.next = 44;
                    return $_istqbuster_c_39();
                  case 44:
                  case "end":
                    return _context124.stop();
                }
              }, _callee124);
            }));
            return _$_istqbuster_c_39.apply(this, arguments);
          };
          $_istqbuster_c_39 = function _$_istqbuster_c_117() {
            return _$_istqbuster_c_39.apply(this, arguments);
          };
          _$_istqbuster_c_38 = function _$_istqbuster_c_116() {
            _$_istqbuster_c_38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee123() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee123$(_context123) {
                while (1) switch (_context123.prev = _context123.next) {
                  case 0:
                    gaiman.echo("");
                    _context123.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #38]", 35);
                  case 3:
                    _context123.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following list of undesirable outcomes that could occur on a mobile app development effort:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context123.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]A.]) Incorrect totals on screens", 35);
                  case 8:
                    _context123.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]B.]) Change to acceptance criteria during acceptance testing", 35);
                  case 10:
                    _context123.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]C.]) Users find the soft keyboard too hard to use with your app", 35);
                  case 12:
                    _context123.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]D.]) System responds too slowly to user input during search string entry", 35);
                  case 14:
                    _context123.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]E.]) Testers not allowed to report test results in daily standup meetings", 35);
                  case 16:
                    gaiman.echo("");
                    _context123.next = 19;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following properly classifies these outcomes as project and product risks?]", 35);
                  case 19:
                    gaiman.echo("");
                    _context123.next = 22;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Product risks: B, E;       Project risks: A, C, D", 35);
                  case 22:
                    _context123.next = 24;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Product risks: A, C, D;    Project risks: B, E", 35);
                  case 24:
                    _context123.next = 26;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Product risks: A, C, D, E  Project risks: B", 35);
                  case 26:
                    _context123.next = 28;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Product risks: A, C        Project risks: B, D, E", 35);
                  case 28:
                    gaiman.echo("");
                    _context123.next = 31;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 31:
                    $_answer = _context123.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context123.next = 38;
                      break;
                    }
                    _context123.next = 36;
                    return $_istqbuster_c_39();
                  case 36:
                    _context123.next = 58;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context123.next = 44;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context123.next = 42;
                    return $_istqbuster_c_39();
                  case 42:
                    _context123.next = 58;
                    break;
                  case 44:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context123.next = 49;
                      break;
                    }
                    _context123.next = 47;
                    return $_istqbuster_c_39();
                  case 47:
                    _context123.next = 58;
                    break;
                  case 49:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context123.next = 54;
                      break;
                    }
                    _context123.next = 52;
                    return $_istqbuster_c_39();
                  case 52:
                    _context123.next = 58;
                    break;
                  case 54:
                    _context123.next = 56;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 56:
                    _context123.next = 58;
                    return $_istqbuster_c_38();
                  case 58:
                  case "end":
                    return _context123.stop();
                }
              }, _callee123);
            }));
            return _$_istqbuster_c_38.apply(this, arguments);
          };
          $_istqbuster_c_38 = function _$_istqbuster_c_115() {
            return _$_istqbuster_c_38.apply(this, arguments);
          };
          _$_istqbuster_c_37 = function _$_istqbuster_c_114() {
            _$_istqbuster_c_37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee122() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee122$(_context122) {
                while (1) switch (_context122.prev = _context122.next) {
                  case 0:
                    gaiman.echo("");
                    _context122.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #37]", 35);
                  case 3:
                    _context122.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are defining the process for carrying out product risk analysis as part of each iteration on an Agile project. Which of the following is the proper place to document this process in a test plan?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context122.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Scope of testing", 35);
                  case 8:
                    _context122.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Approach of testing", 35);
                  case 10:
                    _context122.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Metrics of testing", 35);
                  case 12:
                    _context122.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Configuration management of the test object", 35);
                  case 14:
                    gaiman.echo("");
                    _context122.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context122.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context122.next = 24;
                      break;
                    }
                    _context122.next = 22;
                    return $_istqbuster_c_38();
                  case 22:
                    _context122.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context122.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context122.next = 28;
                    return $_istqbuster_c_38();
                  case 28:
                    _context122.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context122.next = 35;
                      break;
                    }
                    _context122.next = 33;
                    return $_istqbuster_c_38();
                  case 33:
                    _context122.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context122.next = 40;
                      break;
                    }
                    _context122.next = 38;
                    return $_istqbuster_c_38();
                  case 38:
                    _context122.next = 44;
                    break;
                  case 40:
                    _context122.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context122.next = 44;
                    return $_istqbuster_c_37();
                  case 44:
                  case "end":
                    return _context122.stop();
                }
              }, _callee122);
            }));
            return _$_istqbuster_c_37.apply(this, arguments);
          };
          $_istqbuster_c_37 = function _$_istqbuster_c_113() {
            return _$_istqbuster_c_37.apply(this, arguments);
          };
          _$_istqbuster_c_36 = function _$_istqbuster_c_112() {
            _$_istqbuster_c_36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee121() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee121$(_context121) {
                while (1) switch (_context121.prev = _context121.next) {
                  case 0:
                    gaiman.echo("");
                    _context121.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #36]", 35);
                  case 3:
                    _context121.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]During a project following Agile methods, you find a discrepancy between the developer\u2019s interpretation of an acceptance criteria and the product owner\u2019s interpretation, which you bring up during a user story refinement session. Which of the following is a benefit of test independence exemplified by this situation?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context121.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Recognizing different kinds of failures", 35);
                  case 8:
                    _context121.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Taking primary responsibility for quality", 35);
                  case 10:
                    _context121.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Removing a defect early", 35);
                  case 12:
                    _context121.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Challenging stakeholder assumptions", 35);
                  case 14:
                    gaiman.echo("");
                    _context121.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context121.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context121.next = 24;
                      break;
                    }
                    _context121.next = 22;
                    return $_istqbuster_c_37();
                  case 22:
                    _context121.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context121.next = 29;
                      break;
                    }
                    _context121.next = 27;
                    return $_istqbuster_c_37();
                  case 27:
                    _context121.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context121.next = 34;
                      break;
                    }
                    _context121.next = 32;
                    return $_istqbuster_c_37();
                  case 32:
                    _context121.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context121.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context121.next = 38;
                    return $_istqbuster_c_37();
                  case 38:
                    _context121.next = 44;
                    break;
                  case 40:
                    _context121.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context121.next = 44;
                    return $_istqbuster_c_36();
                  case 44:
                  case "end":
                    return _context121.stop();
                }
              }, _callee121);
            }));
            return _$_istqbuster_c_36.apply(this, arguments);
          };
          $_istqbuster_c_36 = function _$_istqbuster_c_111() {
            return _$_istqbuster_c_36.apply(this, arguments);
          };
          _$_istqbuster_c_35 = function _$_istqbuster_c_110() {
            _$_istqbuster_c_35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee120() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee120$(_context120) {
                while (1) switch (_context120.prev = _context120.next) {
                  case 0:
                    gaiman.echo("");
                    _context120.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #35]", 35);
                  case 3:
                    _context120.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are engaged in planning a test effort for a new mobile banking application. As part of estimation, you first meet with the proposed testers and others on the project. The team is well- coordinated and has already worked on similar projects. To verify the resulting estimate, you then refer to some industry averages for testing effort and costs on similar projects, published by a reputable consultant.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context120.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which statement accurately describes your estimation approach?]", 35);
                  case 8:
                    gaiman.echo("");
                    _context120.next = 11;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A simultaneous expert-based and metrics-based approach", 35);
                  case 11:
                    _context120.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Primarily an expert-based approach, augmented with a metrics-based approach", 35);
                  case 13:
                    _context120.next = 15;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Primarily a metrics-based approach, augmented with an expert-based approach", 35);
                  case 15:
                    _context120.next = 17;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Primarily planning poker, checked by velocity from burndown charts", 35);
                  case 17:
                    gaiman.echo("");
                    _context120.next = 20;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 20:
                    $_answer = _context120.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context120.next = 27;
                      break;
                    }
                    _context120.next = 25;
                    return $_istqbuster_c_36();
                  case 25:
                    _context120.next = 47;
                    break;
                  case 27:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context120.next = 33;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context120.next = 31;
                    return $_istqbuster_c_36();
                  case 31:
                    _context120.next = 47;
                    break;
                  case 33:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context120.next = 38;
                      break;
                    }
                    _context120.next = 36;
                    return $_istqbuster_c_36();
                  case 36:
                    _context120.next = 47;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context120.next = 43;
                      break;
                    }
                    _context120.next = 41;
                    return $_istqbuster_c_36();
                  case 41:
                    _context120.next = 47;
                    break;
                  case 43:
                    _context120.next = 45;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 45:
                    _context120.next = 47;
                    return $_istqbuster_c_35();
                  case 47:
                  case "end":
                    return _context120.stop();
                }
              }, _callee120);
            }));
            return _$_istqbuster_c_35.apply(this, arguments);
          };
          $_istqbuster_c_35 = function _$_istqbuster_c_109() {
            return _$_istqbuster_c_35.apply(this, arguments);
          };
          _$_istqbuster_c_34 = function _$_istqbuster_c_108() {
            _$_istqbuster_c_34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee119() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee119$(_context119) {
                while (1) switch (_context119.prev = _context119.next) {
                  case 0:
                    gaiman.echo("");
                    _context119.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #34]", 35);
                  case 3:
                    _context119.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are working as a project manager on an in-house banking software project. To prevent rework and excessive find/fix/retest cycles, the following process has been put in place for resolving a defect once it is found in the test lab:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context119.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1.]) The assigned developer finds and fixes the defect, then creates an experimental build", 35);
                  case 8:
                    _context119.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2.]) A peer developer reviews, unit tests, and confirmation tests the defect fix on his/her desktop", 35);
                  case 10:
                    _context119.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3.]) A tester \u2013 usually the one who found the defect \u2013 confirmation tests the defect fix in the development environment", 35);
                  case 12:
                    _context119.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4.]) Once a day, a new release with all confirmed defect fixes included, is installed in the test environment", 35);
                  case 14:
                    _context119.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]5.]) The same tester from step 3 confirmation tests the defect fix in the test environment", 35);
                  case 16:
                    gaiman.echo("");
                    _context119.next = 19;
                    return gaiman.echo_extra("[[;#F9E2AF;]Nevertheless, a large number of defects which the testers confirmed as fixed in the development environment (in step 3) are somehow failing confirmation testing in the test environment, with the resulting rework and cycle time outcomes. You have the highest confidence in your testers and have ruled out mistakes or omissions in step 3.]", 35);
                  case 19:
                    gaiman.echo("");
                    _context119.next = 22;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is the MOST likely part of the process to check next?]", 35);
                  case 22:
                    gaiman.echo("");
                    _context119.next = 25;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The activity of developers, who may not be adequately testing in step 2", 35);
                  case 25:
                    _context119.next = 27;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The activity of testers, who may be confused about what to test in step 5", 35);
                  case 27:
                    _context119.next = 29;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Configuration management, which may not be maintaining the integrity of the product in step 4", 35);
                  case 29:
                    _context119.next = 31;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The activity of developers, who may not be fixing defects properly in step 1", 35);
                  case 31:
                    gaiman.echo("");
                    _context119.next = 34;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 34:
                    $_answer = _context119.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context119.next = 41;
                      break;
                    }
                    _context119.next = 39;
                    return $_istqbuster_c_35();
                  case 39:
                    _context119.next = 61;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context119.next = 46;
                      break;
                    }
                    _context119.next = 44;
                    return $_istqbuster_c_35();
                  case 44:
                    _context119.next = 61;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context119.next = 52;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context119.next = 50;
                    return $_istqbuster_c_35();
                  case 50:
                    _context119.next = 61;
                    break;
                  case 52:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context119.next = 57;
                      break;
                    }
                    _context119.next = 55;
                    return $_istqbuster_c_35();
                  case 55:
                    _context119.next = 61;
                    break;
                  case 57:
                    _context119.next = 59;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 59:
                    _context119.next = 61;
                    return $_istqbuster_c_34();
                  case 61:
                  case "end":
                    return _context119.stop();
                }
              }, _callee119);
            }));
            return _$_istqbuster_c_34.apply(this, arguments);
          };
          $_istqbuster_c_34 = function _$_istqbuster_c_107() {
            return _$_istqbuster_c_34.apply(this, arguments);
          };
          _$_istqbuster_c_33 = function _$_istqbuster_c_106() {
            _$_istqbuster_c_33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee118() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee118$(_context118) {
                while (1) switch (_context118.prev = _context118.next) {
                  case 0:
                    gaiman.echo("");
                    _context118.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #33]", 35);
                  case 3:
                    _context118.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following are two factors that can be used to determine the level of risk?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context118.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Testing and development", 35);
                  case 8:
                    _context118.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Dynamic and reactive", 35);
                  case 10:
                    _context118.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Statement and decision", 35);
                  case 12:
                    _context118.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Likelihood and impact", 35);
                  case 14:
                    gaiman.echo("");
                    _context118.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context118.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context118.next = 24;
                      break;
                    }
                    _context118.next = 22;
                    return $_istqbuster_c_34();
                  case 22:
                    _context118.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context118.next = 29;
                      break;
                    }
                    _context118.next = 27;
                    return $_istqbuster_c_34();
                  case 27:
                    _context118.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context118.next = 35;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context118.next = 33;
                    return $_istqbuster_c_34();
                  case 33:
                    _context118.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context118.next = 40;
                      break;
                    }
                    _context118.next = 38;
                    return $_istqbuster_c_34();
                  case 38:
                    _context118.next = 44;
                    break;
                  case 40:
                    _context118.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context118.next = 44;
                    return $_istqbuster_c_33();
                  case 44:
                  case "end":
                    return _context118.stop();
                }
              }, _callee118);
            }));
            return _$_istqbuster_c_33.apply(this, arguments);
          };
          $_istqbuster_c_33 = function _$_istqbuster_c_105() {
            return _$_istqbuster_c_33.apply(this, arguments);
          };
          _$_istqbuster_c_32 = function _$_istqbuster_c_104() {
            _$_istqbuster_c_32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee117() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee117$(_context117) {
                while (1) switch (_context117.prev = _context117.next) {
                  case 0:
                    gaiman.echo("");
                    _context117.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #32]", 35);
                  case 3:
                    _context117.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a common test metric often used to monitor BOTH test preparation and test execution?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context117.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Test case status", 35);
                  case 8:
                    _context117.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Defect find/fix rates", 35);
                  case 10:
                    _context117.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Test environment preparation", 35);
                  case 12:
                    _context117.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Estimated cost to find the next defect", 35);
                  case 14:
                    gaiman.echo("");
                    _context117.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context117.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context117.next = 25;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context117.next = 23;
                    return $_istqbuster_c_33();
                  case 23:
                    _context117.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context117.next = 30;
                      break;
                    }
                    _context117.next = 28;
                    return $_istqbuster_c_33();
                  case 28:
                    _context117.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context117.next = 35;
                      break;
                    }
                    _context117.next = 33;
                    return $_istqbuster_c_33();
                  case 33:
                    _context117.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context117.next = 40;
                      break;
                    }
                    _context117.next = 38;
                    return $_istqbuster_c_33();
                  case 38:
                    _context117.next = 44;
                    break;
                  case 40:
                    _context117.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context117.next = 44;
                    return $_istqbuster_c_32();
                  case 44:
                  case "end":
                    return _context117.stop();
                }
              }, _callee117);
            }));
            return _$_istqbuster_c_32.apply(this, arguments);
          };
          $_istqbuster_c_32 = function _$_istqbuster_c_103() {
            return _$_istqbuster_c_32.apply(this, arguments);
          };
          _$_istqbuster_c_31 = function _$_istqbuster_c_102() {
            _$_istqbuster_c_31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee116() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee116$(_context116) {
                while (1) switch (_context116.prev = _context116.next) {
                  case 0:
                    gaiman.echo("");
                    _context116.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #31]", 35);
                  case 3:
                    _context116.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are testing a mobile app that allows users to find a nearby restaurant, based on the type of food they want to eat. Consider the following list of test cases, priorities (smaller number is high priority), and dependencies, in the following format:]", 35);
                  case 5:
                    gaiman.echo("");
                    gaiman.echo("+-----------+---------------------+----------+------------+");
                    gaiman.echo("| Test case | Test condition      | Priority | Logical    |");
                    gaiman.echo("| number    | covered             |          | dependency |");
                    gaiman.echo("+-----------+---------------------+----------+------------+");
                    gaiman.echo("| 01.001    | Select type of food |    3     | none       |");
                    gaiman.echo("+-----------+---------------------+----------+------------+");
                    gaiman.echo("| 01.002    | Select restaurant   |    2     | 01.001     |");
                    gaiman.echo("+-----------+---------------------+----------+------------|");
                    gaiman.echo("| 01.003    | Get directions      |    1     | 01.002     |");
                    gaiman.echo("+-----------+---------------------+----------+------------|");
                    gaiman.echo("| 01.004    | Call restaurant     |    1     | 01.002     |");
                    gaiman.echo("+-----------+-------------------- +----------+------------+");
                    gaiman.echo("");
                    _context116.next = 21;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a possible test execution schedule that considers both priorities and dependencies?]", 35);
                  case 21:
                    gaiman.echo("");
                    _context116.next = 24;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 01.001, 01.002, 01.003, 01.005,", 35);
                  case 24:
                    _context116.next = 26;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 01.001, 01.002, 01.004, 01.003,", 35);
                  case 26:
                    _context116.next = 28;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 01.003, 01.004, 01.002, 01.001,", 35);
                  case 28:
                    _context116.next = 30;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 01.001, 01.002, 01.004, 01.005,", 35);
                  case 30:
                    gaiman.echo("");
                    _context116.next = 33;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 33:
                    $_answer = _context116.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context116.next = 40;
                      break;
                    }
                    _context116.next = 38;
                    return $_istqbuster_c_32();
                  case 38:
                    _context116.next = 60;
                    break;
                  case 40:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context116.next = 46;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context116.next = 44;
                    return $_istqbuster_c_32();
                  case 44:
                    _context116.next = 60;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context116.next = 51;
                      break;
                    }
                    _context116.next = 49;
                    return $_istqbuster_c_32();
                  case 49:
                    _context116.next = 60;
                    break;
                  case 51:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context116.next = 56;
                      break;
                    }
                    _context116.next = 54;
                    return $_istqbuster_c_32();
                  case 54:
                    _context116.next = 60;
                    break;
                  case 56:
                    _context116.next = 58;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 58:
                    _context116.next = 60;
                    return $_istqbuster_c_31();
                  case 60:
                  case "end":
                    return _context116.stop();
                }
              }, _callee116);
            }));
            return _$_istqbuster_c_31.apply(this, arguments);
          };
          $_istqbuster_c_31 = function _$_istqbuster_c_101() {
            return _$_istqbuster_c_31.apply(this, arguments);
          };
          _$_istqbuster_c_30 = function _$_istqbuster_c_100() {
            _$_istqbuster_c_30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee115() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee115$(_context115) {
                while (1) switch (_context115.prev = _context115.next) {
                  case 0:
                    gaiman.echo("");
                    _context115.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #30]", 35);
                  case 3:
                    _context115.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are working as a tester on an online banking system. Availability is considered one of the top products (quality) risks for the system. You find a reproducible failure that results in customers losing their connections to the bank Web site when transferring funds between common types of accounts and being unable to reconnect for between three and five minutes.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context115.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following would be a good summary for a defect report for this failure, one that captures both the essence of the failure and its impact on stakeholders?]", 35);
                  case 8:
                    gaiman.echo("");
                    _context115.next = 11;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Web server logs show error 0x44AB27 when running test 07.005, which is not an expected error message in /tmp filesystem", 35);
                  case 11:
                    _context115.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Developers have introduced major availability defect which will seriously upset our customers", 35);
                  case 13:
                    _context115.next = 15;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Performance is slow and reliability flaky under load", 35);
                  case 15:
                    _context115.next = 17;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Typical funds-transfer transaction results in termination of customer session, with a delay in availability when attempting to reconnect", 35);
                  case 17:
                    gaiman.echo("");
                    _context115.next = 20;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 20:
                    $_answer = _context115.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context115.next = 27;
                      break;
                    }
                    _context115.next = 25;
                    return $_istqbuster_c_31();
                  case 25:
                    _context115.next = 47;
                    break;
                  case 27:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context115.next = 32;
                      break;
                    }
                    _context115.next = 30;
                    return $_istqbuster_c_31();
                  case 30:
                    _context115.next = 47;
                    break;
                  case 32:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context115.next = 37;
                      break;
                    }
                    _context115.next = 35;
                    return $_istqbuster_c_31();
                  case 35:
                    _context115.next = 47;
                    break;
                  case 37:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context115.next = 43;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context115.next = 41;
                    return $_istqbuster_c_31();
                  case 41:
                    _context115.next = 47;
                    break;
                  case 43:
                    _context115.next = 45;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 45:
                    _context115.next = 47;
                    return $_istqbuster_c_30();
                  case 47:
                  case "end":
                    return _context115.stop();
                }
              }, _callee115);
            }));
            return _$_istqbuster_c_30.apply(this, arguments);
          };
          $_istqbuster_c_30 = function _$_istqbuster_c_99() {
            return _$_istqbuster_c_30.apply(this, arguments);
          };
          _$_istqbuster_c_29 = function _$_istqbuster_c_98() {
            _$_istqbuster_c_29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee114() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee114$(_context114) {
                while (1) switch (_context114.prev = _context114.next) {
                  case 0:
                    gaiman.echo("");
                    _context114.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #29]", 35);
                  case 3:
                    _context114.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are testing an e-commerce system that sells cooking supplies such as spices, flour, and other items in bulk. The units in which the items are sold are either grams (for spices and other expensive items) or kilograms (for flour and other inexpensive items). Regardless of the units, the smallest valid order amount is 0.5 units (e.g., half a gram of cardamom pods) and the largest valid order amount is 25.0 units (e.g., 2 kilograms of sugar). The precision of the units\u2019 field is 0.1 units.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context114.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a MINIMAL set of input values that cover the equivalence partitions for this field?]", 35);
                  case 8:
                    gaiman.echo("");
                    _context114.next = 11;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 10.0, 28.0", 35);
                  case 11:
                    _context114.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 0.4, 0.5, 2.0, 2.1", 35);
                  case 13:
                    _context114.next = 15;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 0.2, 0.9, 29.5", 35);
                  case 15:
                    _context114.next = 17;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 12.3", 35);
                  case 17:
                    gaiman.echo("");
                    _context114.next = 20;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 20:
                    $_answer = _context114.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context114.next = 27;
                      break;
                    }
                    _context114.next = 25;
                    return $_istqbuster_c_30();
                  case 25:
                    _context114.next = 47;
                    break;
                  case 27:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context114.next = 32;
                      break;
                    }
                    _context114.next = 30;
                    return $_istqbuster_c_30();
                  case 30:
                    _context114.next = 47;
                    break;
                  case 32:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context114.next = 38;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context114.next = 36;
                    return $_istqbuster_c_30();
                  case 36:
                    _context114.next = 47;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context114.next = 43;
                      break;
                    }
                    _context114.next = 41;
                    return $_istqbuster_c_30();
                  case 41:
                    _context114.next = 47;
                    break;
                  case 43:
                    _context114.next = 45;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 45:
                    _context114.next = 47;
                    return $_istqbuster_c_29();
                  case 47:
                  case "end":
                    return _context114.stop();
                }
              }, _callee114);
            }));
            return _$_istqbuster_c_29.apply(this, arguments);
          };
          $_istqbuster_c_29 = function _$_istqbuster_c_97() {
            return _$_istqbuster_c_29.apply(this, arguments);
          };
          _$_istqbuster_c_28 = function _$_istqbuster_c_96() {
            _$_istqbuster_c_28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee113() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee113$(_context113) {
                while (1) switch (_context113.prev = _context113.next) {
                  case 0:
                    gaiman.echo("");
                    _context113.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #28]", 35);
                  case 3:
                    _context113.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following state transition diagram for a credit-card only, unattended gasoline pump:]", 35);
                  case 5:
                    gaiman.echo("");
                    gaiman.echo("Insert credit card [invalid]/Error message                                       ");
                    gaiman.echo("      | |                                                                        ");
                    gaiman.echo("      | |                  +->Insert credit card [valid]/Select grade message-+  ");
                    gaiman.echo("      | v                  |                                                  |  ");
                    gaiman.echo("     +----------------------+                                                 v  ");
                    gaiman.echo("#--->| Waiting for customer |<-----Cancel or timeout/<--+-----------------------+");
                    gaiman.echo("     +----------------------+      Goodbye message      | Waiting for fuel type |");
                    gaiman.echo("       ^                ^                               +-----------------------+");
                    gaiman.echo("       |                |                                                      | ");
                    gaiman.echo("       |                |                                                      v ");
                    gaiman.echo("Customer finished/      |                                      Push grade button/");
                    gaiman.echo(" Print receipt          |                                  Start pumping message ");
                    gaiman.echo("       |                +--- Cancel or timeout/----------+                     | ");
                    gaiman.echo("       |                      Goodbye message            |                     v ");
                    gaiman.echo("       +---------+                                      +-----------------------+");
                    gaiman.echo("       | Pumping |                                      | Waiting for pumping   |");
                    gaiman.echo("       +---------+<------------------Customer pumps/<---+-----------------------+");
                    gaiman.echo("                                  Pumping started message                        ");
                    gaiman.echo("");
                    _context113.next = 27;
                    return gaiman.echo_extra("[[;#F9E2AF;]Assume that you want to develop the minimum number of tests to cover each transition in the state transition diagram. Assume further that each test must start at the beginning state, waiting for customer, and each test ends when a transition arrives at the beginning state. How many tests do you need?]", 35);
                  case 27:
                    gaiman.echo("");
                    _context113.next = 30;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 4", 35);
                  case 30:
                    _context113.next = 32;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 7", 35);
                  case 32:
                    _context113.next = 34;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 1", 35);
                  case 34:
                    _context113.next = 36;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Infinite", 35);
                  case 36:
                    gaiman.echo("");
                    _context113.next = 39;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 39:
                    $_answer = _context113.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context113.next = 47;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context113.next = 45;
                    return $_istqbuster_c_29();
                  case 45:
                    _context113.next = 66;
                    break;
                  case 47:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context113.next = 52;
                      break;
                    }
                    _context113.next = 50;
                    return $_istqbuster_c_29();
                  case 50:
                    _context113.next = 66;
                    break;
                  case 52:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context113.next = 57;
                      break;
                    }
                    _context113.next = 55;
                    return $_istqbuster_c_29();
                  case 55:
                    _context113.next = 66;
                    break;
                  case 57:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context113.next = 62;
                      break;
                    }
                    _context113.next = 60;
                    return $_istqbuster_c_29();
                  case 60:
                    _context113.next = 66;
                    break;
                  case 62:
                    _context113.next = 64;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 64:
                    _context113.next = 66;
                    return $_istqbuster_c_28();
                  case 66:
                  case "end":
                    return _context113.stop();
                }
              }, _callee113);
            }));
            return _$_istqbuster_c_28.apply(this, arguments);
          };
          $_istqbuster_c_28 = function _$_istqbuster_c_95() {
            return _$_istqbuster_c_28.apply(this, arguments);
          };
          _$_istqbuster_c_27 = function _$_istqbuster_c_94() {
            _$_istqbuster_c_27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee112() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee112$(_context112) {
                while (1) switch (_context112.prev = _context112.next) {
                  case 0:
                    gaiman.echo("");
                    _context112.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #27]", 35);
                  case 3:
                    _context112.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following decision table for the portion of an online airline reservation system that allows frequent flyers to redeem points for reward travel:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context112.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]Condition])                1 2 3", 35);
                  case 8:
                    _context112.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]Account/password okay])    N Y Y", 35);
                  case 10:
                    _context112.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]Sufficient points Action]) - N Y", 35);
                  case 12:
                    _context112.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]Show flight history])      N Y Y", 35);
                  case 14:
                    _context112.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]Allow reward travel])      N N Y", 35);
                  case 16:
                    gaiman.echo("");
                    _context112.next = 19;
                    return gaiman.echo_extra("[[;#F9E2AF;]Suppose that there are two equivalence partitions for the condition where \u201CAccount/password okay\u201D is not true, one where the account is invalid and another where the account is valid, but the password is invalid. Suppose that there is only one equivalence partition corresponding to the condition where \u201CAccount/password okay\u201D is true, where both the account and password are valid.]", 35);
                  case 19:
                    gaiman.echo("");
                    _context112.next = 22;
                    return gaiman.echo_extra("[[;#F9E2AF;]If you want to design tests to cover the equivalence partitions for \u201CAccount/password okay\u201D and also for this portion of the decision table, what is the minimum number of tests required?]", 35);
                  case 22:
                    gaiman.echo("");
                    _context112.next = 25;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 2", 35);
                  case 25:
                    _context112.next = 27;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 3", 35);
                  case 27:
                    _context112.next = 29;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 4", 35);
                  case 29:
                    _context112.next = 31;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 9", 35);
                  case 31:
                    gaiman.echo("");
                    _context112.next = 34;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 34:
                    $_answer = _context112.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context112.next = 41;
                      break;
                    }
                    _context112.next = 39;
                    return $_istqbuster_c_28();
                  case 39:
                    _context112.next = 61;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context112.next = 46;
                      break;
                    }
                    _context112.next = 44;
                    return $_istqbuster_c_28();
                  case 44:
                    _context112.next = 61;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context112.next = 52;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context112.next = 50;
                    return $_istqbuster_c_28();
                  case 50:
                    _context112.next = 61;
                    break;
                  case 52:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context112.next = 57;
                      break;
                    }
                    _context112.next = 55;
                    return $_istqbuster_c_28();
                  case 55:
                    _context112.next = 61;
                    break;
                  case 57:
                    _context112.next = 59;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 59:
                    _context112.next = 61;
                    return $_istqbuster_c_27();
                  case 61:
                  case "end":
                    return _context112.stop();
                }
              }, _callee112);
            }));
            return _$_istqbuster_c_27.apply(this, arguments);
          };
          $_istqbuster_c_27 = function _$_istqbuster_c_93() {
            return _$_istqbuster_c_27.apply(this, arguments);
          };
          _$_istqbuster_c_26 = function _$_istqbuster_c_92() {
            _$_istqbuster_c_26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee111() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee111$(_context111) {
                while (1) switch (_context111.prev = _context111.next) {
                  case 0:
                    gaiman.echo("");
                    _context111.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #26]", 35);
                  case 3:
                    _context111.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are testing an e-commerce system that sells cooking supplies such as spices, flour, and other items in bulk. The units in which the items are sold are either grams (for spices and other expensive items) or kilograms (for flour and other inexpensive items). Regardless of the units, the smallest valid order amount is 0.5 units (e.g., half a gram of cardamom pods) and the largest valid order amount is 25.0 units (e.g., 2 kilograms of sugar). The precision of the unit\u2019s field is 0.1 units.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context111.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a set of input values that cover the boundary values with two-point boundary values for this field?]", 35);
                  case 8:
                    gaiman.echo("");
                    _context111.next = 11;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 0.3, 10.0, 28.0", 35);
                  case 11:
                    _context111.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 0.4, 0.5, 0.6, 24, 9, 2, 0, 2.1", 35);
                  case 13:
                    _context111.next = 15;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 0.4, 0.5, 2.0 25.1", 35);
                  case 15:
                    _context111.next = 17;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 0.5, 0.6, 24.9, 2.0", 35);
                  case 17:
                    gaiman.echo("");
                    _context111.next = 20;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 20:
                    $_answer = _context111.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context111.next = 27;
                      break;
                    }
                    _context111.next = 25;
                    return $_istqbuster_c_27();
                  case 25:
                    _context111.next = 47;
                    break;
                  case 27:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context111.next = 32;
                      break;
                    }
                    _context111.next = 30;
                    return $_istqbuster_c_27();
                  case 30:
                    _context111.next = 47;
                    break;
                  case 32:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context111.next = 38;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context111.next = 36;
                    return $_istqbuster_c_27();
                  case 36:
                    _context111.next = 47;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context111.next = 43;
                      break;
                    }
                    _context111.next = 41;
                    return $_istqbuster_c_27();
                  case 41:
                    _context111.next = 47;
                    break;
                  case 43:
                    _context111.next = 45;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 45:
                    _context111.next = 47;
                    return $_istqbuster_c_26();
                  case 47:
                  case "end":
                    return _context111.stop();
                }
              }, _callee111);
            }));
            return _$_istqbuster_c_26.apply(this, arguments);
          };
          $_istqbuster_c_26 = function _$_istqbuster_c_91() {
            return _$_istqbuster_c_26.apply(this, arguments);
          };
          _$_istqbuster_c_25 = function _$_istqbuster_c_90() {
            _$_istqbuster_c_25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee110() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee110$(_context110) {
                while (1) switch (_context110.prev = _context110.next) {
                  case 0:
                    gaiman.echo("");
                    _context110.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #25]", 35);
                  case 3:
                    _context110.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are testing an unattended gasoline pump that only accepts credit cards. Once the credit card is validated, the pump nozzle placed into the tank, and the desired grade selected, the customer enters the desired amount of fuel in gallons using the keypad. The keypad only allows the entry of digits. Fuel is sold in tenths (0.1) of a gallon, up to 50.0 gallons.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context110.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a minimum set of desired amounts that covers the equivalence partitions for this input?]", 35);
                  case 8:
                    gaiman.echo("");
                    _context110.next = 11;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 0.0, 20.0, 60.0", 35);
                  case 11:
                    _context110.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 0.0, 0.1, 50.0", 35);
                  case 13:
                    _context110.next = 15;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 0.0, 0.1, 50.0, 70.0", 35);
                  case 15:
                    _context110.next = 17;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) -0.1, 0.0, 0.1, 49.9, 50.0, 50.1", 35);
                  case 17:
                    gaiman.echo("");
                    _context110.next = 20;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 20:
                    $_answer = _context110.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context110.next = 28;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context110.next = 26;
                    return $_istqbuster_c_26();
                  case 26:
                    _context110.next = 47;
                    break;
                  case 28:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context110.next = 33;
                      break;
                    }
                    _context110.next = 31;
                    return $_istqbuster_c_26();
                  case 31:
                    _context110.next = 47;
                    break;
                  case 33:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context110.next = 38;
                      break;
                    }
                    _context110.next = 36;
                    return $_istqbuster_c_26();
                  case 36:
                    _context110.next = 47;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context110.next = 43;
                      break;
                    }
                    _context110.next = 41;
                    return $_istqbuster_c_26();
                  case 41:
                    _context110.next = 47;
                    break;
                  case 43:
                    _context110.next = 45;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 45:
                    _context110.next = 47;
                    return $_istqbuster_c_24();
                  case 47:
                  case "end":
                    return _context110.stop();
                }
              }, _callee110);
            }));
            return _$_istqbuster_c_25.apply(this, arguments);
          };
          $_istqbuster_c_25 = function _$_istqbuster_c_89() {
            return _$_istqbuster_c_25.apply(this, arguments);
          };
          _$_istqbuster_c_24 = function _$_istqbuster_c_88() {
            _$_istqbuster_c_24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee109() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee109$(_context109) {
                while (1) switch (_context109.prev = _context109.next) {
                  case 0:
                    gaiman.echo("");
                    _context109.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #24]", 35);
                  case 3:
                    _context109.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A batch application has been in production unchanged for over two years. It runs overnight once a month to produce statements that will be e-mailed to customers. For each customer, the application goes through every account and lists every transaction on that account in the last month. It uses a nested-loop structure to process customers (outer loop), each customer\u2019s accounts (middle loop), and each account\u2019s transactions (inner loop).]", 35);
                  case 5:
                    gaiman.echo("");
                    _context109.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]One night, the batch application terminates prematurely, failing to e-mail statements to some customers, when it encounters a customer with one account for which no transactions occurred in the last month. This is a very unusual situation and has not occurred in the years since this application was placed in production.]", 35);
                  case 8:
                    gaiman.echo("");
                    _context109.next = 11;
                    return gaiman.echo_extra("[[;#F9E2AF;]While fixing the defect, a programmer asks you to recommend test techniques that are effective against this kind of defect. Which of the following test techniques would most likely have been able to detect the underlying defect?]", 35);
                  case 11:
                    gaiman.echo("");
                    _context109.next = 14;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Decision testing", 35);
                  case 14:
                    _context109.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Statement testing", 35);
                  case 16:
                    _context109.next = 18;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Checklist-based testing", 35);
                  case 18:
                    _context109.next = 20;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Error guessing", 35);
                  case 20:
                    gaiman.echo("");
                    _context109.next = 23;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 23:
                    $_answer = _context109.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context109.next = 31;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context109.next = 29;
                    return $_istqbuster_c_25();
                  case 29:
                    _context109.next = 50;
                    break;
                  case 31:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context109.next = 36;
                      break;
                    }
                    _context109.next = 34;
                    return $_istqbuster_c_25();
                  case 34:
                    _context109.next = 50;
                    break;
                  case 36:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context109.next = 41;
                      break;
                    }
                    _context109.next = 39;
                    return $_istqbuster_c_25();
                  case 39:
                    _context109.next = 50;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context109.next = 46;
                      break;
                    }
                    _context109.next = 44;
                    return $_istqbuster_c_25();
                  case 44:
                    _context109.next = 50;
                    break;
                  case 46:
                    _context109.next = 48;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 48:
                    _context109.next = 50;
                    return $_istqbuster_c_24();
                  case 50:
                  case "end":
                    return _context109.stop();
                }
              }, _callee109);
            }));
            return _$_istqbuster_c_24.apply(this, arguments);
          };
          $_istqbuster_c_24 = function _$_istqbuster_c_87() {
            return _$_istqbuster_c_24.apply(this, arguments);
          };
          _$_istqbuster_c_23 = function _$_istqbuster_c_86() {
            _$_istqbuster_c_23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee108() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee108$(_context108) {
                while (1) switch (_context108.prev = _context108.next) {
                  case 0:
                    gaiman.echo("");
                    _context108.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #23]", 35);
                  case 3:
                    _context108.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider a mobile app that allows customers to access and manage their bank accounts. A user story has just been added to the set of features that checks customers\u2019 social media accounts and bank records to give personalized greetings on birthdays and other personal milestones. Which of the following test techniques could a PROGRAMMER use during a unit test of the code to ensure that coverage of situations when the greetings ARE supposed to occur and when the greetings ARE NOT supposed to occur?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context108.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Statement testing", 35);
                  case 8:
                    _context108.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Exploratory testing", 35);
                  case 10:
                    _context108.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) State transition testing", 35);
                  case 12:
                    _context108.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Decision testing", 35);
                  case 14:
                    gaiman.echo("");
                    _context108.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context108.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context108.next = 24;
                      break;
                    }
                    _context108.next = 22;
                    return $_istqbuster_c_24();
                  case 22:
                    _context108.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context108.next = 29;
                      break;
                    }
                    _context108.next = 27;
                    return $_istqbuster_c_24();
                  case 27:
                    _context108.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context108.next = 34;
                      break;
                    }
                    _context108.next = 32;
                    return $_istqbuster_c_24();
                  case 32:
                    _context108.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context108.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context108.next = 38;
                    return $_istqbuster_c_24();
                  case 38:
                    _context108.next = 44;
                    break;
                  case 40:
                    _context108.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context108.next = 44;
                    return $_istqbuster_c_23();
                  case 44:
                  case "end":
                    return _context108.stop();
                }
              }, _callee108);
            }));
            return _$_istqbuster_c_23.apply(this, arguments);
          };
          $_istqbuster_c_23 = function _$_istqbuster_c_85() {
            return _$_istqbuster_c_23.apply(this, arguments);
          };
          _$_istqbuster_c_22 = function _$_istqbuster_c_84() {
            _$_istqbuster_c_22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee107() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee107$(_context107) {
                while (1) switch (_context107.prev = _context107.next) {
                  case 0:
                    gaiman.echo("");
                    _context107.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #22]", 35);
                  case 3:
                    _context107.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are testing a mobile app that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen and each field on each screen against a general list of user interface best practices, derived from a popular book on the topic, that maximize attractiveness, ease-of-use, and accessibility for such apps. Which of the following options BEST categorizes the test technique you are using?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context107.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Specification-based", 35);
                  case 8:
                    _context107.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Exploratory", 35);
                  case 10:
                    _context107.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Checklist-based", 35);
                  case 12:
                    _context107.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Error guessing", 35);
                  case 14:
                    gaiman.echo("");
                    _context107.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context107.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context107.next = 24;
                      break;
                    }
                    _context107.next = 22;
                    return $_istqbuster_c_23();
                  case 22:
                    _context107.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context107.next = 29;
                      break;
                    }
                    _context107.next = 27;
                    return $_istqbuster_c_23();
                  case 27:
                    _context107.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context107.next = 35;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context107.next = 33;
                    return $_istqbuster_c_23();
                  case 33:
                    _context107.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context107.next = 40;
                      break;
                    }
                    _context107.next = 38;
                    return $_istqbuster_c_23();
                  case 38:
                    _context107.next = 44;
                    break;
                  case 40:
                    _context107.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context107.next = 44;
                    return $_istqbuster_c_22();
                  case 44:
                  case "end":
                    return _context107.stop();
                }
              }, _callee107);
            }));
            return _$_istqbuster_c_22.apply(this, arguments);
          };
          $_istqbuster_c_22 = function _$_istqbuster_c_83() {
            return _$_istqbuster_c_22.apply(this, arguments);
          };
          _$_istqbuster_c_21 = function _$_istqbuster_c_82() {
            _$_istqbuster_c_21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee106() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee106$(_context106) {
                while (1) switch (_context106.prev = _context106.next) {
                  case 0:
                    gaiman.echo("");
                    _context106.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #21]", 35);
                  case 3:
                    _context106.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a true statement about exploratory testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context106.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) More experienced testers who have tested similar applications and technologies are likely to do better than less experienced testers at exploratory testing", 35);
                  case 8:
                    _context106.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Exploratory testing does not identify any additional tests beyond those that would result from formal test techniques", 35);
                  case 10:
                    _context106.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The time required to complete an exploratory testing session cannot be predicted in advance", 35);
                  case 12:
                    _context106.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Exploratory testing can involve the use of black-box techniques but not white-box techniques", 35);
                  case 14:
                    gaiman.echo("");
                    _context106.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context106.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context106.next = 25;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context106.next = 23;
                    return $_istqbuster_c_22();
                  case 23:
                    _context106.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context106.next = 30;
                      break;
                    }
                    _context106.next = 28;
                    return $_istqbuster_c_22();
                  case 28:
                    _context106.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context106.next = 35;
                      break;
                    }
                    _context106.next = 33;
                    return $_istqbuster_c_22();
                  case 33:
                    _context106.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context106.next = 40;
                      break;
                    }
                    _context106.next = 38;
                    return $_istqbuster_c_22();
                  case 38:
                    _context106.next = 44;
                    break;
                  case 40:
                    _context106.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context106.next = 44;
                    return $_istqbuster_c_21();
                  case 44:
                  case "end":
                    return _context106.stop();
                }
              }, _callee106);
            }));
            return _$_istqbuster_c_21.apply(this, arguments);
          };
          $_istqbuster_c_21 = function _$_istqbuster_c_81() {
            return _$_istqbuster_c_21.apply(this, arguments);
          };
          _$_istqbuster_c_20 = function _$_istqbuster_c_80() {
            _$_istqbuster_c_20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee105() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee105$(_context105) {
                while (1) switch (_context105.prev = _context105.next) {
                  case 0:
                    gaiman.echo("");
                    _context105.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #20]", 35);
                  case 3:
                    _context105.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Prior to an iteration planning session, you are studying a user story and its acceptance criteria, deriving test conditions and associated test cases from the user story as a way of applying the principle of early QA and test. What test technique are you applying?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context105.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) White-box", 35);
                  case 8:
                    _context105.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Black-box", 35);
                  case 10:
                    _context105.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Experience-based", 35);
                  case 12:
                    _context105.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Error guessing", 35);
                  case 14:
                    gaiman.echo("");
                    _context105.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context105.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context105.next = 24;
                      break;
                    }
                    _context105.next = 22;
                    return $_istqbuster_c_21();
                  case 22:
                    _context105.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context105.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context105.next = 28;
                    return $_istqbuster_c_21();
                  case 28:
                    _context105.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context105.next = 35;
                      break;
                    }
                    _context105.next = 33;
                    return $_istqbuster_c_21();
                  case 33:
                    _context105.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context105.next = 40;
                      break;
                    }
                    _context105.next = 38;
                    return $_istqbuster_c_21();
                  case 38:
                    _context105.next = 44;
                    break;
                  case 40:
                    _context105.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context105.next = 44;
                    return $_istqbuster_c_20();
                  case 44:
                  case "end":
                    return _context105.stop();
                }
              }, _callee105);
            }));
            return _$_istqbuster_c_20.apply(this, arguments);
          };
          $_istqbuster_c_20 = function _$_istqbuster_c_79() {
            return _$_istqbuster_c_20.apply(this, arguments);
          };
          _$_istqbuster_c_19 = function _$_istqbuster_c_78() {
            _$_istqbuster_c_19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee104$(_context104) {
                while (1) switch (_context104.prev = _context104.next) {
                  case 0:
                    gaiman.echo("");
                    _context104.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #19]", 35);
                  case 3:
                    _context104.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]What is decision coverage?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context104.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The coverage of condition outcomes", 35);
                  case 8:
                    _context104.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Decision coverage is a synonym for statement coverage", 35);
                  case 10:
                    _context104.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The coverage of executable statements", 35);
                  case 12:
                    _context104.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The coverage of decision outcomes", 35);
                  case 14:
                    gaiman.echo("");
                    _context104.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context104.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context104.next = 24;
                      break;
                    }
                    _context104.next = 22;
                    return $_istqbuster_c_20();
                  case 22:
                    _context104.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context104.next = 29;
                      break;
                    }
                    _context104.next = 27;
                    return $_istqbuster_c_20();
                  case 27:
                    _context104.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context104.next = 34;
                      break;
                    }
                    _context104.next = 32;
                    return $_istqbuster_c_20();
                  case 32:
                    _context104.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context104.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context104.next = 38;
                    return $_istqbuster_c_19();
                  case 38:
                    _context104.next = 44;
                    break;
                  case 40:
                    _context104.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context104.next = 44;
                    return $_istqbuster_c_18();
                  case 44:
                  case "end":
                    return _context104.stop();
                }
              }, _callee104);
            }));
            return _$_istqbuster_c_19.apply(this, arguments);
          };
          $_istqbuster_c_19 = function _$_istqbuster_c_77() {
            return _$_istqbuster_c_19.apply(this, arguments);
          };
          _$_istqbuster_c_18 = function _$_istqbuster_c_76() {
            _$_istqbuster_c_18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee103() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee103$(_context103) {
                while (1) switch (_context103.prev = _context103.next) {
                  case 0:
                    gaiman.echo("");
                    _context103.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #18]", 35);
                  case 3:
                    _context103.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are working on a video game development project, using Agile methods. It is based on Greek mythology and history, and players can play key roles in scenarios such as the battles between the Greeks and Trojans.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context103.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following user story and its associated acceptance criteria:]", 35);
                  case 8:
                    gaiman.echo("");
                    _context103.next = 11;
                    return gaiman.echo_extra("[[;#F9E2AF;]As a player, I want to be able to acquire the Rod of Midas (a new magic object), so that I can turn objects and other players into gold]", 35);
                  case 11:
                    gaiman.echo("");
                    _context103.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]AC1]) The Rod must work on any object or player, no matter what size, which can be touched anywhere by the player holding the Rod", 35);
                  case 14:
                    _context103.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]AC2]) Holding the Rod does not change the player holding it into gold", 35);
                  case 16:
                    _context103.next = 18;
                    return gaiman.echo_extra("[[;#94E2D5;]AC3]) Any object or player touched by the Rod transforms completely into gold within one millisecond", 35);
                  case 18:
                    _context103.next = 20;
                    return gaiman.echo_extra("[[;#94E2D5;]AC4]) The Rod appears as shown in Prototype O.W.RoM", 35);
                  case 20:
                    _context103.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]AC5]) The transformation starts at the point of contact with the Rod and moves at a rate of one meter per millisecond", 35);
                  case 22:
                    gaiman.echo("");
                    _context103.next = 25;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are participating in a checklist-based review session of this user story.]", 35);
                  case 25:
                    gaiman.echo("");
                    _context103.next = 28;
                    return gaiman.echo_extra("[[;#F9E2AF;]This user story and its associated acceptance criteria contain which of the following typical defects identified by static testing in this type of work product?]", 35);
                  case 28:
                    gaiman.echo("");
                    _context103.next = 31;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Deviation from standards", 35);
                  case 31:
                    _context103.next = 33;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Contradiction", 35);
                  case 33:
                    _context103.next = 35;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Security vulnerability", 35);
                  case 35:
                    _context103.next = 37;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Coverage gaps", 35);
                  case 37:
                    gaiman.echo("");
                    _context103.next = 40;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 40:
                    $_answer = _context103.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context103.next = 47;
                      break;
                    }
                    _context103.next = 45;
                    return $_istqbuster_c_19();
                  case 45:
                    _context103.next = 67;
                    break;
                  case 47:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context103.next = 53;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context103.next = 51;
                    return $_istqbuster_c_19();
                  case 51:
                    _context103.next = 67;
                    break;
                  case 53:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context103.next = 58;
                      break;
                    }
                    _context103.next = 56;
                    return $_istqbuster_c_19();
                  case 56:
                    _context103.next = 67;
                    break;
                  case 58:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context103.next = 63;
                      break;
                    }
                    _context103.next = 61;
                    return $_istqbuster_c_19();
                  case 61:
                    _context103.next = 67;
                    break;
                  case 63:
                    _context103.next = 65;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 65:
                    _context103.next = 67;
                    return $_istqbuster_c_18();
                  case 67:
                  case "end":
                    return _context103.stop();
                }
              }, _callee103);
            }));
            return _$_istqbuster_c_18.apply(this, arguments);
          };
          $_istqbuster_c_18 = function _$_istqbuster_c_75() {
            return _$_istqbuster_c_18.apply(this, arguments);
          };
          _$_istqbuster_c_17 = function _$_istqbuster_c_74() {
            _$_istqbuster_c_17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee102() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee102$(_context102) {
                while (1) switch (_context102.prev = _context102.next) {
                  case 0:
                    gaiman.echo("");
                    _context102.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #17]", 35);
                  case 3:
                    _context102.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are working as a tester on an Agile team and have participated in over two dozen user story refinement sessions with the product owner and the developers on the team at the start of each iteration. As the reviews have gotten more effective at detecting defects in user stories and the product owner more proficient at correcting those defects, you and the team notice that the team\u2019s velocity, as shown in your burndown charts, has started to increase. Which of the following is a benefit of static testing that is MOST DIRECTLY related to the team\u2019s increased velocity?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context102.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Increasing total cost of quality", 35);
                  case 8:
                    _context102.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Reducing testing cost", 35);
                  case 10:
                    _context102.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Increasing development productivity", 35);
                  case 12:
                    _context102.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Reducing total cost of quality", 35);
                  case 14:
                    gaiman.echo("");
                    _context102.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context102.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context102.next = 24;
                      break;
                    }
                    _context102.next = 22;
                    return $_istqbuster_c_18();
                  case 22:
                    _context102.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context102.next = 29;
                      break;
                    }
                    _context102.next = 27;
                    return $_istqbuster_c_18();
                  case 27:
                    _context102.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context102.next = 35;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context102.next = 33;
                    return $_istqbuster_c_18();
                  case 33:
                    _context102.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context102.next = 40;
                      break;
                    }
                    _context102.next = 38;
                    return $_istqbuster_c_18();
                  case 38:
                    _context102.next = 44;
                    break;
                  case 40:
                    _context102.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context102.next = 44;
                    return $_istqbuster_c_17();
                  case 44:
                  case "end":
                    return _context102.stop();
                }
              }, _callee102);
            }));
            return _$_istqbuster_c_17.apply(this, arguments);
          };
          $_istqbuster_c_17 = function _$_istqbuster_c_73() {
            return _$_istqbuster_c_17.apply(this, arguments);
          };
          _$_istqbuster_c_16 = function _$_istqbuster_c_72() {
            _$_istqbuster_c_16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee101() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee101$(_context101) {
                while (1) switch (_context101.prev = _context101.next) {
                  case 0:
                    gaiman.echo("");
                    _context101.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #16]", 35);
                  case 3:
                    _context101.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]During a period of intensive project overtime, a system architecture document is sent to various project participants, announcing a previously unplanned technical review to occur in one week. No adjustments are made to the participants\u2019 list of assigned tasks. Based on this information alone, which of the following is a factor for review success that is MISSING?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context101.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Appropriate review type", 35);
                  case 8:
                    _context101.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Adequate time to prepare", 35);
                  case 10:
                    _context101.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Sufficient metrics to evaluate the author", 35);
                  case 12:
                    _context101.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Well-managed review meeting", 35);
                  case 14:
                    gaiman.echo("");
                    _context101.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context101.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context101.next = 24;
                      break;
                    }
                    _context101.next = 22;
                    return $_istqbuster_c_17();
                  case 22:
                    _context101.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context101.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context101.next = 28;
                    return $_istqbuster_c_17();
                  case 28:
                    _context101.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context101.next = 35;
                      break;
                    }
                    _context101.next = 33;
                    return $_istqbuster_c_17();
                  case 33:
                    _context101.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context101.next = 40;
                      break;
                    }
                    _context101.next = 38;
                    return $_istqbuster_c_17();
                  case 38:
                    _context101.next = 44;
                    break;
                  case 40:
                    _context101.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context101.next = 44;
                    return $_istqbuster_c_16();
                  case 44:
                  case "end":
                    return _context101.stop();
                }
              }, _callee101);
            }));
            return _$_istqbuster_c_16.apply(this, arguments);
          };
          $_istqbuster_c_16 = function _$_istqbuster_c_71() {
            return _$_istqbuster_c_16.apply(this, arguments);
          };
          _$_istqbuster_c_15 = function _$_istqbuster_c_70() {
            _$_istqbuster_c_15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee100() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee100$(_context100) {
                while (1) switch (_context100.prev = _context100.next) {
                  case 0:
                    gaiman.echo("");
                    _context100.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #15]", 35);
                  case 3:
                    _context100.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are reading a user story in the product backlog to prepare for a meeting with the product owner and a developer, noting potential defects as you go. Which of the following statements is true about this activity?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context100.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) It is not a static test, because static testing involves execution of the test object", 35);
                  case 8:
                    _context100.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) It is not a static test, because static testing is always performed using a tool", 35);
                  case 10:
                    _context100.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) It is a static test, because any defects you find could be found cheaper during dynamic testing", 35);
                  case 12:
                    _context100.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) It is a static test because static testing does not involve execution of the test object", 35);
                  case 14:
                    gaiman.echo("");
                    _context100.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context100.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context100.next = 24;
                      break;
                    }
                    _context100.next = 22;
                    return $_istqbuster_c_16();
                  case 22:
                    _context100.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context100.next = 29;
                      break;
                    }
                    _context100.next = 27;
                    return $_istqbuster_c_16();
                  case 27:
                    _context100.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context100.next = 34;
                      break;
                    }
                    _context100.next = 32;
                    return $_istqbuster_c_16();
                  case 32:
                    _context100.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context100.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context100.next = 38;
                    return $_istqbuster_c_16();
                  case 38:
                    _context100.next = 44;
                    break;
                  case 40:
                    _context100.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context100.next = 44;
                    return $_istqbuster_c_15();
                  case 44:
                  case "end":
                    return _context100.stop();
                }
              }, _callee100);
            }));
            return _$_istqbuster_c_15.apply(this, arguments);
          };
          $_istqbuster_c_15 = function _$_istqbuster_c_69() {
            return _$_istqbuster_c_15.apply(this, arguments);
          };
          _$_istqbuster_c_14 = function _$_istqbuster_c_68() {
            _$_istqbuster_c_14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee99() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee99$(_context99) {
                while (1) switch (_context99.prev = _context99.next) {
                  case 0:
                    gaiman.echo("");
                    _context99.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #14]", 35);
                  case 3:
                    _context99.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]In a formal review, what is the role name for the participant who runs an inspection meeting?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context99.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Facilitator", 35);
                  case 8:
                    _context99.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Programmer", 35);
                  case 10:
                    _context99.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Author", 35);
                  case 12:
                    _context99.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Project manager", 35);
                  case 14:
                    gaiman.echo("");
                    _context99.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context99.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context99.next = 25;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context99.next = 23;
                    return $_istqbuster_c_15();
                  case 23:
                    _context99.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context99.next = 30;
                      break;
                    }
                    _context99.next = 28;
                    return $_istqbuster_c_15();
                  case 28:
                    _context99.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context99.next = 35;
                      break;
                    }
                    _context99.next = 33;
                    return $_istqbuster_c_15();
                  case 33:
                    _context99.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context99.next = 40;
                      break;
                    }
                    _context99.next = 38;
                    return $_istqbuster_c_15();
                  case 38:
                    _context99.next = 44;
                    break;
                  case 40:
                    _context99.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context99.next = 44;
                    return $_istqbuster_c_14();
                  case 44:
                  case "end":
                    return _context99.stop();
                }
              }, _callee99);
            }));
            return _$_istqbuster_c_14.apply(this, arguments);
          };
          $_istqbuster_c_14 = function _$_istqbuster_c_67() {
            return _$_istqbuster_c_14.apply(this, arguments);
          };
          _$_istqbuster_c_13 = function _$_istqbuster_c_66() {
            _$_istqbuster_c_13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee98() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee98$(_context98) {
                while (1) switch (_context98.prev = _context98.next) {
                  case 0:
                    gaiman.echo("");
                    _context98.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #13]", 35);
                  case 3:
                    _context98.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]During an Agile development effort, a product owner discovers a previously unknown regulatory requirement that applies to most of the user stories within a particular epic. The user stories are updated to provide for the necessary changes in software behavior. The programmers on the team are modifying the code appropriately. As a tester on the team, what types of tests will you run?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context98.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Confirmation tests", 35);
                  case 8:
                    _context98.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Regression tests", 35);
                  case 10:
                    _context98.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Functional tests", 35);
                  case 12:
                    _context98.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Change-related tests", 35);
                  case 14:
                    gaiman.echo("");
                    _context98.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context98.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context98.next = 24;
                      break;
                    }
                    _context98.next = 22;
                    return $_istqbuster_c_14();
                  case 22:
                    _context98.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context98.next = 29;
                      break;
                    }
                    _context98.next = 27;
                    return $_istqbuster_c_14();
                  case 27:
                    _context98.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context98.next = 34;
                      break;
                    }
                    _context98.next = 32;
                    return $_istqbuster_c_14();
                  case 32:
                    _context98.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context98.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context98.next = 38;
                    return $_istqbuster_c_14();
                  case 38:
                    _context98.next = 44;
                    break;
                  case 40:
                    _context98.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context98.next = 44;
                    return $_istqbuster_c_13();
                  case 44:
                  case "end":
                    return _context98.stop();
                }
              }, _callee98);
            }));
            return _$_istqbuster_c_13.apply(this, arguments);
          };
          $_istqbuster_c_13 = function _$_istqbuster_c_65() {
            return _$_istqbuster_c_13.apply(this, arguments);
          };
          _$_istqbuster_c_12 = function _$_istqbuster_c_64() {
            _$_istqbuster_c_12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee97$(_context97) {
                while (1) switch (_context97.prev = _context97.next) {
                  case 0:
                    gaiman.echo("");
                    _context97.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #12]", 35);
                  case 3:
                    _context97.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A mass market operating system software product is designed to run on any PC hardware with an x86-family processor. You are running a set of tests to look for defects related to support of the various PCs that use such a processor and to build confidence that important PC brands will work. What type of test are you performing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context97.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Performance test", 35);
                  case 8:
                    _context97.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Processor test", 35);
                  case 10:
                    _context97.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Functional test", 35);
                  case 12:
                    _context97.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Portability test", 35);
                  case 14:
                    gaiman.echo("");
                    _context97.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context97.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context97.next = 24;
                      break;
                    }
                    _context97.next = 22;
                    return $_istqbuster_c_13();
                  case 22:
                    _context97.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context97.next = 29;
                      break;
                    }
                    _context97.next = 27;
                    return $_istqbuster_c_13();
                  case 27:
                    _context97.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context97.next = 34;
                      break;
                    }
                    _context97.next = 32;
                    return $_istqbuster_c_13();
                  case 32:
                    _context97.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context97.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context97.next = 38;
                    return $_istqbuster_c_13();
                  case 38:
                    _context97.next = 44;
                    break;
                  case 40:
                    _context97.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context97.next = 44;
                    return $_istqbuster_c_12();
                  case 44:
                  case "end":
                    return _context97.stop();
                }
              }, _callee97);
            }));
            return _$_istqbuster_c_12.apply(this, arguments);
          };
          $_istqbuster_c_12 = function _$_istqbuster_c_63() {
            return _$_istqbuster_c_12.apply(this, arguments);
          };
          _$_istqbuster_c_11 = function _$_istqbuster_c_62() {
            _$_istqbuster_c_11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee96() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee96$(_context96) {
                while (1) switch (_context96.prev = _context96.next) {
                  case 0:
                    gaiman.echo("");
                    _context96.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #11]", 35);
                  case 3:
                    _context96.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following types of defects that a test level might focus on:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context96.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]a]) Defects in separately testable modules or objects", 35);
                  case 8:
                    _context96.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Not focused on identifying defects", 35);
                  case 10:
                    _context96.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]c]) Defects in interfaces and interactions", 35);
                  case 12:
                    _context96.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]d]) Defects in the whole test object", 35);
                  case 14:
                    gaiman.echo("");
                    _context96.next = 17;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following list correctly matches test levels from the Foundation syllabus with the defect focus options given above?]", 35);
                  case 17:
                    gaiman.echo("");
                    _context96.next = 20;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 1 = performance test; 2 = component test; 3 = system test; 4 = acceptance test", 35);
                  case 20:
                    _context96.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 1 = component test; 2 = acceptance test; 3 = system test; 4 = integration test", 35);
                  case 22:
                    _context96.next = 24;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 1 = component test; 2 = acceptance test; 3 = integration test; 4 = system test", 35);
                  case 24:
                    _context96.next = 26;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 1 = integration test; 2 = system test; 3 = component test; 4 = acceptance test", 35);
                  case 26:
                    gaiman.echo("");
                    _context96.next = 29;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 29:
                    $_answer = _context96.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context96.next = 36;
                      break;
                    }
                    _context96.next = 34;
                    return $_istqbuster_c_12();
                  case 34:
                    _context96.next = 56;
                    break;
                  case 36:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context96.next = 41;
                      break;
                    }
                    _context96.next = 39;
                    return $_istqbuster_c_12();
                  case 39:
                    _context96.next = 56;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context96.next = 47;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context96.next = 45;
                    return $_istqbuster_c_12();
                  case 45:
                    _context96.next = 56;
                    break;
                  case 47:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context96.next = 52;
                      break;
                    }
                    _context96.next = 50;
                    return $_istqbuster_c_12();
                  case 50:
                    _context96.next = 56;
                    break;
                  case 52:
                    _context96.next = 54;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 54:
                    _context96.next = 56;
                    return $_istqbuster_c_11();
                  case 56:
                  case "end":
                    return _context96.stop();
                }
              }, _callee96);
            }));
            return _$_istqbuster_c_11.apply(this, arguments);
          };
          $_istqbuster_c_11 = function _$_istqbuster_c_61() {
            return _$_istqbuster_c_11.apply(this, arguments);
          };
          _$_istqbuster_c_10 = function _$_istqbuster_c_60() {
            _$_istqbuster_c_10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee95$(_context95) {
                while (1) switch (_context95.prev = _context95.next) {
                  case 0:
                    gaiman.echo("");
                    _context95.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #10]", 35);
                  case 3:
                    _context95.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements is true?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context95.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Impact analysis is useful for confirmation testing during maintenance testing", 35);
                  case 8:
                    _context95.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Confirmation testing is useful for regression testing during system design", 35);
                  case 10:
                    _context95.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Impact analysis is useful for regression testing during maintenance testing", 35);
                  case 12:
                    _context95.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Confirmation testing is useful for impact analysis during maintenance testing", 35);
                  case 14:
                    gaiman.echo("");
                    _context95.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context95.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context95.next = 24;
                      break;
                    }
                    _context95.next = 22;
                    return $_istqbuster_c_11();
                  case 22:
                    _context95.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context95.next = 29;
                      break;
                    }
                    _context95.next = 27;
                    return $_istqbuster_c_11();
                  case 27:
                    _context95.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context95.next = 35;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context95.next = 33;
                    return $_istqbuster_c_11();
                  case 33:
                    _context95.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context95.next = 40;
                      break;
                    }
                    _context95.next = 38;
                    return $_istqbuster_c_11();
                  case 38:
                    _context95.next = 44;
                    break;
                  case 40:
                    _context95.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context95.next = 44;
                    return $_istqbuster_c_10();
                  case 44:
                  case "end":
                    return _context95.stop();
                }
              }, _callee95);
            }));
            return _$_istqbuster_c_10.apply(this, arguments);
          };
          $_istqbuster_c_10 = function _$_istqbuster_c_59() {
            return _$_istqbuster_c_10.apply(this, arguments);
          };
          _$_istqbuster_c_9 = function _$_istqbuster_c_58() {
            _$_istqbuster_c_9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee94() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee94$(_context94) {
                while (1) switch (_context94.prev = _context94.next) {
                  case 0:
                    gaiman.echo("");
                    _context94.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #9]", 35);
                  case 3:
                    _context94.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are running a performance test with the objective of finding possible network bottlenecks in interfaces between components of a system. Which of the following statements describes this test?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context94.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A functional test during the integration test level", 35);
                  case 8:
                    _context94.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A non-functional test during the integration test level", 35);
                  case 10:
                    _context94.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) A functional test during the component test level", 35);
                  case 12:
                    _context94.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) A non-functional test during the component test level", 35);
                  case 14:
                    gaiman.echo("");
                    _context94.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context94.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context94.next = 24;
                      break;
                    }
                    _context94.next = 22;
                    return $_istqbuster_c_10();
                  case 22:
                    _context94.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context94.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context94.next = 28;
                    return $_istqbuster_c_10();
                  case 28:
                    _context94.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context94.next = 35;
                      break;
                    }
                    _context94.next = 33;
                    return $_istqbuster_c_10();
                  case 33:
                    _context94.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context94.next = 40;
                      break;
                    }
                    _context94.next = 38;
                    return $_istqbuster_c_10();
                  case 38:
                    _context94.next = 44;
                    break;
                  case 40:
                    _context94.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context94.next = 44;
                    return $_istqbuster_c_9();
                  case 44:
                  case "end":
                    return _context94.stop();
                }
              }, _callee94);
            }));
            return _$_istqbuster_c_9.apply(this, arguments);
          };
          $_istqbuster_c_9 = function _$_istqbuster_c_57() {
            return _$_istqbuster_c_9.apply(this, arguments);
          };
          _$_istqbuster_c_8 = function _$_istqbuster_c_56() {
            _$_istqbuster_c_8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee93() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee93$(_context93) {
                while (1) switch (_context93.prev = _context93.next) {
                  case 0:
                    gaiman.echo("");
                    _context93.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #8]", 35);
                  case 3:
                    _context93.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is an example of a task that can be carried out as part of the test process?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context93.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Analyzing a defect", 35);
                  case 8:
                    _context93.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Designing test data", 35);
                  case 10:
                    _context93.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Assigning a version to a test item", 35);
                  case 12:
                    _context93.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Writing a user story", 35);
                  case 14:
                    gaiman.echo("");
                    _context93.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context93.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context93.next = 24;
                      break;
                    }
                    _context93.next = 22;
                    return $_istqbuster_c_9();
                  case 22:
                    _context93.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context93.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context93.next = 28;
                    return $_istqbuster_c_9();
                  case 28:
                    _context93.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context93.next = 35;
                      break;
                    }
                    _context93.next = 33;
                    return $_istqbuster_c_9();
                  case 33:
                    _context93.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context93.next = 40;
                      break;
                    }
                    _context93.next = 38;
                    return $_istqbuster_c_9();
                  case 38:
                    _context93.next = 44;
                    break;
                  case 40:
                    _context93.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context93.next = 44;
                    return $_istqbuster_c_8();
                  case 44:
                  case "end":
                    return _context93.stop();
                }
              }, _callee93);
            }));
            return _$_istqbuster_c_8.apply(this, arguments);
          };
          $_istqbuster_c_8 = function _$_istqbuster_c_55() {
            return _$_istqbuster_c_8.apply(this, arguments);
          };
          _$_istqbuster_c_7 = function _$_istqbuster_c_54() {
            _$_istqbuster_c_7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee92() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee92$(_context92) {
                while (1) switch (_context92.prev = _context92.next) {
                  case 0:
                    gaiman.echo("");
                    _context92.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #7]", 35);
                  case 3:
                    _context92.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A tester participated in a discussion about proposed database structure. The tester identified a potential performance problem related to certain common user searches. This possible problem was explained to the development team. Which of the following is a testing contribution to success that BEST matches this situation?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context92.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Enabling required tests to be identified at an early stage", 35);
                  case 8:
                    _context92.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Ensuring processes are carried out properly", 35);
                  case 10:
                    _context92.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Reducing the risk of fundamental design defects", 35);
                  case 12:
                    _context92.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Reducing the risk of untestable functionality", 35);
                  case 14:
                    gaiman.echo("");
                    _context92.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context92.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context92.next = 24;
                      break;
                    }
                    _context92.next = 22;
                    return $_istqbuster_c_8();
                  case 22:
                    _context92.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context92.next = 29;
                      break;
                    }
                    _context92.next = 27;
                    return $_istqbuster_c_8();
                  case 27:
                    _context92.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context92.next = 35;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context92.next = 33;
                    return $_istqbuster_c_8();
                  case 33:
                    _context92.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context92.next = 40;
                      break;
                    }
                    _context92.next = 38;
                    return $_istqbuster_c_8();
                  case 38:
                    _context92.next = 44;
                    break;
                  case 40:
                    _context92.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context92.next = 44;
                    return $_istqbuster_c_7();
                  case 44:
                  case "end":
                    return _context92.stop();
                }
              }, _callee92);
            }));
            return _$_istqbuster_c_7.apply(this, arguments);
          };
          $_istqbuster_c_7 = function _$_istqbuster_c_53() {
            return _$_istqbuster_c_7.apply(this, arguments);
          };
          _$_istqbuster_c_6 = function _$_istqbuster_c_52() {
            _$_istqbuster_c_6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee91() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee91$(_context91) {
                while (1) switch (_context91.prev = _context91.next) {
                  case 0:
                    gaiman.echo("");
                    _context91.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #6]", 35);
                  case 3:
                    _context91.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following testing activities:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context91.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Selecting regression tests", 35);
                  case 8:
                    _context91.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) Evaluating completeness of test execution", 35);
                  case 10:
                    _context91.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Identifying which user stories have open defect reports", 35);
                  case 12:
                    _context91.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Evaluating whether the number of tests for each requirement is consistent with the level of product risk", 35);
                  case 14:
                    gaiman.echo("");
                    _context91.next = 17;
                    return gaiman.echo_extra("[[;#F9E2AF;]Consider the following ways traceability can help testing:]", 35);
                  case 17:
                    gaiman.echo("");
                    _context91.next = 20;
                    return gaiman.echo_extra("[[;#94E2D5;]A]) Degree of impact (severity) of the defect", 35);
                  case 20:
                    _context91.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]B]) Identification of the test object", 35);
                  case 22:
                    _context91.next = 24;
                    return gaiman.echo_extra("[[;#94E2D5;]C]) Details of the test environment", 35);
                  case 24:
                    _context91.next = 26;
                    return gaiman.echo_extra("[[;#94E2D5;]D]) Urgency/priority to fix", 35);
                  case 26:
                    gaiman.echo("");
                    _context91.next = 29;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following best matches the testing activity with how traceability can assist that activity?]", 35);
                  case 29:
                    gaiman.echo("");
                    _context91.next = 32;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 1D, 2B, 3C, 4A", 35);
                  case 32:
                    _context91.next = 34;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 1B, 2D, 3A, 4C", 35);
                  case 34:
                    _context91.next = 36;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 1D, 2C, 3A, 4B", 35);
                  case 36:
                    _context91.next = 38;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 1D, 2B, 3A, 4C", 35);
                  case 38:
                    gaiman.echo("");
                    _context91.next = 41;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 41:
                    $_answer = _context91.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context91.next = 48;
                      break;
                    }
                    _context91.next = 46;
                    return $_istqbuster_c_7();
                  case 46:
                    _context91.next = 68;
                    break;
                  case 48:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context91.next = 53;
                      break;
                    }
                    _context91.next = 51;
                    return $_istqbuster_c_7();
                  case 51:
                    _context91.next = 68;
                    break;
                  case 53:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context91.next = 58;
                      break;
                    }
                    _context91.next = 56;
                    return $_istqbuster_c_7();
                  case 56:
                    _context91.next = 68;
                    break;
                  case 58:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context91.next = 64;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context91.next = 62;
                    return $_istqbuster_c_7();
                  case 62:
                    _context91.next = 68;
                    break;
                  case 64:
                    _context91.next = 66;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 66:
                    _context91.next = 68;
                    return $_istqbuster_c_6();
                  case 68:
                  case "end":
                    return _context91.stop();
                }
              }, _callee91);
            }));
            return _$_istqbuster_c_6.apply(this, arguments);
          };
          $_istqbuster_c_6 = function _$_istqbuster_c_51() {
            return _$_istqbuster_c_6.apply(this, arguments);
          };
          _$_istqbuster_c_5 = function _$_istqbuster_c_50() {
            _$_istqbuster_c_5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee90() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee90$(_context90) {
                while (1) switch (_context90.prev = _context90.next) {
                  case 0:
                    gaiman.echo("");
                    _context90.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #5]", 35);
                  case 3:
                    _context90.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Programmers often write and execute unit tests against code which they have written. During this self-testing activity, which of the following is a tester mindset that programmers should adopt to perform this unit testing effectively?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context90.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Good communication skills", 35);
                  case 8:
                    _context90.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Code coverage", 35);
                  case 10:
                    _context90.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Evaluating code defects", 35);
                  case 12:
                    _context90.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Attention to detail", 35);
                  case 14:
                    gaiman.echo("");
                    _context90.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context90.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context90.next = 24;
                      break;
                    }
                    _context90.next = 22;
                    return $_istqbuster_c_6();
                  case 22:
                    _context90.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context90.next = 29;
                      break;
                    }
                    _context90.next = 27;
                    return $_istqbuster_c_6();
                  case 27:
                    _context90.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context90.next = 34;
                      break;
                    }
                    _context90.next = 32;
                    return $_istqbuster_c_6();
                  case 32:
                    _context90.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context90.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context90.next = 38;
                    return $_istqbuster_c_6();
                  case 38:
                    _context90.next = 44;
                    break;
                  case 40:
                    _context90.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context90.next = 44;
                    return $_istqbuster_c_5();
                  case 44:
                  case "end":
                    return _context90.stop();
                }
              }, _callee90);
            }));
            return _$_istqbuster_c_5.apply(this, arguments);
          };
          $_istqbuster_c_5 = function _$_istqbuster_c_49() {
            return _$_istqbuster_c_5.apply(this, arguments);
          };
          _$_istqbuster_c_4 = function _$_istqbuster_c_48() {
            _$_istqbuster_c_4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee89() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee89$(_context89) {
                while (1) switch (_context89.prev = _context89.next) {
                  case 0:
                    gaiman.echo("");
                    _context89.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #4]", 35);
                  case 3:
                    _context89.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A product owner says that your role as a tester on an Agile team is to catch all the bugs before the end of each iteration. Which of the following is a testing principle that could be used to respond to this (false) statement?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context89.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Defect clustering", 35);
                  case 8:
                    _context89.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Testing shows the presence of defects", 35);
                  case 10:
                    _context89.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Absence of error fallacy", 35);
                  case 12:
                    _context89.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Root cause analysis", 35);
                  case 14:
                    gaiman.echo("");
                    _context89.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context89.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context89.next = 24;
                      break;
                    }
                    _context89.next = 22;
                    return $_istqbuster_c_5();
                  case 22:
                    _context89.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context89.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context89.next = 28;
                    return $_istqbuster_c_5();
                  case 28:
                    _context89.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context89.next = 35;
                      break;
                    }
                    _context89.next = 33;
                    return $_istqbuster_c_5();
                  case 33:
                    _context89.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context89.next = 40;
                      break;
                    }
                    _context89.next = 38;
                    return $_istqbuster_c_5();
                  case 38:
                    _context89.next = 44;
                    break;
                  case 40:
                    _context89.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context89.next = 44;
                    return $_istqbuster_c_4();
                  case 44:
                  case "end":
                    return _context89.stop();
                }
              }, _callee89);
            }));
            return _$_istqbuster_c_4.apply(this, arguments);
          };
          $_istqbuster_c_4 = function _$_istqbuster_c_47() {
            return _$_istqbuster_c_4.apply(this, arguments);
          };
          _$_istqbuster_c_3 = function _$_istqbuster_c_46() {
            _$_istqbuster_c_3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee88() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee88$(_context88) {
                while (1) switch (_context88.prev = _context88.next) {
                  case 0:
                    gaiman.echo("");
                    _context88.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #3]", 35);
                  case 3:
                    _context88.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A phone ringing momentarily distracts a programmer, causing the programmer to improperly program the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values. The improperly coded logic for the upper boundary check is:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context88.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The root-cause", 35);
                  case 8:
                    _context88.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The failure", 35);
                  case 10:
                    _context88.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The error", 35);
                  case 12:
                    _context88.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The defect", 35);
                  case 14:
                    gaiman.echo("");
                    _context88.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context88.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context88.next = 24;
                      break;
                    }
                    _context88.next = 22;
                    return $_istqbuster_c_4();
                  case 22:
                    _context88.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context88.next = 29;
                      break;
                    }
                    _context88.next = 27;
                    return $_istqbuster_c_4();
                  case 27:
                    _context88.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context88.next = 34;
                      break;
                    }
                    _context88.next = 32;
                    return $_istqbuster_c_4();
                  case 32:
                    _context88.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context88.next = 40;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context88.next = 38;
                    return $_istqbuster_c_4();
                  case 38:
                    _context88.next = 44;
                    break;
                  case 40:
                    _context88.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context88.next = 44;
                    return $_istqbuster_c_3();
                  case 44:
                  case "end":
                    return _context88.stop();
                }
              }, _callee88);
            }));
            return _$_istqbuster_c_3.apply(this, arguments);
          };
          $_istqbuster_c_3 = function _$_istqbuster_c_45() {
            return _$_istqbuster_c_3.apply(this, arguments);
          };
          _$_istqbuster_c_2 = function _$_istqbuster_c_44() {
            _$_istqbuster_c_2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee87() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee87$(_context87) {
                while (1) switch (_context87.prev = _context87.next) {
                  case 0:
                    gaiman.echo("");
                    _context87.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #2]", 35);
                  case 3:
                    _context87.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a typical test objective?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context87.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Preventing defects", 35);
                  case 8:
                    _context87.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Repairing defects", 35);
                  case 10:
                    _context87.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Comparing actual results to expected results", 35);
                  case 12:
                    _context87.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Analyzing the cause of failure", 35);
                  case 14:
                    gaiman.echo("");
                    _context87.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context87.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context87.next = 25;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context87.next = 23;
                    return $_istqbuster_c_3();
                  case 23:
                    _context87.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context87.next = 30;
                      break;
                    }
                    _context87.next = 28;
                    return $_istqbuster_c_3();
                  case 28:
                    _context87.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context87.next = 35;
                      break;
                    }
                    _context87.next = 33;
                    return $_istqbuster_c_3();
                  case 33:
                    _context87.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context87.next = 40;
                      break;
                    }
                    _context87.next = 38;
                    return $_istqbuster_c_3();
                  case 38:
                    _context87.next = 44;
                    break;
                  case 40:
                    _context87.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context87.next = 44;
                    return $_istqbuster_c_2();
                  case 44:
                  case "end":
                    return _context87.stop();
                }
              }, _callee87);
            }));
            return _$_istqbuster_c_2.apply(this, arguments);
          };
          $_istqbuster_c_2 = function _$_istqbuster_c_43() {
            return _$_istqbuster_c_2.apply(this, arguments);
          };
          _$_istqbuster_c_ = function _$_istqbuster_c_42() {
            _$_istqbuster_c_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee86$(_context86) {
                while (1) switch (_context86.prev = _context86.next) {
                  case 0:
                    gaiman.echo("");
                    _context86.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #1]", 35);
                  case 3:
                    _context86.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]What is quality?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context86.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Activities focused on providing confidence that quality requirements will be fulfilled", 35);
                  case 8:
                    _context86.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The degree to which a component or system satisfies the stated and implied needs of its various stakeholders", 35);
                  case 10:
                    _context86.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The degree to which a component or system protects information and data so that persons or other components or systems have the degree of access appropriate to their types and levels of authorization", 35);
                  case 12:
                    _context86.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The total costs incurred on quality activities and issues and often split into prevention costs, appraisal costs, internal failure costs and external failure costs", 35);
                  case 14:
                    gaiman.echo("");
                    _context86.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context86.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context86.next = 24;
                      break;
                    }
                    _context86.next = 22;
                    return $_istqbuster_c_2();
                  case 22:
                    _context86.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context86.next = 30;
                      break;
                    }
                    $_istqbuster_c_score += 1;
                    _context86.next = 28;
                    return $_istqbuster_c_2();
                  case 28:
                    _context86.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context86.next = 35;
                      break;
                    }
                    _context86.next = 33;
                    return $_istqbuster_c_2();
                  case 33:
                    _context86.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context86.next = 40;
                      break;
                    }
                    _context86.next = 38;
                    return $_istqbuster_c_2();
                  case 38:
                    _context86.next = 44;
                    break;
                  case 40:
                    _context86.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context86.next = 44;
                    return $_istqbuster_c_1();
                  case 44:
                  case "end":
                    return _context86.stop();
                }
              }, _callee86);
            }));
            return _$_istqbuster_c_.apply(this, arguments);
          };
          $_istqbuster_c_1 = function _$_istqbuster_c_41() {
            return _$_istqbuster_c_.apply(this, arguments);
          };
          _$_istqbuster_b_40 = function _$_istqbuster_b_120() {
            _$_istqbuster_b_40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee85$(_context85) {
                while (1) switch (_context85.prev = _context85.next) {
                  case 0:
                    gaiman.echo("");
                    _context85.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #40]", 35);
                  case 3:
                    _context85.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is MOST likely to be used as a reason for using a pilot project to introduce a tool into an organization?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context85.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The need to evaluate how the tool fits with existing processes and practices and determining what would need to change", 35);
                  case 8:
                    _context85.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The need to evaluate the test automation skills and training, mentoring and coaching needs of the testers who will use the tool", 35);
                  case 10:
                    _context85.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The need to evaluate whether the tool provides the required functionality and does not duplicate existing test tools", 35);
                  case 12:
                    _context85.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The need to evaluate the tool vendor in terms of the training and other support they provide", 35);
                  case 14:
                    gaiman.echo("");
                    _context85.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context85.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context85.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context85.next = 23;
                    return $_istqbuster_result_b();
                  case 23:
                    _context85.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context85.next = 30;
                      break;
                    }
                    _context85.next = 28;
                    return $_istqbuster_result_b();
                  case 28:
                    _context85.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context85.next = 35;
                      break;
                    }
                    _context85.next = 33;
                    return $_istqbuster_result_b();
                  case 33:
                    _context85.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context85.next = 40;
                      break;
                    }
                    _context85.next = 38;
                    return $_istqbuster_result_b();
                  case 38:
                    _context85.next = 44;
                    break;
                  case 40:
                    _context85.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context85.next = 44;
                    return $_istqbuster_b_40();
                  case 44:
                  case "end":
                    return _context85.stop();
                }
              }, _callee85);
            }));
            return _$_istqbuster_b_40.apply(this, arguments);
          };
          $_istqbuster_b_40 = function _$_istqbuster_b_119() {
            return _$_istqbuster_b_40.apply(this, arguments);
          };
          _$_istqbuster_b_39 = function _$_istqbuster_b_118() {
            _$_istqbuster_b_39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                while (1) switch (_context84.prev = _context84.next) {
                  case 0:
                    gaiman.echo("");
                    _context84.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #39]", 35);
                  case 3:
                    _context84.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following test activities and test tools:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context84.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Performance measurement and dynamic analysis", 35);
                  case 8:
                    _context84.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) Test execution and logging", 35);
                  case 10:
                    _context84.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Management of testing and testware", 35);
                  case 12:
                    _context84.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Test design", 35);
                  case 14:
                    gaiman.echo("");
                    _context84.next = 17;
                    return gaiman.echo_extra("[[;#94E2D5;]A]) Code coverage tools", 35);
                  case 17:
                    _context84.next = 19;
                    return gaiman.echo_extra("[[;#94E2D5;]B]) Dynamic analysis tools", 35);
                  case 19:
                    _context84.next = 21;
                    return gaiman.echo_extra("[[;#94E2D5;]C]) Test data preparation tools", 35);
                  case 21:
                    _context84.next = 23;
                    return gaiman.echo_extra("[[;#94E2D5;]D]) Defect management tools", 35);
                  case 23:
                    gaiman.echo("");
                    _context84.next = 26;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST matches the activities and tools?]", 35);
                  case 26:
                    gaiman.echo("");
                    _context84.next = 29;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 1 \u2013 B, 2 \u2013 C, 3 \u2013 D, 4 \u2013 A", 35);
                  case 29:
                    _context84.next = 31;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 1 \u2013 B, 2 \u2013 A, 3 \u2013 C, 4 \u2013 D", 35);
                  case 31:
                    _context84.next = 33;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 1 \u2013 B, 2 \u2013 A, 3 \u2013 D, 4 \u2013 C", 35);
                  case 33:
                    _context84.next = 35;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 1 \u2013 A, 2 \u2013 B, 3 \u2013 D, 4 \u2013 C", 35);
                  case 35:
                    gaiman.echo("");
                    _context84.next = 38;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 38:
                    $_answer = _context84.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context84.next = 45;
                      break;
                    }
                    _context84.next = 43;
                    return $_istqbuster_b_40();
                  case 43:
                    _context84.next = 65;
                    break;
                  case 45:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context84.next = 50;
                      break;
                    }
                    _context84.next = 48;
                    return $_istqbuster_b_40();
                  case 48:
                    _context84.next = 65;
                    break;
                  case 50:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context84.next = 56;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context84.next = 54;
                    return $_istqbuster_b_40();
                  case 54:
                    _context84.next = 65;
                    break;
                  case 56:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context84.next = 61;
                      break;
                    }
                    _context84.next = 59;
                    return $_istqbuster_b_40();
                  case 59:
                    _context84.next = 65;
                    break;
                  case 61:
                    _context84.next = 63;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 63:
                    _context84.next = 65;
                    return $_istqbuster_b_39();
                  case 65:
                  case "end":
                    return _context84.stop();
                }
              }, _callee84);
            }));
            return _$_istqbuster_b_39.apply(this, arguments);
          };
          $_istqbuster_b_39 = function _$_istqbuster_b_117() {
            return _$_istqbuster_b_39.apply(this, arguments);
          };
          _$_istqbuster_b_38 = function _$_istqbuster_b_116() {
            _$_istqbuster_b_38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                while (1) switch (_context83.prev = _context83.next) {
                  case 0:
                    gaiman.echo("");
                    _context83.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #38]", 35);
                  case 3:
                    _context83.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are performing system testing of a train reservation system. Based on the test cases performed, you have noticed that the system occasionally reports that no trains are available, although this should be the case. You have provided the developers with a summary of the defect and the version of the tested system. They recognize the urgency of the defect and are now waiting for you to provide further details.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context83.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]In addition to the information already provided, the following additional information is given:]", 35);
                  case 8:
                    gaiman.echo("");
                    _context83.next = 11;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Degree of impact (severity) of the defect", 35);
                  case 11:
                    _context83.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) Identification of the test object", 35);
                  case 13:
                    _context83.next = 15;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Details of the test environment", 35);
                  case 15:
                    _context83.next = 17;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Urgency/priority to fix", 35);
                  case 17:
                    _context83.next = 19;
                    return gaiman.echo_extra("[[;#94E2D5;]5]) Actual results", 35);
                  case 19:
                    _context83.next = 21;
                    return gaiman.echo_extra("[[;#94E2D5;]6]) Reference to test case specification", 35);
                  case 21:
                    gaiman.echo("");
                    _context83.next = 24;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of this additional information is most useful to include in the defect report?]", 35);
                  case 24:
                    gaiman.echo("");
                    _context83.next = 27;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 1, 2, 6", 35);
                  case 27:
                    _context83.next = 29;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 1, 4, 2, 6", 35);
                  case 29:
                    _context83.next = 31;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 2, 3, 4, 2", 35);
                  case 31:
                    _context83.next = 33;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 3, 2, 6", 35);
                  case 33:
                    gaiman.echo("");
                    _context83.next = 36;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 36:
                    $_answer = _context83.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context83.next = 43;
                      break;
                    }
                    _context83.next = 41;
                    return $_istqbuster_b_39();
                  case 41:
                    _context83.next = 63;
                    break;
                  case 43:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context83.next = 48;
                      break;
                    }
                    _context83.next = 46;
                    return $_istqbuster_b_39();
                  case 46:
                    _context83.next = 63;
                    break;
                  case 48:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context83.next = 53;
                      break;
                    }
                    _context83.next = 51;
                    return $_istqbuster_b_39();
                  case 51:
                    _context83.next = 63;
                    break;
                  case 53:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context83.next = 59;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context83.next = 57;
                    return $_istqbuster_b_39();
                  case 57:
                    _context83.next = 63;
                    break;
                  case 59:
                    _context83.next = 61;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 61:
                    _context83.next = 63;
                    return $_istqbuster_b_38();
                  case 63:
                  case "end":
                    return _context83.stop();
                }
              }, _callee83);
            }));
            return _$_istqbuster_b_38.apply(this, arguments);
          };
          $_istqbuster_b_38 = function _$_istqbuster_b_115() {
            return _$_istqbuster_b_38.apply(this, arguments);
          };
          _$_istqbuster_b_37 = function _$_istqbuster_b_114() {
            _$_istqbuster_b_37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee82$(_context82) {
                while (1) switch (_context82.prev = _context82.next) {
                  case 0:
                    gaiman.echo("");
                    _context82.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #37]", 35);
                  case 3:
                    _context82.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is LEAST likely to be an example of product risk analysis CORRECTLY influencing the testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context82.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The potential impact of security flaws has been identified as being particularly high, so security testing has been prioritized ahead of some other testing activities", 35);
                  case 8:
                    _context82.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Testing has found the quality of the network module to be higher than expected, so additional testing will be performed in that area", 35);
                  case 10:
                    _context82.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The users had problems with the user interface of the previous system, so additional usability testing is planned for the replacement system", 35);
                  case 12:
                    _context82.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The time needed to load web pages is crucial to the success of the new website, so an expert in performance testing has been employed for this project", 35);
                  case 14:
                    gaiman.echo("");
                    _context82.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context82.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context82.next = 24;
                      break;
                    }
                    _context82.next = 22;
                    return $_istqbuster_b_38();
                  case 22:
                    _context82.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context82.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context82.next = 28;
                    return $_istqbuster_b_38();
                  case 28:
                    _context82.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context82.next = 35;
                      break;
                    }
                    _context82.next = 33;
                    return $_istqbuster_b_38();
                  case 33:
                    _context82.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context82.next = 40;
                      break;
                    }
                    _context82.next = 38;
                    return $_istqbuster_b_38();
                  case 38:
                    _context82.next = 44;
                    break;
                  case 40:
                    _context82.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context82.next = 44;
                    return $_istqbuster_b_37();
                  case 44:
                  case "end":
                    return _context82.stop();
                }
              }, _callee82);
            }));
            return _$_istqbuster_b_37.apply(this, arguments);
          };
          $_istqbuster_b_37 = function _$_istqbuster_b_113() {
            return _$_istqbuster_b_37.apply(this, arguments);
          };
          _$_istqbuster_b_36 = function _$_istqbuster_b_112() {
            _$_istqbuster_b_36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee81$(_context81) {
                while (1) switch (_context81.prev = _context81.next) {
                  case 0:
                    gaiman.echo("");
                    _context81.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #36]", 35);
                  case 3:
                    _context81.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is MOST likely to be an example of a PRODUCT risk?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context81.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The expected security features may not be supported by the system architecture", 35);
                  case 8:
                    _context81.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The developers may not have time to fix all the defects found by the test team", 35);
                  case 10:
                    _context81.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The test cases may not provide full coverage of the specified requirements", 35);
                  case 12:
                    _context81.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The performance test environment may not be ready before the system is due for delivery", 35);
                  case 14:
                    gaiman.echo("");
                    _context81.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context81.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context81.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context81.next = 23;
                    return $_istqbuster_b_37();
                  case 23:
                    _context81.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context81.next = 30;
                      break;
                    }
                    _context81.next = 28;
                    return $_istqbuster_b_37();
                  case 28:
                    _context81.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context81.next = 35;
                      break;
                    }
                    _context81.next = 33;
                    return $_istqbuster_b_37();
                  case 33:
                    _context81.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context81.next = 40;
                      break;
                    }
                    _context81.next = 38;
                    return $_istqbuster_b_37();
                  case 38:
                    _context81.next = 44;
                    break;
                  case 40:
                    _context81.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context81.next = 44;
                    return $_istqbuster_b_36();
                  case 44:
                  case "end":
                    return _context81.stop();
                }
              }, _callee81);
            }));
            return _$_istqbuster_b_36.apply(this, arguments);
          };
          $_istqbuster_b_36 = function _$_istqbuster_b_111() {
            return _$_istqbuster_b_36.apply(this, arguments);
          };
          _$_istqbuster_b_35 = function _$_istqbuster_b_110() {
            _$_istqbuster_b_35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee80$(_context80) {
                while (1) switch (_context80.prev = _context80.next) {
                  case 0:
                    gaiman.echo("");
                    _context80.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #35]", 35);
                  case 3:
                    _context80.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST defines risk level?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context80.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Risk level is calculated by adding together the probabilities of all problem situations and the financial harm that results from them", 35);
                  case 8:
                    _context80.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Risk level is estimated by multiplying the likelihood of a threat to the system by the chance that the threat will occur and will result in financial damage", 35);
                  case 10:
                    _context80.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Risk level is determined by a combination of the probability of an undesirable event and the expected impact of that event", 35);
                  case 12:
                    _context80.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Risk level is the sum of all potential hazards to a system multiplied by the sum of all potential losses from that system", 35);
                  case 14:
                    gaiman.echo("");
                    _context80.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context80.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context80.next = 24;
                      break;
                    }
                    _context80.next = 22;
                    return $_istqbuster_b_36();
                  case 22:
                    _context80.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context80.next = 29;
                      break;
                    }
                    _context80.next = 27;
                    return $_istqbuster_b_36();
                  case 27:
                    _context80.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context80.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context80.next = 33;
                    return $_istqbuster_b_36();
                  case 33:
                    _context80.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context80.next = 40;
                      break;
                    }
                    _context80.next = 38;
                    return $_istqbuster_b_36();
                  case 38:
                    _context80.next = 44;
                    break;
                  case 40:
                    _context80.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context80.next = 44;
                    return $_istqbuster_b_35();
                  case 44:
                  case "end":
                    return _context80.stop();
                }
              }, _callee80);
            }));
            return _$_istqbuster_b_35.apply(this, arguments);
          };
          $_istqbuster_b_35 = function _$_istqbuster_b_109() {
            return _$_istqbuster_b_35.apply(this, arguments);
          };
          _$_istqbuster_b_34 = function _$_istqbuster_b_108() {
            _$_istqbuster_b_34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee79$(_context79) {
                while (1) switch (_context79.prev = _context79.next) {
                  case 0:
                    gaiman.echo("");
                    _context79.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #34]", 35);
                  case 3:
                    _context79.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements about test estimation approaches is CORRECT?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context79.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) With the metrics-based approach, the estimate is based on test measures from the project and so this estimate is only available after the testing starts", 35);
                  case 8:
                    _context79.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) With the expert-based approach, a group of expert users identified by the client recommends the necessary testing budget", 35);
                  case 10:
                    _context79.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) With the expert-based approach, the test managers responsible for the different testing activities predict the expected testing effort", 35);
                  case 12:
                    _context79.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) With the metrics-based approach, an average of the testing costs recorded from several past projects is used as the testing budget", 35);
                  case 14:
                    gaiman.echo("");
                    _context79.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context79.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context79.next = 24;
                      break;
                    }
                    _context79.next = 22;
                    return $_istqbuster_b_35();
                  case 22:
                    _context79.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context79.next = 29;
                      break;
                    }
                    _context79.next = 27;
                    return $_istqbuster_b_35();
                  case 27:
                    _context79.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context79.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context79.next = 33;
                    return $_istqbuster_b_35();
                  case 33:
                    _context79.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context79.next = 40;
                      break;
                    }
                    _context79.next = 38;
                    return $_istqbuster_b_35();
                  case 38:
                    _context79.next = 44;
                    break;
                  case 40:
                    _context79.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context79.next = 44;
                    return $_istqbuster_b_34();
                  case 44:
                  case "end":
                    return _context79.stop();
                }
              }, _callee79);
            }));
            return _$_istqbuster_b_34.apply(this, arguments);
          };
          $_istqbuster_b_34 = function _$_istqbuster_b_107() {
            return _$_istqbuster_b_34.apply(this, arguments);
          };
          _$_istqbuster_b_33 = function _$_istqbuster_b_106() {
            _$_istqbuster_b_33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee78$(_context78) {
                while (1) switch (_context78.prev = _context78.next) {
                  case 0:
                    gaiman.echo("");
                    _context78.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #33]", 35);
                  case 3:
                    _context78.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following priorities and dependencies for these test cases:]", 35);
                  case 5:
                    gaiman.echo("");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| Test Case | Priority |   Technical    |   Logical      |");
                    gaiman.echo("|           |          | dependency on: | dependency on: |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| TC1       | High     | TC4            |                |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| TC2       | Low      |                |                |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| TC3       | High     |                | TC4            |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| TC4       | Medium   |                |                |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| TC5       | Low      |                | TC2            |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("| TC6       | Medium   | TC5            |                |");
                    gaiman.echo("+-----------+----------+----------------+----------------+");
                    gaiman.echo("");
                    _context78.next = 25;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following test execution schedules BEST considers the priorities and technical and logical dependencies?]", 35);
                  case 25:
                    gaiman.echo("");
                    _context78.next = 28;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) TC1 \u2013 TC3 \u2013 TC4 \u2013 TC6 \u2013 TC2 \u2013 TC5", 35);
                  case 28:
                    _context78.next = 30;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) TC4 \u2013 TC3 \u2013 TC1 \u2013 TC2 \u2013 TC5 \u2013 TC6", 35);
                  case 30:
                    _context78.next = 32;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) TC4 \u2013 TC1 \u2013 TC3 \u2013 TC5 \u2013 TC6 \u2013 TC2", 35);
                  case 32:
                    _context78.next = 34;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) TC4 \u2013 TC2 \u2013 TC5 \u2013 TC1 \u2013 TC3 \u2013 TC6", 35);
                  case 34:
                    gaiman.echo("");
                    _context78.next = 37;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 37:
                    $_answer = _context78.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context78.next = 44;
                      break;
                    }
                    _context78.next = 42;
                    return $_istqbuster_b_34();
                  case 42:
                    _context78.next = 64;
                    break;
                  case 44:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context78.next = 50;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context78.next = 48;
                    return $_istqbuster_b_34();
                  case 48:
                    _context78.next = 64;
                    break;
                  case 50:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context78.next = 55;
                      break;
                    }
                    _context78.next = 53;
                    return $_istqbuster_b_34();
                  case 53:
                    _context78.next = 64;
                    break;
                  case 55:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context78.next = 60;
                      break;
                    }
                    _context78.next = 58;
                    return $_istqbuster_b_34();
                  case 58:
                    _context78.next = 64;
                    break;
                  case 60:
                    _context78.next = 62;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 62:
                    _context78.next = 64;
                    return $_istqbuster_b_33();
                  case 64:
                  case "end":
                    return _context78.stop();
                }
              }, _callee78);
            }));
            return _$_istqbuster_b_33.apply(this, arguments);
          };
          $_istqbuster_b_33 = function _$_istqbuster_b_105() {
            return _$_istqbuster_b_33.apply(this, arguments);
          };
          _$_istqbuster_b_32 = function _$_istqbuster_b_104() {
            _$_istqbuster_b_32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee77$(_context77) {
                while (1) switch (_context77.prev = _context77.next) {
                  case 0:
                    gaiman.echo("");
                    _context77.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #32]", 35);
                  case 3:
                    _context77.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following examples of entry and exit criteria:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context77.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) The original testing budget of $30,000 plus contingency of $7,000 has been spent", 35);
                  case 8:
                    _context77.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) 96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope", 35);
                  case 10:
                    _context77.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) The trading performance test environment has been designed, set-up and verified", 35);
                  case 12:
                    _context77.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Current status is no outstanding critical defects and two high-priority ones", 35);
                  case 14:
                    _context77.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]5]) The autopilot design specifications have been reviewed and reworked", 35);
                  case 16:
                    _context77.next = 18;
                    return gaiman.echo_extra("[[;#94E2D5;]6]) The tax rate calculation component has passed unit testing.", 35);
                  case 18:
                    gaiman.echo("");
                    _context77.next = 21;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST categorizes them as entry and exit criteria:]", 35);
                  case 21:
                    gaiman.echo("");
                    _context77.next = 24;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Entry criteria \u2013 5, 6; Exit criteria \u2013 1, 2, 3, 4", 35);
                  case 24:
                    _context77.next = 26;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Entry criteria \u2013 2, 3, 6; Exit criteria \u2013 1, 4, 2", 35);
                  case 26:
                    _context77.next = 28;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Entry criteria \u2013 1, 3; Exit criteria \u2013 2, 4, 2, 6", 35);
                  case 28:
                    _context77.next = 30;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Entry criteria \u2013 3, 2, 6; Exit criteria \u2013 1, 2, 4", 35);
                  case 30:
                    gaiman.echo("");
                    _context77.next = 33;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 33:
                    $_answer = _context77.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context77.next = 40;
                      break;
                    }
                    _context77.next = 38;
                    return $_istqbuster_b_33();
                  case 38:
                    _context77.next = 60;
                    break;
                  case 40:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context77.next = 45;
                      break;
                    }
                    _context77.next = 43;
                    return $_istqbuster_b_33();
                  case 43:
                    _context77.next = 60;
                    break;
                  case 45:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context77.next = 50;
                      break;
                    }
                    _context77.next = 48;
                    return $_istqbuster_b_33();
                  case 48:
                    _context77.next = 60;
                    break;
                  case 50:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context77.next = 56;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context77.next = 54;
                    return $_istqbuster_b_33();
                  case 54:
                    _context77.next = 60;
                    break;
                  case 56:
                    _context77.next = 58;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 58:
                    _context77.next = 60;
                    return $_istqbuster_b_32();
                  case 60:
                  case "end":
                    return _context77.stop();
                }
              }, _callee77);
            }));
            return _$_istqbuster_b_32.apply(this, arguments);
          };
          $_istqbuster_b_32 = function _$_istqbuster_b_103() {
            return _$_istqbuster_b_32.apply(this, arguments);
          };
          _$_istqbuster_b_31 = function _$_istqbuster_b_102() {
            _$_istqbuster_b_31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee76$(_context76) {
                while (1) switch (_context76.prev = _context76.next) {
                  case 0:
                    gaiman.echo("");
                    _context76.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #31]", 35);
                  case 3:
                    _context76.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following tasks is MOST LIKELY to be performed by the test manager?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context76.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Write test summary reports based on the information gathered during testing", 35);
                  case 8:
                    _context76.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Review tests developed by others", 35);
                  case 10:
                    _context76.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Prepare and acquire test data", 35);
                  case 12:
                    _context76.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Analyze, review, and assess requirements, specifications, and models for testability", 35);
                  case 14:
                    gaiman.echo("");
                    _context76.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context76.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context76.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context76.next = 23;
                    return $_istqbuster_b_32();
                  case 23:
                    _context76.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context76.next = 30;
                      break;
                    }
                    _context76.next = 28;
                    return $_istqbuster_b_32();
                  case 28:
                    _context76.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context76.next = 35;
                      break;
                    }
                    _context76.next = 33;
                    return $_istqbuster_b_32();
                  case 33:
                    _context76.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context76.next = 40;
                      break;
                    }
                    _context76.next = 38;
                    return $_istqbuster_b_32();
                  case 38:
                    _context76.next = 44;
                    break;
                  case 40:
                    _context76.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context76.next = 44;
                    return $_istqbuster_b_31();
                  case 44:
                  case "end":
                    return _context76.stop();
                }
              }, _callee76);
            }));
            return _$_istqbuster_b_31.apply(this, arguments);
          };
          $_istqbuster_b_31 = function _$_istqbuster_b_101() {
            return _$_istqbuster_b_31.apply(this, arguments);
          };
          _$_istqbuster_b_30 = function _$_istqbuster_b_100() {
            _$_istqbuster_b_30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee75$(_context75) {
                while (1) switch (_context75.prev = _context75.next) {
                  case 0:
                    gaiman.echo("");
                    _context75.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #30]", 35);
                  case 3:
                    _context75.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST explains a benefit of independent testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context75.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team, so ensuring everyone is aware that quality is the test team\u2019s overall responsibility", 35);
                  case 8:
                    _context75.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines", 35);
                  case 10:
                    _context75.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) An independent test team can work totally separately from the developers, need not be distracted with changing project requirements, and can restrict communication with the developers to defect reporting through the defect management system", 35);
                  case 12:
                    _context75.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer", 35);
                  case 14:
                    gaiman.echo("");
                    _context75.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context75.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context75.next = 24;
                      break;
                    }
                    _context75.next = 22;
                    return $_istqbuster_b_31();
                  case 22:
                    _context75.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context75.next = 29;
                      break;
                    }
                    _context75.next = 27;
                    return $_istqbuster_b_31();
                  case 27:
                    _context75.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context75.next = 34;
                      break;
                    }
                    _context75.next = 32;
                    return $_istqbuster_b_31();
                  case 32:
                    _context75.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context75.next = 40;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context75.next = 38;
                    return $_istqbuster_b_31();
                  case 38:
                    _context75.next = 44;
                    break;
                  case 40:
                    _context75.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context75.next = 44;
                    return $_istqbuster_b_30();
                  case 44:
                  case "end":
                    return _context75.stop();
                }
              }, _callee75);
            }));
            return _$_istqbuster_b_30.apply(this, arguments);
          };
          $_istqbuster_b_30 = function _$_istqbuster_b_99() {
            return _$_istqbuster_b_30.apply(this, arguments);
          };
          _$_istqbuster_b_29 = function _$_istqbuster_b_98() {
            _$_istqbuster_b_29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee74$(_context74) {
                while (1) switch (_context74.prev = _context74.next) {
                  case 0:
                    gaiman.echo("");
                    _context74.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #29]", 35);
                  case 3:
                    _context74.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST describes the concept behind error guessing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context74.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Error guessing requires you to imagine you are the user of the test object and guess mistakes the user could make interacting with it", 35);
                  case 8:
                    _context74.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Error guessing involves using your personal experience of development and the mistakes you made as a developer", 35);
                  case 10:
                    _context74.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Error guessing involves using your knowledge and experience of defects found in the past and typical mistakes made by developers", 35);
                  case 12:
                    _context74.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Error guessing requires you to rapidly duplicate the development task to identify the sort of mistakes a developer might make", 35);
                  case 14:
                    gaiman.echo("");
                    _context74.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context74.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context74.next = 24;
                      break;
                    }
                    _context74.next = 22;
                    return $_istqbuster_b_30();
                  case 22:
                    _context74.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context74.next = 29;
                      break;
                    }
                    _context74.next = 27;
                    return $_istqbuster_b_30();
                  case 27:
                    _context74.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context74.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context74.next = 33;
                    return $_istqbuster_b_30();
                  case 33:
                    _context74.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context74.next = 40;
                      break;
                    }
                    _context74.next = 38;
                    return $_istqbuster_b_30();
                  case 38:
                    _context74.next = 44;
                    break;
                  case 40:
                    _context74.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context74.next = 44;
                    return $_istqbuster_b_29();
                  case 44:
                  case "end":
                    return _context74.stop();
                }
              }, _callee74);
            }));
            return _$_istqbuster_b_29.apply(this, arguments);
          };
          $_istqbuster_b_29 = function _$_istqbuster_b_97() {
            return _$_istqbuster_b_29.apply(this, arguments);
          };
          _$_istqbuster_b_28 = function _$_istqbuster_b_96() {
            _$_istqbuster_b_28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee73$(_context73) {
                while (1) switch (_context73.prev = _context73.next) {
                  case 0:
                    gaiman.echo("");
                    _context73.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #28]", 35);
                  case 3:
                    _context73.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following descriptions of statement coverage is CORRECT?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context73.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Decision coverage is a measure of the percentage of possible paths through the source code exercised by tests", 35);
                  case 8:
                    _context73.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Decision coverage is a measure of the percentage of business flows through the component exercised by tests", 35);
                  case 10:
                    _context73.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Decision coverage is a measure of the \u2018if\u2019 statements in the code that are exercised with both the true and false outcomes", 35);
                  case 12:
                    _context73.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests", 35);
                  case 14:
                    gaiman.echo("");
                    _context73.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context73.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context73.next = 24;
                      break;
                    }
                    _context73.next = 22;
                    return $_istqbuster_b_29();
                  case 22:
                    _context73.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context73.next = 29;
                      break;
                    }
                    _context73.next = 27;
                    return $_istqbuster_b_29();
                  case 27:
                    _context73.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context73.next = 34;
                      break;
                    }
                    _context73.next = 32;
                    return $_istqbuster_b_29();
                  case 32:
                    _context73.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context73.next = 40;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context73.next = 38;
                    return $_istqbuster_b_29();
                  case 38:
                    _context73.next = 44;
                    break;
                  case 40:
                    _context73.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context73.next = 44;
                    return $_istqbuster_b_28();
                  case 44:
                  case "end":
                    return _context73.stop();
                }
              }, _callee73);
            }));
            return _$_istqbuster_b_28.apply(this, arguments);
          };
          $_istqbuster_b_28 = function _$_istqbuster_b_95() {
            return _$_istqbuster_b_28.apply(this, arguments);
          };
          _$_istqbuster_b_27 = function _$_istqbuster_b_94() {
            _$_istqbuster_b_27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee72$(_context72) {
                while (1) switch (_context72.prev = _context72.next) {
                  case 0:
                    gaiman.echo("");
                    _context72.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #27]", 35);
                  case 3:
                    _context72.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following descriptions of statement coverage is CORRECT?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context72.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Statement coverage is a measure of the number of lines of source code exercised by tests", 35);
                  case 8:
                    _context72.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Statement coverage is a measure of the proportion of executable statements in the source code exercised by tests", 35);
                  case 10:
                    _context72.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Statement coverage is a measure of the percentage of lines of source code (without comments) exercised by tests", 35);
                  case 12:
                    _context72.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Statement coverage is a measure of the number of executable statements in the source code exercised by tests", 35);
                  case 14:
                    gaiman.echo("");
                    _context72.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context72.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context72.next = 24;
                      break;
                    }
                    _context72.next = 22;
                    return $_istqbuster_b_28();
                  case 22:
                    _context72.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context72.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context72.next = 28;
                    return $_istqbuster_b_28();
                  case 28:
                    _context72.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context72.next = 35;
                      break;
                    }
                    _context72.next = 33;
                    return $_istqbuster_b_28();
                  case 33:
                    _context72.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context72.next = 40;
                      break;
                    }
                    _context72.next = 38;
                    return $_istqbuster_b_28();
                  case 38:
                    _context72.next = 44;
                    break;
                  case 40:
                    _context72.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context72.next = 44;
                    return $_istqbuster_b_27();
                  case 44:
                  case "end":
                    return _context72.stop();
                }
              }, _callee72);
            }));
            return _$_istqbuster_b_27.apply(this, arguments);
          };
          $_istqbuster_b_27 = function _$_istqbuster_b_93() {
            return _$_istqbuster_b_27.apply(this, arguments);
          };
          _$_istqbuster_b_26 = function _$_istqbuster_b_92() {
            _$_istqbuster_b_26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee71$(_context71) {
                while (1) switch (_context71.prev = _context71.next) {
                  case 0:
                    gaiman.echo("");
                    _context71.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #26]", 35);
                  case 3:
                    _context71.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements BEST describes how test cases are derived from a use case?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context71.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Test cases are created to exercise defined basic, exceptional and error behaviors performed by the system under test in collaboration with actors", 35);
                  case 8:
                    _context71.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Test cases are derived by identifying the components included in the use case and creating integration tests that exercise the interactions of these components", 35);
                  case 10:
                    _context71.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Test cases are generated by analyzing the interactions of the actors with the system to ensure the user interfaces are easy to use", 35);
                  case 12:
                    _context71.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Test cases are derived to exercise each of the decision points in the business process flows of the use case, to achieve 100% decision coverage of these flows", 35);
                  case 14:
                    gaiman.echo("");
                    _context71.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context71.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context71.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context71.next = 23;
                    return $_istqbuster_b_27();
                  case 23:
                    _context71.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context71.next = 30;
                      break;
                    }
                    _context71.next = 28;
                    return $_istqbuster_b_27();
                  case 28:
                    _context71.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context71.next = 35;
                      break;
                    }
                    _context71.next = 33;
                    return $_istqbuster_b_27();
                  case 33:
                    _context71.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context71.next = 40;
                      break;
                    }
                    _context71.next = 38;
                    return $_istqbuster_b_27();
                  case 38:
                    _context71.next = 44;
                    break;
                  case 40:
                    _context71.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context71.next = 44;
                    return $_istqbuster_b_26();
                  case 44:
                  case "end":
                    return _context71.stop();
                }
              }, _callee71);
            }));
            return _$_istqbuster_b_26.apply(this, arguments);
          };
          $_istqbuster_b_26 = function _$_istqbuster_b_91() {
            return _$_istqbuster_b_26.apply(this, arguments);
          };
          _$_istqbuster_b_25 = function _$_istqbuster_b_90() {
            _$_istqbuster_b_25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                while (1) switch (_context70.prev = _context70.next) {
                  case 0:
                    gaiman.echo("");
                    _context70.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #25]", 35);
                  case 3:
                    _context70.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following state model of a battery charger software:]", 35);
                  case 5:
                    gaiman.echo("");
                    gaiman.echo("             +---------+     +------+");
                    gaiman.echo("             |  WAIT   | --> | OFF  |");
                    gaiman.echo("             |         | <-- |      |");
                    gaiman.echo("             +---------+     +------+");
                    gaiman.echo("                |  ^");
                    gaiman.echo("                v  |");
                    gaiman.echo("             +---------+");
                    gaiman.echo("             | TRICKLE |");
                    gaiman.echo("             |         |");
                    gaiman.echo("             +---------+");
                    gaiman.echo("                |  ^");
                    gaiman.echo("                v  |");
                    gaiman.echo("+------+     +---------+     +------+");
                    gaiman.echo("|  R7  | --> | CHARGE  | --> | HIGH |");
                    gaiman.echo("|      | <-- |         | <-- |      |");
                    gaiman.echo("+------+     +---------+     +------+");
                    gaiman.echo("");
                    _context70.next = 25;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following sequences of transitions provides the highest level of transition coverage for the model?]", 35);
                  case 25:
                    gaiman.echo("");
                    _context70.next = 28;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) OFF  \u2192 WAIT    \u2192 OFF     \u2192 WAIT   \u2192 TRICKLE \u2192", 35);
                  case 28:
                    _context70.next = 30;
                    return gaiman.echo_extra("                    CHARGE  \u2192 HIGH    \u2192 CHARGE \u2192 LOW", 35);
                  case 30:
                    _context70.next = 32;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) WAIT \u2192 TRICKLE \u2192 WAIT    \u2192 OFF    \u2192 WAIT \u2192", 35);
                  case 32:
                    _context70.next = 34;
                    return gaiman.echo_extra("                    TRICKLE \u2192 CHARGE  \u2192 LOW    \u2192 CHARGE", 35);
                  case 34:
                    _context70.next = 36;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) HIGH \u2192 CHARGE  \u2192 LOW     \u2192 CHARGE \u2192 TRICKLE \u2192", 35);
                  case 36:
                    _context70.next = 38;
                    return gaiman.echo_extra("                    WAIT    \u2192 TRICKLE \u2192 WAIT   \u2192 TRICKLE", 35);
                  case 38:
                    _context70.next = 40;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) WAIT \u2192 TRICKLE \u2192 CHARGE  \u2192 HIGH   \u2192 CHARGE \u2192", 35);
                  case 40:
                    _context70.next = 42;
                    return gaiman.echo_extra("                    TRICKLE \u2192 WAIT    \u2192 OFF    \u2192 WAIT", 35);
                  case 42:
                    gaiman.echo("");
                    _context70.next = 45;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 45:
                    $_answer = _context70.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context70.next = 52;
                      break;
                    }
                    _context70.next = 50;
                    return $_istqbuster_b_26();
                  case 50:
                    _context70.next = 72;
                    break;
                  case 52:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context70.next = 57;
                      break;
                    }
                    _context70.next = 55;
                    return $_istqbuster_b_26();
                  case 55:
                    _context70.next = 72;
                    break;
                  case 57:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context70.next = 62;
                      break;
                    }
                    _context70.next = 60;
                    return $_istqbuster_b_26();
                  case 60:
                    _context70.next = 72;
                    break;
                  case 62:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context70.next = 68;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context70.next = 66;
                    return $_istqbuster_b_26();
                  case 66:
                    _context70.next = 72;
                    break;
                  case 68:
                    _context70.next = 70;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 70:
                    _context70.next = 72;
                    return $_istqbuster_b_25();
                  case 72:
                  case "end":
                    return _context70.stop();
                }
              }, _callee70);
            }));
            return _$_istqbuster_b_25.apply(this, arguments);
          };
          $_istqbuster_b_25 = function _$_istqbuster_b_89() {
            return _$_istqbuster_b_25.apply(this, arguments);
          };
          _$_istqbuster_b_24 = function _$_istqbuster_b_88() {
            _$_istqbuster_b_24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                while (1) switch (_context69.prev = _context69.next) {
                  case 0:
                    gaiman.echo("");
                    _context69.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #24]", 35);
                  case 3:
                    _context69.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Decision table testing is being performed on a speeding fine system. Two test cases have already been generated for rules R1 and R4, which are shown below:]", 35);
                  case 5:
                    gaiman.echo("");
                    gaiman.echo("             +----------------------------+----+----+");
                    gaiman.echo("             | Rules                      | R1 | R4 |");
                    gaiman.echo("+------------+----------------------------+----+----+");
                    gaiman.echo("|            | Speed > 50                 | T  | F  |");
                    gaiman.echo("| Conditions +----------------------------+----+----+");
                    gaiman.echo("|            | School Zone                | T  | F  |");
                    gaiman.echo("+------------+----------------------------+----+----+");
                    gaiman.echo("|            | $250 Dine                  | F  | F  |");
                    gaiman.echo("| Actions    +----------------------------+----+----+");
                    gaiman.echo("|            | Driving license Withdrawal | T  | F  |");
                    gaiman.echo("+------------+----------------------------+----+----+");
                    gaiman.echo("");
                    _context69.next = 20;
                    return gaiman.echo_extra("[[;#F9E2AF;]Decision table testing is being performed on a speeding fine system. Two test cases have already been generated for rules R1 and R4, which are shown below:]", 35);
                  case 20:
                    gaiman.echo("");
                    _context69.next = 23;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following additional test cases:]", 35);
                  case 23:
                    gaiman.echo("");
                    gaiman.echo("                  +----------------------------+-----+-----+-----+-----+");
                    gaiman.echo("                  | Rules                      | DT1 | DT2 | DT3 | DT4 |");
                    gaiman.echo("+-----------------+----------------------------+-----+-----+-----+-----+");
                    gaiman.echo("|                 | Speed > 50                 | 55  | 44  | 66  | 77  |");
                    gaiman.echo("| Input           +----------------------------+-----+-----+-----+-----+");
                    gaiman.echo("|                 | School Zone                | T   | T   | T   | F   |");
                    gaiman.echo("+-----------------+----------------------------+-----+-----+-----+-----+");
                    gaiman.echo("|                 | $250 Dine                  | F   | F   | F   | T   |");
                    gaiman.echo("| Expected Result +----------------------------+-----+-----+-----+-----+");
                    gaiman.echo("|                 | Driving license Withdrawal | T   | F   | T   | F   |");
                    gaiman.echo("+-----------------+----------------------------+-----+-----+-----+-----+");
                    gaiman.echo("");
                    _context69.next = 38;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which two of the additional test cases would achieve full coverage of the complete decision table (when combined with the test cases that have already been generated for rules R1 and R4)?]", 35);
                  case 38:
                    gaiman.echo("");
                    _context69.next = 41;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) DT1, DT2", 35);
                  case 41:
                    _context69.next = 43;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) DT2, DT3", 35);
                  case 43:
                    _context69.next = 45;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) DT2, DT4", 35);
                  case 45:
                    _context69.next = 47;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) DT3, DT4", 35);
                  case 47:
                    gaiman.echo("");
                    _context69.next = 50;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 50:
                    $_answer = _context69.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context69.next = 57;
                      break;
                    }
                    _context69.next = 55;
                    return $_istqbuster_b_25();
                  case 55:
                    _context69.next = 77;
                    break;
                  case 57:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context69.next = 62;
                      break;
                    }
                    _context69.next = 60;
                    return $_istqbuster_b_25();
                  case 60:
                    _context69.next = 77;
                    break;
                  case 62:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context69.next = 68;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context69.next = 66;
                    return $_istqbuster_b_25();
                  case 66:
                    _context69.next = 77;
                    break;
                  case 68:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context69.next = 73;
                      break;
                    }
                    _context69.next = 71;
                    return $_istqbuster_b_25();
                  case 71:
                    _context69.next = 77;
                    break;
                  case 73:
                    _context69.next = 75;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 75:
                    _context69.next = 77;
                    return $_istqbuster_b_24();
                  case 77:
                  case "end":
                    return _context69.stop();
                }
              }, _callee69);
            }));
            return _$_istqbuster_b_24.apply(this, arguments);
          };
          $_istqbuster_b_24 = function _$_istqbuster_b_87() {
            return _$_istqbuster_b_24.apply(this, arguments);
          };
          _$_istqbuster_b_23 = function _$_istqbuster_b_86() {
            _$_istqbuster_b_23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                while (1) switch (_context68.prev = _context68.next) {
                  case 0:
                    gaiman.echo("");
                    _context68.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #23]", 35);
                  case 3:
                    _context68.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A smart home app measures the average temperature in the house over the previous week and provides feedback to the occupants on their environmental friendliness based on this temperature.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context68.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]The feedback for different average temperature ranges (to the nearest \xB0C) should be:]", 35);
                  case 8:
                    gaiman.echo("");
                    _context68.next = 11;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Up to 10\xB0C - Icy Cool!", 35);
                  case 11:
                    _context68.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) 11\xB0C to 15\xB0C - Chilled Out!", 35);
                  case 13:
                    _context68.next = 15;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) 16\xB0C to 19\xB0C - Cool Man!", 35);
                  case 15:
                    _context68.next = 17;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) 20\xB0C to 22\xB0C - Too Warm!", 35);
                  case 17:
                    _context68.next = 19;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Above 22\xB0C - Hot & Sweaty!", 35);
                  case 19:
                    gaiman.echo("");
                    _context68.next = 22;
                    return gaiman.echo_extra("[[;#F9E2AF;]Using BVA (only Min- and Max values), which of the following sets of test inputs provides the highest level of boundary coverage?]", 35);
                  case 22:
                    gaiman.echo("");
                    _context68.next = 25;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 0\xB0C, 21\xB0C, 2\xB0C, 22\xB0C, 23\xB0C", 35);
                  case 25:
                    _context68.next = 27;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 9\xB0C, 2\xB0C, 29\xB0C, 23\xB0C, 200\xB0C", 35);
                  case 27:
                    _context68.next = 29;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 10\xB0C, 26\xB0C, 29\xB0C, 22\xB0C, 23\xB0C", 35);
                  case 29:
                    _context68.next = 31;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 14\xB0C, 2\xB0C, 28\xB0C, 29\xB0C, 21\xB0C, 22\xB0C", 35);
                  case 31:
                    gaiman.echo("");
                    _context68.next = 34;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 34:
                    $_answer = _context68.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context68.next = 41;
                      break;
                    }
                    _context68.next = 39;
                    return $_istqbuster_b_24();
                  case 39:
                    _context68.next = 61;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context68.next = 46;
                      break;
                    }
                    _context68.next = 44;
                    return $_istqbuster_b_24();
                  case 44:
                    _context68.next = 61;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context68.next = 52;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context68.next = 50;
                    return $_istqbuster_b_24();
                  case 50:
                    _context68.next = 61;
                    break;
                  case 52:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context68.next = 57;
                      break;
                    }
                    _context68.next = 55;
                    return $_istqbuster_b_24();
                  case 55:
                    _context68.next = 61;
                    break;
                  case 57:
                    _context68.next = 59;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 59:
                    _context68.next = 61;
                    return $_istqbuster_b_23();
                  case 61:
                  case "end":
                    return _context68.stop();
                }
              }, _callee68);
            }));
            return _$_istqbuster_b_23.apply(this, arguments);
          };
          $_istqbuster_b_23 = function _$_istqbuster_b_85() {
            return _$_istqbuster_b_23.apply(this, arguments);
          };
          _$_istqbuster_b_22 = function _$_istqbuster_b_84() {
            _$_istqbuster_b_22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                while (1) switch (_context67.prev = _context67.next) {
                  case 0:
                    gaiman.echo("");
                    _context67.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #22]", 35);
                  case 3:
                    _context67.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A daily radiation recorder for plants produces a sunshine score based on a combination of the number of hours a plant is exposed to the sun (below 3 hours, 3 to 6 hours or above 6 hours) and the average intensity of the sunshine (very low, low, medium, high).]", 35);
                  case 5:
                    gaiman.echo("");
                    _context67.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following test cases:]", 35);
                  case 8:
                    gaiman.echo("     +--------+-----------+-------+");
                    gaiman.echo("     | Hours  | Intensity | Score |");
                    gaiman.echo("+-------------+-----------+-------+");
                    gaiman.echo("| T1 | 1.5    | v. low    | 10    |");
                    gaiman.echo("+-------------+-----------+-------+");
                    gaiman.echo("| T2 | 7.0    | medium    | 60    |");
                    gaiman.echo("+-------------+-----------+-------+");
                    gaiman.echo("| T3 | 0.5    | v. low    | 10    |");
                    gaiman.echo("+-------------+-----------+-------+");
                    gaiman.echo("");
                    _context67.next = 20;
                    return gaiman.echo_extra("[[;#F9E2AF;]What is the minimum number of additional test cases that are needed to ensure full coverage of ALL VALID INPUT equivalence partitions?]", 35);
                  case 20:
                    gaiman.echo("");
                    _context67.next = 23;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 1", 35);
                  case 23:
                    _context67.next = 25;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 2", 35);
                  case 25:
                    _context67.next = 27;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 3", 35);
                  case 27:
                    _context67.next = 29;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 4", 35);
                  case 29:
                    gaiman.echo("");
                    _context67.next = 32;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 32:
                    $_answer = _context67.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context67.next = 39;
                      break;
                    }
                    _context67.next = 37;
                    return $_istqbuster_b_23();
                  case 37:
                    _context67.next = 59;
                    break;
                  case 39:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context67.next = 45;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context67.next = 43;
                    return $_istqbuster_b_23();
                  case 43:
                    _context67.next = 59;
                    break;
                  case 45:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context67.next = 50;
                      break;
                    }
                    _context67.next = 48;
                    return $_istqbuster_b_23();
                  case 48:
                    _context67.next = 59;
                    break;
                  case 50:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context67.next = 55;
                      break;
                    }
                    _context67.next = 53;
                    return $_istqbuster_b_23();
                  case 53:
                    _context67.next = 59;
                    break;
                  case 55:
                    _context67.next = 57;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 57:
                    _context67.next = 59;
                    return $_istqbuster_b_22();
                  case 59:
                  case "end":
                    return _context67.stop();
                }
              }, _callee67);
            }));
            return _$_istqbuster_b_22.apply(this, arguments);
          };
          $_istqbuster_b_22 = function _$_istqbuster_b_83() {
            return _$_istqbuster_b_22.apply(this, arguments);
          };
          _$_istqbuster_b_21 = function _$_istqbuster_b_82() {
            _$_istqbuster_b_21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                while (1) switch (_context66.prev = _context66.next) {
                  case 0:
                    gaiman.echo("");
                    _context66.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #21]", 35);
                  case 3:
                    _context66.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A fitness app measures the number of steps that are walked each day and provides feedback to encourage the user to keep fit.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context66.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]The feedback for different numbers of steps should be:]", 35);
                  case 8:
                    gaiman.echo("");
                    _context66.next = 11;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Up to 1000 - Couch Potato!", 35);
                  case 11:
                    _context66.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Above 1000, up to 2000 - Lazy Bones!", 35);
                  case 13:
                    _context66.next = 15;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Above 2000, up to 4000 - Getting There!", 35);
                  case 15:
                    _context66.next = 17;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Above 4000, up to 6000 - Not Bad!", 35);
                  case 17:
                    _context66.next = 19;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Above 6000 - Way to Go!", 35);
                  case 19:
                    gaiman.echo("");
                    _context66.next = 22;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following sets of test inputs would achieve the BEST equivalence partition coverage?]", 35);
                  case 22:
                    gaiman.echo("");
                    _context66.next = 25;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 0, 2000, 200, 3000, 4000", 35);
                  case 25:
                    _context66.next = 27;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 1000, 201, 4000, 4001, 6000", 35);
                  case 27:
                    _context66.next = 29;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 123, 2345, 3456, 4567, 2678", 35);
                  case 29:
                    _context66.next = 31;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 666, 999, 2222, 255, 6666", 35);
                  case 31:
                    gaiman.echo("");
                    _context66.next = 34;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 34:
                    $_answer = _context66.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context66.next = 41;
                      break;
                    }
                    _context66.next = 39;
                    return $_istqbuster_b_22();
                  case 39:
                    _context66.next = 61;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context66.next = 46;
                      break;
                    }
                    _context66.next = 44;
                    return $_istqbuster_b_22();
                  case 44:
                    _context66.next = 61;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context66.next = 51;
                      break;
                    }
                    _context66.next = 49;
                    return $_istqbuster_b_22();
                  case 49:
                    _context66.next = 61;
                    break;
                  case 51:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context66.next = 57;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context66.next = 55;
                    return $_istqbuster_b_22();
                  case 55:
                    _context66.next = 61;
                    break;
                  case 57:
                    _context66.next = 59;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 59:
                    _context66.next = 61;
                    return $_istqbuster_b_21();
                  case 61:
                  case "end":
                    return _context66.stop();
                }
              }, _callee66);
            }));
            return _$_istqbuster_b_21.apply(this, arguments);
          };
          $_istqbuster_b_21 = function _$_istqbuster_b_81() {
            return _$_istqbuster_b_21.apply(this, arguments);
          };
          _$_istqbuster_b_20 = function _$_istqbuster_b_80() {
            _$_istqbuster_b_20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                while (1) switch (_context65.prev = _context65.next) {
                  case 0:
                    gaiman.echo("");
                    _context65.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #20]", 35);
                  case 3:
                    _context65.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST matches the descriptions with the different categories of test techniques?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context65.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Coverage is measured based on a selected structure of the test object", 35);
                  case 8:
                    _context65.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) The processing within the test object is checked", 35);
                  case 10:
                    _context65.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Tests are based on defects\u2019 likelihood and their distribution", 35);
                  case 12:
                    _context65.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Deviations from the requirements are checked", 35);
                  case 14:
                    _context65.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]5]) User stories are used as the test basis", 35);
                  case 16:
                    gaiman.echo("");
                    _context65.next = 19;
                    return gaiman.echo_extra("[[;#F9E2AF;]Using notation for the following 4 options:]", 35);
                  case 19:
                    gaiman.echo("");
                    _context65.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]Black]) - Black-box test techniques", 35);
                  case 22:
                    _context65.next = 24;
                    return gaiman.echo_extra("[[;#94E2D5;]White]) - White-box test techniques", 35);
                  case 24:
                    _context65.next = 26;
                    return gaiman.echo_extra("[[;#94E2D5;]Experience]) - Experience-based test techniques", 35);
                  case 26:
                    gaiman.echo("");
                    _context65.next = 29;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Black \u2013 4, 2 White    \u2013 1, 2; Experience \u2013 3", 35);
                  case 29:
                    _context65.next = 31;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Black \u2013 3 White       \u2013 1, 2; Experience \u2013 4, 2", 35);
                  case 31:
                    _context65.next = 33;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Black \u2013 4 White       \u2013 1, 2; Experience \u2013 3, 2", 35);
                  case 33:
                    _context65.next = 35;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Black \u2013 1, 3, 2 White \u2013 2; Experience    \u2013 4", 35);
                  case 35:
                    gaiman.echo("");
                    _context65.next = 38;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 38:
                    $_answer = _context65.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context65.next = 46;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context65.next = 44;
                    return $_istqbuster_b_21();
                  case 44:
                    _context65.next = 65;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context65.next = 51;
                      break;
                    }
                    _context65.next = 49;
                    return $_istqbuster_b_21();
                  case 49:
                    _context65.next = 65;
                    break;
                  case 51:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context65.next = 56;
                      break;
                    }
                    _context65.next = 54;
                    return $_istqbuster_b_21();
                  case 54:
                    _context65.next = 65;
                    break;
                  case 56:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context65.next = 61;
                      break;
                    }
                    _context65.next = 59;
                    return $_istqbuster_b_21();
                  case 59:
                    _context65.next = 65;
                    break;
                  case 61:
                    _context65.next = 63;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 63:
                    _context65.next = 65;
                    return $_istqbuster_b_20();
                  case 65:
                  case "end":
                    return _context65.stop();
                }
              }, _callee65);
            }));
            return _$_istqbuster_b_20.apply(this, arguments);
          };
          $_istqbuster_b_20 = function _$_istqbuster_b_79() {
            return _$_istqbuster_b_20.apply(this, arguments);
          };
          _$_istqbuster_b_19 = function _$_istqbuster_b_78() {
            _$_istqbuster_b_19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                while (1) switch (_context64.prev = _context64.next) {
                  case 0:
                    gaiman.echo("");
                    _context64.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #19]", 35);
                  case 3:
                    _context64.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following provides the BEST description of exploratory testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context64.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A testing practice in which an in-depth investigation of the background of the test object is used to identify potential weaknesses that are examined by test cases", 35);
                  case 8:
                    _context64.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) An approach to testing whereby the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests", 35);
                  case 10:
                    _context64.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) An approach to test design in which test activities are planned as uninterrupted sessions of test analysis and design, often used in conjunction with checklist-based testing", 35);
                  case 12:
                    _context64.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Testing based on the tester's experience, knowledge, and intuition", 35);
                  case 14:
                    gaiman.echo("");
                    _context64.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context64.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context64.next = 24;
                      break;
                    }
                    _context64.next = 22;
                    return $_istqbuster_b_20();
                  case 22:
                    _context64.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context64.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context64.next = 28;
                    return $_istqbuster_b_20();
                  case 28:
                    _context64.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context64.next = 35;
                      break;
                    }
                    _context64.next = 33;
                    return $_istqbuster_b_20();
                  case 33:
                    _context64.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context64.next = 40;
                      break;
                    }
                    _context64.next = 38;
                    return $_istqbuster_b_20();
                  case 38:
                    _context64.next = 44;
                    break;
                  case 40:
                    _context64.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context64.next = 44;
                    return $_istqbuster_b_19();
                  case 44:
                  case "end":
                    return _context64.stop();
                }
              }, _callee64);
            }));
            return _$_istqbuster_b_19.apply(this, arguments);
          };
          $_istqbuster_b_19 = function _$_istqbuster_b_77() {
            return _$_istqbuster_b_19.apply(this, arguments);
          };
          _$_istqbuster_b_18 = function _$_istqbuster_b_76() {
            _$_istqbuster_b_18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                while (1) switch (_context63.prev = _context63.next) {
                  case 0:
                    gaiman.echo("");
                    _context63.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #18]", 35);
                  case 3:
                    _context63.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You have been asked to take part in a checklist-based review of the following excerpt from the requirements specification for a library system:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context63.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Librarians can:]", 35);
                  case 8:
                    _context63.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Register new borrowers", 35);
                  case 10:
                    _context63.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) Return books from borrowers", 35);
                  case 12:
                    _context63.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Accept fines from borrowers", 35);
                  case 14:
                    _context63.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Add new books to the system with their ISBN, author and title", 35);
                  case 16:
                    _context63.next = 18;
                    return gaiman.echo_extra("[[;#94E2D5;]5]) Remove books from the system", 35);
                  case 18:
                    _context63.next = 20;
                    return gaiman.echo_extra("[[;#94E2D5;]6]) Get system responses within 5 seconds", 35);
                  case 20:
                    gaiman.echo("");
                    _context63.next = 23;
                    return gaiman.echo_extra("[[;#F9E2AF;]Borrowers can:]", 35);
                  case 23:
                    _context63.next = 25;
                    return gaiman.echo_extra("[[;#94E2D5;]7]) Borrow a maximum of 3 books at one time", 35);
                  case 25:
                    _context63.next = 27;
                    return gaiman.echo_extra("[[;#94E2D5;]8]) View the history of books they have borrowed/reserved", 35);
                  case 27:
                    _context63.next = 29;
                    return gaiman.echo_extra("[[;#94E2D5;]9]) Be fined for failing to return a book within 3 weeks", 35);
                  case 29:
                    _context63.next = 31;
                    return gaiman.echo_extra("[[;#94E2D5;]10]) Get system responses within 3 seconds", 35);
                  case 31:
                    _context63.next = 33;
                    return gaiman.echo_extra("[[;#94E2D5;]11]) Borrow a book at no cost for a maximum of 4 weeks", 35);
                  case 33:
                    _context63.next = 35;
                    return gaiman.echo_extra("[[;#94E2D5;]12]) Reserve books (if they are on-loan)", 35);
                  case 35:
                    gaiman.echo("");
                    _context63.next = 38;
                    return gaiman.echo_extra("[[;#F9E2AF;]All users (librarians and borrowers):]", 35);
                  case 38:
                    _context63.next = 40;
                    return gaiman.echo_extra("[[;#94E2D5;]13]) Can search for books by ISBN, author, or title", 35);
                  case 40:
                    _context63.next = 42;
                    return gaiman.echo_extra("[[;#94E2D5;]14]) Can browse the system catalogue", 35);
                  case 42:
                    _context63.next = 44;
                    return gaiman.echo_extra("[[;#94E2D5;]15]) The system shall respond to user requests within 3 seconds", 35);
                  case 44:
                    _context63.next = 46;
                    return gaiman.echo_extra("[[;#94E2D5;]16]) The user interface shall be easy-to-use", 35);
                  case 46:
                    gaiman.echo("");
                    _context63.next = 49;
                    return gaiman.echo_extra("[[;#F9E2AF;]You have been assigned the checklist entry that requires you to review the specification for inconsistencies between individual requirements (i.e., conflicts between requirements).]", 35);
                  case 49:
                    gaiman.echo("");
                    _context63.next = 52;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following CORRECTLY identifies inconsistencies between pairs of requirements?.]", 35);
                  case 52:
                    gaiman.echo("");
                    _context63.next = 55;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 6-10, 6-15, 7-12", 35);
                  case 55:
                    _context63.next = 57;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 6-15, 9-11", 35);
                  case 57:
                    _context63.next = 59;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 6-10, 6-15, 9-11", 35);
                  case 59:
                    _context63.next = 61;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 6-15, 7-12", 35);
                  case 61:
                    gaiman.echo("");
                    _context63.next = 64;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 64:
                    $_answer = _context63.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context63.next = 71;
                      break;
                    }
                    _context63.next = 69;
                    return $_istqbuster_b_19();
                  case 69:
                    _context63.next = 91;
                    break;
                  case 71:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context63.next = 77;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context63.next = 75;
                    return $_istqbuster_b_19();
                  case 75:
                    _context63.next = 91;
                    break;
                  case 77:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context63.next = 82;
                      break;
                    }
                    _context63.next = 80;
                    return $_istqbuster_b_19();
                  case 80:
                    _context63.next = 91;
                    break;
                  case 82:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context63.next = 87;
                      break;
                    }
                    _context63.next = 85;
                    return $_istqbuster_b_19();
                  case 85:
                    _context63.next = 91;
                    break;
                  case 87:
                    _context63.next = 89;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 89:
                    _context63.next = 91;
                    return $_istqbuster_b_18();
                  case 91:
                  case "end":
                    return _context63.stop();
                }
              }, _callee63);
            }));
            return _$_istqbuster_b_18.apply(this, arguments);
          };
          $_istqbuster_b_18 = function _$_istqbuster_b_75() {
            return _$_istqbuster_b_18.apply(this, arguments);
          };
          _$_istqbuster_b_17 = function _$_istqbuster_b_74() {
            _$_istqbuster_b_17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                while (1) switch (_context62.prev = _context62.next) {
                  case 0:
                    gaiman.echo("");
                    _context62.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #17]", 35);
                  case 3:
                    _context62.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]The reviews being used in your organization have the following attributes:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context62.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) There is a role of a scribe", 35);
                  case 8:
                    _context62.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) The purpose is to detect potential defects", 35);
                  case 10:
                    _context62.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) The review meeting is led by the author", 35);
                  case 12:
                    _context62.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Reviewers find potential defects by individual review", 35);
                  case 14:
                    _context62.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) A review report is produced", 35);
                  case 16:
                    gaiman.echo("");
                    _context62.next = 19;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following review types is MOST likely being used?]", 35);
                  case 19:
                    gaiman.echo("");
                    _context62.next = 22;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Informal Review", 35);
                  case 22:
                    _context62.next = 24;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Walkthrough", 35);
                  case 24:
                    _context62.next = 26;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Technical Review", 35);
                  case 26:
                    _context62.next = 28;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Inspection", 35);
                  case 28:
                    gaiman.echo("");
                    _context62.next = 31;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 31:
                    $_answer = _context62.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context62.next = 38;
                      break;
                    }
                    _context62.next = 36;
                    return $_istqbuster_b_18();
                  case 36:
                    _context62.next = 58;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context62.next = 44;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context62.next = 42;
                    return $_istqbuster_b_18();
                  case 42:
                    _context62.next = 58;
                    break;
                  case 44:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context62.next = 49;
                      break;
                    }
                    _context62.next = 47;
                    return $_istqbuster_b_18();
                  case 47:
                    _context62.next = 58;
                    break;
                  case 49:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context62.next = 54;
                      break;
                    }
                    _context62.next = 52;
                    return $_istqbuster_b_18();
                  case 52:
                    _context62.next = 58;
                    break;
                  case 54:
                    _context62.next = 56;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 56:
                    _context62.next = 58;
                    return $_istqbuster_b_17();
                  case 58:
                  case "end":
                    return _context62.stop();
                }
              }, _callee62);
            }));
            return _$_istqbuster_b_17.apply(this, arguments);
          };
          $_istqbuster_b_17 = function _$_istqbuster_b_73() {
            return _$_istqbuster_b_17.apply(this, arguments);
          };
          _$_istqbuster_b_16 = function _$_istqbuster_b_72() {
            _$_istqbuster_b_16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                while (1) switch (_context61.prev = _context61.next) {
                  case 0:
                    gaiman.echo("");
                    _context61.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #16]", 35);
                  case 3:
                    _context61.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following CORRECTLY matches the roles and responsibilities in a formal review?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context61.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Manager \u2013 Decides on the execution of reviews", 35);
                  case 8:
                    _context61.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Review Leader - Ensures effective running of review meetings", 35);
                  case 10:
                    _context61.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Scribe \u2013 Fixes defects in the work product under review", 35);
                  case 12:
                    _context61.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Moderator \u2013 Monitors ongoing cost-effectiveness", 35);
                  case 14:
                    gaiman.echo("");
                    _context61.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context61.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context61.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context61.next = 23;
                    return $_istqbuster_b_17();
                  case 23:
                    _context61.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context61.next = 30;
                      break;
                    }
                    _context61.next = 28;
                    return $_istqbuster_b_17();
                  case 28:
                    _context61.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context61.next = 35;
                      break;
                    }
                    _context61.next = 33;
                    return $_istqbuster_b_17();
                  case 33:
                    _context61.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context61.next = 40;
                      break;
                    }
                    _context61.next = 38;
                    return $_istqbuster_b_17();
                  case 38:
                    _context61.next = 44;
                    break;
                  case 40:
                    _context61.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context61.next = 44;
                    return $_istqbuster_b_16();
                  case 44:
                  case "end":
                    return _context61.stop();
                }
              }, _callee61);
            }));
            return _$_istqbuster_b_16.apply(this, arguments);
          };
          $_istqbuster_b_16 = function _$_istqbuster_b_71() {
            return _$_istqbuster_b_16.apply(this, arguments);
          };
          _$_istqbuster_b_15 = function _$_istqbuster_b_70() {
            _$_istqbuster_b_15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                while (1) switch (_context60.prev = _context60.next) {
                  case 0:
                    gaiman.echo("");
                    _context60.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #15]", 35);
                  case 3:
                    _context60.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements on the use of checklists in a formal review is CORRECT?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context60.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) As part of the review planning, the reviewers create the checklists needed for the review", 35);
                  case 8:
                    _context60.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) As part of the issue communication, the reviewers fill in the checklists provided for the review", 35);
                  case 10:
                    _context60.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) As part of the review meeting, the reviewers create defect reports based on the checklists provided for the review", 35);
                  case 12:
                    _context60.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) As part of the review initiation, the reviewers receive the checklists needed for the review", 35);
                  case 14:
                    gaiman.echo("");
                    _context60.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context60.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context60.next = 24;
                      break;
                    }
                    _context60.next = 22;
                    return $_istqbuster_b_16();
                  case 22:
                    _context60.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context60.next = 29;
                      break;
                    }
                    _context60.next = 27;
                    return $_istqbuster_b_16();
                  case 27:
                    _context60.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context60.next = 34;
                      break;
                    }
                    _context60.next = 32;
                    return $_istqbuster_b_16();
                  case 32:
                    _context60.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context60.next = 40;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context60.next = 38;
                    return $_istqbuster_b_16();
                  case 38:
                    _context60.next = 44;
                    break;
                  case 40:
                    _context60.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context60.next = 44;
                    return $_istqbuster_b_15();
                  case 44:
                  case "end":
                    return _context60.stop();
                }
              }, _callee60);
            }));
            return _$_istqbuster_b_15.apply(this, arguments);
          };
          $_istqbuster_b_15 = function _$_istqbuster_b_69() {
            return _$_istqbuster_b_15.apply(this, arguments);
          };
          _$_istqbuster_b_14 = function _$_istqbuster_b_68() {
            _$_istqbuster_b_14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                while (1) switch (_context59.prev = _context59.next) {
                  case 0:
                    gaiman.echo("");
                    _context59.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #14]", 35);
                  case 3:
                    _context59.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements CORRECTLY reflects the value of static testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context59.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) By introducing reviews, we have found that both the quality of specifications and the time required for development and testing have increased", 35);
                  case 8:
                    _context59.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Using static testing means we have better control and cheaper defect management due to the ease of detecting defects later in the lifecycle", 35);
                  case 10:
                    _context59.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Now that we require the use of static analysis, missed requirements have decreased and communication between testers and developers has improved", 35);
                  case 12:
                    _context59.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Since we started using static analysis, we find coding defects that might have not been found by performing only dynamic testing", 35);
                  case 14:
                    gaiman.echo("");
                    _context59.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context59.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context59.next = 24;
                      break;
                    }
                    _context59.next = 22;
                    return $_istqbuster_b_15();
                  case 22:
                    _context59.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context59.next = 29;
                      break;
                    }
                    _context59.next = 27;
                    return $_istqbuster_b_15();
                  case 27:
                    _context59.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context59.next = 34;
                      break;
                    }
                    _context59.next = 32;
                    return $_istqbuster_b_15();
                  case 32:
                    _context59.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context59.next = 40;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context59.next = 38;
                    return $_istqbuster_b_15();
                  case 38:
                    _context59.next = 44;
                    break;
                  case 40:
                    _context59.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context59.next = 44;
                    return $_istqbuster_b_14();
                  case 44:
                  case "end":
                    return _context59.stop();
                }
              }, _callee59);
            }));
            return _$_istqbuster_b_14.apply(this, arguments);
          };
          $_istqbuster_b_14 = function _$_istqbuster_b_67() {
            return _$_istqbuster_b_14.apply(this, arguments);
          };
          _$_istqbuster_b_13 = function _$_istqbuster_b_66() {
            _$_istqbuster_b_13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                while (1) switch (_context58.prev = _context58.next) {
                  case 0:
                    gaiman.echo("");
                    _context58.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #13]", 35);
                  case 3:
                    _context58.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements BEST compares the purposes of confirmation testing and regression testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context58.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Impact analysis is used when deciding if a fix to a maintained system is worthwhile", 35);
                  case 8:
                    _context58.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Impact analysis is used to identify how data should be migrated into the maintained system", 35);
                  case 10:
                    _context58.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Impact analysis is used to decide which hot fixes are of most value to the user", 35);
                  case 12:
                    _context58.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Impact analysis is used to determine the effectiveness of new maintenance test cases", 35);
                  case 14:
                    gaiman.echo("");
                    _context58.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context58.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context58.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context58.next = 23;
                    return $_istqbuster_b_14();
                  case 23:
                    _context58.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context58.next = 30;
                      break;
                    }
                    _context58.next = 28;
                    return $_istqbuster_b_14();
                  case 28:
                    _context58.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context58.next = 35;
                      break;
                    }
                    _context58.next = 33;
                    return $_istqbuster_b_14();
                  case 33:
                    _context58.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context58.next = 40;
                      break;
                    }
                    _context58.next = 38;
                    return $_istqbuster_b_14();
                  case 38:
                    _context58.next = 44;
                    break;
                  case 40:
                    _context58.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context58.next = 44;
                    return $_istqbuster_b_13();
                  case 44:
                  case "end":
                    return _context58.stop();
                }
              }, _callee58);
            }));
            return _$_istqbuster_b_13.apply(this, arguments);
          };
          $_istqbuster_b_13 = function _$_istqbuster_b_65() {
            return _$_istqbuster_b_13.apply(this, arguments);
          };
          _$_istqbuster_b_12 = function _$_istqbuster_b_64() {
            _$_istqbuster_b_12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                while (1) switch (_context57.prev = _context57.next) {
                  case 0:
                    gaiman.echo("");
                    _context57.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #12]", 35);
                  case 3:
                    _context57.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements BEST compares the purposes of confirmation testing and regression testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context57.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The purpose of regression testing is to ensure that all previously run tests still work correctly, while the purpose of confirmation testing is to ensure that any fixes made to one part of the system have not adversely affected other parts", 35);
                  case 8:
                    _context57.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The purpose of confirmation testing is to check that a previously found defect has been fixed, while the purpose of regression testing is to ensure that no other parts of the system have been adversely affected by the fix", 35);
                  case 10:
                    _context57.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The purpose of regression testing is to ensure that any changes to one part of the system have not caused another part to fail, while the purpose of confirmation testing is to check that all previously run tests still provide the same results as before", 35);
                  case 12:
                    _context57.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The purpose of confirmation testing is to confirm that changes to the system were made successfully, while the purpose of regression testing is to run tests that previously failed to ensure that they now work correctly", 35);
                  case 14:
                    gaiman.echo("");
                    _context57.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context57.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context57.next = 24;
                      break;
                    }
                    _context57.next = 22;
                    return $_istqbuster_b_13();
                  case 22:
                    _context57.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context57.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context57.next = 28;
                    return $_istqbuster_b_13();
                  case 28:
                    _context57.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context57.next = 35;
                      break;
                    }
                    _context57.next = 33;
                    return $_istqbuster_b_13();
                  case 33:
                    _context57.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context57.next = 40;
                      break;
                    }
                    _context57.next = 38;
                    return $_istqbuster_b_13();
                  case 38:
                    _context57.next = 44;
                    break;
                  case 40:
                    _context57.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context57.next = 44;
                    return $_istqbuster_b_12();
                  case 44:
                  case "end":
                    return _context57.stop();
                }
              }, _callee57);
            }));
            return _$_istqbuster_b_12.apply(this, arguments);
          };
          $_istqbuster_b_12 = function _$_istqbuster_b_63() {
            return _$_istqbuster_b_12.apply(this, arguments);
          };
          _$_istqbuster_b_11 = function _$_istqbuster_b_62() {
            _$_istqbuster_b_11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                while (1) switch (_context56.prev = _context56.next) {
                  case 0:
                    gaiman.echo("");
                    _context56.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #11]", 35);
                  case 3:
                    _context56.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements about test types and test levels is CORRECT?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context56.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Functional and non-functional testing can be performed at system and acceptance test levels, while white-box testing is restricted to component and integration testing", 35);
                  case 8:
                    _context56.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Functional testing can be performed at any test level, while white-box testing is restricted to component testing", 35);
                  case 10:
                    _context56.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) It is possible to perform functional, non-functional and white-box testing at any test level", 35);
                  case 12:
                    _context56.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Functional and non-functional testing can be performed at any test level, while white-box testing is restricted to component and integration testing", 35);
                  case 14:
                    gaiman.echo("");
                    _context56.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context56.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context56.next = 24;
                      break;
                    }
                    _context56.next = 22;
                    return $_istqbuster_b_12();
                  case 22:
                    _context56.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context56.next = 29;
                      break;
                    }
                    _context56.next = 27;
                    return $_istqbuster_b_12();
                  case 27:
                    _context56.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context56.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context56.next = 33;
                    return $_istqbuster_b_12();
                  case 33:
                    _context56.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context56.next = 40;
                      break;
                    }
                    _context56.next = 38;
                    return $_istqbuster_b_12();
                  case 38:
                    _context56.next = 44;
                    break;
                  case 40:
                    _context56.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context56.next = 44;
                    return $_istqbuster_b_11();
                  case 44:
                  case "end":
                    return _context56.stop();
                }
              }, _callee56);
            }));
            return _$_istqbuster_b_11.apply(this, arguments);
          };
          $_istqbuster_b_11 = function _$_istqbuster_b_61() {
            return _$_istqbuster_b_11.apply(this, arguments);
          };
          _$_istqbuster_b_10 = function _$_istqbuster_b_60() {
            _$_istqbuster_b_10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                while (1) switch (_context55.prev = _context55.next) {
                  case 0:
                    gaiman.echo("");
                    _context55.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #10]", 35);
                  case 3:
                    _context55.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following statements about the relationships between software development activities and test activities in the software development lifecycle:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context55.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Based on interface specifications", 35);
                  case 8:
                    _context55.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) Focused on finding failures in communication", 35);
                  case 10:
                    _context55.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]\u2022]) The test approach uses both functional and structural test types", 35);
                  case 12:
                    gaiman.echo("");
                    _context55.next = 15;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following test levels is MOST likely being performed?]", 35);
                  case 15:
                    gaiman.echo("");
                    _context55.next = 18;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Integration testing", 35);
                  case 18:
                    _context55.next = 20;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Acceptance testing", 35);
                  case 20:
                    _context55.next = 22;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) System testing", 35);
                  case 22:
                    _context55.next = 24;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Component testing", 35);
                  case 24:
                    gaiman.echo("");
                    _context55.next = 27;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 27:
                    $_answer = _context55.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context55.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context55.next = 33;
                    return $_istqbuster_b_11();
                  case 33:
                    _context55.next = 54;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context55.next = 40;
                      break;
                    }
                    _context55.next = 38;
                    return $_istqbuster_b_11();
                  case 38:
                    _context55.next = 54;
                    break;
                  case 40:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context55.next = 45;
                      break;
                    }
                    _context55.next = 43;
                    return $_istqbuster_b_11();
                  case 43:
                    _context55.next = 54;
                    break;
                  case 45:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context55.next = 50;
                      break;
                    }
                    _context55.next = 48;
                    return $_istqbuster_b_11();
                  case 48:
                    _context55.next = 54;
                    break;
                  case 50:
                    _context55.next = 52;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 52:
                    _context55.next = 54;
                    return $_istqbuster_b_10();
                  case 54:
                  case "end":
                    return _context55.stop();
                }
              }, _callee55);
            }));
            return _$_istqbuster_b_10.apply(this, arguments);
          };
          $_istqbuster_b_10 = function _$_istqbuster_b_59() {
            return _$_istqbuster_b_10.apply(this, arguments);
          };
          _$_istqbuster_b_9 = function _$_istqbuster_b_58() {
            _$_istqbuster_b_9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                while (1) switch (_context54.prev = _context54.next) {
                  case 0:
                    gaiman.echo("");
                    _context54.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #9]", 35);
                  case 3:
                    _context54.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following statements about the relationships between software development activities and test activities in the software development lifecycle:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context54.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Each development activity should have a corresponding testing activity", 35);
                  case 8:
                    _context54.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) Reviewing should start as soon as final versions of documents become available", 35);
                  case 10:
                    _context54.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) The design and implementation of tests should start during the corresponding development activity", 35);
                  case 12:
                    _context54.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Testing activities should start in the early stages of the software development lifecycle", 35);
                  case 14:
                    gaiman.echo("");
                    _context54.next = 17;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following CORRECTLY shows which are true and false?]", 35);
                  case 17:
                    gaiman.echo("");
                    _context54.next = 20;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) True \u2013 1, 2; False \u2013 3, 4", 35);
                  case 20:
                    _context54.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) True \u2013 2, 3; False \u2013 1, 4", 35);
                  case 22:
                    _context54.next = 24;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) True \u2013 1, 2, 4; False \u2013 3", 35);
                  case 24:
                    _context54.next = 26;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) True \u2013 1, 4; False \u2013 2, 3", 35);
                  case 26:
                    gaiman.echo("");
                    _context54.next = 29;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 29:
                    $_answer = _context54.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context54.next = 36;
                      break;
                    }
                    _context54.next = 34;
                    return $_istqbuster_b_10();
                  case 34:
                    _context54.next = 56;
                    break;
                  case 36:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context54.next = 41;
                      break;
                    }
                    _context54.next = 39;
                    return $_istqbuster_b_10();
                  case 39:
                    _context54.next = 56;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context54.next = 46;
                      break;
                    }
                    _context54.next = 44;
                    return $_istqbuster_b_10();
                  case 44:
                    _context54.next = 56;
                    break;
                  case 46:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context54.next = 52;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context54.next = 50;
                    return $_istqbuster_b_10();
                  case 50:
                    _context54.next = 56;
                    break;
                  case 52:
                    _context54.next = 54;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 54:
                    _context54.next = 56;
                    return $_istqbuster_b_9();
                  case 56:
                  case "end":
                    return _context54.stop();
                }
              }, _callee54);
            }));
            return _$_istqbuster_b_9.apply(this, arguments);
          };
          $_istqbuster_b_9 = function _$_istqbuster_b_57() {
            return _$_istqbuster_b_9.apply(this, arguments);
          };
          _$_istqbuster_b_8 = function _$_istqbuster_b_56() {
            _$_istqbuster_b_8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                while (1) switch (_context53.prev = _context53.next) {
                  case 0:
                    gaiman.echo("");
                    _context53.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #8]", 35);
                  case 3:
                    _context53.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following qualities is MORE likely to be found in a tester\u2019s mindset rather than in adeveloper\u2019s?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context53.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A tester \u0301s mindset tends to grow and mature as the tester gains experience", 35);
                  case 8:
                    _context53.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Ability to see what might go wrong", 35);
                  case 10:
                    _context53.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Good communication with team members", 35);
                  case 12:
                    _context53.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Focus on getting all things done", 35);
                  case 14:
                    gaiman.echo("");
                    _context53.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context53.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context53.next = 24;
                      break;
                    }
                    _context53.next = 22;
                    return $_istqbuster_b_9();
                  case 22:
                    _context53.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context53.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context53.next = 28;
                    return $_istqbuster_b_9();
                  case 28:
                    _context53.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context53.next = 35;
                      break;
                    }
                    _context53.next = 33;
                    return $_istqbuster_b_9();
                  case 33:
                    _context53.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context53.next = 40;
                      break;
                    }
                    _context53.next = 38;
                    return $_istqbuster_b_9();
                  case 38:
                    _context53.next = 44;
                    break;
                  case 40:
                    _context53.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context53.next = 44;
                    return $_istqbuster_b_8();
                  case 44:
                  case "end":
                    return _context53.stop();
                }
              }, _callee53);
            }));
            return _$_istqbuster_b_8.apply(this, arguments);
          };
          $_istqbuster_b_8 = function _$_istqbuster_b_55() {
            return _$_istqbuster_b_8.apply(this, arguments);
          };
          _$_istqbuster_b_7 = function _$_istqbuster_b_54() {
            _$_istqbuster_b_7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                while (1) switch (_context52.prev = _context52.next) {
                  case 0:
                    gaiman.echo("");
                    _context52.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #7]", 35);
                  case 3:
                    _context52.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following BEST describes how value is added by maintaining traceability between the test basis and test artifacts?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context52.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Maintenance testing can be fully automated based on changes to the initial requirements", 35);
                  case 8:
                    _context52.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) It is possible to determine if a new test case has increased coverage of the requirements", 35);
                  case 10:
                    _context52.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Test managers can identify which testers found the highest severity defects", 35);
                  case 12:
                    _context52.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Areas that may be impacted by side-effects of a change can be targeted by confirmation testing", 35);
                  case 14:
                    gaiman.echo("");
                    _context52.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context52.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context52.next = 24;
                      break;
                    }
                    _context52.next = 22;
                    return $_istqbuster_b_8();
                  case 22:
                    _context52.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context52.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context52.next = 28;
                    return $_istqbuster_b_8();
                  case 28:
                    _context52.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context52.next = 35;
                      break;
                    }
                    _context52.next = 33;
                    return $_istqbuster_b_8();
                  case 33:
                    _context52.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context52.next = 40;
                      break;
                    }
                    _context52.next = 38;
                    return $_istqbuster_b_8();
                  case 38:
                    _context52.next = 44;
                    break;
                  case 40:
                    _context52.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context52.next = 44;
                    return $_istqbuster_b_7();
                  case 44:
                  case "end":
                    return _context52.stop();
                }
              }, _callee52);
            }));
            return _$_istqbuster_b_7.apply(this, arguments);
          };
          $_istqbuster_b_7 = function _$_istqbuster_b_53() {
            return _$_istqbuster_b_7.apply(this, arguments);
          };
          _$_istqbuster_b_6 = function _$_istqbuster_b_52() {
            _$_istqbuster_b_6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                while (1) switch (_context51.prev = _context51.next) {
                  case 0:
                    gaiman.echo("");
                    _context51.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #6]", 35);
                  case 3:
                    _context51.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Given the following test activities and tasks:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context51.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]A]) Test design", 35);
                  case 8:
                    _context51.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]B]) Test implementation", 35);
                  case 10:
                    _context51.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]C]) Test execution", 35);
                  case 12:
                    _context51.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]D]) Test completion", 35);
                  case 14:
                    gaiman.echo("");
                    _context51.next = 17;
                    return gaiman.echo_extra("[[;#A6E3A1;]1]) Entering change requests for open defect reports", 35);
                  case 17:
                    _context51.next = 19;
                    return gaiman.echo_extra("[[;#A6E3A1;]2]) Identifying test data to support the test cases", 35);
                  case 19:
                    _context51.next = 21;
                    return gaiman.echo_extra("[[;#A6E3A1;]3]) Prioritizing test procedures and creating test data", 35);
                  case 21:
                    _context51.next = 23;
                    return gaiman.echo_extra("[[;#A6E3A1;]4]) Analyzing discrepancies to determine their cause", 35);
                  case 23:
                    gaiman.echo("");
                    _context51.next = 26;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A-2, B-3, C-4, D-1", 35);
                  case 26:
                    _context51.next = 28;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A-2, B-1, C-3, D-4", 35);
                  case 28:
                    _context51.next = 30;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) A-3, B-2, C-4, D-1", 35);
                  case 30:
                    _context51.next = 32;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) A-3, B-2, C-1, D-4", 35);
                  case 32:
                    gaiman.echo("");
                    _context51.next = 35;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 35:
                    $_answer = _context51.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context51.next = 43;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context51.next = 41;
                    return $_istqbuster_b_7();
                  case 41:
                    _context51.next = 62;
                    break;
                  case 43:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context51.next = 48;
                      break;
                    }
                    _context51.next = 46;
                    return $_istqbuster_b_7();
                  case 46:
                    _context51.next = 62;
                    break;
                  case 48:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context51.next = 53;
                      break;
                    }
                    _context51.next = 51;
                    return $_istqbuster_b_7();
                  case 51:
                    _context51.next = 62;
                    break;
                  case 53:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context51.next = 58;
                      break;
                    }
                    _context51.next = 56;
                    return $_istqbuster_b_7();
                  case 56:
                    _context51.next = 62;
                    break;
                  case 58:
                    _context51.next = 60;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 60:
                    _context51.next = 62;
                    return $_istqbuster_b_6();
                  case 62:
                  case "end":
                    return _context51.stop();
                }
              }, _callee51);
            }));
            return _$_istqbuster_b_6.apply(this, arguments);
          };
          $_istqbuster_b_6 = function _$_istqbuster_b_51() {
            return _$_istqbuster_b_6.apply(this, arguments);
          };
          _$_istqbuster_b_5 = function _$_istqbuster_b_50() {
            _$_istqbuster_b_5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                while (1) switch (_context50.prev = _context50.next) {
                  case 0:
                    gaiman.echo("");
                    _context50.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #5]", 35);
                  case 3:
                    _context50.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]As a result of risk analysis, more testing is being directed to those areas of the system under test where initial testing found more defects than average.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context50.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following testing principles is being applied?]", 35);
                  case 8:
                    gaiman.echo("");
                    _context50.next = 11;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Because the author of the requirements was unfamiliar with the domain of fitness training, he therefore wrongly assumed that users wanted heartbeat in beats per hour", 35);
                  case 11:
                    _context50.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The tester of the smartphone interface had not been trained in state transition testing, so missed a major defect", 35);
                  case 13:
                    _context50.next = 15;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) An incorrect configuration variable implemented for the GPS function could cause location problems during daylight saving times", 35);
                  case 15:
                    _context50.next = 17;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Because the designer had never worked on wearable devices before, she as designer of the user interface therefore misunderstood the effects of reflected sunlight", 35);
                  case 17:
                    gaiman.echo("");
                    _context50.next = 20;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 20:
                    $_answer = _context50.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context50.next = 27;
                      break;
                    }
                    _context50.next = 25;
                    return $_istqbuster_b_6();
                  case 25:
                    _context50.next = 47;
                    break;
                  case 27:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context50.next = 32;
                      break;
                    }
                    _context50.next = 30;
                    return $_istqbuster_b_6();
                  case 30:
                    _context50.next = 47;
                    break;
                  case 32:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context50.next = 37;
                      break;
                    }
                    _context50.next = 35;
                    return $_istqbuster_b_6();
                  case 35:
                    _context50.next = 47;
                    break;
                  case 37:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context50.next = 43;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context50.next = 41;
                    return $_istqbuster_b_6();
                  case 41:
                    _context50.next = 47;
                    break;
                  case 43:
                    _context50.next = 45;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 45:
                    _context50.next = 47;
                    return $_istqbuster_b_5();
                  case 47:
                  case "end":
                    return _context50.stop();
                }
              }, _callee50);
            }));
            return _$_istqbuster_b_5.apply(this, arguments);
          };
          $_istqbuster_b_5 = function _$_istqbuster_b_49() {
            return _$_istqbuster_b_5.apply(this, arguments);
          };
          _$_istqbuster_b_4 = function _$_istqbuster_b_48() {
            _$_istqbuster_b_4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                while (1) switch (_context49.prev = _context49.next) {
                  case 0:
                    gaiman.echo("");
                    _context49.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #4]", 35);
                  case 3:
                    _context49.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a defect rather than a root cause in a fitness tracker?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context49.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Because the author of the requirements was unfamiliar with the domain of fitness training, he therefore wrongly assumed that users wanted heartbeat in beats per hour", 35);
                  case 8:
                    _context49.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The tester of the smartphone interface had not been trained in state transition testing, so missed a major defect", 35);
                  case 10:
                    _context49.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) An incorrect configuration variable implemented for the GPS function could cause location problems during daylight saving times", 35);
                  case 12:
                    _context49.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Because the designer had never worked on wearable devices before, she as designer of the user interface therefore misunderstood the effects of reflected sunlight", 35);
                  case 14:
                    gaiman.echo("");
                    _context49.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context49.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context49.next = 24;
                      break;
                    }
                    _context49.next = 22;
                    return $_istqbuster_b_5();
                  case 22:
                    _context49.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context49.next = 29;
                      break;
                    }
                    _context49.next = 27;
                    return $_istqbuster_b_5();
                  case 27:
                    _context49.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context49.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context49.next = 33;
                    return $_istqbuster_b_5();
                  case 33:
                    _context49.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context49.next = 40;
                      break;
                    }
                    _context49.next = 38;
                    return $_istqbuster_b_5();
                  case 38:
                    _context49.next = 44;
                    break;
                  case 40:
                    _context49.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context49.next = 44;
                    return $_istqbuster_b_4();
                  case 44:
                  case "end":
                    return _context49.stop();
                }
              }, _callee49);
            }));
            return _$_istqbuster_b_4.apply(this, arguments);
          };
          $_istqbuster_b_4 = function _$_istqbuster_b_47() {
            return _$_istqbuster_b_4.apply(this, arguments);
          };
          _$_istqbuster_b_3 = function _$_istqbuster_b_46() {
            _$_istqbuster_b_3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                while (1) switch (_context48.prev = _context48.next) {
                  case 0:
                    gaiman.echo("");
                    _context48.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #3]", 35);
                  case 3:
                    _context48.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is an example of a failure in a car cruise control system?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context48.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The developer of the system forgot to rename variables after a cut-and-paste operation", 35);
                  case 8:
                    _context48.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Unnecessary code that sounds an alarm when reversing was included in the system", 35);
                  case 10:
                    _context48.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The system stops maintaining a set speed when the radio volume is increased or decreased", 35);
                  case 12:
                    _context48.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The design specification for the system wrongly states speeds", 35);
                  case 14:
                    gaiman.echo("");
                    _context48.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context48.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context48.next = 24;
                      break;
                    }
                    _context48.next = 22;
                    return $_istqbuster_b_4();
                  case 22:
                    _context48.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context48.next = 29;
                      break;
                    }
                    _context48.next = 27;
                    return $_istqbuster_b_4();
                  case 27:
                    _context48.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context48.next = 35;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context48.next = 33;
                    return $_istqbuster_b_4();
                  case 33:
                    _context48.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context48.next = 40;
                      break;
                    }
                    _context48.next = 38;
                    return $_istqbuster_b_4();
                  case 38:
                    _context48.next = 44;
                    break;
                  case 40:
                    _context48.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context48.next = 44;
                    return $_istqbuster_b_3();
                  case 44:
                  case "end":
                    return _context48.stop();
                }
              }, _callee48);
            }));
            return _$_istqbuster_b_3.apply(this, arguments);
          };
          $_istqbuster_b_3 = function _$_istqbuster_b_45() {
            return _$_istqbuster_b_3.apply(this, arguments);
          };
          _$_istqbuster_b_2 = function _$_istqbuster_b_44() {
            _$_istqbuster_b_2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                while (1) switch (_context47.prev = _context47.next) {
                  case 0:
                    gaiman.echo("");
                    _context47.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #2]", 35);
                  case 3:
                    _context47.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following is a typical objective of testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context47.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) To find defects and failures", 35);
                  case 8:
                    _context47.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) To validate the project plan works as required", 35);
                  case 10:
                    _context47.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Ensuring of complete testing", 35);
                  case 12:
                    _context47.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Comparing actual results with expected results", 35);
                  case 14:
                    gaiman.echo("");
                    _context47.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context47.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context47.next = 25;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context47.next = 23;
                    return $_istqbuster_b_3();
                  case 23:
                    _context47.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context47.next = 30;
                      break;
                    }
                    _context47.next = 28;
                    return $_istqbuster_b_3();
                  case 28:
                    _context47.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context47.next = 35;
                      break;
                    }
                    _context47.next = 33;
                    return $_istqbuster_b_3();
                  case 33:
                    _context47.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context47.next = 40;
                      break;
                    }
                    _context47.next = 38;
                    return $_istqbuster_b_3();
                  case 38:
                    _context47.next = 44;
                    break;
                  case 40:
                    _context47.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context47.next = 44;
                    return $_istqbuster_b_2();
                  case 44:
                  case "end":
                    return _context47.stop();
                }
              }, _callee47);
            }));
            return _$_istqbuster_b_2.apply(this, arguments);
          };
          $_istqbuster_b_2 = function _$_istqbuster_b_43() {
            return _$_istqbuster_b_2.apply(this, arguments);
          };
          _$_istqbuster_b_ = function _$_istqbuster_b_42() {
            _$_istqbuster_b_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                while (1) switch (_context46.prev = _context46.next) {
                  case 0:
                    gaiman.echo("");
                    _context46.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #1]", 35);
                  case 3:
                    _context46.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following provides the definition of the term test case?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context46.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Subset of the value domain of a variable within a component or system in which all values are expected to be treated the same based on the specification", 35);
                  case 8:
                    _context46.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A set of preconditions, inputs, actions, expected results and post conditions, developed based on test conditions", 35);
                  case 10:
                    _context46.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Work products produced during the test process for use in planning, designing, executing, evaluating, and reporting on testing", 35);
                  case 12:
                    _context46.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) A source to determine an expected result to compare with the actual result of the system under test", 35);
                  case 14:
                    gaiman.echo("");
                    _context46.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context46.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context46.next = 24;
                      break;
                    }
                    _context46.next = 22;
                    return $_istqbuster_b_2();
                  case 22:
                    _context46.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context46.next = 30;
                      break;
                    }
                    $_istqbuster_b_score += 1;
                    _context46.next = 28;
                    return $_istqbuster_b_2();
                  case 28:
                    _context46.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context46.next = 35;
                      break;
                    }
                    _context46.next = 33;
                    return $_istqbuster_b_2();
                  case 33:
                    _context46.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context46.next = 40;
                      break;
                    }
                    _context46.next = 38;
                    return $_istqbuster_b_2();
                  case 38:
                    _context46.next = 44;
                    break;
                  case 40:
                    _context46.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context46.next = 44;
                    return $_istqbuster_b_1();
                  case 44:
                  case "end":
                    return _context46.stop();
                }
              }, _callee46);
            }));
            return _$_istqbuster_b_.apply(this, arguments);
          };
          $_istqbuster_b_1 = function _$_istqbuster_b_41() {
            return _$_istqbuster_b_.apply(this, arguments);
          };
          _$_istqbuster_a_40 = function _$_istqbuster_a_120() {
            _$_istqbuster_a_40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                while (1) switch (_context45.prev = _context45.next) {
                  case 0:
                    gaiman.echo("");
                    _context45.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #40]", 35);
                  case 3:
                    _context45.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following test tools is mostly suitable for developers rather than testers?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context45.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Requirement management tools", 35);
                  case 8:
                    _context45.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Configuration management tools", 35);
                  case 10:
                    _context45.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Static analysis tools", 35);
                  case 12:
                    _context45.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Performance testing tools", 35);
                  case 14:
                    gaiman.echo("");
                    _context45.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context45.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context45.next = 24;
                      break;
                    }
                    _context45.next = 22;
                    return $_istqbuster_result_a();
                  case 22:
                    _context45.next = 45;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context45.next = 29;
                      break;
                    }
                    _context45.next = 27;
                    return $_istqbuster_result_a();
                  case 27:
                    _context45.next = 45;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context45.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context45.next = 33;
                    return $_istqbuster_result_a();
                  case 33:
                    _context45.next = 45;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context45.next = 41;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context45.next = 39;
                    return $_istqbuster_result_a();
                  case 39:
                    _context45.next = 45;
                    break;
                  case 41:
                    _context45.next = 43;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 43:
                    _context45.next = 45;
                    return $_istqbuster_a_39();
                  case 45:
                  case "end":
                    return _context45.stop();
                }
              }, _callee45);
            }));
            return _$_istqbuster_a_40.apply(this, arguments);
          };
          $_istqbuster_a_40 = function _$_istqbuster_a_119() {
            return _$_istqbuster_a_40.apply(this, arguments);
          };
          _$_istqbuster_a_39 = function _$_istqbuster_a_118() {
            _$_istqbuster_a_39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                while (1) switch (_context44.prev = _context44.next) {
                  case 0:
                    gaiman.echo("");
                    _context44.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #39]", 35);
                  case 3:
                    _context44.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following is MOST likely to be a benefit of test execution tools?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context44.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) It is easy to create regression tests", 35);
                  case 8:
                    _context44.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) It is easy to maintain version control of test assets", 35);
                  case 10:
                    _context44.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) It is easy to design tests for security testing", 35);
                  case 12:
                    _context44.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) It is easy to run regression tests", 35);
                  case 14:
                    gaiman.echo("");
                    _context44.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context44.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context44.next = 24;
                      break;
                    }
                    _context44.next = 22;
                    return $_istqbuster_a_40();
                  case 22:
                    _context44.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context44.next = 29;
                      break;
                    }
                    _context44.next = 27;
                    return $_istqbuster_a_40();
                  case 27:
                    _context44.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context44.next = 34;
                      break;
                    }
                    _context44.next = 32;
                    return $_istqbuster_a_40();
                  case 32:
                    _context44.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context44.next = 40;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context44.next = 38;
                    return $_istqbuster_a_40();
                  case 38:
                    _context44.next = 44;
                    break;
                  case 40:
                    _context44.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context44.next = 44;
                    return $_istqbuster_a_39();
                  case 44:
                  case "end":
                    return _context44.stop();
                }
              }, _callee44);
            }));
            return _$_istqbuster_a_39.apply(this, arguments);
          };
          $_istqbuster_a_39 = function _$_istqbuster_a_117() {
            return _$_istqbuster_a_39.apply(this, arguments);
          };
          _$_istqbuster_a_38 = function _$_istqbuster_a_116() {
            _$_istqbuster_a_38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                while (1) switch (_context43.prev = _context43.next) {
                  case 0:
                    gaiman.echo("");
                    _context43.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #38]", 35);
                  case 3:
                    _context43.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You are testing a new version of software for a coffee machine. The machine can prepare different types of coffee based on four categories. i.e., coffee size, sugar, milk, and syrup. The criteria are as follows:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context43.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Coffee size (small, medium, large)", 35);
                  case 8:
                    _context43.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Sugar (none, 2 unit, 2 units, 3 units, 4 units)", 35);
                  case 10:
                    _context43.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Milk (yes or no)", 35);
                  case 12:
                    _context43.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Coffee flavor syrup (no syrup, caramel, hazelnut, vanilla)", 35);
                  case 14:
                    gaiman.echo("");
                    _context43.next = 17;
                    return gaiman.echo_extra("[[;#F9E2AF;]Now you are writing a defect report with the following information:]", 35);
                  case 17:
                    gaiman.echo("");
                    _context43.next = 20;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Title: Low coffee temperature.", 35);
                  case 20:
                    _context43.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Short summary: When you select coffee with milk, the time for preparing coffee is too long and the temperature of the beverage is too low (less than 40 \xB0C)", 35);
                  case 22:
                    _context43.next = 24;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Expected result: The temperature of coffee should be standard (about 75 \xB0C).", 35);
                  case 24:
                    _context43.next = 26;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Degree of risk: Medium", 35);
                  case 26:
                    _context43.next = 28;
                    return gaiman.echo_extra("[[;#94E2D5;]-] Priority: Normal", 35);
                  case 28:
                    gaiman.echo("");
                    _context43.next = 31;
                    return gaiman.echo_extra("[[;#F9E2AF;]What valuable information was omitted in the above defect report?:]", 35);
                  case 31:
                    gaiman.echo("");
                    _context43.next = 34;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The actual test results", 35);
                  case 34:
                    _context43.next = 36;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Identification of the tested software version", 35);
                  case 36:
                    _context43.next = 38;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Status of the defect", 35);
                  case 38:
                    _context43.next = 40;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Ideas for improving the test case", 35);
                  case 40:
                    gaiman.echo("");
                    _context43.next = 43;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 43:
                    $_answer = _context43.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context43.next = 50;
                      break;
                    }
                    _context43.next = 48;
                    return $_istqbuster_a_39();
                  case 48:
                    _context43.next = 70;
                    break;
                  case 50:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context43.next = 56;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context43.next = 54;
                    return $_istqbuster_a_39();
                  case 54:
                    _context43.next = 70;
                    break;
                  case 56:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context43.next = 61;
                      break;
                    }
                    _context43.next = 59;
                    return $_istqbuster_a_39();
                  case 59:
                    _context43.next = 70;
                    break;
                  case 61:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context43.next = 66;
                      break;
                    }
                    _context43.next = 64;
                    return $_istqbuster_a_39();
                  case 64:
                    _context43.next = 70;
                    break;
                  case 66:
                    _context43.next = 68;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 68:
                    _context43.next = 70;
                    return $_istqbuster_a_38();
                  case 70:
                  case "end":
                    return _context43.stop();
                }
              }, _callee43);
            }));
            return _$_istqbuster_a_38.apply(this, arguments);
          };
          $_istqbuster_a_38 = function _$_istqbuster_a_115() {
            return _$_istqbuster_a_38.apply(this, arguments);
          };
          _$_istqbuster_a_37 = function _$_istqbuster_a_114() {
            _$_istqbuster_a_37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                while (1) switch (_context42.prev = _context42.next) {
                  case 0:
                    gaiman.echo("");
                    _context42.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #37]", 35);
                  case 3:
                    _context42.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]As a test manager you are responsible for testing the following parts of requirements:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context42.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]R1]-Process anomalies", 35);
                  case 8:
                    _context42.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]R2]-Synchronization", 35);
                  case 10:
                    _context42.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]R3]-Approval", 35);
                  case 12:
                    _context42.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]R4]-Problem solving", 35);
                  case 14:
                    _context42.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]R5]-Financial data", 35);
                  case 16:
                    _context42.next = 18;
                    return gaiman.echo_extra("[[;#94E2D5;]R6]-Diagram data", 35);
                  case 18:
                    _context42.next = 20;
                    return gaiman.echo_extra("[[;#94E2D5;]R7]-Changes to the user profile", 35);
                  case 20:
                    gaiman.echo("");
                    _context42.next = 23;
                    return gaiman.echo_extra("[[;#F9E2AF;]Notation: Logical requirement dependencies (A -> B means, that B depends on A):]", 35);
                  case 23:
                    gaiman.echo("");
                    gaiman.echo("             +----+");
                    gaiman.echo("   +-------->| R3 |");
                    gaiman.echo("   |         +----+");
                    gaiman.echo("   |            |");
                    gaiman.echo("+----+          v");
                    gaiman.echo("| R1 |     +---------+   +----+");
                    gaiman.echo("|    | --> |   R2    |-->| R4 |");
                    gaiman.echo("|    |     |  _||_   |   +----+");
                    gaiman.echo("|    |     | |    |  |");
                    gaiman.echo("|    |     | V    V  |   +----+");
                    gaiman.echo("|    |     | R5   R6 |-->| R7 |");
                    gaiman.echo("+----+     +---------+   +----+");
                    gaiman.echo("");
                    _context42.next = 39;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following options structures the test execution schedule according to the requirement dependencies?:]", 35);
                  case 39:
                    gaiman.echo("");
                    _context42.next = 42;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Methodical, analytical, reactive, and regression-averse", 35);
                  case 42:
                    _context42.next = 44;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Analytical, standard-compliant, consultative, and reactive", 35);
                  case 44:
                    _context42.next = 46;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Model-based, methodical, analytical, and consultative", 35);
                  case 46:
                    _context42.next = 48;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Regression-averse, consultative, reactive, and methodical", 35);
                  case 48:
                    gaiman.echo("");
                    _context42.next = 51;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 51:
                    $_answer = _context42.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context42.next = 58;
                      break;
                    }
                    _context42.next = 56;
                    return $_istqbuster_a_38();
                  case 56:
                    _context42.next = 78;
                    break;
                  case 58:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context42.next = 63;
                      break;
                    }
                    _context42.next = 61;
                    return $_istqbuster_a_38();
                  case 61:
                    _context42.next = 78;
                    break;
                  case 63:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context42.next = 69;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context42.next = 67;
                    return $_istqbuster_a_38();
                  case 67:
                    _context42.next = 78;
                    break;
                  case 69:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context42.next = 74;
                      break;
                    }
                    _context42.next = 72;
                    return $_istqbuster_a_38();
                  case 72:
                    _context42.next = 78;
                    break;
                  case 74:
                    _context42.next = 76;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 76:
                    _context42.next = 78;
                    return $_istqbuster_a_37();
                  case 78:
                  case "end":
                    return _context42.stop();
                }
              }, _callee42);
            }));
            return _$_istqbuster_a_37.apply(this, arguments);
          };
          $_istqbuster_a_37 = function _$_istqbuster_a_113() {
            return _$_istqbuster_a_37.apply(this, arguments);
          };
          _$_istqbuster_a_36 = function _$_istqbuster_a_112() {
            _$_istqbuster_a_36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                while (1) switch (_context41.prev = _context41.next) {
                  case 0:
                    gaiman.echo("");
                    _context41.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #36]", 35);
                  case 3:
                    _context41.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following is the characteristic of a metrics-based approach for test estimation?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context41.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Budget which was used by a previous similar test project", 35);
                  case 8:
                    _context41.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Overall experience collected in interviews with test managers", 35);
                  case 10:
                    _context41.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Estimation of effort for test automation agreed in the test team", 35);
                  case 12:
                    _context41.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Average of calculations collected from business experts", 35);
                  case 14:
                    gaiman.echo("");
                    _context41.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context41.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context41.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context41.next = 23;
                    return $_istqbuster_a_37();
                  case 23:
                    _context41.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context41.next = 30;
                      break;
                    }
                    _context41.next = 28;
                    return $_istqbuster_a_37();
                  case 28:
                    _context41.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context41.next = 35;
                      break;
                    }
                    _context41.next = 33;
                    return $_istqbuster_a_37();
                  case 33:
                    _context41.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context41.next = 40;
                      break;
                    }
                    _context41.next = 38;
                    return $_istqbuster_a_37();
                  case 38:
                    _context41.next = 44;
                    break;
                  case 40:
                    _context41.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context41.next = 44;
                    return $_istqbuster_a_36();
                  case 44:
                  case "end":
                    return _context41.stop();
                }
              }, _callee41);
            }));
            return _$_istqbuster_a_36.apply(this, arguments);
          };
          $_istqbuster_a_36 = function _$_istqbuster_a_111() {
            return _$_istqbuster_a_36.apply(this, arguments);
          };
          _$_istqbuster_a_35 = function _$_istqbuster_a_110() {
            _$_istqbuster_a_35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                while (1) switch (_context40.prev = _context40.next) {
                  case 0:
                    gaiman.echo("");
                    _context40.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #35]", 35);
                  case 3:
                    _context40.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]The project develops a (smart) heating thermostat. The control algorithms of the thermostat were modeled as Matlab/Simulink models and run on the internet connected server. The thermostat uses the specifications of the server to trigger the heating valves.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context40.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]The test manager has defined the following test strategy/approach in the test plan:]", 35);
                  case 8:
                    gaiman.echo("");
                    _context40.next = 11;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) The acceptance test for the whole system is executed as an experience-based test.", 35);
                  case 11:
                    _context40.next = 13;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) The control algorithms on the server are checked against standard of the energy saving regulation.", 35);
                  case 13:
                    _context40.next = 15;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) The functional test of the thermostat is performed as risk-based testing.", 35);
                  case 15:
                    _context40.next = 17;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) The security tests of data / communication via the internet are executed together with external security experts.", 35);
                  case 17:
                    gaiman.echo("");
                    _context40.next = 20;
                    return gaiman.echo_extra("[[;#F9E2AF;]What four common types of test strategies/approaches did the test manager implement in the test plan?]", 35);
                  case 20:
                    gaiman.echo("");
                    _context40.next = 23;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Methodical, analytical, reactive, and regression-averse", 35);
                  case 23:
                    _context40.next = 25;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Analytical, standard-compliant, consultative, and reactive", 35);
                  case 25:
                    _context40.next = 27;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Model-based, methodical, analytical, and consultative", 35);
                  case 27:
                    _context40.next = 29;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Regression-averse, consultative, reactive, and methodical", 35);
                  case 29:
                    gaiman.echo("");
                    _context40.next = 32;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 32:
                    $_answer = _context40.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context40.next = 39;
                      break;
                    }
                    _context40.next = 37;
                    return $_istqbuster_a_36();
                  case 37:
                    _context40.next = 59;
                    break;
                  case 39:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context40.next = 45;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context40.next = 43;
                    return $_istqbuster_a_36();
                  case 43:
                    _context40.next = 59;
                    break;
                  case 45:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context40.next = 50;
                      break;
                    }
                    _context40.next = 48;
                    return $_istqbuster_a_36();
                  case 48:
                    _context40.next = 59;
                    break;
                  case 50:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context40.next = 55;
                      break;
                    }
                    _context40.next = 53;
                    return $_istqbuster_a_36();
                  case 53:
                    _context40.next = 59;
                    break;
                  case 55:
                    _context40.next = 57;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 57:
                    _context40.next = 59;
                    return $_istqbuster_a_35();
                  case 59:
                  case "end":
                    return _context40.stop();
                }
              }, _callee40);
            }));
            return _$_istqbuster_a_35.apply(this, arguments);
          };
          $_istqbuster_a_35 = function _$_istqbuster_a_109() {
            return _$_istqbuster_a_35.apply(this, arguments);
          };
          _$_istqbuster_a_34 = function _$_istqbuster_a_108() {
            _$_istqbuster_a_34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                while (1) switch (_context39.prev = _context39.next) {
                  case 0:
                    gaiman.echo("");
                    _context39.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #34]", 35);
                  case 3:
                    _context39.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following is NOT included in a test summary report?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context39.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Defining pass/fail criteria and objectives of testing", 35);
                  case 8:
                    _context39.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Deviations from the test approach", 35);
                  case 10:
                    _context39.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Measurements of actual progress against exit criteria", 35);
                  case 12:
                    _context39.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Evaluation of the quality of the test object", 35);
                  case 14:
                    gaiman.echo("");
                    _context39.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context39.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context39.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context39.next = 23;
                    return $_istqbuster_a_35();
                  case 23:
                    _context39.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context39.next = 30;
                      break;
                    }
                    _context39.next = 28;
                    return $_istqbuster_a_35();
                  case 28:
                    _context39.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context39.next = 35;
                      break;
                    }
                    _context39.next = 33;
                    return $_istqbuster_a_35();
                  case 33:
                    _context39.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context39.next = 40;
                      break;
                    }
                    _context39.next = 38;
                    return $_istqbuster_a_35();
                  case 38:
                    _context39.next = 44;
                    break;
                  case 40:
                    _context39.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context39.next = 44;
                    return $_istqbuster_a_34();
                  case 44:
                  case "end":
                    return _context39.stop();
                }
              }, _callee39);
            }));
            return _$_istqbuster_a_34.apply(this, arguments);
          };
          $_istqbuster_a_34 = function _$_istqbuster_a_107() {
            return _$_istqbuster_a_34.apply(this, arguments);
          };
          _$_istqbuster_a_33 = function _$_istqbuster_a_106() {
            _$_istqbuster_a_33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                while (1) switch (_context38.prev = _context38.next) {
                  case 0:
                    gaiman.echo("");
                    _context38.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #33]", 35);
                  case 3:
                    _context38.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following lists contains only typical exit criteria from testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context38.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Reliability measures, test coverage, schedule and status about fixing defect and remaining risks", 35);
                  case 8:
                    _context38.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Reliability measures, test coverage, degree of tester\u2019s independence and product completeness", 35);
                  case 10:
                    _context38.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Reliability measures, test coverage, test cost, availability of test environment, time to market and product completeness", 35);
                  case 12:
                    _context38.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Time to market, remaining defects, tester qualification, availability of testable use cases, test coverage and test cost", 35);
                  case 14:
                    gaiman.echo("");
                    _context38.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context38.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context38.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context38.next = 23;
                    return $_istqbuster_a_34();
                  case 23:
                    _context38.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context38.next = 30;
                      break;
                    }
                    _context38.next = 28;
                    return $_istqbuster_a_34();
                  case 28:
                    _context38.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context38.next = 35;
                      break;
                    }
                    _context38.next = 33;
                    return $_istqbuster_a_34();
                  case 33:
                    _context38.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context38.next = 40;
                      break;
                    }
                    _context38.next = 38;
                    return $_istqbuster_a_34();
                  case 38:
                    _context38.next = 44;
                    break;
                  case 40:
                    _context38.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context38.next = 44;
                    return $_istqbuster_a_33();
                  case 44:
                  case "end":
                    return _context38.stop();
                }
              }, _callee38);
            }));
            return _$_istqbuster_a_33.apply(this, arguments);
          };
          $_istqbuster_a_33 = function _$_istqbuster_a_105() {
            return _$_istqbuster_a_33.apply(this, arguments);
          };
          _$_istqbuster_a_32 = function _$_istqbuster_a_104() {
            _$_istqbuster_a_32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                while (1) switch (_context37.prev = _context37.next) {
                  case 0:
                    gaiman.echo("");
                    _context37.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #32]", 35);
                  case 3:
                    _context37.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following can affect and be part of the (initial) test planning?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context37.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Budget limitations", 35);
                  case 8:
                    _context37.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Test log", 35);
                  case 10:
                    _context37.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Failure rate", 35);
                  case 12:
                    _context37.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Use cases", 35);
                  case 14:
                    gaiman.echo("");
                    _context37.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context37.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context37.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context37.next = 23;
                    return $_istqbuster_a_33();
                  case 23:
                    _context37.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context37.next = 30;
                      break;
                    }
                    _context37.next = 28;
                    return $_istqbuster_a_33();
                  case 28:
                    _context37.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context37.next = 35;
                      break;
                    }
                    _context37.next = 33;
                    return $_istqbuster_a_33();
                  case 33:
                    _context37.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context37.next = 40;
                      break;
                    }
                    _context37.next = 38;
                    return $_istqbuster_a_33();
                  case 38:
                    _context37.next = 44;
                    break;
                  case 40:
                    _context37.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context37.next = 44;
                    return $_istqbuster_a_32();
                  case 44:
                  case "end":
                    return _context37.stop();
                }
              }, _callee37);
            }));
            return _$_istqbuster_a_32.apply(this, arguments);
          };
          $_istqbuster_a_32 = function _$_istqbuster_a_103() {
            return _$_istqbuster_a_32.apply(this, arguments);
          };
          _$_istqbuster_a_31 = function _$_istqbuster_a_102() {
            _$_istqbuster_a_31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                while (1) switch (_context36.prev = _context36.next) {
                  case 0:
                    gaiman.echo("");
                    _context36.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #31]", 35);
                  case 3:
                    _context36.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following metrics would be MOST useful to monitor during test execution?] ", 35);
                  case 5:
                    gaiman.echo("");
                    _context36.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Percentage of executed test cases", 35);
                  case 8:
                    _context36.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Average number of testers involved in the test execution", 35);
                  case 10:
                    _context36.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Coverage of requirements by source code", 35);
                  case 12:
                    _context36.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Percentage of test cases already created and reviewed", 35);
                  case 14:
                    gaiman.echo("");
                    _context36.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context36.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context36.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context36.next = 23;
                    return $_istqbuster_a_32();
                  case 23:
                    _context36.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context36.next = 30;
                      break;
                    }
                    _context36.next = 28;
                    return $_istqbuster_a_32();
                  case 28:
                    _context36.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context36.next = 35;
                      break;
                    }
                    _context36.next = 33;
                    return $_istqbuster_a_32();
                  case 33:
                    _context36.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context36.next = 40;
                      break;
                    }
                    _context36.next = 38;
                    return $_istqbuster_a_32();
                  case 38:
                    _context36.next = 44;
                    break;
                  case 40:
                    _context36.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context36.next = 44;
                    return $_istqbuster_a_31();
                  case 44:
                  case "end":
                    return _context36.stop();
                }
              }, _callee36);
            }));
            return _$_istqbuster_a_31.apply(this, arguments);
          };
          $_istqbuster_a_31 = function _$_istqbuster_a_101() {
            return _$_istqbuster_a_31.apply(this, arguments);
          };
          _$_istqbuster_a_30 = function _$_istqbuster_a_100() {
            _$_istqbuster_a_30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                while (1) switch (_context35.prev = _context35.next) {
                  case 0:
                    gaiman.echo("");
                    _context35.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #30]", 35);
                  case 3:
                    _context35.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements BEST describes how tasks are divided between the test manager and the tester?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context35.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The test manager plans testing activities and chooses the standards to be followed, while the tester chooses the tools and set the tools usage guidelines", 35);
                  case 8:
                    _context35.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The test manager plans, coordinates, and controls the testing activities, while the tester automates the tests", 35);
                  case 10:
                    _context35.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The test manager plans, monitors, and controls the testing activities, while the tester designs tests and decides on the release of the test object", 35);
                  case 12:
                    _context35.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The test manager plans and organizes the testing and specifies the test cases, while the tester executes the tests", 35);
                  case 14:
                    gaiman.echo("");
                    _context35.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context35.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context35.next = 24;
                      break;
                    }
                    _context35.next = 22;
                    return $_istqbuster_a_31();
                  case 22:
                    _context35.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context35.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context35.next = 28;
                    return $_istqbuster_a_31();
                  case 28:
                    _context35.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context35.next = 35;
                      break;
                    }
                    _context35.next = 33;
                    return $_istqbuster_a_31();
                  case 33:
                    _context35.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context35.next = 40;
                      break;
                    }
                    _context35.next = 38;
                    return $_istqbuster_a_31();
                  case 38:
                    _context35.next = 44;
                    break;
                  case 40:
                    _context35.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context35.next = 44;
                    return $_istqbuster_a_30();
                  case 44:
                  case "end":
                    return _context35.stop();
                }
              }, _callee35);
            }));
            return _$_istqbuster_a_30.apply(this, arguments);
          };
          $_istqbuster_a_30 = function _$_istqbuster_a_99() {
            return _$_istqbuster_a_30.apply(this, arguments);
          };
          _$_istqbuster_a_29 = function _$_istqbuster_a_98() {
            _$_istqbuster_a_29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                while (1) switch (_context34.prev = _context34.next) {
                  case 0:
                    gaiman.echo("");
                    _context34.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #29]", 35);
                  case 3:
                    _context34.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A video application has the following requirement: The application shall allow playing a video on the following display resolution:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context34.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) 640x480", 35);
                  case 8:
                    _context34.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) 1280x720", 35);
                  case 10:
                    _context34.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) 1600x1200", 35);
                  case 12:
                    _context34.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) 1920x1080", 35);
                  case 14:
                    gaiman.echo("");
                    _context34.next = 17;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following list of test cases is a result of applying the equivalence partitioning test technique to test this requirement?]", 35);
                  case 17:
                    gaiman.echo("");
                    _context34.next = 20;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Verify that the application can play a video on a display of size 1920x1080 (1 test case)", 35);
                  case 20:
                    _context34.next = 22;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Verify that the application can play a video on a display of size 640x480 and 1920x1080 (2 test cases)", 35);
                  case 22:
                    _context34.next = 24;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Verify that the application can play a video on each of the display sizes in the requirement (4 test cases)", 35);
                  case 24:
                    _context34.next = 26;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Verify that the application can play a video on any one of the display sizes in the requirement (1 test case)", 35);
                  case 26:
                    gaiman.echo("");
                    _context34.next = 29;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 29:
                    $_answer = _context34.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context34.next = 36;
                      break;
                    }
                    _context34.next = 34;
                    return $_istqbuster_a_30();
                  case 34:
                    _context34.next = 56;
                    break;
                  case 36:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context34.next = 41;
                      break;
                    }
                    _context34.next = 39;
                    return $_istqbuster_a_30();
                  case 39:
                    _context34.next = 56;
                    break;
                  case 41:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context34.next = 47;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context34.next = 45;
                    return $_istqbuster_a_30();
                  case 45:
                    _context34.next = 56;
                    break;
                  case 47:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context34.next = 52;
                      break;
                    }
                    _context34.next = 50;
                    return $_istqbuster_a_30();
                  case 50:
                    _context34.next = 56;
                    break;
                  case 52:
                    _context34.next = 54;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 54:
                    _context34.next = 56;
                    return $_istqbuster_a_29();
                  case 56:
                  case "end":
                    return _context34.stop();
                }
              }, _callee34);
            }));
            return _$_istqbuster_a_29.apply(this, arguments);
          };
          $_istqbuster_a_29 = function _$_istqbuster_a_97() {
            return _$_istqbuster_a_29.apply(this, arguments);
          };
          _$_istqbuster_a_28 = function _$_istqbuster_a_96() {
            _$_istqbuster_a_28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                while (1) switch (_context33.prev = _context33.next) {
                  case 0:
                    gaiman.echo("");
                    _context33.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #28]", 35);
                  case 3:
                    _context33.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements about the given state transition diagram and table of test cases is TRUE?]", 35);
                  case 5:
                    gaiman.echo("");
                    gaiman.echo("+---------------+   PowerOff   +--------------+");
                    gaiman.echo("|  TV Off (S1)  |<-------------| TV Play (S3) |");
                    gaiman.echo("+---------------+              |              |");
                    gaiman.echo("         |  ^                  |              |");
                    gaiman.echo(" PowerOn |  | PowerOff         |              |");
                    gaiman.echo("         v  |                  |              |");
                    gaiman.echo("+---------------+     RCOn     |              |");
                    gaiman.echo("|  TV Off (S1)  |------------->|              |");
                    gaiman.echo("|               |              |              |");
                    gaiman.echo("|               |<-------------|              |");
                    gaiman.echo("+---------------+     RCOff    +--------------+");
                    gaiman.echo("");
                    gaiman.echo("+-------------+-------+-------+----+-----+-------+");
                    gaiman.echo("| Test Case   |   1   |   2   | 3  |  4  |   5   |");
                    gaiman.echo("+-------------+-------+-------+----+-----+-------+");
                    gaiman.echo("| Start State | S1    | S2    | S2 | S3  | S3    |");
                    gaiman.echo("+-------------+-------+-------+----+-----+-------+");
                    gaiman.echo("| Input       | Power | Power | RC | RC  | Power |");
                    gaiman.echo("|             | On    | Off   | On | Off | Off   |");
                    gaiman.echo("+-------------+-------+-------+----+-----+-------+");
                    gaiman.echo("| Expected    | S2    | S1    | S3 | S2  | S1    |");
                    gaiman.echo("| Final State |       |       |    |     |       |");
                    gaiman.echo("+-------------+-------+-------+----+-----+-------+");
                    gaiman.echo("");
                    _context33.next = 32;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The given test cases cover both valid and invalid transitions in the state transition diagram", 35);
                  case 32:
                    _context33.next = 34;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The given test cases represent all possible valid transitions in the state transition diagram", 35);
                  case 34:
                    _context33.next = 36;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The given test cases represent some of the valid transitions in the state transition diagram", 35);
                  case 36:
                    _context33.next = 38;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The given test cases represent pairs of transitions in the state transition diagram", 35);
                  case 38:
                    gaiman.echo("");
                    _context33.next = 41;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 41:
                    $_answer = _context33.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context33.next = 48;
                      break;
                    }
                    _context33.next = 46;
                    return $_istqbuster_a_29();
                  case 46:
                    _context33.next = 68;
                    break;
                  case 48:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context33.next = 54;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context33.next = 52;
                    return $_istqbuster_a_29();
                  case 52:
                    _context33.next = 68;
                    break;
                  case 54:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context33.next = 59;
                      break;
                    }
                    _context33.next = 57;
                    return $_istqbuster_a_29();
                  case 57:
                    _context33.next = 68;
                    break;
                  case 59:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context33.next = 64;
                      break;
                    }
                    _context33.next = 62;
                    return $_istqbuster_a_29();
                  case 62:
                    _context33.next = 68;
                    break;
                  case 64:
                    _context33.next = 66;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 66:
                    _context33.next = 68;
                    return $_istqbuster_a_28();
                  case 68:
                  case "end":
                    return _context33.stop();
                }
              }, _callee33);
            }));
            return _$_istqbuster_a_28.apply(this, arguments);
          };
          $_istqbuster_a_28 = function _$_istqbuster_a_95() {
            return _$_istqbuster_a_28.apply(this, arguments);
          };
          _$_istqbuster_a_27 = function _$_istqbuster_a_94() {
            _$_istqbuster_a_27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) switch (_context32.prev = _context32.next) {
                  case 0:
                    gaiman.echo("");
                    _context32.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #27]", 35);
                  case 3:
                    _context32.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A company's employees are paid bonuses if they work more than a year in the company and achieve a target which is individually agreed before.]", 35);
                  case 5:
                    gaiman.echo("");
                    _context32.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]These facts can be shown in a decision table:]", 35);
                  case 8:
                    gaiman.echo("");
                    gaiman.echo("+------------+-------------------+-----+----+-----+-----+");
                    gaiman.echo("|  Test-ID   |                   | T1  | T2 | T3  | T4  |");
                    gaiman.echo("+------------+-------------------+-----+----+-----+-----+");
                    gaiman.echo("| Condition1 | More than 1 year? | YES | NO | NO  | YES |");
                    gaiman.echo("| Condition2 | Agreed target?    | NO  | NO | YES | YES |");
                    gaiman.echo("| Condition3 | Achieved target?  | NO  | NO | YES | YES |");
                    gaiman.echo("| Action     | Bonus payment     | NO  | NO | NO  | YES |");
                    gaiman.echo("+------------+-------------------+-----+----+-----+-----+");
                    gaiman.echo("");
                    _context32.next = 20;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following test cases represents a situation that can happen in real life, and is missing in the above decision table?]", 35);
                  case 20:
                    gaiman.echo("");
                    _context32.next = 23;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Condition1 = YES, Condition2 = NO, Condition3 = YES, Action= NO", 35);
                  case 23:
                    _context32.next = 25;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Condition1 = YES, Condition2 = YES, Condition3 = NO, Action= YES", 35);
                  case 25:
                    _context32.next = 27;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Condition1 = NO, Condition2 = NO, Condition3 = YES, Action= NO", 35);
                  case 27:
                    _context32.next = 29;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Condition1 = NO, Condition2 = YES, Condition3 = NO, Action= NO", 35);
                  case 29:
                    gaiman.echo("");
                    _context32.next = 32;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 32:
                    $_answer = _context32.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context32.next = 39;
                      break;
                    }
                    _context32.next = 37;
                    return $_istqbuster_a_28();
                  case 37:
                    _context32.next = 59;
                    break;
                  case 39:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context32.next = 44;
                      break;
                    }
                    _context32.next = 42;
                    return $_istqbuster_a_28();
                  case 42:
                    _context32.next = 59;
                    break;
                  case 44:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context32.next = 49;
                      break;
                    }
                    _context32.next = 47;
                    return $_istqbuster_a_28();
                  case 47:
                    _context32.next = 59;
                    break;
                  case 49:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context32.next = 55;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context32.next = 53;
                    return $_istqbuster_a_28();
                  case 53:
                    _context32.next = 59;
                    break;
                  case 55:
                    _context32.next = 57;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 57:
                    _context32.next = 59;
                    return $_istqbuster_a_27();
                  case 59:
                  case "end":
                    return _context32.stop();
                }
              }, _callee32);
            }));
            return _$_istqbuster_a_27.apply(this, arguments);
          };
          $_istqbuster_a_27 = function _$_istqbuster_a_93() {
            return _$_istqbuster_a_27.apply(this, arguments);
          };
          _$_istqbuster_a_26 = function _$_istqbuster_a_92() {
            _$_istqbuster_a_26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                while (1) switch (_context31.prev = _context31.next) {
                  case 0:
                    gaiman.echo("");
                    _context31.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #26]", 35);
                  case 3:
                    _context31.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]A speed control and reporting system has the following characteristics:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context31.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) A set of test scripts to be executed in a specific test run.", 35);
                  case 8:
                    _context31.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) you drive faster than 50 km/h, but no more than 55 km/h, you will be warned.", 35);
                  case 10:
                    _context31.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) If you drive faster than 55 km/h but not more than 60 km/h, you will be fined.", 35);
                  case 12:
                    _context31.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) If you drive faster than 60 km/h, your driving license will be suspended.]", 35);
                  case 14:
                    _context31.next = 16;
                    return gaiman.echo_extra("[[;#94E2D5;]5]) The speed in km/h is available to the system as an integer value.", 35);
                  case 16:
                    gaiman.echo("");
                    _context31.next = 19;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which would be the most likely set of values (km/h) identified by applying the boundary value analysis, where only the values on the boundaries of the equivalence classes are selected?]", 35);
                  case 19:
                    gaiman.echo("");
                    _context31.next = 22;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 0, 49, 20, 24, 29, 60", 35);
                  case 22:
                    _context31.next = 24;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 50, 2, 60", 35);
                  case 24:
                    _context31.next = 26;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 49, 20, 24, 2, 60, 62", 35);
                  case 26:
                    _context31.next = 28;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 50, 21, 2, 26, 60, 61", 35);
                  case 28:
                    gaiman.echo("");
                    _context31.next = 31;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 31:
                    $_answer = _context31.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context31.next = 38;
                      break;
                    }
                    _context31.next = 36;
                    return $_istqbuster_a_27();
                  case 36:
                    _context31.next = 58;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context31.next = 43;
                      break;
                    }
                    _context31.next = 41;
                    return $_istqbuster_a_27();
                  case 41:
                    _context31.next = 58;
                    break;
                  case 43:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context31.next = 48;
                      break;
                    }
                    _context31.next = 46;
                    return $_istqbuster_a_27();
                  case 46:
                    _context31.next = 58;
                    break;
                  case 48:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context31.next = 54;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context31.next = 52;
                    return $_istqbuster_a_27();
                  case 52:
                    _context31.next = 58;
                    break;
                  case 54:
                    _context31.next = 56;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 56:
                    _context31.next = 58;
                    return $_istqbuster_a_26();
                  case 58:
                  case "end":
                    return _context31.stop();
                }
              }, _callee31);
            }));
            return _$_istqbuster_a_26.apply(this, arguments);
          };
          $_istqbuster_a_26 = function _$_istqbuster_a_91() {
            return _$_istqbuster_a_26.apply(this, arguments);
          };
          _$_istqbuster_a_25 = function _$_istqbuster_a_90() {
            _$_istqbuster_a_25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) switch (_context30.prev = _context30.next) {
                  case 0:
                    gaiman.echo("");
                    _context30.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #25]", 35);
                  case 3:
                    _context30.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]An employee\u2019s bonus is to be calculated. It cannot be negative, but it can be calculated down to zero. The bonus is based on the length of employment:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context30.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Less than or equal to 2 years]", 35);
                  case 8:
                    _context30.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) More than 2 years but less than 5 years]", 35);
                  case 10:
                    _context30.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) 5 to 10 years inclusively]", 35);
                  case 12:
                    _context30.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Longer than 10 years]", 35);
                  case 14:
                    gaiman.echo("");
                    gaiman.echo("");
                    _context30.next = 18;
                    return gaiman.echo_extra("[[;#F9E2AF;]What is the minimum number of test cases required to cover all valid equivalence partitions for calculating the bonus?]", 35);
                  case 18:
                    gaiman.echo("");
                    _context30.next = 21;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 3", 35);
                  case 21:
                    _context30.next = 23;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 5", 35);
                  case 23:
                    _context30.next = 25;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 2", 35);
                  case 25:
                    _context30.next = 27;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 4", 35);
                  case 27:
                    gaiman.echo("");
                    _context30.next = 30;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 30:
                    $_answer = _context30.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context30.next = 37;
                      break;
                    }
                    _context30.next = 35;
                    return $_istqbuster_a_26();
                  case 35:
                    _context30.next = 57;
                    break;
                  case 37:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context30.next = 42;
                      break;
                    }
                    _context30.next = 40;
                    return $_istqbuster_a_26();
                  case 40:
                    _context30.next = 57;
                    break;
                  case 42:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context30.next = 47;
                      break;
                    }
                    _context30.next = 45;
                    return $_istqbuster_a_26();
                  case 45:
                    _context30.next = 57;
                    break;
                  case 47:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context30.next = 53;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context30.next = 51;
                    return $_istqbuster_a_26();
                  case 51:
                    _context30.next = 57;
                    break;
                  case 53:
                    _context30.next = 55;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 55:
                    _context30.next = 57;
                    return $_istqbuster_a_25();
                  case 57:
                  case "end":
                    return _context30.stop();
                }
              }, _callee30);
            }));
            return _$_istqbuster_a_25.apply(this, arguments);
          };
          $_istqbuster_a_25 = function _$_istqbuster_a_89() {
            return _$_istqbuster_a_25.apply(this, arguments);
          };
          _$_istqbuster_a_24 = function _$_istqbuster_a_88() {
            _$_istqbuster_a_24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) switch (_context29.prev = _context29.next) {
                  case 0:
                    gaiman.echo("");
                    _context29.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #24]", 35);
                  case 3:
                    _context29.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]For which of the following situations is exploratory testing suitable?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context29.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) When time pressure requires speeding up the execution of tests already specified", 35);
                  case 8:
                    _context29.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) When the system is developed incrementally, and no test charter is available", 35);
                  case 10:
                    _context29.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) When testers are available who have enough knowledge of similar applications and technologies", 35);
                  case 12:
                    _context29.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) When an advanced knowledge of the system already exists, and evidence is to be if it should be tested intensively", 35);
                  case 14:
                    gaiman.echo("");
                    _context29.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context29.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context29.next = 24;
                      break;
                    }
                    _context29.next = 22;
                    return $_istqbuster_a_25();
                  case 22:
                    _context29.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context29.next = 29;
                      break;
                    }
                    _context29.next = 27;
                    return $_istqbuster_a_25();
                  case 27:
                    _context29.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context29.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context29.next = 33;
                    return $_istqbuster_a_25();
                  case 33:
                    _context29.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context29.next = 40;
                      break;
                    }
                    _context29.next = 38;
                    return $_istqbuster_a_25();
                  case 38:
                    _context29.next = 44;
                    break;
                  case 40:
                    _context29.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context29.next = 44;
                    return $_istqbuster_a_24();
                  case 44:
                  case "end":
                    return _context29.stop();
                }
              }, _callee29);
            }));
            return _$_istqbuster_a_24.apply(this, arguments);
          };
          $_istqbuster_a_24 = function _$_istqbuster_a_87() {
            return _$_istqbuster_a_24.apply(this, arguments);
          };
          _$_istqbuster_a_23 = function _$_istqbuster_a_86() {
            _$_istqbuster_a_23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                while (1) switch (_context28.prev = _context28.next) {
                  case 0:
                    gaiman.echo("");
                    _context28.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #23]", 35);
                  case 3:
                    _context28.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which statement about the relationship between statement coverage and decision coverage is true?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context28.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 100% decision coverage also guarantees 100% statement coverage", 35);
                  case 8:
                    _context28.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 100% statement coverage also guarantees 100% decision coverage", 35);
                  case 10:
                    _context28.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 50% decision coverage also guarantees 50% statement coverage", 35);
                  case 12:
                    _context28.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Decision coverage can never reach 100%", 35);
                  case 14:
                    gaiman.echo("");
                    _context28.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context28.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context28.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context28.next = 23;
                    return $_istqbuster_a_24();
                  case 23:
                    _context28.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context28.next = 30;
                      break;
                    }
                    _context28.next = 28;
                    return $_istqbuster_a_24();
                  case 28:
                    _context28.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context28.next = 35;
                      break;
                    }
                    _context28.next = 33;
                    return $_istqbuster_a_24();
                  case 33:
                    _context28.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context28.next = 40;
                      break;
                    }
                    _context28.next = 38;
                    return $_istqbuster_a_24();
                  case 38:
                    _context28.next = 44;
                    break;
                  case 40:
                    _context28.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context28.next = 44;
                    return $_istqbuster_a_23();
                  case 44:
                  case "end":
                    return _context28.stop();
                }
              }, _callee28);
            }));
            return _$_istqbuster_a_23.apply(this, arguments);
          };
          $_istqbuster_a_23 = function _$_istqbuster_a_85() {
            return _$_istqbuster_a_23.apply(this, arguments);
          };
          _$_istqbuster_a_22 = function _$_istqbuster_a_84() {
            _$_istqbuster_a_22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    gaiman.echo("");
                    _context27.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #22]", 35);
                  case 3:
                    _context27.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following is the description of statement coverage?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context27.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) It is a metric, which is the percentage of test cases that have been executed", 35);
                  case 8:
                    _context27.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) It is a metric, which is the percentage of statements in the source code that have been executed", 35);
                  case 10:
                    _context27.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) It is a metric, which is the number of statements in the source code that have been executed by test cases that are passed", 35);
                  case 12:
                    _context27.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) It is a metric, that gives a true/false confirmation if all statements are covered or not", 35);
                  case 14:
                    gaiman.echo("");
                    _context27.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context27.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context27.next = 24;
                      break;
                    }
                    _context27.next = 22;
                    return $_istqbuster_a_23();
                  case 22:
                    _context27.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context27.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context27.next = 28;
                    return $_istqbuster_a_23();
                  case 28:
                    _context27.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context27.next = 35;
                      break;
                    }
                    _context27.next = 33;
                    return $_istqbuster_a_23();
                  case 33:
                    _context27.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context27.next = 40;
                      break;
                    }
                    _context27.next = 38;
                    return $_istqbuster_a_23();
                  case 38:
                    _context27.next = 44;
                    break;
                  case 40:
                    _context27.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context27.next = 44;
                    return $_istqbuster_a_22();
                  case 44:
                  case "end":
                    return _context27.stop();
                }
              }, _callee27);
            }));
            return _$_istqbuster_a_22.apply(this, arguments);
          };
          $_istqbuster_a_22 = function _$_istqbuster_a_83() {
            return _$_istqbuster_a_22.apply(this, arguments);
          };
          _$_istqbuster_a_21 = function _$_istqbuster_a_82() {
            _$_istqbuster_a_21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                while (1) switch (_context26.prev = _context26.next) {
                  case 0:
                    gaiman.echo("");
                    _context26.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #21]", 35);
                  case 3:
                    _context26.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]The following statement refers to decision coverage:]", 35);
                  case 5:
                    gaiman.echo("");
                    _context26.next = 8;
                    return gaiman.echo_extra("[[;#F9E2AF;]When the code contains only a single \u2018if\u2019 statement and no loops or CASE statements, and its execution is not nested within the test,]", 35);
                  case 8:
                    _context26.next = 10;
                    return gaiman.echo_extra("[[;#F9E2AF;]any single test case we run will result in 50% decision coverage.]", 35);
                  case 10:
                    gaiman.echo("");
                    _context26.next = 13;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statement is correct?]", 35);
                  case 13:
                    gaiman.echo("");
                    _context26.next = 16;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The statement is true. Any single test case provides 100% statement coverage and therefore 50% decision coverage", 35);
                  case 16:
                    _context26.next = 18;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The statement is true. Any single test case would cause the outcome of the \u201Cif\u201D statement to be either true or false", 35);
                  case 18:
                    _context26.next = 20;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The statement is false. A single test case can only guarantee 25% decision coverage in this case", 35);
                  case 20:
                    _context26.next = 22;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The statement is false. The statement is too broad. It may be correct or not, depending on the tested software", 35);
                  case 22:
                    gaiman.echo("");
                    _context26.next = 25;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 25:
                    $_answer = _context26.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context26.next = 32;
                      break;
                    }
                    _context26.next = 30;
                    return $_istqbuster_a_22();
                  case 30:
                    _context26.next = 52;
                    break;
                  case 32:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context26.next = 38;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context26.next = 36;
                    return $_istqbuster_a_22();
                  case 36:
                    _context26.next = 52;
                    break;
                  case 38:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context26.next = 43;
                      break;
                    }
                    _context26.next = 41;
                    return $_istqbuster_a_22();
                  case 41:
                    _context26.next = 52;
                    break;
                  case 43:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context26.next = 48;
                      break;
                    }
                    _context26.next = 46;
                    return $_istqbuster_a_22();
                  case 46:
                    _context26.next = 52;
                    break;
                  case 48:
                    _context26.next = 50;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 50:
                    _context26.next = 52;
                    return $_istqbuster_a_21();
                  case 52:
                  case "end":
                    return _context26.stop();
                }
              }, _callee26);
            }));
            return _$_istqbuster_a_21.apply(this, arguments);
          };
          $_istqbuster_a_21 = function _$_istqbuster_a_81() {
            return _$_istqbuster_a_21.apply(this, arguments);
          };
          _$_istqbuster_a_20 = function _$_istqbuster_a_80() {
            _$_istqbuster_a_20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    gaiman.echo("");
                    _context25.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #20]", 35);
                  case 3:
                    _context25.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following options is categorized as a black-box test technique?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context25.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A technique based on analysis of the architecture", 35);
                  case 8:
                    _context25.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A technique checking that the test object is working according to the detailed design", 35);
                  case 10:
                    _context25.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) A technique based on the knowledge of past faults, or general knowledge of failures", 35);
                  case 12:
                    _context25.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) A technique based on formal requirements", 35);
                  case 14:
                    gaiman.echo("");
                    _context25.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context25.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context25.next = 24;
                      break;
                    }
                    _context25.next = 22;
                    return $_istqbuster_a_21();
                  case 22:
                    _context25.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context25.next = 29;
                      break;
                    }
                    _context25.next = 27;
                    return $_istqbuster_a_21();
                  case 27:
                    _context25.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context25.next = 34;
                      break;
                    }
                    _context25.next = 32;
                    return $_istqbuster_a_21();
                  case 32:
                    _context25.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context25.next = 40;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context25.next = 38;
                    return $_istqbuster_a_21();
                  case 38:
                    _context25.next = 44;
                    break;
                  case 40:
                    _context25.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context25.next = 44;
                    return $_istqbuster_a_20();
                  case 44:
                  case "end":
                    return _context25.stop();
                }
              }, _callee25);
            }));
            return _$_istqbuster_a_20.apply(this, arguments);
          };
          $_istqbuster_a_20 = function _$_istqbuster_a_79() {
            return _$_istqbuster_a_20.apply(this, arguments);
          };
          _$_istqbuster_a_19 = function _$_istqbuster_a_78() {
            _$_istqbuster_a_19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) switch (_context24.prev = _context24.next) {
                  case 0:
                    gaiman.echo("");
                    _context24.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #19]", 35);
                  case 3:
                    _context24.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]What is checklist-based testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context24.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A test technique in which tests are derived based on the tester's knowledge of past faults, or general knowledge of failures", 35);
                  case 8:
                    _context24.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A test technique based on an analysis of the specification of a component or system", 35);
                  case 10:
                    _context24.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) An experience-based test technique whereby the experienced tester uses a list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product must be verified", 35);
                  case 12:
                    _context24.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) An approach to testing where the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests", 35);
                  case 14:
                    gaiman.echo("");
                    _context24.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context24.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context24.next = 24;
                      break;
                    }
                    _context24.next = 22;
                    return $_istqbuster_a_20();
                  case 22:
                    _context24.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context24.next = 29;
                      break;
                    }
                    _context24.next = 27;
                    return $_istqbuster_a_20();
                  case 27:
                    _context24.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context24.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context24.next = 33;
                    return $_istqbuster_a_20();
                  case 33:
                    _context24.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context24.next = 40;
                      break;
                    }
                    _context24.next = 38;
                    return $_istqbuster_a_20();
                  case 38:
                    _context24.next = 44;
                    break;
                  case 40:
                    _context24.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context24.next = 44;
                    return $_istqbuster_a_19();
                  case 44:
                  case "end":
                    return _context24.stop();
                }
              }, _callee24);
            }));
            return _$_istqbuster_a_19.apply(this, arguments);
          };
          $_istqbuster_a_19 = function _$_istqbuster_a_77() {
            return _$_istqbuster_a_19.apply(this, arguments);
          };
          _$_istqbuster_a_18 = function _$_istqbuster_a_76() {
            _$_istqbuster_a_18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    gaiman.echo("");
                    _context23.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #18]", 35);
                  case 3:
                    _context23.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]You will be invited to a review. The work product to be reviewed is a description of the in-house document creation process.]", 35);
                  case 5:
                    _context23.next = 7;
                    return gaiman.echo_extra("[[;#F9E2AF;]The aim of the description is to present the work distribution between the different roles involved in the process in a way that can be clearly understood by]", 35);
                  case 7:
                    _context23.next = 9;
                    return gaiman.echo_extra("[[;#F9E2AF;]everyone.]", 35);
                  case 9:
                    gaiman.echo("");
                    _context23.next = 12;
                    return gaiman.echo_extra("[[;#F9E2AF;]You will be invited to a checklist-based review. The checklist will also be sent to you. It includes the following points:]", 35);
                  case 12:
                    gaiman.echo("");
                    _context23.next = 15;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) A set of test scripts to be executed in a specific test run", 35);
                  case 15:
                    _context23.next = 17;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) A set of instructions for the execution of a test", 35);
                  case 17:
                    _context23.next = 19;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Contains expected results", 35);
                  case 19:
                    _context23.next = 21;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Documentation of test activities in session-based exploratory testing", 35);
                  case 21:
                    gaiman.echo("");
                    _context23.next = 24;
                    return gaiman.echo_extra("[[;#F9E2AF;]In the following we show an excerpt of the work result to be reviewed, for which you should use the checklist above:]", 35);
                  case 24:
                    gaiman.echo("");
                    _context23.next = 27;
                    return gaiman.echo_extra("[[;#F9E2AF;]After checking the customer documentation for completeness and correctness, the software architect creates the system specification. Once the software architect has completed the system specification, he invites testers and verifiers to the review. A checklist describes the scope of the review. Each invited reviewer creates review comments - if necessary - and concludes the review with an official review done-comment.]", 35);
                  case 27:
                    gaiman.echo("");
                    _context23.next = 30;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements about your review is correct?]", 35);
                  case 30:
                    gaiman.echo("");
                    _context23.next = 33;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Point 2) of the checklist has been violated because it is not clear which condition must be fulfilled to invite to the review", 35);
                  case 33:
                    _context23.next = 35;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) You notice that in addition to the tester and the verifier, the validator must also be invited. Since this item is not part of your checklist, you do not create a corresponding comment", 35);
                  case 35:
                    _context23.next = 37;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Point 3) of the checklist has been violated as it is not clear what marks the review as completed", 35);
                  case 37:
                    _context23.next = 39;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Point 1) of the checklist has been violated because it is not clear who is providing the checklist for the invitation to the review", 35);
                  case 39:
                    gaiman.echo("");
                    _context23.next = 42;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 42:
                    $_answer = _context23.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context23.next = 49;
                      break;
                    }
                    _context23.next = 47;
                    return $_istqbuster_a_19();
                  case 47:
                    _context23.next = 69;
                    break;
                  case 49:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context23.next = 54;
                      break;
                    }
                    _context23.next = 52;
                    return $_istqbuster_a_19();
                  case 52:
                    _context23.next = 69;
                    break;
                  case 54:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context23.next = 59;
                      break;
                    }
                    _context23.next = 57;
                    return $_istqbuster_a_19();
                  case 57:
                    _context23.next = 69;
                    break;
                  case 59:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context23.next = 65;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context23.next = 63;
                    return $_istqbuster_a_19();
                  case 63:
                    _context23.next = 69;
                    break;
                  case 65:
                    _context23.next = 67;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 67:
                    _context23.next = 69;
                    return $_istqbuster_a_18();
                  case 69:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23);
            }));
            return _$_istqbuster_a_18.apply(this, arguments);
          };
          $_istqbuster_a_18 = function _$_istqbuster_a_75() {
            return _$_istqbuster_a_18.apply(this, arguments);
          };
          _$_istqbuster_a_17 = function _$_istqbuster_a_74() {
            _$_istqbuster_a_17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    gaiman.echo("");
                    _context22.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #17]", 35);
                  case 3:
                    _context22.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements about static testing are MOST true?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context22.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Static testing is a cheap way to detect and remove defects", 35);
                  case 8:
                    _context22.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Static testing makes dynamic testing less challenging", 35);
                  case 10:
                    _context22.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Static testing makes it possible to find run-time problems early in the lifecycle", 35);
                  case 12:
                    _context22.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) When testing safety-critical system, static testing has less value because dynamic testing finds the defects better", 35);
                  case 14:
                    gaiman.echo("");
                    _context22.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context22.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context22.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context22.next = 23;
                    return $_istqbuster_a_18();
                  case 23:
                    _context22.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context22.next = 30;
                      break;
                    }
                    _context22.next = 28;
                    return $_istqbuster_a_18();
                  case 28:
                    _context22.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context22.next = 35;
                      break;
                    }
                    _context22.next = 33;
                    return $_istqbuster_a_18();
                  case 33:
                    _context22.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context22.next = 40;
                      break;
                    }
                    _context22.next = 38;
                    return $_istqbuster_a_18();
                  case 38:
                    _context22.next = 44;
                    break;
                  case 40:
                    _context22.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context22.next = 44;
                    return $_istqbuster_a_17();
                  case 44:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22);
            }));
            return _$_istqbuster_a_17.apply(this, arguments);
          };
          $_istqbuster_a_17 = function _$_istqbuster_a_73() {
            return _$_istqbuster_a_17.apply(this, arguments);
          };
          _$_istqbuster_a_16 = function _$_istqbuster_a_72() {
            _$_istqbuster_a_16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) switch (_context21.prev = _context21.next) {
                  case 0:
                    gaiman.echo("");
                    _context21.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #16]", 35);
                  case 3:
                    _context21.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the review types below is the BEST option to choose when the review must follow a formal process based on rules and checklists?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context21.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Informal Review", 35);
                  case 8:
                    _context21.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Technical Review", 35);
                  case 10:
                    _context21.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Inspection", 35);
                  case 12:
                    _context21.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Walkthrough", 35);
                  case 14:
                    gaiman.echo("");
                    _context21.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context21.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context21.next = 24;
                      break;
                    }
                    _context21.next = 22;
                    return $_istqbuster_a_17();
                  case 22:
                    _context21.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context21.next = 29;
                      break;
                    }
                    _context21.next = 27;
                    return $_istqbuster_a_17();
                  case 27:
                    _context21.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context21.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context21.next = 33;
                    return $_istqbuster_a_17();
                  case 33:
                    _context21.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context21.next = 40;
                      break;
                    }
                    _context21.next = 38;
                    return $_istqbuster_a_17();
                  case 38:
                    _context21.next = 44;
                    break;
                  case 40:
                    _context21.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context21.next = 44;
                    return $_istqbuster_a_16();
                  case 44:
                  case "end":
                    return _context21.stop();
                }
              }, _callee21);
            }));
            return _$_istqbuster_a_16.apply(this, arguments);
          };
          $_istqbuster_a_16 = function _$_istqbuster_a_71() {
            return _$_istqbuster_a_16.apply(this, arguments);
          };
          _$_istqbuster_a_15 = function _$_istqbuster_a_70() {
            _$_istqbuster_a_15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    gaiman.echo("");
                    _context20.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #15]", 35);
                  case 3:
                    _context20.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which activities are carried out within the planning of a formal review?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context20.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Collection of metrics for the evaluation of the effectiveness of the review", 35);
                  case 8:
                    _context20.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Answer any questions the participants may have", 35);
                  case 10:
                    _context20.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Definition and Verification of fulfillment of entry criteria for the review", 35);
                  case 12:
                    _context20.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Evaluation of the review findings against the exit criteria", 35);
                  case 14:
                    gaiman.echo("");
                    _context20.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context20.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context20.next = 24;
                      break;
                    }
                    _context20.next = 22;
                    return $_istqbuster_a_16();
                  case 22:
                    _context20.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context20.next = 29;
                      break;
                    }
                    _context20.next = 27;
                    return $_istqbuster_a_16();
                  case 27:
                    _context20.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context20.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context20.next = 33;
                    return $_istqbuster_a_16();
                  case 33:
                    _context20.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context20.next = 40;
                      break;
                    }
                    _context20.next = 38;
                    return $_istqbuster_a_16();
                  case 38:
                    _context20.next = 44;
                    break;
                  case 40:
                    _context20.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context20.next = 44;
                    return $_istqbuster_a_15();
                  case 44:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20);
            }));
            return _$_istqbuster_a_15.apply(this, arguments);
          };
          $_istqbuster_a_15 = function _$_istqbuster_a_69() {
            return _$_istqbuster_a_15.apply(this, arguments);
          };
          _$_istqbuster_a_14 = function _$_istqbuster_a_68() {
            _$_istqbuster_a_14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    gaiman.echo("");
                    _context19.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #14]", 35);
                  case 3:
                    _context19.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following options are roles in a formal review?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context19.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Developer, Moderator, Review leader, Reviewer, Tester", 35);
                  case 8:
                    _context19.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Author, Moderator, Manager, Reviewer, Developer", 35);
                  case 10:
                    _context19.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Author, Manager, Review leader, Reviewer, Designer", 35);
                  case 12:
                    _context19.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Author, Moderator, Review leader, Reviewer, Scribe", 35);
                  case 14:
                    gaiman.echo("");
                    _context19.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context19.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context19.next = 24;
                      break;
                    }
                    _context19.next = 22;
                    return $_istqbuster_a_15();
                  case 22:
                    _context19.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context19.next = 29;
                      break;
                    }
                    _context19.next = 27;
                    return $_istqbuster_a_15();
                  case 27:
                    _context19.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context19.next = 34;
                      break;
                    }
                    _context19.next = 32;
                    return $_istqbuster_a_15();
                  case 32:
                    _context19.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context19.next = 40;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context19.next = 38;
                    return $_istqbuster_a_15();
                  case 38:
                    _context19.next = 44;
                    break;
                  case 40:
                    _context19.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context19.next = 44;
                    return $_istqbuster_a_14();
                  case 44:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19);
            }));
            return _$_istqbuster_a_14.apply(this, arguments);
          };
          $_istqbuster_a_14 = function _$_istqbuster_a_67() {
            return _$_istqbuster_a_14.apply(this, arguments);
          };
          _$_istqbuster_a_13 = function _$_istqbuster_a_66() {
            _$_istqbuster_a_13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    gaiman.echo("");
                    _context18.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #13]", 35);
                  case 3:
                    _context18.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following should NOT be a trigger for maintenance testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context18.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Decision to test the maintainability of the software", 35);
                  case 8:
                    _context18.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Decision to test the system after migration to a new operating platform", 35);
                  case 10:
                    _context18.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Decision to test if archived data is possible to be retrieved", 35);
                  case 12:
                    _context18.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Decision to test after hot fixes", 35);
                  case 14:
                    gaiman.echo("");
                    _context18.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context18.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context18.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context18.next = 23;
                    return $_istqbuster_a_14();
                  case 23:
                    _context18.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context18.next = 30;
                      break;
                    }
                    _context18.next = 28;
                    return $_istqbuster_a_14();
                  case 28:
                    _context18.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context18.next = 35;
                      break;
                    }
                    _context18.next = 33;
                    return $_istqbuster_a_14();
                  case 33:
                    _context18.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context18.next = 40;
                      break;
                    }
                    _context18.next = 38;
                    return $_istqbuster_a_14();
                  case 38:
                    _context18.next = 44;
                    break;
                  case 40:
                    _context18.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context18.next = 44;
                    return $_istqbuster_a_13();
                  case 44:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18);
            }));
            return _$_istqbuster_a_13.apply(this, arguments);
          };
          $_istqbuster_a_13 = function _$_istqbuster_a_65() {
            return _$_istqbuster_a_13.apply(this, arguments);
          };
          _$_istqbuster_a_12 = function _$_istqbuster_a_64() {
            _$_istqbuster_a_12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    gaiman.echo("");
                    _context17.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #12]", 35);
                  case 3:
                    _context17.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following is the BEST definition of an incremental development model?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context17.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Defining requirements, designing software and testing are done in phases where in each phase a piece of the system is added", 35);
                  case 8:
                    _context17.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A phase in the development process should begin when the previous phase is complete", 35);
                  case 10:
                    _context17.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Testing is viewed as a separate phase which takes place after development has been completed", 35);
                  case 12:
                    _context17.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Testing is added to development as an increment", 35);
                  case 14:
                    gaiman.echo("");
                    _context17.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context17.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context17.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context17.next = 23;
                    return $_istqbuster_a_13();
                  case 23:
                    _context17.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context17.next = 30;
                      break;
                    }
                    _context17.next = 28;
                    return $_istqbuster_a_13();
                  case 28:
                    _context17.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context17.next = 35;
                      break;
                    }
                    _context17.next = 33;
                    return $_istqbuster_a_13();
                  case 33:
                    _context17.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context17.next = 40;
                      break;
                    }
                    _context17.next = 38;
                    return $_istqbuster_a_13();
                  case 38:
                    _context17.next = 44;
                    break;
                  case 40:
                    _context17.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context17.next = 44;
                    return $_istqbuster_a_12();
                  case 44:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }));
            return _$_istqbuster_a_12.apply(this, arguments);
          };
          $_istqbuster_a_12 = function _$_istqbuster_a_63() {
            return _$_istqbuster_a_12.apply(this, arguments);
          };
          _$_istqbuster_a_11 = function _$_istqbuster_a_62() {
            _$_istqbuster_a_11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    gaiman.echo("");
                    _context16.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #11]", 35);
                  case 3:
                    _context16.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following is TRUE?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context16.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Component testing verifies the functionality of software modules, program objects, and classes that are separately testable, whereas system testing verifies interfaces between components and interactions between different parts of the system", 35);
                  case 8:
                    _context16.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) To check if all code statements and code decision paths have been executed", 35);
                  case 10:
                    _context16.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) To check if all work process flows have been covered", 35);
                  case 12:
                    _context16.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) To cover all web page navigations", 35);
                  case 14:
                    gaiman.echo("");
                    _context16.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context16.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context16.next = 24;
                      break;
                    }
                    _context16.next = 22;
                    return $_istqbuster_a_12();
                  case 22:
                    _context16.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context16.next = 29;
                      break;
                    }
                    _context16.next = 27;
                    return $_istqbuster_a_12();
                  case 27:
                    _context16.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context16.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context16.next = 33;
                    return $_istqbuster_a_12();
                  case 33:
                    _context16.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context16.next = 40;
                      break;
                    }
                    _context16.next = 38;
                    return $_istqbuster_a_12();
                  case 38:
                    _context16.next = 44;
                    break;
                  case 40:
                    _context16.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context16.next = 44;
                    return $_istqbuster_a_11();
                  case 44:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }));
            return _$_istqbuster_a_11.apply(this, arguments);
          };
          $_istqbuster_a_11 = function _$_istqbuster_a_61() {
            return _$_istqbuster_a_11.apply(this, arguments);
          };
          _$_istqbuster_a_10 = function _$_istqbuster_a_60() {
            _$_istqbuster_a_10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    gaiman.echo("");
                    _context15.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #10]", 35);
                  case 3:
                    _context15.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements comparing component testing and system testing is TRUE?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context15.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Component testing verifies the functionality of software modules, program objects, and classes that are separately testable, whereas system testing verifies interfaces between components and interactions between different parts of the system", 35);
                  case 8:
                    _context15.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) To check if all code statements and code decision paths have been executed", 35);
                  case 10:
                    _context15.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) To check if all work process flows have been covered", 35);
                  case 12:
                    _context15.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) To cover all web page navigations", 35);
                  case 14:
                    gaiman.echo("");
                    _context15.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context15.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context15.next = 24;
                      break;
                    }
                    _context15.next = 22;
                    return $_istqbuster_a_11();
                  case 22:
                    _context15.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context15.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context15.next = 28;
                    return $_istqbuster_a_11();
                  case 28:
                    _context15.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context15.next = 35;
                      break;
                    }
                    _context15.next = 33;
                    return $_istqbuster_a_11();
                  case 33:
                    _context15.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context15.next = 40;
                      break;
                    }
                    _context15.next = 38;
                    return $_istqbuster_a_11();
                  case 38:
                    _context15.next = 44;
                    break;
                  case 40:
                    _context15.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context15.next = 44;
                    return $_istqbuster_a_10();
                  case 44:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15);
            }));
            return _$_istqbuster_a_10.apply(this, arguments);
          };
          $_istqbuster_a_10 = function _$_istqbuster_a_59() {
            return _$_istqbuster_a_10.apply(this, arguments);
          };
          _$_istqbuster_a_9 = function _$_istqbuster_a_58() {
            _$_istqbuster_a_9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    gaiman.echo("");
                    _context14.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #9]", 35);
                  case 3:
                    _context14.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]How can white-box testing be applied during user acceptance testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context14.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) To check if large volumes of data can be transferred between integrated systems", 35);
                  case 8:
                    _context14.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) To check if all code statements and code decision paths have been executed", 35);
                  case 10:
                    _context14.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) To check if all work process flows have been covered", 35);
                  case 12:
                    _context14.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) To cover all web page navigations", 35);
                  case 14:
                    gaiman.echo("");
                    _context14.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context14.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context14.next = 24;
                      break;
                    }
                    _context14.next = 22;
                    return $_istqbuster_a_10();
                  case 22:
                    _context14.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context14.next = 29;
                      break;
                    }
                    _context14.next = 27;
                    return $_istqbuster_a_10();
                  case 27:
                    _context14.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context14.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context14.next = 33;
                    return $_istqbuster_a_10();
                  case 33:
                    _context14.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context14.next = 40;
                      break;
                    }
                    _context14.next = 38;
                    return $_istqbuster_a_10();
                  case 38:
                    _context14.next = 44;
                    break;
                  case 40:
                    _context14.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context14.next = 44;
                    return $_istqbuster_a_9();
                  case 44:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14);
            }));
            return _$_istqbuster_a_9.apply(this, arguments);
          };
          $_istqbuster_a_9 = function _$_istqbuster_a_57() {
            return _$_istqbuster_a_9.apply(this, arguments);
          };
          _$_istqbuster_a_8 = function _$_istqbuster_a_56() {
            _$_istqbuster_a_8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    gaiman.echo("");
                    _context13.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #8]", 35);
                  case 3:
                    _context13.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Match the following test work products (1-4) with the right description (A-D):]", 35);
                  case 5:
                    gaiman.echo("");
                    _context13.next = 8;
                    return gaiman.echo_extra("[[;#94E2D5;]1]) Test suite", 35);
                  case 8:
                    _context13.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]2]) Test case", 35);
                  case 10:
                    _context13.next = 12;
                    return gaiman.echo_extra("[[;#94E2D5;]3]) Test script", 35);
                  case 12:
                    _context13.next = 14;
                    return gaiman.echo_extra("[[;#94E2D5;]4]) Test charter", 35);
                  case 14:
                    gaiman.echo("");
                    _context13.next = 17;
                    return gaiman.echo_extra("[[;#A6E3A1;]A]) A set of test scripts to be executed in a specific test run", 35);
                  case 17:
                    _context13.next = 19;
                    return gaiman.echo_extra("[[;#A6E3A1;]B]) A set of instructions for the execution of a test", 35);
                  case 19:
                    _context13.next = 21;
                    return gaiman.echo_extra("[[;#A6E3A1;]C]) Contains expected results", 35);
                  case 21:
                    _context13.next = 23;
                    return gaiman.echo_extra("[[;#A6E3A1;]D]) Documentation of test activities in session-based exploratory testing", 35);
                  case 23:
                    gaiman.echo("");
                    _context13.next = 26;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) 1A, 2C, 3B, 4D", 35);
                  case 26:
                    _context13.next = 28;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) 1D, 2B, 3A, 4C", 35);
                  case 28:
                    _context13.next = 30;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) 1A, 2C, 3D, 4B", 35);
                  case 30:
                    _context13.next = 32;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) 1D, 2C, 3B, 4A", 35);
                  case 32:
                    gaiman.echo("");
                    _context13.next = 35;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 35:
                    $_answer = _context13.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context13.next = 43;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context13.next = 41;
                    return $_istqbuster_a_9();
                  case 41:
                    _context13.next = 62;
                    break;
                  case 43:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context13.next = 48;
                      break;
                    }
                    _context13.next = 46;
                    return $_istqbuster_a_9();
                  case 46:
                    _context13.next = 62;
                    break;
                  case 48:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context13.next = 53;
                      break;
                    }
                    _context13.next = 51;
                    return $_istqbuster_a_9();
                  case 51:
                    _context13.next = 62;
                    break;
                  case 53:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context13.next = 58;
                      break;
                    }
                    _context13.next = 56;
                    return $_istqbuster_a_9();
                  case 56:
                    _context13.next = 62;
                    break;
                  case 58:
                    _context13.next = 60;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 60:
                    _context13.next = 62;
                    return $_istqbuster_a_8();
                  case 62:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
            return _$_istqbuster_a_8.apply(this, arguments);
          };
          $_istqbuster_a_8 = function _$_istqbuster_a_55() {
            return _$_istqbuster_a_8.apply(this, arguments);
          };
          _$_istqbuster_a_7 = function _$_istqbuster_a_54() {
            _$_istqbuster_a_7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    gaiman.echo("");
                    _context12.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #7]", 35);
                  case 3:
                    _context12.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following activities is part of the main activity (test analysis) in the test process?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context12.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Identifying any required infrastructure and tools", 35);
                  case 8:
                    _context12.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Creating test suites from test scripts", 35);
                  case 10:
                    _context12.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Analyzing lessons learned for process improvement", 35);
                  case 12:
                    _context12.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Evaluating the test basis for testability", 35);
                  case 14:
                    gaiman.echo("");
                    _context12.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context12.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context12.next = 24;
                      break;
                    }
                    _context12.next = 22;
                    return $_istqbuster_a_8();
                  case 22:
                    _context12.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context12.next = 29;
                      break;
                    }
                    _context12.next = 27;
                    return $_istqbuster_a_8();
                  case 27:
                    _context12.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context12.next = 34;
                      break;
                    }
                    _context12.next = 32;
                    return $_istqbuster_a_8();
                  case 32:
                    _context12.next = 44;
                    break;
                  case 34:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context12.next = 40;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context12.next = 38;
                    return $_istqbuster_a_8();
                  case 38:
                    _context12.next = 44;
                    break;
                  case 40:
                    _context12.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context12.next = 44;
                    return $_istqbuster_a_7();
                  case 44:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12);
            }));
            return _$_istqbuster_a_7.apply(this, arguments);
          };
          $_istqbuster_a_7 = function _$_istqbuster_a_53() {
            return _$_istqbuster_a_7.apply(this, arguments);
          };
          _$_istqbuster_a_6 = function _$_istqbuster_a_52() {
            _$_istqbuster_a_6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    gaiman.echo("");
                    _context11.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #6]", 35);
                  case 3:
                    _context11.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]In what way can testing be part of Quality Assurance?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context11.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) It ensures that requirements are detailed enough", 35);
                  case 8:
                    _context11.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Testing reduces the risk of poor software quality", 35);
                  case 10:
                    _context11.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) It ensures that standards in the organization are followed", 35);
                  case 12:
                    _context11.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) It measures the quality of software in terms of number of executed test cases", 35);
                  case 14:
                    gaiman.echo("");
                    _context11.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context11.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context11.next = 24;
                      break;
                    }
                    _context11.next = 22;
                    return $_istqbuster_a_7();
                  case 22:
                    _context11.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context11.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context11.next = 28;
                    return $_istqbuster_a_7();
                  case 28:
                    _context11.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context11.next = 35;
                      break;
                    }
                    _context11.next = 33;
                    return $_istqbuster_a_7();
                  case 33:
                    _context11.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context11.next = 40;
                      break;
                    }
                    _context11.next = 38;
                    return $_istqbuster_a_7();
                  case 38:
                    _context11.next = 44;
                    break;
                  case 40:
                    _context11.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context11.next = 44;
                    return $_istqbuster_a_6();
                  case 44:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
            return _$_istqbuster_a_6.apply(this, arguments);
          };
          $_istqbuster_a_6 = function _$_istqbuster_a_51() {
            return _$_istqbuster_a_6.apply(this, arguments);
          };
          _$_istqbuster_a_5 = function _$_istqbuster_a_50() {
            _$_istqbuster_a_5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    gaiman.echo("");
                    _context10.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #5]", 35);
                  case 3:
                    _context10.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Mr. Test has been testing software applications on mobile devices for a period of 5 years. He has a wealth of experience in testing mobile applications and achieves better results in a shorter time than others. Over several months, Mr. Test did not modify the existing automated test cases and did not create any new test cases. This leads to fewer and fewer defects being found by executing the tests. What principle of testing did Mr. Test not observe?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context10.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Testing depends on the environment", 35);
                  case 8:
                    _context10.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Exhaustive testing is not possible", 35);
                  case 10:
                    _context10.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Repeating of same tests will not find new defects", 35);
                  case 12:
                    _context10.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Defects cluster together", 35);
                  case 14:
                    gaiman.echo("");
                    _context10.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context10.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context10.next = 24;
                      break;
                    }
                    _context10.next = 22;
                    return $_istqbuster_a_6();
                  case 22:
                    _context10.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context10.next = 29;
                      break;
                    }
                    _context10.next = 27;
                    return $_istqbuster_a_6();
                  case 27:
                    _context10.next = 44;
                    break;
                  case 29:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context10.next = 35;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context10.next = 33;
                    return $_istqbuster_a_6();
                  case 33:
                    _context10.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context10.next = 40;
                      break;
                    }
                    _context10.next = 38;
                    return $_istqbuster_a_6();
                  case 38:
                    _context10.next = 44;
                    break;
                  case 40:
                    _context10.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context10.next = 44;
                    return $_istqbuster_a_5();
                  case 44:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
            return _$_istqbuster_a_5.apply(this, arguments);
          };
          $_istqbuster_a_5 = function _$_istqbuster_a_49() {
            return _$_istqbuster_a_5.apply(this, arguments);
          };
          _$_istqbuster_a_4 = function _$_istqbuster_a_48() {
            _$_istqbuster_a_4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    gaiman.echo("");
                    _context9.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #4]", 35);
                  case 3:
                    _context9.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the statements below describes the most common situation for a failure discovered during testing or in production?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context9.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The product crashed when the user selected an option in a dialog box", 35);
                  case 8:
                    _context9.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) The wrong version of a compiled source code file was included in the build", 35);
                  case 10:
                    _context9.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The computation algorithm used the wrong input variables", 35);
                  case 12:
                    _context9.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) The developer misinterpreted the requirement for the algorithm", 35);
                  case 14:
                    gaiman.echo("");
                    _context9.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context9.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context9.next = 25;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context9.next = 23;
                    return $_istqbuster_a_5();
                  case 23:
                    _context9.next = 44;
                    break;
                  case 25:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context9.next = 30;
                      break;
                    }
                    _context9.next = 28;
                    return $_istqbuster_a_5();
                  case 28:
                    _context9.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context9.next = 35;
                      break;
                    }
                    _context9.next = 33;
                    return $_istqbuster_a_5();
                  case 33:
                    _context9.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context9.next = 40;
                      break;
                    }
                    _context9.next = 38;
                    return $_istqbuster_a_5();
                  case 38:
                    _context9.next = 44;
                    break;
                  case 40:
                    _context9.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context9.next = 44;
                    return $_istqbuster_a_4();
                  case 44:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
            return _$_istqbuster_a_4.apply(this, arguments);
          };
          $_istqbuster_a_4 = function _$_istqbuster_a_47() {
            return _$_istqbuster_a_4.apply(this, arguments);
          };
          _$_istqbuster_a_3 = function _$_istqbuster_a_46() {
            _$_istqbuster_a_3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    gaiman.echo("");
                    _context8.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #3]", 35);
                  case 3:
                    _context8.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements correctly describes the difference between testing and debugging?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context8.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) Testing identifies the source of defects; debugging analyzes the defects and proposes prevention activities", 35);
                  case 8:
                    _context8.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of failures", 35);
                  case 10:
                    _context8.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) Testing removes faults; but debugging removes defects that cause the faults", 35);
                  case 12:
                    _context8.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Dynamic testing prevents the causes of failures; debugging removes the failures", 35);
                  case 14:
                    gaiman.echo("");
                    _context8.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context8.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context8.next = 24;
                      break;
                    }
                    _context8.next = 22;
                    return $_istqbuster_a_4();
                  case 22:
                    _context8.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context8.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context8.next = 28;
                    return $_istqbuster_a_4();
                  case 28:
                    _context8.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context8.next = 35;
                      break;
                    }
                    _context8.next = 33;
                    return $_istqbuster_a_4();
                  case 33:
                    _context8.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context8.next = 40;
                      break;
                    }
                    _context8.next = 38;
                    return $_istqbuster_a_4();
                  case 38:
                    _context8.next = 44;
                    break;
                  case 40:
                    _context8.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context8.next = 44;
                    return $_istqbuster_a_3();
                  case 44:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return _$_istqbuster_a_3.apply(this, arguments);
          };
          $_istqbuster_a_3 = function _$_istqbuster_a_45() {
            return _$_istqbuster_a_3.apply(this, arguments);
          };
          _$_istqbuster_a_2 = function _$_istqbuster_a_44() {
            _$_istqbuster_a_2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    gaiman.echo("");
                    _context7.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #2]", 35);
                  case 3:
                    _context7.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which of the following statements is a valid objective for testing?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context7.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) The test should start as late as possible so that development had enough time to create a good product", 35);
                  case 8:
                    _context7.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) To validate whether the test object works as expected by the users and other stakeholders", 35);
                  case 10:
                    _context7.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) To prove that all possible defects are identified", 35);
                  case 12:
                    _context7.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) To prove that any remaining defects will not cause any failures", 35);
                  case 14:
                    gaiman.echo("");
                    _context7.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context7.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context7.next = 24;
                      break;
                    }
                    _context7.next = 22;
                    return $_istqbuster_a_3();
                  case 22:
                    _context7.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context7.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context7.next = 28;
                    return $_istqbuster_a_3();
                  case 28:
                    _context7.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context7.next = 35;
                      break;
                    }
                    _context7.next = 33;
                    return $_istqbuster_a_3();
                  case 33:
                    _context7.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context7.next = 40;
                      break;
                    }
                    _context7.next = 38;
                    return $_istqbuster_a_3();
                  case 38:
                    _context7.next = 44;
                    break;
                  case 40:
                    _context7.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context7.next = 44;
                    return $_istqbuster_a_2();
                  case 44:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return _$_istqbuster_a_2.apply(this, arguments);
          };
          $_istqbuster_a_2 = function _$_istqbuster_a_43() {
            return _$_istqbuster_a_2.apply(this, arguments);
          };
          _$_istqbuster_a_ = function _$_istqbuster_a_42() {
            _$_istqbuster_a_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var $_answer;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    gaiman.echo("");
                    _context6.next = 3;
                    return gaiman.echo_extra("[[;#FFC773;]Question #1]", 35);
                  case 3:
                    _context6.next = 5;
                    return gaiman.echo_extra("[[;#F9E2AF;]Which one of the following answers describes a test condition?]", 35);
                  case 5:
                    gaiman.echo("");
                    _context6.next = 8;
                    return gaiman.echo_extra("[[;#F38BA8;]a]) A distinguishing characteristic of a component or system", 35);
                  case 8:
                    _context6.next = 10;
                    return gaiman.echo_extra("[[;#94E2D5;]b]) A testable aspect of a component or system identified as a basis for testing", 35);
                  case 10:
                    _context6.next = 12;
                    return gaiman.echo_extra("[[;#89B4FA;]c]) The degree to which a software product provides functions which meet stated and implied needs when the software is used under specified conditions", 35);
                  case 12:
                    _context6.next = 14;
                    return gaiman.echo_extra("[[;#F5C2E7;]d]) Test cases designed to execute combinations of conditions and actions resulting from them", 35);
                  case 14:
                    gaiman.echo("");
                    _context6.next = 17;
                    return gaiman.ask("[[;#94E2D5;]Select ONE option.] ");
                  case 17:
                    $_answer = _context6.sent;
                    gaiman.prompt("Answer> ");
                    if (!($$__m = String($_answer).match(/a/i), !!$$__m)) {
                      _context6.next = 24;
                      break;
                    }
                    _context6.next = 22;
                    return $_istqbuster_a_2();
                  case 22:
                    _context6.next = 44;
                    break;
                  case 24:
                    if (!($$__m = String($_answer).match(/b/i), !!$$__m)) {
                      _context6.next = 30;
                      break;
                    }
                    $_istqbuster_a_score += 1;
                    _context6.next = 28;
                    return $_istqbuster_a_2();
                  case 28:
                    _context6.next = 44;
                    break;
                  case 30:
                    if (!($$__m = String($_answer).match(/c/i), !!$$__m)) {
                      _context6.next = 35;
                      break;
                    }
                    _context6.next = 33;
                    return $_istqbuster_a_2();
                  case 33:
                    _context6.next = 44;
                    break;
                  case 35:
                    if (!($$__m = String($_answer).match(/d/i), !!$$__m)) {
                      _context6.next = 40;
                      break;
                    }
                    _context6.next = 38;
                    return $_istqbuster_a_2();
                  case 38:
                    _context6.next = 44;
                    break;
                  case 40:
                    _context6.next = 42;
                    return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
                  case 42:
                    _context6.next = 44;
                    return $_istqbuster_a_1();
                  case 44:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return _$_istqbuster_a_.apply(this, arguments);
          };
          $_istqbuster_a_1 = function _$_istqbuster_a_41() {
            return _$_istqbuster_a_.apply(this, arguments);
          };
          $_istqbuster_a_score = 0;
          $_istqbuster_b_score = 0;
          $_istqbuster_c_score = 0;
          $_greetings = '   [[;#F5C2E7;]_____, _________  _ __]               \r\n  [[;#F5C2E7;]( /(   (  /  /   )( /  )        _/_]   \r\n   [[;#F5C2E7;]/  `.   /  /_  /  /--< , , (   /  _  _]\r\n [[;#F5C2E7;]_/_(___)_/  (__\\/  /___/(_/_/_)_(__(/_/ (_]\r\n                 [[;#F5C2E7;]\\_]\r\n [[;#BAC2DE;]ISTQB Foundation Level Training Quiz]\r\n\r';
          gaiman.echo($_greetings);
          _context132.next = 260;
          return gaiman.sleep(100);
        case 260:
          _context132.next = 262;
          return gaiman.echo_extra("[[;#94E2D5;]We recommend relaxing music to concentrate]", 30);
        case 262:
          _context132.next = 264;
          return gaiman.echo_extra("[[;#94E2D5;]Do you want to activate it?]", 30);
        case 264:
          gaiman.echo("");
          _context132.next = 267;
          return gaiman.ask("[[;#A6E3A1;]yes]/[[;#F38BA8;]no]? ");
        case 267:
          $_music = _context132.sent;
          if (!($$__m = String($_music).match(/yes/i), !!$$__m)) {
            _context132.next = 274;
            break;
          }
          _context132.next = 271;
          return $_start_music();
        case 271:
          gaiman.echo("");
          _context132.next = 293;
          break;
        case 274:
          if (!($$__m = String($_music).match(/y/i), !!$$__m)) {
            _context132.next = 280;
            break;
          }
          _context132.next = 277;
          return $_start_music();
        case 277:
          gaiman.echo("");
          _context132.next = 293;
          break;
        case 280:
          if (!($$__m = String($_music).match(/no/i), !!$$__m)) {
            _context132.next = 284;
            break;
          }
          gaiman.echo("");
          _context132.next = 293;
          break;
        case 284:
          if (!($$__m = String($_music).match(/n/i), !!$$__m)) {
            _context132.next = 288;
            break;
          }
          gaiman.echo("");
          _context132.next = 293;
          break;
        case 288:
          gaiman.echo("");
          _context132.next = 291;
          return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
        case 291:
          _context132.next = 293;
          return $_restart_music_wizard();
        case 293:
          _context132.next = 295;
          return gaiman.echo_extra("[[;#F5C2E7;]Rules:]", 40);
        case 295:
          gaiman.echo("");
          _context132.next = 298;
          return gaiman.echo_extra("[[;#94E2D5;]1]) Each correct question gives you 1 point", 40);
        case 298:
          _context132.next = 300;
          return gaiman.echo_extra("[[;#94E2D5;]2]) If you get 26 questions or more correct you pass", 40);
        case 300:
          _context132.next = 302;
          return gaiman.echo_extra("[[;#94E2D5;]3]) You have [[;#F5C2E7;]60] minutes", 40);
        case 302:
          _context132.next = 304;
          return gaiman.echo_extra("[[;#94E2D5;]4]) Manage your time like a real exam", 40);
        case 304:
          gaiman.echo("");
          _context132.next = 307;
          return gaiman.echo_extra("[[;#89B4FA;]Good luck]", 40);
        case 307:
          gaiman.echo("");
          _context132.next = 310;
          return gaiman.echo_extra("[[;#F9E2AF;]Which exam would you like to practice?]", 40);
        case 310:
          gaiman.echo("");
          _context132.next = 313;
          return gaiman.echo_extra("Type the exam letter that you want:", 35);
        case 313:
          _context132.next = 315;
          return gaiman.ask("[[;#F38BA8;]A], [[;#94E2D5;]B] or [[;#89B4FA;]C] ");
        case 315:
          $_confirm = _context132.sent;
          if (!($$__m = String($_confirm).match(/a/i), !!$$__m)) {
            _context132.next = 324;
            break;
          }
          gaiman.echo("");
          _context132.next = 320;
          return gaiman.echo_extra("[[;#F38BA8;]Starting ISTQB foundation level exam A]", 30);
        case 320:
          _context132.next = 322;
          return $_istqbuster_a_1();
        case 322:
          _context132.next = 344;
          break;
        case 324:
          if (!($$__m = String($_confirm).match(/b/i), !!$$__m)) {
            _context132.next = 332;
            break;
          }
          gaiman.echo("");
          _context132.next = 328;
          return gaiman.echo_extra("[[;#94E2D5;]Starting ISTQB foundation level exam B]", 30);
        case 328:
          _context132.next = 330;
          return $_istqbuster_b_1();
        case 330:
          _context132.next = 344;
          break;
        case 332:
          if (!($$__m = String($_confirm).match(/c/i), !!$$__m)) {
            _context132.next = 340;
            break;
          }
          gaiman.echo("");
          _context132.next = 336;
          return gaiman.echo_extra("[[;#89B4FA;]Starting ISTQB foundation level exam C]", 30);
        case 336:
          _context132.next = 338;
          return $_istqbuster_c_1();
        case 338:
          _context132.next = 344;
          break;
        case 340:
          _context132.next = 342;
          return gaiman.echo_extra("[[;#F5C2E7;]Looks like you typed an incorrect letter or word...]", 30);
        case 342:
          _context132.next = 344;
          return $_restart();
        case 344:
          _context132.next = 349;
          break;
        case 346:
          _context132.prev = 346;
          _context132.t0 = _context132["catch"](0);
          gaiman.error(_context132.t0);
        case 349:
        case "end":
          return _context132.stop();
      }
    }, _callee132, null, [[0, 346]]);
  }));
  return _main.apply(this, arguments);
}