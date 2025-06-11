/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/chat-bot/assets/css/main.scss":
/*!****************************************************!*\
  !*** ./src/frontend/chat-bot/assets/css/main.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/frontend/chat-bot/components/DefaultLayout.jsx":
/*!************************************************************!*\
  !*** ./src/frontend/chat-bot/components/DefaultLayout.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _FlashMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessages */ "./src/frontend/chat-bot/components/FlashMessages.jsx");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./src/frontend/chat-bot/components/Navigation/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatBot/store/slices/taskList/taskListSlice */ "./src/frontend/chat-bot/store/slices/taskList/taskListSlice.js");
/* harmony import */ var _chatBot_services_TaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chatBot/services/TaskList */ "./src/frontend/chat-bot/services/TaskList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);









// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

var navigationData = [{
  name: 'Home',
  path: '/',
  label: 'Home'
}
// { name: 'Bin', path: '/bin', label: 'Bin' },
];
var DefaultLayout = function DefaultLayout() {
  var _useGetTaskListQuery = (0,_chatBot_services_TaskList__WEBPACK_IMPORTED_MODULE_4__.useGetTaskListQuery)(),
    taskList = _useGetTaskListQuery.data,
    isLoading = _useGetTaskListQuery.isLoading,
    isError = _useGetTaskListQuery.isError;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (Array.isArray(taskList === null || taskList === void 0 ? void 0 : taskList.items) && (taskList === null || taskList === void 0 ? void 0 : taskList.items.length) > 0) {
      // Tasks exist in the database
      dispatch((0,_chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_3__.setTaskList)({
        taskList: taskList.items
      }));
    }
  }, [taskList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("header", {
    className: "lsomab-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Chat Bot', 'my-ai-bot'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: "lsomab-react-js-app-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FlashMessages__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultLayout);

/***/ }),

/***/ "./src/frontend/chat-bot/components/FlashBox/index.js":
/*!************************************************************!*\
  !*** ./src/frontend/chat-bot/components/FlashBox/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlashBox: () => (/* binding */ FlashBox)
/* harmony export */ });
var FlashBox = function FlashBox(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'wppgn-success' : _ref$className,
    children = _ref.children,
    index = _ref.index,
    onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "wppgn-flash-message ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "wppgn-icon"
  }, className === 'wppgn-error' ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true",
    className: "error-x-icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  })) : className === 'wppgn-warning' ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true",
    className: "warning-icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wppgn-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wppgn-flash-description"
  }, children)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "wppgn-close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
};

/***/ }),

/***/ "./src/frontend/chat-bot/components/FlashMessages.jsx":
/*!************************************************************!*\
  !*** ./src/frontend/chat-bot/components/FlashMessages.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chatBot/store/slices/notify/notifySlice */ "./src/frontend/chat-bot/store/slices/notify/notifySlice.js");
/* harmony import */ var _FlashBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlashBox */ "./src/frontend/chat-bot/components/FlashBox/index.js");




var expTime = {
  successTime: null,
  warningTime: null,
  errorTime: null
};
var lifePeriod = 10000;
var FlashMessages = function FlashMessages() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var success = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.notify.success;
  });
  var warnings = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.notify.warnings;
  });
  var errors = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.notify.errors;
  });
  var emptySuccess = function emptySuccess() {
    if (success.length === 0) return;
    clearTimeout(expTime.successTime);
    expTime.successTime = setTimeout(function () {
      dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__.clearSuccess)());
    }, lifePeriod);
  };
  var emptyWarnings = function emptyWarnings() {
    if (warnings.length === 0) return;
    clearTimeout(expTime.warningTime);
    expTime.warningTime = setTimeout(function () {
      dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__.clearWarnings)());
    }, lifePeriod);
  };
  var emptyErrors = function emptyErrors() {
    if (errors.length === 0) return;
    clearTimeout(expTime.errorTime);
    expTime.errorTime = setTimeout(function () {
      dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__.clearErrors)());
    }, lifePeriod);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    emptySuccess();
    emptyWarnings();
    emptyErrors();
  }, [success, warnings, errors]);
  var handleSuccessClose = function handleSuccessClose(type, index) {
    dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__.clearSuccess)({
      index: index,
      type: type
    }));
  };
  var handleWarningsClose = function handleWarningsClose(type, index) {
    dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__.clearWarnings)({
      index: index,
      type: type
    }));
  };
  var handleErrorsClose = function handleErrorsClose(type, index) {
    dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__.clearErrors)({
      index: index,
      type: type
    }));
  };
  return success.length > 0 || warnings.length > 0 || errors.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "lsomab-flash-box"
  }, success.length > 0 && success.map(function (message, index) {
    return /*#__PURE__*/React.createElement(_FlashBox__WEBPACK_IMPORTED_MODULE_2__.FlashBox, {
      key: "success-".concat(index),
      index: index,
      className: "wppgn-success",
      onClose: function onClose() {
        return handleSuccessClose('success', index);
      }
    }, message);
  }), warnings.length > 0 && warnings.map(function (warning, index) {
    return /*#__PURE__*/React.createElement(_FlashBox__WEBPACK_IMPORTED_MODULE_2__.FlashBox, {
      key: "warning-".concat(index),
      index: index,
      className: "wppgn-warning",
      onClose: function onClose() {
        return handleWarningsClose('warnings', index);
      }
    }, warning);
  }), errors.length > 0 && errors.map(function (error, index) {
    return /*#__PURE__*/React.createElement(_FlashBox__WEBPACK_IMPORTED_MODULE_2__.FlashBox, {
      key: "error-".concat(index),
      index: index,
      className: "wppgn-error",
      onClose: function onClose() {
        return handleErrorsClose('errors', index);
      }
    }, error);
  })) : '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlashMessages);

