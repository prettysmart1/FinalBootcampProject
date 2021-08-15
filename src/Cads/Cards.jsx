import React, { Component } from'react';
import Cardt from './CardUi';

import img1 from '../assets/bruschetta.jpg';
import img2 from '../assets/bruschetta.jpg';
import img3 from '../assets/bruschetta.jpg';
  

    
class Cards extends Component {
    render() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Cardt imgsrc={img1} title="Dr. Otto Warburg"/>
                </div>
                <div className="col-md-4">
                    <Cardt imgsrc={img2} title="Dr. Robert Morse"/>
                </div>
                <div className="col-md-4">
                    <Cardt imgsrc={img3} title="Dr. Sebi"/>
                </div>
            </div>
        </div>
        );
    }
}

export default Cards;