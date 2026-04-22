import React from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import { Offcanvas } from "react-bootstrap";
import { useMemberPageContext } from "@utility/context/MemberPageContext";
import SidebarContent from "./sidebarContent";

type Props = {
  // eslint-disable-next-line react/require-default-props
  activePath: string;
};

function Sidebar({ activePath }: Props) {
  const [desktop, setDesktop] = React.useState(true);
  const memberPageCtx = useMemberPageContext();
  const mdscreen = useMediaQuery("md");

  React.useEffect(() => {
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
          <Offcanvas.Body className="offcanvas-sidebar px-0">
            <SidebarContent activePath={activePath} />
          </Offcanvas.Body>
        </Offcanvas>
      ) : null}
    </>
  );
}

Sidebar.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  activePath: "",
};

export default Sidebar;
