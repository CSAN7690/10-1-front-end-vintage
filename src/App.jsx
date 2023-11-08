import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IndexPage from './indexPage';
import ShowPage from './showPage';
import CreatePage from './createPage';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;