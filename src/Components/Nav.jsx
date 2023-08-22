import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="list-unstyled">
        <li className="display-6">
          Travel <span className="script-font text-warning">Blog</span>
        </li>
        <li className="d-inline-block mr-3">About</li>
        <li className="d-inline-block">Popular Posts</li>
      </ul>
    </nav>
  );
};

export default Nav;
