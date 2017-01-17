import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Settings from 'Settings/Settings';
import NotFound from 'NotFound/NotFound';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/settings" component={Settings}/>
      <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);
