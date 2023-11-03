"use client";

import { Category, Service } from "types/types";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export type CategoryList = Category[];

type ListServicesProps = {
  categories: Category[];
  services: Service[];
};

export function ListServices(props: ListServicesProps) {
  const { categories, services } = props;

  if (!categories) return <p>No profile data</p>;
  console.log(categories);
  return (
    <div className="w-full h-[33.438rem]">
      <Tab.Group vertical>
        <div className="flex tablet:flex-row flex-col w-full">
          <Tab.List className="flex tablet:flex-col w-full flex-wrap tablet:flex-nowrap laptop:w-1/4 h-full tablet:space-y-1 rounded-sm text-dark-blue   p-1">
            {categories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`${(selected: any) =>
                    classNames(
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected ? "bg-blue shadow" : "text-blue-100 "
                    )}  border-b-2 w-1/3 text-center tablet:text-left border-dark-gray/20 hover:border-y-dark-blue flex tablet:justify-start justify-center items-center gap-5 tablet:w-56 h-14 rounded-sm px-4 py-2 text-sm font-medium leading-5 hover:text-#36357E`}
                >
                  <span className="hidden w-1/5 h-full tablet:flex  justify-center items-center ">
                    <Image
                      className={`object-cover`}
                      src={category.icon.data?.attributes.url}
                      alt={category.icon.data?.attributes.alternativeText}
                      width={category.icon.data?.attributes.width}
                      height={category.icon.data?.attributes.height}
                    />
                  </span>

                  <h3 className="text-dark-blue text-center tablet:text-left font-medium text-xs">
                    {category.name}
                  </h3>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 laptop:w-3/4">
            {categories.map((category) => (
              <Tab.Panel
                key={category.id}
                className={`${classNames(
                  "rounded-sm bg-white",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )} p-6`}
              >
                <div className="flex flex-col items-center space-y-5">
                  <h2 className="text-base font-normal text-dark-blue">
                    {category.name}
                  </h2>
                  <p className="text-[#5a5a5a] text-[10px] font-light text-center">
                    {category.description}
                  </p>
                </div>
                <ul className="flex flex-col">
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
                              {service.description}
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
