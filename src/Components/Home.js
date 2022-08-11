import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, value } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
//import {Jumbotron}

const Home = () => {
    return (
        <div style={{ display: 'block', width: 850, padding: 5 }}>
            <Carousel >
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/a1/5c/the-leela-ambience-convention.jpg?w=1200&h=-1&s=1"
                        alt="hotel one"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://floover.com/360/wp-content/uploads/2021/01/restaurante-andorra-1200x756.jpeg"
                        alt="hotel two"
                    />

                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://relaisdechambord.com/wp-content/uploads/2020/12/gallery_spa-relais-de-chambord-boutique-hotel-val-de-loire-2-1200x756.jpg"
                        alt="hotel Three"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default Home;