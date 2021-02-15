import React, { useContext } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ButtonGroup from '../../../shared/ButtonGroup';
import { GlobalContext } from '../../../context/GlobalProvider';

const CartList = (props) => {
    const { cartProducts } = useContext(GlobalContext);
    return (
        <div>
            <List component='nav' aria-label='main mailbox folders'>
                {cartProducts.map((product) => {
                    return (
                        <div>
                            <ListItem button>
                                <ListItemText
                                    primary={`${product.quantity} x ${product.name}`}
                                />
                                <ButtonGroup id={product.id} />
                            </ListItem>
                            <Divider />
                        </div>
                    );
                })}
            </List>
        </div>
    );
};

export default CartList;
