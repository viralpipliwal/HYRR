// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import PostList from "./PostList";
import "./tailwind.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
