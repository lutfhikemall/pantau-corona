import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    menu: {
        color: 'black',
        display: 'flex',
        flex: 1,
        position: 'absolute',
        right: 16,
    },
    title1: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        padding: 10,
        userSelect: 'none',
        cursor: 'pointer',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#fafafa',
        },
        '@media(min-width: 300px)': {
            display: 'none'
        },
        '@media(min-width: 400px)': {
            display: 'none'
        },
        '@media(min-width: 500px)': {
            display: 'block'
        },
        '@media(min-width: 600px)': {
            display: 'block'
        },
        '@media(min-width: 700px)': {
            display: 'block'
        },
    },
    appbar: {
        backgroundColor: '#ffffff',
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
            paddingLeft: 84,
            paddingRight: 84,
        },
    },
    iconBtn: {
        '@media(min-width: 300px)': {
            padding: 0
        },
        '@media(min-width: 400px)': {
            padding: 12
        },
        '@media(min-width: 500px)': {
            padding: 12
        },
        '@media(min-width: 600px)': {
            padding: 12
        },
        '@media(min-width: 700px)': {
            padding: 12
        },
    },
    btn: {
        marginLeft: 10
    },
}))

export default useStyles