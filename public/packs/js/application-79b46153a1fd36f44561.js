/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"application": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"vendors~actioncable":"vendors~actioncable"}[chunkId]||chunkId) + "-" + {"vendors~actioncable":"42c6398fe66c7e1fe4a8"}[chunkId] + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/building_locations.js":
/*!**********************************************!*\
  !*** ./app/javascript/building_locations.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("turbo:load", function () {
  var locationInput = document.getElementById("location-search");
  if (locationInput) {
    var autocomplete = new google.maps.places.Autocomplete(locationInput, {
      types: ["geocode"],
      // Limit suggestions to geographical locations
      componentRestrictions: {
        country: "us"
      } // Restrict to a specific country (optional)
    });

    // Set up event listener for when a place is selected
    autocomplete.addListener("place_changed", function () {
      var place = autocomplete.getPlace();
      if (place.geometry) {
        // Extract data from selected location if necessary
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        console.log("Selected location:", place.formatted_address, latitude, longitude);

        // Optionally update hidden fields or perform an action
        document.getElementById("latitude").value = latitude;
        document.getElementById("longitude").value = longitude;
      }
    });
  }
});

/***/ }),

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");
channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/controllers sync recursive _controller\\.js$":
/*!**********************************************************!*\
  !*** ./app/javascript/controllers sync _controller\.js$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./location_controller.js": "./app/javascript/controllers/location_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/controllers sync recursive _controller\\.js$";

/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");
// Load all the controllers within this directory and all subdirectories. 
// Controller files must be named *_controller.js.



var application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start();
var context = __webpack_require__("./app/javascript/controllers sync recursive _controller\\.js$");
application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context));

/***/ }),

/***/ "./app/javascript/controllers/location_controller.js":
/*!***********************************************************!*\
  !*** ./app/javascript/controllers/location_controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (this.hasFieldTarget) {
        this.initAutocomplete();
      }
      this.initializeMaps();
    }
  }, {
    key: "initializeMaps",
    value: function initializeMaps() {
      var _this = this;
      var defaultLatitude = 40.7128; // Default location: New York
      var defaultLongitude = -74.0060;
      setTimeout(function () {
        _this.mapTargets.forEach(function (mapElement) {
          var latitude = parseFloat(mapElement.dataset.locationLatitude) || defaultLatitude;
          var longitude = parseFloat(mapElement.dataset.locationLongitude) || defaultLongitude;
          if (!isNaN(latitude) && !isNaN(longitude)) {
            _this.createMap(mapElement, latitude, longitude);
          } else {
            console.warn('Invalid latitude or longitude for map initialization');
          }
        });
      }, 500);
    }
  }, {
    key: "initAutocomplete",
    value: function initAutocomplete() {
      this.autocomplete = new google.maps.places.Autocomplete(this.fieldTarget);
      this.autocomplete.addListener("place_changed", this.handlePlaceChanged.bind(this));
    }
  }, {
    key: "handlePlaceChanged",
    value: function handlePlaceChanged() {
      var place = this.autocomplete.getPlace();
      if (place.geometry) {
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();

        // Update hidden fields with new location
        this.latitudeTarget.value = latitude;
        this.longitudeTarget.value = longitude;
        this.locationNameTarget.value = place.formatted_address;

        // Update the address display
        this.addressTarget.textContent = place.formatted_address;

        // Update the map with the new location
        this.updateMap(place.geometry.location);
      }
    }
  }, {
    key: "createMap",
    value: function createMap(mapElement, latitude, longitude) {
      var location = new google.maps.LatLng(latitude, longitude);
      this.map = new google.maps.Map(mapElement, {
        center: location,
        zoom: 15
      });
      new google.maps.Marker({
        position: location,
        map: this.map
      });
    }
  }, {
    key: "updateMap",
    value: function updateMap(location) {
      this.map.setCenter(location);
      this.map.setZoom(15);
      new google.maps.Marker({
        position: location,
        map: this.map
      });
    }
  }]);
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);
_default.targets = ["field", "map", "address", "latitude", "longitude", "locationName"];


/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hotwired_turbo_rails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/turbo-rails */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _building_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../building_locations */ "./app/javascript/building_locations.js");
/* harmony import */ var _building_locations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_building_locations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google_maps */ "./app/javascript/packs/google_maps.js");
/* harmony import */ var _google_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_google_maps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! controllers */ "./app/javascript/controllers/index.js");
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.









_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_3__["start"]();


/***/ }),

/***/ "./app/javascript/packs/google_maps.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/google_maps.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.initMap = function () {
  console.log("initMap function loaded!");
  var event = new Event('google-maps-callback');
  window.dispatchEvent(event);
};

/***/ }),

/***/ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js ***!
  \******************************************************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function() { return definitionForModuleAndIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function() { return definitionForModuleWithContextAndKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
/*
Stimulus Webpack Helpers 1.0.0
Copyright © 2021 Basecamp, LLC
 */
function definitionsFromContext(context) {
  return context.keys().map(function (key) {
    return definitionForModuleWithContextAndKey(context, key);
  }).filter(function (value) {
    return value;
  });
}
function definitionForModuleWithContextAndKey(context, key) {
  var identifier = identifierForContextKey(key);
  if (identifier) {
    return definitionForModuleAndIdentifier(context(key), identifier);
  }
}
function definitionForModuleAndIdentifier(module, identifier) {
  var controllerConstructor = module["default"];
  if (typeof controllerConstructor == "function") {
    return {
      identifier: identifier,
      controllerConstructor: controllerConstructor
    };
  }
}
function identifierForContextKey(key) {
  var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
  if (logicalName) {
    return logicalName.replace(/_/g, "-").replace(/\//g, "--");
  }
}


/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js ***!
  \**************************************************************************/
/*! exports provided: getConsumer, setConsumer, createConsumer, subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsumer", function() { return getConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConsumer", function() { return setConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConsumer", function() { return createConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var consumer;
function getConsumer() {
  return _getConsumer.apply(this, arguments);
}
function _getConsumer() {
  _getConsumer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", consumer || setConsumer(createConsumer().then(setConsumer)));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getConsumer.apply(this, arguments);
}
function setConsumer(newConsumer) {
  return consumer = newConsumer;
}
function createConsumer() {
  return _createConsumer.apply(this, arguments);
}
function _createConsumer() {
  _createConsumer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _yield$import, createConsumer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.e(/*! import() | actioncable */ "vendors~actioncable").then(__webpack_require__.bind(null, /*! @rails/actioncable/src */ "./node_modules/@hotwired/turbo-rails/node_modules/@rails/actioncable/src/index.js"));
        case 2:
          _yield$import = _context2.sent;
          createConsumer = _yield$import.createConsumer;
          return _context2.abrupt("return", createConsumer());
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createConsumer.apply(this, arguments);
}
function subscribeTo(_x, _x2) {
  return _subscribeTo.apply(this, arguments);
}
function _subscribeTo() {
  _subscribeTo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(channel, mixin) {
    var _yield$getConsumer, subscriptions;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getConsumer();
        case 2:
          _yield$getConsumer = _context3.sent;
          subscriptions = _yield$getConsumer.subscriptions;
          return _context3.abrupt("return", subscriptions.create(channel, mixin));
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _subscribeTo.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
/* harmony import */ var _snakeize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snakeize */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/snakeize.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }



var TurboCableStreamSourceElement = /*#__PURE__*/function (_HTMLElement) {
  function TurboCableStreamSourceElement() {
    _classCallCheck(this, TurboCableStreamSourceElement);
    return _callSuper(this, TurboCableStreamSourceElement, arguments);
  }
  _inherits(TurboCableStreamSourceElement, _HTMLElement);
  return _createClass(TurboCableStreamSourceElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__["connectStreamSource"])(this);
              _context.next = 3;
              return Object(_cable__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(this.channel, {
                received: this.dispatchMessageEvent.bind(this),
                connected: this.subscriptionConnected.bind(this),
                disconnected: this.subscriptionDisconnected.bind(this)
              });
            case 3:
              this.subscription = _context.sent;
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      Object(_hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__["disconnectStreamSource"])(this);
      if (this.subscription) this.subscription.unsubscribe();
      this.subscriptionDisconnected();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {
      if (this.subscription) {
        this.disconnectedCallback();
        this.connectedCallback();
      }
    }
  }, {
    key: "dispatchMessageEvent",
    value: function dispatchMessageEvent(data) {
      var event = new MessageEvent("message", {
        data: data
      });
      return this.dispatchEvent(event);
    }
  }, {
    key: "subscriptionConnected",
    value: function subscriptionConnected() {
      this.setAttribute("connected", "");
    }
  }, {
    key: "subscriptionDisconnected",
    value: function subscriptionDisconnected() {
      this.removeAttribute("connected");
    }
  }, {
    key: "channel",
    get: function get() {
      var channel = this.getAttribute("channel");
      var signed_stream_name = this.getAttribute("signed-stream-name");
      return _objectSpread({
        channel: channel,
        signed_stream_name: signed_stream_name
      }, Object(_snakeize__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread({}, this.dataset)));
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
TurboCableStreamSourceElement.observedAttributes = ["channel", "signed-stream-name"];
if (customElements.get("turbo-cable-stream-source") === undefined) {
  customElements.define("turbo-cable-stream-source", TurboCableStreamSourceElement);
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/fetch_requests.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/fetch_requests.js ***!
  \***********************************************************************************/
/*! exports provided: encodeMethodIntoRequestBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeMethodIntoRequestBody", function() { return encodeMethodIntoRequestBody; });
function encodeMethodIntoRequestBody(event) {
  if (event.target instanceof HTMLFormElement) {
    var form = event.target,
      fetchOptions = event.detail.fetchOptions;
    form.addEventListener("turbo:submit-start", function (_ref) {
      var submitter = _ref.detail.formSubmission.submitter;
      var body = isBodyInit(fetchOptions.body) ? fetchOptions.body : new URLSearchParams();
      var method = determineFetchMethod(submitter, body, form);
      if (!/get/i.test(method)) {
        if (/post/i.test(method)) {
          body["delete"]("_method");
        } else {
          body.set("_method", method);
        }
        fetchOptions.method = "post";
      }
    }, {
      once: true
    });
  }
}
function determineFetchMethod(submitter, body, form) {
  var formMethod = determineFormMethod(submitter);
  var overrideMethod = body.get("_method");
  var method = form.getAttribute("method") || "get";
  if (typeof formMethod == "string") {
    return formMethod;
  } else if (typeof overrideMethod == "string") {
    return overrideMethod;
  } else {
    return method;
  }
}
function determineFormMethod(submitter) {
  if (submitter instanceof HTMLButtonElement || submitter instanceof HTMLInputElement) {
    // Rails 7 ActionView::Helpers::FormBuilder#button method has an override
    // for formmethod if the button does not have name or value attributes
    // set, which is the default. This means that if you use <%= f.button
    // formmethod: :delete %>, it will generate a <button name="_method"
    // value="delete" formmethod="post">. Therefore, if the submitter's name
    // is already _method, it's value attribute already contains the desired
    // method.
    if (submitter.name === '_method') {
      return submitter.value;
    } else if (submitter.hasAttribute("formmethod")) {
      return submitter.formMethod;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function isBodyInit(body) {
  return body instanceof FormData || body instanceof URLSearchParams;
}

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/index.js ***!
  \**************************************************************************/
/*! exports provided: Turbo, cable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cable_stream_source_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cable_stream_source_element */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable_stream_source_element.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Turbo", function() { return _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _cable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cable */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/cable.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "cable", function() { return _cable__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _fetch_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch_requests */ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/fetch_requests.js");






window.Turbo = _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__;
addEventListener("turbo:before-fetch-request", _fetch_requests__WEBPACK_IMPORTED_MODULE_3__["encodeMethodIntoRequestBody"]);

/***/ }),

/***/ "./node_modules/@hotwired/turbo-rails/app/javascript/turbo/snakeize.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@hotwired/turbo-rails/app/javascript/turbo/snakeize.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return walk; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Based on https://github.com/nathan7/snakeize
//
// This software is released under the MIT license:
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
function walk(obj) {
  if (!obj || _typeof(obj) !== 'object') return obj;
  if (obj instanceof Date || obj instanceof RegExp) return obj;
  if (Array.isArray(obj)) return obj.map(walk);
  return Object.keys(obj).reduce(function (acc, key) {
    var camel = key[0].toLowerCase() + key.slice(1).replace(/([A-Z]+)/g, function (m, x) {
      return '_' + x.toLowerCase();
    });
    acc[camel] = walk(obj[key]);
    return acc;
  }, {});
}
;

/***/ }),

/***/ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js ***!
  \***************************************************************/
/*! exports provided: FetchEnctype, FetchMethod, FetchRequest, FetchResponse, FrameElement, FrameLoadingStyle, FrameRenderer, PageRenderer, PageSnapshot, StreamActions, StreamElement, StreamSourceElement, cache, clearCache, config, connectStreamSource, disconnectStreamSource, fetch, fetchEnctypeFromString, fetchMethodFromString, isSafe, navigator, registerAdapter, renderStreamMessage, session, setConfirmMethod, setFormMode, setProgressBarDelay, start, visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchEnctype", function() { return FetchEnctype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMethod", function() { return FetchMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRequest", function() { return FetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchResponse", function() { return FetchResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameElement", function() { return FrameElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameLoadingStyle", function() { return FrameLoadingStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameRenderer", function() { return FrameRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return PageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSnapshot", function() { return PageSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamActions", function() { return StreamActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamElement", function() { return StreamElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamSourceElement", function() { return StreamSourceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectStreamSource", function() { return connectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectStreamSource", function() { return disconnectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetchWithTurboHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEnctypeFromString", function() { return fetchEnctypeFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMethodFromString", function() { return fetchMethodFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafe", function() { return isSafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAdapter", function() { return registerAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStreamMessage", function() { return renderStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfirmMethod", function() { return setConfirmMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormMode", function() { return setFormMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressBarDelay", function() { return setProgressBarDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
var _templateObject, _templateObject2;
var _excluded = ["callbacks"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _classPrivateFieldLooseBase(e, t) { if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance"); return e; }
var id = 0;
function _classPrivateFieldLooseKey(e) { return "__private_" + id++ + "_" + e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/*!
Turbo 8.0.12
Copyright © 2024 37signals LLC
 */
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Javan Makhmali
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function (prototype) {
  if (typeof prototype.requestSubmit == "function") return;
  prototype.requestSubmit = function (submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };
  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }
  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
  }
})(HTMLFormElement.prototype);
var submittersByForm = new WeakMap();
function findSubmitterFromClickTarget(target) {
  var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
  var candidate = element ? element.closest("input, button") : null;
  return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}
function clickCaptured(event) {
  var submitter = findSubmitterFromClickTarget(event.target);
  if (submitter && submitter.form) {
    submittersByForm.set(submitter.form, submitter);
  }
}
(function () {
  if ("submitter" in Event.prototype) return;
  var prototype = window.Event.prototype;
  // Certain versions of Safari 15 have a bug where they won't
  // populate the submitter. This hurts TurboDrive's enable/disable detection.
  // See https://bugs.webkit.org/show_bug.cgi?id=229660
  if ("SubmitEvent" in window) {
    var prototypeOfSubmitEvent = window.SubmitEvent.prototype;
    if (/Apple Computer/.test(navigator.vendor) && !("submitter" in prototypeOfSubmitEvent)) {
      prototype = prototypeOfSubmitEvent;
    } else {
      return; // polyfill not needed
    }
  }
  addEventListener("click", clickCaptured, true);
  Object.defineProperty(prototype, "submitter", {
    get: function get() {
      if (this.type == "submit" && this.target instanceof HTMLFormElement) {
        return submittersByForm.get(this.target);
      }
    }
  });
})();
var FrameLoadingStyle = {
  eager: "eager",
  lazy: "lazy"
};

/**
 * Contains a fragment of HTML which is updated based on navigation within
 * it (e.g. via links or form submissions).
 *
 * @customElement turbo-frame
 * @example
 *   <turbo-frame id="messages">
 *     <a href="/messages/expanded">
 *       Show all expanded messages in this frame.
 *     </a>
 *
 *     <form action="/messages">
 *       Show response from this form within this frame.
 *     </form>
 *   </turbo-frame>
 */
