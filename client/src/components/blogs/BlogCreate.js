import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

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
          form={this.props.form}
          action={() => this.props.createBlog(this.props.form.blogForm.values)}
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(BlogCreate);
