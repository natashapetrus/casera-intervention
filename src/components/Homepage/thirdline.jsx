import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../../App.css';
import '../style/homepage/homepage.css';
import '../style/homepage/thirdline.css';
import '../style/button.css';
import test from '../../assets/images/test.PNG';

export default class FirstLine extends Component{
    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={1000}>
                    <div className="thirdLineLaptop">
                        <div className="iOSFix bigScreen">
                            <div style={{height: '10%', zIndex: 1}}>
                                <h3>PROGRAM KAMI</h3>
                            </div>
                            <div className="programOverview" style={{backgroundColor: 'yellow'}}>
                                <div className="programSection">
                                </div>
                                <div className="programSection">
                                </div>
                                <div className="programSection">
                                </div>
                                <div className="programSection">
                                </div>
                            </div>           
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}