(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~actioncable"],{

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/adapters.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/adapters.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  logger: typeof console !== "undefined" ? console : undefined,
  WebSocket: typeof WebSocket !== "undefined" ? WebSocket : undefined
});

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/adapters.js");
/* harmony import */ var _connection_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection_monitor */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection_monitor.js");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/internal.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js");
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





// Encapsulate the cable connection held by the consumer. This is an internal class not intended for direct user manipulation.

var message_types = _internal__WEBPACK_IMPORTED_MODULE_2__["default"].message_types,
  protocols = _internal__WEBPACK_IMPORTED_MODULE_2__["default"].protocols;
var supportedProtocols = protocols.slice(0, protocols.length - 1);
var indexOf = [].indexOf;
var Connection = /*#__PURE__*/function () {
  function Connection(consumer) {
    _classCallCheck(this, Connection);
    this.open = this.open.bind(this);
    this.consumer = consumer;
    this.subscriptions = this.consumer.subscriptions;
    this.monitor = new _connection_monitor__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.disconnected = true;
  }
  return _createClass(Connection, [{
    key: "send",
    value: function send(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "open",
    value: function open() {
      if (this.isActive()) {
        _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Attempted to open WebSocket, but existing socket is ".concat(this.getState()));
        return false;
      } else {
        var socketProtocols = [].concat(_toConsumableArray(protocols), _toConsumableArray(this.consumer.subprotocols || []));
        _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Opening WebSocket, current state is ".concat(this.getState(), ", subprotocols: ").concat(socketProtocols));
        if (this.webSocket) {
          this.uninstallEventHandlers();
        }
        this.webSocket = new _adapters__WEBPACK_IMPORTED_MODULE_0__["default"].WebSocket(this.consumer.url, socketProtocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          allowReconnect: true
        },
        allowReconnect = _ref.allowReconnect;
      if (!allowReconnect) {
        this.monitor.stop();
      }
      // Avoid closing websockets in a "connecting" state due to Safari 15.1+ bug. See: https://github.com/rails/rails/issues/43835#issuecomment-1002288478
      if (this.isOpen()) {
        return this.webSocket.close();
      }
    }
  }, {
    key: "reopen",
    value: function reopen() {
      _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Reopening WebSocket, current state is ".concat(this.getState()));
      if (this.isActive()) {
        try {
          return this.close();
        } catch (error) {
          _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Failed to reopen WebSocket", error);
        } finally {
          _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Reopening WebSocket in ".concat(this.constructor.reopenDelay, "ms"));
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    }
  }, {
    key: "getProtocol",
    value: function getProtocol() {
      if (this.webSocket) {
        return this.webSocket.protocol;
      }
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.isState("open");
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.isState("open", "connecting");
    }
  }, {
    key: "triedToReconnect",
    value: function triedToReconnect() {
      return this.monitor.reconnectAttempts > 0;
    }

    // Private
  }, {
    key: "isProtocolSupported",
    value: function isProtocolSupported() {
      return indexOf.call(supportedProtocols, this.getProtocol()) >= 0;
    }
  }, {
    key: "isState",
    value: function isState() {
      for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }
      return indexOf.call(states, this.getState()) >= 0;
    }
  }, {
    key: "getState",
    value: function getState() {
      if (this.webSocket) {
        for (var state in _adapters__WEBPACK_IMPORTED_MODULE_0__["default"].WebSocket) {
          if (_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].WebSocket[state] === this.webSocket.readyState) {
            return state.toLowerCase();
          }
        }
      }
      return null;
    }
  }, {
    key: "installEventHandlers",
    value: function installEventHandlers() {
      for (var eventName in this.events) {
        var handler = this.events[eventName].bind(this);
        this.webSocket["on".concat(eventName)] = handler;
      }
    }
  }, {
    key: "uninstallEventHandlers",
    value: function uninstallEventHandlers() {
      for (var eventName in this.events) {
        this.webSocket["on".concat(eventName)] = function () {};
      }
    }
  }]);
}();
Connection.reopenDelay = 500;
Connection.prototype.events = {
  message: function message(event) {
    if (!this.isProtocolSupported()) {
      return;
    }
    var _JSON$parse = JSON.parse(event.data),
      identifier = _JSON$parse.identifier,
      message = _JSON$parse.message,
      reason = _JSON$parse.reason,
      reconnect = _JSON$parse.reconnect,
      type = _JSON$parse.type;
    this.monitor.recordMessage();
    switch (type) {
      case message_types.welcome:
        if (this.triedToReconnect()) {
          this.reconnectAttempted = true;
        }
        this.monitor.recordConnect();
        return this.subscriptions.reload();
      case message_types.disconnect:
        _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Disconnecting. Reason: ".concat(reason));
        return this.close({
          allowReconnect: reconnect
        });
      case message_types.ping:
        return null;
      case message_types.confirmation:
        this.subscriptions.confirmSubscription(identifier);
        if (this.reconnectAttempted) {
          this.reconnectAttempted = false;
          return this.subscriptions.notify(identifier, "connected", {
            reconnected: true
          });
        } else {
          return this.subscriptions.notify(identifier, "connected", {
            reconnected: false
          });
        }
      case message_types.rejection:
        return this.subscriptions.reject(identifier);
      default:
        return this.subscriptions.notify(identifier, "received", message);
    }
  },
  open: function open() {
    _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("WebSocket onopen event, using '".concat(this.getProtocol(), "' subprotocol"));
    this.disconnected = false;
    if (!this.isProtocolSupported()) {
      _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("Protocol is unsupported. Stopping monitor and disconnecting.");
      return this.close({
        allowReconnect: false
      });
    }
  },
  close: function close(event) {
    _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("WebSocket onclose event");
    if (this.disconnected) {
      return;
    }
    this.disconnected = true;
    this.monitor.recordDisconnect();
    return this.subscriptions.notifyAll("disconnected", {
      willAttemptReconnect: this.monitor.isRunning()
    });
  },
  error: function error() {
    _logger__WEBPACK_IMPORTED_MODULE_3__["default"].log("WebSocket onerror event");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Connection);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection_monitor.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection_monitor.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// Responsible for ensuring the cable connection is in good health by validating the heartbeat pings sent from the server, and attempting
// revival reconnections if things go astray. Internal class, not intended for direct user manipulation.

var now = function now() {
  return new Date().getTime();
};
var secondsSince = function secondsSince(time) {
  return (now() - time) / 1000;
};
var ConnectionMonitor = /*#__PURE__*/function () {
  function ConnectionMonitor(connection) {
    _classCallCheck(this, ConnectionMonitor);
    this.visibilityDidChange = this.visibilityDidChange.bind(this);
    this.connection = connection;
    this.reconnectAttempts = 0;
  }
  return _createClass(ConnectionMonitor, [{
    key: "start",
    value: function start() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        addEventListener("visibilitychange", this.visibilityDidChange);
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor started. stale threshold = ".concat(this.constructor.staleThreshold, " s"));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        removeEventListener("visibilitychange", this.visibilityDidChange);
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor stopped");
      }
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.startedAt && !this.stoppedAt;
    }
  }, {
    key: "recordMessage",
    value: function recordMessage() {
      this.pingedAt = now();
    }
  }, {
    key: "recordConnect",
    value: function recordConnect() {
      this.reconnectAttempts = 0;
      delete this.disconnectedAt;
      _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor recorded connect");
    }
  }, {
    key: "recordDisconnect",
    value: function recordDisconnect() {
      this.disconnectedAt = now();
      _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor recorded disconnect");
    }

    // Private
  }, {
    key: "startPolling",
    value: function startPolling() {
      this.stopPolling();
      this.poll();
    }
  }, {
    key: "stopPolling",
    value: function stopPolling() {
      clearTimeout(this.pollTimeout);
    }
  }, {
    key: "poll",
    value: function poll() {
      var _this = this;
      this.pollTimeout = setTimeout(function () {
        _this.reconnectIfStale();
        _this.poll();
      }, this.getPollInterval());
    }
  }, {
    key: "getPollInterval",
    value: function getPollInterval() {
      var _this$constructor = this.constructor,
        staleThreshold = _this$constructor.staleThreshold,
        reconnectionBackoffRate = _this$constructor.reconnectionBackoffRate;
      var backoff = Math.pow(1 + reconnectionBackoffRate, Math.min(this.reconnectAttempts, 10));
      var jitterMax = this.reconnectAttempts === 0 ? 1.0 : reconnectionBackoffRate;
      var jitter = jitterMax * Math.random();
      return staleThreshold * 1000 * backoff * (1 + jitter);
    }
  }, {
    key: "reconnectIfStale",
    value: function reconnectIfStale() {
      if (this.connectionIsStale()) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor detected stale connection. reconnectAttempts = ".concat(this.reconnectAttempts, ", time stale = ").concat(secondsSince(this.refreshedAt), " s, stale threshold = ").concat(this.constructor.staleThreshold, " s"));
        this.reconnectAttempts++;
        if (this.disconnectedRecently()) {
          _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor skipping reopening recent disconnect. time disconnected = ".concat(secondsSince(this.disconnectedAt), " s"));
        } else {
          _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor reopening");
          this.connection.reopen();
        }
      }
    }
  }, {
    key: "refreshedAt",
    get: function get() {
      return this.pingedAt ? this.pingedAt : this.startedAt;
    }
  }, {
    key: "connectionIsStale",
    value: function connectionIsStale() {
      return secondsSince(this.refreshedAt) > this.constructor.staleThreshold;
    }
  }, {
    key: "disconnectedRecently",
    value: function disconnectedRecently() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    }
  }, {
    key: "visibilityDidChange",
    value: function visibilityDidChange() {
      var _this2 = this;
      if (document.visibilityState === "visible") {
        setTimeout(function () {
          if (_this2.connectionIsStale() || !_this2.connection.isOpen()) {
            _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ".concat(document.visibilityState));
            _this2.connection.reopen();
          }
        }, 200);
      }
    }
  }]);
}();
ConnectionMonitor.staleThreshold = 6; // Server::Connections::BEAT_INTERVAL * 2 (missed two pings)
ConnectionMonitor.reconnectionBackoffRate = 0.15;
/* harmony default export */ __webpack_exports__["default"] = (ConnectionMonitor);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/consumer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/consumer.js ***!
  \********************************************************************************************/
