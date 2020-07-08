import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/resume">
        <ResumePage />
      </Route>
      <Route path="/blog">
        <BlogPage />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
