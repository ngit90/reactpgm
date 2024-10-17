
import './App.css';
import Homescreen from './components/Homescreen/Homescreen';
import {IconContext} from './AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  return (

      <IconContext.Provider value={{FontAwesomeIcon}}>
      <div className="App">
             <Homescreen />
        </div>
      </IconContext.Provider>
   
  );
}

export default App;
