import ShowPosts from "@/components/admin/ShowPosts";
import Title from "@/components/Title";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex w-full justify-center">
        <Title title="Blog" />
      </div>
      <div className="flex ">
        <ShowPosts status="published" admin="false" />
      </div>
    </div>
  );
};

export default Blog;
