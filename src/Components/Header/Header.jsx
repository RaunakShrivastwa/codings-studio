import React from "react";
import "./Header.scss";
import { Menu, Search } from "react-feather";
import Canvas from "../canvas/Canvas";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" src="./logo.svg" alt="" />
        <p className="fs-24 title mb-0 text_primary">Codings Studio</p>
      </div>

      <div className="mid fs-16">
        <div class="input_group">
          <input type="text" placeholder="Search Your Products Dude..." />
          <Search className="fs-1 text-dark " />
        </div>
      </div>

      <div className="right text-primary fs-16">
        <img
          className="profile_img text-primary"
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
