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
    _classCallCheck(this, Toggle);

    return _super.call(this, props);
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          color = _this$props.color,
          rounded = _this$props.rounded;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bulma_components_dist__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: color,
        rounded: true,
        onClick: this.handleClick
      }, value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9Ub2dnbGUucmVhY3QuanMiXSwibmFtZXMiOlsiVG9nZ2xlIiwicHJvcHMiLCJ2YWx1ZSIsImNvbG9yIiwicm91bmRlZCIsImhhbmRsZUNsaWNrIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVoQjs7Ozs2QkFHUTtBQUFBLHdCQUMwQixLQUFLQSxLQUQvQjtBQUFBLFVBQ0FDLEtBREEsZUFDQUEsS0FEQTtBQUFBLFVBQ09DLEtBRFAsZUFDT0EsS0FEUDtBQUFBLFVBQ2NDLE9BRGQsZUFDY0EsT0FEZDtBQUdQLDBCQUNFLDJEQUFDLGtFQUFEO0FBQVEsYUFBSyxFQUFFRCxLQUFmO0FBQXNCLGVBQU8sTUFBN0I7QUFBOEIsZUFBTyxFQUFFLEtBQUtFO0FBQTVDLFNBQ0dILEtBREgsQ0FERjtBQUtEOzs7O0VBZGNJLCtDOztBQWlCTk4scUVBQWY7QUFFQUEsTUFBTSxDQUFDTyxZQUFQLEdBQXNCLEVBQXRCO0FBRUFQLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQjtBQUNmOzs7QUFHQUMsSUFBRSxFQUFFQyxpREFBUyxDQUFDQyxNQUpDOztBQU1mOzs7QUFHQUMsT0FBSyxFQUFFRixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVRUOztBQVdmOzs7QUFHQVgsT0FBSyxFQUFFUSxpREFBUyxDQUFDQyxNQWRGOztBQWdCZjs7OztBQUlBRyxVQUFRLEVBQUVKLGlEQUFTLENBQUNLO0FBcEJMLENBQW5CLEMiLCJmaWxlIjoiMWExMmYyYS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9idWxtYS5jc3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYnVsbWEtY29tcG9uZW50cy9kaXN0JztcblxuY2xhc3MgVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB9XG5cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dmFsdWUsIGNvbG9yLCByb3VuZGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj17Y29sb3J9IHJvdW5kZWQgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcblxuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5Ub2dnbGUucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=