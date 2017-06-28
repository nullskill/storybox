'use strict';

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _defaultConfig = require('./defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (newConfig) {
  var conf = (0, _deepmerge2.default)(_defaultConfig2.default, newConfig, { arrayMerge: function arrayMerge(d, s) {
      return s;
    } });
  require('@kadira/storybook/addons');
  conf.knob && require('@kadira/storybook-addon-knobs/register');
  // conf.backgrounds && require('react-storybook-addon-backgrounds/register');
  conf.options && require('@kadira/storybook-addon-options/register');
  conf.utils && require('react-storybook-addon-utils/register');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b20tYWRkb25zLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJuZXdDb25maWciLCJjb25mIiwiYXJyYXlNZXJnZSIsImQiLCJzIiwicmVxdWlyZSIsImtub2IiLCJvcHRpb25zIiwidXRpbHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUIsVUFBQ0MsU0FBRCxFQUFlO0FBQzlCLE1BQU1DLE9BQU8sa0RBQXlCRCxTQUF6QixFQUFvQyxFQUFDRSxZQUFZLG9CQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQSxDQUFWO0FBQUEsS0FBYixFQUFwQyxDQUFiO0FBQ0FDLFVBQVEsMEJBQVI7QUFDQUosT0FBS0ssSUFBTCxJQUFhRCxRQUFRLHdDQUFSLENBQWI7QUFDQTtBQUNBSixPQUFLTSxPQUFMLElBQWdCRixRQUFRLDBDQUFSLENBQWhCO0FBQ0FKLE9BQUtPLEtBQUwsSUFBY0gsUUFBUSxzQ0FBUixDQUFkO0FBQ0QsQ0FQRCIsImZpbGUiOiJjdXN0b20tYWRkb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xyXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL2RlZmF1bHRDb25maWcnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAobmV3Q29uZmlnKSA9PiB7XHJcbiAgY29uc3QgY29uZiA9IGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnLCBuZXdDb25maWcsIHthcnJheU1lcmdlOiAoZCwgcykgPT4gc30pO1xyXG4gIHJlcXVpcmUoJ0BrYWRpcmEvc3Rvcnlib29rL2FkZG9ucycpO1xyXG4gIGNvbmYua25vYiAmJiByZXF1aXJlKCdAa2FkaXJhL3N0b3J5Ym9vay1hZGRvbi1rbm9icy9yZWdpc3RlcicpO1xyXG4gIC8vIGNvbmYuYmFja2dyb3VuZHMgJiYgcmVxdWlyZSgncmVhY3Qtc3Rvcnlib29rLWFkZG9uLWJhY2tncm91bmRzL3JlZ2lzdGVyJyk7XHJcbiAgY29uZi5vcHRpb25zICYmIHJlcXVpcmUoJ0BrYWRpcmEvc3Rvcnlib29rLWFkZG9uLW9wdGlvbnMvcmVnaXN0ZXInKTtcclxuICBjb25mLnV0aWxzICYmIHJlcXVpcmUoJ3JlYWN0LXN0b3J5Ym9vay1hZGRvbi11dGlscy9yZWdpc3RlcicpO1xyXG59XHJcbiJdfQ==