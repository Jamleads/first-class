import Layout from "./Components/Layout";
import Customer from "./Components/Customer";
import DashBoard from "./Components/DashBoard";
// import Inventory from "./Components/Inventory";
import Order from "./Components/Order";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Conversation from "./Components/Conversation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<DashBoard />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/conversation" element={<Conversation />}></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

// React Router

export default App;

// // ref
// // https://metrix-dashboard-1gr6po73c-jamleads.vercel.app/

// {
//   /* <div className="flex justify-between items-center gap-10">
//         <BoardData
//           iconStyle="bg-ourRed"
//           firstData="Sales"
//           firstDataValue="#4,000,000.00"
//           secondData="Volume"
//           secondDataValue="450"
//           secondDataSpan="+20.00%"
//           icon={logo}
//         />

//         <BoardData
//           iconStyle="bg-black"
//           firstData="Customer"
//           firstDataValue="1,250"
//           firstDataSpan="+15.80%"
//           secondData="Active"
//           secondDataValue="1,800"
//           secondDataSpan="85.00%"
//           icon={logo}
//         />

//         <BoardData
//           iconStyle="bg-ourRed"
//           firstData="Sales"
//           firstDataValue="#4,000,000.00"
//           secondData="Volume"
//           secondDataValue="450"
//           secondDataSpan="+20.00%"
//           icon={logo}
//         />
//       </div> */
// }

// {
//   /* <div>
//         <Details />
//       </div> */
// }
