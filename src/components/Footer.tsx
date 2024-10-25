import React from "react";
import Wrapper from "./Wrapper";
import NavList from "./NavList";

interface NavItem {
  id: number;
  name: string;
  href: string;
}

interface NavBarProps {
  navListData: NavItem[];
}

const Footer: React.FC<NavBarProps> = ({ navListData }) => {
  return (
    <footer className="bg-black text-white h-[36.5rem]">
      <Wrapper>
        <div className="flex">
          <div className="bg-green-700 w-1/2">left</div>
          <div className=" w-1/2">
            <div className="max-w-[42.9rem] mr-auto w-full flex justify-between uppercase font-bold text-[1.3rem] tracking-[2px] leading-[25px]">
              <NavList navListData={navListData} />
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
