import "./../styles/globals.css";

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
  console.log(services);

  return (
    <>
      <div>Artladyclinic</div>
      <Suspense fallback={<div>Loading...</div>}>
        <ListServices categories={categories} services={services} />
      </Suspense>
    </>
  );
}
