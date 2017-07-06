"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleWrapper = function (_Component) {
  _inherits(StyleWrapper, _Component);

  function StyleWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StyleWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StyleWrapper.__proto__ || Object.getPrototypeOf(StyleWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.insertCss = function (styles) {
      return styles._insertCss();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StyleWrapper, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        insertCss: this.insertCss
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return StyleWrapper;
}(_react.Component);

StyleWrapper.propTypes = {
  children: _propTypes2.default.element.isRequired
};
StyleWrapper.childContextTypes = {
  insertCss: _propTypes2.default.func.isRequired
};
exports.default = StyleWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdHlsZVdyYXBwZXIuanMiXSwibmFtZXMiOlsiU3R5bGVXcmFwcGVyIiwiaW5zZXJ0Q3NzIiwic3R5bGVzIiwiX2luc2VydENzcyIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImNoaWxkQ29udGV4dFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQVNuQkMsUyxHQUFZLGtCQUFVO0FBQ3BCLGFBQU9DLE9BQU9DLFVBQVAsRUFBUDtBQUNELEs7Ozs7O3NDQUVpQjtBQUNoQixhQUFPO0FBQ0xGLG1CQUFXLEtBQUtBO0FBRFgsT0FBUDtBQUdEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtHLEtBQUwsQ0FBV0MsUUFBbEI7QUFDRDs7Ozs7O0FBckJrQkwsWSxDQUNaTSxTLEdBQVk7QUFDakJELFlBQVUsb0JBQVVFLE9BQVYsQ0FBa0JDO0FBRFgsQztBQURBUixZLENBS1pTLGlCLEdBQW9CO0FBQ3pCUixhQUFXLG9CQUFVUyxJQUFWLENBQWVGO0FBREQsQztrQkFMUlIsWSIsImZpbGUiOiJTdHlsZVdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xyXG4gICAgaW5zZXJ0Q3NzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgfTtcclxuXHJcbiAgaW5zZXJ0Q3NzID0gc3R5bGVzID0+IHtcclxuICAgIHJldHVybiBzdHlsZXMuX2luc2VydENzcygpO1xyXG4gIH07XHJcblxyXG4gIGdldENoaWxkQ29udGV4dCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGluc2VydENzczogdGhpcy5pbnNlcnRDc3NcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuIl19