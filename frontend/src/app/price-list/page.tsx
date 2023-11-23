import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import { getCategories } from "@lib/data/categories";
import { getServices } from "@lib/data/services";
import { PriceListImage } from "@lib/assets/svg/PriceListImage";
import { AccordionComponent } from "@lib/components/AccordionComponent/AccordionComponent";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic | Cennik",
  description:
    "Sprawdź nasz aktualny cennik usług kosmetycznych. Oferujemy konkurencyjne ceny dla szerokiej gamy zabiegów, dostosowanych do Twoich potrzeb. Jakość bez kompromisów dostępna teraz w przystępnych cenach.",
};

export default async function Page() {
  const categoriesData = getCategories();
  const servicesData = getServices();

  const [categories, services] = await Promise.all([
    categoriesData,
    servicesData,
  ]);
  return (
    <section className="relative h-full flex flex-col items-center px-3 py-4 laptop:py-14 laptop:px-20 bg-white overflow-clip">
      <PriceListImage position="up" />
      <PriceListImage position="down" />
      <Title>Cennik</Title>
      {categories ? (
        <AccordionComponent
          withPrice={true}
          services={services}
          categories={categories}
        />
      ) : (
        <h2>No services founded...</h2>
      )}
    </section>
  );
}
