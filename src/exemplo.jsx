import React from 'react';
import style from './exemplo.module.css';




function Grocery(props) {
  function handleClick({item1}) {
    alert(item1)
  }
  
  return (
     <div>
       <h2>{props.item1}</h2>
       <button onClick={handleClick}>{props.item1}</button>
       <br />
       <h2>{props.item2}</h2>
       <button onClick={handleClick}>Comprar</button>
     </div>
   )
};


export default Grocery;

