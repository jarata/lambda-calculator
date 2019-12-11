import React from "react";

const SpecialButton = props => {
  // console.log("special props", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.spec}
      </button>
    </>
  );
};

export default SpecialButton;