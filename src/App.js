import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Home page!</>} />
        <Route path="/artistdetails" element={<>Artist details</>} />
      </Routes>
    </Router>
  );
}

export default App;
