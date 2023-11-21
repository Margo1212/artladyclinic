"use client";

import { Category, Service } from "types/types";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { ComponentPropsWithRef, Fragment } from "react";

export type CategoryList = Category[];

type ListServicesProps = ComponentPropsWithRef<"div"> & {
  categories: Category[];
  services: Service[];
};

export function ListServices(props: ListServicesProps) {
  const { categories, services } = props;

  if (!categories) return <p>No profile data</p>;

  return (
    <div className="w-full tablet:h-[33.438rem] bg-white shadow-lg">
      <Tab.Group vertical>
        <div className="grid grid-cols-4 h-full w-full">
          <Tab.List className="flex col-span-1 flex-col laptop:w-full tablet:h-full tablet:space-y-1 rounded-sm text-dark-blue p-2 overflow-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-track-white scrollbar-thumb-dark-blue">
            {categories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`
                   group transition ease-in-out duration-200 focus:bg-dark-blue hover:bg-dark-blue border-b-2 tablet:text-left border-dark-gray/20  tablet:justify-start grid  grid-cols-4 tablet:w-full outline-none h-14 rounded-sm px-2 py-2 text-sm font-normal leading-5`}
                >
                  <span className="hidden col-span-1 w-full h-full group-focus:invert group-focus:brightness-0 group-hover:invert group-hover:brightness-0 tablet:flex  justify-center items-center ">
                    <Image
                      className={`object-cover fill-none `}
                      src={category.icon.data?.attributes.url}
                      alt={category.icon.data?.attributes.alternativeText}
                      width={category.icon.data?.attributes.width}
                      height={category.icon.data?.attributes.height}
                    />
                  </span>

                  <p className="text-dark-blue col-span-3 self-center group-focus:text-white group-hover:text-white tablet:text-left font-medium text-[11px]">
                    {category.name}
                  </p>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full w-full py-2  col-span-3 overflow-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-track-white scrollbar-thumb-dark-blue">
            {categories.map((category) => (
              <Tab.Panel
                key={category.id}
                className="rounded-sm bg-white ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2py-6 px-7 h-full w-full"
              >
                <div className="flex flex-col items-center space-y-4">
                  <h2 className="text-lg font-normal text-dark-blue">
                    {category.name}
                  </h2>
                  <p className="text-[#5a5a5a] text-[10px] font-light text-center">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-col w-full ">
                  {services
                    .filter(
                      (service) => category.name === service.category?.name
                    )
                    .map((service) => (
                      <Link
                        key={service.id}
                        className="outline-none px-4 py-2 my-3 border-[0.5px] group shadow-sm hover:shadow-md hover:scale-[1] border-dark-gray/10  h-auto w-full rounded-sm"
                        href={`/services/${service.slug}`}
                      >
                        <div className="">
                          <h3 className="text-xs font-medium leading-5 text-[#565656]">
                            {service.name}
                          </h3>
                          <p className="text-[10px] font-light leading-5 text-[#565656]">
                            {service.description?.length >= 250
                              ? service.description.substring(0, 250) + "..."
                              : service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
