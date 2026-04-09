import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndPoint';
import {toast} from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/AuthSlice';


export default function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [value,setValue]=useState({
    email:"zahidtime313@gmail.com",
    password:"12345"
  })

  const hanldeChange=(e)=>{

    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("Form submitted with values:", value)

        try {
          console.log("Making request to /auth/login...")
         
          // Using direct fetch with relative URL (proxy will handle it)
          const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(value),
          });
          
          console.log("Response status:", response.status)
          const data = await response.json()
          console.log("Response data:", data)
         
          if (data.success) {
             toast.success(data.message)
             dispatch(addUser(data.user))
             navigate('/')
          }
        } catch (error) {
          console.log("Full error object:", error)
          toast.error(error.message)
        }
  }
  
  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center '>
      <div className='form-container border shadow p-5 rounded-4 bg-white'>
        <h2 className='text-center mb-4 fw-bold'>Login</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit}>

          <div className="form-group mb-3">
          <label htmlFor="email" className='form-label'>Email</label>

            <input type="email" value={value.email} onChange={hanldeChange} name='email' className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
          </div>

          <div className='form-group mb-3'>
            
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" value={value.password} onChange={hanldeChange} name='password' className='form-control' placeholder='Enter your password' id="password"/>
          </div>

          <button className='btn btn-success w-100 mb-3'>Login</button>

          <div className='text-center'>
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