/*! exports provided: default, createWebSocketURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebSocketURL", function() { return createWebSocketURL; });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection.js");
/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptions */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscriptions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// The ActionCable.Consumer establishes the connection to a server-side Ruby Connection object. Once established,
// the ActionCable.ConnectionMonitor will ensure that its properly maintained through heartbeats and checking for stale updates.
// The Consumer instance is also the gateway to establishing subscriptions to desired channels through the #createSubscription
// method.
//
// The following example shows how this can be set up:
//
//   App = {}
//   App.cable = ActionCable.createConsumer("ws://example.com/accounts/1")
//   App.appearance = App.cable.subscriptions.create("AppearanceChannel")
//
// For more details on how you'd configure an actual channel subscription, see ActionCable.Subscription.
//
// When a consumer is created, it automatically connects with the server.
//
// To disconnect from the server, call
//
//   App.cable.disconnect()
//
// and to restart the connection:
//
//   App.cable.connect()
//
// Any channel subscriptions which existed prior to disconnecting will
// automatically resubscribe.
var Consumer = /*#__PURE__*/function () {
  function Consumer(url) {
    _classCallCheck(this, Consumer);
    this._url = url;
    this.subscriptions = new _subscriptions__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.connection = new _connection__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.subprotocols = [];
  }
  return _createClass(Consumer, [{
    key: "url",
    get: function get() {
      return createWebSocketURL(this._url);
    }
  }, {
    key: "send",
    value: function send(data) {
      return this.connection.send(data);
    }
  }, {
    key: "connect",
    value: function connect() {
      return this.connection.open();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      return this.connection.close({
        allowReconnect: false
      });
    }
  }, {
    key: "ensureActiveConnection",
    value: function ensureActiveConnection() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    }
  }, {
    key: "addSubProtocol",
    value: function addSubProtocol(subprotocol) {
      this.subprotocols = [].concat(_toConsumableArray(this.subprotocols), [subprotocol]);
    }
  }]);
}();

