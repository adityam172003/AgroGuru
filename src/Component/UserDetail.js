import React from 'react'
import "../Styles/profile_page_ui.css"

const UserDetail = () => {
  return (
    <><section id="profile_main">
    <div id="profile_pg_bg">
        <div id="profile_pg_bg_cover">

        </div>
    </div>
    
    <div id="profile_user_info">
        <div id="profile_user_name">
            <h2>Rakesh Sharma</h2>
        </div>
        <div id="profile_user_contact">
              <div id="user_ph">1234567890</div>
              <div id="user_mail">abc123@mail.com</div>
        </div>
        <div id="user_avail">
            <div  class="user_avl_it" id="nr"><span>Nursery</span></div>
            <div class="user_avl_it" id="mr"><span>Market</span></div>
            <div class="user_avl_it" id="lb"><span>Laboratory</span></div>
        </div>
        
    </div>
    <div id="profile_dp"></div>
</section></>
  )
}

export default UserDetail