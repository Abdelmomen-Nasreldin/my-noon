// import React from 'react'
import "../header.scss"
import "./cart.css"
import React, { useState } from "react";
// import { Input, AutoComplete } from 'antd';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
// import { Button } from "antd";
import { Menu } from "antd";
import { Dropdown } from "antd";
import { CaretDownOutlined, HomeOutlined, ShopOutlined } from "@ant-design/icons";
import { UserOutlined } from '@ant-design/icons';
//

const HeaderOne = () => {
  // let isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
  const [userName, setUsername] = useState(localStorage.getItem("username"));
  let navigate = useNavigate();
  const quantity = useSelector(state => state.cart.quant)
  const [search, setSearch] = useState("");
  // const [logout, setLogout] = useState(true);
  const [searchOption, setSearchOption] = useState([]);
  const imagesUrl = process.env.REACT_APP_API_URL+"/images/";

  
  const Logout=()=>{
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.setItem("isLoggedIn","false");
    setIsLoggedIn("false");
    // setLogout(false);
  
  }
  const menu = (
  
    <Menu style={{width: "150px", 
    position: "relative", top: "10px", right: "50px"
    }}>
      <Menu.Item key="0" className="">
        <Link to="/User/order" className="d-flex align-items-center"><ShopOutlined className="me-2"/> order </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/User/address" className="d-flex align-items-center"><HomeOutlined className="me-2"/>Address</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/User/profile" className="d-flex align-items-center"><UserOutlined className="me-2"/>profile</Link>
      </Menu.Item>
      <Menu.Divider className="text-center"/>
      <Menu.Item onClick={Logout} key="4" className="text-center" >sign out</Menu.Item>
    </Menu>
  );
  
  
  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts?userId=" + search)
      // http://localhost:5000/api/products?category=Mobiles
      .get(process.env.REACT_APP_API_URL+"/api/categories?subCat=" + search)
      .then((post) => {
        console.log(post);
        console.log(search);
        // console.log(post.data)
        setSearchOption(post.data);
        // setposts(post.data.slice(0,4));
      });
    // console.log(posts);
  }, [search]);
  // const handleSearch = () => {};
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      navigate(`/category/${event.target.value}`);
      // `/Home/category/${cat.mainCat}`
    }
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="position-sm-static
      p-1
      first__navbar"
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand d-block d-sm-none"
            to="/"
          >
            <img
              src={imagesUrl + "noon-black-en.svg"}
              // src="images/header/noon-black-en.svg"
              alt="noon"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* id="navbarSupportedContent" */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  <img src={imagesUrl + "noon-black-en.svg"} alt="noon" />
                  {/* <img src="images/header/noon-black-en.svg" alt="noon" /> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex"
                  to="/"
                >
                  <div className="egyptFlag mx-2 d-flex d-none d-md-block">
                    <img
                      src={imagesUrl + "eg.svg"}
                      // src="images/header/eg.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="Deliver">
                      <span>Noon</span>
                      {/* <img
                        src={imagesUrl + "dropdownArrow.svg"}
                        // src="images/header/dropdownArrow.svg"
                        alt="dropdownArrow"
                      /> */}
                    </div>
                    <span>Egypt</span>
                  </div>
                </Link>
              </li>

              <li className="header__li__search">
                <input
                  className="form-control"
                  list="datalistOptions"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  placeholder="Type to search..."
                  // onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  onKeyDown={handleKeyDown}
                />
                <datalist id="datalistOptions">
                  {searchOption.map((option) => {
                    return (
                      <>
                        <option
                          value={option.mainCat}
                          key={option.id}
                          // onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                          onKeyDown={handleKeyDown}
                        />
                        {/* {console.log(option.mainCat)} */}
                      </>
                    );
                  })}
                </datalist>
                {/* <Complete /> */}
              </li>
              <li className="nav-item language">
                <Link
                  className="nav-link"
                  to="/"
                >
                  <span>العربية</span>
                </Link>
              </li>
              <li className="nav-item sign-in">
                <Link
                  className={
                    isLoggedIn!=="true" ? "d-block nav-link" : "d-none nav-link"
                  }
                  to="/Login"
                >
                  <span>Sign In</span>
                  <img
                    src={imagesUrl + "user_thin.svg"}
                    // src="images/header/user_thin.svg"
                    alt="user"
                    style={{ width: "17px" }}
                  />
                </Link>

                <Dropdown overlay={menu} trigger={["click"]}>
                  <Link
                    to="/User"
                    className={
                      "ant-dropdown-link mx-2 d-flex align-items-center text-center fw-bold " + (isLoggedIn=="true" ? "d-block" : "d-none")
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    Ahlan {userName} <br />My Account
                     <CaretDownOutlined className="ms-2"/>
                  </Link>
                </Dropdown>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{position: 'relative'}} to="/cart">
                  <span>Cart</span>
                  <img
                    src={imagesUrl + "cart.svg"}
                    //  src="images/header/cart.svg"
                    alt="cart"
                  />{
                    /*cart.length === 0?<span></span>:<div id="counter"><span>{cart.length}</span></div>*/
                    (quantity === 0 || quantity === undefined) ?<span></span>:<div id="counter" ><span>{quantity}</span></div>
                  }
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </div>
        
      </Navbar>
    </>
  );
};

export default HeaderOne;
