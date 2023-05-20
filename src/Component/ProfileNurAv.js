import React, { useState } from 'react'
import "../Styles/profile_page_ui.css"

const ProfileNurAv = () => {
    const [toggle, setToggle] = useState(true)

    const handleSubmit = (data) => {
        console.log(data);
    }

  return (
    <><section class="profile_sec profile_avail"  id="sec2">
    <div class="profile_lyr">
       <div class="profile_sec_avail_text">Update Your Nursery </div>
       <div class="profile_info_edit">
        <form class="frms" action="" onSubmit={handleSubmit}>
            {toggle ? <input type="text" name='name' value={`Samarth`} /> : 
            <input type='text' name='name'/>}
            {toggle ? <input type="text" name='address' value={`Sangli`}/> : 
            <input type='text' name='address'/>}
            {toggle ? <input type="text" name='phone' value={`1234567890`}/> : 
            <input type='text' name='phone'/>}
            {toggle ? <input type="text" name='offday' value={`Sunday`}/> : 
            <input type='text' name='offday'/>}
            <div class="tms">
             <div class="st_tm">Open :  8:00</div>
            <div class="cl_tm">Close :  5:00</div>
            </div>
            <div class="eml">Email : rahul@mail.com</div>
            {toggle ? <div class="profile_edit_submit"> <button onClick={(e) => {e.preventDefault();setToggle(!toggle)}}>Edit</button></div>:
            <div class="profile_edit_submit"> <button type='submit' onClick={(e) => {e.preventDefault();setToggle(!toggle)}}>Submit</button></div>}
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