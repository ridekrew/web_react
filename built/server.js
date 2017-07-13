module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "built/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"infoPanel": "infoPanelImage__infoPanel___1yDLF",
	"firstInfoHeader": "infoPanelImage__firstInfoHeader___10qhL",
	"infoImageCaption": "infoPanelImage__infoImageCaption___QCEWV",
	"infoPrice": "infoPanelImage__infoPrice___15nOP",
	"infoImageContainer": "infoPanelImage__infoImageContainer___1jIWa",
	"infoImagePanel": "infoPanelImage__infoImagePanel___24Xbu",
	"infoImage": "infoPanelImage__infoImage___1csJi"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"bookingHeader": "bookingForm__bookingHeader___1pXRw",
	"textEmphasis": "bookingForm__textEmphasis___vpLEH",
	"addressContainer": "bookingForm__addressContainer___2voze",
	"bookingForm": "bookingForm__bookingForm___2iCZA",
	"bookingSubmit": "bookingForm__bookingSubmit___2HgLV",
	"riderPanel": "bookingForm__riderPanel___2Pds1",
	"ridersHeader": "bookingForm__ridersHeader___2Op5Q"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"price": "price__price___E0Lje",
	"priceSubtitle": "price__priceSubtitle___Byvvj",
	"priceColumn": "price__priceColumn___2CaZa",
	"bookingButton": "price__bookingButton___3VDwM"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"riders": "riderPanel__riders___dZ1DW",
	"newRiders": "riderPanel__newRiders___BBYt4",
	"firstRider": "riderPanel__firstRider___3fe3K",
	"riderText": "riderPanel__riderText___2sja3"
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"educationImageCarousel": "educationPanel__educationImageCarousel___1k8hz",
	"educationPanel": "educationPanel__educationPanel___8jLNB",
	"educationEmphasis": "educationPanel__educationEmphasis___2bBaR"
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _riderPanel = __webpack_require__(16);

var _riderPanel2 = _interopRequireDefault(_riderPanel);

var _price = __webpack_require__(19);

var _price2 = _interopRequireDefault(_price);

var _reactPlacesAutocomplete = __webpack_require__(20);

var _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);

var _bookingForm = __webpack_require__(4);

