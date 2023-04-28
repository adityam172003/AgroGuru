import React, { useEffect,useState } from 'react'
import axios from 'axios'

export const Nursery = () => {

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
    .then((data)=>{
      console.log(data);

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getNursery();
  })

  return (
    <div>Nursery</div>
  )
}
