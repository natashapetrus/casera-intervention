import React, { Component } from 'react';
import FirstLine from '../components/Homepage/firstline.jsx';
import SecondLine from '../components/Homepage/secondline.jsx';
import ThirdLine from '../components/Homepage/thirdline.jsx';
import FourthLine from '../components/Homepage/fourthline.jsx';
import './style/button.css';
import './style/homepage/homepage.css';
import '../App.css';

export default class Homepage extends Component{
    render(){
        return(
            <div style={{overflow:'hidden'}}>
                <FirstLine />
                <SecondLine />
                <div id="program"><ThirdLine /></div>
                <FourthLine />
            </div>
        );
    }
}