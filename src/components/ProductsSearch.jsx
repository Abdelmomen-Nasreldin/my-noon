import React from 'react';
import { useNavigate } from 'react-router-dom';
const ImageUrl = process.env.REACT_APP_API_URL + "/images/"
const ProductsSearch = ({ products, loading }) => {
  let navigate = useNavigate()
  const goToProductDetails = (productId) => {
      //console.log("gowaaaaaaa");
      navigate(`/productDetails/${productId}`)
      
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <>
    {products.map((product) => {
        return (
            <>
                {/* <div className="col-md-3 mb-4">
                    <div class="card h-100 text-center p-4" key={product._id} >
                        <img src={`${process.env.REACT_APP_API_URL}/images/${product.imageSrc}`} class="card-img-top" alt={product.title} height="250px" />
                        <div class="card-body">
                            <h5 class="card-title mb-0">{product.title.substring(0, 20)}...</h5>
                            <p class="card-text lead ">${product.price}</p>
                            <button className='btn btn-primary' onClick={() => goToProductDetails(product._id)}>view product</button>
                        </div>
                    </div>
                </div> */}



<div className="col-md-3 mb-4">
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
                        </div>


            </>
        )
    })}
  </>
  );
};

export default ProductsSearch;






