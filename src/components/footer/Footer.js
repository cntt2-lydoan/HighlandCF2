import React, { Component } from 'react';
import classes from './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer col-lg-12 col-md-12 col-sm-12 col-12 ">
                <ul className="footer-ul ">
                    <li>
                    <div className="buttons">
                        <a href="https://www.highlandscoffee.com.vn/vn/he-thong-cua-hang.html" className="btn-mm"> 
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span>VIEW MAP</span> 
                        </a>
                    </div>
                    </li>
                    <li className="footer-li">
                    <ul className="footer-ul-item">
                        <li className="footer-li-item">
                        <a href="#">
                            <i className="fa fa-facebook fff" aria-hidden="true" />
                        </a>
                        </li>
                        <li className="footer-li-item">
                        <a href="#">
                            <i className="fa fa-youtube fff" aria-hidden="true" />
                        </a>
                        </li>
                        <li className="footer-li-item">
                        <a href="#">
                            <i className="fa fa-instagram fff" aria-hidden="true" />
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="footer-li">
                    <span>© 2018 Highlands Coffee. All rights reserved</span>
                    </li>
                    <li className="footer-li symbol">
                    <i className="fa fa-paper-plane-o symbol-i" aria-hidden="true" />
                    <span>
                        Đăng ký để nhận bản tin
                    </span>
                    </li>
                    <li className="footer-li symbol">
                    <i className="fa fa-envelope-o symbol-i" aria-hidden="true" />
                    <span>
                        customerservice@highlandscoffee.com.vn
                    </span>
                    </li>
                </ul>
                </div>

        )
    }
}
