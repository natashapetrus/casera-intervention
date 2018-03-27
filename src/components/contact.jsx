import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './style/program.css';
import './style/button.css';
import '../App.css';

export default class Program extends Component{
    render(){
        return(
            <div className='programBackground'>
                    <div className='programText' style={{marginTop:'100px'}}>
                        <h1>Hubungi Kami</h1>
                        <div>
                            <br />
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b> Widya Thresia, M. Psi.</h3>
                            <h4>Psikolog, CGA, Certified Brain &amp; Cognitive Specialist</h4>
                            +6281905638230
                            <br />widya@caseraintervention.com
                            <br /><br />
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b> Christopher, S. Psi.</h3>
                            <h4>Director, Certified Brain &amp; Cognitive Specialist, Brain &amp; Cognitive Trainer</h4>
                            +6281703665116
                            <br />christopher@caseraintervention.com
                            <br /><br />
                            <hr style={{borderColor: '#ffcc00'}}/>
                            <br />
                            <b>IG</b>: @caseraintervention
                            <br /><b>FB</b>: Casera Intervention
                            <br /><b>E-mail</b>: info@caseraintervention.com
                        </div>
                    </div>
            </div>
        );
    }
}