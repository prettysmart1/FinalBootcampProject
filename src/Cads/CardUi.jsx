import React from 'react'
import'./card-style.css';


const Cardt = props => {
   return(
      <div className="card text-center shadow">
            <div className="overflow">
               <img src={props.imgsrc} alt="pic" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
               <h4 className="card-title">{props.title}</h4>
                  <p className="card-text text-secondary">
                     These Doctors Credentials and research have helped many of people; From Dr Warburg's theory of cancer cells  
                     cannot survive in an alkaline environment; Dr. R. Morse (Real(alkaline)) Grapes Fasting; and Dr. Sebi researched 
                     all alkaline foods and was nice enough to implement; document and give us a documented alkaline 
                     'Nutritional Guide'. 
                  </p>
            <a href="#" className="btn btn-outline-success">Dr. Credentials</a>
            </div>

      </div>
   );
}

export default Cardt;