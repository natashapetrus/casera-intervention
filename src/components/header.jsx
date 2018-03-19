import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu';
import logo from '../assets/images/logo-header.PNG';
import './style/header.css';

import Homepage from './homepage.jsx';
import Assessment from './assessment.jsx';

export default class Header extends Component{
    render(){
        return(
        <div style={{position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 100}}>
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
                    <Route exact path="/" component={Homepage} />
                    <Route path="/assessment" component={Assessment} />
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={401} maxDeviceWidth={600} values={{ deviceWidth: 1600 }}>            
                <div style={{width: '100%', height: '50px', paddingTop:'10px', backgroundColor: '#ffffff', position: 'fixed', top:0, left:0, borderBottom:'1px solid #ebebeb', alignItems: 'center', alignContent:'center', justifyContent: 'center'}}>
                    <img src={logo} alt="casera-intervention-logo" style={{maxWidth: '45%', height: 'auto', maxHeight: '100%'}} />
                </div> 
                <Menu left styles={styles}>
                    <a id="home" className="menu-item" href="">About Us</a>
                    <a id="about" className="menu-item" href="">Our Programs</a>
                    <a id="contact" className="menu-item" href="">Testimonials</a>
                    <a id="settings" className="menu-item" href="">Contact</a>
                </Menu>    
            </MediaQuery>
            <MediaQuery maxDeviceWidth={400} values={{ deviceWidth: 1600 }}>            
                <div style={{width: '100%', height: '40px', paddingTop: '10px', backgroundColor: '#ffffff', position: 'fixed', top:0, left:0, borderBottom:'1px solid #ebebeb', overflow:'hidden'}}>
                    <img src={logo} alt="casera-intervention-logo" style={{maxWidth: '45%', height: 'auto', maxHeight: '100%'}} />
                </div> 
                <Menu left styles={stylesSmall}>
                    <a id="home" className="menu-item" href="">About Us</a>
                    <a id="about" className="menu-item" href="">Our Programs</a>
                    <a id="contact" className="menu-item" href="">Testimonials</a>
                    <a id="settings" className="menu-item" href="">Contact</a>
                </Menu>    
            </MediaQuery>
        </div>   
        );
    }
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '24px',
      left: '20px',
      top: '15px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#ffffff'
    },
    bmMenu: {
      background: '#000000',
      padding: '2.5em 1.5em 0',
      fontSize: '1.3em'
    },
    bmMorphShape: {
      fill: '#000000'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  var stylesSmall = {
    bmBurgerButton: {
      position: 'fixed',
      width: '25px',
      height: '20px',
      left: '20px',
      top: '15px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#ffffff'
    },
    bmMenu: {
      background: '#000000',
      padding: '2.5em 1.5em 0',
      fontSize: '1.3em'
    },
    bmMorphShape: {
      fill: '#000000'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }