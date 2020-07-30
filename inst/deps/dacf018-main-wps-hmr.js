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
/* harmony import */ var _bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulma.css */ "./src/lib/components/bulma.css");
/* harmony import */ var _bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bulma_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bulma-components/dist */ "./node_modules/react-bulma-components/dist/index.js");
/* harmony import */ var react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_3__);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "black",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9Ub2dnbGUucmVhY3QuanMiXSwibmFtZXMiOlsiVG9nZ2xlIiwicHJvcHMiLCJzdGF0ZSIsImlzVG9nZ2xlT24iLCJjb3VudGVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJpZCIsImxhYmVsIiwic2V0UHJvcHMiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsZ0JBQVUsRUFBRSxJQUFiO0FBQW1CQyxhQUFPLEVBQUU7QUFBNUIsS0FBYixDQUZlLENBSWY7O0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFMZTtBQU1oQjs7OztrQ0FFYTtBQUNaLFdBQUtDLFFBQUwsQ0FBYyxVQUFBTCxLQUFLO0FBQUEsZUFBSztBQUN0QkMsb0JBQVUsRUFBRSxDQUFDRCxLQUFLLENBQUNDLFVBREc7QUFFdEJDLGlCQUFPLEVBQUVGLEtBQUssQ0FBQ0UsT0FBTixHQUFnQjtBQUZILFNBQUw7QUFBQSxPQUFuQjtBQUlEOzs7NkJBRVE7QUFBQSx3QkFDOEIsS0FBS0gsS0FEbkM7QUFBQSxVQUNBTyxFQURBLGVBQ0FBLEVBREE7QUFBQSxVQUNJQyxLQURKLGVBQ0lBLEtBREo7QUFBQSxVQUNXQyxRQURYLGVBQ1dBLFFBRFg7QUFBQSxVQUNxQkMsS0FEckIsZUFDcUJBLEtBRHJCO0FBR1AsMEJBQ0kscUlBQ0Esc0VBQUlGLEtBQUosQ0FEQSxlQUVGLDJEQUFDLGtFQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBc0IsZUFBTyxFQUFFLEtBQUtKO0FBQXBDLFNBQ0csS0FBS0gsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLElBQXhCLEdBQStCLEtBRGxDLENBRkUsZUFLRixzRUFBSSxLQUFLRCxLQUFMLENBQVdFLE9BQWYsQ0FMRSxDQURKO0FBU0Q7Ozs7RUE1QmNRLCtDOztBQStCTloscUVBQWY7QUFFQUEsTUFBTSxDQUFDYSxZQUFQLEdBQXNCLEVBQXRCO0FBRUFiLE1BQU0sQ0FBQ2MsU0FBUCxHQUFtQjtBQUNmOzs7QUFHQU4sSUFBRSxFQUFFTyxpREFBUyxDQUFDQyxNQUpDOztBQU1mOzs7QUFHQVAsT0FBSyxFQUFFTSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQVRUOztBQVdmOzs7QUFHQU4sT0FBSyxFQUFFSSxpREFBUyxDQUFDQyxNQWRGOztBQWdCZjs7OztBQUlBTixVQUFRLEVBQUVLLGlEQUFTLENBQUNHO0FBcEJMLENBQW5CLEMiLCJmaWxlIjoiZGFjZjAxOC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9idWxtYS5jc3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYnVsbWEtY29tcG9uZW50cy9kaXN0JztcblxuY2xhc3MgVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNUb2dnbGVPbjogdHJ1ZSwgY291bnRlcjogMH07XG5cbiAgICAgICAgLy8gVGhpcyBiaW5kaW5nIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGB0aGlzYCB3b3JrIGluIHRoZSBjYWxsYmFja1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgIGlzVG9nZ2xlT246ICFzdGF0ZS5pc1RvZ2dsZU9uLFxuICAgICAgICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIgKyAxXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPntsYWJlbH08L3A+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImJsYWNrXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1RvZ2dsZU9uID8gJ09OJyA6ICdPRkYnfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmNvdW50ZXJ9PC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG5cblRvZ2dsZS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuVG9nZ2xlLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9