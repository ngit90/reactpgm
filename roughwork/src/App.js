import './App.css';
//import Newcomp1 from './component/newcomp1';
//import Newcomp2 from './component/Newcomp2';
import Newcomp3 from './component/Newcomp3';
import React,{useState} from 'react';
import Newcomp4 from './component/Newcomp4';

function App() {
  const [counter,setCounter] = useState(0);

  const handleclick = () =>{
    setCounter(counter + 5);
}

  return (
    <div className="App">
      <h1>Welcome new data</h1>
      {/* < Newcomp1 />
      <Newcomp2 /> */}
      <button onClick={handleclick}> Click me</button>
      <Newcomp3  counter = {counter}/>
      <Newcomp4 />
      
    </div>
  );
}

export default App;
