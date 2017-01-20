import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Index from 'Index/Index';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="*" component={Index}/>
</Router>, document.getElementById('root'));
