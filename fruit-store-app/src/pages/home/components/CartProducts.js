import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Products from './Products';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
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
