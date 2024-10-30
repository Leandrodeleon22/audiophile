import AudioDescription from "@/components/AudioDescription";
import HeaderSimple from "@/components/HeaderSimple";
import ProductCategories from "@/components/ProductCategories";
import ProductHeadphones from "@/components/ProductDescription";
import XX99MARK1headphone from "@/components/XX99MARK1headphone";
import XX99MARK2headphone from "@/components/XX99MARK2headphone";

import React from "react";

const page = () => {
  const title = "Headphones";

  return (
    <>
      <HeaderSimple title={title} />

      <main className="max-w-[110rem] w-full  mx-auto">
        <XX99MARK2headphone />
        <XX99MARK1headphone />
        <ProductCategories />
        <AudioDescription />
      </main>
    </>
  );
};

export default page;
