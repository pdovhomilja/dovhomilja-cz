import Title from "@/components/Title";
import prisma from "@/lib/prismadb";
import moment from "moment";

type Props = {
  params: { id: string };
};

const PostDetailPage = async ({ params }: Props) => {
  const { id } = params;
  //console.log(id, "id");

  const postData = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  //console.log(postData, "postData");

  return (
    <div className="flex flex-col w-full h-full space-y-5">
      <Title title={postData?.title} />
      <div className="opacity-50">
        <p>Post id: {postData?.id}</p>
        <p>
          Post created:{" "}
          {moment(postData?.createdAt).format("MMMM Do YYYY, HH:mm")}
        </p>
        <p>
          Post updated:
          {moment(postData?.updatedAt).format("MMMM Do YYYY, HH:mm")}
        </p>
      </div>
      <div className="flex justify-start items-center rounded-md p-5 ">
        <p>{postData?.content}</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
