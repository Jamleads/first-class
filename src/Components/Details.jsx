import React, { useState } from "react";

const Details = () => {
  const [seen, setSeen] = useState(true);
  const handleChange = () => {
    setSeen(false);
  };

  const [count, setCount] = useState(5);

  const increaseCount = () => {
    setCount(count + 2);
  };

  const decreaseCount = () => {
    setCount(count - 2);
  };

  return (
    <>
      <div>
        {seen ? (
          <p>Yes can see the components</p>
        ) : (
          <p>No can not see the components</p>
        )}
      </div>

      <div>
        <div className="flex items-center  justify-between">
          <button
            onClick={() => increaseCount()}
            style={{ padding: "20px", background: "green" }}
          >
            Increase
          </button>
          <button
            onClick={() => decreaseCount()}
            style={{ padding: "20px", background: "red" }}
          >
            Decrease
          </button>
        </div>

        <p className="text-center" style={{textAlign: "center"}}> the new number count is {`${count}`}</p>
      </div>
    </>
  );
};

export default Details;