var _bookingForm2 = _interopRequireDefault(_bookingForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingForm = function (_Component) {
    _inherits(BookingForm, _Component);

    function BookingForm(props) {
        _classCallCheck(this, BookingForm);

        var _this = _possibleConstructorReturn(this, (BookingForm.__proto__ || Object.getPrototypeOf(BookingForm)).call(this, props));

        _this.state = {
            date: '',
            riders: 1,
            price: 0,
            priceLoaded: true
        };
        _this.updateDate = _this.updateDate.bind(_this);
        _this.addRider = _this.addRider.bind(_this);
        _this.removeRider = _this.removeRider.bind(_this);
        _this.handleOrigin = _this.handleOrigin.bind(_this);
        _this.handleDestination = _this.handleDestination.bind(_this);
        _this.calculatePrice = _this.calculatePrice.bind(_this);
        return _this;
    }

    _createClass(BookingForm, [{
        key: 'updateDate',
        value: function updateDate(e) {
            this.setState({
                date: e.target.value
            });
        }
    }, {
        key: 'addRider',
        value: function addRider() {
            this.setState({
                riders: this.state.riders += 1
            });
        }
    }, {
        key: 'removeRider',
        value: function removeRider() {
            this.setState({
                riders: this.state.riders -= 1
            });
        }
    }, {
        key: 'handleOrigin',
        value: function handleOrigin(address) {
            this.props.updateOrigin(address);
            this.calculatePrice(address, this.props.destination);
        }
    }, {
        key: 'handleDestination',
        value: function handleDestination(address) {
            this.props.updateDestination(address);
            this.calculatePrice(this.props.origin, address);
        }
    }, {
        key: 'calculatePrice',
        value: function calculatePrice(origin, destination) {
            var _this2 = this;

            this.setState({
                priceLoaded: false
            });
            var origin = [origin];
            var destination = [destination];
            var distanceMatrix = new google.maps.DistanceMatrixService();
            var distanceRequest = { origins: origin, destinations: destination, travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.IMPERIAL, avoidHighways: false, avoidTolls: false };
            var price = 0;
            if (origin == '' || destination == '') {
                this.setState({
                    priceLoaded: true
                });
                return price;
            } else {
                distanceMatrix.getDistanceMatrix(distanceRequest, function (response, status) {
                    if (status !== google.maps.DistanceMatrixStatus.OK) {
                        console.log("There was an error.");
                    } else {
                        console.log(response);
                        var responseFields = response.rows[0].elements[0];
                        var distance = responseFields.distance.value / 1609.344; // Convert meters to miles for use in pricing model
                        var duration = responseFields.duration.value / 60.0; // Convert seconds to minutes
                        console.log("Distance", distance, "Duration", duration);
                        if (distance <= 100) {
                            price = (0.5 * duration + 0.2 * distance) * 1.4 + 1.5;
                        } else if (distance <= 200) {
                            price = (0.44 * duration + 0.18 * distance) * 1.325 + 1.5;
                        } else {
                            price = (0.4166 * duration + 0.16 * distance) * 1.25 + 1.5;
                        }
                    }
                    _this2.setState({
                        price: price,
                        priceLoaded: true
                    });
                    return _this2.state.price;
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var originInputProps = {
                value: this.props.origin,
                onChange: this.props.updateOrigin,
                placeholder: "Where should we pick you up?",
                autoFocus: true
            };

            var destinationInputProps = {
                value: this.props.destination,
                onChange: this.props.updateDestination,
                placeholder: "Where are you going?",
                autoFocus: true
            };

            var addressCSS = {
                root: 'addressRoot',
                input: 'addressInput',
                autocompleteContainer: 'addressContainer'
            };

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: _bookingForm2.default.bookingHeader },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Experience a ',
                        _react2.default.createElement(
                            'span',
                            { className: _bookingForm2.default.textEmphasis },
                            'Krew'
                        ),
                        ' Ride.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: _bookingForm2.default.bookingForm },
                    _react2.default.createElement(_reactPlacesAutocomplete2.default, {
                        inputProps: originInputProps,
                        classNames: addressCSS,
                        onSelect: this.handleOrigin }),
                    _react2.default.createElement(_reactPlacesAutocomplete2.default, {
                        inputProps: destinationInputProps,
                        classNames: addressCSS,
                        onSelect: this.handleDestination }),
                    _react2.default.createElement('input', { placeholder: 'What day?', value: this.state.date, onChange: this.updateDate }),
                    _react2.default.createElement('input', { placeholder: 'What time?', value: this.state.date, onChange: this.updateDate }),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        { className: _bookingForm2.default.riderPanel },
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 5 },
                            _react2.default.createElement(
                                'h3',
                                { className: _bookingForm2.default.ridersHeader },
                                'How big is your Krew?'
                            ),
                            _react2.default.createElement(_riderPanel2.default, { addRider: this.addRider, removeRider: this.removeRider, riders: this.state.riders })
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 7 },
                            this.state.priceLoaded ? _react2.default.createElement(_price2.default, { price: this.state.price, riders: this.state.riders }) : null
                        )
                    )
                )
            );
        }
    }]);

    return BookingForm;
}(_react.Component);

exports.default = BookingForm;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(11);

var _fs2 = _interopRequireDefault(_fs);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = __webpack_require__(3);

var _server = __webpack_require__(24);

var _reactTransmit = __webpack_require__(25);

