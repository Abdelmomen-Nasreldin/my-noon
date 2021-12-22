import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import {  xContext, mouseOverContext, mouseOutContext } from '../Header';

    
const HeaderFloatingShowCategories = ({ categories, elemRef_show__categories}) => {
  const imagesUrl = process.env.REACT_APP_API_URL+"/images/"

  // const [mouseOverCategoryID, setMouseOverCategoryID] = useState(1);
    const x = useContext(xContext)
    const mouseOver = useContext(mouseOverContext)
    const mouseOut = useContext(mouseOutContext)
    return (
        <>
             <div
            ref={elemRef_show__categories}
            className="show__categories container-fluid "
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            <div className="row" style={{ flex: 1 }}>
              <div className="col-2">
                <h6>CATEGORIES</h6>
                <ul className="nav flex-column align-items-start">
                  {categories.map((cat) => {
                    // console.log(cat.id);
                    return (
                      <>
                        {cat.id === x &&
                          cat.subCat.map((subCategory) => {
                            // console.log(subCategory);
                            return (
                              <>
                                <li className="nav-item text-start">
                                  <Link className="nav-link" to={`/search?category=${cat.mainCat}&subCat=${subCategory}`}>
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
              <div className="col-4">
                <h6>TOP BRANDS</h6>
                <div>
                  <ul className="photos">
                    {/* showCategories brand Images */}
                    {categories.map((cat) => {
                      return (
                        <>
                          {cat.id === x &&
                            cat.brandsImg.map((brandImg) => {
                              // console.log(brandImg);
                              return (
                                <>
                                  <li className="nav-item">
                                    <Link className="nav-link" to={`/search?category=${cat.mainCat}&brand=${brandImg}`}>
                                      <img
                                        src={imagesUrl+brandImg} // works fine
                                        // src={imagesUrl+'2.jpg'}
                                        className="img-fluid"
                                        alt="brand img"
                                      />
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
              <div className="col-6">
                <div className="last2__photos" style={{maxHeight:"350px"}}>
                  {/* <div> */}
                  {/* <ul> */}
                  {/* showCategories brand Images */}
                  {categories.map((cat) => {
                    // console.log(cat.id);
                    return (
                      <>
                        {cat.id === x &&
                          cat.catImg.map((catImg) => {
                            // console.log(catImg);
                            return (
                              <>
                                {/* <li
                                      className="nav-item"
                                      
                                    > */}
                                <div>
                                  <a className="nav-link h-100" href={cat.link}>
                                    <img
                                       src={imagesUrl+catImg}
                                      className="img-fluid h-100"
                                      alt="cat img"
                                    />
                                  </a>
                                </div>
                                {/* </li> */}
                              </>
                            );
                          })}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default HeaderFloatingShowCategories
