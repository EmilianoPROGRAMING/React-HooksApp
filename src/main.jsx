import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';

// import { SimpleForm } from './02-useEffect/SimpleForm';
import './index.css';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp';
// import { MainApp } from './09-useContext/MainApp';
// import { Memorize } from './06-memos/Memorize';
// import { MemorizeHook } from './06-memos/MemorizeHook';
// import { CallBackHook } from './06-memos/CallBackHook';
// import { FocusScreen } from './04-useRef/FocusScreem';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      {/* <React.StrictMode> */}
          <TodoApp />
      {/* </React.StrictMode> */}
  </BrowserRouter>  
)
