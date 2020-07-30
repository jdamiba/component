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
      // get the value from the DOM node
      var newValue = e.target.value; // update the state!

      _this.setState({
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.value,
        onChange: this.handleInputChange
      });
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9UZXh0SW5wdXQucmVhY3QuanMiXSwibmFtZXMiOlsiVGV4dElucHV0IiwicHJvcHMiLCJlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwic3RhdGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix3RUFNQyxVQUFDQyxDQUFELEVBQU87QUFDekI7QUFDQSxVQUFNQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUExQixDQUZ5QixDQUd6Qjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFDWkQsYUFBSyxFQUFFRjtBQURLLE9BQWQ7QUFHRCxLQWJrQjs7QUFFakIsVUFBS0ksS0FBTCxHQUFhO0FBQ1hGLFdBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBU1E7QUFDUCwwQkFBTztBQUFPLGFBQUssRUFBRSxLQUFLRSxLQUFMLENBQVdGLEtBQXpCO0FBQWdDLGdCQUFRLEVBQUUsS0FBS0c7QUFBL0MsUUFBUDtBQUNEOzs7O0VBakJxQkMsK0M7O0FBb0JUVCx3RUFBZixFIiwiZmlsZSI6ImI3NTg1ODItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCdcbiAgICB9XG4gIH1cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIC8vIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUhXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0vPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=