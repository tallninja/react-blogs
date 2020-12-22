import _ from "lodash";
import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../actions";

class Landing extends Component {
  componentDidMount = () => {
    this.props.fetchAllBlogs();
  };

  renderBlogItem = (blog) => {
    return (
      <div className="item" key={blog._id}>
        <img className="ui avatar image" src={blog.avatarURL} alt="Profile" />
        <div className="content">
          <Link to={`/blogs/content/${blog._id}`} className="header">
            {blog.title}
          </Link>
          <div className="description">
            <div>
              <strong>Author:</strong> {blog.author}
            </div>
            <div>
              <strong>Time:</strong>{" "}
              {moment(new Date(blog.dateCreated)).fromNow()}
            </div>
            <div>
              <strong>Date</strong>{" "}
              {new Date(blog.dateCreated).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderBlogs = () => {
    switch (this.props.blogs.blogsList) {
      case false:
        return <h4>No blogs yet...</h4>;
      case null:
        return (
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        );
      default:
        return _.map(this.props.blogs.blogsList, (blog) => {
          return this.renderBlogItem(blog);
        });
    }
  };

  render() {
    return (
      <div>
        <h3>Blogs</h3>
        <div className="ui segment">
          <div className="ui relaxed divided list">{this.renderBlogs()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blogs };
};

export default connect(mapStateToProps, actions)(Landing);
