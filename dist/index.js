'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = exports.config = exports.storyParams = exports.wrapModules = exports.wrapModule = exports.setAddon = exports.addDecorator = exports.configure = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var storybook = _interopRequireWildcard(_storybook);

var _storybookAddonOptions = require('@kadira/storybook-addon-options');

var _reactStorybookAddonInfo = require('react-storybook-addon-info');

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var knob = _interopRequireWildcard(_storybookAddonKnobs);

var _reactStorybookAddonUtils = require('react-storybook-addon-utils');

var _reactStorybookAddonUtils2 = _interopRequireDefault(_reactStorybookAddonUtils);

var _defaultConfig = require('./defaultConfig');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _StyleWrapper = require('./StyleWrapper');

var _StyleWrapper2 = _interopRequireDefault(_StyleWrapper);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conf = _defaultConfig2.default;
function config() {
  var newConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // const
  conf = (0, _deepmerge2.default)(_defaultConfig2.default, newConfig, { arrayMerge: function arrayMerge(d, s) {
      return s;
    } });
  conf.options && (0, _storybookAddonOptions.setOptions)(conf.options);
  conf.knob && storybook.addDecorator(knob.withKnobs);
  conf.utils && storybook.addDecorator((0, _reactStorybookAddonUtils2.default)(conf.utils));
  // conf.backgrounds && storybook.addDecorator(backgroundsAddon(conf.backgrounds));
  conf.isomorphicStyles && storybook.addDecorator(function (story) {
    return _react2.default.createElement(_StyleWrapper2.default, { children: story() });
  });
  conf.info && storybook.setAddon(_reactStorybookAddonInfo2.default);
  conf.modules && wrapModules(conf.modules, module);
}

var storiesOf = function storiesOf() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var res = storybook.storiesOf.apply(storybook, args);
  res._add = res.add;
  if (conf.info) {
    res.add = function () {
      if (res.inAdd) {
        return res._add.apply(res, arguments);
      }
      res.inAdd = true;
      var result = res.addWithInfo.apply(res, arguments);
      res.inAdd = false;
      return result;
    };
  }
  res.addHtml = function (html) {
    // console.log({html});
    return res.addDecorator(function (story) {
      return _react2.default.createElement(
        'div',
        null,
        html,
        story()
      );
    });
  };
  res.addStyle = function (style) {
    // console.log({style});
    return res.addDecorator(function (story) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'style',
          null,
          style.toString()
        ),
        story()
      );
    });
  };
  return res;
};

var storyParams = {
  action: storybook.action,
  knob: knob,
  storiesOf: storiesOf
};

function wrapModule(module) {
  if (typeof module === 'function') {
    module(storyParams);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.__esModule) {
    for (var key in module) {
      // eslint-disable-line
      module[key](storyParams);
    }
  } else {
    console.log('DO SOMETHING ELSE');
  }
}

function wrapModules(stories, module) {
  return storybook.configure(function () {
    for (var key in stories) {
      // eslint-disable-line
      wrapModule(stories[key]);
    }
  }, module);
}
var configure = storybook.configure,
    addDecorator = storybook.addDecorator,
    setAddon = storybook.setAddon;
exports.configure = configure;
exports.addDecorator = addDecorator;
exports.setAddon = setAddon;
// export storybook;

