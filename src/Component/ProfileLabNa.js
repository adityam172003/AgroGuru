import React from 'react'
import "../Styles/profile_page_ui.css"
import { Link, useNavigate } from 'react-router-dom'

const ProfileLabNa = () => {

    const navigate = useNavigate();

  return (
    <>
    <section class="profile_sec profile_not_avail" id="sec5" >
            <div class="profile_lyr">
                <div class="profile_not_text" id="more_text">Unleash the power of your plant laboratory by adding it to our website.And embark on a journey of discovery that will push the boundaries of plant science and revolutionize the green industry!</div>
                <div class="profile_not_btn"><button onClick={() => navigate('/form/labf')}>Add Lab</button></div>
                {/* <div class="profile_not_btn"><Link to='/form/labf'>Add Lab</Link></div> */}
            </div>
        </section>
        </>
  )
}

export default ProfileLabNa