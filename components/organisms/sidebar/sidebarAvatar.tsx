import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  email: string;
  image: string;
};

function SidebarAvatar({ name, email, image }: Props) {
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={image}
        width={90}
        height={90}
        className="img-fluid mb-20 rounded-circle"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0 ">{name}</h2>
      <p className="color-palette-2 m-0">{email}</p>
    </div>
  );
}

SidebarAvatar.defaultProps = {
  image: "/img/avatar-1.png",
};

export default SidebarAvatar;
