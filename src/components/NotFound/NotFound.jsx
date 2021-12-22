import { Link } from "react-router-dom";

import React from 'react'

const NotFound = () => {
    return (
        <div className="text-center">
      <img className="text-center mt-2" src={`${process.env.PUBLIC_URL}/assets/error-404.svg`}alt="notFound" />
      <h1>Uh-oh, something went wrong here</h1>
      <h3>Just keep browsing to get back on track</h3>
      <Link className="btn btn-primary mb-3" to="/">BACK TO HOMEPAGE</Link>  
        </div>
    )
}

export default NotFound
