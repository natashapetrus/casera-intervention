import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import background from '../assets/images/children.jpg';
import {Parallax} from 'react-scroll-parallax';
import TypistLoop from 'react-typist-loop';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import '../App.css';

export default class Homepage extends Component{
    render(){
        return(
            <div style={{overflow:'hidden'}}>
                <div className="paperBg">
                    <div style={{height: '50px', width: '100%'}} />
                    <div style={{display: 'flex', height: '300px', width: '100%'}}>
                        <div style={{width:'30%', height: '100%'}}>
                            <Parallax
                                    className="custom-class"
                                    offsetYMax={150}
                                    offsetYMin={-150}
                                    offsetXMax={-35}
                                    offsetXMin={-35}
                                    slowerScrollRate
                                    tag="figure">
                                <svg height="200" width="400">
                                    <polygon points="182.2,182.2 0,182.2 182.2,0 " style={{fill:'#ffcc00', strokeWidth:1}} />
                                </svg>
                            </Parallax>
                            <Parallax
                                    className="custom-class"
                                    offsetYMax={300}
                                    offsetYMin={-300}
                                    offsetXMax={10}
                                    offsetXMin={10}
                                    slowerScrollRate
                                    tag="figure">
                                <svg height="200" width="300">
                                    <polygon points="80,170 0,0 100,0" style={{stroke:'#0099ff', fill:'none' , strokeWidth:1}} />
                                </svg>
                            </Parallax>
                        </div>
                        <div className="iOSFix" style={{zIndex: 5, width:'70%', height:'100%', paddingRight: '50px',
                                    color:'#000000', fontFamily:'Lato', fontSize:'x-large', textAlign:'right', overflow:'hidden'}}>
                            <div style={{height: '50%', zIndex: 1}}>
                                <p style={{fontSize: 'xx-large', fontWeight:'bold'}}>IS YOUR CHILD</p>
                                <TypistLoop interval={1000}>
                                    {[
                                    'Hyperactive?',
                                    'Emotionally unstable?',
                                    'Clumsy?',
                                    'Forgetful?',
                                    'Impulsive?',
                                    ].map(text => <Typist key={text} startDelay={500}>{text}</Typist>)}
                                </TypistLoop>
                            </div>
                            <MediaQuery minDeviceWidth={601} values={{ deviceWidth: 1600 }}>  
                                <div style={{height:'50%'}}>
                                    <div className="buttonSlide slideRight">CONTACT US NOW</div>
                                </div>  
                            </MediaQuery>                      
                        </div>
                    </div>
                </div>
                <div style={{padding: 0, display: 'flex', width: '100%', height: '400px', backgroundColor: '#e18a07', overflow: 'hidden', zIndex:-1}}>
                    <MediaQuery maxDeviceWidth={600} values={{ deviceWidth: 1600 }}>            
                        <div style={{height: '200px', width: '80%', padding:'10%', zIndex:5}}>
                            <p className="heading" style={{fontWeight:'800', color: '#ffffff', fontSize:'xx-large'}}>WHO WE ARE</p>
                            <p style={{color: '#ffffff'}}>
                                People tend to think that "About Us" pages have to sound formal to gain credibility and trust. But most people find it easier to trust real human beings, rather than a description that sounds like it came from an automation.
                            </p>
                         </div>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={601} values={{ deviceWidth: 1600 }}>            
                        <div style={{width: '70%', height: '100%'}}>
                            <Parallax
                                className="custom-class"
                                offsetYMax={10}
                                offsetYMin={-25}
                                slowerScrollRate
                                tag="figure">
                                <div style={{height: '200px', width: '80%', padding:'10%'}}>
                                    <p className="heading" style={{fontWeight:'800', color: '#ffffff', fontSize:'xx-large'}}>WHO WE ARE</p>
                                    <p style={{color: '#ffffff'}}>
                                    People tend to think that "About Us" pages have to sound formal to gain credibility and trust. But most people find it easier to trust real human beings, rather than a description that sounds like it came from an automation.
                                    </p>
                                </div>
                            </Parallax>
                        </div>
                        <Parallax
                            className="custom-class"
                            offsetYMax={0}
                            offsetYMin={-55}
                            slowerScrollRate
                            tag="figure">
                            <img src={background} alt='' style={{left: -50, width: '150%', height: 'auto', overflow:'hidden', opacity:0.5}}/>
                        </Parallax>   
                    </MediaQuery>
                </div>
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
                <div style={{display:'flex', width: '100%', height: '75px', backgroundColor: '#ffcc00', alignContent:'center', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                        <ul className="soc">
                            <li><a className="soc-f" href=""></a></li>
                            <li><a className="soc-i" href=""></a></li>
                            <li><a className="soc-mail soc-icon-last" href=""></a></li>
                        </ul>
                </div>
            </div>
        );
    }
}