import React from "react";
import { toggleIcon } from "../Assets";

const NavList = ({ icon, navText }) => {
  return (
    <div className="list flex items-center gap-5">
      <img src={icon} alt="" />
      <p className="text-2xl">{navText}</p>
    </div>
  );
};

export default NavList;
