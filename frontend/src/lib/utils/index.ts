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

export const homepageReducer = (rawHomepage: any) => {
  let homepage = { ...rawHomepage.attributes };
  homepage.id = rawHomepage.id;

  return homepage;
};

export const aboutUsReducer = (rawAboutUs: any) => {
  let aboutUs = { ...rawAboutUs.attributes };
  aboutUs.id = rawAboutUs.id;

  return aboutUs;
};
