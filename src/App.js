import logo from './logo.svg';
import './App.css';


// importing pages

import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import User from './Layout/User';


// react dom import 
import {
  createBrowserRouter ,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from './Layout/Home';






// creating react-routers 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path='/' element={<Home/>}></Route>
      <Route path='/user' element={<User/>}>
        <Route path='login' element={<Login/>} ></Route>
        <Route path='regi' element={<Register/>} ></Route>
      </Route>
    </Route>

  )
)



function App() {

  return (
    <div className="App">
          
           <RouterProvider router={router}/>
    </div>
  );
}

export default App;
