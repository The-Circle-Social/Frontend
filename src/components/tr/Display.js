import React from 'react'; 
import Counter from "./like";

function Display (props){ 
    console.log(45564545);
  return ( 
    <div style={{border:'1px solid pink', margin:'10px'}}> 

<p> {props.name} </p> 
<p> {props.data} </p> 
<p> {props.caption}</p> 
<Counter/> 
     </div> 
  ) 
} 
export default Display; 