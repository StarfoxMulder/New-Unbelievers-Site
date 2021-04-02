import React, { Component } from "react";
import "./Episode.css";

class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = { displayNum: 10 };
  }

  render() {

    return (
      <div className="Episode" id={this.props.key}>
        <h3>{this.props.date}</h3>
        <h4>{this.props.title}</h4>
        <div className="EpisodeiFrame">{this.props.iframe}</div>
        <div className="PollDiv">{this.props.poll}</div>
      </div>
    )
  }
}

export default Episode;