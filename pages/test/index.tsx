import Title from "@/components/Title";
import useCurrentUser from "@/hooks/useCurrentUser";
import React from "react";

type Props = {};

const TestPage = (props: Props) => {
  const { data: user } = useCurrentUser();
  console.log(user, "user");
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Title title="Test Page" />
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h1>Welcome: {user?.name}</h1>
    </div>
  );
};

export default TestPage;
