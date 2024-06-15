import LoginButton from "@/components/admin/Button";
import CreatePost from "@/components/admin/CreatePost";
import Title from "@/components/Title";
import { authOptions } from "@/lib/auth";

import { getServerSession } from "next-auth";

type Props = {};

const CreatePostPage = async (props: Props) => {
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
      <Title title="Create Post" />
      <CreatePost session={session} />
    </div>
  );
};

export default CreatePostPage;
