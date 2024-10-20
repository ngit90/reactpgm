import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path='/api/users/login' element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
