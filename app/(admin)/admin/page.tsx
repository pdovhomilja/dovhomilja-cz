import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "@/components/admin/Button";
import Title from "@/components/Title";

import { useRouter } from "next/router";

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
