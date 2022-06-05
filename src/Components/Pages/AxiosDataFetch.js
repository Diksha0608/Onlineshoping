import axios from 'axios'
import React, { Component } from 'react'

export default class AxiosDataFetch extends Component {
    constructor(){
        super()
        this.state={products:[]}

    }
    render() {
    return (
        <div className="products">
        {

            this.state.products.map((prod) => {

                return (
                    <div>
                        {/* <ul>
                            <li>
                                {prod.name}
                            </li>
                            <li>
                                {prod.price}
                            </li>
                        </ul> */}
                        <div className="products card" >
                        <img src={prod.thumbnailUrl}/>
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <p className="card-text">
                            {prod.title}
                                </p>
                                <p className="card-text">
                            {prod.body}
                                </p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                    
                )
                
            })
        }


    </div>
    )
  }
  componentDidMount(){
  
    //external interaction
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response=>{
        console.log("response",response.data)
        this.setState({products:response.data})
        console.log("products",this.state.products)


    }).catch(error=>{
        console.log("error")
    })
  }
}