import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../../context/GlobalProvider';

const TotalPrice = () => {
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
            <hr />
            <p style={{ fontSize: 24, textAlign: 'right' }}>
                Total Price: &euro;{Math.floor(total * 100) / 100}
            </p>
        </div>
    );
};

export default TotalPrice;
