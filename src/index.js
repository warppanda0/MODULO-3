import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css';
//import App from './App';//
import Prueba from './Prueba';


ReactDOM.render(
  <React.StrictMode>
    <Prueba nombre="Seven" imagenUrl="https://pbs.twimg.com/profile_images/1284744444600877057/16h9pXEq_400x400.jpg" />
  </React.StrictMode>,
  document.getElementById('root')
);


