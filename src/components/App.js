import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import UserAccess from './UserAccess';
import Banner from './Banner';
import NavBar from './NavBar';
import Home from './Home';
import Blog from './Blog';
import Watches from './Watches';
import Faq from './Faq';
import Contact from './Contact';
import SignIn from './SignIn';

const App = () => {
  return (
    <div className="global-container">
      <Router history={history}>
        <UserAccess />
        <Banner />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Watches} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;