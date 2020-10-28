import React, { Component } from 'react';
import classes from './Menu.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import MenuItem from './MenuItem';
import { execGET } from './../../execGet';


export default class Menu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
            var data = [];
            axios.get('\https://api.thecoffeehouse.com/api/v2/menu')
                .then( (response) => {
                //    console.log( response.data.data);
                   data = response.data.data;
                //    console.log(data);
                   this.setState({
                    data:  data
                });
    
                })
                .catch(function (error) {
                    console.log(error);
                });
    
        }


    render() {
        console.log(this.state.data);
        const item = this.state.data.map((value, key) => {
            return (
                <div className="content-TD">
                    <div className="imageTD col-lg-6 col-md-12 col-sm-12 col-12 ">
                        <a>
                            <img src={value.image} alt="" />
                        </a>
                    </div>
                    <div className="textTD col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="textTD-margin">
                            <h1>
                                <a className="textTD-title">
                                    {value.product_name}
                                </a>
                            </h1>
                            <span style={{ color: '#faebd7' }}>{value.description}</span>
                            <div className="kptTD-container">
                                <NavLink id="kptTD" to="/categories">khám phá thêm</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (

            <div className="content" style={{ marginTop: '101px' }}>
                {/* {                   
                this.state.catePro.map((item,key)=>{
                    return(<MenuItem key={key}
                    id={item.cate_id}
                    anhCate={item.image}
                    nameCate={item.cate_name}
                    description = {item.description}
                    >

                    </MenuItem>)
                })
                
                    
                } */}
                {item}


            </div>

        )
    }
}
