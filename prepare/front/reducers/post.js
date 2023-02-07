export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 123123",
      Images: [
        {
          src: "https://www.water.or.kr/images/egovframework/life/weast/weast044_01.jpg",
        },
        {
          src: "https://post-phinf.pstatic.net/MjAxOTA4MjNfMTQy/MDAxNTY2NTM5Njk3MDc1.d-pxKdg0Ni8cppT3_g-TfaoL7eBjWdaQD7YsocRRpzIg.ftK-ZuCMq8X1Q-oeENQa5v1QdXPiSdNm7Gr8UuWdOJAg.JPEG/1%ED%99%94_%EB%B0%94%EB%8B%A4.jpg?type=w1200",
        },
        {
          src: "https://cdn.mkhealth.co.kr/news/photo/202010/50970_51164_4758.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른ㅅ ㅏ고시펑요",
        },
      ],
    },
  ],
  imagePaths: [], // 이미지 업로드 할 때 이미지 경로들
  addPostLoading: false, // 게시글 추가가 완료 되었다면 true
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST"; // ADD_POST 오타 막기 위해서 변수로 지정해서 사용
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: "더미데이터 입니다",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS: {
      const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
      post.Comments.unshift(action.data);
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
    }
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;
    default:
      return state;
  }
};

export default reducer;
