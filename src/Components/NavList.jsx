import React from "react";
import { Link } from "react-router-dom";

const NavList = ({ icon, navcontent, iconAlt, destination, customStyle }) => {
  return (
    <Link to={destination}>
      <div className={`list flex items-center gap-5 ${customStyle}`}>
        <img src={icon} alt={iconAlt} />
        <p className="text-2xl">{navcontent}</p>
      </div>
    </Link>
  );
};

export default NavList;
