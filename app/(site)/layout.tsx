import Left from "@/app/(site)/_components/Left";
import Navbar from "@/app/(site)/_components/Navbar";
import Right from "@/app/(site)/_components/Right";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow w-full h-full">
        <div className="flex items-end">
          <Left />
        </div>
        <div className="flex w-full h-full justify-center items-center mx-auto overflow-hidden">
          {children}
        </div>
        <div className="flex flex-grow">
          <Right />
        </div>
      </div>
    </>
  );
}
