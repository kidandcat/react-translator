import React, {Component} from 'react';
import Progress from 'react-progress';

let style;

class Lay extends Component {
    constructor() {
        super();
        let self = this;
        this.state = {
            percent: 0,
            time: 1
        }
        window.loadSet = (per) => {
            self.setState({percent: per});
        }

        window.loadFull = (time, cb) => {
            self.setState({time: time});
            let localTime = 0;
            setTimeout(timeout, 100);

            function timeout(){
              console.log('time', time);
              console.log('localTime', localTime);
              console.log('percent', (localTime * 100) / time);
              self.setState({
                time: 0.1,
                percent: (localTime * 100) / time
              });

              localTime += 100;
              if(localTime <= time){
                setTimeout(timeout, 100);
              }else{
                try{
                  cb();
                }catch(e){}
              }
            }
        }
    }

    render() {
        return (<Progress percent={this.state.percent} color={'red'} style={style.loading} speed={this.state.time}/>);
    }
}



export default Lay;

style = {
  loading: {
    zIndex: 1000
  }
}
