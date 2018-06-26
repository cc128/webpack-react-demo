import React from 'react';
import { list } from '../../req'

// export default class Home extends React.Component {
//   state = { loginfoMenu: JSON.parse(localStorage.getItem('loginfoMenu')) };
//   render() {
//     let menuStype = {
//       padding: '0 10px'
//     }
//     return (
//       <div className="nav-top">
//         {
//           this.state.loginfoMenu.map((Menu, i) => {
//             return (
//               <NavLink to={Menu.pageUrl} activeStyle={{ color: 'green', fontWeight: 'bold' }} className='cursor inlineBlock' style={menuStype} key={i}>{Menu.methodName}</NavLink>
//             )
//           })
//         }
//       </div>)
//   }
// }
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class Demo extends React.Component {
    renderContent = tab => {
        console.log(tab)
        // list({
        //     params: {
        //         tag: '__all__',
        //         ac: 'wap',
        //         count: 20,
        //         format: 'json_raw',
        //         as: 'A1350B62CCCBF2B',
        //         cp: '5B2C9B8F025BAE1',
        //         min_behot_time: 0,
        //         _signature: 'TDS0wgAAFxkbA.yZ24fxm0w0tN'
        //     }
        // })
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <p>Content of {tab.title}</p>
            </div>
        );
    }
    render() {
        return (
            <div>
                <Tabs tabs={this.props.name} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />} prerenderingSiblingsNumber={0} >
                    {this.renderContent}
                </Tabs>
                {/* <WhiteSpace /> */}
            </div>
        );
    }
}