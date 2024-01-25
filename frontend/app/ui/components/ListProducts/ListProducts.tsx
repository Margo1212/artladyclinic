"use client";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"), {
  loading: () => <p>Loading...</p>,
});

import { Tab } from "@headlessui/react";
import { Category, Product, ProductCategory } from "@lib/types/types";
import { Fragment } from "react";
import { Button } from "../Button/Button";

export type CategoryList = Category[];

type ListProductsProps = {
  productCategories: ProductCategory[];
  products: Product[];
};

export function ListProducts(props: ListProductsProps) {
  const { products, productCategories } = props;

  if (!productCategories) return <p>No profile data</p>;

  return (
    <div className="w-full min-h-[33.438rem] bg-white shadow-md pb-5 mt-10 z-50">
      <Tab.Group vertical>
        <div className="flex flex-col laptop:flex-row bg-white w-full justify-around gap-5 laptop:gap-0">
          <Tab.List className="flex z-50  flex-col w-full laptop:w-1/4 h-full space-y-1 rounded-sm text-dark-blue   p-1">
            {productCategories.map((category) => (
              <Tab as={Fragment} key={category.id}>
                <button
                  className={`outline-none focus:bg-dark-blue
                     border-b-2 group border-dark-gray/20 transition ease-in-out duration-200 hover:bg-dark-blue flex items-center gap-5 w-full h-14 rounded-sm px-6 py-3 text-sm font-medium leading-5 hover:text-white`}
                >
                  <h3 className="text-dark-blue group-hover:text-white font-semibold text-md group-focus:invert group-focus:brightness-0">
                    {category.name}
                  </h3>
                </button>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="h-full w-full laptop:w-3/4 px-8 tablet:px-20 laptop:px-16">
            {productCategories.map((category) => (
              <Tab.Panel key={category.id}>
                <div className="flex flex-col items-center gap-y-3 mb-4">
                  <h2 className="text-lg font-normal text-dark-blue">
                    {category.name}
                  </h2>
                  <p className="text-[#5a5a5a] text-xs font-light text-center">
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
                        className="p-2 my-3 border-[0.5px] border-dark-gray/10 shadow-sm h-72 rounded-md hover:bg-gray-100"
                      >
                        <div className="w-full h-full flex flex-col  gap-y-2">
                          <Image
                            className="h-1/2 rounded-md object-cover"
                            src={product.image.data?.attributes.url}
                            alt={product.image.data?.attributes.alternativeText}
                            width={500}
                            height={500}
                          />

                          <div className="h-1/2 flex flex-col justify-between">
                            <h3 className="text-xs font-medium leading-5 text-[#565656]">
                              {product.name}
                            </h3>
                            <p className="text-[10px] font-light  text-[#565656]">
                              {product.description?.slice(0, 100) + "..."}
                            </p>

                            <Button
                              styles="px-2 py-2 self-end w-24 tablet:w-28 text-[9px]"
                              href={`/products/${product.slug}`}
                              bg="dark"
                              text="Zobacz więcej"
                            />
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
