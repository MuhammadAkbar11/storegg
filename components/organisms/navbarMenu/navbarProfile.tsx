import Link from "next/link";
import React from "react";
import { Nav } from "react-bootstrap";

type Props = {};

function NavbarAction({}: Props) {
  return (
    <Nav.Item className="my-auto">
      <Link href={"/auth/sign-in"} passHref>
        <Nav.Link
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
}

export default NavbarAction;
