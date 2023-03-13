"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(process.env.NEXT_PUBLIC_PRODUCTION, "PRODUCTION - Navbar");

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
        <div
          className="flex grow justify-end items-end h-full md:hidden"
          onClick={handelClick}
        >
          {process.env.NEXT_PUBLIC_PRODUCTION === "true" && (
            <Bars3Icon className="h-6 w-6 text-white opacity-50  md:hidden" />
          )}
        </div>
        {process.env.NEXT_PUBLIC_PRODUCTION === "true" && (
          <div className="hidden md:flex grow justify-end">
            <Link className="flex link" href="/about">
              <p className="text-white px-1">01.</p>
              <p>About</p>
            </Link>
            <Link className="flex link" href="/experience">
              <p className="text-white px-1">02.</p>
              <p>Experience</p>
            </Link>
            <Link className="flex link" href="/work">
              <p className="text-white px-1">03.</p>
              <p>Work</p>
            </Link>
            <Link className="flex link" href="/blog">
              <p className="text-white px-1">04.</p>
              <p>Blog</p>
            </Link>
            <Link className="flex link" href="/contact">
              <p className="text-white px-1">05.</p>
              <p>Contact</p>
            </Link>
            <Link
              className="flex justify-center items-center rounded-md border px-2 text-xs "
              href="/"
            >
              Resume
            </Link>
          </div>
        )}
      </div>
      <div className="">
        {isOpen && process.env.NEXT_PUBLIC_PRODUCTION === "true" && (
          <div className="flex flex-row justify-end pr-12 ">
            <div
              className="px-2 cursor-pointer bg-black"
              onClick={() => setIsOpen(false)}
            >
              x
            </div>
            <div className="h-38 flex flex-col justify-start items-start bg-black z-10 md:hidden">
              <Link className="flex link" href="/about">
                <p className="text-white px-1">01.</p>
                <p>About</p>
              </Link>
              <Link className="flex link" href="/experience">
                <p className="text-white px-1">02.</p>
                <p>Experience</p>
              </Link>
              <Link className="flex link" href="/work">
                <p className="text-white px-1">03.</p>
                <p>Work</p>
              </Link>
              <Link className="flex link" href="/blog">
                <p className="text-white px-1">04.</p>
                <p>Blog</p>
              </Link>
              <Link className="flex link" href="/contact">
                <p className="text-white px-1">05.</p>
                <p>Contact</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
