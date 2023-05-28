import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import "../Styles/profile_page_ui.css"
import axios from 'axios'


var bodyFormData = new FormData();

const ProfileLabAv = ({lab}) => {
    const [sname,setName]=useState("");
    const [photo,setphoto]     = useState('');
    const schema = yup.object().shape({
        name: yup.string(),
        address: yup.string(),
        phone: yup.number(),
        offDay: yup.string().required("Off-Day is required"),
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });


    
    const setImage  = ()=>
    {
       
        bodyFormData.append('sname',sname);
        bodyFormData.append('photo',photo);
        const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
            
          }
        axios.post('/lab/itemadd',bodyFormData,axiosConfig,)
        .then((res)=>{
            alert("item added successfully");


        })
        .catch((er)=>{
            console.log(er);
        })
        
    }





    const onSubmit = (data) => {
        const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*",
            }
            
          }


        axios.patch('/lab/labup',data,axiosConfig)
        .then((e)=>{
            alert(" lab updated ");
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const imageSubmitHandle = async (e) => {
        e.preventDefault();
        console.log()
        // console.log()
        // // const itemName = e.target.value.itemName;
        // // const itemImage = e.target.value.itemImage;
        // // setImageForm({itemName, itemImage});

        // itemFormData.append("itemname",e.target.itemName.value);
        // itemFormData.append("photo",e.target.itemImage.files[0]);
        // const  axiosConfig = {            
        //     headers: {
        //         'Content-Type': "multipart/form-data",
        //         "Access-Control-Allow-Origin": "*",
        //     }
        // }
        // await axios.post('/laboratory/itemadd',itemFormData,axiosConfig)
        // .then((it)=>{
        //     console.log("item added");
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
        // e.target.reset();
    }

    return (
    <>
    <section class="profile_sec profile_avail" i id="sec6">
            <div class="profile_lyr">
                <div class="profile_sec_avail_text">Update Lab</div>
                <div class="profile_info_edit">
                    <form class="frms" action="" onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' name='name' placeholder={`Name : ${lab.name}`} {...register("name")}/>
                    <input type='text' name='address' placeholder={lab.address} {...register('address')}/>
                    <input type='text' name='phone' placeholder={lab.phone} {...register("phone")}/>
                    <input type='text' name='offday' placeholder='sunday' {...register("offDay")}/>
                        <div class="tms">
                        {/* <div class="st_tm">Open :  8:00</div>
                        <div class="cl_tm">Close :  5:00</div> */}
                        </div>
                        {/* <div class="eml">Email : rahul@mail.com</div> */}
                        <div class="profile_edit_submit">
                            <button>Update</button>
                        </div>
                    </form>
                   </div>
                   <div class="profile_item_add">
                    <p class="it_add_text">Add New Items</p>
                        <form class="profile_edit_add_it" action="" onSubmit={imageSubmitHandle}>
                        {/* <div class="it_nm">
                            <label for="">Item Name</label><br/><input type="text"/>
                        </div>
                        <div class="it_second">
                            <label for="">Item Image</label><br/><input type="file"/>
                        </div>
                        <div class="it_submit"><button>submit</button></div> */}
                            <div className='it_nm'>
                            <label>Item Name</label>
                                <input onChange={(e)=>{
                                    setName(e.target.value);
                                }} type="text" name='itemName'/>
                            </div>
                            <div className="it_second">
                            <label>Item Images</label>
                                <input onChange={(e)=>{
                                    setphoto(e.target.files[0])
                                }} type="file" name='itemImage'/>
                            </div>
                            <div className="it_submit">
                                <button id="lab_form_item_sub"  onClick={(e)=>{
                                    e.preventDefault();
                                    setImage();
                                }} type='submit'>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
    
        </section>
    </>
  )
}

export default ProfileLabAv