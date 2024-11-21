import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage';


function App() {

  return (
    
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;