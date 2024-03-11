import { makeStyles } from '@material-ui/core/styles';
import char1 from '../../img/char1.png';
import char2 from '../../img/char2.png';
import char3 from '../../img/char3.png';
import world from '../../img/world.png';
import Banner from '../../img/banner.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
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
    card: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '.5rem',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        background: `url(${Banner}) no-repeat center center `,
        backgroundSize: 'cover',
        '@media(min-width: 300px)': {
            height: 230,
        },
        '@media(min-width: 400px)': {
            height: 230,
        },
        '@media(min-width: 500px)': {
            height: 350,
        },
        '@media(min-width: 600px)': {
            height: 350,
        },
        '@media(min-width: 768px)': {
            height: 350,
        },
        '@media(min-width: 800px)': {
            height: 350,
        },
        '@media(min-width: 900px)': {
            height: 350,
        },
        '@media(min-width: 1200px)': {
            height: 350,
        },
    },
    sectionCard: {
        paddingTop: 30,
        width: '100%',
        '@media(max-width: 600px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 600px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 768px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 992px)': {
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
        },
        '@media(min-width: 1200px)': {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    card1: {
        height: 132,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '.5rem',
        textAlign: 'left',
        backgroundColor: '#fcdfe0',
        border: '2px solid #fab1a0',
        background: `url(${char1}) no-repeat top right`,
        backgroundSize: '150px 170px',
        '@media(max-width: 600px)': {
            width: '100%',
            marginRight: '5rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            marginRight: '8rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            marginRight: '12rem',
        },
        '@media(min-width: 500px)': {
            width: '100%',
            marginRight: '18rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
            marginRight: '25rem',
        },
        '@media(min-width: 768px)': {
            width: '100%',
            marginRight: '23rem',
        },
        '@media(min-width: 800px)': {
            width: '100%',
            marginRight: '30rem',
        },
        '@media(min-width: 900px)': {
            width: '100%',
            marginRight: '39rem',
        },
        '@media(min-width: 1200px)': {
            width: 384,
            marginRight: '2rem',
        },
    },
    cardw1: {
        height: 132,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '.5rem',
        textAlign: 'left',
        backgroundColor: '#fcdfe0',
        border: '2px solid #fab1a0',
        background: `url(${char1}) no-repeat top right, url(${world}) no-repeat top left`,
        backgroundSize: '150px 170px, cover',
        '@media(max-width: 600px)': {
            width: '100%',
            marginRight: '5rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            marginRight: '8rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            marginRight: '12rem',
        },
        '@media(min-width: 500px)': {
            width: '100%',
            marginRight: '18rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
            marginRight: '25rem',
        },
        '@media(min-width: 768px)': {
            width: '100%',
            marginRight: '23rem',
        },
        '@media(min-width: 800px)': {
            width: '100%',
            marginRight: '30rem',
        },
        '@media(min-width: 900px)': {
            width: '100%',
            marginRight: '39rem',
        },
        '@media(min-width: 1200px)': {
            width: 384,
            marginRight: '2rem',
        },
    },
    card2: {
        height: 132,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
        marginBottom: '2rem',
        marginRight: '2rem',
        borderRadius: '.5rem',
        textAlign: 'left',
        backgroundColor: '#d3eee3',
        border: '2px solid #81ecec',
        background: `url(${char2}) no-repeat top right`,
        backgroundSize: '150px 170px',
        '@media(max-width: 600px)': {
            width: '100%',
            marginRight: '5rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            marginRight: '2rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            marginRight: '8rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
            marginRight: '25rem',
        },
        '@media(min-width: 768px)': {
            width: '100%',
            marginRight: '19.5rem',
        },
        '@media(min-width: 800px)': {
            width: '100%',
            marginRight: '25.5rem',
        },
        '@media(min-width: 900px)': {
            width: '100%',
            marginRight: '32rem',
        },
        '@media(min-width: 1200px)': {
            width: 384,
            marginRight: '2rem',
        },
    },
    cardw2: {
        height: 132,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
        marginBottom: '2rem',
        marginRight: '2rem',
        borderRadius: '.5rem',
        textAlign: 'left',
        backgroundColor: '#d3eee3',
        border: '2px solid #81ecec',
        background: `url(${char2}) no-repeat top right, url(${world}) no-repeat top left`,
        backgroundSize: '150px 170px, cover',
        '@media(max-width: 600px)': {
            width: '100%',
            marginRight: '5rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            marginRight: '2rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            marginRight: '8rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
            marginRight: '25rem',
        },
        '@media(min-width: 768px)': {
            width: '100%',
            marginRight: '19.5rem',
        },
        '@media(min-width: 800px)': {
            width: '100%',
            marginRight: '25.5rem',
        },
        '@media(min-width: 900px)': {
            width: '100%',
            marginRight: '32rem',
        },
        '@media(min-width: 1200px)': {
            width: 384,
            marginRight: '2rem',
        },
    },
    card3: {
        height: 132,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '.5rem',
        textAlign: 'left',
        backgroundColor: '#fbeadf',
        border: '2px solid #fab1a0',
        background: `url(${char3}) no-repeat top right`,
        backgroundSize: '150px 170px',
        '@media(max-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 300px)': {
            width: '100%',
        },
        '@media(min-width: 400px)': {
            width: '100%',
        },
        '@media(min-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 768px)': {
            width: '100%',
        },
        '@media(min-width: 800px)': {
            width: '100%',
        },
        '@media(min-width: 900px)': {
            width: '100%',
        },
        '@media(min-width: 1200px)': {
            width: 384,
        },
    },
    cardw3: {
        height: 132,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '1rem',
        marginBottom: '2rem',
        borderRadius: '.5rem',
        textAlign: 'left',
        backgroundColor: '#fbeadf',
        border: '2px solid #fab1a0',
        background: `url(${char3}) no-repeat top right, url(${world}) no-repeat top left`,
        backgroundSize: '150px 170px, cover',
        '@media(max-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 300px)': {
            width: '100%',
        },
        '@media(min-width: 400px)': {
            width: '100%',
        },
        '@media(min-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 768px)': {
            width: '100%',
        },
        '@media(min-width: 800px)': {
            width: '100%',
        },
        '@media(min-width: 900px)': {
            width: '100%',
        },
        '@media(min-width: 1200px)': {
            width: 384,
        },
    },
    info: {
        width: 560, 
        height: 120, 
        backgroundColor: '#fc7303',
        marginBottom: '1rem', 
        marginRight: '2rem',
        borderRadius: '.4rem',
        textAlign: 'left',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '2rem',
        cursor: 'pointer',
        '@media(max-width: 600px)': {
            width: '100%',
            padding: '2rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 768px)': {
            width: '100%',
        },
        '@media(min-width: 800px)': {
            width: '100%',
        },
        '@media(min-width: 900px)': {
            width: '100%',
        },
        '@media(min-width: 1200px)': {
            width: 560,
        },
    },
    info1: {
        width: 560, 
        height: 120, 
        backgroundColor: '#d43f8d',
        marginBottom: '1rem', 
        borderRadius: '.4rem',
        textAlign: 'left',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '2rem',
        cursor: 'pointer',
        '@media(max-width: 600px)': {
            width: '100%',
            padding: '2rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 768px)': {
            width: '100%',
        },
        '@media(min-width: 800px)': {
            width: '100%',
        },
        '@media(min-width: 900px)': {
            width: '100%',
        },
        '@media(min-width: 1200px)': {
            width: 560,
        },
    },
    info2: {
        width: 560, 
        height: 120, 
        backgroundColor: '#09ad95', 
        marginRight: '2rem',
        marginBottom: '1rem', 
        borderRadius: '.4rem',
        textAlign: 'left',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '2rem',
        cursor: 'pointer',
        '@media(max-width: 600px)': {
            width: '100%',
            padding: '2rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 768px)': {
            width: '100%',
        },
        '@media(min-width: 800px)': {
            width: '100%',
        },
        '@media(min-width: 900px)': {
            width: '100%',
        },
        '@media(min-width: 1200px)': {
            width: 560,
        },
    },
    info3: {
        width: 560, 
        height: 120, 
        backgroundColor: '#f82649',
        borderRadius: '.4rem',
        textAlign: 'left',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
        padding: '2rem',
        cursor: 'pointer',
        '@media(max-width: 600px)': {
            width: '100%',
            padding: '2rem',
        },
        '@media(min-width: 300px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 400px)': {
            width: '100%',
            padding: '1rem',
        },
        '@media(min-width: 600px)': {
            width: '100%',
        },
        '@media(min-width: 768px)': {
            width: 525,
        },
        '@media(min-width: 800px)': {
            width: '100%',
        },
        '@media(min-width: 900px)': {
            width: 525,
        },
        '@media(min-width: 1200px)': {
            width: 560,
        },
    },
    txt: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16
    },
    sub: {
        color: 'white',
        marginTop: 15,
        fontSize: 14
    },
    section: {
        paddingTop: 30
    },
    text: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: '700'
    },
    text1: {
        paddingTop: 10,
        color: '#a9abac',
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '400'
    },
    tag: {
        color: '#a9abac',
        fontWeight: 'bold'
    },
    tagw: {
        color: '#a9abac',
        fontWeight: 'bold',
        textShadow: '0px 0px 5px #ecf0f1, 2px 2px 5px #fafafa'
    },
    country: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    number: {
        fontSize: 24,
        fontWeight: 'bold',
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

export default useStyles;