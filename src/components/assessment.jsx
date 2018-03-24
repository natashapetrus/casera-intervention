import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import Separator from './separator.jsx';
import './style/assessment.css';
import './style/button.css';
import '../App.css';

export default class Assessment extends Component{
    render(){
        return(
            <div className='assessmentBackground'>
                <Separator />
                <div className='assessmentText'>
                    <h1>Assessment</h1>
                    <div style={{fontSize:'17px'}}>
                        Assessment adalah serangkaian alat tes untuk mengetahui kemampuan seseorang terhadap suatu kompetensi.
                        <br />Assessment yang dilakukan oleh CASERA berupa assessment yang bersifat psikologis dan neurosains.
                        <br /><br />
                        <div className='assessmentTypes'>
                            <b style={{fontSize:'larger'}}>CASERA memiliki 3 macam assessment yakni:</b>
                            <br />
                            <br/>
                            <b className='assessmentButtonText'>Cognitive/IQ Assessment</b>
                            <br /><div style={{height:'5px'}} />Alat tes yang <b className='emphasis'>mengukur kecerdasan</b> seseorang dengan menggunakan tes yang sudah terstandarisasi. 
                            <br /><br />
                            <b className='assessmentButtonText'>Brain Assessment</b>
                            <br /><div style={{height:'5px'}} />Serangkaian alat tes yang <b className='emphasis'>mengukur semua area otak</b> secara keseluruhan dengan menggunakan tes yang sudah terstandarisasi. 
                            <br /><br />
                            <b className='assessmentButtonText'>Comprehensive Clinical Assessment</b>
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