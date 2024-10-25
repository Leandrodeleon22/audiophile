import React from "react";
import Link from "next/link";
interface NavItem {
  id: number;
  name: string;
  href: string;
}

interface NavBarProps {
  navListData: NavItem[];
}

const NavList: React.FC<NavBarProps> = ({ navListData }) => {
  return (
    <>
      {navListData.map((list) => (
        <Link key={list.id} href={list.href}>
          {list.name}
        </Link>
      ))}
    </>
  );
};

export default NavList;
