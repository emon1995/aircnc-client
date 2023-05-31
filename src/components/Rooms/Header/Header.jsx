import React from "react";
import Heading from "../../Heading/Heading";

const Header = ({ roomData }) => {
  return (
    <>
      <Heading
        title={roomData.title}
        subtitle={roomData.location}
        center={false}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl mt-6">
        <img className="object-cover w-full" src={roomData.image} alt="img" />
      </div>
    </>
  );
};

export default Header;
