import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './style/about.css';
import './style/button.css';
import '../App.css';

export default class About extends Component{
    render(){
        return(
            <div id='casera' className='aboutBackground'>
                    <div className='aboutText' style={{marginTop:'100px'}}>
                        <h1>Tentang Casera</h1>
                        <div>
                            CASERA Holistic Intervention of Brain didirikan oleh seorang Psikolog anak bersama dengan tenaga ahli yang berkecimpung di bidang kognitif.
                            CASERA didirikan pada tahun 2018 dengan keinginan untuk membantu setiap anak (termasuk anak berkebutuhan khusus) yang ada di Jakarta memperoleh dan memaksimalkan potensi yang dimilikinya.
                            CASERA didirikan dengan harapan tempat ini dapat memberikan <b className='emphasis'>solusi bagi semua orangtua</b> yang ingin anaknya bertumbuh secara optimal, dengan cara pelatihan otak maupun merubah pola pikir mengenai perkembangan otak.
                            <br /><br />
                            “CASERA” berasal dari bahasa Spanyol yang berarti rumah.
                            Hal ini sesuai dengan salah satu misi CASERA, dimana <b className='emphasis'>intervensi yang disediakan oleh CASERA dapat dilakukan di rumah</b> anak sehingga orangtua tidak perlu lagi menghadapi kemacetan dalam rangka mengupayakan intervensi yang terbaik untuk anaknya.
                            Penggunaan kata rumah pada CASERA juga berkaitan dengan situasi dan lingkungan intervensi yang hangat dan bersifat kekeluargaan, seperti layaknya rumah, namun tidak mengurangi kualitas intervensi yang diberikan.
                            Kehadiran CASERA diharapkan dapat menjadi solusi untuk orangtua yang memiliki hambatan dalam menyediakan intervensi kognitif bagi anak-anak yang membutuhkan agar semua anak dapat berkembang optimal sesuai dengan usia dan tahap perkembangan mereka.
                            <br /><br />
                            <h4>CASERA memiliki Visi dan Misi yang disesuaikan dengan perkembangan teknologi yang sangat pesat!</h4>
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b> Visi</h3>
                            Membantu setiap anak untuk memaksimalkan kemampuan otak sehingga dapat berfungsi dengan baik dalam segala aspek kehidupan.
                            <br /><br />
                            <div id="mission">
                                <h3><b style={{color: '#ffcc00'}}>&mdash;</b> Misi</h3>
                                <ol type='1'>
                                    <li>Memberikan intervensi holistik berbasis <i>neuroscience</i></li>
                                    <li>Menyediakan lingkungan yang hangat, ramah, dan aman selama intervensi</li>
                                    <li>Memberikan fasilitas berupa <i>home service</i> di Jakarta</li>
                                    <li>Mengembangkan potensi anak</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='aboutText'>
                        <h1>Tim Kami</h1>
                        <div>
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b> Christopher, S. Psi.</h3>
                            <h4>Director, Certified Brain &amp; Cognitive Specialist, Brain &amp; Cognitive Trainer</h4>
                            Christopher memiliki ketertarikan dalam bidang <i>neuroscience</i> mulai dari tahun 2014.
                            Beliau bersama dengan Ibu Widya Thresia mendirikan <i>learning center</i> ini pada tahun 2018.
                            Christopher memiliki keinginan untuk dapat membantu setiap anak yang ada di Jakarta mencapai potensi yang mereka miliki.
                            Bukan hanya itu saja, beliau juga ingin mengedukasi setiap orangtua yang ada di Jakarta mengenai perkembangan otak sekaligus stimulasi yang tepat dalam mengembangkan dan mengoptimalkan otak anak-anak dari orangtua.
                            Beliau memiliki sertifikat dalam memberikan pelatihan otak secara menyeluruh dan memiliki pengalaman menangani anak-anak mulai dari kesulitan belajar hingga anak berkebutuhan khusus.
                            Dia bersama dengan Ibu Widya merancang seluruh program dari CASERA.
                            Beliau bertannggungjawab dalam hal pengembangan program, pelatihan dan supervisi setiap trainer di CASERA, serta dalam hal management.
                        </div>
                        <div>
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b> Widya Thresia, M. Psi.</h3>
                            <h4>Psikolog, CGA, Certified Brain &amp; Cognitive Specialist</h4>
                            Widya sebagai Psikolog anak memiliki pendekatan kognitif dan <i>neuroscience</i> dalam menangani anak yang memiliki masalah.
                            Beliau bersama dengan Bapak Christopher mendirikan CASERA pada tahun 2018.
                            Dia memiliki keinginan yang sama, yaitu untuk membantu anak-anak yang ada di Jakarta mencapai potensi yang mereka miliki.
                            Beliau bertanggungjawab akan seluruh tes yang ada di CASERA, rekomendasi program, serta laporan yang dibuat baik pre-test maupun post-test.
                            Dia juga bertanggungjawab dalam pelatihan dan supervisi psikolog lain serta <i>certified brain &amp; cognitive specialist</i> dalam interpretasi hasil tes serta rekomendasi program.
                        </div>
                    </div>
                    <div className='aboutText' id='faqs'>
                        <MediaQuery minDeviceWidth={0} maxDeviceWidth={700}>
                            <h1>FAQs</h1>
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={701}>
                            <h1>Frequently Asked Questions (FAQs)</h1>
                        </MediaQuery>
                        <div>
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b>Apa yang membuat terbentuknya CASERA?</h3>
                            CASERA mengetahui bahwa pada zaman sekarang, banyak anak bahkan orangtua yang terpengaruh oleh perkembangan zaman yang menyebabkan perkembangan anak-anak terpengaruhi termasuk anak berkebutuhan khusus. Hal yang terpengaruh adalah perkembangan otak karena anak tidak mendapatkan stimulasi yang tepat dan maksimal. Ini menyebabkan anak tidak dapat melakukan performa secara optimal. Bukan hanya itu saja, anak juga mengalami kesulitan serta stress menghadapai tantangan sesuai dengan usianya atau bahkan di bawah usianya. Karena kurangnya stimulasi dan latihan pada perkembangan otak, CASERA menyediakan tempat pelatihan otak bagi anak-anak.
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b>Apa itu pelatihan otak?</h3>
                            Sebelum kami menjelaskan apa itu pelatihan otak, perlu diketahui bahwa otak terbagi menjadi 5 area bagian besar yaitu bagian area sensory-motor, area visual, area auditori, area emosi, dan area <i>executive function</i>. Setiap area otak ini penting dalam melakukan suatu kegiatan, apabila ada satu bagian area otak yang tidak maksimal maka performa yang dihasilkan juga tidak maksimal. Melalui pelatihan otak, semua area bagian otak akan dilatih sehingga performa yang dihasilkan dapat maksimal. Pelatihan otak merupakan stimulasi yang diberikan ke otak secara kesuruhan sesuai dengan kemampuan yang dimiliki dan sesuai dengan tahapan usianya. Pelatihan otak harus dirancang sedemikian rupa sesuai dengan tantangan yang cocok bagi otak.
                            Manfaat dari pelatihan otak adalah meningkatnya kecerdasan umum (IQ), kecerdasan emosi (EQ), konsentrasi, performa akademis, dan kemampuan kognitif lainnya.
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b>Siapa yang membutuhkan pelatihan otak?</h3>
                            Setiap anak berhak mendapatkan pelatihan otak supaya mendapatkan kemampuan dan performa yang maksimal.
                            Dengan perkembangan zaman sekarang, sebagian besar anak mengalami kesulitan belajar karena sulit berkonsentrasi, tidak dapat duduk diam, kesulitan membaca, kesulitan mengikuti instruksi, ceroboh, pelupa, emosi tidak stabil, nilai akademis kurang, ataupun faktor lainnya.
                            Karena itu, mereka membutuhkan pelatihan otak yang intensif untuk menyelesaikan masalah tersebut.
                            Seringkali, orangtua mengatasi masalah-masalah tersebut dengan pola pikir yang salah seperti “nanti kalau sudah besar juga sudah tidak menjadi masalah” atau memasukkan anaknya ke dalam institusi-institusi tertentu.
                            Perlu diketahui bahwa mendaftarkan anak ke dalam institusi tertentu hanya menyelesaikan masalah secara sementara dan tidak menyentuh akar permasalahan.
                            Anak dengan berbagai masalah yang dipaparkan diatas membutuhkan pelatihan otak secara intensif dan keseluruhan sehingga akar permasalahan dapat teratasi dengan baik. 
                            <br /><br />Anak berkebutuhan khusus akan mendapatkan manfaat melalui pelatihan otak secara intensif dan keseluruhan.
                            Sebagian besar orangtua masih belum mendapatkan informasi yang lengkap, cocok, dan benar sesuai dengan kebutuhan anaknya.
                            Perlu diketahui bahwa semua anak berkebutuhan khusus membutuhkan pelatihan otak secara intensif dan keseluruhan.
                            Pelatihan otak ada bermacam-macam jenisnya, mulai dari sistem sensori-motor, motorik kasar, motorik halus, kemampuan visual, kemampuan auditori, kemampuan berkonsentrasi, sampai kemampuan kognitif lainnya yang lebih tinggi atau disebut <i>executive function</i>.
                            Anak berkebutuhan khusus berhak mendapatkan program yang dirancang sedemikian rupa mulai dari pelatihan area paling dasar hingga yang paling tinggi.
                            Anak berkebutuhan khusus biasanya mengalami masalah di area dasar, atau sistem sensori-motor.
                            Oleh karena itu, anak berkebutuhan khusus membutuhkan pelatihan otak yang mendasar secara intensif dan kuat untuk mengembangkan kemampuan lainnya.
                            <br /><br />
                            <h3><b style={{color: '#ffcc00'}}>&mdash;</b>Masih punya pertanyaan?</h3>
                            <Link to="/contact"><div className="buttonSlide slideRight buttonDevice" style={{fontSize:'smaller'}}>HUBUNGI KAMI</div></Link>
                        </div>
                    </div>
            </div>
        );
    }
}