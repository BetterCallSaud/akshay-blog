import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Connect from "./components/Connect";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" exact element={<HomePage />} />
					<Route path="/blog" exact element={<Blog />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/connect" exact element={<Connect />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
