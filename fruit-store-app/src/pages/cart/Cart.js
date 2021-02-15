import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from '@material-ui/core';

import BillingSection from './components/BillingSection';
import { GlobalContext } from '../../context/GlobalProvider';
import CartList from './components/CartList';

const Cart = () => {
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
                    margin: '8% 10%',
                }}>
                <div style={{ flexGrow: '3', margin: '0 4%' }}>
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
