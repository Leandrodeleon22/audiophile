import AudioDescription from "@/components/AudioDescription";
import HeaderSimple from "@/components/HeaderSimple";
import ProductCategories from "@/components/ProductCategories";
import ProductHeadphones from "@/components/ProductHeadphones";
import XX99MARK2headphone from "@/components/XX99MARK2headphone";

import React from "react";

const page = () => {
  const title = "Headphones";
  const XX99MARKII = [
    "New Product",
    "XX99 Mark II",
    "headphones",
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  ];

  return (
    <>
      <HeaderSimple title={title} />

      <main className="max-w-[110rem] w-full  mx-auto">
        {/* <XX99MARK2headphone />
         */}

        <ProductHeadphones
          newProduct={XX99MARKII[0]}
          version={XX99MARKII[1]}
          headphones={XX99MARKII[2]}
          description={XX99MARKII[3]}
        />
        <ProductCategories />
        <AudioDescription />
      </main>
    </>
  );
};

export default page;
