import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './style/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <MediaQuery maxDeviceWidth={600}>
                    <div style={{display:'flex', width: '100%', height: '50px', backgroundColor: '#2d303f', alignContent:'center', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                        <ul className="soc">
                            <li><a className="soc-f" style={{marginRight: '20px', lineHeight: '30px', width:'30px', height:'30px', fontSize:'25px'}}  href=""></a></li>
                            <li><a className="soc-i" style={{marginRight: '20px', lineHeight: '30px', width:'30px', height:'30px', fontSize:'25px'}} href=""></a></li>
                            <li><a className="soc-mail soc-icon-last" style={{marginRight: '20px', lineHeight: '30px', width:'30px', height:'30px', fontSize:'25px'}} href=""></a></li>
                        </ul>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={601}>
                    <div style={{display:'flex', width: '100%', height: '75px', background: 'linear-gradient(to right, #0099ff, #49cc99)', alignContent:'center', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                        <ul className="soc">
                            <li><a className="soc-f" href=""></a></li>
                            <li><a className="soc-i" href=""></a></li>
                            <li><a className="soc-mail soc-icon-last" href=""></a></li>
                        </ul>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}