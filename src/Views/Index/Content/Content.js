import React, {Component} from 'react';
let style;

class Out extends Component {
    constructor(props) {
        super(props)
        this.tabChange = this.tabChange.bind(this);
    }

    tabChange(tabId) {
        if (tabId === 0) {
            window.navigate('/studies', 'right');
        } else if (tabId === 2) {
            window.navigate('/targaryens', 'left');
        }
    }

    render() {
        return (
            <div style={style.content}>
                <div style={style.tabContainer}>
                    <div style={style.tab} onClick={() => this.tabChange(0)}>Left</div>
                    <div style={style.tab} onClick={() => this.tabChange(1)}>Mid</div>
                    <div style={style.tab} onClick={() => this.tabChange(2)}>Right</div>
                </div>
                <div style={style.text}>
                    <span>Awesome animations using
                    </span>
                    <a href="http://anime-js.com">anime-js.com</a>
                    <span>
                        along with
                    </span>
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
        marginTop: '6em',
        width: '80%',
        textAlign: 'center'
    },
    text: {
        marginTop: '80px',
        fontSize: '2em'
    },
    tab: {
        margin: '15px',
        cursor: 'pointer',
        backgroundColor: 'rgb(213, 213, 213)',
        padding: '5px 25px 5px 25px',
        borderRadius: '20px'
    },
    tabContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}
