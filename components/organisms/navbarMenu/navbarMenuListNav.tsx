import React from "react";
import NavbarMenuNavItem from "./navbarMenuNavItem";

type Props = {
  activePath: string | undefined;
};

function NavbarTopListNav({ activePath = "/" }: Props) {
  const navItems = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 3,
      url: "/games",
      text: "Games",
    },
    // {
    //   id: 4,
    //   url: "/rewards",
    //   text: "Rewards",
    // },
    {
      id: 5,
      url: "/about",
      text: "About",
    },
    // {
    //   id: 6,
    //   url: "/global-rank",
    //   text: "Global Rank",
    // },
  ];

  return (
    <>
      {navItems.map((nav, idx) => {
        const isLast = navItems[navItems.length - 1].id == nav.id;

        return (
          <NavbarMenuNavItem
            key={nav.id}
            isActive={activePath === nav.url}
            url={nav.url}
            id={nav.id.toString()}
            isLast={isLast}
            text={nav.text}
          />
        );
      })}
    </>
  );
}

export default NavbarTopListNav;
