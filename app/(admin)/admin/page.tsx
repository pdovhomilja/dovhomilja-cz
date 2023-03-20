import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginButton from "@/components/admin/Button";
import Title from "@/components/Title";

export default async function Test() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <div className="flex  flex-col justify-center py-5 gap-5">
        <Title title="Not authenticated" />
        <LoginButton />
      </div>
    );

  return (
    <div>
      <Title title="Admin" />
      <p> Welcome {session.user?.name}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>;
    </div>
  );
}
