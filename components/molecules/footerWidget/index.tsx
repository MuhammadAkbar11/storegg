import Link from "next/link";
import React from "react";

type WidgetLink = {
  href: string;
  label: string;
  isExternal?: boolean;
};

type Props = {
  title: string;
  links: WidgetLink[];
};

function FooterWidget({ title, links }: Props) {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {links.map((link: WidgetLink, idx) => {
          const key = idx;
          return (
            <li className="mb-6" key={key}>
              {link.isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  className="text-lg color-palette-1 text-decoration-none"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href}>
                  <a
                    href={link.href}
                    className="text-lg color-palette-1 text-decoration-none"
                  >
                    {link.label}
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FooterWidget;
