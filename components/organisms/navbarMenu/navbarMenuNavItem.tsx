import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { Nav } from "react-bootstrap";
import clx from "classnames";

interface Props {
  isActive: boolean;
  isLast?: boolean;
  id: string;
  url: string;
  text: string;
}

function NavbarTopNavItem(props: Props) {
  const { isActive, isLast, id, url, text } = props;

  const navItemClassname = clx({
    active: isActive,
    "me-lg-20": isLast,
  });

  return (
    <>
      <Nav.Item as="li" key={id} className="my-auto">
        <Link href={url} passHref>
          <Nav.Link as={"a"} className={navItemClassname}>
            {text}
          </Nav.Link>
        </Link>
      </Nav.Item>
    </>
  );
}

NavbarTopNavItem.defaultProps = {
  isActive: false,
  id: "",
  url: "",
  text: "",
};

export default NavbarTopNavItem;
