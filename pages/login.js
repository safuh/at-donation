import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Layout from '../components/Layout';
import 'react-phone-number-input/style.css'

export default function LoginScreen() {
  const [value, setValue] = useState();
  var reg = new RegExp('^((01) | (07))[0-9]{8}$', 'i');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data.phone)
  }

  return (
    <Layout title="Login">
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='mb-4 text-xl uppercase font-black'>Login</h1>
        <div className='mb-4'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type="tel"
            {...register("phone", {
              required: true,
              pattern: {
                value: /^\+254\d{9}$/,
                message: "Please enter a valid Kenyan phone number starting with +254"
              }
            })}
            className="w-full"
            id="phone"
            autoFocus
          />
          {errors.phone && (
            <div className="text-red-500 ">{errors.phone.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="password">Password</label>
          <input
            //  type="password" 
            {...register('password', {
              required: 'Please enter password',
              minLength: {
                value: 6,
                message: 'password is more than 5 characters',
              },
            })}
            className='w-full'
            id='password'
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}