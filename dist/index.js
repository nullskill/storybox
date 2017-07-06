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

  // if (module.hot) {
  //   module.hot.accept();
  // }

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
        "div",
        { className: "add-html-from-storybox" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdG9yeWJvb2siLCJrbm9iIiwiY29uZiIsImNvbmZpZyIsIm5ld0NvbmZpZyIsImFycmF5TWVyZ2UiLCJkIiwicyIsIm9wdGlvbnMiLCJhZGREZWNvcmF0b3IiLCJ3aXRoS25vYnMiLCJ1dGlscyIsImlzb21vcnBoaWNTdHlsZXMiLCJzdG9yeSIsImluZm8iLCJzZXRBZGRvbiIsIm1vZHVsZXMiLCJ3cmFwTW9kdWxlcyIsIm1vZHVsZSIsInN0b3JpZXNPZiIsImFyZ3MiLCJyZXMiLCJfYWRkIiwiYWRkIiwiaW5BZGQiLCJyZXN1bHQiLCJhZGRXaXRoSW5mbyIsImFkZEh0bWwiLCJodG1sIiwiYWRkU3R5bGUiLCJzdHlsZSIsInRvU3RyaW5nIiwic3RvcnlQYXJhbXMiLCJhY3Rpb24iLCJ3cmFwTW9kdWxlIiwiX19lc01vZHVsZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yaWVzIiwiY29uZmlndXJlIiwiZGVmYXVsdENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsUzs7QUFDWjs7QUFDQTs7OztBQUNBOztJQUFZQyxJOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlDLDhCQUFKO0FBQ0EsU0FBU0MsTUFBVCxHQUFnQztBQUFBLE1BQWhCQyxTQUFnQix1RUFBSixFQUFJOztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQUYsU0FBTyxrREFBeUJFLFNBQXpCLEVBQW9DLEVBQUVDLFlBQVksb0JBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVBLENBQVY7QUFBQSxLQUFkLEVBQXBDLENBQVA7QUFDQUwsT0FBS00sT0FBTCxJQUFnQix1Q0FBZ0JOLEtBQUtNLE9BQXJCLENBQWhCO0FBQ0FOLE9BQUtELElBQUwsSUFBYUQsVUFBVVMsWUFBVixDQUF1QlIsS0FBS1MsU0FBNUIsQ0FBYjtBQUNBUixPQUFLUyxLQUFMLElBQWNYLFVBQVVTLFlBQVYsQ0FBdUIsd0NBQU1QLEtBQUtTLEtBQVgsQ0FBdkIsQ0FBZDtBQUNBO0FBQ0FULE9BQUtVLGdCQUFMLElBQ0VaLFVBQVVTLFlBQVYsQ0FBdUI7QUFBQSxXQUFTLHdEQUFjLFVBQVVJLE9BQXhCLEdBQVQ7QUFBQSxHQUF2QixDQURGO0FBRUFYLE9BQUtZLElBQUwsSUFBYWQsVUFBVWUsUUFBVixtQ0FBYjtBQUNBYixPQUFLYyxPQUFMLElBQWdCQyxZQUFZZixLQUFLYyxPQUFqQixFQUEwQkUsTUFBMUIsQ0FBaEI7QUFDRDs7QUFFRCxJQUFNQyxZQUFZLFNBQVpBLFNBQVksR0FBYTtBQUFBLG9DQUFUQyxJQUFTO0FBQVRBLFFBQVM7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTXJCLFVBQVVtQixTQUFWLGtCQUF1QkMsSUFBdkIsQ0FBWjtBQUNBQyxNQUFJQyxJQUFKLEdBQVdELElBQUlFLEdBQWY7QUFDQSxNQUFJckIsS0FBS1ksSUFBVCxFQUFlO0FBQ2JPLFFBQUlFLEdBQUosR0FBVSxZQUFhO0FBQ3JCLFVBQUlGLElBQUlHLEtBQVIsRUFBZTtBQUNiLGVBQU9ILElBQUlDLElBQUosc0JBQVA7QUFDRDtBQUNERCxVQUFJRyxLQUFKLEdBQVksSUFBWjtBQUNBLFVBQU1DLFNBQVNKLElBQUlLLFdBQUosc0JBQWY7QUFDQUwsVUFBSUcsS0FBSixHQUFZLEtBQVo7QUFDQSxhQUFPQyxNQUFQO0FBQ0QsS0FSRDtBQVNEO0FBQ0RKLE1BQUlNLE9BQUosR0FBYyxnQkFBUTtBQUNwQjtBQUNBLFdBQU9OLElBQUlaLFlBQUosQ0FBaUI7QUFBQSxhQUN0QjtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0dtQixZQURIO0FBRUdmO0FBRkgsT0FEc0I7QUFBQSxLQUFqQixDQUFQO0FBTUQsR0FSRDtBQVNBO0FBQ0FRLE1BQUlRLFFBQUosR0FBZSxpQkFBUztBQUN0QixXQUFPUixJQUFJWixZQUFKLENBQWlCO0FBQUEsYUFDdEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVFxQixnQkFBTUMsUUFBTjtBQUFSLFNBREY7QUFFR2xCO0FBRkgsT0FEc0I7QUFBQSxLQUFqQixDQUFQO0FBTUQsR0FQRDtBQVFBLFNBQU9RLEdBQVA7QUFDRCxDQWpDRDs7QUFtQ0EsSUFBTVcsY0FBYztBQUNsQkMsVUFBUWpDLFVBQVVpQyxNQURBO0FBRWxCaEMsWUFGa0I7QUFHbEJrQjtBQUhrQixDQUFwQjs7QUFNQSxTQUFTZSxVQUFULENBQW9CaEIsTUFBcEIsRUFBNEI7QUFDMUIsTUFBSSxPQUFPQSxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQ2hDQSxXQUFPYyxXQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksUUFBT2QsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFsQixJQUE4QkEsT0FBT2lCLFVBQXpDLEVBQXFEO0FBQzFELFNBQUssSUFBSUMsR0FBVCxJQUFnQmxCLE1BQWhCLEVBQXdCO0FBQ3RCO0FBQ0FBLGFBQU9rQixHQUFQLEVBQVlKLFdBQVo7QUFDRDtBQUNGLEdBTE0sTUFLQTtBQUNMSyxZQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDRDtBQUNGOztBQUVELFNBQVNyQixXQUFULENBQXFCc0IsT0FBckIsRUFBOEJyQixNQUE5QixFQUFzQztBQUNwQyxTQUFPbEIsVUFBVXdDLFNBQVYsQ0FBb0IsWUFBTTtBQUMvQixTQUFLLElBQUlKLEdBQVQsSUFBZ0JHLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0FMLGlCQUFXSyxRQUFRSCxHQUFSLENBQVg7QUFDRDtBQUNGLEdBTE0sRUFLSmxCLE1BTEksQ0FBUDtBQU1EO0lBQ09zQixTLEdBQXNDeEMsUyxDQUF0Q3dDLFM7SUFBVy9CLFksR0FBMkJULFMsQ0FBM0JTLFk7SUFBY00sUSxHQUFhZixTLENBQWJlLFE7UUFDeEJ5QixTLEdBQUFBLFM7UUFBVy9CLFksR0FBQUEsWTtRQUFjTSxRLEdBQUFBLFE7QUFDbEM7O1FBQ1NtQixVLEdBQUFBLFU7UUFBWWpCLFcsR0FBQUEsVztRQUFhZSxXLEdBQUFBLFc7UUFBYTdCLE0sR0FBQUEsTTtRQUFRc0MsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgc3Rvcnlib29rIGZyb20gXCJAa2FkaXJhL3N0b3J5Ym9va1wiO1xyXG5pbXBvcnQgeyBzZXRPcHRpb25zIGFzIHNldE9wdGlvbnNBZGRvbiB9IGZyb20gXCJAa2FkaXJhL3N0b3J5Ym9vay1hZGRvbi1vcHRpb25zXCI7XHJcbmltcG9ydCBpbmZvQWRkb24gZnJvbSBcInJlYWN0LXN0b3J5Ym9vay1hZGRvbi1pbmZvXCI7XHJcbmltcG9ydCAqIGFzIGtub2IgZnJvbSBcIkBrYWRpcmEvc3Rvcnlib29rLWFkZG9uLWtub2JzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwicmVhY3Qtc3Rvcnlib29rLWFkZG9uLXV0aWxzXCI7XHJcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gXCIuL2RlZmF1bHRDb25maWdcIjtcclxuaW1wb3J0IFN0eWxlV3JhcHBlciBmcm9tIFwiLi9TdHlsZVdyYXBwZXJcIjtcclxuaW1wb3J0IGRlZXBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XHJcblxyXG5sZXQgY29uZiA9IGRlZmF1bHRDb25maWc7XHJcbmZ1bmN0aW9uIGNvbmZpZyhuZXdDb25maWcgPSB7fSkge1xyXG4gIC8vIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG4gIC8vIH1cclxuICBcclxuICAvLyBjb25zdFxyXG4gIGNvbmYgPSBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZywgbmV3Q29uZmlnLCB7IGFycmF5TWVyZ2U6IChkLCBzKSA9PiBzIH0pO1xyXG4gIGNvbmYub3B0aW9ucyAmJiBzZXRPcHRpb25zQWRkb24oY29uZi5vcHRpb25zKTtcclxuICBjb25mLmtub2IgJiYgc3Rvcnlib29rLmFkZERlY29yYXRvcihrbm9iLndpdGhLbm9icyk7XHJcbiAgY29uZi51dGlscyAmJiBzdG9yeWJvb2suYWRkRGVjb3JhdG9yKHV0aWxzKGNvbmYudXRpbHMpKTtcclxuICAvLyBjb25mLmJhY2tncm91bmRzICYmIHN0b3J5Ym9vay5hZGREZWNvcmF0b3IoYmFja2dyb3VuZHNBZGRvbihjb25mLmJhY2tncm91bmRzKSk7XHJcbiAgY29uZi5pc29tb3JwaGljU3R5bGVzICYmXHJcbiAgICBzdG9yeWJvb2suYWRkRGVjb3JhdG9yKHN0b3J5ID0+IDxTdHlsZVdyYXBwZXIgY2hpbGRyZW49e3N0b3J5KCl9IC8+KTtcclxuICBjb25mLmluZm8gJiYgc3Rvcnlib29rLnNldEFkZG9uKGluZm9BZGRvbik7XHJcbiAgY29uZi5tb2R1bGVzICYmIHdyYXBNb2R1bGVzKGNvbmYubW9kdWxlcywgbW9kdWxlKTsgIFxyXG59XHJcblxyXG5jb25zdCBzdG9yaWVzT2YgPSAoLi4uYXJncykgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IHN0b3J5Ym9vay5zdG9yaWVzT2YoLi4uYXJncyk7XHJcbiAgcmVzLl9hZGQgPSByZXMuYWRkO1xyXG4gIGlmIChjb25mLmluZm8pIHtcclxuICAgIHJlcy5hZGQgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAocmVzLmluQWRkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5fYWRkKC4uLmFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlcy5pbkFkZCA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5hZGRXaXRoSW5mbyguLi5hcmdzKTtcclxuICAgICAgcmVzLmluQWRkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gIH1cclxuICByZXMuYWRkSHRtbCA9IGh0bWwgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coe2h0bWx9KTtcclxuICAgIHJldHVybiByZXMuYWRkRGVjb3JhdG9yKHN0b3J5ID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtaHRtbC1mcm9tLXN0b3J5Ym94XCI+XHJcbiAgICAgICAge2h0bWx9XHJcbiAgICAgICAge3N0b3J5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfTtcclxuICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIHJlcy5hZGRTdHlsZSA9IHN0eWxlID0+IHtcclxuICAgIHJldHVybiByZXMuYWRkRGVjb3JhdG9yKHN0b3J5ID0+IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGU+e3N0eWxlLnRvU3RyaW5nKCl9PC9zdHlsZT5cclxuICAgICAgICB7c3RvcnkoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG4gIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5jb25zdCBzdG9yeVBhcmFtcyA9IHtcclxuICBhY3Rpb246IHN0b3J5Ym9vay5hY3Rpb24sXHJcbiAga25vYixcclxuICBzdG9yaWVzT2ZcclxufTtcclxuXHJcbmZ1bmN0aW9uIHdyYXBNb2R1bGUobW9kdWxlKSB7XHJcbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgbW9kdWxlKHN0b3J5UGFyYW1zKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLl9fZXNNb2R1bGUpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBtb2R1bGUpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICBtb2R1bGVba2V5XShzdG9yeVBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRE8gU09NRVRISU5HIEVMU0VcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwTW9kdWxlcyhzdG9yaWVzLCBtb2R1bGUpIHtcclxuICByZXR1cm4gc3Rvcnlib29rLmNvbmZpZ3VyZSgoKSA9PiB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gc3Rvcmllcykge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIHdyYXBNb2R1bGUoc3Rvcmllc1trZXldKTtcclxuICAgIH1cclxuICB9LCBtb2R1bGUpO1xyXG59XHJcbmNvbnN0IHsgY29uZmlndXJlLCBhZGREZWNvcmF0b3IsIHNldEFkZG9uIH0gPSBzdG9yeWJvb2s7XHJcbmV4cG9ydCB7IGNvbmZpZ3VyZSwgYWRkRGVjb3JhdG9yLCBzZXRBZGRvbiB9O1xyXG4vLyBleHBvcnQgc3Rvcnlib29rO1xyXG5leHBvcnQgeyB3cmFwTW9kdWxlLCB3cmFwTW9kdWxlcywgc3RvcnlQYXJhbXMsIGNvbmZpZywgZGVmYXVsdENvbmZpZyB9O1xyXG4iXX0=