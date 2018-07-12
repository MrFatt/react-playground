import React from "react";

const Counter = (props) => {
  if(props.count > 5 ){
    throw new Error("An Error");
  }
  return (
    <div>
      <button onClick={props.handleClick}>Click to throw an error</button>
      {props.count}
    </div>
  );
};

export default Counter;
