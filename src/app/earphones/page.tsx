import React from "react";
import HeaderSimple from "@/components/HeaderSimple";
import ProductCategories from "@/components/ProductCategories";
import AudioDescription from "@/components/AudioDescription";
import ZX9speaker from "@/components/ZX9speaker";
import ZX7speaker from "@/components/ZX7speaker";
import YX1earphone from "@/components/YX1earphone";
const page = () => {
  const title = "earphones";

  return (
    <>
      <HeaderSimple title={title} />

      <main className="max-w-[110rem] w-full  mx-auto">
        <YX1earphone />
        <ProductCategories />
        <AudioDescription />
      </main>
    </>
  );
};

export default page;
