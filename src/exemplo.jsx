import React from 'react';
import style from './exemplo.module.css';

function Exemplo({nome, idade}) {
   return (
     <div>
     <h1>{nome}</h1>
     <p>{idade}</p>
     </div>
   )
};


export default Exemplo;