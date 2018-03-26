import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="firstLine">
                        <Separator />
                        <div className="firstLineOne">
                            <div className="iOSFix firstLineTwo">
                                <div className="firstLineThree">
                                    <p className="firstLineHeading">Apakah anak anda mengalami masalah seperti:</p>
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
                                <div className="firstLineTextAndButtonSeparator" />
                                <div className="firstLineButtons">
                                    <Link to="/assessment"><div className="buttonSlide slideRight buttonDevice">AMBIL ASSESSMENT*</div></Link>
                                    <div className="firstLineButtonsSeparator" />
                                    <div className="buttonSlide slideRight buttonDevice">KONSULTASI SEKARANG</div>
                                </div>
                                <div className="firstLineFinePrint">
                                    * Ketahui kemampuan otak anak anda melalui Assessment kami mulai dari usia 2 hingga 21 tahun 
                                </div>            
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}