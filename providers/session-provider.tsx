import * as React from "react";
import { createContext, useContext, ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";

// Create a new context for the session
const SessionContext = createContext<Session | null>(null);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider = async ({ children }: SessionProviderProps) => {
  const session = await getServerSession(authOptions);

  // Provide the session to child components
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

// Create a higher-order component to wrap components with the session
function withSession(Component: React.ComponentType<any>) {
  return function SessionComponent(props: any) {
    const session = useContext(SessionContext);
    return <Component {...props} session={session} />;
  };
}

// Create a component that uses the withSession HOC
interface SessionComponentProps {
  children: ReactNode;
}

export function SessionComponent({ children }: SessionComponentProps) {
  const SessionProvider = withSession(() => children);
  return <SessionProvider />;
}
