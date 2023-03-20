import AdminNavbar from "@/components/admin/AdminNavbar";
import "@/styles/globals.css";
import { signIn } from "next-auth/react";
//import Provider from "../Provider";

export const metadata = {
  title: "Admin",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AdminNavbar />
        <main className="flex justify-center items-start h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
