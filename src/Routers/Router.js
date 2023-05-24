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
import  MarketForm      from "../Pages/Forms/DemoMarket";
// import { LaboratoryForm } from "../Pages/Forms/LaboratoryForm";
import { Market }     from "../Pages/Main_Pages/Market";
import { Laboratory } from "../Pages/Main_Pages/Laboratory";
import { Forms }      from "../Layout/Forms";
import DemoLab from '../Pages/Forms/DemoLab';

import Info from "../Pages/Main_Pages/Info";
import Services from "../Layout/Services";
import RouteMap from "../Component/MapRoute";

// creating react-routers 
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route  path='/'       element={<Home/>}></Route>
          <Route exact path='login' element={<Login/>} ></Route>
          <Route path='regi'  element={<Register/>} ></Route>
        
        
        <Route path='/main'    element={<Main/>}>
          
          </Route>
          <Route path="/about"  element={<About/>}></Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>

         <Route path="/form"      element={<Forms/>}>
           <Route path="nurf"    element={<NurseryForm/>}></Route>
           <Route path="marketf" element={<MarketForm />}></Route>
           <Route path="labf"    element={<DemoLab />}></Route>
         </Route>
         
           

        <Route path="/services" element={<Services/>}>
        <Route path='crop'   element={<CropPredict/>} ></Route>
          <Route path='nur'    element={<Nursery/>} ></Route>
          <Route path="market" element={<Market/>}/>
          <Route path="lab"   element={<Laboratory/>}/>
          <Route path="info"   element={<Info />}/>
        </Route>
        
        <Route path="/map/:ltd/:lgt" element={<RouteMap/>}/>
        
      </Route>

    
  
    )
)

export default router;

