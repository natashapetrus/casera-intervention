import React, { Component } from 'react';
import '../../App.css';
import '../style/homepage/homepage.css';
import '../style/homepage/secondline.css';
import '../style/button.css';

export default class SecondLine extends Component{
    render(){
        return(
            <div>
                <div className='secondLine'>
                    <div className='secondLineTwo'>
                        <p><b className='checkmark'>✓</b> Satu-satunya pelatihan otak di Jakarta dengan pendekatan psikologis dan neuroscience!</p>
                        <p><b className='checkmark'>✓</b> Satu-satunya pelatihan otak dengan layanan Home Services!</p>
                    </div>
                </div>
            </div>
        );
    }
}