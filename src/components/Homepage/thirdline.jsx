import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MediaQuery from 'react-responsive';
import '../../App.css';
import '../style/homepage/homepage.css';
import '../style/homepage/thirdline.css';
import '../style/button.css';
import Fade from 'react-reveal/Fade';

export default class FirstLine extends Component{
    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={600}>
                    <div className="thirdLineLaptop">
                        <div className="iOSFix bigScreen">
                            <div style={{height: '10%', zIndex: 1}}>
                                <h3>PROGRAM KAMI</h3>
                            </div>
                            <Fade bottom cascade>
                                <div className="programOverview">
                                    <div className="programSection notLast">
                                        <div className="picture1"></div>
                                        <Link to='/program#sub-program'><div className="programName programSlideRight">Sensory-Motor Intervention &rarr;</div></Link>
                                        <div className="programDescription">
                                            Program ini bertujuan untuk <b>memperbaiki dan meningkatkan fungsi sistem sensory-motor</b> secara intensif sehingga memiliki fondasi dan dasar yang kuat untuk kemampuan lainnya.
                                            <br /><br />(Untuk usia 2-21 tahun)
                                        </div>
                                    </div>
                                    <div className="programSection notLast">
                                        <div className="picture2"></div>
                                        <Link to='/program#sub-program'><div className="programName programSlideRight">Visual Motor Intervention &rarr;</div></Link>
                                        <div className="programDescription">
                                            Program ini akan berfokus pada <b>kemampuan visual perception dan kemampuan motorik</b>.
                                            <br />Selain itu, program ini juga meningkatkan kemampuan integrasi atau koordinasi antara visual dan motorik.
                                            <br /><br />(Untuk usia 2-21 tahun)
                                        </div>
                                    </div>
                                    <div className="programSection notLast">
                                        <div className="picture3"></div>
                                        <Link to='/program#sub-program'><div className="programName programSlideRight">Vision Tracking Intervention &rarr;</div></Link>
                                        <div className="programDescription">
                                            Program ini akan <b>meningkatkan kemampuan oculomotor</b> anak yang merupakan salah satu kemampuan yang penting dalam membaca.    
                                            <br /><br />(Untuk usia 4-21 tahun)
                                        </div>
                                    </div>
                                    <div className="programSection">
                                        <div className="picture4"></div>
                                        <Link to='/program#sub-program'><div className="programName programSlideRight">Visual Auditory Intervention &rarr;</div></Link>
                                        <div className="programDescription">
                                            Program ini berfokus dalam <b>meningkatkan kemampuan memori</b> secara visual ataupun auditori. Selain itu, program ini juga meningkatkan kemampuan working memory di kedua area tersebut.
                                            <br /><br />(Untuk usia 4-21 tahun)
                                        </div>
                                    </div>
                                </div>    
                            </Fade>       
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}