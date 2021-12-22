import React from 'react'
import {Carousel,Container,Row} from 'react-bootstrap'
export default function AdsCarousel(){
    return (
<Container >
    <Row>
    <Carousel variant={"dark"} touch={true}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://k.nooncdn.com/cms/pages/20211212/c24ac50f729c67c7404df4e89a40ca64/en_banner-01.gif"
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://k.nooncdn.com/mon/1638348471281-ckwnadn1t67pxt6r75nvlve5p.png"
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://k.nooncdn.com/cms/pages/20211102/31d79a360896f4f70f0baff1e7c2b047/en_banner-01.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
      
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Row>
      </Container>
      );
};