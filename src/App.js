import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Expense from "./components/Expense";
import TransactionForm from "./components/TransactionForm";
import GlobalContext from "./GlobalState/GlobalContext";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <GlobalContext>
        <Expense />
        <TransactionForm />
        <TransactionList/>
      </GlobalContext>
    </>
  );
}

export default App;
