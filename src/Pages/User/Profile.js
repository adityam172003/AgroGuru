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
  const [dat,setdat ] =useState();

  const [isNur, setIsNur] = useState(true);
  const [isMar, setIsMar] = useState(false);
  const [isLab, setIsLab] = useState(false);

  const getuser = async()=>{
    await axios.get('/user/getuser')
    .then((res)=>{
       setdat(res.data.name);
       console.log(res.data.name)
    })
    .catch(()=>{
       
        nevigate('/');
        alert("Please Login first");
    })
    

       
}

useEffect(()=>{
    getuser();
},[])


  return (
    
    <>
    <MainNavbar/>
        
    <UserDetail />
    {isNur ? <ProfileNurAv/> : <ProfileNurNa/>}
    {isMar ? <ProfileMarAv/> : <ProfileMarNa/>}
    {isLab ? <ProfileLabAv/> : <ProfileLabNa/>}
    <FooterWeb/>
    <Outlet/>
    </>
  )
}
