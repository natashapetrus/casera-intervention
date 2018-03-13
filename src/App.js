import React, { Component } from 'react';
import Header from './components/header.jsx';
import Homepage from './components/homepage.jsx';
import Footer from './components/footer.jsx';
import {ParallaxProvider} from 'react-scroll-parallax';
import './App.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <Header />
          <div style={{position: 'relative', marginTop: '50px'}}>
            <Homepage />
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
