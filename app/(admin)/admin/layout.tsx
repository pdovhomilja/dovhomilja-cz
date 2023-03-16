import "../../globals.css";
import Provider from "../../Provider";

export const metadata = {
  title: "Admin",
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
        <Provider>
          <div className="flex justify-center items-center w-full h-full">
            <h1>Admin</h1>
          </div>
        </Provider>
      </body>
    </html>
  );
}
