webpackHotUpdatemy_dash_component("main",{

/***/ "./src/lib/components/TextInput.react.js":
/*!***********************************************!*\
  !*** ./src/lib/components/TextInput.react.js ***!
  \***********************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TextInput = /*#__PURE__*/function (_Component) {
  _inherits(TextInput, _Component);

  var _super = _createSuper(TextInput);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      var newValue = e.target.value;

      _this.props.setProps({
        value: newValue
      });
    });

    _this.state = {
      value: 'default'
    };
    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.props.value,
        onChange: this.handleInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.value));
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextInput);
TextInput.defaultProps = {};
TextInput.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9UZXh0SW5wdXQucmVhY3QuanMiXSwibmFtZXMiOlsiVGV4dElucHV0IiwicHJvcHMiLCJlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFByb3BzIiwic3RhdGUiLCJsYWJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsd0VBTUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pCLFVBQU1DLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTFCOztBQUNBLFlBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQjtBQUFDRCxhQUFLLEVBQUVGO0FBQVIsT0FBcEI7QUFDRCxLQVRrQjs7QUFFakIsVUFBS0ksS0FBTCxHQUFhO0FBQ1hGLFdBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBS1E7QUFDUCwwQkFDSSxxRkFDRSwwRUFBUSxLQUFLSixLQUFMLENBQVdPLEtBQW5CLENBREYsZUFFRTtBQUFPLGFBQUssRUFBRSxLQUFLUCxLQUFMLENBQVdJLEtBQXpCO0FBQWdDLGdCQUFRLEVBQUUsS0FBS0k7QUFBL0MsUUFGRixlQUdFLHNFQUFJLEtBQUtSLEtBQUwsQ0FBV0ksS0FBZixDQUhGLENBREo7QUFPRDs7OztFQW5CcUJLLCtDOztBQXNCVFYsd0VBQWY7QUFFQUEsU0FBUyxDQUFDVyxZQUFWLEdBQXlCLEVBQXpCO0FBRUFYLFNBQVMsQ0FBQ1ksU0FBVixHQUFzQjtBQUNsQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKSTs7QUFNbEI7OztBQUdBUCxPQUFLLEVBQUVNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBVE47O0FBV2xCOzs7QUFHQVgsT0FBSyxFQUFFUyxpREFBUyxDQUFDQyxNQWRDOztBQWdCbEI7Ozs7QUFJQVQsVUFBUSxFQUFFUSxpREFBUyxDQUFDRztBQXBCRixDQUF0QixDIiwiZmlsZSI6Ijk1ZjgxNWUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJ2RlZmF1bHQnXG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3ZhbHVlOiBuZXdWYWx1ZX0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy52YWx1ZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcblxuVGV4dElucHV0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5UZXh0SW5wdXQucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=