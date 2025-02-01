import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
const cartStateContext = createContext();
const cartDispatchContext = createContext();
const reducer =(state,action)=>{
  switch (action.type) {
    case "ADD":
        return[...state ,{type:action.type,id:action.id,name:action.name,price:action.price,img:action.img,qty:action.qty}]

  
    default:
      break;
  }
}
export const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer,[]);
  return (
    <cartDispatchContext.Provider value={dispatch}>
        <cartStateContext.Provider value={state}>
        {children}
        </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  )
}
export const useCart=()=>useContext(cartStateContext)
export const useDispatch=()=>useContext(cartDispatchContext)

