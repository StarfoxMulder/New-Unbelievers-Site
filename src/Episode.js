import React, { Component } from "react";
import "./Episode.css";

class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = { displayNum: 10 };
  }

  render() {

    return (
      <div className="Episode">
      </div>
    )
  }
}

export default Episode;