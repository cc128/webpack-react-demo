
import React from 'react';
import { TabBar } from 'antd-mobile';
import Tabs from './Tabs'
import { client_category_list } from 'req'
export default class TabBarExample extends React.Component {
  state = {
  };
  render() {
    return (
      <div>
        <Tabs />
      </div>
    );
  }
}