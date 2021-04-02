import React, { Component } from "react";
import "./EpisodeContainer.css";
import Episode from './Episode';
import data from './data.json';

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { episodeArray: [data] };
  }

  // formatData(){
  //   let ep = data.EpisodeList[0].Episode;
  //   let epData = data.EpisodeList;

  // }

  componentDidMount(){
    this.setState({ episodeArray: data })
  }

  render() {
    console.log(data);
    console.log(this.state.episodeArray);

    return (
      <div className="EpisodeContainer">
        {this.state.episodeArray.map((ep, index)=> (
          <Episode key={ep.ID} title={ep.Title} date={ep.Date} poll={ep.Poll} iframe={ep.iFrame} />
        ))}
      </div>
    )
  }
}

export default EpisodeContainer;

// {this.state.map((ep, index)=> (
//   <Episode key={ep[index].Episode.ID} title={ep[index].Episode.Title} date={ep[index].Episode.Date} poll={ep[index].Episode.Poll} iframe={ep[index].Episode.iFrame} />
// ))}
