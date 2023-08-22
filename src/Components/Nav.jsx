import React from "react";

const Nav = () => {
  return (
    <nav>
        <li className="display-6 list-unstyled">
          Travel <span className="text-warning" style={{ fontFamily:'Great Vibes, cursive' }}>Blog</span>
        </li>
      <ul className="list-unstyled">
        <li class="link" href="#">About</li>
        <li class="link" href="#">Popular Posts</li>
      </ul>
    </nav>
  );
};

export default Nav;
