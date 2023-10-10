import React, { useState } from "react";
import { toggleIcon, Logo } from "../Assets";
import NavList from "./NavList";
import { DummyData } from "../Assets/DumyData";

const SidebBar = () => {
  const [openNav, setOpenNav] = useState(true);
  const ToggleNav = () => {
    setOpenNav(!openNav);
  };
  console.log(DummyData);

  return (
    <div
      className={`px-10 relative h-screen bg-red-500 shadow-lg ${
        openNav ? "w-[20%]" : "w-[10%]"
      }`}
    >
      <div
        className="absolute top-[80px] right-[-5px] p-2 w-[40px] h-[40px] rounded-lg border-2 border-mainWhite flex items-center justify-center"
        onClick={ToggleNav}
      >
        <img src={toggleIcon} alt="toggleIcon" className="w-[80%]" />
      </div>

      <div className="bg-yellow-400">
        <div className="brand flex items-center gap-5">
          <img src={Logo} alt="BrandLogo" />
          <h2>Metric</h2>
        </div>

        <div className="sideNavList">
          {DummyData.map((navLink) => (
            <NavList key={navLink.id} {...navLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebBar;