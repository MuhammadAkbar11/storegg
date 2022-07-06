import React from "react";
import clx from "classnames";
import SidebarMenuItemIcon from "./sidebarMenuItem";
import Link from "next/link";

export type IconsType =
  | "overview"
  | "transaction"
  | "messages"
  | "card"
  | "rewards"
  | "settings"
  | "logout";

type Props = {
  activePath: string;
  title: string;
  href: string;
  icon: IconsType;
};

function SidebarMenuItem(props: Props) {
  const { activePath, title, href, icon } = props;

  const menuItemClass = clx("item mb-30", {
    active: activePath == href,
  });

  return (
    <div className={menuItemClass}>
      <SidebarMenuItemIcon iconName={icon} />
      <p className="item-title m-0">
        <Link href={href} passHref>
          <a href={href} className="text-lg text-decoration-none">
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}

export default SidebarMenuItem;
