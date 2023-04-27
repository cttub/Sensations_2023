import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import logo from '../../Assets/horizontalLogo.svg';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "home-landing" className='cb-fullpage'>
                <div className='col-lg-6'>
                    <img src={logo}/>
                    <p className='leading cb-paragraph'>The best All Nude Strip Club with all exclusive experience with gorgeous women.</p>
                    <p className='sub-leading location cb-paragraph'><u>We have two lovely locations:</u></p>
                    <p className='sub-leading cb-paragraph'>10 miles from Joplin, Missouri & Directly across from Downstream Casino (Galena, Kansas)</p>
                    <p className='sub-leading cb-paragraph'>15 miles East of Hard Rock Cafe in Tulsa, Oklahoma (Inola, Oklahoma)</p>
                    <div className='button-book'>
                        <Link class = "navItems"
                                onClick={() => {
                                                document.querySelector("html").scrollTo(0,0);
                                                }}
                                                to = "/Book">
                            <div className='navItem cb-paragraph'><button className='cb-paragraph'>Book Now</button></div>
                            </Link>
                            <p className='sub-leading cb-paragraph'>Book Online for exclusive discounts, bundles and more.</p>

                    </div>
                </div>
         
            </div>
        );
    }
}
 
export default Landing;