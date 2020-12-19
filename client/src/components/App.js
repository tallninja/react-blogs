import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import BlogContent from "./blogs/BlogContent";
import BlogDelete from "./blogs/BlogDelete";

import history from "../history";

const Landing = () => <div>Landing</div>;
const NewBlog = () => <div>NewBlog</div>;
const EditBlog = () => <div>EditBlog</div>;

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <Router history={history}>
        <div className="ui container">
          <Navbar auth={this.props.auth} />
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/blogs/new" component={NewBlog} />
          <Route exact={true} path="/blogs/edit/:id" component={EditBlog} />
          <Route exact={true} path="/blogs/delete/:id" component={BlogDelete} />
          <Route
            exact={true}
            path="/blogs/content/:id"
            component={BlogContent}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
