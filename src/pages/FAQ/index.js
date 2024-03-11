// React
import React from 'react'

// Styles
import useStyles from './style'

// Utils
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

// Components
import TopNavigation from '../../components/TopNavigation'
import BottomNavigation from '../../components/BottomNavigation'

function FAQ() {
    // 
    const classes = useStyles()
    // 
    return (
        <div className={classes.root} >
            <TopNavigation />
            <div className={classes.content} >
                <Typography variant="h5" align="left" className={classes.title} >Pertanyaan Yang Sering Ditanyakan</Typography>
                <div style={{ paddingTop: 30, paddingBottom: 30 }} >
                    <ExpansionPanel square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>1. Apa itu Novel Coronavirus (2019-nCoV)?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Novel coronavirus (2019-nCoV) adalah jenis baru coronavirus yang belum pernah diidentifikasi sebelumnya pada manusia. Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. Pada manusia menyebabkan penyakit mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernapasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS).
                                </Typography>
                                <Typography align="left" style={{ paddingTop: 10 }} >
                                    Pada 11 Februari 2020, World Health Organization (WHO) mengumumkan nama penyakit yang disebabkan 2019-nCov, yaitu Coronavirus Disease (COVID-19).
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>2. Bagaimana cara mencegah penularan COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Hingga saat ini, belum ada vaksin untuk mencegah penularan COVID-19.
                                    Salah satu cara yang bisa dilakukan untuk mencegah tertularnya virus ini adalah:
                                </Typography>
                                <ol type="1" style={{ paddingTop: 5, textAlign: 'left' }} >
                                    <li>Menjaga kesehatan dan kebugaran agar sistem imunitas/ kekebalan tubuh meningkat.</li>
                                    <li>Mencuci tangan menggunakan air dan sabun atau  hand-rub berbasis alkohol. Mencuci tangan sampai bersih selain dapat membunuh virus yang mungkin ada di tangan kita, tindakan ini juga merupakan salah satu tindakan yang mudah dan murah. Sekitar 98% penyebaran penyakit bersumber dari tangan. Karena itu, menjaga kebersihan tangan adalah hal yang sangat penting.</li>
                                    <li>Ketika batuk dan bersin, upayakan menjaga agar lingkungan Anda tidak tertular. Tutup hidung dan mulut Anda dengan tisu atau dengan lengan (bukan dengan telapak tangan).</li>
                                    <li>Menjaga jarak saat berbicara dengan orang lain, sekurang- kurangnya satu meter, terutama dengan orang yang sedang menderita batuk, pilek/bersin dan demam. Saat seseorang terinfeksi penyakit saluran pernafasan, seperti 2019-nCoV, batuk/bersin dapat menghasilkan droplet yang mengandung virus. Jika kita terlalu dekat, virus tersebut dapat terhirup oleh kita.</li>
                                    <li>Hindari menyentuh mata, hidung dan mulut. Tangan menyentuh banyak hal yang dapat terkontaminasi virus. Jika kita menyentuh mata, hidung dan mulut dengan tangan yang terkontaminasi, maka virus dapat dengan mudah masuk ke tubuh kita.</li>
                                    <li>Gunakan masker penutup mulut dan hidung ketika Anda sakit atau saat berada di tempat umum.</li>
                                    <li>Buang tisu dan masker yang sudah digunakan ke tempat sampah, lalu cucilah tangan Anda.</li>
                                    <li>Hindari kontak dengan hewan ternak dan hewan liar yang terbukti tertular coronavirus.</li>
                                    <li>Jangan makan daging yang tidak dimasak hingga matang.</li>
                                    <li>Menunda perjalanan ke daerah/negara dimana virus ini ditemukan seperti Tiongkok, seiring dengan informasi adanya penghentian sementara operasional penerbangan langsung dari dan ke daratan Cina dari pemerintah, sampai ada informasi lebih lanjut.</li>
                                </ol>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>3. Apa saja gejala COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Gejala umum berupa demam ≥38C, batuk, pilek, nyeri tenggorokan dan sesak napas. Jika ada orang dengan gejala tersebut pernah melakukan perjalanan ke Tiongkok (terutama Wuhan), atau pernah merawat/kontak dengan penderita COVID-19, maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>4. Seberapa bahaya COVID-19 ini?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Seperti penyakit pernapasan lainnya, infeksi 2019-nCoV dapat menyebabkan gejala ringan termasuk pilek, sakit tenggorokan, batuk, dan demam. Beberapa orang mungkin akan menderita sakit yang parah, seperti disertai pneumonia atau kesulitan bernafas. Walaupun fatalitas penyakit ini masih jarang, namun bagi orang yang berusia lanjut, dan orang-orang dengan kondisi medis yang sudah ada sebelumnya (seperti, diabetes dan penyakit jantung), mereka biasanya lebih rentan untuk menjadi sakit parah.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>5. Bagaimana manusia bisa terinfeksi COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Sampai saat ini, belum diketahui bagaimana manusia bisa terinfeksi virus ini. Para ahli masih sedang melakukan penyelidikan untuk menentukan sumber virus, jenis paparan, cara penularan dan pola klinis serta perjalanan penyakit. Hasil penyelidikan sementara dari beberapa institusi di kota Wuhan, sebagian kasus terjadi pada orang yang bekerja di pasar hewan/ikan, namun belum dapat dipastikan jenis hewan penular virus ini. Hingga saat ini dilaporkan adanya penularan antar manusia yang terbatas (antar keluarga dekat dan petugas kesehatan yang merawat kasus).
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>6. Bisakah manusia terinfeksi novel coronavirus dari hewan?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Saat ini sumber hewan penular COVID-19 belum diketahui, WHO terus menyelidiki berbagai kemungkinan jenis hewan penularnya. Sangat dimungkinkan hewan dari pasar hewan hidup di Tiongkok bertanggung jawab atas terinfeksinya manusia yang dilaporkan pertama kali. Untuk itu, disarankan pada saat berkunjung ke pasar hewan  hidup, hindari kontak langsung dengan hewan dan permukaan yang bersentuhan dengan hewan tanpa alat pelindung diri.
                                </Typography>
                                <Typography align="left" style={{ paddingTop: 10 }} >
                                    Hindari juga konsumsi produk hewani mentah atau setengah matang. Penanganan daging mentah, susu, atau produk hewani harus diperhatikan, untuk menghindari kontaminasi silang dengan makanan mentah yang lain, lakukanlah dengan memperhatikan keamanan pangan yang baik.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>7. Benarkah COVID-19 berasal dari kelelawar atau hewan lainnya?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Sampai saat ini hewan penular 2019-nCoV belum diketahui.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>8. Apakah COVID-19 dapat ditularkan antar manusia?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Ya, COVID-19 dapat ditularkan dari orang ke orang, biasanya setelah kontak erat dengan pasien yang terinfeksi, misalnya, di tempat kerja, di rumah tangga, atau fasilitas pelayanan kesehatan.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>9. Berapa lama virus ini bertahan di permukaan benda?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Sampai saat ini belum diketahui berapa lama 2019-nCoV bertahan di permukaan suatu benda, meskipun ada informasi awal yang menunjukkan dapat bertahan hingga beberapa jam. Namun desinfektan sederhana dapat membunuh virus tersebut sehingga tidak mungkin menginfeksi orang lagi.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>10. Apakah sudah ada vaksin atau pengobatan spesifik untuk COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Belum ada vaksin atau pengobatan spesifik untuk virus ini. Namun, gejala yang disebabkan oleh virus ini dapat diobati. Oleh karena itu pengobatan harus didasarkan pada kondisi klinis pasien dan perawatan suportif dapat sangat efektif.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>11. Apakah antibiotik efektif dalam mencegah dan mengobati COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Tidak, antibiotik tidak bekerja melawan virus, hanya bakteri. Novel Coronavirus (2019-nCoV) adalah virus. Oleh karena itu, antibiotik tidak boleh digunakan sebagai sarana pencegahan atau pengobatan. Namun, jika Anda dirawat di rumah sakit untuk COVID-19, Anda mungkin menerima antibiotik, karena infeksi sekunder bakteri mungkin terjadi.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>12. Siapa saja yang berisiko terinfeksi COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Orang yang tinggal atau bepergian di daerah di mana virus 2019-nCoV bersirkulasi sangat mungkin berisiko terinfeksi. Saat ini, Tiongkok merupakan negara terjangkit COVID-19 dengan sebagian besar kasus telah dilaporkan. Mereka yang terinfeksi di negara lain adalah orang-orang yang belum lama ini bepergian dari Tiongkok atau yang telah tinggal atau bekerja secara dekat dengan para wisatawan, seperti anggota keluarga, rekan kerja atau tenaga medis yang merawat pasien sebelum mereka tahu pasien tersebut terinfeksi COVID-19.
                                </Typography>
                                <Typography align="left" style={{ marginTop: 10 }} >
                                    Petugas kesehatan yang merawat pasien yang terinfeksi COVID-19 berisiko lebih tinggi dan harus konsisten melindungi diri mereka sendiri dengan prosedur pencegahan dan pengendalian infeksi yang tepat.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>13. Manakah yang lebih rentan terinfeksi COVID-19, apakah orang yang lebih tua, atau orang yang lebih muda?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Tidak ada batasan usia orang-orang dapat terinfeksi COVID-19. Namun orang yang lebih tua dan orang-orang dengan kondisi medis yang sudah ada sebelumnya (seperti asma, diabetes, penyakit jantung) tampaknya lebih rentan untuk menderita sakit parah.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>14. Bagaimana membedakan antara COVID-19 dengan influenza biasa?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Orang yang terinfeksi 2019-nCoV dan influenza akan mengalami gejala infeksi saluran pernafasan yang sama, seperti demam, batuk dan pilek. Walaupun gejalanya sama, tapi penyebab virusnya berbeda-beda. Namun kesamaan gejala tersebut membuat kita sulit mengidentifikasi masing-masing penyakit tersebut, sehingga pemeriksaan laboratorium sangat diperlukan untuk mengkonfirmasi apakah seseorang terinfeksi 2019-nCoV.
                                </Typography>
                                <Typography align="left" style={{ marginTop: 10 }} >
                                    Untuk itulah WHO merekomendasikan setiap orang yang menderita demam, batuk, dan sulit bernapas harus mencari pengobatan sejak dini, dan memberitahukan petugas kesehatan jika mereka telah melakukan perjalanan dalam 14 hari sebelum muncul gejala, atau jika mereka telah melakukan kontak erat dengan seseorang yang sedang menderita gejala infeksi saluran pernafasan.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>15. Berapa lama waktu yang diperlukan sejak tertular/terinfeksi hingga muncul gejala COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Waktu yang diperlukan sejak tertular/terinfeksi hingga muncul gejala disebut masa inkubasi. Saat ini masa inkubasi COVID-19 diperkirakan antara 2-11 hari, dan perkiraan ini dapat berubah sewaktu-waktu sesuai perkembangan kasus. Berdasarkan data dari penyakit akibat coronavirus sebelumnya, seperti MERS dan SARS, masa inkubasi COVID-19 juga bisa mencapai 14 hari.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>16. Bisakah COVID-19 terdeteksi dari orang yang tidak menunjukkan gejala?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Sangat penting untuk memahami kapan orang yang terinfeksi dapat menyebarkan virus ke orang lain untuk upaya pengendalian. Informasi medis terperinci dari orang yang terinfeksi diperlukan untuk menentukan periode infeksi COVID-19. Menurut laporan terbaru, ada kemungkinan orang yang terinfeksi COVID-19 dapat menular sebelum menunjukkan gejala yang signifikan. Namun, berdasarkan data yang tersedia saat ini, sebagian besar yang menyebabkan penyebaran adalah orang-orang yang memiliki gejala.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>17. Amankah jika kita menerima paket barang dari Tiongkok atau negara lain yang melaporkan virus ini?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Ya, aman. Orang yang menerima paket tidak berisiko tertular COVID-19. Dari pengalaman dengan coronavirus lain, kita tahu bahwa jenis virus ini tidak bertahan lama pada objek, seperti surat atau paket.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>18. Apakah sudah ada pembatasan untuk bepergian ke Tiongkok?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    WHO sudah menetapkan COVID-19 sebagai Public Health Emergency of International Concern(PHEIC) atau Kegawatdaruratan Kesehatan Masyarakat yang Meresahkan Dunia pada tanggal 30 Januari 2020. Walaupun sampai saat ini WHO belum memberlakukan pembatasan perjalanan ke Tiongkok, namun beberapa negara sudah memberlakukan penghentian sementara penerbangan dari dan ke Tiongkok.
                                </Typography>
                                <Typography style={{ marginTop: 10 }} align="left" >
                                    Sesuai arahan Presiden RI terkait perjalanan ke mainland Tiongkok, yaitu:
                                </Typography>
                                <ol type="i" style={{ paddingTop: 5, textAlign: 'left' }} >
                                    <li>Seluruh penerbangan langsung dari dan ke mainland Tiongkok untuk sementara dihentikan mulai hari Rabu tanggal 5 Februari 2020 pukul 00.00.</li>
                                    <li>Semua pendatang yang tiba dari mainland Tiongkok dan sudah berada di sana sebelumnya selama 14 hari, untuk sementara tidak diizinkan untuk masuk dan melakukan transit di Indonesia.</li>
                                    <li>Kebijakan pemberian fasilitas bebas visa kunjungan dan visa on arrival untuk warga negara Tiongkok yang bertempat tinggal di mainland Tiongkok untuk sementara dihentikan.</li>
                                    <li>Warga negara Indonesia untuk sementara tidak melakukan perjalanan ke mainland Tiongkok.</li>
                                </ol>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10 }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>19. Di mana saya bisa mendapatkan informasi situasi perkembangan dan bertanya mengenai COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Hotline Emergency Operation Center (EOC) Kemkes RI: (021) 5210411 dan 081212123119
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel style={{ marginTop: 10, marginBottom: '4rem' }} square={false} >
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>20. Bisakah hewan peliharaan menyebarkan COVID-19?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div>
                                <Typography align="left" >
                                    Saat ini, belum ditemukan bukti bahwa hewan peliharaan seperti anjing atau kucing dapat terinfeksi virus 2019-nCoV. Namun, akan jauh lebih baik untuk selalu mencuci tangan dengan sabun dan air setelah kontak dengan hewan peliharaan. Kebiasaan ini dapat melindungi Anda terhadap berbagai bakteri umum seperti E.coli dan Salmonella yang dapat berpindah antara hewan peliharaan dan manusia.
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
            <div className={classes.botnav} >
                <BottomNavigation />
            </div>
        </div>
    )
}

export default FAQ