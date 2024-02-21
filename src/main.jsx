import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';

// import { SimpleForm } from './02-useEffect/SimpleForm';
import './index.css';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks />
  // </React.StrictMode>
)