import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import BlogForm from "./BlogForm";
import BlogReview from "./BlogReview";

class BlogEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchBlog(this.props.match.params.id);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    const { _id, title, content } = this.props.blogs.blog;
    if (this.state.showReviewForm) {
      return (
        <BlogReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() =>
            this.props.editBlog(_id, this.props.form.blogForm.values)
          }
          icon="save icon"
          buttonText="Save Changes"
        />
      );
    } else {
      return (
        <div>
          <h2>Edit Blog</h2>
          <BlogForm
            onSubmit={this.handleSubmit}
            initialValues={{ title, content }}
          />
        </div>
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ blogs, form }) => {
  return { blogs, form };
};

export default connect(mapStateToProps, actions)(BlogEdit);
