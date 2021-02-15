import React from 'react';
import Slider from 'infinite-react-carousel';

import Images from '../../../static/exportStatic';

const size_proportion = '100%';

const Jumbotron = () => {
    return (
        <Slider autoplay autoplaySpeed={3000} duration={500} arrows={false}>
            {Images &&
                Images.map((image) => {
                    return (
                        <div
                            style={{
                                width: size_proportion,
                                height: size_proportion,
                            }}>
                            <a href='#'>
                                <img
                                    alt='stack overflow'
                                    src={image.default}
                                    style={{
                                        height: size_proportion,
                                        width: size_proportion,
                                    }}></img>
                            </a>
                        </div>
                    );
                })}
        </Slider>
    );
};

export default Jumbotron;
