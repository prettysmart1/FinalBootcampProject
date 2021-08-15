import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class MainC extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
  <Carousel.Item>
    <img
      className="col-xs-12 col-md-12 d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/04/26/16/56/bruschetta-3352412_960_720.jpg"
      height="auto"
      width="auto" 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bruschetta</h3>
      <p>Alkaline Foods</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="col-xs-12 col-md-12 d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/04/26/16/56/bruschetta-3352412_960_720.jpg"
      height="auto"
      width="auto"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Bruschetta</h3>
      <p>Alkaline Foods</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="col-xs-12 col-md-12 d-block w-100"
      src="https://cdn.pixabay.com/photo/2018/04/26/16/56/bruschetta-3352412_960_720.jpg"
      height="auto"
      width="auto"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Bruschetta</h3>
      <p>Alkaline Foods</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        );
    }
}

export default MainC;    