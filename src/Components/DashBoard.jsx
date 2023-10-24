import React from "react";
import Header from "./Header";
import BoardData from "./BoardData";
import { Logo } from "../Assets";
import Product from "./Product";
import { productData } from "../Assets/DumyData";
import { Chart } from "chart.js";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

const DashBoard = () => {
  return (
    <div className="h-screen">
      <Header currentPage="Dashboard" />
      <main className="w-full h-[85vh] px-5">
        <div className="flex justify-between items-center gap-5 mt-5">
          <BoardData
            iconStyle="bg-ourRed"
            firstData="Sales"
            firstDataValue="#4,000,000.00"
            secondData="Volume"
            secondDataValue="450"
            secondDataSpan="+20.00%"
            icon={Logo}
            compStyle="w-[30%]"
          />
          <BoardData
            iconStyle="bg-black"
            firstData="Customer"
            firstDataValue="1,250"
            firstDataSpan="+15.80%"
            secondData="Active"
            secondDataValue="1,800"
            secondDataSpan="85.00%"
            icon={Logo}
            compStyle="w-[30%]"
          />
          <BoardData
            iconStyle="bg-ourRed"
            firstData="Sales"
            firstDataValue="#4,000,000.00"
            secondData="Volume"
            secondDataValue="450"
            secondDataSpan="+20.00%"
            icon={Logo}
            compStyle="w-[40%]"
          />
        </div>

        <div className="flex justify-between mt-5 gap-5">
          <div className="chatSide w-[60%] flex flex-col gap-5">
            <div className="chatSideDiv flex gap-5">
              <div className="w-1/2 bg-blue-100">
                <DoughnutChart />
              </div>

              <div className="w-1/2 h-full flex flex-col gap-5">
                <BoardData
                  compStyle="w-full h-1/2 "
                  iconStyle=""
                  icon={Logo}
                  firstData="All Product"
                  firstDataValue="45"
                  secondData="Volume"
                  secondDataValue="32"
                  secondDataSpan="+24%"
                />

                <BoardData compStyle="w-full h-1/2" iconStyle="" icon={Logo} />
              </div>
            </div>

            <div className="bg-red-100 flex items-center justify-center">
              {/* <DoughnutChart /> */}
              <BarChart />
            </div>
          </div>

          <div className="w-[40%] h-[600px] bg-blue-500 p-5">
            <div className="bg-mainWhite rounded-lg h-full">
              <div className="h-[15%] bg-yellow-300 px-5">
                <p>Recent Order</p>
              </div>

              <div>
                {productData?.map((product) => (
                  <Product
                    key={product.id}
                    {...product}
                    dateNow={product.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
