import axios from 'axios'
import React, { Component } from 'react'

export default class productDetails extends Component {
    constructor(){
        super()
        this.state={products:[]}

    }
    render() {
    return (
      <div>
          <ul>

              {
                  this.state.products.map(product=>{
                      <li>
                          {product.name}
                      </li>
                  })
              }
          </ul>
      </div>
    )
  }
  componentDidMount(){
  
    //external interaction
    axios.get('https://justolearnapp.herokuapp.com/api/addproduct').then(response=>{
        console.log("response",response)
        this.setState({products:response.data.result})
        console.log("products",this.state.products)

    }).catch(error=>{
        console.log("error")
    })
  }
}