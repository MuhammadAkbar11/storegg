import React from "react";
import SidebarContent from "./sidebarContent";
import useMediaQuery from "@hooks/useMediaQuery";
import { Offcanvas } from "react-bootstrap";
import { useMemberPageContext } from "@utility/context/MemberPageContext";

type Props = {
  activePath: string;
};

function Sidebar({ activePath }: Props) {
  const [desktop, setDesktop] = React.useState(true);
  const memberPageCtx = useMemberPageContext();
  const mdscreen = useMediaQuery("md");

  React.useLayoutEffect(() => {
    if (!mdscreen) {
      setDesktop(false);
    } else {
      setDesktop(true);
    }
  }, [mdscreen]);

  return (
    <>
      <aside className=" sidebar-wrap desktop ">
        <SidebarContent activePath={activePath} />
      </aside>
      {!desktop ? (
        <Offcanvas
          show={memberPageCtx.canvasSidebar}
          className="sidebar-wrap mobile"
          onHide={memberPageCtx.onToggleMobileSidebar}
          backdrop="static"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <span className=" visually-hidden ">....</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-sidebar ">
            <SidebarContent activePath={activePath} />
          </Offcanvas.Body>
        </Offcanvas>
      ) : null}
    </>
  );
}

Sidebar.defaultProps = {
  activePath: "",
};

export default Sidebar;
