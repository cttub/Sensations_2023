import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Fade from 'react-reveal/Fade';
import VisitCard from './VisitCard';
import "../Styles/faq.css";
import Footer from './Footer';
import image from "../Assets/thanks.jpg";
class Faq extends Component {
    constructor(props) {
        super(props);
        // Set the initial state of the active index to null
        this.state = {
          activeIndex: null
        };
      }
    
      // Function to handle click events on a FAQ item
      handleClick = index => {
        // If the clicked index is the same as the current active index, set it to null (to collapse the FAQ item)
        // Otherwise, set the clicked index as the new active index (to expand the FAQ item)
        this.setState({ activeIndex: index === this.state.activeIndex ? null : index });
      };
    

  render() {
    const { activeIndex } = this.state;

    const faqItems = [
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>What are the club's hours of operation?</p>,
        answer: <p className='answer cb-paragraph'>
            Sensations Gentlemen's Club is open from 6:00 PM to 3:00 AM, Monday through Saturday, and 6:00 PM to 2:00 AM on Sundays. 
            We recommend arriving early for the best seating options and to enjoy the full range of our entertainment offerings.'</p>
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>What is the age requirement to enter the club?</p>,
        answer: <p className='answer cb-paragraph'>
            All guests must be 18 years of age or older with a valid government-issued ID to enter the club</p>
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Is Sensations Gentlemen's Club a fully nude strip club?
        </p>,
        answer: <p className='answer cb-paragraph'>
            Yes, Sensations Gentlemen's Club is a fully nude strip club. Our talented dancers will perform fully nude for your entertainment.</p>
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Does the club serve alcohol?
        </p>,
        answer: <p className='answer cb-paragraph'>
            No, Sensations Gentlemen's Club does not serve alcohol. Our focus is on providing a high-quality, fully nude entertainment experience. We do offer a variety of non-alcoholic beverages, including sodas, energy drinks, and bottled water.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>What is the dress code at the club?
        </p>,
        answer: <p className='answer cb-paragraph'>
           We ask that all guests adhere to a smart casual dress code. This includes no athletic wear, shorts, flip-flops, or excessively baggy clothing. We reserve the right to refuse entry to anyone not in compliance with our dress code.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Can I take photos or videos inside the club?
        </p>,
        answer: <p className='answer cb-paragraph'>
          Photography and videography are strictly prohibited inside the club. We prioritize the privacy and comfort of our guests and performers. Violators will be asked to leave the premises.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Is there a cover charge to enter the club?
        </p>,
        answer: <p className='answer cb-paragraph'>
         Yes, there is a cover charge of $15 to enter the club. This fee helps us maintain the highest quality entertainment and facilities for our guests.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Can I book a private party or event at the club?
        </p>,
        answer: <p className='answer cb-paragraph'>
         Absolutely! We offer private party packages for birthdays, bachelor parties, and other special events. Please see our “Book Now” section for  event details and to make a reservation.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Are lap dances and private dances available?
        </p>,
        answer: <p className='answer cb-paragraph'>
         Yes, lap dances and private dances are available for purchase at the club. Please speak to the dancer of your choice or our staff for more information on pricing and options.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>What safety and hygiene measures are in place at the club?
        </p>,
        answer: <p className='answer cb-paragraph'>
         Sensations Gentlemen's Club is committed to maintaining a clean, safe, and enjoyable environment for all guests and staff. We have implemented rigorous cleaning protocols and follow all local health guidelines to ensure the highest standards of safety and hygiene.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Is there parking available at the club?
        </p>,
        answer: <p className='answer cb-paragraph'>
         Yes, we offer complimentary parking for our guests. Our parking lot is well-lit and monitored by security for your safety and convenience.
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Do I have to tip while I am at the stage?
        </p>,
        answer: <p className='answer cb-paragraph'>
         While you are not required to tip at the state, it is highly recommended and common club etiquette to do so. 
        </p>        
      },
      {
        question: <p className='question fancy-subheading' style = {{display: 'inline'}}>Where is Sensations Gentlemen’s Club located?
        </p>,
        answer: <p className='answer cb-paragraph'>
        We currently have two locations one near Joplin, MO located at <b>11491 Southeast Hwy, Galena, KS 66739</b> right across from Downstream Casino. 
    And our second location near <b>Tulsa, OK located at 9373 S 4250 Rd, Inola, OK 74036</b>

        </p>        
      },
   
   
   
    ];

    return (
      <div id="faq">
        <NavigationBar />
        <div className='background-image'></div>
        <div className='faq-page-container'>
            <p className='title fancy-heading'>Frequently Asked Questions</p>
            <div className="faq-container">
            {faqItems.map((item, index) => (
                <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
                <div className="faq-question col-lg-7  col-md-11 col-sm-12 red-bg" onClick={() => this.handleClick(index)}>
                    {item.question}
                    <span className="arrow">{index === activeIndex ? '▲' : '▼'}</span>
                </div>
                <Fade><div className="faq-answer col-lg-7  col-md-11 col-sm-12">
                    {item.answer}
                </div></Fade> 
                </div>
            ))}
            </div>
            <VisitCard
                        quote = "If you have any further questions or concerns, please do not hesitate to contact us at contact@sensationsgc.club or call us from the number posted bottom of the page. We look forward to providing you with an unforgettable experience at Sensations Gentlemen's Club."
                        image={image}
                        style={{textAlign: 'left'}}
            />
            <div style={{textAlign: "left"}}>
            <Footer/>
            </div>
        </div>
      </div>
    );
  }
}

export default Faq;
