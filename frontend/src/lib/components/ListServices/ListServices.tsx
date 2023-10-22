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
  const [isHovering, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  if (!categories) return <p>No profile data</p>;
  console.log(categories);
  return (
    <div className="w-full h-[33.438rem]">
      <Tab.Group vertical>
        <div className="flex w-full">
          <Tab.List className="flex flex-col w-1/4 h-full space-y-1 rounded-sm text-dark-blue   p-1">
            {categories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={`${(selected: any) =>
                    classNames(
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected ? "bg-blue shadow" : "text-blue-100 "
                    )}  border-b-2 border-dark-gray/20 hover:border-y-dark-blue flex items-center gap-5 w-56 h-14 rounded-sm px-6 py-3 text-sm font-medium leading-5 hover:text-#36357E`}
                >
                  <span className="w-12 h-12 flex items-center ">
                    <Image
                      className={`object-cover`}
                      src={category.icon.data?.attributes.url}
                      alt={category.icon.data?.attributes.alternativeText}
                      width={category.icon.data?.attributes.width}
                      height={category.icon.data?.attributes.height}
                    />
                  </span>

                  <h3 className="text-dark-blue font-medium text-sm">
                    {category.name}
                  </h3>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 w-3/4">
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
                <ul className="flex flex-col  overflow-y-scroll">
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
