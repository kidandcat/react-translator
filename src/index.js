import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import {Left, Right} from 'animations';

import Index from 'Index/Index';
import Studies from 'Studies/Studies';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/studies" component={Studies}/>
    <Route path="/targaryens" component={Studies}/>
    <Route path="*" component={Index}/>
</Router>, document.getElementById('root'));

window.navigate = function(path, direction) {
    direction = direction || '';
    switch (direction) {
        case 'left':
            Left(() => {
                browserHistory.push(path);
            });
            break;
        default:
            Right(() => {
                browserHistory.push(path);
            });
    }
}
