import { makeStyles } from '@material-ui/core/styles'

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
    title: {
        fontWeight: '600'
    },
    heading: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left'
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