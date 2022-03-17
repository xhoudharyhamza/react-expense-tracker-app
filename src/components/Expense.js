import React, { useContext, useEffect } from "react";
import { transactionContext } from "../GlobalState/GlobalContext";
export default function Expense() {
  let { transactions, addTransaction, deleteTransaction } =
    useContext(transactionContext);
    //to calculate total income
    let income = transactions
    .filter((element) => {
      return element.amount > 0;
    })
    .reduce((value, current) => value + current.amount, 0);
    //to calculate total expenses
  let expense = transactions
    .filter((element) => {
      return element.amount < 0;
    })
    .reduce((value, current) => value + current.amount, 0);
  return (
    <div className="container">
      <div className="row expense-tracker">
        <div className="col-md-6 col-sm-12">
          <h1 className="text-center">Track Your Expenses</h1>
          <h2 className="text-center">Reaming Balance is {income-expense}$</h2>
          <div className="expenses">
            <div className="total-balance">
              <h3>Income</h3>
              <h2>${income}</h2>
            </div>
            <div className="total-expense">
              <h3>Expense</h3>
              <h2>${expense}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
