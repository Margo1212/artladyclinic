"use client";

import { Category, Service } from "types/types";

import { Tab } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

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

  return (
    <div className="w-full h-full">
      <Tab.Group vertical>
        <div className="flex w-full">
          <Tab.List className="flex flex-col w-1/4 h-full space-y-1 rounded-xl bg-blue-900/20 p-1">
            {categories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`${(selected: any) =>
                    classNames(
                      " rounded-lg text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )}`}
                >
                  {category.name}
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 w-3/4">
            {categories.map((category) => (
              <Tab.Panel
                key={category.id}
                className={`${classNames(
                  "rounded-xl bg-white",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}`}
              >
                <ul>
                  {services
                    .filter(
                      (service) => category.name === service.category?.name
                    )
                    .map((service) => (
                      <li
                        key={service.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <Link
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                          href={`/services/${service.slug}`}
                        >
                          <h3 className="text-sm font-medium leading-5">
                            {service.name}
                          </h3>
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
