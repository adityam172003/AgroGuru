import React from 'react'
import '../Styles/Home_page_ui.css'
import { useNavigate } from 'react-router-dom'
// import ft1 from '../../public/assets/ft1_img.jpg'


const MainInfo = () => {

    const navigate=useNavigate();

  return (
    
    <section id="features_grid">
               <h1>Revolutionize your farming with us.<span>Explore now!</span></h1>
              <div className={`fts ft1 `}>
                <div className="fts_cnts" id="fts_cnt1">
                    <h3>Maximize your yields with our powerful AI crop prediction.</h3>
                    <p>Crop prediction is a powerful tool that helps farmers optimize their yields and make informed decisions. Our AI-powered prediction technology leverages machine learning to accurately forecast crop growth and yield potential based on various factors. Join us now and unlock the full potential of your crops, transforming your farming business with greater efficiency and productivity.</p>
                    <div id="crp_pred"><button onClick={() => navigate('/services/crop')}>Visit</button></div>
                </div>
                <div className="fts_imgs" id="fts_img1">
                    <div id="e1"></div>
                    <div id="e2"></div>
                    <img src="/assets/ft1_img.jpg" alt="" width="380rem" />
                </div>
              </div>
              <div className="fts ft2">
                <div className="fts_imgs" id="fts_img2">
                    <div id="e1"></div>
                    <div id="e2"></div>
                    <div id="e3"></div>
                    <img src="/assets/ft2_img.jpg" alt="" width="380rem"/>
                </div>
                <div className="fts_cnts" id="fts_cnt2">
                    <h3>Discover the perfect crop for your needs at plant nursery.</h3>
                    <p>We understand the importance of finding the right crops for your farm. That's why we offer a diverse selection of quality plants to help you maximize your yields. Join us now and discover the perfect crop to suit your needs and take your farming to new heights!</p>
                    <div id="nur_btn"><button onClick={() => navigate('/services/nur')}>Search</button></div>
                </div>
              </div>
              <div className="fts ft3">
                <div className="fts_cnts" id="fts_cnt3">
                    <h3>Explore the finest selection of fresh and high-quality crops at our plant market.</h3>
                    <p>Experience the taste of farm-fresh produce at market. From seasonal fruits and vegetables to herbs and flowers,wide range of locally grown products that are sure to satisfy your cravings for quality and freshness.</p>
                    <div id="mar_btn"><button onClick={() => navigate('/services/market')}>Explore Now</button></div>
                </div>
                <div className="fts_imgs" id="fts_img3">
                    <div id="e1"></div>
                    <div id="e2"></div>
        
                    <img src="/assets/ft3_img.jpg" alt="" width="380rem" />
                </div>
              </div>
              <div className="fts ft4">
        
                <div className="fts_imgs" id="fts_img4">
                    <div id="e1"></div>
                    <div id="e2"></div>
                    <div id="e3"></div>
                    <img src="/assets/ft4_img.jpg" alt="" width="380rem"/>
                </div>
                <div className="fts_cnts" id="fts_cnt4">
                  <h3>Optimize crop growth with advanced plant laboratory services.</h3>
                  <p>Transform your farming practices with our innovative plant laboratory. From soil and water testing to crop analysis and disease diagnosis, we offer comprehensive solutions to help you optimize your yields and improve your farm's sustainability. </p>
                  <div id="lab_btn"><button onClick={() => navigate('/services/lab')}>Check out</button></div>
              </div>
              </div>
              <div className="fts ft5">
                <div className="fts_cnts" id="fts_cnt1">
                    <h3>Stay up-to-date with the latest agricultural trends through our informative feature.</h3>
                    <p>Our informative feature is your go-to source for the latest news and trends in agriculture. From innovative farming practices to emerging technologies and industry insights, we provide in-depth coverage to help you stay informed and ahead of the game.</p>
                    <div id="info_btn"><button onClick={() => navigate('/services/info')}>Go</button></div>
                </div>
                <div className="fts_imgs" id="fts_img5">
                    <div id="e1"></div>
                    <div id="e2"></div>
                    <img src="/assets/ft5_img.jpeg" alt="" width="380rem" />
                </div>
              </div>
        
        
        </section>
  )
}


export default MainInfo;