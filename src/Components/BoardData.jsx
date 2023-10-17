import React, { useState } from "react";

function BoardData({
  iconStyle,
  icon,
  firstData,
  firstDataValue,
  firstDataSpan,
  secondData,
  secondDataValue,
  secondDataSpan,
}) {
  const [xy, setXy] = useState(true);

  const test = () => {
    console.log("I am executing");
    setXy(!xy);
    console.log(xy);
  };

  return (
    <div
      className={`w-[30%] rounded-2xl px-10 py-5 mt-10 ${
        xy ? "bg-ourRed" : "bg-mainWhite"
      }`}
      onMouseEnter={test}
    >
      <div className="flex items-center justify-between">
        <div
          className={`icon-wrap w-[40px] h-[40px] ${iconStyle} flex items-center justify-center`}
        >
          <img src={icon} alt="" className="w-[90%]" />
        </div>

        <select name="" id="">
          <option value="">This week</option>
          <option value="">Last week</option>
          <option value="">This Month</option>
        </select>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="w-1/2">
          <p className="text-gray-400 text-2xl">{firstData}</p>
          <p>
            {firstDataValue}{" "}
            <span className="text-green-300 ml-5">{firstDataSpan}</span>
          </p>
        </div>

        <div className="w-1/2">
          <p className="text-gray-400 text-2xl">{secondData}</p>
          <p>
            {secondDataValue}
            <span className="text-green-300 ml-5">{secondDataSpan}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoardData;

// USE STATE
// EVENT IN REACT
