import React, { useEffect,useState } from 'react'
import axios from 'axios'
import '../../Styles/nursery_page_ui.css'
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NurseryImages from '../../NurseryImages';
import Slider from '../../Component/Slider';
import MapRoute from '../../Component/MapRoute';
import { Link } from 'react-router-dom';


<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
export const Nursery = () => {
const [nurs,setnurs] = useState([])
  const [lgt ,setlgt] = useState(0.0);
  const [lgn ,setlgn] = useState(0.0);


 useEffect(()=>{
  navigator.geolocation.getCurrentPosition( async function(position) {
       
       
    setlgt(position.coords.longitude);

    setlgn(position.coords.latitude);
  
})

 },[])


  const getNursery = async()=>{
    axios.get("/nursery/getnursery", {
      params:{
        lng:JSON.stringify(lgn),
        lat:JSON.stringify(lgt)
      }
    })
    .then((dat)=>{
     
      const data=dat.data;
      setnurs(data);
     console.log(dat);
      console.log(data)
      console.log(nurs)
      

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getNursery();
  },[]) 
  
  return (
   <>
   <section id="nur_page">
       
       <div id="nur_news_cl">
        <Slider img={NurseryImages}/>
       </div>
  
       <section id="nur_gallery">
       <div id="nur_title">Plant Nurseries in Pune</div>
      <div id='nur_gall_scr'>
           
           {
            nurs.map((it)=>(
            <div id="nur_cart">
               <div id="nur_img_n_cnt">
                   <div id="img_dv"><img src={`https://agroguru.onrender.com/uploads/${it.nurseryImage}`} alt="" width="300px" height="250px"/></div>
                   <div>
                       <p id="nur_name">{it.name}</p>
                       <p id="nur_addr">{it.address}</p>
                       <div id="nur_tm">
                           <div><span id="optime">open </span>{it.timing.opening}</div>
                           <div><span id="cltime">close </span>{it.timing.closing}</div>
                       </div>
                       <div id="nur_pg_phone">
                           <div class="but" id="nur_phone">{it.phone}</div>
                           <div class="but">
                              <Link to={`/map/${it.geometry.coordinates[0]}/${it.geometry.coordinates[1]}`} id="nur_map">map</Link>
                           </div>
                       </div>
                   </div>
               </div>
               <div id="nur_cart_imgs">
               <Carousel  showThumbs={false}  autoPlay={true}  infiniteLoop={true}>
               {
            (it.Items)?it.Items.map((i)=>(
              <>
              <div className='item_img'>
                    <img src={`https://agroguru.onrender.com/uploads/${i.photo}`} width={200} height={250}/>
                    <span className='itemname'>{i.itemname}</span>
                </div>
              </>

            )):'/'
           
           }
                
            </Carousel>
               </div>
           </div>))
           
           }

        {/* <----------------------- Static Nursery Code below for CSS Styling -------------------> */}

        {/* {
            <div id="nur_cart">
               <div id="nur_img_n_cnt">
                   <div id="img_dv"><img src={'../../../public/assets/ft2_img.jpg'} alt="" width="300px" height="250px"/></div>
                   <div>
                       <p id="nur_name">My nursery</p>
                       <p id="nur_addr">Katraj, Pune</p>
                       <div id="nur_tm">
                           <div><span id="optime">open </span>8.00 AM</div>
                           <div><span id="cltime">close </span>6.00 PM</div>
                       </div>
                       <div id="nur_pg_phone">
                           <div class="but" id="nur_phone">9156331100</div>
                           <button class="but" id="nur_map">map</button>
                       </div>
                   </div>
               </div>
               <div id="nur_cart_imgs">
               <Carousel  showThumbs={false}  autoPlay={true}  infiniteLoop={true}>
               {
            (it.Items)?it.Items.map((i)=>(
              <>
              <div className='item_img'>
                    <img src={`https://agroguru.onrender.com/uploads/${i.photo}`} width={200} height={250}/>
                    <span className='itemname'>{i.itemname}</span>
                </div>
              </>
            )):'/'
           
           }
                
            </Carousel>
               </div>

              <MapRoute />

           </div>} */}

        </div>
       </section>
   </section>
    {/* <div>Nursery</div>
    
    {
      nurs.map((it)=>(
        <>  
        <h1>{it.name}</h1>
        <img
               src={`http://localhost:8080/uploads/${it.nurseryImage}`}
               >
             </img>
        {
            (it.Items)?it.Items.map((i)=>(
              <>
              <h2>{i.itemname}</h2>
             
              <img
               src={`http://localhost:8080/uploads/${i.photo}`}
               >
             </img>
              </>
            )):'-'
           
        }
        </>
      ))
    } */}
   </>
  )
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));