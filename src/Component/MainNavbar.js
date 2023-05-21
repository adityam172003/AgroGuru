import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../Styles/HomeNavbar.css'
import { MainContext } from "../context/agroguru_context";
import Spinner from '../Component/Spinner.js'


export const MainNavbar = () => {

  const { spin,setSpin } = useContext(MainContext);


  const nevigate = useNavigate();

  const userLogout = async () => {
    setSpin(true);
    axios.get('/user/logout')
      .then(() => {
        setSpin(false);
        nevigate('/');
        // alert("Logout");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
    <section id="navbar_sec">
      <div id="web_logo_div"><NavLink to='/main'><span id="sp1">Agro</span><span id="sp2">Guru</span></NavLink></div>
      <div id="navbar_menu">
        <div id="navbar_menu_div">
          <ul id="navbar_menu_list">
            <li class="nav_menu_item"><NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            } to='/main'>Home</NavLink></li>
            <li class="nav_menu_item" id="ser"><NavLink to='/services/crop' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Services</NavLink>
              <div id="services_dropdown">
                <div id="ser_drop_bar"></div>
                <ul id="services_list">
                  <li class="services_list_item"><NavLink to='/services/crop' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>CropPredict</NavLink></li>
                  <li class="services_list_item"><NavLink to='/services/nur' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Nursery</NavLink></li>
                  <li class="services_list_item"><NavLink to='/services/lab' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Lab</NavLink></li>
                  <li class="services_list_item"> <NavLink to='/services/market' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Market</NavLink></li>
                  <li class="services_list_item"><NavLink to='/services/info' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Info</NavLink></li>
                </ul>
              </div>
            </li>
            <li class="nav_menu_item"><NavLink to='/about' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>About Us</NavLink></li>
            <li class="nav_menu_item"><NavLink to='/profile' className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>Profile</NavLink></li>
          </ul>
        </div>
        <div>
          <button id="nav_logout_btn" onClick={userLogout}>Logout</button>
        </div>
      </div>
    </section>
    {spin && <Spinner />}
    </>
  )
}
