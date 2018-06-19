import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
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
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>);

  render() {
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}
