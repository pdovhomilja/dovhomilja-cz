import React from "react";

type Props = {
  title: string | undefined;
};

const Title = (props: Props) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-3xl opacity-50 pb-5">{props.title}</h1>
    </div>
  );
};

export default Title;
