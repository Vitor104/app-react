import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const MyName = 'Vitor';
const MyNewName = MyName.toUpperCase();
function App() {

  return (
    <div>
      <h1>Olá, mundo!</h1>
      <h2>E olá, {MyNewName}!</h2>
    </div>
  );
};

export default App;