exports.wrapModule = wrapModule;
exports.wrapModules = wrapModules;
exports.storyParams = storyParams;
exports.config = config;
exports.defaultConfig = _defaultConfig2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yeWJvb2siLCJrbm9iIiwiY29uZiIsImNvbmZpZyIsIm5ld0NvbmZpZyIsImFycmF5TWVyZ2UiLCJkIiwicyIsIm9wdGlvbnMiLCJhZGREZWNvcmF0b3IiLCJ3aXRoS25vYnMiLCJ1dGlscyIsImlzb21vcnBoaWNTdHlsZXMiLCJzdG9yeSIsImluZm8iLCJzZXRBZGRvbiIsIm1vZHVsZXMiLCJ3cmFwTW9kdWxlcyIsIm1vZHVsZSIsInN0b3JpZXNPZiIsImFyZ3MiLCJyZXMiLCJfYWRkIiwiYWRkIiwiaW5BZGQiLCJyZXN1bHQiLCJhZGRXaXRoSW5mbyIsImFkZEh0bWwiLCJodG1sIiwiYWRkU3R5bGUiLCJzdHlsZSIsInRvU3RyaW5nIiwic3RvcnlQYXJhbXMiLCJhY3Rpb24iLCJ3cmFwTW9kdWxlIiwiX19lc01vZHVsZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yaWVzIiwiY29uZmlndXJlIiwiZGVmYXVsdENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsUzs7QUFDWjs7QUFDQTs7OztBQUNBOztJQUFZQyxJOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlDLDhCQUFKO0FBQ0EsU0FBU0MsTUFBVCxHQUFnQztBQUFBLE1BQWhCQyxTQUFnQix1RUFBSixFQUFJOztBQUM5QjtBQUNBRixTQUFPLGtEQUF5QkUsU0FBekIsRUFBb0MsRUFBQ0MsWUFBWSxvQkFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUEsQ0FBVjtBQUFBLEtBQWIsRUFBcEMsQ0FBUDtBQUNBTCxPQUFLTSxPQUFMLElBQWdCLHVDQUFnQk4sS0FBS00sT0FBckIsQ0FBaEI7QUFDQU4sT0FBS0QsSUFBTCxJQUFhRCxVQUFVUyxZQUFWLENBQXVCUixLQUFLUyxTQUE1QixDQUFiO0FBQ0FSLE9BQUtTLEtBQUwsSUFBY1gsVUFBVVMsWUFBVixDQUF1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IiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgc3Rvcnlib29rIGZyb20gJ0BrYWRpcmEvc3Rvcnlib29rJztcclxuaW1wb3J0IHsgc2V0T3B0aW9ucyBhcyBzZXRPcHRpb25zQWRkb24gfSBmcm9tICdAa2FkaXJhL3N0b3J5Ym9vay1hZGRvbi1vcHRpb25zJztcclxuaW1wb3J0IGluZm9BZGRvbiBmcm9tICdyZWFjdC1zdG9yeWJvb2stYWRkb24taW5mbyc7XHJcbmltcG9ydCAqIGFzIGtub2IgZnJvbSAnQGthZGlyYS9zdG9yeWJvb2stYWRkb24ta25vYnMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAncmVhY3Qtc3Rvcnlib29rLWFkZG9uLXV0aWxzJztcclxuaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSAnLi9kZWZhdWx0Q29uZmlnJztcclxuaW1wb3J0IFN0eWxlV3JhcHBlciBmcm9tICcuL1N0eWxlV3JhcHBlcic7XHJcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcclxuXHJcbmxldCBjb25mID0gZGVmYXVsdENvbmZpZztcclxuZnVuY3Rpb24gY29uZmlnKG5ld0NvbmZpZyA9IHt9KSB7XHJcbiAgLy8gY29uc3RcclxuICBjb25mID0gZGVlcG1lcmdlKGRlZmF1bHRDb25maWcsIG5ld0NvbmZpZywge2FycmF5TWVyZ2U6IChkLCBzKSA9PiBzfSk7XHJcbiAgY29uZi5vcHRpb25zICYmIHNldE9wdGlvbnNBZGRvbihjb25mLm9wdGlvbnMpO1xyXG4gIGNvbmYua25vYiAmJiBzdG9yeWJvb2suYWRkRGVjb3JhdG9yKGtub2Iud2l0aEtub2JzKTtcclxuICBjb25mLnV0aWxzICYmIHN0b3J5Ym9vay5hZGREZWNvcmF0b3IodXRpbHMoY29uZi51dGlscykpO1xyXG4gIC8vIGNvbmYuYmFja2dyb3VuZHMgJiYgc3Rvcnlib29rLmFkZERlY29yYXRvcihiYWNrZ3JvdW5kc0FkZG9uKGNvbmYuYmFja2dyb3VuZHMpKTtcclxuICBjb25mLmlzb21vcnBoaWNTdHlsZXMgJiYgc3Rvcnlib29rLmFkZERlY29yYXRvcihzdG9yeSA9PiAoPFN0eWxlV3JhcHBlciBjaGlsZHJlbj17c3RvcnkoKX0gLz4pKTtcclxuICBjb25mLmluZm8gJiYgc3Rvcnlib29rLnNldEFkZG9uKGluZm9BZGRvbik7XHJcbiAgY29uZi5tb2R1bGVzICYmIHdyYXBNb2R1bGVzKGNvbmYubW9kdWxlcywgbW9kdWxlKTtcclxufVxyXG5cclxuY29uc3Qgc3Rvcmllc09mID0gKC4uLmFyZ3MpID0+IHtcclxuICBjb25zdCByZXMgPSBzdG9yeWJvb2suc3Rvcmllc09mKC4uLmFyZ3MpXHJcbiAgcmVzLl9hZGQgPSByZXMuYWRkO1xyXG4gIGlmIChjb25mLmluZm8pIHtcclxuICAgIHJlcy5hZGQgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAocmVzLmluQWRkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5fYWRkKC4uLmFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlcy5pbkFkZCA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5hZGRXaXRoSW5mbyguLi5hcmdzKTtcclxuICAgICAgcmVzLmluQWRkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcy5hZGRIdG1sID0gKGh0bWwpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHtodG1sfSk7XHJcbiAgICByZXR1cm4gcmVzLmFkZERlY29yYXRvcigoc3RvcnkpID0+IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aHRtbH1cclxuICAgICAgICB7c3RvcnkoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApKVxyXG4gIH1cclxuICByZXMuYWRkU3R5bGUgPSAoc3R5bGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHtzdHlsZX0pO1xyXG4gICAgcmV0dXJuIHJlcy5hZGREZWNvcmF0b3IoKHN0b3J5KSA9PiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlPntzdHlsZS50b1N0cmluZygpfTwvc3R5bGU+XHJcbiAgICAgICAge3N0b3J5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSlcclxuICB9XHJcbiAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmNvbnN0IHN0b3J5UGFyYW1zID0ge1xyXG4gIGFjdGlvbjogc3Rvcnlib29rLmFjdGlvbixcclxuICBrbm9iLFxyXG4gIHN0b3JpZXNPZixcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiB3cmFwTW9kdWxlKG1vZHVsZSkge1xyXG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBtb2R1bGUoc3RvcnlQYXJhbXMpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLl9fZXNNb2R1bGUpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBtb2R1bGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICBtb2R1bGVba2V5XShzdG9yeVBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdETyBTT01FVEhJTkcgRUxTRScpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcE1vZHVsZXMoc3RvcmllcywgbW9kdWxlKSB7XHJcbiAgcmV0dXJuIHN0b3J5Ym9vay5jb25maWd1cmUoKCkgPT4ge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHN0b3JpZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICB3cmFwTW9kdWxlKHN0b3JpZXNba2V5XSk7XHJcbiAgICB9XHJcbiAgfSwgbW9kdWxlKTtcclxufVxyXG5jb25zdCB7IGNvbmZpZ3VyZSwgYWRkRGVjb3JhdG9yLCBzZXRBZGRvbiB9ID0gc3Rvcnlib29rO1xyXG5leHBvcnQgeyBjb25maWd1cmUsIGFkZERlY29yYXRvciwgc2V0QWRkb24gfTtcclxuLy8gZXhwb3J0IHN0b3J5Ym9vaztcclxuZXhwb3J0IHsgd3JhcE1vZHVsZSwgd3JhcE1vZHVsZXMsIHN0b3J5UGFyYW1zLCBjb25maWcsIGRlZmF1bHRDb25maWcgfTtcclxuIl19