/***/ }),

/***/ "./src/frontend/chat-bot/components/Navigation/index.jsx":
/*!***************************************************************!*\
  !*** ./src/frontend/chat-bot/components/Navigation/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");


var Navigation = function Navigation(_ref) {
  var navigation = _ref.navigation;
  return /*#__PURE__*/React.createElement("nav", {
    className: "lsomab-nav-links"
  }, navigation.map(function (item) {
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      key: item.name,
      to: item.path,
      className: function className(_ref2) {
        var isActive = _ref2.isActive;
        return (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('lsomab-nav-link', isActive && 'lsomab-nav-link_active');
      }
    }, item.label);
  }));
};

/***/ }),

/***/ "./src/frontend/chat-bot/components/NoTasksFound/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/frontend/chat-bot/components/NoTasksFound/index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoTasksFound: () => (/* binding */ NoTasksFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");



// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

var NoTasksFound = function NoTasksFound(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lsomab-menu-item lsomab-no-tasks-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lsomab-menu-item-title"
  }, message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No active tasks found', 'my-ai-bot')));
};

/***/ }),

/***/ "./src/frontend/chat-bot/components/SaveTasks/index.jsx":
/*!**************************************************************!*\
  !*** ./src/frontend/chat-bot/components/SaveTasks/index.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _chatBot_services_TaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatBot/services/TaskList */ "./src/frontend/chat-bot/services/TaskList.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var SaveTasks = function SaveTasks() {
  var tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.taskList.tasks;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    unsavedChanges = _useState2[0],
    setUnsavedChanges = _useState2[1];
  var _useUpdateTaskListMut = (0,_chatBot_services_TaskList__WEBPACK_IMPORTED_MODULE_2__.useUpdateTaskListMutation)(),
    _useUpdateTaskListMut2 = _slicedToArray(_useUpdateTaskListMut, 2),
    updateTaskList = _useUpdateTaskListMut2[0],
    isUpdating = _useUpdateTaskListMut2[1].isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setUnsavedChanges(true);
  }, [tasks]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleBeforeUnload = function handleBeforeUnload(event) {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return function () {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);
  var saveTasksToDB = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (Array.isArray(tasks)) {
              _context.n = 1;
              break;
            }
            console.log((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something went wrong', 'my-ai-bot'));
            return _context.a(2, false);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return updateTaskList({
              taskItems: tasks
            });
          case 2:
            setUnsavedChanges(false);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error('Error saving task items:', _t);
            return _context.a(2, false);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function saveTasksToDB() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lsomab-menu-item lsomab-save-tasks-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "lsomab-add-to-cart",
    onClick: saveTasksToDB
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Tasks', 'my-ai-bot')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveTasks);

/***/ }),

/***/ "./src/frontend/chat-bot/helpers/index.js":
/*!************************************************!*\
  !*** ./src/frontend/chat-bot/helpers/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
var updateLocalStorage = function updateLocalStorage(key, data) {
  if (data && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)) {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.removeItem(key);
  }
};

/***/ }),

