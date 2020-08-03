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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9CdWxtYUJ1dHRvbi5yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFsQnV0dG9uIiwibGF6eSIsIkJ1bG1hQnV0dG9uIiwicHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJpZCIsIlByb3BUeXBlcyIsInN0cmluZyIsInZhbHVlIiwic2l6ZSIsIm9uZU9mIiwiY29sb3IiLCJyb3VuZGVkIiwiYm9vbCIsImxvYWRpbmciLCJvdXRsaW5lZCIsImludmVydGVkIiwiZGlzYWJsZWQiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxnQkFBR0Msa0RBQUksQ0FBQyx3Q0FBRCxDQUF2Qjs7SUFFTUMsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWhCOzs7OzZCQUdRO0FBRVAsMEJBQ0UsMkRBQUMsOENBQUQ7QUFBVSxnQkFBUSxFQUFFO0FBQXBCLHNCQUNFLDJEQUFDLFVBQUQsRUFBZ0IsS0FBS0EsS0FBckIsQ0FERixDQURGO0FBS0Q7Ozs7RUFibUJDLCtDOztBQWdCWEYsMEVBQWY7QUFFQUEsV0FBVyxDQUFDRyxZQUFaLEdBQTJCLEVBQTNCO0FBRUFILFdBQVcsQ0FBQ0ksU0FBWixHQUF3QjtBQUNwQjs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKTTs7QUFNcEI7OztBQUdBQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNDLE1BVEc7O0FBV3BCOzs7QUFHQUUsTUFBSSxFQUFFSCxpREFBUyxDQUFDSSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FkYzs7QUFlcEI7OztBQUdBQyxPQUFLLEVBQUVMLGlEQUFTLENBQUNDLE1BbEJHOztBQW9CcEI7Ozs7QUFJQUssU0FBTyxFQUFFTixpREFBUyxDQUFDTyxJQXhCQzs7QUEwQnBCOzs7O0FBSUFDLFNBQU8sRUFBRVIsaURBQVMsQ0FBQ08sSUE5QkM7O0FBZ0NwQjs7OztBQUlBRSxVQUFRLEVBQUVULGlEQUFTLENBQUNPLElBcENBOztBQXNDcEI7Ozs7QUFJQUcsVUFBUSxFQUFFVixpREFBUyxDQUFDTyxJQTFDQTs7QUE0Q3BCOzs7O0FBSUFJLFVBQVEsRUFBRVgsaURBQVMsQ0FBQ08sSUFoREE7O0FBa0RwQjs7OztBQUlBSyxVQUFRLEVBQUVaLGlEQUFTLENBQUNhO0FBdERBLENBQXhCLEMiLCJmaWxlIjoiNjQwYjQ1OC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGxhenksIFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZWFsQnV0dG9uID0gbGF6eShcIi4uLy4uL2ZyYWdtZW50L0J1dHRvbkZyYWdtZW50LnJlYWN0LmpzXCIpO1xuXG5jbGFzcyBCdWxtYUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgfVxuXG5cbiAgICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgICA8UmVhbEJ1dHRvbiB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICk7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bG1hQnV0dG9uO1xuXG5CdWxtYUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7fTtcblxuQnVsbWFCdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgZGlzcGxheWVkIGluIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYnV0dG9uIGhhc1xuICAgICAqIHJvdW5kZWQgY29ybmVycy5cbiAgICAgKi9cbiAgICByb3VuZGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYnV0dG9uIHNob3dzXG4gICAgICogdGhlIFwibG9hZGluZ1wiIGljb24uXG4gICAgICovXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBpc1xuICAgICAqIG91dGxpbmVkLlxuICAgICAqL1xuICAgIG91dGxpbmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYnV0dG9uIGhhc1xuICAgICAqIGludmVydGVkIGNvbG9ycy5cbiAgICAgKi9cbiAgICBpbnZlcnRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBpc1xuICAgICAqIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=