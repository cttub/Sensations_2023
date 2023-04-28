import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import '../../Styles/why.css';
class Why extends Component {
    state = {  } 
    render() { 
        return (
            <div id='why'>


                <div className='center-container'><p className='fancy-heading' style = {{textAlign: "center"}}>Why Choose Sensations</p></div> 
                 
                
                        <div id='circles'>
                           <Fade up duration ={1500}><div className='image-cap col-lg-3 col-md-3 col-sm-12'>
                                <div>
                                    <div id = "private" className = "circle"/>
                                    <p className='cb-paragraph'>Private VIP</p>
                                </div>
                            </div></Fade> 
                            <Fade up duration ={2000}><div className='image-cap col-lg-3 col-md-3 col-sm-12'>
                                <div>
                                <div id = "full" className = "circle"/>
                                    <p className='cb-paragraph'>Full Nude</p>
                                </div>
                            </div></Fade>
                            <Fade up duration ={2500}><div className='image-cap col-lg-3 col-md-3 col-sm-12'>
                                <div>
                                    <div id = "beautiful" className = "circle"/>
                                    <p className='cb-paragraph'>Beautiful Girls</p>
                                </div>
                            </div></Fade>
                        </div>
                        <div style={{textAlign: "center", paddingTop: "100px"}}>
                                     <p className='cb-paragraph' style={{fontSize: "25px"}}>
                                        In our Tulsa Club, we have <b>4 VIP rooms</b> and <b>9 private booths</b> avaliable for private dances. This location is a 3,000 square foot floor along with stage.
                                    </p>
                                    <p className='cb-paragraph' style={{fontSize: "25px"}}>
                                        In our Joplin Club, we have <b>3 VIP rooms</b> and <b>9 private booths</b> avalible for one on one private dances as well. This location is a 2,000 square foot floor along with stage.
                                    </p>
                        </div>

            </div>
        );
    }
}
 
export default Why;