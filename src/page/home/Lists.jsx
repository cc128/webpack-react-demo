import React from 'react';

export default class Home extends React.Component {
    state = { mag: '123123123' };
    componentDidMount() {
        // this.setState({
        //     msg:this.props.msg
        // })
    };
    render() {
        return (
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
        )
        console.log(this.props.msg)

    }
}
// import React from 'react';
// export default class Home extends React.Component {
//     state = {};
//     componentDidMount() { };
//     render() {
//         return (
//             <div className='center'>
//                 123141
//             </div>
//         )
//     }
// }