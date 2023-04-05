import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

type Props = {};

export const metadata = {
  title: "About me",
  description: "Some greate words about me",
  keywords:
    "Pavel Dovhomilja, React, Next.js, Typescript, Node.js, Express, PostgreSQL, GraphQL",
};

const About = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full  px-10">
      <Title title="About me" />
      <div className="flex flex-col md:flex-row space-x-5 justify-center w-full">
        <div className=" w-52 ">
          <Image
            src="/images/profile_pd.jpeg"
            className="opacity-75 rounded-md  "
            width={300}
            height={300}
            alt="Pavel Dovhomilja"
          />
        </div>
        <div className="flex flex-col grow opacity-50">
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
