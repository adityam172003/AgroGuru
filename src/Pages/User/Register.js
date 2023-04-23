import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/Register.css'

const Register = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required !"),
        email: yup.string().email().required(),
        mobile: yup.number().positive().integer().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match !")
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Enter your Full Name' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="email" placeholder='Enter your Email' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="text" placeholder='Enter your Mobile Number' {...register("mobile")}/>
        <p>{errors.age?.message}</p>
        <input type="password" placeholder='Enter Password' {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="password" placeholder='Confirm Password' {...register("confirmPassword")}/>
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit"/>
    </form>
  )
}

export default Register