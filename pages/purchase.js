import Link from 'next/link';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Layout from '../components/Layout';

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control
  } = useForm();

  const submitHandler = ({email, password }) => {
    console.log( email, password);
  };
  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Purchase</h1>
        <div className="mb-4">
         <label htmlFor="phone-input">Enter Phone Number</label>
         <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="KE"
              id="phone-input"
            />
          )}
        />
        {errors["phone-input"] && (
          <p className="error-message">Invalid Phone Number</p>
        )}
        </div>
        <div className="mb-4">
          <label htmlFor="number">Enter Airtime Amount</label>
          <input
            type="number"
            {...register('number', {
              required: 'Please enter airtime amount to purchase',
              minLength: { value: 2, message: 'amount is more than 10/-' },
            })}
            className="w-full"
            id="number"
            autoFocus
          ></input>
          {errors.number && (
            <div className="text-red-500 ">{errors.number.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Purchase</button>
        </div>
      </form>
    </Layout>
  );
}