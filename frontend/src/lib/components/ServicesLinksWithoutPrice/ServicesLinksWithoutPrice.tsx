import Link from "next/link";
import { Service } from "types/types";

export type ServicesLinksWithoutPrice = {
  service: Service;
};

export const ServicesLinksWithoutPrice = ({
  service,
}: ServicesLinksWithoutPrice) => {
  return (
    <li className="p-4 border-[0.5px] list-none border-dark-gray/10 shadow-sm h-auto w-full rounded-sm  hover:bg-gray-100">
      <Link
        aria-label="Link to services details"
        href={`/services/${service.slug}`}
      >
        <div className="">
          <h3 className="text-sm font-medium leading-5 text-[#383838]">
            {service.name}
          </h3>
          <p className="text-[10px] font-light leading-5 text-[#565656]">
            {service.description?.length >= 250
              ? service.description.substring(0, 250) + "..."
              : service.description}
          </p>
        </div>
      </Link>
    </li>
  );
};
