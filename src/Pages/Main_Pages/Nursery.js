import React, { useEffect,useState } from 'react'
import axios from 'axios'

export const Nursery = () => {
const [nurs,setnurs] = useState([])
  const [lgt ,setlgt] = useState(0.0);
  const [lgn ,setlgn] = useState(0.0);


  navigator.geolocation.getCurrentPosition( async function(position) {
       
       
    setlgt(position.coords.longitude);

    setlgn(position.coords.latitude);
  
})




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
    <div>Nursery</div>
    
    {
      nurs.map((it)=>(
        <>  
        <h1>{it.name}</h1>
        
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
    }
   </>
  )
}
