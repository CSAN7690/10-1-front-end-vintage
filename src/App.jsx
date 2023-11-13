import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './Components/indexPage';
import CreatePage from './Components/CreatePage';
import HomePage from "./Components/HomePage.jsx"
import ShowPage from './Components/showPage';
import NavBar from './Components/NavBar';
import EditPage from './Components/EditPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>

        < NavBar />
        
        {/* Routes */}
        <Routes>
          <Route path="/" component={IndexPage} />
          <Route path="/show/:id" component={ShowPage} />
          <Route path="/create" component= {CreatePage} />
          <Route path="edit/:id" component={EditPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;