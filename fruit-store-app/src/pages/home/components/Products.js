import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GroupedButtons from '../../../shared/GroupedButton';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    media: {
        height: 200,
        backgroundSize: 'contain',
    },
});

export default function Products(props) {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (q) => {
        setQuantity(q);
    };

    const handleClick = (e, item) => {
        if (item.unit === 'kg') {
            item = {
                ...item,
                price: item.price * item.weight * quantity,
                weight: item.weight * quantity,
                quantity,
            };
        } else {
            item = {
                ...item,
                price: item.price * quantity,
                quantity,
            };
        }

        props.handleProduct(item);
    };

    return (
        <div style={{ display: 'flex', flex: '1' }}>
            {props.items.map((product) => {
                return (
                    product.type !== 'Basket' && (
                        <div style={{ flex: '1', margin: '0px 5px 0px' }}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.image_url}
                                        title='Contemplative Reptile'
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant='p'
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                            }}>
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='textSecondary'
                                            component='p'
                                            style={{
                                                marginTop: '15px',
                                                color: '#000',
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                            }}>
                                            {`${product.price} per ${product.unit}`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <div>
                                            <GroupedButtons
                                                handleQuantity={handleQuantity}
                                                limit={product.in_stock}
                                            />
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <Button
                                                data-id='img'
                                                style={{
                                                    color: '#fff',
                                                    backgroundColor: '#3F51B5',
                                                }}
                                                onClick={(e) =>
                                                    handleClick(e, product)
                                                }>
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                    )
                );
            })}
        </div>
    );
}
