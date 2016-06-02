import React from 'react';
import { Route, /* Redirect, */ IndexRoute } from 'react-router';

import Master from './components/Master';
import HomePage from './components/pages/home/HomePage';
import SearchPage from './components/pages/search/SearchPage';
import ResultsPage from './components/pages/results/ResultsPage';
import AboutPage from './components/pages/about/AboutPage';

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="search" component={SearchPage} />
    <Route path="results" component={ResultsPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);

export default AppRoutes;
