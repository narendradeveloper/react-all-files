import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifiction from './notifiction';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Notifiction name="narendra" city="hyderabad"/>
  </React.StrictMode>,
  
);
