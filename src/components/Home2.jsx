import React from 'react'
import {Carousel} from 'react-bootstrap'
import Products from './Products'

function Home2() {
    return (
            <div className="container">
    <Carousel variant={"dark"} touch={true}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://k.nooncdn.com/cms/pages/20211128/ca1568e7ad28dd97a59766e548cd87bf/ar_mb-banner-01.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>DEFACTO</h3>
            <p>Keep your apparel awesome!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://k.nooncdn.com/mon/1637952122660-ckwgqeihw4yt2shr7trnheb35.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>HUAWEI</h3>
            <p>The new Technologies are in your hands!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://k.nooncdn.com/mon/1638249736163-ckwlnlejn6khbsar7t5prdult.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>MAYBE LINE</h3>
            <p>Start your day with a pump of confidence! lady.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products/>
        </div>
       
    )
}

export default Home2
