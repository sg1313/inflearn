webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/Form */ \"./node_modules/antd/lib/form/Form.js\");\n/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/edu01/vscode_react_practice/inflearn/prepare/front/components/CommentForm.js\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n  var post = _ref.post;\n  var _useInput = useInput(\"\"),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n    commentText = _useInput2[0],\n    onChangeCommentText = _useInput2[1],\n    setCommentText = _useInput2[2];\n  var onSubmitComment = useCallback(function () {\n    dispatch({\n      type: ADD_COMMENT_REQUEST,\n      data: {\n        content: commentText,\n        postId: post.id,\n        userId: id\n      }\n    });\n  }, [commentText, id]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    onFinist: onSubmitComment,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"].TextArea, {\n        value: commentText,\n        onChange: onChangeCommentText,\n        rows: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        style: {\n          position: \"absolute\",\n          right: 0,\n          bottom: -40,\n          zIndex: 1\n        },\n        type: \"primary\",\n        htmlType: \"submit\",\n        loading: addCommentLoading,\n        children: \"\\uC090\\uC57D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n_s(CommentForm, \"evtH2yzwHKvsIrg1HHNML7ZgIyg=\", true);\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: PropTypes.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImRpc3BhdGNoIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInBvc3RJZCIsImlkIiwidXNlcklkIiwicG9zaXRpb24iLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsImFkZENvbW1lbnRMb2FkaW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ0Q7QUFBQTtBQUVyQyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUFpQjtFQUFBO0VBQUEsSUFBWEMsSUFBSSxRQUFKQSxJQUFJO0VBQ3pCLGdCQUEyREMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWhFQyxXQUFXO0lBQUVDLG1CQUFtQjtJQUFFQyxjQUFjO0VBRXZELElBQU1DLGVBQWUsR0FBR0MsV0FBVyxDQUFDLFlBQU07SUFDeENDLFFBQVEsQ0FBQztNQUNQQyxJQUFJLEVBQUVDLG1CQUFtQjtNQUN6QkMsSUFBSSxFQUFFO1FBQUVDLE9BQU8sRUFBRVQsV0FBVztRQUFFVSxNQUFNLEVBQUVaLElBQUksQ0FBQ2EsRUFBRTtRQUFFQyxNQUFNLEVBQUVEO01BQUc7SUFDNUQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUNYLFdBQVcsRUFBRVcsRUFBRSxDQUFDLENBQUM7RUFDckIsb0JBQ0UscUVBQUMseURBQUk7SUFBQyxRQUFRLEVBQUVSLGVBQWdCO0lBQUEsdUJBQzlCLHFFQUFDLHlEQUFJLENBQUMsSUFBSTtNQUFBLHdCQUNSLHFFQUFDLDBDQUFLLENBQUMsUUFBUTtRQUNiLEtBQUssRUFBRUgsV0FBWTtRQUNuQixRQUFRLEVBQUVDLG1CQUFvQjtRQUM5QixJQUFJLEVBQUU7TUFBRTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQ1IsZUFDRixxRUFBQywyQ0FBTTtRQUNMLEtBQUssRUFBRTtVQUFFWSxRQUFRLEVBQUUsVUFBVTtVQUFFQyxLQUFLLEVBQUUsQ0FBQztVQUFFQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1VBQUVDLE1BQU0sRUFBRTtRQUFFLENBQUU7UUFDbEUsSUFBSSxFQUFDLFNBQVM7UUFDZCxRQUFRLEVBQUMsUUFBUTtRQUNqQixPQUFPLEVBQUVDLGlCQUFrQjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUdwQjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFDQztJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQ1A7QUFFWCxDQUFDO0FBQUMsR0E1QklwQixXQUFXO0FBQUEsS0FBWEEsV0FBVztBQThCakJBLFdBQVcsQ0FBQ3FCLFNBQVMsR0FBRztFQUN0QnBCLElBQUksRUFBRXFCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQztBQUN6QixDQUFDO0FBRWN4QiwwRUFBVyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiYW50ZC9saWIvZm9ybS9Gb3JtXCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHsgY29udGVudDogY29tbWVudFRleHQsIHBvc3RJZDogcG9zdC5pZCwgdXNlcklkOiBpZCB9LFxuICAgIH0pO1xuICB9LCBbY29tbWVudFRleHQsIGlkXSk7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25GaW5pc3Q9e29uU3VibWl0Q29tbWVudH0+XG4gICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XG4gICAgICAgICAgcm93cz17NH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwLCBib3R0b206IC00MCwgekluZGV4OiAxIH19XG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIOyCkOyVvVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})