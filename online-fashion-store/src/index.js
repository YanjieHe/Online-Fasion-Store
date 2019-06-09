import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import './bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './Login';
import ProductDetails from "./ProductDetails";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import ProductCategory from "./ProductCategory";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/product/:productId" component={ProductDetails}/>
            <Route exact path="/shopping_cart" component={ShoppingCart}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/category" component={ProductCategory}/>
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
