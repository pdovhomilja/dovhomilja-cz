import Story from "@/components/experience/Story";
import Title from "@/components/Title";
import React from "react";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Title title="Work" />
      <div className="flex justify-center items-center h-full ">
        <div className="relative container mx-auto px-6 h-full flex flex-col space-y-8">
          <div className="absolute z-0 w-2 h-full bg-white/25 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
          <Story align="right" />
          <Story align="left" />
        </div>
      </div>
    </div>
  );
};

export default Work;
