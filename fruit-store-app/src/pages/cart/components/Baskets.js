import React, { useContext, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { GlobalContext } from '../../../context/GlobalProvider';

const useStyles = makeStyles({
    media: {
        height: 200,
    },
});

export default function Baskets(props) {
    const { addBasketToCart, apiResponse } = useContext(GlobalContext);
    const [basket, setBasket] = useState('Standard basket');
    useEffect(() => {
        addBasketToCart(3.99);
    }, []);
    const handleChange = (event) => {
        setBasket(event.target.value);
        let baskets =
            apiResponse &&
            apiResponse.data &&
            apiResponse.data.filter((bask) => bask.type === 'Basket');
        for (let i = 0; i < baskets.length; i++) {
            if (baskets[i].name === event.target.value) {
                addBasketToCart(baskets[i].price);
            }
        }
    };

    return (
        <div>
            <FormControl component='fieldset' style={{ display: 'flex' }}>
                <RadioGroup
                    aria-label='basket'
                    name='basket'
                    value={basket}
                    defaultValue={basket}
                    onChange={handleChange}
                    style={{ marginTop: 5 }}>
                    {apiResponse &&
                        apiResponse.data &&
                        apiResponse.data.map((item) => {
                            if (item.type === 'Basket') {
                                return (
                                    <FormControlLabel
                                        value={item.name}
                                        key={item.id}
                                        control={<Radio key={item.id} />}
                                        key={item.id}
                                        label={
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginTop: 10,
                                                }}>
                                                <div>
                                                    <img
                                                        src={item.image_url}
                                                        width='70px'
                                                        height='70px'
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        marginLeft: 20,
                                                        fontSize: 30,
                                                    }}>{`Price: ${item.price}`}</div>
                                            </div>
                                        }
                                    />
                                );
                            }
                        })}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
