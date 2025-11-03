import CategoryScrollContainer from "@/components/CategoryScrollContainer";
import Card from "@/components/ui/Card";
import { products } from "@/lib/constants";
export default function Home() {
  return (
    <main className="h-[200dvh]">
      <section className="mt-14 flex flex-col items-center gap-2">
        <h1 className="text-7xl font-semibold tracking-tight text-center">
          #1 <span className="text-orange-500 ">Expat Marketplace </span>
          in Russia
        </h1>

        <h2 className="text-slate-500 text-2xl mt-2">
          Buy, sell, and discover amazing items from fellow expats.
        </h2>
        <h2 className="text-slate-500 text-2xl">
          Connect with trusted vendors and find the services you need.
        </h2>
        <div className="md:w-[85%]">
          <CategoryScrollContainer />
        </div>
      </section>

      {/* 4 x 3 grid */}
      <section
        id="listings"
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20"
      >
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
