import "./userHeader.scss";
// import "./cart.css"
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
const UserHeader = () => {
  const quantity = useSelector(state => state.cart.quant)
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState([]);

  const imagesUrl = process.env.REACT_APP_API_URL+"/images/";
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
    <div className="User-Header">
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
             
                </Link>
              </li>

              <li className="header_li_search">
        
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
                  className="nav-link mx-2"
                  to="/"
                >
                  <span>العربية</span>
                </Link>
              </li>
              <li className="nav-item sign-in">
                <Link className="nav-link" to="/">
                  {/* <span>Sign In</span> */}
                  <svg
                    className="mx-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.44812 12.3353V21H11.9573H18.4665V12.3353L11.9203 6.12511L5.44812 12.3353Z"
                      stroke="#404554"
                      stroke-width="0.856739"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9203 6.12511L4.92597 12.8779C4.47664 13.3117 3.7607 13.2991 3.32689 12.8498C2.89307 12.4004 2.90565 11.6845 3.35499 11.2507L11.9008 3L20.6522 11.241C21.1069 11.6692 21.1284 12.3849 20.7002 12.8396C20.272 13.2943 19.5563 13.3158 19.1016 12.8876L11.9203 6.12511Z"
                      stroke="#404554"
                      stroke-width="0.856739"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.76611 20.7774L9.76611 16.9336C9.76611 15.7439 10.7306 14.7794 11.9203 14.7794V14.7794C13.11 14.7794 14.0745 15.7439 14.0745 16.9336V20.7774"
                      stroke="#404554"
                      stroke-width="0.856739"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.8551 12.6005H10.9003"
                      stroke="#404554"
                      stroke-width="0.856739"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                {/* cart chnage */}
              <Link className="nav-link" to="/cart" style={{position: 'relative'}}>
                  <span>Cart</span>
                  <img
                    src={imagesUrl + "cart.svg"}
                    className="ms-2"
                    //  src="images/header/cart.svg"
                    alt="cart"
                  />{
                    
                    (quantity === 0 || quantity === undefined)?<span></span>:<div id="counter" ><span>{quantity}</span></div>
                  }
                </Link>
              </li>
            </ul>
            </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default UserHeader;