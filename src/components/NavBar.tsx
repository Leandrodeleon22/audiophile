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
        <div className="flex items-center">
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={250}
            height={250}
            alt="logo"
          />
          <div className="min-w-[42.9rem] bg-red-500 flex justify-between uppercase font-bold text-[1.3rem]">
            {navList.map((list) => (
              <Link key={list.id} href={list.href}>
                {list.name}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default NavBar;
