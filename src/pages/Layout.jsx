import React, {useEffect, useState}  from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import axios from "axios";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesFooter, setCategoriesFooter] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      // .get("https://localhost:5000/api/categories")
      .get(process.env.REACT_APP_API_URL+"/api/categories")
      .then(function (response) {
        setCategories(response.data);
        setCategoriesFooter(response.data.slice(0, 6))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }).finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header categories={categories} loading={loading}/> 
      <Outlet  />
      <Footer categories={categoriesFooter}  loading={loading}/>
    </div>
  );
};

export default Layout;
