export type Category = {
  id: string;
  description?: string;
  name: string;
  services: Service[];
  slug: string;
  icon: Icon;
};

export type Icon = {
  data: any;
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
  image: string;
  slug: string;
  category?: Category;
};

export type ServiceList = Service[];
