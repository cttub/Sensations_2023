import React, { Component } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal/Fade';

import '../Styles/nav.css';

class NavigationBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Fade top> <div id = "navigationBar" className='darkRed-bg'>

                    <div className='leftNav'>
                    <Link class = "navItems" 
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/">
                        <div className='logo-spot navItem'><img  className = 'logoImage' src={logo}/></div></Link>

                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Services">
                        <div className='navItem cb-paragraph'>Services</div>
                        </Link>
                        
                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Drinks">
                        <div className='navItem cb-paragraph'>Drinks</div>
                        </Link>

                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div className='navItem cb-paragraph'>Visit</div>
                        </Link>
                
                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Apply">
                        <div className='navItem cb-paragraph'>Apply</div>
                        </Link>

                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Book">
                        <div className='navItem cb-paragraph'>Book Now</div>
                        </Link>



                    </div>
                  
            </div></Fade> 

        
            </div>
        );
    }
}
 
export default NavigationBar;