import CategoryScrollContainer from "@/components/CategoryScrollContainer";

export default function Home() {
  return (
    <div>
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
        <div className="md:w-[70%]">
          <CategoryScrollContainer />
        </div>
      </section>
    </div>
  );
}
