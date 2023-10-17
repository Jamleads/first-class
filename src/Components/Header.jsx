import React from "react";
import { Logo } from "../Assets";

const Header = ({ currentPage }) => {
  return (
    <div className="bg-yellow-500 w-full h-[15vh] px-10 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1>{currentPage}</h1>
        </div>

        <div className="flex items-center, gap-5">
          <select name="" id="" className="bg-yellow-100">
            <option value="">Nanny Shop</option>
            <option value=""></option>
            <option value=""></option>
          </select>

          <div>
            <img src={Logo} alt="" />
          </div>

          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
