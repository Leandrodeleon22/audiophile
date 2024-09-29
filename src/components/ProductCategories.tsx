import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ProductCategories = () => {
  const productCategories = [
    {
      id: 1,
      name: "headphones",
      link: "/",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
      id: 2,
      name: "speakers",
      link: "/",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
      id: 3,
      name: "earphones",
      link: "/",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    },
  ];

  return (
    <section className="flex justify-between mt-[20rem] mb-[12rem] ">
      {productCategories.map((category) => (
        <div
          key={category.id}
          className="w-[35rem] flex flex-col items-center h-[20.4rem] justify-center bg-[#f1f1f1] rounded-[8px]  "
        >
          <Image
            src={category.image}
            width={200}
            height={100}
            alt="headphones"
            className="absolute  -translate-y-[7rem]"
          />
          <p className="text-[1.8rem] uppercase font-bold tracking-[1.29px] mt-48 mb-[1rem]">
            {category.name}
          </p>
          <div className="opacity-50 font-bold text-[1.3rem] tracking-[1px] leading-[auto] flex items-center  mb-[1.75rem]  ">
            <button className="mr-[10px]">SHOP</button>
            <FaChevronRight className="text-[var(--orange-main)] text-[16px]" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategories;
