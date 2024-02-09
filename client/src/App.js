import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Profile from "./components/Profile/profile";
import Settings from "./components/Settings/settings"
import "./App.css";

const App = () => {
	return (
		<Router >
			<div class="menu-main">
				<h1>React Router Example</h1>
				<ul class="menu">
					<li class="menu-item">
						<Link to="/">Home</Link>
					</li>
					<li class="menu-item">
						<Link to="/login">Login</Link>
					</li>
					<li class="menu-item">
						<Link to="/profile">Profile</Link>
					</li>
					<li class="menu-item">
						<Link to="/settings">Settings</Link>
					</li>
				</ul>
				<hr />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
