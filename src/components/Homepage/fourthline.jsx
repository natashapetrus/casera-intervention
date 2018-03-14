import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../App.css';
import '../style/homepage/homepage.css';
import '../style/homepage/fourthline.css';
import '../style/button.css';

export default class SecondLine extends Component{
    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={0}>
                    <div className="fourthLineLaptop">
                            <text style={{fontSize:'xx-large', letterSpacing:'3px', fontWeight:1000}}>PERTANYAAN?</text>
                            <br />
                            <br />&nbsp;&nbsp;Apa yang membuat terbentuknya CASERA?
                            <br /><br />&nbsp;&nbsp;Apa Visi dan Misi CASERA?
                            <br /><br />&nbsp;&nbsp;Apa itu pelatihan otak?
                            <br /><br />&nbsp;&nbsp;Siapa yang membutuhkannya?
                            <br />
                            <div className="buttonSlide slideRight buttonLaptop" style={{marginTop:'30px'}}>BACA SELENGKAPNYA</div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}