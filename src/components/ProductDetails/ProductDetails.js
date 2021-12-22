import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { addCart } from '../../redux/action';
import { addItemCart } from "../../redux/LAMA/cartRedux";
import Rating from "../Rating";

export default function ProductDetails() {
  const ImageUrl = process.env.REACT_APP_API_URL + "/images/";
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [rate, setRate] = useState(0);
  const [quantityWanted, setquantityWanted] = useState(1);
  const dispatch = useDispatch();

  const addCartProduct = (product) => {
    // product.quantity = quantityWanted;
    let cartItem = { ...product, quant: quantityWanted };
    dispatch(addItemCart(cartItem));
    //dispatch(addCart(product));
  };
  const handleMinus = () => {
    if (quantityWanted > 1) setquantityWanted(quantityWanted - 1);
  };

  // console.log(id);

  // Make a request for a user with a given ID
  //axios.get('/user?ID=12345');

  /*const handleChange = (e) => {
        setquantityWanted(e.target.value);
        //console.log(quantityWanted)
    }*/

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProductbyId = async () => {
      //setLoading(true);
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/products/find/${id}`)
        .then(function (response) {
          // handle success
          //console.log(response);
          setProduct(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      /*console.log(response.clone().json())
       */
    };

    getProductbyId();
  }, [id]);
  /*var product = {
        image: "assets/zaytoun/products/mobiles/1.png",
        title: "Mobile Hawawel fager",
        price: "7000"
    };*/
  //console.log("ana product", product)
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-5">
            <img
              src={ImageUrl + product.imageSrc}
              alt={product.brand}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-lg-4">
            <h className="hiddenfont">{product.brand}</h>
            <h5>{product.title}</h5>

            {/* <div>
                            <h className="hiddenfont">{product.title}
                            </h>
                        </div> */}

            <div className="sameline">
              <p className="scoreTag pt-1">
                {" "}
                {rate} {/*product.rating*/}
              </p>
              <p>
                <a className="Rating" href="/#">
                  {" "}
                  {/*product.rating.rate*/}{" "}
                </a>{" "}
              </p>
            </div>

            <div className="sameline">
              <p>
                {" "}
                <span className="newprice"> EGP {product.price}</span>
                <br />
                <span className="hiddenfont Inclusive">Inclusive of VAT</span>
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <p className="normal-txt">
                  Order in the next 28 mins
                  <br />
                  <span className="semibold">Free delivery </span>by{" "}
                  <span className="date"> Sat, Oct 16 </span>{" "}
                </p>
              </div>
              <div className="expressimg">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg
          "
                  alt="icon"
                  className="img-fluid expressimg "
                />
                <i className="bi bi-question-circle"></i>
              </div>
            </div>

            <div className="sameline">
              {product.quantity > 3 && (
                <p>
                  {" "}
                  Quantity
                  <span className="lowquaintityred text-primary">
                    {" "}
                    {product.quantity}
                  </span>
                </p>
              )}
              {product.quantity <= 3 && product.quantity > 0 && (
                <span className="lowquaintityred text-danger">
                  {" "}
                  Low stock: only {product.quantity} left
                </span>
              )}
              {product.quantity === 0 && (
                <span className="lowquaintityred text-danger">
                  {" "}
                  Out of Stock
                </span>
              )}
            </div>

            <div className="box">
              <div className="d-flex">
                {/* <p className="lead fw-bold">
                                    {<input type="number" min="1" max={product.rating ? product.rating.count : 9}
                                        onChange={(e) => handleChange(e)} value={quantityWanted} />}
                                </p> */}
                <button
                  className="btn btn-outline-dark mb-5 mt-2 me-2"
                  onClick={() => handleMinus()}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <div
                  className="text-center border border-dark rounded mb-5 mt-2 me-2 pt-1 h-70"
                  style={{ width: "40px" }}
                >
                  {quantityWanted}
                </div>
                <button
                  className="btn btn-outline-dark mb-5 mt-2 me-5"
                  onClick={() => setquantityWanted(+quantityWanted + 1)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              {/* <!-- <div className="quantity whitebox"> 1 <p className="border-end-1"></p></div> --> */}
              <div className="addtocart">
                <button
                  className="btn btn-lg text-center text-white w-100 "
                  disabled={
                    product.quantity < quantityWanted || product.quantity === 0
                  }
                  onClick={() => addCartProduct(product)}
                >
                  {" "}
                  Add To Cart
                </button>
              </div>
            </div>
            <br />
          </div>{" "}
          <br />
          <div className="col-lg-3">
            <div className="d-flex">
              <div className="col-1">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg
            "
                  alt="icon"
                  className="img-fluid"
                />
              </div>
              {
                <p className="normal-txt">
                  Enjoy hassle free returns with this offer.
                  <br /> Learn more about our <a href="/#"> Return Policy </a>
                </p>
              }
              {/* <Rating></Rating> */}
            </div>
            <hr />
            {/* <!-- ******************second******************* --> */}
            <div className="d-flex">
              <div className="col-1">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                  alt="icon"
                  className="img-fluid"
                />
              </div>
              <hr />
              <p className="boldd">1 year warranty</p>
            </div>
            <hr />
            {/* <!-- ***************third********************* --> */}
            <div className="d-flex">
              <div className="col-1">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/seller.svg
                        "
                  alt="icon"
                  className="img-fluid"
                />
              </div>

              <div>
                <p className="boldd">
                  Sold by
                  <a href="/#"> noon </a> <br />{" "}
                  <span className="normal-txt"> official warranty</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex">
              <div>
                {/* <p>Seller Reviews
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-half stars"></i>
                                    (4.2) 20.8k <br />
                                    <span className="hiddenfont">
                                        How are these calculated <i className="bi bi-question-circle"></i>
                                    </span>
                                </p> */}
                <Rating
                  className="text-center"
                  prdId={product._id}
                  setRate={setRate}
                ></Rating>
              </div>
            </div>
            <br />

            <div className="d-flex">
              <div className="col-1">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg
            "
                  alt="icon"
                  className="img-fluid "
                />
              </div>

              <div>
                <p className="boldd">
                  FREE RETURNS <br />
                  <span className="hiddenfont">
                    Get free returns on eligible items
                  </span>
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="col-1">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/trusted_shipping_usp_v2.svg
          "
                  alt="icon"
                  className="img-fluid"
                />
              </div>

              <div>
                <p className="boldd">
                  TRUSTED SHIPPING <br />
                  <span className="hiddenfont">
                    {" "}
                    Free shipping when you spend <br />
                    350 EGP and above{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="col-1">
                <img
                  src="	https://z.nooncdn.com/s/app/com/noon/icons/secure_usp.svg"
                  alt="icon"
                  className="img-fluid "
                />
              </div>

              <div>
                <p className="boldd">
                  SECURE SHOPPING <br />{" "}
                  <span className="hiddenfont">
                    Your data is always protected{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
