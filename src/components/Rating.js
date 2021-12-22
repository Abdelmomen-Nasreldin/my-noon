import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
import { Rate } from "antd";
import axios from "axios";

function Rating({ prdId, setRate }) {
  const [rateValue, setRateValue] = useState(0);

  useEffect(() => {
    const getRatingbyId = async () => {
      //setLoading(true);
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/ratings/find/${prdId}`)
        .then(function (response) {
          // handle success
          //console.log(response);
          setRateValue(response.data[0].avg_rating);
          setRate(response.data[0].avg_rating);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      /*console.log(response.clone().json())
       */
    };

    getRatingbyId();
  }, [prdId]);

  return (
    <div className="text-center">
      <Rate value={rateValue} disabled allowHalf />
      <span className="fw-bold fs-6 mx-3">({rateValue})</span>
    </div>
  );
}

export default Rating;
