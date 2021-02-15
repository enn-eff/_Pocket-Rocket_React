// core react import
import React from 'react';

// material and component modules
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// external css imports
import './NavigationBar.css';
import CartIcon from '../../CartIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: '10vh',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='fixed' className={classes.nav}>
                <Toolbar variant='dense'>
                    <Typography variant='h6' className={classes.title}>
                        <Link to='/' className='app-bar__title'>
                            Happy Fruits
                        </Link>
                    </Typography>
                    <Link exact to='/cart' className='app-bar__title'>
                        <CartIcon />
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
