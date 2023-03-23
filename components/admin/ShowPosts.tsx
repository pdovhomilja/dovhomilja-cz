"use client";
import React from "react";
import useSWR from "swr";
import fetcher from "@/pages/api/fetcher";
import Title from "../Title";

type Props = {
  status: string;
  admin: string;
};

const ShowPosts = (props: Props) => {
  const url =
    props.status === "drafts"
      ? "/api/drafts/getDrafts"
      : "/api/drafts/getPublished";

  const {
    data: drafts,
    error,
    mutate,
  } = useSWR(url, fetcher, {
    refreshInterval: 5000, // Polling every 5000ms (5 seconds)
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const handelDelete = async (id: string) => {
    try {
      const body = { id };
      await fetch(`/api/drafts/deleteDraft`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      mutate({ revalidate: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handelAllow = async (id: string) => {
    try {
      const body = { id };
      await fetch(`/api/drafts/allowDraft`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      mutate({ revalidate: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handelDisable = async (id: string) => {
    try {
      const body = { id };
      await fetch(`/api/posts/disablePost`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      mutate({ revalidate: true });
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <div>Failed to load drafts</div>;
  if (!drafts) return <div>Loading {props.status} ...</div>;

  return (
    <div className="flex flex-wrap mx-auto justify-center gap-5">
      {drafts.length > 0
        ? drafts?.map((draft: any) => (
            <div
              key={draft.id}
              className="flex
     gap-5 border-2 border-gray-600 rounded-md shadow-md"
            >
              <div className="w-full p-5">
                <Title title={draft.title} />
                <p>{draft.id}</p>

                <p>{draft.content}</p>
              </div>
              <div
                className={
                  props.admin === "false"
                    ? `hidden`
                    : `flex justify-end items-center gap-2`
                }
              >
                <div
                  className={
                    props.status === "published" ? `hidden` : `btn btn-outline`
                  }
                  onClick={() => handelAllow(draft.id)}
                >
                  Allow
                </div>
                <div
                  className={
                    props.status === "drafts" ? `hidden` : `btn btn-outline`
                  }
                  onClick={() => handelDisable(draft.id)}
                >
                  Disable
                </div>
                <div
                  className="btn btn-outline"
                  onClick={() => handelDelete(draft.id)}
                >
                  Delete
                </div>
              </div>
            </div>
          ))
        : props.status === "drafts"
        ? "There is no drafts"
        : "There is no published posts"}
    </div>
  );
};

export default ShowPosts;
