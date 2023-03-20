"use client";
import { signIn } from "next-auth/react";

type Props = {};

const LoginButton = (props: Props) => {
  return (
    <button className="btn btn-outline" onClick={() => signIn()}>
      LogIn
    </button>
  );
};

export default LoginButton;
