import './App.css';
import React,{useEffect, useState} from 'react';

function App() {

  const [datas,setDatat] = useState(0);
  useEffect(()=>{
    console.log(datas);
  },[datas]);
  return (
    <div className="App">
      <h1>Welcome new data</h1>

    </div>
  );
}

export default App;
