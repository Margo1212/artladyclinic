"use client";

import { Category, Service } from "types/types";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { ComponentPropsWithRef, Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export type CategoryList = Category[];

type ListServicesProps = ComponentPropsWithRef<"div"> & {
  categories: Category[];
  services: Service[];
};

export function ListServices(props: ListServicesProps) {
  const { categories, services } = props;

  if (!categories) return <p>No profile data</p>;

  return (
    <div className="w-full tablet:h-[33.438rem] bg-white">
      <Tab.Group vertical>
        <div className="grid grid-cols-4 h-full w-full">
          <Tab.List className="flex col-span-1 flex-col laptop:w-full tablet:h-full tablet:space-y-1 rounded-sm text-dark-blue p-2 overflow-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-track-white scrollbar-thumb-dark-blue">
            {categories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`
                   group transition ease-in-out duration-200 hover:bg-dark-blue border-b-2 tablet:text-left border-dark-gray/20  tablet:justify-start grid  grid-cols-4 tablet:w-full outline-none h-14 rounded-sm px-2 py-2 text-sm font-normal leading-5`}
                >
                  <span className="hidden col-span-1 w-full h-full group-hover:invert group-hover:brightness-0 tablet:flex  justify-center items-center ">
                    <Image
                      className={`object-cover fill-none `}
                      src={category.icon.data?.attributes.url}
                      alt={category.icon.data?.attributes.alternativeText}
                      width={category.icon.data?.attributes.width}
                      height={category.icon.data?.attributes.height}
                    />
                  </span>

                  <p className="text-dark-blue col-span-3 self-center group-hover:text-white  tablet:text-left font-medium text-[11px]">
                    {category.name}
                  </p>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full w-full  col-span-3 overflow-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-track-white scrollbar-thumb-dark-blue">
            {categories.map((category) => (
              <Tab.Panel
                key={category.id}
                className={`${classNames(
                  "rounded-sm bg-white",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )} py-6 px-7 h-full w-full`}
              >
                <div className="flex flex-col items-center space-y-5">
                  <h2 className="text-base font-normal text-dark-blue">
                    {category.name}
                  </h2>
                  <p className="text-[#5a5a5a] text-[10px] font-light text-center">
                    {category.description}
                  </p>
                </div>
                <ul className="flex flex-col w-full ">
                  {services
                    .filter(
                      (service) => category.name === service.category?.name
                    )
                    .map((service) => (
                      <li
                        key={service.id}
                        className="px-4 py-2 my-3 border-[0.5px] border-dark-gray/10 shadow-sm h-auto w-full rounded-sm  hover:bg-gray-100"
                      >
                        <Link
                          className={classNames(
                            "inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
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
                      </li>
                    ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
