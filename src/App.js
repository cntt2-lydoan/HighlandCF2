import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Direction from './direction/Direction'
// import info from './json/data.json'
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data : [],
  //     catePro : [
  //         {
  //           cate_id : 'ca_phe',
  //           cate_name: 'Cà phê',
  //           products : []
  //         },
  //         {
  //           cate_id : 'tra',
  //           cate_name : 'Trà',
  //           products : []
  //         },
  //         {
  //           cate_id : 'thuc_uong_da_xay',
  //           cate_name : 'Thức uống đá xay',
  
  //           products : []
  //         },
  //         {
  //           cate_id : 'thuc_uong_trai_cay',
  //           cate_name : 'Thức uống trái cây',
  //           products : []
  //         },
  //         {
  //           cate_id : 'banh_snack',
  //           cate_name : 'Bánh snack',
  //           products : []
  //         },
  //         {
  //           cate_id : 'mon_noi_bat',
  //           cate_name : 'Món nổi bật',
  //           products : []
  //         }
  //     ]
  //   }
  // }
  // componentDidMount () {
  //   this.setState({
  //     data : info.data
  //   });  
  //   var proCates = this.state.catePro;
  //   this.state.catePro.map((value,key) => {
  //     let products = []; //LÂY RA cái list products mà có cate=...
  //     info.data.map((val,key)=>{
  //       if(val.product_category_id === value.cate_id){
  //         products.push(val);
  //       }
  //     }) 
  //     proCates[key].products= products; // ni để push cái list product vô cái mảng chứa đối tượng của cate á 
  //   })
  //   this.setState({
  //     catePro: proCates
  //   });
  // }
  render() {
    return (
      <BrowserRouter>
        <Direction/>
      </BrowserRouter>
    )
  }
}
