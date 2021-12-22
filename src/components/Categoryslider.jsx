import React, { useState, useEffect/*, Component*/ } from 'react'
import Skeleton from 'react-loading-skeleton'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

const Categoryslider = ({ catName }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const [componentMounted, setcomponentMounted] = useState(true)
    const ImageUrl = process.env.REACT_APP_API_URL+"/images/"

    let navigate = useNavigate()
    const goToProductDetails = (productId) => {
        //console.log("gowaaaaaaa");
        navigate(`/productDetails/${productId}`)
        
    }
 
    //let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products?categories=${catName}`);
            //console.log("Category props", catName)
            //console.log(response.clone().json())
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                //console.log(filter)
            }
            return () => {
                setcomponentMounted(false);
                //componentMounted = false;
            }
        }


        getProducts();
    }, [catName])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };


    /*const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }*/

    const ShowProducts = () => {
        return (
            <>
                {/* <div className="buttons justify-content-center d-flex mb-5 pb-5">

                    <input onClick={() => filterProduct("men's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-24.png"
                        alt="Men's" />

                    <input onClick={() => filterProduct("men's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-01.png"
                        alt="Men's" />

                    <input onClick={() => filterProduct("women's clothing")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-02.png"
                        alt="Women's" />

                    <input onClick={() => filterProduct("electronics")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-14.png"
                        alt="Electronics" />

                    <input onClick={() => filterProduct("jewelery")}
                        type="image" src="https://k.nooncdn.com/cms/pages/20211130/76d18741396e9239cdab40c73845efb5/en_mb-circle-25.png"
                        alt="jewelery" />
                </div> */}

                {/* <Ads className="p-1" />
                <br />
                <br /> */}

                <Slider className="bg-white"  {...settings} >
                    {filter.map((product) => {
                        return (
                            <Card key={product._id} style={{ width: '18rem', marginLeft: '.5rem' }} className="me-3">
                                <Card.Img variant="top" width="200px" height="200px" src={ImageUrl+product.imageSrc} alt={product.brand} />
                                <Card.Body>
                                    <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                                    <Card.Text>
                                        ${product.price}
                                    </Card.Text>

                                    <Col className="text-center">
                                        <Button variant="primary" onClick={() => goToProductDetails(product._id)}>view product</Button></Col>
                                    <Card.Text>
                                        <h5 style={{ color: "orange" }}> {/*product.rating*/} <i className="fa fa-star"></i></h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        )
                    })}
                </Slider>

            </>)
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-6 mb-5">
                        <h5 className="display-6 fw-bolder"> {catName.toUpperCase()}</h5>

                    </div>
                    <div className="col-6 mb-5 ">
                        <button className="display-6 fw-bolder btn btn-outline-dark float-end "> <h5>Shop Now</h5></button>

                    </div>
                </div>
                <div className="row justify-content-between">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
                <div className="row">

                </div>
            </div>

        </div>
    );
}

export default Categoryslider;