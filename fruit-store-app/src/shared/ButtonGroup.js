import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import { GlobalContext } from './../context/GlobalProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const GroupButtons = (props) => {
    const { removeProductFromCart } = useContext(GlobalContext);
    const classes = useStyles();

    const removeProduct = (e) => {
        removeProductFromCart(e);
    };

    return (
        <div className={classes.root}>
            <ButtonGroup
                color='primary'
                aria-label='outlined primary button group'>
                <Button
                    onClick={() => {
                        removeProduct(props.id);
                    }}>
                    Delete
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default GroupButtons;