var FrameElement = /*#__PURE__*/function (_HTMLElement) {
  function FrameElement() {
    var _this;
    _classCallCheck(this, FrameElement);
    _this = _callSuper(this, FrameElement);
    _this.loaded = Promise.resolve();
    _this.delegate = new FrameElement.delegateConstructor(_this);
    return _this;
  }
  _inherits(FrameElement, _HTMLElement);
  return _createClass(FrameElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.delegate.connect();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.delegate.disconnect();
    }
  }, {
    key: "reload",
    value: function reload() {
      return this.delegate.sourceURLReloaded();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name) {
      if (name == "loading") {
        this.delegate.loadingStyleChanged();
      } else if (name == "src") {
        this.delegate.sourceURLChanged();
      } else if (name == "disabled") {
        this.delegate.disabledChanged();
      }
    }

    /**
     * Gets the URL to lazily load source HTML from
     */
  }, {
    key: "src",
    get: function get() {
      return this.getAttribute("src");
    }

    /**
     * Sets the URL to lazily load source HTML from
     */,
    set: function set(value) {
      if (value) {
        this.setAttribute("src", value);
      } else {
        this.removeAttribute("src");
      }
    }

    /**
     * Gets the refresh mode for the frame.
     */
  }, {
    key: "refresh",
    get: function get() {
      return this.getAttribute("refresh");
    }

    /**
     * Sets the refresh mode for the frame.
     */,
    set: function set(value) {
      if (value) {
        this.setAttribute("refresh", value);
      } else {
        this.removeAttribute("refresh");
      }
    }
  }, {
    key: "shouldReloadWithMorph",
    get: function get() {
      return this.src && this.refresh === "morph";
    }

    /**
     * Determines if the element is loading
     */
  }, {
    key: "loading",
    get: function get() {
      return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    }

    /**
     * Sets the value of if the element is loading
     */,
    set: function set(value) {
      if (value) {
        this.setAttribute("loading", value);
      } else {
        this.removeAttribute("loading");
      }
    }

    /**
     * Gets the disabled state of the frame.
     *
     * If disabled, no requests will be intercepted by the frame.
     */
  }, {
    key: "disabled",
    get: function get() {
      return this.hasAttribute("disabled");
    }

    /**
     * Sets the disabled state of the frame.
     *
     * If disabled, no requests will be intercepted by the frame.
     */,
    set: function set(value) {
      if (value) {
        this.setAttribute("disabled", "");
      } else {
        this.removeAttribute("disabled");
      }
    }

    /**
     * Gets the autoscroll state of the frame.
     *
     * If true, the frame will be scrolled into view automatically on update.
     */
  }, {
    key: "autoscroll",
    get: function get() {
      return this.hasAttribute("autoscroll");
    }

    /**
     * Sets the autoscroll state of the frame.
     *
     * If true, the frame will be scrolled into view automatically on update.
     */,
    set: function set(value) {
      if (value) {
        this.setAttribute("autoscroll", "");
      } else {
        this.removeAttribute("autoscroll");
      }
    }

    /**
     * Determines if the element has finished loading
     */
  }, {
    key: "complete",
    get: function get() {
      return !this.delegate.isLoading;
    }

    /**
     * Gets the active state of the frame.
     *
     * If inactive, source changes will not be observed.
     */
  }, {
    key: "isActive",
    get: function get() {
      return this.ownerDocument === document && !this.isPreview;
    }

    /**
     * Sets the active state of the frame.
     *
     * If inactive, source changes will not be observed.
     */
  }, {
    key: "isPreview",
    get: function get() {
      var _this$ownerDocument, _this$ownerDocument$d;
      return (_this$ownerDocument = this.ownerDocument) === null || _this$ownerDocument === void 0 ? void 0 : (_this$ownerDocument$d = _this$ownerDocument.documentElement) === null || _this$ownerDocument$d === void 0 ? void 0 : _this$ownerDocument$d.hasAttribute("data-turbo-preview");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["disabled", "loading", "src"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
FrameElement.delegateConstructor = undefined;
function frameLoadingStyleFromString(style) {
  switch (style.toLowerCase()) {
    case "lazy":
      return FrameLoadingStyle.lazy;
    default:
      return FrameLoadingStyle.eager;
  }
}
var drive = {
  enabled: true,
  progressBarDelay: 500,
  unvisitableExtensions: new Set([".7z", ".aac", ".apk", ".avi", ".bmp", ".bz2", ".css", ".csv", ".deb", ".dmg", ".doc", ".docx", ".exe", ".gif", ".gz", ".heic", ".heif", ".ico", ".iso", ".jpeg", ".jpg", ".js", ".json", ".m4a", ".mkv", ".mov", ".mp3", ".mp4", ".mpeg", ".mpg", ".msi", ".ogg", ".ogv", ".pdf", ".pkg", ".png", ".ppt", ".pptx", ".rar", ".rtf", ".svg", ".tar", ".tif", ".tiff", ".txt", ".wav", ".webm", ".webp", ".wma", ".wmv", ".xls", ".xlsx", ".xml", ".zip"])
};
function activateScriptElement(element) {
  if (element.getAttribute("data-turbo-eval") == "false") {
    return element;
  } else {
    var createdScriptElement = document.createElement("script");
    var cspNonce = getCspNonce();
    if (cspNonce) {
      createdScriptElement.nonce = cspNonce;
    }
    createdScriptElement.textContent = element.textContent;
    createdScriptElement.async = false;
    copyElementAttributes(createdScriptElement, element);
    return createdScriptElement;
  }
}
function copyElementAttributes(destinationElement, sourceElement) {
  var _iterator = _createForOfIteratorHelper(sourceElement.attributes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ref = _step.value;
      var name = _ref.name;
      var value = _ref.value;
      destinationElement.setAttribute(name, value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function createDocumentFragment(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content;
}
function dispatch(eventName) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    target = _ref2.target,
    cancelable = _ref2.cancelable,
    detail = _ref2.detail;
  var event = new CustomEvent(eventName, {
    cancelable: cancelable,
    bubbles: true,
    composed: true,
    detail: detail
  });
  if (target && target.isConnected) {
    target.dispatchEvent(event);
  } else {
    document.documentElement.dispatchEvent(event);
  }
  return event;
}
function cancelEvent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function nextRepaint() {
  if (document.visibilityState === "hidden") {
    return nextEventLoopTick();
  } else {
    return nextAnimationFrame();
  }
}
function nextAnimationFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(function () {
      return resolve();
    });
  });
}
function nextEventLoopTick() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, 0);
  });
}
function nextMicrotask() {
  return Promise.resolve();
}
function parseHTMLDocument() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return new DOMParser().parseFromString(html, "text/html");
}
function unindent(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  var lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
  var match = lines[0].match(/^\s+/);
  var indent = match ? match[0].length : 0;
  return lines.map(function (line) {
    return line.slice(indent);
  }).join("\n");
}
function interpolate(strings, values) {
  return strings.reduce(function (result, string, i) {
    var value = values[i] == undefined ? "" : values[i];
    return result + string + value;
  }, "");
}
function uuid() {
  return Array.from({
    length: 36
  }).map(function (_, i) {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      return "-";
    } else if (i == 14) {
      return "4";
    } else if (i == 19) {
      return (Math.floor(Math.random() * 4) + 8).toString(16);
    } else {
      return Math.floor(Math.random() * 15).toString(16);
    }
  }).join("");
}
function getAttribute(attributeName) {
  for (var _len2 = arguments.length, elements = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    elements[_key2 - 1] = arguments[_key2];
  }
  var _iterator2 = _createForOfIteratorHelper(elements.map(function (element) {
      return element === null || element === void 0 ? void 0 : element.getAttribute(attributeName);
    })),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      if (typeof value == "string") return value;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
}
function hasAttribute(attributeName) {
  for (var _len3 = arguments.length, elements = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    elements[_key3 - 1] = arguments[_key3];
  }
  return elements.some(function (element) {
    return element && element.hasAttribute(attributeName);
  });
}
function markAsBusy() {
  for (var _len4 = arguments.length, elements = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    elements[_key4] = arguments[_key4];
  }
  for (var _i = 0, _elements = elements; _i < _elements.length; _i++) {
    var element = _elements[_i];
    if (element.localName == "turbo-frame") {
      element.setAttribute("busy", "");
    }
    element.setAttribute("aria-busy", "true");
  }
}
function clearBusyState() {
  for (var _len5 = arguments.length, elements = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    elements[_key5] = arguments[_key5];
  }
  for (var _i2 = 0, _elements2 = elements; _i2 < _elements2.length; _i2++) {
    var element = _elements2[_i2];
    if (element.localName == "turbo-frame") {
      element.removeAttribute("busy");
    }
    element.removeAttribute("aria-busy");
  }
}
function waitForLoad(element) {
  var timeoutInMilliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  return new Promise(function (resolve) {
    var _onComplete = function onComplete() {
      element.removeEventListener("error", _onComplete);
      element.removeEventListener("load", _onComplete);
      resolve();
    };
    element.addEventListener("load", _onComplete, {
      once: true
    });
    element.addEventListener("error", _onComplete, {
      once: true
    });
    setTimeout(resolve, timeoutInMilliseconds);
  });
}
function getHistoryMethodForAction(action) {
  switch (action) {
    case "replace":
      return history.replaceState;
    case "advance":
    case "restore":
      return history.pushState;
  }
}
function isAction(action) {
  return action == "advance" || action == "replace" || action == "restore";
}
function getVisitAction() {
  for (var _len6 = arguments.length, elements = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    elements[_key6] = arguments[_key6];
  }
  var action = getAttribute.apply(void 0, ["data-turbo-action"].concat(elements));
  return isAction(action) ? action : null;
}
function getMetaElement(name) {
  return document.querySelector("meta[name=\"".concat(name, "\"]"));
}
function getMetaContent(name) {
  var element = getMetaElement(name);
  return element && element.content;
}
function getCspNonce() {
  var element = getMetaElement("csp-nonce");
  if (element) {
    var nonce = element.nonce,
      content = element.content;
    return nonce == "" ? content : nonce;
  }
}
function setMetaContent(name, content) {
  var element = getMetaElement(name);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
  return element;
}
function findClosestRecursively(element, selector) {
  if (element instanceof Element) {
    var _element$getRootNode;
    return element.closest(selector) || findClosestRecursively(element.assignedSlot || ((_element$getRootNode = element.getRootNode()) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.host), selector);
  }
}
function elementIsFocusable(element) {
  var inertDisabledOrHidden = "[inert], :disabled, [hidden], details:not([open]), dialog:not([open])";
  return !!element && element.closest(inertDisabledOrHidden) == null && typeof element.focus == "function";
}
function queryAutofocusableElement(elementOrDocumentFragment) {
  return Array.from(elementOrDocumentFragment.querySelectorAll("[autofocus]")).find(elementIsFocusable);
}
function around(_x, _x2) {
  return _around.apply(this, arguments);
}
function _around() {
  _around = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(callback, reader) {
    var before, after;
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          before = reader();
          callback();
          _context46.next = 4;
          return nextAnimationFrame();
        case 4:
          after = reader();
          return _context46.abrupt("return", [before, after]);
        case 6:
        case "end":
          return _context46.stop();
      }
    }, _callee46);
  }));
  return _around.apply(this, arguments);
}
function doesNotTargetIFrame(name) {
  if (name === "_blank") {
    return false;
  } else if (name) {
    var _iterator3 = _createForOfIteratorHelper(document.getElementsByName(name)),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var element = _step3.value;
        if (element instanceof HTMLIFrameElement) return false;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return true;
  } else {
    return true;
  }
}
function findLinkFromClickTarget(target) {
  return findClosestRecursively(target, "a[href]:not([target^=_]):not([download])");
}
function getLocationForLink(link) {
  return expandURL(link.getAttribute("href") || "");
}
function debounce(fn, delay) {
  var _this2 = this;
  var timeoutId = null;
  return function () {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    var callback = function callback() {
      return fn.apply(_this2, args);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}
var submitter = {
  "aria-disabled": {
    beforeSubmit: function beforeSubmit(submitter) {
      submitter.setAttribute("aria-disabled", "true");
      submitter.addEventListener("click", cancelEvent);
    },
    afterSubmit: function afterSubmit(submitter) {
      submitter.removeAttribute("aria-disabled");
      submitter.removeEventListener("click", cancelEvent);
    }
  },
  "disabled": {
    beforeSubmit: function beforeSubmit(submitter) {
      return submitter.disabled = true;
    },
    afterSubmit: function afterSubmit(submitter) {
      return submitter.disabled = false;
    }
  }
};
var _submitter = /*#__PURE__*/_classPrivateFieldLooseKey("submitter");
var Config = /*#__PURE__*/function () {
  function Config(config) {
    _classCallCheck(this, Config);
    Object.defineProperty(this, _submitter, {
      writable: true,
      value: null
    });
    Object.assign(this, config);
  }
  return _createClass(Config, [{
    key: "submitter",
    get: function get() {
      return _classPrivateFieldLooseBase(this, _submitter)[_submitter];
    },
    set: function set(value) {
      _classPrivateFieldLooseBase(this, _submitter)[_submitter] = submitter[value] || value;
    }
  }]);
}();
var forms = new Config({
  mode: "on",
  submitter: "disabled"
});
var config = {
  drive: drive,
  forms: forms
};
function expandURL(locatable) {
  return new URL(locatable.toString(), document.baseURI);
}
function getAnchor(url) {
  var anchorMatch;
  if (url.hash) {
    return url.hash.slice(1);
    // eslint-disable-next-line no-cond-assign
  } else if (anchorMatch = url.href.match(/#(.*)$/)) {
    return anchorMatch[1];
  }
}
function getAction$1(form, submitter) {
  var action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
  return expandURL(action);
}
function getExtension(url) {
  return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}
function isPrefixedBy(baseURL, url) {
  var prefix = getPrefix(url);
  return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}
function locationIsVisitable(location, rootLocation) {
  return isPrefixedBy(location, rootLocation) && !config.drive.unvisitableExtensions.has(getExtension(location));
}
function getRequestURL(url) {
  var anchor = getAnchor(url);
  return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}
function toCacheKey(url) {
  return getRequestURL(url);
}
function urlsAreEqual(left, right) {
  return expandURL(left).href == expandURL(right).href;
}
function getPathComponents(url) {
  return url.pathname.split("/").slice(1);
}
function getLastPathComponent(url) {
  return getPathComponents(url).slice(-1)[0];
}
function getPrefix(url) {
  return addTrailingSlash(url.origin + url.pathname);
}
function addTrailingSlash(value) {
  return value.endsWith("/") ? value : value + "/";
}
var FetchResponse = /*#__PURE__*/function () {
  function FetchResponse(response) {
    _classCallCheck(this, FetchResponse);
    this.response = response;
  }
  return _createClass(FetchResponse, [{
    key: "succeeded",
    get: function get() {
      return this.response.ok;
    }
  }, {
    key: "failed",
    get: function get() {
      return !this.succeeded;
    }
  }, {
    key: "clientError",
    get: function get() {
      return this.statusCode >= 400 && this.statusCode <= 499;
    }
  }, {
    key: "serverError",
    get: function get() {
      return this.statusCode >= 500 && this.statusCode <= 599;
    }
  }, {
    key: "redirected",
    get: function get() {
      return this.response.redirected;
    }
  }, {
    key: "location",
    get: function get() {
      return expandURL(this.response.url);
    }
  }, {
    key: "isHTML",
    get: function get() {
      return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
  }, {
    key: "statusCode",
    get: function get() {
      return this.response.status;
    }
  }, {
    key: "contentType",
    get: function get() {
      return this.header("Content-Type");
    }
  }, {
    key: "responseText",
    get: function get() {
      return this.response.clone().text();
    }
  }, {
    key: "responseHTML",
    get: function get() {
      if (this.isHTML) {
        return this.response.clone().text();
      } else {
        return Promise.resolve(undefined);
      }
    }
  }, {
    key: "header",
    value: function header(name) {
      return this.response.headers.get(name);
    }
  }]);
}();
var LimitedSet = /*#__PURE__*/function (_Set) {
  function LimitedSet(maxSize) {
    var _this3;
    _classCallCheck(this, LimitedSet);
    _this3 = _callSuper(this, LimitedSet);
    _this3.maxSize = maxSize;
    return _this3;
  }
  _inherits(LimitedSet, _Set);
  return _createClass(LimitedSet, [{
    key: "add",
    value: function add(value) {
      if (this.size >= this.maxSize) {
        var iterator = this.values();
        var oldestValue = iterator.next().value;
        this["delete"](oldestValue);
      }
      _superPropGet(LimitedSet, "add", this, 3)([value]);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Set));
var recentRequests = new LimitedSet(20);
var nativeFetch = window.fetch;
function fetchWithTurboHeaders(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var modifiedHeaders = new Headers(options.headers || {});
  var requestUID = uuid();
  recentRequests.add(requestUID);
  modifiedHeaders.append("X-Turbo-Request-Id", requestUID);
  return nativeFetch(url, _objectSpread(_objectSpread({}, options), {}, {
    headers: modifiedHeaders
  }));
}
function fetchMethodFromString(method) {
  switch (method.toLowerCase()) {
    case "get":
      return FetchMethod.get;
    case "post":
      return FetchMethod.post;
    case "put":
      return FetchMethod.put;
    case "patch":
      return FetchMethod.patch;
    case "delete":
      return FetchMethod["delete"];
  }
}
var FetchMethod = {
  get: "get",
  post: "post",
  put: "put",
  patch: "patch",
  "delete": "delete"
};
function fetchEnctypeFromString(encoding) {
  switch (encoding.toLowerCase()) {
    case FetchEnctype.multipart:
      return FetchEnctype.multipart;
    case FetchEnctype.plain:
      return FetchEnctype.plain;
    default:
      return FetchEnctype.urlEncoded;
  }
}
var FetchEnctype = {
  urlEncoded: "application/x-www-form-urlencoded",
  multipart: "multipart/form-data",
  plain: "text/plain"
};
var _resolveRequestPromise = /*#__PURE__*/_classPrivateFieldLooseKey("resolveRequestPromise");
var _allowRequestToBeIntercepted = /*#__PURE__*/_classPrivateFieldLooseKey("allowRequestToBeIntercepted");
var _willDelegateErrorHandling = /*#__PURE__*/_classPrivateFieldLooseKey("willDelegateErrorHandling");
var FetchRequest = /*#__PURE__*/function () {
  function FetchRequest(delegate, method, location) {
    var _this$delegate$referr;
    var requestBody = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new URLSearchParams();
    var target = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var enctype = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : FetchEnctype.urlEncoded;
    _classCallCheck(this, FetchRequest);
    Object.defineProperty(this, _willDelegateErrorHandling, {
      value: _willDelegateErrorHandling2
    });
    Object.defineProperty(this, _allowRequestToBeIntercepted, {
      value: _allowRequestToBeIntercepted2
    });
    this.abortController = new AbortController();
    Object.defineProperty(this, _resolveRequestPromise, {
      writable: true,
      value: function value(_value) {}
    });
    var _buildResourceAndBody = buildResourceAndBody(expandURL(location), method, requestBody, enctype),
      _buildResourceAndBody2 = _slicedToArray(_buildResourceAndBody, 2),
      url = _buildResourceAndBody2[0],
      body = _buildResourceAndBody2[1];
    this.delegate = delegate;
    this.url = url;
    this.target = target;
    this.fetchOptions = {
      credentials: "same-origin",
      redirect: "follow",
      method: method.toUpperCase(),
      headers: _objectSpread({}, this.defaultHeaders),
      body: body,
      signal: this.abortSignal,
      referrer: (_this$delegate$referr = this.delegate.referrer) === null || _this$delegate$referr === void 0 ? void 0 : _this$delegate$referr.href
    };
    this.enctype = enctype;
  }
  return _createClass(FetchRequest, [{
    key: "method",
    get: function get() {
      return this.fetchOptions.method;
    },
    set: function set(value) {
      var fetchBody = this.isSafe ? this.url.searchParams : this.fetchOptions.body || new FormData();
      var fetchMethod = fetchMethodFromString(value) || FetchMethod.get;
      this.url.search = "";
      var _buildResourceAndBody3 = buildResourceAndBody(this.url, fetchMethod, fetchBody, this.enctype),
        _buildResourceAndBody4 = _slicedToArray(_buildResourceAndBody3, 2),
        url = _buildResourceAndBody4[0],
        body = _buildResourceAndBody4[1];
      this.url = url;
      this.fetchOptions.body = body;
      this.fetchOptions.method = fetchMethod.toUpperCase();
    }
  }, {
    key: "headers",
    get: function get() {
      return this.fetchOptions.headers;
    },
    set: function set(value) {
      this.fetchOptions.headers = value;
    }
  }, {
    key: "body",
    get: function get() {
      if (this.isSafe) {
        return this.url.searchParams;
      } else {
        return this.fetchOptions.body;
      }
    },
    set: function set(value) {
      this.fetchOptions.body = value;
    }
  }, {
    key: "location",
    get: function get() {
      return this.url;
    }
  }, {
    key: "params",
    get: function get() {
      return this.url.searchParams;
    }
  }, {
    key: "entries",
    get: function get() {
      return this.body ? Array.from(this.body.entries()) : [];
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.abortController.abort();
    }
  }, {
    key: "perform",
    value: function () {
      var _perform = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var fetchOptions, event, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              fetchOptions = this.fetchOptions;
              this.delegate.prepareRequest(this);
              _context.next = 4;
              return _classPrivateFieldLooseBase(this, _allowRequestToBeIntercepted)[_allowRequestToBeIntercepted](fetchOptions);
            case 4:
              event = _context.sent;
              _context.prev = 5;
              this.delegate.requestStarted(this);
              if (event.detail.fetchRequest) {
                this.response = event.detail.fetchRequest.response;
              } else {
                this.response = fetchWithTurboHeaders(this.url.href, fetchOptions);
              }
              _context.next = 10;
              return this.response;
            case 10:
              response = _context.sent;
              _context.next = 13;
              return this.receive(response);
            case 13:
              return _context.abrupt("return", _context.sent);
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              if (!(_context.t0.name !== "AbortError")) {
                _context.next = 21;
                break;
              }
              if (_classPrivateFieldLooseBase(this, _willDelegateErrorHandling)[_willDelegateErrorHandling](_context.t0)) {
                this.delegate.requestErrored(this, _context.t0);
              }
              throw _context.t0;
            case 21:
              _context.prev = 21;
              this.delegate.requestFinished(this);
              return _context.finish(21);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[5, 16, 21, 24]]);
      }));
      function perform() {
        return _perform.apply(this, arguments);
      }
      return perform;
    }()
  }, {
    key: "receive",
    value: function () {
      var _receive = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
        var fetchResponse, event;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              fetchResponse = new FetchResponse(response);
              event = dispatch("turbo:before-fetch-response", {
                cancelable: true,
                detail: {
                  fetchResponse: fetchResponse
                },
                target: this.target
              });
              if (event.defaultPrevented) {
                this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
              } else if (fetchResponse.succeeded) {
                this.delegate.requestSucceededWithResponse(this, fetchResponse);
              } else {
                this.delegate.requestFailedWithResponse(this, fetchResponse);
              }
              return _context2.abrupt("return", fetchResponse);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function receive(_x3) {
        return _receive.apply(this, arguments);
      }
      return receive;
    }()
  }, {
    key: "defaultHeaders",
    get: function get() {
      return {
        Accept: "text/html, application/xhtml+xml"
      };
    }
  }, {
    key: "isSafe",
    get: function get() {
      return isSafe(this.method);
    }
  }, {
    key: "abortSignal",
    get: function get() {
      return this.abortController.signal;
    }
  }, {
    key: "acceptResponseType",
    value: function acceptResponseType(mimeType) {
      this.headers["Accept"] = [mimeType, this.headers["Accept"]].join(", ");
    }
  }]);
}();
function _allowRequestToBeIntercepted2(_x40) {
  return _allowRequestToBeIntercepted3.apply(this, arguments);
}
function _allowRequestToBeIntercepted3() {
  _allowRequestToBeIntercepted3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(fetchOptions) {
    var _this53 = this;
    var requestInterception, event;
    return _regeneratorRuntime().wrap(function _callee50$(_context50) {
      while (1) switch (_context50.prev = _context50.next) {
        case 0:
          requestInterception = new Promise(function (resolve) {
            return _classPrivateFieldLooseBase(_this53, _resolveRequestPromise)[_resolveRequestPromise] = resolve;
          });
          event = dispatch("turbo:before-fetch-request", {
            cancelable: true,
            detail: {
              fetchOptions: fetchOptions,
              url: this.url,
              resume: _classPrivateFieldLooseBase(this, _resolveRequestPromise)[_resolveRequestPromise]
            },
            target: this.target
          });
          this.url = event.detail.url;
          if (!event.defaultPrevented) {
            _context50.next = 6;
            break;
          }
          _context50.next = 6;
          return requestInterception;
        case 6:
          return _context50.abrupt("return", event);
        case 7:
        case "end":
          return _context50.stop();
      }
    }, _callee50, this);
  }));
  return _allowRequestToBeIntercepted3.apply(this, arguments);
}
function _willDelegateErrorHandling2(error) {
  var event = dispatch("turbo:fetch-request-error", {
    target: this.target,
    cancelable: true,
    detail: {
      request: this,
      error: error
    }
  });
  return !event.defaultPrevented;
}
function isSafe(fetchMethod) {
  return fetchMethodFromString(fetchMethod) == FetchMethod.get;
}
function buildResourceAndBody(resource, method, requestBody, enctype) {
  var searchParams = Array.from(requestBody).length > 0 ? new URLSearchParams(entriesExcludingFiles(requestBody)) : resource.searchParams;
  if (isSafe(method)) {
    return [mergeIntoURLSearchParams(resource, searchParams), null];
  } else if (enctype == FetchEnctype.urlEncoded) {
    return [resource, searchParams];
  } else {
    return [resource, requestBody];
  }
}
function entriesExcludingFiles(requestBody) {
  var entries = [];
  var _iterator4 = _createForOfIteratorHelper(requestBody),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _ref3 = _step4.value;
      var _ref4 = _slicedToArray(_ref3, 2);
      var name = _ref4[0];
      var value = _ref4[1];
      if (value instanceof File) continue;else entries.push([name, value]);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return entries;
}
function mergeIntoURLSearchParams(url, requestBody) {
  var searchParams = new URLSearchParams(entriesExcludingFiles(requestBody));
  url.search = searchParams.toString();
  return url;
}
var AppearanceObserver = /*#__PURE__*/function () {
  function AppearanceObserver(delegate, element) {
    var _this4 = this;
    _classCallCheck(this, AppearanceObserver);
    this.started = false;
    this.intersect = function (entries) {
      var lastEntry = entries.slice(-1)[0];
      if (lastEntry !== null && lastEntry !== void 0 && lastEntry.isIntersecting) {
        _this4.delegate.elementAppearedInViewport(_this4.element);
      }
    };
    this.delegate = delegate;
    this.element = element;
    this.intersectionObserver = new IntersectionObserver(this.intersect);
  }
  return _createClass(AppearanceObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.intersectionObserver.observe(this.element);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.intersectionObserver.unobserve(this.element);
      }
    }
  }]);
}();
var StreamMessage = /*#__PURE__*/function () {
  function StreamMessage(fragment) {
    _classCallCheck(this, StreamMessage);
    this.fragment = importStreamElements(fragment);
  }
  return _createClass(StreamMessage, null, [{
    key: "wrap",
    value: function wrap(message) {
      if (typeof message == "string") {
        return new this(createDocumentFragment(message));
      } else {
        return message;
      }
    }
  }]);
}();
StreamMessage.contentType = "text/vnd.turbo-stream.html";
function importStreamElements(fragment) {
  var _iterator5 = _createForOfIteratorHelper(fragment.querySelectorAll("turbo-stream")),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var element = _step5.value;
      var streamElement = document.importNode(element, true);
      var _iterator6 = _createForOfIteratorHelper(streamElement.templateElement.content.querySelectorAll("script")),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var inertScriptElement = _step6.value;
          inertScriptElement.replaceWith(activateScriptElement(inertScriptElement));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      element.replaceWith(streamElement);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return fragment;
}
var PREFETCH_DELAY = 100;
var _prefetchTimeout = /*#__PURE__*/_classPrivateFieldLooseKey("prefetchTimeout");
var _prefetched = /*#__PURE__*/_classPrivateFieldLooseKey("prefetched");
var PrefetchCache = /*#__PURE__*/function () {
  function PrefetchCache() {
    _classCallCheck(this, PrefetchCache);
    Object.defineProperty(this, _prefetchTimeout, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _prefetched, {
      writable: true,
      value: null
    });
  }
  return _createClass(PrefetchCache, [{
    key: "get",
    value: function get(url) {
      if (_classPrivateFieldLooseBase(this, _prefetched)[_prefetched] && _classPrivateFieldLooseBase(this, _prefetched)[_prefetched].url === url && _classPrivateFieldLooseBase(this, _prefetched)[_prefetched].expire > Date.now()) {
        return _classPrivateFieldLooseBase(this, _prefetched)[_prefetched].request;
      }
    }
  }, {
    key: "setLater",
    value: function setLater(url, request, ttl) {
      var _this5 = this;
      this.clear();
      _classPrivateFieldLooseBase(this, _prefetchTimeout)[_prefetchTimeout] = setTimeout(function () {
        request.perform();
        _this5.set(url, request, ttl);
        _classPrivateFieldLooseBase(_this5, _prefetchTimeout)[_prefetchTimeout] = null;
      }, PREFETCH_DELAY);
    }
  }, {
    key: "set",
    value: function set(url, request, ttl) {
      _classPrivateFieldLooseBase(this, _prefetched)[_prefetched] = {
        url: url,
        request: request,
        expire: new Date(new Date().getTime() + ttl)
      };
    }
  }, {
    key: "clear",
    value: function clear() {
      if (_classPrivateFieldLooseBase(this, _prefetchTimeout)[_prefetchTimeout]) clearTimeout(_classPrivateFieldLooseBase(this, _prefetchTimeout)[_prefetchTimeout]);
      _classPrivateFieldLooseBase(this, _prefetched)[_prefetched] = null;
    }
  }]);
}();
var cacheTtl = 10 * 1000;
var prefetchCache = new PrefetchCache();
var FormSubmissionState = {
  initialized: "initialized",
  requesting: "requesting",
  waiting: "waiting",
  receiving: "receiving",
  stopping: "stopping",
  stopped: "stopped"
};
var FormSubmission = /*#__PURE__*/function () {
  function FormSubmission(delegate, formElement, submitter) {
    var mustRedirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, FormSubmission);
    this.state = FormSubmissionState.initialized;
    var method = getMethod(formElement, submitter);
    var action = getAction(getFormAction(formElement, submitter), method);
    var body = buildFormData(formElement, submitter);
    var enctype = getEnctype(formElement, submitter);
    this.delegate = delegate;
    this.formElement = formElement;
    this.submitter = submitter;
    this.fetchRequest = new FetchRequest(this, method, action, body, formElement, enctype);
    this.mustRedirect = mustRedirect;
  }
  return _createClass(FormSubmission, [{
    key: "method",
    get: function get() {
      return this.fetchRequest.method;
    },
    set: function set(value) {
      this.fetchRequest.method = value;
    }
  }, {
    key: "action",
    get: function get() {
      return this.fetchRequest.url.toString();
    },
    set: function set(value) {
      this.fetchRequest.url = expandURL(value);
    }
  }, {
    key: "body",
    get: function get() {
      return this.fetchRequest.body;
    }
  }, {
    key: "enctype",
    get: function get() {
      return this.fetchRequest.enctype;
    }
  }, {
    key: "isSafe",
    get: function get() {
      return this.fetchRequest.isSafe;
    }
  }, {
    key: "location",
    get: function get() {
      return this.fetchRequest.url;
    }

    // The submission process
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var initialized, requesting, confirmationMessage, confirmMethod, answer;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              initialized = FormSubmissionState.initialized, requesting = FormSubmissionState.requesting;
              confirmationMessage = getAttribute("data-turbo-confirm", this.submitter, this.formElement);
              if (!(typeof confirmationMessage === "string")) {
                _context3.next = 9;
                break;
              }
              confirmMethod = typeof config.forms.confirm === "function" ? config.forms.confirm : FormSubmission.confirmMethod;
              _context3.next = 6;
              return confirmMethod(confirmationMessage, this.formElement, this.submitter);
            case 6:
              answer = _context3.sent;
              if (answer) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return");
            case 9:
              if (!(this.state == initialized)) {
                _context3.next = 12;
                break;
              }
              this.state = requesting;
              return _context3.abrupt("return", this.fetchRequest.perform());
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      var stopping = FormSubmissionState.stopping,
        stopped = FormSubmissionState.stopped;
      if (this.state != stopping && this.state != stopped) {
        this.state = stopping;
        this.fetchRequest.cancel();
        return true;
      }
    }

    // Fetch request delegate
  }, {
    key: "prepareRequest",
    value: function prepareRequest(request) {
      if (!request.isSafe) {
        var token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
        if (token) {
          request.headers["X-CSRF-Token"] = token;
        }
      }
      if (this.requestAcceptsTurboStreamResponse(request)) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(_request) {
      this.state = FormSubmissionState.waiting;
      if (this.submitter) config.forms.submitter.beforeSubmit(this.submitter);
      this.setSubmitsWith();
      markAsBusy(this.formElement);
      dispatch("turbo:submit-start", {
        target: this.formElement,
        detail: {
          formSubmission: this
        }
      });
      this.delegate.formSubmissionStarted(this);
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(request, response) {
      prefetchCache.clear();
      this.result = {
        success: response.succeeded,
        fetchResponse: response
      };
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function requestSucceededWithResponse(request, response) {
      if (response.clientError || response.serverError) {
        this.delegate.formSubmissionFailedWithResponse(this, response);
        return;
      }
      prefetchCache.clear();
      if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
        var error = new Error("Form responses must redirect to another location");
        this.delegate.formSubmissionErrored(this, error);
      } else {
        this.state = FormSubmissionState.receiving;
        this.result = {
          success: true,
          fetchResponse: response
        };
        this.delegate.formSubmissionSucceededWithResponse(this, response);
      }
    }
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(request, response) {
      this.result = {
        success: false,
        fetchResponse: response
      };
      this.delegate.formSubmissionFailedWithResponse(this, response);
    }
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      this.result = {
        success: false,
        error: error
      };
      this.delegate.formSubmissionErrored(this, error);
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(_request) {
      this.state = FormSubmissionState.stopped;
      if (this.submitter) config.forms.submitter.afterSubmit(this.submitter);
      this.resetSubmitterText();
      clearBusyState(this.formElement);
      dispatch("turbo:submit-end", {
        target: this.formElement,
        detail: _objectSpread({
          formSubmission: this
        }, this.result)
      });
      this.delegate.formSubmissionFinished(this);
    }

    // Private
  }, {
    key: "setSubmitsWith",
    value: function setSubmitsWith() {
      if (!this.submitter || !this.submitsWith) return;
      if (this.submitter.matches("button")) {
        this.originalSubmitText = this.submitter.innerHTML;
        this.submitter.innerHTML = this.submitsWith;
      } else if (this.submitter.matches("input")) {
        var input = this.submitter;
        this.originalSubmitText = input.value;
        input.value = this.submitsWith;
      }
    }
  }, {
    key: "resetSubmitterText",
    value: function resetSubmitterText() {
      if (!this.submitter || !this.originalSubmitText) return;
      if (this.submitter.matches("button")) {
        this.submitter.innerHTML = this.originalSubmitText;
      } else if (this.submitter.matches("input")) {
        var input = this.submitter;
        input.value = this.originalSubmitText;
      }
    }
  }, {
    key: "requestMustRedirect",
    value: function requestMustRedirect(request) {
      return !request.isSafe && this.mustRedirect;
    }
  }, {
    key: "requestAcceptsTurboStreamResponse",
    value: function requestAcceptsTurboStreamResponse(request) {
      return !request.isSafe || hasAttribute("data-turbo-stream", this.submitter, this.formElement);
    }
  }, {
    key: "submitsWith",
    get: function get() {
      var _this$submitter;
      return (_this$submitter = this.submitter) === null || _this$submitter === void 0 ? void 0 : _this$submitter.getAttribute("data-turbo-submits-with");
    }
  }], [{
    key: "confirmMethod",
    value: function confirmMethod(message) {
      return Promise.resolve(confirm(message));
    }
  }]);
}();
function buildFormData(formElement, submitter) {
  var formData = new FormData(formElement);
  var name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
  var value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
  if (name) {
    formData.append(name, value || "");
  }
  return formData;
}
function getCookieValue(cookieName) {
  if (cookieName != null) {
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var cookie = cookies.find(function (cookie) {
      return cookie.startsWith(cookieName);
    });
    if (cookie) {
      var value = cookie.split("=").slice(1).join("=");
      return value ? decodeURIComponent(value) : undefined;
    }
  }
}
function responseSucceededWithoutRedirect(response) {
  return response.statusCode == 200 && !response.redirected;
}
function getFormAction(formElement, submitter) {
  var formElementAction = typeof formElement.action === "string" ? formElement.action : null;
  if (submitter !== null && submitter !== void 0 && submitter.hasAttribute("formaction")) {
    return submitter.getAttribute("formaction") || "";
  } else {
    return formElement.getAttribute("action") || formElementAction || "";
  }
}
function getAction(formAction, fetchMethod) {
  var action = expandURL(formAction);
  if (isSafe(fetchMethod)) {
    action.search = "";
  }
  return action;
}
function getMethod(formElement, submitter) {
  var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || formElement.getAttribute("method") || "";
  return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
}
function getEnctype(formElement, submitter) {
  return fetchEnctypeFromString((submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formenctype")) || formElement.enctype);
}
var Snapshot = /*#__PURE__*/function () {
  function Snapshot(element) {
    _classCallCheck(this, Snapshot);
    this.element = element;
  }
  return _createClass(Snapshot, [{
    key: "activeElement",
    get: function get() {
      return this.element.ownerDocument.activeElement;
    }
  }, {
    key: "children",
    get: function get() {
      return _toConsumableArray(this.element.children);
    }
  }, {
    key: "hasAnchor",
    value: function hasAnchor(anchor) {
      return this.getElementForAnchor(anchor) != null;
    }
  }, {
    key: "getElementForAnchor",
    value: function getElementForAnchor(anchor) {
      return anchor ? this.element.querySelector("[id='".concat(anchor, "'], a[name='").concat(anchor, "']")) : null;
    }
  }, {
    key: "isConnected",
    get: function get() {
      return this.element.isConnected;
    }
  }, {
    key: "firstAutofocusableElement",
    get: function get() {
      return queryAutofocusableElement(this.element);
    }
  }, {
    key: "permanentElements",
    get: function get() {
      return queryPermanentElementsAll(this.element);
    }
  }, {
    key: "getPermanentElementById",
    value: function getPermanentElementById(id) {
      return _getPermanentElementById(this.element, id);
    }
  }, {
    key: "getPermanentElementMapForSnapshot",
    value: function getPermanentElementMapForSnapshot(snapshot) {
      var permanentElementMap = {};
      var _iterator7 = _createForOfIteratorHelper(this.permanentElements),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var currentPermanentElement = _step7.value;
          var _id = currentPermanentElement.id;
          var newPermanentElement = snapshot.getPermanentElementById(_id);
          if (newPermanentElement) {
            permanentElementMap[_id] = [currentPermanentElement, newPermanentElement];
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return permanentElementMap;
    }
  }]);
}();
function _getPermanentElementById(node, id) {
  return node.querySelector("#".concat(id, "[data-turbo-permanent]"));
}
function queryPermanentElementsAll(node) {
  return node.querySelectorAll("[id][data-turbo-permanent]");
}
var FormSubmitObserver = /*#__PURE__*/function () {
  function FormSubmitObserver(delegate, eventTarget) {
    var _this6 = this;
    _classCallCheck(this, FormSubmitObserver);
    this.started = false;
    this.submitCaptured = function () {
      _this6.eventTarget.removeEventListener("submit", _this6.submitBubbled, false);
      _this6.eventTarget.addEventListener("submit", _this6.submitBubbled, false);
    };
    this.submitBubbled = function (event) {
      if (!event.defaultPrevented) {
        var form = event.target instanceof HTMLFormElement ? event.target : undefined;
        var _submitter2 = event.submitter || undefined;
        if (form && submissionDoesNotDismissDialog(form, _submitter2) && submissionDoesNotTargetIFrame(form, _submitter2) && _this6.delegate.willSubmitForm(form, _submitter2)) {
          event.preventDefault();
          event.stopImmediatePropagation();
          _this6.delegate.formSubmitted(form, _submitter2);
        }
      }
    };
    this.delegate = delegate;
    this.eventTarget = eventTarget;
  }
  return _createClass(FormSubmitObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.eventTarget.addEventListener("submit", this.submitCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.eventTarget.removeEventListener("submit", this.submitCaptured, true);
        this.started = false;
      }
    }
  }]);
}();
function submissionDoesNotDismissDialog(form, submitter) {
  var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");
  return method != "dialog";
}
function submissionDoesNotTargetIFrame(form, submitter) {
  var target = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formtarget")) || form.getAttribute("target");
  return doesNotTargetIFrame(target);
}
var _resolveRenderPromise = /*#__PURE__*/_classPrivateFieldLooseKey("resolveRenderPromise");
var _resolveInterceptionPromise = /*#__PURE__*/_classPrivateFieldLooseKey("resolveInterceptionPromise");
var View = /*#__PURE__*/function () {
  function View(delegate, element) {
    _classCallCheck(this, View);
    Object.defineProperty(this, _resolveRenderPromise, {
      writable: true,
      value: function value(_value) {}
    });
    Object.defineProperty(this, _resolveInterceptionPromise, {
      writable: true,
      value: function value(_value) {}
    });
    this.delegate = delegate;
    this.element = element;
  }

  // Scrolling
  return _createClass(View, [{
    key: "scrollToAnchor",
    value: function scrollToAnchor(anchor) {
      var element = this.snapshot.getElementForAnchor(anchor);
      if (element) {
        this.scrollToElement(element);
        this.focusElement(element);
      } else {
        this.scrollToPosition({
          x: 0,
          y: 0
        });
      }
    }
  }, {
    key: "scrollToAnchorFromLocation",
    value: function scrollToAnchorFromLocation(location) {
      this.scrollToAnchor(getAnchor(location));
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(element) {
      element.scrollIntoView();
    }
  }, {
    key: "focusElement",
    value: function focusElement(element) {
      if (element instanceof HTMLElement) {
        if (element.hasAttribute("tabindex")) {
          element.focus();
        } else {
          element.setAttribute("tabindex", "-1");
          element.focus();
          element.removeAttribute("tabindex");
        }
      }
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(_ref5) {
      var x = _ref5.x,
        y = _ref5.y;
      this.scrollRoot.scrollTo(x, y);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.scrollToPosition({
        x: 0,
        y: 0
      });
    }
  }, {
    key: "scrollRoot",
    get: function get() {
      return window;
    }

    // Rendering
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(renderer) {
        var _this7 = this;
        var isPreview, shouldRender, willRender, snapshot, shouldInvalidate, renderInterception, options, immediateRender;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              isPreview = renderer.isPreview, shouldRender = renderer.shouldRender, willRender = renderer.willRender, snapshot = renderer.newSnapshot; // A workaround to ignore tracked element mismatch reloads when performing
              // a promoted Visit from a frame navigation
              shouldInvalidate = willRender;
              if (!shouldRender) {
                _context4.next = 26;
                break;
              }
              _context4.prev = 3;
              this.renderPromise = new Promise(function (resolve) {
                return _classPrivateFieldLooseBase(_this7, _resolveRenderPromise)[_resolveRenderPromise] = resolve;
              });
              this.renderer = renderer;
              _context4.next = 8;
              return this.prepareToRenderSnapshot(renderer);
            case 8:
              renderInterception = new Promise(function (resolve) {
                return _classPrivateFieldLooseBase(_this7, _resolveInterceptionPromise)[_resolveInterceptionPromise] = resolve;
              });
              options = {
                resume: _classPrivateFieldLooseBase(this, _resolveInterceptionPromise)[_resolveInterceptionPromise],
                render: this.renderer.renderElement,
                renderMethod: this.renderer.renderMethod
              };
              immediateRender = this.delegate.allowsImmediateRender(snapshot, options);
              if (immediateRender) {
                _context4.next = 14;
                break;
              }
              _context4.next = 14;
              return renderInterception;
            case 14:
              _context4.next = 16;
              return this.renderSnapshot(renderer);
            case 16:
              this.delegate.viewRenderedSnapshot(snapshot, isPreview, this.renderer.renderMethod);
              this.delegate.preloadOnLoadLinksForView(this.element);
              this.finishRenderingSnapshot(renderer);
            case 19:
              _context4.prev = 19;
              delete this.renderer;
              _classPrivateFieldLooseBase(this, _resolveRenderPromise)[_resolveRenderPromise](undefined);
              delete this.renderPromise;
              return _context4.finish(19);
            case 24:
              _context4.next = 27;
              break;
            case 26:
              if (shouldInvalidate) {
                this.invalidate(renderer.reloadReason);
              }
            case 27:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[3,, 19, 24]]);
      }));
      function render(_x4) {
        return _render.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "invalidate",
    value: function invalidate(reason) {
      this.delegate.viewInvalidated(reason);
    }
  }, {
    key: "prepareToRenderSnapshot",
    value: function () {
      var _prepareToRenderSnapshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(renderer) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.markAsPreview(renderer.isPreview);
              _context5.next = 3;
              return renderer.prepareToRender();
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function prepareToRenderSnapshot(_x5) {
        return _prepareToRenderSnapshot.apply(this, arguments);
      }
      return prepareToRenderSnapshot;
    }()
  }, {
    key: "markAsPreview",
    value: function markAsPreview(isPreview) {
      if (isPreview) {
        this.element.setAttribute("data-turbo-preview", "");
      } else {
        this.element.removeAttribute("data-turbo-preview");
      }
    }
  }, {
    key: "markVisitDirection",
    value: function markVisitDirection(direction) {
      this.element.setAttribute("data-turbo-visit-direction", direction);
    }
  }, {
    key: "unmarkVisitDirection",
    value: function unmarkVisitDirection() {
      this.element.removeAttribute("data-turbo-visit-direction");
    }
  }, {
    key: "renderSnapshot",
    value: function () {
      var _renderSnapshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(renderer) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return renderer.render();
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function renderSnapshot(_x6) {
        return _renderSnapshot.apply(this, arguments);
      }
      return renderSnapshot;
    }()
  }, {
    key: "finishRenderingSnapshot",
    value: function finishRenderingSnapshot(renderer) {
      renderer.finishRendering();
    }
  }]);
}();
var FrameView = /*#__PURE__*/function (_View2) {
  function FrameView() {
    _classCallCheck(this, FrameView);
    return _callSuper(this, FrameView, arguments);
  }
  _inherits(FrameView, _View2);
  return _createClass(FrameView, [{
    key: "missing",
    value: function missing() {
      this.element.innerHTML = "<strong class=\"turbo-frame-error\">Content missing</strong>";
    }
  }, {
    key: "snapshot",
    get: function get() {
      return new Snapshot(this.element);
    }
  }]);
}(View);
var LinkInterceptor = /*#__PURE__*/function () {
  function LinkInterceptor(delegate, element) {
    var _this8 = this;
    _classCallCheck(this, LinkInterceptor);
    this.clickBubbled = function (event) {
      if (_this8.clickEventIsSignificant(event)) {
        _this8.clickEvent = event;
      } else {
        delete _this8.clickEvent;
      }
    };
    this.linkClicked = function (event) {
      if (_this8.clickEvent && _this8.clickEventIsSignificant(event)) {
        if (_this8.delegate.shouldInterceptLinkClick(event.target, event.detail.url, event.detail.originalEvent)) {
          _this8.clickEvent.preventDefault();
          event.preventDefault();
          _this8.delegate.linkClickIntercepted(event.target, event.detail.url, event.detail.originalEvent);
        }
      }
      delete _this8.clickEvent;
    };
    this.willVisit = function (_event) {
      delete _this8.clickEvent;
    };
    this.delegate = delegate;
    this.element = element;
  }
  return _createClass(LinkInterceptor, [{
    key: "start",
    value: function start() {
      this.element.addEventListener("click", this.clickBubbled);
      document.addEventListener("turbo:click", this.linkClicked);
      document.addEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener("click", this.clickBubbled);
      document.removeEventListener("turbo:click", this.linkClicked);
      document.removeEventListener("turbo:before-visit", this.willVisit);
    }
  }, {
    key: "clickEventIsSignificant",
    value: function clickEventIsSignificant(event) {
      var _event$target;
      var target = event.composed ? (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement : event.target;
      var element = findLinkFromClickTarget(target) || target;
      return element instanceof Element && element.closest("turbo-frame, html") == this.element;
    }
  }]);
}();
var LinkClickObserver = /*#__PURE__*/function () {
  function LinkClickObserver(delegate, eventTarget) {
    var _this9 = this;
    _classCallCheck(this, LinkClickObserver);
    this.started = false;
    this.clickCaptured = function () {
      _this9.eventTarget.removeEventListener("click", _this9.clickBubbled, false);
      _this9.eventTarget.addEventListener("click", _this9.clickBubbled, false);
    };
    this.clickBubbled = function (event) {
      if (event instanceof MouseEvent && _this9.clickEventIsSignificant(event)) {
        var target = event.composedPath && event.composedPath()[0] || event.target;
        var link = findLinkFromClickTarget(target);
        if (link && doesNotTargetIFrame(link.target)) {
          var _location2 = getLocationForLink(link);
          if (_this9.delegate.willFollowLinkToLocation(link, _location2, event)) {
            event.preventDefault();
            _this9.delegate.followedLinkToLocation(link, _location2);
          }
        }
      }
    };
    this.delegate = delegate;
    this.eventTarget = eventTarget;
  }
  return _createClass(LinkClickObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.eventTarget.addEventListener("click", this.clickCaptured, true);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.eventTarget.removeEventListener("click", this.clickCaptured, true);
        this.started = false;
      }
    }
  }, {
    key: "clickEventIsSignificant",
    value: function clickEventIsSignificant(event) {
      return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
  }]);
}();
var FormLinkClickObserver = /*#__PURE__*/function () {
  function FormLinkClickObserver(delegate, element) {
    _classCallCheck(this, FormLinkClickObserver);
    this.delegate = delegate;
    this.linkInterceptor = new LinkClickObserver(this, element);
  }
  return _createClass(FormLinkClickObserver, [{
    key: "start",
    value: function start() {
      this.linkInterceptor.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.linkInterceptor.stop();
    }

    // Link hover observer delegate
  }, {
    key: "canPrefetchRequestToLocation",
    value: function canPrefetchRequestToLocation(link, location) {
      return false;
    }
  }, {
    key: "prefetchAndCacheRequestToLocation",
    value: function prefetchAndCacheRequestToLocation(link, location) {
      return;
    }

    // Link click observer delegate
  }, {
    key: "willFollowLinkToLocation",
    value: function willFollowLinkToLocation(link, location, originalEvent) {
      return this.delegate.willSubmitFormLinkToLocation(link, location, originalEvent) && (link.hasAttribute("data-turbo-method") || link.hasAttribute("data-turbo-stream"));
    }
  }, {
    key: "followedLinkToLocation",
    value: function followedLinkToLocation(link, location) {
      var form = document.createElement("form");
      var type = "hidden";
      var _iterator8 = _createForOfIteratorHelper(location.searchParams),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _ref6 = _step8.value;
          var _ref7 = _slicedToArray(_ref6, 2);
          var name = _ref7[0];
          var value = _ref7[1];
          form.append(Object.assign(document.createElement("input"), {
            type: type,
            name: name,
            value: value
          }));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      var action = Object.assign(location, {
        search: ""
      });
      form.setAttribute("data-turbo", "true");
      form.setAttribute("action", action.href);
      form.setAttribute("hidden", "");
      var method = link.getAttribute("data-turbo-method");
      if (method) form.setAttribute("method", method);
      var turboFrame = link.getAttribute("data-turbo-frame");
      if (turboFrame) form.setAttribute("data-turbo-frame", turboFrame);
      var turboAction = getVisitAction(link);
      if (turboAction) form.setAttribute("data-turbo-action", turboAction);
      var turboConfirm = link.getAttribute("data-turbo-confirm");
      if (turboConfirm) form.setAttribute("data-turbo-confirm", turboConfirm);
      var turboStream = link.hasAttribute("data-turbo-stream");
      if (turboStream) form.setAttribute("data-turbo-stream", "");
      this.delegate.submittedFormLinkToLocation(link, location, form);
      document.body.appendChild(form);
      form.addEventListener("turbo:submit-end", function () {
        return form.remove();
      }, {
        once: true
      });
      requestAnimationFrame(function () {
        return form.requestSubmit();
      });
    }
  }]);
}();
var Bardo = /*#__PURE__*/function () {
  function Bardo(delegate, permanentElementMap) {
    _classCallCheck(this, Bardo);
    this.delegate = delegate;
    this.permanentElementMap = permanentElementMap;
  }
  return _createClass(Bardo, [{
    key: "enter",
    value: function enter() {
      for (var _id2 in this.permanentElementMap) {
        var _this$permanentElemen = _slicedToArray(this.permanentElementMap[_id2], 2),
          currentPermanentElement = _this$permanentElemen[0],
          newPermanentElement = _this$permanentElemen[1];
        this.delegate.enteringBardo(currentPermanentElement, newPermanentElement);
        this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
      }
    }
  }, {
    key: "leave",
    value: function leave() {
      for (var _id3 in this.permanentElementMap) {
        var _this$permanentElemen2 = _slicedToArray(this.permanentElementMap[_id3], 1),
          currentPermanentElement = _this$permanentElemen2[0];
        this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
        this.replacePlaceholderWithPermanentElement(currentPermanentElement);
        this.delegate.leavingBardo(currentPermanentElement);
      }
    }
  }, {
    key: "replaceNewPermanentElementWithPlaceholder",
    value: function replaceNewPermanentElementWithPlaceholder(permanentElement) {
      var placeholder = createPlaceholderForPermanentElement(permanentElement);
      permanentElement.replaceWith(placeholder);
    }
  }, {
    key: "replaceCurrentPermanentElementWithClone",
    value: function replaceCurrentPermanentElementWithClone(permanentElement) {
      var clone = permanentElement.cloneNode(true);
      permanentElement.replaceWith(clone);
    }
  }, {
    key: "replacePlaceholderWithPermanentElement",
    value: function replacePlaceholderWithPermanentElement(permanentElement) {
      var placeholder = this.getPlaceholderById(permanentElement.id);
      placeholder === null || placeholder === void 0 ? void 0 : placeholder.replaceWith(permanentElement);
    }
  }, {
    key: "getPlaceholderById",
    value: function getPlaceholderById(id) {
      return this.placeholders.find(function (element) {
        return element.content == id;
      });
    }
  }, {
    key: "placeholders",
    get: function get() {
      return _toConsumableArray(document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]"));
    }
  }], [{
    key: "preservingPermanentElements",
    value: function () {
      var _preservingPermanentElements = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(delegate, permanentElementMap, callback) {
        var bardo;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              bardo = new this(delegate, permanentElementMap);
              bardo.enter();
              _context7.next = 4;
              return callback();
            case 4:
              bardo.leave();
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function preservingPermanentElements(_x7, _x8, _x9) {
        return _preservingPermanentElements.apply(this, arguments);
      }
      return preservingPermanentElements;
    }()
  }]);
}();
function createPlaceholderForPermanentElement(permanentElement) {
  var element = document.createElement("meta");
  element.setAttribute("name", "turbo-permanent-placeholder");
  element.setAttribute("content", permanentElement.id);
  return element;
}
var _activeElement = /*#__PURE__*/_classPrivateFieldLooseKey("activeElement");
var Renderer = /*#__PURE__*/function () {
  function Renderer(currentSnapshot, newSnapshot, isPreview) {
    var _this10 = this;
    var willRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    _classCallCheck(this, Renderer);
    Object.defineProperty(this, _activeElement, {
      writable: true,
      value: null
    });
    this.currentSnapshot = currentSnapshot;
    this.newSnapshot = newSnapshot;
    this.isPreview = isPreview;
    this.willRender = willRender;
    this.renderElement = this.constructor.renderElement;
    this.promise = new Promise(function (resolve, reject) {
      return _this10.resolvingFunctions = {
        resolve: resolve,
        reject: reject
      };
    });
  }
  return _createClass(Renderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "shouldAutofocus",
    get: function get() {
      return true;
    }
  }, {
    key: "reloadReason",
    get: function get() {
      return;
    }
  }, {
    key: "prepareToRender",
    value: function prepareToRender() {
      return;
    }
  }, {
    key: "render",
    value: function render() {
      // Abstract method
    }
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      if (this.resolvingFunctions) {
        this.resolvingFunctions.resolve();
        delete this.resolvingFunctions;
      }
    }
  }, {
    key: "preservingPermanentElements",
    value: function () {
      var _preservingPermanentElements2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(callback) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return Bardo.preservingPermanentElements(this, this.permanentElementMap, callback);
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function preservingPermanentElements(_x10) {
        return _preservingPermanentElements2.apply(this, arguments);
      }
      return preservingPermanentElements;
    }()
  }, {
    key: "focusFirstAutofocusableElement",
    value: function focusFirstAutofocusableElement() {
      if (this.shouldAutofocus) {
        var element = this.connectedSnapshot.firstAutofocusableElement;
        if (element) {
          element.focus();
        }
      }
    }

    // Bardo delegate
  }, {
    key: "enteringBardo",
    value: function enteringBardo(currentPermanentElement) {
      if (_classPrivateFieldLooseBase(this, _activeElement)[_activeElement]) return;
      if (currentPermanentElement.contains(this.currentSnapshot.activeElement)) {
        _classPrivateFieldLooseBase(this, _activeElement)[_activeElement] = this.currentSnapshot.activeElement;
      }
    }
  }, {
    key: "leavingBardo",
    value: function leavingBardo(currentPermanentElement) {
      if (currentPermanentElement.contains(_classPrivateFieldLooseBase(this, _activeElement)[_activeElement]) && _classPrivateFieldLooseBase(this, _activeElement)[_activeElement] instanceof HTMLElement) {
        _classPrivateFieldLooseBase(this, _activeElement)[_activeElement].focus();
        _classPrivateFieldLooseBase(this, _activeElement)[_activeElement] = null;
      }
    }
  }, {
    key: "connectedSnapshot",
    get: function get() {
      return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
  }, {
    key: "currentElement",
    get: function get() {
      return this.currentSnapshot.element;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "permanentElementMap",
    get: function get() {
      return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
  }, {
    key: "renderMethod",
    get: function get() {
      return "replace";
    }
  }], [{
    key: "renderElement",
    value: function renderElement(currentElement, newElement) {
      // Abstract method
    }
  }]);
}();
var FrameRenderer = /*#__PURE__*/function (_Renderer2) {
  function FrameRenderer(delegate, currentSnapshot, newSnapshot, renderElement, isPreview) {
    var _this11;
    var willRender = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
    _classCallCheck(this, FrameRenderer);
    _this11 = _callSuper(this, FrameRenderer, [currentSnapshot, newSnapshot, renderElement, isPreview, willRender]);
    _this11.delegate = delegate;
    return _this11;
  }
  _inherits(FrameRenderer, _Renderer2);
  return _createClass(FrameRenderer, [{
    key: "shouldRender",
    get: function get() {
      return true;
    }
  }, {
    key: "render",
    value: function () {
      var _render2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this12 = this;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return nextRepaint();
            case 2:
              this.preservingPermanentElements(function () {
                _this12.loadFrameElement();
              });
              this.scrollFrameIntoView();
              _context9.next = 6;
              return nextRepaint();
            case 6:
              this.focusFirstAutofocusableElement();
              _context9.next = 9;
              return nextRepaint();
            case 9:
              this.activateScriptElements();
            case 10:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function render() {
        return _render2.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "loadFrameElement",
    value: function loadFrameElement() {
      this.delegate.willRenderFrame(this.currentElement, this.newElement);
      this.renderElement(this.currentElement, this.newElement);
    }
  }, {
    key: "scrollFrameIntoView",
    value: function scrollFrameIntoView() {
      if (this.currentElement.autoscroll || this.newElement.autoscroll) {
        var element = this.currentElement.firstElementChild;
        var block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
        var behavior = readScrollBehavior(this.currentElement.getAttribute("data-autoscroll-behavior"), "auto");
        if (element) {
          element.scrollIntoView({
            block: block,
            behavior: behavior
          });
          return true;
        }
      }
      return false;
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator9 = _createForOfIteratorHelper(this.newScriptElements),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var inertScriptElement = _step9.value;
          var activatedScriptElement = activateScriptElement(inertScriptElement);
          inertScriptElement.replaceWith(activatedScriptElement);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "newScriptElements",
    get: function get() {
      return this.currentElement.querySelectorAll("script");
    }
  }], [{
    key: "renderElement",
    value: function renderElement(currentElement, newElement) {
      var _frameElement$ownerDo;
      var destinationRange = document.createRange();
      destinationRange.selectNodeContents(currentElement);
      destinationRange.deleteContents();
      var frameElement = newElement;
      var sourceRange = (_frameElement$ownerDo = frameElement.ownerDocument) === null || _frameElement$ownerDo === void 0 ? void 0 : _frameElement$ownerDo.createRange();
      if (sourceRange) {
        sourceRange.selectNodeContents(frameElement);
        currentElement.appendChild(sourceRange.extractContents());
      }
    }
  }]);
}(Renderer);
function readScrollLogicalPosition(value, defaultValue) {
  if (value == "end" || value == "start" || value == "center" || value == "nearest") {
    return value;
  } else {
    return defaultValue;
  }
}
function readScrollBehavior(value, defaultValue) {
  if (value == "auto" || value == "smooth") {
    return value;
  } else {
    return defaultValue;
  }
}

// base IIFE to define idiomorph
var Idiomorph = function () {
  //=============================================================================
  // AND NOW IT BEGINS...
  //=============================================================================
  var EMPTY_SET = new Set();

  // default configuration values, updatable by users now
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: 'merge',
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };

  //=============================================================================
  // Core Morphing Algorithm - morph, morphNormalizedContent, morphOldNodeTo, morphChildren
  //=============================================================================
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) {
      oldNode = oldNode.documentElement;
    }
    if (typeof newContent === 'string') {
      newContent = parseContent(newContent);
    }
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector('head');
      var newHead = normalizedNewContent.querySelector('head');
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        // when head promises resolve, call morph again, ignoring the head tag
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      // innerHTML, so we are only updating the children
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      // otherwise find the best element match in the new content, morph that, and merge its siblings
      // into either side of the best match
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);

      // stash the siblings that will need to be inserted on either side of the best match
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;

      // morph it
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) {
        // if there was a best match, merge the siblings in too and return the
        // whole bunch
        return insertSiblings(previousSibling, morphedNode, nextSibling);
      } else {
        // otherwise nothing was added to the DOM
        return [];
      }
    } else {
      throw "Do not understand how to morph style " + ctx.morphStyle;
    }
  }

  /**
   * @param possibleActiveElement
   * @param ctx
   * @returns {boolean}
   */
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement && possibleActiveElement !== document.body;
  }

  /**
   * @param oldNode root node to merge content into
   * @param newContent new content to merge
   * @param ctx the merge context
   * @returns {Element} the element that ended up in the DOM
   */
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) ;else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) ;else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") {
        handleHeadElement(newContent, oldNode, ctx);
      } else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) {
          morphChildren(newContent, oldNode, ctx);
        }
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }

  /**
   * This is the core algorithm for matching up children.  The idea is to use id sets to try to match up
   * nodes as faithfully as possible.  We greedily match, which allows us to keep the algorithm fast, but
   * by using id sets, we are able to better match up with content deeper in the DOM.
   *
   * Basic algorithm is, for each node in the new content:
   *
   * - if we have reached the end of the old parent, append the new content
   * - if the new content has an id set match with the current insertion point, morph
   * - search for an id set match
   * - if id set match found, morph
   * - otherwise search for a "soft" match
   * - if a soft match is found, morph
   * - otherwise, prepend the new node before the current insertion point
   *
   * The two search algorithms terminate if competing node matches appear to outweigh what can be achieved
   * with the current node.  See findIdSetMatch() and findSoftMatch() for details.
   *
   * @param {Element} newParent the parent element of the new content
   * @param {Element } oldParent the old content that we are merging the new content into
   * @param ctx the merge context
   */
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;

    // run through all the new content
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;

      // if we are at the end of the exiting parent's children, just append
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // if the current node has an id set match then morph
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // otherwise search forward in the existing old children for an id set match
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a potential match, remove the nodes until that point and morph
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // no id set match found, so scan forward for a soft match for the current node
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);

      // if we found a soft match for the current node, morph
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }

      // abandon all hope of morphing, just insert the new child before the insertion point
      // and move on
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }

    // remove any remaining old nodes that didn't match up with new content
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }

  //=============================================================================
  // Attribute Syncing Code
  //=============================================================================

  /**
   * @param attr {String} the attribute to be mutated
   * @param to {Element} the element that is going to be updated
   * @param updateType {("update"|"remove")}
   * @param ctx the merge context
   * @returns {boolean} true if the attribute should be ignored, false otherwise
   */
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === 'value' && ctx.ignoreActiveValue && to === document.activeElement) {
      return true;
    }
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }

  /**
   * syncs a given node with another node, copying over all attributes and
   * inner element state from the 'from' node to the 'to' node
   *
   * @param {Element} from the element to copy attributes & state from
   * @param {Element} to the element to copy attributes & state to
   * @param ctx the merge context
   */
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;

    // if is an element type, sync the attributes from the
    // new node into the new node
    if (type === 1 /* element type */) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator10 = _createForOfIteratorHelper(fromAttributes),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var fromAttribute = _step10.value;
          if (ignoreAttribute(fromAttribute.name, to, 'update', ctx)) {
            continue;
          }
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) {
            to.setAttribute(fromAttribute.name, fromAttribute.value);
          }
        }
        // iterate backwards to avoid skipping over items when a delete occurs
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, 'remove', ctx)) {
          continue;
        }
        if (!from.hasAttribute(toAttribute.name)) {
          to.removeAttribute(toAttribute.name);
        }
      }
    }

    // sync text nodes
    if (type === 8 /* comment */ || type === 3 /* text */) {
      if (to.nodeValue !== from.nodeValue) {
        to.nodeValue = from.nodeValue;
      }
    }
    if (!ignoreValueOfActiveElement(to, ctx)) {
      // sync input values
      syncInputValue(from, to, ctx);
    }
  }

  /**
   * @param from {Element} element to sync the value from
   * @param to {Element} element to sync the value to
   * @param attributeName {String} the attribute name
   * @param ctx the merge context
   */
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, 'update', ctx);
      if (!ignoreUpdate) {
        to[attributeName] = from[attributeName];
      }
      if (from[attributeName]) {
        if (!ignoreUpdate) {
          to.setAttribute(attributeName, from[attributeName]);
        }
      } else {
        if (!ignoreAttribute(attributeName, to, 'remove', ctx)) {
          to.removeAttribute(attributeName);
        }
      }
    }
  }

  /**
   * NB: many bothans died to bring us information:
   *
   *  https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
   *  https://github.com/choojs/nanomorph/blob/master/lib/morph.jsL113
   *
   * @param from {Element} the element to sync the input value from
   * @param to {Element} the element to sync the input value to
   * @param ctx the merge context
   */
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== 'file') {
      var fromValue = from.value;
      var toValue = to.value;

      // sync boolean attributes
      syncBooleanAttribute(from, to, 'checked', ctx);
      syncBooleanAttribute(from, to, 'disabled', ctx);
      if (!from.hasAttribute('value')) {
        if (!ignoreAttribute('value', to, 'remove', ctx)) {
          to.value = '';
          to.removeAttribute('value');
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute('value', to, 'update', ctx)) {
          to.setAttribute('value', fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) {
      syncBooleanAttribute(from, to, 'selected', ctx);
    } else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute('value', to, 'update', ctx)) {
        return;
      }
      if (_fromValue !== _toValue) {
        to.value = _fromValue;
      }
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) {
        to.firstChild.nodeValue = _fromValue;
      }
    }
  }

  //=============================================================================
  // the HEAD tag can be handled specially, either w/ a 'merge' or 'append' style
  //=============================================================================
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;

    // put all new head elements into a Map, by their outerHTML
    var srcToNewHeadNodes = new Map();
    var _iterator11 = _createForOfIteratorHelper(newHeadTag.children),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var newHeadChild = _step11.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }

      // for each elt in the current head
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    var _iterator12 = _createForOfIteratorHelper(currentHead.children),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var currentHeadElt = _step12.value;
        // If the current head element is in the map
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) {
            // remove the current version and let the new version replace it and re-execute
            removed.push(currentHeadElt);
          } else {
            // this element already exists and should not be re-appended, so remove it from
            // the new content map, preserving it in the DOM
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else {
          if (headMergeStyle === "append") {
            // we are appending and this existing element is not new content
            // so if and only if it is marked for re-append do we do anything
            if (isReAppended) {
              removed.push(currentHeadElt);
              nodesToAppend.push(currentHeadElt);
            }
          } else {
            // if this is a merge, we remove this content since it is not in the new head
            if (ctx.head.shouldRemove(currentHeadElt) !== false) {
              removed.push(currentHeadElt);
            }
          }
        }
      }

      // Push the remaining new head elements in the Map into the
      // nodes to append to the head tag
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i3];
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener('load', function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i3 = 0, _nodesToAppend = nodesToAppend; _i3 < _nodesToAppend.length; _i3++) {
      _loop();
    }

    // remove all removed elements, after we have appended the new elements to avoid
    // additional network requests for things like style sheets
    for (var _i4 = 0, _removed = removed; _i4 < _removed.length; _i4++) {
      var removedElement = _removed[_i4];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function noOp() {}

  /*
    Deep merges the config object and the Idiomoroph.defaults object to
    produce a final configuration object
   */
  function mergeDefaults(config) {
    var finalConfig = {};
    // copy top level stuff into final config
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);

    // copy callbacks into final config (do this to deep merge the callbacks)
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);

    // copy head config into final config  (do this to deep merge the head)
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) {
      return false;
    }
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) {
      if (node1.id !== "" && node1.id === node2.id) {
        return true;
      } else {
        return getIdIntersectionCount(ctx, node1, node2) > 0;
      }
    }
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) {
      return false;
    }
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential id match
  // for the newChild.  We stop if we find a potential id match for the new child OR
  // if the number of potential id matches we are discarding is greater than the
  // potential id matches for the new child
  //=============================================================================
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    // max id matches we are willing to discard in our search
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;

    // only search forward if there is a possibility of an id match
    if (newChildPotentialIdCount > 0) {
      var _potentialMatch = insertionPoint;
      // if there is a possibility of an id match, scan forward
      // keep track of the potential id match count we are discarding (the
      // newChildPotentialIdCount must be greater than this to make it likely
      // worth it)
      var otherMatchCount = 0;
      while (_potentialMatch != null) {
        // If we have an id match, return the current potential match
        if (isIdSetMatch(newChild, _potentialMatch, ctx)) {
          return _potentialMatch;
        }

        // computer the other potential matches of this new content
        otherMatchCount += getIdIntersectionCount(ctx, _potentialMatch, newContent);
        if (otherMatchCount > newChildPotentialIdCount) {
          // if we have more potential id matches in _other_ content, we
          // do not have a good candidate for an id match, so return null
          return null;
        }

        // advanced to the next old content child
        _potentialMatch = _potentialMatch.nextSibling;
      }
    }
    return potentialMatch;
  }

  //=============================================================================
  // Scans forward from the insertionPoint in the old parent looking for a potential soft match
  // for the newChild.  We stop if we find a potential soft match for the new child OR
  // if we find a potential id match in the old parents children OR if we find two
  // potential soft matches for the next two pieces of new content
  //=============================================================================
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) {
        // the current potential soft match has a potential id set match with the remaining new
        // content so bail out of looking
        return null;
      }

      // if we have a soft match with the current node, return it
      if (isSoftMatch(newChild, potentialSoftMatch)) {
        return potentialSoftMatch;
      }
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        // the next new node has a soft match with this node, so
        // increment the count of future soft matches
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;

        // If there are two future soft matches, bail to allow the siblings to soft match
        // so that we don't consume future soft matches for the sake of the current node
        if (siblingSoftMatchCount >= 2) {
          return null;
        }
      }

      // advanced to the next old content child
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();

    // remove svgs to avoid false-positive matches on head, etc.
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, '');

    // if the newContent contains a html, head or body tag, we can simply parse it w/o wrapping
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      // if it is a full HTML document, return the document itself as the parent container
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        // otherwise return the html element as the parent container
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else {
          return null;
        }
      }
    } else {
      // if it is partial HTML, wrap it in a template tag to provide a parent element and also to help
      // deal with touchy tags like tr, tbody, etc.
      var responseDoc = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html");
      var _content = responseDoc.body.querySelector('template').content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) {
      // noinspection UnnecessaryLocalVariableJS
      var dummyParent = document.createElement('div');
      return dummyParent;
    } else if (newContent.generatedByIdiomorph) {
      // the template tag created by idiomorph parsing can serve as a dummy parent
      return newContent;
    } else if (newContent instanceof Node) {
      // a single node is added as a child to a dummy parent
      var _dummyParent = document.createElement('div');
      _dummyParent.append(newContent);
      return _dummyParent;
    } else {
      // all nodes in the array or HTMLElement collection are consolidated under
      // a single dummy parent element
      var _dummyParent2 = document.createElement('div');
      for (var _i5 = 0, _arr = _toConsumableArray(newContent); _i5 < _arr.length; _i5++) {
        var elt = _arr[_i5];
        _dummyParent2.append(elt);
      }
      return _dummyParent2;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node); // push added preceding siblings on in order and insert
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling); // here we are going in order, so push on as we scan, rather than add
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) {
      morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    }
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) {
      return .5 + getIdIntersectionCount(ctx, node1, node2);
    }
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }

  //=============================================================================
  // ID Set Functions
  //=============================================================================

  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    var idSet = ctx.idMap.get(targetNode) || EMPTY_SET;
    return idSet.has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator13 = _createForOfIteratorHelper(idSet),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _id4 = _step13.value;
        ctx.deadIds.add(_id4);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator14 = _createForOfIteratorHelper(sourceSet),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _id5 = _step14.value;
        // a potential match is an id in the source and potentialIdsSet, but
        // that has not already been merged into the DOM
        if (isIdInConsideration(ctx, _id5) && idIsWithinNode(ctx, _id5, node2)) {
          ++matchCount;
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    return matchCount;
  }

  /**
   * A bottom up algorithm that finds all elements with ids inside of the node
   * argument and populates id sets for those nodes and all their parents, generating
   * a set of ids contained within all nodes for the entire hierarchy in the DOM
   *
   * @param node {Element}
   * @param {Map<Node, Set<String>>} idMap
   */
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    // find all elements with an id property
    var idElements = node.querySelectorAll('[id]');
    var _iterator15 = _createForOfIteratorHelper(idElements),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var elt = _step15.value;
        var current = elt;
        // walk up the parent hierarchy of that element, adding the id
        // of element to the parent's id set
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          // if the id set doesn't exist, create it and insert it in the  map
          if (idSet == null) {
            idSet = new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
  }

  /**
   * This function computes a map of nodes to all ids contained within that node (inclusive of the
   * node).  This map can be used to ask if two nodes have intersecting sets of ids, which allows
   * for a looser definition of "matching" than tradition id matching, and allows child nodes
   * to contribute to a parent nodes matching.
   *
   * @param {Element} oldContent  the old content that will be morphed
   * @param {Element} newContent  the new content to morph to
   * @returns {Map<Node, Set<String>>} a map of nodes to id sets for the
   */
  function createIdMap(oldContent, newContent) {
    var idMap = new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }

  //=============================================================================
  // This is what ends up becoming the Idiomorph global object
  //=============================================================================
  return {
    morph: morph,
    defaults: defaults
  };
}();
function morphElements(currentElement, newElement) {
  var _ref8 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callbacks = _ref8.callbacks,
    options = _objectWithoutProperties(_ref8, _excluded);
  Idiomorph.morph(currentElement, newElement, _objectSpread(_objectSpread({}, options), {}, {
    callbacks: new DefaultIdiomorphCallbacks(callbacks)
  }));
}
function morphChildren(currentElement, newElement) {
  morphElements(currentElement, newElement.children, {
    morphStyle: "innerHTML"
  });
}
var _beforeNodeMorphed = /*#__PURE__*/_classPrivateFieldLooseKey("beforeNodeMorphed");
var DefaultIdiomorphCallbacks = /*#__PURE__*/_createClass(function DefaultIdiomorphCallbacks() {
  var _this13 = this;
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    beforeNodeMorphed = _ref9.beforeNodeMorphed;
  _classCallCheck(this, DefaultIdiomorphCallbacks);
  Object.defineProperty(this, _beforeNodeMorphed, {
    writable: true,
    value: void 0
  });
  this.beforeNodeAdded = function (node) {
    return !(node.id && node.hasAttribute("data-turbo-permanent") && document.getElementById(node.id));
  };
  this.beforeNodeMorphed = function (currentElement, newElement) {
    if (currentElement instanceof Element) {
      if (!currentElement.hasAttribute("data-turbo-permanent") && _classPrivateFieldLooseBase(_this13, _beforeNodeMorphed)[_beforeNodeMorphed](currentElement, newElement)) {
        var event = dispatch("turbo:before-morph-element", {
          cancelable: true,
          target: currentElement,
          detail: {
            currentElement: currentElement,
            newElement: newElement
          }
        });
        return !event.defaultPrevented;
      } else {
        return false;
      }
    }
  };
  this.beforeAttributeUpdated = function (attributeName, target, mutationType) {
    var event = dispatch("turbo:before-morph-attribute", {
      cancelable: true,
      target: target,
      detail: {
        attributeName: attributeName,
        mutationType: mutationType
      }
    });
    return !event.defaultPrevented;
  };
  this.beforeNodeRemoved = function (node) {
    return _this13.beforeNodeMorphed(node);
  };
  this.afterNodeMorphed = function (currentElement, newElement) {
    if (currentElement instanceof Element) {
      dispatch("turbo:morph-element", {
        target: currentElement,
        detail: {
          currentElement: currentElement,
          newElement: newElement
        }
      });
    }
  };
  _classPrivateFieldLooseBase(this, _beforeNodeMorphed)[_beforeNodeMorphed] = beforeNodeMorphed || function () {
    return true;
  };
});
var MorphingFrameRenderer = /*#__PURE__*/function (_FrameRenderer) {
  function MorphingFrameRenderer() {
    _classCallCheck(this, MorphingFrameRenderer);
    return _callSuper(this, MorphingFrameRenderer, arguments);
  }
  _inherits(MorphingFrameRenderer, _FrameRenderer);
  return _createClass(MorphingFrameRenderer, [{
    key: "preservingPermanentElements",
    value: function () {
      var _preservingPermanentElements3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(callback) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return callback();
            case 2:
              return _context10.abrupt("return", _context10.sent);
            case 3:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function preservingPermanentElements(_x11) {
        return _preservingPermanentElements3.apply(this, arguments);
      }
      return preservingPermanentElements;
    }()
  }], [{
    key: "renderElement",
    value: function renderElement(currentElement, newElement) {
      dispatch("turbo:before-frame-morph", {
        target: currentElement,
        detail: {
          currentElement: currentElement,
          newElement: newElement
        }
      });
      morphChildren(currentElement, newElement);
    }
  }]);
}(FrameRenderer);
var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar() {
    var _this14 = this;
    _classCallCheck(this, ProgressBar);
    this.hiding = false;
    this.value = 0;
    this.visible = false;
    this.trickle = function () {
      _this14.setValue(_this14.value + Math.random() / 100);
    };
    this.stylesheetElement = this.createStylesheetElement();
    this.progressElement = this.createProgressElement();
    this.installStylesheetElement();
    this.setValue(0);
  }
  return _createClass(ProgressBar, [{
    key: "show",
    value: function show() {
      if (!this.visible) {
        this.visible = true;
        this.installProgressElement();
        this.startTrickling();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this15 = this;
      if (this.visible && !this.hiding) {
        this.hiding = true;
        this.fadeProgressElement(function () {
          _this15.uninstallProgressElement();
          _this15.stopTrickling();
          _this15.visible = false;
          _this15.hiding = false;
        });
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      this.refresh();
    }

    // Private
  }, {
    key: "installStylesheetElement",
    value: function installStylesheetElement() {
      document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
  }, {
    key: "installProgressElement",
    value: function installProgressElement() {
      this.progressElement.style.width = "0";
      this.progressElement.style.opacity = "1";
      document.documentElement.insertBefore(this.progressElement, document.body);
      this.refresh();
    }
  }, {
    key: "fadeProgressElement",
    value: function fadeProgressElement(callback) {
      this.progressElement.style.opacity = "0";
      setTimeout(callback, ProgressBar.animationDuration * 1.5);
    }
  }, {
    key: "uninstallProgressElement",
    value: function uninstallProgressElement() {
      if (this.progressElement.parentNode) {
        document.documentElement.removeChild(this.progressElement);
      }
    }
  }, {
    key: "startTrickling",
    value: function startTrickling() {
      if (!this.trickleInterval) {
        this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
      }
    }
  }, {
    key: "stopTrickling",
    value: function stopTrickling() {
      window.clearInterval(this.trickleInterval);
      delete this.trickleInterval;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this16 = this;
      requestAnimationFrame(function () {
        _this16.progressElement.style.width = "".concat(10 + _this16.value * 90, "%");
      });
    }
  }, {
    key: "createStylesheetElement",
    value: function createStylesheetElement() {
      var element = document.createElement("style");
      element.type = "text/css";
      element.textContent = ProgressBar.defaultCSS;
      var cspNonce = getCspNonce();
      if (cspNonce) {
        element.nonce = cspNonce;
      }
      return element;
    }
  }, {
    key: "createProgressElement",
    value: function createProgressElement() {
      var element = document.createElement("div");
      element.className = "turbo-progress-bar";
      return element;
    }
  }], [{
    key: "defaultCSS",
    get: /*ms*/

    function get() {
      return unindent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 2147483647;\n        transition:\n          width ", "ms ease-out,\n          opacity ", "ms ", "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "])), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
    }
  }]);
}();
ProgressBar.animationDuration = 300;
var HeadSnapshot = /*#__PURE__*/function (_Snapshot) {
  function HeadSnapshot() {
    var _this17;
    _classCallCheck(this, HeadSnapshot);
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    _this17 = _callSuper(this, HeadSnapshot, [].concat(args));
    _this17.detailsByOuterHTML = _this17.children.filter(function (element) {
      return !elementIsNoscript(element);
    }).map(function (element) {
      return elementWithoutNonce(element);
    }).reduce(function (result, element) {
      var outerHTML = element.outerHTML;
      var details = outerHTML in result ? result[outerHTML] : {
        type: elementType(element),
        tracked: elementIsTracked(element),
        elements: []
      };
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, outerHTML, _objectSpread(_objectSpread({}, details), {}, {
        elements: [].concat(_toConsumableArray(details.elements), [element])
      })));
    }, {});
    return _this17;
  }
  _inherits(HeadSnapshot, _Snapshot);
  return _createClass(HeadSnapshot, [{
    key: "trackedElementSignature",
    get: function get() {
      var _this18 = this;
      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return _this18.detailsByOuterHTML[outerHTML].tracked;
      }).join("");
    }
  }, {
    key: "getScriptElementsNotInSnapshot",
    value: function getScriptElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
  }, {
    key: "getStylesheetElementsNotInSnapshot",
    value: function getStylesheetElementsNotInSnapshot(snapshot) {
      return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
  }, {
    key: "getElementsMatchingTypeNotInSnapshot",
    value: function getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
      var _this19 = this;
      return Object.keys(this.detailsByOuterHTML).filter(function (outerHTML) {
        return !(outerHTML in snapshot.detailsByOuterHTML);
      }).map(function (outerHTML) {
        return _this19.detailsByOuterHTML[outerHTML];
      }).filter(function (_ref10) {
        var type = _ref10.type;
        return type == matchedType;
      }).map(function (_ref11) {
        var _ref11$elements = _slicedToArray(_ref11.elements, 1),
          element = _ref11$elements[0];
        return element;
      });
    }
  }, {
    key: "provisionalElements",
    get: function get() {
      var _this20 = this;
      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this20$detailsByOute = _this20.detailsByOuterHTML[outerHTML],
          type = _this20$detailsByOute.type,
          tracked = _this20$detailsByOute.tracked,
          elements = _this20$detailsByOute.elements;
        if (type == null && !tracked) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements));
        } else if (elements.length > 1) {
          return [].concat(_toConsumableArray(result), _toConsumableArray(elements.slice(1)));
        } else {
          return result;
        }
      }, []);
    }
  }, {
    key: "getMetaValue",
    value: function getMetaValue(name) {
      var element = this.findMetaElementByName(name);
      return element ? element.getAttribute("content") : null;
    }
  }, {
    key: "findMetaElementByName",
    value: function findMetaElementByName(name) {
      var _this21 = this;
      return Object.keys(this.detailsByOuterHTML).reduce(function (result, outerHTML) {
        var _this21$detailsByOute = _slicedToArray(_this21.detailsByOuterHTML[outerHTML].elements, 1),
          element = _this21$detailsByOute[0];
        return elementIsMetaElementWithName(element, name) ? element : result;
      }, undefined | undefined);
    }
  }]);
}(Snapshot);
function elementType(element) {
  if (elementIsScript(element)) {
    return "script";
  } else if (elementIsStylesheet(element)) {
    return "stylesheet";
  }
}
function elementIsTracked(element) {
  return element.getAttribute("data-turbo-track") == "reload";
}
function elementIsScript(element) {
  var tagName = element.localName;
  return tagName == "script";
}
function elementIsNoscript(element) {
  var tagName = element.localName;
  return tagName == "noscript";
}
function elementIsStylesheet(element) {
  var tagName = element.localName;
  return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}
