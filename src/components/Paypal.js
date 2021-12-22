import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResetCart } from "../redux/LAMA/cartRedux";
import axios from "axios";

export default function Paypal(props) {
  const paypal = useRef();
  const total = props.order.amount;
  console.log("ttttttttttttttttttt");
  console.log(props.order.products);
  const config = {
    //change token with userToken
    headers: {
      token: localStorage.getItem("userToken"),
      // token:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1NGNkYzI0MGFhNzlkNDYxMGViNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTM1MTE2MCwiZXhwIjoxNjM5NjEwMzYwfQ._YHOK847zyTzTqCsDI9R_L_0zdc1Vk_EbgsEBmCIxk8",
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          await axios
            .post(
              process.env.REACT_APP_API_URL + "/api/orders",
              props.order,
              config
            )
            .then(function (response) {
              // handle success
              console.log(response);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });

          props.order.products.map(async (p) => {
            // console.log("kkkkkkkkkkkkkkkk", p.quantity);
            await axios
              .put(
                process.env.REACT_APP_API_URL +
                  "/api/products/edit/" +
                  p.productId,
                { quantity: p.updatedQuantity },
                config
              )
              .then(function (response) {
                // handle success
                console.log(response);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
          });

          dispatch(ResetCart());
          alert(
            "Thank you...Transaction completed successfully by " +
              localStorage.getItem("username")
          );
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div className="text-center" style={{ position: "relative", zIndex: "0" }}>
      <div ref={paypal}></div>
    </div>
  );
}
