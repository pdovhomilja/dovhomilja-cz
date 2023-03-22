import ShowPosts from "@/components/admin/ShowPosts";
import Title from "@/components/Title";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div>
      <Title title="Blog" />
      <div>
        <ShowPosts status="published" admin="false" />
      </div>
    </div>
  );
};

export default Blog;
