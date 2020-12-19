import React, { Component } from "react";

import BlogForm from "./BlogForm";
import BlogReview from "./BlogReview";

class BlogCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { showReviewForm: false };
  }

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  render() {
    if (!this.state.showReviewForm) {
      return (
        <div>
          <h2>Create Your Blog</h2>
          <BlogForm onSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <BlogReview
          handleBack={() => this.setState({ showReviewForm: false })}
        />
      );
    }
  }
}

export default BlogCreate;
