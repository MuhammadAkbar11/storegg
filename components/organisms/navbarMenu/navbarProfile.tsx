import React from "react";
import Link from "next/link";
import { PROFILE_MENU } from "@utility/constant.utils";
import { Dropdown, Nav } from "react-bootstrap";
import { IUserAuth } from "@utility/types";
import Cookies from "js-cookie";
import { useQueryClient } from "react-query";

type Props = {
  isLogin: boolean;
  profile: IUserAuth;
};

function NavbarProfile(props: Props) {
  const { isLogin, profile } = props;
  const profileMenu = PROFILE_MENU;

  const queryClient = useQueryClient();

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    Cookies.remove("userToken");
    queryClient.removeQueries("userAuth", { exact: true });
    window.location.href = "/";
  };

  return (
    <>
      {!isLogin ? (
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
      ) : null}
      {isLogin ? (
        <Dropdown as="li" className="my-auto d-flex nav-item">
          <div className="vertical-line d-lg-block d-none" />
          <div>
            <Dropdown.Toggle
              as={"a"}
              href="#"
              role="button"
              className="ms-lg-40"
              id="dropdown-basic"
            >
              <img
                src={profile?.avatar || "/img/avatar-1.png"}
                className="rounded-circle"
                width={40}
                height={40}
                alt={"avatar"}
                style={{
                  objectFit: "cover",
                }}
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
              <li>
                <Dropdown.Item
                  href="/log-out"
                  className="text-lg color-palette-2"
                  onClick={onLogout}
                >
                  Log Out
                </Dropdown.Item>
              </li>
            </Dropdown.Menu>
          </div>
        </Dropdown>
      ) : null}
    </>
  );
}

export default NavbarProfile;
