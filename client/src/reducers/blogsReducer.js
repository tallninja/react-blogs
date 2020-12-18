import {
  CREATE_BLOG,
  FETCH_BLOGS,
  FETCH_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
} from "../actions/types";

const blogsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return { ...state, message: action.payload };
    case FETCH_BLOGS:
      return action.payload;
    case FETCH_BLOG:
      return action.payload;
    case EDIT_BLOG:
      return { ...state, message: action.payload };
    case DELETE_BLOG:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default blogsReducer;
