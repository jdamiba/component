webpackHotUpdatemy_dash_component("main",{

/***/ "./src/lib/components/BulmaButton.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/BulmaButton.react.js ***!
  \*************************************************/
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



var RealButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])("../../fragment/ButtonFragment.react.js");

var BulmaButton = /*#__PURE__*/function (_Component) {
  _inherits(BulmaButton, _Component);

  var _super = _createSuper(BulmaButton);

  function BulmaButton(props) {
    _classCallCheck(this, BulmaButton);

    return _super.call(this, props);
  }

  _createClass(BulmaButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          color = _this$props.color,
          rounded = _this$props.rounded,
          disabled = _this$props.disabled,
          outlined = _this$props.outlined,
          size = _this$props.size,
          inverted = _this$props.inverted,
          loading = _this$props.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RealButton, {
        color: color,
        rounded: rounded,
        disabled: disabled,
        outlined: outlined,
        size: size,
        inverted: inverted,
        loading: loading
      }, value));
    }
  }]);

  return BulmaButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BulmaButton);
BulmaButton.defaultProps = {};
BulmaButton.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The text displayed in the button.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The size of the button.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * The color of the button.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Determines whether the button has
   * rounded corners.
   */
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determines whether the button shows
   * the "loading" icon.
   */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determines whether the button is
   * outlined.
   */
  outlined: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determines whether the button has
   * inverted colors.
   */
  inverted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Determines whether the button is
   * disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9CdWxtYUJ1dHRvbi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFsQnV0dG9uIiwibGF6eSIsIkJ1bG1hQnV0dG9uIiwicHJvcHMiLCJ2YWx1ZSIsImNvbG9yIiwicm91bmRlZCIsImRpc2FibGVkIiwib3V0bGluZWQiLCJzaXplIiwiaW52ZXJ0ZWQiLCJsb2FkaW5nIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxnQkFBR0Msa0RBQUksQ0FBQyx3Q0FBRCxDQUF2Qjs7SUFFTUMsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWhCOzs7OzZCQUdRO0FBQUEsd0JBQ3VFLEtBQUtBLEtBRDVFO0FBQUEsVUFDQUMsS0FEQSxlQUNBQSxLQURBO0FBQUEsVUFDT0MsS0FEUCxlQUNPQSxLQURQO0FBQUEsVUFDY0MsT0FEZCxlQUNjQSxPQURkO0FBQUEsVUFDdUJDLFFBRHZCLGVBQ3VCQSxRQUR2QjtBQUFBLFVBQ2lDQyxRQURqQyxlQUNpQ0EsUUFEakM7QUFBQSxVQUMyQ0MsSUFEM0MsZUFDMkNBLElBRDNDO0FBQUEsVUFDaURDLFFBRGpELGVBQ2lEQSxRQURqRDtBQUFBLFVBQzJEQyxPQUQzRCxlQUMyREEsT0FEM0Q7QUFHUCwwQkFDRSwyREFBQyw4Q0FBRDtBQUFVLGdCQUFRLEVBQUU7QUFBcEIsc0JBQ0UsMkRBQUMsVUFBRDtBQUFZLGFBQUssRUFBRU4sS0FBbkI7QUFBMEIsZUFBTyxFQUFFQyxPQUFuQztBQUE0QyxnQkFBUSxFQUFFQyxRQUF0RDtBQUFnRSxnQkFBUSxFQUFFQyxRQUExRTtBQUFvRixZQUFJLEVBQUVDLElBQTFGO0FBQWdHLGdCQUFRLEVBQUVDLFFBQTFHO0FBQW9ILGVBQU8sRUFBRUM7QUFBN0gsU0FDS1AsS0FETCxDQURGLENBREY7QUFPRDs7OztFQWhCbUJRLCtDOztBQW1CWFYsMEVBQWY7QUFFQUEsV0FBVyxDQUFDVyxZQUFaLEdBQTJCLEVBQTNCO0FBRUFYLFdBQVcsQ0FBQ1ksU0FBWixHQUF3QjtBQUNwQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKTTs7QUFNcEI7OztBQUdBYixPQUFLLEVBQUVZLGlEQUFTLENBQUNDLE1BVEc7O0FBV3BCOzs7QUFHQVIsTUFBSSxFQUFFTyxpREFBUyxDQUFDRSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FkYzs7QUFlcEI7OztBQUdBYixPQUFLLEVBQUVXLGlEQUFTLENBQUNDLE1BbEJHOztBQW9CcEI7Ozs7QUFJQVgsU0FBTyxFQUFFVSxpREFBUyxDQUFDRyxJQXhCQzs7QUEwQnBCOzs7O0FBSUFSLFNBQU8sRUFBRUssaURBQVMsQ0FBQ0csSUE5QkM7O0FBZ0NwQjs7OztBQUlBWCxVQUFRLEVBQUVRLGlEQUFTLENBQUNHLElBcENBOztBQXNDcEI7Ozs7QUFJQVQsVUFBUSxFQUFFTSxpREFBUyxDQUFDRyxJQTFDQTs7QUE0Q3BCOzs7O0FBSUFaLFVBQVEsRUFBRVMsaURBQVMsQ0FBQ0csSUFoREE7O0FBa0RwQjs7OztBQUlBQyxVQUFRLEVBQUVKLGlEQUFTLENBQUNLO0FBdERBLENBQXhCLEMiLCJmaWxlIjoiODA1NDA1NC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGxhenksIFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZWFsQnV0dG9uID0gbGF6eShcIi4uLy4uL2ZyYWdtZW50L0J1dHRvbkZyYWdtZW50LnJlYWN0LmpzXCIpO1xuXG5jbGFzcyBCdWxtYUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgfVxuXG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBjb2xvciwgcm91bmRlZCwgZGlzYWJsZWQsIG91dGxpbmVkLCBzaXplLCBpbnZlcnRlZCwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgICA8UmVhbEJ1dHRvbiBjb2xvcj17Y29sb3J9IHJvdW5kZWQ9e3JvdW5kZWR9IGRpc2FibGVkPXtkaXNhYmxlZH0gb3V0bGluZWQ9e291dGxpbmVkfSBzaXplPXtzaXplfSBpbnZlcnRlZD17aW52ZXJ0ZWR9IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvUmVhbEJ1dHRvbj5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICApO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWxtYUJ1dHRvbjtcblxuQnVsbWFCdXR0b24uZGVmYXVsdFByb3BzID0ge307XG5cbkJ1bG1hQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBoYXNcbiAgICAgKiByb3VuZGVkIGNvcm5lcnMuXG4gICAgICovXG4gICAgcm91bmRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG93c1xuICAgICAqIHRoZSBcImxvYWRpbmdcIiBpY29uLlxuICAgICAqL1xuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaXNcbiAgICAgKiBvdXRsaW5lZC5cbiAgICAgKi9cbiAgICBvdXRsaW5lZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBoYXNcbiAgICAgKiBpbnZlcnRlZCBjb2xvcnMuXG4gICAgICovXG4gICAgaW52ZXJ0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaXNcbiAgICAgKiBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9