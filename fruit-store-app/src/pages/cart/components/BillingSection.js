import React from 'react';

import Card from '@material-ui/core/Card';
import Basket from './Baskets';
import TotalPrice from './TotalPrice';

const BillingSection = () => {
    return (
        <Card style={{ width: '100%', height: '100%', padding: '20px' }}>
            <Basket />
            <TotalPrice />
        </Card>
    );
};

export default BillingSection;
