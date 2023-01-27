import React from 'react';
import {createStore} from "redux"
function Cart(props) {
    var defaultState=0;
    var cartVal=0;
    //reducer
    const cartReducer=(state=defaultState,action)=>{
        console.log('reducer invoked',action )
        switch(action.type){

            case "Add_to_Cart":
                return state+1
            case "delete_to_Cart":
                return state-1
                
            default:
                return state
        }
    }
    var store=createStore(cartReducer)
    function addToCart(){
        console.log("store.getstate",store.getState())
        //dispatch
        store.dispatch({type:"Add_to_Cart"})
        console.log("store.getstate",store.getState())
    }
    function removeToCart(){
        console.log("store.getstate",store.getState())
        //dispatch
        store.dispatch({type:"delete_to_Cart"})
        console.log("store.getstate",store.getState())
    }
    return (
        <div>
            <button onClick={addToCart}>add To Cart</button>
            <button onClick={removeToCart}>remove To Cart</button>
          
        </div>
    );
}

export default Cart;