/***/ "./src/frontend/chat-bot/index.js":
/*!****************************************!*\
  !*** ./src/frontend/chat-bot/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _chatBot_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatBot/store */ "./src/frontend/chat-bot/store/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _chatBot_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatBot/router */ "./src/frontend/chat-bot/router/index.jsx");
/* harmony import */ var _chatBot_assets_css_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chatBot/assets/css/main.scss */ "./src/frontend/chat-bot/assets/css/main.scss");







var renderReactJsApp = function renderReactJsApp() {
  var rootElement = document.getElementById('lsomabChatBot');
  if (!rootElement) return;
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: _chatBot_store__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.RouterProvider, {
    router: _chatBot_router__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))));
};
document.addEventListener('DOMContentLoaded', renderReactJsApp);

/***/ }),

/***/ "./src/frontend/chat-bot/pages/Bin.jsx":
/*!*********************************************!*\
  !*** ./src/frontend/chat-bot/pages/Bin.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatBot/store/slices/taskList/taskListSlice */ "./src/frontend/chat-bot/store/slices/taskList/taskListSlice.js");
/* harmony import */ var _chatBot_components_SaveTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatBot/components/SaveTasks */ "./src/frontend/chat-bot/components/SaveTasks/index.jsx");
/* harmony import */ var _chatBot_components_NoTasksFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chatBot/components/NoTasksFound */ "./src/frontend/chat-bot/components/NoTasksFound/index.jsx");







// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

var Bin = function Bin() {
  var tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.taskList.tasks;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var handleRedo = function handleRedo(id) {
    dispatch((0,_chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__.redoTask)({
      taskId: id
    }));
  };
  var handleDelete = function handleDelete(id) {
    dispatch((0,_chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__.deleteTask)({
      taskId: id
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lsomab-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "lsomab-category-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Completed Tasks', 'my-ai-bot')), Array.isArray(tasks) && (!tasks.some(function (task) {
    return task.isDone === true;
  }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_chatBot_components_NoTasksFound__WEBPACK_IMPORTED_MODULE_4__.NoTasksFound, {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No completed tasks found', 'my-ai-bot')
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lsomab-menu-grid"
  }, tasks.map(function (task, index) {
    return task.isDone === false ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "lsomab-menu-item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "lsomab-menu-item-title"
    }, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "lsomab-menu-item-description"
    }, task.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "lsomab-task-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      className: "lsomab-redo-button",
      onClick: function onClick() {
        return handleRedo(task.id);
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Redo', 'my-ai-bot')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
      className: "lsomab-delete-button",
      onClick: function onClick() {
        return handleDelete(task.id);
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delete', 'my-ai-bot'))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_chatBot_components_SaveTasks__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bin);

/***/ }),

/***/ "./src/frontend/chat-bot/pages/Home.jsx":
/*!**********************************************!*\
  !*** ./src/frontend/chat-bot/pages/Home.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatBot/store/slices/taskList/taskListSlice */ "./src/frontend/chat-bot/store/slices/taskList/taskListSlice.js");
/* harmony import */ var _chatBot_components_SaveTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatBot/components/SaveTasks */ "./src/frontend/chat-bot/components/SaveTasks/index.jsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _chatBot_components_NoTasksFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chatBot/components/NoTasksFound */ "./src/frontend/chat-bot/components/NoTasksFound/index.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

var Home = function Home() {
  var tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.taskList.tasks;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      title: '',
      description: '',
      isDone: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    newTask = _useState2[0],
    setNewTask = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    chatInput = _useState4[0],
    setChatInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    chatHistory = _useState6[0],
    setChatHistory = _useState6[1];
  var handleComplete = function handleComplete(id) {
    dispatch((0,_chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__.taskDone)({
      taskId: id
    }));
  };
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setNewTask(_objectSpread(_objectSpread({}, newTask), {}, _defineProperty({}, name, value)));
  };
  var handleAddTask = function handleAddTask(e) {
    e.preventDefault();
    if (!newTask.title.trim() || !newTask.description.trim()) {
      alert((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Validation failed: All fields are required.', 'my-ai-bot'));
      return;
    }
    dispatch((0,_chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__.addTask)({
      task: newTask
    }));
    setNewTask({
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      title: '',
      description: '',
      isDone: false
    });
  };
  var handleChatInputChange = function handleChatInputChange(e) {
    setChatInput(e.target.value);
  };
  var handleChatSubmit = function handleChatSubmit(e) {
    e.preventDefault();
    if (!chatInput.trim()) return;
    var userMessage = {
      sender: 'user',
      text: chatInput
    };
    setChatHistory(function (prev) {
      return [].concat(_toConsumableArray(prev), [userMessage]);
    });
    // Simulate assistant response (replace with real API call later)
    setTimeout(function () {
      var assistantMessage = {
        sender: 'assistant',
        text: "Echo: ".concat(chatInput)
      };
      setChatHistory(function (prev) {
        return [].concat(_toConsumableArray(prev), [assistantMessage]);
      });
    }, 500);
    setChatInput('');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lsomab-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "lsomab-category-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Your Tasks', 'my-ai-bot')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lsomab-chat-area"
  }, chatHistory.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lsomab-chat-empty"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No messages yet. Start the conversation!', 'my-ai-bot')), chatHistory.map(function (msg, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      key: idx,
      className: "lsomab-chat-message lsomab-chat-".concat(msg.sender)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "lsomab-chat-bubble"
    }, msg.text));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
    className: "lsomab-chat-form",
    onSubmit: handleChatSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: "text",
    className: "lsomab-chat-input",
    value: chatInput,
    onChange: handleChatInputChange,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type your message...', 'my-ai-bot')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "submit",
    className: "lsomab-chat-submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Submit', 'my-ai-bot'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/frontend/chat-bot/pages/NotFound.jsx":
/*!**************************************************!*\
  !*** ./src/frontend/chat-bot/pages/NotFound.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NotFound = function NotFound() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "lsomab-not-found"
  }, "404"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/frontend/chat-bot/router/index.jsx":
/*!************************************************!*\
  !*** ./src/frontend/chat-bot/router/index.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _chatBot_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chatBot/components/DefaultLayout */ "./src/frontend/chat-bot/components/DefaultLayout.jsx");
/* harmony import */ var _chatBot_pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chatBot/pages/Home */ "./src/frontend/chat-bot/pages/Home.jsx");
/* harmony import */ var _chatBot_pages_Bin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatBot/pages/Bin */ "./src/frontend/chat-bot/pages/Bin.jsx");
/* harmony import */ var _chatBot_pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatBot/pages/NotFound */ "./src/frontend/chat-bot/pages/NotFound.jsx");

