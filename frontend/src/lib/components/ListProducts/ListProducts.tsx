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
    <div className="w-full min-h-[33.438rem] shadow-md pb-5">
      <Tab.Group vertical>
        <div className="flex w-full justify-around">
          <Tab.List className="flex flex-col w-1/4 h-full space-y-1 rounded-sm text-dark-blue   p-1">
            {productCategories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`outline-none
                     border-b-2 group border-dark-gray/20 hover:bg-dark-blue flex items-center gap-5 w-56 h-14 rounded-sm px-6 py-3 text-sm font-medium leading-5 hover:text-white`}
                >
                  <h3 className="text-dark-blue group-hover:text-white font-normal text-sm">
                    {category.name}
                  </h3>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full w-3/4 px-16">
            {productCategories.map((category) => (
              <Tab.Panel key={category.id}>
                <div className="flex flex-col items-center">
                  <h2 className="text-base font-normal text-dark-blue">
                    {category.name}
                  </h2>
                  <p className="text-[#5a5a5a] text-[10px] font-light text-center">
                    {category.description}
                  </p>
                </div>
                <div className="w-full h-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-5">
                  {products
                    .filter(
                      (product) =>
                        category.name === product.product_category?.name
                    )
                    .map((product) => (
                      <div
                        data-aos="zoom-in"
                        key={product.id}
                        className="px-4 py-2 my-3 border-[0.5px] border-dark-gray/10 shadow-sm h-72 rounded-md hover:bg-gray-100"
                      >
                        <div className="w-full h-full space-y-2">
                          <div className="h-1/2">
                            <Image
                              className="h-full w-full rounded-md object-cover"
                              src={product.image.data?.attributes.url}
                              alt={
                                product.image.data?.attributes.alternativeText
                              }
                              width={product.image.data?.attributes.width}
                              height={product.image.data?.attributes.height}
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h3 className="text-xs font-medium leading-5 text-[#565656]">
                              {product.name}
                            </h3>
                            <p className="text-[10px] font-light  text-[#565656]">
                              {product.description?.slice(0, 100) + "..."}
                            </p>
                            <Link
                              className="self-end w-1/2 px-2 py-2 bg-blue rounded-md text-center text-white text-[8px]"
                              href={`/products/${product.slug}`}
                            >
                              Zobacz więcej
                            </Link>
                          </div>
                        </div>
                      </div>
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
