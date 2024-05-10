import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css'
import Home from "./Components/Home";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/LogIn";
import Profile from "./Profile/Profile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={SignUp}/>
            <Route path="/login" Component={LogIn}/>
            <Route path="/profile" Component={Profile}/>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </Provider>


    </>
  )
}

export default App
