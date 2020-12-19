import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import blogsReducer from "./blogsReducer";

export default combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
  form: formReducer,
});
