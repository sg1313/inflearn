webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"제로초\"\n    },\n    content: \"첫 번째 게시글 123123\",\n    Images: [{\n      src: \"https://www.water.or.kr/images/egovframework/life/weast/weast044_01.jpg\"\n    }, {\n      src: \"https://post-phinf.pstatic.net/MjAxOTA4MjNfMTQy/MDAxNTY2NTM5Njk3MDc1.d-pxKdg0Ni8cppT3_g-TfaoL7eBjWdaQD7YsocRRpzIg.ftK-ZuCMq8X1Q-oeENQa5v1QdXPiSdNm7Gr8UuWdOJAg.JPEG/1%ED%99%94_%EB%B0%94%EB%8B%A4.jpg?type=w1200\"\n    }, {\n      src: \"https://cdn.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른ㅅ ㅏ고시펑요\"\n    }]\n  }],\n  imagePaths: [],\n  // 이미지 업로드 할 때 이미지 경로들\n  addPostLoading: false,\n  // 게시글 추가가 완료 되었다면 true\n  addPostDone: false,\n  addPostError: null\n};\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\"; // ADD_POST 오타 막기 위해서 변수로 지정해서 사용\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = {\n  id: 2,\n  content: \"더미데이터 입니다\",\n  User: {\n    id: 1,\n    nickname: \"제로초\"\n  },\n  Images: [],\n  Comments: []\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      draft.addPostLoading = true;\n      draft.addPostDone = false;\n      draft.addPostError = null;\n      break;\n    case ADD_POST_SUCCESS:\n      draft.addPostLoading = false;\n      draft.addPostDone = true;\n      draft.mainPosts.unshift(action.data);\n      draft.imagePaths = [];\n      break;\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZHJhZnQiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQ1Q7SUFDRUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQkMsTUFBTSxFQUFFLENBQ047TUFDRUMsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0VBLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLENBQ0Y7SUFDREMsUUFBUSxFQUFFLENBQ1I7TUFDRUwsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREMsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxFQUNEO01BQ0VGLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUM7RUFFTCxDQUFDLENBQ0Y7RUFDREksVUFBVSxFQUFFLEVBQUU7RUFBRTtFQUNoQkMsY0FBYyxFQUFFLEtBQUs7RUFBRTtFQUN2QkMsV0FBVyxFQUFFLEtBQUs7RUFDbEJDLFlBQVksRUFBRTtBQUNoQixDQUFDO0FBRU0sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztBQUM3QyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBRTNDLElBQU1DLG1CQUFtQixHQUFHLHFCQUFxQjtBQUNqRCxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDakQsSUFBTUMsbUJBQW1CLEdBQUcscUJBQXFCO0FBRWpELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQUlDLElBQUk7RUFBQSxPQUFNO0lBQ2hDQyxJQUFJLEVBQUVSLGdCQUFnQjtJQUN0Qk8sSUFBSSxFQUFKQTtFQUNGLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUYsSUFBSTtFQUFBLE9BQU07SUFDbkNDLElBQUksRUFBRUwsbUJBQW1CO0lBQ3pCSSxJQUFJLEVBQUpBO0VBQ0YsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNRyxTQUFTLEdBQUc7RUFDaEJyQixFQUFFLEVBQUUsQ0FBQztFQUNMRyxPQUFPLEVBQUUsV0FBVztFQUNwQkYsSUFBSSxFQUFFO0lBQ0pELEVBQUUsRUFBRSxDQUFDO0lBQ0xFLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREUsTUFBTSxFQUFFLEVBQUU7RUFDVkUsUUFBUSxFQUFFO0FBQ1osQ0FBQztBQUVELElBQU1nQixPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHekIsWUFBWTtFQUFBLElBQUUwQixNQUFNO0VBQzNDLFFBQVFBLE1BQU0sQ0FBQ0wsSUFBSTtJQUNqQixLQUFLUixnQkFBZ0I7TUFDbkJjLEtBQUssQ0FBQ2pCLGNBQWMsR0FBRyxJQUFJO01BQzNCaUIsS0FBSyxDQUFDaEIsV0FBVyxHQUFHLEtBQUs7TUFDekJnQixLQUFLLENBQUNmLFlBQVksR0FBRyxJQUFJO01BQ3pCO0lBQ0YsS0FBS0UsZ0JBQWdCO01BQ25CYSxLQUFLLENBQUNqQixjQUFjLEdBQUcsS0FBSztNQUM1QmlCLEtBQUssQ0FBQ2hCLFdBQVcsR0FBRyxJQUFJO01BQ3hCZ0IsS0FBSyxDQUFDMUIsU0FBUyxDQUFDMkIsT0FBTyxDQUFDRixNQUFNLENBQUNOLElBQUksQ0FBQztNQUNwQ08sS0FBSyxDQUFDbEIsVUFBVSxHQUFHLEVBQUU7TUFDckI7SUFDRjtNQUNFLE9BQU9nQixLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXG4gICAgICB9LFxuICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAxMjMxMjNcIixcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3d3LndhdGVyLm9yLmtyL2ltYWdlcy9lZ292ZnJhbWV3b3JrL2xpZmUvd2Vhc3Qvd2Vhc3QwNDRfMDEuanBnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9wb3N0LXBoaW5mLnBzdGF0aWMubmV0L01qQXhPVEE0TWpOZk1UUXkvTURBeE5UWTJOVE01TmprM01EYzEuZC1weEtkZzBOaThjcHBUM19nLVRmYW9MN2VCaldkYVFEN1lzb2NSUnB6SWcuZnRLLVp1Q01xOFgxUS1vZUVOUWE1djFRZFhQaVNkTm03R3I4VXVXZE9KQWcuSlBFRy8xJUVEJTk5JTk0XyVFQiVCMCU5NCVFQiU4QiVBNC5qcGc/dHlwZT13MTIwMFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLm1raGVhbHRoLmNvLmtyL25ld3MvcGhvdG8vMjAyMDEwLzUwOTcwXzUxMTY0XzQ3NTguanBnXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Ja866W444WFIOOFj+qzoOyLnO2OkeyalFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBpbWFnZVBhdGhzOiBbXSwgLy8g7J2066+47KeAIOyXheuhnOuTnCDtlaAg65WMIOydtOuvuOyngCDqsr3roZzrk6RcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zquIAg7LaU6rCA6rCAIOyZhOujjCDrkJjsl4jri6TrqbQgdHJ1ZVxuICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7IC8vIEFERF9QT1NUIOyYpO2DgCDrp4nquLAg7JyE7ZW07IScIOuzgOyImOuhnCDsp4DsoJXtlbTshJwg7IKs7JqpXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMixcbiAgY29udGVudDogXCLrjZTrr7jrjbDsnbTthLAg7J6F64uI64ukXCIsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})