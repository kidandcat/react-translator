import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Index from 'Index/Index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {
    blue500,
    blue700,
    grey400,
    greenA200,
    grey100,
    grey500,
    darkBlack,
    white,
    grey300,
    fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: grey400,
        accent1Color: greenA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blue500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    },
    appBar: {
        height: 70
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
        <Route path="*" component={Index}/>
    </Router>
</MuiThemeProvider>, document.getElementById('root'));
