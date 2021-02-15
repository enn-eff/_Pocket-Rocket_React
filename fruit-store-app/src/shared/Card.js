import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GroupedButtons from './GroupedButton';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 5,
    },
    media: {
        height: 120,
        backgroundSize: 'contain',
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.image_url}
                    title='Contemplative Reptile'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {props.item.name}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'>
                        {props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
