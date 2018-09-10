import css from "./app.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Index } from "./router";
import Admin from "./admin/admin";
import { querySiteName } from "./req";
import io from "socket.io-client";
// import { createStore } from "redux";
// import Reducers from "./redux/Reducers";
// const store = createStore(Reducers);
if (location.pathname == "/admin.html") {
  ReactDOM.render(<Admin />, document.getElementById("Admin"));
} else {
  window.$socket = io.connect("http://"+location.hostname+":1337");
  ReactDOM.render(<Index />, document.getElementById("Index"));
  // querySiteName({ doMain: "" }).then(res => {
  //   if (res.code == 0) {
  //     window.$socket = io.connect("http://192.168.10.12:1337");
  //     // window.$store = store;
  //     // localStorage.setItem('loginfo', JSON.stringify(res.data))
  //     ReactDOM.render(<Index />, document.getElementById("Index"));
  //   } else {
  //     // localStorage.setItem('loginfo', JSON.stringify(res.data))
  //     // ReactDOM.render(
  //     // 	document.getElementById('Index')
  //     // );
  //   }
  // });
}
