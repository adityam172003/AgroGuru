import React from 'react'
import Features from '../../Component/Features'
import image1 from '../../images/2.jpg'
import { MainNavbar } from '../../Component/MainNavbar'
import Slider from '../../Component/Slider'
import "../../Styles/About_us_ui.css"
import FooterWeb from '../../Component/FooterWeb'

export const About = () => {
  return (
    <div>
      <MainNavbar/>
      <section id="abt_us">
        <div id="logo_info">
            <div id="abt_img">
                <div id="abt_img_cover">
                    <p id="abt_logo"><span id="sp_1">Agro</span><span id="sp_2">Guru</span></p>
                    <p id="abt_logo_info">Empowering farmers with knowledge and resources for successful farming
                        practices.</p>
                </div>
            </div>
            <p id="abt_desc" class="pcnt">Agroguru is an innovative online platform designed to support farmers in their
                journey towards successful farming practices. Our cutting-edge features include machine learning-based
                crop prediction, a plant nursery service, and a plant laboratory. We also offer a unique marketplace for
                farmers to sell and buy their crops. Our comprehensive resources and expert community make agroguru the
                go-to destination for farmers looking to improve their yields, reduce costs, and increase profits. Start
                exploring now and revolutionize your farming practices!</p>
        </div>
        <div id="our_msn">
            <h2>Our Mission</h2>
            <p class="pcnt">Our mission at agroguru is to revolutionize the farming industry by providing farmers with
                the latest technology, research, and expert guidance for sustainable and profitable farming practices.
            </p>
        </div>
        <div id="our_tm">
            <h2>Our dedicated Team</h2>
            <p id="team_desc" class="pcnt">Meet the agroguru web development team,the driving force behind our user-friendly platform
                for farmers.</p>
            <div id="team">
                <div class="mem_img" id="m1"></div>
                <div id="d1" class="mem_d">
                    <p class="mem_name">Aditya Mahajan</p>
                    <p class="mem_work">Backend Developer</p>
                    <p class="social_med">
                        <ul class="sc_med_ic">
                            <li><a href="https://www.linkedin.com/in/aditya-mahajan-b5b8b7229/" class="li_link"></a></li>
                            <li><a href="" class="in_link"></a></li>
                            <li><a href="" class="fb_link"></a></li>
                        </ul>
                    </p>
                </div>

                <div class="mem_img" id="m2"></div>
                <div id="d2" class="mem_d">
                    <p class="mem_name">Samarth Mali</p>
                    <p class="mem_work">Frontend UX Developer</p>
                    <p class="social_med">
                        <ul class="sc_med_ic">
                            <li><a href="" class="li_link"></a></li>
                            <li><a href="" class="in_link"></a></li>
                            <li><a href="" class="fb_link"></a></li>
                        </ul>
                    </p>
                </div>

                <div class="mem_img" id="m3"></div>
                <div id="d3" class="mem_d">
                    <p class="mem_name">Sarthak Nirgude</p>
                    <p class="mem_work">Frontend UX Developer</p>
                    <p class="social_med">
                        <ul class="sc_med_ic">
                            <li><a href="" class="li_link"></a></li>
                            <li><a href="" class="in_link"></a></li>
                            <li><a href="" class="fb_link"></a></li>
                        </ul>
                    </p>
                </div>

                <div class="mem_img" id="m4"></div>

                <div id="d4" class="mem_d">
                    <p class="mem_name">Rahul Patil</p>
                    <p class="mem_work">Frontend UI Developer</p>
                    <p class="social_med">
                        <ul class="sc_med_ic">
                            <li><a href="" class="li_link"></a></li>
                            <li><a href="" class="in_link"></a></li>
                            <li><a href="" class="fb_link"></a></li>
                        </ul>
                    </p>
                </div>

            </div>
        </div>
    </section>
    <FooterWeb/>
    </div>
  )
}
