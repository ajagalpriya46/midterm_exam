import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AddProduct />
    <SignUpUser/>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();