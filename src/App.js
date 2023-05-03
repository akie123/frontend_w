
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Room from './components/Room/Room'
import styled from 'styled-components';
function App() {
  return (
      <div className="App">
        {/*<Room/>*/}

        <Router>
          <Routes>
            <Route path="/" element={<Room />} />
          </Routes>
        </Router>

      </div>
  );
}

export default App;
