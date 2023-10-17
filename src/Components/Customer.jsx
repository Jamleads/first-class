import React from "react";
import Header from "./Header";

const Customer = () => {
  return (
    <div className="w-full">
      <Header currentPage="Customer" />
      <div className="h-[85vh] bg-red-200">this is Customer page</div>
    </div>
  );
};

export default Customer;
