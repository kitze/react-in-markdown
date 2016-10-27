(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.reactInMarkdown = global.reactInMarkdown || {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var matchPropRegex = / ?([^,]*) ?= ?([^,]*),? ?/g;

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var getRegexMatches = function getRegexMatches(string, regexExpression, callback) {
  var match = void 0;
  while ((match = regexExpression.exec(string)) !== null) {
    callback(match);
  }
};

var getPropsObject = function getPropsObject(propsString) {
  var object = {};
  getRegexMatches(propsString, matchPropRegex, function (_ref) {
    var _ref2 = slicedToArray(_ref, 3);

    var fullMatch = _ref2[0];
    var key = _ref2[1];
    var value = _ref2[2];

    object[key] = value;
  });
  return object;
};

var link = function link(_ref) {
  var children = _ref.children;
  var href = _ref.href;
  var title = _ref.title;
  return React.createElement(
    'a',
    { href: href, title: title },
    ' ',
    children
  );
};

var renderCustomComponents = function renderCustomComponents(props, customComponents, customLinkComponent) {
  var children = props.children;
  var href = props.href;

  var foundComponent = customComponents[children[0]];
  if (foundComponent) {
    var propsObject = getPropsObject(href);
    return foundComponent(propsObject);
  }
  return customLinkComponent ? customLinkComponent(props) : link(props);
};

exports.renderCustomComponents = renderCustomComponents;

Object.defineProperty(exports, '__esModule', { value: true });

})));
