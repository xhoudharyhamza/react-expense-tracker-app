import React, {useReducer,createContext} from "react";
import Reducer from './Reducer.js';
let initialState={
    transactions:[],
}
let transactionContext = createContext()
export default function GlobalContext({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState);
    let addTransaction= (title, amount)=>{
         dispatch({type: "Add_Transaction", payload: {title, amount:Number(amount)}})
    }
    let deleteTransaction=(indexNo)=>{
        let newTransactions= state.transactions.filter((element,index)=>{
            return index!=indexNo
        })
        dispatch({type: "Delete_Transaction", payload: newTransactions})
    }
  return (
      <>
      <transactionContext.Provider value={{transactions:state.transactions,addTransaction,deleteTransaction}}>
          {children}
      </transactionContext.Provider>
      </>
  )
}
export {transactionContext}
