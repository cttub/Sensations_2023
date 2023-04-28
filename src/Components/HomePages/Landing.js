import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import logo from '../../Assets/horizontalLogo.svg';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "home-landing" className='cb-fullpage'>
                <div className='col-lg-6'>
                    <img src={logo}/>
                    <p className='leading cb-paragraph'>The best All Nude Strip Club with all exclusive experience with gorgeous women.</p>
                    <p className='sub-leading location cb-paragraph'><b>We have two lovely locations:</b></p>
                    <p className='sub-leading cb-paragraph'>10 miles from <span>&nbsp;</span>
                    <span>
                    <Link style={{display: "inline-block"}}
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div><u> Joplin, Missouri </u></div></Link></span> 
                 
                        <span>        & Directly across from Downstream Casino <span>&nbsp;</span>
                    <Link style={{display: "inline-block"}}
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div>(<u>Galena, Kansas</u>)</div></Link> </span> </p>
                    <p className='sub-leading cb-paragraph'>15 miles East of Hard Rock Cafe in <span>&nbsp;</span>
                    <span>
                    <Link style={{display: "inline-block"}}
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div><u> Tulsa, Oklahoma (Inola, Oklahoma) </u> </div></Link>  </span></p>
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