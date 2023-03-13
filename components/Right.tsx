import React from "react";

type Props = {};

const Right = (props: Props) => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="border h-32 mx-7 border-gray-500 inline-block"></div>
      <div className="h-full w-10 flex flex-col justify-start pt-5">
        <span className="transform rotate-90 text-xs opacity-50">
          pavel@dovhomilja.cz
        </span>
      </div>
    </div>
  );
};

export default Right;
