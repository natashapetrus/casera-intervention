import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './style/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <MediaQuery minDeviceWidth={2000}>
                    <div style={{display:'flex', width: '100%', height: '75px', background: 'linear-gradient(to right, #0099ff, #e18a07)', alignContent:'center', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                        <ul className="soc">
                            <li><a className="soc-f" href=""></a></li>
                            <li><a className="soc-i" href=""></a></li>
                            <li><a className="soc-mail soc-icon-last" href=""></a></li>
                        </ul>
                    </div>
                </MediaQuery>
                <div id="footer">
                    <div className="footerSection" style={{fontSize:'small'}}>
                        Copyright © {(new Date().getFullYear())} Casera Intervention. All rights reserved.
                    </div>
                    <div className="footerSection" style={{alignItems:'flex-start', justifyContent:'center', display:'flex'}}>
                        <ul className="soc">
                            <li><a className="soc-f" href="https://www.facebook.com/caseraintervention" target="_blank"></a></li>
                            <li><a className="soc-i" href="https://www.instagram.com/caseraintervention/" target="_blank"></a></li>
                            <li><a className="soc-mail soc-icon-last" href="mailto:test@caseraintervention.com"></a></li>
                        </ul>
                    </div>
                    <div className="footerSection" id="madeBy" style={{fontSize:'small', textAlign: 'right'}}>
                        <a href="https://natashapetrus.com" target="_blank">Coded with <b style={{color:'red'}}>&hearts;</b>&nbsp;&nbsp;</a>
                    </div>
                </div>
            </div>
        );
    }
}