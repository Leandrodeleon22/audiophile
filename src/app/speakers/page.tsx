import React from "react";
import HeaderSimple from "@/components/HeaderSimple";
import ProductCategories from "@/components/ProductCategories";
import AudioDescription from "@/components/AudioDescription";
import ZX9speaker from "@/components/ZX9speaker";
import ZX7speaker from "@/components/ZX7speaker";
const page = () => {
  const title = "Speakers";

  return (
    <>
      <HeaderSimple title={title} />

      <main className="max-w-[110rem] w-full  mx-auto">
        <ZX9speaker />
        <ZX7speaker />
        <ProductCategories />
        <AudioDescription />
      </main>
    </>
  );
};

export default page;
