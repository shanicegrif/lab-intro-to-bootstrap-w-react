import React from "react";

const Nav = () => {
  return (
    <nav class="nav">
      <a class="nav-link active" aria-current="page" href="#">
        Travel
        <span
          className="text-warning"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          Blog
        </span>
      </a>
      <a class="nav-link" href="#">
        About
      </a>
      <a class="nav-link" href="#">
        Popular Posts
      </a>
    </nav>
  );
};

export default Nav;
