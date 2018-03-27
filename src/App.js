import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop.jsx';
import Header from './components/header.jsx';
import Homepage from './components/homepage.jsx';
import About from './components/about.jsx';
import Program from './components/program.jsx';
import Assessment from './components/assessment.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import './components//style/header.css';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <head>
          <meta name="google-site-verification" content="WNdYqa5gB2kTCVrcXHUnWxBHPPzmmE1GXJsMUuJSGk0" />
        </head>
        <ScrollToTop>
          <div className="App">
            <div id="top"><Header /></div>
            <div style={{height:'50px'}} />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/program" component={Program} />
            <Route path="/assessment" component={Assessment} />
            <Route path="/contact" component={Contact} />
            <div id="contact"><Footer /></div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
