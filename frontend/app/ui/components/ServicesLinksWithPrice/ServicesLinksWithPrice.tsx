import { Service } from "@lib/types/types";
import Link from "next/link";
import { Price } from "../Price/Price";

export type ServicesLinksWithPrice = {
  service: Service;
};

export const ServicesLinksWithPrice = ({ service }: ServicesLinksWithPrice) => {
  return (
    <>
      <div className="mr-3 w-full">
        <Link
          aria-label="Link to services details"
          href={`/services/${service.slug}`}
        >
          <p className="font-normal text-lg text-dark-gray/90">
            {service.name}
          </p>
        </Link>
      </div>

      <Price oldPriceTextSize="sm" newPriceTextSize="lg" data={service} />
    </>
  );
};
