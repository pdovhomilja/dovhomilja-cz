"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const LoginButton = () => {
  return <Button onClick={() => signIn()}>LogIn</Button>;
};

export default LoginButton;
