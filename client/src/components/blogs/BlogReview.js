import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class BlogReview extends Component {
  handleBack = () => {
    this.props.handleBack();
  };

  handleReviewSubmit = () => {
    this.props.createBlog(this.props.form.blogForm.values);
  };

  render() {
    const { title, content } = this.props.form.blogForm.values;
    return (
      <React.Fragment>
        <h3>Review...</h3>
        <div className="ui segment">
          <h4>Title</h4>
          <div className="ui segment">{title}</div>
          <h4>Content</h4>
          <div
            className="ui segment"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button
            className="ui right floated green button"
            onClick={this.handleReviewSubmit}
          >
            <i className="paper plane icon"></i>
            Create
          </button>
          <button
            className="ui left floated teal button"
            onClick={this.handleBack}
          >
            <i className="angle left icon"></i>
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(BlogReview);
