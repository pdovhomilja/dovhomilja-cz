"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../components/Logo";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { ThemeToggle } from "../../../components/ui/theme-toggle";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const links = [
  {
    href: "#",
    label: "",
  },
  /*   {
    href: "/about",
    label: "About",
  },
  {
    href: "/experience",
    label: "Experience",
  },
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  }, */
];

const Navbar = () => {
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
        <div
          className="flex grow justify-end items-end h-full md:hidden"
          onClick={handelClick}
        >
          {process.env.NEXT_PUBLIC_PRODUCTION === "true" && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Bars3Icon className="h-6 w-6 text-white opacity-50  md:hidden" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mx-5">
                {links.map((link, index) => (
                  <Link key={index} href={link?.href}>
                    <DropdownMenuItem className="text-white">
                      {link?.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
                {/*                 <DropdownMenuItem className="text-white">
                  <Button variant={"secondary"}>
                    <Link href="/">Resume</Link>
                  </Button>
                </DropdownMenuItem> */}
                <DropdownMenuItem className="text-white">
                  <ThemeToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        {process.env.NEXT_PUBLIC_PRODUCTION === "true" && (
          <div className="hidden md:flex grow justify-end items-center gap-2">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            {/*        <Button variant={"secondary"}>
              <Link href="/">Resume</Link>
            </Button> */}
            <iframe
              src="https://github.com/sponsors/pdovhomilja/button"
              title="Sponsor pdovhomilja"
              className="h-10 w-28 pt-1"
            />
            <ThemeToggle />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
