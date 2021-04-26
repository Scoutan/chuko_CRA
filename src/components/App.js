import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
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
        <Banner />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/watches" exact component={Watches} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;