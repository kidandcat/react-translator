import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import './style.css';
import {Left, Right} from 'animations';

import Index from 'Index/Index';
import Studies from 'Studies/Studies';

window.navigate = function(path, direction) {
    direction = direction || '';
    switch (direction) {
        case 'left':
            Left('body', () => {
                browserHistory.push(path);
            });
            break;
        default:
            Right('body', () => {
                browserHistory.push(path);
            });
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/studies" component={Studies}/>
    <Route path="/targaryens" component={Studies}/>
    <Route path="*" component={Index}/>
</Router>, document.getElementById('root'));
