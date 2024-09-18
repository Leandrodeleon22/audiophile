import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const navList = [
    { id: 1, name: "home", href: "/" },
    { id: 2, name: "headphones", href: "/headphones" },
    { id: 3, name: "speakers", href: "/speakers" },
    { id: 4, name: "earphones", href: "/earphones" },
  ];

  return (
    <nav className="bg-[var(--black-heavy)] text-white">
      <Wrapper>
        <div className="flex items-center justify-between border-b-[1px] border-[#979797] py-[3.5rem]">
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={143}
            height={25}
            alt="logo"
          />
          <div className="min-w-[42.9rem] flex justify-between uppercase font-bold text-[1.3rem] tracking-[2px] leading-[25px]">
            {navList.map((list) => (
              <Link key={list.id} href={list.href}>
                {list.name}
              </Link>
            ))}
          </div>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23.33}
            height={20}
            alt="logo"
          />
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
