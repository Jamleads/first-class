import BoardData from "./Components/BoardData";
import Details from "./Components/Details";
import SidebBar from "./Components/SidebBar";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <SidebBar />
      {/* <div className="flex justify-between items-center gap-10">
        <BoardData
          iconStyle="bg-ourRed"
          firstData="Sales"
          firstDataValue="#4,000,000.00"
          secondData="Volume"
          secondDataValue="450"
          secondDataSpan="+20.00%"
          icon={logo}
        />

        <BoardData
          iconStyle="bg-black"
          firstData="Customer"
          firstDataValue="1,250"
          firstDataSpan="+15.80%"
          secondData="Active"
          secondDataValue="1,800"
          secondDataSpan="85.00%"
          icon={logo}
        />

        <BoardData
          iconStyle="bg-ourRed"
          firstData="Sales"
          firstDataValue="#4,000,000.00"
          secondData="Volume"
          secondDataValue="450"
          secondDataSpan="+20.00%"
          icon={logo}
        />
      </div> */}

      {/* <div>
        <Details />
      </div> */}
    </>
  );
}

// React Router

export default App;
