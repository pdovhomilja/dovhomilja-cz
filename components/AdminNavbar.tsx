"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "./Logo";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

const AdminNavbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-row w-full p-5 justify-center items-center">
        <div className="w-12 h-full">
          <Link href="/">
            <Image
              src="/images/profile_photo.jpeg"
              className="rounded-full grayscale opacity-70"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex grow items-center justify-end">
          <button className="btn btn-outline" onClick={() => signOut()}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
