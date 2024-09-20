import Image from "next/image";
import React from "react";

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
    <section className="flex justify-between my-[12rem] ">
      {productCategories.map((category) => (
        <div
          key={category.id}
          className="w-[35rem] flex flex-col items-center h-[20.4rem] justify-center bg-[#f1f1f1] rounded-[8px] "
        >
          <Image
            src={category.image}
            width={250}
            height={165}
            alt="headphones"
            className="absolute w-auto -translate-y-[6.5rem]"
          />
          <p className="text-[1.8rem] uppercase font-bold tracking-[1.29px]">
            {category.name}
          </p>
          <div>
            <button>SHOP</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategories;
