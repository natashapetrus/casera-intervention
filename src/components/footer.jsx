import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './style/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={0} maxDeviceWidth={600}>
                    <div id="footer">
                        <div className="footerSection" style={{alignItems:'flex-start', justifyContent:'center', display:'flex'}}>
                            <ul className="soc">
                                <li><a rel="noopener noreferrer" className="soc-f" href="https://www.facebook.com/caseraintervention" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-i" href="https://www.instagram.com/caseraintervention/" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-mail soc-icon-last" href="mailto:info@caseraintervention.com"> </a></li>
                            </ul>
                        </div>
                        <div className="footerSection" style={{fontSize:'small'}}>
                            Copyright © {(new Date().getFullYear())} Casera Intervention.
                        </div>
                        <div className="footerSection" id="madeBy">
                            <a href="https://natashapetrus.com" target="_blank" rel="noopener noreferrer">Coded with <b style={{color:'red'}}>&hearts;</b>&nbsp;&nbsp;</a>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={601} maxDeviceWidth={900}>
                    <div id="footer">
                        <div className="footerSection" style={{fontSize:'small'}}>
                            © {(new Date().getFullYear())} Casera Intervention.
                        </div>
                        <div className="footerSection" style={{alignItems:'flex-start', justifyContent:'center', display:'flex'}}>
                            <ul className="soc">
                                <li><a rel="noopener noreferrer" className="soc-f" href="https://www.facebook.com/caseraintervention" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-i" href="https://www.instagram.com/caseraintervention/" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-mail soc-icon-last" href="mailto:test@caseraintervention.com"> </a></li>
                            </ul>
                        </div>
                        <div className="footerSection" id="madeBy">
                            <a href="https://natashapetrus.com" target="_blank" rel="noopener noreferrer">Coded with <b style={{color:'red'}}>&hearts;</b>&nbsp;&nbsp;</a>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={901} maxDeviceWidth={1200}>
                    <div id="footer">
                        <div className="footerSection" style={{fontSize:'small'}}>
                            © {(new Date().getFullYear())} Casera Intervention. All rights reserved.
                        </div>
                        <div className="footerSection" style={{alignItems:'flex-start', justifyContent:'center', display:'flex'}}>
                            <ul className="soc">
                                <li><a rel="noopener noreferrer" className="soc-f" href="https://www.facebook.com/caseraintervention" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-i" href="https://www.instagram.com/caseraintervention/" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-mail soc-icon-last" href="mailto:test@caseraintervention.com"> </a></li>
                            </ul>
                        </div>
                        <div className="footerSection" id="madeBy">
                            <a href="https://natashapetrus.com" target="_blank" rel="noopener noreferrer">Coded with <b style={{color:'red'}}>&hearts;</b>&nbsp;&nbsp;</a>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={1201}>
                    <div id="footer">
                        <div className="footerSection" style={{fontSize:'small'}}>
                            Copyright © {(new Date().getFullYear())} Casera Intervention. All rights reserved.
                        </div>
                        <div className="footerSection" style={{alignItems:'flex-start', justifyContent:'center', display:'flex'}}>
                            <ul className="soc">
                                <li><a rel="noopener noreferrer" className="soc-f" href="https://www.facebook.com/caseraintervention" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-i" href="https://www.instagram.com/caseraintervention/" target="_blank"> </a></li>
                                <li><a rel="noopener noreferrer" className="soc-mail soc-icon-last" href="mailto:test@caseraintervention.com"> </a></li>
                            </ul>
                        </div>
                        <div className="footerSection" id="madeBy">
                            <a href="https://natashapetrus.com" target="_blank" rel="noopener noreferrer">Coded with <b style={{color:'red'}}>&hearts;</b>&nbsp;&nbsp;</a>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}