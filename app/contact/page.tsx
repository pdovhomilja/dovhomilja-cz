"use client";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = useCallback(() => {
    console.log("valid");
  }, []);

  return (
    <div className="w-full">
      <h1>Contact me</h1>
      <form
        className="form-control w-full max-w-xs border rounded-md p-5 space-y-2"
        onSubmit={handleSubmit(onValid)}
      >
        <label htmlFor="email" className="label">
          <span className="label-text">email</span>
        </label>
        <input
          type={"text"}
          color={"ghost"}
          id={"email"}
          className="rounded-md px-2 text-xs"
        />
        <span className="label-text text-error">An error</span>
        <button className="border rounded-md py-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
