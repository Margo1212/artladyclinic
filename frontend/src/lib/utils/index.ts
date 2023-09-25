import { Category } from "types/types";

export const categoryReducer = (rawCategory: any) => {
  let category = { ...rawCategory.attributes };
  category.id = rawCategory.id;

  return category;
};

export const serviceReducer = (rawService: any) => {
  let service = { ...rawService.attributes };
  service.id = rawService.id;

  service.category = categoryReducer(service.category.data);

  return service;
};
