import React, { useEffect, useState } from 'react';

import Slider from 'infinite-react-carousel';
import Images from '../../../static/exportStatic';

const percent_propogation = '100%';

const Jumbotron = () => {
    return (
        <Slider autoplay autoplaySpeed={3000} duration={500} arrows={false}>
            {Images &&
                Images.map((image) => {
                    console.log(image);
                    return (
                        <div
                            style={{
                                width: percent_propogation,
                                height: percent_propogation,
                            }}>
                            <a href='#'>
                                <img
                                    alt='stack overflow'
                                    src={image.default}
                                    style={{
                                        height: percent_propogation,
                                        width: percent_propogation,
                                    }}></img>
                            </a>
                        </div>
                    );
                })}
        </Slider>
    );
};

export default Jumbotron;