// Layouts


// Pages



var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.createHashRouter)([{
  path: '/',
  element: /*#__PURE__*/React.createElement(_chatBot_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_0__["default"], null),
  children: [{
    index: true,
    element: /*#__PURE__*/React.createElement(_chatBot_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  },
  // {
  //     path: 'bin',
  //     element: <Bin />,
  // },
  {
    path: '*',
    element: /*#__PURE__*/React.createElement(_chatBot_pages_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }]
}]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/frontend/chat-bot/services/API.js":
/*!***********************************************!*\
  !*** ./src/frontend/chat-bot/services/API.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs");
/* harmony import */ var _chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chatBot/store/slices/notify/notifySlice */ "./src/frontend/chat-bot/store/slices/notify/notifySlice.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var baseQuery = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({
  baseUrl: "".concat(window.location.origin, "/wp-json/wpp-generator/v1"),
  credentials: 'same-origin',
  prepareHeaders: function prepareHeaders(headers, _ref) {
    var getState = _ref.getState;
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('X-WP-Nonce', lsomabChatBotLocalizer.nonce);
    return headers;
  }
});
var handleResponse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(args, api, extraOptions) {
    var _result$data, _result$data3;
    var result, _result$data2, _result$data4, _result$error;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return baseQuery(args, api, extraOptions);
        case 1:
          result = _context.v;
          if ((result === null || result === void 0 || (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.status) === 'success') {
            api.dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_0__.setSuccess)({
              message: result === null || result === void 0 || (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.message
            }));
          } else if ((result === null || result === void 0 || (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.status) === 'warning') {
            api.dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_0__.setWarnings)({
              message: result === null || result === void 0 || (_result$data4 = result.data) === null || _result$data4 === void 0 ? void 0 : _result$data4.message
            }));
          } else {
            api.dispatch((0,_chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_0__.setErrors)({
              message: result === null || result === void 0 || (_result$error = result.error) === null || _result$error === void 0 || (_result$error = _result$error.data) === null || _result$error === void 0 ? void 0 : _result$error.message
            }));
          }
          return _context.a(2, result);
      }
    }, _callee);
  }));
  return function handleResponse(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var API = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
  baseQuery: handleResponse,
  endpoints: function endpoints(builder) {
    return {};
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

/***/ }),

