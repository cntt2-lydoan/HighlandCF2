import React, { Component } from 'react';
import classes from './Header.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="header-margin">
              <div className="header-logo col-lg-2 col-md-2 col-sm-2">
                <NavLink to="/home"><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Highlands Coffee" /></NavLink>
                {/* <a href="https://www.highlandscoffee.com.vn/vn/">n
                  <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Highlands Coffee" /></a> */}
              </div>
              <div className="header-menu-container col-lg-10 col-md-10 col-sm-10 col-10">
                <div className="header-top"> 
                  <div className="search">
                    <form>
                      <input placeholder="Từ khóa" />
                      <button className><i style={{color: '#808080'}} className="fa fa-search" aria-hidden="true" /></button>
                    </form>
                  </div>
                  <div className="language">
                    <ul>
                      <li>
                        <a href="https://www.highlandscoffee.com.vn/vn/tim-kiem.html">
                          <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg" alt="VN" /></a>
                      </li>
                      <li>
                        <a href="https://www.highlandscoffee.com.vn/en/search.html">
                          <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg" alt="EN" /></a>
                      </li>
                      <li className="menu-con">
                        <div className="d-menu-con">
                          <i style={{display: 'block', fontSize: '30px'}} className="fa fa-bars" aria-hidden="true" />
                          <span style={{fontSize: '14px'}}>Menu</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div id="myNav" className="overlay">
                      <div className="h-menu-closebtn">
                        <a href="javascript:void(0)" className="closebtn"><i className="fa fa-times" aria-hidden="true" /></a>
                      </div>
                      <div className="h-menu-con">
                        <div className="h-list-menuc">
                          <ul>
                            <li className="li-menu-con">
                              <a id="menu-con-a" className="menu-a" href="https://www.highlandscoffee.com.vn/vn/he-thong-cua-hang.html">QUÁN CÀ PHÊ</a>
                            </li>
                            <li className="li-menu-con li-menu-dr ">
                              <a className="menu-a" href="https://www.highlandscoffee.com.vn/vn/san-pham.html">THỰC ĐƠN </a>
                              <button className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                              <div className="menu-con-xt">
                                <ul>
                                  <li className="list-title-con"><a>CÀ PHÊ</a>
                                    <button className="menuxt1"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul className>
                                        <li className="menu-hover-con">
                                          <a className="h">Cà Phê Phin</a>
                                        </li>
                                        <li className="menu-hover-con">
                                          <a className="h">Cà Phê Espresso</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="list-title-con"><a >FREEZE</a>
                                    <button className="menuxt1"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul>
                                        <li className="menu-hover-c">
                                          <a className="h">Freeze Cà Phê Phin</a>
                                        </li>
                                        <li className="menu-hover-c">
                                          <a className="h">Freeze Không Cà Phê</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="list-title-con"><a >TRÀ</a>
                                    <button className="menuxt1"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul>
                                        <li className="menu-hover-c">
                                          <a className="h">Trà Sen Vàng</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Trà Thạch Đào</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Trà Thanh Đào</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Trà Thạch Vải</a></li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="list-title-con"><a>BÁNH MỲ</a>
                                    <button className="menuxt1"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul>
                                        <li className="menu-hover-c">
                                          <a className="h">Thịt Nướng</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Xíu Mại</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Chả Lụa Xá Xíu</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Gà Xé Nước Tương</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="list-title-con"><a>KHÁC</a>
                                    <button className="menuxt1"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul>
                                        <li className="menu-hover-c">
                                          <a className="h">Bánh Ngọt</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Merchandise</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Cà Phê Đóng Gói</a></li>
                                        <li className="menu-hover-c">
                                          <a className="h">Thực Đơn Giao Hàng</a></li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="li-menu-con li-menu-dr ">
                              <a className="menu-a" href="https://www.highlandscoffee.com.vn/vn/san-pham.html">TIN TỨC </a>
                              <button className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                              <div className="menu-con-xt">
                                <ul className="menu-con-xt-ul"> 
                                  <li className="list-title-con"><a>TIN TỨC &amp; SỰ KIỆN</a></li>   
                                  <li className="list-title-con"><a>TIN KHUYẾN MÃI</a></li>
                                </ul>
                              </div>
                            </li>
                            <li className="li-menu-con li-menu-dr ">
                              <a className="menu-a" href="https://www.highlandscoffee.com.vn/vn/san-pham.html">TRÁCH NHIỆM CỘNG ĐỒNG </a>
                              <button className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                              <div className="menu-con-xt">
                                <ul> 
                                  <li className="list-title-con"><a href>GIÁ TRỊ VĂN HÓA VIỆT</a>
                                    <button className="menuxt1"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul className>
                                        <li className="menu-hover-c">
                                          <a className="h">Tranh đương đại hóa đông hồ</a>
                                        </li>
                                      </ul>  
                                    </div>
                                  </li> 
                                </ul>
                                <ul>
                                  <li className="list-title-con"><a >CỘNG ĐỒNG</a>
                                    <button className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                    <div className="menu-con-xt1">
                                      <ul>
                                        <li className="menu-hover-c">
                                          <a className="h">Lớp học cho em</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="li-menu-con li-menu-dr ">
                              <a className="menu-a" href="https://www.highlandscoffee.com.vn/vn/san-pham.html">VỀ CHÚNG TÔI</a>
                              <button className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                              <div className="menu-con-xt">
                                <ul className="menu-con-xt-ul"> 
                                  <li className="list-title-con"><a>KHỞI NGUỒN </a></li>   
                                  <li className="list-title-con"><a>DỊCH VỤ KHÁCH HÀNG</a></li>
                                  <li className="list-title-con"><a>NGHỀ NGHIỆP</a></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>          
                        <div className="search-menu-con">
                          <form>
                            <input placeholder="Từ khóa" />
                            <button className><i style={{color: '#808080'}} className="fa fa-search" aria-hidden="true" /></button>
                          </form>
                        </div>
                      </div>
                    </div>

                </div>
                <div className="header-menu">
                  <ul>
                    <li className="menu">
                      <a className="menu-a" href="https://www.highlandscoffee.com.vn/vn/he-thong-cua-hang.html">QUÁN CÀ PHÊ</a>
                    </li>
                    <li className="menu">
                      <NavLink className="menu-a" to="/menu">THỰC ĐƠN</NavLink>
                      <div className="list">
                        <div className="list-margin">
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">CÀ PHÊ</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Cà Phê Phin</a>
                              </li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Cà Phê Espresso</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-menu col-lg-2">
                            <ul>
                              <li><a className="list-title">FREEZE</a></li>
                              <li className="menu-hover"> 
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Freeze Cà Phê Phin</a>
                              </li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Freeze Không Cà Phê</a>
                              </li>
                            </ul>
                          </div>
                          <div className="list-menu col-lg-2">
                            <ul>
                              <li><a className="list-title">TRÀ</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Trà Sen Vàng</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Trà Thạch Đào</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Trà Thanh Đào</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Trà Thạch Vải</a></li>
                            </ul>
                          </div>
                          <div className="list-menu col-lg-2">
                            <ul>
                              <li><a className="list-title">BÁNH MỲ</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Thịt Nướng</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Xíu Mại</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Chả Lụa Xá Xíu</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Gà Xé Nước Tương</a></li>
                            </ul>
                          </div>
                          <div className="list-menu col-lg-2">
                            <ul>
                              <li><a className="list-title">KHÁC</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Bánh Ngọt</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Merchandise</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Cà Phê Đóng Gói</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Thực Đơn Giao Hàng</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-menu1  col-lg-2">
                            <div className="phin-container">
                              <a className="list-title " style={{fontSize: '24px'}} href>Phin Sữa Đá Đậm Đà Chất Phin!29.000đ</a>
                              <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '148px', height: '96px', marginTop: '16%'}} src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu">
                      <NavLink className="menu-a" to="/news">TIN TỨC</NavLink>
                      <div className="list">
                        <div className="list-margin">
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">TIN TỨC VÀ SỰ KIỆN</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">TIN KHUYẾN MẠI</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-menu1 list-menu2 col-lg-2">
                            <div className="phin-container">
                              <a className="list-title" href style={{fontSize: '24px'}}>Tự Hào Sinh Ra Từ Đất Việt, 1999!</a>
                              <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '148px', height: '96px', marginTop: '16%'}} src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu">
                      <NavLink className="menu-a" to="/trach-nhiem-cd">TRÁCH NHIỆM CỘNG ĐỒNG</NavLink>

                      <div className="list">
                        <div className="list-margin">
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">GIÁ TRỊ VĂN HÓA VIỆT</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Đương Đại Hóa Tranh Đông Hồ </a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">CỘNG ĐỒNG</a></li>
                              <li className="menu-hover">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                                <a className="h">Lớp Học Cho Em</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-menu1 list-menu2 col-lg-2 ">
                            <div className="phin-container">
                              <a className="list-title " style={{fontSize: '24px'}} href>Đương Đại Hóa Tranh Đông Hồ</a>
                              <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '148px', height: '96px', marginTop: '16%'}} src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu">
                      <NavLink className="menu-a" to="/ve-chung-toi">VỀ CHÚNG TÔI</NavLink>
                      <div className="list">
                        <div className="list-margin">
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">KHỞI NGUỒN</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">DỊCH VỤ KHÁCH HÀNG</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-m col-lg-2">
                            <ul>
                              <li><a className="list-title">NGHỀ NGHIỆP</a></li>
                            </ul>
                          </div>
                          <div className="list-menu list-menu1 list-menu2 col-lg-2">
                            <div className="phin-container">
                              <a className="list-title " style={{fontSize: '24px'}} href>Đương Đại Hóa Tranh Đông Hồ</a>
                              <a href="https://www.highlandscoffee.com.vn/vn/phin-sua.html">
                                <img style={{width: '148px', height: '96px', marginTop: '16%'}} src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu">
                      <NavLink className="menu-a" to="/contact">LIÊN HỆ</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
          
        )
       
    }
}



