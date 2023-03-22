"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";

type Props = {};

const AdminNavbar = (props: Props) => {
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
          <Link className="btn btn-outline" href="/admin/createPost">
            Create post
          </Link>
          <Link className="btn btn-outline" href="/admin/draft">
            Drafts
          </Link>
          <Link className="btn btn-outline" href="/admin/published">
            Published
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
