import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

class BlogList extends Component {
  componentDidMount = () => {
    this.props.fetchBlogs();
  };

  renderBlogItem = (blog) => {
    return (
      <div className="item" key={blog._id}>
        <img
          className="ui avatar image"
          src={this.props.user ? this.props.user.profileImage : null}
          alt="Profile"
        />
        <div className="content">
          <Link to={`/blogs/content/${blog._id}`} className="header">
            {blog.title}
          </Link>
          <div className="description">Updated 10 mins ago</div>
        </div>
      </div>
    );
  };

  renderBlogsList = () => {
    switch (this.props.userBlogs) {
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
        return _.map(this.props.userBlogs, (blog) => {
          return this.renderBlogItem(blog);
        });
    }
  };

  render() {
    return (
      <div>
        <h3>My Blogs</h3>
        <div className="ui segment">
          <div className="ui relaxed divided list">
            {this.renderBlogsList()}
          </div>
        </div>
        <Link to="/blogs/new" className="fluid ui green button">
          <i className="plus icon"></i>
          New Blog
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, blogs }) => {
  return { user: auth, userBlogs: blogs.blogsList };
};

export default connect(mapStateToProps, actions)(BlogList);
