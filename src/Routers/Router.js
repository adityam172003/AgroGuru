// react dom import 
import {
    createBrowserRouter ,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";
  
// importing pages

import Login    from '../Pages/User/Login';
import Register from '../Pages/User/Register';
import User from '../Layout/User';
import Home from '../Layout/Home';
import Main from '../Layout/Main';
import CropPredict from "../Pages/Main_Pages/CropPredict";
import { Nursery } from "../Pages/Main_Pages/Nursery";
import { About }   from "../Pages/Main_Pages/About";
import { Profile } from "../Pages/User/Profile";
import { NurseryForm }    from "../Pages/Forms/NurseryForm";
import { MarketForm }     from "../Pages/Forms/MarketForm";
import { LaboratoryForm } from "../Pages/Forms/LaboratoryForm";
import { Market }     from "../Pages/Main_Pages/Market";
import { Laboratory } from "../Pages/Main_Pages/Laboratory";
<<<<<<< HEAD
import { Forms }      from "../Layout/Forms";
=======
import { Forms } from "../Layout/Forms";
import Info from "../Pages/Main_Pages/Info";
>>>>>>> 3ae51c98794ddd2af9fe6d9543d3a3d8e8b818ea

// creating react-routers 
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route  path='/'       element={<Home/>}></Route>
        <Route path='/user'   element={<User/>}>
          <Route path='login' element={<Login/>} ></Route>
          <Route path='regi'  element={<Register/>} ></Route>
        </Route>
        
        <Route path='/main'    element={<Main/>}>
          <Route path="about"  element={<About/>}></Route>
          <Route path='crop'   element={<CropPredict/>} ></Route>
          <Route path='nur'    element={<Nursery/>} ></Route>
          <Route path="market" element={<Market/>}/>
<<<<<<< HEAD
          <Route path="lab"    element={<Laboratory/>}/>
          <Route path="profile"element={<Profile/>}></Route>
=======
          <Route path="lab"   element={<Laboratory/>}/>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="info"   element={<Info />}/>
>>>>>>> 3ae51c98794ddd2af9fe6d9543d3a3d8e8b818ea

          <Route path="form"      element={<Forms/>}>
            <Route path="nurf"    element={<NurseryForm/>}></Route>
            <Route path="marketf" element={<MarketForm/>}/>
<<<<<<< HEAD
            <Route path="labf"    element={<LaboratoryForm/>}/>
        </Route>
=======
            <Route path="labf" element={<LaboratoryForm/>}/>
          </Route>
>>>>>>> 3ae51c98794ddd2af9fe6d9543d3a3d8e8b818ea

        </Route>

      </Route>
  
    )
)

export default router;

