import React from "react";

function Checkbox(props) {
  return (
    <input type="checkbox" id={props.id} onClick={props.onClick} />
  );
}

export default Checkbox;