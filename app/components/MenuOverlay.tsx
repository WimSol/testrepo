import React from "react";
import NavLink from "./NavLink";

type Link = {
  path: string;
  title: string;
};

type MenuOverlayProps = {
  links: Link[];
};

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-[#0d1335]">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
