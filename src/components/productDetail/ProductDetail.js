import React, { Component } from 'react';
import classes from './ProductDetail.css';
import Slider from 'react-slick';
export default class ProductDetail extends Component {
    render() {
        const settings6 = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed :300,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                    }
                } ]
        }
        return (
            <div className="proDetail " style={{marginTop: '90px'}}>
            <div className="proDT-mg">
                <div className="proDetail-title">
                <h1>Bạc xỉu đá</h1>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="proDetail-content-t">
                    <div className="t-image col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="t-image-pad">
                        <div className="img">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/Bac_Xiu_Da.png" alt="Bạc Xỉu Đá" />
                        </div>
                    </div>
                    </div>
                    <div className="t-nd col-lg-6 col-md-6 col-sm-12 col-12">
                    <p>Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ “đô"
                        cà phê nhưng vẫn thơm ngon, chất lừ không kém!</p>
                    <div>
                        <a href="tel:19001755">
                        <img src="https://highlandscoffee.com.vn/vnt_upload/product/04_2020/65-dat-mua-kmk.png" style={{width: '100%'}} /></a>
                    </div>
                    <div className="productBox">
                        <div className="title-box">Size :</div>
                        <div className="content-box">
                        <div className="size">
                            <ul>
                            <li className="current">
                                <a href>S</a>
                            </li>
                            <li>
                                <a href>M</a>
                            </li>
                            <li>
                                <a href>L</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="productPrice">
                        Giá : <strong id="ext_price">Call</strong>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="proDetail-content-d">
                    <div  className="slideshow-container owl-carousel owl-theme">
                        <Slider {...settings6}>
                            <div className=" item  pro-slider-mg">
                                <div className="slider-image">
                                <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CARAMEL-MACCHIATO.png" alt="Phin Sữa Nóng" />
                                </a>
                                </div>
                                <div className="slider-title">
                                <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Caramel
                                    Macchiato</a></h3>
                                </div>
                                <div className="slider-price">
                                Giá:<strong>59,000 VNĐ</strong>
                                </div>
                            </div>
                            <div className="item pro-slider-mg ">
                                <div className="slider-image">
                                <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_MOCHA.png" alt="Phin Sữa Nóng" />
                                </a>
                                </div>
                                <div className="slider-title">
                                <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Mocha
                                    Macchiato</a></h3>
                                </div>
                                <div className="slider-price">
                                Giá:<strong>59,000 VNĐ</strong>
                                </div>
                            </div>
                            <div className="item  pro-slider-mg">
                                <div className="slider-image">
                                <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png" alt="Phin Sữa Nóng" />
                                </a>
                                </div>
                                <div className="slider-title">
                                <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Latte</a></h3>
                                </div>
                                <div className="slider-price">
                                Giá:<strong>54,000 VNĐ</strong>
                                </div>
                            </div>
                            <div className="item pro-slider-mg">
                                <div className="slider-image">
                                <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_CAPPUCINO.png" alt="Phin Sữa Nóng" />
                                </a>
                                </div>
                                <div className="slider-title">
                                <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Cappuccino</a>
                                </h3>
                                </div>
                                <div className="slider-price">
                                Giá:<strong>54,000 VNĐ</strong>
                                </div>
                            </div>
                            <div className="item pro-slider-mg">
                                <div className="slider-image">
                                <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" alt="Phin Sữa Nóng" />
                                </a>
                                </div>
                                <div className="slider-title">
                                <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Americano</a></h3>
                                </div>
                                <div className="slider-price">
                                Giá:<strong>44,000 VNĐ</strong>
                                </div>
                            </div>
                            <div className="item pro-slider-mg">
                                <div className="slider-image">
                                <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_ESPRESSO.png" alt="Phin Sữa Nóng" />
                                </a>
                                </div>
                                <div className="slider-title">
                                <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Espresso</a></h3>
                                </div>
                                <div className="slider-price">
                                Giá:<strong>44,000 VNĐ</strong>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
}