/***/ "./src/frontend/chat-bot/services/TaskList.js":
/*!****************************************************!*\
  !*** ./src/frontend/chat-bot/services/TaskList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useGetTaskItemQuery: () => (/* binding */ useGetTaskItemQuery),
/* harmony export */   useGetTaskListQuery: () => (/* binding */ useGetTaskListQuery),
/* harmony export */   useUpdateTaskListMutation: () => (/* binding */ useUpdateTaskListMutation)
/* harmony export */ });
/* harmony import */ var _chatBot_services_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chatBot/services/API */ "./src/frontend/chat-bot/services/API.js");

var TaskList = _chatBot_services_API__WEBPACK_IMPORTED_MODULE_0__["default"].injectEndpoints({
  endpoints: function endpoints(builder) {
    return {
      // An example of a query without params (GET)
      getTaskList: builder.query({
        query: function query() {
          return {
            url: '/get-task-list'
          };
        }
      }),
      // An example of a query with params (GET). Did not use this example in the project.
      getTaskItem: builder.query({
        query: function query() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            url: '/get-task-item',
            params: {
              postId: params.postId
            }
          };
        }
      }),
      // An example of a mutation (POST)
      updateTaskList: builder.mutation({
        query: function query(_ref) {
          var taskItems = _ref.taskItems;
          return {
            url: '/update-task-list',
            method: 'POST',
            body: {
              taskItems: taskItems
            }
          };
        }
      })
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);
var useGetTaskListQuery = TaskList.useGetTaskListQuery,
  useGetTaskItemQuery = TaskList.useGetTaskItemQuery,
  useUpdateTaskListMutation = TaskList.useUpdateTaskListMutation;


/***/ }),

/***/ "./src/frontend/chat-bot/store/index.js":
/*!**********************************************!*\
  !*** ./src/frontend/chat-bot/store/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _chatBot_services_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chatBot/services/API */ "./src/frontend/chat-bot/services/API.js");
/* harmony import */ var _chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chatBot/store/slices/notify/notifySlice */ "./src/frontend/chat-bot/store/slices/notify/notifySlice.js");
/* harmony import */ var _chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatBot/store/slices/taskList/taskListSlice */ "./src/frontend/chat-bot/store/slices/taskList/taskListSlice.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
  reducer: _defineProperty(_defineProperty(_defineProperty({}, _chatBot_services_API__WEBPACK_IMPORTED_MODULE_0__["default"].reducerPath, _chatBot_services_API__WEBPACK_IMPORTED_MODULE_0__["default"].reducer), "notify", _chatBot_store_slices_notify_notifySlice__WEBPACK_IMPORTED_MODULE_1__["default"]), "taskList", _chatBot_store_slices_taskList_taskListSlice__WEBPACK_IMPORTED_MODULE_2__["default"]),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_chatBot_services_API__WEBPACK_IMPORTED_MODULE_0__["default"].middleware);
  },
  devTools: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/frontend/chat-bot/store/slices/notify/notifySlice.js":
/*!******************************************************************!*\
  !*** ./src/frontend/chat-bot/store/slices/notify/notifySlice.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearErrors: () => (/* binding */ clearErrors),
