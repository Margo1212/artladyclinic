export type Category = {
  id: string;
  description?: string;
  name: string;
  services: Service[];
  slug: string;
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
