import React, { useState } from "react";

//import any components needed
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {props.specialState.map((spec, index) => <SpecialButton key={index} spec={spec}/>)}
    </div>
  );
};

export default Specials;
