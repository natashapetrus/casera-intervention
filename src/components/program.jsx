import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import Separator from './separator.jsx';
import './style/program.css';
import './style/button.css';
import '../App.css';

export default class Program extends Component{
    render(){
        return(
            <div className='programBackground'>
                <Separator />
                <div className='text'>
                    <h1>Program</h1>
                    <div style={{fontSize:'17px'}}>
                    CASERA memiliki satu program unggulan yaitu <b className='emphasis'>Holistic Intervention of Brain</b>.
                    <br />Intervensi otak adalah penanganan yang dilakukan untuk meningkatkan fungsi otak (kognitif).
                    <br />Berdasarkan <i>neuroscience</i>, otak dibagi menjadi beberapa area besar, seperti gambar di bawah ini:
                    <br /><br />
                    <img src={require("../assets/images/brain_areas.PNG")} id='brainImage' />
                        <div className='types'>
                            <b style={{fontSize:'larger'}}>CASERA memiliki 3 macam assessment yakni:</b>
                            <br />
                            <br/>
                            <b className='buttonText'>Cognitive/IQ Assessment</b>
                            <br /><div style={{height:'5px'}} />Alat tes yang <b className='emphasis'>mengukur kecerdasan</b> seseorang dengan menggunakan tes yang sudah terstandarisasi. 
                            <br /><br />
                            <b className='buttonText'>Brain Assessment</b>
                            <br /><div style={{height:'5px'}} />Serangkaian alat tes yang <b className='emphasis'>mengukur semua area otak</b> secara keseluruhan dengan menggunakan tes yang sudah terstandarisasi. 
                            <br /><br />
                            <b className='buttonText'>Comprehensive Clinical Assessment</b>
                            <br /><div style={{height:'5px'}} />Serangkaian assessment dengan menggunakan berbagai standardized test untuk <b className='emphasis'>mengukur kemampuan semua area otak dan tingkat kognisi serta kondisi psikososial</b> anak.
                        </div>
                        <br /><br />Berdasarkan hasil assessment, akan diketahui secara spesifik kemampuan setiap area otak anak dibandingkan dengan anak seusianya, sehingga trainer kami dapat merancang program intervensi yang sesuai dengan kebutuhan.
                        <br /><br />Selain itu, hasil assessment ini juga dapat dijadikan sebagai panduan untuk membantu anak mencapai performa yang maksimal.
                        <br /><br /><br/>
                        <div className="buttonSlide slideRight buttonLaptop" style={{fontSize:'smaller'}}>HUBUNGI KAMI SEKARANG</div>
                    </div>
                </div>
            </div>
        );
    }
}