function elementIsMetaElementWithName(element, name) {
  var tagName = element.localName;
  return tagName == "meta" && element.getAttribute("name") == name;
}
function elementWithoutNonce(element) {
  if (element.hasAttribute("nonce")) {
    element.setAttribute("nonce", "");
  }
  return element;
}
var PageSnapshot = /*#__PURE__*/function (_Snapshot2) {
  function PageSnapshot(documentElement, body, headSnapshot) {
    var _this22;
    _classCallCheck(this, PageSnapshot);
    _this22 = _callSuper(this, PageSnapshot, [body]);
    _this22.documentElement = documentElement;
    _this22.headSnapshot = headSnapshot;
    return _this22;
  }
  _inherits(PageSnapshot, _Snapshot2);
  return _createClass(PageSnapshot, [{
    key: "clone",
    value: function clone() {
      var clonedElement = this.element.cloneNode(true);
      var selectElements = this.element.querySelectorAll("select");
      var clonedSelectElements = clonedElement.querySelectorAll("select");
      var _iterator16 = _createForOfIteratorHelper(selectElements.entries()),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _ref12 = _step16.value;
          var _ref13 = _slicedToArray(_ref12, 2);
          var index = _ref13[0];
          var source = _ref13[1];
          {
            var _clone = clonedSelectElements[index];
            var _iterator18 = _createForOfIteratorHelper(_clone.selectedOptions),
              _step18;
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var option = _step18.value;
                option.selected = false;
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
            var _iterator19 = _createForOfIteratorHelper(source.selectedOptions),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _option = _step19.value;
                _clone.options[_option.index].selected = true;
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
      var _iterator17 = _createForOfIteratorHelper(clonedElement.querySelectorAll('input[type="password"]')),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var clonedPasswordInput = _step17.value;
          clonedPasswordInput.value = "";
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      return new PageSnapshot(this.documentElement, clonedElement, this.headSnapshot);
    }
  }, {
    key: "lang",
    get: function get() {
      return this.documentElement.getAttribute("lang");
    }
  }, {
    key: "headElement",
    get: function get() {
      return this.headSnapshot.element;
    }
  }, {
    key: "rootLocation",
    get: function get() {
      var _this$getSetting;
      var root = (_this$getSetting = this.getSetting("root")) !== null && _this$getSetting !== void 0 ? _this$getSetting : "/";
      return expandURL(root);
    }
  }, {
    key: "cacheControlValue",
    get: function get() {
      return this.getSetting("cache-control");
    }
  }, {
    key: "isPreviewable",
    get: function get() {
      return this.cacheControlValue != "no-preview";
    }
  }, {
    key: "isCacheable",
    get: function get() {
      return this.cacheControlValue != "no-cache";
    }
  }, {
    key: "isVisitable",
    get: function get() {
      return this.getSetting("visit-control") != "reload";
    }
  }, {
    key: "prefersViewTransitions",
    get: function get() {
      return this.headSnapshot.getMetaValue("view-transition") === "same-origin";
    }
  }, {
    key: "shouldMorphPage",
    get: function get() {
      return this.getSetting("refresh-method") === "morph";
    }
  }, {
    key: "shouldPreserveScrollPosition",
    get: function get() {
      return this.getSetting("refresh-scroll") === "preserve";
    }

    // Private
  }, {
    key: "getSetting",
    value: function getSetting(name) {
      return this.headSnapshot.getMetaValue("turbo-".concat(name));
    }
  }], [{
    key: "fromHTMLString",
    value: function fromHTMLString() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return this.fromDocument(parseHTMLDocument(html));
    }
  }, {
    key: "fromElement",
    value: function fromElement(element) {
      return this.fromDocument(element.ownerDocument);
    }
  }, {
    key: "fromDocument",
    value: function fromDocument(_ref14) {
      var documentElement = _ref14.documentElement,
        body = _ref14.body,
        head = _ref14.head;
      return new this(documentElement, body, new HeadSnapshot(head));
    }
  }]);
}(Snapshot);
var _viewTransitionStarted = /*#__PURE__*/_classPrivateFieldLooseKey("viewTransitionStarted");
var _lastOperation = /*#__PURE__*/_classPrivateFieldLooseKey("lastOperation");
var ViewTransitioner = /*#__PURE__*/function () {
  function ViewTransitioner() {
    _classCallCheck(this, ViewTransitioner);
    Object.defineProperty(this, _viewTransitionStarted, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _lastOperation, {
      writable: true,
      value: Promise.resolve()
    });
  }
  return _createClass(ViewTransitioner, [{
    key: "renderChange",
    value: function renderChange(useViewTransition, render) {
      if (useViewTransition && this.viewTransitionsAvailable && !_classPrivateFieldLooseBase(this, _viewTransitionStarted)[_viewTransitionStarted]) {
        _classPrivateFieldLooseBase(this, _viewTransitionStarted)[_viewTransitionStarted] = true;
        _classPrivateFieldLooseBase(this, _lastOperation)[_lastOperation] = _classPrivateFieldLooseBase(this, _lastOperation)[_lastOperation].then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return document.startViewTransition(render).finished;
              case 2:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        })));
      } else {
        _classPrivateFieldLooseBase(this, _lastOperation)[_lastOperation] = _classPrivateFieldLooseBase(this, _lastOperation)[_lastOperation].then(render);
      }
      return _classPrivateFieldLooseBase(this, _lastOperation)[_lastOperation];
    }
  }, {
    key: "viewTransitionsAvailable",
    get: function get() {
      return document.startViewTransition;
    }
  }]);
}();
var defaultOptions = {
  action: "advance",
  historyChanged: false,
  visitCachedSnapshot: function visitCachedSnapshot() {},
  willRender: true,
  updateHistory: true,
  shouldCacheSnapshot: true,
  acceptsStreamResponse: false
};
var TimingMetric = {
  visitStart: "visitStart",
  requestStart: "requestStart",
  requestEnd: "requestEnd",
  visitEnd: "visitEnd"
};
var VisitState = {
  initialized: "initialized",
  started: "started",
  canceled: "canceled",
  failed: "failed",
  completed: "completed"
};
var SystemStatusCode = {
  networkFailure: 0,
  timeoutFailure: -1,
  contentTypeMismatch: -2
};
var Direction = {
  advance: "forward",
  restore: "back",
  replace: "none"
};
var Visit = /*#__PURE__*/function () {
  function Visit(delegate, location, restorationIdentifier) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _classCallCheck(this, Visit);
    this.identifier = uuid();
    // Required by turbo-ios
    this.timingMetrics = {};
    this.followedRedirect = false;
    this.historyChanged = false;
    this.scrolled = false;
    this.shouldCacheSnapshot = true;
    this.acceptsStreamResponse = false;
    this.snapshotCached = false;
    this.state = VisitState.initialized;
    this.viewTransitioner = new ViewTransitioner();
    this.delegate = delegate;
    this.location = location;
    this.restorationIdentifier = restorationIdentifier || uuid();
    var _defaultOptions$optio = _objectSpread(_objectSpread({}, defaultOptions), options),
      action = _defaultOptions$optio.action,
      historyChanged = _defaultOptions$optio.historyChanged,
      referrer = _defaultOptions$optio.referrer,
      snapshot = _defaultOptions$optio.snapshot,
      snapshotHTML = _defaultOptions$optio.snapshotHTML,
      response = _defaultOptions$optio.response,
      visitCachedSnapshot = _defaultOptions$optio.visitCachedSnapshot,
      willRender = _defaultOptions$optio.willRender,
      updateHistory = _defaultOptions$optio.updateHistory,
      shouldCacheSnapshot = _defaultOptions$optio.shouldCacheSnapshot,
      acceptsStreamResponse = _defaultOptions$optio.acceptsStreamResponse,
      direction = _defaultOptions$optio.direction;
    this.action = action;
    this.historyChanged = historyChanged;
    this.referrer = referrer;
    this.snapshot = snapshot;
    this.snapshotHTML = snapshotHTML;
    this.response = response;
    this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
    this.isPageRefresh = this.view.isPageRefresh(this);
    this.visitCachedSnapshot = visitCachedSnapshot;
    this.willRender = willRender;
    this.updateHistory = updateHistory;
    this.scrolled = !willRender;
    this.shouldCacheSnapshot = shouldCacheSnapshot;
    this.acceptsStreamResponse = acceptsStreamResponse;
    this.direction = direction || Direction[action];
  }
  return _createClass(Visit, [{
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }
  }, {
    key: "restorationData",
    get: function get() {
      return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
  }, {
    key: "silent",
    get: function get() {
      return this.isSamePage;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state == VisitState.initialized) {
        this.recordTimingMetric(TimingMetric.visitStart);
        this.state = VisitState.started;
        this.adapter.visitStarted(this);
        this.delegate.visitStarted(this);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.state == VisitState.started) {
        if (this.request) {
          this.request.cancel();
        }
        this.cancelRender();
        this.state = VisitState.canceled;
      }
    }
  }, {
    key: "complete",
    value: function complete() {
      if (this.state == VisitState.started) {
        this.recordTimingMetric(TimingMetric.visitEnd);
        this.adapter.visitCompleted(this);
        this.state = VisitState.completed;
        this.followRedirect();
        if (!this.followedRedirect) {
          this.delegate.visitCompleted(this);
        }
      }
    }
  }, {
    key: "fail",
    value: function fail() {
      if (this.state == VisitState.started) {
        this.state = VisitState.failed;
        this.adapter.visitFailed(this);
        this.delegate.visitCompleted(this);
      }
    }
  }, {
    key: "changeHistory",
    value: function changeHistory() {
      if (!this.historyChanged && this.updateHistory) {
        var _this$referrer;
        var actionForHistory = this.location.href === ((_this$referrer = this.referrer) === null || _this$referrer === void 0 ? void 0 : _this$referrer.href) ? "replace" : this.action;
        var method = getHistoryMethodForAction(actionForHistory);
        this.history.update(method, this.location, this.restorationIdentifier);
        this.historyChanged = true;
      }
    }
  }, {
    key: "issueRequest",
    value: function issueRequest() {
      if (this.hasPreloadedResponse()) {
        this.simulateRequest();
      } else if (this.shouldIssueRequest() && !this.request) {
        this.request = new FetchRequest(this, FetchMethod.get, this.location);
        this.request.perform();
      }
    }
  }, {
    key: "simulateRequest",
    value: function simulateRequest() {
      if (this.response) {
        this.startRequest();
        this.recordResponse();
        this.finishRequest();
      }
    }
  }, {
    key: "startRequest",
    value: function startRequest() {
      this.recordTimingMetric(TimingMetric.requestStart);
      this.adapter.visitRequestStarted(this);
    }
  }, {
    key: "recordResponse",
    value: function recordResponse() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.response;
      this.response = response;
      if (response) {
        var statusCode = response.statusCode;
        if (isSuccessful(statusCode)) {
          this.adapter.visitRequestCompleted(this);
        } else {
          this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
      }
    }
  }, {
    key: "finishRequest",
    value: function finishRequest() {
      this.recordTimingMetric(TimingMetric.requestEnd);
      this.adapter.visitRequestFinished(this);
    }
  }, {
    key: "loadResponse",
    value: function loadResponse() {
      var _this23 = this;
      if (this.response) {
        var _this$response = this.response,
          statusCode = _this$response.statusCode,
          responseHTML = _this$response.responseHTML;
        this.render(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
          var snapshot;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                if (_this23.shouldCacheSnapshot) _this23.cacheSnapshot();
                if (!_this23.view.renderPromise) {
                  _context12.next = 4;
                  break;
                }
                _context12.next = 4;
                return _this23.view.renderPromise;
              case 4:
                if (!(isSuccessful(statusCode) && responseHTML != null)) {
                  _context12.next = 12;
                  break;
                }
                snapshot = PageSnapshot.fromHTMLString(responseHTML);
                _context12.next = 8;
                return _this23.renderPageSnapshot(snapshot, false);
              case 8:
                _this23.adapter.visitRendered(_this23);
                _this23.complete();
                _context12.next = 16;
                break;
              case 12:
                _context12.next = 14;
                return _this23.view.renderError(PageSnapshot.fromHTMLString(responseHTML), _this23);
              case 14:
                _this23.adapter.visitRendered(_this23);
                _this23.fail();
              case 16:
              case "end":
                return _context12.stop();
            }
          }, _callee12);
        })));
      }
    }
  }, {
    key: "getCachedSnapshot",
    value: function getCachedSnapshot() {
      var snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
      if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
        if (this.action == "restore" || snapshot.isPreviewable) {
          return snapshot;
        }
      }
    }
  }, {
    key: "getPreloadedSnapshot",
    value: function getPreloadedSnapshot() {
      if (this.snapshotHTML) {
        return PageSnapshot.fromHTMLString(this.snapshotHTML);
      }
    }
  }, {
    key: "hasCachedSnapshot",
    value: function hasCachedSnapshot() {
      return this.getCachedSnapshot() != null;
    }
  }, {
    key: "loadCachedSnapshot",
    value: function loadCachedSnapshot() {
      var _this24 = this;
      var snapshot = this.getCachedSnapshot();
      if (snapshot) {
        var isPreview = this.shouldIssueRequest();
        this.render(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
              case 0:
                _this24.cacheSnapshot();
                if (!(_this24.isSamePage || _this24.isPageRefresh)) {
                  _context13.next = 5;
                  break;
                }
                _this24.adapter.visitRendered(_this24);
                _context13.next = 12;
                break;
              case 5:
                if (!_this24.view.renderPromise) {
                  _context13.next = 8;
                  break;
                }
                _context13.next = 8;
                return _this24.view.renderPromise;
              case 8:
                _context13.next = 10;
                return _this24.renderPageSnapshot(snapshot, isPreview);
              case 10:
                _this24.adapter.visitRendered(_this24);
                if (!isPreview) {
                  _this24.complete();
                }
              case 12:
              case "end":
                return _context13.stop();
            }
          }, _callee13);
        })));
      }
    }
  }, {
    key: "followRedirect",
    value: function followRedirect() {
      var _this$response2;
      if (this.redirectedToLocation && !this.followedRedirect && (_this$response2 = this.response) !== null && _this$response2 !== void 0 && _this$response2.redirected) {
        this.adapter.visitProposedToLocation(this.redirectedToLocation, {
          action: "replace",
          response: this.response,
          shouldCacheSnapshot: false,
          willRender: false
        });
        this.followedRedirect = true;
      }
    }
  }, {
    key: "goToSamePageAnchor",
    value: function goToSamePageAnchor() {
      var _this25 = this;
      if (this.isSamePage) {
        this.render(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
              case 0:
                _this25.cacheSnapshot();
                _this25.performScroll();
                _this25.changeHistory();
                _this25.adapter.visitRendered(_this25);
              case 4:
              case "end":
                return _context14.stop();
            }
          }, _callee14);
        })));
      }
    }

    // Fetch request delegate
  }, {
    key: "prepareRequest",
    value: function prepareRequest(request) {
      if (this.acceptsStreamResponse) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted() {
      this.startRequest();
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(_request, _response) {}
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(request, response) {
        var responseHTML, redirected, statusCode;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return response.responseHTML;
            case 2:
              responseHTML = _context15.sent;
              redirected = response.redirected, statusCode = response.statusCode;
              if (responseHTML == undefined) {
                this.recordResponse({
                  statusCode: SystemStatusCode.contentTypeMismatch,
                  redirected: redirected
                });
              } else {
                this.redirectedToLocation = response.redirected ? response.location : undefined;
                this.recordResponse({
                  statusCode: statusCode,
                  responseHTML: responseHTML,
                  redirected: redirected
                });
              }
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function requestSucceededWithResponse(_x12, _x13) {
        return _requestSucceededWithResponse.apply(this, arguments);
      }
      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function () {
      var _requestFailedWithResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(request, response) {
        var responseHTML, redirected, statusCode;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return response.responseHTML;
            case 2:
              responseHTML = _context16.sent;
              redirected = response.redirected, statusCode = response.statusCode;
              if (responseHTML == undefined) {
                this.recordResponse({
                  statusCode: SystemStatusCode.contentTypeMismatch,
                  redirected: redirected
                });
              } else {
                this.recordResponse({
                  statusCode: statusCode,
                  responseHTML: responseHTML,
                  redirected: redirected
                });
              }
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function requestFailedWithResponse(_x14, _x15) {
        return _requestFailedWithResponse.apply(this, arguments);
      }
      return requestFailedWithResponse;
    }()
  }, {
    key: "requestErrored",
    value: function requestErrored(_request, _error) {
      this.recordResponse({
        statusCode: SystemStatusCode.networkFailure,
        redirected: false
      });
    }
  }, {
    key: "requestFinished",
    value: function requestFinished() {
      this.finishRequest();
    }

    // Scrolling
  }, {
    key: "performScroll",
    value: function performScroll() {
      if (!this.scrolled && !this.view.forceReloaded && !this.view.shouldPreserveScrollPosition(this)) {
        if (this.action == "restore") {
          this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
        } else {
          this.scrollToAnchor() || this.view.scrollToTop();
        }
        if (this.isSamePage) {
          this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
        }
        this.scrolled = true;
      }
    }
  }, {
    key: "scrollToRestoredPosition",
    value: function scrollToRestoredPosition() {
      var scrollPosition = this.restorationData.scrollPosition;
      if (scrollPosition) {
        this.view.scrollToPosition(scrollPosition);
        return true;
      }
    }
  }, {
    key: "scrollToAnchor",
    value: function scrollToAnchor() {
      var anchor = getAnchor(this.location);
      if (anchor != null) {
        this.view.scrollToAnchor(anchor);
        return true;
      }
    }

    // Instrumentation
  }, {
    key: "recordTimingMetric",
    value: function recordTimingMetric(metric) {
      this.timingMetrics[metric] = new Date().getTime();
    }
  }, {
    key: "getTimingMetrics",
    value: function getTimingMetrics() {
      return _objectSpread({}, this.timingMetrics);
    }

    // Private
  }, {
    key: "getHistoryMethodForAction",
    value: function getHistoryMethodForAction(action) {
      switch (action) {
        case "replace":
          return history.replaceState;
        case "advance":
        case "restore":
          return history.pushState;
      }
    }
  }, {
    key: "hasPreloadedResponse",
    value: function hasPreloadedResponse() {
      return _typeof(this.response) == "object";
    }
  }, {
    key: "shouldIssueRequest",
    value: function shouldIssueRequest() {
      if (this.isSamePage) {
        return false;
      } else if (this.action == "restore") {
        return !this.hasCachedSnapshot();
      } else {
        return this.willRender;
      }
    }
  }, {
    key: "cacheSnapshot",
    value: function cacheSnapshot() {
      var _this26 = this;
      if (!this.snapshotCached) {
        this.view.cacheSnapshot(this.snapshot).then(function (snapshot) {
          return snapshot && _this26.visitCachedSnapshot(snapshot);
        });
        this.snapshotCached = true;
      }
    }
  }, {
    key: "render",
    value: function () {
      var _render3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(callback) {
        var _this27 = this;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              this.cancelRender();
              _context17.next = 3;
              return new Promise(function (resolve) {
                _this27.frame = document.visibilityState === "hidden" ? setTimeout(function () {
                  return resolve();
                }, 0) : requestAnimationFrame(function () {
                  return resolve();
                });
              });
            case 3:
              _context17.next = 5;
              return callback();
            case 5:
              delete this.frame;
            case 6:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function render(_x16) {
        return _render3.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "renderPageSnapshot",
    value: function () {
      var _renderPageSnapshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(snapshot, isPreview) {
        var _this28 = this;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return this.viewTransitioner.renderChange(this.view.shouldTransitionTo(snapshot), /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return _this28.view.renderPage(snapshot, isPreview, _this28.willRender, _this28);
                    case 2:
                      _this28.performScroll();
                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18);
              })));
            case 2:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function renderPageSnapshot(_x17, _x18) {
        return _renderPageSnapshot.apply(this, arguments);
      }
      return renderPageSnapshot;
    }()
  }, {
    key: "cancelRender",
    value: function cancelRender() {
      if (this.frame) {
        cancelAnimationFrame(this.frame);
        delete this.frame;
      }
    }
  }]);
}();
function isSuccessful(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}
var BrowserAdapter = /*#__PURE__*/function () {
  function BrowserAdapter(session) {
    var _this29 = this;
    _classCallCheck(this, BrowserAdapter);
    this.progressBar = new ProgressBar();
    this.showProgressBar = function () {
      _this29.progressBar.show();
    };
    this.session = session;
  }
  return _createClass(BrowserAdapter, [{
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      if (locationIsVisitable(location, this.navigator.rootLocation)) {
        this.navigator.startVisit(location, (options === null || options === void 0 ? void 0 : options.restorationIdentifier) || uuid(), options);
      } else {
        window.location.href = location.toString();
      }
    }
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      this.location = visit.location;
      visit.loadCachedSnapshot();
      visit.issueRequest();
      visit.goToSamePageAnchor();
    }
  }, {
    key: "visitRequestStarted",
    value: function visitRequestStarted(visit) {
      this.progressBar.setValue(0);
      if (visit.hasCachedSnapshot() || visit.action != "restore") {
        this.showVisitProgressBarAfterDelay();
      } else {
        this.showProgressBar();
      }
    }
  }, {
    key: "visitRequestCompleted",
    value: function visitRequestCompleted(visit) {
      visit.loadResponse();
    }
  }, {
    key: "visitRequestFailedWithStatusCode",
    value: function visitRequestFailedWithStatusCode(visit, statusCode) {
      switch (statusCode) {
        case SystemStatusCode.networkFailure:
        case SystemStatusCode.timeoutFailure:
        case SystemStatusCode.contentTypeMismatch:
          return this.reload({
            reason: "request_failed",
            context: {
              statusCode: statusCode
            }
          });
        default:
          return visit.loadResponse();
      }
    }
  }, {
    key: "visitRequestFinished",
    value: function visitRequestFinished(_visit) {}
  }, {
    key: "visitCompleted",
    value: function visitCompleted(_visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
  }, {
    key: "pageInvalidated",
    value: function pageInvalidated(reason) {
      this.reload(reason);
    }
  }, {
    key: "visitFailed",
    value: function visitFailed(_visit) {
      this.progressBar.setValue(1);
      this.hideVisitProgressBar();
    }
  }, {
    key: "visitRendered",
    value: function visitRendered(_visit) {}

    // Form Submission Delegate
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(_formSubmission) {
      this.progressBar.setValue(0);
      this.showFormProgressBarAfterDelay();
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(_formSubmission) {
      this.progressBar.setValue(1);
      this.hideFormProgressBar();
    }

    // Private
  }, {
    key: "showVisitProgressBarAfterDelay",
    value: function showVisitProgressBarAfterDelay() {
      this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
  }, {
    key: "hideVisitProgressBar",
    value: function hideVisitProgressBar() {
      this.progressBar.hide();
      if (this.visitProgressBarTimeout != null) {
        window.clearTimeout(this.visitProgressBarTimeout);
        delete this.visitProgressBarTimeout;
      }
    }
  }, {
    key: "showFormProgressBarAfterDelay",
    value: function showFormProgressBarAfterDelay() {
      if (this.formProgressBarTimeout == null) {
        this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
      }
    }
  }, {
    key: "hideFormProgressBar",
    value: function hideFormProgressBar() {
      this.progressBar.hide();
      if (this.formProgressBarTimeout != null) {
        window.clearTimeout(this.formProgressBarTimeout);
        delete this.formProgressBarTimeout;
      }
    }
  }, {
    key: "reload",
    value: function reload(reason) {
      var _this$location;
      dispatch("turbo:reload", {
        detail: reason
      });
      window.location.href = ((_this$location = this.location) === null || _this$location === void 0 ? void 0 : _this$location.toString()) || window.location.href;
    }
  }, {
    key: "navigator",
    get: function get() {
      return this.session.navigator;
    }
  }]);
}();
var CacheObserver = /*#__PURE__*/function () {
  function CacheObserver() {
    var _this30 = this;
    _classCallCheck(this, CacheObserver);
    this.selector = "[data-turbo-temporary]";
    this.deprecatedSelector = "[data-turbo-cache=false]";
    this.started = false;
    this.removeTemporaryElements = function (_event) {
      var _iterator20 = _createForOfIteratorHelper(_this30.temporaryElements),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var element = _step20.value;
          element.remove();
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    };
  }
  return _createClass(CacheObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        addEventListener("turbo:before-cache", this.removeTemporaryElements, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        removeEventListener("turbo:before-cache", this.removeTemporaryElements, false);
      }
    }
  }, {
    key: "temporaryElements",
    get: function get() {
      return [].concat(_toConsumableArray(document.querySelectorAll(this.selector)), _toConsumableArray(this.temporaryElementsWithDeprecation));
    }
  }, {
    key: "temporaryElementsWithDeprecation",
    get: function get() {
      var elements = document.querySelectorAll(this.deprecatedSelector);
      if (elements.length) {
        console.warn("The ".concat(this.deprecatedSelector, " selector is deprecated and will be removed in a future version. Use ").concat(this.selector, " instead."));
      }
      return _toConsumableArray(elements);
    }
  }]);
}();
var _shouldSubmit = /*#__PURE__*/_classPrivateFieldLooseKey("shouldSubmit");
var _shouldRedirect = /*#__PURE__*/_classPrivateFieldLooseKey("shouldRedirect");
var _findFrameElement = /*#__PURE__*/_classPrivateFieldLooseKey("findFrameElement");
var FrameRedirector = /*#__PURE__*/function () {
  function FrameRedirector(session, _element) {
    _classCallCheck(this, FrameRedirector);
    Object.defineProperty(this, _findFrameElement, {
      value: _findFrameElement2
    });
    Object.defineProperty(this, _shouldRedirect, {
      value: _shouldRedirect2
    });
    Object.defineProperty(this, _shouldSubmit, {
      value: _shouldSubmit2
    });
    this.session = session;
    this.element = _element;
    this.linkInterceptor = new LinkInterceptor(this, _element);
    this.formSubmitObserver = new FormSubmitObserver(this, _element);
  }
  return _createClass(FrameRedirector, [{
    key: "start",
    value: function start() {
      this.linkInterceptor.start();
      this.formSubmitObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.linkInterceptor.stop();
      this.formSubmitObserver.stop();
    }

    // Link interceptor delegate
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, _location, _event) {
      return _classPrivateFieldLooseBase(this, _shouldRedirect)[_shouldRedirect](element);
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, url, event) {
      var frame = _classPrivateFieldLooseBase(this, _findFrameElement)[_findFrameElement](element);
      if (frame) {
        frame.delegate.linkClickIntercepted(element, url, event);
      }
    }

    // Form submit observer delegate
  }, {
    key: "willSubmitForm",
    value: function willSubmitForm(element, submitter) {
      return element.closest("turbo-frame") == null && _classPrivateFieldLooseBase(this, _shouldSubmit)[_shouldSubmit](element, submitter) && _classPrivateFieldLooseBase(this, _shouldRedirect)[_shouldRedirect](element, submitter);
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(element, submitter) {
      var frame = _classPrivateFieldLooseBase(this, _findFrameElement)[_findFrameElement](element, submitter);
      if (frame) {
        frame.delegate.formSubmitted(element, submitter);
      }
    }
  }]);
}();
function _shouldSubmit2(form, submitter) {
  var _meta$content2;
  var action = getAction$1(form, submitter);
  var meta = this.element.ownerDocument.querySelector("meta[name=\"turbo-root\"]");
  var rootLocation = expandURL((_meta$content2 = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _meta$content2 !== void 0 ? _meta$content2 : "/");
  return _classPrivateFieldLooseBase(this, _shouldRedirect)[_shouldRedirect](form, submitter) && locationIsVisitable(action, rootLocation);
}
function _shouldRedirect2(element, submitter) {
  var isNavigatable = element instanceof HTMLFormElement ? this.session.submissionIsNavigatable(element, submitter) : this.session.elementIsNavigatable(element);
  if (isNavigatable) {
    var frame = _classPrivateFieldLooseBase(this, _findFrameElement)[_findFrameElement](element, submitter);
    return frame ? frame != element.closest("turbo-frame") : false;
  } else {
    return false;
  }
}
function _findFrameElement2(element, submitter) {
  var id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");
  if (id && id != "_top") {
    var frame = this.element.querySelector("#".concat(id, ":not([disabled])"));
    if (frame instanceof FrameElement) {
      return frame;
    }
  }
}
var History = /*#__PURE__*/function () {
  function History(delegate) {
    var _this31 = this;
    _classCallCheck(this, History);
    this.location = void 0;
    this.restorationIdentifier = uuid();
    this.restorationData = {};
    this.started = false;
    this.pageLoaded = false;
    this.currentIndex = 0;
    // Event handlers
    this.onPopState = function (event) {
      if (_this31.shouldHandlePopState()) {
        var _ref20 = event.state || {},
          turbo = _ref20.turbo;
        if (turbo) {
          _this31.location = new URL(window.location.href);
          var restorationIdentifier = turbo.restorationIdentifier,
            restorationIndex = turbo.restorationIndex;
          _this31.restorationIdentifier = restorationIdentifier;
          var direction = restorationIndex > _this31.currentIndex ? "forward" : "back";
          _this31.delegate.historyPoppedToLocationWithRestorationIdentifierAndDirection(_this31.location, restorationIdentifier, direction);
          _this31.currentIndex = restorationIndex;
        }
      }
    };
    this.onPageLoad = /*#__PURE__*/function () {
      var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(_event) {
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return nextMicrotask();
            case 2:
              _this31.pageLoaded = true;
            case 3:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
      return function (_x19) {
        return _ref21.apply(this, arguments);
      };
    }();
    this.delegate = delegate;
  }
  return _createClass(History, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        var _history$state, _history$state$turbo;
        addEventListener("popstate", this.onPopState, false);
        addEventListener("load", this.onPageLoad, false);
        this.currentIndex = ((_history$state = history.state) === null || _history$state === void 0 ? void 0 : (_history$state$turbo = _history$state.turbo) === null || _history$state$turbo === void 0 ? void 0 : _history$state$turbo.restorationIndex) || 0;
        this.started = true;
        this.replace(new URL(window.location.href));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("popstate", this.onPopState, false);
        removeEventListener("load", this.onPageLoad, false);
        this.started = false;
      }
    }
  }, {
    key: "push",
    value: function push(location, restorationIdentifier) {
      this.update(history.pushState, location, restorationIdentifier);
    }
  }, {
    key: "replace",
    value: function replace(location, restorationIdentifier) {
      this.update(history.replaceState, location, restorationIdentifier);
    }
  }, {
    key: "update",
    value: function update(method, location) {
      var restorationIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uuid();
      if (method === history.pushState) ++this.currentIndex;
      var state = {
        turbo: {
          restorationIdentifier: restorationIdentifier,
          restorationIndex: this.currentIndex
        }
      };
      method.call(history, state, "", location.href);
      this.location = location;
      this.restorationIdentifier = restorationIdentifier;
    }

    // Restoration data
  }, {
    key: "getRestorationDataForIdentifier",
    value: function getRestorationDataForIdentifier(restorationIdentifier) {
      return this.restorationData[restorationIdentifier] || {};
    }
  }, {
    key: "updateRestorationData",
    value: function updateRestorationData(additionalData) {
      var restorationIdentifier = this.restorationIdentifier;
      var restorationData = this.restorationData[restorationIdentifier];
      this.restorationData[restorationIdentifier] = _objectSpread(_objectSpread({}, restorationData), additionalData);
    }

    // Scroll restoration
  }, {
    key: "assumeControlOfScrollRestoration",
    value: function assumeControlOfScrollRestoration() {
      if (!this.previousScrollRestoration) {
        var _history$scrollRestor;
        this.previousScrollRestoration = (_history$scrollRestor = history.scrollRestoration) !== null && _history$scrollRestor !== void 0 ? _history$scrollRestor : "auto";
        history.scrollRestoration = "manual";
      }
    }
  }, {
    key: "relinquishControlOfScrollRestoration",
    value: function relinquishControlOfScrollRestoration() {
      if (this.previousScrollRestoration) {
        history.scrollRestoration = this.previousScrollRestoration;
        delete this.previousScrollRestoration;
      }
    }
  }, {
    key: "shouldHandlePopState",
    value:
    // Private

    function shouldHandlePopState() {
      // Safari dispatches a popstate event after window's load event, ignore it
      return this.pageIsLoaded();
    }
  }, {
    key: "pageIsLoaded",
    value: function pageIsLoaded() {
      return this.pageLoaded || document.readyState == "complete";
    }
  }]);
}();
var _prefetchedLink = /*#__PURE__*/_classPrivateFieldLooseKey("prefetchedLink");
var _enable = /*#__PURE__*/_classPrivateFieldLooseKey("enable");
var _tryToPrefetchRequest = /*#__PURE__*/_classPrivateFieldLooseKey("tryToPrefetchRequest");
var _cancelRequestIfObsolete = /*#__PURE__*/_classPrivateFieldLooseKey("cancelRequestIfObsolete");
var _cancelPrefetchRequest = /*#__PURE__*/_classPrivateFieldLooseKey("cancelPrefetchRequest");
var _tryToUsePrefetchedRequest = /*#__PURE__*/_classPrivateFieldLooseKey("tryToUsePrefetchedRequest");
var _cacheTtl = /*#__PURE__*/_classPrivateFieldLooseKey("cacheTtl");
var _isPrefetchable = /*#__PURE__*/_classPrivateFieldLooseKey("isPrefetchable");
var LinkPrefetchObserver = /*#__PURE__*/function () {
  function LinkPrefetchObserver(delegate, eventTarget) {
    var _this32 = this;
    _classCallCheck(this, LinkPrefetchObserver);
    Object.defineProperty(this, _isPrefetchable, {
      value: _isPrefetchable2
    });
    Object.defineProperty(this, _cacheTtl, {
      get: _get_cacheTtl,
      set: void 0
    });
    this.started = false;
    Object.defineProperty(this, _prefetchedLink, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _enable, {
      writable: true,
      value: function value() {
        _this32.eventTarget.addEventListener("mouseenter", _classPrivateFieldLooseBase(_this32, _tryToPrefetchRequest)[_tryToPrefetchRequest], {
          capture: true,
          passive: true
        });
        _this32.eventTarget.addEventListener("mouseleave", _classPrivateFieldLooseBase(_this32, _cancelRequestIfObsolete)[_cancelRequestIfObsolete], {
          capture: true,
          passive: true
        });
        _this32.eventTarget.addEventListener("turbo:before-fetch-request", _classPrivateFieldLooseBase(_this32, _tryToUsePrefetchedRequest)[_tryToUsePrefetchedRequest], true);
        _this32.started = true;
      }
    });
    Object.defineProperty(this, _tryToPrefetchRequest, {
      writable: true,
      value: function value(event) {
        if (getMetaContent("turbo-prefetch") === "false") return;
        var target = event.target;
        var isLink = target.matches && target.matches("a[href]:not([target^=_]):not([download])");
        if (isLink && _classPrivateFieldLooseBase(_this32, _isPrefetchable)[_isPrefetchable](target)) {
          var link = target;
          var _location3 = getLocationForLink(link);
          if (_this32.delegate.canPrefetchRequestToLocation(link, _location3)) {
            _classPrivateFieldLooseBase(_this32, _prefetchedLink)[_prefetchedLink] = link;
            var fetchRequest = new FetchRequest(_this32, FetchMethod.get, _location3, new URLSearchParams(), target);
            prefetchCache.setLater(_location3.toString(), fetchRequest, _classPrivateFieldLooseBase(_this32, _cacheTtl)[_cacheTtl]);
          }
        }
      }
    });
    Object.defineProperty(this, _cancelRequestIfObsolete, {
      writable: true,
      value: function value(event) {
        if (event.target === _classPrivateFieldLooseBase(_this32, _prefetchedLink)[_prefetchedLink]) _classPrivateFieldLooseBase(_this32, _cancelPrefetchRequest)[_cancelPrefetchRequest]();
      }
    });
    Object.defineProperty(this, _cancelPrefetchRequest, {
      writable: true,
      value: function value() {
        prefetchCache.clear();
        _classPrivateFieldLooseBase(_this32, _prefetchedLink)[_prefetchedLink] = null;
      }
    });
    Object.defineProperty(this, _tryToUsePrefetchedRequest, {
      writable: true,
      value: function value(event) {
        if (event.target.tagName !== "FORM" && event.detail.fetchOptions.method === "GET") {
          var cached = prefetchCache.get(event.detail.url.toString());
          if (cached) {
            // User clicked link, use cache response
            event.detail.fetchRequest = cached;
          }
          prefetchCache.clear();
        }
      }
    });
    this.delegate = delegate;
    this.eventTarget = eventTarget;
  }
  return _createClass(LinkPrefetchObserver, [{
    key: "start",
    value: function start() {
      if (this.started) return;
      if (this.eventTarget.readyState === "loading") {
        this.eventTarget.addEventListener("DOMContentLoaded", _classPrivateFieldLooseBase(this, _enable)[_enable], {
          once: true
        });
      } else {
        _classPrivateFieldLooseBase(this, _enable)[_enable]();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.started) return;
      this.eventTarget.removeEventListener("mouseenter", _classPrivateFieldLooseBase(this, _tryToPrefetchRequest)[_tryToPrefetchRequest], {
        capture: true,
        passive: true
      });
      this.eventTarget.removeEventListener("mouseleave", _classPrivateFieldLooseBase(this, _cancelRequestIfObsolete)[_cancelRequestIfObsolete], {
        capture: true,
        passive: true
      });
      this.eventTarget.removeEventListener("turbo:before-fetch-request", _classPrivateFieldLooseBase(this, _tryToUsePrefetchedRequest)[_tryToUsePrefetchedRequest], true);
      this.started = false;
    }
  }, {
    key: "prepareRequest",
    value: function prepareRequest(request) {
      var link = request.target;
      request.headers["X-Sec-Purpose"] = "prefetch";
      var turboFrame = link.closest("turbo-frame");
      var turboFrameTarget = link.getAttribute("data-turbo-frame") || (turboFrame === null || turboFrame === void 0 ? void 0 : turboFrame.getAttribute("target")) || (turboFrame === null || turboFrame === void 0 ? void 0 : turboFrame.id);
      if (turboFrameTarget && turboFrameTarget !== "_top") {
        request.headers["Turbo-Frame"] = turboFrameTarget;
      }
    }

    // Fetch request interface
  }, {
    key: "requestSucceededWithResponse",
    value: function requestSucceededWithResponse() {}
  }, {
    key: "requestStarted",
    value: function requestStarted(fetchRequest) {}
  }, {
    key: "requestErrored",
    value: function requestErrored(fetchRequest) {}
  }, {
    key: "requestFinished",
    value: function requestFinished(fetchRequest) {}
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(fetchRequest, fetchResponse) {}
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(fetchRequest, fetchResponse) {}
  }]);
}();
function _get_cacheTtl() {
  return Number(getMetaContent("turbo-prefetch-cache-time")) || cacheTtl;
}
function _isPrefetchable2(link) {
  var href = link.getAttribute("href");
  if (!href) return false;
  if (unfetchableLink(link)) return false;
  if (linkToTheSamePage(link)) return false;
  if (linkOptsOut(link)) return false;
  if (nonSafeLink(link)) return false;
  if (eventPrevented(link)) return false;
  return true;
}
var unfetchableLink = function unfetchableLink(link) {
  return link.origin !== document.location.origin || !["http:", "https:"].includes(link.protocol) || link.hasAttribute("target");
};
var linkToTheSamePage = function linkToTheSamePage(link) {
  return link.pathname + link.search === document.location.pathname + document.location.search || link.href.startsWith("#");
};
var linkOptsOut = function linkOptsOut(link) {
  if (link.getAttribute("data-turbo-prefetch") === "false") return true;
  if (link.getAttribute("data-turbo") === "false") return true;
  var turboPrefetchParent = findClosestRecursively(link, "[data-turbo-prefetch]");
  if (turboPrefetchParent && turboPrefetchParent.getAttribute("data-turbo-prefetch") === "false") return true;
  return false;
};
var nonSafeLink = function nonSafeLink(link) {
  var turboMethod = link.getAttribute("data-turbo-method");
  if (turboMethod && turboMethod.toLowerCase() !== "get") return true;
  if (isUJS(link)) return true;
  if (link.hasAttribute("data-turbo-confirm")) return true;
  if (link.hasAttribute("data-turbo-stream")) return true;
  return false;
};
var isUJS = function isUJS(link) {
  return link.hasAttribute("data-remote") || link.hasAttribute("data-behavior") || link.hasAttribute("data-confirm") || link.hasAttribute("data-method");
};
var eventPrevented = function eventPrevented(link) {
  var event = dispatch("turbo:before-prefetch", {
    target: link,
    cancelable: true
  });
  return event.defaultPrevented;
};
var _getActionForFormSubmission = /*#__PURE__*/_classPrivateFieldLooseKey("getActionForFormSubmission");
var _getDefaultAction = /*#__PURE__*/_classPrivateFieldLooseKey("getDefaultAction");
var Navigator = /*#__PURE__*/function () {
  function Navigator(delegate) {
    _classCallCheck(this, Navigator);
    Object.defineProperty(this, _getDefaultAction, {
      value: _getDefaultAction2
    });
    Object.defineProperty(this, _getActionForFormSubmission, {
      value: _getActionForFormSubmission2
    });
    this.delegate = delegate;
  }
  return _createClass(Navigator, [{
    key: "proposeVisit",
    value: function proposeVisit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
        this.delegate.visitProposedToLocation(location, options);
      }
    }
  }, {
    key: "startVisit",
    value: function startVisit(locatable, restorationIdentifier) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.stop();
      this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, _objectSpread({
        referrer: this.location
      }, options));
      this.currentVisit.start();
    }
  }, {
    key: "submitForm",
    value: function submitForm(form, submitter) {
      this.stop();
      this.formSubmission = new FormSubmission(this, form, submitter, true);
      this.formSubmission.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.formSubmission) {
        this.formSubmission.stop();
        delete this.formSubmission;
      }
      if (this.currentVisit) {
        this.currentVisit.cancel();
        delete this.currentVisit;
      }
    }
  }, {
    key: "adapter",
    get: function get() {
      return this.delegate.adapter;
    }
  }, {
    key: "view",
    get: function get() {
      return this.delegate.view;
    }
  }, {
    key: "rootLocation",
    get: function get() {
      return this.view.snapshot.rootLocation;
    }
  }, {
    key: "history",
    get: function get() {
      return this.delegate.history;
    }

    // Form submission delegate
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(formSubmission) {
      // Not all adapters implement formSubmissionStarted
      if (typeof this.adapter.formSubmissionStarted === "function") {
        this.adapter.formSubmissionStarted(formSubmission);
      }
    }
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function () {
      var _formSubmissionSucceededWithResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(formSubmission, fetchResponse) {
        var responseHTML, shouldCacheSnapshot, statusCode, redirected, action, visitOptions;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (!(formSubmission == this.formSubmission)) {
                _context21.next = 5;
                break;
              }
              _context21.next = 3;
              return fetchResponse.responseHTML;
            case 3:
              responseHTML = _context21.sent;
              if (responseHTML) {
                shouldCacheSnapshot = formSubmission.isSafe;
                if (!shouldCacheSnapshot) {
                  this.view.clearSnapshotCache();
                }
                statusCode = fetchResponse.statusCode, redirected = fetchResponse.redirected;
                action = _classPrivateFieldLooseBase(this, _getActionForFormSubmission)[_getActionForFormSubmission](formSubmission, fetchResponse);
                visitOptions = {
                  action: action,
                  shouldCacheSnapshot: shouldCacheSnapshot,
                  response: {
                    statusCode: statusCode,
                    responseHTML: responseHTML,
                    redirected: redirected
                  }
                };
                this.proposeVisit(fetchResponse.location, visitOptions);
              }
            case 5:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function formSubmissionSucceededWithResponse(_x20, _x21) {
        return _formSubmissionSucceededWithResponse.apply(this, arguments);
      }
      return formSubmissionSucceededWithResponse;
    }()
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function () {
      var _formSubmissionFailedWithResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(formSubmission, fetchResponse) {
        var responseHTML, snapshot;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return fetchResponse.responseHTML;
            case 2:
              responseHTML = _context22.sent;
              if (!responseHTML) {
                _context22.next = 14;
                break;
              }
              snapshot = PageSnapshot.fromHTMLString(responseHTML);
              if (!fetchResponse.serverError) {
                _context22.next = 10;
                break;
              }
              _context22.next = 8;
              return this.view.renderError(snapshot, this.currentVisit);
            case 8:
              _context22.next = 12;
              break;
            case 10:
              _context22.next = 12;
              return this.view.renderPage(snapshot, false, true, this.currentVisit);
            case 12:
              if (!snapshot.shouldPreserveScrollPosition) {
                this.view.scrollToTop();
              }
              this.view.clearSnapshotCache();
            case 14:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function formSubmissionFailedWithResponse(_x22, _x23) {
        return _formSubmissionFailedWithResponse.apply(this, arguments);
      }
      return formSubmissionFailedWithResponse;
    }()
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(formSubmission) {
      // Not all adapters implement formSubmissionFinished
      if (typeof this.adapter.formSubmissionFinished === "function") {
        this.adapter.formSubmissionFinished(formSubmission);
      }
    }

    // Visit delegate
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      this.delegate.visitStarted(visit);
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.delegate.visitCompleted(visit);
      delete this.currentVisit;
    }
  }, {
    key: "locationWithActionIsSamePage",
    value: function locationWithActionIsSamePage(location, action) {
      var anchor = getAnchor(location);
      var currentAnchor = getAnchor(this.view.lastRenderedLocation);
      var isRestorationToTop = action === "restore" && typeof anchor === "undefined";
      return action !== "replace" && getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
  }, {
    key: "visitScrolledToSamePageLocation",
    value: function visitScrolledToSamePageLocation(oldURL, newURL) {
      this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }

    // Visits
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }]);
}();
function _getActionForFormSubmission2(formSubmission, fetchResponse) {
  var submitter = formSubmission.submitter,
    formElement = formSubmission.formElement;
  return getVisitAction(submitter, formElement) || _classPrivateFieldLooseBase(this, _getDefaultAction)[_getDefaultAction](fetchResponse);
}
function _getDefaultAction2(fetchResponse) {
  var _this$location2;
  var sameLocationRedirect = fetchResponse.redirected && fetchResponse.location.href === ((_this$location2 = this.location) === null || _this$location2 === void 0 ? void 0 : _this$location2.href);
  return sameLocationRedirect ? "replace" : "advance";
}
var PageStage = {
  initial: 0,
  loading: 1,
  interactive: 2,
  complete: 3
};
var PageObserver = /*#__PURE__*/function () {
  function PageObserver(delegate) {
    var _this33 = this;
    _classCallCheck(this, PageObserver);
    this.stage = PageStage.initial;
    this.started = false;
    this.interpretReadyState = function () {
      var readyState = _this33.readyState;
      if (readyState == "interactive") {
        _this33.pageIsInteractive();
      } else if (readyState == "complete") {
        _this33.pageIsComplete();
      }
    };
    this.pageWillUnload = function () {
      _this33.delegate.pageWillUnload();
    };
    this.delegate = delegate;
  }
  return _createClass(PageObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        if (this.stage == PageStage.initial) {
          this.stage = PageStage.loading;
        }
        document.addEventListener("readystatechange", this.interpretReadyState, false);
        addEventListener("pagehide", this.pageWillUnload, false);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        document.removeEventListener("readystatechange", this.interpretReadyState, false);
        removeEventListener("pagehide", this.pageWillUnload, false);
        this.started = false;
      }
    }
  }, {
    key: "pageIsInteractive",
    value: function pageIsInteractive() {
      if (this.stage == PageStage.loading) {
        this.stage = PageStage.interactive;
        this.delegate.pageBecameInteractive();
      }
    }
  }, {
    key: "pageIsComplete",
    value: function pageIsComplete() {
      this.pageIsInteractive();
      if (this.stage == PageStage.interactive) {
        this.stage = PageStage.complete;
        this.delegate.pageLoaded();
      }
    }
  }, {
    key: "readyState",
    get: function get() {
      return document.readyState;
    }
  }]);
}();
var ScrollObserver = /*#__PURE__*/function () {
  function ScrollObserver(delegate) {
    var _this34 = this;
    _classCallCheck(this, ScrollObserver);
    this.started = false;
    this.onScroll = function () {
      _this34.updatePosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };
    this.delegate = delegate;
  }
  return _createClass(ScrollObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        addEventListener("scroll", this.onScroll, false);
        this.onScroll();
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        removeEventListener("scroll", this.onScroll, false);
        this.started = false;
      }
    }
  }, {
    key: "updatePosition",
    value:
    // Private

    function updatePosition(position) {
      this.delegate.scrollPositionChanged(position);
    }
  }]);
}();
var StreamMessageRenderer = /*#__PURE__*/function () {
  function StreamMessageRenderer() {
    _classCallCheck(this, StreamMessageRenderer);
  }
  return _createClass(StreamMessageRenderer, [{
    key: "render",
    value: function render(_ref22) {
      var fragment = _ref22.fragment;
      Bardo.preservingPermanentElements(this, getPermanentElementMapForFragment(fragment), function () {
        withAutofocusFromFragment(fragment, function () {
          withPreservedFocus(function () {
            document.documentElement.appendChild(fragment);
          });
        });
      });
    }

    // Bardo delegate
  }, {
    key: "enteringBardo",
    value: function enteringBardo(currentPermanentElement, newPermanentElement) {
      newPermanentElement.replaceWith(currentPermanentElement.cloneNode(true));
    }
  }, {
    key: "leavingBardo",
    value: function leavingBardo() {}
  }]);
}();
function getPermanentElementMapForFragment(fragment) {
  var permanentElementsInDocument = queryPermanentElementsAll(document.documentElement);
  var permanentElementMap = {};
  var _iterator21 = _createForOfIteratorHelper(permanentElementsInDocument),
    _step21;
  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      var permanentElementInDocument = _step21.value;
      var _id6 = permanentElementInDocument.id;
      var _iterator22 = _createForOfIteratorHelper(fragment.querySelectorAll("turbo-stream")),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var streamElement = _step22.value;
          var elementInStream = _getPermanentElementById(streamElement.templateElement.content, _id6);
          if (elementInStream) {
            permanentElementMap[_id6] = [permanentElementInDocument, elementInStream];
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
  return permanentElementMap;
}
function withAutofocusFromFragment(_x24, _x25) {
  return _withAutofocusFromFragment.apply(this, arguments);
}
function _withAutofocusFromFragment() {
  _withAutofocusFromFragment = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47(fragment, callback) {
    var generatedID, turboStreams, elementWithAutofocus, willAutofocusId, hasNoActiveElement, elementToAutofocus;
    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
      while (1) switch (_context47.prev = _context47.next) {
        case 0:
          generatedID = "turbo-stream-autofocus-".concat(uuid());
          turboStreams = fragment.querySelectorAll("turbo-stream");
          elementWithAutofocus = firstAutofocusableElementInStreams(turboStreams);
          willAutofocusId = null;
          if (elementWithAutofocus) {
            if (elementWithAutofocus.id) {
              willAutofocusId = elementWithAutofocus.id;
            } else {
              willAutofocusId = generatedID;
            }
            elementWithAutofocus.id = willAutofocusId;
          }
          callback();
          _context47.next = 8;
          return nextRepaint();
        case 8:
          hasNoActiveElement = document.activeElement == null || document.activeElement == document.body;
          if (hasNoActiveElement && willAutofocusId) {
            elementToAutofocus = document.getElementById(willAutofocusId);
            if (elementIsFocusable(elementToAutofocus)) {
              elementToAutofocus.focus();
            }
            if (elementToAutofocus && elementToAutofocus.id == generatedID) {
              elementToAutofocus.removeAttribute("id");
            }
          }
        case 10:
        case "end":
          return _context47.stop();
      }
    }, _callee47);
  }));
  return _withAutofocusFromFragment.apply(this, arguments);
}
function withPreservedFocus(_x26) {
  return _withPreservedFocus.apply(this, arguments);
}
function _withPreservedFocus() {
  _withPreservedFocus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48(callback) {
    var _yield$around, _yield$around2, activeElementBeforeRender, activeElementAfterRender, restoreFocusTo, elementToFocus;
    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
      while (1) switch (_context48.prev = _context48.next) {
        case 0:
          _context48.next = 2;
          return around(callback, function () {
            return document.activeElement;
          });
        case 2:
          _yield$around = _context48.sent;
          _yield$around2 = _slicedToArray(_yield$around, 2);
          activeElementBeforeRender = _yield$around2[0];
          activeElementAfterRender = _yield$around2[1];
          restoreFocusTo = activeElementBeforeRender && activeElementBeforeRender.id;
          if (restoreFocusTo) {
            elementToFocus = document.getElementById(restoreFocusTo);
            if (elementIsFocusable(elementToFocus) && elementToFocus != activeElementAfterRender) {
              elementToFocus.focus();
            }
          }
        case 8:
        case "end":
          return _context48.stop();
      }
    }, _callee48);
  }));
  return _withPreservedFocus.apply(this, arguments);
}
function firstAutofocusableElementInStreams(nodeListOfStreamElements) {
  var _iterator23 = _createForOfIteratorHelper(nodeListOfStreamElements),
    _step23;
  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var streamElement = _step23.value;
      var elementWithAutofocus = queryAutofocusableElement(streamElement.templateElement.content);
      if (elementWithAutofocus) return elementWithAutofocus;
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }
  return null;
}
var _started = /*#__PURE__*/_classPrivateFieldLooseKey("started");
var StreamObserver = /*#__PURE__*/function () {
  function StreamObserver(delegate) {
    var _this35 = this;
    _classCallCheck(this, StreamObserver);
    this.sources = new Set();
    Object.defineProperty(this, _started, {
      writable: true,
      value: false
    });
    this.inspectFetchResponse = function (event) {
      var response = fetchResponseFromEvent(event);
      if (response && fetchResponseIsStream(response)) {
        event.preventDefault();
        _this35.receiveMessageResponse(response);
      }
    };
    this.receiveMessageEvent = function (event) {
      if (_classPrivateFieldLooseBase(_this35, _started)[_started] && typeof event.data == "string") {
        _this35.receiveMessageHTML(event.data);
      }
    };
    this.delegate = delegate;
  }
  return _createClass(StreamObserver, [{
    key: "start",
    value: function start() {
      if (!_classPrivateFieldLooseBase(this, _started)[_started]) {
        _classPrivateFieldLooseBase(this, _started)[_started] = true;
        addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (_classPrivateFieldLooseBase(this, _started)[_started]) {
        _classPrivateFieldLooseBase(this, _started)[_started] = false;
        removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
      }
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      if (!this.streamSourceIsConnected(source)) {
        this.sources.add(source);
        source.addEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      if (this.streamSourceIsConnected(source)) {
        this.sources["delete"](source);
        source.removeEventListener("message", this.receiveMessageEvent, false);
      }
    }
  }, {
    key: "streamSourceIsConnected",
    value: function streamSourceIsConnected(source) {
      return this.sources.has(source);
    }
  }, {
    key: "receiveMessageResponse",
    value: function () {
      var _receiveMessageResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(response) {
        var html;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return response.responseHTML;
            case 2:
              html = _context23.sent;
              if (html) {
                this.receiveMessageHTML(html);
              }
            case 4:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function receiveMessageResponse(_x27) {
        return _receiveMessageResponse.apply(this, arguments);
      }
      return receiveMessageResponse;
    }()
  }, {
    key: "receiveMessageHTML",
    value: function receiveMessageHTML(html) {
      this.delegate.receivedMessageFromStream(StreamMessage.wrap(html));
    }
  }]);
}();
function fetchResponseFromEvent(event) {
  var _event$detail;
  var fetchResponse = (_event$detail = event.detail) === null || _event$detail === void 0 ? void 0 : _event$detail.fetchResponse;
  if (fetchResponse instanceof FetchResponse) {
    return fetchResponse;
  }
}
function fetchResponseIsStream(response) {
  var _response$contentType;
  var contentType = (_response$contentType = response.contentType) !== null && _response$contentType !== void 0 ? _response$contentType : "";
  return contentType.startsWith(StreamMessage.contentType);
}
var ErrorRenderer = /*#__PURE__*/function (_Renderer3) {
  function ErrorRenderer() {
    _classCallCheck(this, ErrorRenderer);
    return _callSuper(this, ErrorRenderer, arguments);
  }
  _inherits(ErrorRenderer, _Renderer3);
  return _createClass(ErrorRenderer, [{
    key: "render",
    value: function () {
      var _render4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              this.replaceHeadAndBody();
              this.activateScriptElements();
            case 2:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function render() {
        return _render4.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "replaceHeadAndBody",
    value: function replaceHeadAndBody() {
      var _document = document,
        documentElement = _document.documentElement,
        head = _document.head;
      documentElement.replaceChild(this.newHead, head);
      this.renderElement(this.currentElement, this.newElement);
    }
  }, {
    key: "activateScriptElements",
    value: function activateScriptElements() {
      var _iterator24 = _createForOfIteratorHelper(this.scriptElements),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var replaceableElement = _step24.value;
          var parentNode = replaceableElement.parentNode;
          if (parentNode) {
            var element = activateScriptElement(replaceableElement);
            parentNode.replaceChild(element, replaceableElement);
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  }, {
    key: "newHead",
    get: function get() {
      return this.newSnapshot.headSnapshot.element;
    }
  }, {
    key: "scriptElements",
    get: function get() {
      return document.documentElement.querySelectorAll("script");
    }
  }], [{
    key: "renderElement",
    value: function renderElement(currentElement, newElement) {
      var _document2 = document,
        documentElement = _document2.documentElement,
        body = _document2.body;
      documentElement.replaceChild(newElement, body);
    }
  }]);
}(Renderer);
var _setLanguage = /*#__PURE__*/_classPrivateFieldLooseKey("setLanguage");
var PageRenderer = /*#__PURE__*/function (_Renderer4) {
  function PageRenderer() {
    var _this36;
    _classCallCheck(this, PageRenderer);
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    _this36 = _callSuper(this, PageRenderer, [].concat(args));
    Object.defineProperty(_this36, _setLanguage, {
      value: _setLanguage2
    });
    return _this36;
  }
  _inherits(PageRenderer, _Renderer4);
  return _createClass(PageRenderer, [{
    key: "shouldRender",
    get: function get() {
      return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
  }, {
    key: "reloadReason",
    get: function get() {
      if (!this.newSnapshot.isVisitable) {
        return {
          reason: "turbo_visit_control_is_reload"
        };
      }
      if (!this.trackedElementsAreIdentical) {
        return {
          reason: "tracked_element_mismatch"
        };
      }
    }
  }, {
    key: "prepareToRender",
    value: function () {
      var _prepareToRender = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              _classPrivateFieldLooseBase(this, _setLanguage)[_setLanguage]();
              _context25.next = 3;
              return this.mergeHead();
            case 3:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function prepareToRender() {
        return _prepareToRender.apply(this, arguments);
      }
      return prepareToRender;
    }()
  }, {
    key: "render",
    value: function () {
      var _render5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              if (!this.willRender) {
                _context26.next = 3;
                break;
              }
              _context26.next = 3;
              return this.replaceBody();
            case 3:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function render() {
        return _render5.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "finishRendering",
    value: function finishRendering() {
      _superPropGet(PageRenderer, "finishRendering", this, 3)([]);
      if (!this.isPreview) {
        this.focusFirstAutofocusableElement();
      }
    }
  }, {
    key: "currentHeadSnapshot",
    get: function get() {
      return this.currentSnapshot.headSnapshot;
    }
  }, {
    key: "newHeadSnapshot",
    get: function get() {
      return this.newSnapshot.headSnapshot;
    }
  }, {
    key: "newElement",
    get: function get() {
      return this.newSnapshot.element;
    }
  }, {
    key: "mergeHead",
    value: function () {
      var _mergeHead = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
        var mergedHeadElements, newStylesheetElements;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              mergedHeadElements = this.mergeProvisionalElements();
              newStylesheetElements = this.copyNewHeadStylesheetElements();
              this.copyNewHeadScriptElements();
              _context27.next = 5;
              return mergedHeadElements;
            case 5:
              _context27.next = 7;
              return newStylesheetElements;
            case 7:
              if (this.willRender) {
                this.removeUnusedDynamicStylesheetElements();
              }
            case 8:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function mergeHead() {
        return _mergeHead.apply(this, arguments);
      }
      return mergeHead;
    }()
  }, {
    key: "replaceBody",
    value: function () {
      var _replaceBody = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
        var _this37 = this;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return this.preservingPermanentElements(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
                return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                  while (1) switch (_context28.prev = _context28.next) {
                    case 0:
                      _this37.activateNewBody();
                      _context28.next = 3;
                      return _this37.assignNewBody();
                    case 3:
                    case "end":
                      return _context28.stop();
                  }
                }, _callee28);
              })));
            case 2:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function replaceBody() {
        return _replaceBody.apply(this, arguments);
      }
      return replaceBody;
    }()
  }, {
    key: "trackedElementsAreIdentical",
    get: function get() {
      return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
  }, {
    key: "copyNewHeadStylesheetElements",
    value: function () {
      var _copyNewHeadStylesheetElements = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
        var loadingElements, _iterator25, _step25, element;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              loadingElements = [];
              _iterator25 = _createForOfIteratorHelper(this.newHeadStylesheetElements);
              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  element = _step25.value;
                  loadingElements.push(waitForLoad(element));
                  document.head.appendChild(element);
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
              _context30.next = 5;
              return Promise.all(loadingElements);
            case 5:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function copyNewHeadStylesheetElements() {
        return _copyNewHeadStylesheetElements.apply(this, arguments);
      }
      return copyNewHeadStylesheetElements;
    }()
  }, {
    key: "copyNewHeadScriptElements",
    value: function copyNewHeadScriptElements() {
      var _iterator26 = _createForOfIteratorHelper(this.newHeadScriptElements),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var element = _step26.value;
          document.head.appendChild(activateScriptElement(element));
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "removeUnusedDynamicStylesheetElements",
    value: function removeUnusedDynamicStylesheetElements() {
      var _iterator27 = _createForOfIteratorHelper(this.unusedDynamicStylesheetElements),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var element = _step27.value;
          document.head.removeChild(element);
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }
  }, {
    key: "mergeProvisionalElements",
    value: function () {
      var _mergeProvisionalElements = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
        var newHeadElements, _iterator28, _step28, element, _iterator29, _step29, _element2;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              newHeadElements = _toConsumableArray(this.newHeadProvisionalElements);
              _iterator28 = _createForOfIteratorHelper(this.currentHeadProvisionalElements);
              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  element = _step28.value;
                  if (!this.isCurrentElementInElementList(element, newHeadElements)) {
                    document.head.removeChild(element);
                  }
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }
              _iterator29 = _createForOfIteratorHelper(newHeadElements);
              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  _element2 = _step29.value;
                  document.head.appendChild(_element2);
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }
            case 5:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this);
      }));
      function mergeProvisionalElements() {
        return _mergeProvisionalElements.apply(this, arguments);
      }
      return mergeProvisionalElements;
    }()
  }, {
    key: "isCurrentElementInElementList",
    value: function isCurrentElementInElementList(element, elementList) {
      var _iterator30 = _createForOfIteratorHelper(elementList.entries()),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _ref24 = _step30.value;
          var _ref25 = _slicedToArray(_ref24, 2);
          var index = _ref25[0];
          var newElement = _ref25[1];
          // if title element...
          if (element.tagName == "TITLE") {
            if (newElement.tagName != "TITLE") {
              continue;
            }
            if (element.innerHTML == newElement.innerHTML) {
              elementList.splice(index, 1);
              return true;
            }
          }

          // if any other element...
          if (newElement.isEqualNode(element)) {
            elementList.splice(index, 1);
            return true;
          }
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
      return false;
    }
  }, {
    key: "removeCurrentHeadProvisionalElements",
    value: function removeCurrentHeadProvisionalElements() {
      var _iterator31 = _createForOfIteratorHelper(this.currentHeadProvisionalElements),
        _step31;
      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var element = _step31.value;
          document.head.removeChild(element);
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
    }
  }, {
    key: "copyNewHeadProvisionalElements",
    value: function copyNewHeadProvisionalElements() {
      var _iterator32 = _createForOfIteratorHelper(this.newHeadProvisionalElements),
        _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var element = _step32.value;
          document.head.appendChild(element);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
    }
  }, {
    key: "activateNewBody",
    value: function activateNewBody() {
      document.adoptNode(this.newElement);
      this.activateNewBodyScriptElements();
    }
  }, {
    key: "activateNewBodyScriptElements",
    value: function activateNewBodyScriptElements() {
      var _iterator33 = _createForOfIteratorHelper(this.newBodyScriptElements),
        _step33;
      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var inertScriptElement = _step33.value;
          var activatedScriptElement = activateScriptElement(inertScriptElement);
          inertScriptElement.replaceWith(activatedScriptElement);
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }
  }, {
    key: "assignNewBody",
    value: function () {
      var _assignNewBody = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              _context32.next = 2;
              return this.renderElement(this.currentElement, this.newElement);
            case 2:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this);
      }));
      function assignNewBody() {
        return _assignNewBody.apply(this, arguments);
      }
      return assignNewBody;
    }()
  }, {
    key: "unusedDynamicStylesheetElements",
    get: function get() {
      return this.oldHeadStylesheetElements.filter(function (element) {
        return element.getAttribute("data-turbo-track") === "dynamic";
      });
    }
  }, {
    key: "oldHeadStylesheetElements",
    get: function get() {
      return this.currentHeadSnapshot.getStylesheetElementsNotInSnapshot(this.newHeadSnapshot);
    }
  }, {
    key: "newHeadStylesheetElements",
    get: function get() {
      return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "newHeadScriptElements",
    get: function get() {
      return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
  }, {
    key: "currentHeadProvisionalElements",
    get: function get() {
      return this.currentHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newHeadProvisionalElements",
    get: function get() {
      return this.newHeadSnapshot.provisionalElements;
    }
  }, {
    key: "newBodyScriptElements",
    get: function get() {
      return this.newElement.querySelectorAll("script");
    }
  }], [{
    key: "renderElement",
    value: function renderElement(currentElement, newElement) {
      if (document.body && newElement instanceof HTMLBodyElement) {
        document.body.replaceWith(newElement);
      } else {
        document.documentElement.appendChild(newElement);
      }
    }
  }]);
}(Renderer);
function _setLanguage2() {
  var documentElement = this.currentSnapshot.documentElement;
  var lang = this.newSnapshot.lang;
  if (lang) {
    documentElement.setAttribute("lang", lang);
  } else {
    documentElement.removeAttribute("lang");
  }
}
var MorphingPageRenderer = /*#__PURE__*/function (_PageRenderer2) {
  function MorphingPageRenderer() {
    _classCallCheck(this, MorphingPageRenderer);
    return _callSuper(this, MorphingPageRenderer, arguments);
  }
  _inherits(MorphingPageRenderer, _PageRenderer2);
  return _createClass(MorphingPageRenderer, [{
    key: "preservingPermanentElements",
    value: function () {
      var _preservingPermanentElements4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(callback) {
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              _context33.next = 2;
              return callback();
            case 2:
              return _context33.abrupt("return", _context33.sent);
            case 3:
            case "end":
              return _context33.stop();
          }
        }, _callee33);
      }));
      function preservingPermanentElements(_x28) {
        return _preservingPermanentElements4.apply(this, arguments);
      }
      return preservingPermanentElements;
    }()
  }, {
    key: "renderMethod",
    get: function get() {
      return "morph";
    }
  }, {
    key: "shouldAutofocus",
    get: function get() {
      return false;
    }
  }], [{
    key: "renderElement",
    value: function renderElement(currentElement, newElement) {
      morphElements(currentElement, newElement, {
        callbacks: {
          beforeNodeMorphed: function beforeNodeMorphed(element) {
            return !canRefreshFrame(element);
          }
        }
      });
      var _iterator34 = _createForOfIteratorHelper(currentElement.querySelectorAll("turbo-frame")),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var frame = _step34.value;
          if (canRefreshFrame(frame)) frame.reload();
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
      dispatch("turbo:morph", {
        detail: {
          currentElement: currentElement,
          newElement: newElement
        }
      });
    }
  }]);
}(PageRenderer);
function canRefreshFrame(frame) {
  return frame instanceof FrameElement && frame.src && frame.refresh === "morph" && !frame.closest("[data-turbo-permanent]");
}
var SnapshotCache = /*#__PURE__*/function () {
  function SnapshotCache(size) {
    _classCallCheck(this, SnapshotCache);
    this.keys = [];
    this.snapshots = {};
    this.size = size;
  }
  return _createClass(SnapshotCache, [{
    key: "has",
    value: function has(location) {
      return toCacheKey(location) in this.snapshots;
    }
  }, {
    key: "get",
    value: function get(location) {
      if (this.has(location)) {
        var snapshot = this.read(location);
        this.touch(location);
        return snapshot;
      }
    }
  }, {
    key: "put",
    value: function put(location, snapshot) {
      this.write(location, snapshot);
      this.touch(location);
      return snapshot;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.snapshots = {};
    }

    // Private
  }, {
    key: "read",
    value: function read(location) {
      return this.snapshots[toCacheKey(location)];
    }
  }, {
    key: "write",
    value: function write(location, snapshot) {
      this.snapshots[toCacheKey(location)] = snapshot;
    }
  }, {
    key: "touch",
    value: function touch(location) {
      var key = toCacheKey(location);
      var index = this.keys.indexOf(key);
      if (index > -1) this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    }
  }, {
    key: "trim",
    value: function trim() {
      var _iterator35 = _createForOfIteratorHelper(this.keys.splice(this.size)),
        _step35;
      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var key = _step35.value;
          delete this.snapshots[key];
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
    }
  }]);
}();
var PageView = /*#__PURE__*/function (_View3) {
  function PageView() {
    var _this38;
    _classCallCheck(this, PageView);
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }
    _this38 = _callSuper(this, PageView, [].concat(args));
    _this38.snapshotCache = new SnapshotCache(10);
    _this38.lastRenderedLocation = new URL(location.href);
    _this38.forceReloaded = false;
    return _this38;
  }
  _inherits(PageView, _View3);
  return _createClass(PageView, [{
    key: "shouldTransitionTo",
    value: function shouldTransitionTo(newSnapshot) {
      return this.snapshot.prefersViewTransitions && newSnapshot.prefersViewTransitions;
    }
  }, {
    key: "renderPage",
    value: function renderPage(snapshot) {
      var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var willRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var visit = arguments.length > 3 ? arguments[3] : undefined;
      var shouldMorphPage = this.isPageRefresh(visit) && this.snapshot.shouldMorphPage;
      var rendererClass = shouldMorphPage ? MorphingPageRenderer : PageRenderer;
      var renderer = new rendererClass(this.snapshot, snapshot, isPreview, willRender);
      if (!renderer.shouldRender) {
        this.forceReloaded = true;
      } else {
        visit === null || visit === void 0 ? void 0 : visit.changeHistory();
      }
      return this.render(renderer);
    }
  }, {
    key: "renderError",
    value: function renderError(snapshot, visit) {
      visit === null || visit === void 0 ? void 0 : visit.changeHistory();
      var renderer = new ErrorRenderer(this.snapshot, snapshot, false);
      return this.render(renderer);
    }
  }, {
    key: "clearSnapshotCache",
    value: function clearSnapshotCache() {
      this.snapshotCache.clear();
    }
  }, {
    key: "cacheSnapshot",
    value: function () {
      var _cacheSnapshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
        var snapshot,
          _location4,
          cachedSnapshot,
          _args34 = arguments;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              snapshot = _args34.length > 0 && _args34[0] !== undefined ? _args34[0] : this.snapshot;
              if (!snapshot.isCacheable) {
                _context34.next = 9;
                break;
              }
              this.delegate.viewWillCacheSnapshot();
              _location4 = this.lastRenderedLocation;
              _context34.next = 6;
              return nextEventLoopTick();
            case 6:
              cachedSnapshot = snapshot.clone();
              this.snapshotCache.put(_location4, cachedSnapshot);
              return _context34.abrupt("return", cachedSnapshot);
            case 9:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
      function cacheSnapshot() {
        return _cacheSnapshot.apply(this, arguments);
      }
      return cacheSnapshot;
    }()
  }, {
    key: "getCachedSnapshotForLocation",
    value: function getCachedSnapshotForLocation(location) {
      return this.snapshotCache.get(location);
    }
  }, {
    key: "isPageRefresh",
    value: function isPageRefresh(visit) {
      return !visit || this.lastRenderedLocation.pathname === visit.location.pathname && visit.action === "replace";
    }
  }, {
    key: "shouldPreserveScrollPosition",
    value: function shouldPreserveScrollPosition(visit) {
      return this.isPageRefresh(visit) && this.snapshot.shouldPreserveScrollPosition;
    }
  }, {
    key: "snapshot",
    get: function get() {
      return PageSnapshot.fromElement(this.element);
    }
  }]);
}(View);
var _preloadAll = /*#__PURE__*/_classPrivateFieldLooseKey("preloadAll");
var Preloader = /*#__PURE__*/function () {
  function Preloader(delegate, snapshotCache) {
    var _this39 = this;
    _classCallCheck(this, Preloader);
    this.selector = "a[data-turbo-preload]";
    Object.defineProperty(this, _preloadAll, {
      writable: true,
      value: function value() {
        _this39.preloadOnLoadLinksForView(document.body);
      }
    });
    this.delegate = delegate;
    this.snapshotCache = snapshotCache;
  }
  return _createClass(Preloader, [{
    key: "start",
    value: function start() {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", _classPrivateFieldLooseBase(this, _preloadAll)[_preloadAll]);
      } else {
        this.preloadOnLoadLinksForView(document.body);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      document.removeEventListener("DOMContentLoaded", _classPrivateFieldLooseBase(this, _preloadAll)[_preloadAll]);
    }
  }, {
    key: "preloadOnLoadLinksForView",
    value: function preloadOnLoadLinksForView(element) {
      var _iterator36 = _createForOfIteratorHelper(element.querySelectorAll(this.selector)),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var link = _step36.value;
          if (this.delegate.shouldPreloadLink(link)) {
            this.preloadURL(link);
          }
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    }
  }, {
    key: "preloadURL",
    value: function () {
      var _preloadURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(link) {
        var location, fetchRequest;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              location = new URL(link.href);
              if (!this.snapshotCache.has(location)) {
                _context35.next = 3;
                break;
              }
              return _context35.abrupt("return");
            case 3:
              fetchRequest = new FetchRequest(this, FetchMethod.get, location, new URLSearchParams(), link);
              _context35.next = 6;
              return fetchRequest.perform();
            case 6:
            case "end":
              return _context35.stop();
          }
        }, _callee35, this);
      }));
      function preloadURL(_x29) {
        return _preloadURL.apply(this, arguments);
      }
      return preloadURL;
    }() // Fetch request delegate
  }, {
    key: "prepareRequest",
    value: function prepareRequest(fetchRequest) {
      fetchRequest.headers["X-Sec-Purpose"] = "prefetch";
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(fetchRequest, fetchResponse) {
        var responseHTML, snapshot;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              _context36.prev = 0;
              _context36.next = 3;
              return fetchResponse.responseHTML;
            case 3:
              responseHTML = _context36.sent;
              snapshot = PageSnapshot.fromHTMLString(responseHTML);
              this.snapshotCache.put(fetchRequest.url, snapshot);
              _context36.next = 10;
              break;
            case 8:
              _context36.prev = 8;
              _context36.t0 = _context36["catch"](0);
            case 10:
            case "end":
              return _context36.stop();
          }
        }, _callee36, this, [[0, 8]]);
      }));
      function requestSucceededWithResponse(_x30, _x31) {
        return _requestSucceededWithResponse2.apply(this, arguments);
      }
      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestStarted",
    value: function requestStarted(fetchRequest) {}
  }, {
    key: "requestErrored",
    value: function requestErrored(fetchRequest) {}
  }, {
    key: "requestFinished",
    value: function requestFinished(fetchRequest) {}
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(fetchRequest, fetchResponse) {}
  }, {
    key: "requestFailedWithResponse",
    value: function requestFailedWithResponse(fetchRequest, fetchResponse) {}
  }]);
}();
var _setCacheControl = /*#__PURE__*/_classPrivateFieldLooseKey("setCacheControl");
var Cache = /*#__PURE__*/function () {
  function Cache(session) {
    _classCallCheck(this, Cache);
    Object.defineProperty(this, _setCacheControl, {
      value: _setCacheControl2
    });
    this.session = session;
  }
  return _createClass(Cache, [{
    key: "clear",
    value: function clear() {
      this.session.clearCache();
    }
  }, {
    key: "resetCacheControl",
    value: function resetCacheControl() {
      _classPrivateFieldLooseBase(this, _setCacheControl)[_setCacheControl]("");
    }
  }, {
    key: "exemptPageFromCache",
    value: function exemptPageFromCache() {
      _classPrivateFieldLooseBase(this, _setCacheControl)[_setCacheControl]("no-cache");
    }
  }, {
    key: "exemptPageFromPreview",
    value: function exemptPageFromPreview() {
      _classPrivateFieldLooseBase(this, _setCacheControl)[_setCacheControl]("no-preview");
    }
  }]);
}();
function _setCacheControl2(value) {
  setMetaContent("turbo-cache-control", value);
}
var _pageRefreshDebouncePeriod = /*#__PURE__*/_classPrivateFieldLooseKey("pageRefreshDebouncePeriod");
var Session = /*#__PURE__*/function () {
  function Session(recentRequests) {
    _classCallCheck(this, Session);
    this.navigator = new Navigator(this);
    this.history = new History(this);
    this.view = new PageView(this, document.documentElement);
    this.adapter = new BrowserAdapter(this);
    this.pageObserver = new PageObserver(this);
    this.cacheObserver = new CacheObserver();
    this.linkPrefetchObserver = new LinkPrefetchObserver(this, document);
    this.linkClickObserver = new LinkClickObserver(this, window);
    this.formSubmitObserver = new FormSubmitObserver(this, document);
    this.scrollObserver = new ScrollObserver(this);
    this.streamObserver = new StreamObserver(this);
    this.formLinkClickObserver = new FormLinkClickObserver(this, document.documentElement);
    this.frameRedirector = new FrameRedirector(this, document.documentElement);
    this.streamMessageRenderer = new StreamMessageRenderer();
    this.cache = new Cache(this);
    this.enabled = true;
    this.started = false;
    Object.defineProperty(this, _pageRefreshDebouncePeriod, {
      writable: true,
      value: 150
    });
    this.recentRequests = recentRequests;
    this.preloader = new Preloader(this, this.view.snapshotCache);
    this.debouncedRefresh = this.refresh;
    this.pageRefreshDebouncePeriod = this.pageRefreshDebouncePeriod;
  }
  return _createClass(Session, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.pageObserver.start();
        this.cacheObserver.start();
        this.linkPrefetchObserver.start();
        this.formLinkClickObserver.start();
        this.linkClickObserver.start();
        this.formSubmitObserver.start();
        this.scrollObserver.start();
        this.streamObserver.start();
        this.frameRedirector.start();
        this.history.start();
        this.preloader.start();
        this.started = true;
        this.enabled = true;
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.pageObserver.stop();
        this.cacheObserver.stop();
        this.linkPrefetchObserver.stop();
        this.formLinkClickObserver.stop();
        this.linkClickObserver.stop();
        this.formSubmitObserver.stop();
        this.scrollObserver.stop();
        this.streamObserver.stop();
        this.frameRedirector.stop();
        this.history.stop();
        this.preloader.stop();
        this.started = false;
      }
    }
  }, {
    key: "registerAdapter",
    value: function registerAdapter(adapter) {
      this.adapter = adapter;
    }
  }, {
    key: "visit",
    value: function visit(location) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var frameElement = options.frame ? document.getElementById(options.frame) : null;
      if (frameElement instanceof FrameElement) {
        var action = options.action || getVisitAction(frameElement);
        frameElement.delegate.proposeVisitIfNavigatedWithAction(frameElement, action);
        frameElement.src = location.toString();
      } else {
        this.navigator.proposeVisit(expandURL(location), options);
      }
    }
  }, {
    key: "refresh",
    value: function refresh(url, requestId) {
      var isRecentRequest = requestId && this.recentRequests.has(requestId);
      if (!isRecentRequest && !this.navigator.currentVisit) {
        this.visit(url, {
          action: "replace",
          shouldCacheSnapshot: false
        });
      }
    }
  }, {
    key: "connectStreamSource",
    value: function connectStreamSource(source) {
      this.streamObserver.connectStreamSource(source);
    }
  }, {
    key: "disconnectStreamSource",
    value: function disconnectStreamSource(source) {
      this.streamObserver.disconnectStreamSource(source);
    }
  }, {
    key: "renderStreamMessage",
    value: function renderStreamMessage(message) {
      this.streamMessageRenderer.render(StreamMessage.wrap(message));
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.view.clearSnapshotCache();
    }
  }, {
    key: "setProgressBarDelay",
    value: function setProgressBarDelay(delay) {
      console.warn("Please replace `session.setProgressBarDelay(delay)` with `session.progressBarDelay = delay`. The function is deprecated and will be removed in a future version of Turbo.`");
      this.progressBarDelay = delay;
    }
  }, {
    key: "progressBarDelay",
    get: function get() {
      return config.drive.progressBarDelay;
    },
    set: function set(delay) {
      config.drive.progressBarDelay = delay;
    }
  }, {
    key: "drive",
    get: function get() {
      return config.drive.enabled;
    },
    set: function set(value) {
      config.drive.enabled = value;
    }
  }, {
    key: "formMode",
    get: function get() {
      return config.forms.mode;
    },
    set: function set(value) {
      config.forms.mode = value;
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }, {
    key: "restorationIdentifier",
    get: function get() {
      return this.history.restorationIdentifier;
    }
  }, {
    key: "pageRefreshDebouncePeriod",
    get: function get() {
      return _classPrivateFieldLooseBase(this, _pageRefreshDebouncePeriod)[_pageRefreshDebouncePeriod];
    },
    set: function set(value) {
      this.refresh = debounce(this.debouncedRefresh.bind(this), value);
      _classPrivateFieldLooseBase(this, _pageRefreshDebouncePeriod)[_pageRefreshDebouncePeriod] = value;
    }

    // Preloader delegate
  }, {
    key: "shouldPreloadLink",
    value: function shouldPreloadLink(element) {
      var isUnsafe = element.hasAttribute("data-turbo-method");
      var isStream = element.hasAttribute("data-turbo-stream");
      var frameTarget = element.getAttribute("data-turbo-frame");
      var frame = frameTarget == "_top" ? null : document.getElementById(frameTarget) || findClosestRecursively(element, "turbo-frame:not([disabled])");
      if (isUnsafe || isStream || frame instanceof FrameElement) {
        return false;
      } else {
        var _location5 = new URL(element.href);
        return this.elementIsNavigatable(element) && locationIsVisitable(_location5, this.snapshot.rootLocation);
      }
    }

    // History delegate
  }, {
    key: "historyPoppedToLocationWithRestorationIdentifierAndDirection",
    value: function historyPoppedToLocationWithRestorationIdentifierAndDirection(location, restorationIdentifier, direction) {
      if (this.enabled) {
        this.navigator.startVisit(location, restorationIdentifier, {
          action: "restore",
          historyChanged: true,
          direction: direction
        });
      } else {
        this.adapter.pageInvalidated({
          reason: "turbo_disabled"
        });
      }
    }

    // Scroll observer delegate
  }, {
    key: "scrollPositionChanged",
    value: function scrollPositionChanged(position) {
      this.history.updateRestorationData({
        scrollPosition: position
      });
    }

    // Form click observer delegate
  }, {
    key: "willSubmitFormLinkToLocation",
    value: function willSubmitFormLinkToLocation(link, location) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location, this.snapshot.rootLocation);
    }
  }, {
    key: "submittedFormLinkToLocation",
    value: function submittedFormLinkToLocation() {}

    // Link hover observer delegate
  }, {
    key: "canPrefetchRequestToLocation",
    value: function canPrefetchRequestToLocation(link, location) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location, this.snapshot.rootLocation);
    }

    // Link click observer delegate
  }, {
    key: "willFollowLinkToLocation",
    value: function willFollowLinkToLocation(link, location, event) {
      return this.elementIsNavigatable(link) && locationIsVisitable(location, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location, event);
    }
  }, {
    key: "followedLinkToLocation",
    value: function followedLinkToLocation(link, location) {
      var action = this.getActionForLink(link);
      var acceptsStreamResponse = link.hasAttribute("data-turbo-stream");
      this.visit(location.href, {
        action: action,
        acceptsStreamResponse: acceptsStreamResponse
      });
    }

    // Navigator delegate
  }, {
    key: "allowsVisitingLocationWithAction",
    value: function allowsVisitingLocationWithAction(location, action) {
      return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
    }
  }, {
    key: "visitProposedToLocation",
    value: function visitProposedToLocation(location, options) {
      extendURLWithDeprecatedProperties(location);
      this.adapter.visitProposedToLocation(location, options);
    }

    // Visit delegate
  }, {
    key: "visitStarted",
    value: function visitStarted(visit) {
      if (!visit.acceptsStreamResponse) {
        markAsBusy(document.documentElement);
        this.view.markVisitDirection(visit.direction);
      }
      extendURLWithDeprecatedProperties(visit.location);
      if (!visit.silent) {
        this.notifyApplicationAfterVisitingLocation(visit.location, visit.action);
      }
    }
  }, {
    key: "visitCompleted",
    value: function visitCompleted(visit) {
      this.view.unmarkVisitDirection();
      clearBusyState(document.documentElement);
      this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
    }
  }, {
    key: "locationWithActionIsSamePage",
    value: function locationWithActionIsSamePage(location, action) {
      return this.navigator.locationWithActionIsSamePage(location, action);
    }
  }, {
    key: "visitScrolledToSamePageLocation",
    value: function visitScrolledToSamePageLocation(oldURL, newURL) {
      this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }

    // Form submit observer delegate
  }, {
    key: "willSubmitForm",
    value: function willSubmitForm(form, submitter) {
      var action = getAction$1(form, submitter);
      return this.submissionIsNavigatable(form, submitter) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(form, submitter) {
      this.navigator.submitForm(form, submitter);
    }

    // Page observer delegate
  }, {
    key: "pageBecameInteractive",
    value: function pageBecameInteractive() {
      this.view.lastRenderedLocation = this.location;
      this.notifyApplicationAfterPageLoad();
    }
  }, {
    key: "pageLoaded",
    value: function pageLoaded() {
      this.history.assumeControlOfScrollRestoration();
    }
  }, {
    key: "pageWillUnload",
    value: function pageWillUnload() {
      this.history.relinquishControlOfScrollRestoration();
    }

    // Stream observer delegate
  }, {
    key: "receivedMessageFromStream",
    value: function receivedMessageFromStream(message) {
      this.renderStreamMessage(message);
    }

    // Page view delegate
  }, {
    key: "viewWillCacheSnapshot",
    value: function viewWillCacheSnapshot() {
      var _this$navigator$curre;
      if (!((_this$navigator$curre = this.navigator.currentVisit) !== null && _this$navigator$curre !== void 0 && _this$navigator$curre.silent)) {
        this.notifyApplicationBeforeCachingSnapshot();
      }
    }
  }, {
    key: "allowsImmediateRender",
    value: function allowsImmediateRender(_ref26, options) {
      var element = _ref26.element;
      var event = this.notifyApplicationBeforeRender(element, options);
      var defaultPrevented = event.defaultPrevented,
        render = event.detail.render;
      if (this.view.renderer && render) {
        this.view.renderer.renderElement = render;
      }
      return !defaultPrevented;
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(_snapshot, _isPreview, renderMethod) {
      this.view.lastRenderedLocation = this.history.location;
      this.notifyApplicationAfterRender(renderMethod);
    }
  }, {
    key: "preloadOnLoadLinksForView",
    value: function preloadOnLoadLinksForView(element) {
      this.preloader.preloadOnLoadLinksForView(element);
    }
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated(reason) {
      this.adapter.pageInvalidated(reason);
    }

    // Frame element
  }, {
    key: "frameLoaded",
    value: function frameLoaded(frame) {
      this.notifyApplicationAfterFrameLoad(frame);
    }
  }, {
    key: "frameRendered",
    value: function frameRendered(fetchResponse, frame) {
      this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }

    // Application events
  }, {
    key: "applicationAllowsFollowingLinkToLocation",
    value: function applicationAllowsFollowingLinkToLocation(link, location, ev) {
      var event = this.notifyApplicationAfterClickingLinkToLocation(link, location, ev);
      return !event.defaultPrevented;
    }
  }, {
    key: "applicationAllowsVisitingLocation",
    value: function applicationAllowsVisitingLocation(location) {
      var event = this.notifyApplicationBeforeVisitingLocation(location);
      return !event.defaultPrevented;
    }
  }, {
    key: "notifyApplicationAfterClickingLinkToLocation",
    value: function notifyApplicationAfterClickingLinkToLocation(link, location, event) {
      return dispatch("turbo:click", {
        target: link,
        detail: {
          url: location.href,
          originalEvent: event
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationBeforeVisitingLocation",
    value: function notifyApplicationBeforeVisitingLocation(location) {
      return dispatch("turbo:before-visit", {
        detail: {
          url: location.href
        },
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingLocation",
    value: function notifyApplicationAfterVisitingLocation(location, action) {
      return dispatch("turbo:visit", {
        detail: {
          url: location.href,
          action: action
        }
      });
    }
  }, {
    key: "notifyApplicationBeforeCachingSnapshot",
    value: function notifyApplicationBeforeCachingSnapshot() {
      return dispatch("turbo:before-cache");
    }
  }, {
    key: "notifyApplicationBeforeRender",
    value: function notifyApplicationBeforeRender(newBody, options) {
      return dispatch("turbo:before-render", {
        detail: _objectSpread({
          newBody: newBody
        }, options),
        cancelable: true
      });
    }
  }, {
    key: "notifyApplicationAfterRender",
    value: function notifyApplicationAfterRender(renderMethod) {
      return dispatch("turbo:render", {
        detail: {
          renderMethod: renderMethod
        }
      });
    }
  }, {
    key: "notifyApplicationAfterPageLoad",
    value: function notifyApplicationAfterPageLoad() {
      var timing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return dispatch("turbo:load", {
        detail: {
          url: this.location.href,
          timing: timing
        }
      });
    }
  }, {
    key: "notifyApplicationAfterVisitingSamePageLocation",
    value: function notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
      dispatchEvent(new HashChangeEvent("hashchange", {
        oldURL: oldURL.toString(),
        newURL: newURL.toString()
      }));
    }
  }, {
    key: "notifyApplicationAfterFrameLoad",
    value: function notifyApplicationAfterFrameLoad(frame) {
      return dispatch("turbo:frame-load", {
        target: frame
      });
    }
  }, {
    key: "notifyApplicationAfterFrameRender",
    value: function notifyApplicationAfterFrameRender(fetchResponse, frame) {
      return dispatch("turbo:frame-render", {
        detail: {
          fetchResponse: fetchResponse
        },
        target: frame,
        cancelable: true
      });
    }

    // Helpers
  }, {
    key: "submissionIsNavigatable",
    value: function submissionIsNavigatable(form, submitter) {
      if (config.forms.mode == "off") {
        return false;
      } else {
        var submitterIsNavigatable = submitter ? this.elementIsNavigatable(submitter) : true;
        if (config.forms.mode == "optin") {
          return submitterIsNavigatable && form.closest('[data-turbo="true"]') != null;
        } else {
          return submitterIsNavigatable && this.elementIsNavigatable(form);
        }
      }
    }
  }, {
    key: "elementIsNavigatable",
    value: function elementIsNavigatable(element) {
      var container = findClosestRecursively(element, "[data-turbo]");
      var withinFrame = findClosestRecursively(element, "turbo-frame");

      // Check if Drive is enabled on the session or we're within a Frame.
      if (config.drive.enabled || withinFrame) {
        // Element is navigatable by default, unless `data-turbo="false"`.
        if (container) {
          return container.getAttribute("data-turbo") != "false";
        } else {
          return true;
        }
      } else {
        // Element isn't navigatable by default, unless `data-turbo="true"`.
        if (container) {
          return container.getAttribute("data-turbo") == "true";
        } else {
          return false;
        }
      }
    }

    // Private
  }, {
    key: "getActionForLink",
    value: function getActionForLink(link) {
      return getVisitAction(link) || "advance";
    }
  }, {
    key: "snapshot",
    get: function get() {
      return this.view.snapshot;
    }
  }]);
}(); // Older versions of the Turbo Native adapters referenced the
// `Location#absoluteURL` property in their implementations of
// the `Adapter#visitProposedToLocation()` and `#visitStarted()`
// methods. The Location class has since been removed in favor
// of the DOM URL API, and accordingly all Adapter methods now
// receive URL objects.
//
// We alias #absoluteURL to #toString() here to avoid crashing
// older adapters which do not expect URL objects. We should
// consider removing this support at some point in the future.
function extendURLWithDeprecatedProperties(url) {
  Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}
var deprecatedLocationPropertyDescriptors = {
  absoluteURL: {
    get: function get() {
      return this.toString();
    }
  }
};
var session = new Session(recentRequests);
var cache = session.cache,
  navigator$1 = session.navigator;

/**
 * Starts the main session.
 * This initialises any necessary observers such as those to monitor
 * link interactions.
 */
function start() {
  session.start();
}

/**
 * Registers an adapter for the main session.
 *
 * @param adapter Adapter to register
 */
function registerAdapter(adapter) {
  session.registerAdapter(adapter);
}

/**
 * Performs an application visit to the given location.
 *
 * @param location Location to visit (a URL or path)
 * @param options Options to apply
 * @param options.action Type of history navigation to apply ("restore",
 * "replace" or "advance")
 * @param options.historyChanged Specifies whether the browser history has
 * already been changed for this visit or not
 * @param options.referrer Specifies the referrer of this visit such that
 * navigations to the same page will not result in a new history entry.
 * @param options.snapshotHTML Cached snapshot to render
 * @param options.response Response of the specified location
 */
function visit(location, options) {
  session.visit(location, options);
}

/**
 * Connects a stream source to the main session.
 *
 * @param source Stream source to connect
 */
function connectStreamSource(source) {
  session.connectStreamSource(source);
}

/**
 * Disconnects a stream source from the main session.
 *
 * @param source Stream source to disconnect
 */
function disconnectStreamSource(source) {
  session.disconnectStreamSource(source);
}

/**
 * Renders a stream message to the main session by appending it to the
 * current document.
 *
 * @param message Message to render
 */
function renderStreamMessage(message) {
  session.renderStreamMessage(message);
}

/**
 * Removes all entries from the Turbo Drive page cache.
 * Call this when state has changed on the server that may affect cached pages.
 *
 * @deprecated since version 7.2.0 in favor of `Turbo.cache.clear()`
 */
function clearCache() {
  console.warn("Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
  session.clearCache();
}

/**
 * Sets the delay after which the progress bar will appear during navigation.
 *
 * The progress bar appears after 500ms by default.
 *
 * Note that this method has no effect when used with the iOS or Android
 * adapters.
 *
 * @param delay Time to delay in milliseconds
 */
function setProgressBarDelay(delay) {
  console.warn("Please replace `Turbo.setProgressBarDelay(delay)` with `Turbo.config.drive.progressBarDelay = delay`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
  config.drive.progressBarDelay = delay;
}
function setConfirmMethod(confirmMethod) {
  console.warn("Please replace `Turbo.setConfirmMethod(confirmMethod)` with `Turbo.config.forms.confirm = confirmMethod`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
  config.forms.confirm = confirmMethod;
}
function setFormMode(mode) {
  console.warn("Please replace `Turbo.setFormMode(mode)` with `Turbo.config.forms.mode = mode`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
  config.forms.mode = mode;
}
var Turbo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  navigator: navigator$1,
  session: session,
  cache: cache,
  PageRenderer: PageRenderer,
  PageSnapshot: PageSnapshot,
  FrameRenderer: FrameRenderer,
  fetch: fetchWithTurboHeaders,
  config: config,
  start: start,
  registerAdapter: registerAdapter,
  visit: visit,
  connectStreamSource: connectStreamSource,
  disconnectStreamSource: disconnectStreamSource,
  renderStreamMessage: renderStreamMessage,
  clearCache: clearCache,
  setProgressBarDelay: setProgressBarDelay,
  setConfirmMethod: setConfirmMethod,
  setFormMode: setFormMode
});
var TurboFrameMissingError = /*#__PURE__*/function (_Error) {
  function TurboFrameMissingError() {
    _classCallCheck(this, TurboFrameMissingError);
    return _callSuper(this, TurboFrameMissingError, arguments);
  }
  _inherits(TurboFrameMissingError, _Error);
  return _createClass(TurboFrameMissingError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var _currentFetchRequest = /*#__PURE__*/_classPrivateFieldLooseKey("currentFetchRequest");
var _resolveVisitPromise = /*#__PURE__*/_classPrivateFieldLooseKey("resolveVisitPromise");
var _connected = /*#__PURE__*/_classPrivateFieldLooseKey("connected");
var _hasBeenLoaded = /*#__PURE__*/_classPrivateFieldLooseKey("hasBeenLoaded");
var _ignoredAttributes = /*#__PURE__*/_classPrivateFieldLooseKey("ignoredAttributes");
var _shouldMorphFrame = /*#__PURE__*/_classPrivateFieldLooseKey("shouldMorphFrame");
var _loadSourceURL = /*#__PURE__*/_classPrivateFieldLooseKey("loadSourceURL");
var _loadFrameResponse = /*#__PURE__*/_classPrivateFieldLooseKey("loadFrameResponse");
var _visit2 = /*#__PURE__*/_classPrivateFieldLooseKey("visit");
var _navigateFrame = /*#__PURE__*/_classPrivateFieldLooseKey("navigateFrame");
var _handleUnvisitableFrameResponse = /*#__PURE__*/_classPrivateFieldLooseKey("handleUnvisitableFrameResponse");
var _willHandleFrameMissingFromResponse = /*#__PURE__*/_classPrivateFieldLooseKey("willHandleFrameMissingFromResponse");
var _handleFrameMissingFromResponse = /*#__PURE__*/_classPrivateFieldLooseKey("handleFrameMissingFromResponse");
var _throwFrameMissingError = /*#__PURE__*/_classPrivateFieldLooseKey("throwFrameMissingError");
var _visitResponse = /*#__PURE__*/_classPrivateFieldLooseKey("visitResponse");
var _findFrameElement3 = /*#__PURE__*/_classPrivateFieldLooseKey("findFrameElement");
var _formActionIsVisitable = /*#__PURE__*/_classPrivateFieldLooseKey("formActionIsVisitable");
var _shouldInterceptNavigation = /*#__PURE__*/_classPrivateFieldLooseKey("shouldInterceptNavigation");
var _isIgnoringChangesTo = /*#__PURE__*/_classPrivateFieldLooseKey("isIgnoringChangesTo");
var _ignoringChangesToAttribute = /*#__PURE__*/_classPrivateFieldLooseKey("ignoringChangesToAttribute");
var _withCurrentNavigationElement = /*#__PURE__*/_classPrivateFieldLooseKey("withCurrentNavigationElement");
var FrameController = /*#__PURE__*/function () {
  function FrameController(_element3) {
    var _this40 = this;
    _classCallCheck(this, FrameController);
    Object.defineProperty(this, _withCurrentNavigationElement, {
      value: _withCurrentNavigationElement2
    });
    Object.defineProperty(this, _ignoringChangesToAttribute, {
      value: _ignoringChangesToAttribute2
    });
    Object.defineProperty(this, _isIgnoringChangesTo, {
      value: _isIgnoringChangesTo2
    });
    Object.defineProperty(this, _shouldInterceptNavigation, {
      value: _shouldInterceptNavigation2
    });
    Object.defineProperty(this, _formActionIsVisitable, {
      value: _formActionIsVisitable2
    });
    Object.defineProperty(this, _findFrameElement3, {
      value: _findFrameElement4
    });
    Object.defineProperty(this, _visitResponse, {
      value: _visitResponse2
    });
    Object.defineProperty(this, _throwFrameMissingError, {
      value: _throwFrameMissingError2
    });
    Object.defineProperty(this, _handleFrameMissingFromResponse, {
      value: _handleFrameMissingFromResponse2
    });
    Object.defineProperty(this, _willHandleFrameMissingFromResponse, {
      value: _willHandleFrameMissingFromResponse2
    });
    Object.defineProperty(this, _handleUnvisitableFrameResponse, {
      value: _handleUnvisitableFrameResponse2
    });
    Object.defineProperty(this, _navigateFrame, {
      value: _navigateFrame2
    });
    Object.defineProperty(this, _visit2, {
      value: _visit3
    });
    // Private
    Object.defineProperty(this, _loadFrameResponse, {
      value: _loadFrameResponse2
    });
    Object.defineProperty(this, _loadSourceURL, {
      value: _loadSourceURL2
    });
    this.fetchResponseLoaded = function (_fetchResponse) {
      return Promise.resolve();
    };
    Object.defineProperty(this, _currentFetchRequest, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _resolveVisitPromise, {
      writable: true,
      value: function value() {}
    });
    Object.defineProperty(this, _connected, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _hasBeenLoaded, {
      writable: true,
      value: false
    });
    Object.defineProperty(this, _ignoredAttributes, {
      writable: true,
      value: new Set()
    });
    Object.defineProperty(this, _shouldMorphFrame, {
      writable: true,
      value: false
    });
    this.action = null;
    this.visitCachedSnapshot = function (_ref15) {
      var element = _ref15.element;
      var frame = element.querySelector("#" + _this40.element.id);
      if (frame && _this40.previousFrameElement) {
        frame.replaceChildren.apply(frame, _toConsumableArray(_this40.previousFrameElement.children));
      }
      delete _this40.previousFrameElement;
    };
    this.element = _element3;
    this.view = new FrameView(this, this.element);
    this.appearanceObserver = new AppearanceObserver(this, this.element);
    this.formLinkClickObserver = new FormLinkClickObserver(this, this.element);
    this.linkInterceptor = new LinkInterceptor(this, this.element);
    this.restorationIdentifier = uuid();
    this.formSubmitObserver = new FormSubmitObserver(this, this.element);
  }

  // Frame delegate
  return _createClass(FrameController, [{
    key: "connect",
    value: function connect() {
      if (!_classPrivateFieldLooseBase(this, _connected)[_connected]) {
        _classPrivateFieldLooseBase(this, _connected)[_connected] = true;
        if (this.loadingStyle == FrameLoadingStyle.lazy) {
          this.appearanceObserver.start();
        } else {
          _classPrivateFieldLooseBase(this, _loadSourceURL)[_loadSourceURL]();
        }
        this.formLinkClickObserver.start();
        this.linkInterceptor.start();
        this.formSubmitObserver.start();
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (_classPrivateFieldLooseBase(this, _connected)[_connected]) {
        _classPrivateFieldLooseBase(this, _connected)[_connected] = false;
        this.appearanceObserver.stop();
        this.formLinkClickObserver.stop();
        this.linkInterceptor.stop();
        this.formSubmitObserver.stop();
      }
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      if (this.loadingStyle == FrameLoadingStyle.eager) {
        _classPrivateFieldLooseBase(this, _loadSourceURL)[_loadSourceURL]();
      }
    }
  }, {
    key: "sourceURLChanged",
    value: function sourceURLChanged() {
      if (_classPrivateFieldLooseBase(this, _isIgnoringChangesTo)[_isIgnoringChangesTo]("src")) return;
      if (this.element.isConnected) {
        this.complete = false;
      }
      if (this.loadingStyle == FrameLoadingStyle.eager || _classPrivateFieldLooseBase(this, _hasBeenLoaded)[_hasBeenLoaded]) {
        _classPrivateFieldLooseBase(this, _loadSourceURL)[_loadSourceURL]();
      }
    }
  }, {
    key: "sourceURLReloaded",
    value: function sourceURLReloaded() {
      var _this$element = this.element,
        refresh = _this$element.refresh,
        src = _this$element.src;
      _classPrivateFieldLooseBase(this, _shouldMorphFrame)[_shouldMorphFrame] = src && refresh === "morph";
      this.element.removeAttribute("complete");
      this.element.src = null;
      this.element.src = src;
      return this.element.loaded;
    }
  }, {
    key: "loadingStyleChanged",
    value: function loadingStyleChanged() {
      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      } else {
        this.appearanceObserver.stop();
        _classPrivateFieldLooseBase(this, _loadSourceURL)[_loadSourceURL]();
      }
    }
  }, {
    key: "loadResponse",
    value: function () {
      var _loadResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(fetchResponse) {
        var html, _document3, pageSnapshot;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) {
                this.sourceURL = fetchResponse.response.url;
              }
              _context37.prev = 1;
              _context37.next = 4;
              return fetchResponse.responseHTML;
            case 4:
              html = _context37.sent;
              if (!html) {
                _context37.next = 15;
                break;
              }
              _document3 = parseHTMLDocument(html);
              pageSnapshot = PageSnapshot.fromDocument(_document3);
              if (!pageSnapshot.isVisitable) {
                _context37.next = 13;
                break;
              }
              _context37.next = 11;
              return _classPrivateFieldLooseBase(this, _loadFrameResponse)[_loadFrameResponse](fetchResponse, _document3);
            case 11:
              _context37.next = 15;
              break;
            case 13:
              _context37.next = 15;
              return _classPrivateFieldLooseBase(this, _handleUnvisitableFrameResponse)[_handleUnvisitableFrameResponse](fetchResponse);
            case 15:
              _context37.prev = 15;
              _classPrivateFieldLooseBase(this, _shouldMorphFrame)[_shouldMorphFrame] = false;
              this.fetchResponseLoaded = function () {
                return Promise.resolve();
              };
              return _context37.finish(15);
            case 19:
            case "end":
              return _context37.stop();
          }
        }, _callee37, this, [[1,, 15, 19]]);
      }));
      function loadResponse(_x32) {
        return _loadResponse.apply(this, arguments);
      }
      return loadResponse;
    }() // Appearance observer delegate
  }, {
    key: "elementAppearedInViewport",
    value: function elementAppearedInViewport(element) {
      this.proposeVisitIfNavigatedWithAction(element, getVisitAction(element));
      _classPrivateFieldLooseBase(this, _loadSourceURL)[_loadSourceURL]();
    }

    // Form link click observer delegate
  }, {
    key: "willSubmitFormLinkToLocation",
    value: function willSubmitFormLinkToLocation(link) {
      return _classPrivateFieldLooseBase(this, _shouldInterceptNavigation)[_shouldInterceptNavigation](link);
    }
  }, {
    key: "submittedFormLinkToLocation",
    value: function submittedFormLinkToLocation(link, _location, form) {
      var frame = _classPrivateFieldLooseBase(this, _findFrameElement3)[_findFrameElement3](link);
      if (frame) form.setAttribute("data-turbo-frame", frame.id);
    }

    // Link interceptor delegate
  }, {
    key: "shouldInterceptLinkClick",
    value: function shouldInterceptLinkClick(element, _location, _event) {
      return _classPrivateFieldLooseBase(this, _shouldInterceptNavigation)[_shouldInterceptNavigation](element);
    }
  }, {
    key: "linkClickIntercepted",
    value: function linkClickIntercepted(element, location) {
      _classPrivateFieldLooseBase(this, _navigateFrame)[_navigateFrame](element, location);
    }

    // Form submit observer delegate
  }, {
    key: "willSubmitForm",
    value: function willSubmitForm(element, submitter) {
      return element.closest("turbo-frame") == this.element && _classPrivateFieldLooseBase(this, _shouldInterceptNavigation)[_shouldInterceptNavigation](element, submitter);
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(element, submitter) {
      if (this.formSubmission) {
        this.formSubmission.stop();
      }
      this.formSubmission = new FormSubmission(this, element, submitter);
      var fetchRequest = this.formSubmission.fetchRequest;
      this.prepareRequest(fetchRequest);
      this.formSubmission.start();
    }

    // Fetch request delegate
  }, {
    key: "prepareRequest",
    value: function prepareRequest(request) {
      var _this$currentNavigati;
      request.headers["Turbo-Frame"] = this.id;
      if ((_this$currentNavigati = this.currentNavigationElement) !== null && _this$currentNavigati !== void 0 && _this$currentNavigati.hasAttribute("data-turbo-stream")) {
        request.acceptResponseType(StreamMessage.contentType);
      }
    }
  }, {
    key: "requestStarted",
    value: function requestStarted(_request) {
      markAsBusy(this.element);
    }
  }, {
    key: "requestPreventedHandlingResponse",
    value: function requestPreventedHandlingResponse(_request, _response) {
      _classPrivateFieldLooseBase(this, _resolveVisitPromise)[_resolveVisitPromise]();
    }
  }, {
    key: "requestSucceededWithResponse",
    value: function () {
      var _requestSucceededWithResponse3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(request, response) {
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return this.loadResponse(response);
            case 2:
              _classPrivateFieldLooseBase(this, _resolveVisitPromise)[_resolveVisitPromise]();
            case 3:
            case "end":
              return _context38.stop();
          }
        }, _callee38, this);
      }));
      function requestSucceededWithResponse(_x33, _x34) {
        return _requestSucceededWithResponse3.apply(this, arguments);
      }
      return requestSucceededWithResponse;
    }()
  }, {
    key: "requestFailedWithResponse",
    value: function () {
      var _requestFailedWithResponse2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(request, response) {
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              _context39.next = 2;
              return this.loadResponse(response);
            case 2:
              _classPrivateFieldLooseBase(this, _resolveVisitPromise)[_resolveVisitPromise]();
            case 3:
            case "end":
              return _context39.stop();
          }
        }, _callee39, this);
      }));
      function requestFailedWithResponse(_x35, _x36) {
        return _requestFailedWithResponse2.apply(this, arguments);
      }
      return requestFailedWithResponse;
    }()
  }, {
    key: "requestErrored",
    value: function requestErrored(request, error) {
      console.error(error);
      _classPrivateFieldLooseBase(this, _resolveVisitPromise)[_resolveVisitPromise]();
    }
  }, {
    key: "requestFinished",
    value: function requestFinished(_request) {
      clearBusyState(this.element);
    }

    // Form submission delegate
  }, {
    key: "formSubmissionStarted",
    value: function formSubmissionStarted(_ref16) {
      var formElement = _ref16.formElement;
      markAsBusy(formElement, _classPrivateFieldLooseBase(this, _findFrameElement3)[_findFrameElement3](formElement));
    }
  }, {
    key: "formSubmissionSucceededWithResponse",
    value: function formSubmissionSucceededWithResponse(formSubmission, response) {
      var frame = _classPrivateFieldLooseBase(this, _findFrameElement3)[_findFrameElement3](formSubmission.formElement, formSubmission.submitter);
      frame.delegate.proposeVisitIfNavigatedWithAction(frame, getVisitAction(formSubmission.submitter, formSubmission.formElement, frame));
      frame.delegate.loadResponse(response);
      if (!formSubmission.isSafe) {
        session.clearCache();
      }
    }
  }, {
    key: "formSubmissionFailedWithResponse",
    value: function formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
      this.element.delegate.loadResponse(fetchResponse);
      session.clearCache();
    }
  }, {
    key: "formSubmissionErrored",
    value: function formSubmissionErrored(formSubmission, error) {
      console.error(error);
    }
  }, {
    key: "formSubmissionFinished",
    value: function formSubmissionFinished(_ref17) {
      var formElement = _ref17.formElement;
      clearBusyState(formElement, _classPrivateFieldLooseBase(this, _findFrameElement3)[_findFrameElement3](formElement));
    }

    // View delegate
  }, {
    key: "allowsImmediateRender",
    value: function allowsImmediateRender(_ref18, options) {
      var newFrame = _ref18.element;
      var event = dispatch("turbo:before-frame-render", {
        target: this.element,
        detail: _objectSpread({
          newFrame: newFrame
        }, options),
        cancelable: true
      });
      var defaultPrevented = event.defaultPrevented,
        render = event.detail.render;
      if (this.view.renderer && render) {
        this.view.renderer.renderElement = render;
      }
      return !defaultPrevented;
    }
  }, {
    key: "viewRenderedSnapshot",
    value: function viewRenderedSnapshot(_snapshot, _isPreview, _renderMethod) {}
  }, {
    key: "preloadOnLoadLinksForView",
    value: function preloadOnLoadLinksForView(element) {
      session.preloadOnLoadLinksForView(element);
    }
  }, {
    key: "viewInvalidated",
    value: function viewInvalidated() {}

    // Frame renderer delegate
  }, {
    key: "willRenderFrame",
    value: function willRenderFrame(currentElement, _newElement) {
      this.previousFrameElement = currentElement.cloneNode(true);
    }
  }, {
    key: "proposeVisitIfNavigatedWithAction",
    value: function proposeVisitIfNavigatedWithAction(frame) {
      var _this41 = this;
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.action = action;
      if (this.action) {
        var pageSnapshot = PageSnapshot.fromElement(frame).clone();
        var visitCachedSnapshot = frame.delegate.visitCachedSnapshot;
        frame.delegate.fetchResponseLoaded = /*#__PURE__*/function () {
          var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(fetchResponse) {
            var statusCode, redirected, responseHTML, response, options;
            return _regeneratorRuntime().wrap(function _callee40$(_context40) {
              while (1) switch (_context40.prev = _context40.next) {
                case 0:
                  if (!frame.src) {
                    _context40.next = 9;
                    break;
                  }
                  statusCode = fetchResponse.statusCode, redirected = fetchResponse.redirected;
                  _context40.next = 4;
                  return fetchResponse.responseHTML;
                case 4:
                  responseHTML = _context40.sent;
                  response = {
                    statusCode: statusCode,
                    redirected: redirected,
                    responseHTML: responseHTML
                  };
                  options = {
                    response: response,
                    visitCachedSnapshot: visitCachedSnapshot,
                    willRender: false,
                    updateHistory: false,
                    restorationIdentifier: _this41.restorationIdentifier,
                    snapshot: pageSnapshot
                  };
                  if (_this41.action) options.action = _this41.action;
                  session.visit(frame.src, options);
                case 9:
                case "end":
                  return _context40.stop();
              }
            }, _callee40);
          }));
          return function (_x37) {
            return _ref19.apply(this, arguments);
          };
        }();
      }
    }
  }, {
    key: "changeHistory",
    value: function changeHistory() {
      if (this.action) {
        var method = getHistoryMethodForAction(this.action);
        session.history.update(method, expandURL(this.element.src || ""), this.restorationIdentifier);
      }
    }
  }, {
    key: "extractForeignFrameElement",
    value: function () {
      var _extractForeignFrameElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(container) {
        var element, id;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              id = CSS.escape(this.id);
              _context41.prev = 1;
              element = activateElement(container.querySelector("turbo-frame#".concat(id)), this.sourceURL);
              if (!element) {
                _context41.next = 5;
                break;
              }
              return _context41.abrupt("return", element);
            case 5:
              element = activateElement(container.querySelector("turbo-frame[src][recurse~=".concat(id, "]")), this.sourceURL);
              if (!element) {
                _context41.next = 12;
                break;
              }
              _context41.next = 9;
              return element.loaded;
            case 9:
              _context41.next = 11;
              return this.extractForeignFrameElement(element);
            case 11:
              return _context41.abrupt("return", _context41.sent);
            case 12:
              _context41.next = 18;
              break;
            case 14:
              _context41.prev = 14;
              _context41.t0 = _context41["catch"](1);
              console.error(_context41.t0);
              return _context41.abrupt("return", new FrameElement());
            case 18:
              return _context41.abrupt("return", null);
            case 19:
            case "end":
              return _context41.stop();
          }
        }, _callee41, this, [[1, 14]]);
      }));
      function extractForeignFrameElement(_x38) {
        return _extractForeignFrameElement.apply(this, arguments);
      }
      return extractForeignFrameElement;
    }()
  }, {
    key: "id",
    get:
    // Computed properties

    function get() {
      return this.element.id;
    }
  }, {
    key: "enabled",
    get: function get() {
      return !this.element.disabled;
    }
  }, {
    key: "sourceURL",
    get: function get() {
      if (this.element.src) {
        return this.element.src;
      }
    },
    set: function set(sourceURL) {
      var _this42 = this;
      _classPrivateFieldLooseBase(this, _ignoringChangesToAttribute)[_ignoringChangesToAttribute]("src", function () {
        _this42.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
      });
    }
  }, {
    key: "loadingStyle",
    get: function get() {
      return this.element.loading;
    }
  }, {
    key: "isLoading",
    get: function get() {
      return this.formSubmission !== undefined || _classPrivateFieldLooseBase(this, _resolveVisitPromise)[_resolveVisitPromise]() !== undefined;
    }
  }, {
    key: "complete",
    get: function get() {
      return this.element.hasAttribute("complete");
    },
    set: function set(value) {
      if (value) {
        this.element.setAttribute("complete", "");
      } else {
        this.element.removeAttribute("complete");
      }
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.element.isActive && _classPrivateFieldLooseBase(this, _connected)[_connected];
    }
  }, {
    key: "rootLocation",
    get: function get() {
      var _meta$content;
      var meta = this.element.ownerDocument.querySelector("meta[name=\"turbo-root\"]");
      var root = (_meta$content = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _meta$content !== void 0 ? _meta$content : "/";
      return expandURL(root);
    }
  }]);
}();
function _loadSourceURL2() {
  return _loadSourceURL3.apply(this, arguments);
}
function _loadSourceURL3() {
  _loadSourceURL3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
    return _regeneratorRuntime().wrap(function _callee51$(_context51) {
      while (1) switch (_context51.prev = _context51.next) {
        case 0:
          if (!(this.enabled && this.isActive && !this.complete && this.sourceURL)) {
            _context51.next = 6;
            break;
          }
          this.element.loaded = _classPrivateFieldLooseBase(this, _visit2)[_visit2](expandURL(this.sourceURL));
          this.appearanceObserver.stop();
          _context51.next = 5;
          return this.element.loaded;
        case 5:
          _classPrivateFieldLooseBase(this, _hasBeenLoaded)[_hasBeenLoaded] = true;
        case 6:
        case "end":
          return _context51.stop();
      }
    }, _callee51, this);
  }));
  return _loadSourceURL3.apply(this, arguments);
}
function _loadFrameResponse2(_x41, _x42) {
  return _loadFrameResponse3.apply(this, arguments);
}
function _loadFrameResponse3() {
  _loadFrameResponse3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52(fetchResponse, document) {
    var newFrameElement, rendererClass, snapshot, renderer;
    return _regeneratorRuntime().wrap(function _callee52$(_context52) {
      while (1) switch (_context52.prev = _context52.next) {
        case 0:
          _context52.next = 2;
          return this.extractForeignFrameElement(document.body);
        case 2:
          newFrameElement = _context52.sent;
          rendererClass = _classPrivateFieldLooseBase(this, _shouldMorphFrame)[_shouldMorphFrame] ? MorphingFrameRenderer : FrameRenderer;
          if (!newFrameElement) {
            _context52.next = 20;
            break;
          }
          snapshot = new Snapshot(newFrameElement);
          renderer = new rendererClass(this, this.view.snapshot, snapshot, false, false);
          if (!this.view.renderPromise) {
            _context52.next = 10;
            break;
          }
          _context52.next = 10;
          return this.view.renderPromise;
        case 10:
          this.changeHistory();
          _context52.next = 13;
          return this.view.render(renderer);
        case 13:
          this.complete = true;
          session.frameRendered(fetchResponse, this.element);
          session.frameLoaded(this.element);
          _context52.next = 18;
          return this.fetchResponseLoaded(fetchResponse);
        case 18:
          _context52.next = 21;
          break;
        case 20:
          if (_classPrivateFieldLooseBase(this, _willHandleFrameMissingFromResponse)[_willHandleFrameMissingFromResponse](fetchResponse)) {
            _classPrivateFieldLooseBase(this, _handleFrameMissingFromResponse)[_handleFrameMissingFromResponse](fetchResponse);
          }
        case 21:
        case "end":
          return _context52.stop();
      }
    }, _callee52, this);
  }));
  return _loadFrameResponse3.apply(this, arguments);
}
function _visit3(_x43) {
  return _visit4.apply(this, arguments);
}
function _visit4() {
  _visit4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(url) {
    var _classPrivateFieldLoo,
      _this54 = this;
    var request;
    return _regeneratorRuntime().wrap(function _callee53$(_context53) {
      while (1) switch (_context53.prev = _context53.next) {
        case 0:
          request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
          (_classPrivateFieldLoo = _classPrivateFieldLooseBase(this, _currentFetchRequest)[_currentFetchRequest]) === null || _classPrivateFieldLoo === void 0 ? void 0 : _classPrivateFieldLoo.cancel();
          _classPrivateFieldLooseBase(this, _currentFetchRequest)[_currentFetchRequest] = request;
          return _context53.abrupt("return", new Promise(function (resolve) {
            _classPrivateFieldLooseBase(_this54, _resolveVisitPromise)[_resolveVisitPromise] = function () {
              _classPrivateFieldLooseBase(_this54, _resolveVisitPromise)[_resolveVisitPromise] = function () {};
              _classPrivateFieldLooseBase(_this54, _currentFetchRequest)[_currentFetchRequest] = null;
              resolve();
            };
            request.perform();
          }));
        case 4:
        case "end":
          return _context53.stop();
      }
    }, _callee53, this);
  }));
  return _visit4.apply(this, arguments);
}
function _navigateFrame2(element, url, submitter) {
  var frame = _classPrivateFieldLooseBase(this, _findFrameElement3)[_findFrameElement3](element, submitter);
  frame.delegate.proposeVisitIfNavigatedWithAction(frame, getVisitAction(submitter, element, frame));
  _classPrivateFieldLooseBase(this, _withCurrentNavigationElement)[_withCurrentNavigationElement](element, function () {
    frame.src = url;
  });
}
function _handleUnvisitableFrameResponse2(_x44) {
  return _handleUnvisitableFrameResponse3.apply(this, arguments);
}
function _handleUnvisitableFrameResponse3() {
  _handleUnvisitableFrameResponse3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(fetchResponse) {
    return _regeneratorRuntime().wrap(function _callee54$(_context54) {
      while (1) switch (_context54.prev = _context54.next) {
        case 0:
          console.warn("The response (".concat(fetchResponse.statusCode, ") from <turbo-frame id=\"").concat(this.element.id, "\"> is performing a full page visit due to turbo-visit-control."));
          _context54.next = 3;
          return _classPrivateFieldLooseBase(this, _visitResponse)[_visitResponse](fetchResponse.response);
        case 3:
        case "end":
          return _context54.stop();
      }
    }, _callee54, this);
  }));
  return _handleUnvisitableFrameResponse3.apply(this, arguments);
}
function _willHandleFrameMissingFromResponse2(fetchResponse) {
  var _this52 = this;
  this.element.setAttribute("complete", "");
  var response = fetchResponse.response;
  var visit = /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(url, options) {
      return _regeneratorRuntime().wrap(function _callee49$(_context49) {
        while (1) switch (_context49.prev = _context49.next) {
          case 0:
            if (url instanceof Response) {
              _classPrivateFieldLooseBase(_this52, _visitResponse)[_visitResponse](url);
            } else {
              session.visit(url, options);
            }
          case 1:
          case "end":
            return _context49.stop();
        }
      }, _callee49);
    }));
    return function visit(_x45, _x46) {
      return _ref27.apply(this, arguments);
    };
  }();
  var event = dispatch("turbo:frame-missing", {
    target: this.element,
    detail: {
      response: response,
      visit: visit
    },
    cancelable: true
  });
  return !event.defaultPrevented;
}
function _handleFrameMissingFromResponse2(fetchResponse) {
  this.view.missing();
  _classPrivateFieldLooseBase(this, _throwFrameMissingError)[_throwFrameMissingError](fetchResponse);
}
function _throwFrameMissingError2(fetchResponse) {
  var message = "The response (".concat(fetchResponse.statusCode, ") did not contain the expected <turbo-frame id=\"").concat(this.element.id, "\"> and will be ignored. To perform a full page visit instead, set turbo-visit-control to reload.");
  throw new TurboFrameMissingError(message);
}
function _visitResponse2(_x47) {
  return _visitResponse3.apply(this, arguments);
}
function _visitResponse3() {
  _visitResponse3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(response) {
    var wrapped, responseHTML, location, redirected, statusCode;
    return _regeneratorRuntime().wrap(function _callee55$(_context55) {
      while (1) switch (_context55.prev = _context55.next) {
        case 0:
          wrapped = new FetchResponse(response);
          _context55.next = 3;
          return wrapped.responseHTML;
        case 3:
          responseHTML = _context55.sent;
          location = wrapped.location, redirected = wrapped.redirected, statusCode = wrapped.statusCode;
          return _context55.abrupt("return", session.visit(location, {
            response: {
              redirected: redirected,
              statusCode: statusCode,
              responseHTML: responseHTML
            }
          }));
        case 6:
        case "end":
          return _context55.stop();
      }
    }, _callee55);
  }));
  return _visitResponse3.apply(this, arguments);
}
function _findFrameElement4(element, submitter) {
  var _getFrameElementById;
  var id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
  return (_getFrameElementById = getFrameElementById(id)) !== null && _getFrameElementById !== void 0 ? _getFrameElementById : this.element;
}
function _formActionIsVisitable2(form, submitter) {
  var action = getAction$1(form, submitter);
  return locationIsVisitable(expandURL(action), this.rootLocation);
}
function _shouldInterceptNavigation2(element, submitter) {
  var id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
  if (element instanceof HTMLFormElement && !_classPrivateFieldLooseBase(this, _formActionIsVisitable)[_formActionIsVisitable](element, submitter)) {
    return false;
  }
  if (!this.enabled || id == "_top") {
    return false;
  }
  if (id) {
    var frameElement = getFrameElementById(id);
    if (frameElement) {
      return !frameElement.disabled;
    }
  }
  if (!session.elementIsNavigatable(element)) {
    return false;
  }
  if (submitter && !session.elementIsNavigatable(submitter)) {
    return false;
  }
  return true;
}
function _isIgnoringChangesTo2(attributeName) {
  return _classPrivateFieldLooseBase(this, _ignoredAttributes)[_ignoredAttributes].has(attributeName);
}
function _ignoringChangesToAttribute2(attributeName, callback) {
  _classPrivateFieldLooseBase(this, _ignoredAttributes)[_ignoredAttributes].add(attributeName);
  callback();
  _classPrivateFieldLooseBase(this, _ignoredAttributes)[_ignoredAttributes]["delete"](attributeName);
}
function _withCurrentNavigationElement2(element, callback) {
  this.currentNavigationElement = element;
  callback();
  delete this.currentNavigationElement;
}
function getFrameElementById(id) {
  if (id != null) {
    var element = document.getElementById(id);
    if (element instanceof FrameElement) {
      return element;
    }
  }
}
function activateElement(element, currentURL) {
  if (element) {
    var src = element.getAttribute("src");
    if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
      throw new Error("Matching <turbo-frame id=\"".concat(element.id, "\"> element has a source URL which references itself"));
    }
    if (element.ownerDocument !== document) {
      element = document.importNode(element, true);
    }
    if (element instanceof FrameElement) {
      element.connectedCallback();
      element.disconnectedCallback();
      return element;
    }
  }
}
var StreamActions = {
  after: function after() {
    var _this43 = this;
    this.targetElements.forEach(function (e) {
      var _e$parentElement;
      return (_e$parentElement = e.parentElement) === null || _e$parentElement === void 0 ? void 0 : _e$parentElement.insertBefore(_this43.templateContent, e.nextSibling);
    });
  },
  append: function append() {
    var _this44 = this;
    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(function (e) {
      return e.append(_this44.templateContent);
    });
  },
  before: function before() {
    var _this45 = this;
    this.targetElements.forEach(function (e) {
      var _e$parentElement2;
      return (_e$parentElement2 = e.parentElement) === null || _e$parentElement2 === void 0 ? void 0 : _e$parentElement2.insertBefore(_this45.templateContent, e);
    });
  },
  prepend: function prepend() {
    var _this46 = this;
    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(function (e) {
      return e.prepend(_this46.templateContent);
    });
  },
  remove: function remove() {
    this.targetElements.forEach(function (e) {
      return e.remove();
    });
  },
  replace: function replace() {
    var _this47 = this;
    var method = this.getAttribute("method");
    this.targetElements.forEach(function (targetElement) {
      if (method === "morph") {
        morphElements(targetElement, _this47.templateContent);
      } else {
        targetElement.replaceWith(_this47.templateContent);
      }
    });
  },
  update: function update() {
    var _this48 = this;
    var method = this.getAttribute("method");
    this.targetElements.forEach(function (targetElement) {
      if (method === "morph") {
        morphChildren(targetElement, _this48.templateContent);
      } else {
        targetElement.innerHTML = "";
        targetElement.append(_this48.templateContent);
      }
    });
  },
  refresh: function refresh() {
    session.refresh(this.baseURI, this.requestId);
  }
};

