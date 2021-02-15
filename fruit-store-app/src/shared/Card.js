import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

const MediaCard = (props) => {
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
};

export default MediaCard;
