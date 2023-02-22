import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import Logo from "../../atoms/logo";
import NavbarProfile from "./navbarProfile";
import NavbarMenuList from "./navbarMenuListNav";
import NavbarToggle from "./navbarToggle";
import useAuth from "@hooks/useAuth";

type Props = {
  activePath?: string;
};

function NavbarMenu({ activePath }: Props) {
  const userAuth = useAuth() as any;

  const isAuth = userAuth?.isAuth;
  const authState = userAuth?.authState;

  return (
    <section>
      <Navbar
        bg="light"
        className="bg-white pt-lg-40 pb-lg-40 pt-30 pb-50"
        expand="lg"
      >
        <Container fluid>
          <Link href={"/"} passHref>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </Link>
          <NavbarToggle />
          <Navbar.Collapse id="navbarNav">
            <Nav as="ul" className="ms-auto text-lg gap-lg-0 gap-2">
              <NavbarMenuList activePath={activePath} />
              {userAuth?.isLoading ? (
                <>
                  <div className="vertical-line d-lg-block d-none" />
                  <div
                    style={{
                      width: 45,
                      height: 45,
                    }}
                    className="ms-lg-40 d-flex-center animate-pulse bg-palette-3 rounded-circle "
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  <NavbarProfile isLogin={isAuth} profile={authState} />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

NavbarMenu.defaultProps = {
  activePath: "/",
};

export default NavbarMenu;
