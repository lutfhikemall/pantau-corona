// React
import React from 'react'
import { Helmet } from 'react-helmet'

// Utils
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { delimiters } from '../../utils/formatter-number'
import { date } from '../../utils/formatter-date'
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './style.js'

// Components
import TopNavigation from '../../components/TopNavigation'
import BottomNavigation from '../../components/BottomNavigation'

function Home() {
    // 
    const classes = useStyles();
    // 
    const [data, setData] = React.useState({
        positif: '',
        sembuh: '',
        meninggal: '',
        updated_at: ''
    })
    // 
    const [global, setglobal] = React.useState({
        positif: '',
        sembuh: '',
        meninggal: '',
        updated_at: ''
    })
    // 
    const [loading, setLoading] = React.useState(false)
    // 
    const [load, setLoad] = React.useState(false)
    // 
    React.useEffect(() => {
        const api = async () => {
            try {
                setLoading(true)
                const response = await axios.get('https://covid19.mathdro.id/api/countries/ID')
                if (response.data) {
                    setData({
                        positif: response.data.confirmed.value,
                        sembuh: response.data.recovered.value,
                        mati: response.data.deaths.value,
                        updated_at: response.data.lastUpdate
                    })
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        api()
    }, [])
    // 
    React.useEffect(() => {
        const API = async () => {
            try {
                setLoad(true)
                const response = await axios.get('https://covid19.mathdro.id/api')
                if (response.data) {
                    setglobal({
                        positif: response.data.confirmed.value,
                        sembuh: response.data.recovered.value,
                        mati: response.data.deaths.value,
                        updated_at: response.data.lastUpdate
                    })
                }
                setLoad(false)
            } catch (error) {
                console.log(error)
            }
        }
        API()
    }, [])
    // 
    return (
        <React.Fragment>
            <Helmet>
                <meta name="description" content="Kamu bisa pantau data tentang covid-19 di Indonesia secara realtime" />
                <meta name="site_name" content="Pantau Corona" />
                <meta name="keywords" content="covid, corona-virus, pantau corona, covid-19" />
                <meta name="keywords" content="corona-virus covid-19 corona-virus-indonesia covid-19-indonesia" />
                <meta name="author" content="Lutfhi Kemal Makky" />
            </Helmet>
            <div className={classes.root}>
                <TopNavigation />
                <div className={classes.content} >
                    <div className={classes.card}>
                    </div>
                    <div className={classes.section} >
                        <Typography variant="h3" className={classes.text} >
                            Angka Kejadian di Indonesia
                        </Typography>
                        {
                            loading ?
                                <Skeleton variant="text" width={'100%'} height={26} />
                                :
                                <Typography variant="h3" className={classes.text1} >
                                    Update Terakhir: {date(data.updated_at)}
                                </Typography>
                        }
                    </div>
                    <div className={classes.sectionCard}>
                        <div className={classes.card1} >
                            {
                                loading ?
                                    <React.Fragment>
                                        <Skeleton variant="text" width={143} height={30} />
                                        <Skeleton variant="text" width={120} height={34} />
                                        <Skeleton variant="text" width={70} height={34} />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography className={classes.tag} >POSITIF COVID-19</Typography>
                                        <div style={{ display: 'grid' }} >
                                            <Typography className={classes.country} >Indonesia</Typography>
                                            <Typography className={classes.number} >{delimiters(data.positif)}</Typography>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                        <div className={classes.card2} >
                            {
                                loading ?
                                    <React.Fragment>
                                        <Skeleton variant="text" width={143} height={30} />
                                        <Skeleton variant="text" width={120} height={34} />
                                        <Skeleton variant="text" width={70} height={34} />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography className={classes.tag} >SEMBUH</Typography>
                                        <div style={{ display: 'grid' }} >
                                            <Typography className={classes.country} >Indonesia</Typography>
                                            <Typography className={classes.number} >{delimiters(data.sembuh)}</Typography>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                        <div className={classes.card3} >
                            {
                                loading ?
                                    <React.Fragment>
                                        <Skeleton variant="text" width={143} height={30} />
                                        <Skeleton variant="text" width={120} height={34} />
                                        <Skeleton variant="text" width={70} height={34} />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography className={classes.tag} >MENINGGAL</Typography>
                                        <div style={{ display: 'grid' }} >
                                            <Typography className={classes.country} >Indonesia</Typography>
                                            <Typography className={classes.number} >{delimiters(data.mati)}</Typography>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                    </div>
                    <div className={classes.section} >
                        <Typography variant="h3" className={classes.text} >
                            Angka Kejadian di Dunia
                        </Typography>
                        {
                            loading ?
                                <Skeleton variant="text" width={'100%'} height={26} />
                                :
                                <Typography variant="h3" className={classes.text1} >
                                    Update Terakhir: {date(global.updated_at)}
                                </Typography>
                        }
                    </div>
                    <div className={classes.sectionCard} >
                        <div className={classes.cardw1} >
                            {
                                load ?
                                    <React.Fragment>
                                        <Skeleton variant="text" width={143} height={30} />
                                        <Skeleton variant="text" width={120} height={34} />
                                        <Skeleton variant="text" width={70} height={34} />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography className={classes.tagw} >POSITIF COVID-19</Typography>
                                        <div style={{ display: 'grid' }} >
                                            <Typography className={classes.country} >Dunia</Typography>
                                            <Typography className={classes.number} >{delimiters(global.positif)}</Typography>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                        <div className={classes.cardw2} >
                            {
                                load ?
                                    <React.Fragment>
                                        <Skeleton variant="text" width={143} height={30} />
                                        <Skeleton variant="text" width={120} height={34} />
                                        <Skeleton variant="text" width={70} height={34} />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography className={classes.tagw} >SEMBUH</Typography>
                                        <div style={{ display: 'grid' }} >
                                            <Typography className={classes.country} >Dunia</Typography>
                                            <Typography className={classes.number} >{delimiters(global.sembuh)}</Typography>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                        <div className={classes.cardw3} >
                            {
                                load ?
                                    <React.Fragment>
                                        <Skeleton variant="text" width={143} height={30} />
                                        <Skeleton variant="text" width={120} height={34} />
                                        <Skeleton variant="text" width={70} height={34} />
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <Typography className={classes.tagw} >MENINGGAL</Typography>
                                        <div style={{ display: 'grid' }} >
                                            <Typography className={classes.country} >Dunia</Typography>
                                            <Typography className={classes.number} >{delimiters(global.mati)}</Typography>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                    </div>
                    <div className={classes.sectionCard} >
                        <div className={classes.info} onClick={() => window.open('https://www.unicef.org/indonesia/id/coronavirus', '_blank')} >
                            <Typography variant="h6" className={classes.txt} >Novel coronavirus(COVID-19): Hal-hal yang perlu anda ketahui</Typography>
                            <Typography variant="subtitle1" className={classes.sub} >Unicef Indonesia</Typography>
                        </div>
                        <div className={classes.info1} onClick={() => window.open('https://www.sehatq.com/artikel/daftar-rumah-sakit-untuk-penanganan-virus-corona-covid-19', '_blank')} >
                            <Typography variant="h6" className={classes.txt} >Daftar 100 Lebih Rumah Sakit Rujukan Penanganan Virus Corona</Typography>
                            <Typography variant="subtitle1" className={classes.sub} >SehatQ</Typography>
                        </div>
                    </div>
                    <div className={classes.sectionCard} style={{ paddingTop: '.2rem', marginBottom: '4rem' }} >
                        <div className={classes.info2} onClick={() => window.open('https://infeksiemerging.kemkes.go.id/', '_blank')} >
                            <Typography variant="h6" className={classes.txt} >Media Informasi Resmi Penyakit Infeksi Emerging</Typography>
                            <Typography variant="subtitle1" className={classes.sub} >Kementrian Kesehatan</Typography>
                        </div>
                        <div className={classes.info3} onClick={() => window.open('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public', '_blank')} >
                            <Typography variant="h6" className={classes.txt} >Coronavirus Disease (COVID-19) Advice for The Public</Typography>
                            <Typography variant="subtitle1" className={classes.sub} >WHO</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.botnav} >
                    <BottomNavigation />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home