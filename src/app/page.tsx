import Header from "@/components/Header";
import ProductCategories from "@/components/ProductCategories";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[110rem] w-full  mx-auto">
        <ProductCategories />
      </main>
    </>
  );
}
