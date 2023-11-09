import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage.jsx"
import ShowPage from './Components/showPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
      <Route path='/'element={<HomePage />} />
      <Route path='/vintage'element={<ShowPage />} />
      <Route path='/vintage/:id'element={<EditPage/>} />
  
    </Routes>
   </Router>
</div>
 
          
  );
}

export default App;