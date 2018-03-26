import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import '../../App.css';
import '../style/homepage/homepage.css';
import '../style/homepage/fourthline.css';
import '../style/button.css';

export default class SecondLine extends Component{
    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={0}>
                    <Fade>
                        <div className="fourthLineLaptop">
                            <b style={{fontSize:'xx-large', letterSpacing:'3px', color:'black', fontWeight:1000}}>PERTANYAAN?</b>
                            <br />
                            <br />&nbsp;&nbsp;Apa yang membuat terbentuknya CASERA?
                            <br /><br />&nbsp;&nbsp;Apa Visi dan Misi CASERA?
                            <br /><br />&nbsp;&nbsp;Apa itu pelatihan otak?
                            <br /><br />&nbsp;&nbsp;Siapa yang membutuhkannya?
                            <br />
                            <HashLink to="/about#faqs"><div className="buttonSlide slideRight buttonLaptop" style={{marginTop:'30px'}}>BACA SELENGKAPNYA</div></HashLink>
                        </div>
                    </Fade>
                </MediaQuery>
            </div>
        );
    }
}