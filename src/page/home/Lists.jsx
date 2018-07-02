import React from 'react';
import ReactDOM from 'react-dom';

// export default class Home extends React.Component {
//     state = { mag: '123123123' };
//     componentDidMount() {
//         // this.setState({
//         //     msg:this.props.msg
//         // })
//     };
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.msg.map((e, i) => {
//                         return (
//                             <div key={e.articleId}>
//                                 {e.articleTitle}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//         console.log(this.props.msg)

//     }
// }
import { PullToRefresh, Button } from 'antd-mobile';


export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
        };
    }
    genData() {
        const dataArr = [];
        for (let i = 0; i < 20; i++) {
            dataArr.push(i);
        }
        return dataArr;
    }
    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: this.genData(),
        }), 0);
    }

    render() {
        return (<div style={{ width: '100%' }}>
            {/* <Button
        style={{ marginBottom: 15 }}
        onClick={() => this.setState({ down: !this.state.down })}
      >
        direction: {this.state.down ? 'down' : 'up'}
      </Button> */}
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    // height: this.state.height,
                    //   overflow: 'auto',
                }}
                indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                direction={this.state.down ? 'down' : 'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                }}
            >
                <div>
                    {
                        this.props.msg.map((e, i) => {
                            return (
                                <div key={e.articleId}>
                                    {e.articleTitle}
                                </div>
                            )
                        })
                    }
                </div>
            </PullToRefresh>
        </div>);
    }
}