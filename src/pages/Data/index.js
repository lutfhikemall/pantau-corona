// React
import React from 'react'

// Styles
import useStyles from './style'

// Utils
import { Pie } from 'react-chartjs-2'
import axios from 'axios'
import { date } from '../../utils/formatter-date'

// Components
import TopNavigation from '../../components/TopNavigation'
import BottomNavigation from '../../components/BottomNavigation'
import Typography from '@material-ui/core/Typography'
import MaterialTable from 'material-table'

function Data() {
    // 
    const classes = useStyles()
    // 
    const [data, setData] = React.useState({
        dirawat: 0,
        meninggal: 0,
        sembuh: 0,
        update: ''
    })
    // 
    
    const [table, setTable] = React.useState({
        columns: [
            {
                title: 'Provinsi', field: 'Provinsi',
                render: rowData =>
                    <span className={classes.tableProv}>
                        {rowData.provinsi}
                    </span>
            },
            {
                title: 'Positif', field: 'kasusPosi',
                render: rowData =>
                    <React.Fragment>
                        <span className={classes.tablePosi}>
                            {rowData.kasusPosi}
                        </span>
                        <span className={classes.tableOran}>
                            Orang
                        </span>
                    </React.Fragment>
            },
            {
                title: 'Sembuh', field: 'kasusSemb',
                render: rowData =>
                    <React.Fragment>
                        <span className={classes.tableSemb}>
                            {rowData.kasusSemb}
                        </span>
                        <span className={classes.tableOran}>
                            Orang
                        </span>
                    </React.Fragment>
            },
            {
                title: 'Meninggal', field: 'kasusMeni',
                render: rowData =>
                    <React.Fragment>
                        <span className={classes.tableMeni}>
                            {rowData.kasusMeni}
                        </span>
                        <span className={classes.tableOran}>
                            Orang
                        </span>
                    </React.Fragment>
            }

        ],

        data: [],
    });

    //
    const [provinsi, setProvinsi] = React.useState([])
    // 
    React.useEffect(() => {
        const getData = async () => {
            try {
                const Data = await axios.get('https://indonesia-covid-19.mathdro.id/api/harian')
                const number = Data.data.data.length - 1;
                let no = 0;
                if (Data.data.data[number].jumlahPasienSembuh === null) {
                    no = Data.data.data.length - 2
                } else {
                    no = Data.data.data.length - 1
                }
                if (Data.data.data) {
                    setData({
                        sembuh: Data.data.data[no].jumlahPasienSembuh,
                        meninggal: Data.data.data[no].jumlahPasienMeninggal,
                        dirawat: Data.data.data[no].jumlahpasiendalamperawatan,
                        update: Data.data.data[no].tanggal,
                    })
                }

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    // 
    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
                if (response.data.data) {
                    setProvinsi(response.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    // 
    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
                if (response.data.data) {
                    setTable(table => {
                        return {
                            ...table,
                            data: response.data.data.map(doc => {
                                return {
                                    ...doc
                                }
                            })
                        }
                    })
                } else {
                    setTable(table => {
                        return {
                            ...table,
                            data: []
                        }
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, []);
    //
    return(
        <div className={classes.root} >
            <TopNavigation />
            <div className={classes.content} >
                <div className={classes.section} >
                    <div className={classes.chart} >
                        <div className={classes.boxTitle} >
                            <Typography variant="h4" align="left" className={classes.title} >Grafik Kasus di Indonesia</Typography>
                            <Typography variant="subtitle1" align="left" className={classes.subTitle} >Update Terakhir: {date(data.update)}</Typography>
                        </div>
                        <Pie
                            data={{
                                labels: ["Dalam Perawatan", "Sembuh", "Meninggal"],
                                datasets: [
                                    {
                                        label: 'Data Kasus',
                                        data: [
                                            data.dirawat,
                                            data.sembuh,
                                            data.meninggal
                                        ],
                                        backgroundColor: [
                                            '#ffdd00',
                                            '#399f4f',
                                            '#e62120'
                                        ]
                                    }
                                ]
                            }}
                            options={{
                                legend: {
                                    display: 'Detail',
                                    position: 'left'
                                }
                            }}
                        />
                    </div>
                    <div className={classes.chart1} style={{ marginBottom: '2rem' }} >
                        <Typography variant="h5" align="left" className={classes.title} >PUSAT INFORMASI COVID-19</Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subTitle} >Layanan darurat via telepon yang disediakan oleh Kemenkes</Typography>
                        <div className={classes.cardInfo} >
                            <div>
                                <Typography variant="h6" align="left" >021-5210-411</Typography>
                                <Typography variant="subtitle1" align="left" >Kementerian Kesehatan Republik Indonesia</Typography>
                            </div>
                            <div>
                                <Typography variant="h6" align="left" >0812-1212-3119</Typography>
                                <Typography variant="subtitle1" align="left" >Kementerian Kesehatan Republik Indonesia</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.card} >
                    <Typography variant="h5" align="center" className={classes.cardTitle} >Data Kasus Per Provinsi</Typography>
                    {
                        provinsi.map((doc, index) => {
                            const data = doc;
                            return (
                                <div key={index} className={classes.cardList} >
                                    <p className={classes.p1} >{data.provinsi}</p>
                                    <div className={classes.wrapper} >
                                        <div style={{ display: 'grid' }} >
                                            <span className={classes.positif} >{data.kasusPosi}</span>
                                            <span className={classes.p2} >Kasus Positif</span>
                                        </div>
                                        <div style={{ display: 'grid' }} >
                                            <span className={classes.sembuh} >{data.kasusSemb}</span>
                                            <span className={classes.p3} >Sembuh</span>
                                        </div>
                                        <div style={{ display: 'grid' }} >
                                            <span className={classes.meninggal} >{data.kasusMeni}</span>
                                            <span className={classes.p4} >Meninggal</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={classes.table}>
                    <MaterialTable
                        title="Data Kasus Per Provinsi"
                        columns={table.columns}
                        data={table.data}
                        components={{
                            Container: props => <div className={classes.tableCon} {...props} elevation={0} />
                        }}

                        localization={{
                            body: {
                                emptyDataSourceMessage: 'Tidak Ada Data',
                                addTooltip: 'Tambah',
                                editTooltip: 'Ubah',
                                deleteTooltip: 'Hapus',
                                editRow: {
                                    deleteText: 'Anda Yakin Akan Menghapus Data Ini ?',
                                    cancelTooltip: 'Batal',
                                    saveTooltip: 'Ya'
                                }
                            },
                            toolbar: {
                                searchTooltip: 'Cari',
                                searchPlaceholder: 'Cari Data'
                            },
                            header: {
                                actions: 'Tindakan'
                            },
                            pagination: {
                                labelRowsSelect: 'Baris',
                                labelDisplayedRows: ' {from}-{to} Dari {count} Baris',
                                firstTooltip: 'Halaman Pertama',
                                previousTooltip: 'Halaman Sebelumnya',
                                nextTooltip: 'Halaman Selanjutnya',
                                lastTooltip: 'Halaman Terakhir'
                            }
                        }}
                    />

                </div>
            </div>
            <div className={classes.botnav} >
                <BottomNavigation />
            </div>
        </div>
    )
}

export default Data