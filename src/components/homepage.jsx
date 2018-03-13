import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import FirstLine from '../components/Homepage/firstline.jsx';
import SecondLine from '../components/Homepage/secondline.jsx';
import ThirdLine from '../components/Homepage/thirdline.jsx';
import './style/button.css';
import './style/homepage/homepage.css';
import '../App.css';

export default class Homepage extends Component{
    render(){
        return(
            <div style={{overflow:'hidden'}}>
                <FirstLine />
                <SecondLine />
                <ThirdLine />
                <MediaQuery minDeviceWidth={601} values={{ deviceWidth: 1600 }}> 
                    <div className="geometryBg" style={{width: '100%', height: '200px', backgroundColor: '#ffffff', padding: '20px', alignContent:'center', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                        <p className="heading" style={{fontWeight:'800', color: '#000000', fontSize:'xx-large'}}>WHAT WE DO</p>
                        <div style={{width: '100%', display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                            <Fade bottom>
                                <div className="programButton" style={{width:'15%', fontFamily:'Open Sans', fontWeight:'light', letterSpacing:'0px'}}>
                                    Sensory Motor Intervention
                                </div>
                            </Fade>
                            <div style={{width: '3%', height:'100%'}} />
                            <Fade bottom>
                                <div className="programButton" style={{width:'15%', fontFamily:'Open Sans', fontWeight:'light', letterSpacing:'0px'}}>
                                    Vision Tracking Intervention
                                </div>
                            </Fade>
                            <div style={{width: '3%', height:'100%'}} />
                            <Fade bottom>
                                <div className="programButton" style={{width:'15%', fontFamily:'Open Sans', fontWeight:'light', letterSpacing:'0px'}}>
                                    Visual Auditory Intervention
                                </div>
                            </Fade>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={600} values={{ deviceWidth: 1600 }}> 
                    <div className="geometryBg" style={{width: '100%', height: '200px', left: '-10px', backgroundColor: '#ffffff', padding: '20px', paddingLeft:'0px', alignContent:'center', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                        <p className="heading" style={{fontWeight:'800', color: '#000000', fontSize:'xx-large'}}>WHAT WE DO</p>
                        <div style={{width: '100%', alignContent:'center', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                            <div>
                            </div>                            
                            <Fade bottom>
                                <div className="programButton" style={{width:'50%'}}>
                                    Learn More
                                </div>
                            </Fade>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}