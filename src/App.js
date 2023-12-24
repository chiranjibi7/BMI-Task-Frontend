import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HomePage,ArtistDetailPage,NotFoundPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/artistdetail" element={<ArtistDetailPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
