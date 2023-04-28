import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import * as yup from 'yup'
import '../../Styles/reg_page_ui.css'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const nevigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required("Your full name is required !"),
        email: yup.string().email("Enter valid Email").required("Email is required"),
        phone: yup.number()
            .typeError("That does not look like phone number")
            .positive().integer("Enter valid Integer")
            .required("Contact number is required"),
        password: yup.string().min(4).max(20).required("Password is must"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match !")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        let response;
        let status = 200;
        await axios.post('/user/register', { data }, axiosConfig)
            .then(data => {
                response = data;


            })
            .catch(err => {

                status = (err.response.status);

            })





        if (status == 200) {
            alert("Account is created please login");
            nevigate('/login')
        }
        else if (status == 409) {
            alert("Account is already created please login");
            nevigate('/login')
        }
        else {
            alert("Server error please try anagin letter ");

        }


    }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" placeholder='Enter your Full Name' {...register("name")}/>
        //     <p>{errors.name?.message}</p>
        //     <input type="email" placeholder='Enter your Email' {...register("email")}/>
        //     <p>{errors.email?.message}</p>
        //     <input type="text" placeholder='Enter your phone Number' {...register("phone")}/>
        //     <p>{errors.phone?.message}</p>
        //     <input type="password" placeholder='Enter Password' {...register("password")}/>
        //     <p>{errors.password?.message}</p>
        //     <input type="password" placeholder='Confirm Password' {...register("confirmPassword")}/>
        //     <p>{errors.confirmPassword?.message}</p>
        //     <input type="submit"/>
        // </form>
        <section id="reg_page">
            <div id="reg_page_wp"></div>
            <div id="reg_page_dtl">
                <div id="reg_cnt">
                    <p id="wel_msg">Welcome to AgroGuru!</p>
                    <h3>Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="dv">
                            <label for="reg-name">Enter your Name</label><br/>
                                <input type="text" id="reg-name" {...register("name")}/>
                                    <p className='err'>{errors.name?.message}</p>
                                </div>
                                <div class="dv">
                                    <label for="reg-email">Enter Email</label><br/>
                                        <input type="email" id="reg-email" {...register("email")}/>
                                            <p className='err'>{errors.email?.message}</p>
                                        </div>
                                        <div class="dv">
                                            <label for="reg-phone">Enter Phone Number</label><br/>
                                                <input type="text" id="reg-phone"  {...register("phone")}/>
                                                    <p className='err'>{errors.phone?.message}</p>
                                                </div>
                                                <div class="dv">
                                                    <label for="reg-password">Enter Password</label><br/>
                                                        <input type="password" id="reg-password" {...register("password")}/>
                                                            <p className='err'>{errors.password?.message}</p>
                                                        </div>
                                                        <div class="dv">
                                                            <label for="reg-confpass">Confirm Password</label><br/>
                                                                <input type="password" id="reg-confpass" {...register("confirmPassword")}/>
                                                                    <p className='err'>{errors.confirmPassword?.message}</p>
                                                                </div>
                                                                <div><button>Submit</button></div>
                                                            </form>

                                                        </div>
                                                </div>
                                            </section>
                                            )
}

                                            export default Register