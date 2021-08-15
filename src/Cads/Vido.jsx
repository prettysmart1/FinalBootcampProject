import React, { Component } from 'react';

class Vido extends Component {
  render() {
    return (
      <div className="container" class="col-md-12 text-center">
          <h4> Select A Dr:<br></br>
            
              <a href="#drCards">
                Dr. Otto Warburg</a>;<br></br>
                <a href="#drCards">
                  Dr. Robert Morse</a> or <a href="#drCards"> Dr. Alfred (Sebi) Bowman</a>
        </h4>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/y4J8BxbqXOA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            
          </div>
      
    );
  }
}

export default Vido;
