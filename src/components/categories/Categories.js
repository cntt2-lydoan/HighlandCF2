import React, { Component } from 'react';
import classes from './Categories.css';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
export default class Categories extends Component {
    render() {
        const settings3 = {
            dots: true,
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
        return (
            <div className="content" style={{marginTop: '71px'}}>
                <div className="contenCF" style={{backgroundColor: '#FBEDD7'}}>
                    <div className="box-sp">
                    <div className="sp-title">
                        <h2>cà phê phin</h2>
                    </div>
                    <div className="sp">
                        <div className="sp-left col-lg-8">                    
                        <div className="sp-info">                               
                            <div className="sp-image">
                                <NavLink to="/product">
                                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD-inside.jpg" alt="" />
                                </NavLink>
                            </div>
                            <p>Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, 
                            là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê
                            rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin', 
                            cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. 
                            Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands 
                            Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người Việt.</p>
                            
                            <NavLink id="kptCF" to="/product">Xem sản phẩm</NavLink>

                        </div>
                       
                            {/* <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kptCF" target="_blank">xem sản phẩm</a> */}
               
                        </div>
                        <div className="sp-right col-lg-4">
                        <div className="sp-info-r">
                            <div className="sp-right-img">
                                <NavLink to="/product">
                                    <img style={{width: '150px'}} src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png" alt="Phin Sữa Đá" />
                                </NavLink>
                            </div>
                            <div className="sp-right-text">
                            <h3><a>Phin sữa đá</a></h3>
                            <div className="des">Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối ,...</div>
                            </div>
                        </div>
                        <div className="sp-info-r">
                            <div className="sp-right-img">
                            <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '150px'}} src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png" alt="Phin Sữa Đá" />
                            </a>
                            </div>
                            <div className="sp-right-text">
                            <h3><a>Phin sữa đá</a></h3>
                            <div className="des">Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối...</div>
                            </div>
                        </div>
                        <div className="sp-info-r">
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="box-sp">
                    <div className="sp-title">
                        <h2>cà phê espresso</h2>
                    </div>
                    <div className="sp">
                        <div className="sp-left col-lg-8  ">                    
                        <div className="sp-info">                               
                            <div className="sp-image">
                            <a href="https://www.highlandscoffee.com.vn/vn/ca-phe-truyen-thong.html"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/menu-ESPRESSO-inside-2VN.jpg" style={{width: '100%'}} alt="" /></a>
                            </div>
                            <p>Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. 
                            Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu
                            giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng pha chế điêu luyện
                            từ các Barista của chúng tôi.</p>                           
                        </div>
                        <div className="captionTD" style={{top: '237%', right: '10%', marginBottom: '5%'}}> 
                            <NavLink id="kptCF" to="/product">xem sản phẩm </NavLink>
                        </div> 
                        </div>
                        <div className="sp-right col-lg-4 ">
                        <div className="sp-info-r">
                            <div className="sp-right-img">
                            <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '150px'}} src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png" alt="Latte" />
                            </a>
                            </div>
                            <div className="sp-right-text">
                            <h3><a>Latte</a></h3>
                            <div className="des">Ly cà phê sữa ngọt ngào đến khó quên! Với một chút nhẹ nhàng hơn so với Cappuccino,...</div>
                            </div>
                        </div>
                        <div className="sp-info-r" style={{marginTop: '3%'}}>
                            <div className="sp-right-img">
                            <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '150px'}} src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_CAPPUCINO.png"  alt="Cappuccino" />
                            </a>
                            </div>
                            <div className="sp-right-text">
                            <h3><a>Cappuccino</a></h3>
                            <div className="des">Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte,...</div>
                            </div>
                        </div>
                        <div className="sp-info-r">
                        </div>
                        </div>
                    </div>
                    </div> 
                </div>
                <div className="slider-product owl-carousel owl-theme">
                    <Slider {...settings3}>
                        <div className=" item s-product-mg">
                            <div className="s-product-image">
                                <a href><img src="https://highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" alt="" /></a>
                            </div>
                            <div className="s-product-title">
                                <h2><a href>freeze</a></h2>
                            </div>
                            <div className="s-product-text">
                                Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.
                            </div>
                        </div>
                        <div className=" item s-product-mg">
                            <div className="s-product-image">
                                <a href><img src="https://highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png" alt="" /></a>
                            </div>
                            <div className="s-product-title">
                                <h2><a href>Trà</a></h2>
                            </div>
                            <div className="s-product-text">
                                Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm...
                            </div>
                        </div>
                        <div className=" item s-product-mg">
                            <div className="s-product-image">
                                <a href><img src="https://highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png" alt="" /></a>
                            </div>
                            <div className="s-product-title">
                                <h2><a href>Bánh mỳ</a></h2>
                            </div>
                            <div className="s-product-text">
                                Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa...
                            </div>
                        </div>            
                        <div className=" item s-product-mg" style={{marginLeft: '3%'}}>
                            <div className="s-product-image">
                                <a href><img src="https://highlandscoffee.com.vn/vnt_upload/product/06_2018/menu-OTHERS-3.jpg" alt="" /></a>
                            </div>
                            <div className="s-product-title">
                                <h2><a href>khác</a></h2>
                            </div>
                            <div className="s-product-text">
                                Sẽ càng ngon miệng hơn khi bạn kết hợp đồ uống với những chiếc bánh ngọt thơm ngon được làm thủ công hàng ngày ngay tại bếp bánh của Highlands...
                            </div>
                        </div>
                    </Slider>
                    
                </div>
                </div>

        )
    }
}
