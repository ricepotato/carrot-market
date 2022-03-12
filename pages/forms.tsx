import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
// Less code
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events
// Easier inputs

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onSubmit" });
  const onValid = (data: LoginForm) => {
    console.log("im vaild");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required.",
          minLength: {
            message: "The username should be longer than 3 char.",
            value: 3,
          },
        })}
        type="text"
        placeholder="Username"
        className={`${Boolean(errors.username) ? "border-red-500" : ""}`}
      ></input>
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required.",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed.",
          },
        })}
        type="email"
        placeholder="email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      ></input>
      {errors.email?.message}
      <input
        {...register("password", { required: "password is required." })}
        type="password"
        placeholder="Password"
        className={`${Boolean(errors.password) ? "border-red-500" : ""}`}
      ></input>
      {errors.password?.message}
      <input type="submit" value="Create Account"></input>
    </form>
  );
}
