import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IndexPage from './Components/indexPage';
import CreatePage from './Components/CreatePage';
import HomePage from "./Components/HomePage.jsx"
import ShowPage from './Components/Showpage';
import NavBar from './Components/NavBar';
import EditPage from './Components/EditPage';
import ErrorPage from './Components/ErrorPage.jsx';

import './App.css';



  

  function App() {



  return (
    <Router>
      <div>

        < NavBar />

        {/* Routes */}
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="/vintage" element={<IndexPage />} />
          <Route path="/vintage/shows/:id" element={<ShowPage />} />
          <Route path="/vintage/create" element={<CreatePage />} />
          <Route path="/vintage/edit/:id" element={<EditPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;