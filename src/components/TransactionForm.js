import React, { useState,useContext } from "react";
import { transactionContext } from "../GlobalState/GlobalContext";
export default function TransactionForm() {
    let {transactions, addTransaction,deleteTransaction}= useContext(transactionContext)
    const [transaction,setTransaction]= useState({title:'', amount:''})
    let transactionHandler= (e)=>{
        setTransaction({...transaction, [e.target.name]:e.target.value
        })
    }
   let completeTransaction= ()=>{
       addTransaction(transaction.title, transaction.amount)
       transaction.title=''
       transaction.amount=''
    }
  return (
    <>
      <div className="container">
        <div className="transaction-form row">
          <div className="col-md-6 col-sm-12">
            <h1>Add Transactions</h1>
            <div className="form-group">
              <label htmlFor="transaction-title">Transaction Title</label>
              <input
                type="text"
                className="form-control"
                id="transaction-title"
                aria-describedby="emailHelp"
                placeholder="Enter Transaction"
                onChange={transactionHandler}
                name='title'
                value={transaction.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="transactionamount">Transaction Amount</label>
              <p>To Add Expense use (-ve) sign with Amount</p>
              <input
                type="text"
                className="form-control"
                id="transactionamount"
                placeholder="Enter Amount"
                onChange={transactionHandler}
                name='amount'
                value={transaction.amount}
              />
              <button className="btn btn-primary" onClick={completeTransaction}>Add Transaction</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
