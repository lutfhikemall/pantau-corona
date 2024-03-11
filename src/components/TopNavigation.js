// React
import React, { useState } from 'react'

// Utils
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import useStyles from './style.js';
import { useHistory } from 'react-router-dom';

// Components
import Dialog from './Dialog';

function TopNavigation() {
    // 
    const classes = useStyles();
    // 
    const history = useHistory();
    // 
    const [open, setOpen] = useState(false);
    // 
    return (
        <React.Fragment>
            <AppBar className={classes.appbar} position="fixed" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Pantau Corona
                    </Typography>
                    <div className={classes.menu} >
                        <Typography onClick={() => history.push('/')} variant="h6" className={classes.title1} >
                            Home
                        </Typography>
                        <Typography onClick={() => history.push('/data')} variant="h6" className={classes.title1} >
                            Data
                        </Typography>
                        <Typography onClick={() => history.push('/faq')} variant="h6" className={classes.title1} >
                            FAQ
                        </Typography>
                        <IconButton onClick={() => setOpen(true) } classes={{ root: classes.iconBtn }} className={classes.btn} >
                            <NotificationsActiveIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Dialog 
                open={open}
                handleClose={() => setOpen(false)}
            />
        </React.Fragment>
    )
}

export default TopNavigation