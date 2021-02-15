import React, { useEffect, useState } from 'react';
import './shared/components/fontAwesomeIcons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DenseAppBar from './shared/components/nav/NavigationBar';
import Cart from './pages/cart/Cart';
import { GlobalProvider } from './context/GlobalProvider';

import './App.css';
import HomeComponent from './pages/home/LandingPage';

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
        </React.Fragment>
    );
}

export default App;
