import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { bubble as Menu } from 'react-burger-menu'
import logo from '../assets/images/logo-header.PNG';
import '../App.css';

export default class Header extends Component{
    render(){
        return(
        <div style={{position: 'fixed', width: '100%', top: 0, left: 0, backgroundColor: '#FFFFFF', zIndex: 100}}>
            <MediaQuery minDeviceWidth={601} values={{ deviceWidth: 1600 }}>
                <div id="menu" style={{paddingBottom: '20px', width: '100%', height: '70px', display: 'flex', alignItems:'center', justifyContent: 'center'}}>           
                    <div style={{padding: '20px', borderBottom: '1px solid #000000', width: '37%', display: 'flex'}}>
                      <div className="topMenuNavigation">
                          <a href="">ABOUT US</a>
                      </div>
                      <div className="topMenuNavigation">
                          <a href="">OUR PROGRAMS</a>
                      </div>
                    </div>
                    <div style={{width: '26%', height: '100%', backgroundColor: '#ffffff', paddingTop: '25px'}}>
                      <img src={logo} alt="casera-intervention-logo" style={{maxWidth: '80%', maxheight: '80%'}}/>
                    </div>
                    <div style={{padding: '20px', borderBottom: '1px solid #000000', width: '37%', display: 'flex'}}>
                      <div className="topMenuNavigation">
                          <a href="">TESTIMONIALS</a>
                      </div>
                      <div className="topMenuNavigation">
                          <a href="">CONTACT US</a>
                      </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={401} maxDeviceWidth={600} values={{ deviceWidth: 1600 }}>            
                <div style={{width: '100%', height: '50px', paddingTop:'10px', paddingBottom:'5px', backgroundColor: '#ffffff', position: 'fixed', top:0, left:0, borderBottom:'1px solid #ebebeb', alignItems: 'center', alignContent:'center', justifyContent: 'center'}}>
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
                <div style={{width: '100%', height: '40px', paddingTop: '10px', paddingBottom:'5px', backgroundColor: '#ffffff', position: 'fixed', top:0, left:0, borderBottom:'1px solid #ebebeb'}}>
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