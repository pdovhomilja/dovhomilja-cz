import React from "react";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata = {
  title: "Pavel Dovhomilja",
  description: "Welcome to my website!",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col w-full h-screen antialiased overflow-hidden ">
            {children}
          </main>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
