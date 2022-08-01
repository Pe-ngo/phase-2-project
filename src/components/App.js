import React from "react";
import NavBar from "./NavBar";
import NewsContainer from "./NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Comments from "./Comments";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar/>
        </div>
        
          <Routes>
            <Route exact path="/" element={<NewsContainer/>}></Route>
            <Route exact path="/comments" element={<Comments/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
