import React, { useEffect, useState, useContext } from 'react';

import FetchingDataService from '../../services/http';
import CarouselComponent from './components/Carousel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CenteredGrid from './components/JumbotronGrid';
import CartProducts from './components/CartProducts';
import { GlobalContext } from '../../context/GlobalProvider';

const width_proportion = '80%';
const HomeComponent = (props) => {
    const {
        cartProducts,
        apiResponse,
        addProductToCart,
        storeApiResponse,
    } = useContext(GlobalContext);
    const service = new FetchingDataService();
    useEffect(() => {
        service
            .request()
            .then((response) => {
                storeApiResponse(response.resources);
            })
            .catch((e) => {
                storeApiResponse(null);
            });
    }, []);

    const pushToCart = (arr, obj) => {
        const index = arr.findIndex((e) => e.id === obj.id);
        if (index === -1) {
            arr.push(obj);
        } else {
            arr[index] = obj;
        }
        return arr;
    };

    const handleProduct = (e) => {
        let products = pushToCart(cartProducts, e);
        addProductToCart(products);
    };

    const imageURLsAr =
        apiResponse &&
        apiResponse.data &&
        apiResponse.data.map(function (cValue, idx) {
            return cValue;
        });

    return (
        <React.Fragment>
            <div
                className='App'
                style={{ marginBottom: '20px', marginTop: '48px' }}>
                <CssBaseline />
                <Container minWidth='md'>
                    <div style={{ margin: '6% 0 10% 0', height: '25rem' }}>
                        <CenteredGrid />
                    </div>
                    <Typography
                        style={{
                            padding: '10px',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            fontFamily: 'cursive',
                        }}>
                        <h1 style={{ textDecoration: 'underline' }}>
                            Featured Products
                        </h1>
                    </Typography>

                    <div
                        style={{
                            width: width_proportion,
                            position: 'relative',
                            display: 'inline-block',
                            textAlign: 'center',
                        }}>
                        <CarouselComponent itemsJson={imageURLsAr} />
                    </div>

                    <Typography
                        style={{
                            padding: '10px',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            fontFamily: 'cursive',
                        }}>
                        <h1 style={{ textDecoration: 'underline' }}>
                            Add your favourites to the cart
                        </h1>
                    </Typography>
                    <div>
                        {apiResponse && apiResponse.data && (
                            <CartProducts
                                items={apiResponse.data}
                                handleProduct={handleProduct}
                            />
                        )}
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default HomeComponent;
