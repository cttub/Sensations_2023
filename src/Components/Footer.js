import React, { Component } from 'react';
import logo from '../Assets/logo.png';
class TitoWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://js.tito.io/v2';
      script.async = true;
      document.head.appendChild(script);
    }
  
    render() {
      return  <tito-button event="sensationsgc/booking">Book With Us</tito-button>;;
    }
  }
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "footer" className='darkRed-bg'>
                <div>
                    <img className = "col-lg-6 col-md-6" style={{paddingTop: "20px", paddingLeft: "20px"}} src = {logo}></img>
                </div>
               
                        <div id = "sensations-webs" className='fancy-small col-lg-2 col-md-2'>
                            <p className='fancy-small'>Sensations Gentleman's Club</p>
                            <p className='fancy-small'>https://www.sensationsgc.club/</p>
                            <a href="mailto:contact@sensationsgc.club" class="fancy-small">contact@sensationsgc.club</a>
                        </div>
                        <div className='col-lg-2 col-md-2'>
                            <p className='fancy-small'>Inola, OK</p>
                            <p href="tel:9185433488" className='cb-small-text'>(918) 543-3488</p>
                            <p className='cb-small-text'><a  target = "_blank"  href = "https://www.google.com/maps/dir/36.2020864,-95.7382656/9373+S+4250+Rd,+Inola,+OK+74036/@36.2200085,-95.7281058,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87b641b291e4a0cd:0x8f89c82bfc4d33cd!2m2!1d-95.4377768!2d36.1714325">
                                9373 S 4250 Rd, Inola, OK 74036</a></p>
                        </div>
                        <div className='col-lg-2 col-md-2'>
                            <p className='fancy-small'>Galena, KS</p>
                            <p href="tel:6208563757" className='cb-small-text'>(620) 856-3757</p>
                            <p className='cb-small-text'><a target = "_blank" href = "https://www.google.com/maps/dir//11491+SE+Hwy+166,+Galena,+KS+66739/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87c86df1da17040b:0x8f3747b7860282b1?sa=X&ved=2ahUKEwjqqOWi_47-AhXGmmoFHdaZB24QwwV6BAgLEAQ">
                                11491 Southeast Hwy 166, Galena, KS 66739</a></p>
                        </div>
                    
                        <div className='col-lg-4 col-md-4'>
                            <p className='cb-small-text tito-footer'><TitoWidget/></p>
                        </div>
                </div>
           
        );
    }
}
 
export default Footer;