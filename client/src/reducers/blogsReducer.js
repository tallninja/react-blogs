import {
  CREATE_BLOG,
  FETCH_BLOGS,
  FETCH_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
  FETCH_ALL_BLOGS,
} from "../actions/types";

const blogsReducer = (
  state = { blogsList: null, blog: null, message: null },
  action
) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS:
      return { ...state, blogsList: action.payload || false };
    case CREATE_BLOG:
      return { ...state, message: action.payload };
    case FETCH_BLOGS:
      return { ...state, blogsList: action.payload || false };
    case FETCH_BLOG:
      return { ...state, blog: action.payload || false };
    case EDIT_BLOG:
      return { ...state, message: action.payload };
    case DELETE_BLOG:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default blogsReducer;
