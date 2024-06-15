"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {};

const AdminNavbar = (props: Props) => {
  const navItems = [
    {
      name: "Create post",
      href: "/admin/createPost",
    },
    {
      name: "Drafts",
      href: "/admin/draft",
    },
    {
      name: "Published",
      href: "/admin/published",
    },
    {
      name: "Users",
      href: "/admin/users",
    },
  ];
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
        <div className="flex w-full items-center justify-center px-5 gap-2">
          {navItems.map((item, index) => (
            <Button key={index} asChild>
              <Link href={item.href} key={index}>
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex grow items-center justify-end">
          <Button onClick={() => signOut()}>LogOut</Button>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
