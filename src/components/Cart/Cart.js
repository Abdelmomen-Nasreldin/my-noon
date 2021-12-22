import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { addCart, delCart } from '../../redux/action';
import { NavLink } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CartAside from "../CartAside/CartAside";
import { addProduct, delProduct } from "../../redux/LAMA/cartRedux";
import "./Cart.css";
import Paypal from "./../Paypal";

const Cart = () => {
  //const state = useSelector((state) => state.handleCart)
  const state = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addProduct(item));
    //dispatch(addCart(item))
  };
  const handleDel = (item) => {
    //dispatch(delCart(item))
    dispatch(delProduct(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const showCartItem = () => {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <div className="p-3 pt-0">
              <p className="bold m-0">
                {" "}
                Cart <span className="hidden">({numOfItem} items)</span>
              </p>
            </div>
            {/* {CartItems.map(p => <CartItem key={p.id} product={p} />)} */}
            {state.map((p) => (
              <CartItem
                key={p.id}
                product={p}
                handleAdd={(p) => handleAdd(p)}
                handleDel={(p) => handleDel(p)}
              />
            ))}

            <div className="my-4 text-center">
              <NavLink className="btn btn-primary text-white " to="/">
                Continue Shopping
              </NavLink>
            </div>
          </div>

          <div className="col-md-4">
            <CartAside total={total} num={numOfItem} />
          </div>
        </div>
      </div>
    );
  };
  const pricArr = state.map((p) => +p.price * p.quant);

  const total = pricArr.reduce(getTotalPrice, 0);
  const numOfItem = state.length;

  function getTotalPrice(accumulator, a) {
    //console.log(accumulator);
    return accumulator + a;
  }
  /* var CartItems = [
        {
            id: "6151",
            image: `${process.env.PUBLIC_URL}/assets/zaytoun/products/mobiles/1.png`,
            title: "Mobile Hawawel fager",
            price: "7000",
            warranty: 1,
            brand: "Hawawel",
            OrderIn: "14 hr 17 min",
            FDelBy: "1/1/2022",
            quantity: 1
        },
        {
            id: "6566",
            image: `${process.env.PUBLIC_URL}/assets/zaytoun/products/mobiles/2.jfif`,
            title: "Mobile fager",
            price: "9000",
            warranty: 2,
            brand: "Samsung",
            OrderIn: "13 hr 17 min",
            FDelBy: "Tomorrow, Dec 31",
            quantity: 2
        },
        {
            id: "656886",
            image: `${process.env.PUBLIC_URL}/assets/zaytoun/products/mobiles/3.jfif`,
            title: "Mobile fager awyyyyy",
            price: "11000",
            warranty: 3,
            brand: "Apple",
            OrderIn: "15 hr 17 min",
            FDelBy: "Dec 31",
            quantity: 1
        }
    ]*/

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && showCartItem()}
      {/* {state.length !== 0 && flag && <Paypal total="555" />} */}
    </>
  );
};
export default Cart;
