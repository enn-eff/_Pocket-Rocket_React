import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalProvider';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function CartIcon() {
    const classes = useStyles();
    const { cartProducts } = useContext(GlobalContext);
    return (
        <div className={classes.root}>
            <StyledBadge
                badgeContent={cartProducts.length}
                color='secondary'
                id='fruitCart'>
                <ShoppingCartIcon />
            </StyledBadge>
        </div>
    );
}
