import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
let style;

class Out extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 1
        };
        this.tabChange = this.tabChange.bind(this);
    }

    tabChange(tabId) {
        this.setState({activeTab: tabId})
        if (tabId === 0) {
            window.navigate('/studies', 'right');
        } else if (tabId === 2) {
            window.navigate('/targaryens', 'left');
        }
    }

    render() {
        return (
            <div style={style.content}>
                <Tabs activeTab={this.state.activeTab} onChange={this.tabChange} ripple>
                    <Tab>Left</Tab>
                    <Tab>Mid</Tab>
                    <Tab>Right</Tab>
                </Tabs>
                <div style={style.text}>
                    <span>Awesome animations using </span>
                    <a href="http://anime-js.com">anime-js.com</a>
                    <span> along with </span>
                    <a href="https://facebook.github.io/react/">React</a>
                </div>
            </div>
        )
    }
}

export default Out;

style = {
    content: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop: '16em',
        width: '80%',
        textAlign: 'center'
    },
    text: {
        marginTop: '80px',
        fontSize: '2em'
    }
}
