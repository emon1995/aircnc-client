import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="img"
        className="hidden md:block"
        width="100"
        height="100"
      />
    </Link>
  );
};

export default Logo;
