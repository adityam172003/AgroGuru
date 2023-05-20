import React from 'react'
import "../Styles/profile_page_ui.css"

const ProfileNurAv = () => {
  return (
    <><section class="profile_sec profile_avail"  id="sec2">
    <div class="profile_lyr">
       <div class="profile_sec_avail_text">Update Your Nursery </div>
       <div class="profile_info_edit">
        <form class="frms" action="">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <div class="tms">
             <div class="st_tm">Open :  8:00</div>
            <div class="cl_tm">Close :  5:00</div>
            </div>
            <div class="eml">Email : rahul@mail.com</div>
            <div class="profile_edit_submit"> <button>Edit</button></div>
        </form>
       </div>
       <div class="profile_item_add">
        <p class="it_add_text">Add New Items</p>
        <form class="profile_edit_add_it" action="">
            <div class="it_nm">
                <label for="">Item Name</label><br/><input type="text"/>
            </div>
            <div class="it_second">
                <label for="">Item Image</label><br/><input type="file"/>
            </div>
            <div class="it_submit"><button>submit</button></div>
        </form>
       </div>
    </div>
</section></>
  )
}

export default ProfileNurAv