// <turbo-stream action=replace target=id><template>...

/**
 * Renders updates to the page from a stream of messages.
 *
 * Using the `action` attribute, this can be configured one of eight ways:
 *
 * - `after` - inserts the result after the target
 * - `append` - appends the result to the target
 * - `before` - inserts the result before the target
 * - `prepend` - prepends the result to the target
 * - `refresh` - initiates a page refresh
 * - `remove` - removes the target
 * - `replace` - replaces the outer HTML of the target
 * - `update` - replaces the inner HTML of the target
 *
 * @customElement turbo-stream
 * @example
 *   <turbo-stream action="append" target="dom_id">
 *     <template>
 *       Content to append to target designated with the dom_id.
 *     </template>
 *   </turbo-stream>
 */
var _raise = /*#__PURE__*/_classPrivateFieldLooseKey("raise");
var StreamElement = /*#__PURE__*/function (_HTMLElement2) {
  function StreamElement() {
    var _this49;
    _classCallCheck(this, StreamElement);
    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }
    _this49 = _callSuper(this, StreamElement, [].concat(args));
    Object.defineProperty(_this49, _raise, {
      value: _raise2
    });
    return _this49;
  }
  _inherits(StreamElement, _HTMLElement2);
  return _createClass(StreamElement, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              _context42.prev = 0;
              _context42.next = 3;
              return this.render();
            case 3:
              _context42.next = 8;
              break;
            case 5:
              _context42.prev = 5;
              _context42.t0 = _context42["catch"](0);
              console.error(_context42.t0);
            case 8:
              _context42.prev = 8;
              this.disconnect();
              return _context42.finish(8);
            case 11:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this, [[0, 5, 8, 11]]);
      }));
      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function () {
      var _render6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
        var _this$renderPromise,
          _this50 = this;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              return _context44.abrupt("return", (_this$renderPromise = this.renderPromise) !== null && _this$renderPromise !== void 0 ? _this$renderPromise : this.renderPromise = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
                var event;
                return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                  while (1) switch (_context43.prev = _context43.next) {
                    case 0:
                      event = _this50.beforeRenderEvent;
                      if (!_this50.dispatchEvent(event)) {
                        _context43.next = 6;
                        break;
                      }
                      _context43.next = 4;
                      return nextRepaint();
                    case 4:
                      _context43.next = 6;
                      return event.detail.render(_this50);
                    case 6:
                    case "end":
                      return _context43.stop();
                  }
                }, _callee43);
              }))());
            case 1:
            case "end":
              return _context44.stop();
          }
        }, _callee44, this);
      }));
      function render() {
        return _render6.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.remove();
        // eslint-disable-next-line no-empty
      } catch (_unused) {}
    }

    /**
     * Removes duplicate children (by ID)
     */
  }, {
    key: "removeDuplicateTargetChildren",
    value: function removeDuplicateTargetChildren() {
      this.duplicateChildren.forEach(function (c) {
        return c.remove();
      });
    }

    /**
     * Gets the list of duplicate children (i.e. those with the same ID)
     */
  }, {
    key: "duplicateChildren",
    get: function get() {
      var _this$templateContent;
      var existingChildren = this.targetElements.flatMap(function (e) {
        return _toConsumableArray(e.children);
      }).filter(function (c) {
        return !!c.id;
      });
      var newChildrenIds = _toConsumableArray(((_this$templateContent = this.templateContent) === null || _this$templateContent === void 0 ? void 0 : _this$templateContent.children) || []).filter(function (c) {
        return !!c.id;
      }).map(function (c) {
        return c.id;
      });
      return existingChildren.filter(function (c) {
        return newChildrenIds.includes(c.id);
      });
    }

    /**
     * Gets the action function to be performed.
     */
  }, {
    key: "performAction",
    get: function get() {
      if (this.action) {
        var actionFunction = StreamActions[this.action];
        if (actionFunction) {
          return actionFunction;
        }
        _classPrivateFieldLooseBase(this, _raise)[_raise]("unknown action");
      }
      _classPrivateFieldLooseBase(this, _raise)[_raise]("action attribute is missing");
    }

    /**
     * Gets the target elements which the template will be rendered to.
     */
  }, {
    key: "targetElements",
    get: function get() {
      if (this.target) {
        return this.targetElementsById;
      } else if (this.targets) {
        return this.targetElementsByQuery;
      } else {
        _classPrivateFieldLooseBase(this, _raise)[_raise]("target or targets attribute is missing");
      }
    }

    /**
     * Gets the contents of the main `<template>`.
     */
  }, {
    key: "templateContent",
    get: function get() {
      return this.templateElement.content.cloneNode(true);
    }

    /**
     * Gets the main `<template>` used for rendering
     */
  }, {
    key: "templateElement",
    get: function get() {
      if (this.firstElementChild === null) {
        var template = this.ownerDocument.createElement("template");
        this.appendChild(template);
        return template;
      } else if (this.firstElementChild instanceof HTMLTemplateElement) {
        return this.firstElementChild;
      }
      _classPrivateFieldLooseBase(this, _raise)[_raise]("first child element must be a <template> element");
    }

    /**
     * Gets the current action.
     */
  }, {
    key: "action",
    get: function get() {
      return this.getAttribute("action");
    }

    /**
     * Gets the current target (an element ID) to which the result will
     * be rendered.
     */
  }, {
    key: "target",
    get: function get() {
      return this.getAttribute("target");
    }

    /**
     * Gets the current "targets" selector (a CSS selector)
     */
  }, {
    key: "targets",
    get: function get() {
      return this.getAttribute("targets");
    }

    /**
     * Reads the request-id attribute
     */
  }, {
    key: "requestId",
    get: function get() {
      return this.getAttribute("request-id");
    }
  }, {
    key: "description",
    get: function get() {
      var _2, _this$outerHTML$match;
      return (_2 = ((_this$outerHTML$match = this.outerHTML.match(/<[^>]+>/)) !== null && _this$outerHTML$match !== void 0 ? _this$outerHTML$match : [])[0]) !== null && _2 !== void 0 ? _2 : "<turbo-stream>";
    }
  }, {
    key: "beforeRenderEvent",
    get: function get() {
      return new CustomEvent("turbo:before-stream-render", {
        bubbles: true,
        cancelable: true,
        detail: {
          newStream: this,
          render: StreamElement.renderElement
        }
      });
    }
  }, {
    key: "targetElementsById",
    get: function get() {
      var _this$ownerDocument2;
      var element = (_this$ownerDocument2 = this.ownerDocument) === null || _this$ownerDocument2 === void 0 ? void 0 : _this$ownerDocument2.getElementById(this.target);
      if (element !== null) {
        return [element];
      } else {
        return [];
      }
    }
  }, {
    key: "targetElementsByQuery",
    get: function get() {
      var _this$ownerDocument3;
      var elements = (_this$ownerDocument3 = this.ownerDocument) === null || _this$ownerDocument3 === void 0 ? void 0 : _this$ownerDocument3.querySelectorAll(this.targets);
      if (elements.length !== 0) {
        return Array.prototype.slice.call(elements);
      } else {
        return [];
      }
    }
  }], [{
    key: "renderElement",
    value: function () {
      var _renderElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(newElement) {
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              _context45.next = 2;
              return newElement.performAction();
            case 2:
            case "end":
              return _context45.stop();
          }
        }, _callee45);
      }));
      function renderElement(_x39) {
        return _renderElement.apply(this, arguments);
      }
      return renderElement;
    }()
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
function _raise2(message) {
  throw new Error("".concat(this.description, ": ").concat(message));
}
var StreamSourceElement = /*#__PURE__*/function (_HTMLElement3) {
  function StreamSourceElement() {
    var _this51;
    _classCallCheck(this, StreamSourceElement);
    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }
    _this51 = _callSuper(this, StreamSourceElement, [].concat(args));
    _this51.streamSource = null;
    return _this51;
  }
  _inherits(StreamSourceElement, _HTMLElement3);
  return _createClass(StreamSourceElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.streamSource = this.src.match(/^ws{1,2}:/) ? new WebSocket(this.src) : new EventSource(this.src);
      connectStreamSource(this.streamSource);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.streamSource) {
        this.streamSource.close();
        disconnectStreamSource(this.streamSource);
      }
    }
  }, {
    key: "src",
    get: function get() {
      return this.getAttribute("src") || "";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
FrameElement.delegateConstructor = FrameController;
if (customElements.get("turbo-frame") === undefined) {
  customElements.define("turbo-frame", FrameElement);
}
if (customElements.get("turbo-stream") === undefined) {
  customElements.define("turbo-stream", StreamElement);
}
if (customElements.get("turbo-stream-source") === undefined) {
  customElements.define("turbo-stream-source", StreamSourceElement);
}
(function () {
  var element = document.currentScript;
  if (!element) return;
  if (element.hasAttribute("data-turbo-suppress-warning")) return;
  element = element.parentElement;
  while (element) {
    if (element == document.body) {
      return console.warn(unindent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "]))), element.outerHTML);
    }
    element = element.parentElement;
  }
})();
window.Turbo = _objectSpread(_objectSpread({}, Turbo), {}, {
  StreamActions: StreamActions
});
start();


/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x, k) {
        var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "",
          j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
              begin = clamp(from, length),
              end = length,
              num,
              target,
              targetArray,
              sourceArray;
            if (to !== undefined) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
          buff = new ArrayBuffer(length),
          arr = new Uint8Array(buff),
          i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [],
          length = hex.length,
          x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
          i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
          tmp,
          lo,
          hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
          length = buff.length,
          i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);
    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();
  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
      cancelable = eventInit.cancelable,
      detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;
      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");
      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};
        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
          responseType = _xhr.responseType,
          response = _xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();
  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;
      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
        url = _blob$directUploadDat.url,
        headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
          status = _xhr.status,
          response = _xhr.response;
        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();
  var id = 0;
  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }
    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }
          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();
  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }
      return object[methodName].apply(object, messages);
    }
  }
  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          _this.dispatch("end");
          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }
    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var controllers = this.createDirectUploadControllers();
        var startNextController = function startNextController() {
          var controller = controllers.shift();
          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);
                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            _this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;
  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    var form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      var _button = button,
        disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm["delete"](form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }
  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;
      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };
      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };
      expando = '_ujsData';
      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };
      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };
      Rails.isContentEditable = function (element) {
        var isEditable;
        isEditable = false;
        while (true) {
          if (element.isContentEditable) {
            isEditable = true;
            break;
          }
          element = element.parentElement;
          if (!element) {
            break;
          }
        }
        return isEditable;
      };
      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;
      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };
      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };
      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };
      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;
      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);
          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }
          return result;
        };
      }
      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };
      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };
      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };
      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };
      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };
      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };
      processResponse = function processResponse(response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };
      Rails.href = function (element) {
        return element.href;
      };
      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;
      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };
      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };
      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;
      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };
      Rails.confirm = function (message, element) {
        return confirm(message);
      };
      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isContentEditable, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements, isContentEditable = Rails.isContentEditable;
      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };
      Rails.enableElement = function (e) {
        var element;
        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }
          element = e.target;
        } else {
          element = e;
        }
        if (isContentEditable(element)) {
          return;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };
      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (isContentEditable(element)) {
          return;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };
      disableLinkElement = function disableLinkElement(element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };
      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };
      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };
      disableFormElement = function disableFormElement(element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };
      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };
      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };
      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var isContentEditable, stopEverything;
      stopEverything = Rails.stopEverything;
      isContentEditable = Rails.isContentEditable;
      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        if (isContentEditable(this)) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
        fire,
        getData,
        isContentEditable,
        isCrossDomain,
        isRemote,
        matches,
        serializeElement,
        setData,
        stopEverything,
        slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement, isContentEditable = Rails.isContentEditable;
      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };
      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        if (isContentEditable(element)) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };
      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };
      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;
      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }
      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };
      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);
  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/stimulus/dist/stimulus.js":
