import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/Register.css'


const NurseryForm = () => {
    
    const schema = yup.object().shape({
        name: yup.string().required("Nursery name is required"),
        address: yup.string().required("Address must be provided"),
        email: yup.string().email("It should end with domain").required("Email is required"),
        phone: yup.number()
                .typeError("That does not look like phone number")
                .positive().integer("Enter valid Integer")
                .required("Contact number is required"),
        openTime: yup.string().required("Enter Opening Time"),
        closeTime: yup.string().required("Enter Closing Time"),
        offDay: yup.string().required("Off-Day is required"),
        
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit =async (data) => {
      console.log(data);
    }


    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Enter Name of Nursery' {...register("name")}/>
        <p>{errors.name?.message}</p>
        <input type='text' placeholder='Address of Nursery' {...register('address')}/>
        <p>{errors.address?.message}</p>
        <input type="email" placeholder='Enter Contact-Email of Nursery' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="text" placeholder='Enter Contact-Number of Nursery' {...register("phone")}/>
        <p>{errors.phone?.message}</p>
        <input type='time' placeholder='Opening Time' {...register("openTime")}/>
        <p>{errors.openTime?.message}</p>
        <input type='time' placeholder='Closing Time' {...register("closeTime")}/>
        <p>{errors.closeTime?.message}</p>
        <input type="text" placeholder='Enter your Off-Day' {...register("offDay")}/>
        <p>{errors.offDay?.message}</p>
        <input type="submit"/>
    </form>
  )
}

export {NurseryForm}