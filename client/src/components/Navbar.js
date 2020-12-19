import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  renderAuthButtons = () => {
    switch (this.props.auth) {
      case null:
        return (
          <a className="ui item" href="/#">
            <div className="ui active tiny centered inline loader"></div>
          </a>
        );
      case false:
        return (
          <a className="ui item" href="/auth/github">
            <button className="ui black button">
              <i className="github icon"></i>
              Login
            </button>
          </a>
        );
      default:
        return (
          <a className="ui item" href="/auth/logout" key="2">
            <i className="sign-out icon"></i>
            Logout
          </a>
        );
    }
  };

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to={this.props.auth ? "/dashboard" : "/"} className="active item">
          Home
        </Link>
        <div className="right menu">{this.renderAuthButtons()}</div>
      </div>
    );
  }
}

export default Navbar;
