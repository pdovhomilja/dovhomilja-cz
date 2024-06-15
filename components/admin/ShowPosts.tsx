"use client";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Title from "../Title";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";

type Props = {
  status: string;
  admin: string;
};

const ShowPosts = (props: Props) => {
  const url =
    props.status === "drafts"
      ? "/api/drafts/getDrafts"
      : "/api/drafts/getPublished";

  const { data: drafts, mutate } = useSWR(url, fetcher, {
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

  return (
    <div className="flex flex-wrap mx-auto justify-center gap-5">
      {drafts?.length > 0
        ? drafts?.map((draft: any) => (
            <Card key={draft.id}>
              <CardTitle>
                <Link href={`/blog/${draft.id}`}>
                  <Title title={draft.title} />
                </Link>
              </CardTitle>
              <CardContent>
                <p>{draft.id}</p>
                <p>{draft.content}</p>
                <p>Status: {props.status}</p>
              </CardContent>
              <div className="w-full p-5"></div>
              <div
                className={
                  props.admin === "false"
                    ? `hidden`
                    : `flex justify-end items-center gap-2`
                }
              >
                <Button
                  className={
                    props.status === "published" ? `hidden` : `btn btn-outline`
                  }
                  onClick={() => handelAllow(draft.id)}
                >
                  Allow
                </Button>
                <Button
                  disabled={props.status === "drafts" ? true : false}
                  onClick={() => handelDisable(draft.id)}
                >
                  Disable
                </Button>
                <Button
                  className="btn btn-outline"
                  onClick={() => handelDelete(draft.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        : props.status === "drafts"
        ? "There is no drafts"
        : "There is no published posts"}
    </div>
  );
};

export default ShowPosts;
