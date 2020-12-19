import React, { Component } from "react";

class BlogField extends Component {
  render() {
    const { label, type, name, placeholder, input } = this.props;
    return (
      <div className="field">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          {...input}
        ></input>
      </div>
    );
  }
}

export default BlogField;
