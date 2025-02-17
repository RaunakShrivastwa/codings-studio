import React from "react";
import "./Header.scss";
import { Menu } from "react-feather";
import Canvas from "../canvas/Canvas";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" src="./logo.svg" alt="" />
        <p className="fs-24 title">Codings Studio</p>
      </div>

      <div className="mid fs-16">
        <ul className="navlist">
          <li>Courses</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Blogs</li>
        </ul>
      </div>

      <div className="right fs-16">
        <button className="btn_outline login">Login</button>
        <button className="btn_fill signup">Sign Up</button>
        <img
          className="profile_img"
          src="https://cdn-icons-png.flaticon.com/128/18955/18955674.png"
          alt=""
        />
        <Menu
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          className="menu d-none"
        />
        <Canvas />
      </div>
    </div>
  );
};

export default Header;
