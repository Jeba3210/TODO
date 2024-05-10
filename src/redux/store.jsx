import { legacy_createStore as createStore } from "redux";
import {TaskReducer} from './TaskReducer'


const store = createStore(TaskReducer);

console.log(store);

export default store;