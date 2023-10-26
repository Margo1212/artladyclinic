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

export const aboutServices = (rawAboutService: any) => {
  let aboutService = { ...rawAboutService.attributes };
  aboutService.id = rawAboutService.id;

  return aboutService;
};

export const contactReducer = (rawContact: any) => {
  let contact = { ...rawContact.attributes };
  contact.id = rawContact.id;

  return contact;
};

export const newsReducer = (rawNews: any) => {
  let news = { ...rawNews.attributes };
  news.id = rawNews.id;

  return news;
};

export const productsCategoryReducer = (rawProductsCategory: any) => {
  let productsCategory = { ...rawProductsCategory.attributes };
  productsCategory.id = rawProductsCategory.id;

  return productsCategory;
};

export const productsReducer = (rawProducts: any) => {
  let products = { ...rawProducts.attributes };
  products.id = rawProducts.id;
  products.productsCategory = productsCategoryReducer(
    products.productsCategory.data
  );
  return products;
};
