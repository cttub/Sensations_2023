import React from 'react';
import TagManager from 'react-gtm-module';

import 'purecss/build/pure-min.css';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './Styles/media.css';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Service from './Components/Services';
import Apply from './Components/Apply';
import Drink from './Components/Drink';
import Visit from './Components/Visit';
import Book from './Components/Book';
import Gallery from './Components/Gallery';
import Faq from './Components/Faq';
import Privacy from './Components/Privacy';
import TermsOfUse from './Components/TermsOfUse';
function App() {
  React.useEffect(() => {
    TagManager.initialize({
      gtmId: 'GTM-NJP6B99'
    });
  }, []);
  return (
    
    <HashRouter>
        <Routes>
              <Route path = "/" element = {<Layout/>}>
                <Route index element = {<Home/>}/>
                <Route path = "Services" element = {<Service/>}/>
                <Route path = "Drinks" element = {<Drink/>}/>
                <Route path = "Visit" element = {<Visit/>}/>
                <Route path = "Apply" element = {<Apply/>}/>
                <Route path = "Book" element = {<Book/>}/>
                <Route path = "Gallery" element = {<Gallery/>}/>
                <Route path = "FAQ" element = {<Faq/>}/>
                <Route path = "PrivacyPolicy" element = {<Privacy/>}/>
                <Route path = "TermsOfUse" element = {<TermsOfUse/>}/>
              </Route>
          </Routes>
     </HashRouter>
  );
}

export default App;
