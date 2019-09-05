import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ButtonListContainer from "./components/ButtonListContainer";
import TestingReactPlayer from "./components/TestingReactPlayer";
import SimpleSlider from "./components/SliderContainer";
//import Spinner from "react-bootstrap/Spinner";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
        rel="stylesheet"
      ></link>
      <header className="header-video">
        <ButtonListContainer />
      </header>
      <section className="video-display">
        <Route exact path="/trailer/:name" component={TestingReactPlayer} />
      </section>

      <section className="carousel-section">
        <SimpleSlider />
      </section>
    </div>
  );
}

export default App;
