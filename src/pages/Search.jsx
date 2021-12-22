import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import ProductsSearch from '../components/ProductsSearch';
import  Pagination from '../components/Pagination';
import axios from 'axios';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      console.log("heloooooooo",searchParams.get("brand"));
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products?categories=${searchParams.get("category")?searchParams.get("category"):""}&subCat=${searchParams.get("subCat")?searchParams.get("subCat"):""}&brand=${searchParams.get("brand")?searchParams.get("brand"):""}`);
      setProducts(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5 bg-light' >
      <div class="d-flex justify-content-center">
        <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
      </div>
      <div className="row">

      <ProductsSearch products={currentProducts} loading={loading} />
      </div>
      <div class="d-flex justify-content-center">
        <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
      </div>
    </div>
  );
};

export default Search;