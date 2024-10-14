import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './stores/Context';
import Context from './stores/Context';
import firebase from './firebase/config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
    </FirebaseContext.Provider>
);
