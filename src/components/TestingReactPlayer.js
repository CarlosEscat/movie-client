import React, { Component } from "react";
import ReactPlayer from "react-player";
import { movies } from "./movies";

export default class TestingReactPlayer extends Component {
  render() {
    console.log("param: ", this.props.match.params.name);
    const movieName = this.props.match.params.name;
    const selectedTrailer = movies.find(movie => {
      return movie.name === movieName;
    });

    console.log("Selected movie: ", selectedTrailer);
    const myurl = selectedTrailer.url;
    //const myurl1 = "https://www.youtube.com/watch?v=zAGVQLHvwOY";
    console.log(myurl);

    return (
      <div>
        <ReactPlayer
          url={myurl}
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            }
          }}
          playing
          width="100%"
          height="500px"
        />
      </div>
    );
  }
}
