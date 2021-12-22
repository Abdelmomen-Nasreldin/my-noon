import React from "react";
import FooterApps from "./Footer components/FooterApps";
import FooterCategories from "./Footer components/FooterCategories";
import FooterOne from "./Footer components/FooterOne";
import FooterSocialMedia from "./Footer components/FooterSocialMedia";
import FooterThree from "./Footer components/FooterThree";
import "./footer.scss";
// import  axios  from 'axios';
// import { Skeleton } from 'antd';

export const categoriesContext = React.createContext();

const Footer = ({ categories, loading}) => { 
return (
    <div className="mainFooter">
      <FooterOne />

      <footer className="py-0 py-md-4">
        <div className="container-fluid">
      
        <FooterCategories categories={categories} loading={loading}/> 
      
          <div className="row mt-3">
            <div
              className="
              col-md-6
              d-flex
              flex-column
              
              align-items-center
              p-2
            "
            >
              <h6 style={{ fontSize: "14px" }}>SHOP ON THE GO</h6>
              <FooterApps />
            </div>
            <div
              className="
              col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-center
              p-2
            "
            >
              <h6 style={{ height: "14px" }}>CONNECT WITH US</h6>
             <FooterSocialMedia />
            </div>
          </div>
        </div>
      </footer>

      <FooterThree />
    </div>
  );
};

export default Footer;
