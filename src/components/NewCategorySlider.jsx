import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { Row } from 'react-bootstrap'
const NewCategorySlider = ({ catName }) => {
    let navigate = useNavigate()
    const goToProductDetails = (productId) => {
        navigate(`/productDetails/${productId}`)

    }

    const goToCategory = () => {
        navigate(`/category/${catName}`)
    }


    const load = [1, 2, 3, 4, 5, 6, 7]
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const [componentMounted, setcomponentMounted] = useState(true)
    const ImageUrl = process.env.REACT_APP_API_URL + "/images/"
    // let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            // const response = await fetch(`https://fakestoreapi.com/products`);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products?categories=${catName?catName:""}`);
            console.log("Category props", catName)
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                setcomponentMounted(false);
            }
        }




        getProducts();
    }, [catName])

    const Loading = () => {
        return (
            <>
                {

                    load.map((loaded) => {
                        return (
                            <div class="card col-1 m-1" style={{ height: '250px', width: '180px' }} aria-hidden="true" >
                                <img src="https://z.nooncdn.com/s/app/com/noon/images/_loaders/noon-loader.gif" class=" w-auto" alt="..." />

                            </div>
                        )
                    }
                    )

                }

            </>
        );
    };

    const ShowProducts = () => {
        return (

            <Carousel className="bg-white container"
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            // itemClass="carousel-item-padding-40-px "
            >
                {filter.sort((a, b) => 0.5 - Math.random()).map((product) => {
                    return (
                        <div class="card m-3 border-0" style={{ width: "18rem;", cursor: 'pointer' }} key={product._id}
                            onClick={() => goToProductDetails(product._id)}>
                            {product.quantity < 4 && (
                                <div className="border border-white text-truncate" >
                                    <span class="badge bg-white text-white " >CODE:HY5242DD23 GET-10% OFF </span>
                                </div>
                            )}
                            {product.quantity > 4 && (
                                <div className="border border-primary text-truncate">
                                    <span class="badge bg-white text-primary " >CODE:HY5242DD23 GET-10% OFF </span>
                                </div>
                            )}
                            <img src={ImageUrl + product.imageSrc} class="card-img-top" height="200px" alt={product.title} />
                            <div class="card-body">
                                <h5 class="card-title fw-normal fs-6 text-truncate"> {product.title}... </h5>
                                <p class="card-text fs-5">EGP <span class="fw-normal">{product.price}</span> </p>
                                <p class="card-text justify-content-between">
                                    <img width="70px" src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" class="img img-responsive" />
                                    <span class="fa fa-star float-end" style={{ color: 'orange', fontWeight: 'bold' }} > {/*product.rating.rate*/}</span> </p>

                            </div>
                        </div>

                    )
                })}
            </Carousel>

        )
    }


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3// optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div >
            <div className="container my-5 py-5 bg-white justify-content-center">
                <div className="row">
                    <div className="col-6 mb-5">
                        <h5 className="display-6 fw-bolder"> {catName?catName:"All Products"}</h5>

                    </div>
                    <div className="col-6 mb-5 ">
                        <button className="display-6 fw-bolder btn btn-outline-dark float-end fs-5 text-center" onClick={() => goToCategory()}>Shop Now </button>

                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
                <div className="row">

                </div>
            </div>

        </div>
    );
}

export default NewCategorySlider;