import Link from "next/link";
import React from "react";
import Logo from "../../atoms/logo";
import FooterWidget from "../../molecules/footerWidget";

type WidgetLinks = {
  href: string;
  label: string;
  isExternal?: boolean;
};

type Props = {};

function Footer({}: Props) {
  const companyWidgets: WidgetLinks[] = [
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/term-of-use",
      label: "Term Of Use",
    },
    {
      href: "/privacy-policy",
      label: "Privacy & Policy",
    },
  ];

  const supportWidgets: WidgetLinks[] = [
    {
      href: "/refund",
      label: "Refund Policy",
    },
    {
      href: "/unlock-rewards",
      label: "Unlock Rewards",
    },
    {
      href: "/chatting",
      label: "Live Chatting",
    },
  ];

  const connectWidgets: WidgetLinks[] = [
    {
      href: "mailto:storegg@storegg.com",
      label: "storegg@storegg.com",
      isExternal: true,
    },
    {
      href: "mailto:storegg@storegg.com",
      label: "storegg.team@storegg.com",
      isExternal: true,
    },
    {
      href: "http://maps.google.com/?q=Pasific%2012,%20Jakarta%20Selatan",
      label: "Pasific 12, Jakata Selatan",
      isExternal: true,
    },
    {
      href: "tel:02111229090",
      label: "021 - 1122 - 9090",
      isExternal: true,
    },
  ];

  return (
    <section className="footer ">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a href="" className="mb-30">
                  <Logo />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterWidget title="Company" links={companyWidgets} />
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterWidget title="Support" links={supportWidgets} />
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <FooterWidget title="Connect" links={connectWidgets} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
