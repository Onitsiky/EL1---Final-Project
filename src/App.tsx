import React from 'react';
import Main from "./Components/main";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthRoutes from "./Components/AuthRoutes";
import HomePage from "./Components/HomePage";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<div className=" d-flex justify-content-center">
                  <Main/>
              </div>}/>
              <Route index element={<AuthRoutes>
                 <HomePage/>
              </AuthRoutes>}/>
          </Routes>
      </Router>
  );
}

export default App;
