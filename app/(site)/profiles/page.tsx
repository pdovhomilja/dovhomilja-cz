import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      Profile
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Profile;
