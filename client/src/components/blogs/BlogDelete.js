import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class BlogDelete extends Component {
  componentDidMount = () => {
    this.props.fetchBlog(this.props.match.params.id);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteBlog(this.props.blog._id);
            history.push("/dashboard");
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() => history.push(`/blogs/content/${this.props.blog._id}`)}
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.blog) {
      return (
        <div>
          <Modal
            title="Delete Stream"
            content="Are you sure you want to delete ?"
            item={this.props.blog.title}
            actions={actions}
            onDismiss={() =>
              history.push(`/blogs/content/${this.props.blog._id}`)
            }
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ blogs }) => {
  return { blog: blogs.blog };
};

export default connect(mapStateToProps, actions)(BlogDelete);
