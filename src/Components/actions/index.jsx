import {ADD_TO_CART} from '../actions/action-types/cart-action'

export const addToCart= (id)=>{
  return{
      type:ADD_TO_CART,
      id
  }
}


