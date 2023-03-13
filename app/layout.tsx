import Left from "@/components/Left";
import Navbar from "@/components/Navbar";
import Right from "@/components/Right";
import "./globals.css";

export const metadata = {
  title: "My portfolio",
  description: "Created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-screen ">
        <div className="h-28 bg-[rgb(15,23,42)] text-white">
          <div>
            <Navbar />
          </div>
        </div>
        <div className="flex flex-grow bg-[rgb(15,23,42)] text-white w-full">
          <div className="flex items-end">
            <Left />
          </div>
          <div className="flex w-full justify-center items-center mx-auto px-5 md:px-10">
            {process.env.NEXT_PUBLIC_PRODUCTION === "true"
              ? children
              : "Work in progress"}
          </div>
          <div>
            <Right />
          </div>
        </div>
      </body>
    </html>
  );
}
