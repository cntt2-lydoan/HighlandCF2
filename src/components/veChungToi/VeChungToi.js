import React, { Component } from 'react';
import classes from './VeChungToi.css';
export default class VeChungToi extends Component {
    render() {
        return (
            <div className="content" style={{marginTop: '70px'}}>
                <div className="content-VCT ">
                    <div className="image-VCT col-lg-6 col-md-12 col-sm-12 col-12 image-VTC-r">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png" style={{width: '100%',float:"left"}} alt="" />
                    </div>
                    <div className="tvct-mo col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="text-VCT">
                        <h1><a className="textVCT-title">khởi nguồn</a></h1>
                        <p style={{fontWeight: 700, color: '#424242'}}>Thương hiệu bắt nguồn từ cà phê Việt Nam</p>
                        <span>Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.</span>
                        <a href="https://www.highlandscoffee.com.vn/vn/khoi-nguon.html" id="kptVCT1" target="_blank">xem chi tiết</a>
                    </div>
                    </div>
                </div>
                <div className="content-VCT content-VCT2" style={{backgroundColor: '#BD945D'}}>
                    <div className="image-VCT2 col-lg-6 col-md-12 col-sm-12 col-12 image-VTC-l">
                    <img src="https://highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" style={{width: '100%',float:'left'}} alt="" />
                    </div>
                    <div className="tvct-mo-2 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="text-VCT">
                        <h1><a className="textVCT-title" href="https://highlandscoffee.com.vn/vn/dich-vu-khach-hang.html">DỊCH VỤ KHÁCH HÀNG</a></h1>
                        <p style={{fontWeight: 700, color: '#FFFFFF'}}>Chào mừng bạn đến với Highlands Coffee®</p>
                        <span style={{color: '#FFFFFF'}}>Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.</span>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kptVCT2" target="_blank">xem chi tiết</a>
                    </div>
                    </div>
                </div>
                <div className="content-VCT content-VCT3" style={{backgroundColor: '#8E5A2D'}}>
                    <div className="image-VCT3 col-lg-6 col-md-12 col-sm-12 col-12 image-VTC-r">
                    <a><img src="https://highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg" style={{width: '100%',float:'left'}} alt="" /></a>
                    </div>
                    <div className="tvct-mo tvct-mo-3 col-lg-6 col-md-12 col-sm-12 col-12" style={{WebkitMaskImage: '-webkit-gradient(linear, center top, 1000 top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))'}}>
                    <div className="text-VCT">
                        <h1><a className="textVCT-title">NGHỀ NGHIỆP</a></h1>
                        <p style={{fontWeight: 700, color: '#FFFFFF'}}>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</p>
                        <span style={{color: '#FFFFFF'}}>Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.</span>
                        <a href="https://www.highlandscoffee.com.vn/vn/highlands-teas.html" id="kptVCT3" target="_blank">xem chi tiết</a>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
