import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-warning position-relative bottom-0">
      <ul className="list-unstyled text-center">
        <li>
          <a>Contact Me</a>
        </li>
        <li>
          <a>About the author</a>
        </li>
      </ul>
      <footer className="text-end">Copyright MyTravelBlog 2020</footer>
    </div>
  );
};

export default Footer;
