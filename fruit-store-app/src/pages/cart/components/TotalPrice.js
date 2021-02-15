import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalProvider';

export default function TotalPrice(props) {
    const { cartProducts, cartBasket } = useContext(GlobalContext);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let price = 0;
        cartProducts.length > 0 &&
            cartProducts.every((product) => (price += product.price));
        price += cartBasket;
        setTotal(price);
    }, [cartBasket, cartProducts]);
    return (
        <div>
            <p style={{ fontSize: 30, textAlign: 'right' }}>
                Total Price: {Math.floor(total * 100) / 100}
            </p>
        </div>
    );
}
