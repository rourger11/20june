
import {ADD_TO_CART} from '../actions/action-types/cart-action'
import items from '../Items/Items'
const initialValue=0
const changeNum = (state=initialValue,action)=>{

    if(action.type==="ADD_TO_CART"){
        return state+1
    }

    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }



    return state
}
export default changeNum;

