import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "../Styles/profile_page_ui.css"
import axios from 'axios'



const ProfileMarAv = ({market}) => {



    const [toggle, setToggle] = useState(true)
   const [item,setitem] = useState('')
   const [price,setprice] = useState('');

    const setitems = ()=>{
        const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*",
            }
            
          }


        axios.post('/market/additems',{item,price},axiosConfig)
        .then((e)=>{
            alert("item added");
        })
        .catch(err=>{
            console.log(err);
        })
    }


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


        axios.patch('/market/marketup',data,axiosConfig)
        .then((e)=>{
            alert("nursery  updated ");
        })
        .catch(err=>{
            console.log(err);
        })
     
    }

  return (
    <>
    <section class="profile_sec profile_avail"  id="sec4">
    <div class="profile_lyr">
        <div class="profile_sec_avail_text">Update Market Info</div>
        <div class="profile_info_edit">
            <form class="frms" action="" onSubmit={handleSubmit(onSubmit)}>
            <input type='text' name='name' placeholder={`Name : ${market.name}`} {...register("name")}/>
            <input type='text' name='address' placeholder={market.address} {...register('address')}/>
            <input type='text' name='phone' placeholder={market.phone} {...register("phone")}/>
            <input type='text' name='offday' placeholder='sunday' {...register("offDay")}/>
            <div class="tms">
                {/* <div class="st_tm">Open :  8:00</div>
                <div class="cl_tm">Close :  5:00</div> */}
            </div>
            {/* <div class="eml">Email : </div> */}
            <div class="profile_edit_submit">
                <button>Update</button>
            </div>
            </form>
           </div>
           <div class="profile_item_add">
            <p class="it_add_text">Add New Items</p>
            <form class="profile_edit_add_it" action="">
                <div class="it_nm">
                    <label for="">Item Name</label><br/><input onChange={(e)=>{setitem(e.target.value)}} type="text"/>
                </div>
                <div class="it_second">
                    <label for="">Item Price</label><br/><input onChange={(e)=>{setprice(e.target.value)
                    }} type="text"/>
                </div>
                <div class="it_submit"><button onClick={(e)=>{
                    e.preventDefault();
                    setitems();
                }}>submit</button></div>
            </form>
           </div>
        </div>
</section>
</>
  )
}

export default ProfileMarAv