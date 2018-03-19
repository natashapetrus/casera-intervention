import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <MediaQuery minDeviceWidth={601} values={{ deviceWidth: 1600 }}>
              <div style={{width: '100%', height: '50px', display: 'flex', alignItems:'center', justifyContent: 'center', overflow:'hidden'}}>           
                    <div style={{width:'20%', height: '100%', backgroundColor:'#ffffff'}}>
                      <img src={logo} alt="" style={{objectFit:'contain', maxWidth:'100%', height: '100%', borderRadius:'0px'}}/>
                    </div>
                    <div className='topMenuNavigationBar' style={{width:'80%', height: '100%'}}>
                      <div className='topMenuText'>
                      <Link to="/">HOME</Link>
                      </div>
                      <div className='topMenuText'>
                        TENTANG KAMI
                      </div>
                      <div className='topMenuText'>
                        PROGRAM
                      </div>
                      <div className='topMenuText'>
                      <Link to="/assessment">ASSESSMENT</Link>
                      </div>
                      <div className='topMenuText'>
                        <a className='accentButton'>HUBUNGI KAMI</a>
                      </div>
                    </div>
                </div>
          </MediaQuery>
          <Route exact path="/" component={Homepage} />
          <Route path="/assessment" component={Assessment} />
          <div id="contact"><Footer /></div>
        </div>
      </Router>
    );
  }
}

export default App;
