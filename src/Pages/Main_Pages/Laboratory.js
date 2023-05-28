/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
// import labketlogo from '../../static/labket-lottie.json'
// import Lottie from '../../Component/Lottie'
import axios from 'axios';
import '../../Styles/LaboratoryPage.css'
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'

<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

export const Laboratory = () => {

  const [labs,setlabs] = useState([])
  const [lgt ,setlgt] = useState(0.0);
  const [lgn ,setlgn] = useState(0.0);

  const getLaboratory = async()=>{
    axios.get("/lab/getlaboratory", {
      params:{
        lng:JSON.stringify(lgn),
        lat:JSON.stringify(lgt)
      }
    })
    .then((dat)=>{
     
      const data=dat.data;
      setlabs(data);
      // console.log(labs)
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

    getLaboratory();
  },[]) 

  return (
    <>
      <section id="lab_page">
       <section id="lab_gallery">
           <div id="lab_title">Laboratories in Pune</div>
           {
            labs.map((it)=>(<div id="lab_cart">
               <div id="lab_img_n_cnt">
                   <div id="img_dv"><img src={`https://agroguru.onrender.com/uploads/${it.laboratoryImage}`} alt="" width="300px" height="250px"/></div>
                   <div>
                       <p id="lab_name">{it.name}</p>
                       <p id="lab_addr">{it.address}</p>
                       <div id="lab_pg_phone">
                           <div class="but" id="lab_phone">{it.phone}</div>
                           <div class="but">
                              <Link to={`/map/${it.geometry.coordinates[0]}/${it.geometry.coordinates[1]}`} id="nur_map">map</Link>
                           </div>
                       </div>
                   </div>
               </div>
               <div id="lab_cart_imgs">
               <Carousel  showThumbs={false}  autoPlay={true}  infiniteLoop={true}>
               {
            (it.Services)?it.Services.map((i)=>(
              <>
              <div className='item_img'>
                    <img src={`https://agroguru.onrender.com/uploads/${i.photo}`} width={200} height={250}/>
                    <span className='itemname'>{i.sname}</span>
                </div>
              </>
            )):'/'
           
           }
                
            </Carousel>
          </div>
           </div>))}
       </section>
   </section>
    </>
  )
}
