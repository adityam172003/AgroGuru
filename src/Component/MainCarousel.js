import React from 'react'
import '../Styles/Home_page_ui.css'

const MainCarousel = () => {
  return (
        <section id="home_hero_sec">
           <div id="hero_img_sec">
            <div id="hero_img_cover_sec">
            </div>
            <div id="hero_img_text">
                <div id="hero_img_text1">EXPLORE</div><br/>
                <div id="hero_img_text2">FARMING</div>
                <div id="hero_img_text3">"Explore new frontiers in farming and unlock the full potential of your land with our comprehensive farming resources and tools."</div>
            </div>
           </div>
           <div id="hero_cnt">
              <div id="hero_cnt1" class="hc">
                <p>Increase your yield and reduce your risks with accurate crop predictions based on advanced data analysis and machine learning algorithms.</p>
              </div>
              <div id="hero_cnt2" class="hc">
                <p>Maximize your crop yield and profits with our user-friendly platform that connects you directly to buyers and sellers on the market.</p>
              </div>
              <div id="hero_cnt3" class="hc">
                <p>Easily locate quality nurseries and  laboratory testing services to ensure the success of your crop with our comprehensive farming platform.</p>
              </div>
           </div>
        </section>
  )
}

export default MainCarousel