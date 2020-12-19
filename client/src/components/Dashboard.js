import React, { Component } from "react";
import { reduxForm } from "redux-form";

import BlogList from "./blogs/BlogList";

class Dashboard extends Component {
  render() {
    return <BlogList />;
  }
}

export default reduxForm({ form: "blogForm" })(Dashboard);
