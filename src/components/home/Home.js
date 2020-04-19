import React, { Component } from 'react';
import classes from './Home.css';
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom';
export default class Home extends Component {
    render() {
        const settings1 = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settings2= {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        };
        return (
            <div className="content " style={{marginTop: '48px'}}>
                <div classes="slider-container">
                   <Slider {...settings1}>
                        <div className=" item ">   
                            <a href="https://www.youtube.com/watch?v=MRxa1wTZEDs">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" style={{width: '100%'}} />                     
                            </a>                
                        </div>
                        <div className=" item ">   
                            <a href="https://www.highlandscoffee.com.vn/vn/highlands-coffee-20-nam-gan-ket-niem-tu-hao-dat-viet.html">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HL20_2000x639.jpg" style={{width: '100%'}} />                    
                            </a>                  
                        </div>
                        <div className=" item ">
                            <a href="https://highlandscoffee.com.vn/tuhaodatviet/">
                            <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/VIET.Brand_Campaign_WEBBANNER.jpg" style={{width: '100%'}} />
                            </a>
                        </div>
                
                   </Slider>
                </div>
 
                <div className="content1">
                    <div className="img ">
                    <a href="https://www.highlandscoffee.com.vn/vn/ca-phe.html">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg" alt="" />
                    </a>
                    </div>
                    <div className="caption">
                        <NavLink id="kpt" to="/categories">khám phá thêm</NavLink>
                    </div>
                </div>
                <div className="content1">
                    <div className="img">
                    <a href="https://www.highlandscoffee.com.vn/vn/freeze.html">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Product_banner_confirmed.jpg" alt="" />
                    </a>
                    </div>
                    <div className="caption" style={{top: '75%', left: '25%'}}>
                    <a href="https://www.highlandscoffee.com.vn/vn/freeze.html" id="kpt2" target="_blank">khám phá thêm </a>
                    </div>              
                </div>
                <div className="content1">
                    <div className="img">
                    <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" alt="" />
                    </a>
                    </div>
                    <div className="caption" style={{top: '78%', left: '57%'}}>
                    <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kpt3" target="_blank">khám phá thêm </a>
                    </div>              
                </div>
                <div className="content-bottom">
                <div className="bottom-left col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="bl-margin">
                        <div className="left-tren">
                            <h3 className="blt">Quán mới</h3>
                        </div>
                        <div className="left-duoi">
                            <Slider {...settings2}> 
                                <div className="slider-address item">
                                    <div className="tittle-address add-hover">
                                        <h4><a>hàm cá mập</a></h4>
                                    </div>
                                    <div className="address  add-hover">
                                        <h5><a>Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội</a></h5>
                                    </div>
                                    <div className="address add-hover">
                                        <h5>tìm đường <i className="fa fa-angle-right" aria-hidden="true" /></h5> 
                                    </div>      
                                </div>      
                                <div className="slider-address item">
                                    <div className="tittle-address add-hover">
                                        <h4><a>721 Huỳnh Tấn Phát</a></h4>
                                    </div>
                                    <div className="address  add-hover">
                                        <h5><a>721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh</a></h5>
                                    </div>
                                    <div className="address add-hover">
                                        <h5>tìm đường <i className="fa fa-angle-right" aria-hidden="true" /></h5> 
                                    </div>      
                                </div> 
                                <div className="slider-address item">
                                    <div className="tittle-address add-hover">
                                        <h4><a>Sân bay quốc tế Đà Nẵng</a></h4>
                                    </div>
                                    <div className="address  add-hover">
                                        <h5><a>Khu vực check-in ga Quốc Tế, Sân bay Đà Nẵng, 62 Trần Quốc Toản, quận Hải Châu, Tp. Đà Nẵng</a></h5>
                                    </div>
                                    <div className="address add-hover">
                                        <h5>tìm đường <i className="fa fa-angle-right" aria-hidden="true" /></h5>                    
                                    </div>      
                                </div>  
                            </Slider>
                        </div>
                </div>  
                </div>
                <div className="bottom-right col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="br-margin">
                    <div className="right-tren">
                    <h3 className="brt">
                        Tin mới nhất
                    </h3>
                    <a href="https://highlandscoffee.com.vn/vn/tin-tuc.html">
                        <span><u>Xem toàn bộ</u></span>
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                    </div>
                    <div className="right-duoi">
                    <div className="right-list ">
                        <div className="r-list-image col-lg-3 col-md-3 col-sm-3 col-3">
                        <a><img style={{width: '100%'}} src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/tra-sen-vang-moi.png" alt="" /></a>
                        </div>
                        <div className="r-list-content col-lg-9 col-md-9 col-sm-9 col-9">
                        <div className="rlc-title">
                            <h3> <a href> UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG</a></h3>
                        </div>
                        <div className="rlc-date">
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span style={{fontSize: '13px', lineHeight: '21px'}}>04/12/2019</span>
                        </div>
                        </div>
                    </div>
                    <div className="right-list">
                        <div className="r-list-image col-lg-3 col-md-3 col-sm-3 col-3">
                        <a><img style={{width: '100%'}} src="https://highlandscoffee.com.vn/vnt_upload/news/10_2019/hco-7598-20-years-concert-web-470x314_1.jpg" alt="" /></a>
                        </div>
                        <div className="r-list-content col-lg-9 col-md-9 col-sm-9 col-9">
                        <div className="rlc-title">
                            <h3> <a href> ĐẠI TIỆC ÂM NHẠC: HIGHLANDS COFFEE 20 NĂM - GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT</a></h3>
                        </div>
                        <div className="rlc-date">
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span style={{fontSize: '13px', lineHeight: '21px'}}>28/10/2019</span>
                        </div>
                        </div>
                    </div>
                    <div className="right-list">
                        <div className="r-list-image col-lg-3 col-md-3 col-sm-3 col-3">
                        <a><img style={{width: '100%'}} src="https://highlandscoffee.com.vn/vnt_upload/news/03_2020/470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.png" alt="" /></a>
                        </div>
                        <div className="r-list-content col-lg-9 col-md-9 col-sm-9 col-9">
                        <div className="rlc-title">
                            <h3> <a href> HIGHLANDS COFFEE - DỊCH VỤ GIAO HÀNG MIỄN PHÍ</a></h3>
                        </div>
                        <div className="rlc-date">
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span style={{fontSize: '13px', lineHeight: '21px'}}>29/03/2020</span>
                        </div>
                        </div>
                    </div>
                    <div className="right-input">
                        <form>
                        <input type="text" placeholder="Nhập email của bạn để nhận thông tin..." />
                        <button>
                            <i className="fa fa-paper-plane-o" aria-hidden="true" />
                            <span>Gửi</span>
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
}
