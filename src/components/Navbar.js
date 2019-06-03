import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {SIGN_IN_ENDPOINT, SIGN_OUT_ENDPOINT} from "../constants";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Navbar(props) {
    const {
        REACT_APP_DEV_MODE,
        REACT_APP_DEV_SERVER_ENDPOINT,
        REACT_APP_PROD_SERVER_ENDPOINT
    } = process.env;
    const dev_mode = JSON.stringify(REACT_APP_DEV_MODE) === JSON.stringify("true");

    const url = dev_mode ? REACT_APP_DEV_SERVER_ENDPOINT: REACT_APP_PROD_SERVER_ENDPOINT;
    console.log(`url: ${url}`);
    // const { classes, url, signedIn } = props;
    const { classes, signedIn } = props;
    const endPoint = signedIn ? SIGN_OUT_ENDPOINT : SIGN_IN_ENDPOINT;
    const label = signedIn ? "Sign Out" : "Sign In";

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        TickerAlert
                    </Typography>
                    <a style={{color: "white"}} href={url + endPoint}>
                        <Button color="inherit">{label}</Button>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);