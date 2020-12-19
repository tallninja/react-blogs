import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import BlogField from "./BlogField";
import TinyEditor from "./TinyEditor";

class BlogForm extends Component {
  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <Field
          type="text"
          name="title"
          label="Title"
          placeholder="Blog Title"
          component={BlogField}
        />
        <Field type="text" name="content" component={TinyEditor} />
        <div style={{ marginTop: "15px" }}>
          <button className="ui right floated teal button">
            Next
            <i className="angle right icon"></i>
          </button>
          <Link to="/dashboard" className="ui left floated red button">
            <i className="reply icon"></i>
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "blogForm",
  destroyOnUnmount: false,
})(BlogForm);
