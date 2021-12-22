// floating left categories which contain the div of All CATEGORIES button when mouseOver
// 1- the div of All CATEGORIES button => all categories + top brands + most popular

import { Skeleton, Spin } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const HeaderFloatingLeft = ({ categories }) => {
  const [mouseOverCategoryID, setMouseOverCategoryID] = useState(1);

  const [myMainCat, setMyMainCat] = useState("");
  const [mySubCat, setMySubCat] = useState("");
  const [myBrand, setMyBrand] = useState("");

  console.log(categories);
  if (!categories || categories.length === 0) {
    return (
      <>
        <div className="dropdown dropdown_ALLCATEGORIES d-none d-lg-block">
          <Link
            className="btn dropdown-toggle a_cat"
            id="dropdownMenuLink"
            to="/search"
          >
            ALL CATEGORIES
          </Link>

          <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
         
            {/* {[1, 2, 3, 4, 5].map(() => {
              return (
                <> */}
                
                  <li className="nav-item text-center ">
                    {/* <Skeleton avatar paragraph={{ rows: 4 }} /> */}
                    <Spin tip="Loading..." size="large" align="center"></Spin>
                  </li>
                {/* </>
              );
            })} */}
          </ul>
          <div className="dropdownDiv">
            <div className="dropdownDivOne"></div>
            <div className="dropdownDivTwo">
              {/* <Skeleton avatar paragraph={{ rows: 4 }} />
               */}
               <Spin tip="Loading..." size="large"></Spin>
              <hr className="m-2" />
              <div className="d-flex">
                <div className="w-50">
                  <h6 className="text-start ms-3">Most Popular</h6>
                  {/* All Catogories => subCategories */}
                  <ul className="nav flex-column align-items-start">
                    {/* {[1, 2, 3, 4, 5].map(() => {
                      // console.log(cat.id);
                      return (
                        <> */}
                          <li className="nav-item text-center">
                          <Spin tip="Loading..." size="large"></Spin>
                          </li>
                        {/* </>
                      );
                    })} */}
                  </ul>
                </div>
                <div className="w-50">
                  <h6 className="text-start ms-3">Top Brands</h6>
                  <ul className="nav flex-column align-items-start">
                    {/* {[1, 2, 3, 4, 5].map(() => {
                      // console.log(cat.id);
                      return (
                        <> */}
                          <li
                            className="nav-item"
                            //   ref={elemRef_subCat}
                          >
                            <Spin tip="Loading..." size="large" ></Spin>
                          </li>
                        {/* </>
                      );
                    })} */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="dropdown dropdown_ALLCATEGORIES d-none d-lg-block">
      <Link
            className="btn dropdown-toggle a_cat"
            id="dropdownMenuLink"
            to="/search"
          >
            ALL CATEGORIES
          </Link>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {categories.map((cat) => {
            return (
              <>
                <li
                  className="nav-item text-start"
                  onMouseOver={() => setMouseOverCategoryID(cat.id)}
                >
                  <Link
                    className="nav-link"
                    to={`/category/${cat.mainCat}`}
                    onClick={() => {
                      setMyMainCat(cat.mainCat);
                      // query("category")
                    }}
                  >
                    {cat.mainCat}
                    {/* {console.log(myMainCat)} */}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <div className="dropdownDiv">
          <div className="dropdownDivOne"></div>
          <div className="dropdownDivTwo">
            <h4>{categories[mouseOverCategoryID - 1].mainCat}</h4>
            <hr className="m-2" />
            <div className="d-flex">
              <div className="w-50">
                <h6 className="text-start ms-3">Most Popular</h6>
                {/* All Catogories => subCategories */}
                <ul className="nav flex-column align-items-start">
                  {categories.map((cat) => {
                    // console.log(cat.id);
                    return (
                      <>
                        {cat.id === mouseOverCategoryID &&
                          cat.subCat.map((subCategory) => {
                            return (
                              <>
                                <li
                                  className="nav-item"
                                  //   ref={elemRef_subCat}
                                >
                                  <Link
                                    className="nav-link"
                                    to={`/search?category=${cat.mainCat}&subCat=${subCategory}`}
                                    onClick={() => {
                                      setMySubCat(subCategory);
                                      // query("subCat")
                                    }}
                                  >
                                    {subCategory}
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="w-50">
                <h6 className="text-start ms-3">Top Brands</h6>
                <ul className="nav flex-column align-items-start">
                  {categories.map((cat) => {
                    // console.log(cat.id);
                    return (
                      <>
                        {cat.id === mouseOverCategoryID &&
                          cat.brands.map((brand) => {
                            // console.log(cat)
                            return (
                              <>
                                <li
                                  className="nav-item"
                                  //   ref={elemRef_subCat}
                                >
                                  <Link
                                    className="nav-link"
                                    to={`/search?category=${cat.mainCat}&brand=${brand}`}
                                    onClick={() => {
                                      setMyBrand(brand);
                                      // query("brands")
                                    }}
                                  >
                                    {brand}
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderFloatingLeft;
