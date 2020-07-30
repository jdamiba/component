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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: color,
        rounded: rounded,
        disabled: disabled,
        outlined: outlined,
        size: size,
        inverted: inverted,
        loading: loading
      }, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9CdWxtYUJ1dHRvbi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJCdWxtYUJ1dHRvbiIsInByb3BzIiwidmFsdWUiLCJjb2xvciIsInJvdW5kZWQiLCJkaXNhYmxlZCIsIm91dGxpbmVkIiwic2l6ZSIsImludmVydGVkIiwibG9hZGluZyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJib29sIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFaEI7Ozs7NkJBR1E7QUFBQSx3QkFDdUUsS0FBS0EsS0FENUU7QUFBQSxVQUNBQyxLQURBLGVBQ0FBLEtBREE7QUFBQSxVQUNPQyxLQURQLGVBQ09BLEtBRFA7QUFBQSxVQUNjQyxPQURkLGVBQ2NBLE9BRGQ7QUFBQSxVQUN1QkMsUUFEdkIsZUFDdUJBLFFBRHZCO0FBQUEsVUFDaUNDLFFBRGpDLGVBQ2lDQSxRQURqQztBQUFBLFVBQzJDQyxJQUQzQyxlQUMyQ0EsSUFEM0M7QUFBQSxVQUNpREMsUUFEakQsZUFDaURBLFFBRGpEO0FBQUEsVUFDMkRDLE9BRDNELGVBQzJEQSxPQUQzRDtBQUdQLDBCQUNFLDJEQUFDLGtFQUFEO0FBQVEsYUFBSyxFQUFFTixLQUFmO0FBQXNCLGVBQU8sRUFBRUMsT0FBL0I7QUFBd0MsZ0JBQVEsRUFBRUMsUUFBbEQ7QUFBNEQsZ0JBQVEsRUFBRUMsUUFBdEU7QUFBZ0YsWUFBSSxFQUFFQyxJQUF0RjtBQUE0RixnQkFBUSxFQUFFQyxRQUF0RztBQUFnSCxlQUFPLEVBQUVDO0FBQXpILFNBQ0dQLEtBREgsQ0FERjtBQUtEOzs7O0VBZG1CUSwrQzs7QUFpQlhWLDBFQUFmO0FBRUFBLFdBQVcsQ0FBQ1csWUFBWixHQUEyQixFQUEzQjtBQUVBWCxXQUFXLENBQUNZLFNBQVosR0FBd0I7QUFDcEI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSk07O0FBTXBCOzs7QUFHQWIsT0FBSyxFQUFFWSxpREFBUyxDQUFDQyxNQVRHOztBQVdwQjs7O0FBR0FSLE1BQUksRUFBRU8saURBQVMsQ0FBQ0UsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQWhCLENBZGM7O0FBZXBCOzs7QUFHQWIsT0FBSyxFQUFFVyxpREFBUyxDQUFDQyxNQWxCRzs7QUFvQnBCOzs7O0FBSUFYLFNBQU8sRUFBRVUsaURBQVMsQ0FBQ0csSUF4QkM7O0FBMEJwQjs7OztBQUlBUixTQUFPLEVBQUVLLGlEQUFTLENBQUNHLElBOUJDOztBQWdDcEI7Ozs7QUFJQVgsVUFBUSxFQUFFUSxpREFBUyxDQUFDRyxJQXBDQTs7QUFzQ3BCOzs7O0FBSUFULFVBQVEsRUFBRU0saURBQVMsQ0FBQ0csSUExQ0E7O0FBNENwQjs7OztBQUlBWixVQUFRLEVBQUVTLGlEQUFTLENBQUNHLElBaERBOztBQWtEcEI7Ozs7QUFJQUMsVUFBUSxFQUFFSixpREFBUyxDQUFDSztBQXREQSxDQUF4QixDIiwiZmlsZSI6IjU3Njc5ZWUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vYnVsbWEuY3NzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJ1bG1hLWNvbXBvbmVudHMvZGlzdCc7XG5cbmNsYXNzIEJ1bG1hQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB9XG5cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dmFsdWUsIGNvbG9yLCByb3VuZGVkLCBkaXNhYmxlZCwgb3V0bGluZWQsIHNpemUsIGludmVydGVkLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj17Y29sb3J9IHJvdW5kZWQ9e3JvdW5kZWR9IGRpc2FibGVkPXtkaXNhYmxlZH0gb3V0bGluZWQ9e291dGxpbmVkfSBzaXplPXtzaXplfSBpbnZlcnRlZD17aW52ZXJ0ZWR9IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWxtYUJ1dHRvbjtcblxuQnVsbWFCdXR0b24uZGVmYXVsdFByb3BzID0ge307XG5cbkJ1bG1hQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBoYXNcbiAgICAgKiByb3VuZGVkIGNvcm5lcnMuXG4gICAgICovXG4gICAgcm91bmRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG93c1xuICAgICAqIHRoZSBcImxvYWRpbmdcIiBpY29uLlxuICAgICAqL1xuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaXNcbiAgICAgKiBvdXRsaW5lZC5cbiAgICAgKi9cbiAgICBvdXRsaW5lZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBoYXNcbiAgICAgKiBpbnZlcnRlZCBjb2xvcnMuXG4gICAgICovXG4gICAgaW52ZXJ0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaXNcbiAgICAgKiBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9