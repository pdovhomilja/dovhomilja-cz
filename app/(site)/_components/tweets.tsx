import React from "react";
import { Tweet } from "react-tweet";

const tweetIds = [
  "1660617181061697539",
  "1747173919650410659",
  "1746922263952122006",
];
const TweetsComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3  gap-5">
      {tweetIds.map((id, index) => (
        <Tweet id={id} key={index} />
      ))}
    </div>
  );
};

export default TweetsComponent;
