import React, { useEffect, useState } from 'react'
import "../Styles/profile_page_ui.css"

const UserDetail = (props) => {
   

  return (
    <><section id="profile_main">
    <div id="profile_pg_bg">
        <div id="profile_pg_bg_cover">

        </div>
    </div>
    
    <div id="profile_user_info">
        <div id="profile_user_name">
            <h2>{props.name}</h2>
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
    <div id="profile_dp"></div>
</section></>
  )
}

export default UserDetail