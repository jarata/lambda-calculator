import React, { useState } from "react";

//import any components needed
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {props.operatorState.map((op, index) => <OperatorButton key={index} op={op} setDisplayState={props.setDisplayState}/>)}
    </div>
  );
};

export default Operators;