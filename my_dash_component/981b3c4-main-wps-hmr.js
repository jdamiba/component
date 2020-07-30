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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.props.value,
        onChange: this.handleInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.value), " // here we're displaying our state");
    }
  }]);

  return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL3NyYy9saWIvY29tcG9uZW50cy9UZXh0SW5wdXQucmVhY3QuanMiXSwibmFtZXMiOlsiVGV4dElucHV0IiwicHJvcHMiLCJlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwic3RhdGUiLCJsYWJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFM7Ozs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHdFQU1DLFVBQUNDLENBQUQsRUFBTztBQUN6QjtBQUNBLFVBQU1DLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTFCLENBRnlCLENBR3pCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUNaRCxhQUFLLEVBQUVGO0FBREssT0FBZDtBQUdELEtBYmtCOztBQUVqQixVQUFLSSxLQUFMLEdBQWE7QUFDWEYsV0FBSyxFQUFFO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFTUTtBQUNQLDBCQUFPLHFGQUNMLDBFQUFRLEtBQUtKLEtBQUwsQ0FBV08sS0FBbkIsQ0FESyxlQUVMO0FBQU8sYUFBSyxFQUFFLEtBQUtQLEtBQUwsQ0FBV0ksS0FBekI7QUFBZ0MsZ0JBQVEsRUFBRSxLQUFLSTtBQUEvQyxRQUZLLGVBR0wsc0VBQUksS0FBS0YsS0FBTCxDQUFXRixLQUFmLENBSEssd0NBQVA7QUFLRDs7OztFQXJCcUJLLCtDOztBQXdCVFYsd0VBQWYsRSIsImZpbGUiOiI5ODFiM2M0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJ2RlZmF1bHQnXG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAvLyBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIERPTSBub2RlXG4gICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IG5ld1ZhbHVlXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8bGFiZWw+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICA8cD57dGhpcy5zdGF0ZS52YWx1ZX08L3A+IC8vIGhlcmUgd2UncmUgZGlzcGxheWluZyBvdXIgc3RhdGVcbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9