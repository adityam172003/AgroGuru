import React from 'react'
import "../Styles/profile_page_ui.css"
import { useNavigate } from 'react-router-dom'
const ProfileMarNa = () => {

const navigate = useNavigate();

  return (
    <>
    <section class="profile_sec profile_not_avail" id="sec3">
            <div class="profile_lyr">
                <div class="profile_not_text">Elevate your plant market to new heights by showcasing it on our website. Join our thriving community and let your green business flourish like never before!</div>
                <div class="profile_not_btn"><button onClick={() => navigate('/form/marketf')}>Add Market</button></div>
            </div>
        </section>
        </>
  )
}

export default ProfileMarNa