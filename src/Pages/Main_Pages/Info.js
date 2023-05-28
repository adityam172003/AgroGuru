import React from 'react'
// import BasicModal from '../../Component/Modal'
import Weather from '../../Component/Weather'
// import Lottie from '../../Component/Lottie'
// import weather from '../../static/weather-lottie.json' 
import News from '../../Component/News'
import "../../Styles/Info_page_ui.css"
import MapRoute from '../../Component/MapRoute'

const Info = () => {
  return (
    <div className='info'>
      <section id='info_page'>
        <section id="info_pg_top">
        <Weather />
          <div id="info_crsl">
                    <div id="info_crsl_cover">
                        <p>Get in Touch with the New Trends
                            In Agriculture</p>
                    </div>
                </div>
          
        </section>
        <News />
      </section>
    </div>
  )
}

export default Info