import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import Navbar from './components/Navbar';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/product' component={Product} />
                <Route path='/product:id' component={ProductItem} />
                <Route path='*' component={() => <h1>404 Not Found</h1>} />
            </Switch>
        </Router>
    )
}
export default Routes;