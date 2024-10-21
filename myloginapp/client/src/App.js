import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home/Home'
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
	const user = localStorage.getItem("token");
	console.log(`user : ${user}`);

	return (
    <Router>
		<Routes>
			{user && <Route path="/"  exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/home" exact element={<Home />} />
			{user && <Route path="/profile" exact element={<Profile />} /> }
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </Router>
	);
}

export default App;