import React, { Component } from "react";
import "./EpisodeContainer.css";
import Episode from './Episode';

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { displayNum: 10 };
  }

  render() {

    return (
      <div className="EpisodeContainer">
        <Episode title={} key={} date={} poll={} />
      </div>
    )
  }
}

export default EpisodeContainer;