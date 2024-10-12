
import { useEffect, useState } from 'react';
import './App.css';
import Homescreen from './components/Homescreen/Homescreen';
import {AppContext} from './AppContext';

function App() {
  const [footerdata,setFooterdata] = useState('')
  useEffect(()=> {
    setFooterdata("© 2024 Netflix Clone ");
  },[]);
  return (
    <AppContext.Provider value={{fdata:footerdata}}>
        <div className="App">
             <Homescreen />
        </div>
    </AppContext.Provider>
   
  );
}

export default App;
