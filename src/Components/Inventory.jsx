import React from "react";
import Header from "./Header";

const Inventory = () => {
  return (
    <div>
      <div>
        <Header currentPage="Inventory" />
      </div>

      <div className="bg-blue-500">
        Inventory
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          quibusdam excepturi ea consequuntur? Impedit magni blanditiis
          provident, incidunt sunt quibusdam alias quasi voluptate veniam
          doloribus placeat? Consectetur natus facilis amet. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam quibusdam excepturi ea
          consequuntur? Impedit magni blanditiis provident, incidunt sunt
          quibusdam alias quasi voluptate veniam doloribus placeat? Consectetur
          natus facilis amet.
        </p>
      </div>
    </div>
  );
};

export default Inventory;
