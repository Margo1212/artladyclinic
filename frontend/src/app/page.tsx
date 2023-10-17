import { getCategories } from "@lib/data/categories";
import { ListServices } from "@components/ListServices/ListServices";
import { getServices } from "@lib/data/services";
import { Suspense } from "react";

export const revalidate = 10;

export default async function Home() {
  const categoriesData = getCategories();
  const servicesData = getServices();

  const [categories, services] = await Promise.all([
    categoriesData,
    servicesData,
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container bg-[#f8f8f8] px-14">
          <div className="w-full h-[536px] bg-gradient-to-b from-[#0E0045] to-[#36357E]">
            <h1></h1>
          </div>
        </div>
        <ListServices categories={categories} services={services} />
      </Suspense>
    </>
  );
}
