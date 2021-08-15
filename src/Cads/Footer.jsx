import React from 'react';
import './styles.css';
import 'bootstrap-social/bootstrap-social.css';




function Footer(props) {
    return(
        <footer classNAme="site-footer">
            <br></br>
             <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#reserveModal">Shop</a></li>
                            <li><a href="#aboutMe">About</a></li>
                            <li><a href="#contactMe">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+17065551234"><i className="fa fa-phone" /> 1-706-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> info@test.org</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 








// const Footer = () => {
//   return (
//     <div>
//       <div>Logo</div>
//       <ul>
//         <li>About</li>
//         <li>Experience</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;