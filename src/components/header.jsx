import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu'
import logo from '../assets/images/logo-header.PNG';
import '../App.css';

export default class Header extends Component{
    render(){
        return(
        <div style={{position: 'fixed', width: '100%', top: 0, left: 0, backgroundColor: '#FFFFFF', height: '90px', zIndex: 100}}>
            <MediaQuery minDeviceWidth={768} values={{ deviceWidth: 1600 }}>
                <div id="menu" style={{width: '100%', height: '100%', display: 'flex', alignItems:'center', justifyContent: 'center'}}>           
                    <div className="topMenuNavigation">
                        <a href="">ABOUT US</a>
                    </div>
                    <div className="topMenuNavigation">
                        <a href="">OUR PROGRAMS</a>
                    </div>
                    <div style={{width: '28%', backgroundColor: '#000000'}}>
                        <header className="App-header" style={{width: '100%', maxWidth: '100%', overflow: 'hidden'}}>
                            <img src={logo} className="App-logo" alt="casera-intervention-logo" style={{maxWidth: '80%', height: 'auto', maxHeight: '100%'}}/>
                        </header>
                    </div>
                    <div className="topMenuNavigation">
                        <a href="">TESTIMONIALS</a>
                    </div>
                    <div className="topMenuNavigation">
                        <a href="">CONTACT US</a>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767} values={{ deviceWidth: 1600 }}>
                <Menu left styles={styles}>
                    <a id="home" className="menu-item" href="">Home</a>
                    <a id="about" className="menu-item" href="">About</a>
                    <a id="contact" className="menu-item" href="">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
            </MediaQuery>
        </div>   
        );
    }
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  