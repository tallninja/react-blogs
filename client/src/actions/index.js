import axios from "axios";
import {
  FETCH_USER,
  FETCH_BLOGS,
  FETCH_BLOG,
  DELETE_BLOG,
  EDIT_BLOG,
  CREATE_BLOG,
  FETCH_ALL_BLOGS,
} from "./types";

import history from "../history";

// fetch user data
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

// fetch all blogs
export const fetchAllBlogs = () => async (dispatch) => {
  const res = await axios.get("/api/blogs/all");
  dispatch({
    type: FETCH_ALL_BLOGS,
    payload: res.data,
  });
};

// create a blog
export const createBlog = (blog) => async (dispatch) => {
  const res = await axios.post("/api/blogs", blog);
  history.push("/dashboard");
  dispatch({
    type: CREATE_BLOG,
    payload: res.data,
  });
};

// fetch all the user's blogs
export const fetchBlogs = () => async (dispatch) => {
  const res = await axios.get("/api/blogs");
  dispatch({
    type: FETCH_BLOGS,
    payload: res.data || "",
  });
};

// fetch a single blog
export const fetchBlog = (id) => async (dispatch) => {
  const res = await axios.get("/api/blogs/item", {
    params: {
      id: id,
    },
  });
  dispatch({
    type: FETCH_BLOG,
    payload: res.data || "",
  });
};

// edit a blog
export const editBlog = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/blogs", data, {
    params: {
      id: id,
    },
  });
  history.push(`/blogs/content/${id}`);
  dispatch({
    type: EDIT_BLOG,
    payload: res.data,
  });
};

// delete a blog
export const deleteBlog = (id) => async (dispatch) => {
  const res = await axios.delete("/api/blogs", {
    params: {
      id: id,
    },
  });
  dispatch({
    type: DELETE_BLOG,
    payload: res.data,
  });
};
