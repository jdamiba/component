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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RealButton, this.props));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9CdWxtYUJ1dHRvbi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFsQnV0dG9uIiwibGF6eSIsIkJ1bG1hQnV0dG9uIiwicHJvcHMiLCJ2YWx1ZSIsImNvbG9yIiwicm91bmRlZCIsImRpc2FibGVkIiwib3V0bGluZWQiLCJzaXplIiwiaW52ZXJ0ZWQiLCJsb2FkaW5nIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxnQkFBR0Msa0RBQUksQ0FBQyx3Q0FBRCxDQUF2Qjs7SUFFTUMsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWhCOzs7OzZCQUdRO0FBQUEsd0JBQ3VFLEtBQUtBLEtBRDVFO0FBQUEsVUFDQUMsS0FEQSxlQUNBQSxLQURBO0FBQUEsVUFDT0MsS0FEUCxlQUNPQSxLQURQO0FBQUEsVUFDY0MsT0FEZCxlQUNjQSxPQURkO0FBQUEsVUFDdUJDLFFBRHZCLGVBQ3VCQSxRQUR2QjtBQUFBLFVBQ2lDQyxRQURqQyxlQUNpQ0EsUUFEakM7QUFBQSxVQUMyQ0MsSUFEM0MsZUFDMkNBLElBRDNDO0FBQUEsVUFDaURDLFFBRGpELGVBQ2lEQSxRQURqRDtBQUFBLFVBQzJEQyxPQUQzRCxlQUMyREEsT0FEM0Q7QUFHUCwwQkFDRSwyREFBQyw4Q0FBRDtBQUFVLGdCQUFRLEVBQUU7QUFBcEIsc0JBQ0UsMkRBQUMsVUFBRCxFQUFnQixLQUFLUixLQUFyQixDQURGLENBREY7QUFLRDs7OztFQWRtQlMsK0M7O0FBaUJYViwwRUFBZjtBQUVBQSxXQUFXLENBQUNXLFlBQVosR0FBMkIsRUFBM0I7QUFFQVgsV0FBVyxDQUFDWSxTQUFaLEdBQXdCO0FBQ3BCOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpNOztBQU1wQjs7O0FBR0FiLE9BQUssRUFBRVksaURBQVMsQ0FBQ0MsTUFURzs7QUFXcEI7OztBQUdBUixNQUFJLEVBQUVPLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUFoQixDQWRjOztBQWVwQjs7O0FBR0FiLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0MsTUFsQkc7O0FBb0JwQjs7OztBQUlBWCxTQUFPLEVBQUVVLGlEQUFTLENBQUNHLElBeEJDOztBQTBCcEI7Ozs7QUFJQVIsU0FBTyxFQUFFSyxpREFBUyxDQUFDRyxJQTlCQzs7QUFnQ3BCOzs7O0FBSUFYLFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0csSUFwQ0E7O0FBc0NwQjs7OztBQUlBVCxVQUFRLEVBQUVNLGlEQUFTLENBQUNHLElBMUNBOztBQTRDcEI7Ozs7QUFJQVosVUFBUSxFQUFFUyxpREFBUyxDQUFDRyxJQWhEQTs7QUFrRHBCOzs7O0FBSUFDLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0s7QUF0REEsQ0FBeEIsQyIsImZpbGUiOiIxNTMyZjg3LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgbGF6eSwgU3VzcGVuc2V9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWxCdXR0b24gPSBsYXp5KFwiLi4vLi4vZnJhZ21lbnQvQnV0dG9uRnJhZ21lbnQucmVhY3QuanNcIik7XG5cbmNsYXNzIEJ1bG1hQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB9XG5cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dmFsdWUsIGNvbG9yLCByb3VuZGVkLCBkaXNhYmxlZCwgb3V0bGluZWQsIHNpemUsIGludmVydGVkLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgICAgICAgIDxSZWFsQnV0dG9uIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgKTtcbiAgICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVsbWFCdXR0b247XG5cbkJ1bG1hQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5CdWxtYUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaGFzXG4gICAgICogcm91bmRlZCBjb3JuZXJzLlxuICAgICAqL1xuICAgIHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gc2hvd3NcbiAgICAgKiB0aGUgXCJsb2FkaW5nXCIgaWNvbi5cbiAgICAgKi9cbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzXG4gICAgICogb3V0bGluZWQuXG4gICAgICovXG4gICAgb3V0bGluZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaGFzXG4gICAgICogaW52ZXJ0ZWQgY29sb3JzLlxuICAgICAqL1xuICAgIGludmVydGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzXG4gICAgICogZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==