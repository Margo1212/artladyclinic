export type Category = {
  id: string;
  description?: string;
  name: string;
  services: Service[];
  slug: string;
  icon: Icon;
};
export type ProductCategory = {
  id: string;
  description?: string;
  name: string;
  products: Product[];
  slug: string;
};

export type Product = {
  id: string;
  description?: string;
  name: string;
  product_category: ProductCategory;
  image: any;
  price: string;
  slug: string;
  applicationRequirements: any;
  oldPrice: number;
};

export type Icon = {
  data: any;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
};

export type Img = {
  attributes: any;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  slug: string;
  category?: Category;
  application: any;
  oldPrice: number;
};

export type ServiceList = Service[];
