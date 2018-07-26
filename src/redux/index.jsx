import { createStore } from "redux";
import todoApp  from "./Reducer";
const initValue = {
  userNumber: 0,
};
let store = createStore(todoApp)
export default store