import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";
const TestOrder = () => {
  const [orders, setOrders] = useState([]);
  const [links, setLinks] = useState([]);
  const imagesUrl = process.env.REACT_APP_API_URL + "/images/";
  const [products, setProducts] = useState([]);
  // const [order, setOrder] = useState(() => {});
  const [loading, setLoading] = useState(false);
  // const userId = localStorage.getItem("userId");
  // const config = {
  //   //change token with userToken
  //   headers: {
  //     token: localStorage.getItem("userToken"),
  //   },
  // };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const config = {
      //change token with userToken
      headers: {
        token: localStorage.getItem("userToken"),
      },
    };
    setLoading(true);
    axios
      // .get("https://noon-ecommerce.herokuapp.com/api/orders/find/61965b8bd77aff0d40a1d004",
      .get(`${process.env.REACT_APP_API_URL}/api/orders/find/${userId}`, config)
      // .get("http://localhost:5000/api/orders/61b74fa7c9d01e682c3cc6e1")
      .then(function (response) {
        // const urls = response.data[2].products.map(
        //   (product) =>
        //     `${process.env.REACT_APP_API_URL}/api/products/find/${product.productId}`
        // );
        // console.log(urls);
        setOrders(response.data);
        console.log(response.data);
        // setOrders([response.data])
        // console.log();
        const urls = response.data.map((da) =>
          da.products.map(
            (product) =>
              `${process.env.REACT_APP_API_URL}/api/products/find/${product.productId}`
          )
        );
        setLinks(urls);
        console.log(urls);
        const allProducts = [];
        urls.map((subarray) => {
          return subarray.forEach((item) => {
            allProducts.push(item);
          });
        });
        console.log(allProducts);
        // setProducts(allProducts);
        const promises = links.map((url) =>
          fetch(url).then((response) => response.json())
        );
        console.log(promises);
        Promise.all(promises).then((data) => {
          console.log(data);
        //   setProducts(data);
        });
        console.log(promises);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [links]);
//   const testUrl = () => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/api/orders/find/${userId}`, config)
//       .then(function (response) {
//         for (const x of orders) {
//         for (const y of links) {
//             products.push({orderId : x._id, productsLink : y});
//             console.log(products)
//         }
        
//         }
       
//       });
//   };
//   testUrl();
  return (
    <div>
      {/* {successMsg && <Alert message={successMsg} type="success" closable />} */}

      {/* {errMsg && <Alert message={errMsg} type="error" closable />} */}

      {products.map((product) => {
        console.log(products);
        // console.log(order);
        return (
          <>
            <Card
              type="inner"
              className="mb-3"
              title={product.brand}
              // extra={<a href="#l">More</a>}
            >
              <div className="d-flex flex-wrap justify-content-center  justify-content-md-between align-items-center">
                <div
                  className="card mb-3"
                  style={{ maxWidth: "540px", border: "none" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={imagesUrl + product.imageSrc}
                        className="img-fluid rounded-start"
                        alt={product.imageSrc}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.desc}</p>
                        {/* <p
                          className="card-text"
                          style={{
                            color:
                              order.status === "delievered" ? "green" : "black",
                          }}
                        >
                          {order.status}
                        </p> */}
                        {/* <p className="card-text">
                          <small className="text-muted">
                            Last updated
                            {" " +
                              new Date(order.updatedAt).toLocaleDateString(
                                "en-us",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                          </small>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* {order.status === "delievered" ? (
                  <RatingProduct />
                ) : (
                  <Button onClick={() => cancel(product._id)} size={"large"}>
                    cancel
                  </Button>
                )} */}
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default TestOrder;
