import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import logo from '../assets/images/logo-header.PNG';
import './style/header.css';

export default class Header extends Component{
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }
  
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }
    render(){
        return(
        <div>
            <MediaQuery minDeviceWidth={0} maxDeviceWidth={600}>            
                <div style={{position:'fixed', top: 0, left: 0, zIndex: 100, width: '100%', height: '50px', padding: '0px', backgroundColor: '#ffffff', borderBottom:'1px solid #ebebeb', alignItems: 'center', alignContent:'center', justifyContent: 'center'}}>
                  <NavLink exact={true} onClick={this.forceUpdate} to="/"><img src={logo} alt="casera-intervention-logo" style={{height: '100%', maxWidth:'50%'}} /></NavLink>
                </div> 
                <Menu
                  isOpen={this.state.menuOpen}
                  left styles={stylesSmall}>
                  <NavLink exact={true} to="/" activeClassName='active'>HOME</NavLink>
                  <a onClick={() => this.closeMenu()} style={{lineHeight:'10px'}}>&nbsp;</a>
                  <NavLink to="/about" activeClassName='active'>TENTANG&nbsp;KAMI</NavLink>
                  <a onClick={() => this.closeMenu()} style={{lineHeight:'10px'}}>&nbsp;</a>
                  <NavLink to="/program" activeClassName='active'>PROGRAM</NavLink>
                  <a onClick={() => this.closeMenu()} style={{lineHeight:'10px'}}>&nbsp;</a>
                  <NavLink to="/assessment" activeClassName='active'>ASSESSMENT</NavLink>
                  <a onClick={() => this.closeMenu()} style={{lineHeight:'10px'}}>&nbsp;</a>
                  <NavLink to="/contact"><b className='accentButton'>HUBUNGI&nbsp;KAMI</b></NavLink>
                </Menu>    
            </MediaQuery>
            
            <MediaQuery minDeviceWidth={601}>
                <div style={{position:'fixed', top:0, left:0, zIndex: 100, width: '100%', height: '50px', display: 'flex', alignItems:'center', justifyContent: 'center', overflow:'hidden'}}>           
                    <div style={{width:'20%', height: '100%', backgroundColor:'#ffffff', textAlign:'left'}}>
                      <NavLink exact={true} to="/"><img src={logo} alt="" style={{objectFit:'contain', maxWidth:'100%', height: '100%', borderRadius:'0px'}}/></NavLink>
                    </div>
                    <div className='topMenuNavigationBar' style={{width:'80%', height: '100%'}}>
                      <div className='topMenuText'>
                        <NavLink exact={true} to="/" activeClassName='active'>HOME</NavLink>
                      </div>
                      <div className='topMenuText'>
                        <NavLink to="/about" activeClassName='active'>TENTANG&nbsp;KAMI</NavLink>
                      </div>
                      <div className='topMenuText'>
                        <NavLink to="/program" activeClassName='active'>PROGRAM</NavLink>
                      </div>
                      <div className='topMenuText'>
                        <NavLink to="/assessment" activeClassName='active'>ASSESSMENT</NavLink>
                      </div>
                      <div className='topMenuText'>
                        <NavLink to="/contact"><b className='accentButton'>HUBUNGI&nbsp;KAMI</b></NavLink>
                      </div>
                    </div>
                </div>
            </MediaQuery>
        </div>   
        );
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