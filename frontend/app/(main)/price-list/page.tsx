import { getCategories } from "@lib/data/categories";
import { getServices } from "@lib/data/services";
import { PriceListImage } from "@ui/assets/svg/PriceListImage";
import { AccordionComponent } from "@ui/components/AccordionComponent/AccordionComponent";
import { Title } from "@ui/components/Title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Cennik",
  description:
    "Sprawdź nasz aktualny cennik usług kosmetycznych. Oferujemy konkurencyjne ceny dla szerokiej gamy zabiegów, dostosowanych do Twoich potrzeb. Jakość bez kompromisów dostępna teraz w przystępnych cenach.",
};

export default async function Page() {
  const categories = await getCategories().catch((err) => console.error(err));
  const services = await getServices().catch((err) => console.error(err));
  return (
    <section className="relative h-full flex flex-col items-center px-5 py-6 laptop:py-14 laptop:px-20 bg-white overflow-clip">
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
