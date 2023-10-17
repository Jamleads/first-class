import React from "react";
import { Logo } from "../Assets";

const Product = ({ icon, productName, price, dateNow, status }) => {
  return (
    <div className="flex items-center gap-5 border-2 px-5 py-2">
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <img src={icon} alt="" />
      </div>

      <div className="flex items-center justify-between w-full">
        <div>
          <p>{productName}</p>
          <p>
            # <span>{price}</span>
          </p>
        </div>

        <div>
          <p>{dateNow}</p>
          <p className="text-red-500 bg-red-200 text-center">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
