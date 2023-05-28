/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import marketlogo from '../../static/market-lottie.json'
import Lottie from '../../Component/Lottie'
import axios from 'axios';
import '../../Styles/MarketPage.css'
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

export const Market = () => {

  const [mars,setmars] = useState([])
  const [lgt ,setlgt] = useState(0.0);
  const [lgn ,setlgn] = useState(0.0);

  const getMarket = async()=>{
    axios.get("/market/getmarket", {
      params:{
        lng:JSON.stringify(lgn),
        lat:JSON.stringify(lgt)
      }
    })
    .then((dat)=>{
     
      const data=dat.data;
      setmars(data);
      // console.log(mars)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    
  navigator.geolocation.getCurrentPosition( async function(position) { 
    setlgt(position.coords.longitude);
    setlgn(position.coords.latitude);
  })

    getMarket();
  },[]) 

  return (
    <>
      <Lottie data={marketlogo} height={`400px`} width={'100%'} />
      <section id="mar_page">
       <section id="mar_gallery">
           <div id="mar_title">Markets in Pune</div>
           <div id='mar_gall_scr'>
           {
            mars.map((it)=>(<div id="mar_cart">
               <div id="mar_img_n_cnt">
                   <div id="img_dv"><img src={`https://agroguru.onrender.com/uploads/${it.marketImage}`} alt="" width="300px" height="250px"/></div>
                   <div>
                       <p id="mar_name">{it.name}</p>
                       <p id="mar_addr">{it.address}</p>
                       <div id="mar_pg_phone">
                           <div class="but" id="mar_phone">{it.phone}</div>
                           <div class="but">
                              <Link to={`/map/${it.geometry.coordinates[0]}/${it.geometry.coordinates[1]}`} id="nur_map">map</Link>
                           </div>
                       </div>
                   </div>
                   <div id='mar_item_array'>  
                     { 
                      it.items.map((i)=>(
                        <p>{i.item+' : '+i.price}</p>
                      ))}
                   </div>
               </div>
           </div>))}
           </div>
       </section>
   </section>
    </>
  )
}
