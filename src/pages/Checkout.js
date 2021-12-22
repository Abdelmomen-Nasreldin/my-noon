import React, { useState } from "react";
import Paypal from "../components/Paypal";
import { useParams } from "react-router-dom";
const Checkout = () => {
  const [checkout, setCheckOut] = useState(false);
  const total = useParams();
  return (
    <Paypal total={total} />
    // <div className="App">
    //   {checkout ? (
    //     <Paypal />
    //   ) : (
    //     <button
    //       className="btn btn-primary"
    //       onClick={() => {
    //         setCheckOut(true);
    //       }}
    //     >
    //       Checkout
    //     </button>
    //   )}
    // </div>
  );
};

export default Checkout;
