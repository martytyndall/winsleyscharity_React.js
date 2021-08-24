import React from 'react'
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Views/Home';
import Latest from './Views/Latest';
import Staff from './Views/Staff';
import Contact from './Views/Contact';
import Footer from './Components/Footer';
import CookieConsent from "react-cookie-consent";
import History from './Views/History';


function App() {
  return (
    <div className="App">
    <Router>      
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/latest">
          <Latest />
        </Route>
        <Route path="/staff">
          <Staff />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>
      <Footer />
      <CookieConsent overlay>This website uses cookies to enhance the user experience.</CookieConsent>
    
    </Router>
    </div>
    
  );
}

export default App;
