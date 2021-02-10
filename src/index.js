import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>Hello webpack and babel</div>
  )
}

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('app')
);