/* harmony export */   clearSuccess: () => (/* binding */ clearSuccess),
/* harmony export */   clearWarnings: () => (/* binding */ clearWarnings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setErrors: () => (/* binding */ setErrors),
/* harmony export */   setSuccess: () => (/* binding */ setSuccess),
/* harmony export */   setWarnings: () => (/* binding */ setWarnings)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

var initialState = {
  success: [],
  warnings: [],
  errors: []
};
var notifySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'notify',
  initialState: initialState,
  reducers: {
    setSuccess: function setSuccess(state, action) {
      var message = action.payload.message;
      if (!message) return;
      state.success.push(message);
    },
    clearSuccess: function clearSuccess(state, action) {
      var _action$payload, _action$payload2;
      if (action !== null && action !== void 0 && (_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.type && typeof (action === null || action === void 0 || (_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.index) === 'number') {
        var _action$payload3 = action.payload,
          type = _action$payload3.type,
          index = _action$payload3.index;
        state[type].splice(index, 1);
      } else {
        state.success = [];
      }
    },
    setWarnings: function setWarnings(state, action) {
      var message = action.payload.message;
      if (!message) return;
      state.warnings.push(message);
    },
    clearWarnings: function clearWarnings(state, action) {
      var _action$payload4, _action$payload5;
      if (action !== null && action !== void 0 && (_action$payload4 = action.payload) !== null && _action$payload4 !== void 0 && _action$payload4.type && typeof (action === null || action === void 0 || (_action$payload5 = action.payload) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.index) === 'number') {
        var _action$payload6 = action.payload,
          type = _action$payload6.type,
          index = _action$payload6.index;
        state[type].splice(index, 1);
      } else {
        state.warnings = [];
      }
    },
    setErrors: function setErrors(state, action) {
      var message = action.payload.message;
      if (!message) return;
      state.errors.push(message);
    },
    clearErrors: function clearErrors(state, action) {
      var _action$payload7, _action$payload8;
      if (action !== null && action !== void 0 && (_action$payload7 = action.payload) !== null && _action$payload7 !== void 0 && _action$payload7.type && typeof (action === null || action === void 0 || (_action$payload8 = action.payload) === null || _action$payload8 === void 0 ? void 0 : _action$payload8.index) === 'number') {
        var _action$payload9 = action.payload,
          type = _action$payload9.type,
          index = _action$payload9.index;
        state[type].splice(index, 1);
      } else {
        state.errors = [];
      }
    }
  }
});
var _notifySlice$actions = notifySlice.actions,
  setSuccess = _notifySlice$actions.setSuccess,
  clearSuccess = _notifySlice$actions.clearSuccess,
  setWarnings = _notifySlice$actions.setWarnings,
  clearWarnings = _notifySlice$actions.clearWarnings,
  setErrors = _notifySlice$actions.setErrors,
  clearErrors = _notifySlice$actions.clearErrors;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifySlice.reducer);

/***/ }),

/***/ "./src/frontend/chat-bot/store/slices/taskList/taskListSlice.js":
/*!**********************************************************************!*\
  !*** ./src/frontend/chat-bot/store/slices/taskList/taskListSlice.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   redoTask: () => (/* binding */ redoTask),
/* harmony export */   setTaskList: () => (/* binding */ setTaskList),
/* harmony export */   taskDone: () => (/* binding */ taskDone)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _chatBot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chatBot/helpers */ "./src/frontend/chat-bot/helpers/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var initialState = {
  tasks: localStorage.getItem('reactJsAppTaskItems') ? JSON.parse(localStorage.getItem('reactJsAppTaskItems')) : []
};
var taskListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'react-js-task-list',
  initialState: initialState,
  reducers: {
    setTaskList: function setTaskList(state, action) {
      if (!action.payload) return;
      var taskList = action.payload.taskList;
      state.tasks = taskList;
      (0,_chatBot_helpers__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)('reactJsAppTaskItems', state.tasks);
    },
    addTask: function addTask(state, action) {
      if (!action.payload) return;
      var task = action.payload.task;
      state.tasks = [].concat(_toConsumableArray(state.tasks), [task]);
      (0,_chatBot_helpers__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)('reactJsAppTaskItems', state.tasks);
    },
    taskDone: function taskDone(state, action) {
      if (!action.payload) return;
      var taskId = action.payload.taskId;
      state.tasks = state.tasks.map(function (task, index) {
        return task.id === taskId ? _objectSpread(_objectSpread({}, task), {}, {
          isDone: true
        }) : task;
      });
      (0,_chatBot_helpers__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)('reactJsAppTaskItems', state.tasks);
    },
    deleteTask: function deleteTask(state, action) {
      if (!action.payload) return;
      var taskId = action.payload.taskId;
      state.tasks = state.tasks.filter(function (task) {
        return task.id !== taskId;
      });
      (0,_chatBot_helpers__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)('reactJsAppTaskItems', state.tasks);
    },
    redoTask: function redoTask(state, action) {
      if (!action.payload) return;
      var taskId = action.payload.taskId;
      state.tasks = state.tasks.map(function (task) {
        return task.id === taskId ? _objectSpread(_objectSpread({}, task), {}, {
          isDone: false
        }) : task;
      });
      (0,_chatBot_helpers__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)('reactJsAppTaskItems', state.tasks);
    }
  }
});
var _taskListSlice$action = taskListSlice.actions,
  setTaskList = _taskListSlice$action.setTaskList,
  addTask = _taskListSlice$action.addTask,
  taskDone = _taskListSlice$action.taskDone,
  deleteTask = _taskListSlice$action.deleteTask,
  redoTask = _taskListSlice$action.redoTask;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskListSlice.reducer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"frontend/chat-bot": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklsomab_npm_handler"] = self["webpackChunklsomab_npm_handler"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dependencies/vendors"], () => (__webpack_require__("./src/frontend/chat-bot/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map