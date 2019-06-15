import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '5px',
    },
}));

function PaperSheet(props) {
    const classes = useStyles();

    return (
        <div>
            <Paper style={{marginTop: '5px'}} className={classes.root}>
                <Typography variant="h5" component="h3">
                    Momentum
                </Typography>
                {props.children}
            </Paper>
        </div>
    );
}

export default PaperSheet;