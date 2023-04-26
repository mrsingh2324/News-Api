import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import FetchData from "./component/FetchData";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route path="/entertainment" element={<FetchData cat="entertainment" />}/>
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
