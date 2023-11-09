import React from 'react';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage.jsx"
import ShowPage from './Components/showPage';
import NavBar from './Components/NavBar';
import EditPage from './Components/EditPage';
function App() {
  return (
    <Router>
      <NavBar />
    <div className="App">
       <Routes>

      
      
  
      <Route path='/'element={<HomePage />} />
      <Route path='/vintage'element={<ShowPage />} />
      <Route path='/vintage/:id'element={<EditPage/>} />
  
      </Routes>
      </div>
   </Router>
    

  
  
          
  );
}

export default App;