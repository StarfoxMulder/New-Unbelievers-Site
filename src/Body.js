import React, { Component } from "react";
import EpisodeContainer from "./EpisodeContainer";
import "./Body.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { displayNum: 10 };
    // this.loadMore = this.loadMore.bind(this);
  }

  // loadMore() {
  //   console.log("loadMore clicked.  Event bound properly.");
  //   var currentDisplayNum = this.state.displayNum;
  //   var newDisplayNum = currentDisplayNum+5;
  //   this.setState({displayNum: newDisplayNum});
  // }

  render() {

    return (
      <div className="Body">
        <EpisodeContainer display={this.state.displayNum} />
      </div>
    )
  }
}

export default Body;