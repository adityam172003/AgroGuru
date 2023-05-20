import React from 'react'
import "../Styles/profile_page_ui.css"
import { useNavigate } from 'react-router-dom'

const ProfileNurNa = () => {

  const navigate = useNavigate();

  return (
    <>
    <section class="profile_sec profile_not_avail"  id="sec1">
            <div class="profile_lyr">
                <div class="profile_not_text">Unlock endless possibilities for your nursery by showcasing it on our website - join our vibrant network and let your success blossom!</div>
                <div class="profile_not_btn"><button onClick={() => navigate('/form/nurf')}>Add Nursery</button></div>
            </div>
        </section>
        </>
  )
}

export default ProfileNurNa