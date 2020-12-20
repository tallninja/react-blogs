import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TinyEditor extends Component {
  render() {
    return (
      <div className="required field">
        <label>{this.props.label}</label>
        <Editor
          value={this.props.input.value !== "" ? this.props.input.value : null}
          onBlur={(event, value) => {
            this.props.input.onChange(event.target.getContent());
          }}
          apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
          init={{
            height: 300,
            textareaName: this.props.name,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar: `undo redo | formatselect | bold italic backcolor |
                    alignleft aligncenter alignright alignjustify |
                    bullist numlist outdent indent | removeformat | help`,
            mobile: {
              menubar: false,
            },
          }}
        />
      </div>
    );
  }
}

export default TinyEditor;
