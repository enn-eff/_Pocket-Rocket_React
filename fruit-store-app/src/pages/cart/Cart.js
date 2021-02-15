import React, { useContext } from 'react';

import CartList from './components/CartList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BillingSection from './components/BillingSection';
import { Link } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalProvider';

const Cart = (props) => {
    const { cartProducts } = useContext(GlobalContext);

    if (cartProducts.length === 0) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '8% 0',
                }}>
                <h1>
                    Your cart is empty. Try adding things to cart&nbsp;
                    <Link href='/'>Home Page</Link>
                </h1>
            </div>
        );
    }

    return (
        <div className='App' style={{ marginTop: 10 }}>
            <CssBaseline />
            <Container
                minWidth='md'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '8% 0',
                }}>
                <div style={{ flexGrow: '3' }}>
                    <CartList />
                </div>

                <div style={{ flexGrow: '0' }}>
                    <BillingSection />
                </div>
            </Container>
        </div>
    );
};

export default Cart;
