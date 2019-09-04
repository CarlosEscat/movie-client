import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
        <label className="movie-header">Movie App</label>

        <Button variant="flat" size="xxl">
          flat button
        </Button>
        <NavLink to="/signup">
          <label style={style}>Sign Up</label>
        </NavLink>
        <NavLink to="/login">
          <label style={style}>Log In</label>
        </NavLink>
        <NavLink to="/event">
          <label style={style}>Movies</label>
        </NavLink>
        {/* <NavLink to="/event/editTicket">
          <label style={style}>User</label>
        </NavLink> */}
      </div>
    );
  }
}
