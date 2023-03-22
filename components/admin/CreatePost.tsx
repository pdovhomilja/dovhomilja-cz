"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  session: any;
};

const CreatePost = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const authorEmail = props.session.user.email;
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, authorEmail };
      await fetch(`/api/createPost`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/admin/draft");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={submitData} className="flex flex-col gap-5">
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input
          className="btn btn-outline"
          disabled={!content || !title || !authorEmail}
          type="submit"
          value="Create"
        />
        <p className="flex items-center justify-center">or</p>
        <a
          className="btn btn-outline"
          href="#"
          onClick={() => router.push("/")}
        >
          Cancel
        </a>
      </form>
    </div>
  );
};

export default CreatePost;
