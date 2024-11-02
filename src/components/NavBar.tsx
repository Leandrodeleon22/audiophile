"use client";

import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import { headers } from "next/headers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface NavItem {
  id: number;
  name: string;
  href: string;
}

interface NavBarProps {
  navListData: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navListData }) => {
  // const navListData = [
  //   { id: 1, name: "home", href: "/" },
  //   { id: 2, name: "headphones", href: "/headphones" },
  //   { id: 3, name: "speakers", href: "/speakers" },
  //   { id: 4, name: "earphones", href: "/earphones" },
  // ];

  const pathName = usePathname();
  const pathNameLength = pathName.split("/").length;
  // console.log();
  return (
    <nav className=" text-white absolute  w-full ">
      <Wrapper>
        <div
          className={`bg max-w-[110rem] mx-auto flex  justify-between border-b-[1px] border-[#979797] py-[3.5rem] ${
            pathNameLength < 3 ? "" : "border-none"
          }`}
        >
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={143}
            height={143}
            alt="logo"
            className="mr-[19.7rem]"
          />
          <div className="max-w-[42.9rem] mr-auto w-full flex justify-between uppercase font-bold text-[1.3rem] tracking-[2px] leading-[25px]">
            {/* {navListData.map((list) => (
              <Link key={list.id} href={list.href}>
                {list.name}
              </Link>
            ))} */}
            <NavList navListData={navListData} />
          </div>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23.33}
            height={23.33}
            alt="cart"
          />
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
