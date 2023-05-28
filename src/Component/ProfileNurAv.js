import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "../Styles/profile_page_ui.css"
import axios from 'axios'
var bodyFormData = new FormData();

const ProfileNurAv = ({nursery}) => {
    const [nur,setNur] = useState(nursery) ;
    const [nurName,setnurName]=useState("");
    const [photo,setphoto]     = useState('');

    const setImage  = ()=>
    {
        console.log(nurName);
        console.log(photo);
        bodyFormData.append('name',nurName);
        bodyFormData.append('photo',photo);
        const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
            
          }
        axios.post('/nursery/itemadd',bodyFormData,axiosConfig,)
        .then((res)=>{
            alert("item added successfully");


        })
        .catch((er)=>{
            console.log(er);
        })
        console.log(photo)
    }
 
           
          
        console.log(nursery);
          console.log(nur);
        const [toggle, setToggle] = useState(true) ;

    const schema = yup.object().shape({
        name: yup.string(),
        address: yup.string(),
        phone: yup.number(),
        offDay: yup.string().required("Off-Day is required"),
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = (data) => {
        console.log(data);

        const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*",
            }
            
          }


        axios.patch('/nursery/nurseryup',data,axiosConfig)
        .then((e)=>{
            alert("nursery  updated ");
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <><section class="profile_sec profile_avail"  id="sec2">
    <div class="profile_lyr">
       <div class="profile_sec_avail_text">Update Your Nursery </div>
       <div class="profile_info_edit">
        <form class="frms" action="" onSubmit={handleSubmit(onSubmit)}>
            <input type='text'  name='name' placeholder={nursery.name} {...register('name')} />
            <input type='text' name='address' placeholder={nursery.address} {...register('address')}/>
            <input type='text' name='phone' placeholder={nursery.phone}  {...register("phone")}/>
            <input type='text' name='offday' placeholder="sunday"  {...register("offDay")}/>
            <div class="tms">
             {/* <div class="st_tm">Open : </div> */}
            {/* <div class="cl_tm">Close : </div> */}
            </div>
           
            <div class="profile_edit_submit">
                <button   >Update</button>
            </div>
            </form>
       </div>
       <div class="profile_item_add">
        <p class="it_add_text">Add New Items</p>
        <form class="profile_edit_add_it" action="">
            <div class="it_nm">
                <label for="">Item Name</label><br/>< input onChange={(e)=>{
                    setnurName(e.target.value)
                }} type="text"/>
            </div>
            <div class="it_second">
                <label for="">Item Image</label><br/><input onChange={(e)=>{
                    setphoto(e.target.files[0]);
                }} type="file"/>
            </div>
            <div class="it_submit"><button onClick={(e)=>{
                e.preventDefault();
                setImage();
            }} >submit</button></div>
        </form>
       </div>
    </div>
</section></>
  )
}

export default ProfileNurAv