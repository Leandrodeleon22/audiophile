import React from "react";
import Wrapper from "./Wrapper";
import NavList from "./NavList";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  id: number;
  name: string;
  href: string;
}

interface NavBarProps {
  navListData: NavItem[];
}

const icons = [
  {
    id: 1,
    name: "facebook",
    src: "assets/shared/desktop/icon-facebook.svg",
    href: "/",
  },
  {
    id: 2,
    name: "twitter",
    src: "assets/shared/desktop/icon-twitter.svg",
    href: "/",
  },
  {
    id: 3,
    name: "instagram",
    src: "assets/shared/desktop/icon-instagram.svg",
    href: "/",
  },
];

const Footer: React.FC<NavBarProps> = ({ navListData }) => {
  return (
    <footer className="bg-black text-white h-[36.5rem]">
      <Wrapper>
        <div className="flex pt-[7.5rem]">
          <div className="w-1/2">
            {/* <Image
              src="/assets/shared/desktop/logo.svg"
              width={143}
              height={143}
              alt="logo"
            /> */}
            <Image
              src="/assets/shared/desktop/logo.svg"
              // src={img1}
              width="0"
              height="0"
              sizes="100vw"
              alt="test"
              style={{ width: "143px", height: "auto" }}
            />

            <p className="font-medium text-[1.5rem] leading-[25px] max-w-[53rem] mt-[3.6rem] mb-[5.6rem] opacity-[.5]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="opacity-[.5] font-bold text-[15px] leading-[25px]">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className=" w-1/2 flex-col flex items-end ">
            <div className="max-w-[42.9rem] mb-[10rem]  w-full flex justify-between   uppercase font-bold text-[1.3rem] tracking-[2px] leading-[25px]">
              <NavList navListData={navListData} />
            </div>
            <div className="flex items-center">
              {icons.map((icon) => {
                return (
                  <Link key={icon.id} href={icon.href}>
                    <Image
                      src={icon.src}
                      width={24}
                      height={24}
                      alt={icon.name}
                      className={`${
                        icon.id === icons.length ? "" : "mr-[1.5rem]"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
