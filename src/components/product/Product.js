import React, { Component } from 'react';
import classes from './Product.css';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';


export default class Product extends Component {
    render() {
        const settings4={
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    arrows: false,
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
        const settings5={
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
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
            <div className="content" style={{marginTop: '90px'}}>
                <div className="contentPro">
                    <div className="contentPro-top">
                        <div className="contentPro-title">
                            <h1>cà phê phin</h1>
                        </div>
                        <div className="contentPro-info">
                            <div className="contentPro-text">
                                <p>Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn,
                                    là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt.
                                    Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại
                                    có tên là 'Phin',
                                    cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ
                                    hiện hữu.
                                    Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc.
                                    Highlands Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người Việt.</p>
                            </div>
                             <div className="slideshow-container owl-carousel owl-theme">
                                 <Slider {...settings4}>
                                 <div className="item pro-slider-mg">
                                    <div className="slider-image">
                                        <NavLink to="/product-detail"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/thumbs/270_crop_Bac_Xiu_Da.png" alt="Phin Sữa Nóng" /></NavLink>

                                         {/* <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/thumbs/270_crop_Bac_Xiu_Da.png" alt="Phin Sữa Nóng" />
                                        </a> */}
                                    </div>
                                    <div className="slider-title">
                                        <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Bạc xĩu đá</a>
                                        </h3>
                                    </div>
                                    <div className="slider-price">
                                        Giá:<strong>29,000 VNĐ</strong>
                                    </div>
                                </div>
                                <div className="item  pro-slider-mg">
                                    <div className="slider-image">
                                        <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png" alt="Phin Sữa Nóng" />
                                        </a>
                                    </div>
                                    <div className="slider-title">
                                        <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Phin sữa đá</a>
                                        </h3>
                                    </div>
                                    <div className="slider-price">
                                        Giá:<strong>29,000 VNĐ</strong>
                                    </div>
                                </div>
                                <div className="item pro-slider-mg">
                                    <div className="slider-image">
                                        <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png" alt="Phin Sữa Nóng" />
                                        </a>
                                    </div>
                                    <div className="slider-title">
                                        <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Phin đen đá</a>
                                        </h3>
                                    </div>
                                    <div className="slider-price">
                                        Giá:<strong>29,000 VNĐ</strong>
                                    </div>
                                </div>
                                <div className="item pro-slider-mg">
                                    <div className="slider-image">
                                        <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" alt="Phin Sữa Nóng" />
                                        </a>
                                    </div>
                                    <div className="slider-title">
                                        <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Phin đen nóng</a>
                                        </h3>
                                    </div>
                                    <div className="slider-price">
                                        Giá:<strong>29,000 VNĐ</strong>
                                    </div>
                                </div>
                                <div className=" item pro-slider-mg">
                                    <div className="slider-image">
                                        <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/thumbs/270_crop_PHIN-SUA-NONG.png" alt="Phin Sữa Nóng" />
                                        </a>
                                    </div>
                                    <div className="slider-title">
                                        <h3><a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">Phin sữa nóng</a>
                                        </h3>
                                    </div>
                                    <div className="slider-price">
                                        Giá:<strong>29,000 VNĐ</strong>
                                    </div>
                                </div>
                                 </Slider>
                                
                            </div>
                        </div>
                    </div>
                    <div className="contentPro-top">
                        <div className="contentPro-title">
                            <h1>Cà Phê Espresso</h1>
                        </div>
                    <div className="contentPro-info">
                        <div className="contentPro-text">
                            <p>Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso
                            của Highlands Coffee.
                            Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối
                            trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là
                            không thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi.
                            </p>
                        </div>
                        <div  className="slideshow-container owl-carousel owl-theme">
                            <Slider {...settings5}>
                                <div className=" item  pro-slider-mg">
                                    <div className="slider-image">
                                        <NavLink to="/product-detail"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CARAMEL-MACCHIATO.png" alt="Phin Sữa Nóng" /></NavLink>
                                        {/* <a href="https://www.highlandscoffee.com.vn/vn/phin-sua-non.html">
                                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CARAMEL-MACCHIATO.png" alt="Phin Sữa Nóng" />
                                        </a> */}
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
