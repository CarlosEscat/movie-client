import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { movies } from "./movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderContainer.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      adaptiveHeight: true
    };

    const style = {
      width: 100
    };

    return (
      <Slider {...settings}>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[0].name}`
              }}
            >
              <img style={style} src={movies[0].picture} alt="Joker"></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[1].name}`
              }}
            >
              <img style={style} src={movies[1].picture} alt="Once upon"></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[2].name}`
              }}
            >
              <img
                style={style}
                src={movies[2].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[3].name}`
              }}
            >
              <img
                style={style}
                src={movies[3].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[4].name}`
              }}
            >
              <img
                style={style}
                src={movies[4].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[5].name}`
              }}
            >
              <img
                style={style}
                src={movies[5].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[6].name}`
              }}
            >
              <img
                style={style}
                src={movies[6].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[7].name}`
              }}
            >
              <img
                style={style}
                src={movies[7].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
        <div className="zoom">
          <h3>
            <NavLink
              to={{
                pathname: `/trailer/${movies[8].name}`
              }}
            >
              <img
                style={style}
                src={movies[8].picture}
                alt="Italian Trulli"
              ></img>
            </NavLink>
          </h3>
        </div>
      </Slider>
    );
  }
}
