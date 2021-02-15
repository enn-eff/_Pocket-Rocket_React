import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Jumbotron from './JumbotronSlider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const padding_custom = '0 ';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    textContainer: {
        bottom: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
}));

const CenteredGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={3}
                    className={classes.textContainer}
                    style={{
                        backgroundColor: '#f0950b',
                        padding: padding_custom,
                        height: '33.2rem',
                    }}>
                    <Typography
                        style={{
                            fontFamily: 'cursive',
                            fontSize: '20px',
                            color: 'white',
                        }}>
                        <h1>Today's Hot Deal</h1>
                    </Typography>
                    <span>
                        <p
                            style={{
                                fontSize: '24px',
                                fontFamily: 'cursive',
                            }}>
                            For More Deals
                            <Button href='#text-buttons' color='primary'>
                                <Typography
                                    style={{
                                        fontFamily: 'cursive ',
                                        fontSize: '20px',
                                        color: 'green',
                                    }}>
                                    {' '}
                                    <i>Click Me</i>
                                </Typography>
                            </Button>
                        </p>
                    </span>
                </Grid>
                <Grid
                    item
                    xs={9}
                    className={classes.textContainer}
                    style={{ padding: padding_custom }}>
                    {/* <Paper className={classes.paper}>xs=6</Paper> */}
                    <Jumbotron />
                </Grid>
            </Grid>
        </div>
    );
};

export default CenteredGrid;
