import React, { Component } from 'react';
import '../../Styles/tito.css';
import Footer from '../Footer';
import picture from '../../Assets/Images/book.JPG';
import Fade from 'react-reveal/Fade';
class TitoWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://js.tito.io/v2';
      script.async = true;
      document.head.appendChild(script);
    }
  
    render() {
      return  <tito-button event="sensationsgc/booking">Reserve Now</tito-button>;;
    }
  }
class BookWithUs extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='book'>
                    <Fade><div className='center-container'><p className='fancy-heading' style = {{textAlign: "center"}} style = {{marginBottom: "0px"}}>Book with Us</p></div></Fade>
                    <p className='cb-paragraph' style = {{textAlign: "center"}}>An exclusive experience waiting for you</p>

                    <div className='book-cards'>

                        <div className='book-info glass'>
                           
                            <p className='cb-paragraph book-title'>Access Pass</p>
                            <div className='book-bullet'>
                              
                                <ul>
                                    <li className='cb-small-text book-para title'>This package includes:</li>
                                    <li  className='cb-small-text book-para'>Door Entry</li>
                                </ul>
                            </div>
                            <p className='cb-paragraph price'>$15</p>
                        </div>

                        <div className='book-info glass'>
                            <p className='cb-paragraph book-title'>Take-Home Treat</p>
                            <div className='book-bullet'>
                                <ul>
                                    <li className='cb-small-text book-para title'>This package includes:</li>
                                    <li className='cb-small-text book-para'>Door Entry</li>
                                    <li className='cb-small-text book-para'>Souvenir Cup</li>
                                </ul>
                            </div>
                            <p className='cb-paragraph price'>$25</p>
                        </div>

                        <div className='book-info glass'>
                            <p className='cb-paragraph book-title'>Savor and Sway</p>
                            <div className='book-bullet'>
                    
                                <ul>
                                    <li className='cb-small-text book-para title'>This package includes:</li>
                                    <li className='cb-small-text book-para'>Door Entry</li>
                                    <li className='cb-small-text book-para'>Souvenir Cup</li>
                                    <li className='cb-small-text book-para'>VIP Dance</li>
                                </ul>
                            </div>
                            <p className='cb-paragraph price'>$125</p>
                        </div>

                        <div className='book-info glass'>
                            <p className='cb-paragraph book-title'>Celebration Package</p>
                            <div className='book-bullet'>
                         
                                <ul>
                                     <li className='cb-small-text book-para title'>This package includes:</li>
                                    <li className='cb-small-text book-para'>Door Entry</li>
                                    <li className='cb-small-text book-para'>Souvenir Cup</li>
                                    <li className='cb-small-text book-para'>Special Stage Dance</li>
                                </ul>
                            </div>
                            <p className='cb-paragraph price'>$250</p>
                        </div>

                    </div>


                    <div className = "bookWithUs center-container">
                        <Fade duration = {2000}><div id = "titoStyling" style = {{textAlign: "center"}} className = "col-lg-5"><TitoWidget /></div></Fade>
                    </div>
                    <p className='cb-small-text center'><u>No refunds applicable</u></p>
                    <p className='cb-small-text center'>Good for 90 days after purchase</p>
                    
                </div>
                <div className='hideSmall'><Footer/></div>
            </div>
        );
    }
}
 
export default BookWithUs;