/*!************************************************!*\
  !*** ./node_modules/stimulus/dist/stimulus.js ***!
  \************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, SelectorObserver, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorObserver", function() { return SelectorObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
Stimulus 3.2.1
Copyright © 2023 Basecamp, LLC
 */
var EventListener = /*#__PURE__*/function () {
  function EventListener(eventTarget, eventName, eventOptions) {
    _classCallCheck(this, EventListener);
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }
  return _createClass(EventListener, [{
    key: "connect",
    value: function connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      this.unorderedBindings["delete"](binding);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var extendedEvent = extendEvent(event);
      var _iterator = _createForOfIteratorHelper(this.bindings),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var binding = _step.value;
          if (extendedEvent.immediatePropagationStopped) {
            break;
          } else {
            binding.handleEvent(extendedEvent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "hasBindings",
    value: function hasBindings() {
      return this.unorderedBindings.size > 0;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
          rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  }]);
}();
function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var _stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        _stopImmediatePropagation.call(this);
      }
    });
  }
}
var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(application) {
    _classCallCheck(this, Dispatcher);
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }
  return _createClass(Dispatcher, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.connect();
        });
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach(function (eventListener) {
          return eventListener.disconnect();
        });
      }
    }
  }, {
    key: "eventListeners",
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    }
  }, {
    key: "bindingConnected",
    value: function bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
  }, {
    key: "bindingDisconnected",
    value: function bindingDisconnected(binding) {
      var clearEventListeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
      if (clearEventListeners) this.clearEventListenersForBinding(binding);
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "clearEventListenersForBinding",
    value: function clearEventListenersForBinding(binding) {
      var eventListener = this.fetchEventListenerForBinding(binding);
      if (!eventListener.hasBindings()) {
        eventListener.disconnect();
        this.removeMappedEventListenerFor(binding);
      }
    }
  }, {
    key: "removeMappedEventListenerFor",
    value: function removeMappedEventListenerFor(binding) {
      var eventTarget = binding.eventTarget,
        eventName = binding.eventName,
        eventOptions = binding.eventOptions;
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      eventListenerMap["delete"](cacheKey);
      if (eventListenerMap.size == 0) this.eventListenerMaps["delete"](eventTarget);
    }
  }, {
    key: "fetchEventListenerForBinding",
    value: function fetchEventListenerForBinding(binding) {
      var eventTarget = binding.eventTarget,
        eventName = binding.eventName,
        eventOptions = binding.eventOptions;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
  }, {
    key: "fetchEventListener",
    value: function fetchEventListener(eventTarget, eventName, eventOptions) {
      var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      var cacheKey = this.cacheKey(eventName, eventOptions);
      var eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
  }, {
    key: "createEventListener",
    value: function createEventListener(eventTarget, eventName, eventOptions) {
      var eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
  }, {
    key: "fetchEventListenerMapForEventTarget",
    value: function fetchEventListenerMapForEventTarget(eventTarget) {
      var eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(eventName, eventOptions) {
      var parts = [eventName];
      Object.keys(eventOptions).sort().forEach(function (key) {
        parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
      });
      return parts.join(":");
    }
  }]);
}();
var defaultActionDescriptorFilters = {
  stop: function stop(_ref) {
    var event = _ref.event,
      value = _ref.value;
    if (value) event.stopPropagation();
    return true;
  },
  prevent: function prevent(_ref2) {
    var event = _ref2.event,
      value = _ref2.value;
    if (value) event.preventDefault();
    return true;
  },
  self: function self(_ref3) {
    var event = _ref3.event,
      value = _ref3.value,
      element = _ref3.element;
    if (value) {
      return element === event.target;
    } else {
      return true;
    }
  }
};
var descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
function parseActionDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  var eventName = matches[2];
  var keyFilter = matches[3];
  if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
    eventName += ".".concat(keyFilter);
    keyFilter = "";
  }
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: eventName,
    eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
    identifier: matches[5],
    methodName: matches[6],
    keyFilter: matches[1] || keyFilter
  };
}
function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}
function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce(function (options, token) {
    return Object.assign(options, _defineProperty({}, token.replace(/^!/, ""), !/^!/.test(token)));
  }, {});
}
function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}
function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, function (_, _char) {
    return _char.toUpperCase();
  });
}
function namespaceCamelize(value) {
  return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
}
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, _char2) {
    return "-".concat(_char2.toLowerCase());
  });
}
function tokenize(value) {
  return value.match(/[^\s]+/g) || [];
}
function isSomething(object) {
  return object !== null && object !== undefined;
}
function hasProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
var allModifiers = ["meta", "ctrl", "alt", "shift"];
var Action = /*#__PURE__*/function () {
  function Action(element, index, descriptor, schema) {
    _classCallCheck(this, Action);
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
    this.keyFilter = descriptor.keyFilter || "";
    this.schema = schema;
  }
  return _createClass(Action, [{
    key: "toString",
    value: function toString() {
      var eventFilter = this.keyFilter ? ".".concat(this.keyFilter) : "";
      var eventTarget = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
      return "".concat(this.eventName).concat(eventFilter).concat(eventTarget, "->").concat(this.identifier, "#").concat(this.methodName);
    }
  }, {
    key: "shouldIgnoreKeyboardEvent",
    value: function shouldIgnoreKeyboardEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      var filters = this.keyFilter.split("+");
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      var standardFilter = filters.filter(function (key) {
        return !allModifiers.includes(key);
      })[0];
      if (!standardFilter) {
        return false;
      }
      if (!hasProperty(this.keyMappings, standardFilter)) {
        error("contains unknown key filter: ".concat(this.keyFilter));
      }
      return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
  }, {
    key: "shouldIgnoreMouseEvent",
    value: function shouldIgnoreMouseEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      var filters = [this.keyFilter];
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      return false;
    }
  }, {
    key: "params",
    get: function get() {
      var params = {};
      var pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"), "i");
      for (var _i = 0, _Array$from = Array.from(this.element.attributes); _i < _Array$from.length; _i++) {
        var _ref4 = _Array$from[_i];
        var name = _ref4.name;
        var value = _ref4.value;
        var match = name.match(pattern);
        var key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
  }, {
    key: "eventTargetName",
    get: function get() {
      return stringifyEventTarget(this.eventTarget);
    }
  }, {
    key: "keyMappings",
    get: function get() {
      return this.schema.keyMappings;
    }
  }, {
    key: "keyFilterDissatisfied",
    value: function keyFilterDissatisfied(event, filters) {
      var _allModifiers$map = allModifiers.map(function (modifier) {
          return filters.includes(modifier);
        }),
        _allModifiers$map2 = _slicedToArray(_allModifiers$map, 4),
        meta = _allModifiers$map2[0],
        ctrl = _allModifiers$map2[1],
        alt = _allModifiers$map2[2],
        shift = _allModifiers$map2[3];
      return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
  }], [{
    key: "forToken",
    value: function forToken(token, schema) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
  }]);
}();
var defaultEventNames = {
  a: function a() {
    return "click";
  },
  button: function button() {
    return "click";
  },
  form: function form() {
    return "submit";
  },
  details: function details() {
    return "toggle";
  },
  input: function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "input";
  },
  select: function select() {
    return "change";
  },
  textarea: function textarea() {
    return "input";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();
  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}
function error(message) {
  throw new Error(message);
}
function typecast(value) {
  try {
    return JSON.parse(value);
  } catch (o_O) {
    return value;
  }
}
var Binding = /*#__PURE__*/function () {
  function Binding(context, action) {
    _classCallCheck(this, Binding);
    this.context = context;
    this.action = action;
  }
  return _createClass(Binding, [{
    key: "index",
    get: function get() {
      return this.action.index;
    }
  }, {
    key: "eventTarget",
    get: function get() {
      return this.action.eventTarget;
    }
  }, {
    key: "eventOptions",
    get: function get() {
      return this.action.eventOptions;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var actionEvent = this.prepareActionEvent(event);
      if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
        this.invokeWithEvent(actionEvent);
      }
    }
  }, {
    key: "eventName",
    get: function get() {
      return this.action.eventName;
    }
  }, {
    key: "method",
    get: function get() {
      var method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
    }
  }, {
    key: "applyEventModifiers",
    value: function applyEventModifiers(event) {
      var element = this.action.element;
      var actionDescriptorFilters = this.context.application.actionDescriptorFilters;
      var controller = this.context.controller;
      var passes = true;
      for (var _i2 = 0, _Object$entries = Object.entries(this.eventOptions); _i2 < _Object$entries.length; _i2++) {
        var _ref5 = _Object$entries[_i2];
        var _ref6 = _slicedToArray(_ref5, 2);
        var name = _ref6[0];
        var value = _ref6[1];
        if (name in actionDescriptorFilters) {
          var filter = actionDescriptorFilters[name];
          passes = passes && filter({
            name: name,
            value: value,
            event: event,
            element: element,
            controller: controller
          });
        } else {
          continue;
        }
      }
      return passes;
    }
  }, {
    key: "prepareActionEvent",
    value: function prepareActionEvent(event) {
      return Object.assign(event, {
        params: this.action.params
      });
    }
  }, {
    key: "invokeWithEvent",
    value: function invokeWithEvent(event) {
      var target = event.target,
        currentTarget = event.currentTarget;
      try {
        this.method.call(this.controller, event);
        this.context.logDebugActivity(this.methodName, {
          event: event,
          target: target,
          currentTarget: currentTarget,
          action: this.methodName
        });
      } catch (error) {
        var identifier = this.identifier,
          controller = this.controller,
          element = this.element,
          index = this.index;
        var detail = {
          identifier: identifier,
          controller: controller,
          element: element,
          index: index,
          event: event
        };
        this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
      }
    }
  }, {
    key: "willBeInvokedByEvent",
    value: function willBeInvokedByEvent(event) {
      var eventTarget = event.target;
      if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
        return false;
      }
      if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
        return false;
      }
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "methodName",
    get: function get() {
      return this.action.methodName;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);
}();
var ElementObserver = /*#__PURE__*/function () {
  function ElementObserver(element, delegate) {
    var _this = this;
    _classCallCheck(this, ElementObserver);
    this.mutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    };
    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }
  return _createClass(ElementObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var matches = new Set(this.matchElementsInTree());
        for (var _i3 = 0, _Array$from2 = Array.from(this.elements); _i3 < _Array$from2.length; _i3++) {
          var element = _Array$from2[_i3];
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (var _i4 = 0, _Array$from3 = Array.from(matches); _i4 < _Array$from3.length; _i4++) {
          var _element2 = _Array$from3[_i4];
          this.addElement(_element2);
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator2 = _createForOfIteratorHelper(mutations),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mutation = _step2.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
  }, {
    key: "processAttributeChange",
    value: function processAttributeChange(element, attributeName) {
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
  }, {
    key: "processRemovedNodes",
    value: function processRemovedNodes(nodes) {
      for (var _i5 = 0, _Array$from4 = Array.from(nodes); _i5 < _Array$from4.length; _i5++) {
        var node = _Array$from4[_i5];
        var element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
  }, {
    key: "processAddedNodes",
    value: function processAddedNodes(nodes) {
      for (var _i6 = 0, _Array$from5 = Array.from(nodes); _i6 < _Array$from5.length; _i6++) {
        var node = _Array$from5[_i6];
        var element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return this.delegate.matchElement(element);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree() {
      var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
      return this.delegate.matchElementsInTree(tree);
    }
  }, {
    key: "processTree",
    value: function processTree(tree, processor) {
      var _iterator3 = _createForOfIteratorHelper(this.matchElementsInTree(tree)),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          processor.call(this, element);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "elementFromNode",
    value: function elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
  }, {
    key: "elementIsActive",
    value: function elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      if (this.elements.has(element)) {
        this.elements["delete"](element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  }]);
}();
var AttributeObserver = /*#__PURE__*/function () {
  function AttributeObserver(element, attributeName, delegate) {
    _classCallCheck(this, AttributeObserver);
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this);
  }
  return _createClass(AttributeObserver, [{
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "selector",
    get: function get() {
      return "[".concat(this.attributeName, "]");
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.elementObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var match = this.matchElement(tree) ? [tree] : [];
      var matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  }]);
}();
function _add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key)["delete"](value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);
  if (!values) {
    values = new Set();
    map.set(key, values);
  }
  return values;
}
function prune(map, key) {
  var values = map.get(key);
  if (values != null && values.size == 0) {
    map["delete"](key);
  }
}
var Multimap = /*#__PURE__*/function () {
  function Multimap() {
    _classCallCheck(this, Multimap);
    this.valuesByKey = new Map();
  }
  return _createClass(Multimap, [{
    key: "keys",
    get: function get() {
      return Array.from(this.valuesByKey.keys());
    }
  }, {
    key: "values",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    }
  }, {
    key: "size",
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _add(this.valuesByKey, key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      del(this.valuesByKey, key, value);
    }
  }, {
    key: "has",
    value: function has(key, value) {
      var values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.valuesByKey.has(key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      var sets = Array.from(this.valuesByKey.values());
      return sets.some(function (set) {
        return set.has(value);
      });
    }
  }, {
    key: "getValuesForKey",
    value: function getValuesForKey(key) {
      var values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          _key = _ref8[0],
          values = _ref8[1];
        return values.has(value);
      }).map(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          key = _ref10[0],
          _values = _ref10[1];
        return key;
      });
    }
  }]);
}();
var IndexedMultimap = /*#__PURE__*/function (_Multimap) {
  function IndexedMultimap() {
    var _this2;
    _classCallCheck(this, IndexedMultimap);
    _this2 = _callSuper(this, IndexedMultimap);
    _this2.keysByValue = new Map();
    return _this2;
  }
  _inherits(IndexedMultimap, _Multimap);
  return _createClass(IndexedMultimap, [{
    key: "values",
    get: function get() {
      return Array.from(this.keysByValue.keys());
    }
  }, {
    key: "add",
    value: function add(key, value) {
      _superPropGet(IndexedMultimap, "add", this, 3)([key, value]);
      _add(this.keysByValue, value, key);
    }
  }, {
    key: "delete",
    value: function _delete(key, value) {
      _superPropGet(IndexedMultimap, "delete", this, 3)([key, value]);
      del(this.keysByValue, value, key);
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.keysByValue.has(value);
    }
  }, {
    key: "getKeysForValue",
    value: function getKeysForValue(value) {
      var set = this.keysByValue.get(value);
      return set ? Array.from(set) : [];
    }
  }]);
}(Multimap);
var SelectorObserver = /*#__PURE__*/function () {
  function SelectorObserver(element, selector, delegate, details) {
    _classCallCheck(this, SelectorObserver);
    this._selector = selector;
    this.details = details;
    this.elementObserver = new ElementObserver(element, this);
    this.delegate = delegate;
    this.matchesByElement = new Multimap();
  }
  return _createClass(SelectorObserver, [{
    key: "started",
    get: function get() {
      return this.elementObserver.started;
    }
  }, {
    key: "selector",
    get: function get() {
      return this._selector;
    },
    set: function set(selector) {
      this._selector = selector;
      this.refresh();
    }
  }, {
    key: "start",
    value: function start() {
      this.elementObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.elementObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.elementObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.elementObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.elementObserver.element;
    }
  }, {
    key: "matchElement",
    value: function matchElement(element) {
      var selector = this.selector;
      if (selector) {
        var matches = element.matches(selector);
        if (this.delegate.selectorMatchElement) {
          return matches && this.delegate.selectorMatchElement(element, this.details);
        }
        return matches;
      } else {
        return false;
      }
    }
  }, {
    key: "matchElementsInTree",
    value: function matchElementsInTree(tree) {
      var _this3 = this;
      var selector = this.selector;
      if (selector) {
        var match = this.matchElement(tree) ? [tree] : [];
        var matches = Array.from(tree.querySelectorAll(selector)).filter(function (match) {
          return _this3.matchElement(match);
        });
        return match.concat(matches);
      } else {
        return [];
      }
    }
  }, {
    key: "elementMatched",
    value: function elementMatched(element) {
      var selector = this.selector;
      if (selector) {
        this.selectorMatched(element, selector);
      }
    }
  }, {
    key: "elementUnmatched",
    value: function elementUnmatched(element) {
      var selectors = this.matchesByElement.getKeysForValue(element);
      var _iterator4 = _createForOfIteratorHelper(selectors),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var selector = _step4.value;
          this.selectorUnmatched(element, selector);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "elementAttributeChanged",
    value: function elementAttributeChanged(element, _attributeName) {
      var selector = this.selector;
      if (selector) {
        var matches = this.matchElement(element);
        var matchedBefore = this.matchesByElement.has(selector, element);
        if (matches && !matchedBefore) {
          this.selectorMatched(element, selector);
        } else if (!matches && matchedBefore) {
          this.selectorUnmatched(element, selector);
        }
      }
    }
  }, {
    key: "selectorMatched",
    value: function selectorMatched(element, selector) {
      this.delegate.selectorMatched(element, selector, this.details);
      this.matchesByElement.add(selector, element);
    }
  }, {
    key: "selectorUnmatched",
    value: function selectorUnmatched(element, selector) {
      this.delegate.selectorUnmatched(element, selector, this.details);
      this.matchesByElement["delete"](selector, element);
    }
  }]);
}();
var StringMapObserver = /*#__PURE__*/function () {
  function StringMapObserver(element, delegate) {
    var _this4 = this;
    _classCallCheck(this, StringMapObserver);
    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this4.processMutations(mutations);
    });
  }
  return _createClass(StringMapObserver, [{
    key: "start",
    value: function start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeOldValue: true
        });
        this.refresh();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.started) {
        var _iterator5 = _createForOfIteratorHelper(this.knownAttributeNames),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var attributeName = _step5.value;
            this.refreshAttribute(attributeName, null);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "processMutations",
    value: function processMutations(mutations) {
      if (this.started) {
        var _iterator6 = _createForOfIteratorHelper(mutations),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var mutation = _step6.value;
            this.processMutation(mutation);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }
  }, {
    key: "processMutation",
    value: function processMutation(mutation) {
      var attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
  }, {
    key: "refreshAttribute",
    value: function refreshAttribute(attributeName, oldValue) {
      var key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        var value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          var _oldValue = this.stringMap.get(attributeName);
          this.stringMap["delete"](attributeName);
          if (_oldValue) this.stringMapKeyRemoved(key, attributeName, _oldValue);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
  }, {
    key: "knownAttributeNames",
    get: function get() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
  }, {
    key: "currentAttributeNames",
    get: function get() {
      return Array.from(this.element.attributes).map(function (attribute) {
        return attribute.name;
      });
    }
  }, {
    key: "recordedAttributeNames",
    get: function get() {
      return Array.from(this.stringMap.keys());
    }
  }]);
}();
var TokenListObserver = /*#__PURE__*/function () {
  function TokenListObserver(element, attributeName, delegate) {
    _classCallCheck(this, TokenListObserver);
    this.attributeObserver = new AttributeObserver(element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new Multimap();
  }
  return _createClass(TokenListObserver, [{
    key: "started",
    get: function get() {
      return this.attributeObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.attributeObserver.start();
    }
  }, {
    key: "pause",
    value: function pause(callback) {
      this.attributeObserver.pause(callback);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.attributeObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.attributeObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.attributeObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.attributeObserver.attributeName;
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(element) {
      var _this$refreshTokensFo = this.refreshTokensForElement(element),
        _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2),
        unmatchedTokens = _this$refreshTokensFo2[0],
        matchedTokens = _this$refreshTokensFo2[1];
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
  }, {
    key: "tokensMatched",
    value: function tokensMatched(tokens) {
      var _this5 = this;
      tokens.forEach(function (token) {
        return _this5.tokenMatched(token);
      });
    }
  }, {
    key: "tokensUnmatched",
    value: function tokensUnmatched(tokens) {
      var _this6 = this;
      tokens.forEach(function (token) {
        return _this6.tokenUnmatched(token);
      });
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement["delete"](token.element, token);
    }
  }, {
    key: "refreshTokensForElement",
    value: function refreshTokensForElement(element) {
      var previousTokens = this.tokensByElement.getValuesForKey(element);
      var currentTokens = this.readTokensForElement(element);
      var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
          previousToken = _ref12[0],
          currentToken = _ref12[1];
        return !tokensAreEqual(previousToken, currentToken);
      });
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
  }, {
    key: "readTokensForElement",
    value: function readTokensForElement(element) {
      var attributeName = this.attributeName;
      var tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  }]);
}();
function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}
function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}
function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}
var ValueListObserver = /*#__PURE__*/function () {
  function ValueListObserver(element, attributeName, delegate) {
    _classCallCheck(this, ValueListObserver);
    this.tokenListObserver = new TokenListObserver(element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }
  return _createClass(ValueListObserver, [{
    key: "started",
    get: function get() {
      return this.tokenListObserver.started;
    }
  }, {
    key: "start",
    value: function start() {
      this.tokenListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenListObserver.stop();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.tokenListObserver.refresh();
    }
  }, {
    key: "element",
    get: function get() {
      return this.tokenListObserver.element;
    }
  }, {
    key: "attributeName",
    get: function get() {
      return this.tokenListObserver.attributeName;
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(token) {
      var element = token.element;
      var _this$fetchParseResul = this.fetchParseResultForToken(token),
        value = _this$fetchParseResul.value;
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(token) {
      var element = token.element;
      var _this$fetchParseResul2 = this.fetchParseResultForToken(token),
        value = _this$fetchParseResul2.value;
      if (value) {
        this.fetchValuesByTokenForElement(element)["delete"](token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
  }, {
    key: "fetchParseResultForToken",
    value: function fetchParseResultForToken(token) {
      var parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
  }, {
    key: "fetchValuesByTokenForElement",
    value: function fetchValuesByTokenForElement(element) {
      var valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
  }, {
    key: "parseToken",
    value: function parseToken(token) {
      try {
        var value = this.delegate.parseValueForToken(token);
        return {
          value: value
        };
      } catch (error) {
        return {
          error: error
        };
      }
    }
  }]);
}();
var BindingObserver = /*#__PURE__*/function () {
  function BindingObserver(context, delegate) {
    _classCallCheck(this, BindingObserver);
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }
  return _createClass(BindingObserver, [{
    key: "start",
    value: function start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "actionAttribute",
    get: function get() {
      return this.schema.actionAttribute;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "bindings",
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    }
  }, {
    key: "connectAction",
    value: function connectAction(action) {
      var binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
  }, {
    key: "disconnectAction",
    value: function disconnectAction(action) {
      var binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction["delete"](action);
        this.delegate.bindingDisconnected(binding);
      }
    }
  }, {
    key: "disconnectAllActions",
    value: function disconnectAllActions() {
      var _this7 = this;
      this.bindings.forEach(function (binding) {
        return _this7.delegate.bindingDisconnected(binding, true);
      });
      this.bindingsByAction.clear();
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var action = Action.forToken(token, this.schema);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, action) {
      this.connectAction(action);
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  }]);
}();
var ValueObserver = /*#__PURE__*/function () {
  function ValueObserver(context, receiver) {
    _classCallCheck(this, ValueObserver);
    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
  }
  return _createClass(ValueObserver, [{
    key: "start",
    value: function start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stringMapObserver.stop();
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "controller",
    get: function get() {
      return this.context.controller;
    }
  }, {
    key: "getStringMapKeyForAttribute",
    value: function getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
  }, {
    key: "stringMapKeyAdded",
    value: function stringMapKeyAdded(key, attributeName) {
      var descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
  }, {
    key: "stringMapValueChanged",
    value: function stringMapValueChanged(value, name, oldValue) {
      var descriptor = this.valueDescriptorNameMap[name];
      if (value === null) return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
  }, {
    key: "stringMapKeyRemoved",
    value: function stringMapKeyRemoved(key, attributeName, oldValue) {
      var descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
  }, {
    key: "invokeChangedCallbacksForDefaultValues",
    value: function invokeChangedCallbacksForDefaultValues() {
      var _iterator7 = _createForOfIteratorHelper(this.valueDescriptors),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _ref13 = _step7.value;
          var key = _ref13.key;
          var name = _ref13.name;
          var defaultValue = _ref13.defaultValue;
          var writer = _ref13.writer;
          if (defaultValue != undefined && !this.controller.data.has(key)) {
            this.invokeChangedCallback(name, writer(defaultValue), undefined);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "invokeChangedCallback",
    value: function invokeChangedCallback(name, rawValue, rawOldValue) {
      var changedMethodName = "".concat(name, "Changed");
      var changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        var descriptor = this.valueDescriptorNameMap[name];
        try {
          var value = descriptor.reader(rawValue);
          var oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error) {
          if (error instanceof TypeError) {
            error.message = "Stimulus Value \"".concat(this.context.identifier, ".").concat(descriptor.name, "\" - ").concat(error.message);
          }
          throw error;
        }
      }
    }
  }, {
    key: "valueDescriptors",
    get: function get() {
      var valueDescriptorMap = this.valueDescriptorMap;
      return Object.keys(valueDescriptorMap).map(function (key) {
        return valueDescriptorMap[key];
      });
    }
  }, {
    key: "valueDescriptorNameMap",
    get: function get() {
      var _this8 = this;
      var descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach(function (key) {
        var descriptor = _this8.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
  }, {
    key: "hasValue",
    value: function hasValue(attributeName) {
      var descriptor = this.valueDescriptorNameMap[attributeName];
      var hasMethodName = "has".concat(capitalize(descriptor.name));
      return this.receiver[hasMethodName];
    }
  }]);
}();
var TargetObserver = /*#__PURE__*/function () {
  function TargetObserver(context, delegate) {
    _classCallCheck(this, TargetObserver);
    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap();
  }
  return _createClass(TargetObserver, [{
    key: "start",
    value: function start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
  }, {
    key: "tokenMatched",
    value: function tokenMatched(_ref14) {
      var element = _ref14.element,
        name = _ref14.content;
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
  }, {
    key: "tokenUnmatched",
    value: function tokenUnmatched(_ref15) {
      var element = _ref15.element,
        name = _ref15.content;
      this.disconnectTarget(element, name);
    }
  }, {
    key: "connectTarget",
    value: function connectTarget(element, name) {
      var _this9 = this;
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this9.delegate.targetConnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectTarget",
    value: function disconnectTarget(element, name) {
      var _this10 = this;
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName["delete"](name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this10.delegate.targetDisconnected(element, name);
        });
      }
    }
  }, {
    key: "disconnectAllTargets",
    value: function disconnectAllTargets() {
      var _iterator8 = _createForOfIteratorHelper(this.targetsByName.keys),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var name = _step8.value;
          var _iterator9 = _createForOfIteratorHelper(this.targetsByName.getValuesForKey(name)),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var element = _step9.value;
              this.disconnectTarget(element, name);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "attributeName",
    get: function get() {
      return "data-".concat(this.context.identifier, "-target");
    }
  }, {
    key: "element",
    get: function get() {
      return this.context.element;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }]);
}();
function readInheritableStaticArrayValues(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (values, constructor) {
    getOwnStaticArrayValues(constructor, propertyName).forEach(function (name) {
      return values.add(name);
    });
    return values;
  }, new Set()));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
  var ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce(function (pairs, constructor) {
    pairs.push.apply(pairs, _toConsumableArray(getOwnStaticObjectPairs(constructor, propertyName)));
    return pairs;
  }, []);
}
function getAncestorsForConstructor(constructor) {
  var ancestors = [];
  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }
  return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
  var definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
  var definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(function (key) {
    return [key, definition[key]];
  }) : [];
}
var OutletObserver = /*#__PURE__*/function () {
  function OutletObserver(context, delegate) {
    _classCallCheck(this, OutletObserver);
    this.started = false;
    this.context = context;
    this.delegate = delegate;
    this.outletsByName = new Multimap();
    this.outletElementsByName = new Multimap();
    this.selectorObserverMap = new Map();
    this.attributeObserverMap = new Map();
  }
  return _createClass(OutletObserver, [{
    key: "start",
    value: function start() {
      var _this11 = this;
      if (!this.started) {
        this.outletDefinitions.forEach(function (outletName) {
          _this11.setupSelectorObserverForOutlet(outletName);
          _this11.setupAttributeObserverForOutlet(outletName);
        });
        this.started = true;
        this.dependentContexts.forEach(function (context) {
          return context.refresh();
        });
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.selectorObserverMap.forEach(function (observer) {
        return observer.refresh();
      });
      this.attributeObserverMap.forEach(function (observer) {
        return observer.refresh();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.started = false;
        this.disconnectAllOutlets();
        this.stopSelectorObservers();
        this.stopAttributeObservers();
      }
    }
  }, {
    key: "stopSelectorObservers",
    value: function stopSelectorObservers() {
      if (this.selectorObserverMap.size > 0) {
        this.selectorObserverMap.forEach(function (observer) {
          return observer.stop();
        });
        this.selectorObserverMap.clear();
      }
    }
  }, {
    key: "stopAttributeObservers",
    value: function stopAttributeObservers() {
      if (this.attributeObserverMap.size > 0) {
        this.attributeObserverMap.forEach(function (observer) {
          return observer.stop();
        });
        this.attributeObserverMap.clear();
      }
    }
  }, {
    key: "selectorMatched",
    value: function selectorMatched(element, _selector, _ref16) {
      var outletName = _ref16.outletName;
      var outlet = this.getOutlet(element, outletName);
      if (outlet) {
        this.connectOutlet(outlet, element, outletName);
      }
    }
  }, {
    key: "selectorUnmatched",
    value: function selectorUnmatched(element, _selector, _ref17) {
      var outletName = _ref17.outletName;
      var outlet = this.getOutletFromMap(element, outletName);
      if (outlet) {
        this.disconnectOutlet(outlet, element, outletName);
      }
    }
  }, {
    key: "selectorMatchElement",
    value: function selectorMatchElement(element, _ref18) {
      var outletName = _ref18.outletName;
      var selector = this.selector(outletName);
      var hasOutlet = this.hasOutlet(element, outletName);
      var hasOutletController = element.matches("[".concat(this.schema.controllerAttribute, "~=").concat(outletName, "]"));
      if (selector) {
        return hasOutlet && hasOutletController && element.matches(selector);
      } else {
        return false;
      }
    }
  }, {
    key: "elementMatchedAttribute",
    value: function elementMatchedAttribute(_element, attributeName) {
      var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
  }, {
    key: "elementAttributeValueChanged",
    value: function elementAttributeValueChanged(_element, attributeName) {
      var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
  }, {
    key: "elementUnmatchedAttribute",
    value: function elementUnmatchedAttribute(_element, attributeName) {
      var outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
  }, {
    key: "connectOutlet",
    value: function connectOutlet(outlet, element, outletName) {
      var _this12 = this;
      var _a;
      if (!this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.add(outletName, outlet);
        this.outletElementsByName.add(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this12.delegate.outletConnected(outlet, element, outletName);
        });
      }
    }
  }, {
    key: "disconnectOutlet",
    value: function disconnectOutlet(outlet, element, outletName) {
      var _this13 = this;
      var _a;
      if (this.outletElementsByName.has(outletName, element)) {
        this.outletsByName["delete"](outletName, outlet);
        this.outletElementsByName["delete"](outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(function () {
          return _this13.delegate.outletDisconnected(outlet, element, outletName);
        });
      }
    }
  }, {
    key: "disconnectAllOutlets",
    value: function disconnectAllOutlets() {
      var _iterator10 = _createForOfIteratorHelper(this.outletElementsByName.keys),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var outletName = _step10.value;
          var _iterator11 = _createForOfIteratorHelper(this.outletElementsByName.getValuesForKey(outletName)),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var element = _step11.value;
              var _iterator12 = _createForOfIteratorHelper(this.outletsByName.getValuesForKey(outletName)),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var outlet = _step12.value;
                  this.disconnectOutlet(outlet, element, outletName);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  }, {
    key: "updateSelectorObserverForOutlet",
    value: function updateSelectorObserverForOutlet(outletName) {
      var observer = this.selectorObserverMap.get(outletName);
      if (observer) {
        observer.selector = this.selector(outletName);
      }
    }
  }, {
    key: "setupSelectorObserverForOutlet",
    value: function setupSelectorObserverForOutlet(outletName) {
      var selector = this.selector(outletName);
      var selectorObserver = new SelectorObserver(document.body, selector, this, {
        outletName: outletName
      });
      this.selectorObserverMap.set(outletName, selectorObserver);
      selectorObserver.start();
    }
  }, {
    key: "setupAttributeObserverForOutlet",
    value: function setupAttributeObserverForOutlet(outletName) {
      var attributeName = this.attributeNameForOutletName(outletName);
      var attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
      this.attributeObserverMap.set(outletName, attributeObserver);
      attributeObserver.start();
    }
  }, {
    key: "selector",
    value: function selector(outletName) {
      return this.scope.outlets.getSelectorForOutletName(outletName);
    }
  }, {
    key: "attributeNameForOutletName",
    value: function attributeNameForOutletName(outletName) {
      return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
  }, {
    key: "getOutletNameFromOutletAttributeName",
    value: function getOutletNameFromOutletAttributeName(attributeName) {
      var _this14 = this;
      return this.outletDefinitions.find(function (outletName) {
        return _this14.attributeNameForOutletName(outletName) === attributeName;
      });
    }
  }, {
    key: "outletDependencies",
    get: function get() {
      var dependencies = new Multimap();
      this.router.modules.forEach(function (module) {
        var constructor = module.definition.controllerConstructor;
        var outlets = readInheritableStaticArrayValues(constructor, "outlets");
        outlets.forEach(function (outlet) {
          return dependencies.add(outlet, module.identifier);
        });
      });
      return dependencies;
    }
  }, {
    key: "outletDefinitions",
    get: function get() {
      return this.outletDependencies.getKeysForValue(this.identifier);
    }
  }, {
    key: "dependentControllerIdentifiers",
    get: function get() {
      return this.outletDependencies.getValuesForKey(this.identifier);
    }
  }, {
    key: "dependentContexts",
    get: function get() {
      var identifiers = this.dependentControllerIdentifiers;
      return this.router.contexts.filter(function (context) {
        return identifiers.includes(context.identifier);
      });
    }
  }, {
    key: "hasOutlet",
    value: function hasOutlet(element, outletName) {
      return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
  }, {
    key: "getOutlet",
    value: function getOutlet(element, outletName) {
      return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
  }, {
    key: "getOutletFromMap",
    value: function getOutletFromMap(element, outletName) {
      return this.outletsByName.getValuesForKey(outletName).find(function (outlet) {
        return outlet.element === element;
      });
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.context.schema;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.context.identifier;
    }
  }, {
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "router",
    get: function get() {
      return this.application.router;
    }
  }]);
}();
var Context = /*#__PURE__*/function () {
  function Context(module, scope) {
    var _this15 = this;
    _classCallCheck(this, Context);
    this.logDebugActivity = function (functionName) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var identifier = _this15.identifier,
        controller = _this15.controller,
        element = _this15.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      _this15.application.logDebugActivity(_this15.identifier, functionName, detail);
    };
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new BindingObserver(this, this.dispatcher);
    this.valueObserver = new ValueObserver(this, this.controller);
    this.targetObserver = new TargetObserver(this, this);
    this.outletObserver = new OutletObserver(this, this);
    try {
      this.controller.initialize();
      this.logDebugActivity("initialize");
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }
  return _createClass(Context, [{
    key: "connect",
    value: function connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      this.outletObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error) {
        this.handleError(error, "connecting controller");
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.outletObserver.refresh();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error) {
        this.handleError(error, "disconnecting controller");
      }
      this.outletObserver.stop();
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
  }, {
    key: "application",
    get: function get() {
      return this.module.application;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.module.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "dispatcher",
    get: function get() {
      return this.application.dispatcher;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "parentElement",
    get: function get() {
      return this.element.parentElement;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var identifier = this.identifier,
        controller = this.controller,
        element = this.element;
      detail = Object.assign({
        identifier: identifier,
        controller: controller,
        element: element
      }, detail);
      this.application.handleError(error, "Error ".concat(message), detail);
    }
  }, {
    key: "targetConnected",
    value: function targetConnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
    }
  }, {
    key: "targetDisconnected",
    value: function targetDisconnected(element, name) {
      this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
    }
  }, {
    key: "outletConnected",
    value: function outletConnected(outlet, element, name) {
      this.invokeControllerMethod("".concat(namespaceCamelize(name), "OutletConnected"), outlet, element);
    }
  }, {
    key: "outletDisconnected",
    value: function outletDisconnected(outlet, element, name) {
      this.invokeControllerMethod("".concat(namespaceCamelize(name), "OutletDisconnected"), outlet, element);
    }
  }, {
    key: "invokeControllerMethod",
    value: function invokeControllerMethod(methodName) {
      var controller = this.controller;
      if (typeof controller[methodName] == "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        controller[methodName].apply(controller, args);
      }
    }
  }]);
}();
function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
  var shadowConstructor = extend(constructor);
  var shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}
function getBlessedProperties(constructor) {
  var blessings = readInheritableStaticArrayValues(constructor, "blessings");
  return blessings.reduce(function (blessedProperties, blessing) {
    var properties = blessing(constructor);
    for (var key in properties) {
      var descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }
    return blessedProperties;
  }, {});
}
function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce(function (shadowProperties, key) {
    var descriptor = getShadowedDescriptor(prototype, properties, key);
    if (descriptor) {
      Object.assign(shadowProperties, _defineProperty({}, key, descriptor));
    }
    return shadowProperties;
  }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
  var shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  var shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
  if (!shadowedByValue) {
    var descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }
    return descriptor;
  }
}
var getOwnKeys = function () {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return function (object) {
      return [].concat(_toConsumableArray(Object.getOwnPropertyNames(object)), _toConsumableArray(Object.getOwnPropertySymbols(object)));
    };
  } else {
    return Object.getOwnPropertyNames;
  }
}();
var extend = function () {
  function extendWithReflect(constructor) {
    function extended() {
      return Reflect.construct(constructor, arguments, this instanceof extended ? this.constructor : void 0);
    }
    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }
  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };
    var b = extendWithReflect(a);
    b.prototype.a = function () {};
    return new b();
  }
  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return /*#__PURE__*/function (_constructor) {
        function extended() {
          _classCallCheck(this, extended);
          return _callSuper(this, extended, arguments);
        }
        _inherits(extended, _constructor);
        return _createClass(extended);
      }(constructor);
    };
  }
}();
function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor)
  };
}
var Module = /*#__PURE__*/function () {
  function Module(application, definition) {
    _classCallCheck(this, Module);
    this.application = application;
    this.definition = blessDefinition(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }
  return _createClass(Module, [{
    key: "identifier",
    get: function get() {
      return this.definition.identifier;
    }
  }, {
    key: "controllerConstructor",
    get: function get() {
      return this.definition.controllerConstructor;
    }
  }, {
    key: "contexts",
    get: function get() {
      return Array.from(this.connectedContexts);
    }
  }, {
    key: "connectContextForScope",
    value: function connectContextForScope(scope) {
      var context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
  }, {
    key: "disconnectContextForScope",
    value: function disconnectContextForScope(scope) {
      var context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts["delete"](context);
        context.disconnect();
      }
    }
  }, {
    key: "fetchContextForScope",
    value: function fetchContextForScope(scope) {
      var context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    }
  }]);
}();
var ClassMap = /*#__PURE__*/function () {
  function ClassMap(scope) {
    _classCallCheck(this, ClassMap);
    this.scope = scope;
  }
  return _createClass(ClassMap, [{
    key: "has",
    value: function has(name) {
      return this.data.has(this.getDataKey(name));
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.getAll(name)[0];
    }
  }, {
    key: "getAll",
    value: function getAll(name) {
      var tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
  }, {
    key: "getDataKey",
    value: function getDataKey(name) {
      return "".concat(name, "-class");
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }]);
}();
var DataMap = /*#__PURE__*/function () {
  function DataMap(scope) {
    _classCallCheck(this, DataMap);
    this.scope = scope;
  }
  return _createClass(DataMap, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "get",
    value: function get(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      var name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.has(key)) {
        var name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "getAttributeNameForKey",
    value: function getAttributeNameForKey(key) {
      return "data-".concat(this.identifier, "-").concat(dasherize(key));
    }
  }]);
}();
var Guide = /*#__PURE__*/function () {
  function Guide(logger) {
    _classCallCheck(this, Guide);
    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }
  return _createClass(Guide, [{
    key: "warn",
    value: function warn(object, key, message) {
      var warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  }]);
}();
function attributeValueContainsToken(attributeName, token) {
  return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}
var TargetSet = /*#__PURE__*/function () {
  function TargetSet(scope) {
    _classCallCheck(this, TargetSet);
    this.scope = scope;
  }
  return _createClass(TargetSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(targetName) {
      return this.find(targetName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this16 = this;
      for (var _len2 = arguments.length, targetNames = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        targetNames[_key3] = arguments[_key3];
      }
      return targetNames.reduce(function (target, targetName) {
        return target || _this16.findTarget(targetName) || _this16.findLegacyTarget(targetName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this17 = this;
      for (var _len3 = arguments.length, targetNames = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        targetNames[_key4] = arguments[_key4];
      }
      return targetNames.reduce(function (targets, targetName) {
        return [].concat(_toConsumableArray(targets), _toConsumableArray(_this17.findAllTargets(targetName)), _toConsumableArray(_this17.findAllLegacyTargets(targetName)));
      }, []);
    }
  }, {
    key: "findTarget",
    value: function findTarget(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
  }, {
    key: "findAllTargets",
    value: function findAllTargets(targetName) {
      var selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
  }, {
    key: "getSelectorForTargetName",
    value: function getSelectorForTargetName(targetName) {
      var attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
  }, {
    key: "findLegacyTarget",
    value: function findLegacyTarget(targetName) {
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
  }, {
    key: "findAllLegacyTargets",
    value: function findAllLegacyTargets(targetName) {
      var _this18 = this;
      var selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map(function (element) {
        return _this18.deprecate(element, targetName);
      });
    }
  }, {
    key: "getLegacySelectorForTargetName",
    value: function getLegacySelectorForTargetName(targetName) {
      var targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
  }, {
    key: "deprecate",
    value: function deprecate(element, targetName) {
      if (element) {
        var identifier = this.identifier;
        var attributeName = this.schema.targetAttribute;
        var revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, "=\"").concat(identifier, ".").concat(targetName, "\" with ").concat(revisedAttributeName, "=\"").concat(targetName, "\". ") + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
      }
      return element;
    }
  }, {
    key: "guide",
    get: function get() {
      return this.scope.guide;
    }
  }]);
}();
var OutletSet = /*#__PURE__*/function () {
  function OutletSet(scope, controllerElement) {
    _classCallCheck(this, OutletSet);
    this.scope = scope;
    this.controllerElement = controllerElement;
  }
  return _createClass(OutletSet, [{
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.scope.schema;
    }
  }, {
    key: "has",
    value: function has(outletName) {
      return this.find(outletName) != null;
    }
  }, {
    key: "find",
    value: function find() {
      var _this19 = this;
      for (var _len4 = arguments.length, outletNames = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
        outletNames[_key5] = arguments[_key5];
      }
      return outletNames.reduce(function (outlet, outletName) {
        return outlet || _this19.findOutlet(outletName);
      }, undefined);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var _this20 = this;
      for (var _len5 = arguments.length, outletNames = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
        outletNames[_key6] = arguments[_key6];
      }
      return outletNames.reduce(function (outlets, outletName) {
        return [].concat(_toConsumableArray(outlets), _toConsumableArray(_this20.findAllOutlets(outletName)));
      }, []);
    }
  }, {
    key: "getSelectorForOutletName",
    value: function getSelectorForOutletName(outletName) {
      var attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
      return this.controllerElement.getAttribute(attributeName);
    }
  }, {
    key: "findOutlet",
    value: function findOutlet(outletName) {
      var selector = this.getSelectorForOutletName(outletName);
      if (selector) return this.findElement(selector, outletName);
    }
  }, {
    key: "findAllOutlets",
    value: function findAllOutlets(outletName) {
      var selector = this.getSelectorForOutletName(outletName);
      return selector ? this.findAllElements(selector, outletName) : [];
    }
  }, {
    key: "findElement",
    value: function findElement(selector, outletName) {
      var _this21 = this;
      var elements = this.scope.queryElements(selector);
      return elements.filter(function (element) {
        return _this21.matchesElement(element, selector, outletName);
      })[0];
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector, outletName) {
      var _this22 = this;
      var elements = this.scope.queryElements(selector);
      return elements.filter(function (element) {
        return _this22.matchesElement(element, selector, outletName);
      });
    }
  }, {
    key: "matchesElement",
    value: function matchesElement(element, selector, outletName) {
      var controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
      return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
  }]);
}();
var Scope = /*#__PURE__*/function () {
  function Scope(schema, element, identifier, logger) {
    var _this23 = this;
    _classCallCheck(this, Scope);
    this.targets = new TargetSet(this);
    this.classes = new ClassMap(this);
    this.data = new DataMap(this);
    this.containsElement = function (element) {
      return element.closest(_this23.controllerSelector) === _this23.element;
    };
    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger);
    this.outlets = new OutletSet(this.documentScope, element);
  }
  return _createClass(Scope, [{
    key: "findElement",
    value: function findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
  }, {
    key: "findAllElements",
    value: function findAllElements(selector) {
      return [].concat(_toConsumableArray(this.element.matches(selector) ? [this.element] : []), _toConsumableArray(this.queryElements(selector).filter(this.containsElement)));
    }
  }, {
    key: "queryElements",
    value: function queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
  }, {
    key: "controllerSelector",
    get: function get() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
  }, {
    key: "isDocumentScope",
    get: function get() {
      return this.element === document.documentElement;
    }
  }, {
    key: "documentScope",
    get: function get() {
      return this.isDocumentScope ? this : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
  }]);
}();
var ScopeObserver = /*#__PURE__*/function () {
  function ScopeObserver(element, schema, delegate) {
    _classCallCheck(this, ScopeObserver);
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }
  return _createClass(ScopeObserver, [{
    key: "start",
    value: function start() {
      this.valueListObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.valueListObserver.stop();
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "parseValueForToken",
    value: function parseValueForToken(token) {
      var element = token.element,
        identifier = token.content;
      return this.parseValueForElementAndIdentifier(element, identifier);
    }
  }, {
    key: "parseValueForElementAndIdentifier",
    value: function parseValueForElementAndIdentifier(element, identifier) {
      var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      var scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    }
  }, {
    key: "elementMatchedValue",
    value: function elementMatchedValue(element, value) {
      var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
  }, {
    key: "elementUnmatchedValue",
    value: function elementUnmatchedValue(element, value) {
      var referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
  }, {
    key: "fetchScopesByIdentifierForElement",
    value: function fetchScopesByIdentifierForElement(element) {
      var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  }]);
}();
var Router = /*#__PURE__*/function () {
  function Router(application) {
    _classCallCheck(this, Router);
    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
    this.scopesByIdentifier = new Multimap();
    this.modulesByIdentifier = new Map();
  }
  return _createClass(Router, [{
    key: "element",
    get: function get() {
      return this.application.element;
    }
  }, {
    key: "schema",
    get: function get() {
      return this.application.schema;
    }
  }, {
    key: "logger",
    get: function get() {
      return this.application.logger;
    }
  }, {
    key: "controllerAttribute",
    get: function get() {
      return this.schema.controllerAttribute;
    }
  }, {
    key: "modules",
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    }
  }, {
    key: "contexts",
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    }
  }, {
    key: "start",
    value: function start() {
      this.scopeObserver.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scopeObserver.stop();
    }
  }, {
    key: "loadDefinition",
    value: function loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      var module = new Module(this.application, definition);
      this.connectModule(module);
      var afterLoad = definition.controllerConstructor.afterLoad;
      if (afterLoad) {
        afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
      }
    }
  }, {
    key: "unloadIdentifier",
    value: function unloadIdentifier(identifier) {
      var module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
  }, {
    key: "getContextForElementAndIdentifier",
    value: function getContextForElementAndIdentifier(element, identifier) {
      var module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find(function (context) {
          return context.element == element;
        });
      }
    }
  }, {
    key: "proposeToConnectScopeForElementAndIdentifier",
    value: function proposeToConnectScopeForElementAndIdentifier(element, identifier) {
      var scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
      if (scope) {
        this.scopeObserver.elementMatchedValue(scope.element, scope);
      } else {
        console.error("Couldn't find or create scope for identifier: \"".concat(identifier, "\" and element:"), element);
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      this.application.handleError(error, message, detail);
    }
  }, {
    key: "createScopeForElementAndIdentifier",
    value: function createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
  }, {
    key: "scopeConnected",
    value: function scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    }
  }, {
    key: "scopeDisconnected",
    value: function scopeDisconnected(scope) {
      this.scopesByIdentifier["delete"](scope.identifier, scope);
      var module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
  }, {
    key: "connectModule",
    value: function connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.connectContextForScope(scope);
      });
    }
  }, {
    key: "disconnectModule",
    value: function disconnectModule(module) {
      this.modulesByIdentifier["delete"](module.identifier);
      var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach(function (scope) {
        return module.disconnectContextForScope(scope);
      });
    }
  }]);
}();
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: function targetAttributeForScope(identifier) {
    return "data-".concat(identifier, "-target");
  },
  outletAttributeForScope: function outletAttributeForScope(identifier, outlet) {
    return "data-".concat(identifier, "-").concat(outlet, "-outlet");
  },
  keyMappings: Object.assign(Object.assign({
    enter: "Enter",
    tab: "Tab",
    esc: "Escape",
    space: " ",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    home: "Home",
    end: "End",
    page_up: "PageUp",
    page_down: "PageDown"
  }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map(function (c) {
    return [c, c];
  }))), objectFromEntries("0123456789".split("").map(function (n) {
    return [n, n];
  })))
};
function objectFromEntries(array) {
  return array.reduce(function (memo, _ref19) {
    var _ref20 = _slicedToArray(_ref19, 2),
      k = _ref20[0],
      v = _ref20[1];
    return Object.assign(Object.assign({}, memo), _defineProperty({}, k, v));
  }, {});
}
var Application = /*#__PURE__*/function () {
  function Application() {
    var _this24 = this;
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;
    _classCallCheck(this, Application);
    this.logger = console;
    this.debug = false;
    this.logDebugActivity = function (identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (_this24.debug) {
        _this24.logFormattedMessage(identifier, functionName, detail);
      }
    };
    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this);
    this.router = new Router(this);
    this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
  }
  return _createClass(Application, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return domReady();
            case 2:
              this.logDebugActivity("application", "starting");
              this.dispatcher.start();
              this.router.start();
              this.logDebugActivity("application", "start");
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
  }, {
    key: "register",
    value: function register(identifier, controllerConstructor) {
      this.load({
        identifier: identifier,
        controllerConstructor: controllerConstructor
      });
    }
  }, {
    key: "registerActionOption",
    value: function registerActionOption(name, filter) {
      this.actionDescriptorFilters[name] = filter;
    }
  }, {
    key: "load",
    value: function load(head) {
      var _this25 = this;
      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key7 = 1; _key7 < _len6; _key7++) {
        rest[_key7 - 1] = arguments[_key7];
      }
      var definitions = Array.isArray(head) ? head : [head].concat(rest);
      definitions.forEach(function (definition) {
        if (definition.controllerConstructor.shouldLoad) {
          _this25.router.loadDefinition(definition);
        }
      });
    }
  }, {
    key: "unload",
    value: function unload(head) {
      var _this26 = this;
      for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key8 = 1; _key8 < _len7; _key8++) {
        rest[_key8 - 1] = arguments[_key8];
      }
      var identifiers = Array.isArray(head) ? head : [head].concat(rest);
      identifiers.forEach(function (identifier) {
        return _this26.router.unloadIdentifier(identifier);
      });
    }
  }, {
    key: "controllers",
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    }
  }, {
    key: "getControllerForElementAndIdentifier",
    value: function getControllerForElementAndIdentifier(element, identifier) {
      var context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
  }, {
    key: "handleError",
    value: function handleError(error, message, detail) {
      var _a;
      this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
    }
  }, {
    key: "logFormattedMessage",
    value: function logFormattedMessage(identifier, functionName) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      detail = Object.assign({
        application: this
      }, detail);
      this.logger.groupCollapsed("".concat(identifier, " #").concat(functionName));
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  }], [{
    key: "start",
    value: function start(element, schema) {
      var application = new this(element, schema);
      application.start();
      return application;
    }
  }]);
}();
function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return resolve();
      });
    } else {
      resolve();
    }
  });
}
function ClassPropertiesBlessing(constructor) {
  var classes = readInheritableStaticArrayValues(constructor, "classes");
  return classes.reduce(function (properties, classDefinition) {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}
function propertiesForClassDefinition(key) {
  return _defineProperty(_defineProperty(_defineProperty({}, "".concat(key, "Class"), {
    get: function get() {
      var classes = this.classes;
      if (classes.has(key)) {
        return classes.get(key);
      } else {
        var attribute = classes.getAttributeName(key);
        throw new Error("Missing attribute \"".concat(attribute, "\""));
      }
    }
  }), "".concat(key, "Classes"), {
    get: function get() {
      return this.classes.getAll(key);
    }
  }), "has".concat(capitalize(key), "Class"), {
    get: function get() {
      return this.classes.has(key);
    }
  });
}
function OutletPropertiesBlessing(constructor) {
  var outlets = readInheritableStaticArrayValues(constructor, "outlets");
  return outlets.reduce(function (properties, outletDefinition) {
    return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
  }, {});
}
function getOutletController(controller, element, identifier) {
  return controller.application.getControllerForElementAndIdentifier(element, identifier);
}
function getControllerAndEnsureConnectedScope(controller, element, outletName) {
  var outletController = getOutletController(controller, element, outletName);
  if (outletController) return outletController;
  controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
  outletController = getOutletController(controller, element, outletName);
  if (outletController) return outletController;
}
function propertiesForOutletDefinition(name) {
  var camelizedName = namespaceCamelize(name);
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(camelizedName, "Outlet"), {
    get: function get() {
      var outletElement = this.outlets.find(name);
      var selector = this.outlets.getSelectorForOutletName(name);
      if (outletElement) {
        var outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
        if (outletController) return outletController;
        throw new Error("The provided outlet element is missing an outlet controller \"".concat(name, "\" instance for host controller \"").concat(this.identifier, "\""));
      }
      throw new Error("Missing outlet element \"".concat(name, "\" for host controller \"").concat(this.identifier, "\". Stimulus couldn't find a matching outlet element using selector \"").concat(selector, "\"."));
    }
  }), "".concat(camelizedName, "Outlets"), {
    get: function get() {
      var _this27 = this;
      var outlets = this.outlets.findAll(name);
      if (outlets.length > 0) {
        return outlets.map(function (outletElement) {
          var outletController = getControllerAndEnsureConnectedScope(_this27, outletElement, name);
          if (outletController) return outletController;
          console.warn("The provided outlet element is missing an outlet controller \"".concat(name, "\" instance for host controller \"").concat(_this27.identifier, "\""), outletElement);
        }).filter(function (controller) {
          return controller;
        });
      }
      return [];
    }
  }), "".concat(camelizedName, "OutletElement"), {
    get: function get() {
      var outletElement = this.outlets.find(name);
      var selector = this.outlets.getSelectorForOutletName(name);
      if (outletElement) {
        return outletElement;
      } else {
        throw new Error("Missing outlet element \"".concat(name, "\" for host controller \"").concat(this.identifier, "\". Stimulus couldn't find a matching outlet element using selector \"").concat(selector, "\"."));
      }
    }
  }), "".concat(camelizedName, "OutletElements"), {
    get: function get() {
      return this.outlets.findAll(name);
    }
  }), "has".concat(capitalize(camelizedName), "Outlet"), {
    get: function get() {
      return this.outlets.has(name);
    }
  });
}
function TargetPropertiesBlessing(constructor) {
  var targets = readInheritableStaticArrayValues(constructor, "targets");
  return targets.reduce(function (properties, targetDefinition) {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}
function propertiesForTargetDefinition(name) {
  return _defineProperty(_defineProperty(_defineProperty({}, "".concat(name, "Target"), {
    get: function get() {
      var target = this.targets.find(name);
      if (target) {
        return target;
      } else {
        throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
      }
    }
  }), "".concat(name, "Targets"), {
    get: function get() {
      return this.targets.findAll(name);
    }
  }), "has".concat(capitalize(name), "Target"), {
    get: function get() {
      return this.targets.has(name);
    }
  });
}
function ValuePropertiesBlessing(constructor) {
  var valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
  var propertyDescriptorMap = {
    valueDescriptorMap: {
      get: function get() {
        var _this28 = this;
        return valueDefinitionPairs.reduce(function (result, valueDefinitionPair) {
          var valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, _this28.identifier);
          var attributeName = _this28.data.getAttributeNameForKey(valueDescriptor.key);
          return Object.assign(result, _defineProperty({}, attributeName, valueDescriptor));
        }, {});
      }
    }
  };
  return valueDefinitionPairs.reduce(function (properties, valueDefinitionPair) {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
  var definition = parseValueDefinitionPair(valueDefinitionPair, controller);
  var key = definition.key,
    name = definition.name,
    read = definition.reader,
    write = definition.writer;
  return _defineProperty(_defineProperty({}, name, {
    get: function get() {
      var value = this.data.get(key);
      if (value !== null) {
        return read(value);
      } else {
        return definition.defaultValue;
      }
    },
    set: function set(value) {
      if (value === undefined) {
        this.data["delete"](key);
      } else {
        this.data.set(key, write(value));
      }
    }
  }), "has".concat(capitalize(name)), {
    get: function get() {
      return this.data.has(key) || definition.hasCustomDefaultValue;
    }
  });
}
function parseValueDefinitionPair(_ref25, controller) {
  var _ref26 = _slicedToArray(_ref25, 2),
    token = _ref26[0],
    typeDefinition = _ref26[1];
  return valueDescriptorForTokenAndTypeDefinition({
    controller: controller,
    token: token,
    typeDefinition: typeDefinition
  });
}
function parseValueTypeConstant(constant) {
  switch (constant) {
    case Array:
      return "array";
    case Boolean:
      return "boolean";
    case Number:
      return "number";
    case Object:
      return "object";
    case String:
      return "string";
  }
}
function parseValueTypeDefault(defaultValue) {
  switch (_typeof(defaultValue)) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
  }
  if (Array.isArray(defaultValue)) return "array";
  if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}
function parseValueTypeObject(payload) {
  var controller = payload.controller,
    token = payload.token,
    typeObject = payload.typeObject;
  var hasType = isSomething(typeObject.type);
  var hasDefault = isSomething(typeObject["default"]);
  var fullObject = hasType && hasDefault;
  var onlyType = hasType && !hasDefault;
  var onlyDefault = !hasType && hasDefault;
  var typeFromObject = parseValueTypeConstant(typeObject.type);
  var typeFromDefaultValue = parseValueTypeDefault(payload.typeObject["default"]);
  if (onlyType) return typeFromObject;
  if (onlyDefault) return typeFromDefaultValue;
  if (typeFromObject !== typeFromDefaultValue) {
    var propertyPath = controller ? "".concat(controller, ".").concat(token) : token;
    throw new Error("The specified default value for the Stimulus Value \"".concat(propertyPath, "\" must match the defined type \"").concat(typeFromObject, "\". The provided default value of \"").concat(typeObject["default"], "\" is of type \"").concat(typeFromDefaultValue, "\"."));
  }
  if (fullObject) return typeFromObject;
}
function parseValueTypeDefinition(payload) {
  var controller = payload.controller,
    token = payload.token,
    typeDefinition = payload.typeDefinition;
  var typeObject = {
    controller: controller,
    token: token,
    typeObject: typeDefinition
  };
  var typeFromObject = parseValueTypeObject(typeObject);
  var typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
  var typeFromConstant = parseValueTypeConstant(typeDefinition);
  var type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type) return type;
  var propertyPath = controller ? "".concat(controller, ".").concat(typeDefinition) : token;
  throw new Error("Unknown value type \"".concat(propertyPath, "\" for \"").concat(token, "\" value"));
}
function defaultValueForDefinition(typeDefinition) {
  var constant = parseValueTypeConstant(typeDefinition);
  if (constant) return defaultValuesByType[constant];
  var hasDefault = hasProperty(typeDefinition, "default");
  var hasType = hasProperty(typeDefinition, "type");
  var typeObject = typeDefinition;
  if (hasDefault) return typeObject["default"];
  if (hasType) {
    var type = typeObject.type;
    var constantFromType = parseValueTypeConstant(type);
    if (constantFromType) return defaultValuesByType[constantFromType];
  }
  return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(payload) {
  var token = payload.token,
    typeDefinition = payload.typeDefinition;
  var key = "".concat(dasherize(token), "-value");
  var type = parseValueTypeDefinition(payload);
  return {
    type: type,
    key: key,
    name: camelize(key),
    get defaultValue() {
      return defaultValueForDefinition(typeDefinition);
    },
    get hasCustomDefaultValue() {
      return parseValueTypeDefault(typeDefinition) !== undefined;
    },
    reader: readers[type],
    writer: writers[type] || writers["default"]
  };
}
var defaultValuesByType = {
  get array() {
    return [];
  },
  "boolean": false,
  number: 0,
  get object() {
    return {};
  },
  string: ""
};
var readers = {
  array: function array(value) {
    var array = JSON.parse(value);
    if (!Array.isArray(array)) {
      throw new TypeError("expected value of type \"array\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(array), "\""));
    }
    return array;
  },
  "boolean": function boolean(value) {
    return !(value == "0" || String(value).toLowerCase() == "false");
  },
  number: function number(value) {
    return Number(value.replace(/_/g, ""));
  },
  object: function object(value) {
    var object = JSON.parse(value);
    if (object === null || _typeof(object) != "object" || Array.isArray(object)) {
      throw new TypeError("expected value of type \"object\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(object), "\""));
    }
    return object;
  },
  string: function string(value) {
    return value;
  }
};
var writers = {
  "default": writeString,
  array: writeJSON,
  object: writeJSON
};
function writeJSON(value) {
  return JSON.stringify(value);
}
function writeString(value) {
  return "".concat(value);
}
var Controller = /*#__PURE__*/function () {
  function Controller(context) {
    _classCallCheck(this, Controller);
    this.context = context;
  }
  return _createClass(Controller, [{
    key: "application",
    get: function get() {
      return this.context.application;
    }
  }, {
    key: "scope",
    get: function get() {
      return this.context.scope;
    }
  }, {
    key: "element",
    get: function get() {
      return this.scope.element;
    }
  }, {
    key: "identifier",
    get: function get() {
      return this.scope.identifier;
    }
  }, {
    key: "targets",
    get: function get() {
      return this.scope.targets;
    }
  }, {
    key: "outlets",
    get: function get() {
      return this.scope.outlets;
    }
  }, {
    key: "classes",
    get: function get() {
      return this.scope.classes;
    }
  }, {
    key: "data",
    get: function get() {
      return this.scope.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var _ref27 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref27$target = _ref27.target,
        target = _ref27$target === void 0 ? this.element : _ref27$target,
        _ref27$detail = _ref27.detail,
        detail = _ref27$detail === void 0 ? {} : _ref27$detail,
        _ref27$prefix = _ref27.prefix,
        prefix = _ref27$prefix === void 0 ? this.identifier : _ref27$prefix,
        _ref27$bubbles = _ref27.bubbles,
        bubbles = _ref27$bubbles === void 0 ? true : _ref27$bubbles,
        _ref27$cancelable = _ref27.cancelable,
        cancelable = _ref27$cancelable === void 0 ? true : _ref27$cancelable;
      var type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
      var event = new CustomEvent(type, {
        detail: detail,
        bubbles: bubbles,
        cancelable: cancelable
      });
      target.dispatchEvent(event);
      return event;
    }
  }], [{
    key: "shouldLoad",
    get: function get() {
      return true;
    }
  }, {
    key: "afterLoad",
    value: function afterLoad(_identifier, _application) {
      return;
    }
  }]);
}();
Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing, OutletPropertiesBlessing];
Controller.targets = [];
Controller.outlets = [];
Controller.values = {};


/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionForModuleAndIdentifier, definitionForModuleWithContextAndKey, definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus-webpack-helpers */ "./node_modules/@hotwired/stimulus-webpack-helpers/dist/stimulus-webpack-helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleAndIdentifier", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionForModuleAndIdentifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionForModuleWithContextAndKey", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionForModuleWithContextAndKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _hotwired_stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });



/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
        r,
        n,
        o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};
        for (e in t) n = t[e], r[e] = n;
        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;
          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;
        for (r = "", t = e = 1; 36 >= e; t = ++e) r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }
        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };
      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }
        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };
      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }
        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };
      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }
        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();
            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };
      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;
          for (this.elements = {}, n = 0, a = t.length; a > n; n++) u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
            type: i(u),
            tracked: o(u),
            elements: []
          }, r.elements.push(u));
        }
        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];
            for (t in r) e = r[t].tracked, e && n.push(t);
            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];
          for (n in o) i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;
          for (e in n) o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;
          for (o in i) n = i[o].elements, e(n[0], t) && (r = n[0]);
          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }
        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;
          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;
      e.Renderer = function () {
        function e() {}
        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
              o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;
          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
        r,
        n = function n(t, e) {
          function r() {
            this.constructor = t;
          }
          for (var n in e) o.call(e, n) && (t[n] = e[n]);
          return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
        },
        o = {}.hasOwnProperty;
      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }
        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.removeChild(t));
          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;
          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;
          for (u = [], o = 0, i = t.length; i > o; o++) a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;
          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
          function n() {
            this.constructor = _t6;
          }
          for (var o in e) r.call(e, o) && (_t6[o] = e[o]);
          return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
        },
        r = {}.hasOwnProperty;
      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }
        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;
          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }
        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };
      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }
        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;
          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) e = n[t], o.push(delete this.snapshots[e]);
          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };
      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }
        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };
      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }
        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-79b46153a1fd36f44561.js.map