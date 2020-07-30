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
/* harmony import */ var _fragment_bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fragment/bulma.css */ "./src/fragment/bulma.css");
/* harmony import */ var _fragment_bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fragment_bulma_css__WEBPACK_IMPORTED_MODULE_2__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9CdWxtYUJ1dHRvbi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFsQnV0dG9uIiwibGF6eSIsIkJ1bG1hQnV0dG9uIiwicHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsInZhbHVlIiwic2l6ZSIsIm9uZU9mIiwiY29sb3IiLCJyb3VuZGVkIiwiYm9vbCIsImxvYWRpbmciLCJvdXRsaW5lZCIsImludmVydGVkIiwiZGlzYWJsZWQiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsZ0JBQUdDLGtEQUFJLENBQUMsd0NBQUQsQ0FBdkI7O0lBRU1DLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVoQjs7Ozs2QkFHUTtBQUVQLDBCQUNFLDJEQUFDLDhDQUFEO0FBQVUsZ0JBQVEsRUFBRTtBQUFwQixzQkFDRSwyREFBQyxVQUFELEVBQWdCLEtBQUtBLEtBQXJCLENBREYsQ0FERjtBQUtEOzs7O0VBYm1CQywrQzs7QUFnQlhGLDBFQUFmO0FBRUFBLFdBQVcsQ0FBQ0csWUFBWixHQUEyQixFQUEzQjtBQUVBSCxXQUFXLENBQUNJLFNBQVosR0FBd0I7QUFDcEI7OztBQUdBQyxJQUFFLEVBQUVDLGlEQUFTLENBQUNDLE1BSk07O0FBTXBCOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQVRHOztBQVdwQjs7O0FBR0FFLE1BQUksRUFBRUgsaURBQVMsQ0FBQ0ksS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQWhCLENBZGM7O0FBZXBCOzs7QUFHQUMsT0FBSyxFQUFFTCxpREFBUyxDQUFDQyxNQWxCRzs7QUFvQnBCOzs7O0FBSUFLLFNBQU8sRUFBRU4saURBQVMsQ0FBQ08sSUF4QkM7O0FBMEJwQjs7OztBQUlBQyxTQUFPLEVBQUVSLGlEQUFTLENBQUNPLElBOUJDOztBQWdDcEI7Ozs7QUFJQUUsVUFBUSxFQUFFVCxpREFBUyxDQUFDTyxJQXBDQTs7QUFzQ3BCOzs7O0FBSUFHLFVBQVEsRUFBRVYsaURBQVMsQ0FBQ08sSUExQ0E7O0FBNENwQjs7OztBQUlBSSxVQUFRLEVBQUVYLGlEQUFTLENBQUNPLElBaERBOztBQWtEcEI7Ozs7QUFJQUssVUFBUSxFQUFFWixpREFBUyxDQUFDYTtBQXREQSxDQUF4QixDIiwiZmlsZSI6ImJlYjBiMTgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBsYXp5LCBTdXNwZW5zZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi4vLi4vZnJhZ21lbnQvYnVsbWEuY3NzJztcblxuY29uc3QgUmVhbEJ1dHRvbiA9IGxhenkoXCIuLi8uLi9mcmFnbWVudC9CdXR0b25GcmFnbWVudC5yZWFjdC5qc1wiKTtcblxuY2xhc3MgQnVsbWFCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIH1cblxuXG4gICAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgICAgICAgPFJlYWxCdXR0b24gey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICApO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWxtYUJ1dHRvbjtcblxuQnVsbWFCdXR0b24uZGVmYXVsdFByb3BzID0ge307XG5cbkJ1bG1hQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGRpc3BsYXllZCBpbiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBoYXNcbiAgICAgKiByb3VuZGVkIGNvcm5lcnMuXG4gICAgICovXG4gICAgcm91bmRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG93c1xuICAgICAqIHRoZSBcImxvYWRpbmdcIiBpY29uLlxuICAgICAqL1xuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaXNcbiAgICAgKiBvdXRsaW5lZC5cbiAgICAgKi9cbiAgICBvdXRsaW5lZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBoYXNcbiAgICAgKiBpbnZlcnRlZCBjb2xvcnMuXG4gICAgICovXG4gICAgaW52ZXJ0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBidXR0b24gaXNcbiAgICAgKiBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9