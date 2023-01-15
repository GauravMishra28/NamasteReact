
const reducerFunc = (state, {type,payload}) => {
  switch (type) {
      case 'populate':
      return {
        ...state,products: payload
      };

       case "ADD_TO_CART":
       return{
        ...state,cart:[...state.cart,{...payload,qty:1}]
       }
     
       case "REMOVE_FROM_CART":
       return{
        ...state,cart:state.cart.filter((item)=>item.id!==payload.id)
       }

       case "CHANGE_CART_QTY":
        return{
         ...state,cart:state.cart.filter((item)=>item.id===payload.id?item.qty=payload.qty:item.qty)
        }
    
       case "Seach_query":
        return{
         ...state,
         query:payload
        }
     
    default:
      return payload;
  }
};

export default reducerFunc;
