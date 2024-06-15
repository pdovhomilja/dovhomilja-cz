import { getServerSession } from "next-auth/next";

import Title from "@/components/Title";

import { authOptions } from "@/lib/auth";

export default async function Test() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  return (
    <div>
      <Title title="Admin" />
      <p> Welcome {session.user?.name}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>;
    </div>
  );
}
