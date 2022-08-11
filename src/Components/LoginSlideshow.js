import React from "react";
import Carousel from "react-bootstrap/Carousel";


const LoginSlideshow = () => {
  return (
    <div style={{ display: 'block', width: 850 }}>

      <Carousel style={{ width: "1010px", minHeight: "575px" }}>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ minHeight: "575px", overflow: "hidden" }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/a1/5c/the-leela-ambience-convention.jpg?w=1200&h=-1&s=1"
            alt="hotel one"
          />

        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            style={{ minHeight: "575px", overflow: "hidden" }}
            src="https://floover.com/360/wp-content/uploads/2021/01/restaurante-andorra-1200x756.jpeg"
            alt="hotel two"
          />

        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ minHeight: "575px", overflow: "hidden" }}
            src="https://relaisdechambord.com/wp-content/uploads/2020/12/gallery_spa-relais-de-chambord-boutique-hotel-val-de-loire-2-1200x756.jpg"
            alt="hotel Three"
          />

        </Carousel.Item>
      </Carousel>
    </div>


  )
}

export default LoginSlideshow;