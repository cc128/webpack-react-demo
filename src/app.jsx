import React from 'react';
import { Index } from './router/index.js';
import Login from './page/login';

// const App = () => (
//   <div>
//     <Index />
//   </div>
// )
// console.log(222222222222)
// export default App
export default class App extends React.Component {
  render() {
    return (
      <Index />
    );
  }
}