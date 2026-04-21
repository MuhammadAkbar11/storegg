import MenuIcon from "@components/atoms/icons/menuIcon";
import { useMemberPageContext } from "@utility/context/MemberPageContext";
import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  title: string;
};

function MemberPageTitle({ title }: Props) {
  const memberPageCtx = useMemberPageContext();

  return (
    <div className="d-flex justify-content-between ">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">{title}</h2>
      <div className="d-md-none d-block ">
        <Button
          style={{
            width: "max-content",
          }}
          variant="outline-secondary"
          onClick={() => memberPageCtx.onToggleMobileSidebar()}
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
}

export default MemberPageTitle;
