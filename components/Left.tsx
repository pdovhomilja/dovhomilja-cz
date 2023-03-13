import { SocialIcon } from "react-social-icons";

type Props = {};

const Left = (props: Props) => {
  return (
    <div className="flex flex-col p-5 space-y-2 pb-2">
      <SocialIcon
        url="https://twitter.com/dovhomilja"
        bgColor="white"
        style={{ height: 30, width: 30 }}
        className=" opacity-50"
      />
      <SocialIcon
        url="https://github.com/pdovhomilja"
        bgColor="white"
        style={{ height: 30, width: 30 }}
        className=" opacity-50"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/pavel-dovhomilja-0b1b3b1b3/"
        bgColor="white"
        style={{ height: 30, width: 30 }}
        className=" opacity-50"
      />
      <SocialIcon
        url="https://www.youtube.com/@pdovhomilja"
        bgColor="white"
        style={{ height: 30, width: 30 }}
        className=" opacity-50"
      />
      <div className="border h-20 mx-4 border-gray-500 inline-block"></div>
    </div>
  );
};

export default Left;