function createWebSocketURL(url) {
  if (typeof url === "function") {
    url = url();
  }
  if (url && !/^wss?:/i.test(url)) {
    var a = document.createElement("a");
    a.href = url;
    // Fix populating Location properties in IE. Otherwise, protocol will be blank.
    a.href = a.href;
    a.protocol = a.protocol.replace("http", "ws");
    return a.href;
  } else {
    return url;
  }
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/index.js ***!
  \*****************************************************************************************/
/*! exports provided: Connection, ConnectionMonitor, Consumer, INTERNAL, Subscription, Subscriptions, SubscriptionGuarantor, adapters, createWebSocketURL, logger, createConsumer, getConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConsumer", function() { return createConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return _connection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _connection_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection_monitor */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/connection_monitor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionMonitor", function() { return _connection_monitor__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumer */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/consumer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return _consumer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebSocketURL", function() { return _consumer__WEBPACK_IMPORTED_MODULE_2__["createWebSocketURL"]; });

/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/internal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INTERNAL", function() { return _internal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscription */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _subscription__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscriptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriptions", function() { return _subscriptions__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _subscription_guarantor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription_guarantor */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription_guarantor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionGuarantor", function() { return _subscription_guarantor__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adapters */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/adapters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adapters", function() { return _adapters__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_8__["default"]; });