var _reactTransmit2 = _interopRequireDefault(_reactTransmit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleRender(req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      _reactTransmit2.default.renderToString(_reactRouter.RouterContext, props).then(function (_ref) {
        var reactString = _ref.reactString,
            reactData = _ref.reactData;

        _fs2.default.readFile('./index.html', 'utf8', function (err, file) {
          if (err) {
            return console.log(err);
          }
          var document = file.replace(/<div class="container-fluid"><\/div>/, '<div class="container-fluid">' + reactString + '</div>');
          var output = _reactTransmit2.default.injectIntoMarkup(document, reactData, ['/built/client.js']);
          res.send(output);
        });
      }).catch(function (e) {
        return console.log(e);
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
}

exports.default = handleRender;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = __webpack_require__(3);

var _app = __webpack_require__(13);

var _app2 = _interopRequireDefault(_app);

var _bookingForm = __webpack_require__(8);

var _bookingForm2 = _interopRequireDefault(_bookingForm);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _bookingForm2.default })
);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(14);

var _header2 = _interopRequireDefault(_header);

var _bookingForm = __webpack_require__(8);

var _bookingForm2 = _interopRequireDefault(_bookingForm);

var _infoPanel = __webpack_require__(21);

var _infoPanel2 = _interopRequireDefault(_infoPanel);

var _educationPanel = __webpack_require__(23);

var _educationPanel2 = _interopRequireDefault(_educationPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//const google = window.google;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            origin: '',
            destination: ''
        };
        _this.updateOrigin = _this.updateOrigin.bind(_this);
        _this.updateDestination = _this.updateDestination.bind(_this);
        _this.validAddress = _this.validAddress.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'updateOrigin',
        value: function updateOrigin(address) {
            this.setState({
                origin: address
            });
        }
    }, {
        key: 'updateDestination',
        value: function updateDestination(address) {
            this.setState({
                destination: address
            });
        }
    }, {
        key: 'validAddress',
        value: function validAddress(address) {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-5' },
                    _react2.default.createElement(_bookingForm2.default, {
                        updateOrigin: this.updateOrigin,
                        origin: this.state.origin,
                        updateDestination: this.updateDestination,
                        destination: this.state.destination })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-7' },
                    this.validAddress(this.state.origin) ? _react2.default.createElement(_infoPanel2.default, null) : _react2.default.createElement(_educationPanel2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _header = __webpack_require__(15);

var _header2 = _interopRequireDefault(_header);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(2);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      showLoginModal: false,
      showRegisterModal: false,
      loggedIn: false
    };
    _this.openLoginModal = _this.openLoginModal.bind(_this);
    _this.openRegisterModal = _this.openRegisterModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.login = _this.login.bind(_this);
    _this.logout = _this.logout.bind(_this);

    return _this;
  }

  _createClass(Header, [{
    key: 'openLoginModal',
    value: function openLoginModal() {
      this.setState({
        showLoginModal: true,
        showRegisterModal: false
      });
    }
  }, {
    key: 'openRegisterModal',
    value: function openRegisterModal() {
      this.setState({
        showRegisterModal: true,
        showLoginModal: false
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        showLoginModal: false,
        showRegisterModal: false
      });
    }
  }, {
    key: 'login',
    value: function login() {
      this.setState({
        loggedIn: true
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.setState({
        loggedIn: false
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'header',
        { className: 'container-fluid' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { md: 1, className: _header2.default.logo },
            _react2.default.createElement('img', { src: '../built/images/headerImages/KrewBetaLogo.png' })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { md: 11 },
            _react2.default.createElement(
              'ul',
              { className: _header2.default.headerButtonPanel },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: _header2.default.headerButton },
                  'Learn'
                )
              ),
              !this.state.loggedIn ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: _header2.default.headerButton, onClick: this.openRegisterModal },
                  'Join Us'
                )
              ) : null,
              !this.state.loggedIn ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: _header2.default.headerButton, onClick: this.openLoginModal },
                  'Log In'
                )
              ) : _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.logout },
                'Log Out'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showLoginModal, onHide: this.closeModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              _react2.default.createElement(
                'h2',
                null,
                'Login to Krew'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            'This is the login modal text.',
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.login },
              'Log In'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeModal },
              'Close'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showRegisterModal, onHide: this.closeModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Create a New Account'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            'This is the registration modal text.'
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeModal },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
	"logo": "header__logo___3xoBS",
	"headerButtonPanel": "header__headerButtonPanel___2vz67",
	"headerButton": "header__headerButton___krAU1"
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _user = __webpack_require__(17);

