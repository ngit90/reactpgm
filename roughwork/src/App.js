import './App.css';
import React from 'react';
import Samplecomp from "./component/Samplecomp"
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counterslice';

function App() {
  const dispatch = useDispatch();

  return (
            <div>
              <h1> welcome </h1>
              <Samplecomp />
              <button onClick={()=> dispatch(increment())}> increment </button>
              <button onClick={()=> dispatch(decrement())}> decrement </button>
            </div>
          
   
  );
}
export default App;
