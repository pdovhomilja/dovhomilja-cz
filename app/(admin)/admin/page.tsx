import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Test() {
  const session = await getServerSession(authOptions);
  if (!session)
    return (
      <div>
        <h1> Not Authenticated</h1>
      </div>
    );

  return (
    <div>
      <h1> Admin</h1>
      <p> Welcome {session.user?.name}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>;
    </div>
  );
}
