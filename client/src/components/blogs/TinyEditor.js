import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TinyEditor extends Component {
  render() {
    let props = Object.assign({}, this.props);
    delete props.input;
    delete props.meta;

    return (
      <Editor
        value={this.props.input.value !== "" ? this.props.input.value : null}
        onBlur={(event, value) => {
          this.props.input.onChange(event.target.getContent());
        }}
        apiKey="h70cn69i7k2gnlh94iciz7hu4bmy6ixxznkxcp4awj4g9ziz"
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
    );
  }
}

export default TinyEditor;
