webpackHotUpdatemy_dash_component("main",{

/***/ "./src/lib/components/Toggle.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/Toggle.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Toggle = /*#__PURE__*/function (_Component) {
  _inherits(Toggle, _Component);

  var _super = _createSuper(Toggle);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _super.call(this, props);
    _this.state = {
      isToggleOn: true,
      counter: 0
    }; // This binding is necessary to make `this` work in the callback

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toggle, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (state) {
        return {
          isToggleOn: !state.isToggleOn,
          counter: state.counter + 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          setProps = _this$props.setProps,
          value = _this$props.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button",
        onClick: this.handleClick
      }, this.state.isToggleOn ? 'ON' : 'OFF'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.counter));
    }
  }]);

  return Toggle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Toggle);
Toggle.defaultProps = {};
Toggle.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9Ub2dnbGUucmVhY3QuanMiXSwibmFtZXMiOlsiVG9nZ2xlIiwicHJvcHMiLCJzdGF0ZSIsImlzVG9nZ2xlT24iLCJjb3VudGVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJpZCIsImxhYmVsIiwic2V0UHJvcHMiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUNDLGdCQUFVLEVBQUUsSUFBYjtBQUFtQkMsYUFBTyxFQUFFO0FBQTVCLEtBQWIsQ0FGZSxDQUlmOztBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBTGU7QUFNaEI7Ozs7a0NBRWE7QUFDWixXQUFLQyxRQUFMLENBQWMsVUFBQUwsS0FBSztBQUFBLGVBQUs7QUFDdEJDLG9CQUFVLEVBQUUsQ0FBQ0QsS0FBSyxDQUFDQyxVQURHO0FBRXRCQyxpQkFBTyxFQUFFRixLQUFLLENBQUNFLE9BQU4sR0FBZ0I7QUFGSCxTQUFMO0FBQUEsT0FBbkI7QUFJRDs7OzZCQUVRO0FBQUEsd0JBQzhCLEtBQUtILEtBRG5DO0FBQUEsVUFDQU8sRUFEQSxlQUNBQSxFQURBO0FBQUEsVUFDSUMsS0FESixlQUNJQSxLQURKO0FBQUEsVUFDV0MsUUFEWCxlQUNXQSxRQURYO0FBQUEsVUFDcUJDLEtBRHJCLGVBQ3FCQSxLQURyQjtBQUdQLDBCQUNJLHFJQUNBLHNFQUFJRixLQUFKLENBREEsZUFFRjtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBMkIsZUFBTyxFQUFFLEtBQUtKO0FBQXpDLFNBQ0csS0FBS0gsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLElBQXhCLEdBQStCLEtBRGxDLENBRkUsZUFLRixzRUFBSSxLQUFLRCxLQUFMLENBQVdFLE9BQWYsQ0FMRSxDQURKO0FBU0Q7Ozs7RUE1QmNRLCtDOztBQStCTloscUVBQWY7QUFFQUEsTUFBTSxDQUFDYSxZQUFQLEdBQXNCLEVBQXRCO0FBRUFiLE1BQU0sQ0FBQ2MsU0FBUCxHQUFtQjtBQUNmOzs7QUFHQU4sSUFBRSxFQUFFTyxpREFBUyxDQUFDQyxNQUpDOztBQU1mOzs7QUFHQVAsT0FBSyxFQUFFTSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQVRUOztBQVdmOzs7QUFHQU4sT0FBSyxFQUFFSSxpREFBUyxDQUFDQyxNQWRGOztBQWdCZjs7OztBQUlBTixVQUFRLEVBQUVLLGlEQUFTLENBQUNHO0FBcEJMLENBQW5CLEMiLCJmaWxlIjoiYzQ2YjJiMi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNUb2dnbGVPbjogdHJ1ZSwgY291bnRlcjogMH07XG5cbiAgICAgICAgLy8gVGhpcyBiaW5kaW5nIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGB0aGlzYCB3b3JrIGluIHRoZSBjYWxsYmFja1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgIGlzVG9nZ2xlT246ICFzdGF0ZS5pc1RvZ2dsZU9uLFxuICAgICAgICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIgKyAxXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPntsYWJlbH08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzVG9nZ2xlT24gPyAnT04nIDogJ09GRid9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUuY291bnRlcn08L3A+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcblxuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5Ub2dnbGUucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=