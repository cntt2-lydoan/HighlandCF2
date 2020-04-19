import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';
import Header from './../components/header/Header';
import Home from './../components/home/Home';
import Footer from './../components/footer/Footer';
import Menu from './../components/menu/Menu';
import News from './../components/news/News';
import trachNhiemCD from './../components/trachNhiemCD/trachNhiemCD';
import VeChungToi from './../components/veChungToi/VeChungToi';
import Contact from './../components/contact/Contact';
import Categories from './../components/categories/Categories';
import Product from './../components/product/Product';
import ProductDetail from './../components/productDetail/ProductDetail';
export default class Direction extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/" component={Header}></Route>
                <Route path="/home" component={Home}></Route> */}
                <Route path="/menu" component={Menu}></Route> */}
                <Route path="/news" component={News}></Route>
                <Route path="/trach-nhiem-cd" component={trachNhiemCD}></Route>
                <Route path="/ve-chung-toi" component={VeChungToi}></Route>
                <Route path="/contact" component={Contact}></Route>
                 <Route path="/categories" component={Categories}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/product-detail" component={ProductDetail}></Route>
                <Route path="/" component={Footer}></Route>
            </Fragment>
        )
    }
}
