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
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
         <label htmlFor="phone-input">Phone Number</label>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password is more than 5 characters' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
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