import { makeStyles } from '@material-ui/core/styles'

import contact from '../../img/contact.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        overflowX: 'hidden'
    },
    content: {
        paddingTop: 86,
        height: '100vh',
        '@media(min-width: 300px)': {
            paddingLeft: 14,
            paddingRight: 14,
        },
        '@media(min-width: 400px)': {
            paddingLeft: 14,
            paddingRight: 14,
        },
        '@media(min-width: 500px)': {
            paddingLeft: 14,
            paddingRight: 14,
        },
        '@media(min-width: 600px)': {
            paddingLeft: 14,
            paddingRight: 14,
        },
        '@media(min-width: 700px)': {
            paddingLeft: 110,
            paddingRight: 110,
        },
    },
    section: {
        display: 'flex',
        '@media(min-width: 300px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 600px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'space-between',
        },
        '@media(min-width: 700px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'space-between',
        },
        '@media(min-width: 800px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 900px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 1200px)': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    chart: {
        width: 550,
        height: 400,
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '.5rem',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        '@media(min-width: 300px)': {
            width: 310,
            height: 320,
            padding: '1rem',
            marginBottom: '2rem'
        },
        '@media(min-width: 400px)': {
            width: 360,
            height: 320,
            padding: '1rem',
            marginBottom: '2rem'
        },
        '@media(min-width: 600px)': {
            width: 550,
            height: 400,
            padding: '2.5rem',
        },
        '@media(min-width: 800px)': {
            width: 550,
            height: 400,
            padding: '2.5rem',
        },
        '@media(min-width: 900px)': {
            width: 550,
            height: 400,
            padding: '2.5rem',
        },
        '@media(min-width: 1200px)': {
            width: 520,
            height: 400,
            padding: '2rem',
            marginRight: '1rem'
        },
    },
    chart1: {
        width: 550,
        height: 'auto',
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '.5rem',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        background: `url(${contact}) no-repeat bottom right`,
        backgroundSize: '200px 250px',
        '@media(min-width: 300px)': {
            width: 310,
            padding: '1rem',
            marginBottom: '2rem',
            backgroundSize: '130px 170px',
        },
        '@media(min-width: 400px)': {
            width: 360,
            padding: '1rem',
            marginBottom: '2rem',
            backgroundSize: '180px 220px',
        },
        '@media(min-width: 600px)': {
            width: 550,
            padding: '2.5rem',
            backgroundSize: '200px 250px',
        },
        '@media(min-width: 800px)': {
            width: 550,
            padding: '2.5rem',
            backgroundSize: '200px 250px',
        },
        '@media(min-width: 900px)': {
            width: 550,
            padding: '2.5rem',
            backgroundSize: '200px 250px',
        },
        '@media(min-width: 1200px)': {
            width: 520,
            padding: '3rem',
            backgroundSize: '200px 250px',
            marginLeft: '1rem'
        },
    },
    boxTitle: {
        marginBottom: 20
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        fontWeight: '400',
        fontSize: 12,
        color: '#95a5a6'
    },
    cardInfo: {
        display: 'grid', 
        alignItems: 'center', 
        height: 250, 
        width: 200,
    },
    card: {
        width: 310,
        maxHeight: 500,
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '.5rem',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        marginBottom: '4rem',
        margin: 'auto',
        overflowY: 'auto',
        '@media(min-width: 300px)': {
            display: 'block'
        },
        '@media(min-width: 400px)': {
            display: 'block'
        },
        '@media(min-width: 600px)': {
            display: 'none'
        },
        '@media(min-width: 800px)': {
            display: 'none'
        },
        '@media(min-width: 900px)': {
            display: 'none'
        },
        '@media(min-width: 1200px)': {
            display: 'none'
        },
    },
    cardTitle: {
        marginBottom: '1rem',
        fontWeight: '600',
        fontSize: 20
    },
    cardList: {
        height: 150,
        backgroundColor: 'white',
        borderRadius: '.5rem',
        border: '1px solid #a9abac',
        // boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        marginBottom: '1rem',
        padding: '.5rem'
    },
    p1: {
        color: '#a9abac',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        marginLeft: 10,
    },
    wrapper: {
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        textAlign: 'center',
    },
    positif: {
        color: '#fc7303',
        fontWeight: '600',
        fontSize: 22,
    },
    sembuh: {
        color: '#399f4f',
        fontWeight: '600',
        fontSize: 22
    },
    meninggal: {
        color: '#e62120',
        fontWeight: '600',
        fontSize: 22
    },
    table: {
        marginBottom: '4rem',
        '@media(min-width: 300px)': {
            display: 'none'
        },
        '@media(min-width: 400px)': {
            display: 'none'
        },
        '@media(min-width: 600px)': {
            display: 'block'
        },
        '@media(min-width: 800px)': {
            display: 'block'
        },
        '@media(min-width: 900px)': {
            display: 'block'
        },
        '@media(min-width: 1200px)': {
            display: 'block'
        },
    },
    tableCon: {
        backgroundColor: 'white',
        borderRadius: '.5rem',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
    },
    tablePosi: {
        color: '#fc7303',
        fontWeight: '600',
        fontSize: 17,
    },
    tableSemb: {
        color: '#399f4f',
        fontWeight: '600',
        fontSize: 17
    },
    tableMeni: {
        color: '#e62120',
        fontWeight: '600',
        fontSize: 17
    },
    tableOran: {
        color: '#a9abac',
        fontSize: 15,
        fontWeight: 400,
        marginLeft: 5,
        '@media(min-width: 600px)': {
            display: 'none'
        },
        '@media(min-width: 800px)': {
            display: 'inline'
        },
        '@media(min-width: 900px)': {
            display: 'inline'
        },
        '@media(min-width: 1200px)': {
            display: 'inline'
        },
    },
    tableProv: {
        color: '#5e5e5e',
        fontWeight: '550',
        fontSize: 17
    },
    p2: {
        color: '#a9abac',
    },
    p3: {
        color: '#a9abac',
    },
    p4: {
        color: '#a9abac',
    },
    botnav: {
        display: 'none',
        '@media(min-width: 300px)': {
            display: 'block',
        },
        '@media(min-width: 400px)': {
            display: 'block',
        },
        '@media(min-width: 600px)': {
            display: 'none',
        },
        '@media(min-width: 768px)': {
            display: 'none',
        },
        '@media(min-width: 800px)': {
            display: 'none',
        },
        '@media(min-width: 900px)': {
            display: 'none',
        },
        '@media(min-width: 1200px)': {
            display: 'none',
        },
    }
}))

export default useStyles