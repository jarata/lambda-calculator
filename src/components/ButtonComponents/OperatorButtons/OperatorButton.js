import React from "react";

const OperatorButton = props => {
  // console.log("op props", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.op.char}
      </button>
    </>
  );
};

export default OperatorButton;