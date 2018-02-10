import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import background from '../assets/images/children.jpg';
import {Parallax} from 'react-scroll-parallax';
import '../App.css';

export default class Homepage extends Component{
    render(){
        return(
            <div>
                <div style={{display: 'flex', width: '100%', height: '400px', backgroundColor: '#ffffff', overflow: 'hidden'}}>
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
                                offsetYMax={-60}
                                offsetYMin={-10}
                                offsetXMax={10}
                                offsetXMin={10}
                                slowerScrollRate
                                tag="figure">
                            <svg height="200" width="300">
                                <polygon points="80,170 0,0 100,0" style={{stroke:'#000066', fill:'none' , strokeWidth:1}} />
                            </svg>
                        </Parallax>
                    </div>
                    <div style={{width:'70%', height:'100%'}}>
                        
                    </div>
                </div>
                <div style={{padding: 0, display: 'flex', width: '100%', height: '400px', backgroundColor: '#e18a07', overflow: 'hidden', zIndex:-1}}>
                    <MediaQuery maxDeviceWidth={600} values={{ deviceWidth: 1600 }}>            
                        <div style={{height: '200px', width: '80%', padding:'10%'}}>
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
                <div style={{width: '100%', height: '400px', backgroundColor: '#ffffff'}}></div>
                <div style={{width: '100%', height: '400px', backgroundColor: '#ffcc00'}}></div>
                <div style={{width: '100%', height: '400px', backgroundColor: '#000000'}}></div>
            </div>
        );
    }
}