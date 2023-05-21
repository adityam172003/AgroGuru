import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainNavbar } from '../../Component/MainNavbar'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDetail from '../../Component/UserDetail'
import ProfileNurAv from '../../Component/ProfileNurAv'
import ProfileNurNa from '../../Component/ProfileNurNa'
import ProfileMarAv from '../../Component/ProfileMarAv'
import ProfileMarNa from '../../Component/ProfileMarNa'
import ProfileLabAv from '../../Component/ProfileLabAv'
import ProfileLabNa from '../../Component/ProfileLabNa'
import FooterWeb from '../../Component/FooterWeb'


export const Profile = () => {

  
  const nevigate = useNavigate();
  const [dat,setdat ] =useState({});

  const [isNur, setIsNur] = useState();
  const [isMar, setIsMar] = useState();
  const [isLab, setIsLab] = useState();


  const isnursery =()=>{
    let status = 200;
    axios.get('/nursery/usernursery')
    .then((res)=>{
      status = res.status;
    })
    .catch((err)=>{
     status=err.status
      console.log(err);
    })

    
    if(status ==200)
  {
    setIsNur(true);
    
  }
  else{
    setIsNur(false);
  }


  }

  
  
  const islab =  ()=>{
    let status = 200
    axios.get('/lab/userlab')
    .then((res)=>{
      status= res.status;
    })
    .catch((err)=>{
      console.log(err);
    })


    if(status ==200)
    {
      setIsLab(true);
      
    }
    else{
      setIsLab(false);
    }
  
  }
  
  const ismarket =  ()=>{
    let status = 200
    axios.get('/market/usermarket')
    .then((res)=>{
      status = res.status;
    })
    .catch((err)=>{
      console.log(err);
    })
    if(status ==200)
    {
      setIsMar(true);
      
    }
    else{
      setIsMar(false);
    }
  }
  const getuser = ()=>{
     axios.get('/user/getuser')
    .then((res)=>{
       setdat(res.data);
       
    })
    .catch(()=>{
       
        nevigate('/');
        alert("Please Login first");
    })
    

       
}

useEffect(()=>{

    getuser();

    isnursery();
    islab();
    ismarket();
  
},[])

console.log(dat.name);
  return (
    
    <>
    <MainNavbar />
        
    <UserDetail name={dat.name} email={dat.email} phone = {dat.phone} />
    {isNur ? <ProfileNurAv/> : <ProfileNurNa/>}
    {isMar ? <ProfileMarAv/> : <ProfileMarNa/>}
    {isLab ? <ProfileLabAv/> : <ProfileLabNa/>}
    <FooterWeb/>
    <Outlet/>
    </>
  )
}
