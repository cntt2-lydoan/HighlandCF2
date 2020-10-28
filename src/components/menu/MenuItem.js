import React, { Component } from 'react'
import classes from './Menu.css';
import { NavLink } from 'react-router-dom';
export default class MenuItem extends Component {
    render() {
        return (
            <div className="content-TD">
                <div className="imageTD col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <a>
                        <img src={this.props.anhCate} alt="" />
                    </a>
                </div>
                <div className="textTD col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="textTD-margin">
                        <h1>
                            <a className="textTD-title">
                                {this.props.nameCate}
                            </a>
                        </h1>
                    <span style={{ color: '#faebd7' }}>{this.props.description}</span>
                        <div className="kptTD-container">
                            <NavLink id="kptTD" to="/categories">khám phá thêm</NavLink>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
