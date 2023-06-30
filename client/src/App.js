import React, { Fragment } from "react";
import "./App.css";

//components

import InputBook from "./components/InputBook";
import ListBook from "./components/ListBook";
import InputCust from "./components/InputCust";
import ListCust from "./components/ListCust";

function App() {
  return (
    <div className="bg-info h-100">
    <Fragment>
      <div className="container">
        <InputBook />
        <ListBook />
        <InputCust />
        <ListCust />
      </div>
    </Fragment>
    </div>
  );
}

export default App;
