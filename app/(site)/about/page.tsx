import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-full h-full  px-10">
      <Title title="About me" />
      <div className="flex flex-row space-x-5 justify-center w-full">
        <div className=" w-52 border p-2 rounded-md z-0">
          <Image
            src="/images/profile_pd.jpeg"
            className="opacity-75 rounded-md -m-5 z-10 shadow-md"
            width={300}
            height={300}
            alt="Pavel Dovhomilja"
          />
        </div>
        <div className="flex grow opacity-50">
          <p>Some greate words about me</p>
          <div>
            <h2>My coding stack:</h2>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
