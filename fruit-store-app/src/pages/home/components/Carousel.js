import React from 'react';
import Carousel from 'react-elastic-carousel';

import MediaCard from '../../../shared/Card';

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const CarouselComponent = (props) => {
    return (
        <div>
            {props.itemsJson && (
                <Carousel breakPoints={breakpoints}>
                    {props.itemsJson.map((items, index) => {
                        return <MediaCard item={items} key={index} />;
                    })}
                </Carousel>
            )}
        </div>
    );
};

export default CarouselComponent;
