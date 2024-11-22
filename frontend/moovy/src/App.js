import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';


function App() {

  return (
    
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/library" element={<LibraryPage/>} />

      </Routes>
    </Router>
  );
}

export default App;