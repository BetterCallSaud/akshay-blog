import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Blog from "./components/Blog";

function App() {
  return (
    <>
        <Router>
            <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/blog" exact element={<Blog />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
