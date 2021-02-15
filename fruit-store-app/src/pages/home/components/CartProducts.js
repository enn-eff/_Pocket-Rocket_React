import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Jumbotron from './JumbotronSlider';
// import Baskets from './Baskets';
// import CartList from './CartList';
import Products from './Products';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
}));

const CartProducts = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Products items={props.items} handleProduct={props.handleProduct} />
        </div>
    );
};

export default CartProducts;
