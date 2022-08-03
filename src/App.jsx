import React from "react";
// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// styles
import "./App.css";

// components
import Desktop from "./pages/Desktop/Desktop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
