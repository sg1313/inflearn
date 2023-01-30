import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// // 기본 state를 바꾸는 action
// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   date: "boogiecho",
// };

// async action creator

// action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };

// (이전상태, 액션) 을 통해서 => 다음상태 로 만드러 내는 함수
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
