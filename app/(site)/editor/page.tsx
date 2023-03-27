import MyEditor from "@/components/MyEditor";
import React from "react";

type Props = {};

const Editor = (props: Props) => {
  return (
    <div className="flex w-full h-full justify-center">
      <MyEditor />
    </div>
  );
};

export default Editor;
