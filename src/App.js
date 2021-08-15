import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css'

import Header from "./Cads/Header";
import MainC from "./Cads/MainC";
import Cardt from "./Cads/Cards";
import Footer from "./Cads/Footer";
import { Carousel, Jumbotron, Button, Link } from "react-bootstrap";
import Vido from "./Cads/Vido";
import SubscriptC from './Cads/SubscriptC';

 

function App() {
  return (
      <div className="App">
        <Header />
          <Jumbotron>
            <div className="container">
              <MainC />
            </div>
          </Jumbotron>
            <br></br>
            <SubscriptC />
          <Vido />
        
        <Cardt />
        <div className="container">
        <Footer />
        </div>

      </div>
  );
}

export default App;
