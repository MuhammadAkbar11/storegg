import Link from "next/link";
import React from "react";
import SidebarFooterIcon from "./sidebarFooterIcon";

type Props = {};

function SidebarFooter({}: Props) {
  return (
    <div className="sidebar-footer pt-73 pe-30">
      <div className="footer-card">
        <div className="d-flex justify-content-between mb-20">
          <SidebarFooterIcon />
          <p className="fw-medium color-palette-1">
            Top Up &amp;
            <br />
            Be The Winner
          </p>
        </div>
        <Link href={"/"}>
          <a
            className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
            role="button"
          >
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SidebarFooter;
