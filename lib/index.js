"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginTransformReactJsx = _interopRequireDefault(require("@babel/plugin-transform-react-jsx"));

var _pluginTransformReactDisplayName = _interopRequireDefault(require("@babel/plugin-transform-react-display-name"));

var _pluginTransformReactJsxSource = _interopRequireDefault(require("@babel/plugin-transform-react-jsx-source"));

var _pluginTransformReactJsxSelf = _interopRequireDefault(require("@babel/plugin-transform-react-jsx-self"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)(function (api, opts) {
  api.assertVersion(7);
  var pragma = opts.pragma || "createElement";
  var pragmaFrag = opts.pragmaFrag || "Fragment";
  var throwIfNamespace = opts.throwIfNamespace === undefined ? true : Boolean(opts.throwIfNamespace);
  var useBuiltIns = Boolean(opts.useBuiltIns);
  var development = opts.development;

  if (typeof development !== "boolean") {
    throw new Error("@babel/preset-rax 'development' option must be a boolean.");
  }

  return {
    plugins: [[_pluginTransformReactJsx.default, {
      pragma: pragma,
      pragmaFrag: pragmaFrag,
      throwIfNamespace: throwIfNamespace,
      useBuiltIns: useBuiltIns
    }], _pluginTransformReactDisplayName.default, development && _pluginTransformReactJsxSource.default, development && _pluginTransformReactJsxSelf.default].filter(Boolean)
  };
});

exports.default = _default;
module.exports = exports["default"];