import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthRoutes from "./Components/AuthRoutes";
import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import MyInput from "./Components/MyInput";

function App() {
  return (
      <div className="body">
          <Router>
              <Routes>
                  <Route path="/login" element={<div className=" d-flex justify-content-center">
                      <MyInput/>
                  </div>}/>
                  <Route index element={<AuthRoutes>
                      <HomePage/>
                  </AuthRoutes>}/>
                  <Route path="/register" element={<Register/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
