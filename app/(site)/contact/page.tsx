"use client";
import InputField from "@/components/InputField";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import Title from "@/components/Title";
import toast, { Toaster } from "react-hot-toast";

type Props = {};

const schema = z.object({
  name: z.string().min(3).max(20),
  phone: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(3).max(100),
});

const Contact = (props: Props) => {
  const [thankyou, setThankyou] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onValid = useCallback(
    (data: unknown) => {
      fetch("http://localhost:3001/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          setThankyou(true);
        })
        .then(() => {
          setTimeout(() => {
            router.push("/");
          }, 3000);
        });
    },
    [router]
  );

  return (
    <div className="flex flex-col w-full">
      {thankyou && (
        <div className="flex justify-center items-center">
          <h1 className="opacity-50">Thank you for your message</h1>
        </div>
      )}

      {!thankyou && (
        <>
          <Title title="Contact me" />
          <form
            className="flex  justify-center items-start form-control w-full border border-opacity-25 rounded-md p-5 space-y-2"
            onSubmit={handleSubmit(onValid)}
          >
            <InputField
              id="name"
              label="Name"
              inputProps={register("name", { required: "Name is required" })}
              error={errors.name?.message as string}
            />
            <InputField
              id="phone"
              label="Phone"
              inputProps={register("phone", { required: "Phone is required" })}
              error={errors.phone?.message as string}
            />
            <InputField
              id="email"
              label="email"
              inputProps={register("email", { required: "E-mail is required" })}
              error={errors.email?.message as string}
            />
            <TextArea
              id="message"
              label="Message"
              inputProps={register("message", {
                required: "Message is required",
              })}
              error={errors.message?.message as string}
            />

            <button className="border px-5 py-2 rounded-md">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
