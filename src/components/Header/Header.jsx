import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RightSquareOutlined } from "@ant-design/icons";
import "./header.scss";

import HeaderOne from "./Header components/HeaderOne.jsx";
import HeaderFloatingLeft from "./Header components/HeaderFloatingLeft";
import HeaderFloatingShowCategories from "./Header components/HeaderFloatingShowCategories";
import { Spin } from 'antd';
import { SyncOutlined  } from '@ant-design/icons';

const antIcon = <SyncOutlined  style={{ fontSize: 20 }} spin />;
export const xContext = React.createContext();
export const mouseOverContext = React.createContext();
export const mouseOutContext = React.createContext();
const Header = ({ categories, loading}) => {
  // const [loading, setLoading] = useState(false);

  const [x, setX] = useState(1);
  const elemRef_show__categories = useRef();
  const elemRef_second__navbar = useRef();
  // const elemRef_subCat = useRef();
  const mouseOver = () => {
    elemRef_show__categories.current.style.display = "flex";
  };
  const mouseOut = () => {
    elemRef_show__categories.current.style.display = "none";
  };
  const sideController = () => {
    if (elemRef_second__navbar.current.style.marginLeft === "-160px") {
      elemRef_second__navbar.current.style.marginLeft = "0px";
    } else {
      elemRef_second__navbar.current.style.marginLeft = "-160px";
    }
  };
  
  const CatChanged = (catID) => {
    setX(catID);
    elemRef_show__categories.current.style.display = "flex";
  };
  if (loading) {
    return (
      <div className="BigHeader">
      <header className="mainHeader">
        <HeaderOne />
        <RightSquareOutlined
          className="d-block d-md-none aside__controller"
          onClick={sideController}
        />
        <div ref={elemRef_second__navbar} className="second__navbar d-flex">
          <HeaderFloatingLeft categories={categories} />
          <ul className="nav d-flex justify-content-between w-50">
         
            {[1,2,3].map(() => {
              return (
                <>
                  <li
                    className="nav-item"
                  >
                    {/* <Spin  /> */}
                    <Spin indicator={antIcon} />
                  </li>
                </>
              );
            })}
          </ul>
            <xContext.Provider value={x}>
              <mouseOverContext.Provider value={mouseOver}>
                <mouseOutContext.Provider value={mouseOut}>                 
                    <HeaderFloatingShowCategories categories={categories} elemRef_show__categories={elemRef_show__categories}/>
                </mouseOutContext.Provider>
              </mouseOverContext.Provider>
            </xContext.Provider>
        </div>
      </header>
    </div>
    );
  }
  return (
    <div className="BigHeader">
      <header className="mainHeader">
        <HeaderOne />
        <RightSquareOutlined
          className="d-block d-md-none aside__controller"
          onClick={sideController}
        />
        <div ref={elemRef_second__navbar} className="second__navbar d-flex">
          <HeaderFloatingLeft categories={categories} />
          <ul className="nav">
            {categories.map((cat) => {
              return (
                <>
                  <li
                    className="nav-item"
                    onMouseOver={() => CatChanged(cat.id)}
                    onMouseOut={mouseOut}
                  >
                    <Link
                      className="nav-link nav-cat"
                      to={`/category/${cat.mainCat}`}
                    >
                      {cat.mainCat}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
            <xContext.Provider value={x}>
              <mouseOverContext.Provider value={mouseOver}>
                <mouseOutContext.Provider value={mouseOut}>                 
                    <HeaderFloatingShowCategories categories={categories} elemRef_show__categories={elemRef_show__categories}/>
                </mouseOutContext.Provider>
              </mouseOverContext.Provider>
            </xContext.Provider>
        </div>
      </header>
    </div>
  );
};

export default Header;
