import React from "react";
import './Checkbox.css'

function Checkbox(props) {
  return (
    <div className="center">
      <p>Already seen?</p>
      <input className='checkbox-watched' name='' type="checkbox" id={props.id} onClick={props.onClick} />
    </div>
  );
}

export default Checkbox;