import Link from "next/link";
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
      <div className="pb-5">
        <Link className="text-xs" href="/admin">
          <div className="flex justify-center items-center rounded-full border w-8 h-8 p-2 opacity-25">
            <p>A</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Right;
