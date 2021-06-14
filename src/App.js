import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Logout from './pages/Logout';
import Support from './pages/Support';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Project} />
          <Route path='/team' component={Team} />
          <Route path='/support' component={Support} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

