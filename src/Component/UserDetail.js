import React, { useEffect, useState } from 'react'
import "../Styles/profile_page_ui.css"
import axios from 'axios';
var bodyFormData = new FormData();

const UserDetail = (props) => {
   const [img,seimg]= useState();

    const imageUpload = ()=>{
        console.log(img);


        bodyFormData.append('profilepic',img)
        const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
            
          }
         axios.post('/user/dp',bodyFormData,axiosConfig)
        .then((it)=>{
            console.log("profile pic added ");

        })
        .catch((err)=>{
            console.log(err);
        })


    }

  return (
    <><section id="profile_main">
    <div id="profile_pg_bg">
        <div id="profile_pg_bg_cover">
       
        </div>
    </div>
    
    <div id="profile_user_info">
        <div id="profile_user_name">
            <h2>{props.name}</h2>
            <input type ='file' onChange={(e)=>{
               seimg(e.target.files[0]);
             
            }} ></input>
            <button onClick={()=>{
                  imageUpload();
            }} > upload</button>
        </div>
        <div id="profile_user_contact">
              <div id="user_ph">{props.phone}</div>
              <div id="user_mail">{props.email}</div>
        </div>
        <div id="user_avail">
            {props.nur && <div  class="user_avl_it" id="nr"><span>Nursery</span></div>}
            {props.mar && <div class="user_avl_it" id="mr"><span>Market</span></div>}
            {props.lab && <div class="user_avl_it" id="lb"><span>Laboratory</span></div>}
        </div>
        
    </div>
    {/* MAKE BELOW PROFILE IMAGE DYNAMIC */}
   <div>
   
   <img id="profile_dp" src={`https://agroguru.onrender.com/uploads/${props.profilpic}`} alt='/' />

   </div>


</section></>
  )
}

export default UserDetail