"use client";

import { Category, Product, ProductCategory, Service } from "types/types";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Title } from "../Title/Title";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export type CategoryList = Category[];

type ListProductsProps = {
  productCategories: ProductCategory[];
  products: Product[];
};

export function ListProducts(props: ListProductsProps) {
  const { products, productCategories } = props;

  if (!productCategories) return <p>No profile data</p>;
  console.log(productCategories);
  return (
    <div className="w-full h-[33.438rem] shadow-md">
      <Tab.Group vertical>
        <div className="flex w-full">
          <Tab.List className="flex flex-col h-full space-y-1 rounded-sm text-dark-blue   p-1">
            {productCategories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`${(selected: any) =>
                    classNames(
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected ? "bg-blue shadow" : "text-blue-100 "
                    )}  border-b-2 border-dark-gray/20 hover:border-y-dark-blue flex items-center gap-5 w-56 h-14 rounded-sm px-6 py-3 text-sm font-medium leading-5 hover:text-#36357E`}
                >
                  <h3 className="text-dark-blue font-medium text-sm">
                    {category.name}
                  </h3>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 px-24 space-y-5">
            {productCategories.map((category) => (
              <Tab.Panel
                key={category.id}
                className={`${classNames(
                  "rounded-sm",
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
                <ul className="flex gap-x-6">
                  {products
                    .filter(
                      (product) =>
                        category.name === product.product_category?.name
                    )
                    .map((product) => (
                      <li
                        key={product.id}
                        className="px-4 py-2 my-3 border-[0.5px] border-dark-gray/10 shadow-sm h-auto w-full rounded-sm  hover:bg-gray-100"
                      >
                        <Link
                          className={classNames(
                            "inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                          href={`/products/${product.slug}`}
                        >
                          <div className="">
                            <div>
                              <Image
                                className="w-full h-full object-cover"
                                src={product.image.data?.attributes.url}
                                alt={
                                  product.image.data?.attributes.alternativeText
                                }
                                width={product.image.data?.attributes.width}
                                height={product.image.data?.attributes.height}
                              />
                            </div>
                            <h3 className="text-xs font-medium leading-5 text-[#565656]">
                              {product.name}
                            </h3>
                            <p className="text-[10px] font-light leading-5 text-[#565656]">
                              {product.description}
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
