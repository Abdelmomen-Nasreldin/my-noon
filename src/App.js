import { Navigate, Route, Routes } from "react-router";
import { React } from "react";
import "./App.css";
import Layout from "./pages/Layout";
// import Products from "./components/Products";
// import Navbar from "./components/Navbar";
// import Home2 from "./components/Home2";
import Home from "./components/Home";
import NotFound from "./components/NotFound/NotFound";
import Search from "./pages/Search";
import Cart from "./components/Cart/Cart";
// import Payment from "./components/Payment/Payment";
// import Checkout from "./pages/Checkout";
import User from "./components/User/User";
import Address from "./components/User/User components/Address";
import Profile from "./components/User/User components/Profile";
import Order from "./components/User/User components/Order";
// import OrderNew from "./components/User/User components/OrderNew";
// import Categoryslider from "./components/Categoryslider";

import ProductDetails from "./components/ProductDetails/ProductDetails";
import Category from "./components/Category/Category";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  // const query = new URLSearchParams(useLocation().search); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // console.log(query.get("category"));
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/Home" element={<Home />}> */}
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout/:total" element={<Checkout />} /> */}
          {/* <Route path="/category" element={<Category />} /> */}
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/category/:selectedCat" element={<Category />} />
          {/* <Route path="/search" element={<RoutingDiv />} /> */}
          {/* <Route path="/category/:selectedCat" element={<RoutingDiv />} /> */}
          {/* <Route path="/navbar" element={<Navbar />} /> */}
          {/* <Route path="/Home2" element={<Home2 />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/User" element={<Navigate replace to="/User/order" />} />
        <Route path="User" element={<User />}>
          <Route index element={<Order />} />
          <Route path="/User/order" element={<Order />} />
          {/* <Route path="/User/order"   element={<OrderNew/>} /> */}
          <Route path="/User/address" element={<Address />} />
          <Route path="/User/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
