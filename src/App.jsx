import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IndexPage from './IndexPage';
import ShowPage from './ShowPage';
import CreatePage from './CreatePage';
import EditPage from './EditPage'
import './App.css';

function App() {
  return (
    <Router>
      <div>

        {/* Navigation Bar */}
        <nav>
          <Link to="/">home</Link>
          <Link to="/create">createNewResource</Link>
        </nav>

        {/* Routes */}
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/show/:id" component={ShowPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="edit/:id" component={EditPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;