import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import FirstLine from '../components/Homepage/firstline.jsx';
import SecondLine from '../components/Homepage/secondline.jsx';
import ThirdLine from '../components/Homepage/thirdline.jsx';
import FourthLine from '../components/Homepage/fourthline.jsx';
import './style/button.css';
import './style/homepage/homepage.css';
import '../App.css';

export default class Assessment extends Component{
    render(){
        return(
            <div style={{overflow:'hidden'}}>
                Assessment
            </div>
        );
    }
}