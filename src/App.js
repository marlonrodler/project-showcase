import React from 'react'
import { HashRouter  as Router, Routes, Route} from "react-router-dom";

import './App.css';

import Showcase from './pages/Showcase'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Showcase/>} />
        </Routes>
    </Router>
  );
}

export default App;