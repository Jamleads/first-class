import React from "react";
import Header from "./Header";
import BoardData from "./BoardData";
import { Logo } from "../Assets";
import Product from "./Product";
import { productData } from "../Assets/DumyData";

const DashBoard = () => {
  return (
    <div className="h-screen">
      <Header currentPage="Dashboard" />
      <main className="w-full h-[85vh] px-5">
        <div className="flex justify-between items-center">
          <BoardData
            iconStyle="bg-ourRed"
            firstData="Sales"
            firstDataValue="#4,000,000.00"
            secondData="Volume"
            secondDataValue="450"
            secondDataSpan="+20.00%"
            icon={Logo}
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
          />
          <BoardData
            iconStyle="bg-ourRed"
            firstData="Sales"
            firstDataValue="#4,000,000.00"
            secondData="Volume"
            secondDataValue="450"
            secondDataSpan="+20.00%"
            icon={Logo}
          />
        </div>

        <div className="bg-red-300 flex justify-between mt-5">
          <div className="w-[60%] bg-yellow-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            inventore earum magnam mollitia officia quasi obcaecati. Labore quam
            soluta ratione, repellendus blanditiis unde praesentium sapiente
            dolor obcaecati nobis, consequatur quisquam!
          </div>

          <div className="w-[40%] h-[550px] bg-blue-500 p-5">
            <div className="bg-mainWhite rounded-lg h-full">
              <div className="h-[15%] bg-yellow-300 px-5">
                <p>Recent Order</p>
              </div>

              <div>
                {productData.map((product) => (
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