function createConsumer() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getConfig("url") || _internal__WEBPACK_IMPORTED_MODULE_3__["default"].default_mount_path;
  return new _consumer__WEBPACK_IMPORTED_MODULE_2__["default"](url);
}
function getConfig(name) {
  var element = document.head.querySelector("meta[name='action-cable-".concat(name, "']"));
  if (element) {
    return element.getAttribute("content");
  }
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/internal.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/internal.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "message_types": {
    "welcome": "welcome",
    "disconnect": "disconnect",
    "ping": "ping",
    "confirmation": "confirm_subscription",
    "rejection": "reject_subscription"
  },
  "disconnect_reasons": {
    "unauthorized": "unauthorized",
    "invalid_request": "invalid_request",
    "server_restart": "server_restart",
    "remote": "remote"
  },
  "default_mount_path": "/cable",
  "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
});

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/adapters.js");


// The logger is disabled by default. You can enable it with:
//
//   ActionCable.logger.enabled = true
//
//   Example:
//
//   import * as ActionCable from '@rails/actioncable'
//
//   ActionCable.logger.enabled = true
//   ActionCable.logger.log('Connection Established.')
//

/* harmony default export */ __webpack_exports__["default"] = ({
  log: function log() {
    if (this.enabled) {
      var _adapters$logger;
      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }
      messages.push(Date.now());
      (_adapters$logger = _adapters__WEBPACK_IMPORTED_MODULE_0__["default"].logger).log.apply(_adapters$logger, ["[ActionCable]"].concat(messages));
    }
  }
});

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// A new subscription is created through the ActionCable.Subscriptions instance available on the consumer.
// It provides a number of callbacks and a method for calling remote procedure calls on the corresponding
// Channel instance on the server side.
//
// An example demonstrates the basic functionality:
//
//   App.appearance = App.cable.subscriptions.create("AppearanceChannel", {
//     connected() {
//       // Called once the subscription has been successfully completed
//     },
//
//     disconnected({ willAttemptReconnect: boolean }) {
//       // Called when the client has disconnected with the server.
//       // The object will have an `willAttemptReconnect` property which
//       // says whether the client has the intention of attempting
//       // to reconnect.
//     },
//
//     appear() {
//       this.perform('appear', {appearing_on: this.appearingOn()})
//     },
//
//     away() {
//       this.perform('away')
//     },
//
//     appearingOn() {
//       $('main').data('appearing-on')
//     }
//   })
//
// The methods #appear and #away forward their intent to the remote AppearanceChannel instance on the server
// by calling the `perform` method with the first parameter being the action (which maps to AppearanceChannel#appear/away).
// The second parameter is a hash that'll get JSON encoded and made available on the server in the data parameter.
//
// This is how the server component would look:
//
//   class AppearanceChannel < ApplicationActionCable::Channel
//     def subscribed
//       current_user.appear
//     end
//
//     def unsubscribed
//       current_user.disappear
//     end
//
//     def appear(data)
//       current_user.appear on: data['appearing_on']
//     end
//
//     def away
//       current_user.away
//     end
//   end
//
// The "AppearanceChannel" name is automatically mapped between the client-side subscription creation and the server-side Ruby class name.
// The AppearanceChannel#appear/away public methods are exposed automatically to client-side invocation through the perform method.

