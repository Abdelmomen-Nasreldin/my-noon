import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card} from "antd";
import RatingProduct from "./RatingProduct.jsx";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

//import { addCart } from '../../redux/action';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function OrderNew() {
    const imagesUrl = process.env.REACT_APP_API_URL + "/images/";
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [loopOrders, setLOOP] = useState([]);
    // const Orders = [];
    const [Orders, setOrders] = useState(()=>[]);
    // const [loading, setLoading] = useState(false);


    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const config = {
            //change token with userToken
            headers: {
                token: localStorage.getItem("userToken"),
            },
        };
        const getProductbyId = async () => {
            setLoading(true);
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/orders/find/${userId}`, config)
                // .get("http://localhost:5000/api/orders/find/61965b8bd77aff0d40a1d004")
                .then(function (response) {
                    Object.keys(response.data).map((key, index) => {

                       
                        setOrders( Orders.push(response.data[key]))
                        console.log(response.data[key])
                        console.log(Orders)
                    });

                    Orders.map(order => {
                      return  order.products.map(p => { 
                           return axios
                                .get(`${process.env.REACT_APP_API_URL}/api/products/find/${p.productId}`, config)
                                .then(function (response) { p.data = response.data })
                                .catch((err) => { console.log(err.message) })
                        })
                    })
                    // setLOOP(Orders)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                }).finally(() => {
                    setLoading(false);
                    console.log("fgfgfg", Orders)
                    setLOOP(Orders)
                });

        };

        getProductbyId();
    }, []);

    setTimeout(() => {
        setFlag(true);
        console.log(loopOrders)
        console.log(order)
    }, 500)

    if (!flag) {
        //console.log("hna");
        return <Spin indicator={antIcon} />;
        // return "loading...";
    }
    // if (loading) {
    //     return "loading...";
    //   }
    return (

        <div>

            {flag && <div>
            {/* <div>  */}
                {loopOrders.map((order,index) => {
                    console.log(order, "hhhh");
                    console.log(order._id);
                    return (
                        <>
                            <Card
                                type="inner"
                                className="mb-3"
                                title= {<span className=" fs-5">{`Order No. ${index+1} - Order Status: ${order.status}`}</span>}
                                
                            // extra={<a href="#l">More</a>}
                            >
                                {order.products.map((product) => {
                                    //console.log(product)
                                    return (
                                        <div className="d-flex flex-wrap justify-content-center  justify-content-md-between align-items-center">
                                            <div
                                                className="card mb-3"
                                                style={{ maxWidth: "540px", border: "none" }}
                                            >
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img
                                                            src={imagesUrl + product.data.imageSrc}
                                                            className="img-fluid rounded-start"
                                                            alt={product.data.imageSrc}
                                                        />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{product.data.title}</h5>
                                                            <p className="card-text fw-bold"><span>Quantity: </span>{product.quantity}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {order.status === "Delivered"  && <RatingProduct prodId={product.data._id} />}   

                                        </div>)
                                })}
                            </Card>

                        </>
                    );
                })}
            </div>}
        </div>
    );
}
