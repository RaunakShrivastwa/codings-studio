import React from "react";
import "./Canvas.scss";
import { X } from "react-feather";

const Canvas = () => {
  return (
    <>
      <div
        class="offcanvas canvas_container offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header header_offcanvas">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5>
          <X
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body p-0">
          <ul className="fs-16 mt-3 p-0">
            <li>Courses</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Blogs</li>
            <li>Sign Up</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Canvas;
