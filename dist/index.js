"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = exports.config = exports.storyParams = exports.wrapModules = exports.wrapModule = exports.setAddon = exports.addDecorator = exports.configure = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _storybook = require("@kadira/storybook");

var storybook = _interopRequireWildcard(_storybook);

var _storybookAddonOptions = require("@kadira/storybook-addon-options");

var _reactStorybookAddonInfo = require("react-storybook-addon-info");

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

var _storybookAddonKnobs = require("@kadira/storybook-addon-knobs");

var knob = _interopRequireWildcard(_storybookAddonKnobs);

var _reactStorybookAddonUtils = require("react-storybook-addon-utils");

var _reactStorybookAddonUtils2 = _interopRequireDefault(_reactStorybookAddonUtils);

var _defaultConfig = require("./defaultConfig");

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _StyleWrapper = require("./StyleWrapper");

var _StyleWrapper2 = _interopRequireDefault(_StyleWrapper);

var _deepmerge = require("deepmerge");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conf = _defaultConfig2.default;
function config() {
  var newConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (module.hot && module.hot.status() === 'apply') {
    if (newConfig.modules) {
      // console.log('changed modules', newConfig.modules);
      module.hot.accept('.', wrapModules(newConfig.modules, module));
      return;
    }
  }

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
        "div",
        null,
        html,
        story()
      );
    });
  };
  // console.log(res);
  res.addStyle = function (style) {
    return res.addDecorator(function (story) {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "style",
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
  if (typeof module === "function") {
    module(storyParams);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.__esModule) {
    for (var key in module) {
      // eslint-disable-line
      module[key](storyParams);
    }
  } else {
    console.log("DO SOMETHING ELSE");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yeWJvb2siLCJrbm9iIiwiY29uZiIsImNvbmZpZyIsIm5ld0NvbmZpZyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsIm1vZHVsZXMiLCJhY2NlcHQiLCJ3cmFwTW9kdWxlcyIsImFycmF5TWVyZ2UiLCJkIiwicyIsIm9wdGlvbnMiLCJhZGREZWNvcmF0b3IiLCJ3aXRoS25vYnMiLCJ1dGlscyIsImlzb21vcnBoaWNTdHlsZXMiLCJzdG9yeSIsImluZm8iLCJzZXRBZGRvbiIsInN0b3JpZXNPZiIsImFyZ3MiLCJyZXMiLCJfYWRkIiwiYWRkIiwiaW5BZGQiLCJyZXN1bHQiLCJhZGRXaXRoSW5mbyIsImFkZEh0bWwiLCJodG1sIiwiYWRkU3R5bGUiLCJzdHlsZSIsInRvU3RyaW5nIiwic3RvcnlQYXJhbXMiLCJhY3Rpb24iLCJ3cmFwTW9kdWxlIiwiX19lc01vZHVsZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yaWVzIiwiY29uZmlndXJlIiwiZGVmYXVsdENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsUzs7QUFDWjs7QUFDQTs7OztBQUNBOztJQUFZQyxJOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlDLDhCQUFKO0FBQ0EsU0FBU0MsTUFBVCxHQUFnQztBQUFBLE1BQWhCQyxTQUFnQix1RUFBSixFQUFJOztBQUM5QixNQUFJQyxPQUFPQyxHQUFQLElBQWNELE9BQU9DLEdBQVAsQ0FBV0MsTUFBWCxPQUF3QixPQUExQyxFQUFtRDtBQUNqRCxRQUFJSCxVQUFVSSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0FILGFBQU9DLEdBQVAsQ0FBV0csTUFBWCxDQUFrQixHQUFsQixFQUNFQyxZQUFZTixVQUFVSSxPQUF0QixFQUErQkgsTUFBL0IsQ0FERjtBQUdBO0FBQ0Q7QUFDRjs7QUFFREgsU0FBTyxrREFBeUJFLFNBQXpCLEVB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LFM7SUFBVzVCLFksR0FBMkJmLFMsQ0FBM0JlLFk7SUFBY00sUSxHQUFhckIsUyxDQUFicUIsUTtRQUN4QnNCLFMsR0FBQUEsUztRQUFXNUIsWSxHQUFBQSxZO1FBQWNNLFEsR0FBQUEsUTtBQUNsQzs7UUFDU2dCLFUsR0FBQUEsVTtRQUFZM0IsVyxHQUFBQSxXO1FBQWF5QixXLEdBQUFBLFc7UUFBYWhDLE0sR0FBQUEsTTtRQUFReUMsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgc3Rvcnlib29rIGZyb20gXCJAa2FkaXJhL3N0b3J5Ym9va1wiO1xyXG5pbXBvcnQgeyBzZXRPcHRpb25zIGFzIHNldE9wdGlvbnNBZGRvbiB9IGZyb20gXCJAa2FkaXJhL3N0b3J5Ym9vay1hZGRvbi1vcHRpb25zXCI7XHJcbmltcG9ydCBpbmZvQWRkb24gZnJvbSBcInJlYWN0LXN0b3J5Ym9vay1hZGRvbi1pbmZvXCI7XHJcbmltcG9ydCAqIGFzIGtub2IgZnJvbSBcIkBrYWRpcmEvc3Rvcnlib29rLWFkZG9uLWtub2JzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwicmVhY3Qtc3Rvcnlib29rLWFkZG9uLXV0aWxzXCI7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gXCIuL2RlZmF1bHRDb25maWdcIjtcclxuaW1wb3J0IFN0eWxlV3JhcHBlciBmcm9tIFwiLi9TdHlsZVdyYXBwZXJcIjtcclxuaW1wb3J0IGRlZXBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XHJcblxyXG5sZXQgY29uZiA9IGRlZmF1bHRDb25maWc7XHJcbmZ1bmN0aW9uIGNvbmZpZyhuZXdDb25maWcgPSB7fSkge1xyXG4gIGlmIChtb2R1bGUuaG90ICYmIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdhcHBseScpIHtcclxuICAgIGlmIChuZXdDb25maWcubW9kdWxlcykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlZCBtb2R1bGVzJywgbmV3Q29uZmlnLm1vZHVsZXMpO1xyXG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLicsXHJcbiAgICAgICAgd3JhcE1vZHVsZXMobmV3Q29uZmlnLm1vZHVsZXMsIG1vZHVsZSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZiA9IGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnLCBuZXdDb25maWcsIHsgYXJyYXlNZXJnZTogKGQsIHMpID0+IHMgfSk7XHJcbiAgY29uZi5vcHRpb25zICYmIHNldE9wdGlvbnNBZGRvbihjb25mLm9wdGlvbnMpO1xyXG4gIGNvbmYua25vYiAmJiBzdG9yeWJvb2suYWRkRGVjb3JhdG9yKGtub2Iud2l0aEtub2JzKTtcclxuICBjb25mLnV0aWxzICYmIHN0b3J5Ym9vay5hZGREZWNvcmF0b3IodXRpbHMoY29uZi51dGlscykpO1xyXG4gIC8vIGNvbmYuYmFja2dyb3VuZHMgJiYgc3Rvcnlib29rLmFkZERlY29yYXRvcihiYWNrZ3JvdW5kc0FkZG9uKGNvbmYuYmFja2dyb3VuZHMpKTtcclxuICBjb25mLmlzb21vcnBoaWNTdHlsZXMgJiZcclxuICAgIHN0b3J5Ym9vay5hZGREZWNvcmF0b3Ioc3RvcnkgPT4gPFN0eWxlV3JhcHBlciBjaGlsZHJlbj17c3RvcnkoKX0gLz4pO1xyXG4gIGNvbmYuaW5mbyAmJiBzdG9yeWJvb2suc2V0QWRkb24oaW5mb0FkZG9uKTtcclxuICBjb25mLm1vZHVsZXMgJiYgd3JhcE1vZHVsZXMoY29uZi5tb2R1bGVzLCBtb2R1bGUpO1xyXG59XHJcblxyXG5jb25zdCBzdG9yaWVzT2YgPSAoLi4uYXJncykgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IHN0b3J5Ym9vay5zdG9yaWVzT2YoLi4uYXJncyk7XHJcbiAgcmVzLl9hZGQgPSByZXMuYWRkO1xyXG4gIGlmIChjb25mLmluZm8pIHtcclxuICAgIHJlcy5hZGQgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAocmVzLmluQWRkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5fYWRkKC4uLmFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlcy5pbkFkZCA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5hZGRXaXRoSW5mbyguLi5hcmdzKTtcclxuICAgICAgcmVzLmluQWRkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gIH1cclxuICByZXMuYWRkSHRtbCA9IGh0bWwgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coe2h0bWx9KTtcclxuICAgIHJldHVybiByZXMuYWRkRGVjb3JhdG9yKHN0b3J5ID0+IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aHRtbH1cclxuICAgICAgICB7c3RvcnkoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgcmVzLmFkZFN0eWxlID0gc3R5bGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcy5hZGREZWNvcmF0b3Ioc3RvcnkgPT4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZT57c3R5bGUudG9TdHJpbmcoKX08L3N0eWxlPlxyXG4gICAgICAgIHtzdG9yeSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmNvbnN0IHN0b3J5UGFyYW1zID0ge1xyXG4gIGFjdGlvbjogc3Rvcnlib29rLmFjdGlvbixcclxuICBrbm9iLFxyXG4gIHN0b3JpZXNPZlxyXG59O1xyXG5cclxuZnVuY3Rpb24gd3JhcE1vZHVsZShtb2R1bGUpIHtcclxuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICBtb2R1bGUoc3RvcnlQYXJhbXMpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuX19lc01vZHVsZSkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIG1vZHVsZSkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIG1vZHVsZVtrZXldKHN0b3J5UGFyYW1zKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coXCJETyBTT01FVEhJTkcgRUxTRVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBNb2R1bGVzKHN0b3JpZXMsIG1vZHVsZSkge1xyXG4gIHJldHVybiBzdG9yeWJvb2suY29uZmlndXJlKCgpID0+IHtcclxuICAgIGZvciAobGV0IGtleSBpbiBzdG9yaWVzKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgd3JhcE1vZHVsZShzdG9yaWVzW2tleV0pO1xyXG4gICAgfVxyXG4gIH0sIG1vZHVsZSk7XHJcbn1cclxuY29uc3QgeyBjb25maWd1cmUsIGFkZERlY29yYXRvciwgc2V0QWRkb24gfSA9IHN0b3J5Ym9vaztcclxuZXhwb3J0IHsgY29uZmlndXJlLCBhZGREZWNvcmF0b3IsIHNldEFkZG9uIH07XHJcbi8vIGV4cG9ydCBzdG9yeWJvb2s7XHJcbmV4cG9ydCB7IHdyYXBNb2R1bGUsIHdyYXBNb2R1bGVzLCBzdG9yeVBhcmFtcywgY29uZmlnLCBkZWZhdWx0Q29uZmlnIH07XHJcbiJdfQ==