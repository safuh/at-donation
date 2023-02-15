import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Layout from '@/components/Layout';

export default function CreateDonationScreen() {
 
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      target: "",
      description: "",
    },
    mode: "onBlur"
  });

  const onSubmit = ({title, target, description}) => {
    console.log(title, target, description);
  }

  return (
    <Layout title="Create Donation">
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='mb-4 text-xl uppercase font-black'>Create a donation link</h1>
        <div className="mb-4">
          <label htmlFor="title">Donation Project Title</label>
          <input
            type="text"
            className="w-full"
            id="title"
            autoFocus
            {...register('title', {
              required: 'Please enter title',
            })}
          />
          {errors.title && (
            <div className="text-red-500">{errors.title.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="target">Target Amount</label>
          <input
            {...register('target', {
              required: 'Please enter the target amount for your donation',
              minLength: {
                value: 3,
                message: 'the minimum recommended limit is 100/-',
              },
            })}
            className='w-full'
            id='target'
            autoFocus
          />
          {errors.target && (
            <div className="text-red-500">{errors.target.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description">Describe the donation course</label>
          <textarea
            className="w-full"
            id="description"
            autoFocus
            {...register('description', {
              required: 'Please enter description',
            })}
          />
          {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Submit</button>
        </div >
      </form>
    </Layout>
  );
}