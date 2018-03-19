import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header.jsx';
import Homepage from './components/homepage.jsx';
import Assessment from './components/assessment.jsx';
import Footer from './components/footer.jsx';
import './App.css';

import logo from './assets/images/logo-header.PNG';
import './components//style/header.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="top"><Header /></div>
          <div style={{height:'50px'}} />
          <Route exact path="/" component={Homepage} />
          <Route path="/assessment" component={Assessment} />
          <div id="contact"><Footer /></div>
        </div>
      </Router>
    );
  }
}

export default App;
