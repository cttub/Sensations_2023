import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "home-landing" className='center-container cb-fullpage'>

                <div className='text-center'>
                   <Fade><p className='fancy-heading'>Sensations Gentleman's Club</p></Fade> 
                   <div className='location-names'>
                        <p className='fancy-paragraph'><b>Inola, Oklahoma</b></p>
                        <p className='fancy-paragraph'>|</p>
                        <p className='fancy-paragraph'><b>Galena, Kansas</b></p>
                    </div>

                    <p className='fancy-subheading'>Book now to see our sexy ladies in our gentlemen's club.</p>
                    
                    
                   
                   
                    <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Book">
                        <div className='navItem cb-paragraph'><button style={{fontSize: "30px"}}>Book Now</button></div>
                        </Link>
                        <p className='fancy-paragraph'>See our exclusive package deals and bundles we offer for online booking</p>
                        
                   
                   
                </div>
            </div>
        );
    }
}
 
export default Landing;