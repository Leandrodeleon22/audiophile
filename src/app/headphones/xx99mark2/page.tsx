import AudioDescription from "@/components/AudioDescription";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black min-h-[9.4rem]"></div>
      <div className="bg-white min-h-[9.45rem]"></div>
      <main className="max-w-[110rem] w-full  mx-auto">
        <AudioDescription />
      </main>
    </>
  );
};

export default page;
