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
  href?: string;
  icon: IconsType;
  onClick?: (target: React.MouseEvent<HTMLAnchorElement>) => void;
};

function SidebarMenuItem(props: Props) {
  const { activePath, title, href, icon, onClick } = props;

  const menuItemClass = clx("item mb-30", {
    active: activePath == href,
  });

  return (
    <div className={menuItemClass}>
      <SidebarMenuItemIcon iconName={icon} />
      <p className="item-title m-0">
        {onClick ? (
          <a
            href={href}
            onClick={e => onClick(e)}
            className="text-lg text-decoration-none"
          >
            {title}
          </a>
        ) : (
          <>
            {href ? (
              <Link href={href} passHref>
                <a href={href} className="text-lg text-decoration-none">
                  {title}
                </a>
              </Link>
            ) : null}
          </>
        )}
      </p>
    </div>
  );
}

export default SidebarMenuItem;
