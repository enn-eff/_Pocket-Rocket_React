import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DenseAppBar from './shared/components/nav/NavigationBar';
import Cart from './pages/cart/Cart';
import { GlobalProvider } from './context/GlobalProvider';
import { BottomNavigation } from '@material-ui/core';

import HomeComponent from './pages/home/LandingPage';

import './App.css';

function App() {
    return (
        <React.Fragment>
            <GlobalProvider>
                <Router>
                    <DenseAppBar />
                    <Route exact path='/' component={HomeComponent} />
                    <Route exact path='/cart' component={Cart} />
                </Router>
            </GlobalProvider>
            <BottomNavigation className='footer'>
                <h3 style={{ color: '#fff' }}>
                    &copy; &nbsp; Copyrights Nauman Fakhar
                </h3>
            </BottomNavigation>
        </React.Fragment>
    );
}

export default App;
