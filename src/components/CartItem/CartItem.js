import React from "react";

export default function CartItem(props) {
  const ImageUrl = process.env.REACT_APP_API_URL + "/images/";

  return (
    <>
      <div className="col-12 d-flex justify-content-between">
        <div className="chekout-cart d-flex flex-1 justify-content-between">
          <div className="d-flex ">
            <div className="cart-img me-3">
              <img
                src={ImageUrl + props.product.imageSrc}
                alt="product"
                className="img-fluid"
                width="150px"
              />
            </div>
            <div className="cart-content">
              <div>
                <p className="product-brand">
                  {props.product.brand} <br />
                  <span className="product-details">{props.product.title}</span>
                </p>
              </div>

              {/* <div>
                <p className="shipping-duration">
                  {" "}
                  Order in {props.product.OrderIn} <br />
                  <span className="delivery">Free delivery</span>
                  <span className="normal-text">by</span>
                  <span className="date"> {props.product.FDelBy}</span>
                </p>
              </div> */}

              <div>
                <p className="semi-hidden">
                  Sold by
                  <span className="semi-bold"> noon</span>
                  <br />
                  <span className="semi-bold">
                    <img
                      src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                      alt="product"
                      className="img-fluid"
                    />
                    {props.product.warranty} year warranty{" "}
                  </span>
                </p>
              </div>
              {/* <div className="iconcontainer ">
                                <span className="semi-hidden "><i className="bi bi-heart"></i> Move to Wishlist</span>
                                <span className="semi-hidden mx-4"><i className="bi bi-trash"></i> Remove </span>
                                 <!-- <span> <img src="./images/fulfilmentexpress.svg"/></span> --> 
                            </div> */}
            </div>
          </div>

          <div className="rightside">
            <span className="semi-hidden">
              EGP <span className="bold">{props.product.price}</span>
            </span>
            <div /*className="dropdown btn-border"*/>
              {/* <button className="btn dropdown-toggle btndrop" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="true">
                                1
                            </button> */}
              <p className="lead fw-bold">
                {props.product.quant} X <span className="semi-hidden">EGP</span>
                {props.product.price} = <span className="semi-hidden">EGP</span>
                {props.product.quant * props.product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={(p) => props.handleDel(props.product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={(p) => props.handleAdd(props.product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <span>
              {" "}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                alt="expess"
              />
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
