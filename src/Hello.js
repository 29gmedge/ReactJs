import React from 'react';
import './Hello.css';
import App from './App';
const MyComponent = props => {
    return <h1>Hello, {props.name}!</h1>;
   };
   ReactDOM.render(<MyComponent name="gani" />, element);

   export default Hello