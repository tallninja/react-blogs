import { combineReducers } from "redux";

import authReducer from "./authReducer";
import blogsReducer from "./blogsReducer";

export default combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
});
