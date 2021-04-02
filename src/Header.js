import React, { Component } from "react";
import "./Header.css";
import logo from './logo_transparent.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { displayNum: 10 };
  }

  render() {

    return (
      <div className="Header">
        <div className="HeaderLogoDiv"><img src={logo} className="HeaderLogoImg" alt="The Unbelievers Podcast logo"/></div>
      </div>
    )
  }
}

export default Header;
