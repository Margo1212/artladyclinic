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
  price: number;
  slug: string;
  application: any;
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

export type New = {
  id: string;
  title: string;
  description: string;
  date: number;
  image: any;
  slug: string;
};

export type NewsList = {
  news: New[];
};

export type ServiceList = Service[];

export type Employee = {
  id: string;
  name: string;
  description: string;
  image: { data: Media };
};

export type Question = {
  id: string;
  question: string;
  answer: string;
};

export type Hour = {
  id: string;
  from: string;
  day: string;
  to: string;
};

export type MediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
};

export type Media = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: MediaFormat;
      small: MediaFormat;
      medium: MediaFormat;
      large: MediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type Review = {
  id: string;
  image?: { data: Media };
  name: string;
  description: string;
  who?: string;
  star: number;
};
