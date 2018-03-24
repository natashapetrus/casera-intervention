import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import TypistLoop from 'react-typist-loop';
import Typist from 'react-typist';
import '../../App.css';
import '../style/homepage/homepage.css';
import '../style/homepage/firstline.css';
import '../style/button.css';
import Separator from '../separator.jsx';

export default class FirstLine extends Component{
    render(){
        return(
            <div>
                <MediaQuery maxDeviceWidth={700}>
                    <div className="firstLineMobile">
                        <div style={{height: '5%', width: '100%'}} />
                        <div style={{height: '95%', width: '100%'}}>
                            <div className="iOSFix bigScreen">
                                <div style={{height: '40%', zIndex: 1, padding:'10px'}}>
                                    <p style={{fontSize: 'large', fontWeight:'bold'}}>Apakah anak anda mengalami masalah seperti:</p>
                                    <TypistLoop interval={500}>
                                        {[
                                            'Sulit berkonsentrasi?',
                                            'Selalu aktif dan tidak bisa diam?',
                                            'Emosi tidak stabil?',
                                            'Sulit memahami instruksi?',
                                            'Ceroboh?',
                                            'Pelupa?',
                                            'Impulsif?',
                                            'Speech delay?'
                                        ].map(text => <Typist key={text} startDelay={500}>{text}</Typist>)}
                                    </TypistLoop>
                                </div>
                                <div style={{height:'30%', width: '100%', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                                    <div style={{height:'10%'}} />
                                    <div className="buttonSlide slideRight buttonMobile">AMBIL ASSESSMENT*</div>
                                    <div style={{height:'10%'}} />
                                    <div className="buttonSlide slideRight buttonMobile">KONSULTASI SEKARANG</div>
                                </div>
                                <div style={{height:'30%', fontSize:'x-small', padding:'10px'}}>
                                    * Ketahui kemampuan otak anak anda melalui Assessment kami mulai dari usia 2 hingga 21 tahun 
                                </div>            
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={1000}>
                    <div className="firstLineLaptop">
                        <Separator />
                        <div style={{display: 'flex', height: '300px', width: '100%'}}>
                            <div className="iOSFix" style={{zIndex: 5, width:'100%', height:'100%', fontFamily:'Open Sans', fontSize:'x-large', textAlign:'center', overflow:'hidden'}}>
                                <div style={{height: '40%', zIndex: 1}}>
                                    <p style={{fontSize: 'xx-large', fontWeight:'bold', color:'#000000'}}>Apakah anak anda mengalami masalah seperti:</p>
                                    <TypistLoop interval={500}>
                                        {[
                                            'Sulit berkonsentrasi?',
                                            'Selalu aktif dan tidak bisa diam?',
                                            'Emosi tidak stabil?',
                                            'Sulit memahami instruksi?',
                                            'Ceroboh?',
                                            'Pelupa?',
                                            'Impulsif?',
                                            'Speech delay?'
                                        ].map(text => <Typist key={text} startDelay={500}>{text}</Typist>)}
                                    </TypistLoop>
                                </div>
                                <div style={{height: '10%'}} />
                                <div style={{height:'20%', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                                    <Link to="/assessment"><div className="buttonSlide slideRight buttonLaptop">AMBIL ASSESSMENT*</div></Link>
                                    <div style={{width:'2%'}} />
                                    <div className="buttonSlide slideRight buttonLaptop">KONSULTASI SEKARANG</div>
                                </div>
                                <div style={{height:'10%', fontSize:'small', padding:'10px'}}>
                                    * Ketahui kemampuan otak anak anda melalui Assessment kami mulai dari usia 2 hingga 21 tahun 
                                </div>            
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}