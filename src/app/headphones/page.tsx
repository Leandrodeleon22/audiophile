import AudioDescription from "@/components/AudioDescription";
import HeaderSimple from "@/components/HeaderSimple";
import ProductCategories from "@/components/ProductCategories";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  const title = "Headphones";
  return (
    <>
      <HeaderSimple title={title} />

      <main className="max-w-[110rem] w-full  mx-auto">
        <ProductCategories />
        <AudioDescription />
      </main>
    </>
  );
};

export default page;
