import React, { Component } from 'react';
import Nav from './NavigationBar';
import Fade from 'react-reveal/Fade';
import '../Styles/visit.css';
import clock from '../Assets/clock.svg';
import Footer from './Footer';
import '../Styles/tito.css';
class TitoWidget extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.tito.io/v2';
    script.async = true;
    document.head.appendChild(script);
  }

  render() {
    return  <tito-button event="sensationsgc/booking">Book with Us</tito-button>;;
  }
}
class Visit extends Component {
    scrollToLocation = (location) => {
      document.getElementById(location).scrollIntoView({ behavior: 'smooth' });
    };
  
    render() {
      return (
        <div id='visit'>

          <div id='location' className='cb-fullpage'>

            <div id='loca-content'>
              <div>
                <Fade bottom duration={1500}><p className='cb-heading'>Visit Us</p></Fade>
                
              </div>
              <div className='button-container'>
                <button id='locationBut' className='button col-lg-2 col-md-2' onClick={() => this.scrollToLocation('inola')}>Inola OK</button>
                <button id='locationBut' className='button col-lg-2 col-md-2' onClick={() => this.scrollToLocation('galena')}>Galena, KS</button>
              </div>
              
            </div>
          </div>
            
            

            <div className='maps'>
            <p className='center-container fancy-heading'>Location and Hours</p>
            <Fade duration = {1500}><div id='inola'>
                        <div className='googleEmbed col-lg-6'>
                            <iframe width="100%" height = "100%" id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=9373%20S%204250%20Rd,%20Inola,%20OK%2074036&t=&z=13&ie=UTF8&iwloc=&output=embed">
                            </iframe>
                        </div>
                        <div className='map-text col-lg-6'>
                            <p id = "location-title" className='fancy-subheading'>Inola, OK</p>
                            <p className='cb-paragraph'><a  target = "_blank"  href = "https://www.google.com/maps/dir/36.2020864,-95.7382656/9373+S+4250+Rd,+Inola,+OK+74036/@36.2200085,-95.7281058,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87b641b291e4a0cd:0x8f89c82bfc4d33cd!2m2!1d-95.4377768!2d36.1714325">9373 S 4250 Rd, Inola, OK 74036</a></p>
                            <a id = "number" href="tel:9185433488" className='cb-paragraph'>(918) 543-3488</a>
                            <hr/>
                            <div className='times'>
                                <div className='time-item col-lg-1'>
                                <img src = {clock}/>
                                </div>
                                <div id = "times-desc" className='time-item col-lg-12'>
                                    <div className='weekday-and-time'>
                                            <p className='cb-paragraph weekday'>Tuesday-Saturday:  <span style = {{float: "right"}}>7PM-4AM</span></p>
                                        
                                    </div>
                                    <div className='weekday-and-time'>
                                            <p className='cb-paragraph weekday'>Sunday: <span style = {{float: "right"}}>7PM-3AM</span></p>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></Fade>

                    <div style={{marginTop: "100px"}}><hr/></div>

                    <div id='galena'>
                        <div className='googleEmbed col-lg-6'>
                        <iframe width="100%" height = "100%" id="gmap_canvas" src="https://maps.google.com/maps?q=11491%20Southeast%20Hwy%20166,%20Galena,%20KS%2066739&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                        </div>
                        <Fade duration = {1500}><div className='map-text col-lg-6'>
                            <p id = "location-title" className='fancy-subheading'>Galena, KS</p>
                            <p className='cb-paragraph'><a target = "_blank" href = "https://www.google.com/maps/dir//11491+SE+Hwy+166,+Galena,+KS+66739/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87c86df1da17040b:0x8f3747b7860282b1?sa=X&ved=2ahUKEwjqqOWi_47-AhXGmmoFHdaZB24QwwV6BAgLEAQ">11491 Southeast Hwy 166, Galena, KS 66739</a></p>
                            <a id = "number" href="tel:6208563757" className='cb-paragraph'>(620) 856-3757</a>
                            <hr/>
                            <div className='times'>
                                <div className='time-item col-lg-1'>
                                <img src = {clock}/>
                                </div>
                                <div id = "times-desc" className='time-item col-lg-12'>
                                    <div className='weekday-and-time'>
                                            <p className='cb-paragraph weekday'>Monday-Saturday:  <span style = {{float: "right"}}>6PM-3AM</span></p>
                                        
                                    </div>
                                    <div className='weekday-and-time'>
                                            <p className='cb-paragraph weekday'>Sunday: <span style = {{float: "right"}}>6PM-2AM</span></p>
                            
                                    </div>
                                </div>
                            </div>
                        </div></Fade>
                    </div>
            </div>
                    



              <div className='hideSmall'><Footer/></div>
            </div>
        );
    }
}
 
export default Visit;