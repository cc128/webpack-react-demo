import React from 'react';
import { Index } from './router/index.js';

export default class App extends React.Component {
  render() {
    let is = localStorage.getItem("loginfo")
    return (
      <div>
        <Index />
      </div>
    );
  }
}