var _user2 = _interopRequireDefault(_user);

var _userPlus = __webpack_require__(18);

var _userPlus2 = _interopRequireDefault(_userPlus);

var _riderPanel = __webpack_require__(6);

var _riderPanel2 = _interopRequireDefault(_riderPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RiderPanel = function (_Component) {
    _inherits(RiderPanel, _Component);

    function RiderPanel() {
        _classCallCheck(this, RiderPanel);

        return _possibleConstructorReturn(this, (RiderPanel.__proto__ || Object.getPrototypeOf(RiderPanel)).apply(this, arguments));
    }

    _createClass(RiderPanel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_user2.default, { id: _riderPanel2.default.firstRider, className: _riderPanel2.default.riders }),
                this.props.riders >= 2 ? _react2.default.createElement(_user2.default, { className: _riderPanel2.default.riders, onClick: this.props.removeRider }) : null,
                this.props.riders >= 3 ? _react2.default.createElement(_user2.default, { className: _riderPanel2.default.riders, onClick: this.props.removeRider }) : null,
                this.props.riders >= 4 ? _react2.default.createElement(_user2.default, { className: _riderPanel2.default.riders, onClick: this.props.removeRider }) : null,
                this.props.riders >= 5 ? _react2.default.createElement(_user2.default, { className: _riderPanel2.default.riders, onClick: this.props.removeRider }) : null,
                this.props.riders == 6 ? _react2.default.createElement(_user2.default, { className: _riderPanel2.default.riders, onClick: this.props.removeRider }) : null,
                this.props.riders < 6 ? _react2.default.createElement(_userPlus2.default, { className: _riderPanel2.default.newRiders, onClick: this.props.addRider }) : null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: _riderPanel2.default.riderText },
                    this.props.riders > 1 ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            this.props.riders
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            ' Riders'
                        )
                    ) : null,
                    this.props.riders == 1 ? _react2.default.createElement(
                        'span',
                        null,
                        'Solo Rider'
                    ) : null
                )
            );
        }
    }]);

    return RiderPanel;
}(_react.Component);

exports.default = RiderPanel;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/user");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/user-plus");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _price = __webpack_require__(5);

var _price2 = _interopRequireDefault(_price);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Price = function (_Component) {
    _inherits(Price, _Component);

    function Price() {
        _classCallCheck(this, Price);

        return _possibleConstructorReturn(this, (Price.__proto__ || Object.getPrototypeOf(Price)).apply(this, arguments));
    }

    _createClass(Price, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Grid,
                { fluid: true },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 6, className: _price2.default.priceColumn },
                        _react2.default.createElement(
                            'p',
                            { className: _price2.default.price },
                            "$" + (this.props.price / this.props.riders).toFixed(2)
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _price2.default.priceSubtitle },
                            'per person'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 6 },
                        _react2.default.createElement(
                            'p',
                            { className: _price2.default.price, id: _price2.default.total },
                            "$" + parseFloat(this.props.price).toFixed(2)
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _price2.default.priceSubtitle, id: _price2.default.total },
                            'total'
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { className: _price2.default.bookingButton },
                        'View Available Bookings'
                    )
                )
            );
        }
    }]);

    return Price;
}(_react.Component);

exports.default = Price;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _infoPanelImage = __webpack_require__(22);

var _infoPanelImage2 = _interopRequireDefault(_infoPanelImage);

var _infoPanelImage3 = __webpack_require__(2);