var extend = function extend(object, properties) {
  if (properties != null) {
    for (var key in properties) {
      var value = properties[key];
      object[key] = value;
    }
  }
  return object;
};
var Subscription = /*#__PURE__*/function () {
  function Subscription(consumer) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mixin = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, Subscription);
    this.consumer = consumer;
    this.identifier = JSON.stringify(params);
    extend(this, mixin);
  }

  // Perform a channel action with the optional data passed as an attribute
  return _createClass(Subscription, [{
    key: "perform",
    value: function perform(action) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.action = action;
      return this.send(data);
    }
  }, {
    key: "send",
    value: function send(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      return this.consumer.subscriptions.remove(this);
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription_guarantor.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription_guarantor.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// Responsible for ensuring channel subscribe command is confirmed, retrying until confirmation is received.
// Internal class, not intended for direct user manipulation.
var SubscriptionGuarantor = /*#__PURE__*/function () {
  function SubscriptionGuarantor(subscriptions) {
    _classCallCheck(this, SubscriptionGuarantor);
    this.subscriptions = subscriptions;
    this.pendingSubscriptions = [];
  }
  return _createClass(SubscriptionGuarantor, [{
    key: "guarantee",
    value: function guarantee(subscription) {
      if (this.pendingSubscriptions.indexOf(subscription) == -1) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("SubscriptionGuarantor guaranteeing ".concat(subscription.identifier));
        this.pendingSubscriptions.push(subscription);
      } else {
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("SubscriptionGuarantor already guaranteeing ".concat(subscription.identifier));
      }
      this.startGuaranteeing();
    }
  }, {
    key: "forget",
    value: function forget(subscription) {
      _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("SubscriptionGuarantor forgetting ".concat(subscription.identifier));
      this.pendingSubscriptions = this.pendingSubscriptions.filter(function (s) {
        return s !== subscription;
      });
    }
  }, {
    key: "startGuaranteeing",
    value: function startGuaranteeing() {
      this.stopGuaranteeing();
      this.retrySubscribing();
    }
  }, {
    key: "stopGuaranteeing",
    value: function stopGuaranteeing() {
      clearTimeout(this.retryTimeout);
    }
  }, {
    key: "retrySubscribing",
    value: function retrySubscribing() {
      var _this = this;
      this.retryTimeout = setTimeout(function () {
        if (_this.subscriptions && typeof _this.subscriptions.subscribe === "function") {
          _this.pendingSubscriptions.map(function (subscription) {
            _logger__WEBPACK_IMPORTED_MODULE_0__["default"].log("SubscriptionGuarantor resubscribing ".concat(subscription.identifier));
            _this.subscriptions.subscribe(subscription);
          });
        }
      }, 500);
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (SubscriptionGuarantor);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscriptions.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscriptions.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscriptions; });
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription.js");
/* harmony import */ var _subscription_guarantor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription_guarantor */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/subscription_guarantor.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// Collection class for creating (and internally managing) channel subscriptions.
// The only method intended to be triggered by the user is ActionCable.Subscriptions#create,
// and it should be called through the consumer like so:
//
//   App = {}
//   App.cable = ActionCable.createConsumer("ws://example.com/accounts/1")
//   App.appearance = App.cable.subscriptions.create("AppearanceChannel")
//
// For more details on how you'd configure an actual channel subscription, see ActionCable.Subscription.
var Subscriptions = /*#__PURE__*/function () {
  function Subscriptions(consumer) {
    _classCallCheck(this, Subscriptions);
    this.consumer = consumer;
    this.guarantor = new _subscription_guarantor__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.subscriptions = [];
  }
  return _createClass(Subscriptions, [{
    key: "create",
    value: function create(channelName, mixin) {
      var channel = channelName;
      var params = _typeof(channel) === "object" ? channel : {
        channel: channel
      };
      var subscription = new _subscription__WEBPACK_IMPORTED_MODULE_0__["default"](this.consumer, params, mixin);
      return this.add(subscription);
    }

    // Private
  }, {
    key: "add",
    value: function add(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.subscribe(subscription);
      return subscription;
    }
  }, {
    key: "remove",
    value: function remove(subscription) {
      this.forget(subscription);
      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }
      return subscription;
    }
  }, {
    key: "reject",
    value: function reject(identifier) {
      var _this = this;
      return this.findAll(identifier).map(function (subscription) {
        _this.forget(subscription);
        _this.notify(subscription, "rejected");
        return subscription;
      });
    }
  }, {
    key: "forget",
    value: function forget(subscription) {
      this.guarantor.forget(subscription);
      this.subscriptions = this.subscriptions.filter(function (s) {
        return s !== subscription;
      });
      return subscription;
    }
  }, {
    key: "findAll",
    value: function findAll(identifier) {
      return this.subscriptions.filter(function (s) {
        return s.identifier === identifier;
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this2 = this;
      return this.subscriptions.map(function (subscription) {
        return _this2.subscribe(subscription);
      });
    }
  }, {
    key: "notifyAll",
    value: function notifyAll(callbackName) {
      var _this3 = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return this.subscriptions.map(function (subscription) {
        return _this3.notify.apply(_this3, [subscription, callbackName].concat(args));
      });
    }
  }, {
    key: "notify",
    value: function notify(subscription, callbackName) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      var subscriptions;
      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }
      return subscriptions.map(function (subscription) {
        return typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : undefined;
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(subscription) {
      if (this.sendCommand(subscription, "subscribe")) {
        this.guarantor.guarantee(subscription);
      }
    }
  }, {
    key: "confirmSubscription",
    value: function confirmSubscription(identifier) {
      var _this4 = this;
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].log("Subscription confirmed ".concat(identifier));
      this.findAll(identifier).map(function (subscription) {
        return _this4.guarantor.forget(subscription);
      });
    }
  }, {
    key: "sendCommand",
    value: function sendCommand(subscription, command) {
      var identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=vendors~actioncable-42c6398fe66c7e1fe4a8.chunk.js.map