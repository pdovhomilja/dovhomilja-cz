import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col w-full px-10">
      <h1 className="text-3xl pb-5">About me</h1>
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
