import Link from "next/link";
import React from "react";
import { Dropdown, Nav } from "react-bootstrap";

type Props = {
  isLogin: boolean;
};

function NavbarProfile(props: Props) {
  const { isLogin } = props;
  const profileMenu = [
    { text: "My Profile", href: "/member" },
    { text: "Wallet", href: "/member/wallet" },
    { text: "Account Setting", href: "/member/settings" },
    { text: "Log Out", href: "/auth/sing-in" },
  ];
  return (
    <>
      {!isLogin && (
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
      )}
      {isLogin && (
        <Dropdown as="li" className="my-auto d-flex nav-item">
          <div className="vertical-line d-lg-block d-none" />
          <div>
            <Dropdown.Toggle
              as={"a"}
              href="/#"
              role="button"
              className="ms-lg-40"
              id="dropdown-basic"
            >
              <img
                src="/img/avatar-1.png"
                className="rounded-circle"
                width={40}
                height={40}
                alt={"avatar"}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu as={"ul"} className="border-0">
              {profileMenu.map((mn, idx) => {
                const key = idx;
                return (
                  <li key={key}>
                    <Link href={mn.href} passHref>
                      <Dropdown.Item className="text-lg color-palette-2">
                        {mn.text}
                      </Dropdown.Item>
                    </Link>
                  </li>
                );
              })}
              {/* <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Wallet
              </a>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Account Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Log Out
              </a>
            </li> */}
            </Dropdown.Menu>
          </div>
        </Dropdown>
      )}
    </>
  );
}

export default NavbarProfile;
