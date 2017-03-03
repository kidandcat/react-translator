import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import './style.css';

import Index from 'Index/Index';
import Apps from 'Apps/Apps';
import Users from 'Users/Users';
import Empresas from 'Empresas/Empresas';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/companies" component={Empresas}/>
        <Route path="/users" component={Users}/>
        <Route path="/apps" component={Apps}/>
        <Route path="*" component={Index}/>
    </Router>, document.getElementById('root'));
