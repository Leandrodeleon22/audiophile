import Header from "@/components/Header";
import ProductCategories from "@/components/ProductCategories";
import SpeakerZx9 from "@/components/SpeakerZx9";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[110rem] w-full  mx-auto">
        <ProductCategories />
        <SpeakerZx9 />
      </main>
    </>
  );
}
