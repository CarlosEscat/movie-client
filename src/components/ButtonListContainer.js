import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
//import Image from "react-bootstrap/Image";
import "./ButtonListContainer.css";

export default class ButtonListContainer extends Component {
  render() {
    var style = {
      padding: "10px",
      fontWeight: "bold"
    };
    return (
      <div style={{ flexDirection: "row" }}>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }


    `}
        </style>
        <section className="movie-header">Movie App</section>
        <br />

        {/* <Button variant="flat" size="xxl">
          flat button
        </Button>
        <Button variant="outline-primary">Primary</Button> */}
        <section className="list">
          <NavLink to="/">
            <label style={style}>Home</label>
          </NavLink>
          <NavLink to="/">
            <label style={style}>Trailers</label>
          </NavLink>
          <NavLink to="/">
            <label style={style}>TV Shows</label>
          </NavLink>
          <NavLink to="/">
            <label style={style}>Documentaries</label>
          </NavLink>
          <NavLink to="/">
            <label style={style}>Sports</label>
          </NavLink>
        </section>
      </div>
    );
  }
}
