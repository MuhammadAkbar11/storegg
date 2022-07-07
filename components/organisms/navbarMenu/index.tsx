import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../atoms/logo";
import NavbarProfile from "./navbarProfile";
import NavbarMenuList from "./navbarMenuListNav";
import NavbarToggle from "./navbarToggle";

type Props = {
  activePath?: string;
};

function NavbarMenu({ activePath }: Props) {
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
              <NavbarProfile isLogin={true} />
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
