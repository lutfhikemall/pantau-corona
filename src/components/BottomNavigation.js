// React
import React from 'react';

// Styles
import { makeStyles } from '@material-ui/core/styles';

// Utils
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import HelpIcon from '@material-ui/icons/Help';

// Router
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 999,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 4px 24px 0px',
    },
});

export default function SimpleBottomNavigation() {
    // 
    const classes = useStyles();
    // 
    const location = useLocation();
    // 
    return (
        <BottomNavigation
            value={location.pathname}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} component={Link} to="/" />
            <BottomNavigationAction label="Data" value="/data" icon={<TimelineIcon />} component={Link} to="/data" />
            <BottomNavigationAction label="FAQ" value="/faq" icon={<HelpIcon />} component={Link} to="/faq" />
        </BottomNavigation>
    );
}