import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './style/program.css';
import './style/button.css';
import '../App.css';

export default class Program extends Component{
    render(){
        return(
            <div className='programBackground'>
                    <div className='programText' style={{marginTop:'100px'}}>
                        <h1>Program</h1>
                        <div>
                        CASERA memiliki satu program unggulan yaitu <b className='emphasis'>Holistic Intervention of Brain</b>.
                        <br />Intervensi otak adalah penanganan yang dilakukan untuk meningkatkan fungsi otak (kognitif).
                        <br />Berdasarkan <i>neuroscience</i>, otak dibagi menjadi beberapa area besar, seperti gambar di bawah ini:
                        <br /><br />
                        <img alt="" src={require("../assets/images/brain_areas.PNG")} id='brainImage' />
                        <br /><br/>
                        Pada dasarnya, setiap area otak memiliki fungsi dan peranannya masing-masing dalam mengatur hal sederhana sampai dengan tugas kompleks yang membutuhkan proses mental yang rumit. Ketika salah satu area otak tidak dapat berfungsi dengan baik, maka akan mempengaruhi performa area lain pada otak. Oleh karena itu, cara terbaik untuk memaksimalkan performa otak adalah memberikan stimulasi intensif secara menyeluruh pada otak.
                        <br /><br />
                        Intervensi holistik dilakukan secara bertahap dengan menitikberatkan pada bagian-bagian yang mendasar kemudian dilanjutkan dengan bagian lain yang lebih kompleks. Penanganan dimulai dari intervensi pada area sensory system, yang merupakan fondasi mendasar anak untuk mengembangkan kemampuan lainnya, seperti kemampuan motorik, kemampuan bina diri, kemampuan berbicara dan berbahasa, kemampuan sosial, regulasi emosi, dan problem solving. Umumnya sumber masalah anak adalah fondasi sensory system yang belum berkembang dengan baik sehingga berdampak pada performa anak secara keseluruhan. Berikut ini merupakan gambar yang menunjukkan tahapan kemampuan otak (Williams dan Shellenbeger):
                        <br /><img alt="" src={require("../assets/images/pyramid-of-learning.PNG")} id='pyramidImage' /> 
                            <div id='sub-program'>
                                <br /><br />
                                <b style={{fontSize:'larger'}}><i>Holistic Intervention of Brain</i>&nbsp; terbagi menjadi 4 sub-program:</b>
                                <br />
                                <br/>
                                <div id='sensory-motor-intervention'>
                                    <MediaQuery minDeviceWidth={0} maxDeviceWidth={700}>
                                        <b className='programButtonText'><i>Sensory-Motor Intervention</i></b>
                                    </MediaQuery>
                                    <MediaQuery minDeviceWidth={701}>
                                        <b className='programButtonText'><i>Sensory-Motor Intervention</i> (SMI)</b>
                                    </MediaQuery>
                                    <br /><div style={{height:'5px'}} />Program ini <b className='emphasis'>berfokus pada stimulasi intensif untuk memperbaiki/meningkatkan fungsi <i>sensory system</i></b> pada anak. <i>Sensory system</i> yang berfungsi dengan baik akan menunjang anak untuk mengembangkan kemampuan lain, seperti kemampuan motorik, kemampuan visual, dan kemampuan auditori. <b className='emphasis'>Semua aktivitas dalam program ini merupakan aktivitas fisik</b> sehingga anak disarankan untuk menggunakan pakaian yang nyaman dan leluasa ketika menjalani program ini. 
                                    <br /><br />
                                </div>
                                <div id='VisionTrackingIntervention'>
                                    <MediaQuery minDeviceWidth={0} maxDeviceWidth={700}>
                                        <b className='programButtonText'><i>Vision-Tracking Intervention</i></b>
                                    </MediaQuery>
                                    <MediaQuery minDeviceWidth={701}>
                                        <b className='programButtonText'><i>Vision-Tracking Intervention</i> (VTI)</b>
                                    </MediaQuery>
                                    <br /><div style={{height:'5px'}} />Program ini <b className='emphasis'>berfokus untuk melatih kemampuan oculomotor (<i>eye movement</i>)</b> yang merupakan fondasi pertama anak dalam mengembangkan kemampuan membaca. Aktivitas dalam program ini merupakan kombinasi aktivitas fisik dan <i>table activities</i>.
                                    <br /><br />
                                </div>
                                <div id='VisualMotorIntervention'>
                                    <MediaQuery minDeviceWidth={0} maxDeviceWidth={700}>
                                        <b className='programButtonText'><i>Visual Motor Intervention</i></b>
                                    </MediaQuery>
                                    <MediaQuery minDeviceWidth={701}>    
                                        <b className='programButtonText'><i>Visual Motor Intervention</i> (VMI)</b>
                                    </MediaQuery>
                                    <br /><div style={{height:'5px'}} />Program ini <b className='emphasis'>melatih kemampuan <i>visual perception</i> pada anak</b> (seperti kemampuan visual diskriminasi, visual memori, visual spasial, dsb.) yang dibutuhkan anak untuk belajar mengenal angka, huruf, spelling, dan membaca. Selain itu, program ini juga <b className='emphasis'>melatih kemampuan integrasi visual dan motor</b>, yang berperan penting pada saat anak belajar meniru tulisan, menggambar, mewarnai ataupun pada kegiatan lain yang melibatkan kerja kemampuan visual dan motoric secara bersamaan. Aktivitas dalam program ini merupakan kombinasi aktivitas fisik dan <i>table activities</i> sehingga anak disarankan untuk menggunakan pakaian yang nyaman untuk bergerak.
                                    <br /><br />
                                </div>
                                <div id='VisualAuditoryIntervention'>
                                    <MediaQuery minDeviceWidth={0} maxDeviceWidth={700}>
                                        <b className='programButtonText'><i>Visual Auditory Intervention</i></b>
                                    </MediaQuery>
                                    <MediaQuery minDeviceWidth={701}>    
                                        <b className='programButtonText'><i>Visual Auditory Intervention</i> (VAI)</b>
                                    </MediaQuery>
                                    <br /><div style={{height:'5px'}} />Program ini berfokus pada area visual dan auditory. Tujuan dari program ini adalah <b className='emphasis'>melatih kemampuan memori dan <i>working memory</i> pada area visual dan auditori</b> secara bersamaan. Kedua area ini berperan penting selama proses belajar, terutama ketika anak berada di ruangan yang cukup besar dengan beberapa anak lain. Semua aktivitas dalam program ini adalah <i>table activities</i>.
                                </div>
                            </div>
                            <br /><br />Semua aktivitas yang dilakukan akan dirancang 100% sesuai dengan kebutuhan anak sehingga setiap anak akan mendapatkan aktivitas yang berbeda dengan derajat kesulitan yang juga berbeda namun tepat. Oleh karena itu, sebelum memulai intervensi, anak perlu menjalani assessment di awal sebagai baseline untuk menentukan jenis aktivitas yang tepat untuk setiap anak.
                            <br /><br />Area bagian otak yang terstimulasi melalui program CASERA:	
                            <div>
                                <ol type='1' id='brainAreas'>
                                    <li>Visual area</li>
                                    <li>Motor Function area</li>
                                    <li>Broca’s Area</li>
                                    <li>Auditory area</li>
                                    <li>Emotional area</li>
                                    <li>Sensory area</li>
                                    <li>Somatosensory area</li>
                                    <li>Higher Mental Function:</li>
                                    <ol type='a'>
                                        <li>Concentration</li>
                                        <li>Planning</li>
                                        <li>Judgement</li> 
                                        <li>Emotional Expression</li>
                                        <li>Inhibition</li>
                                        <li>Problem Solving</li>
                                    </ol>
                                </ol>
                            </div>
                            <br /><br />
                            <div className="buttonSlide slideRight buttonDevice" style={{fontSize:'smaller'}}>KONSULTASI SEKARANG</div>
                        </div>
                    </div>
            </div>
        );
    }
}