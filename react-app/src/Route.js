import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItem from './components/ProductItem';
import NavBar from './components/NavBar';

const Routes = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route  path="/product/:id" component={ProductItem} />
                    <Route path="*" component={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </div>
    );
}
export default Routes;