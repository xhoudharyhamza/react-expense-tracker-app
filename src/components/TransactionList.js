import React, {useContext} from "react";
import { transactionContext } from "../GlobalState/GlobalContext";
export default function TransactionList() {
  let { transactions, addTransaction,deleteTransaction } = useContext(transactionContext);
  return (
    <div className="container">
      <div className="row transaction-list">
        <div className="col-md-6 col-sm-12">
          <h1>Transaction History</h1>
          {transactions.map((element,index)=>{
              return <div className="transaction-item" key={index} style={{borderRight:element.amount>0?'4px solid rgb(40, 151, 18)':'4px solid #e60c0c'}}>
                  <p><i className="fa-solid fa-circle-xmark" onClick={()=>{
                      deleteTransaction(index)
                  }}></i> {element.title}</p>
                  <p>{element.amount}</p>
              </div>
          })}
          <div className="transaction-history">{transactions.length<1?<p>Nothing to Show Yet</p>:null}</div>
        </div>
      </div>
    </div>
  );
}
