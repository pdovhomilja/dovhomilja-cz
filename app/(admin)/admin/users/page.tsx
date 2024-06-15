import { getServerSession } from "next-auth/next";

import LoginButton from "@/components/admin/Button";
import Title from "@/components/Title";
import prisma from "@/lib/prismadb";
import ShowUsers from "@/components/admin/ShowUsers";
import { authOptions } from "@/lib/auth";

export default async function Users() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <div className="flex  flex-col justify-center py-5 gap-5">
        <Title title="Not authenticated" />
        <LoginButton />
      </div>
    );
  const users = await prisma.user.findMany();

  return (
    <div>
      <Title title="Users" />
      <ShowUsers />
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
