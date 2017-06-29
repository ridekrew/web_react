/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _routes = __webpack_require__(1);

	var _routes2 = _interopRequireDefault(_routes);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _server = __webpack_require__(17);

	var _express = __webpack_require__(18);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use(_express2.default.static('/style'));

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link rel="stylesheet" href="/style/style.css">\n        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">\n        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">\n        <title>Krew</title>\n      </head>\n      <body>\n        <div class="container-fluid">' + appHtml + '</div>\n      </body>\n      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXFNPrKzchkSiVScDviUHMuPHXlp6sTqA&libraries=places"></script>\n      <script src="/bundle.js"></script>\n    </html>\n  ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(2);

	var _app = __webpack_require__(3);

	var _app2 = _interopRequireDefault(_app);

	var _bookingForm = __webpack_require__(7);

	var _bookingForm2 = _interopRequireDefault(_bookingForm);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _app2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _bookingForm2.default })
	);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _header = __webpack_require__(5);

	var _header2 = _interopRequireDefault(_header);

	var _bookingForm = __webpack_require__(7);

	var _bookingForm2 = _interopRequireDefault(_bookingForm);

	var _infoPanel = __webpack_require__(14);

	var _infoPanel2 = _interopRequireDefault(_infoPanel);

	var _educationPanel = __webpack_require__(16);

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
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

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
	            { md: 1, className: 'logo' },
	            _react2.default.createElement('img', { src: '../style/images/headerImages/KrewBetaLogo.png' })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { md: 11 },
	            _react2.default.createElement(
	              'ul',
	              { className: 'header-button-panel' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { className: 'header-button' },
	                  'Learn'
	                )
	              ),
	              !this.state.loggedIn ? _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { className: 'header-button', onClick: this.openRegisterModal },
	                  'Join Us'
	                )
	              ) : null,
	              !this.state.loggedIn ? _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { className: 'header-button', onClick: this.openLoginModal },
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
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _riderPanel = __webpack_require__(8);

	var _riderPanel2 = _interopRequireDefault(_riderPanel);

	var _price = __webpack_require__(12);

	var _price2 = _interopRequireDefault(_price);

	var _reactPlacesAutocomplete = __webpack_require__(13);

	var _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);

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
	                    { className: 'booking-header' },
	                    _react2.default.createElement(
	                        'h1',
	                        null,
	                        'Experience a ',
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'text-emphasis' },
	                            'Krew'
	                        ),
	                        ' Ride.'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'booking-form' },
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
	                        { className: 'rider-panel' },
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { md: 5 },
	                            _react2.default.createElement(
	                                'h3',
	                                { className: 'riders-header' },
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _user = __webpack_require__(9);

	var _user2 = _interopRequireDefault(_user);

	var _userPlus = __webpack_require__(11);

	var _userPlus2 = _interopRequireDefault(_userPlus);

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
	                _react2.default.createElement(_user2.default, { id: 'first-rider', className: 'riders' }),
	                this.props.riders >= 2 ? _react2.default.createElement(_user2.default, { className: 'riders', onClick: this.props.removeRider }) : null,
	                this.props.riders >= 3 ? _react2.default.createElement(_user2.default, { className: 'riders', onClick: this.props.removeRider }) : null,
	                this.props.riders >= 4 ? _react2.default.createElement(_user2.default, { className: 'riders', onClick: this.props.removeRider }) : null,
	                this.props.riders >= 5 ? _react2.default.createElement(_user2.default, { className: 'riders', onClick: this.props.removeRider }) : null,
	                this.props.riders == 6 ? _react2.default.createElement(_user2.default, { className: 'riders', onClick: this.props.removeRider }) : null,
	                this.props.riders < 6 ? _react2.default.createElement(_userPlus2.default, { className: 'new-riders', onClick: this.props.addRider }) : null,
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    { className: 'rider-text' },
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactIconBase = __webpack_require__(10);

	var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FaUser = function FaUser(props) {
	    return _react2.default.createElement(
	        _reactIconBase2.default,
	        _extends({ viewBox: '0 0 40 40' }, props),
	        _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'm35.9 31.4q0 2.6-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2 0.1-2.3t0.3-2.5 0.6-2.4 0.9-2.2 1.4-1.8 1.9-1.2 2.5-0.4q0.2 0 1 0.5t1.6 1 2.4 1.1 3 0.5 3-0.5 2.4-1.1 1.7-1 0.9-0.5q1.4 0 2.5 0.4t1.9 1.2 1.4 1.8 0.9 2.2 0.6 2.4 0.4 2.5 0 2.3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z' })
	        )
	    );
	};

	exports.default = FaUser;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("react-icon-base");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactIconBase = __webpack_require__(10);

	var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FaUserPlus = function FaUserPlus(props) {
	    return _react2.default.createElement(
	        _reactIconBase2.default,
	        _extends({ viewBox: '0 0 40 40' }, props),
	        _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'm13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2z m18.6 2.5h6.8q0.3 0 0.5 0.2t0.2 0.4v3.7q0 0.3-0.2 0.5t-0.5 0.2h-6.8v6.8q0 0.2-0.2 0.4t-0.4 0.2h-3.7q-0.3 0-0.5-0.2t-0.2-0.4v-6.8h-6.8q-0.3 0-0.4-0.2t-0.2-0.5v-3.7q0-0.2 0.2-0.4t0.4-0.2h6.8v-6.8q0-0.3 0.2-0.5t0.4-0.2h3.8q0.2 0 0.4 0.2t0.2 0.5v6.8z m-14.3 4.3q0 1 0.7 1.8t1.8 0.7h5v4.6q-1.4 1-3.4 1h-16.9q-2.4 0-3.8-1.3t-1.4-3.7q0-1 0.1-2t0.2-2.1 0.6-2.2 0.8-1.8 1.2-1.6 1.7-1.1 2.1-0.3q0.4 0 0.8 0.3 1.5 1.2 3 1.8t3.2 0.6 3.2-0.6 3-1.8q0.3-0.3 0.7-0.3 2.6 0 4.2 1.8h-4.3q-1 0-1.7 0.8t-0.8 1.7v3.7z' })
	        )
	    );
	};

	exports.default = FaUserPlus;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

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
	                        { md: 6, className: 'price-column' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'price' },
	                            "$" + (this.props.price / this.props.riders).toFixed(2)
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'price-subtitle' },
	                            'per person'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { md: 6 },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'price', id: 'total' },
	                            "$" + parseFloat(this.props.price).toFixed(2)
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'price-subtitle', id: 'total' },
	                            'total'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Button,
	                        { className: 'booking-button' },
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
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("react-places-autocomplete");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _infoPanelImage = __webpack_require__(15);

	var _infoPanelImage2 = _interopRequireDefault(_infoPanelImage);

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
	                { className: 'info-panel' },
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    null,
	                    _react2.default.createElement(
	                        'h3',
	                        { className: 'first-info-header' },
	                        'Going to a concert?'
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    { className: 'info-image-panel' },
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
	                    { className: 'info-image-panel' },
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
	                    { className: 'info-image-panel' },
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

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
	                { className: 'info-image-container' },
	                _react2.default.createElement('img', { className: 'info-image', src: this.state.image }),
	                _react2.default.createElement(
	                    'p',
	                    { className: 'info-image-caption' },
	                    this.state.artist
	                ),
	                this.state.price ? _react2.default.createElement(
	                    'p',
	                    { className: 'info-image-caption' },
	                    'Prices low as ',
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'info-price' },
	                        '$'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'info-price' },
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

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
	                { className: 'education-panel' },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Pre-Book a ',
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'education-emphasis' },
	                        'Concert '
	                    ),
	                    'Trip.'
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    { className: 'education-image-carousel' },
	                    _react2.default.createElement('img', { src: '../style/images/educationPanel/driver.jpg' })
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
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ })
/******/ ]);