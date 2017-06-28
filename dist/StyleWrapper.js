'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

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
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        insertCss: this.insertCss
      };
    }
  }, {
    key: 'render',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdHlsZVdyYXBwZXIuanMiXSwibmFtZXMiOlsiU3R5bGVXcmFwcGVyIiwiaW5zZXJ0Q3NzIiwic3R5bGVzIiwiX2luc2VydENzcyIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImNoaWxkQ29udGV4dFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQVNuQkMsUyxHQUFZLFVBQUNDLE1BQUQsRUFBWTtBQUN0QixhQUFPQSxPQUFPQyxVQUFQLEVBQVA7QUFDRCxLOzs7OztzQ0FFaUI7QUFDaEIsYUFBTztBQUNMRixtQkFBVyxLQUFLQTtBQURYLE9BQVA7QUFHRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLRyxLQUFMLENBQVdDLFFBQWxCO0FBQ0Q7Ozs7OztBQXJCa0JMLFksQ0FDWk0sUyxHQUFZO0FBQ2pCRCxZQUFVLG9CQUFVRSxPQUFWLENBQWtCQztBQURYLEM7QUFEQVIsWSxDQUtaUyxpQixHQUFvQjtBQUN6QlIsYUFBVyxvQkFBVVMsSUFBVixDQUFlRjtBQURELEM7a0JBTFJSLFkiLCJmaWxlIjoiU3R5bGVXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xyXG4gICAgaW5zZXJ0Q3NzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH07XHJcblxyXG4gIGluc2VydENzcyA9IChzdHlsZXMpID0+IHtcclxuICAgIHJldHVybiBzdHlsZXMuX2luc2VydENzcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5zZXJ0Q3NzOiB0aGlzLmluc2VydENzcyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuIl19