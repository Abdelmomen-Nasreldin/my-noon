import React from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from 'antd';
const FooterCategories = ({ categories, loading}) => {
    if (loading) {
      return <Skeleton active />
    }
    return (
        <>
              <div
            className="row m-auto"
            style={{ padding: "20px", textAlign: "start" }}
          >
            <div className="row d-flex">
              {categories.map(category =>{
                return (
                <>
                <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to={`/category/${category.mainCat}`}>
                <h6 className="mt-3">{category.mainCat}</h6>
                </Link>
                <ul className="nav flex-column text-start align-items-start" style={{ fontSize: "13px" }}>
                  {category.subCat.map((subCategory)=>{
                    return(
                      <>
                      <li className="nav-item mb-2 text-start">
                  <Link to={`/search?category=${category.mainCat}&subCat=${subCategory}`} className="nav-link p-0 text-muted">
                    {subCategory}
                  </Link>
                  </li>
                      </>
                    )
                  })}
                </ul>
                </div>
                </>)
              })}             
            </div>

            
          </div>
        </>
    )
}

export default FooterCategories
