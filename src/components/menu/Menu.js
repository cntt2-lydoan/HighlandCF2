import React, { Component } from 'react';
import classes from './Menu.css';
import { NavLink } from 'react-router-dom';
export default class Menu extends Component {
    render() {
        return (
            <div className="content" style={{marginTop: '70px'}}>
                <div className="content-TD">
                    <div className="imageTD col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <a>
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png" alt="" />
                    </a>
                    </div>
                    <div className="textTD col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="textTD-margin">
                        <h1>
                        <a className="textTD-title">
                            cà phê
                        </a>
                        </h1>
                        <span style={{color: '#faebd7'}}>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng
                        được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo,
                        Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và
                        tinh tế.</span>
                        <div className="kptTD-container">
                            <NavLink id="kptTD" to="/categories">khám phá thêm</NavLink>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="content-TD" style={{color: '#006400', borderColor: '#006400', backgroundColor: '#f0bb7c', backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-FREEZE.jpg)'}}>
                    <div className="imageTD col-lg-6 col-md-12 col-sm-12 col-12" style={{float: 'left'}}>
                    <a>
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" alt="" />
                    </a>
                    </div>
                    <div className="textTD col-lg-6 col-md-12 col-sm-12 col-12" style={{paddingLeft: 0}}>
                    <div className="textTD-margin" style={{textAlign: 'right'}}>
                        <a className="textTD-title">
                        <h1 style={{color: '#006400'}}>freeze</h1>
                        </a>
                        <span style={{color: '#006400'}}>Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá
                        xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.</span>
                        <div className="captionTD" style={{top: '111%', right: '10%'}}>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kptTD2" target="_blank">khám phá thêm </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="content-TD" style={{color: '#ffffff', borderColor: '#ffffff', backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-TEA-bg.jpg)'}}>
                    <div className="imageTD col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png" alt="" /></a>
                    </div>
                    <div className="textTD col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="textTD-margin">
                        <a className="textTD-title ">
                        <h1 style={{marginTop: '3%'}}>trà</h1>
                        </a>
                        <div style={{marginTop: '4%'}}>
                        <span>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ
                            giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi
                            mới.</span>
                        </div>
                        <div className="captionTD " style={{top: '169%', left: '7%'}}>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kptTD3" target="_blank">khám phá thêm </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="content-TD " style={{color: '#ffffe0', borderColor: '#ffffe0', backgroundColor: '#fbedd7', backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-BANHMI-bg_2.jpg)'}}>
                    <div className="imageTD col-lg-6 col-md-12 col-sm-12 col-12" style={{float: 'left'}}>
                    <div className="imageTD-margin">
                        <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png" alt="" style={{width : '80%'}} /></a>
                    </div>
                    </div>
                    <div className="textTD col-lg-6 col-md-12 col-sm-12 col-12" style={{paddingLeft: 0}}>
                    <div className="textTD-margin " style={{textAlign: 'right'}}>
                        <a className="textTD-title">
                        <h1>bánh mỳ</h1>
                        </a>
                        <div style={{marginTop: '4%'}}>
                        <span>Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng
                            hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với
                            lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách.</span>
                        </div>
                        <div className="captionTD" style={{top: '231%', right: '10%'}}>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kptTD4" target="_blank">khám phá thêm </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