var _infoPanelImage4 = _interopRequireDefault(_infoPanelImage3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoPanel = function (_Component) {
    _inherits(InfoPanel, _Component);

    function InfoPanel() {
        _classCallCheck(this, InfoPanel);

        return _possibleConstructorReturn(this, (InfoPanel.__proto__ || Object.getPrototypeOf(InfoPanel)).apply(this, arguments));
    }

    _createClass(InfoPanel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _infoPanelImage4.default.infoPanel },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        'h3',
                        { className: _infoPanelImage4.default.firstInfoHeader },
                        'Going to a concert?'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: _infoPanelImage4.default.infoImagePanel },
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/future.jpg', artist: 'Future', price: 4.23 }),
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/kendrick-lamar.png', artist: 'Kendrick Lamar', price: 11.00 }),
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/weeknd.jpg', artist: 'The Weeknd', price: 22.58 }),
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/lil_wayne.jpg', artist: 'Lil\' Wayne', price: 11.49 })
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Taking a flight?'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: _infoPanelImage4.default.infoImagePanel },
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/future.jpg', artist: 'Future' }),
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/kendrick-lamar.png', artist: 'Kendrick Lamar' })
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Weekend getaway?'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: _infoPanelImage4.default.infoImagePanel },
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/austin.webp', artist: 'Austin, TX', price: 32.50 }),
                    _react2.default.createElement(_infoPanelImage2.default, { img: '../style/images/infoPanel/houston.jpg', artist: 'Houston, TX' })
                )
            );
        }
    }]);

    return InfoPanel;
}(_react.Component);

exports.default = InfoPanel;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _infoPanelImage = __webpack_require__(2);

var _infoPanelImage2 = _interopRequireDefault(_infoPanelImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoPanelImage = function (_Component) {
    _inherits(InfoPanelImage, _Component);

    function InfoPanelImage(props) {
        _classCallCheck(this, InfoPanelImage);

        var _this = _possibleConstructorReturn(this, (InfoPanelImage.__proto__ || Object.getPrototypeOf(InfoPanelImage)).call(this, props));

        _this.state = {
            image: null,
            artist: '',
            price: null
        };
        return _this;
    }

    _createClass(InfoPanelImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                image: this.props.img,
                artist: this.props.artist,
                price: this.props.price
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: _infoPanelImage2.default.infoImageContainer },
                _react2.default.createElement('img', { className: _infoPanelImage2.default.infoImage, src: this.state.image }),
                _react2.default.createElement(
                    'p',
                    { className: _infoPanelImage2.default.infoImageCaption },
                    this.state.artist
                ),
                this.state.price ? _react2.default.createElement(
                    'p',
                    { className: _infoPanelImage2.default.infoImageCaption },
                    'Prices low as ',
                    _react2.default.createElement(
                        'span',
                        { className: _infoPanelImage2.default.infoPrice },
                        '$'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: _infoPanelImage2.default.infoPrice },
                        this.state.price
                    ),
                    '!'
                ) : null
            );
        }
    }]);

    return InfoPanelImage;
}(_react.Component);

exports.default = InfoPanelImage;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _educationPanel = __webpack_require__(7);

var _educationPanel2 = _interopRequireDefault(_educationPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EducationPanel = function (_Component) {
    _inherits(EducationPanel, _Component);

    function EducationPanel() {
        _classCallCheck(this, EducationPanel);

        return _possibleConstructorReturn(this, (EducationPanel.__proto__ || Object.getPrototypeOf(EducationPanel)).apply(this, arguments));
    }

    _createClass(EducationPanel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Grid,
                { className: _educationPanel2.default.educationPanel },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Pre-Book a ',
                    _react2.default.createElement(
                        'span',
                        { className: _educationPanel2.default.educationEmphasis },
                        'Concert '
                    ),
                    'Trip.'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { className: _educationPanel2.default.educationImageCarousel },
                    _react2.default.createElement('img', { src: '../built/images/educationPanel/driver.jpg' })
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    'Enjoy Free Wi-Fi, Video/Music Streaming.'
                )
            );
        }
    }]);

    return EducationPanel;
}(_react.Component);

exports.default = EducationPanel;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-transmit");

/***/ })
/******/ ]);