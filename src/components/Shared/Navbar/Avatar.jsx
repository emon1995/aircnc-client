import React, { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <img
        referrerPolicy="no-referrer"
        src={user && user.photoURL ? user.photoURL : avatarImg}
        height="30"
        width="30"
        className="rounded-full"
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
