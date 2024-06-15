import Image from "next/image";
import React from "react";

type Props = {
  align: "left" | "right";
};

const Story = (props: Props) => {
  const { align } = props;
  return (
    <div className="relative z-10">
      <div className="relative w-24 h-24">
        <Image
          src="/images/profile_photo.jpeg"
          alt="photo"
          fill
          className="timeline-img"
        />
      </div>
      <div
        className={
          align === "right"
            ? `timeline-container`
            : `timeline-container timeline-container-left`
        }
      >
        <div
          className={
            align === "right"
              ? `timeline-pointer`
              : `timeline-pointer timeline-pointer-left`
          }
          aria-hidden="true"
        ></div>
        <div className="bg-white text-black p-6 rounded-md shadow-md">
          <p className="opacity-75">
            The error message indicates that there is a type error in your
            createPost.ts file on line 22, specifically at character 35. The
            error message says that the property does not exist on the type
            PrismaClient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
