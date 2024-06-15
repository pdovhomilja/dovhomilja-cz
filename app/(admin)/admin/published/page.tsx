import React from "react";
import Title from "@/components/Title";
import ShowDrafts from "@/components/admin/ShowPosts";
import LoginButton from "@/components/admin/Button";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

type Props = {};

const Drafts = async (props: Props) => {
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
      <Title title="Published" />
      <ShowDrafts status="published" admin="true" />
    </div>
  );
};

export default Drafts;
