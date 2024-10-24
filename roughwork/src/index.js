import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Newcontext } from './Appcontext';
import {Provider} from 'react-redux';
//import { username } from './Appcontext';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const username = "myname";
root.render(

 <React.StrictMode>
  <Provider store={store}>
     <Newcontext.Provider value={{username}}>
    <App />
    </Newcontext.Provider>
    </Provider>
  </React.StrictMode>

 
);


