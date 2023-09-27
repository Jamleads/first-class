import BoardData from "./Components/BoardData";
import logo from "./logo.svg";

function App() {
  return (
    <div className="px-20">
      <div className="flex justify-between items-center gap-10">
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
      </div>
    </div>
  );
}

export default App;
