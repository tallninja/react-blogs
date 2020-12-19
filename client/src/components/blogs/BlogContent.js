import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

class BlogContent extends Component {
  componentDidMount = () => {
    this.props.fetchBlog(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.auth) {
      if (this.props.auth._id === this.props.blog._user) {
        return (
          <div className="ui two top attached buttons">
            <div className="ui teal button">
              <i className="edit icon"></i>
              Edit
            </div>
            <Link
              to={`/blogs/delete/${this.props.blog._id}`}
              className="ui orange button"
            >
              <i className="trash icon"></i>
              Delete
            </Link>
          </div>
        );
      } else {
        return null;
      }
    }
  };

  render() {
    switch (this.props.blog) {
      case null:
        return <div>Loading...</div>;
      case false:
        return <div>Blog not found...</div>;
      default:
        if (this.props.blog._id === this.props.match.params.id) {
          const { title, content } = this.props.blog;
          return (
            <React.Fragment>
              {this.renderAuthButtons()}
              <div className="ui attached segment">
                <h2>{title}</h2>
                <div
                  className="ui segment"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </React.Fragment>
          );
        } else {
          return <div>Loading...</div>;
        }
    }
  }
}

const mapStateToProps = ({ auth, blogs }) => {
  return { auth, blog: blogs.blog };
};

export default connect(mapStateToProps, actions)(BlogContent);
