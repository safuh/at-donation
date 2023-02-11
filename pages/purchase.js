import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Layout from '../components/Layout';
import 'react-phone-number-input/style.css'

export default function PurchaseScreen() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      phone: "",
      amount: "",
    },
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout title="Purchase">
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='mb-4 text-xl uppercase font-black'>Purchase Airtime</h1>
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
          <label htmlFor="amount">Airtime amount</label>
          <input
            //  type="number" 
            {...register('amount', {
              required: 'Please enter the amount you wish to purchase',
              minLength: {
                value: 2,
                message: 'the minimum airtime purchase limit is 10',
              },
            })}
            className='w-full'
            id='amount'
            autoFocus
          />
          {errors.amount && (
            <div className="text-red-500">{errors.amount.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Purchase</button>
        </div >
      </form>
    </Layout>
  );
}