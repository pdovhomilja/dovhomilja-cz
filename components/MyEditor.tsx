"use client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import Title from "./Title";
import { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
//import draftToMarkdown from "draftjs-to-markdown";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

type Props = {};

const MyEditor = (props: Props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  //console.log(editorState, "editorState");
  console.log(
    draftToHtml(convertToRaw(editorState.getCurrentContent())),
    "html"
  );
  /*   console.log(
    editorState &&
      draftToMarkdown(convertToRaw(editorState.getCurrentContent())),
    "markdown"
  ); */
  return (
    <div>
      <Title title="My Editor" />
      <div className="pb-16 border bg-gray-500 text-black rounded-md">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex sticky opacity-50 top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white/50 shadow-lg max-w-5xl mx-auto mb-12 border "
        />
      </div>
    </div>
  );
};

export default MyEditor;
