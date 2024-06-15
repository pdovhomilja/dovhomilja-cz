import React from "react";
import Title from "@/components/Title";
import ShowDrafts from "@/components/admin/ShowPosts";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

type Props = {};

const Drafts = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  return (
    <div>
      <Title title="Drafts" />
      <ShowDrafts status="drafts" admin="true" />
    </div>
  );
};

export default Drafts;
